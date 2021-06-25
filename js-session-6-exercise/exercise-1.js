function first() {
    var insideFirst = 'a';
    console.log('first', insideFirst);

    var second = function () {
        console.log('second', insideFirst);

        var third = function () {
            var insideThird = 'deep variable!'
            console.log('third', insideThird);

            return insideThird;
        };

        return {
            insideFirst: insideFirst,
            insideThird: third(),
        }
    };
    return second;
}

// Tu código aquí

var exec = first();

var values = exec();

console.log('Inside First', values.insideFirst);
console.log('Inside Third', values.insideThird);
