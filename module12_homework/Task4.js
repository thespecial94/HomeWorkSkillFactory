/*Задание 4.
Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.
План:
Определить родительскую функцию с методами, которые включают/выключают прибор из розетки;
Создать делегирующую связь [[Prototype]] для двух конкретных приборов;
У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов;
Создать экземпляры каждого прибора;
Вывести в консоль и посмотреть результаты работы, гордиться собой :)
Общие требования:
Имена функций, свойств и методов должны быть информативными
Соблюдать best practices:
использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
информативные имена (а не a, b);
четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр конкретную реализацию);
использование синтаксиса es6 (кроме функции-конструкторов) и т.д.*/


function Electrodevice(name){
  this.name=name
}

Electrodevice.prototype.OnDevice = function(name){ // метод включения прибора
  console.log('Включи ' + name);
}

Electrodevice.prototype.OffDevice = function(name){ // метод выключения прибора
  console.log('Выключи ' + name);
}

Electrodevice.prototype.getPower = function(power){ // метод получения мощности
  console.log(`Мощность: ${power}`);
}

function Computer(model,price,country,OS){ //Компьютер
  this.model=model,
  this.price=price,
  this.country=country,
  this.OS=OS //операционная система
}

function DeskLamp(model,price,country,type){ // Настольная лампа
  this.model=model,
  this.price=price,
  this.country=country,
  this.type=type  
}

Computer.prototype.Install = function(OS){ // метод установки приложения
  console.log('Установить Photoshop на ' + OS);
}

DeskLamp.prototype.ChangeLamp = function(model){ //метод замены лампы
  console.log('Заменить лампу у ' + model + ' на новую');
}

Computer.prototype = new Electrodevice('Компьютер');
DeskLamp.prototype = new Electrodevice('Настольная лампа');

DeskLamp.prototype.getPower = function(power){ // метод полиморфизма
  console.log(`Маленькая мощность потребления: ${power}`);
}

const dell = new Electrodevice('Dell');
const lamp = new Electrodevice('Vezzo');
const asus = new Computer('Asus','70000 р.','Китай','Linux');
const trest = new DeskLamp('Trest','1000 р.','Россия','Офисный');

dell.OnDevice('Dell');
lamp.OffDevice('Vezzo');
dell.getPower('20 Вт.');
trest.getPower('2 Вт.');
console.log(asus);
console.log(trest);