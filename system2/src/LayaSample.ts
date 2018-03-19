// 程序入口
class GameMain {
    private registerPanel: RegisterPanel;
    constructor() {
        Laya.init(600, 400);
        Laya.loader.load("res/atlas/comp.atlas", Laya.Handler.create(this, this.onLoad));
    }
    private onLoad(): void {
        // this.loginPanel = new LoginPanel();
        // Laya.stage.addChild(this.loginPanel);
        this.registerPanel = new RegisterPanel();
        Laya.stage.addChild(this.registerPanel);
    }
}
new GameMain();