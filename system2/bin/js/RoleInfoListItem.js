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
var RoleInfoListItem = /** @class */ (function (_super) {
    __extends(RoleInfoListItem, _super);
    function RoleInfoListItem() {
        var _this = _super.call(this) || this;
        _this.delBtn.on(Laya.Event.CLICK, _this, _this.onClick);
        return _this;
    }
    //传入RoleInfo的对象，然后访问account；
    RoleInfoListItem.prototype.updateRoleItem = function (roleInfo) {
        this.roleInfo = roleInfo;
        this.roleItem.text = roleInfo.account; //访问RoleInfo的属性；
        console.log(this.roleInfo);
    };
    RoleInfoListItem.prototype.onClick = function (e) {
        e.stopPropagation(); //同个对象的不同点击事件；
        AccountControl.instance.delRoleInfo(this.roleInfo);
    };
    return RoleInfoListItem;
}(ui.RoleInfoListItemUI));
//# sourceMappingURL=RoleInfoListItem.js.map