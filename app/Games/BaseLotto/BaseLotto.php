<?php

namespace App\Games\BaseLotto;

abstract class BaseLotto
{

    abstract function getGamePlayType();
    abstract function getGameRecord();
    abstract function getGameTableResult();
    abstract function getGameUserBet();
    abstract function getGenerator();
    abstract function getConfig();
}
