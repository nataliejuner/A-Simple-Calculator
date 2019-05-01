import React from 'react';
import './App.css';

import ResultComponent from './component/ResultComponent'
import KeyPadComponent from './component/KeyPadComponent'

class App extends React.Component{
	constructor(){
		super();
			this.state = {
				result: ""
			}
	}
// onlicks
	onClick = button => {

		if (button === "=") {
			this.calculate()
		}

		else if (button === "C") {
			this.reset()
		}
		else if (button === "CE") {
			this.backspace()
		}

		else {
			this.setState({
				result: this.state.result + button
			})
		}
	};
// logic
	calculate = () => {
		try {
			this.setState({
				// eslint-disable-next-line
				result: (eval(this.state.result) || "") + ""
			})
		} catch (e) {
			this.setState({
				result: "error"
			})

		}
	};

	reset = () => {
		this.setState({
			result: ""
		})
	};

	backspace = () => {
		this.setState({
			result: this.state.result.slice(0, -1)
		})
	};

	render(){
		return(
			<div>
				<div className="calculator-body">
					<h1>A simple Calculator</h1>
					<ResultComponent result={this.state.result} />
					<KeyPadComponent onClick={this.onClick} />
				</div>
			</div>
		)
	}
}

export default App;
