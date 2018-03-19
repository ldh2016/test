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
var RegisterPanel = /** @class */ (function (_super) {
    __extends(RegisterPanel, _super);
    function RegisterPanel() {
        var _this = _super.call(this) || this;
        _this.registerBtn.on(Laya.Event.CLICK, _this, _this.onRegRoleInfo);
        _this.loginB.on(Laya.Event.CLICK, _this, _this.onClick);
        return _this;
    }
    ;
    RegisterPanel.prototype.onRegRoleInfo = function () {
        if (this.registerAccount.text != "" && this.registerPwd.text != "") {
            var haveRole = AccountControl.instance.getRoleInfo(this.registerAccount.text);
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
        }
        else {
            console.log("账号或密码非要为空就没意思啦！");
        }
    };
    RegisterPanel.prototype.onClick = function () {
        this.login = new LoginPanel();
        Laya.stage.addChild(this.login);
        this.removeSelf();
    };
    return RegisterPanel;
}(ui.RegisterPanelUI));
//# sourceMappingURL=RegisterPanel.js.map