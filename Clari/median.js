// nlogn
const median = arr => {
    let mid = Math.floor(arr.length/ 2);
    if(arr.length % 2 === 0 ) {
        return (arr[mid] + arr[mid - 1]) / 2;
    } else {
        return arr.sort()[mid];
    }
};

// quickselect

const quickMedian = arr => {
    let mid = Math.floor(arr.length/ 2);
    if(arr.length % 2 === 0 ) {
        return true;
    } else {
        return quickSelect(arr, Math.floor(arr.length / 2));
    }
};

const quickSelect = (arr, k) => {
    return k;
};

const shuffle = arr => {
    for(let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
};

let arr = [1,2,3,4,5,6,7];
shuffle(arr);
// console.log(arr);

console.log(median(arr));
// console.log(quickMedian(arr));
