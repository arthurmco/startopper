'use strict';
 
var GameEntity = require('./centity');

/* Represents a default startup software company */
class Startup extends GameEntity {
    constructor(name, money = 0) {
	super(name);
	this._money = money;
    }

    get money() {
	return this._money;
    }

    iterate(message) {
	
    }
    
}

module.exports = Startup;
