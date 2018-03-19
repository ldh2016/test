/*
* name;
*/
class AccountModel {
public roleArr:RoleInfo[];//数组定义
    constructor() {
        this.roleArr=[]
    }
    private static _instance:AccountModel;
    public static get instance():AccountModel{
        if(this._instance==null){
            this._instance=new AccountModel();   
        }
        return this._instance;
    }
  
}
