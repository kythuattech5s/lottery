<?php
namespace App\Models\Games\Win;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\BaseModel;
class GameWinType extends BaseModel
{
    use HasFactory;
    public function gameWinRecord()
    {
        return $this->hasMany(GameWinRecord::class);
    }
    public function getCurrentGameRecord()
    {
        $nowTimeStamp = now()->timestamp;
        return GameWinRecord::where('game_win_type_id',$this->id)
                            ->where('start_time','<=',$nowTimeStamp)
                            ->where('end_time','>',$nowTimeStamp)
                            ->first();
    }
    public function renderGameRecord()
    {
        $now = now();
        $day = $now->day;
        $month = $now->month;
        $year = $now->year;
        $itemRecordExist = GameWinRecord::where('day',$day)
                            ->where('month',$month)
                            ->where('year',$year)
                            ->where('game_win_type_id',$this->id)
                            ->first();
        if (!isset($itemRecordExist)) {
            $this->_renderGameRecord($now);
        }
        $tomorrow = now()->addDays(1);
        $tomorrowDay = $tomorrow->day;
        $tomorrowMonth = $tomorrow->month;
        $tomorrowYear = $tomorrow->year;
        $itemTomorrowRecordExist = GameWinRecord::where('day',$tomorrowDay)
                            ->where('month',$tomorrowMonth)
                            ->where('year',$tomorrowYear)
                            ->where('game_win_type_id',$this->id)
                            ->first();
        if (!isset($itemTomorrowRecordExist)) {
            $this->_renderGameRecord($tomorrow);
        }
    }
    public function _renderGameRecord($timeAnchor)
    {
        $currentMinuteRange = $this->seconds/60;
        $day = $timeAnchor->day;
        $month = $timeAnchor->month;
        $year = $timeAnchor->year;
        $timeStampStart = $timeAnchor->startOfDay()->timestamp;
        $count = 1;
        $dataInsert = [];
        for ($i = 0; $i < 24; $i++) {
            for ($j = 0; $j < 60; $j++) {
                if (($i*60 + $j)%$currentMinuteRange == 0) {
                    $dataAdd = [];
                    $dataAdd['id'] = (int)($year.$timeAnchor->format('m').$timeAnchor->format('d').$this->id.sprintf('%s%04s','',$count));
                    $dataAdd['day'] = $day;
                    $dataAdd['month'] = $month;
                    $dataAdd['year'] = $year;
                    $dataAdd['minute'] = $j;
                    $dataAdd['hour'] = $i;
                    $dataAdd['game_win_type_id'] = $this->id;
                    $dataAdd['is_end'] = 0;
                    $dataAdd['admin_init'] = 0;
                    $dataAdd['created_at'] = now();
                    $dataAdd['updated_at'] = now();
                    $dataAdd['start_time'] = $timeStampStart;
                    $dataAdd['end_time'] = $timeStampStart + $this->seconds;
                    $timeStampStart = $dataAdd['end_time'];
                    array_push($dataInsert, $dataAdd);
                    $count++;
                }
            }
        }
        if (count($dataInsert) > 0) {
            GameWinRecord::insert($dataInsert);
        }
    }
}