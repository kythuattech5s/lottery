<?php

namespace App\Games\Lotto\Base\Generators;

use App\Games\Lotto\Base\Abstracts\ALottoable;
use App\Games\Lotto\Enums\NoPrize;
use App\Games\Lotto\Generators\CommonRandom;
use App\Games\Lotto\Generators\RandomBaCang;
use App\Games\Lotto\Generators\RandomBonCang;
use App\Games\Lotto\Generators\RandomDe;
use App\Games\Lotto\Generators\RandomGiai7;
use App\Games\Lotto\PrizeOneGame;

abstract class BaseMBGenerator extends ALottoable
{
    protected $includeTwoNumbers;
    protected $excludeTwoNumbers;

    protected $gameGiaiBays = [];
    protected $gameDe;
    protected $gameDeBaCangs;

    protected $gameLoBaCangs;

    protected $gameDeBonCangs;

    protected $gameLoBonCangs;

    protected $commonRandom;
    protected $currentGameRecord;
    public function __construct($currentGameRecord, $maxAppearIncludeNumbers, $includeTwoNumbers, $excludeTwoNumbers)
    {
        parent::__construct();
        $this->currentGameRecord = $currentGameRecord;
        $this->excludeTwoNumbers = $excludeTwoNumbers;
        $this->includeTwoNumbers = $includeTwoNumbers;
        $this->commonRandom = new CommonRandom($maxAppearIncludeNumbers, $this->includeTwoNumbers, $this->excludeTwoNumbers);
    }

    public function setGameGiaiBay(PrizeOneGame $game)
    {
        $this->gameGiaiBays = $game;
    }


    public function setGameDe(PrizeOneGame $game)
    {
        $this->gameDe =  $game;
    }
    public function setGameDeBaCang(PrizeOneGame $game)
    {
        $this->gameDeBaCangs =  $game;
    }

    public function setGameDeBonCang(PrizeOneGame $game)
    {
        $this->gameDeBonCangs =  $game;
    }

    public function setGameLoBaCang(PrizeOneGame $game)
    {
        $this->gameLoBaCangs =  $game;
    }

    public function setGameLoBonCang(PrizeOneGame $game)
    {
        $this->gameLoBonCangs =  $game;
    }

    public function generate()
    {

        $currentGameRecordId = $this->currentGameRecord->id;
        $count = $this->gameLottoProvider->getGameTableResult()::where('game_lotto_play_record_id', $currentGameRecordId)->count();
        if ($count > 0) return;
        $table = [];
        $table[NoPrize::DAC_BIET] = [$this->generateDacBiet()];

        $table[NoPrize::BAY] = $this->generateGiai7();
        $other = $this->generateGiaiKhac();
        $table = $table + $other;
        // dd($table, $other);
        foreach ($table as $key => $row) {
            foreach ($row as $col) {
                $CLASS_GAME_TABLE_RESULT = $this->gameLottoProvider->getGameTableResult();
                $item = new $CLASS_GAME_TABLE_RESULT();
                $item->game_lotto_play_record_id = $currentGameRecordId;
                $item->type_prize = $key;
                $item->value = $col;
                $item->created_at = now();
                $item->updated_at = now();
                $item->save();
            }
        }
    }

    protected function generateDacBiet()
    {
        $randomDe = new RandomDe($this->commonRandom, $this->gameDe);
        $num = $randomDe->random();

        $randomBaCang = new RandomBaCang($this->commonRandom, $this->gameDeBaCangs);
        $num = $randomBaCang->random($num);

        $randomBonCang = new RandomBonCang($this->commonRandom, $this->gameDeBonCangs);
        $num = $randomBonCang->random($num);


        if ($num < 0) {
            $rands = $this->commonRandom->randomNumber();
            $num = $rands[0];
        }

        while (strlen($num) < 5) {
            $num = rand(0, 9) . $num;
        }
        return $num;
    }

    protected function generateGiai7()
    {
        $randomGiai7 = new RandomGiai7($this->commonRandom, $this->gameGiaiBays);
        $num = $randomGiai7->random();
        if ($num < 0) {
            $rands = $this->commonRandom->randomNumber();
            $num = $rands[0];
        }
        $results = [];
        $results = array_merge($results, [$num]);
        for ($i = 0; $i < 3; $i++) {
            $tmps = $this->commonRandom->randomNumber();
            $results = array_merge($results, $tmps);
        }
        shuffle($results);
        return $results;
    }

    protected function generateGiaiKhac()
    {

        $ins = $this->commonRandom->getIncludeTwoNumbers();
        $exs = $this->commonRandom->getExcludeTwoNumbers();
        $maxAppears = $this->commonRandom->getMaxAppearNumbers();
        $results = [
            NoPrize::NHAT => [],
            NoPrize::NHI => [],
            NoPrize::BA => [],
            NoPrize::BON => [],
            NoPrize::NAM => [],
            NoPrize::SAU => []
        ];
        $giais = [
            NoPrize::NHAT => 1,
            NoPrize::NHI => 2,
            NoPrize::BA => 6,
            NoPrize::BON => 4,
            NoPrize::NAM => 6,
            NoPrize::SAU => 3
        ];
        for ($i = 0; $i < 22; $i++) {
            if (count($ins) > 0) {
                $num = $this->getRandomNumberInclude($ins, $maxAppears);
            } else {
                $num = $this->getRandomNumberNotInExclude($exs);
            }

            $keygiai = $this->getRandomGiai($giais);
            $num = $this->randomFullNumber($keygiai, $num);
            array_push($results[$keygiai], $num);
        }
        return $results;
    }
    protected function randomFullNumber($keygiai, $num)
    {
        $nonum = $this->getNoNumByGiai($keygiai) - 2;
        for ($j = 0; $j < $nonum; $j++) {
            $num = rand(0, 9) . $num;
        }
        return $num;
    }
    protected function getRandomGiai(&$giais)
    {
        $keygiai = array_rand($giais);
        $giais[$keygiai]--;
        if ($giais[$keygiai] <= 0) {
            unset($giais[$keygiai]);
        }
        return $keygiai;
    }
    protected function getRandomNumberNotInExclude($exs)
    {
        do {
            $tmp = rand(0, 99);
            $tmp = $tmp < 10 ? '0' . $tmp : '' . $tmp;
        } while (in_array($tmp, $exs));
        $num = $tmp;
        return $num;
    }
    protected function getRandomNumberInclude(&$ins, &$maxAppear)
    {
        $key = array_rand($ins);
        $num = $ins[$key];
        $maxAppear[$num]--;
        if ($maxAppear[$num] <= 0) {
            unset($ins[$key]);
            unset($maxAppear[$num]);
        }
        return $num;
    }
    protected function getNoNumByGiai($key)
    {
        $giais = [
            NoPrize::NHAT => 5,
            NoPrize::NHI => 5,
            NoPrize::BA => 5,
            NoPrize::BON => 4,
            NoPrize::NAM => 4,
            NoPrize::SAU => 3
        ];
        if (array_key_exists($key, $giais)) {
            return $giais[$key];
        }
        return 0;
    }
}
