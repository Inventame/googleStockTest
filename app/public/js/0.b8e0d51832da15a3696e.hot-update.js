webpackHotUpdate(0,{

/***/ 240:
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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ChannelHistory = (0, _mobxReact.observer)(_class = function (_Component) {
	  _inherits(ChannelHistory, _Component);

	  function ChannelHistory(props) {
	    _classCallCheck(this, ChannelHistory);

	    var _this = _possibleConstructorReturn(this, (ChannelHistory.__proto__ || Object.getPrototypeOf(ChannelHistory)).call(this, props));

	    _this.state = {
	      channel: ''
	    };
	    return _this;
	  }

	  _createClass(ChannelHistory, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var channel = this.props.params.channel;
	      this.setState({ channel: this.props.params.channel });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var channels = this.props.store.channels;

	      var channel = channels.get(this.state.channel) || {};
	      var last = {};
	      var history = null;
	      if (channel !== undefined) {
	        (function () {
	          var data = channel.data || {};
	          var keys = Object.keys(data) || [];
	          keys = keys.sort(function (_a, _b) {
	            return _a > _b;
	          });
	          var max = data[Math.max.apply(null, keys)];
	          last = max ? JSON.parse(max) : {};

	          history = keys.map(function (_item) {
	            var current = JSON.parse(data[_item]);
	            return _react2.default.createElement(
	              'tr',
	              null,
	              _react2.default.createElement(
	                'td',
	                { style: { textAlign: 'center' } },
	                current.l
	              ),
	              _react2.default.createElement(
	                'td',
	                { style: { textAlign: 'center' } },
	                current.c
	              ),
	              _react2.default.createElement(
	                'td',
	                { style: { textAlign: 'center' } },
	                current.cp
	              ),
	              _react2.default.createElement(
	                'td',
	                { style: { textAlign: 'center' } },
	                current.div
	              ),
	              _react2.default.createElement(
	                'td',
	                { style: { textAlign: 'center' } },
	                current.yld
	              )
	            );
	          });
	        })();
	      }

	      return _react2.default.createElement(
	        'div',
	        { style: { padding: '5px' } },
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'b',
	            null,
	            '(',
	            this.state.channel,
	            ') ',
	            channel.company
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: style.Card },
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              last.t,
	              ' - ',
	              last.e
	            )
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
	          )
	        ),
	        _react2.default.createElement(
	          'table',
	          { style: { width: '100%' } },
	          _react2.default.createElement(
	            'thead',
	            null,
	            _react2.default.createElement(
	              'tr',
	              null,
	              _react2.default.createElement(
	                'th',
	                null,
	                'Price'
	              ),
	              _react2.default.createElement(
	                'th',
	                null,
	                'Change'
	              ),
	              _react2.default.createElement(
	                'th',
	                null,
	                'Change %'
	              ),
	              _react2.default.createElement(
	                'th',
	                null,
	                'Div'
	              ),
	              _react2.default.createElement(
	                'th',
	                null,
	                'Yield'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'tbody',
	            null,
	            history
	          )
	        )
	      );
	    }
	  }]);

	  return ChannelHistory;
	}(_react.Component)) || _class;

	exports.default = ChannelHistory;


	var style = {
	  Card: {
	    display: 'flex',
	    flexDirection: 'column',
	    padding: '8px',
	    margin: '8px',
	    width: '250px',
	    height: '210px',
	    border: '1px solid gray'
	  }
	};

/***/ }

})