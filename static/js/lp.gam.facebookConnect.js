	facebookClass = function() { this.initialize.apply(this, arguments); };
	facebookClass.prototype = {
		initialize: function () {},
		connect: function () {
			var requiredPerms = ['email','user_about_me','user_birthday','user_website','publish_stream'];
			FB.login(
				function(response) {
					if(response.session){
						window.location.hash = 'facebook-login-preprocess';
						window.location.href = "/facebook/login?uid="+response.session.uid+"&access_token="+response.session.access_token;
					} else {
						tc.util.dump('LOGIN CANCELLED!');
						tc.jQ('.cannot-be-clicked, .has-been-clicked').removeClass('has-been-clicked').removeClass('cannot-be-clicked');
					}
				},
				{perms: requiredPerms.join(',')}
			);
		}
	};
	F = new facebookClass();