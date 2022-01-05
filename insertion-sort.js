const { PerformanceObserver, performance } = require('perf_hooks');


let arr = []

for(let i = 1; i<= 2000000; i++) {
    let x = Math.round((Math.random()* 100) + 1);
    arr.push(x)
}

console.log('done')

function insertionSort(inputArr) {
    let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = inputArr[i];
            // The last element of our sorted subarray
            let j = i-1; 
            while ((j > -1) && (current < inputArr[j])) {
                inputArr[j+1] = inputArr[j];
                j--;
            }
            inputArr[j+1] = current;
        }
    return inputArr;
}

let a = performance.now()

let sort = insertionSort(arr)

let b = performance.now()

console.log(b-a)