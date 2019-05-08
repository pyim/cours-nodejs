const mongoose = require('mongoose')
const Article  = require('./database/models/Article')

mongoose.connect('mongodb://localhost:27017/blog-test');



Article.findByIdAndUpdate("5cb49399e681ac528fb043f6",
    { title: 'Avenger EndGame'}, (error, post) => {
    console.log(error, post);
 
})


/*
Article.findById("5cb49399e681ac528fb043f6", (error, articles) => {
        console.log(error, articles);

} )
*/


/*
Article.find({

    intro: 'test d\'introduction'

}, (error, articles ) => {
    console.log(error, articles); 
})
*/


/*
Article.create({
    title: "SpiderMan",
    intro: "test d'introduction",
    content: "Critique sur le film Spiderman",
}, (error, post) => {
    console.log(error, post);
    
}

)
*/

