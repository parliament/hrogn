var Classist = PARLIAMENT.Classist = function() {
}

PARLIAMENT.Classist.addClass = function(el, className) {
  if (el.classList) {
    el.classList.add(className);
  } else {
    el.className += ' ' + className;
  }
}

PARLIAMENT.Classist.removeClass = function(el, className) {

	if (el.classList) {
	  el.classList.remove(className);
	} else {
	  el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
	}
}

PARLIAMENT.Classist.hasClass = function(el, className) {

	if (el.classList) {
  	return el.classList.contains(className);
	} else {
  	return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
  }
}

PARLIAMENT.Classist.toggleClass = function(el, className) {

	if (Classist.hasClass(el, className)) {
  	
  	Classist.removeClass(el, className);
  	return false;
	
	} else {
  
  	Classist.addClass(el, className);
  	return true;
  
  }
}