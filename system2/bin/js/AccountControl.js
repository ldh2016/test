/*
* name;
*/
var AccountControl = /** @class */ (function () {
    function AccountControl() {
    }
    Object.defineProperty(AccountControl, "instance", {
        get: function () {
            if (this._instance == null) {
                this._instance = new AccountControl();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    /**添加用户 */
    AccountControl.prototype.addRoleInfo = function (roleInfo) {
        AccountModel.instance.roleArr.push(roleInfo);
    };
    /**获取用户 */
    AccountControl.prototype.getRoleInfo = function (regAccount) {
        for (var i = 0; i < AccountModel.instance.roleArr.length; i++) {
            if (AccountModel.instance.roleArr[i].account == regAccount) {
                return AccountModel.instance.roleArr[i];
            }
        }
        return null;
    };
    /**删除用户 */
    AccountControl.prototype.delRoleInfo = function (delRoleInfo) {
        var index = AccountModel.instance.roleArr.indexOf(delRoleInfo); //获取对象；
        AccountModel.instance.roleArr.splice(index, 1); //删除单个用户；
        RoleEvent.getInstance().event(RoleEvent.ROLE_LOCATION_REVISE); //派送事件更新删除之后的界面与数据；
    };
    return AccountControl;
}());
//# sourceMappingURL=AccountControl.js.map