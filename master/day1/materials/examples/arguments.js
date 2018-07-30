function arguments() {
    console.log(arguments); // Arguments(6) [1, 2, 3, 4, 5, 6, callee: ƒ, Symbol(Symbol.iterator): ƒ]
    var arr = Array.prototype.slice.call(arguments);
    console.log(arr); // [1, 2, 3, 4, 5, 6]
}

arguments(1,2,3,4,5,6);
