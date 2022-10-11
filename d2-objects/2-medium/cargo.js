/*  Create an object called cargo.
    This object has three properties: ship1, ship2 and ship3 with 
    values of 30,20 and 10 respectively.  Each ship is meant to carry equal weight.
    Create a method called shareTheLoad.
    This method will return a new object {ship1, ship2, ship3} with values representing 
    how much weight they are under or over to balance the three ships. 

 */

const cargo = {
    ship1: 30,
    ship2: 20,
    ship3: 10,
    shareTheLoad() {
        const average = (this.ship1 + this.ship2 + this.ship3) / 3;
        return { ship1: average - this.ship1, ship2: average - this.ship2, ship3: average - this.ship3 }
    }
}

// Test command (in terminal) "npm run test:d2:medium:cargo"
module.exports = { cargo };
