//Write a function that returns the sum of two numbers.

const add = (a,b) =>{
    return a+b;
}

const res = add(1,1);

console.log(res);

//Write a function that returns the sum of all numbers regardless of # of params.

const sum = (...params) =>{
    let res = 0
    params.forEach(param=>{
        res+= param
    })
    return res
}

console.log(sum(1,2,3))