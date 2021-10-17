import React, {Component} from "react"
import "./pokescreen.css"

class PokeScreen extends Component {
    render() {
        return(
            <section className="poke-screen">
                <img style={{ width: "80%"}} src={this.props.pokesprite}></img>
            </section>
        )
    }
}

export default PokeScreen