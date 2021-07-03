// search data 

var arr = [7, 4, 3, 5, 43, 68]

var find =  7
var isFound = false
for (var i = 0; i < Array.length; i++) {
    if (arr[i] === find) {
        console.log(' Data Found at Index ' + i)
        isFound = true
        break;
    }
}

if (!isFound) {
    console.log('Data Not Found')
}
