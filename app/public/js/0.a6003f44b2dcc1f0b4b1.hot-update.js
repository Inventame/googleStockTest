webpackHotUpdate(0,{

/***/ 239:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _mobxReact = __webpack_require__(235);

	var _reactRouter = __webpack_require__(178);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Channel = (0, _mobxReact.observer)(_class = function (_Component) {
	  _inherits(Channel, _Component);

	  function Channel(props) {
	    _classCallCheck(this, Channel);

	    var _this = _possibleConstructorReturn(this, (Channel.__proto__ || Object.getPrototypeOf(Channel)).call(this, props));

	    _this.__name = props.datasource.company;
	    // console.log( Math.max.apply(null, Object.keys( props.datasource.data ) ), Object.keys(props.datasource.data) )
	    return _this;
	  }

	  _createClass(Channel, [{
	    key: 'render',
	    value: function render() {
	      var data = this.props.datasource.data;
	      var last = JSON.parse(data[Math.max.apply(null, Object.keys(data))]);

	      return _react2.default.createElement(
	        'div',
	        { style: style.Card },
	        _react2.default.createElement(
	          'b',
	          null,
	          this.__name
	        ),
	        _react2.default.createElement(
	          'small',
	          null,
	          last.t,
	          ' - ',
	          last.e
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          last.lt
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          'Price: ',
	          last.l
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          'Change: ',
	          last.c
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          'Percentage: ',
	          last.cp,
	          '%'
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          'Div/Yield: ',
	          last.div,
	          '/',
	          last.yld
	        ),
	        _react2.default.createElement('hr', null),
	        _react2.default.createElement(
	          'div',
	          null,
	          'After Hours: ',
	          last.elt
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          'Price: ',
	          last.el
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          'Change: ',
	          last.ec
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          'Percentage: ',
	          last.ecp,
	          '%'
	        ),
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { href: '#/channel/' + last.t, className: 'btn' },
	          'Show History'
	        )
	      );
	    }
	  }]);

	  return Channel;
	}(_react.Component)) || _class;

	exports.default = Channel;


	var style = {
	  Card: {
	    display: 'flex',
	    flexDirection: 'column',
	    padding: '8px',
	    margin: '8px',
	    width: '250px',
	    height: '260px',
	    border: '1px solid gray'
	  }
	};

/***/ }

})