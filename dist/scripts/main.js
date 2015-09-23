var user = new UserModel();
var App = Backbone.Router.extend({
	routes: {
		'': 'profile',
		'edit': 'edit',
		'home': 'home'
	},
	profile: function() {
		$('.page').hide();
		$('#profile').show();
	},
	edit: function() {
		$('.page').hide();
		$('#edit').show();

	},
	home: function() {
		$('.page').hide();
		$('#profile').show();
	},
});

var app = new App();
Backbone.history.start();

var $myName=$('#name');
var $myEmail=$('#inputEmail3');
var $myRole=$('#role');
var $myPassword=$('#inputPassword3');
var $mySave=$('#save');
var $myForm=$('#form');
var $myNames=$('#person-name');
var $myPersonName=$('#profile');
var $myNewRole=$('#new-role');

function onMyItemsSave(e) {
	e.preventDefault();
	user.set({
		name: $myName.val(),
		email: $myEmail.val(),
		role: $myRole.val(),
		password: $myPassword.val()
	})
	if($myName.val().length) {
		console.log($myName.val());
	}

	if($myEmail.val().length){
		console.log($myEmail.val());
	}
	if($myRole.val().length){
		console.log($myRole.val());
	}
	if($myPassword.val().length){
		console.log($myPassword.val());
	}

}

$myForm.on('submit', onMyItemsSave);

user.on('change', updatePage)

function updatePage(updatePage) {
	$myNames.html(user.get('name')),
	$myPersonName.html(user.get('name')),
	$myNewRole.html(user.get('role')),
	user.get('email'),
	user.get('password')
}




