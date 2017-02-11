// Include React
var React = require("react");

var Contact = React.createClass({

	render: function(){
		return (
			<div>
				<form>
				  <div className="form-group">
				    <label for="exampleInputEmail1">Name</label>
				    <input type="email" className="form-control" id="name" placeholder="Your Name"/>
				  </div>
				  <div className="form-group">
				    <label for="exampleInputEmail1">Company Name</label>
				    <input type="email" className="form-control" id="companyName" placeholder="Your Company Name"/>
				  </div>
				  <div className="form-group">
				    <label for="exampleInputPassword1">Email Address</label>
				    <input type="password" className="form-control" id="email" placeholder="email@email.com"/>
				  </div>
				  <div className="form-group">
				    <label for="exampleInputPassword1">Tell Us About Your Company</label>
				    <textarea className="form-control" rows="3" placeholder="For our website, we'd like..."></textarea>
				  </div>
				  <div className="form-group">
				    <label for="exampleInputFile">Attach a File</label>
				    <input type="file" id="exampleInputFile"/>
				    <p className="help-block">Add Reference Material</p>
				  </div>
				  <div className="checkbox">
				    <label>
				      <input type="checkbox"/> Sign Up for Our Newsletter
				    </label>
				  </div>
				  <button type="submit" className="btn btn-default">Submit</button>
				</form>
			</div>
		)
	}
});

module.exports = Contact;