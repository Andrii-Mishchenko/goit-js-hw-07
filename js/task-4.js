// создаем переменные: текущее значение спана, кнопку увелисения и кнопку уменьшения:
const counterValue = document.querySelector('#value');
const increaseBtn = document.querySelector('[data-action="increment"]');
const decreaseBtn = document.querySelector('[data-action="decrement"]');

// создаем функции increment и decrement для увеличения и уменьшения значения счетчика
const increase = () => 
counterValue.textContent = Number(counterValue.textContent) + 1;

const decrease = () => 
counterValue.textContent = Number(counterValue.textContent) - 1;

// добавляем слушатели кликов на кнопки, вызовы функций и обновление интерфейса
increaseBtn.addEventListener('click', increase);
decreaseBtn.addEventListener('click', decrease);



