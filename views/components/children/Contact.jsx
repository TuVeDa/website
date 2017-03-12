// Include React
var React = require("react");
// axios for post to server
var axios = require("axios");

var Contact =  React.createClass ({

	getInitialState: function() {
		return {
			showConfirmation: false,
			confirmationText : "",
			confirmationHeader : "",
		};
	},
	submitContact: function(formState){
		var message = "";
		var contact = this;
		axios.post('/contact/create', {
	    name: formState.name,
	    companyName: formState.companyName,
	    email: formState.email,
			description: formState.description,
			newsletter: formState.newsletter
	  })
	  .then(function (response) {
			console.log(response);

			contact.setState({
				confirmationText: "Your message has been successfully submitted.  We will get back to you soon!",
				confirmationHeader: "Thank You!",
				showConfirmation: true
			});
	  })
	  .catch(function (error) {
	    console.log(error);

			contact.setState({
				confirmationText: "Please refresh and try again!",
				confirmationHeader: "Ooops!",
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

	getInitialState: function() {
		return {
			name: "",
			companyName: "",
			email: "",
			description: "",
			newsletter: false
		};
	},

	handleChange: function(event) {
		var id = event.target.id;
		console.log("changing field", id);
		var newState = event.target.value;
		this.setState({ [id] : newState});
	},

	handleSubmit: function(event) {
		event.preventDefault();
		this.props.submitContact(this.state);
		this.setState({
			name: "",
			companyName: "",
			email: "",
			description: "",
			newsletter: false
		})
	},

	render: function() {
		return (
			<div>
				<h1 className="row sectionTitle">Contact Us</h1>

				<form className="row" id="formRow" onSubmit={this.handleSubmit}>
				  <div className="form-group col-xs-12 col-sm-6">
				    <input type="text" className="form-control" id="name" onChange={this.handleChange} placeholder="First & Last Name"/>
				  </div>
				  <div className="form-group col-sm-6">
				    <input type="text" className="form-control" id="companyName" onChange={this.handleChange} placeholder="Company Name"/>
				  </div>
				  <div className="form-group col-xs-12">
				    <input type="email" className="form-control" id="email" onChange={this.handleChange} placeholder="Email"/>
				  </div>
				  <div className="form-group col-xs-12">
				    <textarea className="form-control" rows="3"  id="description" onChange={this.handleChange} placeholder="Tell Us About Your Company"></textarea>
				  </div>
				  <div className="checkbox col-xs-12" id="newsletter" onChange={this.handleChange}>
				    <label>
				      <input type="checkbox" onChange={this.handleChange}  /> Sign Up for Our Newsletter
				    </label>
				  </div>
				  <div className="form-group col-xs-12">
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
				<h1 className="row sectionTitle">{this.props.showConfirmationHeader}</h1>
        		<div className="row">{this.props.showConfirmationText}</div>
			</div>
		)
	}
});


module.exports = Contact;
