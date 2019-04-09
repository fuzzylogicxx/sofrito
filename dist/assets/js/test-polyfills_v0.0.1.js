/*!
 * Sofrito v0.0.1
 * A savoury front-end base with advanced typographic, layout, performance and build ingredients.
 * (c) 2019 Laurence Hughes
 * MIT License
 * https://github.com/fuzzylogicxx/sofrito
 */

document.addEventListener('click', (function (event) {
	if (!event.target.matches('#click-me')) return;
	alert('You clicked me!');
}), false);