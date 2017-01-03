/**
 * Created by jf on 15/10/27.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var Progress = (function (_React$Component) {
    _inherits(Progress, _React$Component);

    function Progress() {
        _classCallCheck(this, Progress);

        _get(Object.getPrototypeOf(Progress.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Progress, [{
        key: '_renderOpr',
        value: function _renderOpr() {
            if (this.props.onClick) {
                return _react2['default'].createElement(
                    'a',
                    { href: 'javascript:;', className: 'weui_progress_opr', onClick: this.props.onClick },
                    _react2['default'].createElement(_icon2['default'], { value: 'cancel' })
                );
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var value = _props.value;

            var others = _objectWithoutProperties(_props, ['value']);

            if (value < 0) {
                value = 0;
            }
            if (value > 100) {
                value = 100;
            }

            return _react2['default'].createElement(
                'div',
                { className: 'weui_progress' },
                _react2['default'].createElement(
                    'div',
                    { className: 'weui_progress_bar' },
                    _react2['default'].createElement('div', { className: 'weui_progress_inner_bar', style: { width: value + '%' } })
                ),
                this._renderOpr()
            );
        }
    }], [{
        key: 'propTypes',
        value: {
            progress: _react2['default'].PropTypes.number
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            value: 0
        },
        enumerable: true
    }]);

    return Progress;
})(_react2['default'].Component);

exports['default'] = Progress;
module.exports = exports['default'];