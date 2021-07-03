/*Literal Constructor 

var n = 10 
var str = String(n)
console.log (str)
*/



/** Escape Notation 

var str = 'This is a \'string\''
console.log(str)

var str1 = 'This is a \nstring'
console.log(str1)

var str2 = 'This is a \tstring'
console.log(str2) 

var str2 = 'This is a \\string'
console.log(str2)
*/



/** string Comparison 

var a = 'aaaaZ'
var b = 'aaaaz'

console.log(a > b)

console.log('a' < 'A')

console.log('001' == 1)
*/




/** String Methods 

var a = 'I AM'
var b = 'Sabbir'

var c = a.concat(' ' , b)
//var d = c.substr(6, 1)
//console.log(c)
//console.log(d)
//console.log(c.charAt(0))
console.log(c.startsWith('I AM'))
console.log(c.endsWith('ir0'))
console.log(a.toUpperCase())
console.log(a.toLowerCase())
console.log('    srsrsr   '.trim())
console.log(c.split(' '))
*/

// string length

var str = 'Sfr Sabbir'

var length = 0

while (true) {
    if (str.charAt(length) == '') {
        break
    } else {
        length++
    }
}
console.log(length)
console.log(str.length)
console.log('fsdfgsgdas'.length)