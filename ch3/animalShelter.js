class Node {
  constructor(val = null) {
    this.next = null;
    this.val = val;
  }

  toString(){
    console.log({val: this.val, next: this.next});
  }

}

class AnimalShelter {
  constructor() {
    this.lastDog = null;
    this.lastCat = null;
    this.nextDog = null;
    this.nextCat = null;
  }

  add(animal){
    if (animal.type === "Dog") {
      let dogNode = new Node(animal);
      if (this.nextDog === null) {
        this.nextDog = dogNode;
        this.lastDog = dogNode;
      }else {
        this.lastDog.next = dogNode;
        this.lastDog = dogNode;
      }
    }else {
      let catNode = new Node(animal);
      if (this.nextCat === null) {
        this.nextCat = catNode;
        this.lastCat = catNode;
      }else {
        this.lastCat.next = catNode;
        this.lastCat = catNode;
      }
    }
  }

  removeAny(){
    // console.log(this.nextCat.val.timeStamp, this.nextDog.val.timeStamp);

    if (this.nextCat.val.timeStamp < this.nextDog.val.timeStamp) {
      this.removeCat();
    }else {
      this.removeDog();
    }
  }

  removeDog(){
    let dog = this.nextDog;
    this.nextDog = this.nextDog.next;
    return dog;
  }

  removeCat(){
    let cat = this.nextCat;
    this.nextCat = this.nextCat.next;
    return cat;
  }
}

let shelter = new AnimalShelter();
shelter.add({type: "Dog", timeStamp: 1});
shelter.add({type: "Dog", timeStamp: 2});
shelter.add({type: "Dog", timeStamp: 4});

shelter.add({type: "Cat", timeStamp: 3});
shelter.add({type: "Cat", timeStamp: 6});
shelter.add({type: "Cat", timeStamp: 10});

// shelter.removeDog();
// shelter.removeCat();

shelter.removeAny();
shelter.removeAny();
shelter.removeAny();

console.log(shelter);
