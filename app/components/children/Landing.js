// Include React
var React = require("react");

var Landing = React.createClass({

	render: function(){
		return (
			<div className="titleRow">
				<h1 id="landingTitle"  >
					TUVEDA
				</h1>
				<p id="subTitle">Brownie macaroon carrot cake. Icing I love soufflé oat cake macaroon. Chupa chups gummies sesame snaps caramels I love cupcake carrot cake. </p>
			</div>
		)
	}
})

module.exports = Landing;