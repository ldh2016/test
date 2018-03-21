// 程序入口
class GameMain {
    constructor() {
        //继承一般是达到代码复用 
        Laya.init(600, 400);


        //初始化狗类
        let ani: Animal = new Dog();
        ani.name = "狗";
        console.log("name:" + ani.name);
        ani.setSkin();

        //初始化鸡类
        ani = new Chicken();
        ani.name = "鸡";
        console.log("name:" + ani.name);
        ani.setSkin();

    }
}
new GameMain();