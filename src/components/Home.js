import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomepageContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const HeroSection = styled.section`
	text-align: center;
`;

const HeroTitle = styled.h1`
	font-size: 24px;
`

const CallToAction = styled.button`
`;


class Home extends Component {
  render() {
    return (
      <HomepageContainer>
				<HeroSection>
					<HeroTitle>EmpirEqual</HeroTitle>
					<Link to="/enter">
						<CallToAction>Try it out!</CallToAction>
					</Link>
				</HeroSection>
      </HomepageContainer>
    );
  }
}

export default Home;
