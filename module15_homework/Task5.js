/*Задание 5.
Реализовать чат на основе эхо-сервера wss://echo.websocket.org/
Интерфейс состоит из input, куда вводится текст сообщения, и кнопки «Отправить».
При клике на кнопку «Отправить» сообщение должно появляться в окне переписки.
Эхо-сервер будет отвечать вам тем же сообщением, его также необходимо выводить в чат:
img
Добавить в чат механизм отправки гео-локации:
img
При клике на кнопку «Гео-локация» необходимо отправить данные серверу и в чат вывести ссылку на https://www.openstreetmap.org/ с вашей гео-локацией. Сообщение, которое отправит обратно эхо-сервер, не выводить.*/
//HTML
<main class="chatBot">
  <div class="info_output"></div>
  <div class="chat_output"></div>
  <div class="chat_input">
    <input type="text" placeholder="Здесь вводится текст сообщения" />
    <button class="btn_send">Отправить</button>
    <button class="btn_geo_location">Гео-локация</button>
  </div>
</main>
//CSS
.chatBot {
  width: 400px;
  margin: 15px auto;
  padding: 20px;
}

.info_output {
  color: grey;
  font-style: italic;
}

.chat_output {
  margin: 20px 0;
  border: 1px solid grey;
  padding: 10px;
  height: 150px;
  overflow-y: scroll;
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
}

.chat_output > div {
  max-width: 80%;
  padding: 5px 10px;
  margin: 5px 0;
  border-radius: 3px;
  color: #fff;
}

.chat_output .recieved {
  background: #353580;
  align-self: flex-start;
}
.chat_output .sent {
  background: #1b8a1b;
  align-self: flex-end;
}
.chat_output .link {
  align-self: flex-end;
}
.chat_input input {
  padding: 5px 10px;
}


//JS
function pageLoaded(){
const wsUri = "wss://echo.websocket.org/";
const btn_geo = document.querySelector('.btn_geo_location');
const btn_send = document.querySelector('.btn_send');
const info_chat_output = document.querySelector('.chat_output');
const info_ouput = document.querySelector('.info_output');
const input = document.querySelector("input");
btn_send.addEventListener("click", sendToWebSocket);
btn_geo.addEventListener("click", sendGeoLocation);
let socket = new WebSocket(wsUri);
  socket.onopen = () => {
    info_ouput.innerText = "Соединение установлено";
  }
  socket.onerror = () => {
    info_ouput.innerText = "При передаче данных произошла ошибка";
  }
   socket.onmessage = (event) => {
     let regexp = /link/gi;
     let flag = regexp.test(event.data);
     if(flag===true) return;
       else
    EchoChatBot(event.data, true);
  }
   function sendToWebSocket() {
    if (!input.value) return;
    socket.send(input.value);
    EchoChatBot(input.value, false);
    input.value === "";
  }
  
  function sendGeoLocation() {
      let output=``;
      let info;
      if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(locationSuccess, locationError,);
    } else {
      info='информация о местоположении недоступна.';
      output +=info;
      EchoChatBot(output,false);
    }
    function locationSuccess(data) {
      let messageHTML = `<a href='https://www.openstreetmap.org/#map=${data.coords.accuracy}/${data.coords.latitude}/${data.coords.longitude}' class="link" target="_blank">Гео-локация</a>`;
      socket.send(messageHTML);
      info_chat_output.innerHTML += messageHTML;   
  }
  function locationError() {
    info="информация о местоположении недоступна";
    output +=info;
    EchoChatBot(output,false);
  }
  }
  
  function EchoChatBot(message, isRecieved){
    let messageHTML = `<div class="${isRecieved? "recieved" : "sent"}">${message}</div>`;
    info_chat_output.innerHTML += messageHTML; 
  }
}

document.addEventListener("DOMContentLoaded", pageLoaded);






