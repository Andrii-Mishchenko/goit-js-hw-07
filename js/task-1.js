
// Ищем кол-во категорий в ul#categories, то есть элементов li.item
const listOfCategoriesEl = document.querySelectorAll('#categories li.item');
console.log(`В списке ${listOfCategoriesEl.length} категории.`);
console.log(listOfCategoriesEl)

// перебираем псевдомасив
listOfCategoriesEl.forEach(item => {
    console.log(`Категория: ${item.querySelector('h2').textContent}`);
    console.log(`Количество элементов: ${item.querySelectorAll('ul li').length}`);
});
