//Give a rectangular matrix of characters, add a border of asterisks(*) to it. 

//input picture = [“abc”, “ded”]
//output  [ '*****', '*abc*', '*ded*', '*****' ]


let pictures = ['abc', "ded"];


const addBorder= (array)=>{
    let star = "";
    let asterisks = "*"
    for(let i =0; i<array[0].length; i++){
        star = star.concat('*');
    }
    array.unshift(star);
    array.push(star);
    for(let i=0;i<array.length;i++){
        array[i] = asterisks.concat(array[i]);
        array[i] = array[i].concat("*" )
    }
    
    return array;
}



console.log(addBorder(pictures));


