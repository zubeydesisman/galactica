export function Galactica(age, marsAge, mercuryAge, venusAge, jupiterAge) {
  this.age = age
}

Galactica.prototype.marsAge = function () {
  return this.age * 1.88
}

 Galactica.prototype.mercuryAge = function () {
   return this.age * .24
 }

 Galactica.prototype.venusAge = function () {
   return this.age / .62
 }

 Galactica.prototype.jupiterAge = function () {
   return this.age / .11.86 
 }
