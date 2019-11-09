function icecreamFactory(flavour) {
	if (typeof flavour !== "string")
		throw new TypeError("I can only make icecreams with string flavours!");
	return `${flavour} icecream`;
}

module.exports = icecreamFactory;
