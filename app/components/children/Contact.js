// Include React
var React = require("react");

var Contact = React.createClass({

	render: function(){
		return (
			<div>
				<h1 className="row sectionTitle">Contact Us</h1>
				<form className="row">
				  <div className="form-group col-md-6">
				    <label for="exampleInputEmail1">Name</label>
				    <input type="email" className="form-control" id="name" placeholder="Your Name"/>
				  </div>
				  <div className="form-group col-md-6">
				    <label for="exampleInputEmail1">Company Name</label>
				    <input type="email" className="form-control" id="companyName" placeholder="Your Company Name"/>
				  </div>
				  <div className="form-group col-md-6">
				    <label for="exampleInputPassword1">Email Address</label>
				    <input type="password" className="form-control" id="email" placeholder="email@email.com"/>
				  </div>
				  <div className="form-group col-md-6">
				    <label for="exampleInputFile">Attach a File</label>
				    <input type="file" id="exampleInputFile"/>
				    <p className="help-block">Add Reference Material</p>
				  </div>
				  <div className="form-group col-md-12">
				    <label for="exampleInputPassword1">Tell Us About Your Company</label>
				    <textarea className="form-control" rows="3" placeholder="For our website, we'd like..."></textarea>
				  </div>
				  <div className="checkbox col-md-12">
				    <label>
				      <input type="checkbox"/> Sign Up for Our Newsletter
				    </label>
				  </div>
				  <div className="form-group col-md-12">
				    
				    <button type="submit" className="btn btn-default waves-effect waves-light">Submit</button>
				  </div>
				  
				</form>
			</div>
		)
	}
});

module.exports = Contact;