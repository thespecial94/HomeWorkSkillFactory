/*Задание 5.
Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.*/
let vArr = [1,2,3,true,null,'?','Hi',undefined,5,6,7,8,9,isNaN,0,0,false,12];
let vKolChet=0;
let vKolNeChet=0;
let vKolZiro=0;
let vKolOthers=0;

vArr.forEach(function(item){
if(typeof(item)=="number" && !isNaN(item))
{
  if(item === 0) {
    vKolZiro++;
  } else if (item % 2 === 0) {
    vKolChet++;
  } else {
    vKolNeChet++; 
  }
}    
else 
    vKolOthers++;
})

  console.log("Количество четных элементов массива: " + vKolChet);
  console.log("Количество нечетных элементов массива: " + vKolNeChet);
  console.log("Количество нулевых элементов массива: " + vKolZiro);
  console.log("Количество других элементов массива: " + vKolOthers);

// Есть ошибка в проверке на NaN: значение нужно сравнивать не с функцией isNaN, а с её помощью: т.е. передавать значение в функцию isNaN в качестве параметра. Отдельные проверки на значения undefined и null не нужны, т.к. эти значения не имеют тип number и будут отсеяны на самой первой проверке на typeof