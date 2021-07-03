
/*function greet(msg) {
    function greeting (name) {
        return msg + ', ' + '!'
    }
    return greeting
}

var gm = greet('Good Morning')
var gn = greet('Goood Nigth')
var hello = greet('Hello')
//console.log(typeof gm)
//var msg = gm('sabbir')
console.log(gn('Twinkle Cats'))
console.log(msg)
console.log(hello('Shegufa Taranjum'))
*/

function base(b) {
    return function(n) {
        var result = 1 
        for (var i = 0; i < b; i++) {
            result *= n
        }
        return result
    }
}

var base10 = base(10)
console.log(base10(2))

var base5 = base(5)
console.log(base5(2))
console.log(base5(3))
console.log(base5(5))