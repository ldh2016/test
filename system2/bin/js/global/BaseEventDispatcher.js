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
var global;
(function (global) {
    /**
   * 自定义事件基类
   */
    var BaseEventDispatcher = /** @class */ (function (_super) {
        __extends(BaseEventDispatcher, _super);
        function BaseEventDispatcher() {
            return _super.call(this) || this;
        }
        BaseEventDispatcher.getInstance = function () {
            if (this._instance == null) {
                this._instance = new BaseEventDispatcher();
            }
            return this._instance;
        };
        return BaseEventDispatcher;
    }(Laya.EventDispatcher));
    global.BaseEventDispatcher = BaseEventDispatcher;
})(global || (global = {}));
//# sourceMappingURL=BaseEventDispatcher.js.map