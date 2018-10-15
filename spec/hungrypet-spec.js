import { HungryPet } from './src/hungrypet.js';

describe ('HungryBear', function(){
  let fuzzy = new HungryBear("Fuzzy");

  beforeEach(function(){
    jasmine.clock().install();
    fuzzy.setHunger();
  });

  afterEach(function(){
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 10 when its created', function(){
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodLevel).toEqual(10);
  });

  it ('should have a food level of 7 after 3001 milliseconds', function(){
    jasmine.clock().tick(3001);
    expect(fuzzy.foodLevel).toEqual(7);
  });

  it('should get very hungry if the food level drops below zero', function () {
    fuzzy.foodLevel = 0;
    expect(fuzzy.didyouGetEaten()).toEqual(true);
  });

  it('should get bery hungry if 10 secs pass without feeding', function() {
    jasmine.clock().tick(10001);
    expect(fuzzy.didyouGetEaten()).toEqual(true);
  });

  it('should have a food level of ten if it is fed', function() {
    jasmine.clock().tick(9001);
    fuzzy.feed();
    expect(fuzzy.foodLevel).toEqual(10);
  });

});
