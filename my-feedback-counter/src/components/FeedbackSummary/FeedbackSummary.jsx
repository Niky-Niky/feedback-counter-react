import { Component } from "react";
import { FeedbackSummary } from "./FeedbackSummary.styled";

export class FeedbackSumm extends Component{

    render(){
        return(
            <FeedbackSummary>Total feedback: {this.props.totalFeedback}</FeedbackSummary>
        )
    }

}
