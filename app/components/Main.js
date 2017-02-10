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
			<div>
				<div className="container">
					<nav class="navbar navbar-default">
						<div class="container-fluid">
						    {/*Brand and toggle get grouped for better mobile display */}
						    <div class="navbar-header">
						      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
						        <span class="sr-only">Toggle navigation</span>
						        <span class="icon-bar"></span>
						        <span class="icon-bar"></span>
						        <span class="icon-bar"></span>
						      </button>
						      <a class="navbar-brand" href="#">Tuveda</a>
						    </div>

						    {/*Collect the nav links, forms, and other content for toggling */}
						    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						      <ul className="nav navbar-nav navbar-right">
							    	<li><a href="#">Our Team</a></li>
							    	<li><a href="#">Our Projects</a></li>
							    	<li><a href="#">Contact Us</a></li>
							    </ul>
						    </div>
						</div>
					</nav>
				</div>
			</div>
		);
	}
});

module.exports = Main;