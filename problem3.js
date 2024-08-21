 function toArr(obj){
    let arr= [];
    for(const key in obj){
        let inArr = [];
        inArr.push(key);
        inArr.push(obj[key]);
        arr.push(inArr)
    }
    return arr
 }
 console.log(toArr({a:1,b:2}))