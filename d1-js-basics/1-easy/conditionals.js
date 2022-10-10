/*
  Using the variable sides and conditionals do the following:
  - If sides is 2 or lower, log "No shape" to console.
  - If sides is 3 log "Triangle" to console.
  - If sides is 4 log "Rectangle" to console.
  - If sides is 5 log "Pentagon" to console.
  - If sides is 6 or higher log "Slow down, Einstein!" to console.
*/
const d1EasyConditionals = (sides) => {
	if (sides < 3) {
		console.log("No shape")
	} else if (sides > 5) {
		console.log("Slow down, Einstein")
	} else {
		console.log((["Triangle", "Rectangle", "Pentagon"])[sides - 3])
	}
};

// Test command (in terminal) "npm run test:d1:easy:conditionals"
module.exports = { d1EasyConditionals };
