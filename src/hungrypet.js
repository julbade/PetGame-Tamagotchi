export let pet = {
  foodLevel: 50,

  setHunger: function() {
    const hungerInterval = setInterval(() => {
      this.foodLevel--;
      if (this.didYouGetEaten() == true) {
        clearInterval(hungerInterval);
        return "You got eaten!";
      }
    }, 40);
  },
  dyingPet: function() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  },
  interact: function(amount) {
    let that = this;
    return function(food) {
      that.foodLevel += amount;
      return `The pet ate the ${food}! Food level goes up ${amount}!`;
    }
  }
};

pet.play = pet.interact(5);
pet.sleep = pet.interact(10)
pet.feed = pet.interact(15);
pet.hurt = pet.interact(-10);
pet.walk =  pet.interact(Math.floor((Math.random() * 10) + 5));
