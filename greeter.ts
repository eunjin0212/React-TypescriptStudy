class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + ' ' + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter2(person: Person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
let user2 = new Student('Kim', 'E.', 'Jin');
console.log(greeter2(user2));