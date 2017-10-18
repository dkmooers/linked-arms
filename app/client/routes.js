FlowRouter.route('/', {
	name: 'home',
	action: function() {
		BlazeLayout.render('layout', {main: 'home'});
	}
});

FlowRouter.route('/challenges/:id', {
	name: 'challengeDetail',
	action: function() {
		BlazeLayout.render('layout', {main: 'challengeDetail'});
	}
});