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
						<a className="navbar-brand " href="#">Tuveda</a>
						<ul className="nav navbar-nav navbar-right">
					    	<li><a href="#">Our Team</a></li>
					    	<li><a href="#">Our Projects</a></li>
					    	<li><a href="#">Contact Us</a></li>
					    </ul>
					</div>
				</nav>

			</div>
		);
	}
});

module.exports = Main;