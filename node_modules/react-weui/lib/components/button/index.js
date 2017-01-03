/**
 * Created by jf on 15/10/27.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

var _button_area = require('./button_area');

var _button_area2 = _interopRequireDefault(_button_area);

exports['default'] = {
  Button: _button2['default'],
  ButtonArea: _button_area2['default']
};
module.exports = exports['default'];