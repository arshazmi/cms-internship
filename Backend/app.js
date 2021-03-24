const express = require('express');
const app= new express();
const Blogdata= require("./src/model/blogdata")
const port = process.env.PORT||3000;
const cors = require('cors');
var bodyparser= require('body-parser');
app.use(cors());
app.use(bodyparser.json());
const blogsrouter= require('./src/routes/blogRoutes')(app);
const addRouter=  require('./src/routes/addRoutes')(app);
const signRouter= require('./src/routes/signRoutes')(app);
app.use(express.urlencoded({extended:true}))
app.use(express.static(require('path').join(__dirname,'/public')));
app.use('/blogs',blogsrouter);
app.use('/',addRouter);
app.use('/',signRouter);
app.get('/',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
    Blogdata.find()
    .then(function(blogs){
        res.send(blogs)
    })
});

app.listen(port,()=>{
    console.log("Server ready at port:"+port);
});
