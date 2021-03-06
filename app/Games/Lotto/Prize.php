<?php

namespace App\Games\Lotto;


class Prize
{
    protected $currentGameRecord;
    public function __construct($currentGameRecord)
    {
        $this->currentGameRecord  = $currentGameRecord;
    }
    public function calculate()
    {
        $prizeGameCollection = new PrizeGameCollection($this->currentGameRecord);
        $prizeGameCollection->generate();
        $prizeGameCollection->calculate();
    }
}
