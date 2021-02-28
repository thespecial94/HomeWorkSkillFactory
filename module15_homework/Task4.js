/*Задание 4.
Сверстайте кнопку, по клику на которую будет отправляться запрос к Timezone API. В запросе нужно отправить координаты местоположения пользователя, полученные с помощью Geolocation API.
В ответ на запрос придёт объект, из которого нужно вывести на экран следующую информацию:
временная зона, в которой находится пользователь: параметр timezone;
местные дата и время: параметр date_time_txt.
Строка запроса к API выглядит следующим образом:
https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=latitude&long=longitude.
Вместо latitude и longitude нужно подставить широту и долготу.*/

//HTML
<button class="info_request_api">
  <div class="btn_text">Отправить запрос к Timezone API</div>
</button>
  <div class="get_info_timezone_api">
    <!--   начало вставки информации   -->
  </div>

//JS
const btn = document.querySelector('.info_request_api');
const result = document.querySelector('.get_info_timezone_api');
btn.addEventListener("click", InfoTimezone);
function InfoTimezone(){
  let output=``;
  let info;
  if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(locationSuccess, locationError,);
} else {
  info='информация о местоположении недоступна.';
  output +=info;
  SetOutput(output);
}
    function locationSuccess(data) {
      fetch(`https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=${data.coords.latitude}&long=${data.coords.longitude}`)
      .then(response => {
        return response.json(); 
      })  
      .then(data => {
        info=`временная зона - ${data.timezone};местная дата и время - ${data.date_time_txt}.`;
        output +=info;
        SetOutput(output);
      })
  }
  function locationError() {
    info="информация о местоположении недоступна";
    output +=info;
    SetOutput(output);
  }
  function SetOutput(output){
    result.innerHTML=output;
  }
}







