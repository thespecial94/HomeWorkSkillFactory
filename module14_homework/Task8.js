/*Задание 8.
Написать код приложения, интерфейс которого состоит из двух input и кнопки. В input можно ввести любое число.
Заголовок первого input — «номер страницы».
Заголовок второго input — «лимит».
Заголовок кнопки — «запрос».
При клике на кнопку происходит следующее:
Если число в первом input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Номер страницы вне диапазона от 1 до 10»;
Если число во втором input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Лимит вне диапазона от 1 до 10»;
Если и первый, и второй input не в диапазонах или не являются числами — выводить ниже текст «Номер страницы и лимит вне диапазона от 1 до 10»;
Если числа попадают в диапазон от 1 до 10 — сделать запрос по URL https://picsum.photos/v2/list?page=1&limit=10, где GET-параметр page — это число из первого input, а GET-параметр limit — это введённое число второго input. 
Пример: если пользователь ввёл 5 и 7, то запрос будет вида https://picsum.photos/v2/list?page=5&limit=7.
После получения данных вывести список картинок на экран.
Если пользователь перезагрузил страницу, то ему должны показываться картинки из последнего успешно выполненного запроса (использовать localStorage).*/

<main>
  <div id="frame">
    <h1>Узнать список картинок</h1>
    <input id="inputPage" type="text" placeholder="Введите номер страницы" />
    <input id="inputLimit" type="text" placeholder="Введите лимит" />
    <button id="button">Запрос</button>
    <div id="output"></div>
  </div>
</main>

function pageLoaded() {
  const inputPage = document.querySelector("#inputPage");
  const inputLimit = document.querySelector("#inputLimit");
  const btn = document.querySelector("#button");
  const output = document.querySelector("#output");
  let temp='';  
  function sendRequest() {
if(inputLimit.value<1 || inputLimit.value>10 || inputPage.value<1 || inputPage.value>10 
   || isNaN(+inputPage.value) || isNaN(+inputLimit.value)) 
   return console.log("Номер страницы и лимит вне диапазона от 1 до 10");
else if(inputPage.value<1 || inputPage.value>10 || isNaN(+inputPage.value))
   return console.log("Номер страницы вне диапазона от 1 до 10");
else if(inputLimit.value<1 || inputLimit.value>10 || isNaN(+inputLimit.value)) 
   return console.log("Лимит вне диапазона от 1 до 10");
    else {
      fetch(`https://picsum.photos/v2/list?page=${inputPage.value}&limit=${inputLimit.value}`)
      .then(response => {
        return response.json(); 
      })  
      .then(data => {
        writeOutput(formatOutput(data));
      })
    } 
  }      
       
  function formatOutput(data) {
    let output=``;  
   
    localStorage.setItem("images", data); 
  for(let i=0; i<data.length;i++)      
     output += `<img src="${data[i].download_url}" width="400" height="300"/>`; 
     return output;  
  }   
  function writeOutput(message) { 
    output.innerHTML = message;  
  }
  
  btn.addEventListener("click", sendRequest); 
 
}
 
document.addEventListener("DOMContentLoaded", pageLoaded); 





