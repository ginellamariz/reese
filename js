	const nameElement = document.querySelector(".user");
	const newcreateform = document.querySelector(".create-form");

	const username = localStorage.getItem('user') || '';

	nameElement.value = username;

	nameElement.addEventListener('change', (e) => {
		localStorage.setItem('username', e.target.value);
	})
