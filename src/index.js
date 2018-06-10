import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
=======
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
>>>>>>> 992b0365c265a29bd41eed0b748f9379c4695ea0
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>,
	document.getElementById('root'));

registerServiceWorker();
