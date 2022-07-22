const mainDivEl = document.querySelector('#controls')
const inputEl = mainDivEl.querySelector('#controls input')
const createEl = mainDivEl.querySelector('[data-create]')
const destroyEl = mainDivEl.querySelector('[data-destroy]')
const boxForBoxes = document.querySelector('#boxes')

inputEl.addEventListener('input', GetValue)
createEl.addEventListener('click', createBoxes)
destroyEl.addEventListener('click', destroyBoxes)

function GetValue(number) {
    const inputValue = number.currentTarget.value
    createBoxes(inputValue)
}

function createBoxes(amount) {
    const basicSize = 30
    const fragment = document.createDocumentFragment()

    for (let i = 0; i < amount; i += 1) {
        const size = basicSize + i * 10
        const newBox = document.createElement('div')
        newBox.style.backgroundColor = getRandomHexColor()
        newBox.style.width = `${size}px`
        newBox.style.height = `${size}px`

        fragment.appendChild(newBox)
    }
    boxForBoxes.appendChild(fragment)
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

function destroyBoxes() {
    boxForBoxes.textContent = ''
}
