// create your App component here
import React, {Component} from "react";
import Astronaut from './Astronaut'

class App extends Component {

    state = {
        astronauts: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({astronauts: data.people})
        })
    }

    makeAstros = () => {
        return this.state.astronauts.map((spacePerson, index) => {
            return <Astronaut key={index} space={spacePerson}/>
        })
    }

    render() {
        return (
            <div>
                {this.makeAstros()}
            </div>
        )
    }
}

export default App
