const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
]

const ingredientsEl = document.querySelector('#ingredients')

const newLiEl = ingredients.map((element) => {
    const liEl = document.createElement('li')
    liEl.textContent = element
    liEl.classList.add('item')
    return liEl
})

ingredientsEl.append(...newLiEl)
