const bsearch = (arr, target) => {
    if(arr.length === 0) {
        return -1;
    }
    let mid = Math.floor(arr.length / 2);

    if(arr[mid] === target){
        return mid;
    }else if (arr[mid] > target){
        return bsearch(arr.slice(0, mid), target);
    }else {
        let right = bsearch(arr.slice(mid + 1, arr.length), target);
        if(right === -1){
            return -1;
        }else {
            return mid + 1 + right;
        }
    }
};


let arr = [1,2,5,7,8,12,14,16,90,100];

console.log(bsearch(arr, 100));