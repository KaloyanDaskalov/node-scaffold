const formsFields = {
	register: ['username', 'email', 'password', 'repeatPassword'],
	login: ['username', 'password'],
};

module.exports = (form, data = {}) => {
	return formsFields[form].reduce((acc, key) => {
		if (data[key] !== undefined) {
			acc[key] = data[key].trim();
		} else {
			acc[key] = '';
		}
		return acc;
	}, {});
};