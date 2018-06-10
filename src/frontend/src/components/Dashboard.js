import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import InteractionLogo from '../assests/icons/EMP_Two_People.png'
import MeetingsLogo from '../assests/icons/EMP_Group.png'
import SaySomethingLogo from '../assests/icons/EMP_Chat_Bubble.png'
import SupportLogo from '../assests/icons/EMP_books.png'

class DashBoard extends Component {
  render() {
    return (
      <DashBoardHolder>
				<DashItem>
					<DashLink to="/meetings">
						<DashImage src={MeetingsLogo}/>
						<DashItemTitle>
              MEETINGS
						</DashItemTitle>
					</DashLink>
				</DashItem>
        <DashItem>
					<DashLink to="/interactions">
						<DashImage src={InteractionLogo}/>
						<DashItemTitle>
              INTERACTIONS
						</DashItemTitle>
					</DashLink>
				</DashItem>
        <DashItem>
					<DashLink to="/say-something">
						<DashImage src={SaySomethingLogo}/>
						<DashItemTitle>
              SAY SOMETHING
						</DashItemTitle>
					</DashLink>
				</DashItem>
        <DashItem>
					<DashLink to="/support">
						<DashImage src={SupportLogo}/>
						<DashItemTitle>
              SUPPORT & RESOURCES
						</DashItemTitle>
					</DashLink>
				</DashItem>
        <KudosButton>
          <KudosImage />
          <KudosTitle>
            Kudos
          </KudosTitle>
        </KudosButton>
      </DashBoardHolder>
    );
  }
}

export default DashBoard;

const DashBoardHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const DashItem = styled.div`
  width: 50%;
  background-color: #00ac65;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vw;
  max-height: 200px;
  text-align: center;
`

const DashLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  font-family: 'Montserrat', sans-serif;
  flex-direction: column;
  text-decoration: none;
  color: white;
`

const DashImage = styled.img`
  width: 80%;
`

const DashItemTitle = styled.div`
  font-size: 20px;
`

const KudosImage = styled.div`
    width: 20%;
    max-width: 100px;
`

const KudosTitle = styled.div`
  color: white;
`

const KudosButton = styled.div`
  background-color: white;
`
