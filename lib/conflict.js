'use strict';

exports.__esModule = true;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Demo = function () {
    function Demo() {
        _classCallCheck(this, Demo);
    }

    Demo.prototype.doit = function doit() {
        if (_fs2.default.existsSync('./tmp.js')) console.log('hi tmp');
    };

    return Demo;
}();

exports.default = Demo;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZsaWN0LmVzNiJdLCJuYW1lcyI6WyJEZW1vIiwiZG9pdCIsImV4aXN0c1N5bmMiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7Ozs7O0lBRU1BLEk7Ozs7O21CQUNGQyxJLG1CQUFPO0FBQ0gsWUFBSSxhQUFHQyxVQUFILENBQWMsVUFBZCxDQUFKLEVBQStCQyxRQUFRQyxHQUFSLENBQVksUUFBWjtBQUNsQyxLOzs7OztrQkFHVUosSSIsImZpbGUiOiJjb25mbGljdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcydcblxuY2xhc3MgRGVtbyB7XG4gICAgZG9pdCgpIHtcbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoJy4vdG1wLmpzJykpIGNvbnNvbGUubG9nKCdoaSB0bXAnKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVtb1xuIl19
