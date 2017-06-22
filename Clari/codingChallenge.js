var tree = {
  type: 'operation',
  operator: '+',
  operands: [
    {
      type: 'value',
      value: 5,
    },
    {
      type: 'operation',
      operator: '*',
      operands: [
        {
          type: 'value',
          value: 2,
        },
        {
          type: 'value',
          value: 3,
        },
        {
          type: 'string',
          value: '41', // parseInt(value, 10)
        }
      ]
    }
  ]
};

var tree2 = {
  type: 'string',
  value: '7',
};

var tree3 = {
  type: 'operation',
    operator: '*',
    operands: [
      {
        type: 'value',
        value: 5,
      },
      {
        type: 'string',
        value: 7
      }
    ]
};

function evalTree(tree) {
  if(tree['type'] !== 'operation') {
    return typeCheck(tree);
  }
  
  let arr = tree['operands'];
  let operator = tree['operator'];
  
  let total = operator === '*' ? 1 : 0;
  arr.forEach(el => {
    // total += el['type'] === 'operation' ? evalTree(el): typeCheck(el);
    if(el['type'] === 'operation') {
        total = operation(el['operator'], total, evalTree(el));
    } else {
      // console.log(total);
      total = operation(operator, total, typeCheck(el));
      // console.log(total);
    }
    
  })
  // let acc = 0;
  // return arr.reduce((acc, el) => {
  //   return acc + (el['type'] === 'operation' ? evalTree(el) : el['value']);
  // }, 0)
  return total;
}




const operation = (operator, total, value) => {
  // console.log(operator);
  // console.log(total);
  // console.log(value);

  if(operator === '+') {
    total += value
    return total;
  } else if (operator === '*'){
    // console.log(value);
    total *= value
    // console.log(value);
    return total;
  }
}

const typeCheck = el => {
  if(el['type'] === 'value') {
    return el['value'];
  } else if (el['type'] === 'string') {
    return parseInt(el['value'], 10);
  }
}

console.log(evalTree(tree));