const React = require ("react");

class Index extends React.Component {
    render () {
        const fruits = this.props.fruits ;
        return (
            <div>
                <h1> this is the index page of my beautiful collection of fruits </h1>
                <nav>
                    <a href="/fruits/new">Go to the new page</a>
                </nav>
                <ul>
                    {
                        fruits.map ((fruit , i) => {
                            return ( 
                                <li><a href = {`/fruits/${i}`}> {fruit.name} </a> is the color of {fruit.color}</li>
                            )
                        })
                    }

                </ul>
            </div>
        )
    }
}

module.exports = Index; 