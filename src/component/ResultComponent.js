import React from 'react'

class ResultComponent extends React.Component{
	render(){
		let { result } = this.props;
		return (
			<div className="result">
			{/* we just want to render the result */}
				<p>{result}</p>
			</div>
		)

	}
}
export default ResultComponent