export module FirstModule{
    export class Class1{
        constructor()
        {
            console.log("Module's class constructor");
        }
        static somefunctionality()
        {
            console.log("from module 1");
        }
    }

class Class2{
        constructor()
        {
            console.log("Module's class 2 constructor");
        }
        somefunctionality()
        {
            console.log("from module 1 class 2");
        }
    }

}