'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _baseJs = require('./base.js');

var _baseJs2 = _interopRequireDefault(_baseJs);

var fs = require('fs');
var path = require('path');
var moment = require('moment');

var _default = (function (_Base) {
    _inherits(_default, _Base);

    function _default() {
        _classCallCheck(this, _default);

        _Base.apply(this, arguments);
    }

    /**
     * index action
     * @return {Promise} []
     */

    _default.prototype.viewAction = function viewAction() {
        //auto render template file index_index.html
        var categoryData = this.model('category').select();
        this.assign("category", categoryData);

        return this.display();
    };

    _default.prototype.modelAction = function modelAction() {
        //这里的 key 需要和 form 表单里的 name 值保持一致
        var file = this.file('file');

        var filepath = file.path;
        var filename = file.originalFilename;
        if (file.size > 1024 * 1024 * 5) {
            return this.fail("文件过大");
        }
        var ext = filename.split('.')[1];
        //文件上传后，需要将文件移动到项目其他地方，否则会在请求结束时删除掉该文件
        var uploadPath = think.UPLOAD_PATH;
        think.mkdir(uploadPath);
        var basename = path.basename(filepath);
        var self = this;
        var newFilename = Math.random().toString(36).substring(7) + moment().format('YYYYMMDDHHmmsSSS') + '.' + ext;
        fs.rename(filepath, uploadPath + '/' + newFilename, function () {
            file.path = uploadPath + newFilename;
            file.url = '/static/upload/' + newFilename;

            self.success(file);
        });
    };

    _default.prototype.addAction = function addAction() {
        var data, model, dateTime, id, catId, cat;
        return _regeneratorRuntime.async(function addAction$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
                case 0:
                    data = this.post();
                    model = this.model('post');
                    dateTime = moment().format('YYYY-MM-DD HH:mm:ss');

                    data['date'] = dateTime;
                    context$2$0.next = 6;
                    return _regeneratorRuntime.awrap(this.model('post').addPost(data));

                case 6:
                    id = context$2$0.sent;
                    catId = this.post('nav');
                    context$2$0.next = 10;
                    return _regeneratorRuntime.awrap(this.model('category').updateNum(catId));

                case 10:
                    cat = context$2$0.sent;
                    return context$2$0.abrupt('return', this.success(id));

                case 12:
                case 'end':
                    return context$2$0.stop();
            }
        }, null, this);
    };

    return _default;
})(_baseJs2['default']);

exports['default'] = _default;
module.exports = exports['default'];