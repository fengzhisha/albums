'use strict';exports.__esModule = true;var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);

var _base = require('./base.js');var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _class = function (_Base) {(0, _inherits3.default)(_class, _Base);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));}_class.prototype.



  indexAction = function () {var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {var id, model;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:

              id = this.get('id');
              model = this.model('post');
              // let data = await model.queryOne(id);
              //  this.assign('data', data[0]);
              return _context.abrupt('return', this.display());case 3:case 'end':return _context.stop();}}}, _callee, this);}));function indexAction() {return _ref.apply(this, arguments);}return indexAction;}();_class.prototype.



  searchAction = function () {var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {var id, model;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:

              id = this.get('id');
              model = this.model('post');
              // let data = await model.queryOne(id);
              //  this.assign('data', data[0]);
              return _context2.abrupt('return', this.display());case 3:case 'end':return _context2.stop();}}}, _callee2, this);}));function searchAction() {return _ref2.apply(this, arguments);}return searchAction;}();_class.prototype.


  modelAction = function () {var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {var id, model, data;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
              id = this.get('id');
              model = this.model('post');_context3.next = 4;return (
                model.queryOne(id));case 4:data = _context3.sent;
              this.success(data[0]);case 6:case 'end':return _context3.stop();}}}, _callee3, this);}));function modelAction() {return _ref3.apply(this, arguments);}return modelAction;}();return _class;}(_base2.default);exports.default = _class;