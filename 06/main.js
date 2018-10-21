var array1 = [123, "string", true, {value: 321}, null],
    array2 = ["first", "second", "last"],
    result = [];

result = [...array1, ...array2];
console.log("result: ", result);

var result1 = [];
result1 = array1.concat(array2);
console.log("result1: ", result1);

var result2 = [];
result2 = [].concat (array1, array2);
console.log ("result2: ", result2);

