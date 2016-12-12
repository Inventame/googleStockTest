webpackHotUpdate(0,{

/***/ 237:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _desc, _value, _class, _descriptor, _descriptor2;

	var _mobx = __webpack_require__(236);

	function _initDefineProp(target, property, descriptor, context) {
		if (!descriptor) return;
		Object.defineProperty(target, property, {
			enumerable: descriptor.enumerable,
			configurable: descriptor.configurable,
			writable: descriptor.writable,
			value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
		});
	}

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
		var desc = {};
		Object['ke' + 'ys'](descriptor).forEach(function (key) {
			desc[key] = descriptor[key];
		});
		desc.enumerable = !!desc.enumerable;
		desc.configurable = !!desc.configurable;

		if ('value' in desc || desc.initializer) {
			desc.writable = true;
		}

		desc = decorators.slice().reverse().reduce(function (desc, decorator) {
			return decorator(target, property, desc) || desc;
		}, desc);

		if (context && desc.initializer !== void 0) {
			desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
			desc.initializer = undefined;
		}

		if (desc.initializer === void 0) {
			Object['define' + 'Property'](target, property, desc);
			desc = null;
		}

		return desc;
	}

	function _initializerWarningHelper(descriptor, context) {
		throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
	}

	var GFStore = (_class = function GFStore() {
		_classCallCheck(this, GFStore);

		_initDefineProp(this, 'channels', _descriptor, this);

		_initDefineProp(this, 'setChannel', _descriptor2, this);
	}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'channels', [_mobx.observable], {
		enumerable: true,
		initializer: function initializer() {
			return (0, _mobx.map)();
		}
	}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'setChannel', [_mobx.action], {
		enumerable: true,
		initializer: function initializer() {
			var _this = this;

			return function (_channel, _company, _data) {
				_this.channels.set(_channel, { company: _company, data: _data });
			};
		}
	})), _class);


	var gfStore = window.store = new GFStore();

	exports.default = gfStore;

/***/ }

})