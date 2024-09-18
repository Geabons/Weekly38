/*
    Hello.
    This is a problem set for you to work on
    The idea is to practice a few things at a time.
    You do this by writing your answer after a task is given (see the example).

    DO NOT change the provided code unless the task specifically says you should.
*/

/*
    Task: Example
    Write the code to print all the names in the list, one name per line.
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"];

for (let index = 0; index < people.length; index++) {
  let person = people[index];
  console.log(person);
}

/*
    Task: A
    Create variables for:
    * Hours in a day
    * Minutes in an hour
    * Seconds in a minute
    * The ratio between water and juice when mixing juice
    * Days until your birthday
    * Millimeters of rain that falls
*/
console.log("Task: A");

const TASK_A_TEXT = {
    hoursInDay: "hours in a day: ",
    minutesInHour: "minutes in an hour: ",
    secondsInMinutes: "seconds in a minute: ",
    waterAndJuice: "Ratio between water an juice when mixing: ",
    daysUntilBirthdayText: "days until your birthday: ",
    millimetersOfRainText: "millimeters of rain fallen: "
}
const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;
const SECONDS_IN_MINUTE = 60;
let waterAndJuiceRatio = 50;
let daysUntilBirthday = 16;
let millimetersOfRain = 8;

console.log(TASK_A_TEXT.hoursInDay + HOURS_IN_DAY);
console.log(TASK_A_TEXT.minutesInHour + MINUTES_IN_HOUR);
console.log(TASK_A_TEXT.secondsInMinutes + SECONDS_IN_MINUTE);
console.log(TASK_A_TEXT.waterAndJuice + waterAndJuiceRatio);
console.log(TASK_A_TEXT.daysUntilBirthdayText + daysUntilBirthday);
console.log(TASK_A_TEXT.millimetersOfRainText + millimetersOfRain);


/*
    Task: B
    Use your variables (do not redefine them) from task A and calculate:
    * How many seconds are in 2.5 hours?
    * How many minutes are in 123 days?
    Remember to assign the answers to their own variables.
    Example:
    // How many deciliters are in 4.5 cups?
    const dlInCups = 2.36588;
    const amountOfDL = dlInCups * 4.5;
*/
console.log("Task: B");

const TASK_B_TEXT = {
  secondsInHours: "seconds in 2.5 days: ",
  minutesIn_Days: "minutes in 123 days: ",
};

const SECONDS_IN_HOURS = SECONDS_IN_MINUTE * MINUTES_IN_HOUR * 2.5;
console.log(TASK_B_TEXT.secondsInHours + SECONDS_IN_HOURS);

const MINUTES_IN_DAYS = MINUTES_IN_HOUR * HOURS_IN_DAY * 123;
console.log(TASK_B_TEXT.minutesIn_Days + MINUTES_IN_DAYS);

/*
    Task: C
    Use a loop (for) to print the numbers from 1 to 10.
*/
console.log("Task: C");

for (let i = 1; i < 11; i++) {
  let number = "number: " + [i];
  console.log(number);
}

/*
    Task: D
    Use a loop (for) to print the numbers from 10 to 1.
*/
console.log("Task: D");

for (let i = 10; i > 0; i--) {
  let numbers = "number: " + [i];
  console.log(numbers);
}

/*
    Task: E
    This one is a bit more difficult, but you can do it ;)
    Use a loop (for) to print the even numbers between 1 and 100.
*/
console.log("Task: E");

for (let i = 2; i < 100; i++) {
  if (i % 2 === 0) {
    let evenNumbers = "number: " + [i];
    console.log(evenNumbers);
  } else {
  }
}

/*
    Task: F
    Use a while loop to print all the numbers from 0 to 100;
*/
console.log("Task: F");

let aNumber = 0;

while (aNumber < 101) {
  console.log(aNumber);
  aNumber++;
}

/*
    Task: G
    Fill in the code needed to make the following code print the expected result.
*/
console.log("Task: G");

const DICTIONARY = {
  no: {
    hello: "Hello there",
    howAreYou: "How are you doing?",
  },
  en: {
    hello: "Hi",
    howAreYou: ", how are you?",
    goodQuestionsLatly: "Gotten any good questions lately?",
  },
};

console.log(`${DICTIONARY.en.hello} Christian ${DICTIONARY.en.howAreYou}`); //-> Hi Christian, how are you?
console.log(`${DICTIONARY.en.goodQuestionsLatly}`); //-> Gotten any good questions lately?
