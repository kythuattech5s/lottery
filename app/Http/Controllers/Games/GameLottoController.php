<?php

namespace App\Http\Controllers\Games;

use App\Games\Lotto\Categories\TypeCategoryProvider;
use App\Games\Plinko\Enums\Bag;
use App\Games\Plinko\Enums\BallType;
use App\Games\Plinko\Prize;
use App\Models\Games\Lotto\GameLottoCategory;
use App\Models\Games\Lotto\GameLottoType;
use App\Models\Games\Plinko\GamePlinkoPath;
use App\Models\Games\Plinko\GamePlinkoRecord;
use App\Models\Games\Plinko\GamePlinkoType;
use App\Models\Games\Plinko\GamePlinkoUserBet;
use App\Models\Games\Plinko\GamePlinkoUserBetDetail;
use Str;

class GameLottoController extends BaseGameController
{
    public function index($request)
    {
        $showBaseLoading = false;
        $user = \Auth::user();
        $categories = GameLottoCategory::select('name', 'id')->act()->get();
        $types = GameLottoType::select('code', 'choose_min', 'choose_max', 'bet', 'win', 'min_bet')->act()->get()->keyBy('code');
        return view('games.lotto.index', compact('user', 'showBaseLoading', 'categories', 'types'));
    }
    public function getGameContent($request)
    {
        $type = (int)$request->input('typeGame', 0);
        if ($type == 0) return;
        $category = GameLottoCategory::act()->find($type);
        $typeGame = TypeCategoryProvider::getTypeGame($category);
        if (!$typeGame) return;

        return $typeGame->toJson();
    }
}