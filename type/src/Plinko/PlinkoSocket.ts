import BaseGameSocket from "../Base/BaseGameSocket";
import BaseGui from "../Base/BaseGui";
import Selector from "../Base/Selector";
import Socket from "../Base/Socket";
import PlinkoGlobal from "./PlinkoGlobal";
import PlinkoStorage from "./PlinkoStorage";

export default class PlinkoSocket extends BaseGameSocket {
    public onOpenSocketCallback: { (e: any): void };
    public onInitGameCallback: { (e: any): void };

    public constructor(
        psocket: Socket
    ) {
        super(psocket);
    }
    public onOpenSocket(e: any) {
        super.onOpenSocket(e);

        this.initGame();
        if (this.onOpenSocketCallback) {
            this.onOpenSocketCallback(e);
        }
    }
    public initGame() {
        let data: any = {};
        data.type = connectionGameType;
        data.action = PLINKO_STATUS.GAME_ACTION_GET_CURRENT_GAME_INFO;
        this.sendData(JSON.stringify(data));
    }
    public retrieveResult() {
        let data: any = {};
        data.type = connectionGameType;
        data.currentGame = PlinkoGlobal.currentGameInfo;
        data.action = PLINKO_STATUS.GAME_ACTION_RETRIEVE_RESULT;
        this.sendData(JSON.stringify(data));
    }
    public sendPlayRequest() {
        PlinkoStorage.setGameStateBet(1);
        let data: any = {};
        data.type = connectionGameType;
        data.action = PLINKO_STATUS.GAME_ACTION_DO_BET;
        data.currentGame = PlinkoGlobal.currentGameInfo;
        var gameData = {
            type: Selector._("[name=risk]:checked").value,
            mode: Selector._("[name=mode]:checked").value,
            qty: Selector._("[name=qty]").value,
        };
        data.gameData = gameData;
        this.sendData(JSON.stringify(data));
    }

    public betSuccess(data: any) {
        BaseGui.createFlashNotify("Bet thành công.");
    }
    public processMessageData(data: any) {
        switch (data.action) {
            case PLINKO_STATUS.GAME_ACTION_GET_CURRENT_GAME_INFO:
                let dataAttachment = data.data;
                PlinkoGlobal.currentGameInfo.current_game_idx =
                    dataAttachment.current_game_idx ?? "";
                if (this.onInitGameCallback) {
                    this.onInitGameCallback(dataAttachment);
                }
                break;
            case PLINKO_STATUS.GAME_ACTION_DO_BET:
                this.betSuccess(data.data);
                break;
            case PLINKO_STATUS.GAME_ACTION_RETRIEVE_RESULT:
                this.renderBall(data.data);
                break;
            default:
                break;
        }
    }
    public async renderBall(data: any) {
        let games = data.games;
        if (!games) return;
        for (let index = 0; index < games.length; index++) {
            const item = games[index];
            ShortPlinko.createDisc(item.path, item.type);
            await this.sleep(400);
        }
    }
    public sleep(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
}