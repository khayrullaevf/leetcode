var filter = function(arr, fn) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
};

// Test 1: greaterThan10
const arr1 = [0, 10, 20, 30];
const result1 = filter(arr1, function(n) { return n > 10; });
console.log(result1); // [20, 30]

// Test 2: firstIndex
const arr2 = [1, 2, 3];
const result2 = filter(arr2, function(n, i) { return i === 0; });
console.log(result2); // [1]

// Test 3: plusOne
const arr3 = [-2, -1, 0, 1, 2];
const result3 = filter(arr3, function(n) { return n + 1; });
console.log(result3); // [-2, 0, 1, 2]
