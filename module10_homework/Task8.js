/*Задание 8.
Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
Используйте шаблонные строки.*/
let vMap = new Map();

vMap.set('key1',1);
vMap.set('key2','Test');
vMap.set('key3', true);

for(let vKey of vMap.keys())
{
    console.log('Ключ - ' + vKey + ', ' + 'значение - ' + vMap.get(vKey));
}