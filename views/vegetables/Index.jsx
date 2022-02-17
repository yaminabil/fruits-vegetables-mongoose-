const React = require ("react") ; 


class Index extends React.Component {
    render () {
        const vegetables = this.props.vegetables ; 
        return (
        <div>
            <h1>this is  my beautiful collection of vegetables  </h1>
            <nav>
                <a href = "/vegetables/new"> create new vegetable </a>
            </nav>
            <ul>
                {
                    vegetables.map ((vegetable)   => {
                        return (
                            <li key ={`${vegetable._id}`} > <a href = {`/vegetables/${vegetable._id}`} > {vegetable.name} </a> is the color  of {vegetable.color}</li>
                        )

                    })
                }
            </ul>
        </div>  )
    }
}

module.exports = Index ;