// создаем переменные: текущее значение спана, кнопку увелисения и кнопку уменьшения:
let counterValue = Number(document.querySelector('#value').textContent);
const increaseBtn = document.querySelector('[data-action="increment"]');
const decreaseBtn = document.querySelector('[data-action="decrement"]');

// добавляем слушатели кликов на кнопки, вызовы функций и обновление интерфейса
increaseBtn.addEventListener('click', increase);
decreaseBtn.addEventListener('click', decrease);

// создаем функции increment и decrement для увеличения и уменьшения значения счетчика
function increase() {
    counterValue += 1;
    document.querySelector('#value').textContent = counterValue;   
}

function decrease() {
    counterValue -= 1;
    document.querySelector('#value').textContent = counterValue; 
}