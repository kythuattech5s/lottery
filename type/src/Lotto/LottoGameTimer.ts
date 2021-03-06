import Selector from "../Base/Selector";
import LottoSocket from "./LottoSocket";

export default class LottoGameTimer {
    protected interValGameTime: any = null;
    protected timeRemaining: number = 0;
    protected gamePlinkoTimeBox: any;
    protected needRetreiveResult: boolean = false;
    public constructor(protected gameSocket: LottoSocket) {
        this.gamePlinkoTimeBox = Selector._("#game-lotto-time-box");
    }
    public initInfo(data: any) {
        if (!this.gamePlinkoTimeBox || !data.html) return;
        this.needRetreiveResult = true;
        this.gamePlinkoTimeBox.innerHTML = data.html;
        this.timeRemaining = data.time_remaining ?? 0;

        if (this.interValGameTime) {
            clearInterval(this.interValGameTime);
        }
        let self = this;
        self.runMainLoop();
        this.interValGameTime = setInterval(() => {
            self.runMainLoop();
        }, 1000);
    }
    public runMainLoop() {
        let minutes: any = (this.timeRemaining / 60) | 0;
        let seconds: any = this.timeRemaining % 60 | 0;
        minutes = minutes < 10 ? "0" + minutes : String(minutes);
        seconds = seconds < 10 ? "0" + seconds : String(seconds);
        if (this.timeRemaining <= 0) {
            this.refreshGame();
        } else {
            var countDownTimeBox =
                this.gamePlinkoTimeBox.querySelector(".out .number");
            if (countDownTimeBox) {
                countDownTimeBox.innerHTML = `
                        <div class="item">${minutes.substr(0, 1)}</div>
                        <div class="item">${minutes.substr(1, 1)}</div>
                        <div class="item c-row c-row-middle">:</div>
                        <div class="item">${seconds.substr(0, 1)}</div>
                        <div class="item">${seconds.substr(1, 1)}</div>
                    `;
            }
        }
        this.showTimeChecker();
        this.timeRemaining--;
    }

    public refreshGame() {
        if (this.interValGameTime) {
            clearInterval(this.interValGameTime);
        }
        window.location.href = window.location.href;
    }
    public showTimeChecker() {
        var mark = Selector._(".result_plot_threads .mark-box");
        let lastPoint = parseInt(LOTTO_CONFIG.LAST_POINT_TO_BET);
        let timeToRetreive = parseInt(LOTTO_CONFIG.NUMBER_TIME_TO_CHECK);
        let showCountDownCalculate = this.timeRemaining <= lastPoint;
        if (showCountDownCalculate) {
            Selector.flex(mark);
            let time: any = lastPoint - this.timeRemaining;
            time = Math.abs(time - timeToRetreive);
            time = time < 10 ? "0" + time : "" + time;
            let html = ``;
            for (var i = 0; i < time.length; i++) {
                html += `<span class="item m-r-20">${time.charAt(i)}</span>`;
            }
            mark.innerHTML = html;
        } else {
            Selector.none(mark);
        }
        if (this.timeRemaining < timeToRetreive) {
            if (!this.needRetreiveResult) return;
            this.needRetreiveResult = false;
            this.gameSocket.retrieveResult();
        }
    }
}
