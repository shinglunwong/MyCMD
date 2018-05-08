const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const users = require('./users');

module.exports = (app) => {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.use('local-signup', new LocalStrategy(
        (email, password, weight, height, gender, age, done) => {
            let user = users.find((user) => user.email == email); // should i rewrite this to be " let user; "
            if (user) {
                return done(null, false, { message: 'Email already taken' });
            } else {
                bcrypt.hashPassword(password)
                    .then(hash => {
                        const newUser = {
                            email: email,
                            password: hash,
                            weight: weight,
                            height: height,
                            gender: gender,
                            age: age
                        };
                        // users.push(newUser);   push data to users.js && we have not users.js files
                        knex('user_profile').insert({newUser}); //
                        done(null, newUser);
                    })
                    .catch(err => console.log(err));
            }
        }
    ));

    

    passport.use('local-login', new LocalStrategy(
        (email, password, done) => {
            let user = users.find(knex('user_profile').where({ email: email, password: password }).select('*')).then(function(array){
                let checkpw = array;

                bcrypt.checkPassword(password, array)
                .then(result => {
                    if (result) {
                        return done(null, user);
                    } else {
                        return done(null, false, { message: 'Incorrect credentials' });
                    }
                })
                .catch(err => console.log(err));
            });
            if (user == null) {
                return done(null, false, { message: 'Incorrect credentials.' });
            }
        })
    );

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        let user = users.find((user) => user.id == id);
        if (user == null) {
            done(new Error('Wrong user id.'));
        }

        done(null, user);
    });
};
