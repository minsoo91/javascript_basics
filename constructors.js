function Cat(name, owner) { 
  this.name = name,
  this.owner = owner;
}

Cat.prototype.cuteStatement = function() {
    console.log("Everybody loves " + this.name);
};

Cat.prototype.meow = function() {
  console.log("Meow")
};

var markov = new Cat("Markov", "Ned");
markov.meow = function(){
  console.log("Markov purrrrrrrrmkovvvvoyrrrrr")
}
var pretzel = new Cat("Pretzel", "Mr. Clean");

// markov.cuteStatement();
// pretzel.cuteStatement();
// markov.meow();
// pretzel.meow();