import React, {Component} from "react"
import "./button.css"

class Button extends Component {
    render() {
        return(
            <section className="button">
                <h1 className="button-string">{this.props.string}</h1>
            </section>
        ) 
    }  
}

export default Button