/**
 * Created by jf on 15/10/27.
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

var _maskIndex = require('../mask/index');

var _maskIndex2 = _interopRequireDefault(_maskIndex);

var Confirm = (function (_React$Component) {
    _inherits(Confirm, _React$Component);

    function Confirm() {
        _classCallCheck(this, Confirm);

        _get(Object.getPrototypeOf(Confirm.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Confirm, [{
        key: 'renderButtons',
        value: function renderButtons() {
            return this.props.buttons.map(function (action, idx) {
                var type = action.type;
                var label = action.label;

                var others = _objectWithoutProperties(action, ['type', 'label']);

                var className = (0, _classnames2['default'])({
                    weui_btn_dialog: true,
                    'default': type === 'default',
                    primary: type === 'primary'
                });

                return _react2['default'].createElement(
                    'a',
                    _extends({ key: idx, href: 'javascript:;' }, others, { className: className }),
                    label
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var title = _props.title;
            var show = _props.show;
            var children = _props.children;

            return _react2['default'].createElement(
                'div',
                { className: 'weui_dialog_confirm', style: { display: show ? 'block' : 'none' } },
                _react2['default'].createElement(_maskIndex2['default'], null),
                _react2['default'].createElement(
                    'div',
                    { className: 'weui_dialog' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'weui_dialog_hd' },
                        _react2['default'].createElement(
                            'strong',
                            { className: 'weui_dialog_title' },
                            title
                        )
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'weui_dialog_bd' },
                        children
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'weui_dialog_ft' },
                        this.renderButtons()
                    )
                )
            );
        }
    }], [{
        key: 'propTypes',
        value: {
            buttons: _react2['default'].PropTypes.array,
            show: _react2['default'].PropTypes.bool,
            title: _react2['default'].PropTypes.string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            buttons: [],
            show: false,
            title: ''
        },
        enumerable: true
    }]);

    return Confirm;
})(_react2['default'].Component);

exports['default'] = Confirm;
module.exports = exports['default'];