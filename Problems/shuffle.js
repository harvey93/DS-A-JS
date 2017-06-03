const shuffle = array => {
    let res = [];
    while (array.length > 0) {
        let rand = Math.floor((Math.random() * array.length));
        res = res.concat(array.splice(rand, 1));
    }
    return res;
};

const shuffleN = array => {
    let newArr = array.slice(0);
    for(let i = 0; i < array.length; i++) {
        let randI = Math.floor((Math.random() * (array.length- i)));
        let temp = newArr[i];
        newArr[i] = newArr[randI];
        newArr[randI] = temp;
    }
    return newArr;
};

// new_array[index], new_array[rand_index] =
//       new_array[rand_index], new_array[index]

console.log(shuffleN([1,2,3,4,5]));