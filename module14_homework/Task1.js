/*Задание 1.
Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.
 XML:
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
JS-объект:

{
  list: [
    { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
    { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
  ]
}*/

const parser = new DOMParser();

// XML, который мы будем парсить
const xmlString = `
  <list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

// Парсинг XML
let str="{list:";
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
// Получение всех DOM-нод
const listNode=xmlDOM.querySelector("list");
let result=[];
const studentNode=listNode.querySelectorAll("student");
studentNode.forEach(function(student,index,array){
const nameNode = student.querySelector("name");
const langAttr = nameNode.getAttribute("lang");
const first = nameNode.querySelector("first");
const second = nameNode.querySelector("second");
const age = student.querySelector("age");
const prof = student.querySelector("prof");
    result.push({
    name: first.textContent + " " + second.textContent,
    age: Number(age.textContent),
    prof: prof.textContent,
    lang: langAttr             
  });               
});
let itog= {
  list: result
}
console.log('itog',itog);
