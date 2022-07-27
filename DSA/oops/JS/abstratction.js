class Person {
  constructor() {
    if (this.constructor == Person) {
      throw new Error("Your Error Message...");
        }
    }
    info() {
        throw new Error(" Added abstract Method has no implementation");
    }
}
class Teacher extends Person {
    info() {
        console.log("I am a Teacher");
    }
}
var teacher1 = new Teacher();
teacher1.info();