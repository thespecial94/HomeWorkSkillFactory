/*Напишите функцию getPercents(percent, number), которая возвращает {percent} процентов от {number}.*/
export function getPercents(percent, number) {
  if(percent==='' || number==='')
    return `На вход была передана пустая строка(процент=${percent};сумма=${number})`;
  else if(typeof(percent)==='string' || typeof(number)==='string')
    return `На вход была передана строка(процент=${percent};сумма=${number})`;
  else if(percent<0 || number<0)
    return `На вход был передан процент=${percent} или сумма=${number} меньше нуля`;
  else if(isNaN(percent) || isNaN(number))
    return `На вход было передано неопределенное значение(процент=${percent};сумма=${number})`;
  else
	return number / 100 * percent;
}

//const res = getPercents(30, 200);

//console.log(res);