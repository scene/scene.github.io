class Animal {
  constructor(public name: string) {}
  printName(): void {
    console.log("hello " + this.name);
  }
}
class Cat extends Animal {
  constructor() {
    super("super");
  }
}

let cat = new Cat()
let animal = new Animal('cat')
animal.printName()