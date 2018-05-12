const passport = require('passport');
const axios = require('axios');

module.exports = (express, knex) => {
    const router = express.Router();

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }

        res.redirect('/');
    }

    router.get('/signed', (req, res) => {
        res.send('signed in !');
    });
    
    router.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/signed',
        failureRedirect: '/error'
    }));

    router.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html');
    });
    router.get('/testing',isLoggedIn,(req, res) => {
        res.sendFile(__dirname + '/testing.html');
    });

    router.post('/login', passport.authenticate('local-login', {
        successRedirect: '/dashboard',
        failureRedirect: '/error',
        successFlash: 'Welcome!' 
    }));
    //log out
    router.get('/logout', function(req, res){
        req.logout();
        res.redirect('/');
      });

    //check food  VVV
    router.post('/api/xxx', (req, res) => {

        console.log(req.user); //testing
         
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
    //save food VVV
    router.post('/api/save-result', (req, res) => {
        console.log(req.user);
        console.log(req.body.calories); //testing
               knex('get').insert({
                  record: parseFloat(req.body.calories), user_idkey: req.user.id}).then() //.then() is for insert the result
    });

    router.get('/error', (req, res) => {
        res.send('failed');
    });

    router.get('/dashboard', isLoggedIn,(req,res) =>{
        res.sendFile(__dirname + '/dashboard.html');
    })
    router.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html');
    });

    router.get('/getExe',(req,res) => {
        knex.select('id','name').from('activity')
            .then((data) => {
                res.json(data);
    
            }).catch((err) => {
                console.log(err)
            })
        })
    
    return router;
};
