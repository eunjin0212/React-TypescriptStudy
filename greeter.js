function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Kim", lastName: "jin" };
console.log(greeter(user));
