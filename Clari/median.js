// nlogn
const median = arr => {
    let mid = Math.floor(arr.length/ 2);
    if(arr.length % 2 === 0 ) {
        return (arr[mid] + arr[mid - 1]) / 2;
    } else {
        return arr.sort()[mid];
    }
};

console.log(median([3,7,8,4,5,2,6,1]));