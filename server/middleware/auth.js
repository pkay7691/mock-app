function ensureAuthenticated(req, res, next) {
    if (req.session.user) {
        return next(); // User is authenticated, proceed to the next middleware or route handler
    } else {
        req.flash('error_msg', 'Please log in to view this resource');
        res.redirect('/auth/login');
    }

}

module.exports = { ensureAuthenticated }