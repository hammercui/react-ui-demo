/**
 * Created by jf on 15/11/4.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

var _buttonIndex = require('../button/index');

var _iconIndex = require('../icon/index');

var _iconIndex2 = _interopRequireDefault(_iconIndex);

var Msg = (function (_React$Component) {
    _inherits(Msg, _React$Component);

    function Msg() {
        _classCallCheck(this, Msg);

        _get(Object.getPrototypeOf(Msg.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Msg, [{
        key: '_renderButtons',
        value: function _renderButtons() {

            return this.props.buttons.map(function (button, idx) {
                var type = button.type;
                var label = button.label;

                var others = _objectWithoutProperties(button, ['type', 'label']);

                return _react2['default'].createElement(
                    _buttonIndex.Button,
                    _extends({ key: idx }, others, { type: type }),
                    label
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                { className: 'weui_msg' },
                _react2['default'].createElement(
                    'div',
                    { className: 'weui_icon_area' },
                    _react2['default'].createElement(_iconIndex2['default'], { value: this.props.type, className: 'weui_icon_msg' })
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'weui_text_area' },
                    _react2['default'].createElement(
                        'h2',
                        { className: 'weui_msg_title' },
                        this.props.title
                    ),
                    _react2['default'].createElement(
                        'p',
                        { className: 'weui_msg_desc' },
                        this.props.description
                    )
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'weui_opr_area' },
                    _react2['default'].createElement(
                        'p',
                        { className: 'weui_btn_area' },
                        this._renderButtons()
                    )
                )
            );
        }
    }], [{
        key: 'propTypes',
        value: {
            type: _react2['default'].PropTypes.string,
            buttons: _react2['default'].PropTypes.array
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            type: 'success',
            buttons: []
        },
        enumerable: true
    }]);

    return Msg;
})(_react2['default'].Component);

exports['default'] = Msg;
module.exports = exports['default'];