'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Snackbar = require('@material-ui/core/Snackbar');

var _Snackbar2 = _interopRequireDefault(_Snackbar);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _CloseIcon = require('@material-ui/icons/Close')

var _CloseIcon2 = _interopRequireDefault(_CloseIcon)

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SnackbarProvider = function (_PureComponent) {
  _inherits(SnackbarProvider, _PureComponent);

  function SnackbarProvider() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SnackbarProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SnackbarProvider.__proto__ || Object.getPrototypeOf(SnackbarProvider)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      message: null,
      open: false
    }, _this.showMessage = function (message, variant, action, handleAction) {
      _this.setState({ open: true, message: message, variant: variant, action: action, handleAction: handleAction });
    }, _this.handleActionClick = function () {
      _this.handleClose();
      _this.state.handleAction();
    }, _this.handleClose = function () {
      _this.setState({ open: false, handleAction: null });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SnackbarProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        snackbar: {
          showMessage: this.showMessage
        }
      };
    }

    /**
     * Display a message with this snackbar.
     * @param {string} message message to display
     * @param {string} [action] label for the action button
     * @param {function} [handleAction] click handler for the action button
     * @public
     */

  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          action = _state.action,
          message = _state.message,
          variant = _state.variant,
          open = _state.open;
      var _props = this.props,
          children = _props.children,
          _props$SnackbarProps = _props.SnackbarProps,
          SnackbarRenderer = _props.SnackbarRenderer,
          SnackbarProps = _props$SnackbarProps === undefined ? {} : _props$SnackbarProps;
      var newSnackbarProps = _extends({}, SnackbarProps, {
        open: open,
        message: message || '',
        action: [action != null && _react2.default.createElement(
          _Button2.default,
          {
            color: 'secondary',
            size: 'small',
            onClick: this.handleActionClick
          },
          action
        ), _react2.default.createElement(
          _IconButton2.default,
          {
            key: 'close',
            'aria-label': 'Close',
            color: 'inherit',
            onClick: this.handleClose
          },
          _react2.default.createElement(
            _CloseIcon2.default
          )
        )],
        onClose: this.handleClose
      });
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        children,
        _react2.default.createElement(_Snackbar2.default, newSnackbarProps, _react2.default.createElement(SnackbarRenderer, {
          variant: variant,
          handleClose: this.handleClose,
          message: message || '',
          snackbarProps: newSnackbarProps
        }))
      );
    }
  }]);

  return SnackbarProvider;
}(_react.PureComponent);

exports.default = SnackbarProvider;


SnackbarProvider.childContextTypes = {
  snackbar: _propTypes2.default.shape({
    showMessage: _propTypes2.default.func
  })
};

SnackbarProvider.propTypes = {
  /**
   * The children that are wrapped by this provider.
   */
  children: _propTypes2.default.node,
  /**
   * Props to pass through to the snackbar.
   */
  SnackbarProps: _propTypes2.default.object
};
