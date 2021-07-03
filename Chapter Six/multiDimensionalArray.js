// Multi Dimensional Array

var arr = [
    [78, 71, 52, 95],
    [65, 71, 86, 82],
    [89, 85, 87, 81],
    [69, 76, 72, 76]
]

console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[0][0])
console.log(arr[1][1])

for (var  i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        console.log('Element ' + i + ': ' + arr[i][j])
    }
}