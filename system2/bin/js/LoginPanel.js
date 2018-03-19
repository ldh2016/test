var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
* name;
*/
var LoginPanel = /** @class */ (function (_super) {
    __extends(LoginPanel, _super);
    function LoginPanel() {
        var _this = _super.call(this) || this;
        _this.loginBtn.on(Laya.Event.CLICK, _this, _this.onLogin);
        return _this;
    }
    LoginPanel.prototype.onLogin = function () {
        if (this.inputAccount.text != "" && this.inputPwd.text != "") {
            var logRole = AccountControl.instance.getRoleInfo(this.inputAccount.text);
            if (logRole) {
                if (this.inputPwd.text == logRole.pwd) {
                    console.log("登录进来咯");
                    this.roleInfoPanel = new RoleInfoListPanel();
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
    };
    return LoginPanel;
}(ui.LoginPanelUI));
//# sourceMappingURL=LoginPanel.js.map