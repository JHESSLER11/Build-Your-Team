const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, ID, email, OfficeNumber) {
        super(name, ID, email); 
        this.OfficeNumber = OfficeNumber;
        this.role = 'Manager'
    }
    getOfficeNumber() {
        return this.OfficeNumber;
    }
}

module.exports = Manager