const route = require('express').Router();
const getFormData = require('../helpers/getFormData');
const errorMapper = require('../helpers/errorMapper');

route.get('/login', (req, res) => {
    res.render('login');
});

route.get('/register', (req, res) => {
    res.render('register');
});

route.post('/register', async (req, res) => {
    let data = {};

    try {
        data = getFormData('register', req.body);
        const user = await req.auth.register(req.body);
        req.auth.setCookie(user.jwtSign());
        res.redirect('/');
    } catch (err) {
        res.locals.error = errorMapper.get(err);;
        res.render('register', data);
    }
});

route.post('/login', async (req, res) => {
    let data = {};

    try {
        data = getFormData('login', req.body);
        const user = await req.auth.login(req.body);
        req.auth.setCookie(user.jwtSign());
        res.redirect('/');
    } catch (err) {
        res.locals.error = errorMapper.get(err);;
        res.render('login', data);
    }
});

module.exports = route;