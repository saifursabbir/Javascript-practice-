function sayhi(n) {
    if (n === 0) {
        return
    }
    console.log ('HI, I am Calling')
    sayhi(n - 1)
}

sayhi(10)

function fact(n) {
    if (n === 1) {
        return 1
    }

    return n * fact(n-1)
}
console.log(fact(4))

 