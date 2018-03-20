// 程序入口
class GameMain {

    private dic: Laya.Dictionary;

    constructor() {
        Laya.init(600, 400);
        this.dic = new Laya.Dictionary();

        //生成3个玩家信息 
        for (let i: number = 0; i < 3; i++) {

            let roleInfo: RoleInfo = new RoleInfo();
            roleInfo.account = "role_" + (i + 1);
            this.dic.set(roleInfo.account, roleInfo);//往字典存数据 用键值形式存 key(roleInfo.account) value(roleInfo)
        }


        Laya.stage.on(Laya.Event.CLICK, this, this.onClick);

    }


    private onClick(): void {
        //数据的获取
        //比如我们要获取account为role_2的对象 我们可以这样子获取

        let roleInfo: RoleInfo = this.dic.get("role_2"); //通过一个key去获取一个对象 这里的key就是role_2 获取到的value的类型 就是你存进去的类型
        console.log(roleInfo);



        //判断一个对象是否存在

        let ind: number = this.dic.indexOf("role_22");
        if (ind == -1) {
            console.log("对象不存在");
        }

        //删除操作

        //删除某个指定的key的对象 
        this.dic.remove("role_2");  //通过键删除对应的value

        //全部删除:
        this.dic.clear();

        //转为数组
        let datas: any[] = this.dic.values;
        //这样子你可以获得数组长度
        console.log(datas.length);


        //Dictionary 相对于 数组 有什么好处呢？

        //好处的话  存取比较方便 直接采取key_value存数据 取数据 通关key 去获取value 相比之前的for循环遍历的话 肯定是效率和速度上比较好


    }
}
new GameMain();