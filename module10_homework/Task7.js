/*Задание 5.
Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.*/
let vArr = [1,2,3,true,null,'?','Hi',undefined,5,6,7,8,9,isNaN,0,0,false,12];
let vKolChet=0;
let vKolNeChet=0;
let vKolZiro=0;
let vKolOthers=0;

vArr.forEach(function(item,index,array){
if(typeof(item)=="number" && item!==0 && item!==isNaN && item!==undefined && item!==null)
  {
  if(item%2===0)
    vKolChet++;
  else
    vKolNeChet++; 
  }
  else if(item===0)
    vKolZiro++;
else 
    vKolOthers++;
})

  console.log("Количество четных элементов массива: " + vKolChet);
  console.log("Количество нечетных элементов массива: " + vKolNeChet);
  console.log("Количество нулевых элементов массива: " + vKolZiro);
  console.log("Количество других элементов массива: " + vKolOthers);