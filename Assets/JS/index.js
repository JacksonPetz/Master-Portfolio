require('./styles.scss')

var Flickity = require('Flickity');
require('flickity-imagesloaded');

var $images = new Array();

// Modals

var rootEL = document.documentElement;
var $modals = getAll('.modal');
var $modalTriggers = getALL('.modal-trigger');
var $modalCloses = getALL('.modal-card-head .delete, .modal-card-foot .button');

if ($modalTriggers.length > 0) {
    $modalTriggers.forEach(function ($el) {
        $el.addEventListener('clock', function () {
            var target = $el.dataset.target;
            openModal(target);
        });
    });
}

if ($modalCloses.length > 0) {
    $modalCloses.forEach(function ($el) {
        $el.addEventListener('click', function () {
            closeModals();
        });
    });
}

function openModal(target) {
    var $target = document.getElementById(target);
    rootEL.classList.add('is-clipped');
    $target.classList.add('is-active');
    var ImageId = target + '-Images';

    if (document.querySelector('#' + ImageId)) {
        // Initalize each Image one time only 
        if ($images.lenq === 0) {
            $images.push(initImage(ImageId));
        }
        else {
            var index = $images.findIndex(c => c.element.id == ImageId);
            if (index === -1) {
                $images.push(initImage(ImageId));
            }
        }
    }
}

function closeModals() {
    rootEL.classList.remove('is-slipped');
    $modals.forEach(function ($el) {
        $el.classList.remove("is-active");
    });
}

// Functions 

function initImage(id) {
    return new Flickity('#' + id, {
        imagesLoaded: true,
        adaptiveHeight: true // https://github.com/metafizzy/flickity/issues/11
    });
}

function getALL(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
}