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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _maskIndex = require('../mask/index');

var _maskIndex2 = _interopRequireDefault(_maskIndex);

var _iconIndex = require('../icon/index');

var _iconIndex2 = _interopRequireDefault(_iconIndex);

var Toast = (function (_React$Component) {
    _inherits(Toast, _React$Component);

    function Toast() {
        _classCallCheck(this, Toast);

        _get(Object.getPrototypeOf(Toast.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Toast, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var icon = _props.icon;
            var show = _props.show;
            var children = _props.children;

            return _react2['default'].createElement(
                'div',
                { className: icon === 'loading' ? 'weui_loading_toast' : '', style: { display: show ? 'block' : 'none' } },
                _react2['default'].createElement(_maskIndex2['default'], { transparent: true }),
                _react2['default'].createElement(
                    'div',
                    { className: 'weui_toast' },
                    _react2['default'].createElement(_iconIndex2['default'], { value: icon }),
                    _react2['default'].createElement(
                        'p',
                        { className: 'weui_toast_content' },
                        children
                    )
                )
            );
        }
    }], [{
        key: 'propTypes',
        value: {
            icon: _react2['default'].PropTypes.string,
            show: _react2['default'].PropTypes.bool
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            icon: 'toast',
            show: false
        },
        enumerable: true
    }]);

    return Toast;
})(_react2['default'].Component);

exports['default'] = Toast;
module.exports = exports['default'];