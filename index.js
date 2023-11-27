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

// map in js
// let result = [1,2,3,4].map(number=>number*2)
// console.log(result)

const sumNumber =(numbers)=>{
    return numbers.map(number=>number*2)
}
console.log(sumNumber([1,2,3,4]))