/*
* name;
*/
class LoginPanel extends ui.LoginPanelUI {
    private roleInfoPanel:RoleInfoListPanel;
    constructor() {
        super();
        this.loginBtn.on(Laya.Event.CLICK, this, this.onLogin);
    }
    private onLogin(): void {   
        if (this.inputAccount.text != "" && this.inputPwd.text != "") {
            var logRole: RoleInfo = AccountControl.instance.getRoleInfo(this.inputAccount.text);
            if (logRole) {
                if (this.inputPwd.text == logRole.pwd) {
                    console.log("登录进来咯");
                    this.roleInfoPanel=new RoleInfoListPanel();
                    Laya.stage.addChild(this.roleInfoPanel);
                    this.removeSelf();
                } 
                else {
                    console.log("老铁，密码错误了啊");
                }
            } 
            else {
                console.log("压根没这个账号");
            }
        } 
        else {
            console.log("账号或密码非要为空就没意思啦！");
        }
    }
}