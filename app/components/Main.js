// Include React
var React = require("react");

var Contact = require("./children/Contact");

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
			<div>
				<nav className="navbar navbar-default">
					<div className="container-fluid">
					    {/*Brand and toggle get grouped for better mobile display */}
					    <div className="navbar-header">
					    	<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
						        <span className="sr-only">Toggle navigation</span>
						        <span className="icon-bar"></span>
						        <span className="icon-bar"></span>
						        <span className="icon-bar"></span>
						    </button>
					      	<a className="navbar-brand" href="#">TuVeda</a>
					    </div>

					    {/*Collect the nav links, forms, and other content for toggling */}
					    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					      <ul className="nav navbar-nav navbar-right">
					        <li><a href="#">Our Team</a></li>
					        <li><a href="#">Our Projects</a></li>
					        <li><a href="#">Contact Us</a></li>
					      </ul>
					    </div>
					</div>
				</nav>

				<div className="container-fluid">
					<Contact/>
				</div>

			</div>
		);
	}
});

module.exports = Main;