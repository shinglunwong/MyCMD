const passport = require('passport');
const axios = require('axios');

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

    router.post('/api/xxx', (req, res) => {

        console.log(req.body); //testing
        
        axios({
            url: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
            method: 'post',
            headers: {
                'x-app-key': '0cc29202aed5d97a53a5d8a530346f87',
                'x-app-id': 'a0662efe',
                'Content-Type': 'application/json'
            },
            data: {
                "query": req.body.query
            },
            responseType: 'json'
        }).then((body) => {

            res.json(body.data.foods[0].nf_calories);
        }).catch((err) => {
            console.log(err)
        })
    });

    router.get('/error', (req, res) => {
        res.send('You are not logged in!');
    });

    router.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html');
    });

    return router;
};
