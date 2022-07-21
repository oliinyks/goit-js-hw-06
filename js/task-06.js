const validationInputEl = document.querySelector("#validation-input");

validationInputEl.addEventListener('blur', (event) => {

	if (event.currentTarget.value.length === 6) {
    return validationInputEl.classList.add("valid");
	}
	return validationInputEl.classList.add("invalid");
})