// load express 
require("dotenv").config()
console.log (process.env.MONGO_URI)
const express = require ("express");
const mongoose = require ("mongoose");



const app = express ();
const Fruit = require ("./models/fruits.js");  //importing fruits from models/fruits.js
const Vegetable = require ("./models/vegetables.js");

// MVC SETUP 
//views
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
//models 
mongoose.connect (process.env.MONGO_URI , { 
    useNewUrlParser : true ,
    useUnifiedTopology : true
})


//Middleware 
app.use (express.urlencoded({extended : true}));
app.use ( (req,res,next)=> {
    console.log (req.body) ; 
    next () ;
})

// Fruit ====================>

// INDEX week10day3    //changed on 11dy2 
app.get ("/fruits" , (req,res) => {
    Fruit.find( {} ,(err,foundFruits) => {
            if (err)   {
                res.status(400).send(err)
            } else {
                res.render ('fruits/Index' , {
                    fruits:foundFruits // {fruits}  send data 
                })
            }
    });  
});

//NEW

app.get ("/fruits/new" , (req,res) => {
    res.render ("fruits/New");
})


//DELETE


// UPDATE


// CREATE // updated on w11 d02 

app.post ("/fruits" , (req,res) => {
    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true ;
    } else {
        req.body.readyToEat =false ; 
    }

    Fruit.create(req.body , (err,createdFruit) => {
        if(err) {
            res.status (403).send(err)
        }else {
            console.log (createdFruit);
            res.redirect("/fruits");
        }
    })
  
})


// EDIT




// SHOW week10 day3
app.get ("/fruits/:id" , (req,res) => {
  Fruit.findById (req.params.id , (err,foundFruit) => {
      if (err) {
          res.status(400).send(err)
      } else {
          res.render ('fruits/Show' , {
              fruit  : foundFruit 
          })
      }
  })
})

  
















// vegetables  ==========================> 

//induces 
// INDEX 

app.get ("/vegetables" ,(req,res)  => {

    Vegetable.find ({} , (err , foundVegetables) => {
        if (err) { 
            res.status(400).send (err) ;
        } else { 
          res.render ("vegetables/Index" , {
              vegetables : foundVegetables 
          })
        }
    })
    
})



// NEW 

app.get  ("/vegetables/new" , (req,res) => {
    res.render ("vegetables/New");
})


//DELETE 



//UPDATE 


//CREATE 

app.post ("/vegetables" , (req,res) => {
    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true;
    }else 
    {
        req.body.readyToEat =false ;
    }

   Vegetable.create (req.body , (err,createdVegetable) => {
       if (err) { 
           res.status (403).send (err) ;

       }else { 
        console.log (createdVegetable);
        res.redirect ("/vegetables");
       }
   })
    
})



//EDIT 



//SHOW 
app.get ("/vegetables/:id" , (req,res) => {

 Vegetable.findById (req.params.id , (err,foundVegetable) => {
     if (err) { 
         res.status(400).send(err) ;
     }else { 
         res.render("vegetables/Show",{
            vegetable : foundVegetable
         })
     }
 })

})





app.listen(3000 , () => {
    console.log ("listening ") ;
})