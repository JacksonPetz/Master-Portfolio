require('./styles.scss')

var Flickity = require('Flickity');
require('flickity-imagesloaded');

var $images = new Array();

// Modals

var rootEL = document.documentElement;
var #modals = getALL('.modal');
var $modalTriggers = getALL('.modal-trigger');
var $modalCloses = getALL('.modal-card-head .delete, .modal-card-foot .button');

