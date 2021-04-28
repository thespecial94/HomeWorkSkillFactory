/*Задание 5.
Написать скрипт, который при открытии страницы будет делать следующее:
если пользователь зашел в первый раз, вывести окно prompt с сообщением:
«Добро пожаловать! Назовите, пожалуйста, ваше имя».
После того, как пользователь введет имя, записать имя, дату и время визита в localStorage.
Подсказка: для определения текущей даты используйте new Date().
Если пользователь открывает страницу не впервые (это можно узнать по наличию соответствующих записей в localStorage), вывести в alert сообщение вида:
«Добрый день, *имя пользователя*! Давно не виделись. В последний раз вы были у нас *дата последнего посещения*»
и перезаписать дату последнего посещения.
Дату можно вывести в любом удобочитаемом формате (не Timestamp, должен четко читаться день, месяц, год и время — часы и минуты).*/



//localStorage.clear();
let getCurDate = localStorage.getItem("CurDate");
let getName = localStorage.getItem("Name");
let now = new Date(); 
now = now.getDate() +"." + +(now.getMonth()+1) +"." + now.getFullYear()+" " +now.getHours() +":" +now.getMinutes();
if(getName===null)   
  {
    var name=prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя');
    localStorage.setItem("Name", `${name}`); 
    localStorage.setItem("CurDate", `${now}`);
  }     
else
  {
    alert(`Добрый день, ${getName}! Давно не виделись. В последний раз вы были у нас ${getCurDate}`);
    localStorage.setItem("CurDate", `${now}`);
  } 


