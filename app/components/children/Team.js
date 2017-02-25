// Include React
var React = require("react");

var Team = React.createClass({

	render: function(){
		return (
			<div id="teamRow">
				<h1 className="row sectionTitle" >Our Team</h1>
				<div className="row" id="profRow">
					<div className="col-sm-4 profileBox" id="leftBox">
						<img src="img/blankProf.png" className="profilePic" id="turner"/>
						<h4>Turner</h4>
						<p className="subheading">Web Developer</p>
						<p>Chocolate gummi bears I love danish sweet roll. Wafer wafer toffee I love chocolate bar. Bear claw icing donut cookie tart gummies jujubes I love tart. </p>
					</div>
					<div className="col-sm-4 profileBox" id="middleBox">
						<img src="img/blankProf.png" className="profilePic" id="veev"/>
						<h4>Veev</h4>
						<p className="subheading">Web Developer</p>
						<p>I love tart gummi bears. Brownie apple pie bear claw icing jujubes croissant candy canes ice cream. I love biscuit chocolate bar caramels. </p>
					</div>
					<div className="col-sm-4 profileBox" id="rightBox">
						<img src="img/blankProf.png" className="profilePic" id="david"/>
						<h4>David</h4>
						<p className="subheading">SEO Specialist</p>
						<p>Caramels cheesecake I love pudding I love jelly beans halvah lollipop. Sugar plum jelly-o lollipop. Carrot cake cookie pie muffin cake lollipop. </p>
					</div>
				</div>
			</div>
		)
	}
})

module.exports = Team;