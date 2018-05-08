const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const users = require('./users');

module.exports = (app) => {
    app.use(passport.initialize());
    app.use(passport.session());


    passport.use('local-signup', new LocalStrategy(
        (email, password, weight, height, gender, age, done) => {
            knex('user_profile').where({ email: email }).select('email').then(function(array){
                if (array) {
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
                            knex('user_profile').insert({newUser});
                            done(null, newUser);
                        })
                        .catch(err => console.log(err));
                }
            });
        }
    ));

    

    passport.use('local-login', new LocalStrategy(
        async (email, password, done) => {
            try{
                let users = await knex('users').where({email:email})
                if(users.length == 0){
                    return done(null, false, { message: 'Incorrect credentials' });
                }
                let user = users[0];
                let result = await bcrypt.checkPassword(password, user.password);    
                if(result) {
                    return done(null, user);
                } else {
                    return done(null, false, { message: 'Incorrect credentials'});
                }
            }catch(err){
                done(err);
            }
        }
    ));

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
