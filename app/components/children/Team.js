// Include React
var React = require("react");

var Team = React.createClass({

	render: function(){
		return (
			<div>
				<h1 className="row">Our Team</h1>
				<div className="row" id="profRow">
					<div className="col-md-4 profBox" id="turner">
						<img src="img/blankProf.png" className="profPic"/>
						<h4>Turner</h4>
						<p className="subheading">Web Developer</p>
						<p>Chocolate gummi bears I love danish sweet roll. Wafer wafer toffee I love chocolate bar. Bear claw icing donut cookie tart gummies jujubes I love tart. Bonbon cake biscuit cheesecake candy cheesecake jujubes.</p>
					</div>
					<div className="col-md-4 profBox" id="veev">
						<img src="img/blankProf.png" className="profPic"/>
						<h4>Veev</h4>
						<p className="subheading">Web Developer</p>
						<p>I love tart gummi bears. Brownie apple pie bear claw icing jujubes croissant candy canes ice cream. I love biscuit chocolate bar caramels. Gummies tootsie roll tiramisu pudding apple pie cookie oat cake dessert.</p>
					</div>
					<div className="col-md-4 profBox" id="david">
						<img src="img/blankProf.png" className="profPic"/>
						<h4>David</h4>
						<p className="subheading">SEO Specialist</p>
						<p>Caramels cheesecake I love pudding I love jelly beans halvah lollipop. Sugar plum jelly-o lollipop. Carrot cake cookie pie muffin cake. Halvah fruitcake pie cheesecake candy candy croissant muffin.</p>
					</div>
				</div>
			</div>
		)
	}
})

module.exports = Team;