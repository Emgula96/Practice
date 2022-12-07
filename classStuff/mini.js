// const sum = (num1, num2) => {
//     let numSum = (num1 + num2)
//     if (numSum >= 50 && numSum <= 80) {
//         return 65;
//     }
//     return 80;
// }
// console.log(sum(10, 30))

const finalFunction = (ele, num) => {
    let arr = []
    if (num < 0) { 
        let arr = []
        console.log(arr)
        return arr
    }
    // let arr = new Array(num).fill(ele)
    for (let i = 0; i < num; i++) {
        arr.push(ele);
    }
    console.log(typeof(arr))

    console.log(arr);
};

finalFunction("hippity hoppity",5);
