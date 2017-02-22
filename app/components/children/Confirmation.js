// Include React
var React = require("react");

var Confirmation = React.createClass({

	render: function(){
		return (
			<div>
				<h1 className="row">Confirmation</h1>
        <div className="row">{this.props.message}</div>
			</div>
		)
	}
})

module.exports = Confirmation;
