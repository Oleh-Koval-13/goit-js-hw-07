const allCategories = document.querySelector('#categories')
const categoriesCount = allCategories.children.length;
console.log(`Number of categories: ${categoriesCount}`);

Array.from(allCategories.children).forEach(category => {
  const categoryName = category.querySelector('h2');
  console.log(`Category: ${categoryName.textContent}`);

  const categoryCount = category.querySelectorAll('ul li');
  console.log(`Elements: ${categoryCount.length}`);
});