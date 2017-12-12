var assert = require('assert');
var Startup = require('./startup');

describe('Startup#Init', () => {
    it('Should create an empty startup', () => {
	let st = new Startup("Josnei");
	assert(st.name == "Josnei");
	assert(st.money === 0);
    });
});
