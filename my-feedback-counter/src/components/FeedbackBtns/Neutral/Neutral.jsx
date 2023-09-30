import { Component } from "react";
import { Neutral } from "./Neutral.styled";

export class NeutralButton extends Component{

    render(){
        return(
            <Neutral onClick={this.props.onIncrease}>Neutral.</Neutral>
        )
    }

}