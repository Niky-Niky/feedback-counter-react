import './App.css';
import { Component } from 'react'
import { BigLabel } from '../src/components/Label/Label';
import { GoodButton } from './components/FeedbackBtns/Good/Good';
import { NeutralButton } from './components/FeedbackBtns/Neutral/Neutral';
import { BadButton } from './components/FeedbackBtns/Bad/Bad';
import { StatsLabel } from './components/StatisticsLabel/StatisticsLabel';
import { GoodFeedback } from './components/Statistics/Good/Good';
import { NeutralFeedback } from './components/Statistics/Neutral/Neutral';
import { BadFeedback } from './components/Statistics/Bad/Bad';
import { FeedbackSumm } from './components/FeedbackSummary/FeedbackSummary';
import { PositivePercentageDescription } from './components/PositivePercentageLabel/PositivePercentageLabel';
import { NoFeedback } from './components/NoFeedbackGiven/NoFeedbackGiven';


export class App extends Component{
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

goodFeedbackButtonClick = () => {
  this.setState(prevState => ({
    good: prevState.good +1
  }
    ) 
      )
};

neutralFeedbackButtonClick = () => {
  this.setState(prevState => ({
    neutral: prevState.neutral +1
  }
    ) 
      )
};

badFeedbackButtonClick = () => {
  this.setState(prevState => ({
    bad: prevState.bad +1
  }
    ) 
      )
};

countTotalFeedbackQuantity = () => {
  const {good, neutral, bad} = this.state;
  const totalFeedback = good + neutral + bad;
  return totalFeedback;
};

countPositiveFeedbackPercentage = () => {
  const {good, neutral, bad} = this.state;
  const positivePercentage = (good / (good + neutral + bad)) * 100
  return positivePercentage
}

  render(){
  const {good, neutral, bad} = this.state;
    return(
      <div>
        {/* <button>Click here</button> */}
        <BigLabel/>
        
        <GoodButton onIncrease = {this.goodFeedbackButtonClick}/>
        <NeutralButton onIncrease = {this.neutralFeedbackButtonClick}/>
        <BadButton onIncrease = {this.badFeedbackButtonClick}/>
        
        <StatsLabel/>

        {good + neutral + bad === 0 ? (<NoFeedback/>) : (
          (
            <>
            <GoodFeedback feedbackValue = {this.state.good}/>
          <NeutralFeedback feedbackValue = {this.state.neutral}/>
          <BadFeedback feedbackValue = {this.state.bad}/>
  
          <FeedbackSumm totalFeedback = {this.countTotalFeedbackQuantity()}/>
  
          {/* {!isNaN(this.countPositiveFeedbackPercentage()) && ( 
          <PositivePercentageDescription positivePercentage={this.countPositiveFeedbackPercentage().toFixed(2)}/>)}
           */}
           {isNaN(this.countPositiveFeedbackPercentage()) ? (
           <PositivePercentageDescription positivePercentage={0}/>
          ) : (
            <PositivePercentageDescription positivePercentage={this.countPositiveFeedbackPercentage().toFixed(2)} />
          )}
            </>
          )
        )}
        

      </div>
    )
  }
}

