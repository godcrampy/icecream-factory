/**
 *
 * @param {string} flavour flavour of the icecream
 */
function icecreamFactory(flavour) {
	if (typeof flavour !== "string")
		throw new TypeError("I can only make icecreams with string flavours!");
  flavour = flavour.charAt(0).toUpperCase() + flavour.slice(1);
	return `${flavour} Icecream`;
}

module.exports = icecreamFactory;
