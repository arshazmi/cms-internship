const express = require('express');
const blogsrouter=express.Router();
const Blogdata= require("../model/blogdata")

const multer= require ('multer');
const path=require('path');
const storage=multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, './public/images');
      },
      filename: (req, file, cb) => {
        // cb(null, 'image-' + Date.now() + '.' + filetype);
        cb(null,file.fieldname+'-'+Date.now() + path.extname(file.originalname));
      }
});
const upload=multer({
storage:storage
});
function router(){
    blogsrouter.get('/',function(req,res){
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
        Blogdata.find()
        .then(function(blogs){
            res.send(blogs)
        })
        
    });

    blogsrouter.put('/editblog/:id',upload.single('img'),function(req,res){
        const id=req.params.id;
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
        img='http://localhost:3000/images/' + req.file.filename;
        var item = {
            title:req.body.title,
            author:req.body.author,
            genre:req.body.genre,
            details:req.body.details,
            img:img,
            link:req.body.link
        }
        Blogdata.findByIdAndUpdate({_id:id}, item, (err,doc)=>{
                if(!err){res.send(doc)}
             })
    });
    blogsrouter.delete('/deleteblog/:id',function(req,res){
        const id=req.params.id;
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
        Blogdata.findByIdAndRemove({_id:id},(err,doc)=>{
        if(!err){res.send(doc);}
    });
    });
    blogsrouter.get('/:id',function(req,res){
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
        const id=req.params.id
        Blogdata.findOne({_id : id})
        .then(function(blog){
            res.send(blog)
            });
    });
    return blogsrouter;
}




module.exports = router;