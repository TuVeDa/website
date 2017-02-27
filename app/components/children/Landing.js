// Include React
var React = require("react");

var Landing = React.createClass({

	render: function(){
		return (
			<div id="landingWindow">
				<div className="titleRow">
					<h1 id="landingTitle"  >
						<span>T</span>
						<span className="lowerCase">u</span>
						<span>V</span>
						<span className="lowerCase">ē</span>
						<span>D</span>
						<span className="lowerCase">a</span>
					</h1>
					<p id="subTitle">Your SEO, Your Website, Your Business</p>
				</div>
				
			</div>
		)
	}
})

module.exports = Landing;