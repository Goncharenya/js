// let numUser = parseInt(prompt('Input number please: '));
//
// GetNum = function (numUser) {
//     console.log(`Число ${numUser} в 3 степени: ${numUser**3}`);
// };
// GetNum(numUser);

// вариант 2

// let numUser = parseInt(prompt('Input number please: '));
// let degreeUser = parseInt(prompt('Input degree please: '));
//
// console.log(Math.pow(numUser, degreeUser));

// task 2

// let salary = parseInt(prompt('Input salary please: '));
// let resultNum = salary - (salary*0.13);
//
// if (typeof salary != "string"){
//     console.log(`Размер заработной платы за вычетом налогов равен значение: ${resultNum}`)
// } else {
//     console.log("Что-то не так ... ")
// }

// task 3

// let input = prompt('Введите числа разделенные " , "');
// let numbers = input.split(",").map(item => parseInt(item.trim()));
// let maxNum = Math.max.apply(null, numbers);
//
// console.log(maxNum);

// task 3

// let Numbers = [2,6,4,-3,9];
//
// function GetMaxNum (Numbers) {
//    let max = Numbers[0];
//    for(let num of Numbers){
//        if (max < num) {
//            max = num;
//        }
//    }
// return max;
//
// }
// console.log(GetMaxNum(Numbers));


// task 4

// let a = parseInt(prompt('Input the first number,please: '));
// let b = parseInt(prompt('Input the second number: '));
// let result = 0;
//
// function GetSum(a, b){
//     return result = a + b;
// }
//
// console.log(GetSum(a, b));
// let GetSum = (a, b) => a + b;
//
// console.log(GetSum(a, b));

// let difference = 0
// let GetDifference = (a, b) => {
//     if (a >= b) {
//         difference = a-b;
//     } else {
//         difference = b - a;
//     }
//     return difference
// }
//
// console.log(GetDifference(a, b));


//MULTIPLY
// let GetMultiply = (a, b) => a * b;
//
// console.log(GetMultiply(a, b));

//division

// let division = 0
// let GetDivision = (a, b) => {
//     if (a >= b) {
//         division = a/b;
//     } else {
//         division = b / a;
//     }
//     return division
// }
//
// console.log(GetDivision(a, b));

//seminar 8
// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// for (let i = 1; i <= arr.length; i++) {
//     if (arr[i] === 0) {
//         console.log(`this is ${arr[i]} null`);
//     }
//     else {
//     }
//     if (arr[i] % 2 !== 0) {
//         console.log(`this number ${arr[i]} is odd`);
//     }
//     else {
//         if (arr[i] % 2 === 0) {
//             console.log(`this number ${arr[i]} is even`);
//         }
//     }
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];
//
// arr.splice(3, 5, 6,7);
// console.log(arr);


// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]
//
// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3



//let Array = [2, 6, 3, 4, 1, 4 ];
// let n = 0;
// let m = 9;
// let count = 5;
// let sum = 0;

// for(let i = 0; i <= count; i++) {
//     Array.push(Math.round(Math.random() * (m - n)));
// }
// for(let i = 1; i <= Array.length; i++) {
//     sum += Array[i];
// }
// console.log(Array);
// console.log(sum);
//console.log(Array);
//
// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
//
// x
// xx
// xxx
// xxxx
// xxxxx

// let Array = [];
// let n = 0;
// let m = 9;
// let count = 5;
// let sum = 0;
// for(let i = 0; i <= count; i++) {
//         Array.push(Math.round(Math.random() * (m - n)));
//     console.log(Array);
//     }
//
// for(let i = 1; i < Array.length; i++) {
//         sum += Array[i];
//         if (Array[i] === 3){
//             console.log(`it is number 3!`);
//         } else
//         {
//             console.log("Такого числа нет");
//         }
//     }
//
// console.log("Sum is " + sum)