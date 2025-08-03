console.clear()
var exampleString = "This is javascript tutorial"
//toUpperCase() - It converts our string -> Uppercase characters
console.log(exampleString.toUpperCase())

//toLowerCase() - It converts our string -> lowercase characters
console.log(exampleString.toLowerCase())

//concat() - It merges two or more string 
var firstName = "Javascript"
var lastName = "Playground"
console.log(exampleString.concat(' ',firstName))
console.log(exampleString.concat(' ',firstName, ' ',lastName))

//we can also use '+' to concat two or more strings
console.log(firstName +' '+ lastName+' '+ exampleString)

//trim() -it removes extra spaces
var extraSpaceString = '     mystring     '
console.log(extraSpaceString.trim())
var extraSpaceStringExample2 = '    my  string     '
console.log(extraSpaceStringExample2.trim())

//charAt() -> this take a position as an arg and returns the character at that position
var charAtExampleString = 'This ia my test string'
console.log(charAtExampleString.charAt(5))
console.log(charAtExampleString.charAt(10))
console.log(charAtExampleString.charAt(11))

//split() splits our string on the basis of the arguments passed
var sampleString = "This is my string"
console.log(sampleString.split(' '))

var sampleString2 = "This,is,my,simple,string"
console.log(sampleString.split(','))

var sampleString3 = "This is awesome"
console.log(sampleString3.split())