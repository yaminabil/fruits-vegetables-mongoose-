const React = require ("react");

class Show extends React.Component {
   render () {
       const fruit = this.props.fruit ; 
       return  (
       <div>
           <h1> This is the show page for { fruit.name.toUpperCase() } </h1>
           <a href = "/fruits">go back to main page </a>
           <p> { fruit.name } is the color of  { fruit.color } </p>
           <p>the {fruit.name} is {fruit.readyToEat? 'its  ready to eat ' : 'it is not ready to eat .... cant touch this'}</p>
       </div>  )
   }
}

module.exports = Show ;