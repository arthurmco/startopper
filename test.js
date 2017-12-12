
var Startup = require('./startup');
var Employee = require('./employee');
var Game = require('./game');
var GameEntity = require('./centity');

const Lab = require('lab');
const lab = exports.lab = Lab.script();

//describe('Startup#Init', () => {
lab.test('Should create an empty startup', () => {
    return new Promise((res, rej)  => {
	let st = new Startup("Josnei");
	Lab.expect(st.name).to.equal("Josnei");
	Lab.expect(st.money).to.equal(0);
	res();
    });
});
//});

lab.test("Check if the game adds entities correctly", () => {
    return new Promise((res, rej)  => {
	let g = new Game({});
	let en1 = new GameEntity("Entity1");
	g.addEntity("en1", en1);

	let en1got = g.getEntity("en1");
	Lab.expect(en1).to.equal(en1got);
	res();
    });
});

lab.test("Check if the game removes entities correctly", () => {
    return new Promise((res, rej)  => {
	let g = new Game({});
	let en1 = new GameEntity("Entity1");
	g.addEntity("en1", en1);

	let en1got = g.getEntity("en1");
	Lab.expect(en1).to.equal(en1got);

	g.removeEntity("en1");
	en1got = g.getEntity("en1");
	Lab.expect(en1got).to.equal(null);
	res();	
    });
});
	 
//describe('Game#checkonAdd', () => {
lab.test("Should check that the game run 'onAdd' through all entities", () => {
    return new Promise((res, rej)  => {
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

	Lab.expect(entitiesAdd[0]).to.equal(true);// "en1 was not iterated");
	Lab.expect(entitiesAdd[1]).to.equal(true);// "en2 was not iterated");
	Lab.expect(entitiesAdd[2]).to.equal(true);// "en3 was not iterated");

	res();
    });
});
//});

//describe('Employer#checkMessage', () => {
lab.test("Check validity of the message generated", () => {
    return new Promise((res, rej)  => {
	let st = new Startup("Manos", 100000);
	st.addEmployee(new Employee("John", 22, 100, 'programmer', 'male'));
	st.addEmployee(new Employee("Matt", 18, 90, 'programmer', 'male'));
	st.addEmployee(new Employee("Claire", 20, 140, 'programmer', 'female'));

	let msg = st._getMessage();;
	Lab.expect(msg.men_workers).to.equal(2);// 'Wrong # of men workers');
	Lab.expect(msg.women_workers).to.equal(1);// 'Wrong # of women workers');
	Lab.expect(msg.avg_experience).to.equal(110);// 'Wrong # of avg experience');
	Lab.expect(msg.avg_age).to.equal(20);// 'Wrong # of avg age');
	res();
    });
    
});
//});



//describe('Employee#checkXPGainBare', () => {
lab.test('Checks if employee have a small xp gain through a year inside an enterprise',
	 () => {
	     return new Promise((res, rej)  => {
		 let emp = new Employee('The man', 20, 0, 'chief', 'male');
		 for (let i = 0; i < 12; i++) {
		     emp.iterate({});
		 }

		 Lab.expect(emp.xp).to.equal(12);// "Incorrect XP gain");
		 res();
	     });
	 });
//});

//describe('Game#Iterations', () => {
lab.test('Should check that the game iterated through all entities', () => {
    return new Promise((res, rej)  => {
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

	Lab.expect(entitiesActive[0]).to.equal(true);// "en1 was not iterated");
	Lab.expect(entitiesActive[1]).to.equal(true);// "en2 was not iterated");
	Lab.expect(entitiesActive[2]).to.equal(true);// "en3 was not iterated");

	res();
    });
});
//});
