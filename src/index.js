
Astatine.setup.spinner.colorTop = '#fff';
Astatine.setup.spinner.colorBottom = '#333';

Astatine.submit({
	query: 'form',
	method: 'post',
	responseType: 'json',
	action: 'https://www.enformed.io/zpn17s0',
	prepare: function (data, resolve) {
		data['*formname'] = 'arcdev.io';
		data['*cc'] = 'jonburns10@gmail.com, alex.steven.elias@gmail.com';
		return resolve(data);
	},
	complete: function (error, success) {
		var submit = document.querySelector('[type="submit"]');

		submit.disabled = true;

		if (error) {
			console.error(error);
			submit.classList.add('error');
			submit.classList.remove('success');
			submit.value = 'Error: Please Try Again';
		} else {
			submit.classList.add('success');
			submit.classList.remove('error');
			submit.value = 'Success: Message Sent';
		}

	}
});
