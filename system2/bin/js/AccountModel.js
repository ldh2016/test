/*
* name;
*/
var AccountModel = /** @class */ (function () {
    function AccountModel() {
        this.roleArr = [];
    }
    Object.defineProperty(AccountModel, "instance", {
        get: function () {
            if (this._instance == null) {
                this._instance = new AccountModel();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    return AccountModel;
}());
//# sourceMappingURL=AccountModel.js.map