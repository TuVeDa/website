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
						
						<p>Soufflé cheesecake bonbon oat cake pudding cake chocolate. Sugar plum I love soufflé gummies. Sweet caramels muffin pudding cupcake. Dessert chocolate cake cookie chocolate cake danish bear claw bonbon muffin lollipop.</p>
						<h5>Technologies Used</h5>
						<div className="row"  >
							<ul className="col-md-4 technologies">
								<li>Candy</li>
								<li>Gummies</li>
								<li>Marshmallow</li>
							</ul>
							<ul className="col-md-4 technologies">
								<li>Brownie</li>
								<li>Lollipop</li>
								<li>Tiramisu</li>
							</ul>
							<ul className="col-md-4 technologies">
								<li>Jujubes</li>
								<li>Jelly Beans</li>
								<li>Icing</li>
							</ul>
						</div>
					</div>
					{/* Turner's Color Picker */}
					<div className="col-md-6" id="rightProject">
						<img src="img/blankProf.png" className="screenShot" id="colorPicker"/>
						<h4>Turner's Color Picker</h4>
						
						<p>Soufflé cheesecake bonbon oat cake pudding cake chocolate. Sugar plum I love soufflé gummies. Sweet caramels muffin pudding cupcake. Dessert chocolate cake cookie chocolate cake danish bear claw bonbon muffin lollipop.</p>
						
						<h5>Technologies Used</h5>
						<div className="row"  >
							<ul className="col-md-4 technologies">
								<li>Candy</li>
								<li>Gummies</li>
								<li>Marshmallow</li>
							</ul>
							<ul className="col-md-4 technologies">
								<li>Brownie</li>
								<li>Lollipop</li>
								<li>Tiramisu</li>
							</ul>
							<ul className="col-md-4 technologies">
								<li>Jujubes</li>
								<li>Jelly Beans</li>
								<li>Icing</li>
							</ul>
						</div>
						
					</div>
				</div>
			</div>
		)
	}
})

module.exports = Project;