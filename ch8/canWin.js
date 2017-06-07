const canWin = (arr, i, seen = new Set()) => {
    if(arr[i] === 0) {
        return true;
    }
    seen.add(i);
    if(i + arr[i] < arr.length && !seen.has(i + arr[i])) {
        return canWin(arr, i + arr[i], seen);
    }
    if(i - arr[i] > 0 && !seen.has(i - arr[i])) {
        return canWin(arr, i - arr[i], seen);
    }
    return false;
};

console.log(canWin([1,1,1], 0));