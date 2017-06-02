const caesarCypher = (str, shift) => {
    let arr = str.split("");
    for(let i = 0; i < str.length; i++) {
        arr[i] = encode(arr[i], shift);
    }
    console.log(arr);
    // return str;
};

const encode = (letter, shift) => {
    if ((letter.charCodeAt() + shift) < 123) {
        return String.fromCharCode(letter.charCodeAt() + shift);
    } else {
        return String.fromCharCode(letter.charCodeAt() + shift - 26);

    }
};

caesarCypher("helloz", 3);
