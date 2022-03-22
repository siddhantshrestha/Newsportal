const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors());

app.use(express.json())

const db= require('./config/db')

//Route
const userRoute = require("./route/User")
app.use("/user", userRoute)

const postRoute = require("./route/Posts")
app.use("/news", postRoute)
const newsRoute = require("./route/Posts")
app.use("/news", newsRoute)
const updateNews = require("./route/Posts")
app.use("/updateNews", updateNews)
const category = require("./route/Posts")
app.use("/category", category)

//connecting db
db.connect(err => {
  if (err) throw err

  // console.log("db connected")
})

//Creating tale
app.get("/createTable", (req, res) => {
  // const user_tbl =
  //   "CREATE TABLE user(id int PRIMARY KEY, username varchar(255),password varchar(255))"

  const post_tbl =
    "CREATE TABLE posts(id int AUTO_INCREMENT PRIMARY KEY, title varchar(5000),newsDescription varchar(10000),category varchar(255))"

  db.query(post_tbl, (err, result) => {
    if (err) throw err
    console.log(result)
  })
})
//creating admin
app.get("/createUser", (req, res) => {
  const user_data =
    "INSERT INTO user(username,password) VALUES ('admin','admin123');"

  db.query(user_data, (err, result) => {
    if (err) throw err
    console.log(result)
  })
})


//delete news
app.get('/deleteNews/:postId',(req,res)=>{
  let dlt_news = `DELETE FROM posts WHERE id ='${req.params.postId}'`;
  db.query(dlt_news,(err,result)=>{
    if(err) throw err;
    res.send(result)
  });
})




app.listen(5000, (req, res) => {
  console.log("Server is running")
})
