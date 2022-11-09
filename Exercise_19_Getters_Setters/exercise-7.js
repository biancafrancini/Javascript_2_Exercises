class Person {
  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  set firstName(newName) {
    if (typeof newName !== "string") {
      this._firstName = "-- Enter a valid name --";
    } else {
      this._firstName = newName;
    }
  }

  set lastName(newLastName) {
    if (typeof newLastName !== "string") {
      this._lastName = "-- Enter a valid last name --";
    } else {
      this._lastName = newLastName;
    }
  }

  set age(newAge) {
    if (typeof newAge !== "number") {
      this._age = "-- Enter a valid age --";
    } else {
      this._age = newAge;
    }
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get age() {
    return this._age;
  }

  get fullName() {
    return this._firstName + " " + this._lastName;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);
