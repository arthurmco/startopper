'use strict';

class Startup {
    constructor(name, money = 0) {
	this.name = name;
	this._money = money;
    }

    get money() {
	return this._money;
    }
    
}

module.exports = Startup;
