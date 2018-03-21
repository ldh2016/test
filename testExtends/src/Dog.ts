/*
* 狗类;
*/
class Dog extends Animal {
    constructor() {
        super();
    }

    /**动物外形(子类重写)*/
    public setSkin(): void {
        console.log("狗有4条腿");
    }
}