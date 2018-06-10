import { css } from 'styled-components';

const colors = {
	blue: '#00baf2',
	yellow: '#fcd947',
	green: '#00a668',
	white: '#ffffff'
};

const logoBorder = 4.32;

export default {
	colors: colors,
	breakpoints: {
		mobileS: 320,
		mobileM: 375,
		mobileL: 480,
		tablet: 768,
		laptop: 1024,
		laptoM: 1200,
		laptopL: 1440,
		desktop: 2560
	},
	spacing: {
		tiny: 8,
		small: 16,
		moderate: 24,
		medium: 32,
		large: 40,
		xlarge: 80
	}
}