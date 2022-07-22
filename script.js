function example1() {
  var topic = "javascript";
  if (topic) {
    let topic = "ECMAScript";
    console.log("block", topic);
  }
  console.log("global", topic);
}
//example1();

function example2() {
  var div;
  var box = document.getElementById("box");

  for (let i = 0; i < 5; i++) {
    div = document.createElement("div");
    div.onclick = function () {
      alert("This is box # " + i);
    };
    box.appendChild(div);
  }
}
//example2();

function example3() {
  const pizza = true;
  console.log(pizza);
}
//example3();

function example4(firstName) {
  //console.log("Hello " + firstName);
  console.log(`Hello ${firstName}`);
}
//example4("Wayne");

function example5(firstName, price) {
  let shipping = 5.95;
  console.log(`Hi ${firstName}! Thanks!
    Total: $${price}
    Shipping: $${shipping}
    Grand Total: $${(price + shipping).toFixed(2)}
    `);
}
//example5("Wayne", 7.0);

// Array methods
function example6() {
  const planet = "Earth";
  //console.log(planet.startsWith("ear"));
  //console.log(planet.endsWith("h"));
  //console.log(planet.includes("e"));
  //console.log(planet.search("E"));
}
//example6();

// Symbols
function example7() {
  const id = Symbol();

  const courseInfo = {
    title: "JavaScript",
    topics: ["strings", "arrays", "objects"],
  };

  courseInfo[id] = 41284;
  console.log(courseInfo);
}
//example7();

// Maps
function example8() {
  let course = new Map();

  course.set("react", { description: "ui" });
  course.set("jest", { description: "testing" });

  //   console.log(course);
  //   console.log(course.react); // undefined
  //   console.log(course.get("react"));

  let details = new Map([
    [new Date(), "today"],
    [2, { javascript: ["js", "node", "react"] }],
    ["items", [1, 2]],
  ]);
  console.log(details);

  details.forEach(function (item) {
    console.log(item);
  });
}
//example8();

// Sets //
function example9() {
  books = new Set();
  books.add("Pride and Prejudice");
  books.add("War and Peace").add("Oliver Twist");

  console.log(books);
  console.log(books.size);
  books.delete("Oliver Twist");
  books.add("Oliver Twist");

  books.forEach(function (item) {
    console.log(item);
  });

  books.map(function (item) {
    // script.js:104 Uncaught TypeError: books.map is not a function
    console.log(item);
  });
  console.log("Has Oliver Twist?", books.has("Oliver Twist"));
}
//example9();

// Spread Operator //
function example10() {
  let cats = ["Biscuit", "Jungle"];
  let dogs = ["Stella", "Camper"];

  let animals = ["Smoky", "Miro", "Swimmy", cats, dogs];

  animals = ["Smoky", "Miro", "Swimmy", ...cats, ...dogs];

  console.log(animals);
}
//example10();

// Destructuring //
function example11() {
  let cities = ["Spokan", "Boston", "Los Angeles", "Seattle", "Portland"];

  let [first, second] = cities;

  console.log(cities[0]);
  console.log(first, second);
}
//example11();

// Includes //
function example12() {
  let cities = ["Spokan", "Boston", "Los Angeles", "Seattle", "Portland"];

  console.log(cities.includes("Boston"));
}
//example12();

// Object Literals //
function example13(name, sound) {
  return {
    name,
    sound,
    powderYell: function () {
      let yell = this.sound.toUpperCase();
      console.log(` ${this.name} ${yell}! ${yell}`);
    },
  };
}
//example13("Wayne", "yeah").powderYell();

// Object Spread //
function example14() {
  const daytime = {
    breakfast: "Oatmeal",
    lunch: "Grilled cheese",
  };
  const nightTime = "Chicken and Noodles";

  const backpackingMeals = {
    ...daytime,
    nightTime,
  };

  console.log(backpackingMeals);
}
//example14();

// Object Destructuring //
function example15() {
  //   const sandwich = {
  //     title: "Reuben",
  //     price: 7,
  //     description: "A classic",
  //     ingredients: ["bread", "corned beef", "sauerkraut", "cheese"],
  //   };
  //   console.log(sandwich);
  //   console.log(sandwich.title);
  //   console.log(sandwich.price);

  const vacation = {
    destination: "Chile",
    travelers: 2,
    activity: "sking",
    const: "a lot",
  };

  function marketing({ destination, activity }) {
    return `Come to ${destination} and do some ${activity}`;
  }

  console.log(marketing(vacation));

  const { title, price } = {
    title: "Reuben",
    price: 7,
    description: "A classic",
    ingredients: ["bread", "corned beef", "sauerkraut", "cheese"],
  };

  console.log(title);
  console.log(price);
}
//example15();

// for / of loop
function example16() {
  //   for (let letter of "JavaScript") {
  //     console.log(letter);
  //   }

  //   let topics = ["JavaScript", "node", "CSS"];

  //   for (let topic of topics) {
  //     console.log(topic);
  //   }

  let topics = new Map();
  topics.set("HTML", "topics/html", "http://www.google.com");
  topics.set("CSS", "topics/css");
  topics.set("JavaScript", "topics/javascript");

  for (let topic of topics) {
    console.log(topic);
  }

  for (let topic of topics.keys()) {
    console.log("Keys: ", topic);
  }

  for (let topic of topics.values()) {
    console.log("Values: ", topic);
  }

  for (let topic of topics.entries()) {
    console.log("Entries: ", topic);
  }
}
//example16();

// Classes //
function example17() {
  class Vehicle {
    constructor(description, wheels) {
      (this.description = description), (this.wheels = wheels);
    }

    describeYourself() {
      console.log(`I am a ${this.description} with ${this.wheels} wheels`);
    }
  }

  let coolSkiVan = new Vehicle("cool ski van", 4);

  console.log(coolSkiVan);
  coolSkiVan.describeYourself();
}
//example17();

// Class Inheritance //
function example18() {
  class Vehicle {
    constructor(description, wheels) {
      (this.description = description), (this.wheels = wheels);
    }

    describeYourself() {
      console.log(`I am a ${this.description} with ${this.wheels} wheels`);
    }
  }

  class SemiTruck extends Vehicle {
    constructor() {
      super("semi truck", 18);
    }
  }

  let groceryStoreSemi = new SemiTruck();
  console.log(groceryStoreSemi);
  groceryStoreSemi.describeYourself();
}
//example18();

// Getters and Setters //
function example19() {
  //   let attendance = {
  //     _list: [],
  //     set addName(name) {
  //       this._list.push(name);
  //     },
  //     get list() {
  //       return this._list.join(", ");
  //     },
  //   };

  //   attendance.addName = "Wayne Hatter";
  //   console.log(attendance.list);

  //   attendance.addName = "Bill William";
  //   attendance.addName = "Chuck Charley";
  //   console.log(attendance.list);

  class Hike {
    constructor(distance, pace) {
      this.distance = distance;
      this.pace = pace;
    }

    get lengthInHours() {
      return `${this.calcLength()}`;
    }
    calcLength() {
      return this.distance / this.pace;
    }
  }

  const mtTallac = new Hike(10, 3);
  console.log(Math.round(mtTallac.lengthInHours));
}
// example19();

// .repeat() //
function example20() {
  //   let yell = "woo!";

  //   let party = yell.repeat(20);

  //   console.log(party);

  let cat = {
    meow(times) {
      console.log("meow... ".repeat(times));
    },
    purr(times) {
      console.log("prrr... ".repeat(times));
    },
    snore(times) {
      console.log("ZzzZzz... ".repeat(times));
    },
  };
  cat.meow(3);
  cat.purr(4);
  cat.snore(5);
}
//example20();

// Default Paramaters //
function example21() {
  function add(x = 5, y = 6) {
    console.log(x + y);
  }
  add();
  let activityName;
  function haveFun(activityName = "hiking", time = 3) {
    console.log(`Today I will go ${activityName} for ${time} hours`);
  }

  haveFun("biking", 2.5);
  haveFun(activityName, 4);
}
//example21();

// Arrow Functions //
function example22() {
  //   let studentList = function (students) {
  //     console.log(students);
  //   };
  //   studentList(["A", "B", "C"]);

  //   let studentList = (students) => console.log(students);
  //   studentList(["A", "B", "C"]);

  //   let list = ["apple", "banana", "cherries"];
  //   list.map(function (item) {
  //     console.log(item);
  //   });

  let list = ["apple", "banana", "cherries"];
  list.map((item) => console.log(item));
}
//example22();

// Arrow Functions Part II //
function example23() {
  let person = {
    first: "Angie",
    hobbies: ["bowl", "swim", "code"],
    // printHobbies: function () {
    //   let person = this;
    //   this.hobbies.forEach(function (hobby) {
    //     let string = `${person.first} likes to ${hobby}`;
    //     console.log(string);
    //   });
    // },
    printHobbies: function () {
      this.hobbies.forEach((hobby) => {
        let string = `${this.first} likes to ${hobby}`;
        console.log(string);
      });
    },
  };
  person.printHobbies();
}
//example23();

// Generators //
function example24() {
  function* director() {
    yield "Three";
    yield "Two";
    yield "One";
    yield "Action!";
  }
  let countdown = director();
  console.log(countdown.next());
}
//example24();

// Promises //
function example25() {
  const delay = (seconds) =>
    new Promise((resolve, reject) => {
      if (typeof seconds !== "number") {
        reject(new Error("seconds must be a number"));
      }
      setTimeout(resolve, seconds * 1000);
    });
  console.log("Zero seconds");
  delay(1).then(() => console.log("1 second"));
  delay(5).then(() => console.log("5 seconds"));
}
//example25();

// Promises Part II //
function example26() {
  const spacePeople = () => {
    return new Promise((resolve, reject) => {
      const api = "http://api.open-notify.org/astros.json";
      const request = new XMLHttpRequest();
      request.open("GET", api);
      request.onload = () => {
        if (request.status === 200) {
          resolve(JSON.parse(request.response));
        } else {
          reject(Error(request.statusText));
        }
      };
      request.onerror = (err) => reject(err);
      request.send();
    });
  };
  spacePeople().then(
    (spaceData) => console.log(spaceData),
    (err) => console.error(new Error(`Can't load people`))
  );
}
//example26();

// Promises with fetch //
function example27() {
  let getSpacePeople = () =>
    fetch(`http://api.open-notify.org/astros.json`).then((res) => res.json());

  getSpacePeople().then((data) => console.log(data));

  let spaceNames = () =>
    getSpacePeople()
      .then((json) => json.people)
      .then((people) => people.map((p) => p.name))
      .then((names) => names.join(", "));

  spaceNames().then((data) => console.log(data));
}
//example27();

// Async/Await //
function example28() {
  const delay = (seconds) =>
    new Promise((resolve) => setTimeout(resolve, seconds * 1000));

  const countToFive = async () => {
    console.log("Zero seconds");
    await delay(1);
    console.log(`1 second`);
    await delay(1);
    console.log(`2 seconds`);
    await delay(1);
    console.log(`3 seconds`);
  };

  countToFive();
}
//example28();

// Async/Await with fetch //
function example29() {
  const githubRequest = async (login) => {
    let response = await fetch(`https://api.github.com/users/${login}`);

    let json = await response.json();
    let summary = `
    Name: ${json.name}
    Company: ${json.company}
    Website: ${json.blog}
    `;
    console.log(summary);
  };
  githubRequest(`yourwpmadesimple`);
}
example29();
