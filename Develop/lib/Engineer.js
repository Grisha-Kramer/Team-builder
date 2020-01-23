const Employee = require("../lib/Employee");
class Engineer extends Employee {

    constructor(name, id, email, gitHub){
        super(name, id, email); 
            this.gitHub = gitHub;
            
        
    };
    gitHub() {
        return this.github;
    }

    getRole() {
        return "Engineer"
    }
   
    
}
module.exports = Engineer


