// 程序入口
var GameMain = /** @class */ (function () {
    function GameMain() {
        Laya.init(600, 400);
        Laya.loader.load("res/atlas/comp.atlas", Laya.Handler.create(this, this.onLoad));
    }
    GameMain.prototype.onLoad = function () {
        // this.loginPanel = new LoginPanel();
        // Laya.stage.addChild(this.loginPanel);
        this.registerPanel = new RegisterPanel();
        Laya.stage.addChild(this.registerPanel);
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=LayaSample.js.map