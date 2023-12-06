/*const wordCounter=()=>{

     let result="";
     for(const letter in phrase){
        console.log(Number(letter) +1);
        result=Number(letter)+1;
     }
     
     return {result}
}
const phrase = prompt("Enter Your Phrases");
console.log(wordCounter()); */

// it for get the number sum
/*const sumArray=(numbers)=>{
    let result=0;
    for(number of numbers){
        console.log(number);
        result=result+number;
    }
    return {result}
}

const nums = [1,2,3,4,5];
console.log(sumArray(nums)) */

// it for get the result of maximum number
/*const maxNumber=(numbers)=>{
    let result = [0];
    for(number of numbers){
        if(number>result){
            result=number;
        }
    }
    return result
}
const nums=[1,2,3,4,5,56,46,9]
console.log(maxNumber(nums)) */

// letter frequency checker
/* const letterFrequency=(phrase)=>{
    console.log(phrase);
    let frequency={};
    for(const letter of phrase){
        if(letter in frequency){
            frequency[letter]=frequency[letter] +1;
        }
        else{
            frequency[letter]=1;
        }
    }
    return frequency
}
 console.log(letterFrequency('lol, let get start class in this weekend!')) */

// word frequency checker
/*const wordFrequency=(phrase)=>{
    
    let frequency={};
 words=phrase.split(' ');
 console.log(words);
    for(const word of words){
      console.log(word)
        if(word in frequency){
            frequency[word]+=1;
        }
        else {
            frequency[word]=1;
        }
    }
    return frequency
}
console.log(wordFrequency('lol with lol yo yo yo')) */

// const wordFrequency=(phrase)=>{
//  words=phrase.split(' ');
//     return letterFrequency(words)
// }
// const userInput=prompt('Enter the words')
// console.log(wordFrequency(userInput))

// map in js //Higher order function
// use for loop and return array
// let result = [1,2,3,4].map(number=>number*2)
// console.log(result)
/*
const sumNumber = (numbers) => {
  return numbers.map((number) => number * 2);
};
console.log(sumNumber([1, 2, 3, 4])); */

// This is the manual way for creating filter
/*const filter = (numbers, greaterThan) => {
  let result = [];
  for (number of numbers) {
    if (number > greaterThan) {
      result.push(number);
    }
  }
  return result;
};
console.log(filter([1, 2, 4, 5, 6, 7], 4)); */

//filter - loops and returns an array with matching conditions
//Higher order function
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const result = numbers.filter((number) => number >= 3 || number < 2);
// console.log(result);
/*
const actors = [
  { name: "Peter", netWorth: 100000 },
  { name: "Johan", netWorth: 1000000 },
  { name: "Amber", netWorth: 3000000 },
  { name: "MatT", netWorth: 500000 },
  { name: "Tom", netWorth: 90100000 },
  { name: "Luis", netWorth: 10 },
];

let result = actors.filter((actor) => actor.netWorth > 10);
console.log(result);

let names = result.map((actor) => actor.name).join(", ");
console.log(names);
testfilter.innerHTML = `${names}`; */

// reduce //Higher order function
// Sum all kinds of net Worths
// SUM: Think reduce
// reduce take in a fuction as an agrument
// reduce loop and give you back accumulator
// const sum = [1, 2, 3, 4]; //this for adding number
// let result = sum.reduce((pre, cur) => pre + cur);
// console.log(result);

// function number(a, b) {
//   //this for adding number
//   return a + b;
// }
// const sum = [1, 2, 3, 4];
// let result = sum.reduce(number);
// console.log(result);

// const sum = [1, 2, 3, 4]; //this for multiply number
// let result = sum.reduce((a, b) => a * b);
// console.log(result);

const actors = [
  { name: "Peter", netWorth: 100000 },
  { name: "Johan", netWorth: 1000000 },
  { name: "Amber", netWorth: 3000000 },
  { name: "MatT", netWorth: 500000 },
  { name: "Tom", netWorth: 90100000 },
  { name: "Luis", netWorth: 10 },
];

let sumOfAllNetWoth = actors.reduce((prev, curr) => prev + curr.netWorth, 0);
console.log(sumOfAllNetWoth);
