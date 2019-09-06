import { Galactica } from './../src/galactica.js';
describe('Galactica', function() {

  let testGalactica = new Galactica("90");
  it('surpassedAge function should return 19', function() {
    expect(testGalactica.surpassedAge()).toEqual(19);
  });
  it('marsAge function should return 47.8728404', function() {
    expect(testGalactica.marsAge()).toEqual(47.8728404);
  });
  it('mercuryAge function should return 375', function() {
    expect(testGalactica.mercuryAge()).toEqual(375);
  });
  it('venusAge function should return 145.1612', function() {
    expect(testGalactica.venusAge()).toEqual(145.1612);
  });
  it('jupiterAge function should return 7.588', function() {
    expect(testGalactica.jupiterAge()).toEqual(7.588);
  });
});
