/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchHotelDetail = exports.FETCH_HOTEL_DETAIL = exports.fetchRooms = exports.FETCH_ROOMS = undefined;

__webpack_require__(17);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_ROOMS = exports.FETCH_ROOMS = "fetch_rooms";

var fetchRooms = exports.fetchRooms = function fetchRooms() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
      var response;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return api.get("/rooms");

            case 2:
              response = _context.sent;


              dispatch({
                type: FETCH_ROOMS,
                payload: response
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

var FETCH_HOTEL_DETAIL = exports.FETCH_HOTEL_DETAIL = "fetch_hotel_detail";

var fetchHotelDetail = exports.fetchHotelDetail = function fetchHotelDetail() {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
      var response;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return api.get("/hotels");

            case 2:
              response = _context2.sent;


              dispatch({
                type: FETCH_HOTEL_DETAIL,
                payload: response
              });

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    API_URL: 'http://localhost:5000/api'
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _App = __webpack_require__(15);

var _App2 = _interopRequireDefault(_App);

var _HomePage = __webpack_require__(16);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _DynamicForm = __webpack_require__(18);

var _DynamicForm2 = _interopRequireDefault(_DynamicForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
  routes: [_extends({}, _HomePage2.default, {
    path: "/",
    exact: true
  }), _extends({}, _DynamicForm2.default, {
    path: "/dynamic-form"
  })]
})];

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(9);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(2);

var _expressHttpProxy = __webpack_require__(10);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _renderer = __webpack_require__(11);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(21);

var _createStore2 = _interopRequireDefault(_createStore);

var _Routes = __webpack_require__(5);

var _Routes2 = _interopRequireDefault(_Routes);

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use("/api", (0, _expressHttpProxy2.default)(_config2.default.API_URL, {
  proxyReqOptDecorator: function proxyReqOptDecorator(opts) {
    opts.headers["x-forwarded-host"] = "localhost:3000";
    return opts;
  }
}));
app.use(_express2.default.static("public"));

app.get("*", function (req, res) {
  var store = (0, _createStore2.default)(req);

  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
    var loadData = _ref.route.loadData;
    return loadData ? loadData(store) : null;
  }).map(function (promise) {
    return promise && new Promise(function (res) {
      promise.then(res).catch(res);
    });
  });

  Promise.all(promises).then(function () {
    var context = {},
        content = (0, _renderer2.default)(req, store, context);

    if (context.url) return res.redirect(302, context.url);

    res.send(content);
  });
});

app.listen(3000, function () {
  console.log("Express app running on port: 3000");
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(12);

var _reactRouterDom = __webpack_require__(13);

var _reactRedux = __webpack_require__(3);

var _reactRouterConfig = __webpack_require__(2);

var _serializeJavascript = __webpack_require__(14);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _Routes = __webpack_require__(5);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store, context) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: context },
      _react2.default.createElement(
        "div",
        null,
        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
      )
    )
  ));

  return "\n      <html>\n        <head>\n          <meta charset=\"utf-8\">\n          <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n          <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n          <link href=\"https://use.fontawesome.com/releases/v5.0.7/css/all.css\" rel=\"stylesheet\">\n          <link href=\"/style.css\" rel=\"stylesheet\">\n          <link href=\"/dynamic-form.css\" rel=\"stylesheet\">\n          <link href=\"/bootstrap.min.css\" rel=\"stylesheet\">\n        </head>\n        <body>\n          <div id=\"root\">" + content + "</div>\n        </body>\n        <script>\n          window.INITIAL_STATE = " + (0, _serializeJavascript2.default)(store.getState()) + "\n        </script>\n        <script src=\"bundle.js\"></script>\n      </html>\n    ";
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var route = _ref.route;
  return _react2.default.createElement(
    "div",
    null,
    (0, _reactRouterConfig.renderRoutes)(route.routes)
  );
};

exports.default = {
  component: App
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadData = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _actions = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = function (_Component) {
    _inherits(HomePage, _Component);

    function HomePage() {
        _classCallCheck(this, HomePage);

        var _this = _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this));

        _this.state = {
            openItems: {
                map: false,
                photos: false,
                amenities: false
            }
        };
        return _this;
    }

    _createClass(HomePage, [{
        key: "openItem",
        value: function openItem(item) {
            var items = this.state.openItems;
            items[item] = !items[item];
            this.setState({ openItems: items });
        }
    }, {
        key: "goToRoomsSelection",
        value: function goToRoomsSelection() {
            window.location.href = "/dynamic-form";
        }
    }, {
        key: "head",
        value: function head() {
            return _react2.default.createElement(
                "header",
                { className: "headerSite" },
                _react2.default.createElement(
                    "div",
                    { className: "buttonBack" },
                    _react2.default.createElement(
                        "button",
                        { type: "button", className: "backBtn", onClick: this.goToRoomsSelection },
                        _react2.default.createElement("i", { className: "fa fa-angle-left" }),
                        "Back"
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "titleBox" },
                    _react2.default.createElement(
                        "div",
                        { className: "title" },
                        "Hotel Details"
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "logoBox" },
                    " ",
                    _react2.default.createElement(
                        "a",
                        { href: "javascript:void(0)", title: "logo" },
                        _react2.default.createElement("img", { src: "images/logo.jpg", alt: "logo" })
                    ),
                    " "
                )
            );
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                this.head(),
                _react2.default.createElement(
                    "section",
                    { className: "back-image" },
                    _react2.default.createElement(
                        "div",
                        { className: "outline" },
                        _react2.default.createElement(
                            "div",
                            { className: "imageWrap" },
                            " ",
                            _react2.default.createElement("img", { src: "images/hotelexterior.jpg", alt: "image" }),
                            " "
                        ),
                        this.props.hotels && this.props.hotels.address ? _react2.default.createElement(
                            "address",
                            null,
                            _react2.default.createElement(
                                "p",
                                { className: "addLine1" },
                                this.props.hotels.address.line1
                            ),
                            _react2.default.createElement(
                                "p",
                                { className: "addLine2" },
                                this.props.hotels.address.line2
                            ),
                            _react2.default.createElement(
                                "p",
                                { className: "addLine3" },
                                this.props.hotels.address.line3
                            )
                        ) : '',
                        this.props.hotels && this.props.hotels.facilities ? _react2.default.createElement(
                            "div",
                            { className: "item" },
                            _react2.default.createElement(
                                "div",
                                { className: "item-head", onClick: this.openItem.bind(this, 'map') },
                                _react2.default.createElement(
                                    "h4",
                                    null,
                                    "Map"
                                ),
                                _react2.default.createElement("div", { className: this.state.openItems.map ? "arrow down fas fa-chevron-down" : "arrow down fas fa-chevron-right" })
                            ),
                            this.state.openItems.map ? _react2.default.createElement(
                                "div",
                                { className: "item-body" },
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    this.props.hotels.facilities.map
                                )
                            ) : '',
                            _react2.default.createElement(
                                "div",
                                { className: "item-head", onClick: this.openItem.bind(this, 'photos') },
                                _react2.default.createElement(
                                    "h4",
                                    null,
                                    "Photo gallery"
                                ),
                                _react2.default.createElement("div", { className: this.state.openItems.photos ? "arrow down fas fa-chevron-down" : "arrow down fas fa-chevron-right" })
                            ),
                            this.state.openItems.photos ? _react2.default.createElement(
                                "div",
                                { className: "item-body" },
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    this.props.hotels.facilities.photos
                                )
                            ) : '',
                            _react2.default.createElement(
                                "div",
                                { className: "item-head", onClick: this.openItem.bind(this, 'amenities') },
                                _react2.default.createElement(
                                    "h4",
                                    null,
                                    "Amenities"
                                ),
                                _react2.default.createElement("div", { className: this.state.openItems.amenities ? "arrow down fas fa-chevron-down" : "arrow down fas fa-chevron-right" })
                            ),
                            this.state.openItems.amenities ? _react2.default.createElement(
                                "div",
                                { className: "item-body" },
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    this.props.hotels.facilities.amenities
                                )
                            ) : ''
                        ) : ''
                    )
                )
            );
        }
    }]);

    return HomePage;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref) {
    var hotels = _ref.hotels;
    return { hotels: hotels };
};

var loadData = exports.loadData = function loadData(_ref2) {
    var dispatch = _ref2.dispatch;
    return dispatch((0, _actions.fetchHotelDetail)());
};

exports.default = {
    loadData: loadData,
    component: (0, _reactRedux.connect)(mapStateToProps, { fetchHotelDetail: _actions.fetchHotelDetail })(HomePage)
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadData = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _actions = __webpack_require__(1);

var _constant = __webpack_require__(19);

var _constant2 = _interopRequireDefault(_constant);

var _roomService = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DynamicForm = function (_Component) {
    _inherits(DynamicForm, _Component);

    function DynamicForm(props) {
        _classCallCheck(this, DynamicForm);

        var _this = _possibleConstructorReturn(this, (DynamicForm.__proto__ || Object.getPrototypeOf(DynamicForm)).call(this, props));

        _this.state = {
            rooms: _constant2.default.roomsSelections,
            adults: [],
            children: []
        };
        return _this;
    }

    _createClass(DynamicForm, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            var _props = this.props,
                rooms = _props.rooms,
                fetchRooms = _props.fetchRooms;

            if (rooms.length === 0) {
                fetchRooms();
            }

            if (rooms) {
                this.setState({ rooms: rooms.selections });
            }

            // Get dropdowns values
            (0, _roomService.getDropDowns)().then(function (res) {
                console.log('res', res);
                res.data && res.data.adults && _this2.setState({ adults: res.data.adults });
                res.data && res.data.children && _this2.setState({ children: res.data.children });
            });
        }
    }, {
        key: "handleCheck",
        value: function handleCheck(evt, selectedRoom) {
            var newRooms = this.state.rooms.map(function (room, sidx) {
                if (room.number !== 1 && room.number <= selectedRoom && evt.target.checked) {
                    return _extends({}, room, { disabled: false, checked: true });
                }
                if (room.number !== 1 && room.number >= selectedRoom && !evt.target.checked) {
                    return _extends({}, room, { disabled: true, checked: false, children: 0, adult: 1 });
                }
                if (room.number !== 1 && room.number > selectedRoom) {
                    return _extends({}, room, { disabled: true, checked: false });
                }
                return _extends({}, room);
            });
            this.setState({ rooms: newRooms });
        }
    }, {
        key: "handleAdults",
        value: function handleAdults(evt, number) {
            var newRooms = this.state.rooms.map(function (room, sidx) {
                if (number === room.number) {
                    return _extends({}, room, { adult: parseInt(evt.target.value) });
                }
                return _extends({}, room);
            });
            this.setState({ rooms: newRooms });
        }
    }, {
        key: "handleChild",
        value: function handleChild(evt, number) {
            var newRooms = this.state.rooms.map(function (room) {
                if (number === room.number) {
                    return _extends({}, room, { children: parseInt(evt.target.value) });
                }
                return _extends({}, room);
            });
            this.setState({ rooms: newRooms });
        }
    }, {
        key: "submit",
        value: function submit() {
            var _this3 = this;

            (0, _roomService.saveSelection)(this.state.rooms).then(function (res) {
                _this3.setState({ rooms: res.data.selections });
                alert('Successfully saved!');
            }).catch(function (err) {
                _this3.setState({ rooms: _constant2.default.roomsSelections });
                alert('something went wrong');
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

            return _react2.default.createElement(
                "div",
                { className: "App", style: { marginTop: '40px' } },
                _react2.default.createElement(
                    "div",
                    { className: "container" },
                    _react2.default.createElement(
                        "a",
                        { href: "/" },
                        "Home"
                    ),
                    _react2.default.createElement(
                        "h2",
                        null,
                        "Select Rooms"
                    ),
                    _react2.default.createElement("br", null),
                    _react2.default.createElement(
                        "div",
                        { className: "row" },
                        this.state.rooms.map(function (room, idx) {
                            return _react2.default.createElement(
                                "div",
                                { className: "col-sm-3", key: idx },
                                _react2.default.createElement(
                                    "div",
                                    { className: "card" },
                                    room.number === 1 ? _react2.default.createElement(
                                        "h5",
                                        { className: "card-header" },
                                        "Room 1"
                                    ) : _react2.default.createElement(
                                        "div",
                                        { className: "card-header" },
                                        _react2.default.createElement(
                                            "label",
                                            { className: "checkbox-inline" },
                                            _react2.default.createElement("input", { type: "checkbox", checked: room.checked, onChange: function onChange(e) {
                                                    return _this4.handleCheck(e, room.number);
                                                } }),
                                            "Room ",
                                            room.number
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "div",
                                        { className: room.disabled ? 'card-body disabled' : 'card-body' },
                                        _react2.default.createElement(
                                            "div",
                                            { className: "row" },
                                            _react2.default.createElement(
                                                "div",
                                                { className: "col-sm-6" },
                                                _react2.default.createElement(
                                                    "div",
                                                    { className: "form-group" },
                                                    _react2.default.createElement(
                                                        "label",
                                                        { htmlFor: "sel1" },
                                                        "Adults (18+)"
                                                    ),
                                                    _react2.default.createElement(
                                                        "select",
                                                        { className: "form-control", id: "sel1", value: room.adult, onChange: function onChange(e) {
                                                                return _this4.handleAdults(e, room.number);
                                                            } },
                                                        _this4.state.adults.map(function (item) {
                                                            return _react2.default.createElement(
                                                                "option",
                                                                { key: item, value: item },
                                                                item
                                                            );
                                                        })
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                "div",
                                                { className: "col-sm-6" },
                                                _react2.default.createElement(
                                                    "div",
                                                    { className: "form-group" },
                                                    _react2.default.createElement(
                                                        "label",
                                                        { htmlFor: "sel1" },
                                                        "Children (0-17)"
                                                    ),
                                                    _react2.default.createElement(
                                                        "select",
                                                        { value: room.children, className: "form-control", id: "sel1", onChange: function onChange(e) {
                                                                return _this4.handleChild(e, room.number);
                                                            } },
                                                        _this4.state.children.map(function (item) {
                                                            return _react2.default.createElement(
                                                                "option",
                                                                { key: item, value: item },
                                                                item
                                                            );
                                                        })
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            );
                        }),
                        _react2.default.createElement(
                            "div",
                            { className: "submit-btn" },
                            _react2.default.createElement(
                                "button",
                                { className: "btn btn-lg btn-info", type: "submit", onClick: this.submit.bind(this) },
                                "Submit"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return DynamicForm;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref) {
    var rooms = _ref.rooms,
        dropdown_values = _ref.dropdown_values;
    return { rooms: rooms, dropdown_values: dropdown_values };
};

var loadData = exports.loadData = function loadData(_ref2) {
    var dispatch = _ref2.dispatch;
    return dispatch((0, _actions.fetchRooms)());
};

exports.default = {
    loadData: loadData,
    component: (0, _reactRedux.connect)(mapStateToProps, { fetchRooms: _actions.fetchRooms })(DynamicForm)
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    roomsSelections: [{
        number: 1,
        adult: 1,
        children: 0,
        disabled: false,
        checked: false
    }, {
        number: 2,
        adult: 1,
        children: 0,
        disabled: true,
        checked: false
    }, {
        number: 3,
        adult: 1,
        children: 0,
        disabled: true,
        checked: false
    }, {
        number: 4,
        adult: 1,
        children: 0,
        disabled: true,
        checked: false
    }]
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getDropDowns = exports.saveSelection = undefined;

var _axios = __webpack_require__(6);

var _axios2 = _interopRequireDefault(_axios);

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var saveSelection = exports.saveSelection = function saveSelection(data) {
    return (0, _axios2.default)({
        method: 'post',
        url: _config2.default.API_URL + '/rooms',
        data: { selections: data },
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
    });
};

var getDropDowns = exports.getDropDowns = function getDropDowns() {
    return (0, _axios2.default)({
        method: 'get',
        url: _config2.default.API_URL + '/constants'
    });
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(7);

var _reduxThunk = __webpack_require__(22);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(6);

var _axios2 = _interopRequireDefault(_axios);

var _reducers = __webpack_require__(23);

var _reducers2 = _interopRequireDefault(_reducers);

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  var axiosInstance = _axios2.default.create({
    baseURL: _config2.default.API_URL,
    headers: { cookie: req.get("cookie") || "" }
  });

  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));

  return store;
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(7);

var _rooms_reducer = __webpack_require__(24);

var _rooms_reducer2 = _interopRequireDefault(_rooms_reducer);

var _hotel_reducer = __webpack_require__(25);

var _hotel_reducer2 = _interopRequireDefault(_hotel_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  rooms: _rooms_reducer2.default,
  hotels: _hotel_reducer2.default
});

exports.default = rootReducer;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(1);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];
  var type = action.type,
      payload = action.payload;


  switch (type) {
    case _actions.FETCH_ROOMS:
      return payload.data;

    default:
      return state;
  }
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = __webpack_require__(1);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];
    var type = action.type,
        payload = action.payload;


    switch (type) {
        case _actions.FETCH_HOTEL_DETAIL:
            return payload.data;

        default:
            return state;
    }
};

/***/ })
/******/ ]);