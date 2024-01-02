'use strict';
// let persone = {
//   name: "John",
//   age: 25,
//   isMarried: false
// };
// console.log(persone["isMarried"]);
// // Типпы данных и их вывод

// let arr = ['plump.png', 'orange.jpg', 'zxc.bmp'];
// console.log(arr[0])
// // Создаем массив



// // Динамическая типизация:

// console.log(typeof (String(4)));
// // Устаревший метод

// console.log(typeof ("" + false));
// // Переводит любой тип данных в строку

// console.log(typeof (Number(4)));
// // Устаревший метод

// console.log(typeof (+'5'));

// console.log(typeof (parseInt('15px', 10)));
// // Переводит любой тип данных в number, называется унарный плюс


// // 0, '', null, undefined, NaN - false
// let switcher = null;
// if (switcher) {
//   console.log('Working...')
// }
// switcher = 1;
// if (switcher) {
//   console.log('Working...')
// }

// console.log(typeof (Boolean(4)));

// console.log(typeof(!! 4));
// // Переводит любой тип данных в логическое выражение


// let answer = +prompt('Склько вам лет?');
// console.log(answer);
// console.log(typeof(answer));
// // Пример унарного плюса

let incr = 10,
    decr = 10;

console.log(incr++);
console.log(decr--);
console.log(incr);
console.log(5%2);
console.log('2' == 2);
console.log('2' === 2);

let isCheked = true,
    isClose = false;
console.log(isCheked || isClose)

