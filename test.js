var assert = require('assert');
var Startup = require('./startup');
var Game = require('./game');
var GameEntity = require('./centity');


describe('Startup#Init', () => {
    it('Should create an empty startup', () => {
	let st = new Startup("Josnei");
	assert(st.name == "Josnei");
	assert(st.money === 0);
    });
});


describe('Game#Iterations', () => {
    it('Should check that the game iterated through all entities', () => {
	let entitiesActive = [false, false, false];
	
	let g = new Game();
	let en1 = new GameEntity("Entity1");
	en1.iterate = () => entitiesActive[0] = true;
	let en2 = new GameEntity("Entity2");
	en2.iterate = () => entitiesActive[1] = true;
	let en3 = new GameEntity("Entity3");
	en3.iterate = () => entitiesActive[2] = true;

	g.addEntity('en1', en1);
	g.addEntity('en2', en2);
	g.addEntity('en3', en3);

	g.iterateAll();

	assert(entitiesActive[0] === true, "en1 was not iterated");
	assert(entitiesActive[0] === true, "en2 was not iterated");
	assert(entitiesActive[2] === true, "en3 was not iterated");
    });
});


