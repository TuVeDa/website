// Include React
var React = require("react");
// axios for post to server
var axios = require("axios");

var Contact =  React.createClass ({

	getInitialState: function() {
		return {
			showConfirmation: false,
			confirmationText : "",
			confirmationHeader : ""
		};
	},

	submitContact: function(e){
		e.preventDefault();
		var form = e.target;
		var message = "";
		console.log(e.target);
		var contact = this;
		axios.post('/contact', {
	    name: document.querySelector("#name").value,
	    companyName: document.querySelector("#company-name").value,
	    email: document.querySelector("#email").value,
	    attachment: document.querySelector("#attachment").value,
			description: document.querySelector("#company-description").value,
			newsletter: document.querySelector("#newsletter").value
	  })
	  .then(function (response) {
			console.log(response);

			contact.setState({
				confirmationText: "Your message has been successfully submitted.  We will get back to you soon!",
				confirmationHeader: "Thank You!"
				showConfirmation: true
			});
	  })
	  .catch(function (error) {
	    console.log(error);

			contact.setState({
				confirmationText: "Please refresh and try again!",
				confirmationHeader: "Oooops!",
				showConfirmation: true
			});
		})
	},

	render: function(){
		if (this.state.showConfirmation) {
			return (
				<Confirmation
					showConfirmationText={this.state.confirmationText}
					showConfirmationHeader={this.state.confirmationHeader}
			 	/>
			);
		} else {
			return (
				<ContactForm submitContact={this.submitContact}/>
			);
		}
	}
});

var ContactForm = React.createClass ({

	render: function() {
		return (
			<div>
				<h1 className="row">Contact Us</h1>
				<form className="row" onSubmit={this.props.submitContact}>
				  <div className="form-group col-md-6">
				    <label htmlFor="name">Name</label>
				    <input type="text" className="form-control" id="name" placeholder="Your Name"/>
				  </div>
				  <div className="form-group col-md-6">
				    <label htmlFor="company-name">Company Name</label>
				    <input type="text" className="form-control" id="company-name" placeholder="Your Company Name"/>
				  </div>
				  <div className="form-group col-md-6">
				    <label htmlFor="email">Email Address</label>
				    <input type="email" className="form-control" id="email" placeholder="email@email.com"/>
				  </div>
				  <div className="form-group col-md-6">
				    <label htmlFor="attachment">Attach a File</label>
				    <input type="file" id="attachment"/>
				    <p className="help-block">Add Reference Material</p>
				  </div>
				  <div className="form-group col-md-12">
				    <label htmlFor="company-description">Tell Us About Your Company</label>
				    <textarea className="form-control" rows="3" placeholder="For our website, we'd like..." id="company-description"></textarea>
				  </div>
				  <div className="checkbox col-md-12">
				    <label>
				      <input type="checkbox" id="newsletter" /> Sign Up for Our Newsletter
				    </label>
				  </div>
				  <div className="form-group col-md-12">

				    <button type="submit" className="btn btn-default" id="contact-submit">Submit</button>
				  </div>

				</form>
			</div>
		);
	}
});

var Confirmation = React.createClass({

	render: function(){
		return (
			<div>
				<h1 className="row">{this.props.showConfirmationHeader}Thank You!</h1>
        <div className="row">{this.props.showConfirmationText}</div>
			</div>
		)
	}
});


module.exports = Contact;
