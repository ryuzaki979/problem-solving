//Give an array of integers, replace all the occurrences of elementToReplace with subtractionElem.
//element to replace 1
//substraction element 3
// let array = [1,2,1]
// const elementToReplace =1
// const subtractionElem = 3
//output [3,2,3]


function replaceArray(inputArray,elementToReplace,subtractionElem){
    for(let i =0; i<inputArray.length; i++){
    if(inputArray[i]==elementToReplace){
        inputArray[i] = subtractionElem
    }
    
}
return inputArray
}

const result = replaceArray([1,2,1],1,3)

console.log(result);

const replaceArray2 = (inputArray,elementToReplace,subtractionElem) =>{
    inputArray.forEach((element,index) => {
        if(element==elementToReplace){
            inputArray[index] = subtractionElem
        }
    });
    return inputArray
}



const result2 = replaceArray2([1,2,1],1,3)

console.log(result2);