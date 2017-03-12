// Include React
var React = require("react");

var List = React.createClass({

	render: function(){
		return (
			<div>
				<ul className="list-group">
				  <li className="list-group-item row">
						<div className="col-xs-8">Cras justo odio</div>
						<a className="col-xs-2" href="#">
							<button type="button" className="btn btn-info">Show</button>
						</a>
						<a className="col-xs-2" href="#">
							<button type="button" className="btn btn-danger">Delete</button>
						</a>
					</li>
				</ul>
			</div>
		)
	}
})

var AddForm = React.createClass ({

	submitBlog: function(e){
		console.log("submitting new blog");
		e.preventDefault();
		var form = e.target;
		var message = "";
		console.log(e.target);
		var blog = this;
		axios.post('/blog/create', {
	    title: document.querySelector("#blog-title").value,
	    text: document.querySelector("#blog-text").value,
	  })
	  .then(function (response) {
			console.log(response);

			blog.setState({
				confirmationText: "Your message has been successfully submitted.  We will get back to you soon!",
				confirmationHeader: "Thank You!",
				showConfirmation: true
			});
	  })
	  .catch(function (error) {
	    console.log(error);

			blog.setState({
				confirmationText: "Please refresh and try again!",
				confirmationHeader: "Ooops!",
				showConfirmation: true
			});
		})
	},

	render: function() {
		return (
			<div>
				<h2 className="row sectionTitle">Add Blog</h2>

				<form className="row" id="formRow" onSubmit={this.props.submitBlog}>
				  <div className="form-group col-xs-12">
				    <input type="text" className="form-control" id="blog-title" placeholder="Blog Title"/>
				  </div>
				  <div className="form-group col-xs-12">
				    <textarea className="form-control" rows="3" placeholder="Blog Content" id="blog-text"></textarea>
				  </div>
				  <div className="form-group col-xs-12">
				    <button type="submit" className="btn btn-default" id="contact-submit">Submit</button>
				  </div>
				</form>
			</div>
		);
	}
});

var Admin = React.createClass({
	render: function(){
		return(
			<div>
				<List />
				<AddForm />
			</div>
		);
	}
});

module.exports = Admin;
