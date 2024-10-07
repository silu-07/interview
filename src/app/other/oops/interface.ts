interface IEmployee {
    role() : void;
}

class TemporaryEmployee implements IEmployee{
    role(){
        console.log("Temporary employee");
    }
}

class PermanentEmployee implements IEmployee{
    role(){
        console.log("Permanent employee");
    }
}

let objTempEmployee = new TemporaryEmployee;

objTempEmployee.role();