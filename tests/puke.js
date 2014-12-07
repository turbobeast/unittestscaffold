var puke = require('../dev/puke');

describe("Puke", function () {
	it("should vomit on you", function () {
		expect(puke(1)).toEqual("puke");
		expect(puke(12)).toEqual("puuuuuuuuuuuuke");
		expect(puke(3)).toEqual("puuuke");
	});
});