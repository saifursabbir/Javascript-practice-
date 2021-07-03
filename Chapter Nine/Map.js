var arr = [1, 2, 3, 4, 5]

/* var sqrArr = arr.map(function (value){
    //return Math.random() * 100
    return value * value
}) 

console.log(arr)
console.log(sqrArr)
*/

function mymap(arr, cb) {
    var newArr = []
    for (var i = 0; i < arr.length; i ++) {
        var temp = cb(arr[i], i, arr)
        newArr.push(temp)
    }
    return newArr
}
// console.log(mymap(arr))

var qb = mymap(arr, function(value){
    return value * value * value
})
 
var mten = mymap (arr, function (value){
    return value * 10
})

console.log(arr)
console.log(qb)
console.log(mten)