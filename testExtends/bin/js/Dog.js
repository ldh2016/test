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
* 狗类;
*/
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super.call(this) || this;
    }
    /**动物外形(子类重写)*/
    Dog.prototype.setSkin = function () {
        console.log("狗有4条腿");
    };
    return Dog;
}(Animal));
//# sourceMappingURL=Dog.js.map