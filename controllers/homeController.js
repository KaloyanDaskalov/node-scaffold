const route = require('express').Router();

route.get('/', (req, res) => {
    res.render('home');
});

route.get('/logout', (req, res) => {
    req.auth.logout();
});

module.exports = route;