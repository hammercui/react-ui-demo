/**
 * Created by jf on 15/10/28.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _cells = require('./cells');

var _cells2 = _interopRequireDefault(_cells);

var _cell = require('./cell');

var _cell2 = _interopRequireDefault(_cell);

var _cells_title = require('./cells_title');

var _cells_title2 = _interopRequireDefault(_cells_title);

var _cells_tips = require('./cells_tips');

var _cells_tips2 = _interopRequireDefault(_cells_tips);

var _cell_header = require('./cell_header');

var _cell_header2 = _interopRequireDefault(_cell_header);

var _cell_body = require('./cell_body');

var _cell_body2 = _interopRequireDefault(_cell_body);

var _cell_footer = require('./cell_footer');

var _cell_footer2 = _interopRequireDefault(_cell_footer);

exports['default'] = {
    Cells: _cells2['default'],
    Cell: _cell2['default'],
    CellsTitle: _cells_title2['default'],
    CellsTips: _cells_tips2['default'],
    CellHeader: _cell_header2['default'],
    CellBody: _cell_body2['default'],
    CellFooter: _cell_footer2['default']
};
module.exports = exports['default'];