// let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'суб', 'вск'];
// let arr2 = [1, 2, 3, 4, 5, 6, 7,];
// let arr3 = {};
//
// for (let i = 0; i<arr1.length; i++) {
//     arr3[arr1[i]] = arr2[i]
//
// }
// console.log(arr3);

// const obj = {
//     x: 1,
//     y: 2,
//     z: 3,
// }
//
// Object.values(obj).map(function (value){
//     console.log(value + value);
//
// });
//
// const obj = {
//     key1: {
//         key1: 1,
//         key2: 2,
//         key3: 3,
//     },
//     key2: {
//         key1: 4,
//         key2: 5,
//         key3: 6,
//     },
//     key3: {
//         key1: 7,
//         key2: 8,
//         key3: 9,
//     }
// }
// let sum = 0;
//
// Object.values(obj).map(function (value){
//     Object.values(value).map(function (value){
//         sum = sum + value
//     })
// })
// console.log(sum);

// let riddles = {
//     question: 'Why are you?',
//     answer: 'Vasya',
//     count: 0,
//     askQuestion: function (){
//         let enteredAnswer = prompt(this.question);
//         if(enteredAnswer === this.answer) {
//             console.log('you are right!');
//         } else {
//             console.log('you are not right!');
//             this.count++;
//             if (this.count<3){
//                 this.askQuestion();
//             }
//         }
//     },
// }
// riddles.askQuestion();

//HOMEWORK

// Урок 10. Семинар. Объекты в JavaScript

// Задание 1

// Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.

//Решение

// const numbers = {
//     keyin1: 1,
//     keyin2: 2,
//     keyin3: 3,
//     keyin4: 4,
//     keyin5: 5,
//     keyin6: 6,
//     keyin7: 7,
// }
//
// for (let key in numbers){
//     if (numbers[key] >= 3) {
//         console.log(numbers[key]);
//     }
// }

// console.log(numbers.key);
//
//
//
// Задание 2
// Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.
//

const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};
//
console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);
//
//
//
// Задание 3
// Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.
//
// const products = [
//     {
//         id: 3,
//         price: 200,
//     },
//     {
//         id: 4,
//         price: 900,
//     },
//     {
//         id: 1,
//         price: 1000,
//     },
// ];
//
// products.forEach(item => {
//     item.price -=  item.price * 0.15;
// });
// console.log(products);

//
//
// Задание 4
// 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter.
// Исходные данные - массив products.
// 2. Необходимо отсортировать массив products используя метод sort по цене,
// начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.
//
//     ```
const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];

// let newProduct = products.filter(item => {
//     return item.photos !== undefined && item.photos.length
// })
//
// console.log(newProduct)

let productsByPrice = products.sort((a, b) => {
    return a.price - b.price
});

console.log(productsByPrice);

//
// []()
// []()

// **Задание 5**
// Дано 2 массива
// const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

// Вам необходимо объединить 2 массива, чтобы значения первого массива были ключами,
//     а значения второго массива — значениями.

//Решение:

// const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
// const arr = {};
//
// for (let i = 0; i < en.length; i++){
//     arr[en[i]] = ru[i]
// }
// console.log(arr);