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
var RoleRevise = /** @class */ (function (_super) {
    __extends(RoleRevise, _super);
    function RoleRevise() {
        var _this = _super.call(this) || this;
        // this.roleRevise();
        _this.reviseBtn.on(Laya.Event.CLICK, _this, _this.onClick);
        return _this;
    }
    //获取了当前类去访问属性roleInfo；然后再把roleInfo的account赋值给当前文本框；
    RoleRevise.prototype.updateRoleRevise = function (roleInfoListItem) {
        this.roleInfo = roleInfoListItem.roleInfo;
        this.roleInfoListItem = roleInfoListItem;
        this.reviseLab.text = this.roleInfo.account; //修改当前名字；
    };
    //更改名字；
    RoleRevise.prototype.onClick = function () {
        if (this.reviseTest.text != "") {
            this.roleInfo.account = this.reviseTest.text;
            this.roleInfoListItem.updateRoleItem(this.roleInfo); //修改item的account值；
        }
        this.removeSelf();
    };
    return RoleRevise;
}(ui.RoleReviseUI));
//# sourceMappingURL=RoleRevise.js.map