/*
* 动物类;
*/
var Animal = (function () {
    function Animal() {
    }
    /**动物外形(每个动物外形不一样的 所以要在子类重写)*/
    Animal.prototype.setSkin = function () {
    };
    /**动物跑的方法*/
    Animal.prototype.run = function () {
    };
    return Animal;
}());
//# sourceMappingURL=Animal.js.map