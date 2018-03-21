// 程序入口
var GameMain = (function () {
    function GameMain() {
        //继承一般是达到代码复用 
        Laya.init(600, 400);
        //初始化狗类
        var ani = new Dog();
        ani.name = "狗";
        console.log(ani.name);
        ani.setSkin();
        //初始化鸡类
        ani = new Chicken();
        ani.name = "鸡";
        console.log(ani.name);
        ani.setSkin();
    }
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=LayaSample.js.map