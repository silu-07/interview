var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.familyCount = function () {
        return 6;
    };
    return Person;
}());
var objPerson = new Person;
var myName = objPerson.name = "Abinash";
var myAge = objPerson.age = 25;
var countFamily = objPerson.familyCount();
console.log(myName + " " + myAge + " " + countFamily);
