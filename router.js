const passport = require('passport');
const axios = require('axios');
const moment = require('moment');

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
        successRedirect: '/dashboard',
        failureRedirect: '/error'
    }));

    router.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html');
    });
    router.get('/hiit', (req, res) => {
        res.sendFile(__dirname + '/hiit.html');
    });

    router.get('/testing', (req, res) => {
        res.sendFile(__dirname + '/testing.html');
    });

    router.post('/login', passport.authenticate('local-login', {
        successRedirect: '/dashboard',
        failureRedirect: '/error',
    }));
    router.get('/error', (req, res) => {
        res.send('failed');
    });

    //log out
    // router.get('/logout', function (req, res) {
    //     console.log('HI');
    //     req.logout();
    //     res.redirect('/');
    // });

    //check food  VVV
    router.post('/api/get-calories', (req, res) => {
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
        knex('get').insert({
            record: parseFloat(req.body.calories),
            user_idkey: req.user.id
        }).then((data) => {
            res.json(data) //.then() is for insert the result 
            // console.log("good save");
        }).catch((err) => {
            console.log(err);
        })
    });

    router.get('/dashboard', isLoggedIn, (req, res) => {
        res.sendFile(__dirname + '/dashboard.html');
    })

    router.get('/getExe', (req, res) => {
        knex.select('id', 'name', 'MET').from('activity')
            .then((data) => {
                res.json(data);
            }).catch((err) => {
                console.log(err)
            })
    })

    router.get('/cal', (req, res) => {
        let user = req.user
        knex.select('weight').from('user_profile').where({
                id: user.id
            })
            .then((data) => {
                res.json(data[0].weight);
            }).catch((err) => {
                console.log(err)
            })
    })

    router.post('/api/save-burnresult', (req, res) => {
        console.log(req.user.id)
        console.log(req.body)
        knex('burn').insert({
            record: parseFloat(req.body.calories),
            user_idkey: req.user.id
        }).then((data) => {
            res.json(data)
        }).catch((err) => {
            console.log(err);

        })
    });

    router.get('/show', (req, res) => {
        res.sendFile(__dirname + '/chart.html');
    });

    router.get('/burn-chart', (req, res) => {
        knex.from('burn').sum('record').innerJoin('user_profile', 'burn.user_idkey', 'user_profile.id').where('burn.user_idkey', req.user.id).whereNot({
                record: 'NaN'
            }).groupBy('date').orderBy('date', 'aesc')
            .then((data) => {
                res.json(data)
            }).catch((err) => {
                console.log(err)
            })
    })

    router.get('/get-chart', (req, res) => {
        knex.from('get').sum('record').innerJoin('user_profile', 'get.user_idkey', 'user_profile.id').where('get.user_idkey', req.user.id).whereNot({
                record: 'NaN'
            }).groupBy('date').orderBy('date', 'aesc')
            .then((data) => {
                res.json(data)
            }).catch((err) => {
                console.log(err)
            })
    })

    router.get('/users-info', (req, res) => {
        knex('user_profile').where('id', req.user.id)
            .then((data) => {
                res.json(data[0]);
            }).catch((err) => {
                console.log(err)
            })
    })


    router.post('/api/fav-food', (req, res) => {
        knex('fb_food').insert({
            name: req.body.name,
            quantity: parseFloat(req.body.quantity),
            carb: parseFloat(req.body.carb),
            fats: parseFloat(req.body.fats),
            protein: parseFloat(req.body.protein),
            calories: parseFloat(req.body.calories),
            user_id: req.body.user_id,
        }).then((data) => { //.then() is for insert the result
            res.json('done');
        }).catch((err) => {
            res.json(err)
        })
    });

    router.post('/api/fav-workout', (req, res) => {
        knex('fb_workout').insert({
            name: req.body.name,
            weight: req.body.weight,
            rep: req.body.rep,
            set: req.body.set,
            user_id: req.body.user_id,
        }).then((data) => { //.then() is for insert the result 
            res.json('done');
        }).catch((err) => {
            console.log(err);
        })
    });

    router.get(`/api/get-fav-workout/:fbId`, (req, res) => {
        let user_id = req.params.fbId;
        knex.select('name', 'weight', 'rep', 'set').from('fb_workout')
            .where('user_id', user_id)
            .then((data) => {
                res.json(data);
            }).catch((err) => {
                console.log(err)
                res.json(err)
            })

    });

    router.get(`/api/get-fav-food/:fbId`, (req, res) => {
        let user_id = req.params.fbId;
        knex.select('name', 'quantity', 'carb', 'fats', 'protein', 'calories').from('fb_food')
            .where('user_id', user_id)
            .then((data) => {
                res.json(data);
            }).catch((err) => {
                console.log(err)
                res.json(err)

            })

    });

    router.post(`/api/del-fav-workout/:fbId`, (req, res) => {
        let user_id = req.params.fbId;
        let name = req.body.name;
        let weight = req.body.weight;
        let rep = req.body.rep;
        let set = req.body.set;
        knex.select('name', 'weight', 'rep', 'set', 'user_id').from('fb_workout')
            .where('user_id', user_id)
            .where('name', name)
            .where('weight', weight)
            .where('rep', rep)
            .where('set', set)
            .del()
            .then((data) => {
                res.json(data);
            }).catch((err) => {
                console.log(err)
                res.json(err)

            })

    });

    router.post(`/api/del-fav-food/:fbId`, (req, res) => {
        let user_id = req.params.fbId;
        let name = req.body.name;
        let quantity = parseFloat(req.body.quantity);
        let carb = parseFloat(req.body.carb);
        let fats = parseFloat(req.body.fats);
        let protein = parseFloat(req.body.protein);
        let calories = parseFloat(req.body.calories);
        knex.select('name', 'quantity', 'carb', 'fats', 'protein', 'calories','user_id').from('fb_food')
            .where('user_id', user_id)
            .where('name',name)
            .where('quantity', quantity)
            .where('carb',carb)
            .where('fats', fats)
            .where('protein', protein)
            .where('calories',calories)
            .del()
            .then((data) => {
                res.json(data);
            }).catch((err) => {
                console.log(err)
                res.json(err)
            })
    });

    router.post(`/api/clear-food`, (req, res) => {
        let user_id = req.body.user_id;
        knex.select('name', 'quantity', 'carb', 'fats', 'protein', 'calories','user_id').from('fb_food')
            .where('user_id', user_id)
            .del()
            .then((data) => {
                res.json(data);
            }).catch((err) => {
                console.log(err)
                res.json(err)
            })
    });

    router.post(`/api/clear-workout`, (req, res) => {
        let user_id = req.body.user_id;
        knex.select('name', 'quantity', 'carb', 'fats', 'protein', 'calories','user_id').from('fb_workout')
            .where('user_id', user_id)
            .del()
            .then((data) => {
                res.json(data);
            }).catch((err) => {
                console.log(err)
                res.json(err)
            })
    });


    return router;
};