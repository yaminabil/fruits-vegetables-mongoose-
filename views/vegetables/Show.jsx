const React = require ("react") ; 




class Show extends React.Component {

   render () {

       const vegetable = this.props.vegetable ;

    return (
        <div> 

            <h1> this is the show page for {vegetable.name}  </h1>
            <nav> 
              <a href = "/vegetables">  go back to the main page </a>
            </nav>  


              
              <p> this is {vegetable.name} with the color of {vegetable.color} and is 
              {vegetable.readyToEat? " ready to eat " : " not ready to eat "}  </p>
              
              
            
        </div>


    )

   }

}


module.exports = Show ; 