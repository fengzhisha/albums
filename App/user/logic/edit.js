'use strict';
/**
 * logic
 * @param  {} []
 * @return {}     []
 */

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

exports.__esModule = true;

var _default = (function (_think$logic$base) {
    _inherits(_default, _think$logic$base);

    function _default() {
        _classCallCheck(this, _default);

        _think$logic$base.apply(this, arguments);
    }

    /**
     * index action logic
     * @return {} []
     */

    _default.prototype.indexAction = function indexAction() {};

    _default.prototype.modelAction = function modelAction() {
        this.allowMethods = "post";
        var rules = {
            username: "string|required",
            address: "string|maxLength:50",
            facebook: 'string|url',
            avatar: 'string',
            instagram: 'string'
        };
    };

    return _default;
})(think.logic.base);

exports["default"] = _default;
module.exports = exports["default"];