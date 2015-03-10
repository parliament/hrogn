var PARLIAMENT = PARLIAMENT || {};

PARLIAMENT.createNS = function (namespace) {
    var nsparts = namespace.split(".");
    var parent = PARLIAMENT;
 
    // we want to be able to include or exclude the root namespace so we strip
    // it if it's in the namespace
    if (nsparts[0] === "PARLIAMENT") {
        nsparts = nsparts.slice(1);
    }
 
    // loop through the parts and create a nested namespace if necessary
    for (var i = 0; i < nsparts.length; i++) {
        var partname = nsparts[i];
        // check if the current parent already has the namespace declared
        // if it isn't, then create it
        if (typeof parent[partname] === "undefined") {
            parent[partname] = {};
        }
        // get a reference to the deepest element in the hierarchy so far
        parent = parent[partname];
    }
    // the parent is now constructed with empty namespaces and can be used.
    // we return the outermost namespace
    return parent;
};

PARLIAMENT.createNS("PARLIAMENT.PACKIT");
PARLIAMENT.createNS("PARLIAMENT.PACKIT.MODELS");
PARLIAMENT.createNS("PARLIAMENT.PACKIT.VIEWS");
PARLIAMENT.createNS("PARLIAMENT.PACKIT.VIEWS.COMPONENTS");
PARLIAMENT.createNS("PARLIAMENT.PACKIT.TEMPLATES");
PARLIAMENT.createNS("PARLIAMENT.PACKIT.SERVICES");
PARLIAMENT.createNS("PARLIAMENT.PACKIT.CONTROLLERS");