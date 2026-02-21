function personMaker(name, age) {
    const person = {
        "name": name,
        "age": age,
        talk() {
            console.log(`Hi! My name is ${name}`);
        }
    }
    return person;
}

let p1 = personMaker("ashu", 22);
let p2 = personMaker("abhi", 25);