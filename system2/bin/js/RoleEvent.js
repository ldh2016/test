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
var RoleEvent = /** @class */ (function (_super) {
    __extends(RoleEvent, _super);
    function RoleEvent() {
        return _super.call(this) || this;
    }
    RoleEvent.ROLE_LOCATION_REVISE = "role_location_revise";
    return RoleEvent;
}(global.BaseEventDispatcher));
//# sourceMappingURL=RoleEvent.js.map