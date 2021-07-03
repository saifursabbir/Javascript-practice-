/*Closure is when a function is able to remember and access it's lexical scope 
even when taht function executing outside it's lexical scope*/

//able to remember and access it's lexical scope
// when that function executing outside it's lexical scope

/*function test() {
    var msg = ' I am Learning Lexical Scope and Closure'

    function saymsg() {
        console.log(msg)
    }

    saymsg()
}

test()
*/

/*function test() {
    var msg = ' I am Learning Lexical Scope and Closure'

    function saymsg() {
        console.log(msg)
    }
}

var saymsg = test()
saymsg()
*/

for (var i = 1; i <= 5; i++) {
    (function (n) {
       setTimeout(function () {
       console.log(n)
       }, 1000 * n)
    }) (i)
}
