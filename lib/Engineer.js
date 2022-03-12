const Employee = require('./Employee')

class Engineer {
    constructor(name, ID, email, Github) {
        this.name = name; 
        this.ID = ID;
        this.email = email;
        this.Github = Github;
    }
}

module.exports = Engineer