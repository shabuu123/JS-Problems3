function maxMin(numArr) {
    let array = [];
    let max = maximum(numArr)
    let mini = minimum(numArr)
    return [mini, max]

}
function minimum(number) {
    let mini = number[0]
    for (let i = 0; i < number.length; i++) {
        if (number[i] < mini)
            mini = number[i]
    }
    return mini

}


function maximum(number) {
    let max = number[0]
    for (let i = 0; i < number.length; i++) {
        if (number[i] > max)
            max = number[i]
    }
    return max
}


console.log(maxMin([2, 5, 7, 93,]));