module.exports = {
	100(err) {
		return [err.message];
	},
	set(message = 'Custom Error', code = 100) {
		const customError = new Error();
		customError.message = message;
		customError.code = code;
		return customError;
	},
	get(err) {
		if (this.hasOwnProperty(err.code)) {
			return this[err.code](err);
		}

		let messages = [];

		if (err.errors && Object.values(err.errors).length > 0) {
			messages = Object.values(err.errors).map(e => e.properties.message);
		} else if (err.message) {
			messages.push(err.message);
		}

		return messages.length > 0 ? messages : ['Something went wrong, try again!'];
	}
};