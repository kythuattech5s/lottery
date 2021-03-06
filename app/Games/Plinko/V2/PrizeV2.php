<?php

namespace App\Games\Plinko\V2;

use App\Games\Plinko\Enums\Bag;
use App\Games\Plinko\Enums\BallType;
use App\Models\Games\Plinko\GamePlinkoPath;
use App\Models\Games\Plinko\GamePlinkoRecord;
use App\Models\Games\Plinko\GamePlinkoTotalBet;
use App\Models\Games\Plinko\GamePlinkoUserBet;
use App\Models\Games\Plinko\GamePlinkoUserBetDetail;
use \vanhenry\helpers\helpers\SettingHelper as Setting;

class PrizeV2
{
    private $prizeBagCollection;
    public function __construct()
    {
        $this->prizeBagCollection = new PrizeBagCollection();
    }

    public function calculate($currentGameRecordId = 0)
    {
        $this->calculateTotalBets($currentGameRecordId);
        $this->prizeBagCollection->generate();
        $prizeBags = $this->prizeBagCollection->getPrizeBags();
        $sum = $this->prizeBagCollection->getSum();


        $gameRecordPrizeId = $this->getNextGameRecord($currentGameRecordId);

        $ballTypes = BallType::getConstList();
        foreach ($ballTypes as $ballType) {
            $bet = GamePlinkoTotalBet::select('total_bet', 'total_prize')->where('type', $ballType)->where('game_plinko_record_id', $currentGameRecordId)->first();
            $totalPrize = $bet ? $bet->total_prize : 0;
            $prizeDevider = new PrizeDevider($prizeBags, $sum);
            $prizeDevider->devidePrizeMoney($ballType, $totalPrize);
            $prizeDevider->generateBetDetails($ballType, $gameRecordPrizeId);
        }
    }
    private function getNextGameRecord($currentGameRecordId)
    {
        $record = GamePlinkoRecord::select('id')->where('id', '>', $currentGameRecordId)->limit(1)->first();
        if ($record) {
            return $record->id;
        }
        return 0;
    }
    private function calculateTotalBets($currentGameRecordId = 0)
    {
        $totalbet = GamePlinkoUserBet::select('type', \DB::raw("SUM(amount) as sum"))
            ->where('game_plinko_record_id', $currentGameRecordId)
            ->where('is_returned', 1)
            ->where('is_marketing', 0)
            ->groupBy('type')->get()->keyBy('type')->toArray();
        $percent = Setting::getSetting('plinko_percent_prize', 80);
        $ballTypes = BallType::getConstList();
        foreach ($ballTypes as $ballType) {
            $total = array_key_exists($ballType, $totalbet) ? $totalbet[$ballType]['sum'] : 0;
            $prize = $total * $percent / 100;
            $gamePlinkoTotalBet = new GamePlinkoTotalBet;
            $gamePlinkoTotalBet->game_plinko_record_id = $currentGameRecordId;
            $gamePlinkoTotalBet->total_bet = $total;
            $gamePlinkoTotalBet->total_prize = $prize;
            $gamePlinkoTotalBet->type = $ballType;
            $gamePlinkoTotalBet->created_at = now();
            $gamePlinkoTotalBet->updated_at = now();
            $gamePlinkoTotalBet->save();
        }
    }
}
