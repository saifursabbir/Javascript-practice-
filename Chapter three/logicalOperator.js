// && || !

// A && B
// true && true = true
// true && false = false
// false && true = false
// false && false= false


//  A // B
//  true || true = true
//  true || false = true
//  false || true = true
//  false || false = false

var a = 10
var b = 20
var c = 30
var d = 40

if (a > b && c > d) {
        console.log('A is greater than B and C id greater than d')
} else {
        console.log('at least one condition is false ')
}
if (a > b || c > d) {
        console.log('A is greater than B or C id greater than D')
} else {
        console.log('at least one condition is false ')
}

var check  = !(a > b)
console.log(check) 