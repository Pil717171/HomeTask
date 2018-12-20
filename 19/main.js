var data = [
    {
        text: 'some text 1',
        display: true,
        disable: false
    },
    {
        text: 'some text 2',
        display: false,
        disable: false
    },
    {
        text: 'some text 3',
        display: true,
        disable: true
    },
    {
        text: 'some text 4',
        display: true,
        disable: false
    },
];


// write code here uss filter, map and forEach functions of Array

data.forEach(function (obj) {
    obj.number = "item 1"  
})

var array = data.filter(function (item) {
    if (item.display === true && item.disable === false && item.number) {
        return item
    }
})

var newArray = array.map(function (item) {
    return item.number + " " + item.text
})

console.log(newArray)

// expected console.log
// 'item 1 some text 1'
// 'item 1 some text 4'