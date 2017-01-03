/**
 * Created by jf on 15/11/3.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var Icon = (function (_React$Component) {
    _inherits(Icon, _React$Component);

    function Icon() {
        _classCallCheck(this, Icon);

        _get(Object.getPrototypeOf(Icon.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Icon, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _props = this.props;
            var value = _props.value;
            var size = _props.size;
            var className = _props.className;

            var others = _objectWithoutProperties(_props, ['value', 'size', 'className']);

            var cls = (0, _classnames2['default'])((_classNames = {}, _defineProperty(_classNames, 'weui_icon_' + value, true), _defineProperty(_classNames, 'weui_icon_msg', size === 'large'), _defineProperty(_classNames, className, className), _classNames));

            if (value === 'loading') {
                return _react2['default'].createElement(
                    'div',
                    { className: 'weui_loading' },
                    [].concat(_toConsumableArray(Array(12))).map(function (x, i) {
                        return _react2['default'].createElement('div', { key: i, className: 'weui_loading_leaf weui_loading_leaf_' + i });
                    })
                );
            } else {
                return _react2['default'].createElement('i', _extends({}, others, { className: cls }));
            }
        }
    }], [{
        key: 'propTypes',
        value: {
            value: _react2['default'].PropTypes.string,
            size: _react2['default'].PropTypes.string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            value: 'success',
            size: 'small'
        },
        enumerable: true
    }]);

    return Icon;
})(_react2['default'].Component);

exports['default'] = Icon;
module.exports = exports['default'];