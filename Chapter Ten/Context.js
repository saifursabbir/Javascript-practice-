// Creation and Execution

function a() {
    b()
    console.log('I am Function A')
}
function b() {
    d() 
    console.log('I am Function B')
}
function c() {
    a()
    console.log('I am Function C')
}
function d() {
    c() 
    console.log('I am Function D')
}

var x = 100
a()
console.log('I am Global')


//Creational phase
//Executional phase