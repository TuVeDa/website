// Include React
var React = require("react");

var Project = React.createClass({

	render: function(){
		return (
			<div>
				<h1 className="row sectionTitle">Project</h1>
				
				<div className="row" id="projectRow">
					
					{/* Veev's site */}
					<div className="col-md-6 projectBox" id="leftProject">			
						<h4 className="projectTitle">Professional Portfolio</h4>
						<p className="row projectBlurb">Soufflé cheesecake bonbon oat cake pudding cake chocolate. Sugar plum I love soufflé gummies. Sweet caramels muffin pudding cupcake. Dessert chocolate cake cookie chocolate cake danish bear claw bonbon muffin lollipop.</p>
						
						<div className="row projectInfo">
							<div className="col-sm-8 ">
								<img src="img/blankProf.png" className="screenShot" id="veevSite"/>
							</div>
							<div className="col-sm-4">
								<h5 className="projectSubTitle">Technologies Used</h5>
								<ul className="technologies">
									<li>Brownie</li>
									<li>Lollipop</li>
									<li>Tiramisu</li>
									<li>Gummies</li>
								</ul>
							</div>
						</div>
					</div>
					
					{/* Turner's Color Picker */}
					<div className="col-md-6 projectBox" id="rightProject">
						<h4 className="projectTitle">Professional Portfolio</h4>
						<p className="row projectBlurb">Soufflé cheesecake bonbon oat cake pudding cake chocolate. Sugar plum I love soufflé gummies. Sweet caramels muffin pudding cupcake. Dessert chocolate cake cookie chocolate cake danish bear claw bonbon muffin lollipop.</p>
						
						<div className="row projectInfo">
							<div className="col-sm-8">
								<img src="img/blankProf.png" className="screenShot" id="veevSite"/>
							</div>
							<div className="col-sm-4">
								<h5 className="projectSubTitle">Technologies Used</h5>
								<ul className="technologies">
									<li>Brownie</li>
									<li>Lollipop</li>
									<li>Tiramisu</li>
									<li>Gummies</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
})

module.exports = Project;