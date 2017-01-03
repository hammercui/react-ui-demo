/**
 * Created by jf on 15/10/27.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _confirm = require('./confirm');

var _confirm2 = _interopRequireDefault(_confirm);

var _alert = require('./alert');

var _alert2 = _interopRequireDefault(_alert);

exports['default'] = {
  Confirm: _confirm2['default'],
  Alert: _alert2['default']
};
module.exports = exports['default'];