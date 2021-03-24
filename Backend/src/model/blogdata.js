const mongoose =require("mongoose");
//mongoose.connect('mongodb+srv://azmi:azmi@arsheena.vwkoy.mongodb.net/library?retryWrites=true&w=majority');
mongoose.connect('mongodb+srv://userone:userone@libraryfiles.ryw28.mongodb.net/atheneaum?retryWrites=true&w=majority');
const Schema= mongoose.Schema;


const BlogSchema = new Schema({
    title:String,
    author:String,
    genre:String,
    img:String,
    details:String,
    link:String
});

var Blogdata = mongoose.model('blogdata', BlogSchema);

module.exports = Blogdata;