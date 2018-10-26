var data = [1, 'firstString', 30, 500, true, true, null, 'abc', false, {test: 'Object'}, undefined],
    result;

result = prioritySort(data, ['number', 'null', 'string', 'object', 'undefined', 'boolean']);
//expected result [1, 30, 500, null, 'abc', 'firstString', {test: 'Object'}, undefined, true, true, false]

console.log('result', result);

function prioritySort(array, dataPriority) {
    var result = [];
    var globalObject = {};
    for (var i = 0; i < dataPriority.length; i++) {
        var priority = dataPriority[i];
        globalObject[priority] = [];
    }
    for (var i = 0; i < dataPriority.length; i++) {
        var priority = dataPriority[i];
        for (var j = 0; j < array.length; j++) {
            if (priority === typeof array[j]) {
                if (typeof array[j] !== 'object') {
                    globalObject[priority].push(array[j])
                }
                else {
                    if (array[j] === null) {
                        globalObject['null'].push (array[j])
                    }
                    else {
                        globalObject['object'].push (array[j])
                    }

                }
            }
        }
    }
    globalObject['string'].sort();
    for (var key in globalObject) {
        for (var i = 0; i < globalObject[key].length; i++) {
            result.push(globalObject[key][i]);
        }

    }    
    return result;
}