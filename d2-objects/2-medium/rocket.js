/*
Create an object with the name rocket with the following:
  Properties:
    fuel: 200
    fuelCostToA: 20
    fuelCostToB: 30
    fuelCostToC: 35
  Methods:    all three methods are similar.  It checks whether the rocket has enough fuel to travel round trip.
              If it does, it will subtract this amount from the fuel and return true
              If it does not, it will do nothing but return false.
    flyToA()
    flyToB()
    flyToC()
*/

let rocket = {
  fuel: 200,
  fuelCostToA: 20,
  fuelCostToB: 30,
  fuelCostToC: 35,
  flyToPoint(cost) {
    cost *= 2
    if (this.fuel - cost >= 0) {
      this.fuel -= cost
      return true
    }
    return false
  },
  flyToA() {
    return this.flyToPoint(this.fuelCostToA)
  },
  flyToB() {
    return this.flyToPoint(this.fuelCostToB)
  },
  flyToC() {
    return this.flyToPoint(this.fuelCostToC)
  }
};

//Test command (in terminal) "npm run test:d2:medium:rocket"
module.exports = { rocket };
