const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, ID, email, Github) {
        super(name, ID, email)
        this.Github = Github;
        this.role = 'Engineer';
    }

    getGithub() {
        return this.Github;
    }
}

module.exports = Engineer