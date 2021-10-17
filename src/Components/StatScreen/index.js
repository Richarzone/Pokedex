import React, {Component} from "react"
import "./statscreen.css"

class StatScreen extends Component {
    render(){
        return(
            <section className="stat-screen">
                <div style={{ color: 'white' }}>Nombre: {this.props.pokename}</div>
                <div style={{ color: 'white' }}>Tipo: {this.props.poketype}</div>
                <div style={{ color: 'white' }}>Altura: {this.props.pokeheight}</div>
                <div style={{ color: 'white' }}>Peso: {this.props.pokeweight}</div>
            </section>
        );
    }
}

export default StatScreen;