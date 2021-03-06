<?php
namespace App\Games\GoWin\MiniGames;
use App\Games\GoWin\Contracts\GoWinMiniGameInterface;
class Color extends MiniGame implements GoWinMiniGameInterface
{
    public $miniGameName = 'color';
    public $miniGamePreviewName = 'Màu sắc';
    public $validValue = ['green','violet','red'];
    public $valueNameMap = ['green'=>'Xanh','violet'=>'Tím','red'=>'Đỏ'];
    protected $colorNumberMap = [
        'green' => [1,3,5,7,9],
        'violet' => [0,5],
        'red' => [0,2,4,6,8]
    ];
    protected $colorHistoryPreview = [
        0 => ['red','violet'],
        1 => ['green'],
        2 => ['red'],
        3 => ['green'],
        4 => ['red'],
        5 => ['green','violet'],
        6 => ['red'],
        7 => ['green'],
        8 => ['red'],
        9 => ['green'],
    ];
    public static function getColorMultiple()
    {
        $colorMultiple = [
            'green'  => (float)\SettingHelper::getSetting('wingo_percent_color_green_refund',1),
            'violet' => (float)\SettingHelper::getSetting('wingo_percent_color_violet_refund',1),
            'red'    => (float)\SettingHelper::getSetting('wingo_percent_color_red_refund',1)
        ];
        return $colorMultiple;
    }
    public function isWin($number)
    {
        return in_array($number,$this->colorNumberMap[$this->value] ?? []);
    }
    public function calculationAmountWin($number,$amountBet)
    {
        $colorMultiple = self::getColorMultiple();
        return $amountBet*($colorMultiple[$this->value] ?? 0);
    }
    public function getHistoryHtml($winNumber)
    {
        $winNumber = (int)$winNumber;
        if (!isset($this->colorHistoryPreview[$winNumber])) {
            return '';
        }
        $strRet = '';
        foreach ($this->colorHistoryPreview[$winNumber] as $itemColor) {
            $strRet.= vsprintf('<span class="li %s"></span>',[$itemColor]);
        }
        return $strRet;
    }
    public function getUserBetHistoryHtml()
    {
        return vsprintf('<div class="select select-%s"></div>',[$this->value]);
    }
}