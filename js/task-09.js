const buttonChangeColorEl = document.querySelector('.change-color')
const textColorEl = document.querySelector('.color')

buttonChangeColorEl.addEventListener('click', getRandomHexColor)

function getRandomHexColor() {
    textColorEl.textContent = `#${Math.floor(Math.random() * 16777215).toString(
        16
    )}`
    document.body.style.backgroundColor = textColorEl.textContent
}
