var assert = require('assert');

var Startup = require('./startup');
var Employee = require('./employee');
var Game = require('./game');
var GameEntity = require('./centity');


describe('Startup#Init', () => {
    it('Should create an empty startup', () => {
	let st = new Startup("Josnei");
	assert(st.name == "Josnei");
	assert(st.money === 0);
    });
});


describe('Game#checkonAdd', () => {
    it("Should check that the game run 'onAdd' through all entities", () => {
	let entitiesAdd = [false, false, false];
	
	let g = new Game({});
	let en1 = new GameEntity("Entity1");
	en1.onAdd = () => entitiesAdd[0] = true;
	let en2 = new GameEntity("Entity2");
	en2.onAdd = () => entitiesAdd[1] = true;
	let en3 = new GameEntity("Entity3");
	en3.onAdd = () => entitiesAdd[2] = true;

	g.addEntity('en1', en1);
	g.addEntity('en2', en2);
	g.addEntity('en3', en3);

	assert(entitiesAdd[0] === true, "en1 was not iterated");
	assert(entitiesAdd[0] === true, "en2 was not iterated");
	assert(entitiesAdd[2] === true, "en3 was not iterated");
    });
});

describe('Employer#checkMessage', () => {
    it("Check validity of the message generated", () => {
	let st = new Startup("Manos", 100000);
	st.addEmployee(new Employee("John", 22, 100, 'programmer', 'male'));
	st.addEmployee(new Employee("Matt", 18, 90, 'programmer', 'male'));
	st.addEmployee(new Employee("Claire", 20, 140, 'programmer', 'female'));

	let msg = st._getMessage();;
	assert.deepEqual(msg.men_workers, 2, 'Wrong # of men workers');
	assert.deepEqual(msg.women_workers, 1, 'Wrong # of women workers');
	assert.deepEqual(msg.avg_experience, 110, 'Wrong # of avg experience');
	assert.deepEqual(msg.avg_age, 20, 'Wrong # of avg age');
	
    });
});



describe('Employee#checkXPGainBare', () => {
    it('Checks if employee have a small xp gain through a year inside an enterprise',
       () => {
	   let emp = new Employee('The man', 20, 0, 'chief', 'male');
	   for (let i = 0; i < 12; i++) {
	       emp.iterate({});
	   }

	   assert.deepEqual(emp.xp, 12, "Incorrect XP gain");
       });
});

describe('Game#Iterations', () => {
    it('Should check that the game iterated through all entities', () => {
	let entitiesActive = [false, false, false];
	
	let g = new Game({});
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



