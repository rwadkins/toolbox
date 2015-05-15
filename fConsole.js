window.fConsole = (function(){
    function writeMessage(node, message) {
        var elem = document.createElement("div");
        elem.innerHTML = message;

        node.appendChild(elem);
    }

    var _node = document.body;
    var _logNode = null;

    var fConsole = {
        log : function() {
            var output = Array.prototype.map.call(arguments, function(arg) {
                return arg.toString();
            });

            writeMessage(_logNode || _node, output.join(" | "));
        }
    };

    fConsole.log.node = function(node) {
        _logNode = node;
    };

    return fConsole;
})();
