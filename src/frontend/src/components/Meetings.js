import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HappyLogo from '../assests/icons/EMP_emoticon.png'
import SadLogo from '../assests/icons/EMP_EMOTICON2.png'
import ExitLogo from '../assests/icons/EMP_Asset_11.png'

class Meetings extends Component {
  render() {
    return (
      <FeedbackHolder>
				<FeedbackLink to="/meetingQs">
					<FeedbackImage src={HappyLogo}/>
					<FeedbackTitle>
            SUBMIT POSITIVE FEEDBACK
					</FeedbackTitle>
				</FeedbackLink>
				<FeedbackLink to="/meetingQs">
					<FeedbackImage src={SadLogo}/>
					<FeedbackTitle>
            SUBMIT NEGATIVE FEEDBACK
					</FeedbackTitle>
				</FeedbackLink>
        <ExitButton>
          <ExitLink to="/home">
            <ExitImage src={ExitLogo}/>
          </ExitLink>
        </ExitButton>
      </FeedbackHolder>
    );
  }
}

export default Meetings;

const FeedbackHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`

const FeedbackLink = styled(Link)`
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

const FeedbackImage = styled.img`
  width: 20%;
  max-width: 50px;
  margin-right: 20px;
`

const FeedbackTitle = styled.div`
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
