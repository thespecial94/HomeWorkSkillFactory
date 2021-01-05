/*Задание 5.
Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.*/
let vArr = [1,2,3,4,5,10,'Hi'];
let vArrSize = vArr.length;

vArr.forEach(function(item,index,array){
  console.log(`item: ${item}, index: ${index}`)
})
  console.log('Количество элементов массива: ' + vArrSize);