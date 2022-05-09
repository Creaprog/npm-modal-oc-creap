"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./Modal.css");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Modal = props => {
  if (props.isShowing) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "modal-container"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "modal-wrapper"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "modal"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "modal-header"
    }, /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      className: "modal-close-button",
      onClick: () => {
        props.setIsShowing(false);
      }
    }, "X")), /*#__PURE__*/_react.default.createElement("div", {
      className: "modal-body"
    }, /*#__PURE__*/_react.default.createElement("p", null, props.message)))));
  }
};

var _default = Modal;
exports.default = _default;