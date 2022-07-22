const loginFormEl = document.querySelector('.login-form')

loginFormEl.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault()

    const {
        elements: { login, password },
    } = event.currentTarget

    if (login.value === '' || password.value === '') {
        return console.log('Please fill in all the fields!')
    }

    console.log(`Login: ${login.value}, Password: ${password.value}`)
    event.currentTarget.reset()
}



// function onFormSubmit(event) {
// 	//does not allow the page to refresh
// 	event.preventDefault();

// // verification data
// 	inputEl.forEach(i => {
// 		if (!i.value) {
// 			return window.alert("Fill in the fields");
// 		}
// 	})

// 	//Sends data and outputs it to the console
// 	const formData = new FormData(event.currentTarget);
// 	formData.forEach((value, name) => {
// 		console.log("🚀~ name", name);
// 		console.log("🚀~ value", value);
// 	});

// 	//reset data
// 	loginFormEl.reset();
// }ﬁ