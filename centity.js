'use strict';

/* Represents a default game entity in the game 
 *
 *  The game class only sees entities and its properties
 */
   
class GameEntity {
    constructor(name) {
	this.name = name;
    }

    /* Pseudofunction that means iteration of a game entity 
     *  
     *  It transmits a dictionary of properties about the game named
     *  message
     */
    iterate(message) {
	console.log(`warning: ${this.name} has no iterate() method`);
    }

    
}


module.exports = GameEntity;
