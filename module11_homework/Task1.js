/*Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.*/
function getArrayNumber(){
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
   vKolOthers++;
})

  console.log("Количество четных элементов массива: " + vKolChet);
  console.log("Количество нечетных элементов массива: " + vKolNeChet);
  console.log("Количество нулевых элементов массива: " + vKolZiro);
  console.log("Количество других элементов массива: " + vKolOthers);
}

getArrayNumber();
