import { Good } from "./Good.styled";
import { Component } from "react";

export class GoodFeedback extends Component{

    render(){
        return(
            <Good>Good: {this.props.feedbackValue}</Good>
        )
    }

}