webpackHotUpdate(0,{

/***/ 234:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var GoogleFinance = function (_Component) {
	  _inherits(GoogleFinance, _Component);

	  function GoogleFinance(_props) {
	    _classCallCheck(this, GoogleFinance);

	    var _this = _possibleConstructorReturn(this, (GoogleFinance.__proto__ || Object.getPrototypeOf(GoogleFinance)).call(this, _props));

	    _this.__socket = null;
	    _this.state = {
	      connected: false,
	      error: null,
	      close: null
	    };

	    _this.__connect = _this.__connect.bind(_this);
	    _this.__monitorStatus = _this.__monitorStatus.bind(_this);
	    _this.__handleConnection = _this.__handleConnection.bind(_this);
	    return _this;
	  }

	  _createClass(GoogleFinance, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      setTimeout(this.__connect, 1);
	    }
	  }, {
	    key: '__connect',
	    value: function __connect() {
	      try {
	        this.__socket = io();
	        this.__socket.on('connect', this.__handleConnection.bind(this, true));
	        this.__socket.on('disconnect', this.__handleConnection.bind(this, false));
	        this.__socket.on('status', this.__monitorStatus);
	        this.setState({ error: null, connected: true });
	      } catch (_error) {
	        this.setState({ error: _error.message });
	        setTimeout(this.__connect, 1);
	      }
	    }
	  }, {
	    key: '__handleConnection',
	    value: function __handleConnection(_connected) {
	      this.setState({ error: !_connected ? 'Ops! we lost connection' : null, connected: _connected });
	    }
	  }, {
	    key: '__monitorStatus',
	    value: function __monitorStatus(_status) {
	      if (_status.error) {
	        this.setState({ error: _status.error });
	      }
	      if (_status.channel) {
	        this.setState({ error: null, close: null });
	        this.props.store.setChannel(_status.channel, _status.company, _status.datasource);
	      }
	      if (_status.close) {
	        this.setState({ close: _status.close });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { style: { textAlign: 'right' } },
	        this.state.close !== null ? _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'small',
	            { style: style.WarnMessage },
	            this.state.close
	          )
	        ) : null,
	        this.state.error !== null ? _react2.default.createElement(
	          'div',
	          { style: { textAlign: 'right' } },
	          _react2.default.createElement(
	            'span',
	            { style: style.Error },
	            this.state.error
	          ),
	          _react2.default.createElement('br', null),
	          _react2.default.createElement(
	            'small',
	            { style: style.Message },
	            'Reconnecting...'
	          )
	        ) : this.state.connected ? _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'small',
	            { style: style.Message },
	            'API OK'
	          )
	        ) : _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'small',
	            { style: style.Message },
	            'Connecting...'
	          )
	        )
	      );
	    }
	  }]);

	  return GoogleFinance;
	}(_react.Component);

	exports.default = GoogleFinance;


	var style = {
	  Error: {
	    color: 'red',
	    fontSize: '0.9em'
	  },
	  Message: {
	    color: 'blue',
	    fontSize: '0.7em'
	  },
	  WarnMessage: {
	    color: '#FFD300',
	    fontSize: '0.7em',
	    fontWeight: 'bold'
	  }
	};

/***/ }

})