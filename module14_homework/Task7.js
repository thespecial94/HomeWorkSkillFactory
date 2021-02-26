/*Задание 7.
Написать код приложения, интерфейс которого состоит из поля ввода и кнопки «Получить список задач». При нажатии на кнопку нужно отправить запрос с помощью fetch на URL https://jsonplaceholder.typicode.com/users/3/todos. 
Число 3 представляет собой id пользователя, вместо него нужно подставить число, введенное в поле. Если пользователь с таким id существует, вернется список задач для этого пользователя, каждая задача представлена объектом вида:
{
    "userId": 3,
    "id": 43,
    "title": "tempore ut sint quis recusandae",
    "completed": true
}
Где title — описание задачи, а completed — флаг, отображающий, выполнена задача или нет. Вывести данный список на страницу, 
оформив соответствующим образом: в виде списка (ul или ol), выполненные задачи должны быть написаны зачеркнутым текстом. Если пользователь с введенным id не существует, вывести сообщение:
«Пользователь с указанным id не найден».*/

<main>
  <div id="frame">
    <h1>Узнать данные по пользователю</h1>
    <input id="input" type="text" placeholder="Введите id - пользователя" />
    <button id="button">Узнать</button>
    <div id="output"></div>
  </div>
</main>

function pageLoaded() {
  const input = document.querySelector("#input");
  const btn = document.querySelector("#button");
  const output = document.querySelector("#output");
  function sendRequest() {
    if (input.value !== '') {
      fetch(`https://jsonplaceholder.typicode.com/users/${input.value}/todos`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        writeOutput(formatOutput(data));
      })
    }
  }
  
  function formatOutput(data) {
if(data.length === 0)
  alert("Пользователь с указанным id не найден")
 let output = `<ul>`;
  for(let i=0; i<data.length;i++)
  { 
    if(data[i].completed===true)
      output +=`<li><strike>${data[i].title}</strike></li>`;
    else
      output +=`<li>${data[i].title}</li>`;
  }
    output += `</ul>`;
     
     return output;
  } 
  function writeOutput(message) {
    output.innerHTML = message;
  }
  
  btn.addEventListener("click", sendRequest);
}

document.addEventListener("DOMContentLoaded", pageLoaded);


