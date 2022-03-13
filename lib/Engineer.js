const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, ID, email, Github) {
        super(name, id, email)
        this.Github = Github;
        this.roll = 'Engineer';
    }

    getGitHub() {
        return this.github
    }
}

module.exports = Engineer