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
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var LoginPanelUI = /** @class */ (function (_super) {
        __extends(LoginPanelUI, _super);
        function LoginPanelUI() {
            return _super.call(this) || this;
        }
        LoginPanelUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.LoginPanelUI.uiView);
        };
        LoginPanelUI.uiView = { "type": "View", "props": { "width": 600, "height": 400 }, "child": [{ "type": "TextInput", "props": { "y": 109, "x": 208, "var": "inputAccount", "skin": "comp/textinput.png" } }, { "type": "Label", "props": { "y": 109, "x": 148, "text": "账号：", "fontSize": 20, "color": "#ffffff" } }, { "type": "Label", "props": { "y": 154, "x": 149, "text": "密码：", "fontSize": 20, "color": "#ffffff" } }, { "type": "TextInput", "props": { "y": 151, "x": 210, "var": "inputPwd", "skin": "comp/textinput.png" } }, { "type": "Button", "props": { "y": 235, "x": 218, "width": 87, "var": "loginBtn", "skin": "comp/button.png", "labelSize": 20, "label": "登录", "height": 38 } }] };
        return LoginPanelUI;
    }(View));
    ui.LoginPanelUI = LoginPanelUI;
})(ui || (ui = {}));
(function (ui) {
    var RegisterPanelUI = /** @class */ (function (_super) {
        __extends(RegisterPanelUI, _super);
        function RegisterPanelUI() {
            return _super.call(this) || this;
        }
        RegisterPanelUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.RegisterPanelUI.uiView);
        };
        RegisterPanelUI.uiView = { "type": "View", "props": { "width": 600, "height": 400 }, "child": [{ "type": "TextInput", "props": { "y": 119, "x": 218, "var": "registerAccount", "skin": "comp/textinput.png" } }, { "type": "Label", "props": { "y": 119, "x": 158, "text": "账号：", "fontSize": 20, "color": "#ffffff" } }, { "type": "Label", "props": { "y": 164, "x": 159, "text": "密码：", "fontSize": 20, "color": "#ffffff" } }, { "type": "TextInput", "props": { "y": 161, "x": 220, "var": "registerPwd", "skin": "comp/textinput.png" } }, { "type": "Button", "props": { "y": 250, "x": 276, "width": 87, "var": "registerBtn", "skin": "comp/button.png", "labelSize": 20, "label": "注册", "height": 38 } }, { "type": "Button", "props": { "y": 250, "x": 161, "width": 87, "var": "loginB", "skin": "comp/button.png", "labelSize": 20, "label": "登录", "height": 38 } }] };
        return RegisterPanelUI;
    }(View));
    ui.RegisterPanelUI = RegisterPanelUI;
})(ui || (ui = {}));
(function (ui) {
    var RoleInfoListItemUI = /** @class */ (function (_super) {
        __extends(RoleInfoListItemUI, _super);
        function RoleInfoListItemUI() {
            return _super.call(this) || this;
        }
        RoleInfoListItemUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.RoleInfoListItemUI.uiView);
        };
        RoleInfoListItemUI.uiView = { "type": "View", "props": { "width": 110, "height": 20 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 107, "skin": "comp/blank.png", "height": 24 } }, { "type": "Label", "props": { "y": 0, "x": 0, "width": 110, "var": "roleItem", "text": "Label", "height": 20, "fontSize": 20, "color": "#ffffff", "align": "center" } }, { "type": "Button", "props": { "y": 1, "x": 86, "width": 22, "var": "delBtn", "stateNum": 3, "skin": "comp/btn_close.png", "height": 20 } }] };
        return RoleInfoListItemUI;
    }(View));
    ui.RoleInfoListItemUI = RoleInfoListItemUI;
})(ui || (ui = {}));
(function (ui) {
    var RoleInfoListPanelUI = /** @class */ (function (_super) {
        __extends(RoleInfoListPanelUI, _super);
        function RoleInfoListPanelUI() {
            return _super.call(this) || this;
        }
        RoleInfoListPanelUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.RoleInfoListPanelUI.uiView);
        };
        RoleInfoListPanelUI.uiView = { "type": "View", "props": { "width": 600, "height": 400 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 600, "skin": "comp/bg.png", "height": 400 } }] };
        return RoleInfoListPanelUI;
    }(View));
    ui.RoleInfoListPanelUI = RoleInfoListPanelUI;
})(ui || (ui = {}));
(function (ui) {
    var RoleReviseUI = /** @class */ (function (_super) {
        __extends(RoleReviseUI, _super);
        function RoleReviseUI() {
            return _super.call(this) || this;
        }
        RoleReviseUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.RoleReviseUI.uiView);
        };
        RoleReviseUI.uiView = { "type": "View", "props": { "width": 219, "height": 135 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 219, "skin": "comp/bg.png", "sizeGrid": "65,24,51,13", "height": 135 } }, { "type": "Label", "props": { "y": 41, "x": 9, "text": "当前id为：", "fontSize": 14, "color": "#060000" } }, { "type": "Button", "props": { "y": 100, "x": 72, "var": "reviseBtn", "skin": "comp/button.png", "label": "确定" } }, { "type": "Label", "props": { "y": 73, "x": 9, "text": "修改id为：", "fontSize": 14, "color": "#060000" } }, { "type": "TextInput", "props": { "y": 69, "x": 83, "width": 119, "var": "reviseTest", "skin": "comp/textinput.png", "height": 22 } }, { "type": "Label", "props": { "y": 40, "x": 83, "var": "reviseLab", "text": "label", "fontSize": 14, "color": "#060000" } }] };
        return RoleReviseUI;
    }(View));
    ui.RoleReviseUI = RoleReviseUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map