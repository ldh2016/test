/*
* name;
*/
class RoleInfoListPanel extends ui.RoleInfoListPanelUI {
    private roleRevise: RoleRevise;
    private arrItems:RoleInfoListItem[];
    constructor() {
        super();
        this.arrItems=[];
        this.addRoleItem();
        RoleEvent.getInstance().on(RoleEvent.ROLE_LOCATION_REVISE,this,this.addRoleItem);
    };
    private addRoleItem(): void {

        this.arrItems.forEach(element => {
            element.removeSelf();
        });
         this.arrItems.length=0;
         //更新列表项；
        for (var i = 0; i < AccountModel.instance.roleArr.length; i++) {
            let roleInfoListItem = new RoleInfoListItem();
            this.addChild(roleInfoListItem);
            roleInfoListItem.y = (roleInfoListItem.height + 10) * i;
            roleInfoListItem.updateRoleItem(AccountModel.instance.roleArr[i]);
            roleInfoListItem.on(Laya.Event.CLICK, this, this.onClick);
            this.arrItems.push(roleInfoListItem);
        }
    }
    private onClick(e: Laya.Event): void {
        // console.log(this.roleInfoListItem.roleItem.text);
        var target: RoleInfoListItem = e.currentTarget as RoleInfoListItem;//点击的当前那个类；
        this.roleRevise = new RoleRevise();
        this.addChild(this.roleRevise);
        //console.log(target.roleInfo); 
        this.roleRevise.updateRoleRevise(target);//传入点击的当前类；
    }

}