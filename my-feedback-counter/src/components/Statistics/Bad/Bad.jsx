import { Bad } from "./Bad.styled";
import { Component } from "react";

export class BadFeedback extends Component{

    render(){
        return(
            <Bad>Bad: {this.props.feedbackValue}</Bad>
        )
    }

}