PARLIAMENT.SidebarMenu = defclass({

  constructor: function (toggleButton, target) {
    this.toggleButton = toggleButton;
    this.target = target;
    this.body = document.querySelector('body');
    this.isOpen = false;

    this.initEvents();

  },

  initEvents: function () {

    var _this = this;

   	this.eventStream = new EventStream();


    // treated as a local var so we can add/remove it without memory leaks.
    this.onBodyClick = function(ev) {

      ev.preventDefault();
      
      if (Closest.get(ev.target, '.trips')) {
        _this.eventStream.emit({"name": Static.NAVIGATE_TO_TRIPS});
      
      } else if (Closest.get(ev.target, '.categories')) {
        _this.eventStream.emit({"name": Static.NAVIGATE_TO_TRIP});

      } else if (Closest.get(ev.target, '.items')) {
        _this.eventStream.emit({"name": Static.NAVIGATE_TO_CATEGORY});

      } else {
        _this.close();
      }

    }


    this.toggleButton.addEventListener("click", function(ev) {
      ev.preventDefault();
      ev.stopPropagation();
      (_this.isOpen) ? _this.close() : _this.open();

    });


  },

  

  open: function() {

    var _this = this;

    Classist.addClass(this.body, "state-menu-open");
    this.isOpen = true;

    this.body.addEventListener("click", this.onBodyClick);

    this.bodyHammer = new Hammer(this.body, {});
    this.bodyHammer.on('tap', function(ev) {
        _this.onBodyClick(ev);
    });

  },

  close: function() {
    var _this = this;

    Classist.removeClass(this.body, "state-menu-open");
    this.body.removeEventListener("click", this.onBodyClick);
    
    this.bodyHammer.destroy();


    this.isOpen = false;
  }
    
});