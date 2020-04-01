// create your App component here
import React from 'react'

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            people: [],
        }
    }
    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
        .then(data => this.setState({people: data.people}))
    }

    createAstronauts() {
        return this.state.people.map (person => {
            return <li key={person.name}>{person.name}</li>
        })
    }

    render() {
        return (
            <ul>{this.createAstronauts()}</ul>
        )
    }
}