const parens = (openRemain, closedRemain, str = "") => {
  if (!closedRemain) {
    closedRemain = openRemain;
  }
  if (closedRemain === 0) {
    console.log(str);
    return;
  }

  if (openRemain > 0) {
    parens(openRemain - 1, closedRemain, str + "(");
    if (openRemain < closedRemain) {
      parens(openRemain, closedRemain - 1, str + ")");
    }
  }else {
    parens(openRemain, closedRemain - 1, str + ")");
  }
};


function Word(name) {
  var a = name;

  this.getName = function(){
    return name;
  };

}

var maxProfit = function(prices) {
    let max = 0;
    let min = prices[0];
    let maxProfit = 0;
    for(let i = 1; i < prices.length; i++){
        let currentPrice = prices[i];
        let currentProfit = currentPrice - min;
        if(currentPrice < min){
            min = currentPrice;
        }
        if(currentProfit > maxProfit){
            maxProfit = currentProfit;
        }
    }

    return maxProfit;
};

// function calcWrap(numWrap, wrapCount){
//     let extra = 0;
//     let count = wrapCount;
//     while (count / numWrap > 1){
//        extra += Math.floor(count / numWrap);
//        count = count % numWrap;
//        count += extra;
//     }
//     return extra;
// }


// function calcWrap(minWrap, tickets){
//   let ticketCount = tickets;
//   let extra = 0;
//   while (ticketCount > 0) {
//     if (ticketCount / minWrap < 1) {
//       break;
//     }
//     let newCakes = Math.floor((tickets / minWrap));
//     extra += newCakes;
//     ticketCount = ticketCount % minWrap;
//   }
//   return [extra, ticketCount];
// }
//
// console.log(calcWrap(5, 5));

// let word = new Word('john');

// console.log(word.getName());

// parens(3);

// function StairCase(n) {
//     let empty = n - 1;
//     let hashTag = 1;
//     let res = [];
//     while(hashTag <= n){
//         let current = [];
//         for(let i = 0; i < empty; i++){
//             current.push(" ");
//         }
//         for(let j = 0; j < hashTag; j++){
//             current.push("#");
//         }
//         res.push(current.join(''));
//         empty--;
//         hashTag++;
//     }
//     console.log(res.join("\n"));
// }
