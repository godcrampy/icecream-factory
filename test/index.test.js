const icecreamFactory = require("../index");

it("makes banana icecream", () => {
  expect(icecreamFactory("banana")).toBe("Banana Icecream");
});

it("throws type error on passing integer", () => {
  expect(() => icecreamFactory(4)).toThrow(TypeError);
});
