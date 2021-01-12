var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
    return Student;
}());
function greeter2(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
var user2 = new Student('Kim', 'E.', 'Jin');
console.log(greeter2(user2));
