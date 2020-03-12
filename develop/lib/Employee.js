class Employee {
    //Constructor Properties
    constructor(name, id, email, role = "Employee"){
        this.name = name
        this.id = id
        this.email = email
        this.role = role
    }
    //Methods

    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return this.role
    }
    getRole() {
        return "Employee"
    }
}

// Exporting class Employee

module.exports = Employee