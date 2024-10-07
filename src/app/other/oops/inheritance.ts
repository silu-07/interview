class Animal {
    eat() {
        console.log('Can eat');
    }
    sleep() {
        console.log('Can sleep');
    }
}

class Dog extends Animal {
    bark() {
        console.log("can bark");
    }
}

class Bird extends Animal {
    fly() {
        console.log("can fly");
    }
}


let objDog = new Dog;
objDog.sleep();