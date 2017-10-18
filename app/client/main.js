import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.jade';

Template.home.helpers({
	challenges() {
		return Challenges.find().fetch();
	}
});

Template.home.events({
	'click #add-challenge'(event, instance) {
		// alert('clicked!');
		var name = prompt('Challenge Name:');
		Challenges.insert({name: name});
	}
});

Template.challengeTile.events({
	'click .add-description'(event, instance) {
		var description = prompt('Description:');
		var challengeId = instance.data._id;
		Challenges.update({_id: challengeId}, {$set: {description: description}});
		console.log(event, instance);
	}
});

// Template.challengeDetail.onCreated(function() {
// 	var challengeId = FlowRouter.getParam('id');
// 	console.log(challengeId);
// });

Template.challengeDetail.helpers({
	challenge() {
		var challengeId = FlowRouter.getParam('id');
		return Challenges.findOne(challengeId);
	}
});