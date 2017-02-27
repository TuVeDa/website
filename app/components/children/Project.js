// Include React
var React = require("react");

var Project = React.createClass({

	render: function(){
		return (
			<div>
				<h1 className="row sectionTitle">Project</h1>
				
				<div className="row" id="projectRow">
					
					{/* Veev's site */}
					<div className="col-sm-12 col-md-6 projectBox" id="leftProject">			
						<h4 className="projectTitle">Professional Portfolio</h4>
						<p className="row projectBlurb">A sister company of Spoonflower, Sprout Patterns provides users with the unique experience of designing a piece of clothing online.</p>
						
						<div className="row projectInfo">
							<div className="col-sm-8 col-lg-7">
								<img src="img/spoonflower.png" className="screenShot" id="colorPicker"/>
							</div>
							<div className="col-sm-4 col-lg-5">
								<h5 className="projectSubTitle">Technologies Used</h5>
								<ul className="technologies">
									<li>Ruby on Rails</li>
									<li>jQuery</li>
									<li>Three.js</li>
									<li>Image Magick</li>
								</ul>
							</div>
						</div>
					</div>
					
					{/* Turner's Color Picker */}
					<div className="col-sm-12 col-md-6 projectBox" id="rightProject">
						<h4 className="projectTitle">Professional Portfolio</h4>
						<p className="row projectBlurb">Built for a young full stack developer, this professional portfolio gives a memorable impression with a vibrant design and intuitive layout. </p>
						
						<div className="row projectInfo">
							<div className="col-sm-8 col-lg-7">
								<img src="img/veevSite.png" className="screenShot" id="veevSite"/>
							</div>
							<div className="col-sm-4 col-lg-5">
								<h5 className="projectSubTitle">Technologies Used</h5>
								<ul className="technologies">
									<li>Materialize</li>
									<li>JavaScript</li>
									<li>HTML/CSS</li>
									<li>jQuery</li>
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