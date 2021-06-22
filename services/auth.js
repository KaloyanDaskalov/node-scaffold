const User = require('../models/User');
const errorMapper = require('../helpers/errorMapper');

module.exports = {
    register,
    login,
    userSession
};

async function register(data) {
    const { username, email } = data;

    if (username) {
        const isUSer = await User.findUser('username', username);
        // console.log('>Checking ', username, isUSer);
        if (isUSer != null) throw errorMapper.set('Username already exist!');
    }

    if (email) {
        const isEmail = await User.findUser('email', email);
        // console.log('>Checking ', email, isEmail);
        if (isEmail != null) throw errorMapper.set('Email already exist!');
    }

    const user = new User(data);
    return user.save();
}

async function login(data) {
    const { username, password } = data;

    if (username && password) {
        const user = await User.findUser('username', username);
        if (user && await user.checkPassword(password)) {
            return user;
        } else {
            throw errorMapper.set('Username or password is incorrect');
        }
    }

    throw errorMapper.set('Enter username and password');
}

async function userSession(cookie) {
    return User.jwtValidation(cookie);
}