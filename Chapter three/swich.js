var date = new Date()

// 0 -sunday, 1 -Monday, 2 -Tuesday, 

var today =date.getDay()

switch (today) {
    case 0:
        console.log('Today is Sunday')
        break
    case 1: 
         console.log('Today is Monday') 
        break 
    case 2:
        console.log('Today is Tuesday')
        break
    case 3:
        console.log('Today is Wednesday')
        break
    case 4:
        console.log('Today is Thusday')
        break
    case 5:
        console.log('This is Friday')
    break
    case 6:
        console.log('This is Saterday')
    break 
    default:console.log('Not a Valid Number')  
}