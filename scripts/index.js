function isEvenAndInRange(num) {
    return num >= 1 && num <= 10 && num % 2 === 0;
}

const userInput = prompt("Введите число от 1 до 10:");
const result = isEvenAndInRange(Number(userInput));
console.log(result ? "TRUE" : "FALSE");

//2
const userInputFor2First = prompt("Введите 1 число:");
const userInputFor2Second = prompt("Введите 2 число:");
let first = Number(userInputFor2First);
let second = Number(userInputFor2Second);
for (let i = first; i <= second; i++) {
    // Проверка, является ли число степенью двойки
    if (Math.log2(i) % 1 === 0) {
        console.log(i);
    }
}

//3
let k = 0;
let isBoss = true;
while(isBoss == true){
    const userInputFor3 = prompt("Введите число:");
    k +=Number(userInputFor3);
    isBoss = confirm("Введем еще число?");
}
console.log(k);

//4
const userInputFor4 = prompt("Введите строку:");

let processedString = userInputFor4.replace(/[\s1]/g, "");

if (processedString === userInputFor4) {
    alert("В вашей строке не было пробелов и цифр 1.");
} else {
    alert("Обработанная строка: " + processedString);
}

//5
//1 решение
// const min = 1;
// const max = 20;
// let randomNum = new Array();
// let number;
// let stringNum = " ";
// for(let i = 0;i<10;i++){
//     number = Math.floor(Math.random() * (max - min + 1)) + min;
//     if(number%3 ==0)
//         randomNum[i] = number;
//     else
//         randomNum[i] = "null";
// }
// for(let i of randomNum){
//     stringNum += String(i) + " ";
// }
// console.log(stringNum);

//2 решение
const min = 1;
const max = 20;
let number;
let stringNum ;
for(let i = 0;i<10;i++){
    number = Math.floor(Math.random() * (max - min + 1)) + min;
    if(number%3 ==0)
        stringNum += String(number) + " ";
}
console.log(stringNum)


