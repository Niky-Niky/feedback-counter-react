import { Component } from "react";
import { Bad } from "./Bad.styled";

export class BadButton extends Component{

    render(){
        return(
            <Bad onClick={this.props.onIncrease}>Bad.</Bad>
        )
    }

}