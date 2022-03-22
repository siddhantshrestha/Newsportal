const express = require('express');
const router = express.Router();

const db= require('../config/db')

router.post('/createPost',(req,res)=>{
    const title = req.body.title
    const newsDescription = req.body.newsDescription
    const category = req.body.category
    

    db.query(
        "INSERT INTO posts (title,newsDescription,category) VALUES (?,?,?)",[title,newsDescription,category],(err,result)=>{
            if(err) {console.log(err);}
            console.log(result);
        }
       
    );
    
});

router.get('/all',(req,res)=>{
  
    

    db.query(
        "SELECT * FROM posts"
        ,(err,result)=>{
            if(err) {console.log(err);}
            res.send(result)
        }
       
    );
    
});

router.get('/:category',(req,res)=>{
  
    

    db.query(
        `SELECT * FROM posts WHERE category = '${req.params.category}'`
        ,(err,result)=>{
            if(err) {console.log(err);}
            res.send(result)
        }
       
    );
    
});

router.post('/:postId',(req,res)=>{
    const title = req.body.title
    const newsDescription = req.body.newsDescription
    const category = req.body.category

    let updateNews = {
      title,newsDescription,category
    }
    let update_news = `UPDATE posts SET ? WHERE id= '${req.params.postId}'`;
    

    db.query(update_news,updateNews,(err,result)=>{
        if(err) throw err;
       res.send(result)
      });
});

module.exports =router;