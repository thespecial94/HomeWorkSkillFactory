/*Задание 5.
Переписать консольное приложение из предыдущего юнита на классы.*/

class Electrodevice{
  constructor(name){
    this.name=name;
  }
  
  OnDevice(name){ // метод включения прибора
  console.log('Включи ' + name);
  }
  OffDevice(name){ // метод выключения прибора
  console.log('Выключи ' + name);
 }
  getPower(power){ // метод получения мощности
  console.log('Мощность: ' + power);
 }
  
}

class Computer extends Electrodevice{
  constructor(model,price,country,OS,name){//Компьютер
  super(name);
  this.model=model;
  this.price=price;
  this.country=country;
  this.OS=OS; //операционная система
  }
  Install(OS){ // метод установки приложения
  console.log('Установить Photoshop на ' + OS);
  }
  OnDevice(name){ // метод включения прибора
  super.OnDevice(name);
  }
  OffDevice(name){ // метод выключения прибора
  super.OffDevice(name);
  }
}

class DeskLamp extends Electrodevice{
  constructor(model,price,country,type,name){// Настольная лампа
  super(name);
  this.model=model;
  this.price=price;
  this.country=country;
  this.type=type;  
  }
  ChangeLamp(model){ //метод замены лампы
  console.log('Заменить лампу у ' + model + ' на новую');
  }
  OnDevice(name){ // метод включения прибора
  super.OnDevice(name);
  }
  OffDevice(name){ // метод выключения прибора
  super.OffDevice(name);
  }
  getPower(power){ // метод полиморфизма
  console.log('Маленькая мощность потребления: ' + power);
  }
}

const dell = new Electrodevice('Dell');
const lamp = new Electrodevice('Vezzo');
const asus = new Computer('Asus','70000 р.','Китай','Linux','Компьютер');
const trest = new DeskLamp('Trest','1000 р.','Россия','Офисный','Настольная лампа');

dell.OnDevice('Dell');
lamp.OffDevice('Vezzo');
dell.getPower('20 Вт.');
trest.getPower('2 Вт.');
trest.OnDevice('DeskLamp_trest');
trest.OffDevice('DeskLamp_trest');
asus.OffDevice('Computer_asus');
asus.OnDevice('Computer_asus');
console.log(asus);
console.log(trest);