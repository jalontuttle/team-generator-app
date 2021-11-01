const Employee = require('./employee');

class Manager extends Employee {
    constructor(id, officeNumber){
        super(name, id, email, 'manager');
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        console.log(`${this.officeNumber}`);
    }

    getRole() {
        console.log(this.role);
    }
    
} 