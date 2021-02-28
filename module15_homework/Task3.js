/*Задание 3.
Сверстайте кнопку, клик на которую будет выводить на экран следующие данные:
Размеры экрана пользователя (ширина и высота).
Координаты местонахождения пользователя. Если пользователь отказался дать доступ к местоположению или данная функция недоступна в бразуере, вывести вместо координат сообщение «Информация о местоположении недоступна».*/

//HTML
<button class="info_user">
  <div class="btn_text">Сбор инфомарции по пользователю</div>
</button>
  <div class="btn_info_user">
    <!--   начало вставки информации   -->
  </div>
 
//JS 
const btn = document.querySelector('.info_user');
const info = document.querySelector('.btn_info_user');

btn.addEventListener("click", InfoUser);
function InfoUser(){
  let output=``;
  let userScreenWidth = 'Ширина девайса пользователя: '+window.screen.width + ';';
  output += userScreenWidth;
  let userScreenHeight = 'высота девайса пользователя: '+window.screen.height + ';';
  output += userScreenHeight;
  let coords=``;
  if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
} else {
  coords='информация о местоположении недоступна.';
  output +=coords;
  SetOutput(output);
}
    function locationSuccess(data) {
    coords = `координаты местонахождения пользователя: широта - ${data.coords.longitude}; долгота -  ${data.coords.latitude}.`;
      output +=coords;
      SetOutput(output);
  }
  
  function locationError() {
    coords="информация о местоположении недоступна";
    output +=coords;
    SetOutput(output);
  }
  function SetOutput(output){
    info.innerHTML=output;
  }
}






