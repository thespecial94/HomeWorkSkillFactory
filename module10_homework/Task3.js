/*Задание 3.
Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".*/
let str='Hello';
let itog='';

for(let i=str.length-1; i=>0;i--){
itog += str.charAt(i);
}

console.log(itog);
