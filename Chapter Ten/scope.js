{
    var x = 45
    function test() {
        //var x = 50
        //console.log(x)

        function nested() {
            //var y = 65
            console.log(x)
        }
        //console.log(y)
        nested()
    }

    test()
}

var a = 11

function A() {
    var b = 12
    function B() {
        var c = 23
        console.log(c)
    }
    function c() {
        var d = 56
        console.log(d)
    }
    console.log(b)
    D(b)
    B()
    c()
}

function D(n) {
    return n + a
}

// A --> a, b, B(), C(), D()
// B --> a, b, c, B(), C(), D()
// c--> a, b, d, B(), C(), D()
// D--> a, n, A()
