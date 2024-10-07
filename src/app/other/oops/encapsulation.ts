class Employee {
    private _empId:number | undefined;
    empName:string | undefined;

    getEmpId() {
        return this._empId;
    }

    setEmpid(empid:number) {
       if (empid<0){
        console.log('cannt be less than zero');
       }
       else if (empid>0) {
        console.log( this._empId = empid);
       }
    }
}

let objEmployee = new Employee();

objEmployee.setEmpid(-10);
console.log(objEmployee.getEmpId());
