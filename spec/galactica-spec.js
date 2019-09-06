import { Galactica } from './../src/galactica.js';

describe('Galactica', function() {
    let testGalactica = new Galactica("80");
    it('surpassedAge function should return 10', function() {
      expect(testGalactica.age).toEqual(10);
    });
