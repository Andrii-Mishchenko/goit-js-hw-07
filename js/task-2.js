const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// Создаем элементы <li>
const listItemEl = ingredients.map(ingredient => {
    const item = document.createElement('li');
    item.textContent = ingredient;
    return item
});
console.log(listItemEl)

// Вставляем все li в ul c помощью распыления
const ingredientsContainerEl = document.querySelector('#ingredients');
ingredientsContainerEl.append(...listItemEl);