//Higher order function

function addWithX(x) {
    return function(y) {
        return x + y;
    }
}

const addWith10 = addWithX(10); // function(y) { return 10 + y }
const addWith20 = addWithX(20);

console.log(addWith10(5));
