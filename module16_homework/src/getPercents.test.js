/*Напишите функцию getPercents(percent, number), которая возвращает {percent} процентов от {number}.*/
import { getPercents }  from "./getPercents.js";
describe("check percents and number - unit-tests and corner test",()=>{
	it("check result",()=>{
		expect(getPercents(30,200)).toBe(60);
		expect(getPercents(-30,200)).toBe(`На вход был передан процент=-30 или сумма=200 меньше нуля`);
		expect(getPercents('dgfd',200)).toBe(`На вход была передана строка(процент=dgfd;сумма=200)`);
		expect(getPercents('',200)).toBe(`На вход была передана пустая строка(процент=;сумма=200)`);
		expect(getPercents(undefined,NaN)).toBe(`На вход было передано неопределенное значение(процент=undefined;сумма=NaN)`);
	});
});