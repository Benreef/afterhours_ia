const session = require('express-session');

// we are using express-session to create sessions, to make a cookie
module.exports = session({
    key: 'user_sid',
    secret: process.env.EXPRESS_SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 } // 1000miliseconds(which is 1s * 60s(becomes one minute) * 60mins(becomes one hour) * 24h(becomes one day))
});