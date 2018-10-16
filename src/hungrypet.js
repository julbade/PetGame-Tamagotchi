export let pet = {
  funLevel: 100,
  sleepLevel: 100,
  foodLevel: 100,

  setFun: function() {
    const funInterval = setInterval(() => {
      this.funLevel--;
      if (this.didYouGetEaten() == true) {
        clearInterval(funInterval);
        return "You got eaten!";
      }
    }, 65);
  },
  setSleep: function() {
    const sleepInterval = setInterval(() => {
      this.sleepLevel--;
      if (this.didYouGetEaten() == true) {
        clearInterval(sleepInterval);
        return "You got eaten!";
      }
    }, 65);
  },
  setHunger: function() {
    const foodInterval = setInterval(() => {
      this.foodLevel--;
      if (this.didYouGetEaten() == true) {
        clearInterval(foodInterval);
        return "You got eaten!";
      }
    }, 65);
  },
  dyingPet: function() {
    if (this.funLevel > 0) {
      return false;
    } else if(this.sleepLevel > 0) {
      return false;
    } else if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  },
  interact: function(amount) {
    let that = this;
    return function(play) {
      that.funLevel += amount;
      return `The pet ate the ${play}! Food level goes up ${amount}!`;
    }
  },
  sleep: function(amount) {
    let that = this;
    return function(sleep) {
      that.sleepLevel += amount;
      return `The pet ate the ${sleep}! Food level goes up ${amount}!`;
    }
  },
  feed: function(amount) {
    let that = this;
    return function(feed) {
      that.foodLevel += amount;
      return `The pet ate the ${feed}! Food level goes up ${amount}!`;
    }
  }
};

pet.interact = pet.interact(7);
pet.sleep = pet.sleep(7);
pet.feed = pet.feed(7);
