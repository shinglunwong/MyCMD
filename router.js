const passport = require('passport');

module.exports = (express) => {
    const router = express.Router();

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }

        res.redirect('/');
    }

    router.get('/signup', (req, res) => {
        res.sendFile(__dirname + '/signup.html');
    });
    
    router.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/error'
    }));

    router.get('/login', (req, res) => {
        res.sendFile(__dirname + '/login.html');
    });
    router.get('/testing',(req, res) => {
        res.sendFile(__dirname + '/testing.html');
    });

    router.post('/login', passport.authenticate('local-login', {
        successRedirect: '/testing',
        failureRedirect: '/error'
    }));

    router.get('/yes', (req, res) => {        //succeed in login
        res.send('logged in!');
    });

    router.get('/error', (req, res) => {
        res.send('You are not logged in!');
    });

    router.get('/', (req, res) => {
        res.sendFile(__dirname + '/signup.html');
    });
    router.get('/test', (req, res) => {
        res.sendFile(__dirname + '/apitesting.html');
    });

    return router;
};
