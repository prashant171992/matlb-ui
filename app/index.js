var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

class App extends React.Component {
	render(){
		return(
			<div>
			<h5>Hello Karan</h5>
			</div>)
	}
}


ReactDOM.render(
	<App />,
	document.getElementById('app'));