PARLIAMENT.URLController = defclass({

  constructor: function () {
    this.initVars();
  },

  initVars: function () {
   	this.eventStream = new EventStream();
  },

  navigate: function(state, title, href) {
	  window.history.pushState(state, title, href);
  }
    
});