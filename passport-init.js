// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const bcrypt = require('./bcrypt');

module.exports = (app, knex) => {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.use('local-signup', new LocalStrategy(
        {
            passReqToCallback: true,
        },
        async (req, email, password, done) => {
            try{
                let users = await knex('user_profile').where({email:email});
                if (users.length > 0) {
                    return done(null, false, { message: 'Email already taken' });
                }
                let hash = await bcrypt.hashPassword(password)
                const newUser = {
                    email: email,
                    password: hash,
                    weight: req.body.weight,
                    height: req.body.height,
                    gender: req.body.gender,
                    age: req.body.age
                };
                await knex('user_profile').insert(newUser);
                let keepuser = [email,req.body.weight,req.body.gender,req.body.height,req.body.age];
                console.log(keepuser);
                done(null, keepuser);
            }catch(err){
                done(err);
            }
    
        })
    );
    // passport.use('local-signup', new LocalStrategy({
    //         passReqToCallback: true,
    //     },
    //     (req, email, password, done) => {
    //         console.log("enter local signup")
    //         knex('user_profile').where({ email: email }).first('email').then(function(user){
    //             if (user) {
    //                 console.log("enter first condition")
                    
    //                 return done(null, false, { message: 'Email already taken' });
    //             } else {
    //                 console.log("enter second condition")
    //                 bcrypt.hashPassword(password)
    //                     .then(hash => {
    //                         const newUser = {
    //                             email: email,
    //                             password: hash,
    //                             weight: req.weight,
    //                             height: req.height,
    //                             gender: req.gender,
    //                             age: req.age
    //                         };
    //                         console.log(email, password, req.weight, req.height, req.gender, req.age)
    //                         knex('user_profile').insert({newUser});
    //                         done(null, newUser);
    //                     })
    //                     .catch(err => console.log(err));
    //             }
    //         });
    //     }
    // ));

    

//     passport.use('local-login', new LocalStrategy(
//         async (email, password, done) => {
//             try{
//                 let users = await knex('user_profile').where({email:email})
//                 if(users.length == 0){
//                     return done(null, false, { message: 'Incorrect credentials' });
//                 }
//                 let user = users[0];
//                 let result = await bcrypt.checkPassword(password, user.password);    
//                 if(result) {
//                     return done(null, user);
//                 } else {
//                     return done(null, false, { message: 'Incorrect credentials'});
//                 }
//             }catch(err){
//                 done(err);
//             }
//         }
//     ));

//     passport.serializeUser((user, done) => {
//         done(null, user.id);
//     });

//     passport.deserializeUser((id, done) => {
//         let user = users.find((user) => user.id == id);
//         if (user == null) {
//             done(new Error('Wrong user id.'));
//         }

//         done(null, user);
//     });
// };




const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const knex = require('knex')({
    client: 'postgresql',
    connection: {
        database: process.env.DB_NAME,
        user:     process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD
    }
});

module.exports = (app) => {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.use('local-login', new LocalStrategy(
        async (email, password, done) => {
            try{
                let users = await knex('user_profil').where({email:email});
                if (users.length == 0) {
                    return done(null, false, { message: 'Incorrect credentials.' });
                }
                let user = users[0];
                if (user.password === password) {
                    return done(null, user);
                }else{
                    return done(null, false, { message: 'Incorrect credentials.' });
                }
            }catch(err){
                return done(err);
            }
        }
    ));

    passport.serializeUser((keepuser, done) => {
        done(null, keepuser);
    });

    passport.deserializeUser(async (id, done) => {
        let users = await knex('user_profile').where({id:id});
        if (users.length == 0) {
            return done(new Error(`Wrong user id ${id}`));
        }
        let user = users[0];
        return done(null, user);
    });
};