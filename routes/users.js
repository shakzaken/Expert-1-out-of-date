const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

router.post('/register', (req, res , next) => {
    let newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    });
     
    User.addUser(newUser,(err, user)=>{
        if(err){
            res.json({success: false, msg:'Failed to register user'});
        } else{
            res.json({success: true, msg:'user registered'});
        }
    });
});

router.post('/authenticate', (req, res , next) => {
    // const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    User.getUserByEmail(email, (err,user) =>{
        if(err) throw err;
        if(!user) {
            return  res.json({success: false, msg:'User not found'});
        }

        User.comparePassword(password,user.password, (err, isMatch) =>{
            if(err) throw err;
            if(isMatch){
                console.log(user);
                const token = jwt.sign({data:user},config.secret , {
                   expiresIn: 604800
                });
                res.json({
                    success: true,
                    token: 'Bearer '+token,
                    user: {
                        id: user._id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email
                    }
                });
            }else{
                return  res.json({success: false,msg:'Wrong password'});
            }
        });
    });
});

router.get('/profile', passport.authenticate('jwt',{session:false}),(req, res) => {
    res.json({user: req.user});
});

router.get('/',(req,res) =>{
         User.find({})
        .then(users =>{
             res.json(users);
        });
});


router.delete('/:id',(req,res) =>{
    User.remove({_id: req.params.id})
        .then(()=>{
            res.json({success: true, msg:'removed user'});
        }).catch(()=>{
            res.json({success: false,msg:'error deleting user'});
        });
});



module.exports = router;