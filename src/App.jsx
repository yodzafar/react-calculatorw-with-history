import React, { Component } from 'react';
import Calculator from './components/Calculator/Calculator';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="container">
				<Calculator />
			</div>
		);
	}
}

export default App;
