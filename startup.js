'use strict';
 
var GameEntity = require('./centity');

/* Represents a default startup software company */
class Startup extends GameEntity {
    constructor(name, money = 0) {
	super(name);
	this._money = money;
	this._employees = [];
    }

    get money() {
	return this._money;
    }

    addEmployee(e) {
	e.hireTo(this);
	this._employees.push(e);
    }

    _getMessage() {
	return {
	    'men_workers': this._employees.reduce((count, val, init) => {
		init = (count ? count : 0);
		if (val.sex === 'male') init++;
		return init;
	    }, 0),
	    'women_workers': this._employees.reduce((count, val, init) => {
		init = (count ? count : 0);
		if (val.sex === 'female') init++;
		return init;
	    }, 0),
	    'avg_experience': this._employees.reduce(
		(count, val, init) => {
		    let v = (count ? count : init);
		    return v += val.xp;}, 0) / this._employees.length,
	    'avg_age':  this._employees.reduce(
		(count, val, init) => {
		    let v = (count ? count : init);
		    return v += val.age;}, 0) / this._employees.length
	};
    };

    onAdd(message) {
	message['e'+this.name] = this._getMessage();
    }

    iterate(message) {
	
    }
    
}

module.exports = Startup;
