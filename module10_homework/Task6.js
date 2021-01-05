/*Задание 6.
Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.
*/

let vArr = [1,1,1,1,1];
let vTempitem=vArr[0];
let vItogTrue;
let vItogFalse;

vArr.forEach(function(item,index,array){
  if(array[index]==vTempitem)
    vItogTrue=true;
  else
    vItogFalse=false;
})

if(vItogFalse===false)
console.log(vItogFalse);
else
console.log(vItogTrue);