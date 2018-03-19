/*
* name;
*/
class RegisterPanel extends ui.RegisterPanelUI {
    private login:LoginPanel;
    private roleInfo: RoleInfo;
    constructor() {
        super();
        this.registerBtn.on(Laya.Event.CLICK, this, this.onRegRoleInfo);
        this.loginB.on(Laya.Event.CLICK, this, this.onClick);
    };
    private onRegRoleInfo(): void {
        if (this.registerAccount.text != "" && this.registerPwd.text != "") {
            var haveRole: RoleInfo = AccountControl.instance.getRoleInfo(this.registerAccount.text);
            if (haveRole) {
                console.log("被人抢先一步注册啦!");
            }
            else {
                this.roleInfo = new RoleInfo();
                this.roleInfo.account = this.registerAccount.text;
                this.roleInfo.pwd = this.registerPwd.text;
                AccountControl.instance.addRoleInfo(this.roleInfo);
                console.log("算你注册成功啦!");

            }
        } else {
            console.log("账号或密码非要为空就没意思啦！");

        }

    }
    private onClick():void{
        this.login=new LoginPanel();
        Laya.stage.addChild(this.login);
        this.removeSelf();
    }
}