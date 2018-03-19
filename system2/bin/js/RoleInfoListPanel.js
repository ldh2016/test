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
var RoleInfoListPanel = /** @class */ (function (_super) {
    __extends(RoleInfoListPanel, _super);
    function RoleInfoListPanel() {
        var _this = _super.call(this) || this;
        _this.arrItems = [];
        _this.addRoleItem();
        RoleEvent.getInstance().on(RoleEvent.ROLE_LOCATION_REVISE, _this, _this.addRoleItem);
        return _this;
    }
    ;
    RoleInfoListPanel.prototype.addRoleItem = function () {
        this.arrItems.forEach(function (element) {
            element.removeSelf();
        });
        this.arrItems.length = 0;
        //更新列表项；
        for (var i = 0; i < AccountModel.instance.roleArr.length; i++) {
            var roleInfoListItem = new RoleInfoListItem();
            this.addChild(roleInfoListItem);
            roleInfoListItem.y = (roleInfoListItem.height + 10) * i;
            roleInfoListItem.updateRoleItem(AccountModel.instance.roleArr[i]);
            roleInfoListItem.on(Laya.Event.CLICK, this, this.onClick);
            this.arrItems.push(roleInfoListItem);
        }
    };
    RoleInfoListPanel.prototype.onClick = function (e) {
        // console.log(this.roleInfoListItem.roleItem.text);
        var target = e.currentTarget; //点击的当前那个类；
        this.roleRevise = new RoleRevise();
        this.addChild(this.roleRevise);
        //console.log(target.roleInfo); 
        this.roleRevise.updateRoleRevise(target); //传入点击的当前类；
    };
    return RoleInfoListPanel;
}(ui.RoleInfoListPanelUI));
//# sourceMappingURL=RoleInfoListPanel.js.map