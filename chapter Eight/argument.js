/*function add(a, b) {
    var result = a + b
    console.log(result)
}

add(10, 30)
add(7, 3)
add(500, 700)
*/
/*
function sub(a, b) {
    var result = a - b
    console.log(result)
}

sub (50, 40)
sub(6, 3)
sub(90,20)
*/
//var arr1 = [1, 2, 3]
///var arr2 = [5, 7, 9]
//var arr3 = [9, 7, 1]

/*var sum1 = 0
for (var i = 0; i < arr1.length; i ++) {
         sum1 += arr1[i]
}
console.log(sum1)

var sum2 = 0
for (var i = 0; i < arr2.length; i ++) {
         sum2 += arr2[i]
}
console.log(sum2)

var sum3 = 0
for (var i = 0; i < arr3.length; i ++) {
         sum3 += arr3[i]
}
console.log(sum3)
*/

/*function sumOfArray(arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i ++) {
        sum += arr[i]
    }
    console.log(sum)
}
sumOfArray(arr1)
sumOfArray(arr2)
sumOfArray(arr3)
*/



/*function test(a, b, c) {
   // console.log(arguments)
   // console.log(typeof a)
   
   for (var i = 0; i < arguments.length; i ++) {
       console.log(arguments[i])
   }
}
test(10, 20 ,30) 
*/

function addAll() {
    var sum = 0
    for(var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    console.log(sum)
}

addAll(100, 2, 3)
addAll(60, 2, 3, 4, 5, )