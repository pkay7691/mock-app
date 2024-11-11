const logger = require('./logger'); // Assuming you have a logger middleware

// Custom error handler middleware
function errorHandler(err, req, res, next) {
    // Log the error details for debugging (you can also log to a file or monitoring service)
    logger.error(`${err.status || 500} - ${err.message} - ${req.method} ${req.url} - ${req.ip}`);

    // Set the response status code
    res.status(err.status || 500);

    // Respond based on the environment
    if (process.env.NODE_ENV === 'production') {
        // In production, avoid exposing stack traces to users
        res.render('error', {
            message: 'Something went wrong. Please try again later.',
            error: {} // Don't expose the stack trace
        });
    } else {
        // In development, display detailed error information
        res.render('error', {
            message: err.message,
            error: err // Expose stack trace in development
        });
    }
}

// Export the error handler function
module.exports = errorHandler;