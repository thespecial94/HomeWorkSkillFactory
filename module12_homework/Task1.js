/*Задание 1.
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.*/
const Planets = {
  Name: 'Земля',
  Population: '7.8 млрд.'
}

const country = Object.create(Planets);

country.ownCountry='Россия';
country.ownCity='Москва';

function getInfo(country){
      for(let key in country)
    if(country.hasOwnProperty(key))
    console.log(key + ": " + country[key]);
}

getInfo(country);