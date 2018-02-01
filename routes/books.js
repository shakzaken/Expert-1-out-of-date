

const express = require('express');
const router = express.Router();
const Book = require('../models/book');
const Category = require('../models/category');
const config = require('../config/database');
const BAD_REQUEST = 400;
const NOT_FOUND = 404;


router.get('/', (req, res,next) => {
    let books = Book.find({})
    .populate('category')
    .then(books =>{
        res.json(books);
    })
    .catch(err =>{
        console.log(err);
        res.status(BAD_REQUEST).json('error in geting the books');
    });
});


router.post('/add',(req,res)=>{
  Category.findOne({ _id: req.body.categoryId })
    .then(category =>{
        let book = new Book({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            quantity: req.body.quantity,
            pictureUrl : req.body.pictureUrl,
            category: category._id
            })
            .save()
            .then(res2 =>{
                return res.json('book added');
                
            })
            .catch(err2 =>{
                console.log(err2);
                return res.status(BAD_REQUEST).json('cannot save book');
            });
            
    })
    .catch(err =>{
        return res.status(NOT_FOUND).json('cannot find category');
    });
});                



router.delete('/:id',(req,res) =>{
    Book.remove({_id: req.params.id})
        .then(()=>{
            res.json('removed book');
        }).catch(()=>{
            res.status(BAD_REQUEST).json('error deleting book');
        });
});

function checkBody(body){
   if(body.category == undefined || body.name == undefined ||       body.description == undefined || body.price == undefined || body.quantity == undefined || body.pictureUrl == undefined )
            return false;
    else{
        return true;
    }
}

module.exports = router;


