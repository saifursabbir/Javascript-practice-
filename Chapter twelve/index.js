/*var rect = {
    width: 100,
    height: 50,

    draw: function() {
        console.log('I am a rectangle')
        this.printProperties()
        console.log(this)
    },

    printProperties: function () {
        console.log('My width is ' + this.width)
        console.log('My Heigth is ' + this.height)
    }
}
rect.draw()

//rect.draw()

//rect.height = 100

//rect.draw()


function myFunc() {
    console.log(this)
    rect.printProperties()
}

 myFunc()


var another = {
    width: 47,
    height: 56,
    print: rect.printProperties
}

another.print()
*/

/*
var creatRect = function (width, height) {
        return { 
        width: width,
        height: height,
    
        draw: function() {
            console.log('I am a rectangle')
            this.printProperties()
            console.log(this)
        },
        printProperties: function () {
            console.log('My width is ' + this.width)
            console.log('My Heigth is ' + this.height)
        }
    }
}

var rect1 = creatRect(10, 10)
rect1.draw()
*/

//var rect2 = creatRect(20, 20)
//rect2.draw()


/*var Rectangle = function (width, height) {
    
    this.width = width
     this.height = height

    this.draw = function() {
        console.log('I am a rectangle')
        this.printProperties()
        console.log(this)
    }
    this.printProperties = function () {
        console.log('My width is ' + this.width)
        console.log('My Heigth is ' + this.height)
    }
}
var rect3 = new Rectangle(18, 8)
rect3.draw() 
/*

/*function myNew(constructor) {
    var obj = {}
    Object.setPrototypeOf(obj, constructor.prototype)
    var ArgsArrray = Array.prototype.slice.apply(arguments)
    constructor.apply(obj, ArgsArrray.slice(1))

    return obj
}

var rect4 = myNew(Rectangle, 43, 45)
rect4.draw()
*/

//var str = new String('str')
//console.log('My String is ' + str) 

/*
function test() {
     console.log('Something')
 }
console.log(test.name, test.length)

 var Rect = new Function('width', 'height',  `this.width = width
 this.height = height

this.draw = function() {
    console.log('I am a rectangle')
    this.printProperties()
    console.log(this)
}
this.printProperties = function () {
    console.log('My width is ' + this.width)
    console.log('My Heigth is ' + this.height)
}`
 ) 
 var rect5 = new Rect(4, 5)
 console.log(rect5)

*/

//function myFunc(c, d) {
 //   console.log(this)
  //  console.log(this.a + this.b + c + d)
//}

// Call , Apply
// Bind 

//myFunc.call({a: 40, b: 25}, 10, 10)
//myFunc.apply({a: 400, b:200}, [200, 100])

//myFunc.apply({})
//myFunc()

//var testBind = myFunc.bind({a: 7, b:3 })

//testBind(7, 3)


/*** */
// pass by value vs pass by reference
// Call by value vs call by reference

/*var n = 10

function change(n) {
    n = n + 100
    console.log(n)
}

change(n)
console.log(n)

var obj = {
    a: 10,
    b: 20
}

function changeMe(obj) {
    obj.a = obj.a + 100
    obj.b = obj.b + 100
    console.log(obj)
}

changeMe(obj)
console.log(obj)
*/

var Rectangle = function (width, height) {
    

     var position = {
        x: 56,
        y: -100
    }

    this.width = width
    this.height = height 
     
    var printProperties = function () {
        console.log('My width is ' + this.width)
        console.log('My Heigth is ' + this.height)
    }.bind(this)

   // this.getPosition = function () {
   //     return position
  //  }

    this.draw = function() {
        console.log('I am a rectangle')
        printProperties()
        console.log('position: x=' + position.x + 'Y=' + position.y)
    }

    Object.defineProperty(this, 'position', {
       get: function () {
           return position
       },
       set: function (value) {
          position =  value
       }
    }) 
}

var rect7 = new Rectangle(45, 30)
rect7.draw() 
rect7.position = {
    x: 456,
    y: -123
}
console.log(rect7.Position) 