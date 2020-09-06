var fun=(function () {
    let a=0;
    return function () {
        return ++a;
    }
})();
fun();
fun();
console.log(fun())
