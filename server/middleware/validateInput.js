function validateSignupInput(req, res, next) {
    const { username, password, confirmPassword } = req.body;

    if (!username || !password || !confirmPassword) {
        req.flash('error_msg', 'Please fill in all fields');
        return res.redirect('/auth/signup');
    }

    if (password !== confirmPassword) {
        req.flash('error_msg', 'Passwords do not match');
        return res.redirect('/auth/signup');
    }

    next(); // Proceed if validation passes
}

module.exports = { validateSignupInput };