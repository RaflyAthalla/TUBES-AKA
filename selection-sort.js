const { PerformanceObserver, performance } = require('perf_hooks');

let arr = [];
for(let i = 1; i<= 1000000; i++) {
    let x = Math.round((Math.random() * 100) + 1)
    arr.push(x)
}
console.log('done')



function selectionSort(inputArr) { 
    let n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }
         if (min != i) {
             // Swapping the elements
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
        }
    }
    return inputArr;
}


let a = performance.now()

let sort = selectionSort(arr)

let b = performance.now()

console.log(b-a)