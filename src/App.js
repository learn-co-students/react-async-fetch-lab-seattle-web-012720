// create your App component here
import React from 'react'


const ASTRO_URL =  `http://api.open-notify.org/astros.json`

class App extends React.Component {
    constructor(){
        super()
    }

    componentDidMount(){
        this.getAstros()
    }

    getAstros = () => {
        fetch(ASTRO_URL)
        .then((res) => { return res.json()})
       
    }

    render(){
        return (
            <div>Hi</div>
        )
    }

}

export default App