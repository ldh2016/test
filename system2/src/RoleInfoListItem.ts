/*
* name;
*/
class RoleInfoListItem extends ui.RoleInfoListItemUI {

    public roleInfo: RoleInfo;
    constructor() {
        super();
        this.delBtn.on(Laya.Event.CLICK, this, this.onClick);

    }
    //传入RoleInfo的对象，然后访问account；
    public updateRoleItem(roleInfo: RoleInfo): void {
        this.roleInfo = roleInfo;
        this.roleItem.text = roleInfo.account;//访问RoleInfo的属性；
        console.log(this.roleInfo);


    }
    private onClick(e: Laya.Event): void {
        e.stopPropagation();//同个对象的不同点击事件；
        AccountControl.instance.delRoleInfo(this.roleInfo);
    }


}