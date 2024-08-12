//Define at least one variable for each of the following data types: 

//a word (e.g., a noun, verb, adjective)
let word = "horses";

//a numeric value (e.g., a number)
let number = 6;

//a number calculated from an expression involving at least one other number
let calculatedNumber= number * 5;

//a true/false value

let isHungry = true;

//a value entered by the user using prompt 

let userInput = prompt("Where are the horses?");

//Create a short story (at least 2-3 sentences) using these variables. The story should make sense even if it's silly or whimsical. 
//Concatenate your variables into a single string that forms a complete sentence or sentences. 

let story = `Once upon a time a girl, her father and thier ${word} entered a new village. They had ${number} ${word}. ${userInput}, asked the father. Days later they found out it was ${isHungry} that ${calculatedNumber} of them died due to the new air in the village.`;

//Use console.log() to output the concatenated string with your story to the console.

console.log(story);