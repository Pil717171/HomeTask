var array1 = [123, "string", true, {value: 321}, null],
    array2 = ["first", "second", "last"],
    result = [];

    for (var i = 0; i <array1.length; i++) {
        result[i] = array1[i];
    }
    
    for (var i = 0; i < array2.length; i++) {
        result[i + array1.length] = array2[i];
    }

console.log("result: ", result);

var result0 =[];
result0 = [...array1, ...array2];
console.log("result0: ", result0);

var result1 = [];
result1 = array1.concat(array2);
console.log("result1: ", result1);

var result2 = [];
result2 = [].concat (array1, array2);
console.log ("result2: ", result2);
