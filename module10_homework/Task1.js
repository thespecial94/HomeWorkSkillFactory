/*Задание 1.
Напишите программу, которая работала бы следующим образом: в prompt вводится значение. С помощью унарного плюса (арифметический оператор) необходимо преобразовать его в число, 
затем проверить с помощью typeof, принадлежит ли оно к множеству Number.

Если это число, то вывести в консоль чётное оно или нечётное.

Если передано не число, выведите: «Упс, кажется, вы ошиблись».

*NaN, хоть и относится к типу Number, числом не является. Добавьте отдельную проверку для этого значения.*/
let vCheck = +prompt('Введите число');
// let vNumber = +vCheck; // проверка на тип number
// Строчка выше - это не проверка на тип, а приведение к типу number с помощью унарного плюса. Унарный плюс можно применить сразу к выражению prompt, чтобы не создавать лишнюю переменную
// let vNaN=vNumber + ''; // проверка на NaN для типа number
// let visNaN=isNaN(vCheck); // проверка на другие типы
// Это не совсем подходящий способ сделать проверку на NaN, для этого достаточно только функции isNaN. Причем её результат можно не сохранять в отдельную переменную, а использовать эту функцию сразу в условном операторе. Ниже в коде исправила

if(typeof(vCheck)=="number" && !isNaN(vCheck))
{
  if(vCheck%2===0)
    console.log("Четное число");
  else
    console.log("Нечетное число"); 
}
else
    console.log("Упс, кажется, вы ошиблись");