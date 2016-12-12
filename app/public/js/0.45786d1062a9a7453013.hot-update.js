webpackHotUpdate(0,{

/***/ 238:
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

	var _Channel = __webpack_require__(239);

	var _Channel2 = _interopRequireDefault(_Channel);

	var _mobxReact = __webpack_require__(235);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ChannelList = (0, _mobxReact.observer)(_class = function (_Component) {
	  _inherits(ChannelList, _Component);

	  function ChannelList(props) {
	    _classCallCheck(this, ChannelList);

	    var _this = _possibleConstructorReturn(this, (ChannelList.__proto__ || Object.getPrototypeOf(ChannelList)).call(this, props));

	    _this.state = {};
	    return _this;
	  }

	  _createClass(ChannelList, [{
	    key: 'render',
	    value: function render() {
	      var channels = this.props.store.channels;

	      var channelList = channels.keys().map(function (_key) {
	        return _react2.default.createElement(_Channel2.default, { abbr: _key, datasource: channels.get(_key) });
	      });
	      return _react2.default.createElement(
	        'div',
	        { style: style.Container },
	        channelList.length === 0 ? _react2.default.createElement(
	          'div',
	          { style: style.Center },
	          _react2.default.createElement(
	            'div',
	            { className: 'spinner' },
	            _react2.default.createElement('i', { className: 'spinner__dot spinner__dot--one' }),
	            _react2.default.createElement('i', { className: 'spinner__dot spinner__dot--two' }),
	            _react2.default.createElement('i', { className: 'spinner__dot spinner__dot--three' })
	          )
	        ) : channelList
	      );
	    }
	  }]);

	  return ChannelList;
	}(_react.Component)) || _class;

	exports.default = ChannelList;


	var style = {
	  Container: {
	    display: 'flex',
	    flexDirection: 'row',
	    alignItems: 'space-around',
	    width: '100%',
	    height: '100%',
	    flexWrap: 'wrap'
	  },
	  Center: {
	    display: 'flex',
	    justifyContent: 'center'
	  }
	};

/***/ }

})