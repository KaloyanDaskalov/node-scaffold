module.exports = {
    isAuth,
    isGuest,
    isOwner
};

function isAuth() {
    return (req, res, next) => {
        if (req.auth.user) {
            next();
        } else {
            res.redirect('/auth/login');
        }
    };
}

function isGuest() {
    return (req, res, next) => {
        if (!req.auth.user) {
            next();
        } else {
            res.redirect('/');
        }
    };
}

function isOwner() {
    //TODO
    // return (req, res, next) => {
    //     if (req.data.cube && req.user && (req.data.cube.authorId == req.user._id)) {
    //         next();
    //     } else {
    //         res.redirect('/auth/login');
    //     }
    // };
}
