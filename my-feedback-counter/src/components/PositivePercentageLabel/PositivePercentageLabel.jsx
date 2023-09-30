import { Component } from "react";
import { PositivePercentageLabel } from "./PositivePercentageLabel.styled";

export class PositivePercentageDescription extends Component{

    render(){
        return(
            <PositivePercentageLabel>
                Positive percentage: {this.props.positivePercentage}
            </PositivePercentageLabel>
        )
    }

}