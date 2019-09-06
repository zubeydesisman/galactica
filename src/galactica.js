export function Galactica(age) {
  this.age = age
}

Galactica.prototype.surpassedAge = function () {
  if (this.age > 71) {
    return this.age - 71
  }
}
Galactica.prototype.marsAge = function () {
  return this.age / 1.88
}
Galactica.prototype.mercuryAge = function () {
  return this.age / .24
}
Galactica.prototype.venusAge = function () {
  return this.age / .62
}
Galactica.prototype.jupiterAge = function () {
  return this.age / 11.86
}
Galactica.prototype.leftMarsAge = function () {
  return (71 - this.age) / 1.88
}
Galactica.prototype.leftMercuryAge = function () {
  return (71 - this.age) / .24
}
Galactica.prototype.leftVenusAge = function () {
  return (71 - this.age) / .62
}
Galactica.prototype.leftJupiterAge = function () {
  return (71 - this.age) / 11.86
}
