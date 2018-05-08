const passport = require('passport');

module.exports = (express) => {
    const router = express.Router();

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }

        res.redirect('/signup');
    }

    router.get('/signup', (req, res) => {
        res.sendFile(__dirname + '/signup.html');
    });
    
    router.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/error'
    }));

    // router.get('/login', (req, res) => {
    //     res.sendFile(__dirname + '/login.html');
    // });

    // router.post('/login', passport.authenticate('local-login', {
    //     successRedirect: '/',
    //     failureRedirect: '/error'
    // }));

    router.get('/error', (req, res) => {
        res.send('You are not logged in!');
    });

    router.get('/', isLoggedIn, (req, res) => {
        res.sendFile(__dirname + '/signup.html');
    });

    return router;
};
