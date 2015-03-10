PARLIAMENT.ScrollController = defclass({

  constructor: function () {
    this.initVars();
  },

  initVars: function () {
   	this.eventStream = new EventStream();
  },

  focus: function(el) {
  	offsetX = el.offsetLeft;
  	offsetY = el.offsetTop;
  	// document.body.scrollLeft = offsetX;
   //  document.body.scrollTop = offsetY;

   TweenLite.to(document.body, .3, {scrollTop: offsetY, scrollLeft: offsetX});
  }
    
});