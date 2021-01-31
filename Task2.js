/*Задание 2.
Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.*/

const Planets = {
  Name: 'Земля',
  Population: '7.8 млрд.'
}

function getInfo(Planets,str){
return str in Planets;
}

const  info = getInfo(Planets,'Name1');
console.log(info);
