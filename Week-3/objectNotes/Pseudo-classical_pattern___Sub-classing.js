function Person (name) {
  // this = Object.create(Person.prototype)
	
  // when called from Programmer:
  // this = {
  //   __proto__: Programmer.prototype
  // }

  this.name = name;
  this.legs = 2;
  this.species = 'Homo Sapiens';
  // return this;
}

Person.prototype = {
  sayName: function () {
    console.log(this.name);
  }
};


function Programmer (name, lang) {
  // this = Object.create(Programmer.prototype)
  // this = {
  //   __proto__: Programmer.prototype
  // }
  Person.call(this, name);
	// Person mutates this with the name, legs and species properties
  // this = {
  //   name: name,
  //   legs: 2,
  //   species: 'Homo Sapiens',
  //   __proto__: Programmer.prototype
  // }
  this.lang = lang;
  this.school = 'Northcoders';
  this.skills = 'sharp AF';
  // return this
}

Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.saySkills = function () {
  console.log('My ' + this.lang + ' skills are ' + this.skills);
}

const student = new Programmer('Bernie', 'JavaScript')
console.log(student);
student.saySkills();
student.sayName();

// Person.prototype <-- Programmer.prototype <-- student