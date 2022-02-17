// load express 
const express = require ("express");
const { redirect } = require("express/lib/response");
const app = express ();
const fruits = require ("./models/fruits.js");
const vegetables = require ("./models/vegetables");

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//Middleware 
app.use (express.urlencoded({extended : true}));


app.use ( (req,res,next)=> {
    console.log (req.body) ; 
    next () ;

})

// INDEX week10day3 
app.get ("/fruits" , (req,res) => {
    res.render ("fruits/Index" , {fruits}) ;  // {fruits}  send data 
});

//NEW

app.get ("/fruits/new" , (req,res) => {
    res.render ("fruits/New");
})


//DELETE


// UPDATE


// CREATE
app.post ("/fruits" , (req,res) => {
    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true ;
    } else {
        req.body.readyToEat =false ; 
    }

    fruits.push (req.body) ; 
    res.redirect ("/fruits") ;
})


// EDIT




// SHOW week10 day3
app.get ("/fruits/:indexOfFruitsArray" , (req,res) => {
   res.render ("fruits/Show" , {
       fruit : fruits[req.params.indexOfFruitsArray] })
})

  





// vegetables  

console.log (vegetables);




//induces 
// INDEX 

app.get ("/vegetables" ,(req,res)  => {
    res.render ("vegetables/Index" , {vegetables} );
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

    vegetables.push(req.body);
    res.redirect ("/vegetables");
})



//EDIT 



//SHOW 
app.get ("/vegetables/:indexOfVegetable" , (req,res) => {
    res.render ("vegetables/Show" , {
        vegetables : vegetables [req.params.indexOfVegetable] 
    })

})





app.listen(3000 , () => {
    console.log ("listening ") ;
})