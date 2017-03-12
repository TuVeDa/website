// Include React
var React = require("react");

var Blog = React.createClass({

	render: function(){
		return (
			<div>
				<div className="well">
					<a href="#/Blog/Admin"><button type="button" className="btn btn-primary">Show Admin</button></a>
					<a href="#/Blog/Content"><button type="button" className="btn btn-info">Show Content</button></a>
				</div>
				{this.props.children}
			</div>
		)
	}
})

module.exports = Blog;
