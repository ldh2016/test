/*
* name;
*/
class RoleRevise extends ui.RoleReviseUI {
    private roleInfo: RoleInfo;
    private roleInfoListItem: RoleInfoListItem;
    constructor() {
        super();
        // this.roleRevise();
        this.reviseBtn.on(Laya.Event.CLICK, this, this.onClick);
    }
    //获取了当前类去访问属性roleInfo；然后再把roleInfo的account赋值给当前文本框；
    public updateRoleRevise(roleInfoListItem: RoleInfoListItem): void {
        this.roleInfo = roleInfoListItem.roleInfo;
        this.roleInfoListItem = roleInfoListItem;
        this.reviseLab.text = this.roleInfo.account;//修改当前名字；
    }
    //更改名字；
    private onClick(): void {
        if (this.reviseTest.text != "") {
            this.roleInfo.account = this.reviseTest.text;
            this.roleInfoListItem.updateRoleItem(this.roleInfo); //修改item的account值；
        }
        this.removeSelf();
    }
}   