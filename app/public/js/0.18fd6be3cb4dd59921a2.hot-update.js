webpackHotUpdate(0,{

/***/ 233:
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

	var _GoogleFinance = __webpack_require__(234);

	var _GoogleFinance2 = _interopRequireDefault(_GoogleFinance);

	var _mobxReact = __webpack_require__(235);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Initial = (0, _mobxReact.observer)(_class = function (_Component) {
		_inherits(Initial, _Component);

		function Initial(props) {
			_classCallCheck(this, Initial);

			var _this = _possibleConstructorReturn(this, (Initial.__proto__ || Object.getPrototypeOf(Initial)).call(this, props));

			_this.state = {};
			return _this;
		}

		_createClass(Initial, [{
			key: 'componentWillMount',
			value: function componentWillMount() {}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ style: style.Fullscreen },
					_react2.default.createElement(
						'div',
						{ style: style.Bar },
						_react2.default.createElement(
							'h3',
							null,
							'Google Finance'
						),
						_react2.default.createElement(_GoogleFinance2.default, { store: this.props.store })
					),
					_react2.default.createElement('hr', null),
					_react2.default.createElement(
						'div',
						{ style: style.Fullscreen },
						this.props.children
					)
				);
			}
		}]);

		return Initial;
	}(_react.Component)) || _class;

	exports.default = Initial;


	var style = {
		Bar: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'baseline',
			justifyContent: 'space-between',
			padding: '5px'
		},
		Fullscreen: {
			width: '100%',
			height: '100%'
		}
	};

/***/ }

})