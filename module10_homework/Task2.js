/*Задание 2.

Дана переменная Х, которая может принимать любое значение. Написать программу, которая в зависимости от типа данных Х выводит в консоль сообщение вида: «X — число».

Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён».*/
let x=true;

switch(typeof(x))
  {
    case "string":
      console.log("Строковый тип данных");
      break;
    case "number":
      console.log("Числовой тип данных");
      break;
    case "boolean":
      console.log("Логический тип данных");
      break;
    default :
      console.log("Тип данных не определен");
      break;  
  }