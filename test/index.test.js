const icecreamFactory = require("../index");

it("makes banana icecream", () => {
	expect(icecreamFactory("banana")).toBe("banana icecream");
});

it("throws type error on passing integer", () => {
	expect(() => icecreamFactory(4)).toThrow(TypeError);
});
