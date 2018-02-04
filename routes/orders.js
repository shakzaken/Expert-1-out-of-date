const express = require('express');
const router = express.Router();
const Category = require('../models/category');
const Order = require('../models/order');
const config = require('../config/database');
const BAD_REQUEST = 400;
const NOT_FOUND = 404;


router.post('/', (req, res) => {

    let itemsFromClient = req.body.items;

    if(!itemsFromClient instanceof Array){
         return res.status(BAD_REQUEST).json("items is not an array");
    }

    let itemsForDb = [];
    itemsFromClient.forEach((value) =>{
        itemsForDb.push({
            book : value.bookId,
            quantity : value.quantity
        });
    });
    
    let order = new Order({
        user: req.body.userId,
        items: itemsForDb
    })
    .save()
    .then(order =>{
        res.json('order added successfuly')
    })
    .catch(err =>{
        console.log(err);
        res.status(BAD_REQUEST).json("error saving order");
    });  
});


router.get('/', (req, res) => {

     Order.find({})
    .populate('user')
    .then(orders =>{
         res.json(orders);
    })
    .catch(err =>{
        console.log(err);
        res.status(BAD_REQUEST).json('error getting orders');
    });
});

module.exports = router;