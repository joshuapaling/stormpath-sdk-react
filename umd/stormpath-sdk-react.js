(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactStormpath"] = factory(require("react"));
	else
		root["ReactStormpath"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_7__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.UserComponent = exports.UserField = exports.SocialLoginButton = exports.SocialLoginLink = exports.VerifyEmailView = exports.ChangePasswordForm = exports.ResetPasswordForm = exports.RegistrationForm = exports.UserProfileForm = exports.LoginForm = exports.LogoutLink = exports.LoginLink = exports.NotAuthenticated = exports.Authenticated = exports.AuthenticatedRoute = exports.LogoutRoute = exports.LoginRoute = exports.HomeRoute = exports.constants = exports.actions = exports.Router = exports.context = undefined;
	exports.init = init;
	exports.getAccessToken = getAccessToken;

	var _app = __webpack_require__(1);

	var _app2 = _interopRequireDefault(_app);

	var _context2 = __webpack_require__(20);

	var _context3 = _interopRequireDefault(_context2);

	var _Router2 = __webpack_require__(38);

	var _Router3 = _interopRequireDefault(_Router2);

	var _UserActions = __webpack_require__(29);

	var _UserActions2 = _interopRequireDefault(_UserActions);

	var _UserConstants = __webpack_require__(26);

	var _UserConstants2 = _interopRequireDefault(_UserConstants);

	var _HomeRoute2 = __webpack_require__(91);

	var _HomeRoute3 = _interopRequireDefault(_HomeRoute2);

	var _LoginRoute2 = __webpack_require__(93);

	var _LoginRoute3 = _interopRequireDefault(_LoginRoute2);

	var _LogoutRoute2 = __webpack_require__(94);

	var _LogoutRoute3 = _interopRequireDefault(_LogoutRoute2);

	var _AuthenticatedRoute2 = __webpack_require__(95);

	var _AuthenticatedRoute3 = _interopRequireDefault(_AuthenticatedRoute2);

	var _Authenticated2 = __webpack_require__(96);

	var _Authenticated3 = _interopRequireDefault(_Authenticated2);

	var _NotAuthenticated2 = __webpack_require__(97);

	var _NotAuthenticated3 = _interopRequireDefault(_NotAuthenticated2);

	var _LoginLink2 = __webpack_require__(98);

	var _LoginLink3 = _interopRequireDefault(_LoginLink2);

	var _LogoutLink2 = __webpack_require__(99);

	var _LogoutLink3 = _interopRequireDefault(_LogoutLink2);

	var _LoginForm2 = __webpack_require__(100);

	var _LoginForm3 = _interopRequireDefault(_LoginForm2);

	var _UserProfileForm2 = __webpack_require__(105);

	var _UserProfileForm3 = _interopRequireDefault(_UserProfileForm2);

	var _RegistrationForm2 = __webpack_require__(106);

	var _RegistrationForm3 = _interopRequireDefault(_RegistrationForm2);

	var _ResetPasswordForm2 = __webpack_require__(107);

	var _ResetPasswordForm3 = _interopRequireDefault(_ResetPasswordForm2);

	var _ChangePasswordForm2 = __webpack_require__(108);

	var _ChangePasswordForm3 = _interopRequireDefault(_ChangePasswordForm2);

	var _VerifyEmailView2 = __webpack_require__(109);

	var _VerifyEmailView3 = _interopRequireDefault(_VerifyEmailView2);

	var _SocialLoginLink2 = __webpack_require__(103);

	var _SocialLoginLink3 = _interopRequireDefault(_SocialLoginLink2);

	var _SocialLoginButton2 = __webpack_require__(102);

	var _SocialLoginButton3 = _interopRequireDefault(_SocialLoginButton2);

	var _UserField2 = __webpack_require__(110);

	var _UserField3 = _interopRequireDefault(_UserField2);

	var _UserComponent2 = __webpack_require__(111);

	var _UserComponent3 = _interopRequireDefault(_UserComponent2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.context = _context3.default;
	exports.Router = _Router3.default;
	exports.actions = _UserActions2.default;
	exports.constants = _UserConstants2.default;
	exports.HomeRoute = _HomeRoute3.default;
	exports.LoginRoute = _LoginRoute3.default;
	exports.LogoutRoute = _LogoutRoute3.default;
	exports.AuthenticatedRoute = _AuthenticatedRoute3.default;
	exports.Authenticated = _Authenticated3.default;
	exports.NotAuthenticated = _NotAuthenticated3.default;
	exports.LoginLink = _LoginLink3.default;
	exports.LogoutLink = _LogoutLink3.default;
	exports.LoginForm = _LoginForm3.default;
	exports.UserProfileForm = _UserProfileForm3.default;
	exports.RegistrationForm = _RegistrationForm3.default;
	exports.ResetPasswordForm = _ResetPasswordForm3.default;
	exports.ChangePasswordForm = _ChangePasswordForm3.default;
	exports.VerifyEmailView = _VerifyEmailView3.default;
	exports.SocialLoginLink = _SocialLoginLink3.default;
	exports.SocialLoginButton = _SocialLoginButton3.default;
	exports.UserField = _UserField3.default;
	exports.UserComponent = _UserComponent3.default;

	// When not using ES6, enable people to use ReactStormpath.init() and
	// ReactStormpath.getAccessToken() instead of ReactStormpath.default.init()
	// and ReactStormpath.default.getAccessToken()

	function init() {
	  _app2.default.init.apply(_app2.default, arguments);
	};

	function getAccessToken() {
	  return _app2.default.getAccessToken();
	}

	exports.default = _app2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _events = __webpack_require__(2);

	var _storage = __webpack_require__(3);

	var _services = __webpack_require__(5);

	var _constants = __webpack_require__(25);

	var _stores = __webpack_require__(27);

	var _dispatchers = __webpack_require__(31);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _context = __webpack_require__(20);

	var _context2 = _interopRequireDefault(_context);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_EventEmitter) {
	  _inherits(App, _EventEmitter);

	  function App() {
	    _classCallCheck(this, App);

	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

	    _this.initialized = false;
	    return _this;
	  }

	  _createClass(App, [{
	    key: 'isInitialized',
	    value: function isInitialized() {
	      return this.initialized;
	    }
	  }, {
	    key: 'init',
	    value: function init(options) {
	      options = options || {};

	      if (this.isInitialized()) {
	        throw new Error('React Stormpath already initialized.');
	      }

	      this.initialized = true;

	      var tokenStore = null;
	      var sessionStore = new _stores.SessionStore();

	      if (!options.endpoints) {
	        options.endpoints = {};
	      }

	      if (!options.storage) {
	        options.storage = new _storage.LocalStorage('session');
	      }

	      var baseUri = options.endpoints.baseUri;

	      var userService = new _services.UserService(options.endpoints);

	      var userStore = new _stores.UserStore(userService, sessionStore);

	      // If there is a jwtResponse in the URL, it's from a social login callback
	      // from the Client API, so if we have a configured baseUrl, we need to authenticate
	      // with this JWT, using the Client API.

	      if (baseUri && window.location.href.match(/jwtResponse/)) {
	        userService.authenticate({
	          grant_type: 'stormpath_token',
	          token: _utils2.default.parseQueryString(window.location.href.split('?')[1]).jwtResponse
	        }, function (err) {
	          if (err) {
	            return console.error(err);
	          }
	          window.location.replace(window.location.href.replace(/jwtResponse=[^&]+/, ''));
	        });
	      }

	      _context2.default.setTokenStore(tokenStore);
	      _context2.default.setSessionStore(sessionStore);
	      _context2.default.setUserStore(userStore);

	      // If there's no specified dispatcher, then default to flux.
	      var dispatcher = options.dispatcher || { type: 'flux' };

	      var appReducer = function appReducer(payload) {
	        switch (payload.type) {
	          case _constants.UserConstants.USER_LOGIN:
	            userStore.login(payload.options, payload.callback);
	            break;
	          case _constants.UserConstants.USER_LOGOUT:
	            userStore.logout(payload.callback);
	            break;
	          case _constants.UserConstants.USER_REGISTER:
	            userStore.register(payload.options, payload.callback);
	            break;
	          case _constants.UserConstants.USER_FORGOT_PASSWORD:
	            userStore.forgotPassword(payload.options, payload.callback);
	            break;
	          case _constants.UserConstants.USER_CHANGE_PASSWORD:
	            userStore.changePassword(payload.options, payload.callback);
	            break;
	          case _constants.UserConstants.USER_UPDATE_PROFILE:
	            userStore.updateProfile(payload.options.data, payload.callback);
	            break;
	          case _constants.UserConstants.USER_VERIFY_EMAIL:
	            userStore.verifyEmail(payload.options.spToken, payload.callback);
	            break;
	          case _constants.TokenConstants.TOKEN_SET:
	            userService.setToken(payload.options.type, payload.options.token);

	            if (payload.options.token !== null) {
	              tokenStore.set(payload.options.type, payload.options.token).then(function () {
	                return payload.callback && payload.callback();
	              });
	            } else {
	              tokenStore.reset(payload.options.type).then(function () {
	                return payload.callback && payload.callback();
	              });
	            }
	            break;
	          case _constants.TokenConstants.TOKEN_REFRESH:
	            userService.refreshToken(payload.options.token, payload.callback);
	            break;
	        }
	        return true;
	      };

	      switch (dispatcher.type) {
	        case 'flux':
	          dispatcher = new _dispatchers.FluxDispatcher(appReducer);
	          break;
	        case 'redux':
	          dispatcher = new _dispatchers.ReduxDispatcher(appReducer, dispatcher.store);
	          break;
	        default:
	          throw new Error('Stormpath SDK: Invalid dispatcher type ' + dispatcher.type);
	      }

	      _context2.default.setDispatcher(dispatcher);
	    }
	  }, {
	    key: 'getAccessToken',
	    value: function getAccessToken() {
	      return _context2.default.userStore.getAccessToken();
	    }
	  }]);

	  return App;
	}(_events.EventEmitter);

	exports.default = new App();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.LocalStorage = undefined;

	var _LocalStorage2 = __webpack_require__(4);

	var _LocalStorage3 = _interopRequireDefault(_LocalStorage2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.LocalStorage = _LocalStorage3.default;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LocalStorage = function () {
	  function LocalStorage(type) {
	    _classCallCheck(this, LocalStorage);

	    this.storage = type === 'local' ? localStorage : sessionStorage;
	  }

	  _createClass(LocalStorage, [{
	    key: 'get',
	    value: function get(key) {
	      try {
	        return Promise.resolve(this.storage.getItem(key));
	      } catch (err) {
	        return Promise.reject(err);
	      }
	    }
	  }, {
	    key: 'set',
	    value: function set(key, value) {
	      try {
	        return Promise.resolve(this.storage.setItem(key, value));
	      } catch (err) {
	        return Promise.reject(err);
	      }
	    }
	  }, {
	    key: 'remove',
	    value: function remove(key) {
	      try {
	        return Promise.resolve(this.storage.removeItem(key));
	      } catch (err) {
	        return Promise.reject(err);
	      }
	    }
	  }]);

	  return LocalStorage;
	}();

	exports.default = LocalStorage;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ClientApiUserService = exports.UserService = exports.RequestPool = exports.BaseService = undefined;

	var _BaseService2 = __webpack_require__(6);

	var _BaseService3 = _interopRequireDefault(_BaseService2);

	var _RequestPool2 = __webpack_require__(16);

	var _RequestPool3 = _interopRequireDefault(_RequestPool2);

	var _UserService2 = __webpack_require__(17);

	var _UserService3 = _interopRequireDefault(_UserService2);

	var _ClientApiUserService2 = __webpack_require__(18);

	var _ClientApiUserService3 = _interopRequireDefault(_ClientApiUserService2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.BaseService = _BaseService3.default;
	exports.RequestPool = _RequestPool3.default;
	exports.UserService = _UserService3.default;
	exports.ClientApiUserService = _ClientApiUserService3.default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var validHttpStatuses = [200, 201, 202, 204];

	var jsonContentEncoder = {
	  contentType: 'application/json; charset=utf-8',
	  encode: function encode(body) {
	    return JSON.stringify(body);
	  }
	};

	var formContentEncoder = {
	  contentType: 'application/x-www-form-urlencoded; charset=utf-8',
	  encode: function encode(body) {
	    return _utils2.default.serializeFormObject(body);
	  }
	};

	function getContentEncoder(contentType) {
	  var encoder = jsonContentEncoder;

	  if (contentType && contentType.indexOf('application/x-www-form-urlencoded') === 0) {
	    encoder = formContentEncoder;
	  }

	  return encoder;
	}

	function makeHttpRequest(method, uri, body, headers, callback) {
	  var request = new XMLHttpRequest();

	  request.open(method.toUpperCase(), uri, true);

	  if (headers) {
	    for (var name in headers) {
	      // Skip the Content-Type header.
	      // This will be set later if we provided a body.
	      if (name === 'Content-Type') {
	        continue;
	      }

	      var value = headers[name];

	      request.setRequestHeader(name, value);
	    }
	  }

	  // If the URI is different than the URI of the domain we're on,
	  // then set withCredentials to true so that we enable CORS.
	  if (!_utils2.default.isRelativeUri(uri) && !_utils2.default.isSameHost(uri, window.location.href)) {
	    request.withCredentials = true;
	  }

	  request.onreadystatechange = function () {
	    // 4 = Request finished and response is ready.
	    // Ignore everything else.
	    if (request.readyState !== 4) {
	      return;
	    }

	    var result = {
	      status: request.status,
	      responseJSON: null
	    };

	    var caughtError = null;

	    try {
	      if (request.responseText) {
	        result.responseJSON = JSON.parse(request.responseText);
	      }
	    } catch (e) {
	      caughtError = e;
	    }

	    if (caughtError) {
	      callback(caughtError);
	    } else {
	      callback(null, result);
	    }

	    callback(null, result);
	  };

	  if (body && (typeof body === 'undefined' ? 'undefined' : _typeof(body)) === 'object') {
	    var contentEncoder = getContentEncoder(headers['Content-Type']);
	    request.setRequestHeader('Content-Type', contentEncoder.contentType);
	    request.send(contentEncoder.encode(body));
	  } else {
	    request.send();
	  }
	}

	var BaseService = function () {
	  function BaseService(endpoints, forceAgentHeader) {
	    _classCallCheck(this, BaseService);

	    var defaultEndpoints = {
	      baseUri: null
	    };

	    this.endpoints = _utils2.default.mergeObjects(defaultEndpoints, endpoints);
	    this.forceAgentHeader = forceAgentHeader || false;
	  }

	  _createClass(BaseService, [{
	    key: '_makeRequest',
	    value: function _makeRequest(method, path, body, headers, callback) {
	      var uri = this._buildEndpoint(path);

	      headers = headers || {};

	      if (!headers.Accept) {
	        headers.Accept = 'application/json';
	      }

	      // Only set the X-Stormpath-Agent header if we're on the same domain as the requested URI.
	      // This because we want to avoid CORS requests that require you to have to whitelist the X-Stormpath-Agent header.
	      if (this.forceAgentHeader || _utils2.default.isRelativeUri(uri) || _utils2.default.isSameHost(uri, window.location.href)) {
	        headers['X-Stormpath-Agent'] = 'stormpath-sdk-react/' + ("3.0.0") + ' react/' + _react2.default.version;
	      }

	      makeHttpRequest(method, uri, body, headers, function (err, result) {
	        if (err) {
	          return callback(err);
	        }

	        var data = result.responseJSON || {};

	        if (validHttpStatuses.indexOf(result.status) !== -1) {
	          callback(null, data);
	        } else {
	          var error = new Error(data.message || data.error || 'A request to the API failed.');
	          error.type = data.error;
	          error.status = result.status;
	          callback(error);
	        }
	      });
	    }
	  }, {
	    key: '_buildEndpoint',
	    value: function _buildEndpoint(endpoint) {
	      return (this.endpoints.baseUri || '') + endpoint;
	    }
	  }]);

	  return BaseService;
	}();

	exports.default = BaseService;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _url = __webpack_require__(9);

	var _url2 = _interopRequireDefault(_url);

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var jwtExpression = /^[a-zA-Z0-9+/_=-]+\.[a-zA-Z0-9+/_=-]+\.[a-zA-Z0-9+/_=-]+$/;

	var Utils = function () {
	  function Utils() {
	    _classCallCheck(this, Utils);

	    this.nopElement = _react2.default.createElement('span', null);
	  }

	  _createClass(Utils, [{
	    key: 'uuid',
	    value: function uuid() {
	      var s4 = function s4() {
	        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	      };

	      return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
	    }
	  }, {
	    key: 'functionName',
	    value: function functionName(f) {
	      if (typeof f !== 'function') {
	        return '';
	      }

	      if (f.name) {
	        return f.name;
	      }

	      var parts = f.toString().match(/^function\s*([^\s(]+)/);

	      if (parts) {
	        return parts[1];
	      }

	      return '';
	    }
	  }, {
	    key: 'containsWord',
	    value: function containsWord(testWord, words) {
	      if (typeof testWord !== 'string') {
	        return false;
	      }

	      testWord = testWord.toLowerCase();

	      for (var i = 0; i < words.length; i++) {
	        var word = words[i].toLowerCase();
	        if (testWord.indexOf(word) > -1) {
	          return true;
	        }
	      }

	      return false;
	    }
	  }, {
	    key: 'isInputLikeComponent',
	    value: function isInputLikeComponent(element) {
	      var inputNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['input', 'field', 'text'];

	      if (typeof element.type === 'function') {
	        var hasInputLikeName = this.containsWord(this.functionName(element.type), inputNames);
	        var spInputLike = this.takeProp(element.props, 'spInputLike', 'data-spInputLike');

	        return spInputLike || hasInputLikeName;
	      }
	    }
	  }, {
	    key: 'takeProp',
	    value: function takeProp(source) {
	      for (var _len = arguments.length, fields = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        fields[_key - 1] = arguments[_key];
	      }

	      for (var i = 0; i < fields.length; i++) {
	        var fieldName = fields[i];
	        if (fieldName in source) {
	          return source[fieldName];
	        }
	      }

	      return undefined;
	    }
	  }, {
	    key: 'excludeProps',
	    value: function excludeProps(exclude, source) {
	      var result = {};

	      if (source) {
	        for (var key in source) {
	          if (exclude.indexOf(key) === -1) {
	            result[key] = source[key];
	          }
	        }
	      }

	      return result;
	    }
	  }, {
	    key: 'translateProviderIdToName',
	    value: function translateProviderIdToName(providerId) {
	      var providerNames = {
	        github: 'GitHub',
	        linkedin: 'LinkedIn'
	      };

	      var newName = providerNames[providerId];

	      if (!newName) {
	        newName = providerId[0].toUpperCase() + providerId.slice(1);
	      }

	      return newName;
	    }
	  }, {
	    key: 'encodeQueryString',
	    value: function encodeQueryString(query) {
	      var result = '';

	      for (var key in query) {
	        if (result !== '') {
	          result += '&';
	        }
	        result += key + '=' + encodeURIComponent(query[key]);
	      }

	      return result;
	    }
	  }, {
	    key: 'deepForEach',
	    value: function deepForEach(node, handler) {
	      handler(node);
	      if (node.props.children) {
	        this.forEachChild(node.props.children, handler, node);
	      }
	    }
	  }, {
	    key: 'forEachChild',
	    value: function forEachChild(children, handler, parent) {
	      var _this = this;

	      _react2.default.Children.forEach(children, function (child) {
	        handler(child, parent);

	        if (child.props && child.props.children) {
	          _this.forEachChild(child.props.children, handler, child);
	        }
	      });
	    }
	  }, {
	    key: 'buildElementTree',
	    value: function buildElementTree(element, optionsFactory, elementFactory, parent) {
	      var _this2 = this;

	      var newChildren = undefined;

	      var newElement = elementFactory && elementFactory(element, parent) || element;
	      var newOptions = optionsFactory && optionsFactory(element, parent) || {};

	      if (newElement !== this.nopElement && newElement.props && newElement.props.children) {
	        newChildren = _react2.default.Children.map(newElement.props.children, function (childElement) {
	          if (!_react2.default.isValidElement(childElement)) {
	            return elementFactory(childElement, parent);
	          }
	          return _this2.buildElementTree(childElement, optionsFactory, elementFactory, newElement);
	        });
	      }

	      return _react2.default.cloneElement(newElement, newOptions, newChildren);
	    }
	  }, {
	    key: 'mapFormField',
	    value: function mapFormField(element, mappingFn, defaultValue) {
	      if (this.isInputLikeComponent(element)) {
	        if (element.props && element.props.name) {
	          mappingFn(element.props.name, defaultValue);
	        }
	      } else if (['input', 'textarea'].indexOf(element.type) > -1) {
	        if (element.props.type !== 'submit') {
	          mappingFn(element.props.name, defaultValue);
	        }
	      }
	    }
	  }, {
	    key: 'getFormFieldMap',
	    value: function getFormFieldMap(root, handler) {
	      var fields = {};

	      var tryMapField = function tryMapField(field, name, defaultValue) {
	        if (field.props.ignore) {
	          return;
	        }

	        if (field.props.fieldName) {
	          name = elements.props.fieldName;
	        }

	        if (!(name in fields)) {
	          fields[name] = {
	            element: field,
	            defaultValue: defaultValue
	          };
	        }
	      };

	      this.forEachChild(root, function (child) {
	        if (!child.props) {
	          return;
	        }

	        handler(child, tryMapField.bind(null, child));
	      });

	      var inverseMap = {};
	      var defaultValues = {};

	      for (var key in fields) {
	        var field = fields[key];
	        var element = field.element;
	        var elementType = typeof element.type === 'function' ? this.functionName(element.type) : element.type;

	        if (!(elementType in inverseMap)) {
	          inverseMap[elementType] = {};
	        }

	        defaultValues[key] = field.defaultValue !== undefined ? field.defaultValue : element.props.value || '';

	        inverseMap[elementType][element.props.name] = {
	          fieldName: key,
	          field: element
	        };
	      }

	      return {
	        defaultValues: defaultValues,
	        inverse: inverseMap
	      };
	    }
	  }, {
	    key: 'getFieldValue',
	    value: function getFieldValue(source, name) {
	      var cursor = source;
	      var segments = name.split('.');

	      for (var i = 0; i < segments.length; i++) {
	        var key = segments[i];

	        if (!(key in cursor)) {
	          return undefined;
	        }

	        cursor = cursor[key];
	      }

	      return cursor;
	    }
	  }, {
	    key: 'setFieldValue',
	    value: function setFieldValue(source, name, value, force) {
	      var ref = source;
	      var segments = name.split('.');

	      for (var i = 0; i < segments.length; i++) {
	        var key = segments[i];

	        if (i === segments.length - 1) {
	          if (!force && key in ref) {
	            return;
	          }

	          ref[key] = value;

	          return;
	        }

	        if (!(key in ref)) {
	          ref[key] = {};
	        }

	        ref = ref[key];
	      }
	    }
	  }, {
	    key: 'makeForm',
	    value: function makeForm(source, fieldMapFn, spIfFn, spBindFn) {
	      var _this3 = this;

	      var root = _react2.default.cloneElement(_react2.default.createElement('div', null), {}, source.props.children);
	      var fieldMap = this.getFormFieldMap(root, fieldMapFn);

	      source.state.fields = source.state.fields || {};

	      for (var key in fieldMap.defaultValues) {
	        this.setFieldValue(source.state.fields, key, fieldMap.defaultValues[key]);
	      }

	      var elementFactory = function elementFactory(element, parent) {
	        if (element.props) {
	          var spIf = _this3.takeProp(element.props, 'spIf', 'data-spIf');

	          if (spIf) {
	            var test = null;
	            var inverted = false;

	            if (spIf[0] === '!') {
	              inverted = true;
	              spIf = spIf.substr(1);
	            }

	            test = spIfFn(spIf, element);

	            if (test !== null) {
	              if (inverted) {
	                test = !test;
	              }

	              if (!test) {
	                return _this3.nopElement;
	              }
	            }
	          }

	          var spBind = _this3.takeProp(element.props, 'spBind', 'data-spBind');

	          if (spBind) {
	            var newElement = spBindFn(spBind, element);
	            if (newElement !== false || newElement) {
	              element = newElement;
	            }
	          }
	        }
	        return element;
	      };

	      var optionsFactory = function optionsFactory(element, parent) {
	        var options = {};

	        if (element.props) {
	          var elementType = typeof element.type === 'function' ? element.type.name : element.type;
	          var elementAttributeName = element.props.name;

	          if (elementType in fieldMap.inverse && elementAttributeName in fieldMap.inverse[elementType]) {
	            var mappedField = fieldMap.inverse[elementType][elementAttributeName];

	            if (elementAttributeName in fieldMap.defaultValues) {
	              options.defaultValue = fieldMap.defaultValues[elementAttributeName];
	            }

	            var originalOnChange = element.props.onChange;
	            options.onChange = function (e) {
	              for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	                args[_key2 - 1] = arguments[_key2];
	              }

	              options.disabled = source.state.isFormProcessing;
	              _this3.setFieldValue(source.state.fields, mappedField.fieldName, e.target.value, true);

	              // Honor the original onChange event.
	              if (originalOnChange) {
	                originalOnChange.apply(undefined, [e].concat(args));
	              }
	            };
	          }

	          var elementAttributeType = element.props.type;

	          if ((elementType === 'input' || elementType === 'button') && elementAttributeType === 'submit') {
	            options.disabled = source.state.isFormProcessing;
	          }
	        }

	        return options;
	      };

	      return this.buildElementTree(root, optionsFactory, elementFactory);
	    }
	  }, {
	    key: 'clone',
	    value: function clone(value) {
	      return JSON.parse(JSON.stringify(value));
	    }
	  }, {
	    key: 'mergeObjects',
	    value: function mergeObjects(obj1, obj2) {
	      var obj3 = {};

	      if (obj1) {
	        for (var attrname in obj1) {
	          obj3[attrname] = obj1[attrname];
	        }
	      }

	      if (obj2) {
	        for (var attrname in obj2) {
	          obj3[attrname] = obj2[attrname];
	        }
	      }

	      return obj3;
	    }
	  }, {
	    key: 'base64Decode',
	    value: function base64Decode(value) {
	      return new Buffer(value, 'base64').toString('utf8');
	    }
	  }, {
	    key: 'parseJwt',
	    value: function parseJwt(value) {
	      if (!value) {
	        return false;
	      }

	      value = value.trim();

	      if (value.match(jwtExpression) === null) {
	        return false;
	      }

	      var _value$split = value.split('.'),
	          _value$split2 = _slicedToArray(_value$split, 3),
	          header = _value$split2[0],
	          body = _value$split2[1],
	          signature = _value$split2[2];

	      try {
	        return {
	          header: JSON.parse(this.base64Decode(header)),
	          body: JSON.parse(this.base64Decode(body)),
	          signature: signature,
	          raw: value
	        };
	      } catch (err) {
	        return false;
	      }
	    }
	  }, {
	    key: 'parseQueryString',
	    value: function parseQueryString(qstr) {
	      var query = {};
	      var a = (qstr[0] === '?' ? qstr.substr(1) : qstr).split(/&|#/);
	      for (var i = 0; i < a.length; i++) {
	        var b = a[i].split('=');
	        if (b.length === 2) {
	          query[decodeURIComponent(b[0])] = decodeURIComponent(b[1] || '');
	        }
	      }
	      return query;
	    }
	  }, {
	    key: 'isRelativeUri',
	    value: function isRelativeUri(uri) {
	      return uri && uri[0] === '/';
	    }
	  }, {
	    key: 'isSameHost',
	    value: function isSameHost(a, b) {
	      var urlA = _url2.default.parse(a);

	      if (!urlA) {
	        return false;
	      }

	      var urlB = _url2.default.parse(b);

	      if (!urlB) {
	        return false;
	      }

	      return urlA.host === urlB.host;
	    }
	  }, {
	    key: 'getEpochTime',
	    value: function getEpochTime() {
	      return Math.round(new Date().getTime() / 1000);
	    }
	  }, {
	    key: 'logWarning',
	    value: function logWarning(group, message) {
	      if (message === undefined) {
	        message = group;
	        group = undefined;
	      }

	      var result = '[Stormpath SDK]';

	      if (group) {
	        result += ' ' + group;
	      }

	      result += ': ' + message;

	      console.warn(result);
	    }
	  }, {
	    key: 'getCurrentHost',
	    value: function getCurrentHost() {
	      return window.location.protocol + '//' + window.location.host;
	    }
	  }, {
	    key: 'getEnabledGroups',
	    value: function getEnabledGroups(groups) {
	      var enabledGroups = {};

	      if (groups && groups.items) {
	        groups.items.forEach(function (item) {
	          if (item.status === 'ENABLED') {
	            var name = item.name;

	            if (name.indexOf(' ') !== -1) {
	              name = name.replace(/ /g, '_');
	            }

	            enabledGroups[name] = true;
	          }
	        });
	      }

	      return enabledGroups;
	    }
	  }, {
	    key: 'makePredicateFunction',
	    value: function makePredicateFunction(statement) {
	      return new Function('\n      var scope = arguments[0];\n\n      var maskingScope = {};\n\n      for (var key in window) {\n        maskingScope[key] = undefined;\n      }\n\n      for (var key in scope) {\n        maskingScope[key] = scope[key];\n      }\n\n      with (maskingScope) {\n        return (' + statement + ');\n      }\n    ');
	    }
	  }, {
	    key: 'groupsMatchExpression',
	    value: function groupsMatchExpression(groups, expression) {
	      if (!groups) {
	        return false;
	      }

	      var scope = JSON.parse(JSON.stringify(groups));
	      var expressionFn = this.makePredicateFunction(expression);

	      expression.match(/(\w+)/gmi).forEach(function (wordMatch) {
	        if (!(wordMatch in scope)) {
	          scope[wordMatch] = false;
	        }
	      });

	      return expressionFn(scope);
	    }
	  }, {
	    key: 'isArray',
	    value: function isArray(object) {
	      var nativeIsArray = Array.isArray;
	      var toString = Object.prototype.toString;
	      return nativeIsArray(object) || toString.call(object) === '[object Array]';
	    }
	  }, {
	    key: 'enforceRootElement',
	    value: function enforceRootElement(object, props) {
	      var newObject = undefined;

	      if (typeof object === 'string' || this.isArray(object)) {
	        if (!props) {
	          props = {};
	        }

	        if (!props.style) {
	          props.style = {};
	        }

	        props.style.display = 'inline-block';

	        newObject = _react2.default.createElement(
	          'div',
	          props,
	          object
	        );
	      } else {
	        var newProps = props;
	        var newChildren = [];

	        if (object.props) {
	          for (var key in object.props) {
	            var value = object.props[key];;
	            if (key === 'children') {
	              newChildren = value;
	            } else {
	              newProps[key] = value;
	            }
	          }
	        }

	        newObject = _react2.default.cloneElement(object, newProps, newChildren);
	      }

	      return newObject;
	    }
	  }, {
	    key: 'serializeFormObject',
	    value: function serializeFormObject(value) {
	      var items = [];

	      for (var key in value) {
	        if (value.hasOwnProperty(key)) {
	          items.push(encodeURIComponent(key) + '=' + encodeURIComponent(value[key]));
	        }
	      }

	      return items.join('&');
	    }
	  }, {
	    key: 'includesMatching',
	    value: function includesMatching(array, string) {
	      return array.findIndex(function (pattern) {
	        return new RegExp(pattern).test(string);
	      }) !== -1;
	    }
	  }]);

	  return Utils;
	}();

	exports.default = new Utils();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	var punycode = __webpack_require__(10);
	var util = __webpack_require__(12);

	exports.parse = urlParse;
	exports.resolve = urlResolve;
	exports.resolveObject = urlResolveObject;
	exports.format = urlFormat;

	exports.Url = Url;

	function Url() {
	  this.protocol = null;
	  this.slashes = null;
	  this.auth = null;
	  this.host = null;
	  this.port = null;
	  this.hostname = null;
	  this.hash = null;
	  this.search = null;
	  this.query = null;
	  this.pathname = null;
	  this.path = null;
	  this.href = null;
	}

	// Reference: RFC 3986, RFC 1808, RFC 2396

	// define these here so at least they only have to be
	// compiled once on the first module load.
	var protocolPattern = /^([a-z0-9.+-]+:)/i,
	    portPattern = /:[0-9]*$/,

	    // Special case for a simple path URL
	    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

	    // RFC 2396: characters reserved for delimiting URLs.
	    // We actually just auto-escape these.
	    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

	    // RFC 2396: characters not allowed for various reasons.
	    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

	    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
	    autoEscape = ['\''].concat(unwise),
	    // Characters that are never ever allowed in a hostname.
	    // Note that any invalid chars are also handled, but these
	    // are the ones that are *expected* to be seen, so we fast-path
	    // them.
	    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
	    hostEndingChars = ['/', '?', '#'],
	    hostnameMaxLen = 255,
	    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
	    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
	    // protocols that can allow "unsafe" and "unwise" chars.
	    unsafeProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that never have a hostname.
	    hostlessProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that always contain a // bit.
	    slashedProtocol = {
	      'http': true,
	      'https': true,
	      'ftp': true,
	      'gopher': true,
	      'file': true,
	      'http:': true,
	      'https:': true,
	      'ftp:': true,
	      'gopher:': true,
	      'file:': true
	    },
	    querystring = __webpack_require__(13);

	function urlParse(url, parseQueryString, slashesDenoteHost) {
	  if (url && util.isObject(url) && url instanceof Url) return url;

	  var u = new Url;
	  u.parse(url, parseQueryString, slashesDenoteHost);
	  return u;
	}

	Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
	  if (!util.isString(url)) {
	    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
	  }

	  // Copy chrome, IE, opera backslash-handling behavior.
	  // Back slashes before the query string get converted to forward slashes
	  // See: https://code.google.com/p/chromium/issues/detail?id=25916
	  var queryIndex = url.indexOf('?'),
	      splitter =
	          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
	      uSplit = url.split(splitter),
	      slashRegex = /\\/g;
	  uSplit[0] = uSplit[0].replace(slashRegex, '/');
	  url = uSplit.join(splitter);

	  var rest = url;

	  // trim before proceeding.
	  // This is to support parse stuff like "  http://foo.com  \n"
	  rest = rest.trim();

	  if (!slashesDenoteHost && url.split('#').length === 1) {
	    // Try fast path regexp
	    var simplePath = simplePathPattern.exec(rest);
	    if (simplePath) {
	      this.path = rest;
	      this.href = rest;
	      this.pathname = simplePath[1];
	      if (simplePath[2]) {
	        this.search = simplePath[2];
	        if (parseQueryString) {
	          this.query = querystring.parse(this.search.substr(1));
	        } else {
	          this.query = this.search.substr(1);
	        }
	      } else if (parseQueryString) {
	        this.search = '';
	        this.query = {};
	      }
	      return this;
	    }
	  }

	  var proto = protocolPattern.exec(rest);
	  if (proto) {
	    proto = proto[0];
	    var lowerProto = proto.toLowerCase();
	    this.protocol = lowerProto;
	    rest = rest.substr(proto.length);
	  }

	  // figure out if it's got a host
	  // user@server is *always* interpreted as a hostname, and url
	  // resolution will treat //foo/bar as host=foo,path=bar because that's
	  // how the browser resolves relative URLs.
	  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
	    var slashes = rest.substr(0, 2) === '//';
	    if (slashes && !(proto && hostlessProtocol[proto])) {
	      rest = rest.substr(2);
	      this.slashes = true;
	    }
	  }

	  if (!hostlessProtocol[proto] &&
	      (slashes || (proto && !slashedProtocol[proto]))) {

	    // there's a hostname.
	    // the first instance of /, ?, ;, or # ends the host.
	    //
	    // If there is an @ in the hostname, then non-host chars *are* allowed
	    // to the left of the last @ sign, unless some host-ending character
	    // comes *before* the @-sign.
	    // URLs are obnoxious.
	    //
	    // ex:
	    // http://a@b@c/ => user:a@b host:c
	    // http://a@b?@c => user:a host:c path:/?@c

	    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
	    // Review our test case against browsers more comprehensively.

	    // find the first instance of any hostEndingChars
	    var hostEnd = -1;
	    for (var i = 0; i < hostEndingChars.length; i++) {
	      var hec = rest.indexOf(hostEndingChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }

	    // at this point, either we have an explicit point where the
	    // auth portion cannot go past, or the last @ char is the decider.
	    var auth, atSign;
	    if (hostEnd === -1) {
	      // atSign can be anywhere.
	      atSign = rest.lastIndexOf('@');
	    } else {
	      // atSign must be in auth portion.
	      // http://a@b/c@d => host:b auth:a path:/c@d
	      atSign = rest.lastIndexOf('@', hostEnd);
	    }

	    // Now we have a portion which is definitely the auth.
	    // Pull that off.
	    if (atSign !== -1) {
	      auth = rest.slice(0, atSign);
	      rest = rest.slice(atSign + 1);
	      this.auth = decodeURIComponent(auth);
	    }

	    // the host is the remaining to the left of the first non-host char
	    hostEnd = -1;
	    for (var i = 0; i < nonHostChars.length; i++) {
	      var hec = rest.indexOf(nonHostChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }
	    // if we still have not hit it, then the entire thing is a host.
	    if (hostEnd === -1)
	      hostEnd = rest.length;

	    this.host = rest.slice(0, hostEnd);
	    rest = rest.slice(hostEnd);

	    // pull out port.
	    this.parseHost();

	    // we've indicated that there is a hostname,
	    // so even if it's empty, it has to be present.
	    this.hostname = this.hostname || '';

	    // if hostname begins with [ and ends with ]
	    // assume that it's an IPv6 address.
	    var ipv6Hostname = this.hostname[0] === '[' &&
	        this.hostname[this.hostname.length - 1] === ']';

	    // validate a little.
	    if (!ipv6Hostname) {
	      var hostparts = this.hostname.split(/\./);
	      for (var i = 0, l = hostparts.length; i < l; i++) {
	        var part = hostparts[i];
	        if (!part) continue;
	        if (!part.match(hostnamePartPattern)) {
	          var newpart = '';
	          for (var j = 0, k = part.length; j < k; j++) {
	            if (part.charCodeAt(j) > 127) {
	              // we replace non-ASCII char with a temporary placeholder
	              // we need this to make sure size of hostname is not
	              // broken by replacing non-ASCII by nothing
	              newpart += 'x';
	            } else {
	              newpart += part[j];
	            }
	          }
	          // we test again with ASCII char only
	          if (!newpart.match(hostnamePartPattern)) {
	            var validParts = hostparts.slice(0, i);
	            var notHost = hostparts.slice(i + 1);
	            var bit = part.match(hostnamePartStart);
	            if (bit) {
	              validParts.push(bit[1]);
	              notHost.unshift(bit[2]);
	            }
	            if (notHost.length) {
	              rest = '/' + notHost.join('.') + rest;
	            }
	            this.hostname = validParts.join('.');
	            break;
	          }
	        }
	      }
	    }

	    if (this.hostname.length > hostnameMaxLen) {
	      this.hostname = '';
	    } else {
	      // hostnames are always lower case.
	      this.hostname = this.hostname.toLowerCase();
	    }

	    if (!ipv6Hostname) {
	      // IDNA Support: Returns a punycoded representation of "domain".
	      // It only converts parts of the domain name that
	      // have non-ASCII characters, i.e. it doesn't matter if
	      // you call it with a domain that already is ASCII-only.
	      this.hostname = punycode.toASCII(this.hostname);
	    }

	    var p = this.port ? ':' + this.port : '';
	    var h = this.hostname || '';
	    this.host = h + p;
	    this.href += this.host;

	    // strip [ and ] from the hostname
	    // the host field still retains them, though
	    if (ipv6Hostname) {
	      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
	      if (rest[0] !== '/') {
	        rest = '/' + rest;
	      }
	    }
	  }

	  // now rest is set to the post-host stuff.
	  // chop off any delim chars.
	  if (!unsafeProtocol[lowerProto]) {

	    // First, make 100% sure that any "autoEscape" chars get
	    // escaped, even if encodeURIComponent doesn't think they
	    // need to be.
	    for (var i = 0, l = autoEscape.length; i < l; i++) {
	      var ae = autoEscape[i];
	      if (rest.indexOf(ae) === -1)
	        continue;
	      var esc = encodeURIComponent(ae);
	      if (esc === ae) {
	        esc = escape(ae);
	      }
	      rest = rest.split(ae).join(esc);
	    }
	  }


	  // chop off from the tail first.
	  var hash = rest.indexOf('#');
	  if (hash !== -1) {
	    // got a fragment string.
	    this.hash = rest.substr(hash);
	    rest = rest.slice(0, hash);
	  }
	  var qm = rest.indexOf('?');
	  if (qm !== -1) {
	    this.search = rest.substr(qm);
	    this.query = rest.substr(qm + 1);
	    if (parseQueryString) {
	      this.query = querystring.parse(this.query);
	    }
	    rest = rest.slice(0, qm);
	  } else if (parseQueryString) {
	    // no query string, but parseQueryString still requested
	    this.search = '';
	    this.query = {};
	  }
	  if (rest) this.pathname = rest;
	  if (slashedProtocol[lowerProto] &&
	      this.hostname && !this.pathname) {
	    this.pathname = '/';
	  }

	  //to support http.request
	  if (this.pathname || this.search) {
	    var p = this.pathname || '';
	    var s = this.search || '';
	    this.path = p + s;
	  }

	  // finally, reconstruct the href based on what has been validated.
	  this.href = this.format();
	  return this;
	};

	// format a parsed object into a url string
	function urlFormat(obj) {
	  // ensure it's an object, and not a string url.
	  // If it's an obj, this is a no-op.
	  // this way, you can call url_format() on strings
	  // to clean up potentially wonky urls.
	  if (util.isString(obj)) obj = urlParse(obj);
	  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
	  return obj.format();
	}

	Url.prototype.format = function() {
	  var auth = this.auth || '';
	  if (auth) {
	    auth = encodeURIComponent(auth);
	    auth = auth.replace(/%3A/i, ':');
	    auth += '@';
	  }

	  var protocol = this.protocol || '',
	      pathname = this.pathname || '',
	      hash = this.hash || '',
	      host = false,
	      query = '';

	  if (this.host) {
	    host = auth + this.host;
	  } else if (this.hostname) {
	    host = auth + (this.hostname.indexOf(':') === -1 ?
	        this.hostname :
	        '[' + this.hostname + ']');
	    if (this.port) {
	      host += ':' + this.port;
	    }
	  }

	  if (this.query &&
	      util.isObject(this.query) &&
	      Object.keys(this.query).length) {
	    query = querystring.stringify(this.query);
	  }

	  var search = this.search || (query && ('?' + query)) || '';

	  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

	  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
	  // unless they had them to begin with.
	  if (this.slashes ||
	      (!protocol || slashedProtocol[protocol]) && host !== false) {
	    host = '//' + (host || '');
	    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
	  } else if (!host) {
	    host = '';
	  }

	  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
	  if (search && search.charAt(0) !== '?') search = '?' + search;

	  pathname = pathname.replace(/[?#]/g, function(match) {
	    return encodeURIComponent(match);
	  });
	  search = search.replace('#', '%23');

	  return protocol + host + pathname + search + hash;
	};

	function urlResolve(source, relative) {
	  return urlParse(source, false, true).resolve(relative);
	}

	Url.prototype.resolve = function(relative) {
	  return this.resolveObject(urlParse(relative, false, true)).format();
	};

	function urlResolveObject(source, relative) {
	  if (!source) return relative;
	  return urlParse(source, false, true).resolveObject(relative);
	}

	Url.prototype.resolveObject = function(relative) {
	  if (util.isString(relative)) {
	    var rel = new Url();
	    rel.parse(relative, false, true);
	    relative = rel;
	  }

	  var result = new Url();
	  var tkeys = Object.keys(this);
	  for (var tk = 0; tk < tkeys.length; tk++) {
	    var tkey = tkeys[tk];
	    result[tkey] = this[tkey];
	  }

	  // hash is always overridden, no matter what.
	  // even href="" will remove it.
	  result.hash = relative.hash;

	  // if the relative url is empty, then there's nothing left to do here.
	  if (relative.href === '') {
	    result.href = result.format();
	    return result;
	  }

	  // hrefs like //foo/bar always cut to the protocol.
	  if (relative.slashes && !relative.protocol) {
	    // take everything except the protocol from relative
	    var rkeys = Object.keys(relative);
	    for (var rk = 0; rk < rkeys.length; rk++) {
	      var rkey = rkeys[rk];
	      if (rkey !== 'protocol')
	        result[rkey] = relative[rkey];
	    }

	    //urlParse appends trailing / to urls like http://www.example.com
	    if (slashedProtocol[result.protocol] &&
	        result.hostname && !result.pathname) {
	      result.path = result.pathname = '/';
	    }

	    result.href = result.format();
	    return result;
	  }

	  if (relative.protocol && relative.protocol !== result.protocol) {
	    // if it's a known url protocol, then changing
	    // the protocol does weird things
	    // first, if it's not file:, then we MUST have a host,
	    // and if there was a path
	    // to begin with, then we MUST have a path.
	    // if it is file:, then the host is dropped,
	    // because that's known to be hostless.
	    // anything else is assumed to be absolute.
	    if (!slashedProtocol[relative.protocol]) {
	      var keys = Object.keys(relative);
	      for (var v = 0; v < keys.length; v++) {
	        var k = keys[v];
	        result[k] = relative[k];
	      }
	      result.href = result.format();
	      return result;
	    }

	    result.protocol = relative.protocol;
	    if (!relative.host && !hostlessProtocol[relative.protocol]) {
	      var relPath = (relative.pathname || '').split('/');
	      while (relPath.length && !(relative.host = relPath.shift()));
	      if (!relative.host) relative.host = '';
	      if (!relative.hostname) relative.hostname = '';
	      if (relPath[0] !== '') relPath.unshift('');
	      if (relPath.length < 2) relPath.unshift('');
	      result.pathname = relPath.join('/');
	    } else {
	      result.pathname = relative.pathname;
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    result.host = relative.host || '';
	    result.auth = relative.auth;
	    result.hostname = relative.hostname || relative.host;
	    result.port = relative.port;
	    // to support http.request
	    if (result.pathname || result.search) {
	      var p = result.pathname || '';
	      var s = result.search || '';
	      result.path = p + s;
	    }
	    result.slashes = result.slashes || relative.slashes;
	    result.href = result.format();
	    return result;
	  }

	  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
	      isRelAbs = (
	          relative.host ||
	          relative.pathname && relative.pathname.charAt(0) === '/'
	      ),
	      mustEndAbs = (isRelAbs || isSourceAbs ||
	                    (result.host && relative.pathname)),
	      removeAllDots = mustEndAbs,
	      srcPath = result.pathname && result.pathname.split('/') || [],
	      relPath = relative.pathname && relative.pathname.split('/') || [],
	      psychotic = result.protocol && !slashedProtocol[result.protocol];

	  // if the url is a non-slashed url, then relative
	  // links like ../.. should be able
	  // to crawl up to the hostname, as well.  This is strange.
	  // result.protocol has already been set by now.
	  // Later on, put the first path part into the host field.
	  if (psychotic) {
	    result.hostname = '';
	    result.port = null;
	    if (result.host) {
	      if (srcPath[0] === '') srcPath[0] = result.host;
	      else srcPath.unshift(result.host);
	    }
	    result.host = '';
	    if (relative.protocol) {
	      relative.hostname = null;
	      relative.port = null;
	      if (relative.host) {
	        if (relPath[0] === '') relPath[0] = relative.host;
	        else relPath.unshift(relative.host);
	      }
	      relative.host = null;
	    }
	    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
	  }

	  if (isRelAbs) {
	    // it's absolute.
	    result.host = (relative.host || relative.host === '') ?
	                  relative.host : result.host;
	    result.hostname = (relative.hostname || relative.hostname === '') ?
	                      relative.hostname : result.hostname;
	    result.search = relative.search;
	    result.query = relative.query;
	    srcPath = relPath;
	    // fall through to the dot-handling below.
	  } else if (relPath.length) {
	    // it's relative
	    // throw away the existing file, and take the new path instead.
	    if (!srcPath) srcPath = [];
	    srcPath.pop();
	    srcPath = srcPath.concat(relPath);
	    result.search = relative.search;
	    result.query = relative.query;
	  } else if (!util.isNullOrUndefined(relative.search)) {
	    // just pull out the search.
	    // like href='?foo'.
	    // Put this after the other two cases because it simplifies the booleans
	    if (psychotic) {
	      result.hostname = result.host = srcPath.shift();
	      //occationaly the auth can get stuck only in host
	      //this especially happens in cases like
	      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	      var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                       result.host.split('@') : false;
	      if (authInHost) {
	        result.auth = authInHost.shift();
	        result.host = result.hostname = authInHost.shift();
	      }
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    //to support http.request
	    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
	      result.path = (result.pathname ? result.pathname : '') +
	                    (result.search ? result.search : '');
	    }
	    result.href = result.format();
	    return result;
	  }

	  if (!srcPath.length) {
	    // no path at all.  easy.
	    // we've already handled the other stuff above.
	    result.pathname = null;
	    //to support http.request
	    if (result.search) {
	      result.path = '/' + result.search;
	    } else {
	      result.path = null;
	    }
	    result.href = result.format();
	    return result;
	  }

	  // if a url ENDs in . or .., then it must get a trailing slash.
	  // however, if it ends in anything else non-slashy,
	  // then it must NOT get a trailing slash.
	  var last = srcPath.slice(-1)[0];
	  var hasTrailingSlash = (
	      (result.host || relative.host || srcPath.length > 1) &&
	      (last === '.' || last === '..') || last === '');

	  // strip single dots, resolve double dots to parent dir
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = srcPath.length; i >= 0; i--) {
	    last = srcPath[i];
	    if (last === '.') {
	      srcPath.splice(i, 1);
	    } else if (last === '..') {
	      srcPath.splice(i, 1);
	      up++;
	    } else if (up) {
	      srcPath.splice(i, 1);
	      up--;
	    }
	  }

	  // if the path is allowed to go above the root, restore leading ..s
	  if (!mustEndAbs && !removeAllDots) {
	    for (; up--; up) {
	      srcPath.unshift('..');
	    }
	  }

	  if (mustEndAbs && srcPath[0] !== '' &&
	      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
	    srcPath.unshift('');
	  }

	  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
	    srcPath.push('');
	  }

	  var isAbsolute = srcPath[0] === '' ||
	      (srcPath[0] && srcPath[0].charAt(0) === '/');

	  // put the host back
	  if (psychotic) {
	    result.hostname = result.host = isAbsolute ? '' :
	                                    srcPath.length ? srcPath.shift() : '';
	    //occationaly the auth can get stuck only in host
	    //this especially happens in cases like
	    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	    var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                     result.host.split('@') : false;
	    if (authInHost) {
	      result.auth = authInHost.shift();
	      result.host = result.hostname = authInHost.shift();
	    }
	  }

	  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

	  if (mustEndAbs && !isAbsolute) {
	    srcPath.unshift('');
	  }

	  if (!srcPath.length) {
	    result.pathname = null;
	    result.path = null;
	  } else {
	    result.pathname = srcPath.join('/');
	  }

	  //to support request.http
	  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
	    result.path = (result.pathname ? result.pathname : '') +
	                  (result.search ? result.search : '');
	  }
	  result.auth = relative.auth || result.auth;
	  result.slashes = result.slashes || relative.slashes;
	  result.href = result.format();
	  return result;
	};

	Url.prototype.parseHost = function() {
	  var host = this.host;
	  var port = portPattern.exec(host);
	  if (port) {
	    port = port[0];
	    if (port !== ':') {
	      this.port = port.substr(1);
	    }
	    host = host.substr(0, host.length - port.length);
	  }
	  if (host) this.hostname = host;
	};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! https://mths.be/punycode v1.3.2 by @mathias */
	;(function(root) {

		/** Detect free variables */
		var freeExports = typeof exports == 'object' && exports &&
			!exports.nodeType && exports;
		var freeModule = typeof module == 'object' && module &&
			!module.nodeType && module;
		var freeGlobal = typeof global == 'object' && global;
		if (
			freeGlobal.global === freeGlobal ||
			freeGlobal.window === freeGlobal ||
			freeGlobal.self === freeGlobal
		) {
			root = freeGlobal;
		}

		/**
		 * The `punycode` object.
		 * @name punycode
		 * @type Object
		 */
		var punycode,

		/** Highest positive signed 32-bit float value */
		maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

		/** Bootstring parameters */
		base = 36,
		tMin = 1,
		tMax = 26,
		skew = 38,
		damp = 700,
		initialBias = 72,
		initialN = 128, // 0x80
		delimiter = '-', // '\x2D'

		/** Regular expressions */
		regexPunycode = /^xn--/,
		regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
		regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

		/** Error messages */
		errors = {
			'overflow': 'Overflow: input needs wider integers to process',
			'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
			'invalid-input': 'Invalid input'
		},

		/** Convenience shortcuts */
		baseMinusTMin = base - tMin,
		floor = Math.floor,
		stringFromCharCode = String.fromCharCode,

		/** Temporary variable */
		key;

		/*--------------------------------------------------------------------------*/

		/**
		 * A generic error utility function.
		 * @private
		 * @param {String} type The error type.
		 * @returns {Error} Throws a `RangeError` with the applicable error message.
		 */
		function error(type) {
			throw RangeError(errors[type]);
		}

		/**
		 * A generic `Array#map` utility function.
		 * @private
		 * @param {Array} array The array to iterate over.
		 * @param {Function} callback The function that gets called for every array
		 * item.
		 * @returns {Array} A new array of values returned by the callback function.
		 */
		function map(array, fn) {
			var length = array.length;
			var result = [];
			while (length--) {
				result[length] = fn(array[length]);
			}
			return result;
		}

		/**
		 * A simple `Array#map`-like wrapper to work with domain name strings or email
		 * addresses.
		 * @private
		 * @param {String} domain The domain name or email address.
		 * @param {Function} callback The function that gets called for every
		 * character.
		 * @returns {Array} A new string of characters returned by the callback
		 * function.
		 */
		function mapDomain(string, fn) {
			var parts = string.split('@');
			var result = '';
			if (parts.length > 1) {
				// In email addresses, only the domain name should be punycoded. Leave
				// the local part (i.e. everything up to `@`) intact.
				result = parts[0] + '@';
				string = parts[1];
			}
			// Avoid `split(regex)` for IE8 compatibility. See #17.
			string = string.replace(regexSeparators, '\x2E');
			var labels = string.split('.');
			var encoded = map(labels, fn).join('.');
			return result + encoded;
		}

		/**
		 * Creates an array containing the numeric code points of each Unicode
		 * character in the string. While JavaScript uses UCS-2 internally,
		 * this function will convert a pair of surrogate halves (each of which
		 * UCS-2 exposes as separate characters) into a single code point,
		 * matching UTF-16.
		 * @see `punycode.ucs2.encode`
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode.ucs2
		 * @name decode
		 * @param {String} string The Unicode input string (UCS-2).
		 * @returns {Array} The new array of code points.
		 */
		function ucs2decode(string) {
			var output = [],
			    counter = 0,
			    length = string.length,
			    value,
			    extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) { // low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}

		/**
		 * Creates a string based on an array of numeric code points.
		 * @see `punycode.ucs2.decode`
		 * @memberOf punycode.ucs2
		 * @name encode
		 * @param {Array} codePoints The array of numeric code points.
		 * @returns {String} The new Unicode string (UCS-2).
		 */
		function ucs2encode(array) {
			return map(array, function(value) {
				var output = '';
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
				return output;
			}).join('');
		}

		/**
		 * Converts a basic code point into a digit/integer.
		 * @see `digitToBasic()`
		 * @private
		 * @param {Number} codePoint The basic numeric code point value.
		 * @returns {Number} The numeric value of a basic code point (for use in
		 * representing integers) in the range `0` to `base - 1`, or `base` if
		 * the code point does not represent a value.
		 */
		function basicToDigit(codePoint) {
			if (codePoint - 48 < 10) {
				return codePoint - 22;
			}
			if (codePoint - 65 < 26) {
				return codePoint - 65;
			}
			if (codePoint - 97 < 26) {
				return codePoint - 97;
			}
			return base;
		}

		/**
		 * Converts a digit/integer into a basic code point.
		 * @see `basicToDigit()`
		 * @private
		 * @param {Number} digit The numeric value of a basic code point.
		 * @returns {Number} The basic code point whose value (when used for
		 * representing integers) is `digit`, which needs to be in the range
		 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
		 * used; else, the lowercase form is used. The behavior is undefined
		 * if `flag` is non-zero and `digit` has no uppercase form.
		 */
		function digitToBasic(digit, flag) {
			//  0..25 map to ASCII a..z or A..Z
			// 26..35 map to ASCII 0..9
			return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
		}

		/**
		 * Bias adaptation function as per section 3.4 of RFC 3492.
		 * http://tools.ietf.org/html/rfc3492#section-3.4
		 * @private
		 */
		function adapt(delta, numPoints, firstTime) {
			var k = 0;
			delta = firstTime ? floor(delta / damp) : delta >> 1;
			delta += floor(delta / numPoints);
			for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
				delta = floor(delta / baseMinusTMin);
			}
			return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
		}

		/**
		 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
		 * symbols.
		 * @memberOf punycode
		 * @param {String} input The Punycode string of ASCII-only symbols.
		 * @returns {String} The resulting string of Unicode symbols.
		 */
		function decode(input) {
			// Don't use UCS-2
			var output = [],
			    inputLength = input.length,
			    out,
			    i = 0,
			    n = initialN,
			    bias = initialBias,
			    basic,
			    j,
			    index,
			    oldi,
			    w,
			    k,
			    digit,
			    t,
			    /** Cached calculation results */
			    baseMinusT;

			// Handle the basic code points: let `basic` be the number of input code
			// points before the last delimiter, or `0` if there is none, then copy
			// the first basic code points to the output.

			basic = input.lastIndexOf(delimiter);
			if (basic < 0) {
				basic = 0;
			}

			for (j = 0; j < basic; ++j) {
				// if it's not a basic code point
				if (input.charCodeAt(j) >= 0x80) {
					error('not-basic');
				}
				output.push(input.charCodeAt(j));
			}

			// Main decoding loop: start just after the last delimiter if any basic code
			// points were copied; start at the beginning otherwise.

			for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

				// `index` is the index of the next character to be consumed.
				// Decode a generalized variable-length integer into `delta`,
				// which gets added to `i`. The overflow checking is easier
				// if we increase `i` as we go, then subtract off its starting
				// value at the end to obtain `delta`.
				for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

					if (index >= inputLength) {
						error('invalid-input');
					}

					digit = basicToDigit(input.charCodeAt(index++));

					if (digit >= base || digit > floor((maxInt - i) / w)) {
						error('overflow');
					}

					i += digit * w;
					t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

					if (digit < t) {
						break;
					}

					baseMinusT = base - t;
					if (w > floor(maxInt / baseMinusT)) {
						error('overflow');
					}

					w *= baseMinusT;

				}

				out = output.length + 1;
				bias = adapt(i - oldi, out, oldi == 0);

				// `i` was supposed to wrap around from `out` to `0`,
				// incrementing `n` each time, so we'll fix that now:
				if (floor(i / out) > maxInt - n) {
					error('overflow');
				}

				n += floor(i / out);
				i %= out;

				// Insert `n` at position `i` of the output
				output.splice(i++, 0, n);

			}

			return ucs2encode(output);
		}

		/**
		 * Converts a string of Unicode symbols (e.g. a domain name label) to a
		 * Punycode string of ASCII-only symbols.
		 * @memberOf punycode
		 * @param {String} input The string of Unicode symbols.
		 * @returns {String} The resulting Punycode string of ASCII-only symbols.
		 */
		function encode(input) {
			var n,
			    delta,
			    handledCPCount,
			    basicLength,
			    bias,
			    j,
			    m,
			    q,
			    k,
			    t,
			    currentValue,
			    output = [],
			    /** `inputLength` will hold the number of code points in `input`. */
			    inputLength,
			    /** Cached calculation results */
			    handledCPCountPlusOne,
			    baseMinusT,
			    qMinusT;

			// Convert the input in UCS-2 to Unicode
			input = ucs2decode(input);

			// Cache the length
			inputLength = input.length;

			// Initialize the state
			n = initialN;
			delta = 0;
			bias = initialBias;

			// Handle the basic code points
			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue < 0x80) {
					output.push(stringFromCharCode(currentValue));
				}
			}

			handledCPCount = basicLength = output.length;

			// `handledCPCount` is the number of code points that have been handled;
			// `basicLength` is the number of basic code points.

			// Finish the basic string - if it is not empty - with a delimiter
			if (basicLength) {
				output.push(delimiter);
			}

			// Main encoding loop:
			while (handledCPCount < inputLength) {

				// All non-basic code points < n have been handled already. Find the next
				// larger one:
				for (m = maxInt, j = 0; j < inputLength; ++j) {
					currentValue = input[j];
					if (currentValue >= n && currentValue < m) {
						m = currentValue;
					}
				}

				// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
				// but guard against overflow
				handledCPCountPlusOne = handledCPCount + 1;
				if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
					error('overflow');
				}

				delta += (m - n) * handledCPCountPlusOne;
				n = m;

				for (j = 0; j < inputLength; ++j) {
					currentValue = input[j];

					if (currentValue < n && ++delta > maxInt) {
						error('overflow');
					}

					if (currentValue == n) {
						// Represent delta as a generalized variable-length integer
						for (q = delta, k = base; /* no condition */; k += base) {
							t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
							if (q < t) {
								break;
							}
							qMinusT = q - t;
							baseMinusT = base - t;
							output.push(
								stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
							);
							q = floor(qMinusT / baseMinusT);
						}

						output.push(stringFromCharCode(digitToBasic(q, 0)));
						bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
						delta = 0;
						++handledCPCount;
					}
				}

				++delta;
				++n;

			}
			return output.join('');
		}

		/**
		 * Converts a Punycode string representing a domain name or an email address
		 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
		 * it doesn't matter if you call it on a string that has already been
		 * converted to Unicode.
		 * @memberOf punycode
		 * @param {String} input The Punycoded domain name or email address to
		 * convert to Unicode.
		 * @returns {String} The Unicode representation of the given Punycode
		 * string.
		 */
		function toUnicode(input) {
			return mapDomain(input, function(string) {
				return regexPunycode.test(string)
					? decode(string.slice(4).toLowerCase())
					: string;
			});
		}

		/**
		 * Converts a Unicode string representing a domain name or an email address to
		 * Punycode. Only the non-ASCII parts of the domain name will be converted,
		 * i.e. it doesn't matter if you call it with a domain that's already in
		 * ASCII.
		 * @memberOf punycode
		 * @param {String} input The domain name or email address to convert, as a
		 * Unicode string.
		 * @returns {String} The Punycode representation of the given domain name or
		 * email address.
		 */
		function toASCII(input) {
			return mapDomain(input, function(string) {
				return regexNonASCII.test(string)
					? 'xn--' + encode(string)
					: string;
			});
		}

		/*--------------------------------------------------------------------------*/

		/** Define the public API */
		punycode = {
			/**
			 * A string representing the current Punycode.js version number.
			 * @memberOf punycode
			 * @type String
			 */
			'version': '1.3.2',
			/**
			 * An object of methods to convert from JavaScript's internal character
			 * representation (UCS-2) to Unicode code points, and back.
			 * @see <https://mathiasbynens.be/notes/javascript-encoding>
			 * @memberOf punycode
			 * @type Object
			 */
			'ucs2': {
				'decode': ucs2decode,
				'encode': ucs2encode
			},
			'decode': decode,
			'encode': encode,
			'toASCII': toASCII,
			'toUnicode': toUnicode
		};

		/** Expose `punycode` */
		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (
			true
		) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return punycode;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (freeExports && freeModule) {
			if (module.exports == freeExports) { // in Node.js or RingoJS v0.8.0+
				freeModule.exports = punycode;
			} else { // in Narwhal or RingoJS v0.7.0-
				for (key in punycode) {
					punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.punycode = punycode;
		}

	}(this));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module), (function() { return this; }())))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = {
	  isString: function(arg) {
	    return typeof(arg) === 'string';
	  },
	  isObject: function(arg) {
	    return typeof(arg) === 'object' && arg !== null;
	  },
	  isNull: function(arg) {
	    return arg === null;
	  },
	  isNullOrUndefined: function(arg) {
	    return arg == null;
	  }
	};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.decode = exports.parse = __webpack_require__(14);
	exports.encode = exports.stringify = __webpack_require__(15);


/***/ }),
/* 14 */
/***/ (function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	module.exports = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};

	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }

	  var regexp = /\+/g;
	  qs = qs.split(sep);

	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }

	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }

	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;

	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }

	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);

	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }

	  return obj;
	};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;

	    case 'boolean':
	      return v ? 'true' : 'false';

	    case 'number':
	      return isFinite(v) ? v : '';

	    default:
	      return '';
	  }
	};

	module.exports = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }

	  if (typeof obj === 'object') {
	    return Object.keys(obj).map(function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);

	  }

	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var RequestPool = function () {
	  function RequestPool() {
	    _classCallCheck(this, RequestPool);

	    this.waiting = [];
	  }

	  _createClass(RequestPool, [{
	    key: "request",
	    value: function request(resolver, callback) {
	      var waiting = this.waiting;

	      waiting.push(callback);

	      if (waiting.length === 1) {
	        resolver(function () {
	          while (waiting.length) {
	            waiting.shift().apply(null, arguments);
	          }
	        });
	      }

	      return false;
	    }
	  }]);

	  return RequestPool;
	}();

	exports.default = RequestPool;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _BaseService2 = __webpack_require__(6);

	var _BaseService3 = _interopRequireDefault(_BaseService2);

	var _RequestPool = __webpack_require__(16);

	var _RequestPool2 = _interopRequireDefault(_RequestPool);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UserService = function (_BaseService) {
	  _inherits(UserService, _BaseService);

	  function UserService(endpoints, forceAgentHeader) {
	    _classCallCheck(this, UserService);

	    var defaultEndpoints = {
	      me: '/me',
	      login: '/login',
	      register: '/register',
	      verifyEmail: '/verify',
	      forgotPassword: '/forgot',
	      changePassword: '/change',
	      logout: '/logout'
	    };

	    var _this = _possibleConstructorReturn(this, (UserService.__proto__ || Object.getPrototypeOf(UserService)).call(this, _utils2.default.mergeObjects(defaultEndpoints, endpoints), forceAgentHeader));

	    _this.meRequestPool = new _RequestPool2.default();
	    return _this;
	  }

	  _createClass(UserService, [{
	    key: '_unwrapAccountResult',
	    value: function _unwrapAccountResult(callback) {
	      return function (err, result) {
	        if (err) {
	          return callback(err);
	        }

	        callback(null, result.account || result || {});
	      };
	    }
	  }, {
	    key: 'me',
	    value: function me(callback) {
	      var _this2 = this;

	      this.meRequestPool.request(function (resultCallback) {
	        _this2._makeRequest('get', _this2.endpoints.me, null, null, _this2._unwrapAccountResult(resultCallback));
	      }, callback);
	    }
	  }, {
	    key: 'updateProfile',
	    value: function updateProfile(data, callback) {
	      this._makeRequest('post', this.endpoints.me, data, null, callback);
	    }
	  }, {
	    key: 'getLoginViewData',
	    value: function getLoginViewData(callback) {
	      this._makeRequest('get', this.endpoints.login, null, null, callback);
	    }
	  }, {
	    key: 'login',
	    value: function login(options, callback) {
	      this._makeRequest('post', this.endpoints.login, options, null, this._unwrapAccountResult(callback));
	    }
	  }, {
	    key: 'register',
	    value: function register(options, callback) {
	      this._makeRequest('post', this.endpoints.register, options, null, this._unwrapAccountResult(callback));
	    }
	  }, {
	    key: 'getRegisterViewData',
	    value: function getRegisterViewData(callback) {
	      this._makeRequest('get', this.endpoints.register, null, null, callback);
	    }
	  }, {
	    key: 'verifyEmail',
	    value: function verifyEmail(spToken, callback) {
	      this._makeRequest('get', this.endpoints.verifyEmail + '?sptoken=' + encodeURIComponent(spToken), null, null, callback);
	    }
	  }, {
	    key: 'forgotPassword',
	    value: function forgotPassword(options, callback) {
	      this._makeRequest('post', this.endpoints.forgotPassword, options, null, callback);
	    }
	  }, {
	    key: 'changePassword',
	    value: function changePassword(options, callback) {
	      this._makeRequest('post', this.endpoints.changePassword, options, null, callback);
	    }
	  }, {
	    key: 'logout',
	    value: function logout(callback) {
	      this._makeRequest('post', this.endpoints.logout, null, null, callback);
	    }
	  }]);

	  return UserService;
	}(_BaseService3.default);

	exports.default = UserService;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _UserService2 = __webpack_require__(17);

	var _UserService3 = _interopRequireDefault(_UserService2);

	var _TokenActions = __webpack_require__(19);

	var _TokenActions2 = _interopRequireDefault(_TokenActions);

	var _context = __webpack_require__(20);

	var _context2 = _interopRequireDefault(_context);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ClientApiUserService = function (_UserService) {
	  _inherits(ClientApiUserService, _UserService);

	  function ClientApiUserService(endpoints) {
	    _classCallCheck(this, ClientApiUserService);

	    var defaultEndpoints = {
	      oauthToken: '/oauth/token',
	      oauthRevoke: '/oauth/revoke'
	    };

	    var _this = _possibleConstructorReturn(this, (ClientApiUserService.__proto__ || Object.getPrototypeOf(ClientApiUserService)).call(this, _utils2.default.mergeObjects(defaultEndpoints, endpoints || {}), true));

	    _this.tokens = {
	      access_token: null,
	      refresh_token: null
	    };
	    return _this;
	  }

	  _createClass(ClientApiUserService, [{
	    key: 'setToken',
	    value: function setToken(type, token) {
	      this.tokens[type] = Promise.resolve(token);
	    }
	  }, {
	    key: 'getToken',
	    value: function getToken(type) {
	      return this.tokens[type] || Promise.resolve();
	    }
	  }, {
	    key: '_setFormContentTypeHeader',
	    value: function _setFormContentTypeHeader(headers) {
	      headers['Content-Type'] = 'application/x-www-form-urlencoded';
	    }
	  }, {
	    key: '_setAuthorizationHeader',
	    value: function _setAuthorizationHeader(headers) {
	      return this.getToken('access_token').then(function (accessToken) {
	        if (accessToken) {
	          headers['Authorization'] = 'Bearer ' + accessToken;
	        }
	      });
	    }
	  }, {
	    key: '_makeFormRequest',
	    value: function _makeFormRequest(method, path, body, headers, callback) {
	      headers = headers || {};

	      this._setFormContentTypeHeader(headers);

	      return this._makeRequest(method, path, body, headers, callback);
	    }
	  }, {
	    key: '_makeRequest',
	    value: function _makeRequest(method, path, body, headers, callback) {
	      var _this2 = this;

	      headers = headers || {};

	      var waitFor = Promise.resolve();

	      if (path === '/me') {
	        waitFor = this._setAuthorizationHeader(headers);
	      }

	      waitFor.then(function () {
	        _get(ClientApiUserService.prototype.__proto__ || Object.getPrototypeOf(ClientApiUserService.prototype), '_makeRequest', _this2).call(_this2, method, path, body, headers, callback);
	      });
	    }
	  }, {
	    key: 'me',
	    value: function me(callback) {
	      var _this3 = this;

	      this.getToken('access_token').then(function (accessToken) {
	        if (!accessToken) {
	          return callback(new Error('The \'me\' endpoint requires an access token to be present.'));
	        }

	        _get(ClientApiUserService.prototype.__proto__ || Object.getPrototypeOf(ClientApiUserService.prototype), 'me', _this3).call(_this3, function (err, result) {
	          if (err) {
	            if (err.type === 'invalid_client' && err.status === 400) {
	              _TokenActions2.default.set('access_token', null);
	              _TokenActions2.default.set('refresh_token', null);
	            }
	            return callback(err);
	          }

	          callback(null, result);
	        });
	      });
	    }
	  }, {
	    key: '_wrapOAuthResponse',
	    value: function _wrapOAuthResponse(callback) {
	      return function (err, result) {
	        if (err) {
	          return callback(err);
	        }

	        if (result.error) {
	          var newError = new Error(result.message);
	          newError.type = result.error;
	          return callback(newError);
	        }

	        callback(null, result);
	      };
	    }
	  }, {
	    key: 'authenticate',
	    value: function authenticate(oauthGrantBody, callback) {
	      this._makeFormRequest('post', this.endpoints.oauthToken, oauthGrantBody, null, function (err, result) {
	        if (err) {
	          return callback(err);
	        }

	        _TokenActions2.default.set('access_token', result.access_token, function () {
	          _TokenActions2.default.set('refresh_token', result.refresh_token, function () {
	            callback(null, result);
	          });
	        });
	      });
	    }
	  }, {
	    key: 'login',
	    value: function login(options, callback) {
	      var oauthGrantBody = {
	        grant_type: 'password',
	        username: options.login,
	        password: options.password
	      };

	      this.authenticate(oauthGrantBody, callback);
	    }
	  }, {
	    key: 'refreshToken',
	    value: function refreshToken(token, callback) {
	      var newOptions = {
	        grant_type: 'refresh_token',
	        refresh_token: token
	      };

	      this._makeFormRequest('post', this.endpoints.oauthToken, newOptions, null, function (err, result) {
	        if (err) {
	          return callback(err);
	        }

	        callback(null, result);
	      });
	    }
	  }, {
	    key: 'logout',
	    value: function logout(callback) {
	      var _this4 = this;

	      this.getToken('refresh_token').then(function (token) {
	        var options = {
	          token: token,
	          token_type_hint: 'refresh_token'
	        };

	        _this4._makeFormRequest('post', _this4.endpoints.oauthRevoke, options, null, function (err, result) {
	          if (err) {
	            return callback(err);
	          }

	          _TokenActions2.default.set('access_token', null);
	          _TokenActions2.default.set('refresh_token', null);

	          callback(null, result);
	        });
	      });
	    }
	  }]);

	  return ClientApiUserService;
	}(_UserService3.default);

	exports.default = ClientApiUserService;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _context = __webpack_require__(20);

	var _context2 = _interopRequireDefault(_context);

	var _TokenConstants = __webpack_require__(23);

	var _TokenConstants2 = _interopRequireDefault(_TokenConstants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function dispatch(event) {
	  setTimeout(function () {
	    _context2.default.getDispatcher().dispatch(event);
	  }, 0);
	}

	var TokenActions = function () {
	  function TokenActions() {
	    _classCallCheck(this, TokenActions);
	  }

	  _createClass(TokenActions, [{
	    key: 'set',
	    value: function set(type, token, callback) {
	      dispatch({
	        type: _TokenConstants2.default.TOKEN_SET,
	        options: {
	          type: type,
	          token: token
	        },
	        callback: callback
	      });
	    }
	  }, {
	    key: 'refresh',
	    value: function refresh(token, callback) {
	      dispatch({
	        type: _TokenConstants2.default.TOKEN_REFRESH,
	        options: {
	          token: token
	        },
	        callback: callback
	      });
	    }
	  }]);

	  return TokenActions;
	}();

	exports.default = new TokenActions();

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _SessionStore = __webpack_require__(21);

	var _SessionStore2 = _interopRequireDefault(_SessionStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Context = function () {
	  function Context() {
	    _classCallCheck(this, Context);

	    this.router = null;
	    this.dispatcher = null;
	    this.tokenStore = null;
	    this.sessionStore = null;
	    this.userStore = null;
	  }

	  _createClass(Context, [{
	    key: 'setRouter',
	    value: function setRouter(router) {
	      this.router = router;
	    }
	  }, {
	    key: 'getRouter',
	    value: function getRouter() {
	      return this.router;
	    }
	  }, {
	    key: 'setDispatcher',
	    value: function setDispatcher(dispatcher) {
	      this.dispatcher = dispatcher;
	    }
	  }, {
	    key: 'getDispatcher',
	    value: function getDispatcher() {
	      return this.dispatcher;
	    }
	  }, {
	    key: 'setTokenStore',
	    value: function setTokenStore(tokenStore) {
	      this.tokenStore = tokenStore;
	    }
	  }, {
	    key: 'setSessionStore',
	    value: function setSessionStore(sessionStore) {
	      this.sessionStore = sessionStore;
	    }
	  }, {
	    key: 'getSessionStore',
	    value: function getSessionStore() {
	      return this.sessionStore;
	    }
	  }, {
	    key: 'setUserStore',
	    value: function setUserStore(userStore) {
	      this.userStore = userStore;
	    }
	  }, {
	    key: 'getUserStore',
	    value: function getUserStore() {
	      return this.userStore;
	    }
	  }]);

	  return Context;
	}();

	exports.default = new Context();

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _BaseStore2 = __webpack_require__(22);

	var _BaseStore3 = _interopRequireDefault(_BaseStore2);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SessionStore = function (_BaseStore) {
	  _inherits(SessionStore, _BaseStore);

	  function SessionStore() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, SessionStore);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SessionStore.__proto__ || Object.getPrototypeOf(SessionStore)).call.apply(_ref, [this].concat(args))), _this), _this.session = undefined, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(SessionStore, [{
	    key: 'get',
	    value: function get() {
	      return this.session;
	    }
	  }, {
	    key: 'set',
	    value: function set(session) {
	      if (session && session.groups && session.groups.href) {
	        session.groups = _utils2.default.getEnabledGroups(session.groups);
	      }

	      if (JSON.stringify(this.session) !== JSON.stringify(session)) {
	        this.session = session;
	        this.emitChange(session);
	      }
	    }
	  }, {
	    key: 'empty',
	    value: function empty() {
	      return this.session === undefined;
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      if (this.session !== undefined) {
	        this.session = undefined;
	        this.emitChange(undefined);
	      }
	    }
	  }]);

	  return SessionStore;
	}(_BaseStore3.default);

	exports.default = SessionStore;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EventEmitter = __webpack_require__(2).EventEmitter;

	var BaseStore = function (_EventEmitter) {
	  _inherits(BaseStore, _EventEmitter);

	  function BaseStore() {
	    _classCallCheck(this, BaseStore);

	    return _possibleConstructorReturn(this, (BaseStore.__proto__ || Object.getPrototypeOf(BaseStore)).apply(this, arguments));
	  }

	  _createClass(BaseStore, [{
	    key: 'emitChange',
	    value: function emitChange(value) {
	      this.emit('changed', value);
	    }
	  }, {
	    key: 'addChangeListener',
	    value: function addChangeListener(callback) {
	      return this.on('changed', callback);
	    }
	  }, {
	    key: 'removeChangeListener',
	    value: function removeChangeListener(callback) {
	      this.removeListener('changed', callback);
	    }
	  }]);

	  return BaseStore;
	}(EventEmitter);

	exports.default = BaseStore;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _keymirror = __webpack_require__(24);

	var _keymirror2 = _interopRequireDefault(_keymirror);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _keymirror2.default)({
	  TOKEN_SET: null,
	  TOKEN_REFRESH: null
	});

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 */

	"use strict";

	/**
	 * Constructs an enumeration with keys equal to their value.
	 *
	 * For example:
	 *
	 *   var COLORS = keyMirror({blue: null, red: null});
	 *   var myColor = COLORS.blue;
	 *   var isColorValid = !!COLORS[myColor];
	 *
	 * The last line could not be performed if the values of the generated enum were
	 * not equal to their keys.
	 *
	 *   Input:  {key1: val1, key2: val2}
	 *   Output: {key1: key1, key2: key2}
	 *
	 * @param {object} obj
	 * @return {object}
	 */
	var keyMirror = function(obj) {
	  var ret = {};
	  var key;
	  if (!(obj instanceof Object && !Array.isArray(obj))) {
	    throw new Error('keyMirror(...): Argument must be an object.');
	  }
	  for (key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = key;
	  }
	  return ret;
	};

	module.exports = keyMirror;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TokenConstants = exports.UserConstants = undefined;

	var _UserConstants2 = __webpack_require__(26);

	var _UserConstants3 = _interopRequireDefault(_UserConstants2);

	var _TokenConstants2 = __webpack_require__(23);

	var _TokenConstants3 = _interopRequireDefault(_TokenConstants2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.UserConstants = _UserConstants3.default;
	exports.TokenConstants = _TokenConstants3.default;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _keymirror = __webpack_require__(24);

	var _keymirror2 = _interopRequireDefault(_keymirror);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _keymirror2.default)({
	  USER_LOGIN: null,
	  USER_SET: null,
	  USER_REGISTER: null,
	  USER_FORGOT_PASSWORD: null,
	  USER_CHANGE_PASSWORD: null,
	  USER_UPDATE_PROFILE: null,
	  USER_VERIFY_EMAIL: null,
	  USER_LOGOUT: null
	});

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TokenStore = exports.SessionStore = exports.UserStore = undefined;

	var _UserStore2 = __webpack_require__(28);

	var _UserStore3 = _interopRequireDefault(_UserStore2);

	var _SessionStore2 = __webpack_require__(21);

	var _SessionStore3 = _interopRequireDefault(_SessionStore2);

	var _TokenStore2 = __webpack_require__(30);

	var _TokenStore3 = _interopRequireDefault(_TokenStore2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.UserStore = _UserStore3.default;
	exports.SessionStore = _SessionStore3.default;
	exports.TokenStore = _TokenStore3.default;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _BaseStore2 = __webpack_require__(22);

	var _BaseStore3 = _interopRequireDefault(_BaseStore2);

	var _UserActions = __webpack_require__(29);

	var _UserActions2 = _interopRequireDefault(_UserActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UserStore = function (_BaseStore) {
	  _inherits(UserStore, _BaseStore);

	  function UserStore(userService, sessionStore) {
	    _classCallCheck(this, UserStore);

	    var _this = _possibleConstructorReturn(this, (UserStore.__proto__ || Object.getPrototypeOf(UserStore)).call(this));

	    _this.service = userService;
	    _this.sessionError = null;
	    _this.sessionStore = sessionStore;
	    _this.resolveSession();
	    return _this;
	  }

	  _createClass(UserStore, [{
	    key: 'isAuthenticated',
	    value: function isAuthenticated(options, callback) {
	      var _this2 = this;

	      if (typeof options === 'function') {
	        callback = options;
	        options = {};
	      }

	      this.resolveSession(function (err, user) {
	        var authenticated = !err && !_this2.sessionStore.empty();

	        if (authenticated && options.inGroup) {
	          if (user.groups) {
	            authenticated = _utils2.default.groupsMatchExpression(user.groups, options.inGroup);
	          } else {
	            _utils2.default.logWarning('<AuthenticatedRoute> In order to use the inGroup option, you must expand the groups resource for the /me endpoint.');
	          }
	        }

	        callback(err, authenticated);
	      });
	    }
	  }, {
	    key: 'getAccessToken',
	    value: function getAccessToken() {
	      if (!this.service.getToken) {
	        return Promise.reject(new Error('Unable to retrieve access token for current auth strategy.'));
	      }

	      return this.service.getToken('access_token').then(function (accessToken) {
	        if (!accessToken) {
	          return Promise.reject('No access token available.');
	        }

	        return Promise.resolve(accessToken);
	      });
	    }
	  }, {
	    key: 'getLoginViewData',
	    value: function getLoginViewData(callback) {
	      this.service.getLoginViewData(callback);
	    }
	  }, {
	    key: 'login',
	    value: function login(options, callback) {
	      var _this3 = this;

	      this.reset();

	      this.service.login(options, function (err) {
	        if (err) {
	          return callback(err);
	        }

	        _this3.resolveSession(callback, true);
	      });
	    }
	  }, {
	    key: 'register',
	    value: function register(options, callback) {
	      this.service.register(options, callback);
	    }
	  }, {
	    key: 'getRegisterViewData',
	    value: function getRegisterViewData(callback) {
	      this.service.getRegisterViewData(callback);
	    }
	  }, {
	    key: 'forgotPassword',
	    value: function forgotPassword(options, callback) {
	      this.service.forgotPassword(options, callback);
	    }
	  }, {
	    key: 'changePassword',
	    value: function changePassword(options, callback) {
	      this.service.changePassword(options, callback);
	    }
	  }, {
	    key: 'updateProfile',
	    value: function updateProfile(data, callback) {
	      this.service.updateProfile(data, callback);
	    }
	  }, {
	    key: 'verifyEmail',
	    value: function verifyEmail(spToken, callback) {
	      this.service.verifyEmail(spToken, callback);
	    }
	  }, {
	    key: 'logout',
	    value: function logout(callback) {
	      var _this4 = this;

	      this.service.logout(function (err) {
	        if (err) {
	          return callback(err);
	        }

	        _this4.reset();
	        _this4.emitChange();

	        callback();
	      });
	    }
	  }, {
	    key: 'resolveSession',
	    value: function resolveSession(callback, force) {
	      var _this5 = this;

	      if (!force && (this.sessionError || !this.sessionStore.empty())) {
	        return callback && callback(this.sessionError, this.sessionStore.get());
	      }

	      this.service.me(function (err, result) {
	        if (err) {
	          _this5.sessionError = err;
	          _this5.sessionStore.reset();
	          _UserActions2.default.set(null);
	        } else {
	          _this5.sessionError = null;
	          _this5.sessionStore.set(result);
	          _UserActions2.default.set(result);
	        }

	        if (callback) {
	          callback(_this5.sessionError, _this5.sessionStore.get());
	        }

	        _this5.emitChange();
	      });
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      this.sessionError = null;
	      this.sessionStore.reset();
	      _UserActions2.default.set(null);
	    }
	  }]);

	  return UserStore;
	}(_BaseStore3.default);

	exports.default = UserStore;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _context = __webpack_require__(20);

	var _context2 = _interopRequireDefault(_context);

	var _UserConstants = __webpack_require__(26);

	var _UserConstants2 = _interopRequireDefault(_UserConstants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function dispatch(event) {
	  setTimeout(function () {
	    _context2.default.getDispatcher().dispatch(event);
	  }, 0);
	}

	var UserActions = function () {
	  function UserActions() {
	    _classCallCheck(this, UserActions);
	  }

	  _createClass(UserActions, [{
	    key: 'login',
	    value: function login(options, callback) {
	      dispatch({
	        type: _UserConstants2.default.USER_LOGIN,
	        options: options,
	        callback: callback
	      });
	    }
	  }, {
	    key: 'register',
	    value: function register(options, callback) {
	      dispatch({
	        type: _UserConstants2.default.USER_REGISTER,
	        options: options,
	        callback: callback
	      });
	    }
	  }, {
	    key: 'forgotPassword',
	    value: function forgotPassword(options, callback) {
	      dispatch({
	        type: _UserConstants2.default.USER_FORGOT_PASSWORD,
	        options: options,
	        callback: callback
	      });
	    }
	  }, {
	    key: 'verifyEmail',
	    value: function verifyEmail(spToken, callback) {
	      dispatch({
	        type: _UserConstants2.default.USER_VERIFY_EMAIL,
	        options: {
	          spToken: spToken
	        },
	        callback: callback
	      });
	    }
	  }, {
	    key: 'changePassword',
	    value: function changePassword(options, callback) {
	      dispatch({
	        type: _UserConstants2.default.USER_CHANGE_PASSWORD,
	        options: options,
	        callback: callback
	      });
	    }
	  }, {
	    key: 'updateProfile',
	    value: function updateProfile(data, callback) {
	      dispatch({
	        type: _UserConstants2.default.USER_UPDATE_PROFILE,
	        options: {
	          data: data
	        },
	        callback: callback
	      });
	    }
	  }, {
	    key: 'set',
	    value: function set(data) {
	      dispatch({
	        type: _UserConstants2.default.USER_SET,
	        options: {
	          data: data
	        }
	      });
	    }
	  }, {
	    key: 'logout',
	    value: function logout(callback) {
	      dispatch({
	        type: _UserConstants2.default.USER_LOGOUT,
	        callback: callback
	      });
	    }
	  }]);

	  return UserActions;
	}();

	exports.default = new UserActions();

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _BaseStore2 = __webpack_require__(22);

	var _BaseStore3 = _interopRequireDefault(_BaseStore2);

	var _TokenActions = __webpack_require__(19);

	var _TokenActions2 = _interopRequireDefault(_TokenActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TokenStore = function (_BaseStore) {
	  _inherits(TokenStore, _BaseStore);

	  function TokenStore(storage, namespace) {
	    _classCallCheck(this, TokenStore);

	    var _this = _possibleConstructorReturn(this, (TokenStore.__proto__ || Object.getPrototypeOf(TokenStore)).call(this));

	    _this.storage = storage;
	    _this.namespace = namespace;
	    return _this;
	  }

	  _createClass(TokenStore, [{
	    key: '_getKey',
	    value: function _getKey(type) {
	      return this.namespace + ':' + type;
	    }
	  }, {
	    key: 'get',
	    value: function get(type) {
	      return this.storage.get(this._getKey(type));
	    }
	  }, {
	    key: 'set',
	    value: function set(type, token) {
	      var _this2 = this;

	      return this.get(type).then(function (storedToken) {
	        if (storedToken !== token) {
	          _this2.storage.set(_this2._getKey(type), token).then(function () {
	            _this2.emitChange({
	              type: type,
	              action: 'set',
	              value: token
	            });
	          });
	        }
	      });
	    }
	  }, {
	    key: 'empty',
	    value: function empty(type) {
	      return this.get(type).then(function (token) {
	        return token === undefined;
	      });
	    }
	  }, {
	    key: 'reset',
	    value: function reset(type) {
	      var _this3 = this;

	      return this.empty(type).then(function (isEmpty) {
	        if (!isEmpty) {
	          return _this3.storage.remove(_this3._getKey(type)).then(function () {
	            _this3.emitChange({
	              type: type,
	              action: 'reset'
	            });
	          });
	        }
	      });
	    }
	  }]);

	  return TokenStore;
	}(_BaseStore3.default);

	exports.default = TokenStore;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ReduxDispatcher = exports.FluxDispatcher = undefined;

	var _FluxDispatcher2 = __webpack_require__(32);

	var _FluxDispatcher3 = _interopRequireDefault(_FluxDispatcher2);

	var _ReduxDispatcher2 = __webpack_require__(37);

	var _ReduxDispatcher3 = _interopRequireDefault(_ReduxDispatcher2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.FluxDispatcher = _FluxDispatcher3.default;
	exports.ReduxDispatcher = _ReduxDispatcher3.default;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _flux = __webpack_require__(33);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FluxDispatcher = function () {
	  function FluxDispatcher(reducer) {
	    _classCallCheck(this, FluxDispatcher);

	    this.dispatcher = new _flux.Dispatcher();
	    this.register(reducer);
	  }

	  _createClass(FluxDispatcher, [{
	    key: 'register',
	    value: function register(listener) {
	      this.dispatcher.register(function (data) {
	        if (data && 'actionType' in data) {
	          data.type = data.actionType;
	          delete data['actionType'];
	        }

	        listener(data);
	      });
	    }
	  }, {
	    key: 'dispatch',
	    value: function dispatch(event) {
	      this.dispatcher.dispatch({
	        actionType: event.type,
	        options: event.options,
	        callback: event.callback
	      });
	    }
	  }]);

	  return FluxDispatcher;
	}();

	exports.default = FluxDispatcher;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	module.exports.Dispatcher = __webpack_require__(34);


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Dispatcher
	 * 
	 * @preventMunge
	 */

	'use strict';

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var invariant = __webpack_require__(36);

	var _prefix = 'ID_';

	/**
	 * Dispatcher is used to broadcast payloads to registered callbacks. This is
	 * different from generic pub-sub systems in two ways:
	 *
	 *   1) Callbacks are not subscribed to particular events. Every payload is
	 *      dispatched to every registered callback.
	 *   2) Callbacks can be deferred in whole or part until other callbacks have
	 *      been executed.
	 *
	 * For example, consider this hypothetical flight destination form, which
	 * selects a default city when a country is selected:
	 *
	 *   var flightDispatcher = new Dispatcher();
	 *
	 *   // Keeps track of which country is selected
	 *   var CountryStore = {country: null};
	 *
	 *   // Keeps track of which city is selected
	 *   var CityStore = {city: null};
	 *
	 *   // Keeps track of the base flight price of the selected city
	 *   var FlightPriceStore = {price: null}
	 *
	 * When a user changes the selected city, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'city-update',
	 *     selectedCity: 'paris'
	 *   });
	 *
	 * This payload is digested by `CityStore`:
	 *
	 *   flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'city-update') {
	 *       CityStore.city = payload.selectedCity;
	 *     }
	 *   });
	 *
	 * When the user selects a country, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'country-update',
	 *     selectedCountry: 'australia'
	 *   });
	 *
	 * This payload is digested by both stores:
	 *
	 *   CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       CountryStore.country = payload.selectedCountry;
	 *     }
	 *   });
	 *
	 * When the callback to update `CountryStore` is registered, we save a reference
	 * to the returned token. Using this token with `waitFor()`, we can guarantee
	 * that `CountryStore` is updated before the callback that updates `CityStore`
	 * needs to query its data.
	 *
	 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       // `CountryStore.country` may not be updated.
	 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
	 *       // `CountryStore.country` is now guaranteed to be updated.
	 *
	 *       // Select the default city for the new country
	 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
	 *     }
	 *   });
	 *
	 * The usage of `waitFor()` can be chained, for example:
	 *
	 *   FlightPriceStore.dispatchToken =
	 *     flightDispatcher.register(function(payload) {
	 *       switch (payload.actionType) {
	 *         case 'country-update':
	 *         case 'city-update':
	 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
	 *           FlightPriceStore.price =
	 *             getFlightPriceStore(CountryStore.country, CityStore.city);
	 *           break;
	 *     }
	 *   });
	 *
	 * The `country-update` payload will be guaranteed to invoke the stores'
	 * registered callbacks in order: `CountryStore`, `CityStore`, then
	 * `FlightPriceStore`.
	 */

	var Dispatcher = (function () {
	  function Dispatcher() {
	    _classCallCheck(this, Dispatcher);

	    this._callbacks = {};
	    this._isDispatching = false;
	    this._isHandled = {};
	    this._isPending = {};
	    this._lastID = 1;
	  }

	  /**
	   * Registers a callback to be invoked with every dispatched payload. Returns
	   * a token that can be used with `waitFor()`.
	   */

	  Dispatcher.prototype.register = function register(callback) {
	    var id = _prefix + this._lastID++;
	    this._callbacks[id] = callback;
	    return id;
	  };

	  /**
	   * Removes a callback based on its token.
	   */

	  Dispatcher.prototype.unregister = function unregister(id) {
	    !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.unregister(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
	    delete this._callbacks[id];
	  };

	  /**
	   * Waits for the callbacks specified to be invoked before continuing execution
	   * of the current callback. This method should only be used by a callback in
	   * response to a dispatched payload.
	   */

	  Dispatcher.prototype.waitFor = function waitFor(ids) {
	    !this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Must be invoked while dispatching.') : invariant(false) : undefined;
	    for (var ii = 0; ii < ids.length; ii++) {
	      var id = ids[ii];
	      if (this._isPending[id]) {
	        !this._isHandled[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Circular dependency detected while ' + 'waiting for `%s`.', id) : invariant(false) : undefined;
	        continue;
	      }
	      !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
	      this._invokeCallback(id);
	    }
	  };

	  /**
	   * Dispatches a payload to all registered callbacks.
	   */

	  Dispatcher.prototype.dispatch = function dispatch(payload) {
	    !!this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.') : invariant(false) : undefined;
	    this._startDispatching(payload);
	    try {
	      for (var id in this._callbacks) {
	        if (this._isPending[id]) {
	          continue;
	        }
	        this._invokeCallback(id);
	      }
	    } finally {
	      this._stopDispatching();
	    }
	  };

	  /**
	   * Is this Dispatcher currently dispatching.
	   */

	  Dispatcher.prototype.isDispatching = function isDispatching() {
	    return this._isDispatching;
	  };

	  /**
	   * Call the callback stored with the given id. Also do some internal
	   * bookkeeping.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._invokeCallback = function _invokeCallback(id) {
	    this._isPending[id] = true;
	    this._callbacks[id](this._pendingPayload);
	    this._isHandled[id] = true;
	  };

	  /**
	   * Set up bookkeeping needed when dispatching.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._startDispatching = function _startDispatching(payload) {
	    for (var id in this._callbacks) {
	      this._isPending[id] = false;
	      this._isHandled[id] = false;
	    }
	    this._pendingPayload = payload;
	    this._isDispatching = true;
	  };

	  /**
	   * Clear bookkeeping used for dispatching.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._stopDispatching = function _stopDispatching() {
	    delete this._pendingPayload;
	    this._isDispatching = false;
	  };

	  return Dispatcher;
	})();

	module.exports = Dispatcher;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _context = __webpack_require__(20);

	var _context2 = _interopRequireDefault(_context);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ReduxDispatcher = function () {
	  function ReduxDispatcher(reducer, store) {
	    _classCallCheck(this, ReduxDispatcher);

	    this.reducer = reducer;
	    this.store = store;
	  }

	  _createClass(ReduxDispatcher, [{
	    key: 'dispatch',
	    value: function dispatch(event) {
	      this.reducer(event);
	      this.store.dispatch(event);
	    }
	  }]);

	  return ReduxDispatcher;
	}();

	exports.default = ReduxDispatcher;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _class, _temp;

	var _propTypes = __webpack_require__(39);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouterDom = __webpack_require__(47);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _context = __webpack_require__(20);

	var _context2 = _interopRequireDefault(_context);

	var _HomeRoute = __webpack_require__(91);

	var _HomeRoute2 = _interopRequireDefault(_HomeRoute);

	var _LoginRoute = __webpack_require__(93);

	var _LoginRoute2 = _interopRequireDefault(_LoginRoute);

	var _LogoutRoute = __webpack_require__(94);

	var _LogoutRoute2 = _interopRequireDefault(_LogoutRoute);

	var _AuthenticatedRoute = __webpack_require__(95);

	var _AuthenticatedRoute2 = _interopRequireDefault(_AuthenticatedRoute);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Router = (_temp = _class = function (_ReactRouter) {
	  _inherits(Router, _ReactRouter);

	  function Router() {
	    _classCallCheck(this, Router);

	    var _this = _possibleConstructorReturn(this, (Router.__proto__ || Object.getPrototypeOf(Router)).apply(this, arguments));

	    _this.state = {
	      authenticated: false,
	      user: undefined
	    };
	    _this.markedRoutes = {
	      home: {
	        type: _HomeRoute2.default,
	        authenticated: {
	          props: null
	        },
	        notAuthenticated: {
	          props: null
	        }
	      },
	      login: {
	        type: _LoginRoute2.default,
	        props: null
	      },
	      logout: {
	        type: _LogoutRoute2.default,
	        props: null
	      }
	    };


	    if (_this.props.routes) {
	      // The reason we wrap in a div is because we just need to have a root element.
	      _this._mapMarkedRoutes(_react2.default.createElement(
	        'div',
	        null,
	        _this.props.routes
	      ));
	    } else {
	      _this._mapMarkedRoutes(_this);
	    }

	    _this.sessionChangeListener = _this._setSessionState.bind(_this);

	    _context2.default.setRouter(_this);
	    return _this;
	  }

	  _createClass(Router, [{
	    key: '_mapMarkedRoutes',
	    value: function _mapMarkedRoutes(routes) {
	      var markedRoutes = this.markedRoutes;

	      _utils2.default.deepForEach(routes, function (node, parent) {
	        // Try and map the route node to a marked route.
	        for (var routeName in markedRoutes) {
	          var route = markedRoutes[routeName];
	          if (node.type === route.type) {
	            var markedRoute = markedRoutes[routeName];

	            if (node.type === _HomeRoute2.default) {
	              if (parent.type === _AuthenticatedRoute2.default) {
	                markedRoute = markedRoute.authenticated;
	              } else {
	                markedRoute = markedRoute.notAuthenticated;
	              }
	            }

	            markedRoute.props = node.props;
	            break;
	          }
	        }
	      });
	    }
	  }, {
	    key: 'getHomeRoute',
	    value: function getHomeRoute() {
	      return this.markedRoutes.home.notAuthenticated.props;
	    }
	  }, {
	    key: 'getAuthenticatedHomeRoute',
	    value: function getAuthenticatedHomeRoute() {
	      return this.markedRoutes.home.authenticated.props;
	    }
	  }, {
	    key: 'getLoginRoute',
	    value: function getLoginRoute() {
	      return this.markedRoutes.login.props;
	    }
	  }, {
	    key: 'getLogoutRoute',
	    value: function getLogoutRoute() {
	      return this.markedRoutes.logout.props;
	    }
	  }, {
	    key: '_setSessionState',
	    value: function _setSessionState(user) {
	      this.setState({
	        authenticated: user !== undefined,
	        user: user
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._setSessionState(_context2.default.sessionStore.get());
	      _context2.default.sessionStore.addListener('changed', this.sessionChangeListener);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _get(Router.prototype.__proto__ || Object.getPrototypeOf(Router.prototype), 'componentWillUnmount', this).call(this);
	      _context2.default.sessionStore.removeListener('changed', this.sessionChangeListener);
	    }
	  }, {
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        authenticated: this.state.authenticated,
	        user: this.state.user
	      };
	    }
	  }]);

	  return Router;
	}(_reactRouterDom.BrowserRouter), _class.childContextTypes = {
	  authenticated: _propTypes2.default.bool,
	  user: _propTypes2.default.object
	}, _class.defaultProps = _reactRouterDom.BrowserRouter.defaultProps, _temp);
	exports.default = Router;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if (process.env.NODE_ENV !== 'production') {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(40)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(46)();
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(41);
	var invariant = __webpack_require__(36);
	var warning = __webpack_require__(42);
	var assign = __webpack_require__(43);

	var ReactPropTypesSecret = __webpack_require__(44);
	var checkPropTypes = __webpack_require__(45);

	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(
	          false,
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction.thatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(41);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (process.env.NODE_ENV !== 'production') {
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }

	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }

	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	if (process.env.NODE_ENV !== 'production') {
	  var invariant = __webpack_require__(36);
	  var warning = __webpack_require__(42);
	  var ReactPropTypesSecret = __webpack_require__(44);
	  var loggedTypeFailures = {};
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}

	module.exports = checkPropTypes;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(41);
	var invariant = __webpack_require__(36);
	var ReactPropTypesSecret = __webpack_require__(44);

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.withRouter = exports.matchPath = exports.Switch = exports.StaticRouter = exports.Router = exports.Route = exports.Redirect = exports.Prompt = exports.NavLink = exports.MemoryRouter = exports.Link = exports.HashRouter = exports.BrowserRouter = undefined;

	var _BrowserRouter2 = __webpack_require__(48);

	var _BrowserRouter3 = _interopRequireDefault(_BrowserRouter2);

	var _HashRouter2 = __webpack_require__(60);

	var _HashRouter3 = _interopRequireDefault(_HashRouter2);

	var _Link2 = __webpack_require__(62);

	var _Link3 = _interopRequireDefault(_Link2);

	var _MemoryRouter2 = __webpack_require__(63);

	var _MemoryRouter3 = _interopRequireDefault(_MemoryRouter2);

	var _NavLink2 = __webpack_require__(69);

	var _NavLink3 = _interopRequireDefault(_NavLink2);

	var _Prompt2 = __webpack_require__(75);

	var _Prompt3 = _interopRequireDefault(_Prompt2);

	var _Redirect2 = __webpack_require__(77);

	var _Redirect3 = _interopRequireDefault(_Redirect2);

	var _Route2 = __webpack_require__(70);

	var _Route3 = _interopRequireDefault(_Route2);

	var _Router2 = __webpack_require__(58);

	var _Router3 = _interopRequireDefault(_Router2);

	var _StaticRouter2 = __webpack_require__(83);

	var _StaticRouter3 = _interopRequireDefault(_StaticRouter2);

	var _Switch2 = __webpack_require__(85);

	var _Switch3 = _interopRequireDefault(_Switch2);

	var _matchPath2 = __webpack_require__(87);

	var _matchPath3 = _interopRequireDefault(_matchPath2);

	var _withRouter2 = __webpack_require__(88);

	var _withRouter3 = _interopRequireDefault(_withRouter2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.BrowserRouter = _BrowserRouter3.default;
	exports.HashRouter = _HashRouter3.default;
	exports.Link = _Link3.default;
	exports.MemoryRouter = _MemoryRouter3.default;
	exports.NavLink = _NavLink3.default;
	exports.Prompt = _Prompt3.default;
	exports.Redirect = _Redirect3.default;
	exports.Route = _Route3.default;
	exports.Router = _Router3.default;
	exports.StaticRouter = _StaticRouter3.default;
	exports.Switch = _Switch3.default;
	exports.matchPath = _matchPath3.default;
	exports.withRouter = _withRouter3.default;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _warning = __webpack_require__(49);

	var _warning2 = _interopRequireDefault(_warning);

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(39);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _createBrowserHistory = __webpack_require__(50);

	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

	var _Router = __webpack_require__(58);

	var _Router2 = _interopRequireDefault(_Router);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * The public API for a <Router> that uses HTML5 history.
	 */
	var BrowserRouter = function (_React$Component) {
	  _inherits(BrowserRouter, _React$Component);

	  function BrowserRouter() {
	    var _temp, _this, _ret;

	    _classCallCheck(this, BrowserRouter);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = (0, _createBrowserHistory2.default)(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  BrowserRouter.prototype.componentWillMount = function componentWillMount() {
	    (0, _warning2.default)(!this.props.history, '<BrowserRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { BrowserRouter as Router }`.');
	  };

	  BrowserRouter.prototype.render = function render() {
	    return _react2.default.createElement(_Router2.default, { history: this.history, children: this.props.children });
	  };

	  return BrowserRouter;
	}(_react2.default.Component);

	BrowserRouter.propTypes = {
	  basename: _propTypes2.default.string,
	  forceRefresh: _propTypes2.default.bool,
	  getUserConfirmation: _propTypes2.default.func,
	  keyLength: _propTypes2.default.number,
	  children: _propTypes2.default.node
	};
	exports.default = BrowserRouter;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _warning = __webpack_require__(49);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(51);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _LocationUtils = __webpack_require__(52);

	var _PathUtils = __webpack_require__(55);

	var _createTransitionManager = __webpack_require__(56);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	var _DOMUtils = __webpack_require__(57);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PopStateEvent = 'popstate';
	var HashChangeEvent = 'hashchange';

	var getHistoryState = function getHistoryState() {
	  try {
	    return window.history.state || {};
	  } catch (e) {
	    // IE 11 sometimes throws when accessing window.history.state
	    // See https://github.com/ReactTraining/history/pull/289
	    return {};
	  }
	};

	/**
	 * Creates a history object that uses the HTML5 history API including
	 * pushState, replaceState, and the popstate event.
	 */
	var createBrowserHistory = function createBrowserHistory() {
	  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Browser history needs a DOM');

	  var globalHistory = window.history;
	  var canUseHistory = (0, _DOMUtils.supportsHistory)();
	  var needsHashChangeListener = !(0, _DOMUtils.supportsPopStateOnHashChange)();

	  var _props$forceRefresh = props.forceRefresh,
	      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
	      _props$getUserConfirm = props.getUserConfirmation,
	      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
	      _props$keyLength = props.keyLength,
	      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

	  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

	  var getDOMLocation = function getDOMLocation(historyState) {
	    var _ref = historyState || {},
	        key = _ref.key,
	        state = _ref.state;

	    var _window$location = window.location,
	        pathname = _window$location.pathname,
	        search = _window$location.search,
	        hash = _window$location.hash;


	    var path = pathname + search + hash;

	    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

	    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

	    return (0, _LocationUtils.createLocation)(path, state, key);
	  };

	  var createKey = function createKey() {
	    return Math.random().toString(36).substr(2, keyLength);
	  };

	  var transitionManager = (0, _createTransitionManager2.default)();

	  var setState = function setState(nextState) {
	    _extends(history, nextState);

	    history.length = globalHistory.length;

	    transitionManager.notifyListeners(history.location, history.action);
	  };

	  var handlePopState = function handlePopState(event) {
	    // Ignore extraneous popstate events in WebKit.
	    if ((0, _DOMUtils.isExtraneousPopstateEvent)(event)) return;

	    handlePop(getDOMLocation(event.state));
	  };

	  var handleHashChange = function handleHashChange() {
	    handlePop(getDOMLocation(getHistoryState()));
	  };

	  var forceNextPop = false;

	  var handlePop = function handlePop(location) {
	    if (forceNextPop) {
	      forceNextPop = false;
	      setState();
	    } else {
	      var action = 'POP';

	      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	        if (ok) {
	          setState({ action: action, location: location });
	        } else {
	          revertPop(location);
	        }
	      });
	    }
	  };

	  var revertPop = function revertPop(fromLocation) {
	    var toLocation = history.location;

	    // TODO: We could probably make this more reliable by
	    // keeping a list of keys we've seen in sessionStorage.
	    // Instead, we just default to 0 for keys we don't know.

	    var toIndex = allKeys.indexOf(toLocation.key);

	    if (toIndex === -1) toIndex = 0;

	    var fromIndex = allKeys.indexOf(fromLocation.key);

	    if (fromIndex === -1) fromIndex = 0;

	    var delta = toIndex - fromIndex;

	    if (delta) {
	      forceNextPop = true;
	      go(delta);
	    }
	  };

	  var initialLocation = getDOMLocation(getHistoryState());
	  var allKeys = [initialLocation.key];

	  // Public interface

	  var createHref = function createHref(location) {
	    return basename + (0, _PathUtils.createPath)(location);
	  };

	  var push = function push(path, state) {
	    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

	    var action = 'PUSH';
	    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;

	      var href = createHref(location);
	      var key = location.key,
	          state = location.state;


	      if (canUseHistory) {
	        globalHistory.pushState({ key: key, state: state }, null, href);

	        if (forceRefresh) {
	          window.location.href = href;
	        } else {
	          var prevIndex = allKeys.indexOf(history.location.key);
	          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

	          nextKeys.push(location.key);
	          allKeys = nextKeys;

	          setState({ action: action, location: location });
	        }
	      } else {
	        (0, _warning2.default)(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

	        window.location.href = href;
	      }
	    });
	  };

	  var replace = function replace(path, state) {
	    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

	    var action = 'REPLACE';
	    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;

	      var href = createHref(location);
	      var key = location.key,
	          state = location.state;


	      if (canUseHistory) {
	        globalHistory.replaceState({ key: key, state: state }, null, href);

	        if (forceRefresh) {
	          window.location.replace(href);
	        } else {
	          var prevIndex = allKeys.indexOf(history.location.key);

	          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

	          setState({ action: action, location: location });
	        }
	      } else {
	        (0, _warning2.default)(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

	        window.location.replace(href);
	      }
	    });
	  };

	  var go = function go(n) {
	    globalHistory.go(n);
	  };

	  var goBack = function goBack() {
	    return go(-1);
	  };

	  var goForward = function goForward() {
	    return go(1);
	  };

	  var listenerCount = 0;

	  var checkDOMListeners = function checkDOMListeners(delta) {
	    listenerCount += delta;

	    if (listenerCount === 1) {
	      (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

	      if (needsHashChangeListener) (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
	    } else if (listenerCount === 0) {
	      (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);

	      if (needsHashChangeListener) (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
	    }
	  };

	  var isBlocked = false;

	  var block = function block() {
	    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	    var unblock = transitionManager.setPrompt(prompt);

	    if (!isBlocked) {
	      checkDOMListeners(1);
	      isBlocked = true;
	    }

	    return function () {
	      if (isBlocked) {
	        isBlocked = false;
	        checkDOMListeners(-1);
	      }

	      return unblock();
	    };
	  };

	  var listen = function listen(listener) {
	    var unlisten = transitionManager.appendListener(listener);
	    checkDOMListeners(1);

	    return function () {
	      checkDOMListeners(-1);
	      unlisten();
	    };
	  };

	  var history = {
	    length: globalHistory.length,
	    action: 'POP',
	    location: initialLocation,
	    createHref: createHref,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    block: block,
	    listen: listen
	  };

	  return history;
	};

	exports.default = createBrowserHistory;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.locationsAreEqual = exports.createLocation = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _resolvePathname = __webpack_require__(53);

	var _resolvePathname2 = _interopRequireDefault(_resolvePathname);

	var _valueEqual = __webpack_require__(54);

	var _valueEqual2 = _interopRequireDefault(_valueEqual);

	var _PathUtils = __webpack_require__(55);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createLocation = exports.createLocation = function createLocation(path, state, key, currentLocation) {
	  var location = void 0;
	  if (typeof path === 'string') {
	    // Two-arg form: push(path, state)
	    location = (0, _PathUtils.parsePath)(path);
	    location.state = state;
	  } else {
	    // One-arg form: push(location)
	    location = _extends({}, path);

	    if (location.pathname === undefined) location.pathname = '';

	    if (location.search) {
	      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
	    } else {
	      location.search = '';
	    }

	    if (location.hash) {
	      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
	    } else {
	      location.hash = '';
	    }

	    if (state !== undefined && location.state === undefined) location.state = state;
	  }

	  try {
	    location.pathname = decodeURI(location.pathname);
	  } catch (e) {
	    if (e instanceof URIError) {
	      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
	    } else {
	      throw e;
	    }
	  }

	  if (key) location.key = key;

	  if (currentLocation) {
	    // Resolve incomplete/relative pathname relative to current location.
	    if (!location.pathname) {
	      location.pathname = currentLocation.pathname;
	    } else if (location.pathname.charAt(0) !== '/') {
	      location.pathname = (0, _resolvePathname2.default)(location.pathname, currentLocation.pathname);
	    }
	  } else {
	    // When there is no prior location and pathname is empty, set it to /
	    if (!location.pathname) {
	      location.pathname = '/';
	    }
	  }

	  return location;
	};

	var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
	  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0, _valueEqual2.default)(a.state, b.state);
	};

/***/ }),
/* 53 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	function isAbsolute(pathname) {
	  return pathname.charAt(0) === '/';
	}

	// About 1.5x faster than the two-arg version of Array#splice()
	function spliceOne(list, index) {
	  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
	    list[i] = list[k];
	  }

	  list.pop();
	}

	// This implementation is based heavily on node's url.parse
	function resolvePathname(to) {
	  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

	  var toParts = to && to.split('/') || [];
	  var fromParts = from && from.split('/') || [];

	  var isToAbs = to && isAbsolute(to);
	  var isFromAbs = from && isAbsolute(from);
	  var mustEndAbs = isToAbs || isFromAbs;

	  if (to && isAbsolute(to)) {
	    // to is absolute
	    fromParts = toParts;
	  } else if (toParts.length) {
	    // to is relative, drop the filename
	    fromParts.pop();
	    fromParts = fromParts.concat(toParts);
	  }

	  if (!fromParts.length) return '/';

	  var hasTrailingSlash = void 0;
	  if (fromParts.length) {
	    var last = fromParts[fromParts.length - 1];
	    hasTrailingSlash = last === '.' || last === '..' || last === '';
	  } else {
	    hasTrailingSlash = false;
	  }

	  var up = 0;
	  for (var i = fromParts.length; i >= 0; i--) {
	    var part = fromParts[i];

	    if (part === '.') {
	      spliceOne(fromParts, i);
	    } else if (part === '..') {
	      spliceOne(fromParts, i);
	      up++;
	    } else if (up) {
	      spliceOne(fromParts, i);
	      up--;
	    }
	  }

	  if (!mustEndAbs) for (; up--; up) {
	    fromParts.unshift('..');
	  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

	  var result = fromParts.join('/');

	  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

	  return result;
	}

	exports.default = resolvePathname;
	module.exports = exports['default'];

/***/ }),
/* 54 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function valueEqual(a, b) {
	  if (a === b) return true;

	  if (a == null || b == null) return false;

	  if (Array.isArray(a)) {
	    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
	      return valueEqual(item, b[index]);
	    });
	  }

	  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
	  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

	  if (aType !== bType) return false;

	  if (aType === 'object') {
	    var aValue = a.valueOf();
	    var bValue = b.valueOf();

	    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

	    var aKeys = Object.keys(a);
	    var bKeys = Object.keys(b);

	    if (aKeys.length !== bKeys.length) return false;

	    return aKeys.every(function (key) {
	      return valueEqual(a[key], b[key]);
	    });
	  }

	  return false;
	}

	exports.default = valueEqual;
	module.exports = exports['default'];

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var addLeadingSlash = exports.addLeadingSlash = function addLeadingSlash(path) {
	  return path.charAt(0) === '/' ? path : '/' + path;
	};

	var stripLeadingSlash = exports.stripLeadingSlash = function stripLeadingSlash(path) {
	  return path.charAt(0) === '/' ? path.substr(1) : path;
	};

	var hasBasename = exports.hasBasename = function hasBasename(path, prefix) {
	  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
	};

	var stripBasename = exports.stripBasename = function stripBasename(path, prefix) {
	  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
	};

	var stripTrailingSlash = exports.stripTrailingSlash = function stripTrailingSlash(path) {
	  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
	};

	var parsePath = exports.parsePath = function parsePath(path) {
	  var pathname = path || '/';
	  var search = '';
	  var hash = '';

	  var hashIndex = pathname.indexOf('#');
	  if (hashIndex !== -1) {
	    hash = pathname.substr(hashIndex);
	    pathname = pathname.substr(0, hashIndex);
	  }

	  var searchIndex = pathname.indexOf('?');
	  if (searchIndex !== -1) {
	    search = pathname.substr(searchIndex);
	    pathname = pathname.substr(0, searchIndex);
	  }

	  return {
	    pathname: pathname,
	    search: search === '?' ? '' : search,
	    hash: hash === '#' ? '' : hash
	  };
	};

	var createPath = exports.createPath = function createPath(location) {
	  var pathname = location.pathname,
	      search = location.search,
	      hash = location.hash;


	  var path = pathname || '/';

	  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

	  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

	  return path;
	};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _warning = __webpack_require__(49);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createTransitionManager = function createTransitionManager() {
	  var prompt = null;

	  var setPrompt = function setPrompt(nextPrompt) {
	    (0, _warning2.default)(prompt == null, 'A history supports only one prompt at a time');

	    prompt = nextPrompt;

	    return function () {
	      if (prompt === nextPrompt) prompt = null;
	    };
	  };

	  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
	    // TODO: If another transition starts while we're still confirming
	    // the previous one, we may end up in a weird state. Figure out the
	    // best way to handle this.
	    if (prompt != null) {
	      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

	      if (typeof result === 'string') {
	        if (typeof getUserConfirmation === 'function') {
	          getUserConfirmation(result, callback);
	        } else {
	          (0, _warning2.default)(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

	          callback(true);
	        }
	      } else {
	        // Return false from a transition hook to cancel the transition.
	        callback(result !== false);
	      }
	    } else {
	      callback(true);
	    }
	  };

	  var listeners = [];

	  var appendListener = function appendListener(fn) {
	    var isActive = true;

	    var listener = function listener() {
	      if (isActive) fn.apply(undefined, arguments);
	    };

	    listeners.push(listener);

	    return function () {
	      isActive = false;
	      listeners = listeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  };

	  var notifyListeners = function notifyListeners() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    listeners.forEach(function (listener) {
	      return listener.apply(undefined, args);
	    });
	  };

	  return {
	    setPrompt: setPrompt,
	    confirmTransitionTo: confirmTransitionTo,
	    appendListener: appendListener,
	    notifyListeners: notifyListeners
	  };
	};

	exports.default = createTransitionManager;

/***/ }),
/* 57 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
	  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
	};

	var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
	  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
	};

	var getConfirmation = exports.getConfirmation = function getConfirmation(message, callback) {
	  return callback(window.confirm(message));
	}; // eslint-disable-line no-alert

	/**
	 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
	 *
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
	 */
	var supportsHistory = exports.supportsHistory = function supportsHistory() {
	  var ua = window.navigator.userAgent;

	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

	  return window.history && 'pushState' in window.history;
	};

	/**
	 * Returns true if browser fires popstate on hash change.
	 * IE10 and IE11 do not.
	 */
	var supportsPopStateOnHashChange = exports.supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
	  return window.navigator.userAgent.indexOf('Trident') === -1;
	};

	/**
	 * Returns false if using go(n) with hash history causes a full page reload.
	 */
	var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
	  return window.navigator.userAgent.indexOf('Firefox') === -1;
	};

	/**
	 * Returns true if a given popstate event is an extraneous WebKit event.
	 * Accounts for the fact that Chrome on iOS fires real popstate events
	 * containing undefined state when pressing the back button.
	 */
	var isExtraneousPopstateEvent = exports.isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
	  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
	};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _Router = __webpack_require__(59);

	var _Router2 = _interopRequireDefault(_Router);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Router2.default; // Written in this round about way for babel-transform-imports

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _warning = __webpack_require__(49);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(51);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(39);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * The public API for putting history on context.
	 */
	var Router = function (_React$Component) {
	  _inherits(Router, _React$Component);

	  function Router() {
	    var _temp, _this, _ret;

	    _classCallCheck(this, Router);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      match: _this.computeMatch(_this.props.history.location.pathname)
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  Router.prototype.getChildContext = function getChildContext() {
	    return {
	      router: _extends({}, this.context.router, {
	        history: this.props.history,
	        route: {
	          location: this.props.history.location,
	          match: this.state.match
	        }
	      })
	    };
	  };

	  Router.prototype.computeMatch = function computeMatch(pathname) {
	    return {
	      path: '/',
	      url: '/',
	      params: {},
	      isExact: pathname === '/'
	    };
	  };

	  Router.prototype.componentWillMount = function componentWillMount() {
	    var _this2 = this;

	    var _props = this.props,
	        children = _props.children,
	        history = _props.history;


	    (0, _invariant2.default)(children == null || _react2.default.Children.count(children) === 1, 'A <Router> may have only one child element');

	    // Do this here so we can setState when a <Redirect> changes the
	    // location in componentWillMount. This happens e.g. when doing
	    // server rendering using a <StaticRouter>.
	    this.unlisten = history.listen(function () {
	      _this2.setState({
	        match: _this2.computeMatch(history.location.pathname)
	      });
	    });
	  };

	  Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    (0, _warning2.default)(this.props.history === nextProps.history, 'You cannot change <Router history>');
	  };

	  Router.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.unlisten();
	  };

	  Router.prototype.render = function render() {
	    var children = this.props.children;

	    return children ? _react2.default.Children.only(children) : null;
	  };

	  return Router;
	}(_react2.default.Component);

	Router.propTypes = {
	  history: _propTypes2.default.object.isRequired,
	  children: _propTypes2.default.node
	};
	Router.contextTypes = {
	  router: _propTypes2.default.object
	};
	Router.childContextTypes = {
	  router: _propTypes2.default.object.isRequired
	};
	exports.default = Router;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _warning = __webpack_require__(49);

	var _warning2 = _interopRequireDefault(_warning);

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(39);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _createHashHistory = __webpack_require__(61);

	var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

	var _Router = __webpack_require__(58);

	var _Router2 = _interopRequireDefault(_Router);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * The public API for a <Router> that uses window.location.hash.
	 */
	var HashRouter = function (_React$Component) {
	  _inherits(HashRouter, _React$Component);

	  function HashRouter() {
	    var _temp, _this, _ret;

	    _classCallCheck(this, HashRouter);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = (0, _createHashHistory2.default)(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  HashRouter.prototype.componentWillMount = function componentWillMount() {
	    (0, _warning2.default)(!this.props.history, '<HashRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { HashRouter as Router }`.');
	  };

	  HashRouter.prototype.render = function render() {
	    return _react2.default.createElement(_Router2.default, { history: this.history, children: this.props.children });
	  };

	  return HashRouter;
	}(_react2.default.Component);

	HashRouter.propTypes = {
	  basename: _propTypes2.default.string,
	  getUserConfirmation: _propTypes2.default.func,
	  hashType: _propTypes2.default.oneOf(['hashbang', 'noslash', 'slash']),
	  children: _propTypes2.default.node
	};
	exports.default = HashRouter;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _warning = __webpack_require__(49);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(51);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _LocationUtils = __webpack_require__(52);

	var _PathUtils = __webpack_require__(55);

	var _createTransitionManager = __webpack_require__(56);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	var _DOMUtils = __webpack_require__(57);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HashChangeEvent = 'hashchange';

	var HashPathCoders = {
	  hashbang: {
	    encodePath: function encodePath(path) {
	      return path.charAt(0) === '!' ? path : '!/' + (0, _PathUtils.stripLeadingSlash)(path);
	    },
	    decodePath: function decodePath(path) {
	      return path.charAt(0) === '!' ? path.substr(1) : path;
	    }
	  },
	  noslash: {
	    encodePath: _PathUtils.stripLeadingSlash,
	    decodePath: _PathUtils.addLeadingSlash
	  },
	  slash: {
	    encodePath: _PathUtils.addLeadingSlash,
	    decodePath: _PathUtils.addLeadingSlash
	  }
	};

	var getHashPath = function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  var href = window.location.href;
	  var hashIndex = href.indexOf('#');
	  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
	};

	var pushHashPath = function pushHashPath(path) {
	  return window.location.hash = path;
	};

	var replaceHashPath = function replaceHashPath(path) {
	  var hashIndex = window.location.href.indexOf('#');

	  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
	};

	var createHashHistory = function createHashHistory() {
	  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Hash history needs a DOM');

	  var globalHistory = window.history;
	  var canGoWithoutReload = (0, _DOMUtils.supportsGoWithoutReloadUsingHash)();

	  var _props$getUserConfirm = props.getUserConfirmation,
	      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
	      _props$hashType = props.hashType,
	      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;

	  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

	  var _HashPathCoders$hashT = HashPathCoders[hashType],
	      encodePath = _HashPathCoders$hashT.encodePath,
	      decodePath = _HashPathCoders$hashT.decodePath;


	  var getDOMLocation = function getDOMLocation() {
	    var path = decodePath(getHashPath());

	    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

	    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

	    return (0, _LocationUtils.createLocation)(path);
	  };

	  var transitionManager = (0, _createTransitionManager2.default)();

	  var setState = function setState(nextState) {
	    _extends(history, nextState);

	    history.length = globalHistory.length;

	    transitionManager.notifyListeners(history.location, history.action);
	  };

	  var forceNextPop = false;
	  var ignorePath = null;

	  var handleHashChange = function handleHashChange() {
	    var path = getHashPath();
	    var encodedPath = encodePath(path);

	    if (path !== encodedPath) {
	      // Ensure we always have a properly-encoded hash.
	      replaceHashPath(encodedPath);
	    } else {
	      var location = getDOMLocation();
	      var prevLocation = history.location;

	      if (!forceNextPop && (0, _LocationUtils.locationsAreEqual)(prevLocation, location)) return; // A hashchange doesn't always == location change.

	      if (ignorePath === (0, _PathUtils.createPath)(location)) return; // Ignore this change; we already setState in push/replace.

	      ignorePath = null;

	      handlePop(location);
	    }
	  };

	  var handlePop = function handlePop(location) {
	    if (forceNextPop) {
	      forceNextPop = false;
	      setState();
	    } else {
	      var action = 'POP';

	      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	        if (ok) {
	          setState({ action: action, location: location });
	        } else {
	          revertPop(location);
	        }
	      });
	    }
	  };

	  var revertPop = function revertPop(fromLocation) {
	    var toLocation = history.location;

	    // TODO: We could probably make this more reliable by
	    // keeping a list of paths we've seen in sessionStorage.
	    // Instead, we just default to 0 for paths we don't know.

	    var toIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(toLocation));

	    if (toIndex === -1) toIndex = 0;

	    var fromIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(fromLocation));

	    if (fromIndex === -1) fromIndex = 0;

	    var delta = toIndex - fromIndex;

	    if (delta) {
	      forceNextPop = true;
	      go(delta);
	    }
	  };

	  // Ensure the hash is encoded properly before doing anything else.
	  var path = getHashPath();
	  var encodedPath = encodePath(path);

	  if (path !== encodedPath) replaceHashPath(encodedPath);

	  var initialLocation = getDOMLocation();
	  var allPaths = [(0, _PathUtils.createPath)(initialLocation)];

	  // Public interface

	  var createHref = function createHref(location) {
	    return '#' + encodePath(basename + (0, _PathUtils.createPath)(location));
	  };

	  var push = function push(path, state) {
	    (0, _warning2.default)(state === undefined, 'Hash history cannot push state; it is ignored');

	    var action = 'PUSH';
	    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;

	      var path = (0, _PathUtils.createPath)(location);
	      var encodedPath = encodePath(basename + path);
	      var hashChanged = getHashPath() !== encodedPath;

	      if (hashChanged) {
	        // We cannot tell if a hashchange was caused by a PUSH, so we'd
	        // rather setState here and ignore the hashchange. The caveat here
	        // is that other hash histories in the page will consider it a POP.
	        ignorePath = path;
	        pushHashPath(encodedPath);

	        var prevIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(history.location));
	        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

	        nextPaths.push(path);
	        allPaths = nextPaths;

	        setState({ action: action, location: location });
	      } else {
	        (0, _warning2.default)(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');

	        setState();
	      }
	    });
	  };

	  var replace = function replace(path, state) {
	    (0, _warning2.default)(state === undefined, 'Hash history cannot replace state; it is ignored');

	    var action = 'REPLACE';
	    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;

	      var path = (0, _PathUtils.createPath)(location);
	      var encodedPath = encodePath(basename + path);
	      var hashChanged = getHashPath() !== encodedPath;

	      if (hashChanged) {
	        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
	        // rather setState here and ignore the hashchange. The caveat here
	        // is that other hash histories in the page will consider it a POP.
	        ignorePath = path;
	        replaceHashPath(encodedPath);
	      }

	      var prevIndex = allPaths.indexOf((0, _PathUtils.createPath)(history.location));

	      if (prevIndex !== -1) allPaths[prevIndex] = path;

	      setState({ action: action, location: location });
	    });
	  };

	  var go = function go(n) {
	    (0, _warning2.default)(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

	    globalHistory.go(n);
	  };

	  var goBack = function goBack() {
	    return go(-1);
	  };

	  var goForward = function goForward() {
	    return go(1);
	  };

	  var listenerCount = 0;

	  var checkDOMListeners = function checkDOMListeners(delta) {
	    listenerCount += delta;

	    if (listenerCount === 1) {
	      (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
	    } else if (listenerCount === 0) {
	      (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
	    }
	  };

	  var isBlocked = false;

	  var block = function block() {
	    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	    var unblock = transitionManager.setPrompt(prompt);

	    if (!isBlocked) {
	      checkDOMListeners(1);
	      isBlocked = true;
	    }

	    return function () {
	      if (isBlocked) {
	        isBlocked = false;
	        checkDOMListeners(-1);
	      }

	      return unblock();
	    };
	  };

	  var listen = function listen(listener) {
	    var unlisten = transitionManager.appendListener(listener);
	    checkDOMListeners(1);

	    return function () {
	      checkDOMListeners(-1);
	      unlisten();
	    };
	  };

	  var history = {
	    length: globalHistory.length,
	    action: 'POP',
	    location: initialLocation,
	    createHref: createHref,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    block: block,
	    listen: listen
	  };

	  return history;
	};

	exports.default = createHashHistory;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(39);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _invariant = __webpack_require__(51);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var isModifiedEvent = function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	};

	/**
	 * The public API for rendering a history-aware <a>.
	 */

	var Link = function (_React$Component) {
	  _inherits(Link, _React$Component);

	  function Link() {
	    var _temp, _this, _ret;

	    _classCallCheck(this, Link);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
	      if (_this.props.onClick) _this.props.onClick(event);

	      if (!event.defaultPrevented && // onClick prevented default
	      event.button === 0 && // ignore right clicks
	      !_this.props.target && // let browser handle "target=_blank" etc.
	      !isModifiedEvent(event) // ignore clicks with modifier keys
	      ) {
	          event.preventDefault();

	          var history = _this.context.router.history;
	          var _this$props = _this.props,
	              replace = _this$props.replace,
	              to = _this$props.to;


	          if (replace) {
	            history.replace(to);
	          } else {
	            history.push(to);
	          }
	        }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  Link.prototype.render = function render() {
	    var _props = this.props,
	        replace = _props.replace,
	        to = _props.to,
	        innerRef = _props.innerRef,
	        props = _objectWithoutProperties(_props, ['replace', 'to', 'innerRef']); // eslint-disable-line no-unused-vars

	    (0, _invariant2.default)(this.context.router, 'You should not use <Link> outside a <Router>');

	    var href = this.context.router.history.createHref(typeof to === 'string' ? { pathname: to } : to);

	    return _react2.default.createElement('a', _extends({}, props, { onClick: this.handleClick, href: href, ref: innerRef }));
	  };

	  return Link;
	}(_react2.default.Component);

	Link.propTypes = {
	  onClick: _propTypes2.default.func,
	  target: _propTypes2.default.string,
	  replace: _propTypes2.default.bool,
	  to: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired,
	  innerRef: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func])
	};
	Link.defaultProps = {
	  replace: false
	};
	Link.contextTypes = {
	  router: _propTypes2.default.shape({
	    history: _propTypes2.default.shape({
	      push: _propTypes2.default.func.isRequired,
	      replace: _propTypes2.default.func.isRequired,
	      createHref: _propTypes2.default.func.isRequired
	    }).isRequired
	  }).isRequired
	};
	exports.default = Link;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _MemoryRouter = __webpack_require__(64);

	var _MemoryRouter2 = _interopRequireDefault(_MemoryRouter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _MemoryRouter2.default; // Written in this round about way for babel-transform-imports

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _warning = __webpack_require__(49);

	var _warning2 = _interopRequireDefault(_warning);

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(39);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _createMemoryHistory = __webpack_require__(65);

	var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

	var _Router = __webpack_require__(59);

	var _Router2 = _interopRequireDefault(_Router);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * The public API for a <Router> that stores location in memory.
	 */
	var MemoryRouter = function (_React$Component) {
	  _inherits(MemoryRouter, _React$Component);

	  function MemoryRouter() {
	    var _temp, _this, _ret;

	    _classCallCheck(this, MemoryRouter);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = (0, _createMemoryHistory2.default)(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  MemoryRouter.prototype.componentWillMount = function componentWillMount() {
	    (0, _warning2.default)(!this.props.history, '<MemoryRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { MemoryRouter as Router }`.');
	  };

	  MemoryRouter.prototype.render = function render() {
	    return _react2.default.createElement(_Router2.default, { history: this.history, children: this.props.children });
	  };

	  return MemoryRouter;
	}(_react2.default.Component);

	MemoryRouter.propTypes = {
	  initialEntries: _propTypes2.default.array,
	  initialIndex: _propTypes2.default.number,
	  getUserConfirmation: _propTypes2.default.func,
	  keyLength: _propTypes2.default.number,
	  children: _propTypes2.default.node
	};
	exports.default = MemoryRouter;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _warning = __webpack_require__(49);

	var _warning2 = _interopRequireDefault(_warning);

	var _PathUtils = __webpack_require__(66);

	var _LocationUtils = __webpack_require__(67);

	var _createTransitionManager = __webpack_require__(68);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var clamp = function clamp(n, lowerBound, upperBound) {
	  return Math.min(Math.max(n, lowerBound), upperBound);
	};

	/**
	 * Creates a history object that stores locations in memory.
	 */
	var createMemoryHistory = function createMemoryHistory() {
	  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var getUserConfirmation = props.getUserConfirmation,
	      _props$initialEntries = props.initialEntries,
	      initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
	      _props$initialIndex = props.initialIndex,
	      initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
	      _props$keyLength = props.keyLength,
	      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;


	  var transitionManager = (0, _createTransitionManager2.default)();

	  var setState = function setState(nextState) {
	    _extends(history, nextState);

	    history.length = history.entries.length;

	    transitionManager.notifyListeners(history.location, history.action);
	  };

	  var createKey = function createKey() {
	    return Math.random().toString(36).substr(2, keyLength);
	  };

	  var index = clamp(initialIndex, 0, initialEntries.length - 1);
	  var entries = initialEntries.map(function (entry) {
	    return typeof entry === 'string' ? (0, _LocationUtils.createLocation)(entry, undefined, createKey()) : (0, _LocationUtils.createLocation)(entry, undefined, entry.key || createKey());
	  });

	  // Public interface

	  var createHref = _PathUtils.createPath;

	  var push = function push(path, state) {
	    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

	    var action = 'PUSH';
	    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;

	      var prevIndex = history.index;
	      var nextIndex = prevIndex + 1;

	      var nextEntries = history.entries.slice(0);
	      if (nextEntries.length > nextIndex) {
	        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
	      } else {
	        nextEntries.push(location);
	      }

	      setState({
	        action: action,
	        location: location,
	        index: nextIndex,
	        entries: nextEntries
	      });
	    });
	  };

	  var replace = function replace(path, state) {
	    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

	    var action = 'REPLACE';
	    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;

	      history.entries[history.index] = location;

	      setState({ action: action, location: location });
	    });
	  };

	  var go = function go(n) {
	    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);

	    var action = 'POP';
	    var location = history.entries[nextIndex];

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (ok) {
	        setState({
	          action: action,
	          location: location,
	          index: nextIndex
	        });
	      } else {
	        // Mimic the behavior of DOM histories by
	        // causing a render after a cancelled POP.
	        setState();
	      }
	    });
	  };

	  var goBack = function goBack() {
	    return go(-1);
	  };

	  var goForward = function goForward() {
	    return go(1);
	  };

	  var canGo = function canGo(n) {
	    var nextIndex = history.index + n;
	    return nextIndex >= 0 && nextIndex < history.entries.length;
	  };

	  var block = function block() {
	    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	    return transitionManager.setPrompt(prompt);
	  };

	  var listen = function listen(listener) {
	    return transitionManager.appendListener(listener);
	  };

	  var history = {
	    length: entries.length,
	    action: 'POP',
	    location: entries[index],
	    index: index,
	    entries: entries,
	    createHref: createHref,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    canGo: canGo,
	    block: block,
	    listen: listen
	  };

	  return history;
	};

	exports.default = createMemoryHistory;

/***/ }),
/* 66 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var addLeadingSlash = exports.addLeadingSlash = function addLeadingSlash(path) {
	  return path.charAt(0) === '/' ? path : '/' + path;
	};

	var stripLeadingSlash = exports.stripLeadingSlash = function stripLeadingSlash(path) {
	  return path.charAt(0) === '/' ? path.substr(1) : path;
	};

	var hasBasename = exports.hasBasename = function hasBasename(path, prefix) {
	  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
	};

	var stripBasename = exports.stripBasename = function stripBasename(path, prefix) {
	  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
	};

	var stripTrailingSlash = exports.stripTrailingSlash = function stripTrailingSlash(path) {
	  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
	};

	var parsePath = exports.parsePath = function parsePath(path) {
	  var pathname = path || '/';
	  var search = '';
	  var hash = '';

	  var hashIndex = pathname.indexOf('#');
	  if (hashIndex !== -1) {
	    hash = pathname.substr(hashIndex);
	    pathname = pathname.substr(0, hashIndex);
	  }

	  var searchIndex = pathname.indexOf('?');
	  if (searchIndex !== -1) {
	    search = pathname.substr(searchIndex);
	    pathname = pathname.substr(0, searchIndex);
	  }

	  return {
	    pathname: pathname,
	    search: search === '?' ? '' : search,
	    hash: hash === '#' ? '' : hash
	  };
	};

	var createPath = exports.createPath = function createPath(location) {
	  var pathname = location.pathname,
	      search = location.search,
	      hash = location.hash;


	  var path = pathname || '/';

	  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

	  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

	  return path;
	};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.locationsAreEqual = exports.createLocation = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _resolvePathname = __webpack_require__(53);

	var _resolvePathname2 = _interopRequireDefault(_resolvePathname);

	var _valueEqual = __webpack_require__(54);

	var _valueEqual2 = _interopRequireDefault(_valueEqual);

	var _PathUtils = __webpack_require__(66);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createLocation = exports.createLocation = function createLocation(path, state, key, currentLocation) {
	  var location = void 0;
	  if (typeof path === 'string') {
	    // Two-arg form: push(path, state)
	    location = (0, _PathUtils.parsePath)(path);
	    location.state = state;
	  } else {
	    // One-arg form: push(location)
	    location = _extends({}, path);

	    if (location.pathname === undefined) location.pathname = '';

	    if (location.search) {
	      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
	    } else {
	      location.search = '';
	    }

	    if (location.hash) {
	      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
	    } else {
	      location.hash = '';
	    }

	    if (state !== undefined && location.state === undefined) location.state = state;
	  }

	  try {
	    location.pathname = decodeURI(location.pathname);
	  } catch (e) {
	    if (e instanceof URIError) {
	      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
	    } else {
	      throw e;
	    }
	  }

	  if (key) location.key = key;

	  if (currentLocation) {
	    // Resolve incomplete/relative pathname relative to current location.
	    if (!location.pathname) {
	      location.pathname = currentLocation.pathname;
	    } else if (location.pathname.charAt(0) !== '/') {
	      location.pathname = (0, _resolvePathname2.default)(location.pathname, currentLocation.pathname);
	    }
	  } else {
	    // When there is no prior location and pathname is empty, set it to /
	    if (!location.pathname) {
	      location.pathname = '/';
	    }
	  }

	  return location;
	};

	var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
	  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0, _valueEqual2.default)(a.state, b.state);
	};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _warning = __webpack_require__(49);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createTransitionManager = function createTransitionManager() {
	  var prompt = null;

	  var setPrompt = function setPrompt(nextPrompt) {
	    (0, _warning2.default)(prompt == null, 'A history supports only one prompt at a time');

	    prompt = nextPrompt;

	    return function () {
	      if (prompt === nextPrompt) prompt = null;
	    };
	  };

	  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
	    // TODO: If another transition starts while we're still confirming
	    // the previous one, we may end up in a weird state. Figure out the
	    // best way to handle this.
	    if (prompt != null) {
	      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

	      if (typeof result === 'string') {
	        if (typeof getUserConfirmation === 'function') {
	          getUserConfirmation(result, callback);
	        } else {
	          (0, _warning2.default)(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

	          callback(true);
	        }
	      } else {
	        // Return false from a transition hook to cancel the transition.
	        callback(result !== false);
	      }
	    } else {
	      callback(true);
	    }
	  };

	  var listeners = [];

	  var appendListener = function appendListener(fn) {
	    var isActive = true;

	    var listener = function listener() {
	      if (isActive) fn.apply(undefined, arguments);
	    };

	    listeners.push(listener);

	    return function () {
	      isActive = false;
	      listeners = listeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  };

	  var notifyListeners = function notifyListeners() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    listeners.forEach(function (listener) {
	      return listener.apply(undefined, args);
	    });
	  };

	  return {
	    setPrompt: setPrompt,
	    confirmTransitionTo: confirmTransitionTo,
	    appendListener: appendListener,
	    notifyListeners: notifyListeners
	  };
	};

	exports.default = createTransitionManager;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(39);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _Route = __webpack_require__(70);

	var _Route2 = _interopRequireDefault(_Route);

	var _Link = __webpack_require__(62);

	var _Link2 = _interopRequireDefault(_Link);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	/**
	 * A <Link> wrapper that knows if it's "active" or not.
	 */
	var NavLink = function NavLink(_ref) {
	  var to = _ref.to,
	      exact = _ref.exact,
	      strict = _ref.strict,
	      location = _ref.location,
	      activeClassName = _ref.activeClassName,
	      className = _ref.className,
	      activeStyle = _ref.activeStyle,
	      style = _ref.style,
	      getIsActive = _ref.isActive,
	      ariaCurrent = _ref.ariaCurrent,
	      rest = _objectWithoutProperties(_ref, ['to', 'exact', 'strict', 'location', 'activeClassName', 'className', 'activeStyle', 'style', 'isActive', 'ariaCurrent']);

	  return _react2.default.createElement(_Route2.default, {
	    path: (typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object' ? to.pathname : to,
	    exact: exact,
	    strict: strict,
	    location: location,
	    children: function children(_ref2) {
	      var location = _ref2.location,
	          match = _ref2.match;

	      var isActive = !!(getIsActive ? getIsActive(match, location) : match);

	      return _react2.default.createElement(_Link2.default, _extends({
	        to: to,
	        className: isActive ? [className, activeClassName].filter(function (i) {
	          return i;
	        }).join(' ') : className,
	        style: isActive ? _extends({}, style, activeStyle) : style,
	        'aria-current': isActive && ariaCurrent
	      }, rest));
	    }
	  });
	};

	NavLink.propTypes = {
	  to: _Link2.default.propTypes.to,
	  exact: _propTypes2.default.bool,
	  strict: _propTypes2.default.bool,
	  location: _propTypes2.default.object,
	  activeClassName: _propTypes2.default.string,
	  className: _propTypes2.default.string,
	  activeStyle: _propTypes2.default.object,
	  style: _propTypes2.default.object,
	  isActive: _propTypes2.default.func,
	  ariaCurrent: _propTypes2.default.oneOf(['page', 'step', 'location', 'true'])
	};

	NavLink.defaultProps = {
	  activeClassName: 'active',
	  ariaCurrent: 'true'
	};

	exports.default = NavLink;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _Route = __webpack_require__(71);

	var _Route2 = _interopRequireDefault(_Route);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Route2.default; // Written in this round about way for babel-transform-imports

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _warning = __webpack_require__(49);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(51);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(39);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _matchPath = __webpack_require__(72);

	var _matchPath2 = _interopRequireDefault(_matchPath);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var isEmptyChildren = function isEmptyChildren(children) {
	  return _react2.default.Children.count(children) === 0;
	};

	/**
	 * The public API for matching a single path and rendering.
	 */

	var Route = function (_React$Component) {
	  _inherits(Route, _React$Component);

	  function Route() {
	    var _temp, _this, _ret;

	    _classCallCheck(this, Route);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      match: _this.computeMatch(_this.props, _this.context.router)
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  Route.prototype.getChildContext = function getChildContext() {
	    return {
	      router: _extends({}, this.context.router, {
	        route: {
	          location: this.props.location || this.context.router.route.location,
	          match: this.state.match
	        }
	      })
	    };
	  };

	  Route.prototype.computeMatch = function computeMatch(_ref, router) {
	    var computedMatch = _ref.computedMatch,
	        location = _ref.location,
	        path = _ref.path,
	        strict = _ref.strict,
	        exact = _ref.exact,
	        sensitive = _ref.sensitive;

	    if (computedMatch) return computedMatch; // <Switch> already computed the match for us

	    (0, _invariant2.default)(router, 'You should not use <Route> or withRouter() outside a <Router>');

	    var route = router.route;

	    var pathname = (location || route.location).pathname;

	    return path ? (0, _matchPath2.default)(pathname, { path: path, strict: strict, exact: exact, sensitive: sensitive }) : route.match;
	  };

	  Route.prototype.componentWillMount = function componentWillMount() {
	    (0, _warning2.default)(!(this.props.component && this.props.render), 'You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored');

	    (0, _warning2.default)(!(this.props.component && this.props.children && !isEmptyChildren(this.props.children)), 'You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored');

	    (0, _warning2.default)(!(this.props.render && this.props.children && !isEmptyChildren(this.props.children)), 'You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored');
	  };

	  Route.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
	    (0, _warning2.default)(!(nextProps.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

	    (0, _warning2.default)(!(!nextProps.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');

	    this.setState({
	      match: this.computeMatch(nextProps, nextContext.router)
	    });
	  };

	  Route.prototype.render = function render() {
	    var match = this.state.match;
	    var _props = this.props,
	        children = _props.children,
	        component = _props.component,
	        render = _props.render;
	    var _context$router = this.context.router,
	        history = _context$router.history,
	        route = _context$router.route,
	        staticContext = _context$router.staticContext;

	    var location = this.props.location || route.location;
	    var props = { match: match, location: location, history: history, staticContext: staticContext };

	    return component ? // component prop gets first priority, only called if there's a match
	    match ? _react2.default.createElement(component, props) : null : render ? // render prop is next, only called if there's a match
	    match ? render(props) : null : children ? // children come last, always called
	    typeof children === 'function' ? children(props) : !isEmptyChildren(children) ? _react2.default.Children.only(children) : null : null;
	  };

	  return Route;
	}(_react2.default.Component);

	Route.propTypes = {
	  computedMatch: _propTypes2.default.object, // private, from <Switch>
	  path: _propTypes2.default.string,
	  exact: _propTypes2.default.bool,
	  strict: _propTypes2.default.bool,
	  sensitive: _propTypes2.default.bool,
	  component: _propTypes2.default.func,
	  render: _propTypes2.default.func,
	  children: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.node]),
	  location: _propTypes2.default.object
	};
	Route.contextTypes = {
	  router: _propTypes2.default.shape({
	    history: _propTypes2.default.object.isRequired,
	    route: _propTypes2.default.object.isRequired,
	    staticContext: _propTypes2.default.object
	  })
	};
	Route.childContextTypes = {
	  router: _propTypes2.default.object.isRequired
	};
	exports.default = Route;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _pathToRegexp = __webpack_require__(73);

	var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var patternCache = {};
	var cacheLimit = 10000;
	var cacheCount = 0;

	var compilePath = function compilePath(pattern, options) {
	  var cacheKey = '' + options.end + options.strict + options.sensitive;
	  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

	  if (cache[pattern]) return cache[pattern];

	  var keys = [];
	  var re = (0, _pathToRegexp2.default)(pattern, keys, options);
	  var compiledPattern = { re: re, keys: keys };

	  if (cacheCount < cacheLimit) {
	    cache[pattern] = compiledPattern;
	    cacheCount++;
	  }

	  return compiledPattern;
	};

	/**
	 * Public API for matching a URL pathname to a path pattern.
	 */
	var matchPath = function matchPath(pathname) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (typeof options === 'string') options = { path: options };

	  var _options = options,
	      _options$path = _options.path,
	      path = _options$path === undefined ? '/' : _options$path,
	      _options$exact = _options.exact,
	      exact = _options$exact === undefined ? false : _options$exact,
	      _options$strict = _options.strict,
	      strict = _options$strict === undefined ? false : _options$strict,
	      _options$sensitive = _options.sensitive,
	      sensitive = _options$sensitive === undefined ? false : _options$sensitive;

	  var _compilePath = compilePath(path, { end: exact, strict: strict, sensitive: sensitive }),
	      re = _compilePath.re,
	      keys = _compilePath.keys;

	  var match = re.exec(pathname);

	  if (!match) return null;

	  var url = match[0],
	      values = match.slice(1);

	  var isExact = pathname === url;

	  if (exact && !isExact) return null;

	  return {
	    path: path, // the path pattern used to match
	    url: path === '/' && url === '' ? '/' : url, // the matched portion of the URL
	    isExact: isExact, // whether or not we matched exactly
	    params: keys.reduce(function (memo, key, index) {
	      memo[key.name] = values[index];
	      return memo;
	    }, {})
	  };
	};

	exports.default = matchPath;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	var isarray = __webpack_require__(74)

	/**
	 * Expose `pathToRegexp`.
	 */
	module.exports = pathToRegexp
	module.exports.parse = parse
	module.exports.compile = compile
	module.exports.tokensToFunction = tokensToFunction
	module.exports.tokensToRegExp = tokensToRegExp

	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	  // Match escaped characters that would otherwise appear in future matches.
	  // This allows the user to escape special characters that won't transform.
	  '(\\\\.)',
	  // Match Express-style parameters and un-named parameters with a prefix
	  // and optional suffixes. Matches appear as:
	  //
	  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
	].join('|'), 'g')

	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {string}  str
	 * @param  {Object=} options
	 * @return {!Array}
	 */
	function parse (str, options) {
	  var tokens = []
	  var key = 0
	  var index = 0
	  var path = ''
	  var defaultDelimiter = options && options.delimiter || '/'
	  var res

	  while ((res = PATH_REGEXP.exec(str)) != null) {
	    var m = res[0]
	    var escaped = res[1]
	    var offset = res.index
	    path += str.slice(index, offset)
	    index = offset + m.length

	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1]
	      continue
	    }

	    var next = str[index]
	    var prefix = res[2]
	    var name = res[3]
	    var capture = res[4]
	    var group = res[5]
	    var modifier = res[6]
	    var asterisk = res[7]

	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path)
	      path = ''
	    }

	    var partial = prefix != null && next != null && next !== prefix
	    var repeat = modifier === '+' || modifier === '*'
	    var optional = modifier === '?' || modifier === '*'
	    var delimiter = res[2] || defaultDelimiter
	    var pattern = capture || group

	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      partial: partial,
	      asterisk: !!asterisk,
	      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
	    })
	  }

	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index)
	  }

	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path)
	  }

	  return tokens
	}

	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {string}             str
	 * @param  {Object=}            options
	 * @return {!function(Object=, Object=)}
	 */
	function compile (str, options) {
	  return tokensToFunction(parse(str, options))
	}

	/**
	 * Prettier encoding of URI path segments.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeURIComponentPretty (str) {
	  return encodeURI(str).replace(/[\/?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeAsterisk (str) {
	  return encodeURI(str).replace(/[?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction (tokens) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length)

	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] === 'object') {
	      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
	    }
	  }

	  return function (obj, opts) {
	    var path = ''
	    var data = obj || {}
	    var options = opts || {}
	    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i]

	      if (typeof token === 'string') {
	        path += token

	        continue
	      }

	      var value = data[token.name]
	      var segment

	      if (value == null) {
	        if (token.optional) {
	          // Prepend partial segment prefixes.
	          if (token.partial) {
	            path += token.prefix
	          }

	          continue
	        } else {
	          throw new TypeError('Expected "' + token.name + '" to be defined')
	        }
	      }

	      if (isarray(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
	        }

	        if (value.length === 0) {
	          if (token.optional) {
	            continue
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to not be empty')
	          }
	        }

	        for (var j = 0; j < value.length; j++) {
	          segment = encode(value[j])

	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
	          }

	          path += (j === 0 ? token.prefix : token.delimiter) + segment
	        }

	        continue
	      }

	      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	      }

	      path += token.prefix + segment
	    }

	    return path
	  }
	}

	/**
	 * Escape a regular expression string.
	 *
	 * @param  {string} str
	 * @return {string}
	 */
	function escapeString (str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
	}

	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {string} group
	 * @return {string}
	 */
	function escapeGroup (group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1')
	}

	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {!RegExp} re
	 * @param  {Array}   keys
	 * @return {!RegExp}
	 */
	function attachKeys (re, keys) {
	  re.keys = keys
	  return re
	}

	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {string}
	 */
	function flags (options) {
	  return options.sensitive ? '' : 'i'
	}

	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {!RegExp} path
	 * @param  {!Array}  keys
	 * @return {!RegExp}
	 */
	function regexpToRegexp (path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g)

	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name: i,
	        prefix: null,
	        delimiter: null,
	        optional: false,
	        repeat: false,
	        partial: false,
	        asterisk: false,
	        pattern: null
	      })
	    }
	  }

	  return attachKeys(path, keys)
	}

	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {!Array}  path
	 * @param  {Array}   keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function arrayToRegexp (path, keys, options) {
	  var parts = []

	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source)
	  }

	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

	  return attachKeys(regexp, keys)
	}

	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {string}  path
	 * @param  {!Array}  keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function stringToRegexp (path, keys, options) {
	  return tokensToRegExp(parse(path, options), keys, options)
	}

	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {!Array}          tokens
	 * @param  {(Array|Object)=} keys
	 * @param  {Object=}         options
	 * @return {!RegExp}
	 */
	function tokensToRegExp (tokens, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options)
	    keys = []
	  }

	  options = options || {}

	  var strict = options.strict
	  var end = options.end !== false
	  var route = ''

	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i]

	    if (typeof token === 'string') {
	      route += escapeString(token)
	    } else {
	      var prefix = escapeString(token.prefix)
	      var capture = '(?:' + token.pattern + ')'

	      keys.push(token)

	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*'
	      }

	      if (token.optional) {
	        if (!token.partial) {
	          capture = '(?:' + prefix + '(' + capture + '))?'
	        } else {
	          capture = prefix + '(' + capture + ')?'
	        }
	      } else {
	        capture = prefix + '(' + capture + ')'
	      }

	      route += capture
	    }
	  }

	  var delimiter = escapeString(options.delimiter || '/')
	  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
	  }

	  if (end) {
	    route += '$'
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
	  }

	  return attachKeys(new RegExp('^' + route, flags(options)), keys)
	}

	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(string|RegExp|Array)} path
	 * @param  {(Array|Object)=}       keys
	 * @param  {Object=}               options
	 * @return {!RegExp}
	 */
	function pathToRegexp (path, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options)
	    keys = []
	  }

	  options = options || {}

	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, /** @type {!Array} */ (keys))
	  }

	  if (isarray(path)) {
	    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
	  }

	  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
	}


/***/ }),
/* 74 */
/***/ (function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _Prompt = __webpack_require__(76);

	var _Prompt2 = _interopRequireDefault(_Prompt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Prompt2.default; // Written in this round about way for babel-transform-imports

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(39);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _invariant = __webpack_require__(51);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * The public API for prompting the user before navigating away
	 * from a screen with a component.
	 */
	var Prompt = function (_React$Component) {
	  _inherits(Prompt, _React$Component);

	  function Prompt() {
	    _classCallCheck(this, Prompt);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  Prompt.prototype.enable = function enable(message) {
	    if (this.unblock) this.unblock();

	    this.unblock = this.context.router.history.block(message);
	  };

	  Prompt.prototype.disable = function disable() {
	    if (this.unblock) {
	      this.unblock();
	      this.unblock = null;
	    }
	  };

	  Prompt.prototype.componentWillMount = function componentWillMount() {
	    (0, _invariant2.default)(this.context.router, 'You should not use <Prompt> outside a <Router>');

	    if (this.props.when) this.enable(this.props.message);
	  };

	  Prompt.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (nextProps.when) {
	      if (!this.props.when || this.props.message !== nextProps.message) this.enable(nextProps.message);
	    } else {
	      this.disable();
	    }
	  };

	  Prompt.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.disable();
	  };

	  Prompt.prototype.render = function render() {
	    return null;
	  };

	  return Prompt;
	}(_react2.default.Component);

	Prompt.propTypes = {
	  when: _propTypes2.default.bool,
	  message: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]).isRequired
	};
	Prompt.defaultProps = {
	  when: true
	};
	Prompt.contextTypes = {
	  router: _propTypes2.default.shape({
	    history: _propTypes2.default.shape({
	      block: _propTypes2.default.func.isRequired
	    }).isRequired
	  }).isRequired
	};
	exports.default = Prompt;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _Redirect = __webpack_require__(78);

	var _Redirect2 = _interopRequireDefault(_Redirect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Redirect2.default; // Written in this round about way for babel-transform-imports

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(39);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _warning = __webpack_require__(49);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(51);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _history = __webpack_require__(79);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * The public API for updating the location programmatically
	 * with a component.
	 */
	var Redirect = function (_React$Component) {
	  _inherits(Redirect, _React$Component);

	  function Redirect() {
	    _classCallCheck(this, Redirect);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  Redirect.prototype.isStatic = function isStatic() {
	    return this.context.router && this.context.router.staticContext;
	  };

	  Redirect.prototype.componentWillMount = function componentWillMount() {
	    (0, _invariant2.default)(this.context.router, 'You should not use <Redirect> outside a <Router>');

	    if (this.isStatic()) this.perform();
	  };

	  Redirect.prototype.componentDidMount = function componentDidMount() {
	    if (!this.isStatic()) this.perform();
	  };

	  Redirect.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	    var prevTo = (0, _history.createLocation)(prevProps.to);
	    var nextTo = (0, _history.createLocation)(this.props.to);

	    if ((0, _history.locationsAreEqual)(prevTo, nextTo)) {
	      (0, _warning2.default)(false, 'You tried to redirect to the same route you\'re currently on: ' + ('"' + nextTo.pathname + nextTo.search + '"'));
	      return;
	    }

	    this.perform();
	  };

	  Redirect.prototype.perform = function perform() {
	    var history = this.context.router.history;
	    var _props = this.props,
	        push = _props.push,
	        to = _props.to;


	    if (push) {
	      history.push(to);
	    } else {
	      history.replace(to);
	    }
	  };

	  Redirect.prototype.render = function render() {
	    return null;
	  };

	  return Redirect;
	}(_react2.default.Component);

	Redirect.propTypes = {
	  push: _propTypes2.default.bool,
	  from: _propTypes2.default.string,
	  to: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired
	};
	Redirect.defaultProps = {
	  push: false
	};
	Redirect.contextTypes = {
	  router: _propTypes2.default.shape({
	    history: _propTypes2.default.shape({
	      push: _propTypes2.default.func.isRequired,
	      replace: _propTypes2.default.func.isRequired
	    }).isRequired,
	    staticContext: _propTypes2.default.object
	  }).isRequired
	};
	exports.default = Redirect;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.createPath = exports.parsePath = exports.locationsAreEqual = exports.createLocation = exports.createMemoryHistory = exports.createHashHistory = exports.createBrowserHistory = undefined;

	var _LocationUtils = __webpack_require__(67);

	Object.defineProperty(exports, 'createLocation', {
	  enumerable: true,
	  get: function get() {
	    return _LocationUtils.createLocation;
	  }
	});
	Object.defineProperty(exports, 'locationsAreEqual', {
	  enumerable: true,
	  get: function get() {
	    return _LocationUtils.locationsAreEqual;
	  }
	});

	var _PathUtils = __webpack_require__(66);

	Object.defineProperty(exports, 'parsePath', {
	  enumerable: true,
	  get: function get() {
	    return _PathUtils.parsePath;
	  }
	});
	Object.defineProperty(exports, 'createPath', {
	  enumerable: true,
	  get: function get() {
	    return _PathUtils.createPath;
	  }
	});

	var _createBrowserHistory2 = __webpack_require__(80);

	var _createBrowserHistory3 = _interopRequireDefault(_createBrowserHistory2);

	var _createHashHistory2 = __webpack_require__(82);

	var _createHashHistory3 = _interopRequireDefault(_createHashHistory2);

	var _createMemoryHistory2 = __webpack_require__(65);

	var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.createBrowserHistory = _createBrowserHistory3.default;
	exports.createHashHistory = _createHashHistory3.default;
	exports.createMemoryHistory = _createMemoryHistory3.default;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _warning = __webpack_require__(49);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(51);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _LocationUtils = __webpack_require__(67);

	var _PathUtils = __webpack_require__(66);

	var _createTransitionManager = __webpack_require__(68);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	var _DOMUtils = __webpack_require__(81);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PopStateEvent = 'popstate';
	var HashChangeEvent = 'hashchange';

	var getHistoryState = function getHistoryState() {
	  try {
	    return window.history.state || {};
	  } catch (e) {
	    // IE 11 sometimes throws when accessing window.history.state
	    // See https://github.com/ReactTraining/history/pull/289
	    return {};
	  }
	};

	/**
	 * Creates a history object that uses the HTML5 history API including
	 * pushState, replaceState, and the popstate event.
	 */
	var createBrowserHistory = function createBrowserHistory() {
	  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Browser history needs a DOM');

	  var globalHistory = window.history;
	  var canUseHistory = (0, _DOMUtils.supportsHistory)();
	  var needsHashChangeListener = !(0, _DOMUtils.supportsPopStateOnHashChange)();

	  var _props$forceRefresh = props.forceRefresh,
	      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
	      _props$getUserConfirm = props.getUserConfirmation,
	      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
	      _props$keyLength = props.keyLength,
	      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

	  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

	  var getDOMLocation = function getDOMLocation(historyState) {
	    var _ref = historyState || {},
	        key = _ref.key,
	        state = _ref.state;

	    var _window$location = window.location,
	        pathname = _window$location.pathname,
	        search = _window$location.search,
	        hash = _window$location.hash;


	    var path = pathname + search + hash;

	    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

	    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

	    return (0, _LocationUtils.createLocation)(path, state, key);
	  };

	  var createKey = function createKey() {
	    return Math.random().toString(36).substr(2, keyLength);
	  };

	  var transitionManager = (0, _createTransitionManager2.default)();

	  var setState = function setState(nextState) {
	    _extends(history, nextState);

	    history.length = globalHistory.length;

	    transitionManager.notifyListeners(history.location, history.action);
	  };

	  var handlePopState = function handlePopState(event) {
	    // Ignore extraneous popstate events in WebKit.
	    if ((0, _DOMUtils.isExtraneousPopstateEvent)(event)) return;

	    handlePop(getDOMLocation(event.state));
	  };

	  var handleHashChange = function handleHashChange() {
	    handlePop(getDOMLocation(getHistoryState()));
	  };

	  var forceNextPop = false;

	  var handlePop = function handlePop(location) {
	    if (forceNextPop) {
	      forceNextPop = false;
	      setState();
	    } else {
	      var action = 'POP';

	      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	        if (ok) {
	          setState({ action: action, location: location });
	        } else {
	          revertPop(location);
	        }
	      });
	    }
	  };

	  var revertPop = function revertPop(fromLocation) {
	    var toLocation = history.location;

	    // TODO: We could probably make this more reliable by
	    // keeping a list of keys we've seen in sessionStorage.
	    // Instead, we just default to 0 for keys we don't know.

	    var toIndex = allKeys.indexOf(toLocation.key);

	    if (toIndex === -1) toIndex = 0;

	    var fromIndex = allKeys.indexOf(fromLocation.key);

	    if (fromIndex === -1) fromIndex = 0;

	    var delta = toIndex - fromIndex;

	    if (delta) {
	      forceNextPop = true;
	      go(delta);
	    }
	  };

	  var initialLocation = getDOMLocation(getHistoryState());
	  var allKeys = [initialLocation.key];

	  // Public interface

	  var createHref = function createHref(location) {
	    return basename + (0, _PathUtils.createPath)(location);
	  };

	  var push = function push(path, state) {
	    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

	    var action = 'PUSH';
	    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;

	      var href = createHref(location);
	      var key = location.key,
	          state = location.state;


	      if (canUseHistory) {
	        globalHistory.pushState({ key: key, state: state }, null, href);

	        if (forceRefresh) {
	          window.location.href = href;
	        } else {
	          var prevIndex = allKeys.indexOf(history.location.key);
	          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

	          nextKeys.push(location.key);
	          allKeys = nextKeys;

	          setState({ action: action, location: location });
	        }
	      } else {
	        (0, _warning2.default)(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

	        window.location.href = href;
	      }
	    });
	  };

	  var replace = function replace(path, state) {
	    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

	    var action = 'REPLACE';
	    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;

	      var href = createHref(location);
	      var key = location.key,
	          state = location.state;


	      if (canUseHistory) {
	        globalHistory.replaceState({ key: key, state: state }, null, href);

	        if (forceRefresh) {
	          window.location.replace(href);
	        } else {
	          var prevIndex = allKeys.indexOf(history.location.key);

	          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

	          setState({ action: action, location: location });
	        }
	      } else {
	        (0, _warning2.default)(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

	        window.location.replace(href);
	      }
	    });
	  };

	  var go = function go(n) {
	    globalHistory.go(n);
	  };

	  var goBack = function goBack() {
	    return go(-1);
	  };

	  var goForward = function goForward() {
	    return go(1);
	  };

	  var listenerCount = 0;

	  var checkDOMListeners = function checkDOMListeners(delta) {
	    listenerCount += delta;

	    if (listenerCount === 1) {
	      (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

	      if (needsHashChangeListener) (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
	    } else if (listenerCount === 0) {
	      (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);

	      if (needsHashChangeListener) (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
	    }
	  };

	  var isBlocked = false;

	  var block = function block() {
	    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	    var unblock = transitionManager.setPrompt(prompt);

	    if (!isBlocked) {
	      checkDOMListeners(1);
	      isBlocked = true;
	    }

	    return function () {
	      if (isBlocked) {
	        isBlocked = false;
	        checkDOMListeners(-1);
	      }

	      return unblock();
	    };
	  };

	  var listen = function listen(listener) {
	    var unlisten = transitionManager.appendListener(listener);
	    checkDOMListeners(1);

	    return function () {
	      checkDOMListeners(-1);
	      unlisten();
	    };
	  };

	  var history = {
	    length: globalHistory.length,
	    action: 'POP',
	    location: initialLocation,
	    createHref: createHref,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    block: block,
	    listen: listen
	  };

	  return history;
	};

	exports.default = createBrowserHistory;

/***/ }),
/* 81 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
	  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
	};

	var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
	  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
	};

	var getConfirmation = exports.getConfirmation = function getConfirmation(message, callback) {
	  return callback(window.confirm(message));
	}; // eslint-disable-line no-alert

	/**
	 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
	 *
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
	 */
	var supportsHistory = exports.supportsHistory = function supportsHistory() {
	  var ua = window.navigator.userAgent;

	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

	  return window.history && 'pushState' in window.history;
	};

	/**
	 * Returns true if browser fires popstate on hash change.
	 * IE10 and IE11 do not.
	 */
	var supportsPopStateOnHashChange = exports.supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
	  return window.navigator.userAgent.indexOf('Trident') === -1;
	};

	/**
	 * Returns false if using go(n) with hash history causes a full page reload.
	 */
	var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
	  return window.navigator.userAgent.indexOf('Firefox') === -1;
	};

	/**
	 * Returns true if a given popstate event is an extraneous WebKit event.
	 * Accounts for the fact that Chrome on iOS fires real popstate events
	 * containing undefined state when pressing the back button.
	 */
	var isExtraneousPopstateEvent = exports.isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
	  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
	};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _warning = __webpack_require__(49);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(51);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _LocationUtils = __webpack_require__(67);

	var _PathUtils = __webpack_require__(66);

	var _createTransitionManager = __webpack_require__(68);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	var _DOMUtils = __webpack_require__(81);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HashChangeEvent = 'hashchange';

	var HashPathCoders = {
	  hashbang: {
	    encodePath: function encodePath(path) {
	      return path.charAt(0) === '!' ? path : '!/' + (0, _PathUtils.stripLeadingSlash)(path);
	    },
	    decodePath: function decodePath(path) {
	      return path.charAt(0) === '!' ? path.substr(1) : path;
	    }
	  },
	  noslash: {
	    encodePath: _PathUtils.stripLeadingSlash,
	    decodePath: _PathUtils.addLeadingSlash
	  },
	  slash: {
	    encodePath: _PathUtils.addLeadingSlash,
	    decodePath: _PathUtils.addLeadingSlash
	  }
	};

	var getHashPath = function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  var href = window.location.href;
	  var hashIndex = href.indexOf('#');
	  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
	};

	var pushHashPath = function pushHashPath(path) {
	  return window.location.hash = path;
	};

	var replaceHashPath = function replaceHashPath(path) {
	  var hashIndex = window.location.href.indexOf('#');

	  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
	};

	var createHashHistory = function createHashHistory() {
	  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Hash history needs a DOM');

	  var globalHistory = window.history;
	  var canGoWithoutReload = (0, _DOMUtils.supportsGoWithoutReloadUsingHash)();

	  var _props$getUserConfirm = props.getUserConfirmation,
	      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
	      _props$hashType = props.hashType,
	      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;

	  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

	  var _HashPathCoders$hashT = HashPathCoders[hashType],
	      encodePath = _HashPathCoders$hashT.encodePath,
	      decodePath = _HashPathCoders$hashT.decodePath;


	  var getDOMLocation = function getDOMLocation() {
	    var path = decodePath(getHashPath());

	    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

	    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

	    return (0, _LocationUtils.createLocation)(path);
	  };

	  var transitionManager = (0, _createTransitionManager2.default)();

	  var setState = function setState(nextState) {
	    _extends(history, nextState);

	    history.length = globalHistory.length;

	    transitionManager.notifyListeners(history.location, history.action);
	  };

	  var forceNextPop = false;
	  var ignorePath = null;

	  var handleHashChange = function handleHashChange() {
	    var path = getHashPath();
	    var encodedPath = encodePath(path);

	    if (path !== encodedPath) {
	      // Ensure we always have a properly-encoded hash.
	      replaceHashPath(encodedPath);
	    } else {
	      var location = getDOMLocation();
	      var prevLocation = history.location;

	      if (!forceNextPop && (0, _LocationUtils.locationsAreEqual)(prevLocation, location)) return; // A hashchange doesn't always == location change.

	      if (ignorePath === (0, _PathUtils.createPath)(location)) return; // Ignore this change; we already setState in push/replace.

	      ignorePath = null;

	      handlePop(location);
	    }
	  };

	  var handlePop = function handlePop(location) {
	    if (forceNextPop) {
	      forceNextPop = false;
	      setState();
	    } else {
	      var action = 'POP';

	      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	        if (ok) {
	          setState({ action: action, location: location });
	        } else {
	          revertPop(location);
	        }
	      });
	    }
	  };

	  var revertPop = function revertPop(fromLocation) {
	    var toLocation = history.location;

	    // TODO: We could probably make this more reliable by
	    // keeping a list of paths we've seen in sessionStorage.
	    // Instead, we just default to 0 for paths we don't know.

	    var toIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(toLocation));

	    if (toIndex === -1) toIndex = 0;

	    var fromIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(fromLocation));

	    if (fromIndex === -1) fromIndex = 0;

	    var delta = toIndex - fromIndex;

	    if (delta) {
	      forceNextPop = true;
	      go(delta);
	    }
	  };

	  // Ensure the hash is encoded properly before doing anything else.
	  var path = getHashPath();
	  var encodedPath = encodePath(path);

	  if (path !== encodedPath) replaceHashPath(encodedPath);

	  var initialLocation = getDOMLocation();
	  var allPaths = [(0, _PathUtils.createPath)(initialLocation)];

	  // Public interface

	  var createHref = function createHref(location) {
	    return '#' + encodePath(basename + (0, _PathUtils.createPath)(location));
	  };

	  var push = function push(path, state) {
	    (0, _warning2.default)(state === undefined, 'Hash history cannot push state; it is ignored');

	    var action = 'PUSH';
	    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;

	      var path = (0, _PathUtils.createPath)(location);
	      var encodedPath = encodePath(basename + path);
	      var hashChanged = getHashPath() !== encodedPath;

	      if (hashChanged) {
	        // We cannot tell if a hashchange was caused by a PUSH, so we'd
	        // rather setState here and ignore the hashchange. The caveat here
	        // is that other hash histories in the page will consider it a POP.
	        ignorePath = path;
	        pushHashPath(encodedPath);

	        var prevIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(history.location));
	        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

	        nextPaths.push(path);
	        allPaths = nextPaths;

	        setState({ action: action, location: location });
	      } else {
	        (0, _warning2.default)(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');

	        setState();
	      }
	    });
	  };

	  var replace = function replace(path, state) {
	    (0, _warning2.default)(state === undefined, 'Hash history cannot replace state; it is ignored');

	    var action = 'REPLACE';
	    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;

	      var path = (0, _PathUtils.createPath)(location);
	      var encodedPath = encodePath(basename + path);
	      var hashChanged = getHashPath() !== encodedPath;

	      if (hashChanged) {
	        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
	        // rather setState here and ignore the hashchange. The caveat here
	        // is that other hash histories in the page will consider it a POP.
	        ignorePath = path;
	        replaceHashPath(encodedPath);
	      }

	      var prevIndex = allPaths.indexOf((0, _PathUtils.createPath)(history.location));

	      if (prevIndex !== -1) allPaths[prevIndex] = path;

	      setState({ action: action, location: location });
	    });
	  };

	  var go = function go(n) {
	    (0, _warning2.default)(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

	    globalHistory.go(n);
	  };

	  var goBack = function goBack() {
	    return go(-1);
	  };

	  var goForward = function goForward() {
	    return go(1);
	  };

	  var listenerCount = 0;

	  var checkDOMListeners = function checkDOMListeners(delta) {
	    listenerCount += delta;

	    if (listenerCount === 1) {
	      (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
	    } else if (listenerCount === 0) {
	      (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
	    }
	  };

	  var isBlocked = false;

	  var block = function block() {
	    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	    var unblock = transitionManager.setPrompt(prompt);

	    if (!isBlocked) {
	      checkDOMListeners(1);
	      isBlocked = true;
	    }

	    return function () {
	      if (isBlocked) {
	        isBlocked = false;
	        checkDOMListeners(-1);
	      }

	      return unblock();
	    };
	  };

	  var listen = function listen(listener) {
	    var unlisten = transitionManager.appendListener(listener);
	    checkDOMListeners(1);

	    return function () {
	      checkDOMListeners(-1);
	      unlisten();
	    };
	  };

	  var history = {
	    length: globalHistory.length,
	    action: 'POP',
	    location: initialLocation,
	    createHref: createHref,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    block: block,
	    listen: listen
	  };

	  return history;
	};

	exports.default = createHashHistory;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _StaticRouter = __webpack_require__(84);

	var _StaticRouter2 = _interopRequireDefault(_StaticRouter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _StaticRouter2.default; // Written in this round about way for babel-transform-imports

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _warning = __webpack_require__(49);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(51);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(39);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _PathUtils = __webpack_require__(66);

	var _Router = __webpack_require__(59);

	var _Router2 = _interopRequireDefault(_Router);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var normalizeLocation = function normalizeLocation(object) {
	  var _object$pathname = object.pathname,
	      pathname = _object$pathname === undefined ? '/' : _object$pathname,
	      _object$search = object.search,
	      search = _object$search === undefined ? '' : _object$search,
	      _object$hash = object.hash,
	      hash = _object$hash === undefined ? '' : _object$hash;


	  return {
	    pathname: pathname,
	    search: search === '?' ? '' : search,
	    hash: hash === '#' ? '' : hash
	  };
	};

	var addBasename = function addBasename(basename, location) {
	  if (!basename) return location;

	  return _extends({}, location, {
	    pathname: (0, _PathUtils.addLeadingSlash)(basename) + location.pathname
	  });
	};

	var stripBasename = function stripBasename(basename, location) {
	  if (!basename) return location;

	  var base = (0, _PathUtils.addLeadingSlash)(basename);

	  if (location.pathname.indexOf(base) !== 0) return location;

	  return _extends({}, location, {
	    pathname: location.pathname.substr(base.length)
	  });
	};

	var createLocation = function createLocation(location) {
	  return typeof location === 'string' ? (0, _PathUtils.parsePath)(location) : normalizeLocation(location);
	};

	var createURL = function createURL(location) {
	  return typeof location === 'string' ? location : (0, _PathUtils.createPath)(location);
	};

	var staticHandler = function staticHandler(methodName) {
	  return function () {
	    (0, _invariant2.default)(false, 'You cannot %s with <StaticRouter>', methodName);
	  };
	};

	var noop = function noop() {};

	/**
	 * The public top-level API for a "static" <Router>, so-called because it
	 * can't actually change the current location. Instead, it just records
	 * location changes in a context object. Useful mainly in testing and
	 * server-rendering scenarios.
	 */

	var StaticRouter = function (_React$Component) {
	  _inherits(StaticRouter, _React$Component);

	  function StaticRouter() {
	    var _temp, _this, _ret;

	    _classCallCheck(this, StaticRouter);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.createHref = function (path) {
	      return (0, _PathUtils.addLeadingSlash)(_this.props.basename + createURL(path));
	    }, _this.handlePush = function (location) {
	      var _this$props = _this.props,
	          basename = _this$props.basename,
	          context = _this$props.context;

	      context.action = 'PUSH';
	      context.location = addBasename(basename, createLocation(location));
	      context.url = createURL(context.location);
	    }, _this.handleReplace = function (location) {
	      var _this$props2 = _this.props,
	          basename = _this$props2.basename,
	          context = _this$props2.context;

	      context.action = 'REPLACE';
	      context.location = addBasename(basename, createLocation(location));
	      context.url = createURL(context.location);
	    }, _this.handleListen = function () {
	      return noop;
	    }, _this.handleBlock = function () {
	      return noop;
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  StaticRouter.prototype.getChildContext = function getChildContext() {
	    return {
	      router: {
	        staticContext: this.props.context
	      }
	    };
	  };

	  StaticRouter.prototype.componentWillMount = function componentWillMount() {
	    (0, _warning2.default)(!this.props.history, '<StaticRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { StaticRouter as Router }`.');
	  };

	  StaticRouter.prototype.render = function render() {
	    var _props = this.props,
	        basename = _props.basename,
	        context = _props.context,
	        location = _props.location,
	        props = _objectWithoutProperties(_props, ['basename', 'context', 'location']);

	    var history = {
	      createHref: this.createHref,
	      action: 'POP',
	      location: stripBasename(basename, createLocation(location)),
	      push: this.handlePush,
	      replace: this.handleReplace,
	      go: staticHandler('go'),
	      goBack: staticHandler('goBack'),
	      goForward: staticHandler('goForward'),
	      listen: this.handleListen,
	      block: this.handleBlock
	    };

	    return _react2.default.createElement(_Router2.default, _extends({}, props, { history: history }));
	  };

	  return StaticRouter;
	}(_react2.default.Component);

	StaticRouter.propTypes = {
	  basename: _propTypes2.default.string,
	  context: _propTypes2.default.object.isRequired,
	  location: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])
	};
	StaticRouter.defaultProps = {
	  basename: '',
	  location: '/'
	};
	StaticRouter.childContextTypes = {
	  router: _propTypes2.default.object.isRequired
	};
	exports.default = StaticRouter;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _Switch = __webpack_require__(86);

	var _Switch2 = _interopRequireDefault(_Switch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Switch2.default; // Written in this round about way for babel-transform-imports

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(39);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _warning = __webpack_require__(49);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(51);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _matchPath = __webpack_require__(72);

	var _matchPath2 = _interopRequireDefault(_matchPath);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * The public API for rendering the first <Route> that matches.
	 */
	var Switch = function (_React$Component) {
	  _inherits(Switch, _React$Component);

	  function Switch() {
	    _classCallCheck(this, Switch);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  Switch.prototype.componentWillMount = function componentWillMount() {
	    (0, _invariant2.default)(this.context.router, 'You should not use <Switch> outside a <Router>');
	  };

	  Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    (0, _warning2.default)(!(nextProps.location && !this.props.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

	    (0, _warning2.default)(!(!nextProps.location && this.props.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
	  };

	  Switch.prototype.render = function render() {
	    var route = this.context.router.route;
	    var children = this.props.children;

	    var location = this.props.location || route.location;

	    var match = void 0,
	        child = void 0;
	    _react2.default.Children.forEach(children, function (element) {
	      if (!_react2.default.isValidElement(element)) return;

	      var _element$props = element.props,
	          pathProp = _element$props.path,
	          exact = _element$props.exact,
	          strict = _element$props.strict,
	          sensitive = _element$props.sensitive,
	          from = _element$props.from;

	      var path = pathProp || from;

	      if (match == null) {
	        child = element;
	        match = path ? (0, _matchPath2.default)(location.pathname, { path: path, exact: exact, strict: strict, sensitive: sensitive }) : route.match;
	      }
	    });

	    return match ? _react2.default.cloneElement(child, { location: location, computedMatch: match }) : null;
	  };

	  return Switch;
	}(_react2.default.Component);

	Switch.contextTypes = {
	  router: _propTypes2.default.shape({
	    route: _propTypes2.default.object.isRequired
	  }).isRequired
	};
	Switch.propTypes = {
	  children: _propTypes2.default.node,
	  location: _propTypes2.default.object
	};
	exports.default = Switch;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _matchPath = __webpack_require__(72);

	var _matchPath2 = _interopRequireDefault(_matchPath);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _matchPath2.default; // Written in this round about way for babel-transform-imports

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _withRouter = __webpack_require__(89);

	var _withRouter2 = _interopRequireDefault(_withRouter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _withRouter2.default; // Written in this round about way for babel-transform-imports

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(39);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _hoistNonReactStatics = __webpack_require__(90);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _Route = __webpack_require__(71);

	var _Route2 = _interopRequireDefault(_Route);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	/**
	 * A public higher-order component to access the imperative API
	 */
	var withRouter = function withRouter(Component) {
	  var C = function C(props) {
	    var wrappedComponentRef = props.wrappedComponentRef,
	        remainingProps = _objectWithoutProperties(props, ['wrappedComponentRef']);

	    return _react2.default.createElement(_Route2.default, { render: function render(routeComponentProps) {
	        return _react2.default.createElement(Component, _extends({}, remainingProps, routeComponentProps, { ref: wrappedComponentRef }));
	      } });
	  };

	  C.displayName = 'withRouter(' + (Component.displayName || Component.name) + ')';
	  C.WrappedComponent = Component;
	  C.propTypes = {
	    wrappedComponentRef: _propTypes2.default.func
	  };

	  return (0, _hoistNonReactStatics2.default)(C, Component);
	};

	exports.default = withRouter;

/***/ }),
/* 90 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	  name: true,
	  length: true,
	  prototype: true,
	  caller: true,
	  callee: true,
	  arguments: true,
	  arity: true
	};

	var defineProperty = Object.defineProperty;
	var getOwnPropertyNames = Object.getOwnPropertyNames;
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var getPrototypeOf = Object.getPrototypeOf;
	var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

	        if (objectPrototype) {
	            var inheritedComponent = getPrototypeOf(sourceComponent);
	            if (inheritedComponent && inheritedComponent !== objectPrototype) {
	                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
	            }
	        }

	        var keys = getOwnPropertyNames(sourceComponent);

	        if (getOwnPropertySymbols) {
	            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
	        }

	        for (var i = 0; i < keys.length; ++i) {
	            var key = keys[i];
	            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
	                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
	                try { // Avoid failures from read-only properties
	                    defineProperty(targetComponent, key, descriptor);
	                } catch (e) {}
	            }
	        }

	        return targetComponent;
	    }

	    return targetComponent;
	};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _reactRouter = __webpack_require__(92);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HomeRoute = function (_Route) {
	  _inherits(HomeRoute, _Route);

	  function HomeRoute() {
	    _classCallCheck(this, HomeRoute);

	    return _possibleConstructorReturn(this, (HomeRoute.__proto__ || Object.getPrototypeOf(HomeRoute)).apply(this, arguments));
	  }

	  return HomeRoute;
	}(_reactRouter.Route);

	exports.default = HomeRoute;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.withRouter = exports.matchPath = exports.Switch = exports.StaticRouter = exports.Router = exports.Route = exports.Redirect = exports.Prompt = exports.MemoryRouter = undefined;

	var _MemoryRouter2 = __webpack_require__(64);

	var _MemoryRouter3 = _interopRequireDefault(_MemoryRouter2);

	var _Prompt2 = __webpack_require__(76);

	var _Prompt3 = _interopRequireDefault(_Prompt2);

	var _Redirect2 = __webpack_require__(78);

	var _Redirect3 = _interopRequireDefault(_Redirect2);

	var _Route2 = __webpack_require__(71);

	var _Route3 = _interopRequireDefault(_Route2);

	var _Router2 = __webpack_require__(59);

	var _Router3 = _interopRequireDefault(_Router2);

	var _StaticRouter2 = __webpack_require__(84);

	var _StaticRouter3 = _interopRequireDefault(_StaticRouter2);

	var _Switch2 = __webpack_require__(86);

	var _Switch3 = _interopRequireDefault(_Switch2);

	var _matchPath2 = __webpack_require__(72);

	var _matchPath3 = _interopRequireDefault(_matchPath2);

	var _withRouter2 = __webpack_require__(89);

	var _withRouter3 = _interopRequireDefault(_withRouter2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.MemoryRouter = _MemoryRouter3.default;
	exports.Prompt = _Prompt3.default;
	exports.Redirect = _Redirect3.default;
	exports.Route = _Route3.default;
	exports.Router = _Router3.default;
	exports.StaticRouter = _StaticRouter3.default;
	exports.Switch = _Switch3.default;
	exports.matchPath = _matchPath3.default;
	exports.withRouter = _withRouter3.default;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _class, _temp;

	var _reactRouter = __webpack_require__(92);

	var _context = __webpack_require__(20);

	var _context2 = _interopRequireDefault(_context);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LoginRoute = (_temp = _class = function (_Route) {
	  _inherits(LoginRoute, _Route);

	  function LoginRoute() {
	    _classCallCheck(this, LoginRoute);

	    return _possibleConstructorReturn(this, (LoginRoute.__proto__ || Object.getPrototypeOf(LoginRoute)).apply(this, arguments));
	  }

	  return LoginRoute;
	}(_reactRouter.Route), _class.defaultProps = {
	  onEnter: function onEnter(nextState, replace, callback) {
	    _context2.default.userStore.isAuthenticated(function (err, authenticated) {
	      if (authenticated) {
	        var router = _context2.default.getRouter();
	        var homeRoute = router.getHomeRoute();
	        var authenticatedHomeRoute = router.getAuthenticatedHomeRoute();
	        var redirectTo = (authenticatedHomeRoute || {}).path || (homeRoute || {}).path || '/';

	        replace(redirectTo);
	      }
	      callback();
	    });
	  }
	}, _temp);
	exports.default = LoginRoute;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _class, _temp;

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(92);

	var _reactRouter2 = _interopRequireDefault(_reactRouter);

	var _context = __webpack_require__(20);

	var _context2 = _interopRequireDefault(_context);

	var _UserActions = __webpack_require__(29);

	var _UserActions2 = _interopRequireDefault(_UserActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LogoutRoute = (_temp = _class = function (_Route) {
	  _inherits(LogoutRoute, _Route);

	  function LogoutRoute() {
	    _classCallCheck(this, LogoutRoute);

	    return _possibleConstructorReturn(this, (LogoutRoute.__proto__ || Object.getPrototypeOf(LogoutRoute)).apply(this, arguments));
	  }

	  return LogoutRoute;
	}(_reactRouter.Route), _class.defaultProps = {
	  onEnter: function onEnter(nextState, replace, callback) {
	    var _this2 = this;

	    _UserActions2.default.logout(function () {
	      var router = _context2.default.getRouter();
	      var homeRoute = router.getHomeRoute();
	      var loginRoute = router.getLoginRoute();
	      var redirectTo = _this2.redirectTo || (homeRoute || {}).path || (loginRoute || {}).path || '/';

	      replace(redirectTo);

	      callback();
	    });
	  }
	}, _temp);
	exports.default = LogoutRoute;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _class, _temp;

	var _reactRouter = __webpack_require__(92);

	var _context = __webpack_require__(20);

	var _context2 = _interopRequireDefault(_context);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AuthenticatedRoute = (_temp = _class = function (_Route) {
	  _inherits(AuthenticatedRoute, _Route);

	  function AuthenticatedRoute() {
	    _classCallCheck(this, AuthenticatedRoute);

	    return _possibleConstructorReturn(this, (AuthenticatedRoute.__proto__ || Object.getPrototypeOf(AuthenticatedRoute)).apply(this, arguments));
	  }

	  return AuthenticatedRoute;
	}(_reactRouter.Route), _class.defaultProps = {
	  onEnter: function onEnter(nextState, replace, callback) {
	    _context2.default.userStore.isAuthenticated({
	      inGroup: this.inGroup
	    }, function (err, authenticated) {
	      if (!authenticated) {
	        var router = _context2.default.getRouter();
	        var homeRoute = router.getHomeRoute();
	        var loginRoute = router.getLoginRoute();
	        var redirectTo = (loginRoute || {}).path || (homeRoute || {}).path || '/';

	        replace(redirectTo);
	      }
	      callback();
	    });
	  }
	}, _temp);
	exports.default = AuthenticatedRoute;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _propTypes = __webpack_require__(39);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Authenticated = (_temp = _class = function (_React$Component) {
	  _inherits(Authenticated, _React$Component);

	  function Authenticated() {
	    _classCallCheck(this, Authenticated);

	    return _possibleConstructorReturn(this, (Authenticated.__proto__ || Object.getPrototypeOf(Authenticated)).apply(this, arguments));
	  }

	  _createClass(Authenticated, [{
	    key: 'render',
	    value: function render() {
	      var user = this.context.user;
	      var authenticated = user !== undefined;

	      if (authenticated && this.props.inGroup) {
	        if (user.groups) {
	          authenticated = _utils2.default.groupsMatchExpression(user.groups, this.props.inGroup);
	        } else {
	          _utils2.default.logWarning('<Authenticated>', 'In order to use the inGroup property, you must expand the groups resource for the /me endpoint.');
	        }
	      }

	      var propsToForward = _utils2.default.excludeProps(['inGroup'], this.props);

	      return authenticated ? _utils2.default.enforceRootElement(this.props.children, propsToForward) : null;
	    }
	  }]);

	  return Authenticated;
	}(_react2.default.Component), _class.contextTypes = {
	  user: _propTypes2.default.object
	}, _temp);
	exports.default = Authenticated;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _propTypes = __webpack_require__(39);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NotAuthenticated = (_temp = _class = function (_React$Component) {
	  _inherits(NotAuthenticated, _React$Component);

	  function NotAuthenticated() {
	    _classCallCheck(this, NotAuthenticated);

	    return _possibleConstructorReturn(this, (NotAuthenticated.__proto__ || Object.getPrototypeOf(NotAuthenticated)).apply(this, arguments));
	  }

	  _createClass(NotAuthenticated, [{
	    key: 'render',
	    value: function render() {
	      var user = this.context.user;
	      var authenticated = user !== undefined;

	      if (this.props.inGroup) {
	        if (authenticated) {
	          if (user.groups) {
	            authenticated = _utils2.default.groupsMatchExpression(user.groups, this.props.inGroup);
	          } else {
	            _utils2.default.logWarning('<NotAuthenticated> In order to use the inGroup option, you must expand the groups resource for the /me endpoint.');
	          }
	        } else {
	          return null;
	        }
	      }

	      var propsToForward = _utils2.default.excludeProps(['inGroup'], this.props);

	      return !authenticated ? _utils2.default.enforceRootElement(this.props.children, propsToForward) : null;
	    }
	  }]);

	  return NotAuthenticated;
	}(_react2.default.Component), _class.contextTypes = {
	  user: _propTypes2.default.object
	}, _temp);
	exports.default = NotAuthenticated;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(92);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _context = __webpack_require__(20);

	var _context2 = _interopRequireDefault(_context);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LoginLink = function (_React$Component) {
	  _inherits(LoginLink, _React$Component);

	  function LoginLink() {
	    _classCallCheck(this, LoginLink);

	    return _possibleConstructorReturn(this, (LoginLink.__proto__ || Object.getPrototypeOf(LoginLink)).apply(this, arguments));
	  }

	  _createClass(LoginLink, [{
	    key: 'render',
	    value: function render() {
	      var router = _context2.default.getRouter();
	      var loginRoute = router.getLoginRoute();
	      var targetPath = (loginRoute || {}).path || '/login';
	      var selectedProps = _utils2.default.excludeProps(['to', 'children'], this.props);

	      return _react2.default.createElement(
	        _reactRouter.Link,
	        _extends({ to: targetPath }, selectedProps),
	        this.props.children ? this.props.children : 'Login'
	      );
	    }
	  }]);

	  return LoginLink;
	}(_react2.default.Component);

	exports.default = LoginLink;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp2;

	var _propTypes = __webpack_require__(39);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _context = __webpack_require__(20);

	var _context2 = _interopRequireDefault(_context);

	var _UserActions = __webpack_require__(29);

	var _UserActions2 = _interopRequireDefault(_UserActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LogoutLink = (_temp2 = _class = function (_React$Component) {
	  _inherits(LogoutLink, _React$Component);

	  function LogoutLink() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, LogoutLink);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LogoutLink.__proto__ || Object.getPrototypeOf(LogoutLink)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      disabled: false
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(LogoutLink, [{
	    key: '_performRedirect',
	    value: function _performRedirect(primaryRedirectTo) {
	      var router = _context2.default.getRouter();
	      var homeRoute = router.getHomeRoute();
	      var loginRoute = router.getLoginRoute();
	      var redirectTo = primaryRedirectTo || (homeRoute || {}).path || (loginRoute || {}).path || '/';

	      this.context.router.push(redirectTo);
	    }
	  }, {
	    key: 'onClick',
	    value: function onClick(e) {
	      var _this2 = this;

	      e.preventDefault();

	      var primaryRedirectTo = this.props.redirectTo;

	      if (!this.state.disabled) {
	        this.setState({ disabled: true });

	        _UserActions2.default.logout(function () {
	          _this2._performRedirect(primaryRedirectTo);
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var selectedProps = _utils2.default.excludeProps(['redirectTo', 'href', 'onClick', 'disabled', 'children'], this.props);

	      return _react2.default.createElement(
	        'a',
	        _extends({ href: '#', onClick: this.onClick.bind(this), disabled: this.state.disabled }, selectedProps),
	        this.props.children ? this.props.children : 'Logout'
	      );
	    }
	  }]);

	  return LogoutLink;
	}(_react2.default.Component), _class.contextTypes = {
	  router: _propTypes2.default.object.isRequired
	}, _temp2);
	exports.default = LogoutLink;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _class2, _temp3;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _propTypes = __webpack_require__(39);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(92);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _context = __webpack_require__(20);

	var _context2 = _interopRequireDefault(_context);

	var _UserActions = __webpack_require__(29);

	var _UserActions2 = _interopRequireDefault(_UserActions);

	var _LoadingText = __webpack_require__(101);

	var _LoadingText2 = _interopRequireDefault(_LoadingText);

	var _SocialLoginButton = __webpack_require__(102);

	var _SocialLoginButton2 = _interopRequireDefault(_SocialLoginButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DefaultLoginForm = function (_React$Component) {
	  _inherits(DefaultLoginForm, _React$Component);

	  function DefaultLoginForm() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, DefaultLoginForm);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DefaultLoginForm.__proto__ || Object.getPrototypeOf(DefaultLoginForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      fields: null,
	      socialProviders: null
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(DefaultLoginForm, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      if (this.state.fields !== null) {
	        return;
	      }

	      var defaultFields = [{
	        label: 'Username or Email',
	        name: 'login',
	        placeholder: 'Username or Email',
	        required: true,
	        type: 'text'
	      }, {
	        label: 'Password',
	        name: 'password',
	        placeholder: 'Password',
	        required: true,
	        type: 'password'
	      }];

	      _context2.default.userStore.getLoginViewData(function (err, data) {
	        var fields = null;
	        var socialProviders = null;

	        if (err) {
	          fields = defaultFields;
	        } else if (data && data.form) {
	          fields = data.form.fields;
	          if (!_this2.props.hideSocial) {
	            data.accountStores.forEach(function (accountStore) {
	              if (!accountStore.provider) {
	                return;
	              }

	              if (!accountStore.authorizeUri) {
	                return;
	              }

	              if (socialProviders === null) {
	                socialProviders = [];
	              }

	              socialProviders.push({
	                id: accountStore.provider.providerId
	              });
	            });
	          }
	        }

	        _this2.setState({
	          fields: fields,
	          socialProviders: socialProviders
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var fieldMarkup = null;

	      if (this.state.fields !== null) {
	        fieldMarkup = [];

	        this.state.fields.forEach(function (field, index) {
	          var fieldId = 'sp-' + field.name + '-' + index;
	          fieldMarkup.push(_react2.default.createElement(
	            'div',
	            { key: fieldId, className: 'form-group' },
	            _react2.default.createElement(
	              'label',
	              { htmlFor: fieldId, className: 'col-xs-12 col-sm-4 control-label' },
	              field.label
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-12 col-sm-4' },
	              _react2.default.createElement('input', { type: field.type, className: 'form-control', id: fieldId, name: field.name, placeholder: field.placeholder, required: field.required })
	            )
	          ));
	        });

	        fieldMarkup.push(_react2.default.createElement(
	          'div',
	          { key: 'login-button', className: 'form-group' },
	          _react2.default.createElement(
	            'div',
	            { className: 'col-sm-offset-4 col-sm-4' },
	            _react2.default.createElement(
	              'p',
	              { className: 'alert alert-danger', 'data-spIf': 'form.error' },
	              _react2.default.createElement('span', { 'data-spBind': 'form.errorMessage' })
	            ),
	            _react2.default.createElement(
	              'button',
	              { type: 'submit', className: 'btn btn-primary' },
	              'Login'
	            ),
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: '/forgot', className: 'pull-right' },
	              'Forgot Password'
	            )
	          )
	        ));
	      }

	      if (this.state.socialProviders !== null) {
	        var providerButtons = [];

	        this.state.socialProviders.forEach(function (provider, index) {
	          var providerKey = 'sp-' + provider.id + '-' + index;

	          providerButtons.push(_react2.default.createElement(_SocialLoginButton2.default, { key: providerKey, providerId: provider.id, style: { marginRight: '5px', marginBottom: '5px' } }));
	        });

	        if (providerButtons.length) {
	          fieldMarkup.push(_react2.default.createElement(
	            'div',
	            { key: 'provider-buttons', className: 'form-group', style: { paddingTop: '20px' } },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-offset-4 col-sm-4', style: { marginBottom: '10px' } },
	              'Or sign in using...'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-offset-4 col-sm-4' },
	              providerButtons
	            )
	          ));
	        }
	      }

	      return _react2.default.createElement(
	        LoginForm,
	        this.props,
	        _react2.default.createElement(
	          'div',
	          { className: 'sp-login-form' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-12' },
	              _react2.default.createElement(
	                'div',
	                { className: 'form-horizontal' },
	                fieldMarkup ? fieldMarkup : _react2.default.createElement(_LoadingText2.default, null)
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return DefaultLoginForm;
	}(_react2.default.Component);

	var LoginForm = (_temp3 = _class2 = function (_React$Component2) {
	  _inherits(LoginForm, _React$Component2);

	  function LoginForm() {
	    var _ref2;

	    var _temp2, _this3, _ret2;

	    _classCallCheck(this, LoginForm);

	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }

	    return _ret2 = (_temp2 = (_this3 = _possibleConstructorReturn(this, (_ref2 = LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call.apply(_ref2, [this].concat(args))), _this3), _this3.state = {
	      fields: {
	        username: '',
	        password: ''
	      },
	      errorMessage: null,
	      isFormProcessing: false
	    }, _temp2), _possibleConstructorReturn(_this3, _ret2);
	  }

	  _createClass(LoginForm, [{
	    key: 'onFormSubmit',
	    value: function onFormSubmit(e) {
	      var _this4 = this;

	      e.preventDefault();
	      e.persist();

	      var primaryRedirectTo = this.props.redirectTo;
	      var onSubmitSuccess = this.props.onSubmitSuccess;
	      var onSubmitError = this.props.onSubmitError;

	      var setErrorState = function setErrorState(recentError, newError) {
	        _this4.setState({
	          isFormProcessing: false,
	          errorMessage: (newError || recentError).message
	        });
	      };

	      var next = function next(err, data) {
	        if (err) {
	          if (onSubmitError) {
	            return onSubmitError({
	              data: data,
	              error: err
	            }, setErrorState.bind(_this4, err));
	          }

	          return setErrorState(err);
	        }

	        // If the user didn't specify any data,
	        // then simply default to what we have in state.
	        data = data || _this4.state.fields;

	        _UserActions2.default.login({
	          login: data.username,
	          password: data.password
	        }, function (err, result) {
	          if (err) {
	            if (onSubmitError) {
	              return onSubmitError({
	                data: data,
	                error: err
	              }, setErrorState.bind(_this4, err));
	            }

	            return setErrorState(err);
	          }

	          var performRedirect = _this4._performRedirect.bind(_this4, primaryRedirectTo);

	          if (onSubmitSuccess) {
	            return onSubmitSuccess({
	              data: data,
	              result: result
	            }, performRedirect);
	          }

	          performRedirect();
	        });
	      };

	      this.setState({
	        isFormProcessing: true
	      });

	      if (this.props.onSubmit) {
	        e.data = this.state.fields;
	        this.props.onSubmit(e, next);
	      } else {
	        next(null, this.state.fields);
	      }
	    }
	  }, {
	    key: '_performRedirect',
	    value: function _performRedirect(primaryRedirectTo) {
	      var router = _context2.default.getRouter();
	      var homeRoute = router.getHomeRoute();
	      var authenticatedHomeRoute = router.getAuthenticatedHomeRoute();
	      var redirectTo = primaryRedirectTo || (authenticatedHomeRoute || {}).path || (homeRoute || {}).path || '/';

	      this.context.router.push(redirectTo);
	    }
	  }, {
	    key: '_mapFormFieldHandler',
	    value: function _mapFormFieldHandler(element, tryMapField) {
	      var tryMapFormField = function tryMapFormField(name) {
	        switch (element.props.name) {
	          case 'login':
	          case 'username':
	            tryMapField('username');
	            break;
	          case 'password':
	            tryMapField('password');
	            break;
	        }
	      };

	      _utils2.default.mapFormField(element, tryMapFormField);
	    }
	  }, {
	    key: '_spIfHandler',
	    value: function _spIfHandler(action, element) {
	      var test = null;

	      switch (action) {
	        case 'form.processing':
	          test = this.state.isFormProcessing;
	          break;
	        case 'form.error':
	          test = this.state.errorMessage !== null;
	          break;
	      }

	      return test;
	    }
	  }, {
	    key: '_spBindHandler',
	    value: function _spBindHandler(bind, element) {
	      var result = false;

	      switch (bind) {
	        case 'form.errorMessage':
	          var className = element.props ? element.props.className : undefined;
	          result = _react2.default.createElement(
	            'span',
	            { className: className },
	            this.state.errorMessage
	          );
	          break;
	      }

	      return result;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (this.props.children) {
	        var selectedProps = _utils2.default.excludeProps(['redirectTo', 'hideSocial', 'onSubmit', 'onSubmitError', 'onSubmitSuccess', 'children'], this.props);

	        return _react2.default.createElement(
	          'form',
	          _extends({ onSubmit: this.onFormSubmit.bind(this) }, selectedProps),
	          _utils2.default.makeForm(this, this._mapFormFieldHandler.bind(this), this._spIfHandler.bind(this), this._spBindHandler.bind(this))
	        );
	      } else {
	        return _react2.default.createElement(DefaultLoginForm, this.props);
	      }
	    }
	  }]);

	  return LoginForm;
	}(_react2.default.Component), _class2.contextTypes = {
	  router: _propTypes2.default.object.isRequired
	}, _temp3);
	exports.default = LoginForm;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LoadingText = function (_React$Component) {
	  _inherits(LoadingText, _React$Component);

	  function LoadingText() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, LoadingText);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LoadingText.__proto__ || Object.getPrototypeOf(LoadingText)).call.apply(_ref, [this].concat(args))), _this), _this.waitTimeout = null, _this.state = {
	      text: null
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(LoadingText, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      this.waitTimeout = setTimeout(function () {
	        _this2.setState({
	          text: _this2.props.text || 'Loading...'
	        });
	      }, this.props.showAfter || 250);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.waitTimeout);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (!this.state.text) {
	        return null;
	      }

	      return _react2.default.createElement(
	        'p',
	        _extends({}, this.props, { style: { textAlign: 'center' } }),
	        this.props.children ? this.props.children : this.state.text
	      );
	    }
	  }]);

	  return LoadingText;
	}(_react2.default.Component);

	exports.default = LoadingText;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _SocialLoginLink = __webpack_require__(103);

	var _SocialLoginLink2 = _interopRequireDefault(_SocialLoginLink);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SocialLoginButton = function (_React$Component) {
	  _inherits(SocialLoginButton, _React$Component);

	  function SocialLoginButton() {
	    _classCallCheck(this, SocialLoginButton);

	    return _possibleConstructorReturn(this, (SocialLoginButton.__proto__ || Object.getPrototypeOf(SocialLoginButton)).apply(this, arguments));
	  }

	  _createClass(SocialLoginButton, [{
	    key: 'render',
	    value: function render() {
	      var providerId = this.props.providerId;
	      var selectedProps = _utils2.default.excludeProps(['hideIcon', 'children', 'className'], this.props);

	      return _react2.default.createElement(
	        _SocialLoginLink2.default,
	        _extends({ className: 'btn btn-default btn-social btn-' + providerId + ' ' + this.props.className }, selectedProps),
	        !this.props.hideIcon ? _react2.default.createElement('span', { className: 'fa fa-' + providerId, style: { marginRight: '5px' } }) : null,
	        this.props.children ? this.props.children : _utils2.default.translateProviderIdToName(providerId)
	      );
	    }
	  }]);

	  return SocialLoginButton;
	}(_react2.default.Component);

	exports.default = SocialLoginButton;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _xtend = __webpack_require__(104);

	var _xtend2 = _interopRequireDefault(_xtend);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _context = __webpack_require__(20);

	var _context2 = _interopRequireDefault(_context);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var providerAuthorizationUris = {
	  github: 'https://github.com/login/oauth/authorize',
	  google: 'https://accounts.google.com/o/oauth2/v2/auth',
	  linkedin: 'https://www.linkedin.com/uas/oauth2/authorization',
	  facebook: 'https://www.facebook.com/dialog/oauth'
	};

	var SocialLoginLink = function (_React$Component) {
	  _inherits(SocialLoginLink, _React$Component);

	  function SocialLoginLink() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, SocialLoginLink);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SocialLoginLink.__proto__ || Object.getPrototypeOf(SocialLoginLink)).call.apply(_ref, [this].concat(args))), _this), _this.availableProps = {
	      providerId: null
	    }, _this.state = {
	      disabled: false
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(SocialLoginLink, [{
	    key: '_buildAuthorizationUri',
	    value: function _buildAuthorizationUri(accountStore, scope, redirectUri) {

	      // The authorizeUri includes the basic set of query parameters, but
	      // we need to be able to override them with values that the developer
	      // may supply via this library

	      var authorizationUri = accountStore.authorizeUri;

	      var authorizationUriBaseEndpoint = authorizationUri.split('?')[0];

	      var defaultQueryString = authorizationUri.split('?')[1];

	      var provider = accountStore.provider;

	      var queryString = _utils2.default.parseQueryString(defaultQueryString);

	      return authorizationUriBaseEndpoint + '?' + _utils2.default.encodeQueryString((0, _xtend2.default)(queryString, {
	        client_id: provider.clientId,
	        scope: scope || provider.scope,
	        redirect_uri: redirectUri || _utils2.default.getCurrentHost(),
	        response_type: 'stormpath_token'
	      }));
	    }
	  }, {
	    key: '_findProvider',
	    value: function _findProvider(accountStores, providerId) {
	      var provider;

	      for (var i = 0; i < accountStores.length; i++) {
	        var item = accountStores[i];

	        if (item.provider.providerId === providerId) {
	          provider = item.provider;
	          break;
	        }
	      }

	      return provider;
	    }
	  }, {
	    key: '_onClick',
	    value: function _onClick(e) {
	      var _this2 = this;

	      e.preventDefault();
	      e.persist();

	      if (!this.state.disabled) {
	        this.setState({ disabled: true });

	        var providerId = this.props.providerId;

	        if (this.props.onClick) {
	          this.props.onClick(e);
	        }

	        _context2.default.userStore.getLoginViewData(function (err, result) {
	          if (err) {
	            return console.error('Error: Unable to retrieve login view data.');
	          }

	          var accountStore = result.accountStores.filter(function (accountStore) {
	            return accountStore.provider.providerId === providerId;
	          })[0];

	          if (!accountStore) {
	            return console.error('Error: Unable to login. Social provider ' + _utils2.default.translateProviderIdToName(providerId) + ' not configured.');
	          }

	          window.location.href = _this2._buildAuthorizationUri(accountStore, _this2.props.scope, _this2.props.redirectUri);
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var providerId = this.props.providerId;
	      var selectedProps = _utils2.default.excludeProps(['providerId', 'scope', 'redirectUri', 'children', 'disabled', 'onClick', 'href'], this.props);

	      return _react2.default.createElement(
	        'a',
	        _extends({}, selectedProps, { href: '#', onClick: this._onClick.bind(this), disabled: this.state.disabled }),
	        this.props.children ? this.props.children : 'Login with ' + _utils2.default.translateProviderIdToName(providerId)
	      );
	    }
	  }]);

	  return SocialLoginLink;
	}(_react2.default.Component);

	exports.default = SocialLoginLink;

/***/ }),
/* 104 */
/***/ (function(module, exports) {

	module.exports = extend

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	function extend() {
	    var target = {}

	    for (var i = 0; i < arguments.length; i++) {
	        var source = arguments[i]

	        for (var key in source) {
	            if (hasOwnProperty.call(source, key)) {
	                target[key] = source[key]
	            }
	        }
	    }

	    return target
	}


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _class2, _temp3;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _propTypes = __webpack_require__(39);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(92);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _context = __webpack_require__(20);

	var _context2 = _interopRequireDefault(_context);

	var _UserActions = __webpack_require__(29);

	var _UserActions2 = _interopRequireDefault(_UserActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DefaultUserProfileForm = function (_React$Component) {
	  _inherits(DefaultUserProfileForm, _React$Component);

	  function DefaultUserProfileForm() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, DefaultUserProfileForm);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DefaultUserProfileForm.__proto__ || Object.getPrototypeOf(DefaultUserProfileForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      showPasswordVerification: false
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(DefaultUserProfileForm, [{
	    key: 'onPasswordChanged',
	    value: function onPasswordChanged(e) {
	      this.setState({
	        showPasswordVerification: e.target.value.length > 0
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        UserProfileForm,
	        this.props,
	        _react2.default.createElement(
	          'div',
	          { className: 'sp-update-profile-form' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-12' },
	              _react2.default.createElement(
	                'div',
	                { className: 'form-horizontal' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'label',
	                    { htmlFor: 'givenName', className: 'col-xs-12 col-sm-4 control-label' },
	                    'First name'
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-xs-12 col-sm-4' },
	                    _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'givenName', name: 'givenName', placeholder: 'First name', required: true })
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'label',
	                    { htmlFor: 'surname', className: 'col-xs-12 col-sm-4 control-label' },
	                    'Last name'
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-xs-12 col-sm-4' },
	                    _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'surname', name: 'surname', placeholder: 'Last name', required: true })
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'label',
	                    { htmlFor: 'email', className: 'col-xs-12 col-sm-4 control-label' },
	                    'Email'
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-xs-12 col-sm-4' },
	                    _react2.default.createElement('input', { type: 'email', className: 'form-control', id: 'email', name: 'email', placeholder: 'Email', required: true })
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'label',
	                    { htmlFor: 'password', className: 'col-xs-12 col-sm-4 control-label' },
	                    'Password'
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-xs-12 col-sm-4' },
	                    _react2.default.createElement('input', { type: 'password', className: 'form-control', id: 'password', name: 'password', placeholder: 'Password', onChange: this.onPasswordChanged.bind(this) })
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  null,
	                  this.state.showPasswordVerification ? _react2.default.createElement(
	                    'div',
	                    { className: 'form-group' },
	                    _react2.default.createElement(
	                      'label',
	                      { htmlFor: 'password', className: 'col-xs-12 col-sm-4 control-label' },
	                      'Existing password'
	                    ),
	                    _react2.default.createElement(
	                      'div',
	                      { className: 'col-xs-12 col-sm-4' },
	                      _react2.default.createElement('input', { type: 'password', className: 'form-control', id: 'existingPassword', name: 'existingPassword', placeholder: 'Existing password', required: true })
	                    )
	                  ) : null
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { key: 'update-button', className: 'form-group' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-sm-offset-4 col-sm-4' },
	                    _react2.default.createElement(
	                      'p',
	                      { className: 'alert alert-danger', 'data-spIf': 'form.error' },
	                      _react2.default.createElement('span', { 'data-spBind': 'form.errorMessage' })
	                    ),
	                    _react2.default.createElement(
	                      'p',
	                      { className: 'alert alert-success', 'data-spIf': 'form.successful' },
	                      'Profile updated.'
	                    ),
	                    _react2.default.createElement(
	                      'button',
	                      { type: 'submit', className: 'btn btn-primary' },
	                      _react2.default.createElement(
	                        'span',
	                        { 'data-spIf': '!form.processing' },
	                        'Update'
	                      ),
	                      _react2.default.createElement(
	                        'span',
	                        { 'data-spIf': 'form.processing' },
	                        'Updating...'
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return DefaultUserProfileForm;
	}(_react2.default.Component);

	var UserProfileForm = (_temp3 = _class2 = function (_React$Component2) {
	  _inherits(UserProfileForm, _React$Component2);

	  function UserProfileForm() {
	    var _ref2;

	    var _temp2, _this2, _ret2;

	    _classCallCheck(this, UserProfileForm);

	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }

	    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref2 = UserProfileForm.__proto__ || Object.getPrototypeOf(UserProfileForm)).call.apply(_ref2, [this].concat(args))), _this2), _this2.state = {
	      fields: {},
	      defaultFields: _this2.context.user,
	      errorMessage: null,
	      isFormProcessing: false,
	      isFormSuccessful: false
	    }, _this2._updateSessionData = function (data, callback) {
	      var sessionStore = _context2.default.sessionStore;

	      if (!sessionStore.empty()) {
	        var hasChanged = false;
	        var updatedSession = _utils2.default.clone(sessionStore.get());

	        for (var key in data) {
	          if (key in updatedSession) {
	            if (updatedSession[key] != data[key]) {
	              hasChanged = true;
	              updatedSession[key] = data[key];
	            }
	          }
	        }

	        if (hasChanged) {
	          _context2.default.userStore.resolveSession(callback, true);
	        } else {
	          callback();
	        }
	      }
	    }, _temp2), _possibleConstructorReturn(_this2, _ret2);
	  }

	  _createClass(UserProfileForm, [{
	    key: '_onFormSubmit',
	    value: function _onFormSubmit(e) {
	      var _this3 = this;

	      e.preventDefault();
	      e.persist();

	      var next = function next(err, data) {
	        if (err) {
	          return _this3.setState({
	            isFormProcessing: false,
	            isFormSuccessful: false,
	            errorMessage: err.message
	          });
	        }

	        // If the user didn't specify any data,
	        // then simply default to what we have in state.
	        data = data || _this3.state.fields;

	        _UserActions2.default.updateProfile(data, function (err) {
	          if (err) {
	            return _this3.setState({
	              isFormProcessing: false,
	              isFormSuccessful: false,
	              errorMessage: err.message
	            });
	          }

	          _this3._updateSessionData(data, function () {
	            _this3.setState({
	              isFormProcessing: false,
	              isFormSuccessful: true,
	              errorMessage: null
	            });
	          });
	        });
	      };

	      this.setState({
	        isFormProcessing: true
	      });

	      if (this.props.onSubmit) {
	        e.data = this.state.fields;
	        this.props.onSubmit(e, next);
	      } else {
	        next(null, this.state.fields);
	      }
	    }
	  }, {
	    key: '_mapFormFieldHandler',
	    value: function _mapFormFieldHandler(element, tryMapField) {
	      var defaultValue = element.props.name ? _utils2.default.getFieldValue(this.state.defaultFields, element.props.name) : undefined;

	      _utils2.default.mapFormField(element, tryMapField, defaultValue);
	    }
	  }, {
	    key: '_spIfHandler',
	    value: function _spIfHandler(action, element) {
	      var test = null;

	      switch (action) {
	        case 'form.successful':
	          test = this.state.isFormSuccessful;
	          break;
	        case 'form.processing':
	          test = this.state.isFormProcessing;
	          break;
	        case 'form.error':
	          test = !!this.state.errorMessage;
	          break;
	      }

	      return test;
	    }
	  }, {
	    key: '_spBindHandler',
	    value: function _spBindHandler(bind, element) {
	      var result = false;

	      switch (bind) {
	        case 'form.errorMessage':
	          var className = element.props ? element.props.className : undefined;
	          result = _react2.default.createElement(
	            'span',
	            { className: className },
	            this.state.errorMessage
	          );
	          break;
	      }

	      return result;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (this.props.children) {
	        var selectedProps = _utils2.default.excludeProps(['onSubmit', 'children'], this.props);

	        return _react2.default.createElement(
	          'form',
	          _extends({ onSubmit: this._onFormSubmit.bind(this) }, selectedProps),
	          _utils2.default.makeForm(this, this._mapFormFieldHandler.bind(this), this._spIfHandler.bind(this), this._spBindHandler.bind(this))
	        );
	      } else {
	        return _react2.default.createElement(DefaultUserProfileForm, this.props);
	      }
	    }
	  }]);

	  return UserProfileForm;
	}(_react2.default.Component), _class2.contextTypes = {
	  user: _propTypes2.default.object
	}, _temp3);
	exports.default = UserProfileForm;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _class2, _temp3;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _propTypes = __webpack_require__(39);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(92);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _context = __webpack_require__(20);

	var _context2 = _interopRequireDefault(_context);

	var _LoginLink = __webpack_require__(98);

	var _LoginLink2 = _interopRequireDefault(_LoginLink);

	var _UserActions = __webpack_require__(29);

	var _UserActions2 = _interopRequireDefault(_UserActions);

	var _LoadingText = __webpack_require__(101);

	var _LoadingText2 = _interopRequireDefault(_LoadingText);

	var _SocialLoginButton = __webpack_require__(102);

	var _SocialLoginButton2 = _interopRequireDefault(_SocialLoginButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DefaultRegistrationForm = function (_React$Component) {
	  _inherits(DefaultRegistrationForm, _React$Component);

	  function DefaultRegistrationForm() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, DefaultRegistrationForm);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DefaultRegistrationForm.__proto__ || Object.getPrototypeOf(DefaultRegistrationForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      fields: null,
	      socialProviders: null
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(DefaultRegistrationForm, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      if (this.state.fields !== null) {
	        return;
	      }

	      var defaultFields = [{
	        label: 'First Name',
	        name: 'givenName',
	        placeholder: 'First Name',
	        required: true,
	        type: 'text'
	      }, {
	        label: 'Last Name',
	        name: 'surname',
	        placeholder: 'Last Name',
	        required: true,
	        type: 'text'
	      }, {
	        label: 'Email',
	        name: 'email',
	        placeholder: 'Email',
	        required: true,
	        type: 'email'
	      }, {
	        label: 'Password',
	        name: 'password',
	        placeholder: 'Password',
	        required: true,
	        type: 'password'
	      }];

	      _context2.default.userStore.getRegisterViewData(function (err, data) {
	        var fields = null;
	        var socialProviders = null;

	        if (err) {
	          fields = defaultFields;
	        } else if (data && data.form) {
	          fields = data.form.fields;
	          if (!_this2.props.hideSocial) {
	            data.accountStores.forEach(function (accountStore) {
	              if (!accountStore.provider) {
	                return;
	              }

	              if (!accountStore.authorizeUri) {
	                return;
	              }

	              if (socialProviders === null) {
	                socialProviders = [];
	              }

	              socialProviders.push({
	                id: accountStore.provider.providerId
	              });
	            });
	          }
	        }

	        _this2.setState({
	          fields: fields,
	          socialProviders: socialProviders
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var fieldMarkup = null;

	      if (this.state.fields !== null) {
	        fieldMarkup = [];

	        this.state.fields.forEach(function (field, index) {
	          var fieldId = 'sp-' + field.name + '-' + index;
	          fieldMarkup.push(_react2.default.createElement(
	            'div',
	            { key: fieldId, className: 'form-group' },
	            _react2.default.createElement(
	              'label',
	              { htmlFor: fieldId, className: 'col-xs-12 col-sm-4 control-label' },
	              field.label
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-12 col-sm-4' },
	              _react2.default.createElement('input', { type: field.type, className: 'form-control', id: fieldId, name: field.name, placeholder: field.placeholder, required: field.required })
	            )
	          ));
	        });

	        fieldMarkup.push(_react2.default.createElement(
	          'div',
	          { key: 'register-button', className: 'form-group' },
	          _react2.default.createElement(
	            'div',
	            { className: 'col-sm-offset-4 col-sm-4' },
	            _react2.default.createElement(
	              'p',
	              { className: 'alert alert-danger', 'data-spIf': 'form.error' },
	              _react2.default.createElement('span', { 'data-spBind': 'form.errorMessage' })
	            ),
	            _react2.default.createElement(
	              'button',
	              { type: 'submit', className: 'btn btn-primary' },
	              'Register'
	            )
	          )
	        ));
	      }

	      if (this.state.socialProviders !== null) {
	        var providerButtons = [];

	        this.state.socialProviders.forEach(function (provider, index) {
	          var providerKey = 'sp-' + provider.id + '-' + index;

	          providerButtons.push(_react2.default.createElement(_SocialLoginButton2.default, { key: providerKey, providerId: provider.id, style: { marginRight: '5px', marginBottom: '5px' } }));
	        });

	        if (providerButtons.length) {
	          fieldMarkup.push(_react2.default.createElement(
	            'div',
	            { key: 'provider-buttons', className: 'form-group', style: { paddingTop: '20px' } },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-offset-4 col-sm-4', style: { marginBottom: '10px' } },
	              'Or register using...'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-offset-4 col-sm-4' },
	              providerButtons
	            )
	          ));
	        }
	      }

	      return _react2.default.createElement(
	        RegistrationForm,
	        this.props,
	        _react2.default.createElement(
	          'div',
	          { className: 'sp-login-form' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row', 'data-spIf': 'account.created' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-offset-4 col-xs-12 col-sm-4' },
	              _react2.default.createElement(
	                'p',
	                { className: 'alert alert-success', 'data-spIf': 'account.enabled' },
	                'Your account has been created. ',
	                _react2.default.createElement(
	                  _LoginLink2.default,
	                  null,
	                  'Login Now'
	                ),
	                '.'
	              ),
	              _react2.default.createElement(
	                'div',
	                { 'data-spIf': '!account.enabled' },
	                _react2.default.createElement(
	                  'p',
	                  { className: 'alert alert-success' },
	                  'Your account has been created. Please check your email for a verification link.'
	                ),
	                _react2.default.createElement(
	                  'p',
	                  { className: 'pull-right' },
	                  _react2.default.createElement(
	                    _LoginLink2.default,
	                    null,
	                    'Back to Login'
	                  )
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'row', 'data-spIf': '!account.created' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-12' },
	              _react2.default.createElement(
	                'div',
	                { className: 'form-horizontal' },
	                fieldMarkup ? fieldMarkup : _react2.default.createElement(_LoadingText2.default, null)
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return DefaultRegistrationForm;
	}(_react2.default.Component);

	var RegistrationForm = (_temp3 = _class2 = function (_React$Component2) {
	  _inherits(RegistrationForm, _React$Component2);

	  function RegistrationForm() {
	    var _ref2;

	    var _temp2, _this3, _ret2;

	    _classCallCheck(this, RegistrationForm);

	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }

	    return _ret2 = (_temp2 = (_this3 = _possibleConstructorReturn(this, (_ref2 = RegistrationForm.__proto__ || Object.getPrototypeOf(RegistrationForm)).call.apply(_ref2, [this].concat(args))), _this3), _this3.state = {
	      fields: {
	        givenName: '',
	        surname: '',
	        email: '',
	        password: ''
	      },
	      errorMessage: null,
	      isFormProcessing: false,
	      isAccountCreated: false,
	      isAccountEnabled: false
	    }, _temp2), _possibleConstructorReturn(_this3, _ret2);
	  }

	  _createClass(RegistrationForm, [{
	    key: 'onFormSubmit',
	    value: function onFormSubmit(e) {
	      var _this4 = this;

	      e.preventDefault();
	      e.persist();

	      var primaryRedirectTo = this.props.redirectTo;
	      var onSubmitSuccess = this.props.onSubmitSuccess;
	      var onSubmitError = this.props.onSubmitError;

	      var setErrorState = function setErrorState(recentError, newError) {
	        _this4.setState({
	          isFormProcessing: false,
	          isAccountCreated: false,
	          errorMessage: (newError || recentError).message
	        });
	      };

	      var next = function next(err, data) {
	        if (err) {
	          if (onSubmitError) {
	            return onSubmitError({
	              data: data,
	              error: err
	            }, setErrorState.bind(_this4, err));
	          }

	          return setErrorState(err);
	        }

	        // If the user didn't specify any data,
	        // then simply default to what we have in state.
	        data = data || _this4.state.fields;

	        _UserActions2.default.register(data, function (err, result) {
	          if (err) {
	            if (onSubmitError) {
	              return onSubmitError({
	                data: data,
	                result: result,
	                error: err
	              }, setErrorState.bind(_this4, err));
	            }

	            setErrorState(err);
	          } else if (result.status === 'ENABLED') {
	            _UserActions2.default.login({
	              login: data.email || data.username,
	              password: data.password
	            }, function (err) {
	              if (err) {
	                if (onSubmitError) {
	                  return onSubmitError({
	                    data: data,
	                    result: result,
	                    error: err
	                  }, setErrorState.bind(_this4, err));
	                }

	                return setErrorState(err);
	              }

	              var performRedirect = _this4._performRedirect.bind(_this4, primaryRedirectTo);

	              if (onSubmitSuccess) {
	                return onSubmitSuccess({
	                  data: data,
	                  result: result
	                }, performRedirect);
	              }

	              performRedirect();
	            });
	          } else {
	            var setSuccessState = function setSuccessState() {
	              _this4.setState({
	                isFormProcessing: false,
	                isAccountCreated: true,
	                isAccountEnabled: false
	              });
	            };

	            if (onSubmitSuccess) {
	              return onSubmitSuccess({
	                data: data,
	                result: result
	              }, setSuccessState);
	            }

	            setSuccessState();
	          }
	        });
	      };

	      this.setState({
	        isFormProcessing: true
	      });

	      if (this.props.onSubmit) {
	        e.data = this.state.fields;
	        this.props.onSubmit(e, next);
	      } else {
	        next(null, this.state.fields);
	      }
	    }
	  }, {
	    key: '_performRedirect',
	    value: function _performRedirect(primaryRedirectTo) {
	      var router = _context2.default.getRouter();
	      var homeRoute = router.getHomeRoute();
	      var authenticatedHomeRoute = router.getAuthenticatedHomeRoute();
	      var redirectTo = primaryRedirectTo || (authenticatedHomeRoute || {}).path || (homeRoute || {}).path || '/';

	      this.context.router.push(redirectTo);
	    }
	  }, {
	    key: '_mapFormFieldHandler',
	    value: function _mapFormFieldHandler(element, tryMapField) {
	      var tryMapFormField = function tryMapFormField(name) {
	        if (name.indexOf('customData.') === 0) {
	          tryMapField(name);
	          return;
	        }

	        switch (name) {
	          case 'email':
	            tryMapField('email');
	            break;
	          case 'login':
	          case 'username':
	            tryMapField('username');
	            break;
	          case 'givenName':
	          case 'firstName':
	            tryMapField('givenName');
	            break;
	          case 'surname':
	          case 'lastName':
	            tryMapField('surname');
	            break;
	          case 'password':
	            tryMapField('password');
	            break;
	        }
	      };

	      _utils2.default.mapFormField(element, tryMapFormField);
	    }
	  }, {
	    key: '_spIfHandler',
	    value: function _spIfHandler(action, element) {
	      var test = null;

	      switch (action) {
	        case 'form.processing':
	          test = this.state.isFormProcessing;
	          break;
	        case 'form.error':
	          test = !!this.state.errorMessage;
	          break;
	        case 'account.created':
	          test = this.state.isAccountCreated;
	          break;
	        case 'account.enabled':
	          test = this.state.isAccountEnabled;
	          break;
	      }

	      return test;
	    }
	  }, {
	    key: '_spBindHandler',
	    value: function _spBindHandler(bind, element) {
	      var result = false;

	      switch (bind) {
	        case 'form.errorMessage':
	          var className = element.props ? element.props.className : undefined;
	          result = _react2.default.createElement(
	            'span',
	            { className: className },
	            this.state.errorMessage
	          );
	          break;
	      }

	      return result;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (this.props.children) {
	        var selectedProps = _utils2.default.excludeProps(['redirectTo', 'hideSocial', 'onSubmit', 'onSubmitError', 'onSubmitSuccess', 'children'], this.props);

	        return _react2.default.createElement(
	          'form',
	          _extends({ onSubmit: this.onFormSubmit.bind(this) }, selectedProps),
	          _utils2.default.makeForm(this, this._mapFormFieldHandler.bind(this), this._spIfHandler.bind(this), this._spBindHandler.bind(this))
	        );
	      } else {
	        return _react2.default.createElement(DefaultRegistrationForm, this.props);
	      }
	    }
	  }]);

	  return RegistrationForm;
	}(_react2.default.Component), _class2.contextTypes = {
	  router: _propTypes2.default.object.isRequired
	}, _temp3);
	exports.default = RegistrationForm;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(92);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _LoginLink = __webpack_require__(98);

	var _LoginLink2 = _interopRequireDefault(_LoginLink);

	var _UserActions = __webpack_require__(29);

	var _UserActions2 = _interopRequireDefault(_UserActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DefaultResetPasswordForm = function (_React$Component) {
	  _inherits(DefaultResetPasswordForm, _React$Component);

	  function DefaultResetPasswordForm() {
	    _classCallCheck(this, DefaultResetPasswordForm);

	    return _possibleConstructorReturn(this, (DefaultResetPasswordForm.__proto__ || Object.getPrototypeOf(DefaultResetPasswordForm)).apply(this, arguments));
	  }

	  _createClass(DefaultResetPasswordForm, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        ResetPasswordForm,
	        this.props,
	        _react2.default.createElement(
	          'div',
	          { className: 'sp-reset-password-form' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-offset-4 col-xs-12 col-sm-4', 'data-spIf': 'form.sent' },
	              _react2.default.createElement(
	                'p',
	                { className: 'alert alert-success' },
	                'We have sent a password reset link to the email address of the account that you specified. Please check your email for this message, then click on the link.'
	              ),
	              _react2.default.createElement(
	                'p',
	                { className: 'pull-right' },
	                _react2.default.createElement(
	                  _LoginLink2.default,
	                  null,
	                  'Back to Login'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-12', 'data-spIf': '!form.sent' },
	              _react2.default.createElement(
	                'div',
	                { className: 'form-horizontal' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'label',
	                    { htmlFor: 'spEmail', className: 'col-xs-12 col-sm-4 control-label' },
	                    'Email or Username'
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-xs-12 col-sm-4' },
	                    _react2.default.createElement('input', { className: 'form-control', id: 'spEmail', name: 'email', placeholder: 'Your Email Address' })
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-sm-offset-4 col-xs-12' },
	                    _react2.default.createElement(
	                      'p',
	                      { 'data-spIf': 'form.error' },
	                      _react2.default.createElement('span', { 'data-spBind': 'form.errorMessage' })
	                    ),
	                    _react2.default.createElement(
	                      'button',
	                      { type: 'submit', className: 'btn btn-primary' },
	                      'Request Password Reset'
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return DefaultResetPasswordForm;
	}(_react2.default.Component);

	var ResetPasswordForm = function (_React$Component2) {
	  _inherits(ResetPasswordForm, _React$Component2);

	  function ResetPasswordForm() {
	    var _ref;

	    var _temp, _this2, _ret;

	    _classCallCheck(this, ResetPasswordForm);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = ResetPasswordForm.__proto__ || Object.getPrototypeOf(ResetPasswordForm)).call.apply(_ref, [this].concat(args))), _this2), _this2.state = {
	      fields: {
	        email: ''
	      },
	      errorMessage: null,
	      isFormProcessing: false,
	      isFormSent: false
	    }, _temp), _possibleConstructorReturn(_this2, _ret);
	  }

	  _createClass(ResetPasswordForm, [{
	    key: 'onFormSubmit',
	    value: function onFormSubmit(e) {
	      var _this3 = this;

	      e.preventDefault();
	      e.persist();

	      var next = function next(err, data) {
	        if (err) {
	          return _this3.setState({
	            isFormProcessing: false,
	            errorMessage: err.message
	          });
	        }

	        // If the user didn't specify any data,
	        // then simply default to what we have in state.
	        data = data || _this3.state.fields;

	        _UserActions2.default.forgotPassword(data, function (err) {
	          if (err) {
	            _this3.setState({
	              isFormProcessing: false,
	              errorMessage: err.message
	            });
	          } else {
	            _this3.setState({
	              isFormSent: true,
	              isFormProcessing: false,
	              errorMessage: null
	            });
	          }
	        });
	      };

	      this.setState({
	        isFormProcessing: true
	      });

	      if (this.props.onSubmit) {
	        e.data = this.state.fields;
	        this.props.onSubmit(e, next);
	      } else {
	        next(null, this.state.fields);
	      }
	    }
	  }, {
	    key: '_mapFormFieldHandler',
	    value: function _mapFormFieldHandler(element, tryMapField) {
	      var tryMapFormField = function tryMapFormField(name) {
	        switch (name) {
	          case 'email':
	            tryMapField('email');
	            break;
	        }
	      };

	      _utils2.default.mapFormField(element, tryMapFormField);
	    }
	  }, {
	    key: '_spIfHandler',
	    value: function _spIfHandler(action, element) {
	      var test = null;

	      switch (action) {
	        case 'form.processing':
	          test = this.state.isFormProcessing;
	          break;
	        case 'form.sent':
	          test = this.state.isFormSent;
	          break;
	        case 'form.error':
	          test = this.state.errorMessage !== null;
	          break;
	      }

	      return test;
	    }
	  }, {
	    key: '_spBindHandler',
	    value: function _spBindHandler(bind, element) {
	      var result = false;

	      switch (bind) {
	        case 'form.errorMessage':
	          var className = element.props ? element.props.className : undefined;
	          result = _react2.default.createElement(
	            'span',
	            { className: className },
	            this.state.errorMessage
	          );
	          break;
	      }

	      return result;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (this.props.children) {
	        var selectedProps = _utils2.default.excludeProps(['onSubmit', 'children'], this.props);

	        return _react2.default.createElement(
	          'form',
	          _extends({ onSubmit: this.onFormSubmit.bind(this) }, selectedProps),
	          _utils2.default.makeForm(this, this._mapFormFieldHandler.bind(this), this._spIfHandler.bind(this), this._spBindHandler.bind(this))
	        );
	      } else {
	        return _react2.default.createElement(DefaultResetPasswordForm, this.props);
	      }
	    }
	  }]);

	  return ResetPasswordForm;
	}(_react2.default.Component);

	exports.default = ResetPasswordForm;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(92);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _LoginLink = __webpack_require__(98);

	var _LoginLink2 = _interopRequireDefault(_LoginLink);

	var _LoadingText = __webpack_require__(101);

	var _LoadingText2 = _interopRequireDefault(_LoadingText);

	var _UserActions = __webpack_require__(29);

	var _UserActions2 = _interopRequireDefault(_UserActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DefaultChangePasswordForm = function (_React$Component) {
	  _inherits(DefaultChangePasswordForm, _React$Component);

	  function DefaultChangePasswordForm() {
	    _classCallCheck(this, DefaultChangePasswordForm);

	    return _possibleConstructorReturn(this, (DefaultChangePasswordForm.__proto__ || Object.getPrototypeOf(DefaultChangePasswordForm)).apply(this, arguments));
	  }

	  _createClass(DefaultChangePasswordForm, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        ChangePasswordForm,
	        this.props,
	        _react2.default.createElement(
	          'div',
	          { className: 'sp-change-password-form' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-offset-4 col-xs-12 col-sm-4', 'data-spIf': 'form.sent' },
	              _react2.default.createElement(
	                'p',
	                { className: 'alert alert-success' },
	                'Your new password has been set. Please ',
	                _react2.default.createElement(_LoginLink2.default, null),
	                '.'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-xs-12', 'data-spIf': '!form.sent' },
	              _react2.default.createElement(
	                'div',
	                { className: 'form-horizontal' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'label',
	                    { htmlFor: 'spPassword', className: 'col-xs-12 col-sm-4 control-label' },
	                    'New Password'
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-xs-12 col-sm-4' },
	                    _react2.default.createElement('input', { id: 'spPassword', type: 'password', name: 'password', className: 'form-control', placeholder: 'New Password', required: true })
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'label',
	                    { htmlFor: 'spConfirmPassword', className: 'col-xs-12 col-sm-4 control-label' },
	                    'Confirm New Password'
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-xs-12 col-sm-4' },
	                    _react2.default.createElement('input', { id: 'spConfirmPassword', type: 'password', name: 'confirmPassword', className: 'form-control', placeholder: 'Confirm New Password', required: true })
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'form-group' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-sm-offset-4 col-sm-4' },
	                    _react2.default.createElement(
	                      'p',
	                      { className: 'alert alert-danger', 'data-spIf': 'form.error' },
	                      _react2.default.createElement('span', { 'data-spBind': 'form.errorMessage' })
	                    ),
	                    _react2.default.createElement(
	                      'button',
	                      { type: 'submit', className: 'btn btn-primary' },
	                      _react2.default.createElement(
	                        'span',
	                        { 'data-spIf': 'form.processing' },
	                        'Setting New Password...'
	                      ),
	                      _react2.default.createElement(
	                        'span',
	                        { 'data-spIf': '!form.processing' },
	                        'Set New Password'
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return DefaultChangePasswordForm;
	}(_react2.default.Component);

	var ChangePasswordForm = function (_React$Component2) {
	  _inherits(ChangePasswordForm, _React$Component2);

	  function ChangePasswordForm() {
	    var _ref;

	    _classCallCheck(this, ChangePasswordForm);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    var _this2 = _possibleConstructorReturn(this, (_ref = ChangePasswordForm.__proto__ || Object.getPrototypeOf(ChangePasswordForm)).call.apply(_ref, [this].concat(args)));

	    _this2.state = {
	      spToken: null,
	      fields: {
	        password: ''
	      },
	      errorMessage: null,
	      isFormSent: false,
	      isFormProcessing: false
	    };


	    if (!_this2.props || !('spToken' in _this2.props)) {
	      throw new Error('[Stormpath SDK/Error] ChangePasswordForm: Property \'spToken\' is required.');
	    }

	    _this2.state.spToken = _this2.props.spToken;
	    return _this2;
	  }

	  _createClass(ChangePasswordForm, [{
	    key: 'onFormSubmit',
	    value: function onFormSubmit(e) {
	      var _this3 = this;

	      e.preventDefault();
	      e.persist();

	      var next = function next(err, data) {
	        if (err) {
	          return _this3.setState({
	            isFormProcessing: false,
	            errorMessage: err.message
	          });
	        }

	        // If the user didn't specify any data,
	        // then simply default to what we have in state.
	        data = data || _this3.state.fields;

	        if ('confirmPassword' in data && data.password !== data.confirmPassword) {
	          return _this3.setState({
	            isFormProcessing: false,
	            errorMessage: 'Passwords does not match.'
	          });
	        }

	        _UserActions2.default.changePassword(data, function (err) {
	          if (err) {
	            if (err.status === 404) {
	              err.message = 'The reset password token is not valid. Please try resetting your password again.';
	            }

	            return _this3.setState({
	              isFormProcessing: false,
	              errorMessage: err.message
	            });
	          }

	          _this3.setState({
	            isFormProcessing: false,
	            isFormSent: true
	          });
	        });
	      };

	      this.setState({
	        errorMessage: null,
	        isFormSent: false,
	        isFormProcessing: true
	      });

	      var data = this.state.fields;

	      if (this.state.spToken) {
	        data.sptoken = this.props.spToken;
	      }

	      if (this.props.onSubmit) {
	        e.data = data;
	        this.props.onSubmit(e, next);
	      } else {
	        next(null, data);
	      }
	    }
	  }, {
	    key: '_mapFormFieldHandler',
	    value: function _mapFormFieldHandler(element, tryMapField) {
	      var tryMapFormField = function tryMapFormField(name) {
	        switch (name) {
	          case 'password':
	            tryMapField('password');
	            break;
	          case 'confirmPassword':
	            tryMapField('confirmPassword');
	            break;
	        }
	      };

	      _utils2.default.mapFormField(element, tryMapFormField);
	    }
	  }, {
	    key: '_spIfHandler',
	    value: function _spIfHandler(action, element) {
	      var test = null;

	      switch (action) {
	        case 'form.sent':
	          test = this.state.isFormSent;
	          break;
	        case 'form.processing':
	          test = this.state.isFormProcessing;
	          break;
	        case 'form.error':
	          test = this.state.errorMessage !== null;
	          break;
	      }

	      return test;
	    }
	  }, {
	    key: '_spBindHandler',
	    value: function _spBindHandler(bind, element) {
	      var result = false;

	      switch (bind) {
	        case 'form.errorMessage':
	          var className = element.props ? element.props.className : undefined;
	          result = _react2.default.createElement(
	            'span',
	            { className: className },
	            this.state.errorMessage
	          );
	          break;
	      }

	      return result;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (this.props.children) {
	        var selectedProps = _utils2.default.excludeProps(['onSubmit', 'children', 'spToken'], this.props);

	        return _react2.default.createElement(
	          'form',
	          _extends({ onSubmit: this.onFormSubmit.bind(this) }, selectedProps),
	          _utils2.default.makeForm(this, this._mapFormFieldHandler.bind(this), this._spIfHandler.bind(this), this._spBindHandler.bind(this))
	        );
	      } else {
	        return _react2.default.createElement(DefaultChangePasswordForm, this.props);
	      }
	    }
	  }]);

	  return ChangePasswordForm;
	}(_react2.default.Component);

	exports.default = ChangePasswordForm;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _LoginLink = __webpack_require__(98);

	var _LoginLink2 = _interopRequireDefault(_LoginLink);

	var _UserActions = __webpack_require__(29);

	var _UserActions2 = _interopRequireDefault(_UserActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var VerifyEmailView = function (_React$Component) {
	  _inherits(VerifyEmailView, _React$Component);

	  function VerifyEmailView() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, VerifyEmailView);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = VerifyEmailView.__proto__ || Object.getPrototypeOf(VerifyEmailView)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      status: 'VERIFYING'
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(VerifyEmailView, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      var spToken = this.props.spToken;

	      _UserActions2.default.verifyEmail(spToken, function (err) {
	        if (err) {
	          _this2.setState({
	            status: 'ERROR'
	          });
	        } else {
	          _this2.setState({
	            status: 'VERIFIED'
	          });
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var selectedProps = _utils2.default.excludeProps(['className', 'spToken'], this.props);

	      return _react2.default.createElement(
	        'div',
	        _extends({ className: "row " + this.props.className }, selectedProps),
	        _react2.default.createElement(
	          'div',
	          { className: 'col-sm-offset-4 col-xs-12 col-sm-4' },
	          {
	            VERIFYING: _react2.default.createElement(
	              'p',
	              { className: 'alert alert-warning' },
	              'We are verifying your account.'
	            ),
	            VERIFIED: _react2.default.createElement(
	              'p',
	              { className: 'alert alert-success' },
	              'Your account has has been verified! ',
	              _react2.default.createElement(
	                _LoginLink2.default,
	                null,
	                'Login Now.'
	              )
	            ),
	            ERROR: _react2.default.createElement(
	              'div',
	              { className: 'alert alert-danger' },
	              'This email verification link is not valid.'
	            )
	          }[this.state.status]
	        )
	      );
	    }
	  }]);

	  return VerifyEmailView;
	}(_react2.default.Component);

	exports.default = VerifyEmailView;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _UserComponent2 = __webpack_require__(111);

	var _UserComponent3 = _interopRequireDefault(_UserComponent2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UserField = function (_UserComponent) {
	  _inherits(UserField, _UserComponent);

	  function UserField() {
	    _classCallCheck(this, UserField);

	    var _this = _possibleConstructorReturn(this, (UserField.__proto__ || Object.getPrototypeOf(UserField)).apply(this, arguments));

	    _utils2.default.logWarning('The UserField component has been deprecated. Please use the user context instead. See: https://github.com/stormpath/stormpath-sdk-react/blob/master/docs/api.md#contexts');
	    return _this;
	  }

	  _createClass(UserField, [{
	    key: '_resolveFieldValue',
	    value: function _resolveFieldValue(name) {
	      var value = this.state.user;
	      var keys = name.split('.');

	      while (keys.length) {
	        var key = keys.shift();

	        if (!(key in value)) {
	          throw new Error('Field does not exist');
	        }

	        value = value[key];
	      }

	      return value;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var fieldName = this.props.fieldName;
	      var fieldValue = null;

	      try {
	        fieldValue = this._resolveFieldValue(fieldName);
	      } catch (e) {
	        if ('default' in this.props) {
	          fieldValue = this.props['default'];
	        }
	      }

	      return _react2.default.createElement(
	        'span',
	        { className: this.props.className },
	        fieldValue
	      );
	    }
	  }]);

	  return UserField;
	}(_UserComponent3.default);

	exports.default = UserField;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(8);

	var _utils2 = _interopRequireDefault(_utils);

	var _context = __webpack_require__(20);

	var _context2 = _interopRequireDefault(_context);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UserComponent = function (_React$Component) {
	  _inherits(UserComponent, _React$Component);

	  function UserComponent() {
	    _classCallCheck(this, UserComponent);

	    var _this = _possibleConstructorReturn(this, (UserComponent.__proto__ || Object.getPrototypeOf(UserComponent)).apply(this, arguments));

	    _this.onChangeListener = null;
	    _this.state = {
	      user: {}
	    };

	    _utils2.default.logWarning('The UserComponent class has been deprecated. Please use the user context instead. See: https://github.com/stormpath/stormpath-sdk-react/blob/master/docs/api.md#contexts');
	    return _this;
	  }

	  _createClass(UserComponent, [{
	    key: 'onChange',
	    value: function onChange() {
	      var _this2 = this;

	      _context2.default.userStore.resolveSession(function (err, user) {
	        if (_this2.onChangeListener !== null) {
	          _this2.setState({ user: user });
	        }
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.onChangeListener = this.onChange.bind(this);
	      _context2.default.userStore.addChangeListener(this.onChangeListener);
	      this.onChange();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _context2.default.userStore.removeChangeListener(this.onChangeListener);
	      this.onChangeListener = null;
	    }
	  }]);

	  return UserComponent;
	}(_react2.default.Component);

	exports.default = UserComponent;

/***/ })
/******/ ])
});
;