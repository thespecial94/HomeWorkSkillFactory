/*Задание 3 - 4 .
Дан JSON-файл с информацией о выручке фирмы по кварталам за период с 2017 по 2019 год. Файл доступен по этой ссылке.
Вам нужно написать код приложения, интерфейс которого состоит из:
выпадающего списка (использовать тег select, подробная документация здесь), в котором можно выбрать год с 2017 по 2018;
кнопки «Загрузить отчет».
Пользователь выбирает год в списке и нажимает кнопку «Загрузить отчет». Если год не выбран, вывести сообщение «Выберите, пожалуйста, год». Если год выбран, отправить XHR-запрос к JSON-файлу, используя URL, указанный выше, обработать его содержимое и вывести информацию о выручке в выбранном году в виде таблицы.
Пример вывода:*/

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
<select name="select" class="SelectValue"> 
  <option value="value1" selected></option>
  <option value="value2">2017</option>
  <option value="value3">2018</option>
</select>
  <button class="btn-Loading">Загрузить отчет</button>
<table cellspacing="1" border="1" cellpadding="4" width="200">
  <tr>
    <td>1 кв.</td>
    <td>2 кв.</td>
    <td>3 кв.</td>
    <td>4 кв.</td>
  </tr>
  <tr>
    <td class="firstQv"></td>
    <td class="secondQv"></td>
    <td class="thirdQv"></td>
    <td class="fourthQv"></td>
  </tr>
</table>
</body>
</html>

const reqUrl = "https://my.api.mockaroo.com/revenue_2017-2019.json?key=fd36b440";
let value='';   
function useRequest(async) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', reqUrl, async);
  xhr.send();
  xhr.onload = function() {
    if(xhr.status!==200) return;
    let data = JSON.parse(xhr.response);
    for(let i=0; i<data.length;i++)
		{ 
			if(+(value)===data[i].year)
              {
              document.querySelector('.firstQv').innerHTML=data[i].sales.q1;
              document.querySelector('.secondQv').innerHTML=data[i].sales.q2;
              document.querySelector('.thirdQv').innerHTML=data[i].sales.q3;
              document.querySelector('.fourthQv').innerHTML=data[i].sales.q4;
              }
		} 
  };  
};
const btnLoading = document.querySelector('.btn-Loading');
const chSelect = document.querySelector('.SelectValue'); 

chSelect.addEventListener('change', function() { 
  const Id = document.querySelector(".SelectValue").options.selectedIndex;
  value = document.querySelector(".SelectValue").options[Id].text; 
});          

btnLoading.addEventListener('click', () => {         
   if(value==="")
   alert("Выберите, пожалуйста, год");
   else      
   useRequest(true);    
});
