function Sandbox() {
    var args = Array.prototype.slice.call(arguments),
        callback = args.pop(),
        modules = (args[0] && typeof args[0] === "string") ? args : args[0],
        i;


    if (!(this instanceof Sandbox)) {
        return new Sandbox(modules, callback);
    }

    if (!modules || modules ==="*") {
        modules = [];
        for (var module in Sandbox.modules) {
            if (Sandbox.modules.hasOwnProperty(module)) {
                modules.push(module);
            }
        }
    }

    for (i = 0; i < modules.length; i++) {
        Sandbox.modules[modules[i]](this);
    }

    callback(this);
}