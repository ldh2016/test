
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class LoginPanelUI extends View {
		public inputAccount:Laya.TextInput;
		public inputPwd:Laya.TextInput;
		public loginBtn:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":600,"height":400},"child":[{"type":"TextInput","props":{"y":109,"x":208,"var":"inputAccount","skin":"comp/textinput.png"}},{"type":"Label","props":{"y":109,"x":148,"text":"账号：","fontSize":20,"color":"#ffffff"}},{"type":"Label","props":{"y":154,"x":149,"text":"密码：","fontSize":20,"color":"#ffffff"}},{"type":"TextInput","props":{"y":151,"x":210,"var":"inputPwd","skin":"comp/textinput.png"}},{"type":"Button","props":{"y":235,"x":218,"width":87,"var":"loginBtn","skin":"comp/button.png","labelSize":20,"label":"登录","height":38}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.LoginPanelUI.uiView);

        }

    }
}

module ui {
    export class RegisterPanelUI extends View {
		public registerAccount:Laya.TextInput;
		public registerPwd:Laya.TextInput;
		public registerBtn:Laya.Button;
		public loginB:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":600,"height":400},"child":[{"type":"TextInput","props":{"y":119,"x":218,"var":"registerAccount","skin":"comp/textinput.png"}},{"type":"Label","props":{"y":119,"x":158,"text":"账号：","fontSize":20,"color":"#ffffff"}},{"type":"Label","props":{"y":164,"x":159,"text":"密码：","fontSize":20,"color":"#ffffff"}},{"type":"TextInput","props":{"y":161,"x":220,"var":"registerPwd","skin":"comp/textinput.png"}},{"type":"Button","props":{"y":250,"x":276,"width":87,"var":"registerBtn","skin":"comp/button.png","labelSize":20,"label":"注册","height":38}},{"type":"Button","props":{"y":250,"x":161,"width":87,"var":"loginB","skin":"comp/button.png","labelSize":20,"label":"登录","height":38}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.RegisterPanelUI.uiView);

        }

    }
}

module ui {
    export class RoleInfoListItemUI extends View {
		public roleItem:Laya.Label;
		public delBtn:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":110,"height":20},"child":[{"type":"Image","props":{"y":0,"x":0,"width":107,"skin":"comp/blank.png","height":24}},{"type":"Label","props":{"y":0,"x":0,"width":110,"var":"roleItem","text":"Label","height":20,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Button","props":{"y":1,"x":86,"width":22,"var":"delBtn","stateNum":3,"skin":"comp/btn_close.png","height":20}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.RoleInfoListItemUI.uiView);

        }

    }
}

module ui {
    export class RoleInfoListPanelUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Image","props":{"y":0,"x":0,"width":600,"skin":"comp/bg.png","height":400}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.RoleInfoListPanelUI.uiView);

        }

    }
}

module ui {
    export class RoleReviseUI extends View {
		public reviseBtn:Laya.Button;
		public reviseTest:Laya.TextInput;
		public reviseLab:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":219,"height":135},"child":[{"type":"Image","props":{"y":0,"x":0,"width":219,"skin":"comp/bg.png","sizeGrid":"65,24,51,13","height":135}},{"type":"Label","props":{"y":41,"x":9,"text":"当前id为：","fontSize":14,"color":"#060000"}},{"type":"Button","props":{"y":100,"x":72,"var":"reviseBtn","skin":"comp/button.png","label":"确定"}},{"type":"Label","props":{"y":73,"x":9,"text":"修改id为：","fontSize":14,"color":"#060000"}},{"type":"TextInput","props":{"y":69,"x":83,"width":119,"var":"reviseTest","skin":"comp/textinput.png","height":22}},{"type":"Label","props":{"y":40,"x":83,"var":"reviseLab","text":"label","fontSize":14,"color":"#060000"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.RoleReviseUI.uiView);

        }

    }
}
