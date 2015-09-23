(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var user = new UserModel();
var App = Backbone.Router.extend({
	routes: {
		'': 'profile',
		'edit': 'edit',
		'home': 'home'
	},
	profile: function profile() {
		$('.page').hide();
		$('#profile').show();
	},
	edit: function edit() {
		$('.page').hide();
		$('#edit').show();
	},
	home: function home() {
		$('.page').hide();
		$('#profile').show();
	}
});

var app = new App();
Backbone.history.start();

var $myName = $('#name');
var $myEmail = $('#inputEmail3');
var $myRole = $('#role');
var $myPassword = $('#inputPassword3');
var $mySave = $('#save');
var $myForm = $('#form');

function onMyItemsSave(e) {
	e.preventDefault();
	user.set({
		name: $myName.val(),
		email: $myEmail.val(),
		role: $myRole.val(),
		password: $myPassword.val()
	});
	if ($myName.val().length) {
		console.log($myName.val());
	}

	if ($myEmail.val().length) {
		console.log($myEmail.val());
	}
	if ($myRole.val().length) {
		console.log($myRole.val());
	}
	if ($myPassword.val().length) {
		console.log($myPassword.val());
	}
}

$myForm.on('submit', onMyItemsSave);

user.on('change', updatePage);

function updatePage() {
	user.get('name'), user.get('email'), user.get('role'), user.get('password');
}

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map