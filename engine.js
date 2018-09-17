// 1. Create class Elements with a name and a build year parameters
class Element {
  constructor(name, yearOfBuilt) {
    this.name = name;
    this.yearOfBuilt = yearOfBuilt;
  }
}

class Park extends Element {
  constructor(name, yearOfBuilt, area, amountOfTrees) {
    super(name, yearOfBuilt);
    this.area = area;
    this.amountOfTrees = amountOfTrees;
    this.calculateDensity();
  }

  // 3. Create Method which calculates tree density (num of trees / park area)
  calculateDensity() {
    this.density = Math.round(this.amountOfTrees / this.area);
    console.log(
      `In ${this.name} park trees density is ${this.density} [tree/ha]`
    );
  }
}

class Street extends Element {
  constructor(name, yearOfBuilt, stLength) {
    super(name, yearOfBuilt);
    this.stLength = stLength;
    this.classification();
    console.log(
      `${this.name} street is classified as ${this.classified} because it's ${
        this.stLength ? this.stLength : "---"
      } long.`
    );
  }

  // 7. Create, set and display classification of all streets (tiny/small/normal/big/huge)
  classification() {
    let classes = new Map();
    classes.set(100, "tiny");
    classes.set(500, "small");
    classes.set(1000, "normal");
    classes.set(5000, "big");
    classes.set(10000, "huge");
    for (let value of classes.entries()) {
      if (!this.stLength) {
        this.classified = "normal";
        break;
      } else if (this.stLength >= value[0]) {
        this.classified = value[1];
      }
    }
  }
}

// 2. Create Map with 3 parks and 4 streets (instances of elements)
{
  let streets = new Map();
  console.log(`Task No.7`);
  streets.set(1, new Street("Górczewska", 1775, 5200));
  streets.set(2, new Street("Krucza", 1770, 1300));
  streets.set(3, new Street("Okopowa", 1770, 2200));
  streets.set(4, new Street("Powstańców Śląskich", 1987, 5900));
  // streets.set(5, new Street('Przyokopowa', 1999));

  let parks = new Map();
  console.log(`Task No.3`);
  parks.set(1, new Park("Moczydło", 1920, 27, 12593));
  parks.set(2, new Park("Krasińskich", 1766, 11.8, 10852));
  parks.set(3, new Park("Świętokrzyski", 1962, 6, 5109));
  console.log(`Task No.1 & 2`);
  console.log(streets, parks);

  // 4. Create Method calculating average age of parks (sum of all ages / number of parks)
  function calculateAverAge(map) {
    let sumOfParks = 0;
    for ([key, value] of map.entries()) {
      sumOfParks += 2017 - value.yearOfBuilt;
    }
    sumOfParks = Math.round(sumOfParks / map.size);
    return sumOfParks;
  }

  console.log(`Task No.4`);
  console.log(`Average age of all parks is ${calculateAverAge(parks)}`);

  // 5. Display the name of park having more than 1000 trees
  function over1000(map) {
    let result = [];
    for ([key, value] of map.entries()) {
      value.amountOfTrees > 1000 ? result.push(value.name) : null;
    }
    return result;
  }

  console.log(`Task No.5`);
  console.log(`Parks which contains more than 1000 trees : ${over1000(parks)}`);

  // 6. Display Total and average length of the town's streets
  function calculateStreetsLengths(map) {
    let sum = 0;
    for ([key, value] of map.entries()) {
      sum += value.stLength;
    }
    console.log(
      `Total length of all streets is: ${sum} meters and the average of these lengths is ${sum /
        map.size} meters.`
    );
  }

  console.log(`Task No.4`);
  calculateStreetsLengths(streets);
}
