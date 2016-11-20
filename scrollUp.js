(function(){
var btn = document.querySelector('.button');

function showButton() {
	(document.body.scrollTop>100) ? btn.classList.add('show') : btn.classList.remove('show');
}

function aScroll() {
	if(document.body.scrollTop>0) {
		document.body.scrollTop -= 10;
		setTimeout(aScroll,10);
	}
}

function animateScroll() {
	btn.addEventListener('click',function(){
		aScroll();
	},false)
}

function init(type, button, animateScroll) {
	window.addEventListener(type, showButton, animateScroll);
}

init('scroll',showButton, animateScroll());
})();
