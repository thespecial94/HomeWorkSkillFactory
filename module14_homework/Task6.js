/*Задание 6.
Создать Promise, в котором c задержкой в 3 секунды сгенерировать случайное целое число от 1 до 100. Для создания задержки использовать setTimeout. 
Если сгенерированное число — четное, Promise выполнится успешно (resolve), если нечетное — выполнится с ошибкой (reject). После разрешения Promise обработать результат его выполнения и вывести сообщение в консоль:
«Завершено успешно. Сгенерированное число — number», если Promise завершился успешно. Вместо number подставить сгенерированное число
«Завершено с ошибкой. Сгенерированное число — number», если Promise завершился с ошибкой. Вместо number подставить сгенерированное число*/

function usePromise() {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let vNumber = Math.round(Math.random()*101);
      if (vNumber%2 === 0) 
      resolve(`Завершено успешно. Сгенерированное число — ${vNumber}`);
      else 
      reject(`Завершено с ошибкой. Сгенерированное число — ${vNumber}`);
    }, 3000);
  });
  myPromise
    .then((result) => {
      console.log('Обрабатываем resolve', result);
    })
    .catch((error) => {
      console.log('Обрабатываем reject', error);
    })
}
    usePromise();


