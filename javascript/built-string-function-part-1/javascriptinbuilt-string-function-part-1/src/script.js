  console.clear();
var myFirstString = "This is a string for javascript string fuctions, Javascript";
//Returns the length of the string 
console.log(myFirstString.length);

//Find index of a string inside another string string 
console.log(myFirstString.indexOf('javascript'));
console.log(myFirstString.indexOf('This'));

//Find LAST index of a string inside another string 
console.log(myFirstString.lastIndexOf('Javascript'));
console.log(myFirstString.lastIndexOf('This'))

//Get a part of our string slice (start, end)
console.log(myFirstString.slice(0, 4))
console.log(myFirstString.slice(21, 31))
console.log(myFirstString.slice(-10))
console.log(myFirstString.slice(5))

//Get sub string funtion - substr(stratPos, lenght)
console.log(myFirstString.substr(0, 4))
console.log(myFirstString.substr(21, 10))
console.log(myFirstString.substr(21))


