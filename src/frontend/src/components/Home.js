import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Dashboard from './Dashboard.js';

const HomepageContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 500px;
	margin-right: auto;
	margin-left: auto;
`;

const HeroSection = styled.section`
	text-align: center;
	background: ${props => props.theme.colors.blue};
	color: ${props => props.theme.colors.white};
`;

const Tagline = styled.p`
`;

const HeroTitle = styled.h1`
	font-size: 24px;
`

const CallToAction = styled.button`
`;

const InfoSection = styled.section`
	text-align: center;
`;

const InfoTitle = styled.h1`
	font-size: 24px;
`;


class Home extends Component {
  render() {
    return (
      <HomepageContainer>
				{/*}<HeroSection>
					<HeroTitle>EmpirEqual</HeroTitle>
					<Tagline>Company Culture Analytics + Preventative Solutions</Tagline>
					<Link to="/login">
						<CallToAction>Try it out!</CallToAction>
					</Link>
				</HeroSection>
				<InfoSection>
					<InfoTitle>App info</InfoTitle>
				</InfoSection>*/}
				<Dashboard />
      </HomepageContainer>
    );
  }
}

export default Home;
