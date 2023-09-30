import { Component } from "react";
import { Good } from '../Good/Good.styled'

export class GoodButton extends Component{

    render(){
        return(
            <Good onClick={this.props.onIncrease}>Good.</Good>
        )
    }

}