function ensureAdmin(req, res, next) {
    if (req.session.user && req.session.user.role === 'admin') {
        return next();
    } else {
        req.flash('error_msg', 'Admin access required');
        res.redirect('/auth/login');
    }
}

module.exports = { ensureAdmin };