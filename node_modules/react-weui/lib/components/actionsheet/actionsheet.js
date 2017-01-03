/**
 * Created by jf on 15/11/26.
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

var ActionSheet = (function (_React$Component) {
    _inherits(ActionSheet, _React$Component);

    function ActionSheet() {
        _classCallCheck(this, ActionSheet);

        _get(Object.getPrototypeOf(ActionSheet.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(ActionSheet, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var show = _props.show;
            var onRequestClose = _props.onRequestClose;

            var className = (0, _classnames2['default'])({
                weui_actionsheet: true,
                weui_actionsheet_toggle: show
            });

            return _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(_maskIndex2['default'], { style: { display: show ? 'block' : 'none' }, onClick: onRequestClose }),
                _react2['default'].createElement(
                    'div',
                    { className: className },
                    _react2['default'].createElement(
                        'div',
                        { className: 'weui_actionsheet_menu' },
                        this._renderMenuItem()
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'weui_actionsheet_action' },
                        this._renderActions()
                    )
                )
            );
        }
    }, {
        key: '_renderMenuItem',
        value: function _renderMenuItem() {
            return this.props.menus.map(function (menu, idx) {
                var label = menu.label;

                var others = _objectWithoutProperties(menu, ['label']);

                var className = (0, _classnames2['default'])({
                    weui_actionsheet_cell: true
                });

                return _react2['default'].createElement(
                    'div',
                    _extends({ key: idx }, others, { className: className }),
                    label
                );
            });
        }
    }, {
        key: '_renderActions',
        value: function _renderActions() {
            return this.props.actions.map(function (action, idx) {
                var label = action.label;

                var others = _objectWithoutProperties(action, ['label']);

                var className = (0, _classnames2['default'])({
                    weui_actionsheet_cell: true
                });

                return _react2['default'].createElement(
                    'div',
                    _extends({ key: idx }, others, { className: className }),
                    label
                );
            });
        }
    }], [{
        key: 'propTypes',
        value: {
            menus: _react2['default'].PropTypes.array,
            actions: _react2['default'].PropTypes.array,
            show: _react2['default'].PropTypes.bool,
            onRequestClose: _react2['default'].PropTypes.func
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            menus: [],
            actions: [],
            show: false,
            onRequestClose: function onRequestClose() {}
        },
        enumerable: true
    }]);

    return ActionSheet;
})(_react2['default'].Component);

exports['default'] = ActionSheet;
;
module.exports = exports['default'];