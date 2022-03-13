const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, ID, email, Office) {
        super(name, ID, email); 
        this.Office = Office;
        this.role = 'Manager'
    }
    getOffice() {
        return this.officeNumber;
    }
}

module.exports = Manager