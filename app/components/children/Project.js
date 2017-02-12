// Include React
var React = require("react");

var Project = React.createClass({

	render: function(){
		return (
			<div>
				<h1 className="row">Project</h1>
				<div className="row" id="projectRow">
					{/* Veev's site */}
					<div className="col-md-6" id="leftProject">
						<img src="img/blankProf.png" className="screenShot" id="veevSite"/>
						<h4>Veev's Site</h4>
						<p className="subheading">Web Developer</p>
						<p>Soufflé cheesecake bonbon oat cake pudding cake chocolate. Sugar plum I love soufflé gummies. Sweet caramels muffin pudding cupcake. Dessert chocolate cake cookie chocolate cake danish bear claw bonbon muffin lollipop.</p>
					</div>
					{/* Turner's Color Picker */}
					<div className="col-md-6" id="rightProject">
						<img src="img/blankProf.png" className="screenShot" id="colorPicker"/>
						<h4>Turner's Color Picker</h4>
						<p className="subheading">Web Developer</p>
						<p>Soufflé cheesecake bonbon oat cake pudding cake chocolate. Sugar plum I love soufflé gummies. Sweet caramels muffin pudding cupcake. Dessert chocolate cake cookie chocolate cake danish bear claw bonbon muffin lollipop.</p>
					</div>
				</div>
			</div>
		)
	}
})

module.exports = Project;