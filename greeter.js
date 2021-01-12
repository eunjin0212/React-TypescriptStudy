function greeter(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Kim", lastName: "jin" };
document.body.textContent = greeter(user);
