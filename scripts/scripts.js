//Задание 1
//Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

const sum = (num1, num2) => (num1 + num2);

let number1 = Math.pow(2, 3);
let number2 = Math.pow(3, 3);

console.log(`Сумма чисел, возведенных в степень = ${sum(number1, number2)}`);

//Задание 2
//Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
//Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

const count = (money) => (money * 0.87);


const userMoney = +prompt('Введите заработную плату');
if (typeof userMoney === 'string')
    alert('Значение задано не верно');

console.log(`Размер заработной платы за вычетом налогов равен ${count(userMoney)}`);

//Задание 3
//Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

function maxCount() {
    if (a > b && a > c) {
        console.log(`Первое число ${a} больше`);
    } else if (b > a && b > c) {
        console.log(`Второе число ${b} больше`);
    } else if (c > a && c > b) {
        console.log(`Третее число ${c} больше`);
    } else if (a === b || a === c || b === c)
    console.log(`Некоторые числа равны`);
}

const a = +prompt('Введите первое число');
const b = +prompt('Введите второе число');
const c = +prompt('Введите третее число');

maxCount();

//Задание 4
//Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
//1. Сложение
//2. Разность
//3. Умножение
//4. Деление
//Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

const addition = (count1, count2) => (count1 + count2);
const subtraction = (count1, count2) => (count1 - count2);
const composition = (count1, count2) => (count1 * count2);
const division = (count1, count2) => (count1 / count2);

let d = +prompt('Введите первое число');
let e = +prompt('Введите второе число');

console.log(`Сумма чисел, равна ${addition(d, e)}`);

if (d > e) {
    console.log(`Разность чисел, равна ${subtraction(d, e)}`);  
} else if (d < e) {
    console.log(`Разность чисел, равна ${subtraction(e, d)}`); 
} else if (d === e) {
    console.log(`Разность чисел равна 0`);
}
console.log(`Произведение чисел, равна ${composition(d, e)}`);
console.log(`Частное чисел, равна ${division(d, e)}`);

