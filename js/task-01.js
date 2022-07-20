const categoriesEl = document.querySelector("#categories");

const itemEl = categoriesEl.querySelectorAll(".item");
// const itemEl = categoriesEl.children.length;
console.log(`Number of categories: ${itemEl.length}`);


//-------------------------2-----------------------------

const array = document.querySelectorAll('.item')

array.forEach(element => {
	console.log(`Category: ${element.firstElementChild.textContent}`);
	console.log(`Elements: ${element.lastElementChild.children.length}`);
});


