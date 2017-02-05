// Include React
var React = require("react");

// Helper for making AJAX requests to our API
// var helpers = require("./utils/helper");

// Creating the Results component
var Main = React.createClass({
	// getInitialState: function(){
	// 	return { 
			
	// 	};
	// },
	// Here we render the function
	render: function() {
		return (
			<div className="container">
				{/*navigation bar*/}
				<nav className="navbar navbar-default navbar-fixed-top ">
					<div className="container">
						<a className="navbar-brand " href="#">NYT React</a>
						<ul className="nav navbar-nav navbar-right">
					    	<li><a href="#">Search</a></li>
					    	<li><a href="#">Saved</a></li>
					    	<li><a href="#">About</a></li>
					    </ul>
					</div>
				</nav>

				{/* Jumbotron*/}
				<div className="jumbotron text-center">
					<h1>New York Times Article Scrapper</h1>
					<p>Search and save articles</p>
					<p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
				</div>

			</div>
		);
	}
});

module.exports = Main;