'use strict';

var GameEntity = require('./centity.js');

/* The game */
class Game {
    constructor() {
	this.entities = {};
    }

    addEntity(tag, entity) {
	this.entities[tag] = entity;
    }

    getEntity(tag) {
	var entity = this.entities[tag];
	if (entity === undefined)
	    return null;
	
	return entity;
    }

    iterateAll(msg) {
	for (let tag in this.entities) {
	    this.entities[tag].iterate(msg);
	}
    }


}

module.exports = Game;
