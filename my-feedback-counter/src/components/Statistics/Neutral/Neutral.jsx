import { Neutral } from "./Neutral.styled";
import { Component } from "react";

export class NeutralFeedback extends Component{

    render(){
        return(
            <Neutral>Neutral: {this.props.feedbackValue}</Neutral>
        )
    }

}