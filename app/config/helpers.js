var axios = require("axios");

var helper = {
  getPosts: function(){

    var queryURL = '/posts';

    return axios.get(queryURL)
      .then(function(res){
        if (res.status === 'error') return false;
        return res.data;
      })
      .catch(function(err) {
        return false;
      })
  },
  createPost: function(post){

		var queryURL = '/post/new';

		return axios.post(queryURL, {
			'title': post.title,
	    	'date': post.date,
	    	'body': post.body
			})
			.then(function(res){
				return res.data;
			})
			.catch(function(err) {
				return false;
			})
	},
}
