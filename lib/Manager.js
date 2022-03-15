const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, OfficeNumber) {
        super(name, id, email); 
        this.OfficeNumber = OfficeNumber;
        this.role = 'Manager'
    }
    getOfficeNumber() {
        return this.OfficeNumber;
    }
}

module.exports = Manager