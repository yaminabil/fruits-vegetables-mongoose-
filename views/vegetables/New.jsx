const React =require ("react")  ; 


class New extends React.Component { 
    render () { 
        return (
            <div>
            <h1> create new vegetable go ahead </h1>
            <nav> 
                <a href = "/vegetables"> back to the main page </a><br/>

            </nav>
            <form action="/vegetables" method="POST">
                name : <input name = "name" type="text" /><br/>
                color : <input name= "color" type="text" /><br/>
               ready to Eat :  <input  name = "readyToEat" type="checkbox"  /><br/>
                 <input type="submit"  value= " creat " />
            </form>
            
            </div>
        )
    }
}

module.exports = New ;