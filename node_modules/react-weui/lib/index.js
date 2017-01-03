/**
 * Created by jf on 15/10/27.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _componentsButtonIndex = require('./components/button/index');

var _componentsCellIndex = require('./components/cell/index');

var _componentsMaskIndex = require('./components/mask/index');

var _componentsMaskIndex2 = _interopRequireDefault(_componentsMaskIndex);

var _componentsFormIndex = require('./components/form/index');

var _componentsFormIndex2 = _interopRequireDefault(_componentsFormIndex);

var _componentsToastIndex = require('./components/toast/index');

var _componentsToastIndex2 = _interopRequireDefault(_componentsToastIndex);

var _componentsProgressIndex = require('./components/progress/index');

var _componentsProgressIndex2 = _interopRequireDefault(_componentsProgressIndex);

var _componentsActionsheetIndex = require('./components/actionsheet/index');

var _componentsActionsheetIndex2 = _interopRequireDefault(_componentsActionsheetIndex);

var _componentsDialogIndex = require('./components/dialog/index');

var _componentsDialogIndex2 = _interopRequireDefault(_componentsDialogIndex);

var _componentsMsgIndex = require('./components/msg/index');

var _componentsMsgIndex2 = _interopRequireDefault(_componentsMsgIndex);

var _componentsArticleIndex = require('./components/article/index');

var _componentsArticleIndex2 = _interopRequireDefault(_componentsArticleIndex);

var _componentsIconIndex = require('./components/icon/index');

var _componentsIconIndex2 = _interopRequireDefault(_componentsIconIndex);

exports['default'] = {
    Button: _componentsButtonIndex.Button,
    ButtonArea: _componentsButtonIndex.ButtonArea,
    Cells: _componentsCellIndex.Cells,
    CellsTitle: _componentsCellIndex.CellsTitle,
    CellsTips: _componentsCellIndex.CellsTips,
    Cell: _componentsCellIndex.Cell,
    CellHeader: _componentsCellIndex.CellHeader,
    CellBody: _componentsCellIndex.CellBody,
    CellFooter: _componentsCellIndex.CellFooter,
    Mask: _componentsMaskIndex2['default'],
    Form: _componentsFormIndex2['default'],
    Toast: _componentsToastIndex2['default'],
    Progress: _componentsProgressIndex2['default'],
    ActionSheet: _componentsActionsheetIndex2['default'],
    Dialog: _componentsDialogIndex2['default'],
    Msg: _componentsMsgIndex2['default'],
    Article: _componentsArticleIndex2['default'],
    Icon: _componentsIconIndex2['default']
};
module.exports = exports['default'];