/*Напиши скрипт, который реагирует на изменение значения 
input#font - size - control(событие input) и изменяет инлайн - стиль
span#text обновляя свойство font - size.
В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>
*/

const fontSizeRange = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

fontSizeRange.addEventListener('input', onFontSizeChange)

function onFontSizeChange(event) {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
}