var EventStream = defclass({
    constructor: function () {
        this.argc = arguments.length;
        this.argv = arguments;
        this.listeners = [];
    },
    emit: function (event) {
        var listeners = this.listeners, length = listeners.length, index = 0;
        while (index < length) listeners[index++](event);
        this.argc = 0;
    },
    addListener: function (f) {
        var argc = this.argc, argv = this.argv, index = 0;
        while (index < argc) f(argv[index++]);
        this.listeners.push(f);
    },
    map: function (f) {
        var events = new Events;

        this.addListener(function (x) {
            events.emit(f(x));
        });

        return events;
    },
    filter: function (f) {
        var events = new Events;

        this.addListener(function (x) {
            if (f(x)) events.emit(x);
        });

        return events;
    },
    scan: function (a, f) {
        var events = new Events(a);

        this.addListener(function (x) {
            events.emit(a = f(a, x));
        });

        return events;
    },
    merge: function (that) {
        var events = new Events;

        this.addListener(function (x) {
            events.emit({ left: x });
        });

        that.addListener(function (y) {
            events.emit({ right: y });
        });

        return events;
    }
});