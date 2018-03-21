/*
* 鸡类;
*/
class Chicken extends Animal {
    constructor() {
        super();
    }

    /**动物外形(子类重写)*/
    public setSkin(): void {
        console.log("鸡有两条腿");
    }
}