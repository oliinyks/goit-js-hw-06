const loginFormEl = document.querySelector('.login-form')

loginFormEl.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault()

    const {
        elements: { email, password },
    } = event.currentTarget
	

    if (email.value === '' || password.value === '') {
        return alert('Please fill in all the fields!')
    }

    console.log(`Login: ${email.value}, Password: ${password.value}`)
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