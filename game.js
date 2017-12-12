'use strict';

var GameEntity = require('./centity.js');

/* The game */
class Game {
    constructor(message) {
	this.entities = {};
	this._message = message;
    }

    addEntity(tag, entity) {
	this.entities[tag] = entity;
	entity.onAdd(this._message);
    }

    getEntity(tag) {
	var entity = this.entities[tag];
	if (entity === undefined)
	    return null;
	
	return entity;
    }

    removeEntity(tag) {
	if (this.entities[tag]) {
	    this.entities[tag].onRemove(this._message);
	    this.entities[tag] = undefined;
	}
    }

    /* Iterate all objects 
     * An iteraction is equivalent of 4 hours
     */
    iterateAll() {
	for (let tag in this.entities) {
	    this.entities[tag].iterate(this._message);
	}
    }


}

module.exports = Game;
