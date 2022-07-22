const fontSizeControlEl = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text')

fontSizeControlEl.addEventListener('input', () => {
    const size = fontSizeControlEl.value
    textEl.style.fontSize = size + 'px'
})
