const isPalindrome = str => {
    let start = 0;
    let end = str.length - 1;
    let retVal = true;
    while(start < end) {
        if(str[start] !== str[end]) {
            retVal = false;
            break;
        }
        start++;
        end--;
    }
    return retVal;
};

console.log(isPalindrome("ava"));