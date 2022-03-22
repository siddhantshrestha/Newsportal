const express = require('express');
const router = express.Router();

const db= require('../config/db')

router.post('/login',(req,res)=>{
    const username = req.body.username
    const password = req.body.password

    console.log(req.body)

    db.query(
        'SELECT * FROM user WHERE username = ? ',
        username,
        (err,result)=>{
            if(err) console.log(err);
            
            if(result.length > 0){
                console.log(result);
                if (password == result[0].password){
                res.json({loggedIn: true, username:username})
                }else{
            res.json({loggedIn: false, message:'wrong username/password'})

                }
            }else{
            res.json({loggedIn: false, message:'user doesnot exist'})

            }
        }
    );
    
});

module.exports =router;