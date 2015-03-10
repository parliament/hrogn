////////////////////////////////////////////////////////////////////////////////// 
// 
// Media Query display
// 
// Inspired by http://krasimirtsonev.com/blog/article/Using-media-queries-in-JavaScript-AbsurdJS-edition
// 
//////////////////////////////////////////////////////////////////////////////////

PARLIAMENT.MediaQueryDisplay = defclass({

  constructor: function (args) {
    this.initVars();
    this.initEvents();

  }, 

  initVars: function() {
    var screen_xs_max = 767;
    var screen_sm_min = 768;
    var screen_sm_max = 991;
    var screen_md_min = 992;
    var screen_md_max = 1199;
    var screen_lg_min = 1200;
    var screen_short = 800;

    this.sizes = [{min: 0, max: screen_xs_max, name:"xs"},
                  {min: screen_sm_min, max: screen_sm_max, name:"sm"},
                  {min: screen_md_min, max: screen_md_max, name:"md"},
                  {min: screen_lg_min, max: 1000000, name:"lg"}];

    this.displayElement = document.createElement("div");
    var s = this.displayElement.style;
    s.zIndex = 999;
    s.border = "2px solid black";
    s.padding = "12px 16px";
    s.background = "white";
    s.position = "absolute";
    s.top = "10px";
    s.left = "10px";
    
    $("body").append(this.displayElement);

  },

  initEvents: function() {

    var _this = this;

    for (var i=0, len = this.sizes.length; i < len; i++) {

      var size = this.sizes[i];
      var mq = window.matchMedia('screen and (min-width: ' + size.min + 'px) and (max-width: ' + size.max + 'px)');
      
      // store media query in sizes array so we can later retrieve its name, like a dictionary
      this.sizes[i].mq = mq;

      mq.addListener(function(mq) {
        _this.onMediaQueryChange(mq);
      });

    }

    for (var i=0, len = this.sizes.length; i < len; i++) {
      this.onMediaQueryChange(this.sizes[i].mq);
    }

  },

  onMediaQueryChange: function(mq) {

    if(mq.matches) {
      
      // find matching label based on the media query string      
      for (var i=0, len = this.sizes.length; i < len; i++) {
        if (this.sizes[i].mq.media == mq.media) {
          var size = this.sizes[i];
          var w = $(window).width();
          this.output(size.name);
        }
      }
    }
  },

  output: function(label) {
    this.displayElement.innerHTML = label;
  },

  enable: function() {
  
    var _this = this;

    this.disable();



  },
  
  disable: function() {
    
  }

});


