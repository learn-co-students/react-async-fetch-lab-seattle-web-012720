import React from "react"

const Astronaut = (props) => {

    return(
        <div>
            <h1>{props.space.name}</h1>
            <h2>{props.space.craft}</h2>
        </div>
    )
}

export default Astronaut