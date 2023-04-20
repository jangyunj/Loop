let jokes = {
  joke1: "ChuckNoriss1",
  joke2: "ChuckNoriss2",
  joke3: "ChuckNoriss3",
  joke4: "ChuckNoriss4",
};
//FOR IN - loops through PROPERTIES of an object
for (let joke in jokes) {
  console.log(joke);
}

for (let joke in jokes) {
  console.log(jokes[joke]);
}

//FOR OF hrough the values of an ITERABLE object
//Arrays, Strings, Maps, NodeLists, and more
let array = [1, 2, 3, 4, 5];

for (let num of array) {
  console.log(num);
}

//WHILE
let x = 10;
while (x <= 50) {
  console.log(x);
  x += 10;
}

//DO WHILE
do {
  console.log(x);
  x += 10;
} while (x <= 50);

//BREAK - BREAK OUT OF THE LOOP
for (let i = 1; i <= 5; i++) {
  if (i == 3) {
    break;
  } else {
    console.log(i);
  }
}

//CONTINUE - USED TO SKIP
for (let i = 1; i <= 5; i++) {
  if (i == 3) {
    continue;
  } else {
    console.log(i);
  }
}
