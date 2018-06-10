import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HappyLogo from '../assests/icons/EMP_emoticon.png'
import SadLogo from '../assests/icons/EMP_EMOTICON2.png'
import ExitLogo from '../assests/icons/EMP_Asset_11.png'
import LeftArrow from '../assests/icons/EMP_Asset_10.png'
import RightArrow from '../assests/icons/EMP_Asset_12.png'

class ThankYou extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: []
    }
    this.selectQ = this.selectQ.bind(this);
  }
  selectQ() {
    console.log('hit')
  }
  render() {
    return (
      <QuestionsHolder>
          <QuestionItem>
            Thank you for your feedback!
          </QuestionItem>
          <ExitButton>
            <ExitLink to="/meetingQs">
              <ExitImage src={LeftArrow}/>
            </ExitLink>
            <ExitLink to="/home">
              <ExitImage src={ExitLogo}/>
            </ExitLink>
            <ExitLink to="/home">
              <ExitImage src={RightArrow}/>
            </ExitLink>
          </ExitButton>
      </QuestionsHolder>
    );
  }
}

export default ThankYou;

const QuestionsHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`

const QuestionItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00ac65;
  width: 100%;
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
  color: white;
  height: 50vw;
  max-height: 200px;
  text-align: center;
`

const QuestionTitle = styled.div`
  font-size: 16px;
  width: 60%;
  text-align: left;
`

const ExitImage = styled.img`
    width: 15%;
`

const ExitButton = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10% 6%;
`

const ExitLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  color: black;
`
