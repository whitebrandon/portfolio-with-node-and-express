/******************************************
    Treehouse Techdegree:
    FSJS project 6 - Static Node.js and Express Site
    Name: Brandon White
    Date of Last Modification: 23/11/2019
******************************************/

'use strict';

// For About Page
const talents = ["a filmmaker", "a screenwriter", "a critical thinker", "my mother's son", "a designer", "a novelist", "a preparer of baked goods", "an illustrator", "a problem solver", "a big brother", "a lover of books", "a jokester", "a scholar", "a Full Stack JavaScript Developer"];

/**
 * Rotates through talents in "More than" heading
 */
function changeTalent () {
    const talent = document.getElementById('talent');
    const talentString = talent.textContent;
    const index = talents.indexOf(talentString);
    let nextTalent = talents[index + 1];
    if (!nextTalent) {
        nextTalent = talents[0];
    }
    talent.textContent = nextTalent;
};

if (window.location.pathname === '/about') {
    setInterval(changeTalent, 2000);
};

// For Thumbnails on Index
/**
 * Plays animation before going to linked url
 * @param {Event} e - Event object
 */
Array.from(document.querySelectorAll('.index')).forEach(project => project.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.portfolio-index').classList.replace('fadeInUp', 'fadeOutDown');
    setTimeout(
        () => {
            window.location.pathname = this.getAttribute('href');
        }, 350);
}));

/**
 * Removes animated class from images so that images are scaled down before hover
 */
setTimeout(() => {
    document.querySelectorAll('.image').forEach(image => image.classList.remove('animated'));
}, 500);

