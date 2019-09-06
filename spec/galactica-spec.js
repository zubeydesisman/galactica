import { Galactica } from './../src/galactica.js';
describe('Galactica', function() {

  let testGalactica = new Galactica("90");
  it('surpassedAge function should return 19', function() {
    expect(testGalactica.surpassedAge()).toEqual(19);
  });
  it('marsAge function should return  47.87234042553192', function() {
    expect(testGalactica.marsAge()).toEqual( 47.87234042553192);
  });
  it('mercuryAge function should return 375', function() {
    expect(testGalactica.mercuryAge()).toEqual(375);
  });
  it('venusAge function should return 145.16129032258064', function() {
    expect(testGalactica.venusAge()).toEqual(145.16129032258064);
  });
  it('jupiterAge function should return 7.588', function() {
    expect(testGalactica.jupiterAge()).toEqual(7.588532883642496);
  });
  it('leftMarsAge function should return  -10.106382978723405', function() {
   expect(testGalactica.leftMarsAge()).toEqual( -10.106382978723405);
  });
  it('leftMercuryAge function should return -79.16666666666667', function() {
   expect(testGalactica.leftMercuryAge()).toEqual(-79.16666666666667);
  });
  it('leftVenusAge function should return -30.64516129032258', function() {
    expect(testGalactica.leftVenusAge()).toEqual(-30.64516129032258);
  });
  //it('leftJupiterAge function should return -1.6020236087689714', function() {
  //  expect(testGalactica.leftJupiterAge()).toEqual(-1.6020236087689714);
  // });
});
