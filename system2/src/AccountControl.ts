/*
* name;
*/
class AccountControl {
    constructor() {
    }
    private static _instance: AccountControl;
    public static get instance(): AccountControl {
        if (this._instance == null) {
            this._instance = new AccountControl();
        }
        return this._instance;
    }
    /**添加用户 */
    public addRoleInfo(roleInfo: RoleInfo): void {
        AccountModel.instance.roleArr.push(roleInfo);
    }   
    /**获取用户 */
    public getRoleInfo(regAccount: string): RoleInfo {
        for (var i = 0; i < AccountModel.instance.roleArr.length; i++) {
            if (AccountModel.instance.roleArr[i].account == regAccount) {
                return AccountModel.instance.roleArr[i];
            }

        }
        return null;

    }
    /**删除用户 */
    public delRoleInfo(delRoleInfo: RoleInfo): void {
        var index = AccountModel.instance.roleArr.indexOf(delRoleInfo);//获取对象；
        AccountModel.instance.roleArr.splice(index, 1);//删除单个用户；
        RoleEvent.getInstance().event(RoleEvent.ROLE_LOCATION_REVISE);//派送事件更新删除之后的界面与数据；
        
    }

}