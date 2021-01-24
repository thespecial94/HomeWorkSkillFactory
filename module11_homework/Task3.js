/*Задание 3.
Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.*/

const num1 = 11;
const num2 = 9;

function giveSum(num1)
{
   function argFunc(num1,num2)
                 {
                  return num1 + num2;
                 }
   return Sum = argFunc(num1,num2);
}

const Sum = giveSum(num1);
console.log(Sum);
