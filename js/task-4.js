// создаем переменные: текущее значение спана, кнопку увелисения и кнопку уменьшения:
const counterValueRequest = document.querySelector('#value');
let counterValue = Number(counterValueRequest.textContent);
const increaseBtn = document.querySelector('[data-action="increment"]');
const decreaseBtn = document.querySelector('[data-action="decrement"]');

// добавляем слушатели кликов на кнопки, вызовы функций и обновление интерфейса
increaseBtn.addEventListener('click', increase);
decreaseBtn.addEventListener('click', decrease);

// создаем функции increment и decrement для увеличения и уменьшения значения счетчика

function increase() {
updateCounterValue(true);
updateView();
}

function decrease() {
updateCounterValue(false);
updateView();
}

function updateCounterValue(payload) {
if (payload) counterValue += 1;
else counterValue -= 1;
}

function updateView() {
counterValueRequest.textContent = counterValue;
}


// Неправильний варіант:
// function increase() {
//     counterValue += 1;
//     counterValueRequest.textContent = counterValue;   
// }

// function decrease() {
//     counterValue -= 1;
//     counterValueRequest.textContent = counterValue; 
// }