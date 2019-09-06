export function Galactica(age) {
  this.age = age
}

Galactica.prototype.surpassedAge = function () {
  if (this.age > 71) {
    return this.age - 71
  }
}
Galactica.prototype.marsAge = function () {
  if (this.age < 71) {
    return this.age / 1.88
  }
}
Galactica.prototype.mercuryAge = function () {
  if (this.age < 71) {
    return this.age / .24
  }
}
Galactica.prototype.venusAge = function () {
  if (this.age < 71) {
    return this.age / .62
  }
}
Galactica.prototype.jupiterAge = function () {
  if (this.age < 71) {
    return this.age / 11.86
  }
}
Galactica.prototype.leftMarsAge = function () {
  if (this.age < 71){
    return (71 - this.age) / 1.88
  }
}
Galactica.prototype.leftMercuryAge = function () {
  if (this.age < 71) {
    return (71 - this.age) / .24
  }
}
Galactica.prototype.leftVenusAge = function () {
  if (this.age < 71) {
    return (71 - this.age) / .62
  }
}
Galactica.prototype.leftJupiterAge = function () {
  if (this.age < 71) { 
    return (71 - this.age) / 11.86
  }
}
