const React = require ("react") ; 




class Show extends React.Component {

   render () {

       const vegetables = this.props.vegetables ;

    return (
        <div> 

            <h1> this is the show page for {vegetables.name}  </h1>
            <nav> 
              <a href = "/vegetables">  go back to the main page </a>
            </nav>  


              
              <p> this is {vegetables.name} with the color of {vegetables.color} and is 
              {vegetables.readyToEat? " ready to eat " : " not ready to eat "}  </p>
              
              
            
        </div>


    )

   }

}


module.exports = Show ; 