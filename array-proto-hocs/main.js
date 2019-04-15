function compareArrays(arr1, arr2) {
	return arr1.length !== arr2.length ? false : arr1.every((el, index) => el === arr2[index]);
}

function memoize(fn, limit) {
    let results = [];
    console.log('Результат берется из памяти');

    return function () {
    	for (let i = 0; i < results.length; i++) {

        let args = results[i].args;

        if (compareArrays(args, arguments)) {
            return args;
        }
    }

        results = results.slice(0, limit);


        results.unshift({
            args: [...arguments],
            result: fn(...arguments)
        });

        return fn(...arguments);

    };

}


const sum = (a, b) => {
	console.log('Результат берется не из памяти');
    return a + b
}

const mSum = memoize(sum, 2);

