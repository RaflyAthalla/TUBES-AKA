const { PerformanceObserver, performance } = require('perf_hooks');


let arr = []

for(let i = 1; i<= 1000000; i++) {
    let x = Math.round((Math.random()* 100) + 1);
    arr.push(x)
}

console.log('done')


function bubbleSort(inputArr) {
    let n = inputArr.length;
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            // Comparing and swapping the elements
            if(inputArr[j] > inputArr[j+1]){
                let t = inputArr[j];
                inputArr[j] = inputArr[j+1];
                inputArr[j+1] = t;
            }
        }
    }
    return inputArr;
}


let a = performance.now()

let sort = bubbleSort(arr)

let b = performance.now()

console.log(b-a)