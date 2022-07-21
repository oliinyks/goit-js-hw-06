const inputEl = document.querySelector("#name-input");
const userNameEl = document.querySelector("#name-output");

inputEl.addEventListener('input', (event) =>
	userNameEl.textContent = event.currentTarget.value);