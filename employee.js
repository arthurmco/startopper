'use strict';
 
var GameEntity = require('./centity');

const Sex = {'male': 0, 'female': 1};
const SexRev = ['male', 'female'];

const ETask = {'programmer': 0, 'devops': 1, 'chief': 2};
const ETaskRev = ['programmer', 'devops', 'chief'];

/* Basic worker for our startup */
class Employee extends GameEntity {

    /*
     * The employee properties
     * name is its name, a string
     *
     * age is its age. 
     *  - It needs to be over 18 or you will be sued
     *
     * xp is its experience with its task
     *
     * task is its task. Can be either 'programmer', 'devops' or 'chief' 
     * Real startups need no other things because we're cool
     *
     * sex is its sex. Male or female, because i am a fucking right-wing
     * Trump bitch (j/k, it's because the logic is simpler)
     */
    constructor(name, age, xp, task, sex) {
	super("Employee: "+name);
	this._age = age;
	this._xp = xp;
	this._task = ETask[task.toLowerCase()];
	this._sex = Sex[sex.toLowerCase()];
	this._enterprise = null;

	/* Base XP gain.
	   Everything gains XP over time */
	this._xpgain = 1;
    }

    get xp() {
	return this._xp;
    }

    get age() {
	return this._age;
    }

    get task() {
	return ETaskRev[this._task];
    }

    get sex() {
	return SexRev[this._sex];
    }

    /* Hire the employee to some enterprise */
    hireTo(enterprise) {
	if (this._enterprise === null) {
	    this._enterprise = enterprise;
	}
    }

    iterate(message) {
	if (this._enterprise) {
	    var mdata = message['e' + this._enterprise.name];

	    /* XP increases proportionally to how lower you are from the
	       average
	    */
	    let avg_xp_increase = 1 +
		Math.min(0, (mdata.avg_experience - this._xp));

	    /* Same with the age */
	    let avg_age_increase = 1 +
		Math.min(0, (mdata.avg_age - this._age));

	    this.xpgain = avg_xp_increase + avg_age_increase;
	}
	
	
	this._xp += this._xpgain;
    }
    

}

module.exports = Employee;
