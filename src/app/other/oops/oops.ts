class Person {
    name: string | undefined;
    age:number | undefined;

    familyCount(){
        return 6;
    }

}

let objPerson = new Person;

let myName = objPerson.name = "Abinash";
let myAge = objPerson.age = 25;
let countFamily = objPerson.familyCount();

console.log(myName + " " + myAge + " " + countFamily)