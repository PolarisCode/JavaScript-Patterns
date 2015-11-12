Sandbox.modules = {};

Sandbox.modules.ajax = function (box) {
    box.ajax = {};

    box.ajax.sendRequest = function (url) {
        console.log("requested " + url);
    }
}