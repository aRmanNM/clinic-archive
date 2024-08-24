(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a2, b4) => {
    for (var prop in b4 || (b4 = {}))
      if (__hasOwnProp.call(b4, prop))
        __defNormalProp(a2, prop, b4[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b4)) {
        if (__propIsEnum.call(b4, prop))
          __defNormalProp(a2, prop, b4[prop]);
      }
    return a2;
  };
  var __spreadProps = (a2, b4) => __defProps(a2, __getOwnPropDescs(b4));
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // ../../node_modules/react/cjs/react.production.min.js
  var require_react_production_min = __commonJS({
    "../../node_modules/react/cjs/react.production.min.js"(exports) {
      "use strict";
      var l4 = Symbol.for("react.element");
      var n2 = Symbol.for("react.portal");
      var p3 = Symbol.for("react.fragment");
      var q = Symbol.for("react.strict_mode");
      var r4 = Symbol.for("react.profiler");
      var t6 = Symbol.for("react.provider");
      var u2 = Symbol.for("react.context");
      var v2 = Symbol.for("react.forward_ref");
      var w2 = Symbol.for("react.suspense");
      var x2 = Symbol.for("react.memo");
      var y2 = Symbol.for("react.lazy");
      var z = Symbol.iterator;
      function A2(a2) {
        if (a2 === null || typeof a2 !== "object")
          return null;
        a2 = z && a2[z] || a2["@@iterator"];
        return typeof a2 === "function" ? a2 : null;
      }
      var B2 = {
        isMounted: function () {
          return false;
        }, enqueueForceUpdate: function () {
        }, enqueueReplaceState: function () {
        }, enqueueSetState: function () {
        }
      };
      var C3 = Object.assign;
      var D2 = {};
      function E2(a2, b4, e7) {
        this.props = a2;
        this.context = b4;
        this.refs = D2;
        this.updater = e7 || B2;
      }
      E2.prototype.isReactComponent = {};
      E2.prototype.setState = function (a2, b4) {
        if (typeof a2 !== "object" && typeof a2 !== "function" && a2 != null)
          throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, a2, b4, "setState");
      };
      E2.prototype.forceUpdate = function (a2) {
        this.updater.enqueueForceUpdate(this, a2, "forceUpdate");
      };
      function F() {
      }
      F.prototype = E2.prototype;
      function G2(a2, b4, e7) {
        this.props = a2;
        this.context = b4;
        this.refs = D2;
        this.updater = e7 || B2;
      }
      var H = G2.prototype = new F();
      H.constructor = G2;
      C3(H, E2.prototype);
      H.isPureReactComponent = true;
      var I = Array.isArray;
      var J = Object.prototype.hasOwnProperty;
      var K2 = { current: null };
      var L2 = { key: true, ref: true, __self: true, __source: true };
      function M2(a2, b4, e7) {
        var d2, c = {}, k = null, h2 = null;
        if (b4 != null)
          for (d2 in b4.ref !== void 0 && (h2 = b4.ref), b4.key !== void 0 && (k = "" + b4.key), b4)
            J.call(b4, d2) && !L2.hasOwnProperty(d2) && (c[d2] = b4[d2]);
        var g2 = arguments.length - 2;
        if (g2 === 1)
          c.children = e7;
        else if (1 < g2) {
          for (var f3 = Array(g2), m3 = 0; m3 < g2; m3++)
            f3[m3] = arguments[m3 + 2];
          c.children = f3;
        }
        if (a2 && a2.defaultProps)
          for (d2 in g2 = a2.defaultProps, g2)
            c[d2] === void 0 && (c[d2] = g2[d2]);
        return { $$typeof: l4, type: a2, key: k, ref: h2, props: c, _owner: K2.current };
      }
      function N(a2, b4) {
        return { $$typeof: l4, type: a2.type, key: b4, ref: a2.ref, props: a2.props, _owner: a2._owner };
      }
      function O(a2) {
        return typeof a2 === "object" && a2 !== null && a2.$$typeof === l4;
      }
      function escape(a2) {
        var b4 = { "=": "=0", ":": "=2" };
        return "$" + a2.replace(/[=:]/g, function (a3) {
          return b4[a3];
        });
      }
      var P2 = /\/+/g;
      function Q(a2, b4) {
        return typeof a2 === "object" && a2 !== null && a2.key != null ? escape("" + a2.key) : b4.toString(36);
      }
      function R3(a2, b4, e7, d2, c) {
        var k = typeof a2;
        if (k === "undefined" || k === "boolean")
          a2 = null;
        var h2 = false;
        if (a2 === null)
          h2 = true;
        else
          switch (k) {
            case "string":
            case "number":
              h2 = true;
              break;
            case "object":
              switch (a2.$$typeof) {
                case l4:
                case n2:
                  h2 = true;
              }
          }
        if (h2)
          return h2 = a2, c = c(h2), a2 = d2 === "" ? "." + Q(h2, 0) : d2, I(c) ? (e7 = "", a2 != null && (e7 = a2.replace(P2, "$&/") + "/"), R3(c, b4, e7, "", function (a3) {
            return a3;
          })) : c != null && (O(c) && (c = N(c, e7 + (!c.key || h2 && h2.key === c.key ? "" : ("" + c.key).replace(P2, "$&/") + "/") + a2)), b4.push(c)), 1;
        h2 = 0;
        d2 = d2 === "" ? "." : d2 + ":";
        if (I(a2))
          for (var g2 = 0; g2 < a2.length; g2++) {
            k = a2[g2];
            var f3 = d2 + Q(k, g2);
            h2 += R3(k, b4, e7, f3, c);
          }
        else if (f3 = A2(a2), typeof f3 === "function")
          for (a2 = f3.call(a2), g2 = 0; !(k = a2.next()).done;)
            k = k.value, f3 = d2 + Q(k, g2++), h2 += R3(k, b4, e7, f3, c);
        else if (k === "object")
          throw b4 = String(a2), Error("Objects are not valid as a React child (found: " + (b4 === "[object Object]" ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b4) + "). If you meant to render a collection of children, use an array instead.");
        return h2;
      }
      function S2(a2, b4, e7) {
        if (a2 == null)
          return a2;
        var d2 = [], c = 0;
        R3(a2, d2, "", "", function (a3) {
          return b4.call(e7, a3, c++);
        });
        return d2;
      }
      function T(a2) {
        if (a2._status === -1) {
          var b4 = a2._result;
          b4 = b4();
          b4.then(function (b5) {
            if (a2._status === 0 || a2._status === -1)
              a2._status = 1, a2._result = b5;
          }, function (b5) {
            if (a2._status === 0 || a2._status === -1)
              a2._status = 2, a2._result = b5;
          });
          a2._status === -1 && (a2._status = 0, a2._result = b4);
        }
        if (a2._status === 1)
          return a2._result.default;
        throw a2._result;
      }
      var U = { current: null };
      var V3 = { transition: null };
      var W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V3, ReactCurrentOwner: K2 };
      exports.Children = {
        map: S2, forEach: function (a2, b4, e7) {
          S2(a2, function () {
            b4.apply(this, arguments);
          }, e7);
        }, count: function (a2) {
          var b4 = 0;
          S2(a2, function () {
            b4++;
          });
          return b4;
        }, toArray: function (a2) {
          return S2(a2, function (a3) {
            return a3;
          }) || [];
        }, only: function (a2) {
          if (!O(a2))
            throw Error("React.Children.only expected to receive a single React element child.");
          return a2;
        }
      };
      exports.Component = E2;
      exports.Fragment = p3;
      exports.Profiler = r4;
      exports.PureComponent = G2;
      exports.StrictMode = q;
      exports.Suspense = w2;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
      exports.cloneElement = function (a2, b4, e7) {
        if (a2 === null || a2 === void 0)
          throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a2 + ".");
        var d2 = C3({}, a2.props), c = a2.key, k = a2.ref, h2 = a2._owner;
        if (b4 != null) {
          b4.ref !== void 0 && (k = b4.ref, h2 = K2.current);
          b4.key !== void 0 && (c = "" + b4.key);
          if (a2.type && a2.type.defaultProps)
            var g2 = a2.type.defaultProps;
          for (f3 in b4)
            J.call(b4, f3) && !L2.hasOwnProperty(f3) && (d2[f3] = b4[f3] === void 0 && g2 !== void 0 ? g2[f3] : b4[f3]);
        }
        var f3 = arguments.length - 2;
        if (f3 === 1)
          d2.children = e7;
        else if (1 < f3) {
          g2 = Array(f3);
          for (var m3 = 0; m3 < f3; m3++)
            g2[m3] = arguments[m3 + 2];
          d2.children = g2;
        }
        return { $$typeof: l4, type: a2.type, key: c, ref: k, props: d2, _owner: h2 };
      };
      exports.createContext = function (a2) {
        a2 = { $$typeof: u2, _currentValue: a2, _currentValue2: a2, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
        a2.Provider = { $$typeof: t6, _context: a2 };
        return a2.Consumer = a2;
      };
      exports.createElement = M2;
      exports.createFactory = function (a2) {
        var b4 = M2.bind(null, a2);
        b4.type = a2;
        return b4;
      };
      exports.createRef = function () {
        return { current: null };
      };
      exports.forwardRef = function (a2) {
        return { $$typeof: v2, render: a2 };
      };
      exports.isValidElement = O;
      exports.lazy = function (a2) {
        return { $$typeof: y2, _payload: { _status: -1, _result: a2 }, _init: T };
      };
      exports.memo = function (a2, b4) {
        return { $$typeof: x2, type: a2, compare: b4 === void 0 ? null : b4 };
      };
      exports.startTransition = function (a2) {
        var b4 = V3.transition;
        V3.transition = {};
        try {
          a2();
        } finally {
          V3.transition = b4;
        }
      };
      exports.unstable_act = function () {
        throw Error("act(...) is not supported in production builds of React.");
      };
      exports.useCallback = function (a2, b4) {
        return U.current.useCallback(a2, b4);
      };
      exports.useContext = function (a2) {
        return U.current.useContext(a2);
      };
      exports.useDebugValue = function () {
      };
      exports.useDeferredValue = function (a2) {
        return U.current.useDeferredValue(a2);
      };
      exports.useEffect = function (a2, b4) {
        return U.current.useEffect(a2, b4);
      };
      exports.useId = function () {
        return U.current.useId();
      };
      exports.useImperativeHandle = function (a2, b4, e7) {
        return U.current.useImperativeHandle(a2, b4, e7);
      };
      exports.useInsertionEffect = function (a2, b4) {
        return U.current.useInsertionEffect(a2, b4);
      };
      exports.useLayoutEffect = function (a2, b4) {
        return U.current.useLayoutEffect(a2, b4);
      };
      exports.useMemo = function (a2, b4) {
        return U.current.useMemo(a2, b4);
      };
      exports.useReducer = function (a2, b4, e7) {
        return U.current.useReducer(a2, b4, e7);
      };
      exports.useRef = function (a2) {
        return U.current.useRef(a2);
      };
      exports.useState = function (a2) {
        return U.current.useState(a2);
      };
      exports.useSyncExternalStore = function (a2, b4, e7) {
        return U.current.useSyncExternalStore(a2, b4, e7);
      };
      exports.useTransition = function () {
        return U.current.useTransition();
      };
      exports.version = "18.1.0";
    }
  });

  // ../../node_modules/react/index.js
  var require_react = __commonJS({
    "../../node_modules/react/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // ../../node_modules/scheduler/cjs/scheduler.production.min.js
  var require_scheduler_production_min = __commonJS({
    "../../node_modules/scheduler/cjs/scheduler.production.min.js"(exports) {
      "use strict";
      function f3(a2, b4) {
        var c = a2.length;
        a2.push(b4);
        a:
        for (; 0 < c;) {
          var d2 = c - 1 >>> 1, e7 = a2[d2];
          if (0 < g2(e7, b4))
            a2[d2] = b4, a2[c] = e7, c = d2;
          else
            break a;
        }
      }
      function h2(a2) {
        return a2.length === 0 ? null : a2[0];
      }
      function k(a2) {
        if (a2.length === 0)
          return null;
        var b4 = a2[0], c = a2.pop();
        if (c !== b4) {
          a2[0] = c;
          a:
          for (var d2 = 0, e7 = a2.length, w2 = e7 >>> 1; d2 < w2;) {
            var m3 = 2 * (d2 + 1) - 1, C3 = a2[m3], n2 = m3 + 1, x2 = a2[n2];
            if (0 > g2(C3, c))
              n2 < e7 && 0 > g2(x2, C3) ? (a2[d2] = x2, a2[n2] = c, d2 = n2) : (a2[d2] = C3, a2[m3] = c, d2 = m3);
            else if (n2 < e7 && 0 > g2(x2, c))
              a2[d2] = x2, a2[n2] = c, d2 = n2;
            else
              break a;
          }
        }
        return b4;
      }
      function g2(a2, b4) {
        var c = a2.sortIndex - b4.sortIndex;
        return c !== 0 ? c : a2.id - b4.id;
      }
      if (typeof performance === "object" && typeof performance.now === "function") {
        l4 = performance;
        exports.unstable_now = function () {
          return l4.now();
        };
      } else {
        p3 = Date, q = p3.now();
        exports.unstable_now = function () {
          return p3.now() - q;
        };
      }
      var l4;
      var p3;
      var q;
      var r4 = [];
      var t6 = [];
      var u2 = 1;
      var v2 = null;
      var y2 = 3;
      var z = false;
      var A2 = false;
      var B2 = false;
      var D2 = typeof setTimeout === "function" ? setTimeout : null;
      var E2 = typeof clearTimeout === "function" ? clearTimeout : null;
      var F = typeof setImmediate !== "undefined" ? setImmediate : null;
      typeof navigator !== "undefined" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function G2(a2) {
        for (var b4 = h2(t6); b4 !== null;) {
          if (b4.callback === null)
            k(t6);
          else if (b4.startTime <= a2)
            k(t6), b4.sortIndex = b4.expirationTime, f3(r4, b4);
          else
            break;
          b4 = h2(t6);
        }
      }
      function H(a2) {
        B2 = false;
        G2(a2);
        if (!A2)
          if (h2(r4) !== null)
            A2 = true, I(J);
          else {
            var b4 = h2(t6);
            b4 !== null && K2(H, b4.startTime - a2);
          }
      }
      function J(a2, b4) {
        A2 = false;
        B2 && (B2 = false, E2(L2), L2 = -1);
        z = true;
        var c = y2;
        try {
          G2(b4);
          for (v2 = h2(r4); v2 !== null && (!(v2.expirationTime > b4) || a2 && !M2());) {
            var d2 = v2.callback;
            if (typeof d2 === "function") {
              v2.callback = null;
              y2 = v2.priorityLevel;
              var e7 = d2(v2.expirationTime <= b4);
              b4 = exports.unstable_now();
              typeof e7 === "function" ? v2.callback = e7 : v2 === h2(r4) && k(r4);
              G2(b4);
            } else
              k(r4);
            v2 = h2(r4);
          }
          if (v2 !== null)
            var w2 = true;
          else {
            var m3 = h2(t6);
            m3 !== null && K2(H, m3.startTime - b4);
            w2 = false;
          }
          return w2;
        } finally {
          v2 = null, y2 = c, z = false;
        }
      }
      var N = false;
      var O = null;
      var L2 = -1;
      var P2 = 5;
      var Q = -1;
      function M2() {
        return exports.unstable_now() - Q < P2 ? false : true;
      }
      function R3() {
        if (O !== null) {
          var a2 = exports.unstable_now();
          Q = a2;
          var b4 = true;
          try {
            b4 = O(true, a2);
          } finally {
            b4 ? S2() : (N = false, O = null);
          }
        } else
          N = false;
      }
      var S2;
      if (typeof F === "function")
        S2 = function () {
          F(R3);
        };
      else if (typeof MessageChannel !== "undefined") {
        T = new MessageChannel(), U = T.port2;
        T.port1.onmessage = R3;
        S2 = function () {
          U.postMessage(null);
        };
      } else
        S2 = function () {
          D2(R3, 0);
        };
      var T;
      var U;
      function I(a2) {
        O = a2;
        N || (N = true, S2());
      }
      function K2(a2, b4) {
        L2 = D2(function () {
          a2(exports.unstable_now());
        }, b4);
      }
      exports.unstable_IdlePriority = 5;
      exports.unstable_ImmediatePriority = 1;
      exports.unstable_LowPriority = 4;
      exports.unstable_NormalPriority = 3;
      exports.unstable_Profiling = null;
      exports.unstable_UserBlockingPriority = 2;
      exports.unstable_cancelCallback = function (a2) {
        a2.callback = null;
      };
      exports.unstable_continueExecution = function () {
        A2 || z || (A2 = true, I(J));
      };
      exports.unstable_forceFrameRate = function (a2) {
        0 > a2 || 125 < a2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a2 ? Math.floor(1e3 / a2) : 5;
      };
      exports.unstable_getCurrentPriorityLevel = function () {
        return y2;
      };
      exports.unstable_getFirstCallbackNode = function () {
        return h2(r4);
      };
      exports.unstable_next = function (a2) {
        switch (y2) {
          case 1:
          case 2:
          case 3:
            var b4 = 3;
            break;
          default:
            b4 = y2;
        }
        var c = y2;
        y2 = b4;
        try {
          return a2();
        } finally {
          y2 = c;
        }
      };
      exports.unstable_pauseExecution = function () {
      };
      exports.unstable_requestPaint = function () {
      };
      exports.unstable_runWithPriority = function (a2, b4) {
        switch (a2) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            a2 = 3;
        }
        var c = y2;
        y2 = a2;
        try {
          return b4();
        } finally {
          y2 = c;
        }
      };
      exports.unstable_scheduleCallback = function (a2, b4, c) {
        var d2 = exports.unstable_now();
        typeof c === "object" && c !== null ? (c = c.delay, c = typeof c === "number" && 0 < c ? d2 + c : d2) : c = d2;
        switch (a2) {
          case 1:
            var e7 = -1;
            break;
          case 2:
            e7 = 250;
            break;
          case 5:
            e7 = 1073741823;
            break;
          case 4:
            e7 = 1e4;
            break;
          default:
            e7 = 5e3;
        }
        e7 = c + e7;
        a2 = { id: u2++, callback: b4, priorityLevel: a2, startTime: c, expirationTime: e7, sortIndex: -1 };
        c > d2 ? (a2.sortIndex = c, f3(t6, a2), h2(r4) === null && a2 === h2(t6) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H, c - d2))) : (a2.sortIndex = e7, f3(r4, a2), A2 || z || (A2 = true, I(J)));
        return a2;
      };
      exports.unstable_shouldYield = M2;
      exports.unstable_wrapCallback = function (a2) {
        var b4 = y2;
        return function () {
          var c = y2;
          y2 = b4;
          try {
            return a2.apply(this, arguments);
          } finally {
            y2 = c;
          }
        };
      };
    }
  });

  // ../../node_modules/scheduler/index.js
  var require_scheduler = __commonJS({
    "../../node_modules/scheduler/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_scheduler_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // ../../node_modules/react-dom/cjs/react-dom.production.min.js
  var require_react_dom_production_min = __commonJS({
    "../../node_modules/react-dom/cjs/react-dom.production.min.js"(exports) {
      "use strict";
      var aa = require_react();
      var ba = require_scheduler();
      function p3(a2) {
        for (var b4 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c = 1; c < arguments.length; c++)
          b4 += "&args[]=" + encodeURIComponent(arguments[c]);
        return "Minified React error #" + a2 + "; visit " + b4 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var da = new Set();
      var ea = {};
      function fa(a2, b4) {
        ha(a2, b4);
        ha(a2 + "Capture", b4);
      }
      function ha(a2, b4) {
        ea[a2] = b4;
        for (a2 = 0; a2 < b4.length; a2++)
          da.add(b4[a2]);
      }
      var ia = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined");
      var ja = Object.prototype.hasOwnProperty;
      var ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
      var la = {};
      var ma = {};
      function na(a2) {
        if (ja.call(ma, a2))
          return true;
        if (ja.call(la, a2))
          return false;
        if (ka.test(a2))
          return ma[a2] = true;
        la[a2] = true;
        return false;
      }
      function oa(a2, b4, c, d2) {
        if (c !== null && c.type === 0)
          return false;
        switch (typeof b4) {
          case "function":
          case "symbol":
            return true;
          case "boolean":
            if (d2)
              return false;
            if (c !== null)
              return !c.acceptsBooleans;
            a2 = a2.toLowerCase().slice(0, 5);
            return a2 !== "data-" && a2 !== "aria-";
          default:
            return false;
        }
      }
      function pa(a2, b4, c, d2) {
        if (b4 === null || typeof b4 === "undefined" || oa(a2, b4, c, d2))
          return true;
        if (d2)
          return false;
        if (c !== null)
          switch (c.type) {
            case 3:
              return !b4;
            case 4:
              return b4 === false;
            case 5:
              return isNaN(b4);
            case 6:
              return isNaN(b4) || 1 > b4;
          }
        return false;
      }
      function t6(a2, b4, c, d2, e7, f3, g2) {
        this.acceptsBooleans = b4 === 2 || b4 === 3 || b4 === 4;
        this.attributeName = d2;
        this.attributeNamespace = e7;
        this.mustUseProperty = c;
        this.propertyName = a2;
        this.type = b4;
        this.sanitizeURL = f3;
        this.removeEmptyString = g2;
      }
      var z = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (a2) {
        z[a2] = new t6(a2, 0, false, a2, null, false, false);
      });
      [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (a2) {
        var b4 = a2[0];
        z[b4] = new t6(b4, 1, false, a2[1], null, false, false);
      });
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (a2) {
        z[a2] = new t6(a2, 2, false, a2.toLowerCase(), null, false, false);
      });
      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (a2) {
        z[a2] = new t6(a2, 2, false, a2, null, false, false);
      });
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (a2) {
        z[a2] = new t6(a2, 3, false, a2.toLowerCase(), null, false, false);
      });
      ["checked", "multiple", "muted", "selected"].forEach(function (a2) {
        z[a2] = new t6(a2, 3, true, a2, null, false, false);
      });
      ["capture", "download"].forEach(function (a2) {
        z[a2] = new t6(a2, 4, false, a2, null, false, false);
      });
      ["cols", "rows", "size", "span"].forEach(function (a2) {
        z[a2] = new t6(a2, 6, false, a2, null, false, false);
      });
      ["rowSpan", "start"].forEach(function (a2) {
        z[a2] = new t6(a2, 5, false, a2.toLowerCase(), null, false, false);
      });
      var qa = /[\-:]([a-z])/g;
      function ra(a2) {
        return a2[1].toUpperCase();
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (a2) {
        var b4 = a2.replace(qa, ra);
        z[b4] = new t6(b4, 1, false, a2, null, false, false);
      });
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (a2) {
        var b4 = a2.replace(qa, ra);
        z[b4] = new t6(b4, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
      });
      ["xml:base", "xml:lang", "xml:space"].forEach(function (a2) {
        var b4 = a2.replace(qa, ra);
        z[b4] = new t6(b4, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
      });
      ["tabIndex", "crossOrigin"].forEach(function (a2) {
        z[a2] = new t6(a2, 1, false, a2.toLowerCase(), null, false, false);
      });
      z.xlinkHref = new t6("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
      ["src", "href", "action", "formAction"].forEach(function (a2) {
        z[a2] = new t6(a2, 1, false, a2.toLowerCase(), null, true, true);
      });
      function sa(a2, b4, c, d2) {
        var e7 = z.hasOwnProperty(b4) ? z[b4] : null;
        if (e7 !== null ? e7.type !== 0 : d2 || !(2 < b4.length) || b4[0] !== "o" && b4[0] !== "O" || b4[1] !== "n" && b4[1] !== "N")
          pa(b4, c, e7, d2) && (c = null), d2 || e7 === null ? na(b4) && (c === null ? a2.removeAttribute(b4) : a2.setAttribute(b4, "" + c)) : e7.mustUseProperty ? a2[e7.propertyName] = c === null ? e7.type === 3 ? false : "" : c : (b4 = e7.attributeName, d2 = e7.attributeNamespace, c === null ? a2.removeAttribute(b4) : (e7 = e7.type, c = e7 === 3 || e7 === 4 && c === true ? "" : "" + c, d2 ? a2.setAttributeNS(d2, b4, c) : a2.setAttribute(b4, c)));
      }
      var ta = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      var ua = Symbol.for("react.element");
      var va = Symbol.for("react.portal");
      var wa = Symbol.for("react.fragment");
      var xa = Symbol.for("react.strict_mode");
      var za = Symbol.for("react.profiler");
      var Aa = Symbol.for("react.provider");
      var Ba = Symbol.for("react.context");
      var Ca = Symbol.for("react.forward_ref");
      var Da = Symbol.for("react.suspense");
      var Ea = Symbol.for("react.suspense_list");
      var Fa = Symbol.for("react.memo");
      var Ga = Symbol.for("react.lazy");
      Symbol.for("react.scope");
      Symbol.for("react.debug_trace_mode");
      var Ha = Symbol.for("react.offscreen");
      Symbol.for("react.legacy_hidden");
      Symbol.for("react.cache");
      Symbol.for("react.tracing_marker");
      var Ia = Symbol.iterator;
      function Ja(a2) {
        if (a2 === null || typeof a2 !== "object")
          return null;
        a2 = Ia && a2[Ia] || a2["@@iterator"];
        return typeof a2 === "function" ? a2 : null;
      }
      var A2 = Object.assign;
      var Ka;
      function La(a2) {
        if (Ka === void 0)
          try {
            throw Error();
          } catch (c) {
            var b4 = c.stack.trim().match(/\n( *(at )?)/);
            Ka = b4 && b4[1] || "";
          }
        return "\n" + Ka + a2;
      }
      var Ma = false;
      function Na(a2, b4) {
        if (!a2 || Ma)
          return "";
        Ma = true;
        var c = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (b4)
            if (b4 = function () {
              throw Error();
            }, Object.defineProperty(b4.prototype, "props", {
              set: function () {
                throw Error();
              }
            }), typeof Reflect === "object" && Reflect.construct) {
              try {
                Reflect.construct(b4, []);
              } catch (l4) {
                var d2 = l4;
              }
              Reflect.construct(a2, [], b4);
            } else {
              try {
                b4.call();
              } catch (l4) {
                d2 = l4;
              }
              a2.call(b4.prototype);
            }
          else {
            try {
              throw Error();
            } catch (l4) {
              d2 = l4;
            }
            a2();
          }
        } catch (l4) {
          if (l4 && d2 && typeof l4.stack === "string") {
            for (var e7 = l4.stack.split("\n"), f3 = d2.stack.split("\n"), g2 = e7.length - 1, h2 = f3.length - 1; 1 <= g2 && 0 <= h2 && e7[g2] !== f3[h2];)
              h2--;
            for (; 1 <= g2 && 0 <= h2; g2--, h2--)
              if (e7[g2] !== f3[h2]) {
                if (g2 !== 1 || h2 !== 1) {
                  do
                    if (g2--, h2--, 0 > h2 || e7[g2] !== f3[h2]) {
                      var k = "\n" + e7[g2].replace(" at new ", " at ");
                      a2.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a2.displayName));
                      return k;
                    }
                  while (1 <= g2 && 0 <= h2);
                }
                break;
              }
          }
        } finally {
          Ma = false, Error.prepareStackTrace = c;
        }
        return (a2 = a2 ? a2.displayName || a2.name : "") ? La(a2) : "";
      }
      function Oa(a2) {
        switch (a2.tag) {
          case 5:
            return La(a2.type);
          case 16:
            return La("Lazy");
          case 13:
            return La("Suspense");
          case 19:
            return La("SuspenseList");
          case 0:
          case 2:
          case 15:
            return a2 = Na(a2.type, false), a2;
          case 11:
            return a2 = Na(a2.type.render, false), a2;
          case 1:
            return a2 = Na(a2.type, true), a2;
          default:
            return "";
        }
      }
      function Pa(a2) {
        if (a2 == null)
          return null;
        if (typeof a2 === "function")
          return a2.displayName || a2.name || null;
        if (typeof a2 === "string")
          return a2;
        switch (a2) {
          case wa:
            return "Fragment";
          case va:
            return "Portal";
          case za:
            return "Profiler";
          case xa:
            return "StrictMode";
          case Da:
            return "Suspense";
          case Ea:
            return "SuspenseList";
        }
        if (typeof a2 === "object")
          switch (a2.$$typeof) {
            case Ba:
              return (a2.displayName || "Context") + ".Consumer";
            case Aa:
              return (a2._context.displayName || "Context") + ".Provider";
            case Ca:
              var b4 = a2.render;
              a2 = a2.displayName;
              a2 || (a2 = b4.displayName || b4.name || "", a2 = a2 !== "" ? "ForwardRef(" + a2 + ")" : "ForwardRef");
              return a2;
            case Fa:
              return b4 = a2.displayName || null, b4 !== null ? b4 : Pa(a2.type) || "Memo";
            case Ga:
              b4 = a2._payload;
              a2 = a2._init;
              try {
                return Pa(a2(b4));
              } catch (c) {
              }
          }
        return null;
      }
      function Qa(a2) {
        var b4 = a2.type;
        switch (a2.tag) {
          case 24:
            return "Cache";
          case 9:
            return (b4.displayName || "Context") + ".Consumer";
          case 10:
            return (b4._context.displayName || "Context") + ".Provider";
          case 18:
            return "DehydratedFragment";
          case 11:
            return a2 = b4.render, a2 = a2.displayName || a2.name || "", b4.displayName || (a2 !== "" ? "ForwardRef(" + a2 + ")" : "ForwardRef");
          case 7:
            return "Fragment";
          case 5:
            return b4;
          case 4:
            return "Portal";
          case 3:
            return "Root";
          case 6:
            return "Text";
          case 16:
            return Pa(b4);
          case 8:
            return b4 === xa ? "StrictMode" : "Mode";
          case 22:
            return "Offscreen";
          case 12:
            return "Profiler";
          case 21:
            return "Scope";
          case 13:
            return "Suspense";
          case 19:
            return "SuspenseList";
          case 25:
            return "TracingMarker";
          case 1:
          case 0:
          case 17:
          case 2:
          case 14:
          case 15:
            if (typeof b4 === "function")
              return b4.displayName || b4.name || null;
            if (typeof b4 === "string")
              return b4;
        }
        return null;
      }
      function Ra(a2) {
        switch (typeof a2) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return a2;
          case "object":
            return a2;
          default:
            return "";
        }
      }
      function Sa(a2) {
        var b4 = a2.type;
        return (a2 = a2.nodeName) && a2.toLowerCase() === "input" && (b4 === "checkbox" || b4 === "radio");
      }
      function Ta(a2) {
        var b4 = Sa(a2) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a2.constructor.prototype, b4), d2 = "" + a2[b4];
        if (!a2.hasOwnProperty(b4) && typeof c !== "undefined" && typeof c.get === "function" && typeof c.set === "function") {
          var e7 = c.get, f3 = c.set;
          Object.defineProperty(a2, b4, {
            configurable: true, get: function () {
              return e7.call(this);
            }, set: function (a3) {
              d2 = "" + a3;
              f3.call(this, a3);
            }
          });
          Object.defineProperty(a2, b4, { enumerable: c.enumerable });
          return {
            getValue: function () {
              return d2;
            }, setValue: function (a3) {
              d2 = "" + a3;
            }, stopTracking: function () {
              a2._valueTracker = null;
              delete a2[b4];
            }
          };
        }
      }
      function Ua(a2) {
        a2._valueTracker || (a2._valueTracker = Ta(a2));
      }
      function Va(a2) {
        if (!a2)
          return false;
        var b4 = a2._valueTracker;
        if (!b4)
          return true;
        var c = b4.getValue();
        var d2 = "";
        a2 && (d2 = Sa(a2) ? a2.checked ? "true" : "false" : a2.value);
        a2 = d2;
        return a2 !== c ? (b4.setValue(a2), true) : false;
      }
      function Wa(a2) {
        a2 = a2 || (typeof document !== "undefined" ? document : void 0);
        if (typeof a2 === "undefined")
          return null;
        try {
          return a2.activeElement || a2.body;
        } catch (b4) {
          return a2.body;
        }
      }
      function Xa(a2, b4) {
        var c = b4.checked;
        return A2({}, b4, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c != null ? c : a2._wrapperState.initialChecked });
      }
      function Ya(a2, b4) {
        var c = b4.defaultValue == null ? "" : b4.defaultValue, d2 = b4.checked != null ? b4.checked : b4.defaultChecked;
        c = Ra(b4.value != null ? b4.value : c);
        a2._wrapperState = { initialChecked: d2, initialValue: c, controlled: b4.type === "checkbox" || b4.type === "radio" ? b4.checked != null : b4.value != null };
      }
      function Za(a2, b4) {
        b4 = b4.checked;
        b4 != null && sa(a2, "checked", b4, false);
      }
      function $a(a2, b4) {
        Za(a2, b4);
        var c = Ra(b4.value), d2 = b4.type;
        if (c != null)
          if (d2 === "number") {
            if (c === 0 && a2.value === "" || a2.value != c)
              a2.value = "" + c;
          } else
            a2.value !== "" + c && (a2.value = "" + c);
        else if (d2 === "submit" || d2 === "reset") {
          a2.removeAttribute("value");
          return;
        }
        b4.hasOwnProperty("value") ? bb(a2, b4.type, c) : b4.hasOwnProperty("defaultValue") && bb(a2, b4.type, Ra(b4.defaultValue));
        b4.checked == null && b4.defaultChecked != null && (a2.defaultChecked = !!b4.defaultChecked);
      }
      function cb(a2, b4, c) {
        if (b4.hasOwnProperty("value") || b4.hasOwnProperty("defaultValue")) {
          var d2 = b4.type;
          if (!(d2 !== "submit" && d2 !== "reset" || b4.value !== void 0 && b4.value !== null))
            return;
          b4 = "" + a2._wrapperState.initialValue;
          c || b4 === a2.value || (a2.value = b4);
          a2.defaultValue = b4;
        }
        c = a2.name;
        c !== "" && (a2.name = "");
        a2.defaultChecked = !!a2._wrapperState.initialChecked;
        c !== "" && (a2.name = c);
      }
      function bb(a2, b4, c) {
        if (b4 !== "number" || Wa(a2.ownerDocument) !== a2)
          c == null ? a2.defaultValue = "" + a2._wrapperState.initialValue : a2.defaultValue !== "" + c && (a2.defaultValue = "" + c);
      }
      var db = Array.isArray;
      function eb(a2, b4, c, d2) {
        a2 = a2.options;
        if (b4) {
          b4 = {};
          for (var e7 = 0; e7 < c.length; e7++)
            b4["$" + c[e7]] = true;
          for (c = 0; c < a2.length; c++)
            e7 = b4.hasOwnProperty("$" + a2[c].value), a2[c].selected !== e7 && (a2[c].selected = e7), e7 && d2 && (a2[c].defaultSelected = true);
        } else {
          c = "" + Ra(c);
          b4 = null;
          for (e7 = 0; e7 < a2.length; e7++) {
            if (a2[e7].value === c) {
              a2[e7].selected = true;
              d2 && (a2[e7].defaultSelected = true);
              return;
            }
            b4 !== null || a2[e7].disabled || (b4 = a2[e7]);
          }
          b4 !== null && (b4.selected = true);
        }
      }
      function fb(a2, b4) {
        if (b4.dangerouslySetInnerHTML != null)
          throw Error(p3(91));
        return A2({}, b4, { value: void 0, defaultValue: void 0, children: "" + a2._wrapperState.initialValue });
      }
      function gb(a2, b4) {
        var c = b4.value;
        if (c == null) {
          c = b4.children;
          b4 = b4.defaultValue;
          if (c != null) {
            if (b4 != null)
              throw Error(p3(92));
            if (db(c)) {
              if (1 < c.length)
                throw Error(p3(93));
              c = c[0];
            }
            b4 = c;
          }
          b4 == null && (b4 = "");
          c = b4;
        }
        a2._wrapperState = { initialValue: Ra(c) };
      }
      function hb(a2, b4) {
        var c = Ra(b4.value), d2 = Ra(b4.defaultValue);
        c != null && (c = "" + c, c !== a2.value && (a2.value = c), b4.defaultValue == null && a2.defaultValue !== c && (a2.defaultValue = c));
        d2 != null && (a2.defaultValue = "" + d2);
      }
      function ib(a2) {
        var b4 = a2.textContent;
        b4 === a2._wrapperState.initialValue && b4 !== "" && b4 !== null && (a2.value = b4);
      }
      function jb(a2) {
        switch (a2) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function kb(a2, b4) {
        return a2 == null || a2 === "http://www.w3.org/1999/xhtml" ? jb(b4) : a2 === "http://www.w3.org/2000/svg" && b4 === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a2;
      }
      var lb;
      var mb = function (a2) {
        return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function (b4, c, d2, e7) {
          MSApp.execUnsafeLocalFunction(function () {
            return a2(b4, c, d2, e7);
          });
        } : a2;
      }(function (a2, b4) {
        if (a2.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in a2)
          a2.innerHTML = b4;
        else {
          lb = lb || document.createElement("div");
          lb.innerHTML = "<svg>" + b4.valueOf().toString() + "</svg>";
          for (b4 = lb.firstChild; a2.firstChild;)
            a2.removeChild(a2.firstChild);
          for (; b4.firstChild;)
            a2.appendChild(b4.firstChild);
        }
      });
      function nb(a2, b4) {
        if (b4) {
          var c = a2.firstChild;
          if (c && c === a2.lastChild && c.nodeType === 3) {
            c.nodeValue = b4;
            return;
          }
        }
        a2.textContent = b4;
      }
      var ob = {
        animationIterationCount: true,
        aspectRatio: true,
        borderImageOutset: true,
        borderImageSlice: true,
        borderImageWidth: true,
        boxFlex: true,
        boxFlexGroup: true,
        boxOrdinalGroup: true,
        columnCount: true,
        columns: true,
        flex: true,
        flexGrow: true,
        flexPositive: true,
        flexShrink: true,
        flexNegative: true,
        flexOrder: true,
        gridArea: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowSpan: true,
        gridRowStart: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnSpan: true,
        gridColumnStart: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        tabSize: true,
        widows: true,
        zIndex: true,
        zoom: true,
        fillOpacity: true,
        floodOpacity: true,
        stopOpacity: true,
        strokeDasharray: true,
        strokeDashoffset: true,
        strokeMiterlimit: true,
        strokeOpacity: true,
        strokeWidth: true
      };
      var pb = ["Webkit", "ms", "Moz", "O"];
      Object.keys(ob).forEach(function (a2) {
        pb.forEach(function (b4) {
          b4 = b4 + a2.charAt(0).toUpperCase() + a2.substring(1);
          ob[b4] = ob[a2];
        });
      });
      function qb(a2, b4, c) {
        return b4 == null || typeof b4 === "boolean" || b4 === "" ? "" : c || typeof b4 !== "number" || b4 === 0 || ob.hasOwnProperty(a2) && ob[a2] ? ("" + b4).trim() : b4 + "px";
      }
      function rb(a2, b4) {
        a2 = a2.style;
        for (var c in b4)
          if (b4.hasOwnProperty(c)) {
            var d2 = c.indexOf("--") === 0, e7 = qb(c, b4[c], d2);
            c === "float" && (c = "cssFloat");
            d2 ? a2.setProperty(c, e7) : a2[c] = e7;
          }
      }
      var sb = A2({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
      function tb(a2, b4) {
        if (b4) {
          if (sb[a2] && (b4.children != null || b4.dangerouslySetInnerHTML != null))
            throw Error(p3(137, a2));
          if (b4.dangerouslySetInnerHTML != null) {
            if (b4.children != null)
              throw Error(p3(60));
            if (typeof b4.dangerouslySetInnerHTML !== "object" || !("__html" in b4.dangerouslySetInnerHTML))
              throw Error(p3(61));
          }
          if (b4.style != null && typeof b4.style !== "object")
            throw Error(p3(62));
        }
      }
      function ub(a2, b4) {
        if (a2.indexOf("-") === -1)
          return typeof b4.is === "string";
        switch (a2) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return false;
          default:
            return true;
        }
      }
      var vb = null;
      function wb(a2) {
        a2 = a2.target || a2.srcElement || window;
        a2.correspondingUseElement && (a2 = a2.correspondingUseElement);
        return a2.nodeType === 3 ? a2.parentNode : a2;
      }
      var xb = null;
      var yb = null;
      var zb = null;
      function Ab(a2) {
        if (a2 = Bb(a2)) {
          if (typeof xb !== "function")
            throw Error(p3(280));
          var b4 = a2.stateNode;
          b4 && (b4 = Cb(b4), xb(a2.stateNode, a2.type, b4));
        }
      }
      function Db(a2) {
        yb ? zb ? zb.push(a2) : zb = [a2] : yb = a2;
      }
      function Eb() {
        if (yb) {
          var a2 = yb, b4 = zb;
          zb = yb = null;
          Ab(a2);
          if (b4)
            for (a2 = 0; a2 < b4.length; a2++)
              Ab(b4[a2]);
        }
      }
      function Fb(a2, b4) {
        return a2(b4);
      }
      function Gb() {
      }
      var Hb = false;
      function Ib(a2, b4, c) {
        if (Hb)
          return a2(b4, c);
        Hb = true;
        try {
          return Fb(a2, b4, c);
        } finally {
          if (Hb = false, yb !== null || zb !== null)
            Gb(), Eb();
        }
      }
      function Jb(a2, b4) {
        var c = a2.stateNode;
        if (c === null)
          return null;
        var d2 = Cb(c);
        if (d2 === null)
          return null;
        c = d2[b4];
        a:
        switch (b4) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (d2 = !d2.disabled) || (a2 = a2.type, d2 = !(a2 === "button" || a2 === "input" || a2 === "select" || a2 === "textarea"));
            a2 = !d2;
            break a;
          default:
            a2 = false;
        }
        if (a2)
          return null;
        if (c && typeof c !== "function")
          throw Error(p3(231, b4, typeof c));
        return c;
      }
      var Kb = false;
      if (ia)
        try {
          Lb = {};
          Object.defineProperty(Lb, "passive", {
            get: function () {
              Kb = true;
            }
          });
          window.addEventListener("test", Lb, Lb);
          window.removeEventListener("test", Lb, Lb);
        } catch (a2) {
          Kb = false;
        }
      var Lb;
      function Mb(a2, b4, c, d2, e7, f3, g2, h2, k) {
        var l4 = Array.prototype.slice.call(arguments, 3);
        try {
          b4.apply(c, l4);
        } catch (n2) {
          this.onError(n2);
        }
      }
      var Nb = false;
      var Ob = null;
      var Pb = false;
      var Qb = null;
      var Rb = {
        onError: function (a2) {
          Nb = true;
          Ob = a2;
        }
      };
      function Sb(a2, b4, c, d2, e7, f3, g2, h2, k) {
        Nb = false;
        Ob = null;
        Mb.apply(Rb, arguments);
      }
      function Tb(a2, b4, c, d2, e7, f3, g2, h2, k) {
        Sb.apply(this, arguments);
        if (Nb) {
          if (Nb) {
            var l4 = Ob;
            Nb = false;
            Ob = null;
          } else
            throw Error(p3(198));
          Pb || (Pb = true, Qb = l4);
        }
      }
      function Ub(a2) {
        var b4 = a2, c = a2;
        if (a2.alternate)
          for (; b4.return;)
            b4 = b4.return;
        else {
          a2 = b4;
          do
            b4 = a2, (b4.flags & 4098) !== 0 && (c = b4.return), a2 = b4.return;
          while (a2);
        }
        return b4.tag === 3 ? c : null;
      }
      function Vb(a2) {
        if (a2.tag === 13) {
          var b4 = a2.memoizedState;
          b4 === null && (a2 = a2.alternate, a2 !== null && (b4 = a2.memoizedState));
          if (b4 !== null)
            return b4.dehydrated;
        }
        return null;
      }
      function Wb(a2) {
        if (Ub(a2) !== a2)
          throw Error(p3(188));
      }
      function Xb(a2) {
        var b4 = a2.alternate;
        if (!b4) {
          b4 = Ub(a2);
          if (b4 === null)
            throw Error(p3(188));
          return b4 !== a2 ? null : a2;
        }
        for (var c = a2, d2 = b4; ;) {
          var e7 = c.return;
          if (e7 === null)
            break;
          var f3 = e7.alternate;
          if (f3 === null) {
            d2 = e7.return;
            if (d2 !== null) {
              c = d2;
              continue;
            }
            break;
          }
          if (e7.child === f3.child) {
            for (f3 = e7.child; f3;) {
              if (f3 === c)
                return Wb(e7), a2;
              if (f3 === d2)
                return Wb(e7), b4;
              f3 = f3.sibling;
            }
            throw Error(p3(188));
          }
          if (c.return !== d2.return)
            c = e7, d2 = f3;
          else {
            for (var g2 = false, h2 = e7.child; h2;) {
              if (h2 === c) {
                g2 = true;
                c = e7;
                d2 = f3;
                break;
              }
              if (h2 === d2) {
                g2 = true;
                d2 = e7;
                c = f3;
                break;
              }
              h2 = h2.sibling;
            }
            if (!g2) {
              for (h2 = f3.child; h2;) {
                if (h2 === c) {
                  g2 = true;
                  c = f3;
                  d2 = e7;
                  break;
                }
                if (h2 === d2) {
                  g2 = true;
                  d2 = f3;
                  c = e7;
                  break;
                }
                h2 = h2.sibling;
              }
              if (!g2)
                throw Error(p3(189));
            }
          }
          if (c.alternate !== d2)
            throw Error(p3(190));
        }
        if (c.tag !== 3)
          throw Error(p3(188));
        return c.stateNode.current === c ? a2 : b4;
      }
      function Yb(a2) {
        a2 = Xb(a2);
        return a2 !== null ? Zb(a2) : null;
      }
      function Zb(a2) {
        if (a2.tag === 5 || a2.tag === 6)
          return a2;
        for (a2 = a2.child; a2 !== null;) {
          var b4 = Zb(a2);
          if (b4 !== null)
            return b4;
          a2 = a2.sibling;
        }
        return null;
      }
      var $b = ba.unstable_scheduleCallback;
      var ac = ba.unstable_cancelCallback;
      var bc = ba.unstable_shouldYield;
      var cc = ba.unstable_requestPaint;
      var B2 = ba.unstable_now;
      var dc = ba.unstable_getCurrentPriorityLevel;
      var ec = ba.unstable_ImmediatePriority;
      var fc = ba.unstable_UserBlockingPriority;
      var gc = ba.unstable_NormalPriority;
      var hc = ba.unstable_LowPriority;
      var ic = ba.unstable_IdlePriority;
      var jc = null;
      var kc = null;
      function lc(a2) {
        if (kc && typeof kc.onCommitFiberRoot === "function")
          try {
            kc.onCommitFiberRoot(jc, a2, void 0, (a2.current.flags & 128) === 128);
          } catch (b4) {
          }
      }
      var nc = Math.clz32 ? Math.clz32 : mc;
      var oc = Math.log;
      var pc = Math.LN2;
      function mc(a2) {
        a2 >>>= 0;
        return a2 === 0 ? 32 : 31 - (oc(a2) / pc | 0) | 0;
      }
      var qc = 64;
      var rc = 4194304;
      function sc(a2) {
        switch (a2 & -a2) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return a2 & 4194240;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return a2 & 130023424;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 1073741824;
          default:
            return a2;
        }
      }
      function tc(a2, b4) {
        var c = a2.pendingLanes;
        if (c === 0)
          return 0;
        var d2 = 0, e7 = a2.suspendedLanes, f3 = a2.pingedLanes, g2 = c & 268435455;
        if (g2 !== 0) {
          var h2 = g2 & ~e7;
          h2 !== 0 ? d2 = sc(h2) : (f3 &= g2, f3 !== 0 && (d2 = sc(f3)));
        } else
          g2 = c & ~e7, g2 !== 0 ? d2 = sc(g2) : f3 !== 0 && (d2 = sc(f3));
        if (d2 === 0)
          return 0;
        if (b4 !== 0 && b4 !== d2 && (b4 & e7) === 0 && (e7 = d2 & -d2, f3 = b4 & -b4, e7 >= f3 || e7 === 16 && (f3 & 4194240) !== 0))
          return b4;
        (d2 & 4) !== 0 && (d2 |= c & 16);
        b4 = a2.entangledLanes;
        if (b4 !== 0)
          for (a2 = a2.entanglements, b4 &= d2; 0 < b4;)
            c = 31 - nc(b4), e7 = 1 << c, d2 |= a2[c], b4 &= ~e7;
        return d2;
      }
      function uc(a2, b4) {
        switch (a2) {
          case 1:
          case 2:
          case 4:
            return b4 + 250;
          case 8:
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return b4 + 5e3;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return -1;
          case 134217728:
          case 268435456:
          case 536870912:
          case 1073741824:
            return -1;
          default:
            return -1;
        }
      }
      function vc(a2, b4) {
        for (var c = a2.suspendedLanes, d2 = a2.pingedLanes, e7 = a2.expirationTimes, f3 = a2.pendingLanes; 0 < f3;) {
          var g2 = 31 - nc(f3), h2 = 1 << g2, k = e7[g2];
          if (k === -1) {
            if ((h2 & c) === 0 || (h2 & d2) !== 0)
              e7[g2] = uc(h2, b4);
          } else
            k <= b4 && (a2.expiredLanes |= h2);
          f3 &= ~h2;
        }
      }
      function wc(a2) {
        a2 = a2.pendingLanes & -1073741825;
        return a2 !== 0 ? a2 : a2 & 1073741824 ? 1073741824 : 0;
      }
      function xc() {
        var a2 = qc;
        qc <<= 1;
        (qc & 4194240) === 0 && (qc = 64);
        return a2;
      }
      function yc(a2) {
        for (var b4 = [], c = 0; 31 > c; c++)
          b4.push(a2);
        return b4;
      }
      function zc(a2, b4, c) {
        a2.pendingLanes |= b4;
        b4 !== 536870912 && (a2.suspendedLanes = 0, a2.pingedLanes = 0);
        a2 = a2.eventTimes;
        b4 = 31 - nc(b4);
        a2[b4] = c;
      }
      function Ac(a2, b4) {
        var c = a2.pendingLanes & ~b4;
        a2.pendingLanes = b4;
        a2.suspendedLanes = 0;
        a2.pingedLanes = 0;
        a2.expiredLanes &= b4;
        a2.mutableReadLanes &= b4;
        a2.entangledLanes &= b4;
        b4 = a2.entanglements;
        var d2 = a2.eventTimes;
        for (a2 = a2.expirationTimes; 0 < c;) {
          var e7 = 31 - nc(c), f3 = 1 << e7;
          b4[e7] = 0;
          d2[e7] = -1;
          a2[e7] = -1;
          c &= ~f3;
        }
      }
      function Bc(a2, b4) {
        var c = a2.entangledLanes |= b4;
        for (a2 = a2.entanglements; c;) {
          var d2 = 31 - nc(c), e7 = 1 << d2;
          e7 & b4 | a2[d2] & b4 && (a2[d2] |= b4);
          c &= ~e7;
        }
      }
      var C3 = 0;
      function Cc(a2) {
        a2 &= -a2;
        return 1 < a2 ? 4 < a2 ? (a2 & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
      }
      var Dc;
      var Ec;
      var Fc;
      var Gc;
      var Hc;
      var Ic = false;
      var Jc = [];
      var Kc = null;
      var Lc = null;
      var Mc = null;
      var Nc = new Map();
      var Oc = new Map();
      var Pc = [];
      var Qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
      function Rc(a2, b4) {
        switch (a2) {
          case "focusin":
          case "focusout":
            Kc = null;
            break;
          case "dragenter":
          case "dragleave":
            Lc = null;
            break;
          case "mouseover":
          case "mouseout":
            Mc = null;
            break;
          case "pointerover":
          case "pointerout":
            Nc.delete(b4.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            Oc.delete(b4.pointerId);
        }
      }
      function Sc(a2, b4, c, d2, e7, f3) {
        if (a2 === null || a2.nativeEvent !== f3)
          return a2 = { blockedOn: b4, domEventName: c, eventSystemFlags: d2, nativeEvent: f3, targetContainers: [e7] }, b4 !== null && (b4 = Bb(b4), b4 !== null && Ec(b4)), a2;
        a2.eventSystemFlags |= d2;
        b4 = a2.targetContainers;
        e7 !== null && b4.indexOf(e7) === -1 && b4.push(e7);
        return a2;
      }
      function Tc(a2, b4, c, d2, e7) {
        switch (b4) {
          case "focusin":
            return Kc = Sc(Kc, a2, b4, c, d2, e7), true;
          case "dragenter":
            return Lc = Sc(Lc, a2, b4, c, d2, e7), true;
          case "mouseover":
            return Mc = Sc(Mc, a2, b4, c, d2, e7), true;
          case "pointerover":
            var f3 = e7.pointerId;
            Nc.set(f3, Sc(Nc.get(f3) || null, a2, b4, c, d2, e7));
            return true;
          case "gotpointercapture":
            return f3 = e7.pointerId, Oc.set(f3, Sc(Oc.get(f3) || null, a2, b4, c, d2, e7)), true;
        }
        return false;
      }
      function Uc(a2) {
        var b4 = Vc(a2.target);
        if (b4 !== null) {
          var c = Ub(b4);
          if (c !== null) {
            if (b4 = c.tag, b4 === 13) {
              if (b4 = Vb(c), b4 !== null) {
                a2.blockedOn = b4;
                Hc(a2.priority, function () {
                  Fc(c);
                });
                return;
              }
            } else if (b4 === 3 && c.stateNode.current.memoizedState.isDehydrated) {
              a2.blockedOn = c.tag === 3 ? c.stateNode.containerInfo : null;
              return;
            }
          }
        }
        a2.blockedOn = null;
      }
      function Wc(a2) {
        if (a2.blockedOn !== null)
          return false;
        for (var b4 = a2.targetContainers; 0 < b4.length;) {
          var c = Xc(a2.domEventName, a2.eventSystemFlags, b4[0], a2.nativeEvent);
          if (c === null) {
            c = a2.nativeEvent;
            var d2 = new c.constructor(c.type, c);
            vb = d2;
            c.target.dispatchEvent(d2);
            vb = null;
          } else
            return b4 = Bb(c), b4 !== null && Ec(b4), a2.blockedOn = c, false;
          b4.shift();
        }
        return true;
      }
      function Yc(a2, b4, c) {
        Wc(a2) && c.delete(b4);
      }
      function Zc() {
        Ic = false;
        Kc !== null && Wc(Kc) && (Kc = null);
        Lc !== null && Wc(Lc) && (Lc = null);
        Mc !== null && Wc(Mc) && (Mc = null);
        Nc.forEach(Yc);
        Oc.forEach(Yc);
      }
      function $c(a2, b4) {
        a2.blockedOn === b4 && (a2.blockedOn = null, Ic || (Ic = true, ba.unstable_scheduleCallback(ba.unstable_NormalPriority, Zc)));
      }
      function ad(a2) {
        function b4(b5) {
          return $c(b5, a2);
        }
        if (0 < Jc.length) {
          $c(Jc[0], a2);
          for (var c = 1; c < Jc.length; c++) {
            var d2 = Jc[c];
            d2.blockedOn === a2 && (d2.blockedOn = null);
          }
        }
        Kc !== null && $c(Kc, a2);
        Lc !== null && $c(Lc, a2);
        Mc !== null && $c(Mc, a2);
        Nc.forEach(b4);
        Oc.forEach(b4);
        for (c = 0; c < Pc.length; c++)
          d2 = Pc[c], d2.blockedOn === a2 && (d2.blockedOn = null);
        for (; 0 < Pc.length && (c = Pc[0], c.blockedOn === null);)
          Uc(c), c.blockedOn === null && Pc.shift();
      }
      var bd = ta.ReactCurrentBatchConfig;
      var cd = true;
      function dd(a2, b4, c, d2) {
        var e7 = C3, f3 = bd.transition;
        bd.transition = null;
        try {
          C3 = 1, ed(a2, b4, c, d2);
        } finally {
          C3 = e7, bd.transition = f3;
        }
      }
      function fd(a2, b4, c, d2) {
        var e7 = C3, f3 = bd.transition;
        bd.transition = null;
        try {
          C3 = 4, ed(a2, b4, c, d2);
        } finally {
          C3 = e7, bd.transition = f3;
        }
      }
      function ed(a2, b4, c, d2) {
        if (cd) {
          var e7 = Xc(a2, b4, c, d2);
          if (e7 === null)
            gd(a2, b4, d2, hd, c), Rc(a2, d2);
          else if (Tc(e7, a2, b4, c, d2))
            d2.stopPropagation();
          else if (Rc(a2, d2), b4 & 4 && -1 < Qc.indexOf(a2)) {
            for (; e7 !== null;) {
              var f3 = Bb(e7);
              f3 !== null && Dc(f3);
              f3 = Xc(a2, b4, c, d2);
              f3 === null && gd(a2, b4, d2, hd, c);
              if (f3 === e7)
                break;
              e7 = f3;
            }
            e7 !== null && d2.stopPropagation();
          } else
            gd(a2, b4, d2, null, c);
        }
      }
      var hd = null;
      function Xc(a2, b4, c, d2) {
        hd = null;
        a2 = wb(d2);
        a2 = Vc(a2);
        if (a2 !== null)
          if (b4 = Ub(a2), b4 === null)
            a2 = null;
          else if (c = b4.tag, c === 13) {
            a2 = Vb(b4);
            if (a2 !== null)
              return a2;
            a2 = null;
          } else if (c === 3) {
            if (b4.stateNode.current.memoizedState.isDehydrated)
              return b4.tag === 3 ? b4.stateNode.containerInfo : null;
            a2 = null;
          } else
            b4 !== a2 && (a2 = null);
        hd = a2;
        return null;
      }
      function id(a2) {
        switch (a2) {
          case "cancel":
          case "click":
          case "close":
          case "contextmenu":
          case "copy":
          case "cut":
          case "auxclick":
          case "dblclick":
          case "dragend":
          case "dragstart":
          case "drop":
          case "focusin":
          case "focusout":
          case "input":
          case "invalid":
          case "keydown":
          case "keypress":
          case "keyup":
          case "mousedown":
          case "mouseup":
          case "paste":
          case "pause":
          case "play":
          case "pointercancel":
          case "pointerdown":
          case "pointerup":
          case "ratechange":
          case "reset":
          case "resize":
          case "seeked":
          case "submit":
          case "touchcancel":
          case "touchend":
          case "touchstart":
          case "volumechange":
          case "change":
          case "selectionchange":
          case "textInput":
          case "compositionstart":
          case "compositionend":
          case "compositionupdate":
          case "beforeblur":
          case "afterblur":
          case "beforeinput":
          case "blur":
          case "fullscreenchange":
          case "focus":
          case "hashchange":
          case "popstate":
          case "select":
          case "selectstart":
            return 1;
          case "drag":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "mousemove":
          case "mouseout":
          case "mouseover":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "scroll":
          case "toggle":
          case "touchmove":
          case "wheel":
          case "mouseenter":
          case "mouseleave":
          case "pointerenter":
          case "pointerleave":
            return 4;
          case "message":
            switch (dc()) {
              case ec:
                return 1;
              case fc:
                return 4;
              case gc:
              case hc:
                return 16;
              case ic:
                return 536870912;
              default:
                return 16;
            }
          default:
            return 16;
        }
      }
      var jd = null;
      var kd = null;
      var ld = null;
      function md() {
        if (ld)
          return ld;
        var a2, b4 = kd, c = b4.length, d2, e7 = "value" in jd ? jd.value : jd.textContent, f3 = e7.length;
        for (a2 = 0; a2 < c && b4[a2] === e7[a2]; a2++)
          ;
        var g2 = c - a2;
        for (d2 = 1; d2 <= g2 && b4[c - d2] === e7[f3 - d2]; d2++)
          ;
        return ld = e7.slice(a2, 1 < d2 ? 1 - d2 : void 0);
      }
      function nd(a2) {
        var b4 = a2.keyCode;
        "charCode" in a2 ? (a2 = a2.charCode, a2 === 0 && b4 === 13 && (a2 = 13)) : a2 = b4;
        a2 === 10 && (a2 = 13);
        return 32 <= a2 || a2 === 13 ? a2 : 0;
      }
      function od() {
        return true;
      }
      function pd() {
        return false;
      }
      function qd(a2) {
        function b4(b5, d2, e7, f3, g2) {
          this._reactName = b5;
          this._targetInst = e7;
          this.type = d2;
          this.nativeEvent = f3;
          this.target = g2;
          this.currentTarget = null;
          for (var c in a2)
            a2.hasOwnProperty(c) && (b5 = a2[c], this[c] = b5 ? b5(f3) : f3[c]);
          this.isDefaultPrevented = (f3.defaultPrevented != null ? f3.defaultPrevented : f3.returnValue === false) ? od : pd;
          this.isPropagationStopped = pd;
          return this;
        }
        A2(b4.prototype, {
          preventDefault: function () {
            this.defaultPrevented = true;
            var a3 = this.nativeEvent;
            a3 && (a3.preventDefault ? a3.preventDefault() : typeof a3.returnValue !== "unknown" && (a3.returnValue = false), this.isDefaultPrevented = od);
          }, stopPropagation: function () {
            var a3 = this.nativeEvent;
            a3 && (a3.stopPropagation ? a3.stopPropagation() : typeof a3.cancelBubble !== "unknown" && (a3.cancelBubble = true), this.isPropagationStopped = od);
          }, persist: function () {
          }, isPersistent: od
        });
        return b4;
      }
      var rd = {
        eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (a2) {
          return a2.timeStamp || Date.now();
        }, defaultPrevented: 0, isTrusted: 0
      };
      var sd = qd(rd);
      var td = A2({}, rd, { view: 0, detail: 0 });
      var ud = qd(td);
      var vd;
      var wd;
      var xd;
      var zd = A2({}, td, {
        screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: yd, button: 0, buttons: 0, relatedTarget: function (a2) {
          return a2.relatedTarget === void 0 ? a2.fromElement === a2.srcElement ? a2.toElement : a2.fromElement : a2.relatedTarget;
        }, movementX: function (a2) {
          if ("movementX" in a2)
            return a2.movementX;
          a2 !== xd && (xd && a2.type === "mousemove" ? (vd = a2.screenX - xd.screenX, wd = a2.screenY - xd.screenY) : wd = vd = 0, xd = a2);
          return vd;
        }, movementY: function (a2) {
          return "movementY" in a2 ? a2.movementY : wd;
        }
      });
      var Ad = qd(zd);
      var Bd = A2({}, zd, { dataTransfer: 0 });
      var Cd = qd(Bd);
      var Dd = A2({}, td, { relatedTarget: 0 });
      var Ed = qd(Dd);
      var Fd = A2({}, rd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Gd = qd(Fd);
      var Hd = A2({}, rd, {
        clipboardData: function (a2) {
          return "clipboardData" in a2 ? a2.clipboardData : window.clipboardData;
        }
      });
      var Id = qd(Hd);
      var Jd = A2({}, rd, { data: 0 });
      var Kd = qd(Jd);
      var Ld = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
      };
      var Md = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
      };
      var Nd = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
      function Od(a2) {
        var b4 = this.nativeEvent;
        return b4.getModifierState ? b4.getModifierState(a2) : (a2 = Nd[a2]) ? !!b4[a2] : false;
      }
      function yd() {
        return Od;
      }
      var Pd = A2({}, td, {
        key: function (a2) {
          if (a2.key) {
            var b4 = Ld[a2.key] || a2.key;
            if (b4 !== "Unidentified")
              return b4;
          }
          return a2.type === "keypress" ? (a2 = nd(a2), a2 === 13 ? "Enter" : String.fromCharCode(a2)) : a2.type === "keydown" || a2.type === "keyup" ? Md[a2.keyCode] || "Unidentified" : "";
        }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: yd, charCode: function (a2) {
          return a2.type === "keypress" ? nd(a2) : 0;
        }, keyCode: function (a2) {
          return a2.type === "keydown" || a2.type === "keyup" ? a2.keyCode : 0;
        }, which: function (a2) {
          return a2.type === "keypress" ? nd(a2) : a2.type === "keydown" || a2.type === "keyup" ? a2.keyCode : 0;
        }
      });
      var Qd = qd(Pd);
      var Rd = A2({}, zd, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
      var Sd = qd(Rd);
      var Td = A2({}, td, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: yd });
      var Ud = qd(Td);
      var Vd = A2({}, rd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Wd = qd(Vd);
      var Xd = A2({}, zd, {
        deltaX: function (a2) {
          return "deltaX" in a2 ? a2.deltaX : "wheelDeltaX" in a2 ? -a2.wheelDeltaX : 0;
        },
        deltaY: function (a2) {
          return "deltaY" in a2 ? a2.deltaY : "wheelDeltaY" in a2 ? -a2.wheelDeltaY : "wheelDelta" in a2 ? -a2.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
      });
      var Yd = qd(Xd);
      var Zd = [9, 13, 27, 32];
      var $d = ia && "CompositionEvent" in window;
      var ae2 = null;
      ia && "documentMode" in document && (ae2 = document.documentMode);
      var be = ia && "TextEvent" in window && !ae2;
      var ce2 = ia && (!$d || ae2 && 8 < ae2 && 11 >= ae2);
      var de2 = String.fromCharCode(32);
      var ee2 = false;
      function fe(a2, b4) {
        switch (a2) {
          case "keyup":
            return Zd.indexOf(b4.keyCode) !== -1;
          case "keydown":
            return b4.keyCode !== 229;
          case "keypress":
          case "mousedown":
          case "focusout":
            return true;
          default:
            return false;
        }
      }
      function ge2(a2) {
        a2 = a2.detail;
        return typeof a2 === "object" && "data" in a2 ? a2.data : null;
      }
      var he2 = false;
      function ie2(a2, b4) {
        switch (a2) {
          case "compositionend":
            return ge2(b4);
          case "keypress":
            if (b4.which !== 32)
              return null;
            ee2 = true;
            return de2;
          case "textInput":
            return a2 = b4.data, a2 === de2 && ee2 ? null : a2;
          default:
            return null;
        }
      }
      function je(a2, b4) {
        if (he2)
          return a2 === "compositionend" || !$d && fe(a2, b4) ? (a2 = md(), ld = kd = jd = null, he2 = false, a2) : null;
        switch (a2) {
          case "paste":
            return null;
          case "keypress":
            if (!(b4.ctrlKey || b4.altKey || b4.metaKey) || b4.ctrlKey && b4.altKey) {
              if (b4.char && 1 < b4.char.length)
                return b4.char;
              if (b4.which)
                return String.fromCharCode(b4.which);
            }
            return null;
          case "compositionend":
            return ce2 && b4.locale !== "ko" ? null : b4.data;
          default:
            return null;
        }
      }
      var ke = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
      function le(a2) {
        var b4 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
        return b4 === "input" ? !!ke[a2.type] : b4 === "textarea" ? true : false;
      }
      function me2(a2, b4, c, d2) {
        Db(d2);
        b4 = ne(b4, "onChange");
        0 < b4.length && (c = new sd("onChange", "change", null, c, d2), a2.push({ event: c, listeners: b4 }));
      }
      var oe = null;
      var pe2 = null;
      function qe(a2) {
        re(a2, 0);
      }
      function se2(a2) {
        var b4 = te(a2);
        if (Va(b4))
          return a2;
      }
      function ue2(a2, b4) {
        if (a2 === "change")
          return b4;
      }
      var ve = false;
      if (ia) {
        if (ia) {
          xe2 = "oninput" in document;
          if (!xe2) {
            ye = document.createElement("div");
            ye.setAttribute("oninput", "return;");
            xe2 = typeof ye.oninput === "function";
          }
          we = xe2;
        } else
          we = false;
        ve = we && (!document.documentMode || 9 < document.documentMode);
      }
      var we;
      var xe2;
      var ye;
      function ze() {
        oe && (oe.detachEvent("onpropertychange", Ae), pe2 = oe = null);
      }
      function Ae(a2) {
        if (a2.propertyName === "value" && se2(pe2)) {
          var b4 = [];
          me2(b4, pe2, a2, wb(a2));
          Ib(qe, b4);
        }
      }
      function Be(a2, b4, c) {
        a2 === "focusin" ? (ze(), oe = b4, pe2 = c, oe.attachEvent("onpropertychange", Ae)) : a2 === "focusout" && ze();
      }
      function Ce(a2) {
        if (a2 === "selectionchange" || a2 === "keyup" || a2 === "keydown")
          return se2(pe2);
      }
      function De(a2, b4) {
        if (a2 === "click")
          return se2(b4);
      }
      function Ee(a2, b4) {
        if (a2 === "input" || a2 === "change")
          return se2(b4);
      }
      function Fe(a2, b4) {
        return a2 === b4 && (a2 !== 0 || 1 / a2 === 1 / b4) || a2 !== a2 && b4 !== b4;
      }
      var Ge = typeof Object.is === "function" ? Object.is : Fe;
      function He(a2, b4) {
        if (Ge(a2, b4))
          return true;
        if (typeof a2 !== "object" || a2 === null || typeof b4 !== "object" || b4 === null)
          return false;
        var c = Object.keys(a2), d2 = Object.keys(b4);
        if (c.length !== d2.length)
          return false;
        for (d2 = 0; d2 < c.length; d2++) {
          var e7 = c[d2];
          if (!ja.call(b4, e7) || !Ge(a2[e7], b4[e7]))
            return false;
        }
        return true;
      }
      function Ie(a2) {
        for (; a2 && a2.firstChild;)
          a2 = a2.firstChild;
        return a2;
      }
      function Je(a2, b4) {
        var c = Ie(a2);
        a2 = 0;
        for (var d2; c;) {
          if (c.nodeType === 3) {
            d2 = a2 + c.textContent.length;
            if (a2 <= b4 && d2 >= b4)
              return { node: c, offset: b4 - a2 };
            a2 = d2;
          }
          a: {
            for (; c;) {
              if (c.nextSibling) {
                c = c.nextSibling;
                break a;
              }
              c = c.parentNode;
            }
            c = void 0;
          }
          c = Ie(c);
        }
      }
      function Ke(a2, b4) {
        return a2 && b4 ? a2 === b4 ? true : a2 && a2.nodeType === 3 ? false : b4 && b4.nodeType === 3 ? Ke(a2, b4.parentNode) : "contains" in a2 ? a2.contains(b4) : a2.compareDocumentPosition ? !!(a2.compareDocumentPosition(b4) & 16) : false : false;
      }
      function Le() {
        for (var a2 = window, b4 = Wa(); b4 instanceof a2.HTMLIFrameElement;) {
          try {
            var c = typeof b4.contentWindow.location.href === "string";
          } catch (d2) {
            c = false;
          }
          if (c)
            a2 = b4.contentWindow;
          else
            break;
          b4 = Wa(a2.document);
        }
        return b4;
      }
      function Me(a2) {
        var b4 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
        return b4 && (b4 === "input" && (a2.type === "text" || a2.type === "search" || a2.type === "tel" || a2.type === "url" || a2.type === "password") || b4 === "textarea" || a2.contentEditable === "true");
      }
      function Ne(a2) {
        var b4 = Le(), c = a2.focusedElem, d2 = a2.selectionRange;
        if (b4 !== c && c && c.ownerDocument && Ke(c.ownerDocument.documentElement, c)) {
          if (d2 !== null && Me(c)) {
            if (b4 = d2.start, a2 = d2.end, a2 === void 0 && (a2 = b4), "selectionStart" in c)
              c.selectionStart = b4, c.selectionEnd = Math.min(a2, c.value.length);
            else if (a2 = (b4 = c.ownerDocument || document) && b4.defaultView || window, a2.getSelection) {
              a2 = a2.getSelection();
              var e7 = c.textContent.length, f3 = Math.min(d2.start, e7);
              d2 = d2.end === void 0 ? f3 : Math.min(d2.end, e7);
              !a2.extend && f3 > d2 && (e7 = d2, d2 = f3, f3 = e7);
              e7 = Je(c, f3);
              var g2 = Je(c, d2);
              e7 && g2 && (a2.rangeCount !== 1 || a2.anchorNode !== e7.node || a2.anchorOffset !== e7.offset || a2.focusNode !== g2.node || a2.focusOffset !== g2.offset) && (b4 = b4.createRange(), b4.setStart(e7.node, e7.offset), a2.removeAllRanges(), f3 > d2 ? (a2.addRange(b4), a2.extend(g2.node, g2.offset)) : (b4.setEnd(g2.node, g2.offset), a2.addRange(b4)));
            }
          }
          b4 = [];
          for (a2 = c; a2 = a2.parentNode;)
            a2.nodeType === 1 && b4.push({ element: a2, left: a2.scrollLeft, top: a2.scrollTop });
          typeof c.focus === "function" && c.focus();
          for (c = 0; c < b4.length; c++)
            a2 = b4[c], a2.element.scrollLeft = a2.left, a2.element.scrollTop = a2.top;
        }
      }
      var Oe = ia && "documentMode" in document && 11 >= document.documentMode;
      var Pe = null;
      var Qe = null;
      var Re = null;
      var Se = false;
      function Te(a2, b4, c) {
        var d2 = c.window === c ? c.document : c.nodeType === 9 ? c : c.ownerDocument;
        Se || Pe == null || Pe !== Wa(d2) || (d2 = Pe, "selectionStart" in d2 && Me(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Re && He(Re, d2) || (Re = d2, d2 = ne(Qe, "onSelect"), 0 < d2.length && (b4 = new sd("onSelect", "select", null, b4, c), a2.push({ event: b4, listeners: d2 }), b4.target = Pe)));
      }
      function Ue(a2, b4) {
        var c = {};
        c[a2.toLowerCase()] = b4.toLowerCase();
        c["Webkit" + a2] = "webkit" + b4;
        c["Moz" + a2] = "moz" + b4;
        return c;
      }
      var Ve = { animationend: Ue("Animation", "AnimationEnd"), animationiteration: Ue("Animation", "AnimationIteration"), animationstart: Ue("Animation", "AnimationStart"), transitionend: Ue("Transition", "TransitionEnd") };
      var We = {};
      var Xe = {};
      ia && (Xe = document.createElement("div").style, "AnimationEvent" in window || (delete Ve.animationend.animation, delete Ve.animationiteration.animation, delete Ve.animationstart.animation), "TransitionEvent" in window || delete Ve.transitionend.transition);
      function Ye(a2) {
        if (We[a2])
          return We[a2];
        if (!Ve[a2])
          return a2;
        var b4 = Ve[a2], c;
        for (c in b4)
          if (b4.hasOwnProperty(c) && c in Xe)
            return We[a2] = b4[c];
        return a2;
      }
      var Ze = Ye("animationend");
      var $e = Ye("animationiteration");
      var af = Ye("animationstart");
      var bf = Ye("transitionend");
      var cf = new Map();
      var df = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
      function ef(a2, b4) {
        cf.set(a2, b4);
        fa(b4, [a2]);
      }
      for (ff = 0; ff < df.length; ff++) {
        gf = df[ff], hf = gf.toLowerCase(), jf = gf[0].toUpperCase() + gf.slice(1);
        ef(hf, "on" + jf);
      }
      var gf;
      var hf;
      var jf;
      var ff;
      ef(Ze, "onAnimationEnd");
      ef($e, "onAnimationIteration");
      ef(af, "onAnimationStart");
      ef("dblclick", "onDoubleClick");
      ef("focusin", "onFocus");
      ef("focusout", "onBlur");
      ef(bf, "onTransitionEnd");
      ha("onMouseEnter", ["mouseout", "mouseover"]);
      ha("onMouseLeave", ["mouseout", "mouseover"]);
      ha("onPointerEnter", ["pointerout", "pointerover"]);
      ha("onPointerLeave", ["pointerout", "pointerover"]);
      fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
      fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
      fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
      fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
      fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
      fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
      var kf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
      var lf = new Set("cancel close invalid load scroll toggle".split(" ").concat(kf));
      function mf(a2, b4, c) {
        var d2 = a2.type || "unknown-event";
        a2.currentTarget = c;
        Tb(d2, b4, void 0, a2);
        a2.currentTarget = null;
      }
      function re(a2, b4) {
        b4 = (b4 & 4) !== 0;
        for (var c = 0; c < a2.length; c++) {
          var d2 = a2[c], e7 = d2.event;
          d2 = d2.listeners;
          a: {
            var f3 = void 0;
            if (b4)
              for (var g2 = d2.length - 1; 0 <= g2; g2--) {
                var h2 = d2[g2], k = h2.instance, l4 = h2.currentTarget;
                h2 = h2.listener;
                if (k !== f3 && e7.isPropagationStopped())
                  break a;
                mf(e7, h2, l4);
                f3 = k;
              }
            else
              for (g2 = 0; g2 < d2.length; g2++) {
                h2 = d2[g2];
                k = h2.instance;
                l4 = h2.currentTarget;
                h2 = h2.listener;
                if (k !== f3 && e7.isPropagationStopped())
                  break a;
                mf(e7, h2, l4);
                f3 = k;
              }
          }
        }
        if (Pb)
          throw a2 = Qb, Pb = false, Qb = null, a2;
      }
      function D2(a2, b4) {
        var c = b4[nf];
        c === void 0 && (c = b4[nf] = new Set());
        var d2 = a2 + "__bubble";
        c.has(d2) || (of(b4, a2, 2, false), c.add(d2));
      }
      function pf(a2, b4, c) {
        var d2 = 0;
        b4 && (d2 |= 4);
        of(c, a2, d2, b4);
      }
      var qf = "_reactListening" + Math.random().toString(36).slice(2);
      function rf(a2) {
        if (!a2[qf]) {
          a2[qf] = true;
          da.forEach(function (b5) {
            b5 !== "selectionchange" && (lf.has(b5) || pf(b5, false, a2), pf(b5, true, a2));
          });
          var b4 = a2.nodeType === 9 ? a2 : a2.ownerDocument;
          b4 === null || b4[qf] || (b4[qf] = true, pf("selectionchange", false, b4));
        }
      }
      function of(a2, b4, c, d2) {
        switch (id(b4)) {
          case 1:
            var e7 = dd;
            break;
          case 4:
            e7 = fd;
            break;
          default:
            e7 = ed;
        }
        c = e7.bind(null, b4, c, a2);
        e7 = void 0;
        !Kb || b4 !== "touchstart" && b4 !== "touchmove" && b4 !== "wheel" || (e7 = true);
        d2 ? e7 !== void 0 ? a2.addEventListener(b4, c, { capture: true, passive: e7 }) : a2.addEventListener(b4, c, true) : e7 !== void 0 ? a2.addEventListener(b4, c, { passive: e7 }) : a2.addEventListener(b4, c, false);
      }
      function gd(a2, b4, c, d2, e7) {
        var f3 = d2;
        if ((b4 & 1) === 0 && (b4 & 2) === 0 && d2 !== null)
          a:
          for (; ;) {
            if (d2 === null)
              return;
            var g2 = d2.tag;
            if (g2 === 3 || g2 === 4) {
              var h2 = d2.stateNode.containerInfo;
              if (h2 === e7 || h2.nodeType === 8 && h2.parentNode === e7)
                break;
              if (g2 === 4)
                for (g2 = d2.return; g2 !== null;) {
                  var k = g2.tag;
                  if (k === 3 || k === 4) {
                    if (k = g2.stateNode.containerInfo, k === e7 || k.nodeType === 8 && k.parentNode === e7)
                      return;
                  }
                  g2 = g2.return;
                }
              for (; h2 !== null;) {
                g2 = Vc(h2);
                if (g2 === null)
                  return;
                k = g2.tag;
                if (k === 5 || k === 6) {
                  d2 = f3 = g2;
                  continue a;
                }
                h2 = h2.parentNode;
              }
            }
            d2 = d2.return;
          }
        Ib(function () {
          var d3 = f3, e8 = wb(c), g3 = [];
          a: {
            var h3 = cf.get(a2);
            if (h3 !== void 0) {
              var k2 = sd, m3 = a2;
              switch (a2) {
                case "keypress":
                  if (nd(c) === 0)
                    break a;
                case "keydown":
                case "keyup":
                  k2 = Qd;
                  break;
                case "focusin":
                  m3 = "focus";
                  k2 = Ed;
                  break;
                case "focusout":
                  m3 = "blur";
                  k2 = Ed;
                  break;
                case "beforeblur":
                case "afterblur":
                  k2 = Ed;
                  break;
                case "click":
                  if (c.button === 2)
                    break a;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  k2 = Ad;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  k2 = Cd;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  k2 = Ud;
                  break;
                case Ze:
                case $e:
                case af:
                  k2 = Gd;
                  break;
                case bf:
                  k2 = Wd;
                  break;
                case "scroll":
                  k2 = ud;
                  break;
                case "wheel":
                  k2 = Yd;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  k2 = Id;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  k2 = Sd;
              }
              var w2 = (b4 & 4) !== 0, J = !w2 && a2 === "scroll", v2 = w2 ? h3 !== null ? h3 + "Capture" : null : h3;
              w2 = [];
              for (var x2 = d3, r4; x2 !== null;) {
                r4 = x2;
                var F = r4.stateNode;
                r4.tag === 5 && F !== null && (r4 = F, v2 !== null && (F = Jb(x2, v2), F != null && w2.push(sf(x2, F, r4))));
                if (J)
                  break;
                x2 = x2.return;
              }
              0 < w2.length && (h3 = new k2(h3, m3, null, c, e8), g3.push({ event: h3, listeners: w2 }));
            }
          }
          if ((b4 & 7) === 0) {
            a: {
              h3 = a2 === "mouseover" || a2 === "pointerover";
              k2 = a2 === "mouseout" || a2 === "pointerout";
              if (h3 && c !== vb && (m3 = c.relatedTarget || c.fromElement) && (Vc(m3) || m3[tf]))
                break a;
              if (k2 || h3) {
                h3 = e8.window === e8 ? e8 : (h3 = e8.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
                if (k2) {
                  if (m3 = c.relatedTarget || c.toElement, k2 = d3, m3 = m3 ? Vc(m3) : null, m3 !== null && (J = Ub(m3), m3 !== J || m3.tag !== 5 && m3.tag !== 6))
                    m3 = null;
                } else
                  k2 = null, m3 = d3;
                if (k2 !== m3) {
                  w2 = Ad;
                  F = "onMouseLeave";
                  v2 = "onMouseEnter";
                  x2 = "mouse";
                  if (a2 === "pointerout" || a2 === "pointerover")
                    w2 = Sd, F = "onPointerLeave", v2 = "onPointerEnter", x2 = "pointer";
                  J = k2 == null ? h3 : te(k2);
                  r4 = m3 == null ? h3 : te(m3);
                  h3 = new w2(F, x2 + "leave", k2, c, e8);
                  h3.target = J;
                  h3.relatedTarget = r4;
                  F = null;
                  Vc(e8) === d3 && (w2 = new w2(v2, x2 + "enter", m3, c, e8), w2.target = r4, w2.relatedTarget = J, F = w2);
                  J = F;
                  if (k2 && m3)
                    b: {
                      w2 = k2;
                      v2 = m3;
                      x2 = 0;
                      for (r4 = w2; r4; r4 = uf(r4))
                        x2++;
                      r4 = 0;
                      for (F = v2; F; F = uf(F))
                        r4++;
                      for (; 0 < x2 - r4;)
                        w2 = uf(w2), x2--;
                      for (; 0 < r4 - x2;)
                        v2 = uf(v2), r4--;
                      for (; x2--;) {
                        if (w2 === v2 || v2 !== null && w2 === v2.alternate)
                          break b;
                        w2 = uf(w2);
                        v2 = uf(v2);
                      }
                      w2 = null;
                    }
                  else
                    w2 = null;
                  k2 !== null && vf(g3, h3, k2, w2, false);
                  m3 !== null && J !== null && vf(g3, J, m3, w2, true);
                }
              }
            }
            a: {
              h3 = d3 ? te(d3) : window;
              k2 = h3.nodeName && h3.nodeName.toLowerCase();
              if (k2 === "select" || k2 === "input" && h3.type === "file")
                var Z = ue2;
              else if (le(h3))
                if (ve)
                  Z = Ee;
                else {
                  Z = Ce;
                  var ya = Be;
                }
              else
                (k2 = h3.nodeName) && k2.toLowerCase() === "input" && (h3.type === "checkbox" || h3.type === "radio") && (Z = De);
              if (Z && (Z = Z(a2, d3))) {
                me2(g3, Z, c, e8);
                break a;
              }
              ya && ya(a2, h3, d3);
              a2 === "focusout" && (ya = h3._wrapperState) && ya.controlled && h3.type === "number" && bb(h3, "number", h3.value);
            }
            ya = d3 ? te(d3) : window;
            switch (a2) {
              case "focusin":
                if (le(ya) || ya.contentEditable === "true")
                  Pe = ya, Qe = d3, Re = null;
                break;
              case "focusout":
                Re = Qe = Pe = null;
                break;
              case "mousedown":
                Se = true;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                Se = false;
                Te(g3, c, e8);
                break;
              case "selectionchange":
                if (Oe)
                  break;
              case "keydown":
              case "keyup":
                Te(g3, c, e8);
            }
            var ab;
            if ($d)
              b: {
                switch (a2) {
                  case "compositionstart":
                    var ca = "onCompositionStart";
                    break b;
                  case "compositionend":
                    ca = "onCompositionEnd";
                    break b;
                  case "compositionupdate":
                    ca = "onCompositionUpdate";
                    break b;
                }
                ca = void 0;
              }
            else
              he2 ? fe(a2, c) && (ca = "onCompositionEnd") : a2 === "keydown" && c.keyCode === 229 && (ca = "onCompositionStart");
            ca && (ce2 && c.locale !== "ko" && (he2 || ca !== "onCompositionStart" ? ca === "onCompositionEnd" && he2 && (ab = md()) : (jd = e8, kd = "value" in jd ? jd.value : jd.textContent, he2 = true)), ya = ne(d3, ca), 0 < ya.length && (ca = new Kd(ca, a2, null, c, e8), g3.push({ event: ca, listeners: ya }), ab ? ca.data = ab : (ab = ge2(c), ab !== null && (ca.data = ab))));
            if (ab = be ? ie2(a2, c) : je(a2, c))
              d3 = ne(d3, "onBeforeInput"), 0 < d3.length && (e8 = new Kd("onBeforeInput", "beforeinput", null, c, e8), g3.push({ event: e8, listeners: d3 }), e8.data = ab);
          }
          re(g3, b4);
        });
      }
      function sf(a2, b4, c) {
        return { instance: a2, listener: b4, currentTarget: c };
      }
      function ne(a2, b4) {
        for (var c = b4 + "Capture", d2 = []; a2 !== null;) {
          var e7 = a2, f3 = e7.stateNode;
          e7.tag === 5 && f3 !== null && (e7 = f3, f3 = Jb(a2, c), f3 != null && d2.unshift(sf(a2, f3, e7)), f3 = Jb(a2, b4), f3 != null && d2.push(sf(a2, f3, e7)));
          a2 = a2.return;
        }
        return d2;
      }
      function uf(a2) {
        if (a2 === null)
          return null;
        do
          a2 = a2.return;
        while (a2 && a2.tag !== 5);
        return a2 ? a2 : null;
      }
      function vf(a2, b4, c, d2, e7) {
        for (var f3 = b4._reactName, g2 = []; c !== null && c !== d2;) {
          var h2 = c, k = h2.alternate, l4 = h2.stateNode;
          if (k !== null && k === d2)
            break;
          h2.tag === 5 && l4 !== null && (h2 = l4, e7 ? (k = Jb(c, f3), k != null && g2.unshift(sf(c, k, h2))) : e7 || (k = Jb(c, f3), k != null && g2.push(sf(c, k, h2))));
          c = c.return;
        }
        g2.length !== 0 && a2.push({ event: b4, listeners: g2 });
      }
      var wf = /\r\n?/g;
      var xf = /\u0000|\uFFFD/g;
      function yf(a2) {
        return (typeof a2 === "string" ? a2 : "" + a2).replace(wf, "\n").replace(xf, "");
      }
      function zf(a2, b4, c) {
        b4 = yf(b4);
        if (yf(a2) !== b4 && c)
          throw Error(p3(425));
      }
      function Af() {
      }
      var Bf = null;
      var Cf = null;
      function Df(a2, b4) {
        return a2 === "textarea" || a2 === "noscript" || typeof b4.children === "string" || typeof b4.children === "number" || typeof b4.dangerouslySetInnerHTML === "object" && b4.dangerouslySetInnerHTML !== null && b4.dangerouslySetInnerHTML.__html != null;
      }
      var Ef = typeof setTimeout === "function" ? setTimeout : void 0;
      var Ff = typeof clearTimeout === "function" ? clearTimeout : void 0;
      var Gf = typeof Promise === "function" ? Promise : void 0;
      var If = typeof queueMicrotask === "function" ? queueMicrotask : typeof Gf !== "undefined" ? function (a2) {
        return Gf.resolve(null).then(a2).catch(Hf);
      } : Ef;
      function Hf(a2) {
        setTimeout(function () {
          throw a2;
        });
      }
      function Jf(a2, b4) {
        var c = b4, d2 = 0;
        do {
          var e7 = c.nextSibling;
          a2.removeChild(c);
          if (e7 && e7.nodeType === 8)
            if (c = e7.data, c === "/$") {
              if (d2 === 0) {
                a2.removeChild(e7);
                ad(b4);
                return;
              }
              d2--;
            } else
              c !== "$" && c !== "$?" && c !== "$!" || d2++;
          c = e7;
        } while (c);
        ad(b4);
      }
      function Kf(a2) {
        for (; a2 != null; a2 = a2.nextSibling) {
          var b4 = a2.nodeType;
          if (b4 === 1 || b4 === 3)
            break;
          if (b4 === 8) {
            b4 = a2.data;
            if (b4 === "$" || b4 === "$!" || b4 === "$?")
              break;
            if (b4 === "/$")
              return null;
          }
        }
        return a2;
      }
      function Lf(a2) {
        a2 = a2.previousSibling;
        for (var b4 = 0; a2;) {
          if (a2.nodeType === 8) {
            var c = a2.data;
            if (c === "$" || c === "$!" || c === "$?") {
              if (b4 === 0)
                return a2;
              b4--;
            } else
              c === "/$" && b4++;
          }
          a2 = a2.previousSibling;
        }
        return null;
      }
      var Mf = Math.random().toString(36).slice(2);
      var Nf = "__reactFiber$" + Mf;
      var Of = "__reactProps$" + Mf;
      var tf = "__reactContainer$" + Mf;
      var nf = "__reactEvents$" + Mf;
      var Pf = "__reactListeners$" + Mf;
      var Qf = "__reactHandles$" + Mf;
      function Vc(a2) {
        var b4 = a2[Nf];
        if (b4)
          return b4;
        for (var c = a2.parentNode; c;) {
          if (b4 = c[tf] || c[Nf]) {
            c = b4.alternate;
            if (b4.child !== null || c !== null && c.child !== null)
              for (a2 = Lf(a2); a2 !== null;) {
                if (c = a2[Nf])
                  return c;
                a2 = Lf(a2);
              }
            return b4;
          }
          a2 = c;
          c = a2.parentNode;
        }
        return null;
      }
      function Bb(a2) {
        a2 = a2[Nf] || a2[tf];
        return !a2 || a2.tag !== 5 && a2.tag !== 6 && a2.tag !== 13 && a2.tag !== 3 ? null : a2;
      }
      function te(a2) {
        if (a2.tag === 5 || a2.tag === 6)
          return a2.stateNode;
        throw Error(p3(33));
      }
      function Cb(a2) {
        return a2[Of] || null;
      }
      var Rf = [];
      var Sf = -1;
      function Tf(a2) {
        return { current: a2 };
      }
      function E2(a2) {
        0 > Sf || (a2.current = Rf[Sf], Rf[Sf] = null, Sf--);
      }
      function G2(a2, b4) {
        Sf++;
        Rf[Sf] = a2.current;
        a2.current = b4;
      }
      var Uf = {};
      var H = Tf(Uf);
      var Vf = Tf(false);
      var Wf = Uf;
      function Xf(a2, b4) {
        var c = a2.type.contextTypes;
        if (!c)
          return Uf;
        var d2 = a2.stateNode;
        if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b4)
          return d2.__reactInternalMemoizedMaskedChildContext;
        var e7 = {}, f3;
        for (f3 in c)
          e7[f3] = b4[f3];
        d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = b4, a2.__reactInternalMemoizedMaskedChildContext = e7);
        return e7;
      }
      function Yf(a2) {
        a2 = a2.childContextTypes;
        return a2 !== null && a2 !== void 0;
      }
      function Zf() {
        E2(Vf);
        E2(H);
      }
      function $f(a2, b4, c) {
        if (H.current !== Uf)
          throw Error(p3(168));
        G2(H, b4);
        G2(Vf, c);
      }
      function ag(a2, b4, c) {
        var d2 = a2.stateNode;
        b4 = b4.childContextTypes;
        if (typeof d2.getChildContext !== "function")
          return c;
        d2 = d2.getChildContext();
        for (var e7 in d2)
          if (!(e7 in b4))
            throw Error(p3(108, Qa(a2) || "Unknown", e7));
        return A2({}, c, d2);
      }
      function bg(a2) {
        a2 = (a2 = a2.stateNode) && a2.__reactInternalMemoizedMergedChildContext || Uf;
        Wf = H.current;
        G2(H, a2);
        G2(Vf, Vf.current);
        return true;
      }
      function cg(a2, b4, c) {
        var d2 = a2.stateNode;
        if (!d2)
          throw Error(p3(169));
        c ? (a2 = ag(a2, b4, Wf), d2.__reactInternalMemoizedMergedChildContext = a2, E2(Vf), E2(H), G2(H, a2)) : E2(Vf);
        G2(Vf, c);
      }
      var dg = null;
      var eg = false;
      var fg = false;
      function gg(a2) {
        dg === null ? dg = [a2] : dg.push(a2);
      }
      function hg(a2) {
        eg = true;
        gg(a2);
      }
      function ig() {
        if (!fg && dg !== null) {
          fg = true;
          var a2 = 0, b4 = C3;
          try {
            var c = dg;
            for (C3 = 1; a2 < c.length; a2++) {
              var d2 = c[a2];
              do
                d2 = d2(true);
              while (d2 !== null);
            }
            dg = null;
            eg = false;
          } catch (e7) {
            throw dg !== null && (dg = dg.slice(a2 + 1)), $b(ec, ig), e7;
          } finally {
            C3 = b4, fg = false;
          }
        }
        return null;
      }
      var jg = ta.ReactCurrentBatchConfig;
      function kg(a2, b4) {
        if (a2 && a2.defaultProps) {
          b4 = A2({}, b4);
          a2 = a2.defaultProps;
          for (var c in a2)
            b4[c] === void 0 && (b4[c] = a2[c]);
          return b4;
        }
        return b4;
      }
      var lg = Tf(null);
      var mg = null;
      var ng = null;
      var og = null;
      function pg() {
        og = ng = mg = null;
      }
      function qg(a2) {
        var b4 = lg.current;
        E2(lg);
        a2._currentValue = b4;
      }
      function rg(a2, b4, c) {
        for (; a2 !== null;) {
          var d2 = a2.alternate;
          (a2.childLanes & b4) !== b4 ? (a2.childLanes |= b4, d2 !== null && (d2.childLanes |= b4)) : d2 !== null && (d2.childLanes & b4) !== b4 && (d2.childLanes |= b4);
          if (a2 === c)
            break;
          a2 = a2.return;
        }
      }
      function sg(a2, b4) {
        mg = a2;
        og = ng = null;
        a2 = a2.dependencies;
        a2 !== null && a2.firstContext !== null && ((a2.lanes & b4) !== 0 && (tg = true), a2.firstContext = null);
      }
      function ug(a2) {
        var b4 = a2._currentValue;
        if (og !== a2)
          if (a2 = { context: a2, memoizedValue: b4, next: null }, ng === null) {
            if (mg === null)
              throw Error(p3(308));
            ng = a2;
            mg.dependencies = { lanes: 0, firstContext: a2 };
          } else
            ng = ng.next = a2;
        return b4;
      }
      var vg = null;
      var wg = false;
      function xg(a2) {
        a2.updateQueue = { baseState: a2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
      }
      function yg(a2, b4) {
        a2 = a2.updateQueue;
        b4.updateQueue === a2 && (b4.updateQueue = { baseState: a2.baseState, firstBaseUpdate: a2.firstBaseUpdate, lastBaseUpdate: a2.lastBaseUpdate, shared: a2.shared, effects: a2.effects });
      }
      function zg(a2, b4) {
        return { eventTime: a2, lane: b4, tag: 0, payload: null, callback: null, next: null };
      }
      function Ag(a2, b4) {
        var c = a2.updateQueue;
        c !== null && (c = c.shared, Bg(a2) ? (a2 = c.interleaved, a2 === null ? (b4.next = b4, vg === null ? vg = [c] : vg.push(c)) : (b4.next = a2.next, a2.next = b4), c.interleaved = b4) : (a2 = c.pending, a2 === null ? b4.next = b4 : (b4.next = a2.next, a2.next = b4), c.pending = b4));
      }
      function Cg(a2, b4, c) {
        b4 = b4.updateQueue;
        if (b4 !== null && (b4 = b4.shared, (c & 4194240) !== 0)) {
          var d2 = b4.lanes;
          d2 &= a2.pendingLanes;
          c |= d2;
          b4.lanes = c;
          Bc(a2, c);
        }
      }
      function Dg(a2, b4) {
        var c = a2.updateQueue, d2 = a2.alternate;
        if (d2 !== null && (d2 = d2.updateQueue, c === d2)) {
          var e7 = null, f3 = null;
          c = c.firstBaseUpdate;
          if (c !== null) {
            do {
              var g2 = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
              f3 === null ? e7 = f3 = g2 : f3 = f3.next = g2;
              c = c.next;
            } while (c !== null);
            f3 === null ? e7 = f3 = b4 : f3 = f3.next = b4;
          } else
            e7 = f3 = b4;
          c = { baseState: d2.baseState, firstBaseUpdate: e7, lastBaseUpdate: f3, shared: d2.shared, effects: d2.effects };
          a2.updateQueue = c;
          return;
        }
        a2 = c.lastBaseUpdate;
        a2 === null ? c.firstBaseUpdate = b4 : a2.next = b4;
        c.lastBaseUpdate = b4;
      }
      function Eg(a2, b4, c, d2) {
        var e7 = a2.updateQueue;
        wg = false;
        var f3 = e7.firstBaseUpdate, g2 = e7.lastBaseUpdate, h2 = e7.shared.pending;
        if (h2 !== null) {
          e7.shared.pending = null;
          var k = h2, l4 = k.next;
          k.next = null;
          g2 === null ? f3 = l4 : g2.next = l4;
          g2 = k;
          var n2 = a2.alternate;
          n2 !== null && (n2 = n2.updateQueue, h2 = n2.lastBaseUpdate, h2 !== g2 && (h2 === null ? n2.firstBaseUpdate = l4 : h2.next = l4, n2.lastBaseUpdate = k));
        }
        if (f3 !== null) {
          var u2 = e7.baseState;
          g2 = 0;
          n2 = l4 = k = null;
          h2 = f3;
          do {
            var q = h2.lane, y2 = h2.eventTime;
            if ((d2 & q) === q) {
              n2 !== null && (n2 = n2.next = {
                eventTime: y2,
                lane: 0,
                tag: h2.tag,
                payload: h2.payload,
                callback: h2.callback,
                next: null
              });
              a: {
                var m3 = a2, w2 = h2;
                q = b4;
                y2 = c;
                switch (w2.tag) {
                  case 1:
                    m3 = w2.payload;
                    if (typeof m3 === "function") {
                      u2 = m3.call(y2, u2, q);
                      break a;
                    }
                    u2 = m3;
                    break a;
                  case 3:
                    m3.flags = m3.flags & -65537 | 128;
                  case 0:
                    m3 = w2.payload;
                    q = typeof m3 === "function" ? m3.call(y2, u2, q) : m3;
                    if (q === null || q === void 0)
                      break a;
                    u2 = A2({}, u2, q);
                    break a;
                  case 2:
                    wg = true;
                }
              }
              h2.callback !== null && h2.lane !== 0 && (a2.flags |= 64, q = e7.effects, q === null ? e7.effects = [h2] : q.push(h2));
            } else
              y2 = { eventTime: y2, lane: q, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, n2 === null ? (l4 = n2 = y2, k = u2) : n2 = n2.next = y2, g2 |= q;
            h2 = h2.next;
            if (h2 === null)
              if (h2 = e7.shared.pending, h2 === null)
                break;
              else
                q = h2, h2 = q.next, q.next = null, e7.lastBaseUpdate = q, e7.shared.pending = null;
          } while (1);
          n2 === null && (k = u2);
          e7.baseState = k;
          e7.firstBaseUpdate = l4;
          e7.lastBaseUpdate = n2;
          b4 = e7.shared.interleaved;
          if (b4 !== null) {
            e7 = b4;
            do
              g2 |= e7.lane, e7 = e7.next;
            while (e7 !== b4);
          } else
            f3 === null && (e7.shared.lanes = 0);
          Fg |= g2;
          a2.lanes = g2;
          a2.memoizedState = u2;
        }
      }
      function Gg(a2, b4, c) {
        a2 = b4.effects;
        b4.effects = null;
        if (a2 !== null)
          for (b4 = 0; b4 < a2.length; b4++) {
            var d2 = a2[b4], e7 = d2.callback;
            if (e7 !== null) {
              d2.callback = null;
              d2 = c;
              if (typeof e7 !== "function")
                throw Error(p3(191, e7));
              e7.call(d2);
            }
          }
      }
      var Hg = new aa.Component().refs;
      function Ig(a2, b4, c, d2) {
        b4 = a2.memoizedState;
        c = c(d2, b4);
        c = c === null || c === void 0 ? b4 : A2({}, b4, c);
        a2.memoizedState = c;
        a2.lanes === 0 && (a2.updateQueue.baseState = c);
      }
      var Mg = {
        isMounted: function (a2) {
          return (a2 = a2._reactInternals) ? Ub(a2) === a2 : false;
        }, enqueueSetState: function (a2, b4, c) {
          a2 = a2._reactInternals;
          var d2 = Jg(), e7 = Kg(a2), f3 = zg(d2, e7);
          f3.payload = b4;
          c !== void 0 && c !== null && (f3.callback = c);
          Ag(a2, f3);
          b4 = Lg(a2, e7, d2);
          b4 !== null && Cg(b4, a2, e7);
        }, enqueueReplaceState: function (a2, b4, c) {
          a2 = a2._reactInternals;
          var d2 = Jg(), e7 = Kg(a2), f3 = zg(d2, e7);
          f3.tag = 1;
          f3.payload = b4;
          c !== void 0 && c !== null && (f3.callback = c);
          Ag(a2, f3);
          b4 = Lg(a2, e7, d2);
          b4 !== null && Cg(b4, a2, e7);
        }, enqueueForceUpdate: function (a2, b4) {
          a2 = a2._reactInternals;
          var c = Jg(), d2 = Kg(a2), e7 = zg(c, d2);
          e7.tag = 2;
          b4 !== void 0 && b4 !== null && (e7.callback = b4);
          Ag(a2, e7);
          b4 = Lg(a2, d2, c);
          b4 !== null && Cg(b4, a2, d2);
        }
      };
      function Ng(a2, b4, c, d2, e7, f3, g2) {
        a2 = a2.stateNode;
        return typeof a2.shouldComponentUpdate === "function" ? a2.shouldComponentUpdate(d2, f3, g2) : b4.prototype && b4.prototype.isPureReactComponent ? !He(c, d2) || !He(e7, f3) : true;
      }
      function Og(a2, b4, c) {
        var d2 = false, e7 = Uf;
        var f3 = b4.contextType;
        typeof f3 === "object" && f3 !== null ? f3 = ug(f3) : (e7 = Yf(b4) ? Wf : H.current, d2 = b4.contextTypes, f3 = (d2 = d2 !== null && d2 !== void 0) ? Xf(a2, e7) : Uf);
        b4 = new b4(c, f3);
        a2.memoizedState = b4.state !== null && b4.state !== void 0 ? b4.state : null;
        b4.updater = Mg;
        a2.stateNode = b4;
        b4._reactInternals = a2;
        d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = e7, a2.__reactInternalMemoizedMaskedChildContext = f3);
        return b4;
      }
      function Pg(a2, b4, c, d2) {
        a2 = b4.state;
        typeof b4.componentWillReceiveProps === "function" && b4.componentWillReceiveProps(c, d2);
        typeof b4.UNSAFE_componentWillReceiveProps === "function" && b4.UNSAFE_componentWillReceiveProps(c, d2);
        b4.state !== a2 && Mg.enqueueReplaceState(b4, b4.state, null);
      }
      function Qg(a2, b4, c, d2) {
        var e7 = a2.stateNode;
        e7.props = c;
        e7.state = a2.memoizedState;
        e7.refs = Hg;
        xg(a2);
        var f3 = b4.contextType;
        typeof f3 === "object" && f3 !== null ? e7.context = ug(f3) : (f3 = Yf(b4) ? Wf : H.current, e7.context = Xf(a2, f3));
        e7.state = a2.memoizedState;
        f3 = b4.getDerivedStateFromProps;
        typeof f3 === "function" && (Ig(a2, b4, f3, c), e7.state = a2.memoizedState);
        typeof b4.getDerivedStateFromProps === "function" || typeof e7.getSnapshotBeforeUpdate === "function" || typeof e7.UNSAFE_componentWillMount !== "function" && typeof e7.componentWillMount !== "function" || (b4 = e7.state, typeof e7.componentWillMount === "function" && e7.componentWillMount(), typeof e7.UNSAFE_componentWillMount === "function" && e7.UNSAFE_componentWillMount(), b4 !== e7.state && Mg.enqueueReplaceState(e7, e7.state, null), Eg(a2, c, e7, d2), e7.state = a2.memoizedState);
        typeof e7.componentDidMount === "function" && (a2.flags |= 4194308);
      }
      var Rg = [];
      var Sg = 0;
      var Tg = null;
      var Ug = 0;
      var Vg = [];
      var Wg = 0;
      var Xg = null;
      var Yg = 1;
      var Zg = "";
      function $g(a2, b4) {
        Rg[Sg++] = Ug;
        Rg[Sg++] = Tg;
        Tg = a2;
        Ug = b4;
      }
      function ah(a2, b4, c) {
        Vg[Wg++] = Yg;
        Vg[Wg++] = Zg;
        Vg[Wg++] = Xg;
        Xg = a2;
        var d2 = Yg;
        a2 = Zg;
        var e7 = 32 - nc(d2) - 1;
        d2 &= ~(1 << e7);
        c += 1;
        var f3 = 32 - nc(b4) + e7;
        if (30 < f3) {
          var g2 = e7 - e7 % 5;
          f3 = (d2 & (1 << g2) - 1).toString(32);
          d2 >>= g2;
          e7 -= g2;
          Yg = 1 << 32 - nc(b4) + e7 | c << e7 | d2;
          Zg = f3 + a2;
        } else
          Yg = 1 << f3 | c << e7 | d2, Zg = a2;
      }
      function bh(a2) {
        a2.return !== null && ($g(a2, 1), ah(a2, 1, 0));
      }
      function ch(a2) {
        for (; a2 === Tg;)
          Tg = Rg[--Sg], Rg[Sg] = null, Ug = Rg[--Sg], Rg[Sg] = null;
        for (; a2 === Xg;)
          Xg = Vg[--Wg], Vg[Wg] = null, Zg = Vg[--Wg], Vg[Wg] = null, Yg = Vg[--Wg], Vg[Wg] = null;
      }
      var dh = null;
      var eh = null;
      var I = false;
      var fh = null;
      function gh(a2, b4) {
        var c = hh(5, null, null, 0);
        c.elementType = "DELETED";
        c.stateNode = b4;
        c.return = a2;
        b4 = a2.deletions;
        b4 === null ? (a2.deletions = [c], a2.flags |= 16) : b4.push(c);
      }
      function ih(a2, b4) {
        switch (a2.tag) {
          case 5:
            var c = a2.type;
            b4 = b4.nodeType !== 1 || c.toLowerCase() !== b4.nodeName.toLowerCase() ? null : b4;
            return b4 !== null ? (a2.stateNode = b4, dh = a2, eh = Kf(b4.firstChild), true) : false;
          case 6:
            return b4 = a2.pendingProps === "" || b4.nodeType !== 3 ? null : b4, b4 !== null ? (a2.stateNode = b4, dh = a2, eh = null, true) : false;
          case 13:
            return b4 = b4.nodeType !== 8 ? null : b4, b4 !== null ? (c = Xg !== null ? { id: Yg, overflow: Zg } : null, a2.memoizedState = { dehydrated: b4, treeContext: c, retryLane: 1073741824 }, c = hh(18, null, null, 0), c.stateNode = b4, c.return = a2, a2.child = c, dh = a2, eh = null, true) : false;
          default:
            return false;
        }
      }
      function jh(a2) {
        return (a2.mode & 1) !== 0 && (a2.flags & 128) === 0;
      }
      function kh(a2) {
        if (I) {
          var b4 = eh;
          if (b4) {
            var c = b4;
            if (!ih(a2, b4)) {
              if (jh(a2))
                throw Error(p3(418));
              b4 = Kf(c.nextSibling);
              var d2 = dh;
              b4 && ih(a2, b4) ? gh(d2, c) : (a2.flags = a2.flags & -4097 | 2, I = false, dh = a2);
            }
          } else {
            if (jh(a2))
              throw Error(p3(418));
            a2.flags = a2.flags & -4097 | 2;
            I = false;
            dh = a2;
          }
        }
      }
      function lh(a2) {
        for (a2 = a2.return; a2 !== null && a2.tag !== 5 && a2.tag !== 3 && a2.tag !== 13;)
          a2 = a2.return;
        dh = a2;
      }
      function mh(a2) {
        if (a2 !== dh)
          return false;
        if (!I)
          return lh(a2), I = true, false;
        var b4;
        (b4 = a2.tag !== 3) && !(b4 = a2.tag !== 5) && (b4 = a2.type, b4 = b4 !== "head" && b4 !== "body" && !Df(a2.type, a2.memoizedProps));
        if (b4 && (b4 = eh)) {
          if (jh(a2)) {
            for (a2 = eh; a2;)
              a2 = Kf(a2.nextSibling);
            throw Error(p3(418));
          }
          for (; b4;)
            gh(a2, b4), b4 = Kf(b4.nextSibling);
        }
        lh(a2);
        if (a2.tag === 13) {
          a2 = a2.memoizedState;
          a2 = a2 !== null ? a2.dehydrated : null;
          if (!a2)
            throw Error(p3(317));
          a: {
            a2 = a2.nextSibling;
            for (b4 = 0; a2;) {
              if (a2.nodeType === 8) {
                var c = a2.data;
                if (c === "/$") {
                  if (b4 === 0) {
                    eh = Kf(a2.nextSibling);
                    break a;
                  }
                  b4--;
                } else
                  c !== "$" && c !== "$!" && c !== "$?" || b4++;
              }
              a2 = a2.nextSibling;
            }
            eh = null;
          }
        } else
          eh = dh ? Kf(a2.stateNode.nextSibling) : null;
        return true;
      }
      function nh() {
        eh = dh = null;
        I = false;
      }
      function oh(a2) {
        fh === null ? fh = [a2] : fh.push(a2);
      }
      function ph(a2, b4, c) {
        a2 = c.ref;
        if (a2 !== null && typeof a2 !== "function" && typeof a2 !== "object") {
          if (c._owner) {
            c = c._owner;
            if (c) {
              if (c.tag !== 1)
                throw Error(p3(309));
              var d2 = c.stateNode;
            }
            if (!d2)
              throw Error(p3(147, a2));
            var e7 = d2, f3 = "" + a2;
            if (b4 !== null && b4.ref !== null && typeof b4.ref === "function" && b4.ref._stringRef === f3)
              return b4.ref;
            b4 = function (a3) {
              var b5 = e7.refs;
              b5 === Hg && (b5 = e7.refs = {});
              a3 === null ? delete b5[f3] : b5[f3] = a3;
            };
            b4._stringRef = f3;
            return b4;
          }
          if (typeof a2 !== "string")
            throw Error(p3(284));
          if (!c._owner)
            throw Error(p3(290, a2));
        }
        return a2;
      }
      function qh(a2, b4) {
        a2 = Object.prototype.toString.call(b4);
        throw Error(p3(31, a2 === "[object Object]" ? "object with keys {" + Object.keys(b4).join(", ") + "}" : a2));
      }
      function rh(a2) {
        var b4 = a2._init;
        return b4(a2._payload);
      }
      function sh(a2) {
        function b4(b5, c2) {
          if (a2) {
            var d3 = b5.deletions;
            d3 === null ? (b5.deletions = [c2], b5.flags |= 16) : d3.push(c2);
          }
        }
        function c(c2, d3) {
          if (!a2)
            return null;
          for (; d3 !== null;)
            b4(c2, d3), d3 = d3.sibling;
          return null;
        }
        function d2(a3, b5) {
          for (a3 = new Map(); b5 !== null;)
            b5.key !== null ? a3.set(b5.key, b5) : a3.set(b5.index, b5), b5 = b5.sibling;
          return a3;
        }
        function e7(a3, b5) {
          a3 = th(a3, b5);
          a3.index = 0;
          a3.sibling = null;
          return a3;
        }
        function f3(b5, c2, d3) {
          b5.index = d3;
          if (!a2)
            return b5.flags |= 1048576, c2;
          d3 = b5.alternate;
          if (d3 !== null)
            return d3 = d3.index, d3 < c2 ? (b5.flags |= 2, c2) : d3;
          b5.flags |= 2;
          return c2;
        }
        function g2(b5) {
          a2 && b5.alternate === null && (b5.flags |= 2);
          return b5;
        }
        function h2(a3, b5, c2, d3) {
          if (b5 === null || b5.tag !== 6)
            return b5 = uh(c2, a3.mode, d3), b5.return = a3, b5;
          b5 = e7(b5, c2);
          b5.return = a3;
          return b5;
        }
        function k(a3, b5, c2, d3) {
          var f4 = c2.type;
          if (f4 === wa)
            return n2(a3, b5, c2.props.children, d3, c2.key);
          if (b5 !== null && (b5.elementType === f4 || typeof f4 === "object" && f4 !== null && f4.$$typeof === Ga && rh(f4) === b5.type))
            return d3 = e7(b5, c2.props), d3.ref = ph(a3, b5, c2), d3.return = a3, d3;
          d3 = vh(c2.type, c2.key, c2.props, null, a3.mode, d3);
          d3.ref = ph(a3, b5, c2);
          d3.return = a3;
          return d3;
        }
        function l4(a3, b5, c2, d3) {
          if (b5 === null || b5.tag !== 4 || b5.stateNode.containerInfo !== c2.containerInfo || b5.stateNode.implementation !== c2.implementation)
            return b5 = wh(c2, a3.mode, d3), b5.return = a3, b5;
          b5 = e7(b5, c2.children || []);
          b5.return = a3;
          return b5;
        }
        function n2(a3, b5, c2, d3, f4) {
          if (b5 === null || b5.tag !== 7)
            return b5 = xh(c2, a3.mode, d3, f4), b5.return = a3, b5;
          b5 = e7(b5, c2);
          b5.return = a3;
          return b5;
        }
        function u2(a3, b5, c2) {
          if (typeof b5 === "string" && b5 !== "" || typeof b5 === "number")
            return b5 = uh("" + b5, a3.mode, c2), b5.return = a3, b5;
          if (typeof b5 === "object" && b5 !== null) {
            switch (b5.$$typeof) {
              case ua:
                return c2 = vh(b5.type, b5.key, b5.props, null, a3.mode, c2), c2.ref = ph(a3, null, b5), c2.return = a3, c2;
              case va:
                return b5 = wh(b5, a3.mode, c2), b5.return = a3, b5;
              case Ga:
                var d3 = b5._init;
                return u2(a3, d3(b5._payload), c2);
            }
            if (db(b5) || Ja(b5))
              return b5 = xh(b5, a3.mode, c2, null), b5.return = a3, b5;
            qh(a3, b5);
          }
          return null;
        }
        function q(a3, b5, c2, d3) {
          var e8 = b5 !== null ? b5.key : null;
          if (typeof c2 === "string" && c2 !== "" || typeof c2 === "number")
            return e8 !== null ? null : h2(a3, b5, "" + c2, d3);
          if (typeof c2 === "object" && c2 !== null) {
            switch (c2.$$typeof) {
              case ua:
                return c2.key === e8 ? k(a3, b5, c2, d3) : null;
              case va:
                return c2.key === e8 ? l4(a3, b5, c2, d3) : null;
              case Ga:
                return e8 = c2._init, q(a3, b5, e8(c2._payload), d3);
            }
            if (db(c2) || Ja(c2))
              return e8 !== null ? null : n2(a3, b5, c2, d3, null);
            qh(a3, c2);
          }
          return null;
        }
        function y2(a3, b5, c2, d3, e8) {
          if (typeof d3 === "string" && d3 !== "" || typeof d3 === "number")
            return a3 = a3.get(c2) || null, h2(b5, a3, "" + d3, e8);
          if (typeof d3 === "object" && d3 !== null) {
            switch (d3.$$typeof) {
              case ua:
                return a3 = a3.get(d3.key === null ? c2 : d3.key) || null, k(b5, a3, d3, e8);
              case va:
                return a3 = a3.get(d3.key === null ? c2 : d3.key) || null, l4(b5, a3, d3, e8);
              case Ga:
                var f4 = d3._init;
                return y2(a3, b5, c2, f4(d3._payload), e8);
            }
            if (db(d3) || Ja(d3))
              return a3 = a3.get(c2) || null, n2(b5, a3, d3, e8, null);
            qh(b5, d3);
          }
          return null;
        }
        function m3(e8, g3, h3, k2) {
          for (var l5 = null, n3 = null, r4 = g3, m4 = g3 = 0, x2 = null; r4 !== null && m4 < h3.length; m4++) {
            r4.index > m4 ? (x2 = r4, r4 = null) : x2 = r4.sibling;
            var v2 = q(e8, r4, h3[m4], k2);
            if (v2 === null) {
              r4 === null && (r4 = x2);
              break;
            }
            a2 && r4 && v2.alternate === null && b4(e8, r4);
            g3 = f3(v2, g3, m4);
            n3 === null ? l5 = v2 : n3.sibling = v2;
            n3 = v2;
            r4 = x2;
          }
          if (m4 === h3.length)
            return c(e8, r4), I && $g(e8, m4), l5;
          if (r4 === null) {
            for (; m4 < h3.length; m4++)
              r4 = u2(e8, h3[m4], k2), r4 !== null && (g3 = f3(r4, g3, m4), n3 === null ? l5 = r4 : n3.sibling = r4, n3 = r4);
            I && $g(e8, m4);
            return l5;
          }
          for (r4 = d2(e8, r4); m4 < h3.length; m4++)
            x2 = y2(r4, e8, m4, h3[m4], k2), x2 !== null && (a2 && x2.alternate !== null && r4.delete(x2.key === null ? m4 : x2.key), g3 = f3(x2, g3, m4), n3 === null ? l5 = x2 : n3.sibling = x2, n3 = x2);
          a2 && r4.forEach(function (a3) {
            return b4(e8, a3);
          });
          I && $g(e8, m4);
          return l5;
        }
        function w2(e8, g3, h3, k2) {
          var l5 = Ja(h3);
          if (typeof l5 !== "function")
            throw Error(p3(150));
          h3 = l5.call(h3);
          if (h3 == null)
            throw Error(p3(151));
          for (var n3 = l5 = null, m4 = g3, r4 = g3 = 0, x2 = null, v2 = h3.next(); m4 !== null && !v2.done; r4++, v2 = h3.next()) {
            m4.index > r4 ? (x2 = m4, m4 = null) : x2 = m4.sibling;
            var w3 = q(e8, m4, v2.value, k2);
            if (w3 === null) {
              m4 === null && (m4 = x2);
              break;
            }
            a2 && m4 && w3.alternate === null && b4(e8, m4);
            g3 = f3(w3, g3, r4);
            n3 === null ? l5 = w3 : n3.sibling = w3;
            n3 = w3;
            m4 = x2;
          }
          if (v2.done)
            return c(e8, m4), I && $g(e8, r4), l5;
          if (m4 === null) {
            for (; !v2.done; r4++, v2 = h3.next())
              v2 = u2(e8, v2.value, k2), v2 !== null && (g3 = f3(v2, g3, r4), n3 === null ? l5 = v2 : n3.sibling = v2, n3 = v2);
            I && $g(e8, r4);
            return l5;
          }
          for (m4 = d2(e8, m4); !v2.done; r4++, v2 = h3.next())
            v2 = y2(m4, e8, r4, v2.value, k2), v2 !== null && (a2 && v2.alternate !== null && m4.delete(v2.key === null ? r4 : v2.key), g3 = f3(v2, g3, r4), n3 === null ? l5 = v2 : n3.sibling = v2, n3 = v2);
          a2 && m4.forEach(function (a3) {
            return b4(e8, a3);
          });
          I && $g(e8, r4);
          return l5;
        }
        function J(a3, d3, f4, h3) {
          typeof f4 === "object" && f4 !== null && f4.type === wa && f4.key === null && (f4 = f4.props.children);
          if (typeof f4 === "object" && f4 !== null) {
            switch (f4.$$typeof) {
              case ua:
                a: {
                  for (var k2 = f4.key, l5 = d3; l5 !== null;) {
                    if (l5.key === k2) {
                      k2 = f4.type;
                      if (k2 === wa) {
                        if (l5.tag === 7) {
                          c(a3, l5.sibling);
                          d3 = e7(l5, f4.props.children);
                          d3.return = a3;
                          a3 = d3;
                          break a;
                        }
                      } else if (l5.elementType === k2 || typeof k2 === "object" && k2 !== null && k2.$$typeof === Ga && rh(k2) === l5.type) {
                        c(a3, l5.sibling);
                        d3 = e7(l5, f4.props);
                        d3.ref = ph(a3, l5, f4);
                        d3.return = a3;
                        a3 = d3;
                        break a;
                      }
                      c(a3, l5);
                      break;
                    } else
                      b4(a3, l5);
                    l5 = l5.sibling;
                  }
                  f4.type === wa ? (d3 = xh(f4.props.children, a3.mode, h3, f4.key), d3.return = a3, a3 = d3) : (h3 = vh(f4.type, f4.key, f4.props, null, a3.mode, h3), h3.ref = ph(a3, d3, f4), h3.return = a3, a3 = h3);
                }
                return g2(a3);
              case va:
                a: {
                  for (l5 = f4.key; d3 !== null;) {
                    if (d3.key === l5)
                      if (d3.tag === 4 && d3.stateNode.containerInfo === f4.containerInfo && d3.stateNode.implementation === f4.implementation) {
                        c(a3, d3.sibling);
                        d3 = e7(d3, f4.children || []);
                        d3.return = a3;
                        a3 = d3;
                        break a;
                      } else {
                        c(a3, d3);
                        break;
                      }
                    else
                      b4(a3, d3);
                    d3 = d3.sibling;
                  }
                  d3 = wh(f4, a3.mode, h3);
                  d3.return = a3;
                  a3 = d3;
                }
                return g2(a3);
              case Ga:
                return l5 = f4._init, J(a3, d3, l5(f4._payload), h3);
            }
            if (db(f4))
              return m3(a3, d3, f4, h3);
            if (Ja(f4))
              return w2(a3, d3, f4, h3);
            qh(a3, f4);
          }
          return typeof f4 === "string" && f4 !== "" || typeof f4 === "number" ? (f4 = "" + f4, d3 !== null && d3.tag === 6 ? (c(a3, d3.sibling), d3 = e7(d3, f4), d3.return = a3, a3 = d3) : (c(a3, d3), d3 = uh(f4, a3.mode, h3), d3.return = a3, a3 = d3), g2(a3)) : c(a3, d3);
        }
        return J;
      }
      var yh = sh(true);
      var zh = sh(false);
      var Ah = {};
      var Bh = Tf(Ah);
      var Ch = Tf(Ah);
      var Dh = Tf(Ah);
      function Eh(a2) {
        if (a2 === Ah)
          throw Error(p3(174));
        return a2;
      }
      function Fh(a2, b4) {
        G2(Dh, b4);
        G2(Ch, a2);
        G2(Bh, Ah);
        a2 = b4.nodeType;
        switch (a2) {
          case 9:
          case 11:
            b4 = (b4 = b4.documentElement) ? b4.namespaceURI : kb(null, "");
            break;
          default:
            a2 = a2 === 8 ? b4.parentNode : b4, b4 = a2.namespaceURI || null, a2 = a2.tagName, b4 = kb(b4, a2);
        }
        E2(Bh);
        G2(Bh, b4);
      }
      function Gh() {
        E2(Bh);
        E2(Ch);
        E2(Dh);
      }
      function Hh(a2) {
        Eh(Dh.current);
        var b4 = Eh(Bh.current);
        var c = kb(b4, a2.type);
        b4 !== c && (G2(Ch, a2), G2(Bh, c));
      }
      function Ih(a2) {
        Ch.current === a2 && (E2(Bh), E2(Ch));
      }
      var K2 = Tf(0);
      function Jh(a2) {
        for (var b4 = a2; b4 !== null;) {
          if (b4.tag === 13) {
            var c = b4.memoizedState;
            if (c !== null && (c = c.dehydrated, c === null || c.data === "$?" || c.data === "$!"))
              return b4;
          } else if (b4.tag === 19 && b4.memoizedProps.revealOrder !== void 0) {
            if ((b4.flags & 128) !== 0)
              return b4;
          } else if (b4.child !== null) {
            b4.child.return = b4;
            b4 = b4.child;
            continue;
          }
          if (b4 === a2)
            break;
          for (; b4.sibling === null;) {
            if (b4.return === null || b4.return === a2)
              return null;
            b4 = b4.return;
          }
          b4.sibling.return = b4.return;
          b4 = b4.sibling;
        }
        return null;
      }
      var Kh = [];
      function Lh() {
        for (var a2 = 0; a2 < Kh.length; a2++)
          Kh[a2]._workInProgressVersionPrimary = null;
        Kh.length = 0;
      }
      var Mh = ta.ReactCurrentDispatcher;
      var Nh = ta.ReactCurrentBatchConfig;
      var Oh = 0;
      var L2 = null;
      var M2 = null;
      var N = null;
      var Ph = false;
      var Qh = false;
      var Rh = 0;
      var Sh = 0;
      function O() {
        throw Error(p3(321));
      }
      function Th(a2, b4) {
        if (b4 === null)
          return false;
        for (var c = 0; c < b4.length && c < a2.length; c++)
          if (!Ge(a2[c], b4[c]))
            return false;
        return true;
      }
      function Uh(a2, b4, c, d2, e7, f3) {
        Oh = f3;
        L2 = b4;
        b4.memoizedState = null;
        b4.updateQueue = null;
        b4.lanes = 0;
        Mh.current = a2 === null || a2.memoizedState === null ? Vh : Wh;
        a2 = c(d2, e7);
        if (Qh) {
          f3 = 0;
          do {
            Qh = false;
            Rh = 0;
            if (25 <= f3)
              throw Error(p3(301));
            f3 += 1;
            N = M2 = null;
            b4.updateQueue = null;
            Mh.current = Xh;
            a2 = c(d2, e7);
          } while (Qh);
        }
        Mh.current = Yh;
        b4 = M2 !== null && M2.next !== null;
        Oh = 0;
        N = M2 = L2 = null;
        Ph = false;
        if (b4)
          throw Error(p3(300));
        return a2;
      }
      function Zh() {
        var a2 = Rh !== 0;
        Rh = 0;
        return a2;
      }
      function $h() {
        var a2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        N === null ? L2.memoizedState = N = a2 : N = N.next = a2;
        return N;
      }
      function ai() {
        if (M2 === null) {
          var a2 = L2.alternate;
          a2 = a2 !== null ? a2.memoizedState : null;
        } else
          a2 = M2.next;
        var b4 = N === null ? L2.memoizedState : N.next;
        if (b4 !== null)
          N = b4, M2 = a2;
        else {
          if (a2 === null)
            throw Error(p3(310));
          M2 = a2;
          a2 = { memoizedState: M2.memoizedState, baseState: M2.baseState, baseQueue: M2.baseQueue, queue: M2.queue, next: null };
          N === null ? L2.memoizedState = N = a2 : N = N.next = a2;
        }
        return N;
      }
      function bi(a2, b4) {
        return typeof b4 === "function" ? b4(a2) : b4;
      }
      function ci(a2) {
        var b4 = ai(), c = b4.queue;
        if (c === null)
          throw Error(p3(311));
        c.lastRenderedReducer = a2;
        var d2 = M2, e7 = d2.baseQueue, f3 = c.pending;
        if (f3 !== null) {
          if (e7 !== null) {
            var g2 = e7.next;
            e7.next = f3.next;
            f3.next = g2;
          }
          d2.baseQueue = e7 = f3;
          c.pending = null;
        }
        if (e7 !== null) {
          f3 = e7.next;
          d2 = d2.baseState;
          var h2 = g2 = null, k = null, l4 = f3;
          do {
            var n2 = l4.lane;
            if ((Oh & n2) === n2)
              k !== null && (k = k.next = { lane: 0, action: l4.action, hasEagerState: l4.hasEagerState, eagerState: l4.eagerState, next: null }), d2 = l4.hasEagerState ? l4.eagerState : a2(d2, l4.action);
            else {
              var u2 = {
                lane: n2,
                action: l4.action,
                hasEagerState: l4.hasEagerState,
                eagerState: l4.eagerState,
                next: null
              };
              k === null ? (h2 = k = u2, g2 = d2) : k = k.next = u2;
              L2.lanes |= n2;
              Fg |= n2;
            }
            l4 = l4.next;
          } while (l4 !== null && l4 !== f3);
          k === null ? g2 = d2 : k.next = h2;
          Ge(d2, b4.memoizedState) || (tg = true);
          b4.memoizedState = d2;
          b4.baseState = g2;
          b4.baseQueue = k;
          c.lastRenderedState = d2;
        }
        a2 = c.interleaved;
        if (a2 !== null) {
          e7 = a2;
          do
            f3 = e7.lane, L2.lanes |= f3, Fg |= f3, e7 = e7.next;
          while (e7 !== a2);
        } else
          e7 === null && (c.lanes = 0);
        return [b4.memoizedState, c.dispatch];
      }
      function di(a2) {
        var b4 = ai(), c = b4.queue;
        if (c === null)
          throw Error(p3(311));
        c.lastRenderedReducer = a2;
        var d2 = c.dispatch, e7 = c.pending, f3 = b4.memoizedState;
        if (e7 !== null) {
          c.pending = null;
          var g2 = e7 = e7.next;
          do
            f3 = a2(f3, g2.action), g2 = g2.next;
          while (g2 !== e7);
          Ge(f3, b4.memoizedState) || (tg = true);
          b4.memoizedState = f3;
          b4.baseQueue === null && (b4.baseState = f3);
          c.lastRenderedState = f3;
        }
        return [f3, d2];
      }
      function ei() {
      }
      function fi(a2, b4) {
        var c = L2, d2 = ai(), e7 = b4(), f3 = !Ge(d2.memoizedState, e7);
        f3 && (d2.memoizedState = e7, tg = true);
        d2 = d2.queue;
        gi(hi.bind(null, c, d2, a2), [a2]);
        if (d2.getSnapshot !== b4 || f3 || N !== null && N.memoizedState.tag & 1) {
          c.flags |= 2048;
          ii(9, ji.bind(null, c, d2, e7, b4), void 0, null);
          if (P2 === null)
            throw Error(p3(349));
          (Oh & 30) !== 0 || ki(c, b4, e7);
        }
        return e7;
      }
      function ki(a2, b4, c) {
        a2.flags |= 16384;
        a2 = { getSnapshot: b4, value: c };
        b4 = L2.updateQueue;
        b4 === null ? (b4 = { lastEffect: null, stores: null }, L2.updateQueue = b4, b4.stores = [a2]) : (c = b4.stores, c === null ? b4.stores = [a2] : c.push(a2));
      }
      function ji(a2, b4, c, d2) {
        b4.value = c;
        b4.getSnapshot = d2;
        li(b4) && Lg(a2, 1, -1);
      }
      function hi(a2, b4, c) {
        return c(function () {
          li(b4) && Lg(a2, 1, -1);
        });
      }
      function li(a2) {
        var b4 = a2.getSnapshot;
        a2 = a2.value;
        try {
          var c = b4();
          return !Ge(a2, c);
        } catch (d2) {
          return true;
        }
      }
      function mi(a2) {
        var b4 = $h();
        typeof a2 === "function" && (a2 = a2());
        b4.memoizedState = b4.baseState = a2;
        a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: bi, lastRenderedState: a2 };
        b4.queue = a2;
        a2 = a2.dispatch = ni.bind(null, L2, a2);
        return [b4.memoizedState, a2];
      }
      function ii(a2, b4, c, d2) {
        a2 = { tag: a2, create: b4, destroy: c, deps: d2, next: null };
        b4 = L2.updateQueue;
        b4 === null ? (b4 = { lastEffect: null, stores: null }, L2.updateQueue = b4, b4.lastEffect = a2.next = a2) : (c = b4.lastEffect, c === null ? b4.lastEffect = a2.next = a2 : (d2 = c.next, c.next = a2, a2.next = d2, b4.lastEffect = a2));
        return a2;
      }
      function oi() {
        return ai().memoizedState;
      }
      function pi(a2, b4, c, d2) {
        var e7 = $h();
        L2.flags |= a2;
        e7.memoizedState = ii(1 | b4, c, void 0, d2 === void 0 ? null : d2);
      }
      function qi(a2, b4, c, d2) {
        var e7 = ai();
        d2 = d2 === void 0 ? null : d2;
        var f3 = void 0;
        if (M2 !== null) {
          var g2 = M2.memoizedState;
          f3 = g2.destroy;
          if (d2 !== null && Th(d2, g2.deps)) {
            e7.memoizedState = ii(b4, c, f3, d2);
            return;
          }
        }
        L2.flags |= a2;
        e7.memoizedState = ii(1 | b4, c, f3, d2);
      }
      function ri(a2, b4) {
        return pi(8390656, 8, a2, b4);
      }
      function gi(a2, b4) {
        return qi(2048, 8, a2, b4);
      }
      function si(a2, b4) {
        return qi(4, 2, a2, b4);
      }
      function ti(a2, b4) {
        return qi(4, 4, a2, b4);
      }
      function ui(a2, b4) {
        if (typeof b4 === "function")
          return a2 = a2(), b4(a2), function () {
            b4(null);
          };
        if (b4 !== null && b4 !== void 0)
          return a2 = a2(), b4.current = a2, function () {
            b4.current = null;
          };
      }
      function vi(a2, b4, c) {
        c = c !== null && c !== void 0 ? c.concat([a2]) : null;
        return qi(4, 4, ui.bind(null, b4, a2), c);
      }
      function wi() {
      }
      function xi(a2, b4) {
        var c = ai();
        b4 = b4 === void 0 ? null : b4;
        var d2 = c.memoizedState;
        if (d2 !== null && b4 !== null && Th(b4, d2[1]))
          return d2[0];
        c.memoizedState = [a2, b4];
        return a2;
      }
      function yi(a2, b4) {
        var c = ai();
        b4 = b4 === void 0 ? null : b4;
        var d2 = c.memoizedState;
        if (d2 !== null && b4 !== null && Th(b4, d2[1]))
          return d2[0];
        a2 = a2();
        c.memoizedState = [a2, b4];
        return a2;
      }
      function zi(a2, b4, c) {
        if ((Oh & 21) === 0)
          return a2.baseState && (a2.baseState = false, tg = true), a2.memoizedState = c;
        Ge(c, b4) || (c = xc(), L2.lanes |= c, Fg |= c, a2.baseState = true);
        return b4;
      }
      function Ai(a2, b4) {
        var c = C3;
        C3 = c !== 0 && 4 > c ? c : 4;
        a2(true);
        var d2 = Nh.transition;
        Nh.transition = {};
        try {
          a2(false), b4();
        } finally {
          C3 = c, Nh.transition = d2;
        }
      }
      function Bi() {
        return ai().memoizedState;
      }
      function Ci(a2, b4, c) {
        var d2 = Kg(a2);
        c = { lane: d2, action: c, hasEagerState: false, eagerState: null, next: null };
        Di(a2) ? Ei(b4, c) : (Fi(a2, b4, c), c = Jg(), a2 = Lg(a2, d2, c), a2 !== null && Gi(a2, b4, d2));
      }
      function ni(a2, b4, c) {
        var d2 = Kg(a2), e7 = { lane: d2, action: c, hasEagerState: false, eagerState: null, next: null };
        if (Di(a2))
          Ei(b4, e7);
        else {
          Fi(a2, b4, e7);
          var f3 = a2.alternate;
          if (a2.lanes === 0 && (f3 === null || f3.lanes === 0) && (f3 = b4.lastRenderedReducer, f3 !== null))
            try {
              var g2 = b4.lastRenderedState, h2 = f3(g2, c);
              e7.hasEagerState = true;
              e7.eagerState = h2;
              if (Ge(h2, g2))
                return;
            } catch (k) {
            } finally {
            }
          c = Jg();
          a2 = Lg(a2, d2, c);
          a2 !== null && Gi(a2, b4, d2);
        }
      }
      function Di(a2) {
        var b4 = a2.alternate;
        return a2 === L2 || b4 !== null && b4 === L2;
      }
      function Ei(a2, b4) {
        Qh = Ph = true;
        var c = a2.pending;
        c === null ? b4.next = b4 : (b4.next = c.next, c.next = b4);
        a2.pending = b4;
      }
      function Fi(a2, b4, c) {
        Bg(a2) ? (a2 = b4.interleaved, a2 === null ? (c.next = c, vg === null ? vg = [b4] : vg.push(b4)) : (c.next = a2.next, a2.next = c), b4.interleaved = c) : (a2 = b4.pending, a2 === null ? c.next = c : (c.next = a2.next, a2.next = c), b4.pending = c);
      }
      function Gi(a2, b4, c) {
        if ((c & 4194240) !== 0) {
          var d2 = b4.lanes;
          d2 &= a2.pendingLanes;
          c |= d2;
          b4.lanes = c;
          Bc(a2, c);
        }
      }
      var Yh = { readContext: ug, useCallback: O, useContext: O, useEffect: O, useImperativeHandle: O, useInsertionEffect: O, useLayoutEffect: O, useMemo: O, useReducer: O, useRef: O, useState: O, useDebugValue: O, useDeferredValue: O, useTransition: O, useMutableSource: O, useSyncExternalStore: O, useId: O, unstable_isNewReconciler: false };
      var Vh = {
        readContext: ug, useCallback: function (a2, b4) {
          $h().memoizedState = [a2, b4 === void 0 ? null : b4];
          return a2;
        }, useContext: ug, useEffect: ri, useImperativeHandle: function (a2, b4, c) {
          c = c !== null && c !== void 0 ? c.concat([a2]) : null;
          return pi(4194308, 4, ui.bind(null, b4, a2), c);
        }, useLayoutEffect: function (a2, b4) {
          return pi(4194308, 4, a2, b4);
        }, useInsertionEffect: function (a2, b4) {
          return pi(4, 2, a2, b4);
        }, useMemo: function (a2, b4) {
          var c = $h();
          b4 = b4 === void 0 ? null : b4;
          a2 = a2();
          c.memoizedState = [a2, b4];
          return a2;
        }, useReducer: function (a2, b4, c) {
          var d2 = $h();
          b4 = c !== void 0 ? c(b4) : b4;
          d2.memoizedState = d2.baseState = b4;
          a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a2, lastRenderedState: b4 };
          d2.queue = a2;
          a2 = a2.dispatch = Ci.bind(null, L2, a2);
          return [d2.memoizedState, a2];
        }, useRef: function (a2) {
          var b4 = $h();
          a2 = { current: a2 };
          return b4.memoizedState = a2;
        }, useState: mi, useDebugValue: wi, useDeferredValue: function (a2) {
          return $h().memoizedState = a2;
        }, useTransition: function () {
          var a2 = mi(false), b4 = a2[0];
          a2 = Ai.bind(null, a2[1]);
          $h().memoizedState = a2;
          return [b4, a2];
        }, useMutableSource: function () {
        }, useSyncExternalStore: function (a2, b4, c) {
          var d2 = L2, e7 = $h();
          if (I) {
            if (c === void 0)
              throw Error(p3(407));
            c = c();
          } else {
            c = b4();
            if (P2 === null)
              throw Error(p3(349));
            (Oh & 30) !== 0 || ki(d2, b4, c);
          }
          e7.memoizedState = c;
          var f3 = { value: c, getSnapshot: b4 };
          e7.queue = f3;
          ri(hi.bind(null, d2, f3, a2), [a2]);
          d2.flags |= 2048;
          ii(9, ji.bind(null, d2, f3, c, b4), void 0, null);
          return c;
        }, useId: function () {
          var a2 = $h(), b4 = P2.identifierPrefix;
          if (I) {
            var c = Zg;
            var d2 = Yg;
            c = (d2 & ~(1 << 32 - nc(d2) - 1)).toString(32) + c;
            b4 = ":" + b4 + "R" + c;
            c = Rh++;
            0 < c && (b4 += "H" + c.toString(32));
            b4 += ":";
          } else
            c = Sh++, b4 = ":" + b4 + "r" + c.toString(32) + ":";
          return a2.memoizedState = b4;
        }, unstable_isNewReconciler: false
      };
      var Wh = {
        readContext: ug,
        useCallback: xi,
        useContext: ug,
        useEffect: gi,
        useImperativeHandle: vi,
        useInsertionEffect: si,
        useLayoutEffect: ti,
        useMemo: yi,
        useReducer: ci,
        useRef: oi,
        useState: function () {
          return ci(bi);
        },
        useDebugValue: wi,
        useDeferredValue: function (a2) {
          var b4 = ai();
          return zi(b4, M2.memoizedState, a2);
        },
        useTransition: function () {
          var a2 = ci(bi)[0], b4 = ai().memoizedState;
          return [a2, b4];
        },
        useMutableSource: ei,
        useSyncExternalStore: fi,
        useId: Bi,
        unstable_isNewReconciler: false
      };
      var Xh = {
        readContext: ug, useCallback: xi, useContext: ug, useEffect: gi, useImperativeHandle: vi, useInsertionEffect: si, useLayoutEffect: ti, useMemo: yi, useReducer: di, useRef: oi, useState: function () {
          return di(bi);
        }, useDebugValue: wi, useDeferredValue: function (a2) {
          var b4 = ai();
          return M2 === null ? b4.memoizedState = a2 : zi(b4, M2.memoizedState, a2);
        }, useTransition: function () {
          var a2 = di(bi)[0], b4 = ai().memoizedState;
          return [a2, b4];
        }, useMutableSource: ei, useSyncExternalStore: fi, useId: Bi, unstable_isNewReconciler: false
      };
      function Hi(a2, b4) {
        try {
          var c = "", d2 = b4;
          do
            c += Oa(d2), d2 = d2.return;
          while (d2);
          var e7 = c;
        } catch (f3) {
          e7 = "\nError generating stack: " + f3.message + "\n" + f3.stack;
        }
        return { value: a2, source: b4, stack: e7 };
      }
      function Ii(a2, b4) {
        try {
          console.error(b4.value);
        } catch (c) {
          setTimeout(function () {
            throw c;
          });
        }
      }
      var Ji = typeof WeakMap === "function" ? WeakMap : Map;
      function Ki(a2, b4, c) {
        c = zg(-1, c);
        c.tag = 3;
        c.payload = { element: null };
        var d2 = b4.value;
        c.callback = function () {
          Li || (Li = true, Mi = d2);
          Ii(a2, b4);
        };
        return c;
      }
      function Ni(a2, b4, c) {
        c = zg(-1, c);
        c.tag = 3;
        var d2 = a2.type.getDerivedStateFromError;
        if (typeof d2 === "function") {
          var e7 = b4.value;
          c.payload = function () {
            return d2(e7);
          };
          c.callback = function () {
            Ii(a2, b4);
          };
        }
        var f3 = a2.stateNode;
        f3 !== null && typeof f3.componentDidCatch === "function" && (c.callback = function () {
          Ii(a2, b4);
          typeof d2 !== "function" && (Oi === null ? Oi = new Set([this]) : Oi.add(this));
          var c2 = b4.stack;
          this.componentDidCatch(b4.value, { componentStack: c2 !== null ? c2 : "" });
        });
        return c;
      }
      function Pi(a2, b4, c) {
        var d2 = a2.pingCache;
        if (d2 === null) {
          d2 = a2.pingCache = new Ji();
          var e7 = new Set();
          d2.set(b4, e7);
        } else
          e7 = d2.get(b4), e7 === void 0 && (e7 = new Set(), d2.set(b4, e7));
        e7.has(c) || (e7.add(c), a2 = Qi.bind(null, a2, b4, c), b4.then(a2, a2));
      }
      function Ri(a2) {
        do {
          var b4;
          if (b4 = a2.tag === 13)
            b4 = a2.memoizedState, b4 = b4 !== null ? b4.dehydrated !== null ? true : false : true;
          if (b4)
            return a2;
          a2 = a2.return;
        } while (a2 !== null);
        return null;
      }
      function Si(a2, b4, c, d2, e7) {
        if ((a2.mode & 1) === 0)
          return a2 === b4 ? a2.flags |= 65536 : (a2.flags |= 128, c.flags |= 131072, c.flags &= -52805, c.tag === 1 && (c.alternate === null ? c.tag = 17 : (b4 = zg(-1, 1), b4.tag = 2, Ag(c, b4))), c.lanes |= 1), a2;
        a2.flags |= 65536;
        a2.lanes = e7;
        return a2;
      }
      var Ti;
      var Ui;
      var Vi;
      var Wi;
      Ti = function (a2, b4) {
        for (var c = b4.child; c !== null;) {
          if (c.tag === 5 || c.tag === 6)
            a2.appendChild(c.stateNode);
          else if (c.tag !== 4 && c.child !== null) {
            c.child.return = c;
            c = c.child;
            continue;
          }
          if (c === b4)
            break;
          for (; c.sibling === null;) {
            if (c.return === null || c.return === b4)
              return;
            c = c.return;
          }
          c.sibling.return = c.return;
          c = c.sibling;
        }
      };
      Ui = function () {
      };
      Vi = function (a2, b4, c, d2) {
        var e7 = a2.memoizedProps;
        if (e7 !== d2) {
          a2 = b4.stateNode;
          Eh(Bh.current);
          var f3 = null;
          switch (c) {
            case "input":
              e7 = Xa(a2, e7);
              d2 = Xa(a2, d2);
              f3 = [];
              break;
            case "select":
              e7 = A2({}, e7, { value: void 0 });
              d2 = A2({}, d2, { value: void 0 });
              f3 = [];
              break;
            case "textarea":
              e7 = fb(a2, e7);
              d2 = fb(a2, d2);
              f3 = [];
              break;
            default:
              typeof e7.onClick !== "function" && typeof d2.onClick === "function" && (a2.onclick = Af);
          }
          tb(c, d2);
          var g2;
          c = null;
          for (l4 in e7)
            if (!d2.hasOwnProperty(l4) && e7.hasOwnProperty(l4) && e7[l4] != null)
              if (l4 === "style") {
                var h2 = e7[l4];
                for (g2 in h2)
                  h2.hasOwnProperty(g2) && (c || (c = {}), c[g2] = "");
              } else
                l4 !== "dangerouslySetInnerHTML" && l4 !== "children" && l4 !== "suppressContentEditableWarning" && l4 !== "suppressHydrationWarning" && l4 !== "autoFocus" && (ea.hasOwnProperty(l4) ? f3 || (f3 = []) : (f3 = f3 || []).push(l4, null));
          for (l4 in d2) {
            var k = d2[l4];
            h2 = e7 != null ? e7[l4] : void 0;
            if (d2.hasOwnProperty(l4) && k !== h2 && (k != null || h2 != null))
              if (l4 === "style")
                if (h2) {
                  for (g2 in h2)
                    !h2.hasOwnProperty(g2) || k && k.hasOwnProperty(g2) || (c || (c = {}), c[g2] = "");
                  for (g2 in k)
                    k.hasOwnProperty(g2) && h2[g2] !== k[g2] && (c || (c = {}), c[g2] = k[g2]);
                } else
                  c || (f3 || (f3 = []), f3.push(l4, c)), c = k;
              else
                l4 === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, h2 = h2 ? h2.__html : void 0, k != null && h2 !== k && (f3 = f3 || []).push(l4, k)) : l4 === "children" ? typeof k !== "string" && typeof k !== "number" || (f3 = f3 || []).push(l4, "" + k) : l4 !== "suppressContentEditableWarning" && l4 !== "suppressHydrationWarning" && (ea.hasOwnProperty(l4) ? (k != null && l4 === "onScroll" && D2("scroll", a2), f3 || h2 === k || (f3 = [])) : (f3 = f3 || []).push(l4, k));
          }
          c && (f3 = f3 || []).push("style", c);
          var l4 = f3;
          if (b4.updateQueue = l4)
            b4.flags |= 4;
        }
      };
      Wi = function (a2, b4, c, d2) {
        c !== d2 && (b4.flags |= 4);
      };
      function Xi(a2, b4) {
        if (!I)
          switch (a2.tailMode) {
            case "hidden":
              b4 = a2.tail;
              for (var c = null; b4 !== null;)
                b4.alternate !== null && (c = b4), b4 = b4.sibling;
              c === null ? a2.tail = null : c.sibling = null;
              break;
            case "collapsed":
              c = a2.tail;
              for (var d2 = null; c !== null;)
                c.alternate !== null && (d2 = c), c = c.sibling;
              d2 === null ? b4 || a2.tail === null ? a2.tail = null : a2.tail.sibling = null : d2.sibling = null;
          }
      }
      function Q(a2) {
        var b4 = a2.alternate !== null && a2.alternate.child === a2.child, c = 0, d2 = 0;
        if (b4)
          for (var e7 = a2.child; e7 !== null;)
            c |= e7.lanes | e7.childLanes, d2 |= e7.subtreeFlags & 14680064, d2 |= e7.flags & 14680064, e7.return = a2, e7 = e7.sibling;
        else
          for (e7 = a2.child; e7 !== null;)
            c |= e7.lanes | e7.childLanes, d2 |= e7.subtreeFlags, d2 |= e7.flags, e7.return = a2, e7 = e7.sibling;
        a2.subtreeFlags |= d2;
        a2.childLanes = c;
        return b4;
      }
      function Yi(a2, b4, c) {
        var d2 = b4.pendingProps;
        ch(b4);
        switch (b4.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return Q(b4), null;
          case 1:
            return Yf(b4.type) && Zf(), Q(b4), null;
          case 3:
            d2 = b4.stateNode;
            Gh();
            E2(Vf);
            E2(H);
            Lh();
            d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
            if (a2 === null || a2.child === null)
              mh(b4) ? b4.flags |= 4 : a2 === null || a2.memoizedState.isDehydrated && (b4.flags & 256) === 0 || (b4.flags |= 1024, fh !== null && (Zi(fh), fh = null));
            Ui(a2, b4);
            Q(b4);
            return null;
          case 5:
            Ih(b4);
            var e7 = Eh(Dh.current);
            c = b4.type;
            if (a2 !== null && b4.stateNode != null)
              Vi(a2, b4, c, d2, e7), a2.ref !== b4.ref && (b4.flags |= 512, b4.flags |= 2097152);
            else {
              if (!d2) {
                if (b4.stateNode === null)
                  throw Error(p3(166));
                Q(b4);
                return null;
              }
              a2 = Eh(Bh.current);
              if (mh(b4)) {
                d2 = b4.stateNode;
                c = b4.type;
                var f3 = b4.memoizedProps;
                d2[Nf] = b4;
                d2[Of] = f3;
                a2 = (b4.mode & 1) !== 0;
                switch (c) {
                  case "dialog":
                    D2("cancel", d2);
                    D2("close", d2);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    D2("load", d2);
                    break;
                  case "video":
                  case "audio":
                    for (e7 = 0; e7 < kf.length; e7++)
                      D2(kf[e7], d2);
                    break;
                  case "source":
                    D2("error", d2);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    D2("error", d2);
                    D2("load", d2);
                    break;
                  case "details":
                    D2("toggle", d2);
                    break;
                  case "input":
                    Ya(d2, f3);
                    D2("invalid", d2);
                    break;
                  case "select":
                    d2._wrapperState = { wasMultiple: !!f3.multiple };
                    D2("invalid", d2);
                    break;
                  case "textarea":
                    gb(d2, f3), D2("invalid", d2);
                }
                tb(c, f3);
                e7 = null;
                for (var g2 in f3)
                  if (f3.hasOwnProperty(g2)) {
                    var h2 = f3[g2];
                    g2 === "children" ? typeof h2 === "string" ? d2.textContent !== h2 && (f3.suppressHydrationWarning !== true && zf(d2.textContent, h2, a2), e7 = ["children", h2]) : typeof h2 === "number" && d2.textContent !== "" + h2 && (f3.suppressHydrationWarning !== true && zf(d2.textContent, h2, a2), e7 = ["children", "" + h2]) : ea.hasOwnProperty(g2) && h2 != null && g2 === "onScroll" && D2("scroll", d2);
                  }
                switch (c) {
                  case "input":
                    Ua(d2);
                    cb(d2, f3, true);
                    break;
                  case "textarea":
                    Ua(d2);
                    ib(d2);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    typeof f3.onClick === "function" && (d2.onclick = Af);
                }
                d2 = e7;
                b4.updateQueue = d2;
                d2 !== null && (b4.flags |= 4);
              } else {
                g2 = e7.nodeType === 9 ? e7 : e7.ownerDocument;
                a2 === "http://www.w3.org/1999/xhtml" && (a2 = jb(c));
                a2 === "http://www.w3.org/1999/xhtml" ? c === "script" ? (a2 = g2.createElement("div"), a2.innerHTML = "<script><\/script>", a2 = a2.removeChild(a2.firstChild)) : typeof d2.is === "string" ? a2 = g2.createElement(c, { is: d2.is }) : (a2 = g2.createElement(c), c === "select" && (g2 = a2, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a2 = g2.createElementNS(a2, c);
                a2[Nf] = b4;
                a2[Of] = d2;
                Ti(a2, b4, false, false);
                b4.stateNode = a2;
                a: {
                  g2 = ub(c, d2);
                  switch (c) {
                    case "dialog":
                      D2("cancel", a2);
                      D2("close", a2);
                      e7 = d2;
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      D2("load", a2);
                      e7 = d2;
                      break;
                    case "video":
                    case "audio":
                      for (e7 = 0; e7 < kf.length; e7++)
                        D2(kf[e7], a2);
                      e7 = d2;
                      break;
                    case "source":
                      D2("error", a2);
                      e7 = d2;
                      break;
                    case "img":
                    case "image":
                    case "link":
                      D2("error", a2);
                      D2("load", a2);
                      e7 = d2;
                      break;
                    case "details":
                      D2("toggle", a2);
                      e7 = d2;
                      break;
                    case "input":
                      Ya(a2, d2);
                      e7 = Xa(a2, d2);
                      D2("invalid", a2);
                      break;
                    case "option":
                      e7 = d2;
                      break;
                    case "select":
                      a2._wrapperState = { wasMultiple: !!d2.multiple };
                      e7 = A2({}, d2, { value: void 0 });
                      D2("invalid", a2);
                      break;
                    case "textarea":
                      gb(a2, d2);
                      e7 = fb(a2, d2);
                      D2("invalid", a2);
                      break;
                    default:
                      e7 = d2;
                  }
                  tb(c, e7);
                  h2 = e7;
                  for (f3 in h2)
                    if (h2.hasOwnProperty(f3)) {
                      var k = h2[f3];
                      f3 === "style" ? rb(a2, k) : f3 === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, k != null && mb(a2, k)) : f3 === "children" ? typeof k === "string" ? (c !== "textarea" || k !== "") && nb(a2, k) : typeof k === "number" && nb(a2, "" + k) : f3 !== "suppressContentEditableWarning" && f3 !== "suppressHydrationWarning" && f3 !== "autoFocus" && (ea.hasOwnProperty(f3) ? k != null && f3 === "onScroll" && D2("scroll", a2) : k != null && sa(a2, f3, k, g2));
                    }
                  switch (c) {
                    case "input":
                      Ua(a2);
                      cb(a2, d2, false);
                      break;
                    case "textarea":
                      Ua(a2);
                      ib(a2);
                      break;
                    case "option":
                      d2.value != null && a2.setAttribute("value", "" + Ra(d2.value));
                      break;
                    case "select":
                      a2.multiple = !!d2.multiple;
                      f3 = d2.value;
                      f3 != null ? eb(a2, !!d2.multiple, f3, false) : d2.defaultValue != null && eb(a2, !!d2.multiple, d2.defaultValue, true);
                      break;
                    default:
                      typeof e7.onClick === "function" && (a2.onclick = Af);
                  }
                  switch (c) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      d2 = !!d2.autoFocus;
                      break a;
                    case "img":
                      d2 = true;
                      break a;
                    default:
                      d2 = false;
                  }
                }
                d2 && (b4.flags |= 4);
              }
              b4.ref !== null && (b4.flags |= 512, b4.flags |= 2097152);
            }
            Q(b4);
            return null;
          case 6:
            if (a2 && b4.stateNode != null)
              Wi(a2, b4, a2.memoizedProps, d2);
            else {
              if (typeof d2 !== "string" && b4.stateNode === null)
                throw Error(p3(166));
              c = Eh(Dh.current);
              Eh(Bh.current);
              if (mh(b4)) {
                d2 = b4.stateNode;
                c = b4.memoizedProps;
                d2[Nf] = b4;
                if (f3 = d2.nodeValue !== c) {
                  if (a2 = dh, a2 !== null)
                    switch (a2.tag) {
                      case 3:
                        zf(d2.nodeValue, c, (a2.mode & 1) !== 0);
                        break;
                      case 5:
                        a2.memoizedProps.suppressHydrationWarning !== true && zf(d2.nodeValue, c, (a2.mode & 1) !== 0);
                    }
                }
                f3 && (b4.flags |= 4);
              } else
                d2 = (c.nodeType === 9 ? c : c.ownerDocument).createTextNode(d2), d2[Nf] = b4, b4.stateNode = d2;
            }
            Q(b4);
            return null;
          case 13:
            E2(K2);
            d2 = b4.memoizedState;
            if (I && eh !== null && (b4.mode & 1) !== 0 && (b4.flags & 128) === 0) {
              for (d2 = eh; d2;)
                d2 = Kf(d2.nextSibling);
              nh();
              b4.flags |= 98560;
              return b4;
            }
            if (d2 !== null && d2.dehydrated !== null) {
              d2 = mh(b4);
              if (a2 === null) {
                if (!d2)
                  throw Error(p3(318));
                d2 = b4.memoizedState;
                d2 = d2 !== null ? d2.dehydrated : null;
                if (!d2)
                  throw Error(p3(317));
                d2[Nf] = b4;
              } else
                nh(), (b4.flags & 128) === 0 && (b4.memoizedState = null), b4.flags |= 4;
              Q(b4);
              return null;
            }
            fh !== null && (Zi(fh), fh = null);
            if ((b4.flags & 128) !== 0)
              return b4.lanes = c, b4;
            d2 = d2 !== null;
            c = false;
            a2 === null ? mh(b4) : c = a2.memoizedState !== null;
            d2 !== c && d2 && (b4.child.flags |= 8192, (b4.mode & 1) !== 0 && (a2 === null || (K2.current & 1) !== 0 ? R3 === 0 && (R3 = 3) : $i()));
            b4.updateQueue !== null && (b4.flags |= 4);
            Q(b4);
            return null;
          case 4:
            return Gh(), Ui(a2, b4), a2 === null && rf(b4.stateNode.containerInfo), Q(b4), null;
          case 10:
            return qg(b4.type._context), Q(b4), null;
          case 17:
            return Yf(b4.type) && Zf(), Q(b4), null;
          case 19:
            E2(K2);
            f3 = b4.memoizedState;
            if (f3 === null)
              return Q(b4), null;
            d2 = (b4.flags & 128) !== 0;
            g2 = f3.rendering;
            if (g2 === null)
              if (d2)
                Xi(f3, false);
              else {
                if (R3 !== 0 || a2 !== null && (a2.flags & 128) !== 0)
                  for (a2 = b4.child; a2 !== null;) {
                    g2 = Jh(a2);
                    if (g2 !== null) {
                      b4.flags |= 128;
                      Xi(f3, false);
                      d2 = g2.updateQueue;
                      d2 !== null && (b4.updateQueue = d2, b4.flags |= 4);
                      b4.subtreeFlags = 0;
                      d2 = c;
                      for (c = b4.child; c !== null;)
                        f3 = c, a2 = d2, f3.flags &= 14680066, g2 = f3.alternate, g2 === null ? (f3.childLanes = 0, f3.lanes = a2, f3.child = null, f3.subtreeFlags = 0, f3.memoizedProps = null, f3.memoizedState = null, f3.updateQueue = null, f3.dependencies = null, f3.stateNode = null) : (f3.childLanes = g2.childLanes, f3.lanes = g2.lanes, f3.child = g2.child, f3.subtreeFlags = 0, f3.deletions = null, f3.memoizedProps = g2.memoizedProps, f3.memoizedState = g2.memoizedState, f3.updateQueue = g2.updateQueue, f3.type = g2.type, a2 = g2.dependencies, f3.dependencies = a2 === null ? null : { lanes: a2.lanes, firstContext: a2.firstContext }), c = c.sibling;
                      G2(K2, K2.current & 1 | 2);
                      return b4.child;
                    }
                    a2 = a2.sibling;
                  }
                f3.tail !== null && B2() > aj && (b4.flags |= 128, d2 = true, Xi(f3, false), b4.lanes = 4194304);
              }
            else {
              if (!d2)
                if (a2 = Jh(g2), a2 !== null) {
                  if (b4.flags |= 128, d2 = true, c = a2.updateQueue, c !== null && (b4.updateQueue = c, b4.flags |= 4), Xi(f3, true), f3.tail === null && f3.tailMode === "hidden" && !g2.alternate && !I)
                    return Q(b4), null;
                } else
                  2 * B2() - f3.renderingStartTime > aj && c !== 1073741824 && (b4.flags |= 128, d2 = true, Xi(f3, false), b4.lanes = 4194304);
              f3.isBackwards ? (g2.sibling = b4.child, b4.child = g2) : (c = f3.last, c !== null ? c.sibling = g2 : b4.child = g2, f3.last = g2);
            }
            if (f3.tail !== null)
              return b4 = f3.tail, f3.rendering = b4, f3.tail = b4.sibling, f3.renderingStartTime = B2(), b4.sibling = null, c = K2.current, G2(K2, d2 ? c & 1 | 2 : c & 1), b4;
            Q(b4);
            return null;
          case 22:
          case 23:
            return bj(), d2 = b4.memoizedState !== null, a2 !== null && a2.memoizedState !== null !== d2 && (b4.flags |= 8192), d2 && (b4.mode & 1) !== 0 ? (cj & 1073741824) !== 0 && (Q(b4), b4.subtreeFlags & 6 && (b4.flags |= 8192)) : Q(b4), null;
          case 24:
            return null;
          case 25:
            return null;
        }
        throw Error(p3(156, b4.tag));
      }
      var dj = ta.ReactCurrentOwner;
      var tg = false;
      function ej(a2, b4, c, d2) {
        b4.child = a2 === null ? zh(b4, null, c, d2) : yh(b4, a2.child, c, d2);
      }
      function fj(a2, b4, c, d2, e7) {
        c = c.render;
        var f3 = b4.ref;
        sg(b4, e7);
        d2 = Uh(a2, b4, c, d2, f3, e7);
        c = Zh();
        if (a2 !== null && !tg)
          return b4.updateQueue = a2.updateQueue, b4.flags &= -2053, a2.lanes &= ~e7, gj(a2, b4, e7);
        I && c && bh(b4);
        b4.flags |= 1;
        ej(a2, b4, d2, e7);
        return b4.child;
      }
      function hj(a2, b4, c, d2, e7) {
        if (a2 === null) {
          var f3 = c.type;
          if (typeof f3 === "function" && !ij(f3) && f3.defaultProps === void 0 && c.compare === null && c.defaultProps === void 0)
            return b4.tag = 15, b4.type = f3, jj(a2, b4, f3, d2, e7);
          a2 = vh(c.type, null, d2, b4, b4.mode, e7);
          a2.ref = b4.ref;
          a2.return = b4;
          return b4.child = a2;
        }
        f3 = a2.child;
        if ((a2.lanes & e7) === 0) {
          var g2 = f3.memoizedProps;
          c = c.compare;
          c = c !== null ? c : He;
          if (c(g2, d2) && a2.ref === b4.ref)
            return gj(a2, b4, e7);
        }
        b4.flags |= 1;
        a2 = th(f3, d2);
        a2.ref = b4.ref;
        a2.return = b4;
        return b4.child = a2;
      }
      function jj(a2, b4, c, d2, e7) {
        if (a2 !== null) {
          var f3 = a2.memoizedProps;
          if (He(f3, d2) && a2.ref === b4.ref)
            if (tg = false, b4.pendingProps = d2 = f3, (a2.lanes & e7) !== 0)
              (a2.flags & 131072) !== 0 && (tg = true);
            else
              return b4.lanes = a2.lanes, gj(a2, b4, e7);
        }
        return kj(a2, b4, c, d2, e7);
      }
      function lj(a2, b4, c) {
        var d2 = b4.pendingProps, e7 = d2.children, f3 = a2 !== null ? a2.memoizedState : null;
        if (d2.mode === "hidden")
          if ((b4.mode & 1) === 0)
            b4.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G2(mj, cj), cj |= c;
          else if ((c & 1073741824) !== 0)
            b4.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, d2 = f3 !== null ? f3.baseLanes : c, G2(mj, cj), cj |= d2;
          else
            return a2 = f3 !== null ? f3.baseLanes | c : c, b4.lanes = b4.childLanes = 1073741824, b4.memoizedState = { baseLanes: a2, cachePool: null, transitions: null }, b4.updateQueue = null, G2(mj, cj), cj |= a2, null;
        else
          f3 !== null ? (d2 = f3.baseLanes | c, b4.memoizedState = null) : d2 = c, G2(mj, cj), cj |= d2;
        ej(a2, b4, e7, c);
        return b4.child;
      }
      function nj(a2, b4) {
        var c = b4.ref;
        if (a2 === null && c !== null || a2 !== null && a2.ref !== c)
          b4.flags |= 512, b4.flags |= 2097152;
      }
      function kj(a2, b4, c, d2, e7) {
        var f3 = Yf(c) ? Wf : H.current;
        f3 = Xf(b4, f3);
        sg(b4, e7);
        c = Uh(a2, b4, c, d2, f3, e7);
        d2 = Zh();
        if (a2 !== null && !tg)
          return b4.updateQueue = a2.updateQueue, b4.flags &= -2053, a2.lanes &= ~e7, gj(a2, b4, e7);
        I && d2 && bh(b4);
        b4.flags |= 1;
        ej(a2, b4, c, e7);
        return b4.child;
      }
      function oj(a2, b4, c, d2, e7) {
        if (Yf(c)) {
          var f3 = true;
          bg(b4);
        } else
          f3 = false;
        sg(b4, e7);
        if (b4.stateNode === null)
          a2 !== null && (a2.alternate = null, b4.alternate = null, b4.flags |= 2), Og(b4, c, d2), Qg(b4, c, d2, e7), d2 = true;
        else if (a2 === null) {
          var g2 = b4.stateNode, h2 = b4.memoizedProps;
          g2.props = h2;
          var k = g2.context, l4 = c.contextType;
          typeof l4 === "object" && l4 !== null ? l4 = ug(l4) : (l4 = Yf(c) ? Wf : H.current, l4 = Xf(b4, l4));
          var n2 = c.getDerivedStateFromProps, u2 = typeof n2 === "function" || typeof g2.getSnapshotBeforeUpdate === "function";
          u2 || typeof g2.UNSAFE_componentWillReceiveProps !== "function" && typeof g2.componentWillReceiveProps !== "function" || (h2 !== d2 || k !== l4) && Pg(b4, g2, d2, l4);
          wg = false;
          var q = b4.memoizedState;
          g2.state = q;
          Eg(b4, d2, g2, e7);
          k = b4.memoizedState;
          h2 !== d2 || q !== k || Vf.current || wg ? (typeof n2 === "function" && (Ig(b4, c, n2, d2), k = b4.memoizedState), (h2 = wg || Ng(b4, c, h2, d2, q, k, l4)) ? (u2 || typeof g2.UNSAFE_componentWillMount !== "function" && typeof g2.componentWillMount !== "function" || (typeof g2.componentWillMount === "function" && g2.componentWillMount(), typeof g2.UNSAFE_componentWillMount === "function" && g2.UNSAFE_componentWillMount()), typeof g2.componentDidMount === "function" && (b4.flags |= 4194308)) : (typeof g2.componentDidMount === "function" && (b4.flags |= 4194308), b4.memoizedProps = d2, b4.memoizedState = k), g2.props = d2, g2.state = k, g2.context = l4, d2 = h2) : (typeof g2.componentDidMount === "function" && (b4.flags |= 4194308), d2 = false);
        } else {
          g2 = b4.stateNode;
          yg(a2, b4);
          h2 = b4.memoizedProps;
          l4 = b4.type === b4.elementType ? h2 : kg(b4.type, h2);
          g2.props = l4;
          u2 = b4.pendingProps;
          q = g2.context;
          k = c.contextType;
          typeof k === "object" && k !== null ? k = ug(k) : (k = Yf(c) ? Wf : H.current, k = Xf(b4, k));
          var y2 = c.getDerivedStateFromProps;
          (n2 = typeof y2 === "function" || typeof g2.getSnapshotBeforeUpdate === "function") || typeof g2.UNSAFE_componentWillReceiveProps !== "function" && typeof g2.componentWillReceiveProps !== "function" || (h2 !== u2 || q !== k) && Pg(b4, g2, d2, k);
          wg = false;
          q = b4.memoizedState;
          g2.state = q;
          Eg(b4, d2, g2, e7);
          var m3 = b4.memoizedState;
          h2 !== u2 || q !== m3 || Vf.current || wg ? (typeof y2 === "function" && (Ig(b4, c, y2, d2), m3 = b4.memoizedState), (l4 = wg || Ng(b4, c, l4, d2, q, m3, k) || false) ? (n2 || typeof g2.UNSAFE_componentWillUpdate !== "function" && typeof g2.componentWillUpdate !== "function" || (typeof g2.componentWillUpdate === "function" && g2.componentWillUpdate(d2, m3, k), typeof g2.UNSAFE_componentWillUpdate === "function" && g2.UNSAFE_componentWillUpdate(d2, m3, k)), typeof g2.componentDidUpdate === "function" && (b4.flags |= 4), typeof g2.getSnapshotBeforeUpdate === "function" && (b4.flags |= 1024)) : (typeof g2.componentDidUpdate !== "function" || h2 === a2.memoizedProps && q === a2.memoizedState || (b4.flags |= 4), typeof g2.getSnapshotBeforeUpdate !== "function" || h2 === a2.memoizedProps && q === a2.memoizedState || (b4.flags |= 1024), b4.memoizedProps = d2, b4.memoizedState = m3), g2.props = d2, g2.state = m3, g2.context = k, d2 = l4) : (typeof g2.componentDidUpdate !== "function" || h2 === a2.memoizedProps && q === a2.memoizedState || (b4.flags |= 4), typeof g2.getSnapshotBeforeUpdate !== "function" || h2 === a2.memoizedProps && q === a2.memoizedState || (b4.flags |= 1024), d2 = false);
        }
        return pj(a2, b4, c, d2, f3, e7);
      }
      function pj(a2, b4, c, d2, e7, f3) {
        nj(a2, b4);
        var g2 = (b4.flags & 128) !== 0;
        if (!d2 && !g2)
          return e7 && cg(b4, c, false), gj(a2, b4, f3);
        d2 = b4.stateNode;
        dj.current = b4;
        var h2 = g2 && typeof c.getDerivedStateFromError !== "function" ? null : d2.render();
        b4.flags |= 1;
        a2 !== null && g2 ? (b4.child = yh(b4, a2.child, null, f3), b4.child = yh(b4, null, h2, f3)) : ej(a2, b4, h2, f3);
        b4.memoizedState = d2.state;
        e7 && cg(b4, c, true);
        return b4.child;
      }
      function qj(a2) {
        var b4 = a2.stateNode;
        b4.pendingContext ? $f(a2, b4.pendingContext, b4.pendingContext !== b4.context) : b4.context && $f(a2, b4.context, false);
        Fh(a2, b4.containerInfo);
      }
      function rj(a2, b4, c, d2, e7) {
        nh();
        oh(e7);
        b4.flags |= 256;
        ej(a2, b4, c, d2);
        return b4.child;
      }
      var sj = { dehydrated: null, treeContext: null, retryLane: 0 };
      function tj(a2) {
        return { baseLanes: a2, cachePool: null, transitions: null };
      }
      function uj(a2, b4) {
        return { baseLanes: a2.baseLanes | b4, cachePool: null, transitions: a2.transitions };
      }
      function vj(a2, b4, c) {
        var d2 = b4.pendingProps, e7 = K2.current, f3 = false, g2 = (b4.flags & 128) !== 0, h2;
        (h2 = g2) || (h2 = a2 !== null && a2.memoizedState === null ? false : (e7 & 2) !== 0);
        if (h2)
          f3 = true, b4.flags &= -129;
        else if (a2 === null || a2.memoizedState !== null)
          e7 |= 1;
        G2(K2, e7 & 1);
        if (a2 === null) {
          kh(b4);
          a2 = b4.memoizedState;
          if (a2 !== null && (a2 = a2.dehydrated, a2 !== null))
            return (b4.mode & 1) === 0 ? b4.lanes = 1 : a2.data === "$!" ? b4.lanes = 8 : b4.lanes = 1073741824, null;
          e7 = d2.children;
          a2 = d2.fallback;
          return f3 ? (d2 = b4.mode, f3 = b4.child, e7 = { mode: "hidden", children: e7 }, (d2 & 1) === 0 && f3 !== null ? (f3.childLanes = 0, f3.pendingProps = e7) : f3 = wj(e7, d2, 0, null), a2 = xh(a2, d2, c, null), f3.return = b4, a2.return = b4, f3.sibling = a2, b4.child = f3, b4.child.memoizedState = tj(c), b4.memoizedState = sj, a2) : xj(b4, e7);
        }
        e7 = a2.memoizedState;
        if (e7 !== null) {
          h2 = e7.dehydrated;
          if (h2 !== null) {
            if (g2) {
              if (b4.flags & 256)
                return b4.flags &= -257, yj(a2, b4, c, Error(p3(422)));
              if (b4.memoizedState !== null)
                return b4.child = a2.child, b4.flags |= 128, null;
              f3 = d2.fallback;
              e7 = b4.mode;
              d2 = wj({ mode: "visible", children: d2.children }, e7, 0, null);
              f3 = xh(f3, e7, c, null);
              f3.flags |= 2;
              d2.return = b4;
              f3.return = b4;
              d2.sibling = f3;
              b4.child = d2;
              (b4.mode & 1) !== 0 && yh(b4, a2.child, null, c);
              b4.child.memoizedState = tj(c);
              b4.memoizedState = sj;
              return f3;
            }
            if ((b4.mode & 1) === 0)
              b4 = yj(a2, b4, c, null);
            else if (h2.data === "$!")
              b4 = yj(a2, b4, c, Error(p3(419)));
            else if (d2 = (c & a2.childLanes) !== 0, tg || d2) {
              d2 = P2;
              if (d2 !== null) {
                switch (c & -c) {
                  case 4:
                    f3 = 2;
                    break;
                  case 16:
                    f3 = 8;
                    break;
                  case 64:
                  case 128:
                  case 256:
                  case 512:
                  case 1024:
                  case 2048:
                  case 4096:
                  case 8192:
                  case 16384:
                  case 32768:
                  case 65536:
                  case 131072:
                  case 262144:
                  case 524288:
                  case 1048576:
                  case 2097152:
                  case 4194304:
                  case 8388608:
                  case 16777216:
                  case 33554432:
                  case 67108864:
                    f3 = 32;
                    break;
                  case 536870912:
                    f3 = 268435456;
                    break;
                  default:
                    f3 = 0;
                }
                d2 = (f3 & (d2.suspendedLanes | c)) !== 0 ? 0 : f3;
                d2 !== 0 && d2 !== e7.retryLane && (e7.retryLane = d2, Lg(a2, d2, -1));
              }
              $i();
              b4 = yj(a2, b4, c, Error(p3(421)));
            } else
              h2.data === "$?" ? (b4.flags |= 128, b4.child = a2.child, b4 = zj.bind(null, a2), h2._reactRetry = b4, b4 = null) : (c = e7.treeContext, eh = Kf(h2.nextSibling), dh = b4, I = true, fh = null, c !== null && (Vg[Wg++] = Yg, Vg[Wg++] = Zg, Vg[Wg++] = Xg, Yg = c.id, Zg = c.overflow, Xg = b4), b4 = xj(b4, b4.pendingProps.children), b4.flags |= 4096);
            return b4;
          }
          if (f3)
            return d2 = Aj(a2, b4, d2.children, d2.fallback, c), f3 = b4.child, e7 = a2.child.memoizedState, f3.memoizedState = e7 === null ? tj(c) : uj(e7, c), f3.childLanes = a2.childLanes & ~c, b4.memoizedState = sj, d2;
          c = Bj(a2, b4, d2.children, c);
          b4.memoizedState = null;
          return c;
        }
        if (f3)
          return d2 = Aj(a2, b4, d2.children, d2.fallback, c), f3 = b4.child, e7 = a2.child.memoizedState, f3.memoizedState = e7 === null ? tj(c) : uj(e7, c), f3.childLanes = a2.childLanes & ~c, b4.memoizedState = sj, d2;
        c = Bj(a2, b4, d2.children, c);
        b4.memoizedState = null;
        return c;
      }
      function xj(a2, b4) {
        b4 = wj({ mode: "visible", children: b4 }, a2.mode, 0, null);
        b4.return = a2;
        return a2.child = b4;
      }
      function Bj(a2, b4, c, d2) {
        var e7 = a2.child;
        a2 = e7.sibling;
        c = th(e7, { mode: "visible", children: c });
        (b4.mode & 1) === 0 && (c.lanes = d2);
        c.return = b4;
        c.sibling = null;
        a2 !== null && (d2 = b4.deletions, d2 === null ? (b4.deletions = [a2], b4.flags |= 16) : d2.push(a2));
        return b4.child = c;
      }
      function Aj(a2, b4, c, d2, e7) {
        var f3 = b4.mode;
        a2 = a2.child;
        var g2 = a2.sibling, h2 = { mode: "hidden", children: c };
        (f3 & 1) === 0 && b4.child !== a2 ? (c = b4.child, c.childLanes = 0, c.pendingProps = h2, b4.deletions = null) : (c = th(a2, h2), c.subtreeFlags = a2.subtreeFlags & 14680064);
        g2 !== null ? d2 = th(g2, d2) : (d2 = xh(d2, f3, e7, null), d2.flags |= 2);
        d2.return = b4;
        c.return = b4;
        c.sibling = d2;
        b4.child = c;
        return d2;
      }
      function yj(a2, b4, c, d2) {
        d2 !== null && oh(d2);
        yh(b4, a2.child, null, c);
        a2 = xj(b4, b4.pendingProps.children);
        a2.flags |= 2;
        b4.memoizedState = null;
        return a2;
      }
      function Cj(a2, b4, c) {
        a2.lanes |= b4;
        var d2 = a2.alternate;
        d2 !== null && (d2.lanes |= b4);
        rg(a2.return, b4, c);
      }
      function Dj(a2, b4, c, d2, e7) {
        var f3 = a2.memoizedState;
        f3 === null ? a2.memoizedState = { isBackwards: b4, rendering: null, renderingStartTime: 0, last: d2, tail: c, tailMode: e7 } : (f3.isBackwards = b4, f3.rendering = null, f3.renderingStartTime = 0, f3.last = d2, f3.tail = c, f3.tailMode = e7);
      }
      function Ej(a2, b4, c) {
        var d2 = b4.pendingProps, e7 = d2.revealOrder, f3 = d2.tail;
        ej(a2, b4, d2.children, c);
        d2 = K2.current;
        if ((d2 & 2) !== 0)
          d2 = d2 & 1 | 2, b4.flags |= 128;
        else {
          if (a2 !== null && (a2.flags & 128) !== 0)
            a:
            for (a2 = b4.child; a2 !== null;) {
              if (a2.tag === 13)
                a2.memoizedState !== null && Cj(a2, c, b4);
              else if (a2.tag === 19)
                Cj(a2, c, b4);
              else if (a2.child !== null) {
                a2.child.return = a2;
                a2 = a2.child;
                continue;
              }
              if (a2 === b4)
                break a;
              for (; a2.sibling === null;) {
                if (a2.return === null || a2.return === b4)
                  break a;
                a2 = a2.return;
              }
              a2.sibling.return = a2.return;
              a2 = a2.sibling;
            }
          d2 &= 1;
        }
        G2(K2, d2);
        if ((b4.mode & 1) === 0)
          b4.memoizedState = null;
        else
          switch (e7) {
            case "forwards":
              c = b4.child;
              for (e7 = null; c !== null;)
                a2 = c.alternate, a2 !== null && Jh(a2) === null && (e7 = c), c = c.sibling;
              c = e7;
              c === null ? (e7 = b4.child, b4.child = null) : (e7 = c.sibling, c.sibling = null);
              Dj(b4, false, e7, c, f3);
              break;
            case "backwards":
              c = null;
              e7 = b4.child;
              for (b4.child = null; e7 !== null;) {
                a2 = e7.alternate;
                if (a2 !== null && Jh(a2) === null) {
                  b4.child = e7;
                  break;
                }
                a2 = e7.sibling;
                e7.sibling = c;
                c = e7;
                e7 = a2;
              }
              Dj(b4, true, c, null, f3);
              break;
            case "together":
              Dj(b4, false, null, null, void 0);
              break;
            default:
              b4.memoizedState = null;
          }
        return b4.child;
      }
      function gj(a2, b4, c) {
        a2 !== null && (b4.dependencies = a2.dependencies);
        Fg |= b4.lanes;
        if ((c & b4.childLanes) === 0)
          return null;
        if (a2 !== null && b4.child !== a2.child)
          throw Error(p3(153));
        if (b4.child !== null) {
          a2 = b4.child;
          c = th(a2, a2.pendingProps);
          b4.child = c;
          for (c.return = b4; a2.sibling !== null;)
            a2 = a2.sibling, c = c.sibling = th(a2, a2.pendingProps), c.return = b4;
          c.sibling = null;
        }
        return b4.child;
      }
      function Fj(a2, b4, c) {
        switch (b4.tag) {
          case 3:
            qj(b4);
            nh();
            break;
          case 5:
            Hh(b4);
            break;
          case 1:
            Yf(b4.type) && bg(b4);
            break;
          case 4:
            Fh(b4, b4.stateNode.containerInfo);
            break;
          case 10:
            var d2 = b4.type._context, e7 = b4.memoizedProps.value;
            G2(lg, d2._currentValue);
            d2._currentValue = e7;
            break;
          case 13:
            d2 = b4.memoizedState;
            if (d2 !== null) {
              if (d2.dehydrated !== null)
                return G2(K2, K2.current & 1), b4.flags |= 128, null;
              if ((c & b4.child.childLanes) !== 0)
                return vj(a2, b4, c);
              G2(K2, K2.current & 1);
              a2 = gj(a2, b4, c);
              return a2 !== null ? a2.sibling : null;
            }
            G2(K2, K2.current & 1);
            break;
          case 19:
            d2 = (c & b4.childLanes) !== 0;
            if ((a2.flags & 128) !== 0) {
              if (d2)
                return Ej(a2, b4, c);
              b4.flags |= 128;
            }
            e7 = b4.memoizedState;
            e7 !== null && (e7.rendering = null, e7.tail = null, e7.lastEffect = null);
            G2(K2, K2.current);
            if (d2)
              break;
            else
              return null;
          case 22:
          case 23:
            return b4.lanes = 0, lj(a2, b4, c);
        }
        return gj(a2, b4, c);
      }
      function Gj(a2, b4) {
        ch(b4);
        switch (b4.tag) {
          case 1:
            return Yf(b4.type) && Zf(), a2 = b4.flags, a2 & 65536 ? (b4.flags = a2 & -65537 | 128, b4) : null;
          case 3:
            return Gh(), E2(Vf), E2(H), Lh(), a2 = b4.flags, (a2 & 65536) !== 0 && (a2 & 128) === 0 ? (b4.flags = a2 & -65537 | 128, b4) : null;
          case 5:
            return Ih(b4), null;
          case 13:
            E2(K2);
            a2 = b4.memoizedState;
            if (a2 !== null && a2.dehydrated !== null) {
              if (b4.alternate === null)
                throw Error(p3(340));
              nh();
            }
            a2 = b4.flags;
            return a2 & 65536 ? (b4.flags = a2 & -65537 | 128, b4) : null;
          case 19:
            return E2(K2), null;
          case 4:
            return Gh(), null;
          case 10:
            return qg(b4.type._context), null;
          case 22:
          case 23:
            return bj(), null;
          case 24:
            return null;
          default:
            return null;
        }
      }
      var Hj = false;
      var S2 = false;
      var Ij = typeof WeakSet === "function" ? WeakSet : Set;
      var T = null;
      function Jj(a2, b4) {
        var c = a2.ref;
        if (c !== null)
          if (typeof c === "function")
            try {
              c(null);
            } catch (d2) {
              U(a2, b4, d2);
            }
          else
            c.current = null;
      }
      function Kj(a2, b4, c) {
        try {
          c();
        } catch (d2) {
          U(a2, b4, d2);
        }
      }
      var Lj = false;
      function Mj(a2, b4) {
        Bf = cd;
        a2 = Le();
        if (Me(a2)) {
          if ("selectionStart" in a2)
            var c = { start: a2.selectionStart, end: a2.selectionEnd };
          else
            a: {
              c = (c = a2.ownerDocument) && c.defaultView || window;
              var d2 = c.getSelection && c.getSelection();
              if (d2 && d2.rangeCount !== 0) {
                c = d2.anchorNode;
                var e7 = d2.anchorOffset, f3 = d2.focusNode;
                d2 = d2.focusOffset;
                try {
                  c.nodeType, f3.nodeType;
                } catch (Z) {
                  c = null;
                  break a;
                }
                var g2 = 0, h2 = -1, k = -1, l4 = 0, n2 = 0, u2 = a2, q = null;
                b:
                for (; ;) {
                  for (var y2; ;) {
                    u2 !== c || e7 !== 0 && u2.nodeType !== 3 || (h2 = g2 + e7);
                    u2 !== f3 || d2 !== 0 && u2.nodeType !== 3 || (k = g2 + d2);
                    u2.nodeType === 3 && (g2 += u2.nodeValue.length);
                    if ((y2 = u2.firstChild) === null)
                      break;
                    q = u2;
                    u2 = y2;
                  }
                  for (; ;) {
                    if (u2 === a2)
                      break b;
                    q === c && ++l4 === e7 && (h2 = g2);
                    q === f3 && ++n2 === d2 && (k = g2);
                    if ((y2 = u2.nextSibling) !== null)
                      break;
                    u2 = q;
                    q = u2.parentNode;
                  }
                  u2 = y2;
                }
                c = h2 === -1 || k === -1 ? null : { start: h2, end: k };
              } else
                c = null;
            }
          c = c || { start: 0, end: 0 };
        } else
          c = null;
        Cf = { focusedElem: a2, selectionRange: c };
        cd = false;
        for (T = b4; T !== null;)
          if (b4 = T, a2 = b4.child, (b4.subtreeFlags & 1028) !== 0 && a2 !== null)
            a2.return = b4, T = a2;
          else
            for (; T !== null;) {
              b4 = T;
              try {
                var m3 = b4.alternate;
                if ((b4.flags & 1024) !== 0)
                  switch (b4.tag) {
                    case 0:
                    case 11:
                    case 15:
                      break;
                    case 1:
                      if (m3 !== null) {
                        var w2 = m3.memoizedProps, J = m3.memoizedState, v2 = b4.stateNode, x2 = v2.getSnapshotBeforeUpdate(b4.elementType === b4.type ? w2 : kg(b4.type, w2), J);
                        v2.__reactInternalSnapshotBeforeUpdate = x2;
                      }
                      break;
                    case 3:
                      var r4 = b4.stateNode.containerInfo;
                      if (r4.nodeType === 1)
                        r4.textContent = "";
                      else if (r4.nodeType === 9) {
                        var F = r4.body;
                        F != null && (F.textContent = "");
                      }
                      break;
                    case 5:
                    case 6:
                    case 4:
                    case 17:
                      break;
                    default:
                      throw Error(p3(163));
                  }
              } catch (Z) {
                U(b4, b4.return, Z);
              }
              a2 = b4.sibling;
              if (a2 !== null) {
                a2.return = b4.return;
                T = a2;
                break;
              }
              T = b4.return;
            }
        m3 = Lj;
        Lj = false;
        return m3;
      }
      function Nj(a2, b4, c) {
        var d2 = b4.updateQueue;
        d2 = d2 !== null ? d2.lastEffect : null;
        if (d2 !== null) {
          var e7 = d2 = d2.next;
          do {
            if ((e7.tag & a2) === a2) {
              var f3 = e7.destroy;
              e7.destroy = void 0;
              f3 !== void 0 && Kj(b4, c, f3);
            }
            e7 = e7.next;
          } while (e7 !== d2);
        }
      }
      function Oj(a2, b4) {
        b4 = b4.updateQueue;
        b4 = b4 !== null ? b4.lastEffect : null;
        if (b4 !== null) {
          var c = b4 = b4.next;
          do {
            if ((c.tag & a2) === a2) {
              var d2 = c.create;
              c.destroy = d2();
            }
            c = c.next;
          } while (c !== b4);
        }
      }
      function Pj(a2) {
        var b4 = a2.ref;
        if (b4 !== null) {
          var c = a2.stateNode;
          switch (a2.tag) {
            case 5:
              a2 = c;
              break;
            default:
              a2 = c;
          }
          typeof b4 === "function" ? b4(a2) : b4.current = a2;
        }
      }
      function Qj(a2) {
        var b4 = a2.alternate;
        b4 !== null && (a2.alternate = null, Qj(b4));
        a2.child = null;
        a2.deletions = null;
        a2.sibling = null;
        a2.tag === 5 && (b4 = a2.stateNode, b4 !== null && (delete b4[Nf], delete b4[Of], delete b4[nf], delete b4[Pf], delete b4[Qf]));
        a2.stateNode = null;
        a2.return = null;
        a2.dependencies = null;
        a2.memoizedProps = null;
        a2.memoizedState = null;
        a2.pendingProps = null;
        a2.stateNode = null;
        a2.updateQueue = null;
      }
      function Rj(a2) {
        return a2.tag === 5 || a2.tag === 3 || a2.tag === 4;
      }
      function Sj(a2) {
        a:
        for (; ;) {
          for (; a2.sibling === null;) {
            if (a2.return === null || Rj(a2.return))
              return null;
            a2 = a2.return;
          }
          a2.sibling.return = a2.return;
          for (a2 = a2.sibling; a2.tag !== 5 && a2.tag !== 6 && a2.tag !== 18;) {
            if (a2.flags & 2)
              continue a;
            if (a2.child === null || a2.tag === 4)
              continue a;
            else
              a2.child.return = a2, a2 = a2.child;
          }
          if (!(a2.flags & 2))
            return a2.stateNode;
        }
      }
      function Tj(a2, b4, c) {
        var d2 = a2.tag;
        if (d2 === 5 || d2 === 6)
          a2 = a2.stateNode, b4 ? c.nodeType === 8 ? c.parentNode.insertBefore(a2, b4) : c.insertBefore(a2, b4) : (c.nodeType === 8 ? (b4 = c.parentNode, b4.insertBefore(a2, c)) : (b4 = c, b4.appendChild(a2)), c = c._reactRootContainer, c !== null && c !== void 0 || b4.onclick !== null || (b4.onclick = Af));
        else if (d2 !== 4 && (a2 = a2.child, a2 !== null))
          for (Tj(a2, b4, c), a2 = a2.sibling; a2 !== null;)
            Tj(a2, b4, c), a2 = a2.sibling;
      }
      function Uj(a2, b4, c) {
        var d2 = a2.tag;
        if (d2 === 5 || d2 === 6)
          a2 = a2.stateNode, b4 ? c.insertBefore(a2, b4) : c.appendChild(a2);
        else if (d2 !== 4 && (a2 = a2.child, a2 !== null))
          for (Uj(a2, b4, c), a2 = a2.sibling; a2 !== null;)
            Uj(a2, b4, c), a2 = a2.sibling;
      }
      var V3 = null;
      var Vj = false;
      function Wj(a2, b4, c) {
        for (c = c.child; c !== null;)
          Xj(a2, b4, c), c = c.sibling;
      }
      function Xj(a2, b4, c) {
        if (kc && typeof kc.onCommitFiberUnmount === "function")
          try {
            kc.onCommitFiberUnmount(jc, c);
          } catch (h2) {
          }
        switch (c.tag) {
          case 5:
            S2 || Jj(c, b4);
          case 6:
            var d2 = V3, e7 = Vj;
            V3 = null;
            Wj(a2, b4, c);
            V3 = d2;
            Vj = e7;
            V3 !== null && (Vj ? (a2 = V3, c = c.stateNode, a2.nodeType === 8 ? a2.parentNode.removeChild(c) : a2.removeChild(c)) : V3.removeChild(c.stateNode));
            break;
          case 18:
            V3 !== null && (Vj ? (a2 = V3, c = c.stateNode, a2.nodeType === 8 ? Jf(a2.parentNode, c) : a2.nodeType === 1 && Jf(a2, c), ad(a2)) : Jf(V3, c.stateNode));
            break;
          case 4:
            d2 = V3;
            e7 = Vj;
            V3 = c.stateNode.containerInfo;
            Vj = true;
            Wj(a2, b4, c);
            V3 = d2;
            Vj = e7;
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            if (!S2 && (d2 = c.updateQueue, d2 !== null && (d2 = d2.lastEffect, d2 !== null))) {
              e7 = d2 = d2.next;
              do {
                var f3 = e7, g2 = f3.destroy;
                f3 = f3.tag;
                g2 !== void 0 && ((f3 & 2) !== 0 ? Kj(c, b4, g2) : (f3 & 4) !== 0 && Kj(c, b4, g2));
                e7 = e7.next;
              } while (e7 !== d2);
            }
            Wj(a2, b4, c);
            break;
          case 1:
            if (!S2 && (Jj(c, b4), d2 = c.stateNode, typeof d2.componentWillUnmount === "function"))
              try {
                d2.props = c.memoizedProps, d2.state = c.memoizedState, d2.componentWillUnmount();
              } catch (h2) {
                U(c, b4, h2);
              }
            Wj(a2, b4, c);
            break;
          case 21:
            Wj(a2, b4, c);
            break;
          case 22:
            c.mode & 1 ? (S2 = (d2 = S2) || c.memoizedState !== null, Wj(a2, b4, c), S2 = d2) : Wj(a2, b4, c);
            break;
          default:
            Wj(a2, b4, c);
        }
      }
      function Yj(a2) {
        var b4 = a2.updateQueue;
        if (b4 !== null) {
          a2.updateQueue = null;
          var c = a2.stateNode;
          c === null && (c = a2.stateNode = new Ij());
          b4.forEach(function (b5) {
            var d2 = Zj.bind(null, a2, b5);
            c.has(b5) || (c.add(b5), b5.then(d2, d2));
          });
        }
      }
      function ak(a2, b4) {
        var c = b4.deletions;
        if (c !== null)
          for (var d2 = 0; d2 < c.length; d2++) {
            var e7 = c[d2];
            try {
              var f3 = a2, g2 = b4, h2 = g2;
              a:
              for (; h2 !== null;) {
                switch (h2.tag) {
                  case 5:
                    V3 = h2.stateNode;
                    Vj = false;
                    break a;
                  case 3:
                    V3 = h2.stateNode.containerInfo;
                    Vj = true;
                    break a;
                  case 4:
                    V3 = h2.stateNode.containerInfo;
                    Vj = true;
                    break a;
                }
                h2 = h2.return;
              }
              if (V3 === null)
                throw Error(p3(160));
              Xj(f3, g2, e7);
              V3 = null;
              Vj = false;
              var k = e7.alternate;
              k !== null && (k.return = null);
              e7.return = null;
            } catch (l4) {
              U(e7, b4, l4);
            }
          }
        if (b4.subtreeFlags & 12854)
          for (b4 = b4.child; b4 !== null;)
            bk(b4, a2), b4 = b4.sibling;
      }
      function bk(a2, b4) {
        var c = a2.alternate, d2 = a2.flags;
        switch (a2.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            ak(b4, a2);
            ck(a2);
            if (d2 & 4) {
              try {
                Nj(3, a2, a2.return), Oj(3, a2);
              } catch (m3) {
                U(a2, a2.return, m3);
              }
              try {
                Nj(5, a2, a2.return);
              } catch (m3) {
                U(a2, a2.return, m3);
              }
            }
            break;
          case 1:
            ak(b4, a2);
            ck(a2);
            d2 & 512 && c !== null && Jj(c, c.return);
            break;
          case 5:
            ak(b4, a2);
            ck(a2);
            d2 & 512 && c !== null && Jj(c, c.return);
            if (a2.flags & 32) {
              var e7 = a2.stateNode;
              try {
                nb(e7, "");
              } catch (m3) {
                U(a2, a2.return, m3);
              }
            }
            if (d2 & 4 && (e7 = a2.stateNode, e7 != null)) {
              var f3 = a2.memoizedProps, g2 = c !== null ? c.memoizedProps : f3, h2 = a2.type, k = a2.updateQueue;
              a2.updateQueue = null;
              if (k !== null)
                try {
                  h2 === "input" && f3.type === "radio" && f3.name != null && Za(e7, f3);
                  ub(h2, g2);
                  var l4 = ub(h2, f3);
                  for (g2 = 0; g2 < k.length; g2 += 2) {
                    var n2 = k[g2], u2 = k[g2 + 1];
                    n2 === "style" ? rb(e7, u2) : n2 === "dangerouslySetInnerHTML" ? mb(e7, u2) : n2 === "children" ? nb(e7, u2) : sa(e7, n2, u2, l4);
                  }
                  switch (h2) {
                    case "input":
                      $a(e7, f3);
                      break;
                    case "textarea":
                      hb(e7, f3);
                      break;
                    case "select":
                      var q = e7._wrapperState.wasMultiple;
                      e7._wrapperState.wasMultiple = !!f3.multiple;
                      var y2 = f3.value;
                      y2 != null ? eb(e7, !!f3.multiple, y2, false) : q !== !!f3.multiple && (f3.defaultValue != null ? eb(e7, !!f3.multiple, f3.defaultValue, true) : eb(e7, !!f3.multiple, f3.multiple ? [] : "", false));
                  }
                  e7[Of] = f3;
                } catch (m3) {
                  U(a2, a2.return, m3);
                }
            }
            break;
          case 6:
            ak(b4, a2);
            ck(a2);
            if (d2 & 4) {
              if (a2.stateNode === null)
                throw Error(p3(162));
              l4 = a2.stateNode;
              n2 = a2.memoizedProps;
              try {
                l4.nodeValue = n2;
              } catch (m3) {
                U(a2, a2.return, m3);
              }
            }
            break;
          case 3:
            ak(b4, a2);
            ck(a2);
            if (d2 & 4 && c !== null && c.memoizedState.isDehydrated)
              try {
                ad(b4.containerInfo);
              } catch (m3) {
                U(a2, a2.return, m3);
              }
            break;
          case 4:
            ak(b4, a2);
            ck(a2);
            break;
          case 13:
            ak(b4, a2);
            ck(a2);
            l4 = a2.child;
            l4.flags & 8192 && l4.memoizedState !== null && (l4.alternate === null || l4.alternate.memoizedState === null) && (dk = B2());
            d2 & 4 && Yj(a2);
            break;
          case 22:
            l4 = c !== null && c.memoizedState !== null;
            a2.mode & 1 ? (S2 = (n2 = S2) || l4, ak(b4, a2), S2 = n2) : ak(b4, a2);
            ck(a2);
            if (d2 & 8192) {
              n2 = a2.memoizedState !== null;
              a:
              for (u2 = null, q = a2; ;) {
                if (q.tag === 5) {
                  if (u2 === null) {
                    u2 = q;
                    try {
                      e7 = q.stateNode, n2 ? (f3 = e7.style, typeof f3.setProperty === "function" ? f3.setProperty("display", "none", "important") : f3.display = "none") : (h2 = q.stateNode, k = q.memoizedProps.style, g2 = k !== void 0 && k !== null && k.hasOwnProperty("display") ? k.display : null, h2.style.display = qb("display", g2));
                    } catch (m3) {
                      U(a2, a2.return, m3);
                    }
                  }
                } else if (q.tag === 6) {
                  if (u2 === null)
                    try {
                      q.stateNode.nodeValue = n2 ? "" : q.memoizedProps;
                    } catch (m3) {
                      U(a2, a2.return, m3);
                    }
                } else if ((q.tag !== 22 && q.tag !== 23 || q.memoizedState === null || q === a2) && q.child !== null) {
                  q.child.return = q;
                  q = q.child;
                  continue;
                }
                if (q === a2)
                  break a;
                for (; q.sibling === null;) {
                  if (q.return === null || q.return === a2)
                    break a;
                  u2 === q && (u2 = null);
                  q = q.return;
                }
                u2 === q && (u2 = null);
                q.sibling.return = q.return;
                q = q.sibling;
              }
              if (n2 && !l4 && (a2.mode & 1) !== 0)
                for (T = a2, a2 = a2.child; a2 !== null;) {
                  for (l4 = T = a2; T !== null;) {
                    n2 = T;
                    u2 = n2.child;
                    switch (n2.tag) {
                      case 0:
                      case 11:
                      case 14:
                      case 15:
                        Nj(4, n2, n2.return);
                        break;
                      case 1:
                        Jj(n2, n2.return);
                        f3 = n2.stateNode;
                        if (typeof f3.componentWillUnmount === "function") {
                          q = n2;
                          y2 = n2.return;
                          try {
                            e7 = q, f3.props = e7.memoizedProps, f3.state = e7.memoizedState, f3.componentWillUnmount();
                          } catch (m3) {
                            U(q, y2, m3);
                          }
                        }
                        break;
                      case 5:
                        Jj(n2, n2.return);
                        break;
                      case 22:
                        if (n2.memoizedState !== null) {
                          ek(l4);
                          continue;
                        }
                    }
                    u2 !== null ? (u2.return = n2, T = u2) : ek(l4);
                  }
                  a2 = a2.sibling;
                }
            }
            break;
          case 19:
            ak(b4, a2);
            ck(a2);
            d2 & 4 && Yj(a2);
            break;
          case 21:
            break;
          default:
            ak(b4, a2), ck(a2);
        }
      }
      function ck(a2) {
        var b4 = a2.flags;
        if (b4 & 2) {
          try {
            a: {
              for (var c = a2.return; c !== null;) {
                if (Rj(c)) {
                  var d2 = c;
                  break a;
                }
                c = c.return;
              }
              throw Error(p3(160));
            }
            switch (d2.tag) {
              case 5:
                var e7 = d2.stateNode;
                d2.flags & 32 && (nb(e7, ""), d2.flags &= -33);
                var f3 = Sj(a2);
                Uj(a2, f3, e7);
                break;
              case 3:
              case 4:
                var g2 = d2.stateNode.containerInfo, h2 = Sj(a2);
                Tj(a2, h2, g2);
                break;
              default:
                throw Error(p3(161));
            }
          } catch (k) {
            U(a2, a2.return, k);
          }
          a2.flags &= -3;
        }
        b4 & 4096 && (a2.flags &= -4097);
      }
      function fk(a2, b4, c) {
        T = a2;
        gk(a2, b4, c);
      }
      function gk(a2, b4, c) {
        for (var d2 = (a2.mode & 1) !== 0; T !== null;) {
          var e7 = T, f3 = e7.child;
          if (e7.tag === 22 && d2) {
            var g2 = e7.memoizedState !== null || Hj;
            if (!g2) {
              var h2 = e7.alternate, k = h2 !== null && h2.memoizedState !== null || S2;
              h2 = Hj;
              var l4 = S2;
              Hj = g2;
              if ((S2 = k) && !l4)
                for (T = e7; T !== null;)
                  g2 = T, k = g2.child, g2.tag === 22 && g2.memoizedState !== null ? hk(e7) : k !== null ? (k.return = g2, T = k) : hk(e7);
              for (; f3 !== null;)
                T = f3, gk(f3, b4, c), f3 = f3.sibling;
              T = e7;
              Hj = h2;
              S2 = l4;
            }
            ik(a2, b4, c);
          } else
            (e7.subtreeFlags & 8772) !== 0 && f3 !== null ? (f3.return = e7, T = f3) : ik(a2, b4, c);
        }
      }
      function ik(a2) {
        for (; T !== null;) {
          var b4 = T;
          if ((b4.flags & 8772) !== 0) {
            var c = b4.alternate;
            try {
              if ((b4.flags & 8772) !== 0)
                switch (b4.tag) {
                  case 0:
                  case 11:
                  case 15:
                    S2 || Oj(5, b4);
                    break;
                  case 1:
                    var d2 = b4.stateNode;
                    if (b4.flags & 4 && !S2)
                      if (c === null)
                        d2.componentDidMount();
                      else {
                        var e7 = b4.elementType === b4.type ? c.memoizedProps : kg(b4.type, c.memoizedProps);
                        d2.componentDidUpdate(e7, c.memoizedState, d2.__reactInternalSnapshotBeforeUpdate);
                      }
                    var f3 = b4.updateQueue;
                    f3 !== null && Gg(b4, f3, d2);
                    break;
                  case 3:
                    var g2 = b4.updateQueue;
                    if (g2 !== null) {
                      c = null;
                      if (b4.child !== null)
                        switch (b4.child.tag) {
                          case 5:
                            c = b4.child.stateNode;
                            break;
                          case 1:
                            c = b4.child.stateNode;
                        }
                      Gg(b4, g2, c);
                    }
                    break;
                  case 5:
                    var h2 = b4.stateNode;
                    if (c === null && b4.flags & 4) {
                      c = h2;
                      var k = b4.memoizedProps;
                      switch (b4.type) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                          k.autoFocus && c.focus();
                          break;
                        case "img":
                          k.src && (c.src = k.src);
                      }
                    }
                    break;
                  case 6:
                    break;
                  case 4:
                    break;
                  case 12:
                    break;
                  case 13:
                    if (b4.memoizedState === null) {
                      var l4 = b4.alternate;
                      if (l4 !== null) {
                        var n2 = l4.memoizedState;
                        if (n2 !== null) {
                          var u2 = n2.dehydrated;
                          u2 !== null && ad(u2);
                        }
                      }
                    }
                    break;
                  case 19:
                  case 17:
                  case 21:
                  case 22:
                  case 23:
                    break;
                  default:
                    throw Error(p3(163));
                }
              S2 || b4.flags & 512 && Pj(b4);
            } catch (q) {
              U(b4, b4.return, q);
            }
          }
          if (b4 === a2) {
            T = null;
            break;
          }
          c = b4.sibling;
          if (c !== null) {
            c.return = b4.return;
            T = c;
            break;
          }
          T = b4.return;
        }
      }
      function ek(a2) {
        for (; T !== null;) {
          var b4 = T;
          if (b4 === a2) {
            T = null;
            break;
          }
          var c = b4.sibling;
          if (c !== null) {
            c.return = b4.return;
            T = c;
            break;
          }
          T = b4.return;
        }
      }
      function hk(a2) {
        for (; T !== null;) {
          var b4 = T;
          try {
            switch (b4.tag) {
              case 0:
              case 11:
              case 15:
                var c = b4.return;
                try {
                  Oj(4, b4);
                } catch (k) {
                  U(b4, c, k);
                }
                break;
              case 1:
                var d2 = b4.stateNode;
                if (typeof d2.componentDidMount === "function") {
                  var e7 = b4.return;
                  try {
                    d2.componentDidMount();
                  } catch (k) {
                    U(b4, e7, k);
                  }
                }
                var f3 = b4.return;
                try {
                  Pj(b4);
                } catch (k) {
                  U(b4, f3, k);
                }
                break;
              case 5:
                var g2 = b4.return;
                try {
                  Pj(b4);
                } catch (k) {
                  U(b4, g2, k);
                }
            }
          } catch (k) {
            U(b4, b4.return, k);
          }
          if (b4 === a2) {
            T = null;
            break;
          }
          var h2 = b4.sibling;
          if (h2 !== null) {
            h2.return = b4.return;
            T = h2;
            break;
          }
          T = b4.return;
        }
      }
      var jk = Math.ceil;
      var kk = ta.ReactCurrentDispatcher;
      var lk = ta.ReactCurrentOwner;
      var mk = ta.ReactCurrentBatchConfig;
      var W = 0;
      var P2 = null;
      var X = null;
      var Y = 0;
      var cj = 0;
      var mj = Tf(0);
      var R3 = 0;
      var nk = null;
      var Fg = 0;
      var ok = 0;
      var pk = 0;
      var qk = null;
      var rk = null;
      var dk = 0;
      var aj = Infinity;
      var sk = null;
      var Li = false;
      var Mi = null;
      var Oi = null;
      var tk = false;
      var uk = null;
      var vk = 0;
      var wk = 0;
      var xk = null;
      var yk = -1;
      var zk = 0;
      function Jg() {
        return (W & 6) !== 0 ? B2() : yk !== -1 ? yk : yk = B2();
      }
      function Kg(a2) {
        if ((a2.mode & 1) === 0)
          return 1;
        if ((W & 2) !== 0 && Y !== 0)
          return Y & -Y;
        if (jg.transition !== null)
          return zk === 0 && (zk = xc()), zk;
        a2 = C3;
        if (a2 !== 0)
          return a2;
        a2 = window.event;
        a2 = a2 === void 0 ? 16 : id(a2.type);
        return a2;
      }
      function Lg(a2, b4, c) {
        if (50 < wk)
          throw wk = 0, xk = null, Error(p3(185));
        var d2 = Ak(a2, b4);
        if (d2 === null)
          return null;
        zc(d2, b4, c);
        if ((W & 2) === 0 || d2 !== P2)
          d2 === P2 && ((W & 2) === 0 && (ok |= b4), R3 === 4 && Bk(d2, Y)), Ck(d2, c), b4 === 1 && W === 0 && (a2.mode & 1) === 0 && (aj = B2() + 500, eg && ig());
        return d2;
      }
      function Ak(a2, b4) {
        a2.lanes |= b4;
        var c = a2.alternate;
        c !== null && (c.lanes |= b4);
        c = a2;
        for (a2 = a2.return; a2 !== null;)
          a2.childLanes |= b4, c = a2.alternate, c !== null && (c.childLanes |= b4), c = a2, a2 = a2.return;
        return c.tag === 3 ? c.stateNode : null;
      }
      function Bg(a2) {
        return (P2 !== null || vg !== null) && (a2.mode & 1) !== 0 && (W & 2) === 0;
      }
      function Ck(a2, b4) {
        var c = a2.callbackNode;
        vc(a2, b4);
        var d2 = tc(a2, a2 === P2 ? Y : 0);
        if (d2 === 0)
          c !== null && ac(c), a2.callbackNode = null, a2.callbackPriority = 0;
        else if (b4 = d2 & -d2, a2.callbackPriority !== b4) {
          c != null && ac(c);
          if (b4 === 1)
            a2.tag === 0 ? hg(Dk.bind(null, a2)) : gg(Dk.bind(null, a2)), If(function () {
              W === 0 && ig();
            }), c = null;
          else {
            switch (Cc(d2)) {
              case 1:
                c = ec;
                break;
              case 4:
                c = fc;
                break;
              case 16:
                c = gc;
                break;
              case 536870912:
                c = ic;
                break;
              default:
                c = gc;
            }
            c = Ek(c, Fk.bind(null, a2));
          }
          a2.callbackPriority = b4;
          a2.callbackNode = c;
        }
      }
      function Fk(a2, b4) {
        yk = -1;
        zk = 0;
        if ((W & 6) !== 0)
          throw Error(p3(327));
        var c = a2.callbackNode;
        if (Gk() && a2.callbackNode !== c)
          return null;
        var d2 = tc(a2, a2 === P2 ? Y : 0);
        if (d2 === 0)
          return null;
        if ((d2 & 30) !== 0 || (d2 & a2.expiredLanes) !== 0 || b4)
          b4 = Hk(a2, d2);
        else {
          b4 = d2;
          var e7 = W;
          W |= 2;
          var f3 = Ik();
          if (P2 !== a2 || Y !== b4)
            sk = null, aj = B2() + 500, Jk(a2, b4);
          do
            try {
              Kk();
              break;
            } catch (h2) {
              Lk(a2, h2);
            }
          while (1);
          pg();
          kk.current = f3;
          W = e7;
          X !== null ? b4 = 0 : (P2 = null, Y = 0, b4 = R3);
        }
        if (b4 !== 0) {
          b4 === 2 && (e7 = wc(a2), e7 !== 0 && (d2 = e7, b4 = Mk(a2, e7)));
          if (b4 === 1)
            throw c = nk, Jk(a2, 0), Bk(a2, d2), Ck(a2, B2()), c;
          if (b4 === 6)
            Bk(a2, d2);
          else {
            e7 = a2.current.alternate;
            if ((d2 & 30) === 0 && !Nk(e7) && (b4 = Hk(a2, d2), b4 === 2 && (f3 = wc(a2), f3 !== 0 && (d2 = f3, b4 = Mk(a2, f3))), b4 === 1))
              throw c = nk, Jk(a2, 0), Bk(a2, d2), Ck(a2, B2()), c;
            a2.finishedWork = e7;
            a2.finishedLanes = d2;
            switch (b4) {
              case 0:
              case 1:
                throw Error(p3(345));
              case 2:
                Ok(a2, rk, sk);
                break;
              case 3:
                Bk(a2, d2);
                if ((d2 & 130023424) === d2 && (b4 = dk + 500 - B2(), 10 < b4)) {
                  if (tc(a2, 0) !== 0)
                    break;
                  e7 = a2.suspendedLanes;
                  if ((e7 & d2) !== d2) {
                    Jg();
                    a2.pingedLanes |= a2.suspendedLanes & e7;
                    break;
                  }
                  a2.timeoutHandle = Ef(Ok.bind(null, a2, rk, sk), b4);
                  break;
                }
                Ok(a2, rk, sk);
                break;
              case 4:
                Bk(a2, d2);
                if ((d2 & 4194240) === d2)
                  break;
                b4 = a2.eventTimes;
                for (e7 = -1; 0 < d2;) {
                  var g2 = 31 - nc(d2);
                  f3 = 1 << g2;
                  g2 = b4[g2];
                  g2 > e7 && (e7 = g2);
                  d2 &= ~f3;
                }
                d2 = e7;
                d2 = B2() - d2;
                d2 = (120 > d2 ? 120 : 480 > d2 ? 480 : 1080 > d2 ? 1080 : 1920 > d2 ? 1920 : 3e3 > d2 ? 3e3 : 4320 > d2 ? 4320 : 1960 * jk(d2 / 1960)) - d2;
                if (10 < d2) {
                  a2.timeoutHandle = Ef(Ok.bind(null, a2, rk, sk), d2);
                  break;
                }
                Ok(a2, rk, sk);
                break;
              case 5:
                Ok(a2, rk, sk);
                break;
              default:
                throw Error(p3(329));
            }
          }
        }
        Ck(a2, B2());
        return a2.callbackNode === c ? Fk.bind(null, a2) : null;
      }
      function Mk(a2, b4) {
        var c = qk;
        a2.current.memoizedState.isDehydrated && (Jk(a2, b4).flags |= 256);
        a2 = Hk(a2, b4);
        a2 !== 2 && (b4 = rk, rk = c, b4 !== null && Zi(b4));
        return a2;
      }
      function Zi(a2) {
        rk === null ? rk = a2 : rk.push.apply(rk, a2);
      }
      function Nk(a2) {
        for (var b4 = a2; ;) {
          if (b4.flags & 16384) {
            var c = b4.updateQueue;
            if (c !== null && (c = c.stores, c !== null))
              for (var d2 = 0; d2 < c.length; d2++) {
                var e7 = c[d2], f3 = e7.getSnapshot;
                e7 = e7.value;
                try {
                  if (!Ge(f3(), e7))
                    return false;
                } catch (g2) {
                  return false;
                }
              }
          }
          c = b4.child;
          if (b4.subtreeFlags & 16384 && c !== null)
            c.return = b4, b4 = c;
          else {
            if (b4 === a2)
              break;
            for (; b4.sibling === null;) {
              if (b4.return === null || b4.return === a2)
                return true;
              b4 = b4.return;
            }
            b4.sibling.return = b4.return;
            b4 = b4.sibling;
          }
        }
        return true;
      }
      function Bk(a2, b4) {
        b4 &= ~pk;
        b4 &= ~ok;
        a2.suspendedLanes |= b4;
        a2.pingedLanes &= ~b4;
        for (a2 = a2.expirationTimes; 0 < b4;) {
          var c = 31 - nc(b4), d2 = 1 << c;
          a2[c] = -1;
          b4 &= ~d2;
        }
      }
      function Dk(a2) {
        if ((W & 6) !== 0)
          throw Error(p3(327));
        Gk();
        var b4 = tc(a2, 0);
        if ((b4 & 1) === 0)
          return Ck(a2, B2()), null;
        var c = Hk(a2, b4);
        if (a2.tag !== 0 && c === 2) {
          var d2 = wc(a2);
          d2 !== 0 && (b4 = d2, c = Mk(a2, d2));
        }
        if (c === 1)
          throw c = nk, Jk(a2, 0), Bk(a2, b4), Ck(a2, B2()), c;
        if (c === 6)
          throw Error(p3(345));
        a2.finishedWork = a2.current.alternate;
        a2.finishedLanes = b4;
        Ok(a2, rk, sk);
        Ck(a2, B2());
        return null;
      }
      function Pk(a2, b4) {
        var c = W;
        W |= 1;
        try {
          return a2(b4);
        } finally {
          W = c, W === 0 && (aj = B2() + 500, eg && ig());
        }
      }
      function Qk(a2) {
        uk !== null && uk.tag === 0 && (W & 6) === 0 && Gk();
        var b4 = W;
        W |= 1;
        var c = mk.transition, d2 = C3;
        try {
          if (mk.transition = null, C3 = 1, a2)
            return a2();
        } finally {
          C3 = d2, mk.transition = c, W = b4, (W & 6) === 0 && ig();
        }
      }
      function bj() {
        cj = mj.current;
        E2(mj);
      }
      function Jk(a2, b4) {
        a2.finishedWork = null;
        a2.finishedLanes = 0;
        var c = a2.timeoutHandle;
        c !== -1 && (a2.timeoutHandle = -1, Ff(c));
        if (X !== null)
          for (c = X.return; c !== null;) {
            var d2 = c;
            ch(d2);
            switch (d2.tag) {
              case 1:
                d2 = d2.type.childContextTypes;
                d2 !== null && d2 !== void 0 && Zf();
                break;
              case 3:
                Gh();
                E2(Vf);
                E2(H);
                Lh();
                break;
              case 5:
                Ih(d2);
                break;
              case 4:
                Gh();
                break;
              case 13:
                E2(K2);
                break;
              case 19:
                E2(K2);
                break;
              case 10:
                qg(d2.type._context);
                break;
              case 22:
              case 23:
                bj();
            }
            c = c.return;
          }
        P2 = a2;
        X = a2 = th(a2.current, null);
        Y = cj = b4;
        R3 = 0;
        nk = null;
        pk = ok = Fg = 0;
        rk = qk = null;
        if (vg !== null) {
          for (b4 = 0; b4 < vg.length; b4++)
            if (c = vg[b4], d2 = c.interleaved, d2 !== null) {
              c.interleaved = null;
              var e7 = d2.next, f3 = c.pending;
              if (f3 !== null) {
                var g2 = f3.next;
                f3.next = e7;
                d2.next = g2;
              }
              c.pending = d2;
            }
          vg = null;
        }
        return a2;
      }
      function Lk(a2, b4) {
        do {
          var c = X;
          try {
            pg();
            Mh.current = Yh;
            if (Ph) {
              for (var d2 = L2.memoizedState; d2 !== null;) {
                var e7 = d2.queue;
                e7 !== null && (e7.pending = null);
                d2 = d2.next;
              }
              Ph = false;
            }
            Oh = 0;
            N = M2 = L2 = null;
            Qh = false;
            Rh = 0;
            lk.current = null;
            if (c === null || c.return === null) {
              R3 = 1;
              nk = b4;
              X = null;
              break;
            }
            a: {
              var f3 = a2, g2 = c.return, h2 = c, k = b4;
              b4 = Y;
              h2.flags |= 32768;
              if (k !== null && typeof k === "object" && typeof k.then === "function") {
                var l4 = k, n2 = h2, u2 = n2.tag;
                if ((n2.mode & 1) === 0 && (u2 === 0 || u2 === 11 || u2 === 15)) {
                  var q = n2.alternate;
                  q ? (n2.updateQueue = q.updateQueue, n2.memoizedState = q.memoizedState, n2.lanes = q.lanes) : (n2.updateQueue = null, n2.memoizedState = null);
                }
                var y2 = Ri(g2);
                if (y2 !== null) {
                  y2.flags &= -257;
                  Si(y2, g2, h2, f3, b4);
                  y2.mode & 1 && Pi(f3, l4, b4);
                  b4 = y2;
                  k = l4;
                  var m3 = b4.updateQueue;
                  if (m3 === null) {
                    var w2 = new Set();
                    w2.add(k);
                    b4.updateQueue = w2;
                  } else
                    m3.add(k);
                  break a;
                } else {
                  if ((b4 & 1) === 0) {
                    Pi(f3, l4, b4);
                    $i();
                    break a;
                  }
                  k = Error(p3(426));
                }
              } else if (I && h2.mode & 1) {
                var J = Ri(g2);
                if (J !== null) {
                  (J.flags & 65536) === 0 && (J.flags |= 256);
                  Si(J, g2, h2, f3, b4);
                  oh(k);
                  break a;
                }
              }
              f3 = k;
              R3 !== 4 && (R3 = 2);
              qk === null ? qk = [f3] : qk.push(f3);
              k = Hi(k, h2);
              h2 = g2;
              do {
                switch (h2.tag) {
                  case 3:
                    h2.flags |= 65536;
                    b4 &= -b4;
                    h2.lanes |= b4;
                    var v2 = Ki(h2, k, b4);
                    Dg(h2, v2);
                    break a;
                  case 1:
                    f3 = k;
                    var x2 = h2.type, r4 = h2.stateNode;
                    if ((h2.flags & 128) === 0 && (typeof x2.getDerivedStateFromError === "function" || r4 !== null && typeof r4.componentDidCatch === "function" && (Oi === null || !Oi.has(r4)))) {
                      h2.flags |= 65536;
                      b4 &= -b4;
                      h2.lanes |= b4;
                      var F = Ni(h2, f3, b4);
                      Dg(h2, F);
                      break a;
                    }
                }
                h2 = h2.return;
              } while (h2 !== null);
            }
            Rk(c);
          } catch (Z) {
            b4 = Z;
            X === c && c !== null && (X = c = c.return);
            continue;
          }
          break;
        } while (1);
      }
      function Ik() {
        var a2 = kk.current;
        kk.current = Yh;
        return a2 === null ? Yh : a2;
      }
      function $i() {
        if (R3 === 0 || R3 === 3 || R3 === 2)
          R3 = 4;
        P2 === null || (Fg & 268435455) === 0 && (ok & 268435455) === 0 || Bk(P2, Y);
      }
      function Hk(a2, b4) {
        var c = W;
        W |= 2;
        var d2 = Ik();
        if (P2 !== a2 || Y !== b4)
          sk = null, Jk(a2, b4);
        do
          try {
            Sk();
            break;
          } catch (e7) {
            Lk(a2, e7);
          }
        while (1);
        pg();
        W = c;
        kk.current = d2;
        if (X !== null)
          throw Error(p3(261));
        P2 = null;
        Y = 0;
        return R3;
      }
      function Sk() {
        for (; X !== null;)
          Tk(X);
      }
      function Kk() {
        for (; X !== null && !bc();)
          Tk(X);
      }
      function Tk(a2) {
        var b4 = Uk(a2.alternate, a2, cj);
        a2.memoizedProps = a2.pendingProps;
        b4 === null ? Rk(a2) : X = b4;
        lk.current = null;
      }
      function Rk(a2) {
        var b4 = a2;
        do {
          var c = b4.alternate;
          a2 = b4.return;
          if ((b4.flags & 32768) === 0) {
            if (c = Yi(c, b4, cj), c !== null) {
              X = c;
              return;
            }
          } else {
            c = Gj(c, b4);
            if (c !== null) {
              c.flags &= 32767;
              X = c;
              return;
            }
            if (a2 !== null)
              a2.flags |= 32768, a2.subtreeFlags = 0, a2.deletions = null;
            else {
              R3 = 6;
              X = null;
              return;
            }
          }
          b4 = b4.sibling;
          if (b4 !== null) {
            X = b4;
            return;
          }
          X = b4 = a2;
        } while (b4 !== null);
        R3 === 0 && (R3 = 5);
      }
      function Ok(a2, b4, c) {
        var d2 = C3, e7 = mk.transition;
        try {
          mk.transition = null, C3 = 1, Vk(a2, b4, c, d2);
        } finally {
          mk.transition = e7, C3 = d2;
        }
        return null;
      }
      function Vk(a2, b4, c, d2) {
        do
          Gk();
        while (uk !== null);
        if ((W & 6) !== 0)
          throw Error(p3(327));
        c = a2.finishedWork;
        var e7 = a2.finishedLanes;
        if (c === null)
          return null;
        a2.finishedWork = null;
        a2.finishedLanes = 0;
        if (c === a2.current)
          throw Error(p3(177));
        a2.callbackNode = null;
        a2.callbackPriority = 0;
        var f3 = c.lanes | c.childLanes;
        Ac(a2, f3);
        a2 === P2 && (X = P2 = null, Y = 0);
        (c.subtreeFlags & 2064) === 0 && (c.flags & 2064) === 0 || tk || (tk = true, Ek(gc, function () {
          Gk();
          return null;
        }));
        f3 = (c.flags & 15990) !== 0;
        if ((c.subtreeFlags & 15990) !== 0 || f3) {
          f3 = mk.transition;
          mk.transition = null;
          var g2 = C3;
          C3 = 1;
          var h2 = W;
          W |= 4;
          lk.current = null;
          Mj(a2, c);
          bk(c, a2);
          Ne(Cf);
          cd = !!Bf;
          Cf = Bf = null;
          a2.current = c;
          fk(c, a2, e7);
          cc();
          W = h2;
          C3 = g2;
          mk.transition = f3;
        } else
          a2.current = c;
        tk && (tk = false, uk = a2, vk = e7);
        f3 = a2.pendingLanes;
        f3 === 0 && (Oi = null);
        lc(c.stateNode, d2);
        Ck(a2, B2());
        if (b4 !== null)
          for (d2 = a2.onRecoverableError, c = 0; c < b4.length; c++)
            d2(b4[c]);
        if (Li)
          throw Li = false, a2 = Mi, Mi = null, a2;
        (vk & 1) !== 0 && a2.tag !== 0 && Gk();
        f3 = a2.pendingLanes;
        (f3 & 1) !== 0 ? a2 === xk ? wk++ : (wk = 0, xk = a2) : wk = 0;
        ig();
        return null;
      }
      function Gk() {
        if (uk !== null) {
          var a2 = Cc(vk), b4 = mk.transition, c = C3;
          try {
            mk.transition = null;
            C3 = 16 > a2 ? 16 : a2;
            if (uk === null)
              var d2 = false;
            else {
              a2 = uk;
              uk = null;
              vk = 0;
              if ((W & 6) !== 0)
                throw Error(p3(331));
              var e7 = W;
              W |= 4;
              for (T = a2.current; T !== null;) {
                var f3 = T, g2 = f3.child;
                if ((T.flags & 16) !== 0) {
                  var h2 = f3.deletions;
                  if (h2 !== null) {
                    for (var k = 0; k < h2.length; k++) {
                      var l4 = h2[k];
                      for (T = l4; T !== null;) {
                        var n2 = T;
                        switch (n2.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Nj(8, n2, f3);
                        }
                        var u2 = n2.child;
                        if (u2 !== null)
                          u2.return = n2, T = u2;
                        else
                          for (; T !== null;) {
                            n2 = T;
                            var q = n2.sibling, y2 = n2.return;
                            Qj(n2);
                            if (n2 === l4) {
                              T = null;
                              break;
                            }
                            if (q !== null) {
                              q.return = y2;
                              T = q;
                              break;
                            }
                            T = y2;
                          }
                      }
                    }
                    var m3 = f3.alternate;
                    if (m3 !== null) {
                      var w2 = m3.child;
                      if (w2 !== null) {
                        m3.child = null;
                        do {
                          var J = w2.sibling;
                          w2.sibling = null;
                          w2 = J;
                        } while (w2 !== null);
                      }
                    }
                    T = f3;
                  }
                }
                if ((f3.subtreeFlags & 2064) !== 0 && g2 !== null)
                  g2.return = f3, T = g2;
                else
                  b:
                  for (; T !== null;) {
                    f3 = T;
                    if ((f3.flags & 2048) !== 0)
                      switch (f3.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Nj(9, f3, f3.return);
                      }
                    var v2 = f3.sibling;
                    if (v2 !== null) {
                      v2.return = f3.return;
                      T = v2;
                      break b;
                    }
                    T = f3.return;
                  }
              }
              var x2 = a2.current;
              for (T = x2; T !== null;) {
                g2 = T;
                var r4 = g2.child;
                if ((g2.subtreeFlags & 2064) !== 0 && r4 !== null)
                  r4.return = g2, T = r4;
                else
                  b:
                  for (g2 = x2; T !== null;) {
                    h2 = T;
                    if ((h2.flags & 2048) !== 0)
                      try {
                        switch (h2.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Oj(9, h2);
                        }
                      } catch (Z) {
                        U(h2, h2.return, Z);
                      }
                    if (h2 === g2) {
                      T = null;
                      break b;
                    }
                    var F = h2.sibling;
                    if (F !== null) {
                      F.return = h2.return;
                      T = F;
                      break b;
                    }
                    T = h2.return;
                  }
              }
              W = e7;
              ig();
              if (kc && typeof kc.onPostCommitFiberRoot === "function")
                try {
                  kc.onPostCommitFiberRoot(jc, a2);
                } catch (Z) {
                }
              d2 = true;
            }
            return d2;
          } finally {
            C3 = c, mk.transition = b4;
          }
        }
        return false;
      }
      function Wk(a2, b4, c) {
        b4 = Hi(c, b4);
        b4 = Ki(a2, b4, 1);
        Ag(a2, b4);
        b4 = Jg();
        a2 = Ak(a2, 1);
        a2 !== null && (zc(a2, 1, b4), Ck(a2, b4));
      }
      function U(a2, b4, c) {
        if (a2.tag === 3)
          Wk(a2, a2, c);
        else
          for (; b4 !== null;) {
            if (b4.tag === 3) {
              Wk(b4, a2, c);
              break;
            } else if (b4.tag === 1) {
              var d2 = b4.stateNode;
              if (typeof b4.type.getDerivedStateFromError === "function" || typeof d2.componentDidCatch === "function" && (Oi === null || !Oi.has(d2))) {
                a2 = Hi(c, a2);
                a2 = Ni(b4, a2, 1);
                Ag(b4, a2);
                a2 = Jg();
                b4 = Ak(b4, 1);
                b4 !== null && (zc(b4, 1, a2), Ck(b4, a2));
                break;
              }
            }
            b4 = b4.return;
          }
      }
      function Qi(a2, b4, c) {
        var d2 = a2.pingCache;
        d2 !== null && d2.delete(b4);
        b4 = Jg();
        a2.pingedLanes |= a2.suspendedLanes & c;
        P2 === a2 && (Y & c) === c && (R3 === 4 || R3 === 3 && (Y & 130023424) === Y && 500 > B2() - dk ? Jk(a2, 0) : pk |= c);
        Ck(a2, b4);
      }
      function Xk(a2, b4) {
        b4 === 0 && ((a2.mode & 1) === 0 ? b4 = 1 : (b4 = rc, rc <<= 1, (rc & 130023424) === 0 && (rc = 4194304)));
        var c = Jg();
        a2 = Ak(a2, b4);
        a2 !== null && (zc(a2, b4, c), Ck(a2, c));
      }
      function zj(a2) {
        var b4 = a2.memoizedState, c = 0;
        b4 !== null && (c = b4.retryLane);
        Xk(a2, c);
      }
      function Zj(a2, b4) {
        var c = 0;
        switch (a2.tag) {
          case 13:
            var d2 = a2.stateNode;
            var e7 = a2.memoizedState;
            e7 !== null && (c = e7.retryLane);
            break;
          case 19:
            d2 = a2.stateNode;
            break;
          default:
            throw Error(p3(314));
        }
        d2 !== null && d2.delete(b4);
        Xk(a2, c);
      }
      var Uk;
      Uk = function (a2, b4, c) {
        if (a2 !== null)
          if (a2.memoizedProps !== b4.pendingProps || Vf.current)
            tg = true;
          else {
            if ((a2.lanes & c) === 0 && (b4.flags & 128) === 0)
              return tg = false, Fj(a2, b4, c);
            tg = (a2.flags & 131072) !== 0 ? true : false;
          }
        else
          tg = false, I && (b4.flags & 1048576) !== 0 && ah(b4, Ug, b4.index);
        b4.lanes = 0;
        switch (b4.tag) {
          case 2:
            var d2 = b4.type;
            a2 !== null && (a2.alternate = null, b4.alternate = null, b4.flags |= 2);
            a2 = b4.pendingProps;
            var e7 = Xf(b4, H.current);
            sg(b4, c);
            e7 = Uh(null, b4, d2, a2, e7, c);
            var f3 = Zh();
            b4.flags |= 1;
            typeof e7 === "object" && e7 !== null && typeof e7.render === "function" && e7.$$typeof === void 0 ? (b4.tag = 1, b4.memoizedState = null, b4.updateQueue = null, Yf(d2) ? (f3 = true, bg(b4)) : f3 = false, b4.memoizedState = e7.state !== null && e7.state !== void 0 ? e7.state : null, xg(b4), e7.updater = Mg, b4.stateNode = e7, e7._reactInternals = b4, Qg(b4, d2, a2, c), b4 = pj(null, b4, d2, true, f3, c)) : (b4.tag = 0, I && f3 && bh(b4), ej(null, b4, e7, c), b4 = b4.child);
            return b4;
          case 16:
            d2 = b4.elementType;
            a: {
              a2 !== null && (a2.alternate = null, b4.alternate = null, b4.flags |= 2);
              a2 = b4.pendingProps;
              e7 = d2._init;
              d2 = e7(d2._payload);
              b4.type = d2;
              e7 = b4.tag = Yk(d2);
              a2 = kg(d2, a2);
              switch (e7) {
                case 0:
                  b4 = kj(null, b4, d2, a2, c);
                  break a;
                case 1:
                  b4 = oj(null, b4, d2, a2, c);
                  break a;
                case 11:
                  b4 = fj(null, b4, d2, a2, c);
                  break a;
                case 14:
                  b4 = hj(null, b4, d2, kg(d2.type, a2), c);
                  break a;
              }
              throw Error(p3(306, d2, ""));
            }
            return b4;
          case 0:
            return d2 = b4.type, e7 = b4.pendingProps, e7 = b4.elementType === d2 ? e7 : kg(d2, e7), kj(a2, b4, d2, e7, c);
          case 1:
            return d2 = b4.type, e7 = b4.pendingProps, e7 = b4.elementType === d2 ? e7 : kg(d2, e7), oj(a2, b4, d2, e7, c);
          case 3:
            a: {
              qj(b4);
              if (a2 === null)
                throw Error(p3(387));
              d2 = b4.pendingProps;
              f3 = b4.memoizedState;
              e7 = f3.element;
              yg(a2, b4);
              Eg(b4, d2, null, c);
              var g2 = b4.memoizedState;
              d2 = g2.element;
              if (f3.isDehydrated)
                if (f3 = {
                  element: d2,
                  isDehydrated: false,
                  cache: g2.cache,
                  pendingSuspenseBoundaries: g2.pendingSuspenseBoundaries,
                  transitions: g2.transitions
                }, b4.updateQueue.baseState = f3, b4.memoizedState = f3, b4.flags & 256) {
                  e7 = Error(p3(423));
                  b4 = rj(a2, b4, d2, c, e7);
                  break a;
                } else if (d2 !== e7) {
                  e7 = Error(p3(424));
                  b4 = rj(a2, b4, d2, c, e7);
                  break a;
                } else
                  for (eh = Kf(b4.stateNode.containerInfo.firstChild), dh = b4, I = true, fh = null, c = zh(b4, null, d2, c), b4.child = c; c;)
                    c.flags = c.flags & -3 | 4096, c = c.sibling;
              else {
                nh();
                if (d2 === e7) {
                  b4 = gj(a2, b4, c);
                  break a;
                }
                ej(a2, b4, d2, c);
              }
              b4 = b4.child;
            }
            return b4;
          case 5:
            return Hh(b4), a2 === null && kh(b4), d2 = b4.type, e7 = b4.pendingProps, f3 = a2 !== null ? a2.memoizedProps : null, g2 = e7.children, Df(d2, e7) ? g2 = null : f3 !== null && Df(d2, f3) && (b4.flags |= 32), nj(a2, b4), ej(a2, b4, g2, c), b4.child;
          case 6:
            return a2 === null && kh(b4), null;
          case 13:
            return vj(a2, b4, c);
          case 4:
            return Fh(b4, b4.stateNode.containerInfo), d2 = b4.pendingProps, a2 === null ? b4.child = yh(b4, null, d2, c) : ej(a2, b4, d2, c), b4.child;
          case 11:
            return d2 = b4.type, e7 = b4.pendingProps, e7 = b4.elementType === d2 ? e7 : kg(d2, e7), fj(a2, b4, d2, e7, c);
          case 7:
            return ej(a2, b4, b4.pendingProps, c), b4.child;
          case 8:
            return ej(a2, b4, b4.pendingProps.children, c), b4.child;
          case 12:
            return ej(a2, b4, b4.pendingProps.children, c), b4.child;
          case 10:
            a: {
              d2 = b4.type._context;
              e7 = b4.pendingProps;
              f3 = b4.memoizedProps;
              g2 = e7.value;
              G2(lg, d2._currentValue);
              d2._currentValue = g2;
              if (f3 !== null)
                if (Ge(f3.value, g2)) {
                  if (f3.children === e7.children && !Vf.current) {
                    b4 = gj(a2, b4, c);
                    break a;
                  }
                } else
                  for (f3 = b4.child, f3 !== null && (f3.return = b4); f3 !== null;) {
                    var h2 = f3.dependencies;
                    if (h2 !== null) {
                      g2 = f3.child;
                      for (var k = h2.firstContext; k !== null;) {
                        if (k.context === d2) {
                          if (f3.tag === 1) {
                            k = zg(-1, c & -c);
                            k.tag = 2;
                            var l4 = f3.updateQueue;
                            if (l4 !== null) {
                              l4 = l4.shared;
                              var n2 = l4.pending;
                              n2 === null ? k.next = k : (k.next = n2.next, n2.next = k);
                              l4.pending = k;
                            }
                          }
                          f3.lanes |= c;
                          k = f3.alternate;
                          k !== null && (k.lanes |= c);
                          rg(f3.return, c, b4);
                          h2.lanes |= c;
                          break;
                        }
                        k = k.next;
                      }
                    } else if (f3.tag === 10)
                      g2 = f3.type === b4.type ? null : f3.child;
                    else if (f3.tag === 18) {
                      g2 = f3.return;
                      if (g2 === null)
                        throw Error(p3(341));
                      g2.lanes |= c;
                      h2 = g2.alternate;
                      h2 !== null && (h2.lanes |= c);
                      rg(g2, c, b4);
                      g2 = f3.sibling;
                    } else
                      g2 = f3.child;
                    if (g2 !== null)
                      g2.return = f3;
                    else
                      for (g2 = f3; g2 !== null;) {
                        if (g2 === b4) {
                          g2 = null;
                          break;
                        }
                        f3 = g2.sibling;
                        if (f3 !== null) {
                          f3.return = g2.return;
                          g2 = f3;
                          break;
                        }
                        g2 = g2.return;
                      }
                    f3 = g2;
                  }
              ej(a2, b4, e7.children, c);
              b4 = b4.child;
            }
            return b4;
          case 9:
            return e7 = b4.type, d2 = b4.pendingProps.children, sg(b4, c), e7 = ug(e7), d2 = d2(e7), b4.flags |= 1, ej(a2, b4, d2, c), b4.child;
          case 14:
            return d2 = b4.type, e7 = kg(d2, b4.pendingProps), e7 = kg(d2.type, e7), hj(a2, b4, d2, e7, c);
          case 15:
            return jj(a2, b4, b4.type, b4.pendingProps, c);
          case 17:
            return d2 = b4.type, e7 = b4.pendingProps, e7 = b4.elementType === d2 ? e7 : kg(d2, e7), a2 !== null && (a2.alternate = null, b4.alternate = null, b4.flags |= 2), b4.tag = 1, Yf(d2) ? (a2 = true, bg(b4)) : a2 = false, sg(b4, c), Og(b4, d2, e7), Qg(b4, d2, e7, c), pj(null, b4, d2, true, a2, c);
          case 19:
            return Ej(a2, b4, c);
          case 22:
            return lj(a2, b4, c);
        }
        throw Error(p3(156, b4.tag));
      };
      function Ek(a2, b4) {
        return $b(a2, b4);
      }
      function Zk(a2, b4, c, d2) {
        this.tag = a2;
        this.key = c;
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
        this.index = 0;
        this.ref = null;
        this.pendingProps = b4;
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
        this.mode = d2;
        this.subtreeFlags = this.flags = 0;
        this.deletions = null;
        this.childLanes = this.lanes = 0;
        this.alternate = null;
      }
      function hh(a2, b4, c, d2) {
        return new Zk(a2, b4, c, d2);
      }
      function ij(a2) {
        a2 = a2.prototype;
        return !(!a2 || !a2.isReactComponent);
      }
      function Yk(a2) {
        if (typeof a2 === "function")
          return ij(a2) ? 1 : 0;
        if (a2 !== void 0 && a2 !== null) {
          a2 = a2.$$typeof;
          if (a2 === Ca)
            return 11;
          if (a2 === Fa)
            return 14;
        }
        return 2;
      }
      function th(a2, b4) {
        var c = a2.alternate;
        c === null ? (c = hh(a2.tag, b4, a2.key, a2.mode), c.elementType = a2.elementType, c.type = a2.type, c.stateNode = a2.stateNode, c.alternate = a2, a2.alternate = c) : (c.pendingProps = b4, c.type = a2.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
        c.flags = a2.flags & 14680064;
        c.childLanes = a2.childLanes;
        c.lanes = a2.lanes;
        c.child = a2.child;
        c.memoizedProps = a2.memoizedProps;
        c.memoizedState = a2.memoizedState;
        c.updateQueue = a2.updateQueue;
        b4 = a2.dependencies;
        c.dependencies = b4 === null ? null : { lanes: b4.lanes, firstContext: b4.firstContext };
        c.sibling = a2.sibling;
        c.index = a2.index;
        c.ref = a2.ref;
        return c;
      }
      function vh(a2, b4, c, d2, e7, f3) {
        var g2 = 2;
        d2 = a2;
        if (typeof a2 === "function")
          ij(a2) && (g2 = 1);
        else if (typeof a2 === "string")
          g2 = 5;
        else
          a:
          switch (a2) {
            case wa:
              return xh(c.children, e7, f3, b4);
            case xa:
              g2 = 8;
              e7 |= 8;
              break;
            case za:
              return a2 = hh(12, c, b4, e7 | 2), a2.elementType = za, a2.lanes = f3, a2;
            case Da:
              return a2 = hh(13, c, b4, e7), a2.elementType = Da, a2.lanes = f3, a2;
            case Ea:
              return a2 = hh(19, c, b4, e7), a2.elementType = Ea, a2.lanes = f3, a2;
            case Ha:
              return wj(c, e7, f3, b4);
            default:
              if (typeof a2 === "object" && a2 !== null)
                switch (a2.$$typeof) {
                  case Aa:
                    g2 = 10;
                    break a;
                  case Ba:
                    g2 = 9;
                    break a;
                  case Ca:
                    g2 = 11;
                    break a;
                  case Fa:
                    g2 = 14;
                    break a;
                  case Ga:
                    g2 = 16;
                    d2 = null;
                    break a;
                }
              throw Error(p3(130, a2 == null ? a2 : typeof a2, ""));
          }
        b4 = hh(g2, c, b4, e7);
        b4.elementType = a2;
        b4.type = d2;
        b4.lanes = f3;
        return b4;
      }
      function xh(a2, b4, c, d2) {
        a2 = hh(7, a2, d2, b4);
        a2.lanes = c;
        return a2;
      }
      function wj(a2, b4, c, d2) {
        a2 = hh(22, a2, d2, b4);
        a2.elementType = Ha;
        a2.lanes = c;
        a2.stateNode = {};
        return a2;
      }
      function uh(a2, b4, c) {
        a2 = hh(6, a2, null, b4);
        a2.lanes = c;
        return a2;
      }
      function wh(a2, b4, c) {
        b4 = hh(4, a2.children !== null ? a2.children : [], a2.key, b4);
        b4.lanes = c;
        b4.stateNode = { containerInfo: a2.containerInfo, pendingChildren: null, implementation: a2.implementation };
        return b4;
      }
      function $k(a2, b4, c, d2, e7) {
        this.tag = b4;
        this.containerInfo = a2;
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
        this.timeoutHandle = -1;
        this.callbackNode = this.pendingContext = this.context = null;
        this.callbackPriority = 0;
        this.eventTimes = yc(0);
        this.expirationTimes = yc(-1);
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
        this.entanglements = yc(0);
        this.identifierPrefix = d2;
        this.onRecoverableError = e7;
        this.mutableSourceEagerHydrationData = null;
      }
      function al(a2, b4, c, d2, e7, f3, g2, h2, k) {
        a2 = new $k(a2, b4, c, h2, k);
        b4 === 1 ? (b4 = 1, f3 === true && (b4 |= 8)) : b4 = 0;
        f3 = hh(3, null, null, b4);
        a2.current = f3;
        f3.stateNode = a2;
        f3.memoizedState = { element: d2, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
        xg(f3);
        return a2;
      }
      function bl(a2, b4, c) {
        var d2 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return { $$typeof: va, key: d2 == null ? null : "" + d2, children: a2, containerInfo: b4, implementation: c };
      }
      function cl(a2) {
        if (!a2)
          return Uf;
        a2 = a2._reactInternals;
        a: {
          if (Ub(a2) !== a2 || a2.tag !== 1)
            throw Error(p3(170));
          var b4 = a2;
          do {
            switch (b4.tag) {
              case 3:
                b4 = b4.stateNode.context;
                break a;
              case 1:
                if (Yf(b4.type)) {
                  b4 = b4.stateNode.__reactInternalMemoizedMergedChildContext;
                  break a;
                }
            }
            b4 = b4.return;
          } while (b4 !== null);
          throw Error(p3(171));
        }
        if (a2.tag === 1) {
          var c = a2.type;
          if (Yf(c))
            return ag(a2, c, b4);
        }
        return b4;
      }
      function dl(a2, b4, c, d2, e7, f3, g2, h2, k) {
        a2 = al(c, d2, true, a2, e7, f3, g2, h2, k);
        a2.context = cl(null);
        c = a2.current;
        d2 = Jg();
        e7 = Kg(c);
        f3 = zg(d2, e7);
        f3.callback = b4 !== void 0 && b4 !== null ? b4 : null;
        Ag(c, f3);
        a2.current.lanes = e7;
        zc(a2, e7, d2);
        Ck(a2, d2);
        return a2;
      }
      function el(a2, b4, c, d2) {
        var e7 = b4.current, f3 = Jg(), g2 = Kg(e7);
        c = cl(c);
        b4.context === null ? b4.context = c : b4.pendingContext = c;
        b4 = zg(f3, g2);
        b4.payload = { element: a2 };
        d2 = d2 === void 0 ? null : d2;
        d2 !== null && (b4.callback = d2);
        Ag(e7, b4);
        a2 = Lg(e7, g2, f3);
        a2 !== null && Cg(a2, e7, g2);
        return g2;
      }
      function fl(a2) {
        a2 = a2.current;
        if (!a2.child)
          return null;
        switch (a2.child.tag) {
          case 5:
            return a2.child.stateNode;
          default:
            return a2.child.stateNode;
        }
      }
      function gl(a2, b4) {
        a2 = a2.memoizedState;
        if (a2 !== null && a2.dehydrated !== null) {
          var c = a2.retryLane;
          a2.retryLane = c !== 0 && c < b4 ? c : b4;
        }
      }
      function hl(a2, b4) {
        gl(a2, b4);
        (a2 = a2.alternate) && gl(a2, b4);
      }
      function il() {
        return null;
      }
      var jl = typeof reportError === "function" ? reportError : function (a2) {
        console.error(a2);
      };
      function kl(a2) {
        this._internalRoot = a2;
      }
      ll.prototype.render = kl.prototype.render = function (a2) {
        var b4 = this._internalRoot;
        if (b4 === null)
          throw Error(p3(409));
        el(a2, b4, null, null);
      };
      ll.prototype.unmount = kl.prototype.unmount = function () {
        var a2 = this._internalRoot;
        if (a2 !== null) {
          this._internalRoot = null;
          var b4 = a2.containerInfo;
          Qk(function () {
            el(null, a2, null, null);
          });
          b4[tf] = null;
        }
      };
      function ll(a2) {
        this._internalRoot = a2;
      }
      ll.prototype.unstable_scheduleHydration = function (a2) {
        if (a2) {
          var b4 = Gc();
          a2 = { blockedOn: null, target: a2, priority: b4 };
          for (var c = 0; c < Pc.length && b4 !== 0 && b4 < Pc[c].priority; c++)
            ;
          Pc.splice(c, 0, a2);
          c === 0 && Uc(a2);
        }
      };
      function ml(a2) {
        return !(!a2 || a2.nodeType !== 1 && a2.nodeType !== 9 && a2.nodeType !== 11);
      }
      function nl(a2) {
        return !(!a2 || a2.nodeType !== 1 && a2.nodeType !== 9 && a2.nodeType !== 11 && (a2.nodeType !== 8 || a2.nodeValue !== " react-mount-point-unstable "));
      }
      function ol() {
      }
      function pl(a2, b4, c, d2, e7) {
        if (e7) {
          if (typeof d2 === "function") {
            var f3 = d2;
            d2 = function () {
              var a3 = fl(g2);
              f3.call(a3);
            };
          }
          var g2 = dl(b4, d2, a2, 0, null, false, false, "", ol);
          a2._reactRootContainer = g2;
          a2[tf] = g2.current;
          rf(a2.nodeType === 8 ? a2.parentNode : a2);
          Qk();
          return g2;
        }
        for (; e7 = a2.lastChild;)
          a2.removeChild(e7);
        if (typeof d2 === "function") {
          var h2 = d2;
          d2 = function () {
            var a3 = fl(k);
            h2.call(a3);
          };
        }
        var k = al(a2, 0, false, null, null, false, false, "", ol);
        a2._reactRootContainer = k;
        a2[tf] = k.current;
        rf(a2.nodeType === 8 ? a2.parentNode : a2);
        Qk(function () {
          el(b4, k, c, d2);
        });
        return k;
      }
      function ql(a2, b4, c, d2, e7) {
        var f3 = c._reactRootContainer;
        if (f3) {
          var g2 = f3;
          if (typeof e7 === "function") {
            var h2 = e7;
            e7 = function () {
              var a3 = fl(g2);
              h2.call(a3);
            };
          }
          el(b4, g2, a2, e7);
        } else
          g2 = pl(c, b4, a2, e7, d2);
        return fl(g2);
      }
      Dc = function (a2) {
        switch (a2.tag) {
          case 3:
            var b4 = a2.stateNode;
            if (b4.current.memoizedState.isDehydrated) {
              var c = sc(b4.pendingLanes);
              c !== 0 && (Bc(b4, c | 1), Ck(b4, B2()), (W & 6) === 0 && (aj = B2() + 500, ig()));
            }
            break;
          case 13:
            var d2 = Jg();
            Qk(function () {
              return Lg(a2, 1, d2);
            });
            hl(a2, 1);
        }
      };
      Ec = function (a2) {
        if (a2.tag === 13) {
          var b4 = Jg();
          Lg(a2, 134217728, b4);
          hl(a2, 134217728);
        }
      };
      Fc = function (a2) {
        if (a2.tag === 13) {
          var b4 = Jg(), c = Kg(a2);
          Lg(a2, c, b4);
          hl(a2, c);
        }
      };
      Gc = function () {
        return C3;
      };
      Hc = function (a2, b4) {
        var c = C3;
        try {
          return C3 = a2, b4();
        } finally {
          C3 = c;
        }
      };
      xb = function (a2, b4, c) {
        switch (b4) {
          case "input":
            $a(a2, c);
            b4 = c.name;
            if (c.type === "radio" && b4 != null) {
              for (c = a2; c.parentNode;)
                c = c.parentNode;
              c = c.querySelectorAll("input[name=" + JSON.stringify("" + b4) + '][type="radio"]');
              for (b4 = 0; b4 < c.length; b4++) {
                var d2 = c[b4];
                if (d2 !== a2 && d2.form === a2.form) {
                  var e7 = Cb(d2);
                  if (!e7)
                    throw Error(p3(90));
                  Va(d2);
                  $a(d2, e7);
                }
              }
            }
            break;
          case "textarea":
            hb(a2, c);
            break;
          case "select":
            b4 = c.value, b4 != null && eb(a2, !!c.multiple, b4, false);
        }
      };
      Fb = Pk;
      Gb = Qk;
      var rl = { usingClientEntryPoint: false, Events: [Bb, te, Cb, Db, Eb, Pk] };
      var sl = { findFiberByHostInstance: Vc, bundleType: 0, version: "18.1.0", rendererPackageName: "react-dom" };
      var tl = {
        bundleType: sl.bundleType, version: sl.version, rendererPackageName: sl.rendererPackageName, rendererConfig: sl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ta.ReactCurrentDispatcher, findHostInstanceByFiber: function (a2) {
          a2 = Yb(a2);
          return a2 === null ? null : a2.stateNode;
        }, findFiberByHostInstance: sl.findFiberByHostInstance || il, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.1.0-next-22edb9f77-20220426"
      };
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
        ul = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!ul.isDisabled && ul.supportsFiber)
          try {
            jc = ul.inject(tl), kc = ul;
          } catch (a2) {
          }
      }
      var ul;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rl;
      exports.createPortal = function (a2, b4) {
        var c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!ml(b4))
          throw Error(p3(200));
        return bl(a2, b4, null, c);
      };
      exports.createRoot = function (a2, b4) {
        if (!ml(a2))
          throw Error(p3(299));
        var c = false, d2 = "", e7 = jl;
        b4 !== null && b4 !== void 0 && (b4.unstable_strictMode === true && (c = true), b4.identifierPrefix !== void 0 && (d2 = b4.identifierPrefix), b4.onRecoverableError !== void 0 && (e7 = b4.onRecoverableError));
        b4 = al(a2, 1, false, null, null, c, false, d2, e7);
        a2[tf] = b4.current;
        rf(a2.nodeType === 8 ? a2.parentNode : a2);
        return new kl(b4);
      };
      exports.findDOMNode = function (a2) {
        if (a2 == null)
          return null;
        if (a2.nodeType === 1)
          return a2;
        var b4 = a2._reactInternals;
        if (b4 === void 0) {
          if (typeof a2.render === "function")
            throw Error(p3(188));
          a2 = Object.keys(a2).join(",");
          throw Error(p3(268, a2));
        }
        a2 = Yb(b4);
        a2 = a2 === null ? null : a2.stateNode;
        return a2;
      };
      exports.flushSync = function (a2) {
        return Qk(a2);
      };
      exports.hydrate = function (a2, b4, c) {
        if (!nl(b4))
          throw Error(p3(200));
        return ql(null, a2, b4, true, c);
      };
      exports.hydrateRoot = function (a2, b4, c) {
        if (!ml(a2))
          throw Error(p3(405));
        var d2 = c != null && c.hydratedSources || null, e7 = false, f3 = "", g2 = jl;
        c !== null && c !== void 0 && (c.unstable_strictMode === true && (e7 = true), c.identifierPrefix !== void 0 && (f3 = c.identifierPrefix), c.onRecoverableError !== void 0 && (g2 = c.onRecoverableError));
        b4 = dl(b4, null, a2, 1, c != null ? c : null, e7, false, f3, g2);
        a2[tf] = b4.current;
        rf(a2);
        if (d2)
          for (a2 = 0; a2 < d2.length; a2++)
            c = d2[a2], e7 = c._getVersion, e7 = e7(c._source), b4.mutableSourceEagerHydrationData == null ? b4.mutableSourceEagerHydrationData = [c, e7] : b4.mutableSourceEagerHydrationData.push(c, e7);
        return new ll(b4);
      };
      exports.render = function (a2, b4, c) {
        if (!nl(b4))
          throw Error(p3(200));
        return ql(null, a2, b4, false, c);
      };
      exports.unmountComponentAtNode = function (a2) {
        if (!nl(a2))
          throw Error(p3(40));
        return a2._reactRootContainer ? (Qk(function () {
          ql(null, null, a2, false, function () {
            a2._reactRootContainer = null;
            a2[tf] = null;
          });
        }), true) : false;
      };
      exports.unstable_batchedUpdates = Pk;
      exports.unstable_renderSubtreeIntoContainer = function (a2, b4, c, d2) {
        if (!nl(c))
          throw Error(p3(200));
        if (a2 == null || a2._reactInternals === void 0)
          throw Error(p3(38));
        return ql(a2, b4, c, false, d2);
      };
      exports.version = "18.1.0-next-22edb9f77-20220426";
    }
  });

  // ../../node_modules/react-dom/index.js
  var require_react_dom = __commonJS({
    "../../node_modules/react-dom/index.js"(exports, module) {
      "use strict";
      function checkDCE() {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
          return;
        }
        if (false) {
          throw new Error("^_^");
        }
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
        } catch (err) {
          console.error(err);
        }
      }
      if (true) {
        checkDCE();
        module.exports = require_react_dom_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // src/index.tsx
  var import_react54 = __toModule(require_react());
  var import_react_dom = __toModule(require_react_dom());

  // src/app.tsx
  var React12 = __toModule(require_react());

  // src/components/editor/editor.tsx
  var React4 = __toModule(require_react());

  // ../../node_modules/@tldraw/core/dist/esm/index.js
  var import_react2 = __toModule(require_react());
  var import_react3 = __toModule(require_react());
  var import_react4 = __toModule(require_react());
  var import_react5 = __toModule(require_react());

  // ../../node_modules/@use-gesture/core/dist/maths-b2a210f4.esm.js
  function clamp(v2, min, max) {
    return Math.max(min, Math.min(v2, max));
  }
  var V = {
    toVector(v2, fallback) {
      if (v2 === void 0)
        v2 = fallback;
      return Array.isArray(v2) ? v2 : [v2, v2];
    },
    add(v1, v2) {
      return [v1[0] + v2[0], v1[1] + v2[1]];
    },
    sub(v1, v2) {
      return [v1[0] - v2[0], v1[1] - v2[1]];
    },
    addTo(v1, v2) {
      v1[0] += v2[0];
      v1[1] += v2[1];
    },
    subTo(v1, v2) {
      v1[0] -= v2[0];
      v1[1] -= v2[1];
    }
  };
  function rubberband(distance, dimension, constant) {
    if (dimension === 0 || Math.abs(dimension) === Infinity)
      return Math.pow(distance, constant * 5);
    return distance * dimension * constant / (dimension + constant * distance);
  }
  function rubberbandIfOutOfBounds(position, min, max, constant = 0.15) {
    if (constant === 0)
      return clamp(position, min, max);
    if (position < min)
      return -rubberband(min - position, max - min, constant) + min;
    if (position > max)
      return +rubberband(position - max, max - min, constant) + max;
    return position;
  }
  function computeRubberband(bounds, [Vx, Vy], [Rx, Ry]) {
    const [[X0, X1], [Y0, Y1]] = bounds;
    return [rubberbandIfOutOfBounds(Vx, X0, X1, Rx), rubberbandIfOutOfBounds(Vy, Y0, Y1, Ry)];
  }

  // ../../node_modules/@use-gesture/core/dist/actions-ef87abaa.esm.js
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  var EVENT_TYPE_MAP = {
    pointer: {
      start: "down",
      change: "move",
      end: "up"
    },
    mouse: {
      start: "down",
      change: "move",
      end: "up"
    },
    touch: {
      start: "start",
      change: "move",
      end: "end"
    },
    gesture: {
      start: "start",
      change: "change",
      end: "end"
    }
  };
  function capitalize(string) {
    if (!string)
      return "";
    return string[0].toUpperCase() + string.slice(1);
  }
  function toHandlerProp(device, action = "", capture = false) {
    const deviceProps = EVENT_TYPE_MAP[device];
    const actionKey = deviceProps ? deviceProps[action] || action : action;
    return "on" + capitalize(device) + capitalize(actionKey) + (capture ? "Capture" : "");
  }
  function toDomEventType(device, action = "") {
    const deviceProps = EVENT_TYPE_MAP[device];
    const actionKey = deviceProps ? deviceProps[action] || action : action;
    return device + actionKey;
  }
  function isTouch(event) {
    return "touches" in event;
  }
  function getCurrentTargetTouchList(event) {
    return Array.from(event.touches).filter((e7) => {
      var _event$currentTarget, _event$currentTarget$;
      return e7.target === event.currentTarget || ((_event$currentTarget = event.currentTarget) === null || _event$currentTarget === void 0 ? void 0 : (_event$currentTarget$ = _event$currentTarget.contains) === null || _event$currentTarget$ === void 0 ? void 0 : _event$currentTarget$.call(_event$currentTarget, e7.target));
    });
  }
  function getTouchList(event) {
    return event.type === "touchend" ? event.changedTouches : event.targetTouches;
  }
  function getValueEvent(event) {
    return isTouch(event) ? getTouchList(event)[0] : event;
  }
  function distanceAngle(P1, P2) {
    const dx = P2.clientX - P1.clientX;
    const dy = P2.clientY - P1.clientY;
    const cx = (P2.clientX + P1.clientX) / 2;
    const cy = (P2.clientY + P1.clientY) / 2;
    const distance = Math.hypot(dx, dy);
    const angle = -(Math.atan2(dx, dy) * 180) / Math.PI;
    const origin = [cx, cy];
    return {
      angle,
      distance,
      origin
    };
  }
  function touchIds(event) {
    return getCurrentTargetTouchList(event).map((touch) => touch.identifier);
  }
  function touchDistanceAngle(event, ids) {
    const [P1, P2] = Array.from(event.touches).filter((touch) => ids.includes(touch.identifier));
    return distanceAngle(P1, P2);
  }
  function pointerId(event) {
    const valueEvent = getValueEvent(event);
    return isTouch(event) ? valueEvent.identifier : valueEvent.pointerId;
  }
  function pointerValues(event) {
    const valueEvent = getValueEvent(event);
    return [valueEvent.clientX, valueEvent.clientY];
  }
  var LINE_HEIGHT = 40;
  var PAGE_HEIGHT = 800;
  function wheelValues(event) {
    let {
      deltaX,
      deltaY,
      deltaMode
    } = event;
    if (deltaMode === 1) {
      deltaX *= LINE_HEIGHT;
      deltaY *= LINE_HEIGHT;
    } else if (deltaMode === 2) {
      deltaX *= PAGE_HEIGHT;
      deltaY *= PAGE_HEIGHT;
    }
    return [deltaX, deltaY];
  }
  function scrollValues(event) {
    var _ref, _ref2;
    const {
      scrollX,
      scrollY,
      scrollLeft,
      scrollTop
    } = event.currentTarget;
    return [(_ref = scrollX !== null && scrollX !== void 0 ? scrollX : scrollLeft) !== null && _ref !== void 0 ? _ref : 0, (_ref2 = scrollY !== null && scrollY !== void 0 ? scrollY : scrollTop) !== null && _ref2 !== void 0 ? _ref2 : 0];
  }
  function getEventDetails(event) {
    const payload = {};
    if ("buttons" in event)
      payload.buttons = event.buttons;
    if ("shiftKey" in event) {
      const {
        shiftKey,
        altKey,
        metaKey,
        ctrlKey
      } = event;
      Object.assign(payload, {
        shiftKey,
        altKey,
        metaKey,
        ctrlKey
      });
    }
    return payload;
  }
  function call(v2, ...args) {
    if (typeof v2 === "function") {
      return v2(...args);
    } else {
      return v2;
    }
  }
  function noop() {
  }
  function chain(...fns) {
    if (fns.length === 0)
      return noop;
    if (fns.length === 1)
      return fns[0];
    return function () {
      let result;
      for (const fn of fns) {
        result = fn.apply(this, arguments) || result;
      }
      return result;
    };
  }
  function assignDefault(value, fallback) {
    return Object.assign({}, fallback, value || {});
  }
  var BEFORE_LAST_KINEMATICS_DELAY = 32;
  var Engine = class {
    constructor(ctrl, args, key) {
      this.ctrl = ctrl;
      this.args = args;
      this.key = key;
      if (!this.state) {
        this.state = {
          values: [0, 0],
          initial: [0, 0]
        };
        if (this.init)
          this.init();
        this.reset();
      }
    }
    get state() {
      return this.ctrl.state[this.key];
    }
    set state(state) {
      this.ctrl.state[this.key] = state;
    }
    get shared() {
      return this.ctrl.state.shared;
    }
    get eventStore() {
      return this.ctrl.gestureEventStores[this.key];
    }
    get timeoutStore() {
      return this.ctrl.gestureTimeoutStores[this.key];
    }
    get config() {
      return this.ctrl.config[this.key];
    }
    get sharedConfig() {
      return this.ctrl.config.shared;
    }
    get handler() {
      return this.ctrl.handlers[this.key];
    }
    reset() {
      const {
        state,
        shared,
        config,
        ingKey,
        args
      } = this;
      const {
        transform,
        threshold
      } = config;
      shared[ingKey] = state._active = state.active = state._blocked = state._force = false;
      state._step = [false, false];
      state.intentional = false;
      state._movement = [0, 0];
      state._distance = [0, 0];
      state._delta = [0, 0];
      state._threshold = V.sub(transform(threshold), transform([0, 0])).map(Math.abs);
      state._bounds = [[-Infinity, Infinity], [-Infinity, Infinity]];
      state.args = args;
      state.axis = void 0;
      state.memo = void 0;
      state.elapsedTime = 0;
      state.direction = [0, 0];
      state.distance = [0, 0];
      state.velocity = [0, 0];
      state.movement = [0, 0];
      state.delta = [0, 0];
      state.timeStamp = 0;
    }
    start(event) {
      const state = this.state;
      const config = this.config;
      if (!state._active) {
        this.reset();
        state._active = true;
        state.target = event.target;
        state.currentTarget = event.currentTarget;
        state.initial = state.values;
        state.lastOffset = config.from ? call(config.from, state) : state.offset;
        state.offset = state.lastOffset;
      }
      state.startTime = state.timeStamp = event.timeStamp;
    }
    compute(event) {
      const {
        state,
        config,
        shared
      } = this;
      state.args = this.args;
      let dt = 0;
      if (event) {
        state.event = event;
        if (config.preventDefault && event.cancelable)
          state.event.preventDefault();
        state.type = event.type;
        shared.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size;
        shared.locked = !!document.pointerLockElement;
        Object.assign(shared, getEventDetails(event));
        shared.down = shared.pressed = shared.buttons % 2 === 1 || shared.touches > 0;
        dt = event.timeStamp - state.timeStamp;
        state.timeStamp = event.timeStamp;
        state.elapsedTime = state.timeStamp - state.startTime;
      }
      if (state._active) {
        const _absoluteDelta = state._delta.map(Math.abs);
        V.addTo(state._distance, _absoluteDelta);
      }
      const [_m0, _m1] = config.transform(state._movement);
      if (false) {
        const isNumberAndNotNaN = (v2) => typeof v2 === "number" && !Number.isNaN(v2);
        if (!isNumberAndNotNaN(_m0) || !isNumberAndNotNaN(_m1)) {
          console.warn(`[@use-gesture]: config.transform() must produce a valid result, but it was: [${_m0},${_m1}]`);
        }
      }
      const [_t0, _t1] = state._threshold;
      let [_s0, _s1] = state._step;
      if (_s0 === false)
        _s0 = Math.abs(_m0) >= _t0 && Math.sign(_m0) * _t0;
      if (_s1 === false)
        _s1 = Math.abs(_m1) >= _t1 && Math.sign(_m1) * _t1;
      state.intentional = _s0 !== false || _s1 !== false;
      if (!state.intentional)
        return;
      state._step = [_s0, _s1];
      const movement = [0, 0];
      movement[0] = _s0 !== false ? _m0 - _s0 : 0;
      movement[1] = _s1 !== false ? _m1 - _s1 : 0;
      if (this.intent)
        this.intent(movement);
      if (state._active && !state._blocked || state.active) {
        state.first = state._active && !state.active;
        state.last = !state._active && state.active;
        state.active = shared[this.ingKey] = state._active;
        if (event) {
          if (state.first) {
            if ("bounds" in config)
              state._bounds = call(config.bounds, state);
            if (this.setup)
              this.setup();
          }
          state.movement = movement;
          const previousOffset = state.offset;
          this.computeOffset();
          if (!state.last || dt > BEFORE_LAST_KINEMATICS_DELAY) {
            state.delta = V.sub(state.offset, previousOffset);
            const absoluteDelta = state.delta.map(Math.abs);
            V.addTo(state.distance, absoluteDelta);
            state.direction = state.delta.map(Math.sign);
            if (!state.first && dt > 0) {
              state.velocity = [absoluteDelta[0] / dt, absoluteDelta[1] / dt];
            }
          }
        }
      }
      const rubberband2 = state._active ? config.rubberband || [0, 0] : [0, 0];
      state.offset = computeRubberband(state._bounds, state.offset, rubberband2);
      this.computeMovement();
    }
    emit() {
      const state = this.state;
      const shared = this.shared;
      const config = this.config;
      if (!state._active)
        this.clean();
      if ((state._blocked || !state.intentional) && !state._force && !config.triggerAllEvents)
        return;
      const memo19 = this.handler(_objectSpread2(_objectSpread2(_objectSpread2({}, shared), state), {}, {
        [this.aliasKey]: state.values
      }));
      if (memo19 !== void 0)
        state.memo = memo19;
    }
    clean() {
      this.eventStore.clean();
      this.timeoutStore.clean();
    }
  };
  function selectAxis([dx, dy]) {
    const d2 = Math.abs(dx) - Math.abs(dy);
    if (d2 > 0)
      return "x";
    if (d2 < 0)
      return "y";
    return void 0;
  }
  function restrictVectorToAxis(v2, axis) {
    switch (axis) {
      case "x":
        v2[1] = 0;
        break;
      case "y":
        v2[0] = 0;
        break;
    }
  }
  var CoordinatesEngine = class extends Engine {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "aliasKey", "xy");
    }
    reset() {
      super.reset();
      this.state.axis = void 0;
    }
    init() {
      this.state.offset = [0, 0];
      this.state.lastOffset = [0, 0];
    }
    computeOffset() {
      this.state.offset = V.add(this.state.lastOffset, this.state.movement);
    }
    computeMovement() {
      this.state.movement = V.sub(this.state.offset, this.state.lastOffset);
    }
    intent(v2) {
      this.state.axis = this.state.axis || selectAxis(v2);
      this.state._blocked = (this.config.lockDirection || !!this.config.axis) && !this.state.axis || !!this.config.axis && this.config.axis !== this.state.axis;
      if (this.state._blocked)
        return;
      if (this.config.axis || this.config.lockDirection) {
        restrictVectorToAxis(v2, this.state.axis);
      }
    }
  };
  var DEFAULT_RUBBERBAND = 0.15;
  var commonConfigResolver = {
    enabled(value = true) {
      return value;
    },
    preventDefault(value = false) {
      return value;
    },
    triggerAllEvents(value = false) {
      return value;
    },
    rubberband(value = 0) {
      switch (value) {
        case true:
          return [DEFAULT_RUBBERBAND, DEFAULT_RUBBERBAND];
        case false:
          return [0, 0];
        default:
          return V.toVector(value);
      }
    },
    from(value) {
      if (typeof value === "function")
        return value;
      if (value != null)
        return V.toVector(value);
    },
    transform(value, _k, config) {
      return value || config.shared.transform;
    },
    threshold(value) {
      return V.toVector(value, 0);
    }
  };
  if (false) {
    Object.assign(commonConfigResolver, {
      domTarget(value) {
        if (value !== void 0) {
          throw Error(`[@use-gesture]: \`domTarget\` option has been renamed to \`target\`.`);
        }
      },
      lockDirection(value) {
        if (value !== void 0) {
          throw Error(`[@use-gesture]: \`lockDirection\` option has been merged with \`axis\`. Use it as in \`{ axis: 'lock' }\``);
        }
      },
      initial(value) {
        if (value !== void 0) {
          throw Error(`[@use-gesture]: \`initial\` option has been renamed to \`from\`.`);
        }
      }
    });
  }
  var coordinatesConfigResolver = _objectSpread2(_objectSpread2({}, commonConfigResolver), {}, {
    axis(_v, _k, {
      axis
    }) {
      this.lockDirection = axis === "lock";
      if (!this.lockDirection)
        return axis;
    },
    bounds(value = {}) {
      if (typeof value === "function") {
        return (state) => coordinatesConfigResolver.bounds(value(state));
      }
      if ("current" in value) {
        return () => value.current;
      }
      if (typeof HTMLElement === "function" && value instanceof HTMLElement) {
        return value;
      }
      const {
        left = -Infinity,
        right = Infinity,
        top = -Infinity,
        bottom = Infinity
      } = value;
      return [[left, right], [top, bottom]];
    }
  });
  var DISPLACEMENT = 10;
  var KEYS_DELTA_MAP = {
    ArrowRight: (factor = 1) => [DISPLACEMENT * factor, 0],
    ArrowLeft: (factor = 1) => [-DISPLACEMENT * factor, 0],
    ArrowUp: (factor = 1) => [0, -DISPLACEMENT * factor],
    ArrowDown: (factor = 1) => [0, DISPLACEMENT * factor]
  };
  var DragEngine = class extends CoordinatesEngine {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "ingKey", "dragging");
    }
    reset() {
      super.reset();
      const state = this.state;
      state._pointerId = void 0;
      state._pointerActive = false;
      state._keyboardActive = false;
      state._preventScroll = false;
      state._delayed = false;
      state.swipe = [0, 0];
      state.tap = false;
      state.canceled = false;
      state.cancel = this.cancel.bind(this);
    }
    setup() {
      const state = this.state;
      if (state._bounds instanceof HTMLElement) {
        const boundRect = state._bounds.getBoundingClientRect();
        const targetRect = state.currentTarget.getBoundingClientRect();
        const _bounds = {
          left: boundRect.left - targetRect.left + state.offset[0],
          right: boundRect.right - targetRect.right + state.offset[0],
          top: boundRect.top - targetRect.top + state.offset[1],
          bottom: boundRect.bottom - targetRect.bottom + state.offset[1]
        };
        state._bounds = coordinatesConfigResolver.bounds(_bounds);
      }
    }
    cancel() {
      const state = this.state;
      if (state.canceled)
        return;
      state.canceled = true;
      state._active = false;
      setTimeout(() => {
        this.compute();
        this.emit();
      }, 0);
    }
    setActive() {
      this.state._active = this.state._pointerActive || this.state._keyboardActive;
    }
    clean() {
      this.pointerClean();
      this.state._pointerActive = false;
      this.state._keyboardActive = false;
      super.clean();
    }
    pointerDown(event) {
      const config = this.config;
      const state = this.state;
      if (event.buttons != null && Array.isArray(config.pointerButtons) ? !config.pointerButtons.includes(event.buttons) : config.pointerButtons !== -1 && config.pointerButtons !== event.buttons)
        return;
      this.ctrl.setEventIds(event);
      if (config.pointerCapture) {
        event.target.setPointerCapture(event.pointerId);
      }
      if (state._pointerActive)
        return;
      this.start(event);
      this.setupPointer(event);
      state._pointerId = pointerId(event);
      state._pointerActive = true;
      state.values = pointerValues(event);
      state.initial = state.values;
      if (config.preventScroll) {
        this.setupScrollPrevention(event);
      } else if (config.delay > 0) {
        this.setupDelayTrigger(event);
      } else {
        this.startPointerDrag(event);
      }
    }
    startPointerDrag(event) {
      const state = this.state;
      state._active = true;
      state._preventScroll = true;
      state._delayed = false;
      this.compute(event);
      this.emit();
    }
    pointerMove(event) {
      const state = this.state;
      const config = this.config;
      if (!state._pointerActive)
        return;
      if (state.type === event.type && event.timeStamp === state.timeStamp)
        return;
      const id = pointerId(event);
      if (state._pointerId && id !== state._pointerId)
        return;
      const values = pointerValues(event);
      if (document.pointerLockElement === event.target) {
        state._delta = [event.movementX, event.movementY];
      } else {
        state._delta = V.sub(values, state.values);
        state.values = values;
      }
      V.addTo(state._movement, state._delta);
      this.compute(event);
      if (state._delayed) {
        this.timeoutStore.remove("dragDelay");
        state.active = false;
        this.startPointerDrag(event);
        return;
      }
      if (config.preventScroll && !state._preventScroll) {
        if (state.axis) {
          if (state.axis === config.preventScrollAxis || config.preventScrollAxis === "xy") {
            state._active = false;
            this.clean();
            return;
          } else {
            this.timeoutStore.remove("startPointerDrag");
            this.startPointerDrag(event);
            return;
          }
        } else {
          return;
        }
      }
      this.emit();
    }
    pointerUp(event) {
      this.ctrl.setEventIds(event);
      try {
        if (this.config.pointerCapture && event.target.hasPointerCapture(event.pointerId)) {
          ;
          event.target.releasePointerCapture(event.pointerId);
        }
      } catch (_unused) {
        if (false) {
          console.warn(`[@use-gesture]: If you see this message, it's likely that you're using an outdated version of \`@react-three/fiber\`. 

Please upgrade to the latest version.`);
        }
      }
      const state = this.state;
      const config = this.config;
      if (!state._pointerActive)
        return;
      const id = pointerId(event);
      if (state._pointerId && id !== state._pointerId)
        return;
      this.state._pointerActive = false;
      this.setActive();
      this.compute(event);
      const [dx, dy] = state._distance;
      state.tap = dx <= 3 && dy <= 3;
      if (state.tap && config.filterTaps) {
        state._force = true;
      } else {
        const [dirx, diry] = state.direction;
        const [vx, vy] = state.velocity;
        const [mx, my] = state.movement;
        const [svx, svy] = config.swipe.velocity;
        const [sx, sy] = config.swipe.distance;
        const sdt = config.swipe.duration;
        if (state.elapsedTime < sdt) {
          if (Math.abs(vx) > svx && Math.abs(mx) > sx)
            state.swipe[0] = dirx;
          if (Math.abs(vy) > svy && Math.abs(my) > sy)
            state.swipe[1] = diry;
        }
      }
      this.emit();
    }
    pointerClick(event) {
      if (!this.state.tap) {
        event.preventDefault();
        event.stopPropagation();
      }
    }
    setupPointer(event) {
      const config = this.config;
      let device = config.device;
      if (false) {
        try {
          if (device === "pointer") {
            const currentTarget = "uv" in event ? event.sourceEvent.currentTarget : event.currentTarget;
            const style = window.getComputedStyle(currentTarget);
            if (style.touchAction === "auto") {
              console.warn(`[@use-gesture]: The drag target has its \`touch-action\` style property set to \`auto\`. It is recommended to add \`touch-action: 'none'\` so that the drag gesture behaves correctly on touch-enabled devices. For more information read this: https://use-gesture.netlify.app/docs/extras/#touch-action.

This message will only show in development mode. It won't appear in production. If this is intended, you can ignore it.`, currentTarget);
            }
          }
        } catch (_unused2) {
        }
      }
      if (config.pointerLock) {
        event.currentTarget.requestPointerLock();
      }
      if (!config.pointerCapture) {
        this.eventStore.add(this.sharedConfig.window, device, "change", this.pointerMove.bind(this));
        this.eventStore.add(this.sharedConfig.window, device, "end", this.pointerUp.bind(this));
      }
    }
    pointerClean() {
      if (this.config.pointerLock && document.pointerLockElement === this.state.currentTarget) {
        document.exitPointerLock();
      }
    }
    preventScroll(event) {
      if (this.state._preventScroll && event.cancelable) {
        event.preventDefault();
      }
    }
    setupScrollPrevention(event) {
      persistEvent(event);
      this.eventStore.add(this.sharedConfig.window, "touch", "change", this.preventScroll.bind(this), {
        passive: false
      });
      this.eventStore.add(this.sharedConfig.window, "touch", "end", this.clean.bind(this), {
        passive: false
      });
      this.eventStore.add(this.sharedConfig.window, "touch", "cancel", this.clean.bind(this), {
        passive: false
      });
      this.timeoutStore.add("startPointerDrag", this.startPointerDrag.bind(this), this.config.preventScroll, event);
    }
    setupDelayTrigger(event) {
      this.state._delayed = true;
      this.timeoutStore.add("dragDelay", this.startPointerDrag.bind(this), this.config.delay, event);
    }
    keyDown(event) {
      const deltaFn = KEYS_DELTA_MAP[event.key];
      const state = this.state;
      if (deltaFn) {
        const factor = event.shiftKey ? 10 : event.altKey ? 0.1 : 1;
        state._delta = deltaFn(factor);
        this.start(event);
        state._keyboardActive = true;
        V.addTo(state._movement, state._delta);
        this.compute(event);
        this.emit();
      }
    }
    keyUp(event) {
      if (!(event.key in KEYS_DELTA_MAP))
        return;
      this.state._keyboardActive = false;
      this.setActive();
      this.compute(event);
      this.emit();
    }
    bind(bindFunction) {
      const device = this.config.device;
      bindFunction(device, "start", this.pointerDown.bind(this));
      if (this.config.pointerCapture) {
        bindFunction(device, "change", this.pointerMove.bind(this));
        bindFunction(device, "end", this.pointerUp.bind(this));
        bindFunction(device, "cancel", this.pointerUp.bind(this));
      }
      bindFunction("key", "down", this.keyDown.bind(this));
      bindFunction("key", "up", this.keyUp.bind(this));
      if (this.config.filterTaps) {
        bindFunction("click", "", this.pointerClick.bind(this), {
          capture: true
        });
      }
    }
  };
  function persistEvent(event) {
    "persist" in event && typeof event.persist === "function" && event.persist();
  }
  var isBrowser = typeof window !== "undefined" && window.document && window.document.createElement;
  function supportsTouchEvents() {
    return isBrowser && "ontouchstart" in window;
  }
  function isTouchScreen() {
    return supportsTouchEvents() || isBrowser && window.navigator.maxTouchPoints > 1;
  }
  function supportsPointerEvents() {
    return isBrowser && "onpointerdown" in window;
  }
  function supportsPointerLock() {
    return isBrowser && "exitPointerLock" in window.document;
  }
  function supportsGestureEvents() {
    try {
      return "constructor" in GestureEvent;
    } catch (e7) {
      return false;
    }
  }
  var SUPPORT = {
    isBrowser,
    gesture: supportsGestureEvents(),
    touch: supportsTouchEvents(),
    touchscreen: isTouchScreen(),
    pointer: supportsPointerEvents(),
    pointerLock: supportsPointerLock()
  };
  var DEFAULT_PREVENT_SCROLL_DELAY = 250;
  var DEFAULT_DRAG_DELAY = 180;
  var DEFAULT_SWIPE_VELOCITY = 0.5;
  var DEFAULT_SWIPE_DISTANCE = 50;
  var DEFAULT_SWIPE_DURATION = 250;
  var dragConfigResolver = _objectSpread2(_objectSpread2({}, coordinatesConfigResolver), {}, {
    pointerLock(_v, _k, {
      pointer: {
        lock = false,
        touch = false
      } = {}
    }) {
      this.useTouch = SUPPORT.touch && touch;
      return SUPPORT.pointerLock && lock;
    },
    device(_v, _k) {
      if (this.useTouch)
        return "touch";
      if (this.pointerLock)
        return "mouse";
      if (SUPPORT.pointer)
        return "pointer";
      if (SUPPORT.touch)
        return "touch";
      return "mouse";
    },
    preventScroll(value = false, _k, {
      preventScrollAxis = "y"
    }) {
      if (preventScrollAxis)
        this.preventScrollAxis = preventScrollAxis;
      if (!SUPPORT.touchscreen)
        return false;
      if (typeof value === "number")
        return value;
      return value ? DEFAULT_PREVENT_SCROLL_DELAY : false;
    },
    pointerCapture(_v, _k, {
      pointer: {
        capture = true,
        buttons = 1
      } = {}
    }) {
      this.pointerButtons = buttons;
      return !this.pointerLock && this.device === "pointer" && capture;
    },
    threshold(value, _k, {
      filterTaps = false,
      axis = void 0
    }) {
      const threshold = V.toVector(value, filterTaps ? 3 : axis ? 1 : 0);
      this.filterTaps = filterTaps;
      return threshold;
    },
    swipe({
      velocity = DEFAULT_SWIPE_VELOCITY,
      distance = DEFAULT_SWIPE_DISTANCE,
      duration = DEFAULT_SWIPE_DURATION
    } = {}) {
      return {
        velocity: this.transform(V.toVector(velocity)),
        distance: this.transform(V.toVector(distance)),
        duration
      };
    },
    delay(value = 0) {
      switch (value) {
        case true:
          return DEFAULT_DRAG_DELAY;
        case false:
          return 0;
        default:
          return value;
      }
    }
  });
  if (false) {
    Object.assign(dragConfigResolver, {
      useTouch(value) {
        if (value !== void 0) {
          throw Error(`[@use-gesture]: \`useTouch\` option has been renamed to \`pointer.touch\`. Use it as in \`{ pointer: { touch: true } }\`.`);
        }
      },
      experimental_preventWindowScrollY(value) {
        if (value !== void 0) {
          throw Error(`[@use-gesture]: \`experimental_preventWindowScrollY\` option has been renamed to \`preventScroll\`.`);
        }
      },
      swipeVelocity(value) {
        if (value !== void 0) {
          throw Error(`[@use-gesture]: \`swipeVelocity\` option has been renamed to \`swipe.velocity\`. Use it as in \`{ swipe: { velocity: 0.5 } }\`.`);
        }
      },
      swipeDistance(value) {
        if (value !== void 0) {
          throw Error(`[@use-gesture]: \`swipeDistance\` option has been renamed to \`swipe.distance\`. Use it as in \`{ swipe: { distance: 50 } }\`.`);
        }
      },
      swipeDuration(value) {
        if (value !== void 0) {
          throw Error(`[@use-gesture]: \`swipeDuration\` option has been renamed to \`swipe.duration\`. Use it as in \`{ swipe: { duration: 250 } }\`.`);
        }
      }
    });
  }
  var SCALE_ANGLE_RATIO_INTENT_DEG = 30;
  var PINCH_WHEEL_RATIO = 36;
  var PinchEngine = class extends Engine {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "ingKey", "pinching");
      _defineProperty(this, "aliasKey", "da");
    }
    init() {
      this.state.offset = [1, 0];
      this.state.lastOffset = [1, 0];
      this.state._pointerEvents = new Map();
    }
    reset() {
      super.reset();
      const state = this.state;
      state._touchIds = [];
      state.canceled = false;
      state.cancel = this.cancel.bind(this);
      state.turns = 0;
    }
    computeOffset() {
      const {
        type,
        movement,
        lastOffset
      } = this.state;
      if (type === "wheel") {
        this.state.offset = V.add(movement, lastOffset);
      } else {
        this.state.offset = [(1 + movement[0]) * lastOffset[0], movement[1] + lastOffset[1]];
      }
    }
    computeMovement() {
      const {
        offset,
        lastOffset
      } = this.state;
      this.state.movement = [offset[0] / lastOffset[0], offset[1] - lastOffset[1]];
    }
    intent(v2) {
      const state = this.state;
      if (!state.axis) {
        const axisMovementDifference = Math.abs(v2[0]) * SCALE_ANGLE_RATIO_INTENT_DEG - Math.abs(v2[1]);
        if (axisMovementDifference < 0)
          state.axis = "angle";
        else if (axisMovementDifference > 0)
          state.axis = "scale";
      }
      if (this.config.lockDirection) {
        if (state.axis === "scale")
          v2[1] = 0;
        else if (state.axis === "angle")
          v2[0] = 0;
      }
    }
    cancel() {
      const state = this.state;
      if (state.canceled)
        return;
      setTimeout(() => {
        state.canceled = true;
        state._active = false;
        this.compute();
        this.emit();
      }, 0);
    }
    touchStart(event) {
      this.ctrl.setEventIds(event);
      const state = this.state;
      const ctrlTouchIds = this.ctrl.touchIds;
      if (state._active) {
        if (state._touchIds.every((id) => ctrlTouchIds.has(id)))
          return;
      }
      if (ctrlTouchIds.size < 2)
        return;
      this.start(event);
      state._touchIds = Array.from(ctrlTouchIds).slice(0, 2);
      const payload = touchDistanceAngle(event, state._touchIds);
      this.pinchStart(event, payload);
    }
    pointerStart(event) {
      if (event.buttons != null && event.buttons % 2 !== 1)
        return;
      this.ctrl.setEventIds(event);
      event.target.setPointerCapture(event.pointerId);
      const state = this.state;
      const _pointerEvents = state._pointerEvents;
      const ctrlPointerIds = this.ctrl.pointerIds;
      if (state._active) {
        if (Array.from(_pointerEvents.keys()).every((id) => ctrlPointerIds.has(id)))
          return;
      }
      if (_pointerEvents.size < 2) {
        _pointerEvents.set(event.pointerId, event);
      }
      if (state._pointerEvents.size < 2)
        return;
      this.start(event);
      const payload = distanceAngle(...Array.from(_pointerEvents.values()));
      this.pinchStart(event, payload);
    }
    pinchStart(event, payload) {
      const state = this.state;
      state.origin = payload.origin;
      state.values = [payload.distance, payload.angle];
      state.initial = state.values;
      this.compute(event);
      this.emit();
    }
    touchMove(event) {
      if (!this.state._active)
        return;
      const payload = touchDistanceAngle(event, this.state._touchIds);
      this.pinchMove(event, payload);
    }
    pointerMove(event) {
      const _pointerEvents = this.state._pointerEvents;
      if (_pointerEvents.has(event.pointerId)) {
        _pointerEvents.set(event.pointerId, event);
      }
      if (!this.state._active)
        return;
      const payload = distanceAngle(...Array.from(_pointerEvents.values()));
      this.pinchMove(event, payload);
    }
    pinchMove(event, payload) {
      const state = this.state;
      const prev_a = state.values[1];
      const delta_a = payload.angle - prev_a;
      let delta_turns = 0;
      if (Math.abs(delta_a) > 270)
        delta_turns += Math.sign(delta_a);
      state.values = [payload.distance, payload.angle - 360 * delta_turns];
      state.origin = payload.origin;
      state.turns = delta_turns;
      state._movement = [state.values[0] / state.initial[0] - 1, state.values[1] - state.initial[1]];
      this.compute(event);
      this.emit();
    }
    touchEnd(event) {
      this.ctrl.setEventIds(event);
      if (!this.state._active)
        return;
      if (this.state._touchIds.some((id) => !this.ctrl.touchIds.has(id))) {
        this.state._active = false;
        this.compute(event);
        this.emit();
      }
    }
    pointerEnd(event) {
      const state = this.state;
      this.ctrl.setEventIds(event);
      try {
        event.target.releasePointerCapture(event.pointerId);
      } catch (_unused) {
      }
      if (state._pointerEvents.has(event.pointerId)) {
        state._pointerEvents.delete(event.pointerId);
      }
      if (!state._active)
        return;
      if (state._pointerEvents.size < 2) {
        state._active = false;
        this.compute(event);
        this.emit();
      }
    }
    gestureStart(event) {
      if (event.cancelable)
        event.preventDefault();
      const state = this.state;
      if (state._active)
        return;
      this.start(event);
      state.values = [event.scale, event.rotation];
      state.origin = [event.clientX, event.clientY];
      this.compute(event);
      this.emit();
    }
    gestureMove(event) {
      if (event.cancelable)
        event.preventDefault();
      if (!this.state._active)
        return;
      const state = this.state;
      state.values = [event.scale, event.rotation];
      state.origin = [event.clientX, event.clientY];
      const _previousMovement = state._movement;
      state._movement = [event.scale - 1, event.rotation];
      state._delta = V.sub(state._movement, _previousMovement);
      this.compute(event);
      this.emit();
    }
    gestureEnd(event) {
      if (!this.state._active)
        return;
      this.state._active = false;
      this.compute(event);
      this.emit();
    }
    wheel(event) {
      if (!event.ctrlKey)
        return;
      if (!this.state._active)
        this.wheelStart(event);
      else
        this.wheelChange(event);
      this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this));
    }
    wheelStart(event) {
      this.start(event);
      this.wheelChange(event);
    }
    wheelChange(event) {
      const isR3f = "uv" in event;
      if (!isR3f) {
        if (event.cancelable) {
          event.preventDefault();
        }
        if (false) {
          console.warn(`[@use-gesture]: To properly support zoom on trackpads, try using the \`target\` option.

This message will only appear in development mode.`);
        }
      }
      const state = this.state;
      state._delta = [-wheelValues(event)[1] / PINCH_WHEEL_RATIO * state.offset[0], 0];
      V.addTo(state._movement, state._delta);
      this.state.origin = [event.clientX, event.clientY];
      this.compute(event);
      this.emit();
    }
    wheelEnd() {
      if (!this.state._active)
        return;
      this.state._active = false;
      this.compute();
      this.emit();
    }
    bind(bindFunction) {
      const device = this.config.device;
      if (!!device) {
        bindFunction(device, "start", this[device + "Start"].bind(this));
        bindFunction(device, "change", this[device + "Move"].bind(this));
        bindFunction(device, "end", this[device + "End"].bind(this));
        bindFunction(device, "cancel", this[device + "End"].bind(this));
      } else {
        bindFunction("wheel", "", this.wheel.bind(this), {
          passive: false
        });
      }
    }
  };
  var pinchConfigResolver = _objectSpread2(_objectSpread2({}, commonConfigResolver), {}, {
    useTouch(_v, _k, {
      pointer: {
        touch = false
      } = {}
    }) {
      return SUPPORT.touch && touch;
    },
    device(_v, _k, config) {
      const sharedConfig = config.shared;
      if (sharedConfig.target && !SUPPORT.touch && SUPPORT.gesture)
        return "gesture";
      if (this.useTouch)
        return "touch";
      if (SUPPORT.touchscreen) {
        if (SUPPORT.pointer)
          return "pointer";
        if (SUPPORT.touch)
          return "touch";
      }
    },
    bounds(_v, _k, {
      scaleBounds = {},
      angleBounds = {}
    }) {
      const _scaleBounds = (state) => {
        const D2 = assignDefault(call(scaleBounds, state), {
          min: -Infinity,
          max: Infinity
        });
        return [D2.min, D2.max];
      };
      const _angleBounds = (state) => {
        const A2 = assignDefault(call(angleBounds, state), {
          min: -Infinity,
          max: Infinity
        });
        return [A2.min, A2.max];
      };
      if (typeof scaleBounds !== "function" && typeof angleBounds !== "function")
        return [_scaleBounds(), _angleBounds()];
      return (state) => [_scaleBounds(state), _angleBounds(state)];
    },
    threshold(value, _k, config) {
      this.lockDirection = config.axis === "lock";
      const threshold = V.toVector(value, this.lockDirection ? [0.1, 3] : 0);
      return threshold;
    }
  });
  var MoveEngine = class extends CoordinatesEngine {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "ingKey", "moving");
    }
    move(event) {
      if (this.config.mouseOnly && event.pointerType !== "mouse")
        return;
      if (!this.state._active)
        this.moveStart(event);
      else
        this.moveChange(event);
      this.timeoutStore.add("moveEnd", this.moveEnd.bind(this));
    }
    moveStart(event) {
      this.start(event);
      const state = this.state;
      state.values = pointerValues(event);
      this.compute(event);
      state.initial = state.values;
      this.emit();
    }
    moveChange(event) {
      if (!this.state._active)
        return;
      const values = pointerValues(event);
      const state = this.state;
      state._delta = V.sub(values, state.values);
      V.addTo(state._movement, state._delta);
      state.values = values;
      this.compute(event);
      this.emit();
    }
    moveEnd(event) {
      if (!this.state._active)
        return;
      this.state._active = false;
      this.compute(event);
      this.emit();
    }
    bind(bindFunction) {
      bindFunction("pointer", "change", this.move.bind(this));
      bindFunction("pointer", "leave", this.moveEnd.bind(this));
    }
  };
  var moveConfigResolver = _objectSpread2(_objectSpread2({}, coordinatesConfigResolver), {}, {
    mouseOnly: (value = true) => value
  });
  var ScrollEngine = class extends CoordinatesEngine {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "ingKey", "scrolling");
    }
    scroll(event) {
      if (!this.state._active)
        this.start(event);
      this.scrollChange(event);
      this.timeoutStore.add("scrollEnd", this.scrollEnd.bind(this));
    }
    scrollChange(event) {
      if (event.cancelable)
        event.preventDefault();
      const state = this.state;
      const values = scrollValues(event);
      state._delta = V.sub(values, state.values);
      V.addTo(state._movement, state._delta);
      state.values = values;
      this.compute(event);
      this.emit();
    }
    scrollEnd() {
      if (!this.state._active)
        return;
      this.state._active = false;
      this.compute();
      this.emit();
    }
    bind(bindFunction) {
      bindFunction("scroll", "", this.scroll.bind(this));
    }
  };
  var scrollConfigResolver = coordinatesConfigResolver;
  var WheelEngine = class extends CoordinatesEngine {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "ingKey", "wheeling");
    }
    wheel(event) {
      if (!this.state._active)
        this.start(event);
      this.wheelChange(event);
      this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this));
    }
    wheelChange(event) {
      const state = this.state;
      state._delta = wheelValues(event);
      V.addTo(this.state._movement, state._delta);
      this.compute(event);
      this.emit();
    }
    wheelEnd() {
      if (!this.state._active)
        return;
      this.state._active = false;
      this.compute();
      this.emit();
    }
    bind(bindFunction) {
      bindFunction("wheel", "", this.wheel.bind(this));
    }
  };
  var wheelConfigResolver = coordinatesConfigResolver;
  var HoverEngine = class extends CoordinatesEngine {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "ingKey", "hovering");
    }
    enter(event) {
      if (this.config.mouseOnly && event.pointerType !== "mouse")
        return;
      this.start(event);
      this.state.values = pointerValues(event);
      this.compute(event);
      this.emit();
    }
    leave(event) {
      if (this.config.mouseOnly && event.pointerType !== "mouse")
        return;
      const state = this.state;
      if (!state._active)
        return;
      state._active = false;
      const values = pointerValues(event);
      state._movement = state._delta = V.sub(values, state.values);
      state.values = values;
      this.compute(event);
      state.delta = state.movement;
      this.emit();
    }
    bind(bindFunction) {
      bindFunction("pointer", "enter", this.enter.bind(this));
      bindFunction("pointer", "leave", this.leave.bind(this));
    }
  };
  var hoverConfigResolver = _objectSpread2(_objectSpread2({}, coordinatesConfigResolver), {}, {
    mouseOnly: (value = true) => value
  });
  var EngineMap = new Map();
  var ConfigResolverMap = new Map();
  function registerAction(action) {
    EngineMap.set(action.key, action.engine);
    ConfigResolverMap.set(action.key, action.resolver);
  }
  var dragAction = {
    key: "drag",
    engine: DragEngine,
    resolver: dragConfigResolver
  };
  var hoverAction = {
    key: "hover",
    engine: HoverEngine,
    resolver: hoverConfigResolver
  };
  var moveAction = {
    key: "move",
    engine: MoveEngine,
    resolver: moveConfigResolver
  };
  var pinchAction = {
    key: "pinch",
    engine: PinchEngine,
    resolver: pinchConfigResolver
  };
  var scrollAction = {
    key: "scroll",
    engine: ScrollEngine,
    resolver: scrollConfigResolver
  };
  var wheelAction = {
    key: "wheel",
    engine: WheelEngine,
    resolver: wheelConfigResolver
  };

  // ../../node_modules/@use-gesture/react/dist/use-gesture-react.esm.js
  var import_react = __toModule(require_react());

  // ../../node_modules/@use-gesture/core/dist/use-gesture-core.esm.js
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i2;
    for (i2 = 0; i2 < sourceKeys.length; i2++) {
      key = sourceKeys[i2];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
  }
  function _objectWithoutProperties(source, excluded) {
    if (source == null)
      return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i2;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
        key = sourceSymbolKeys[i2];
        if (excluded.indexOf(key) >= 0)
          continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key))
          continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  var identity = (v2) => v2;
  var sharedConfigResolver = {
    target(value) {
      if (value) {
        return () => "current" in value ? value.current : value;
      }
      return void 0;
    },
    enabled(value = true) {
      return value;
    },
    window(value = SUPPORT.isBrowser ? window : void 0) {
      return value;
    },
    eventOptions({
      passive = true,
      capture = false
    } = {}) {
      return {
        passive,
        capture
      };
    },
    transform(value = identity) {
      return value;
    }
  };
  var _excluded = ["target", "eventOptions", "window", "enabled", "transform"];
  function resolveWith(config = {}, resolvers) {
    const result = {};
    for (const [key, resolver] of Object.entries(resolvers))
      switch (typeof resolver) {
        case "function":
          result[key] = resolver.call(result, config[key], key, config);
          break;
        case "object":
          result[key] = resolveWith(config[key], resolver);
          break;
        case "boolean":
          if (resolver)
            result[key] = config[key];
          break;
      }
    return result;
  }
  function parse(config, gestureKey) {
    const _ref = config, {
      target,
      eventOptions,
      window: window2,
      enabled,
      transform
    } = _ref, rest = _objectWithoutProperties(_ref, _excluded);
    const _config = {
      shared: resolveWith({
        target,
        eventOptions,
        window: window2,
        enabled,
        transform
      }, sharedConfigResolver)
    };
    if (gestureKey) {
      const resolver = ConfigResolverMap.get(gestureKey);
      _config[gestureKey] = resolveWith(_objectSpread2({
        shared: _config.shared
      }, rest), resolver);
    } else {
      for (const key in rest) {
        const resolver = ConfigResolverMap.get(key);
        if (resolver) {
          _config[key] = resolveWith(_objectSpread2({
            shared: _config.shared
          }, rest[key]), resolver);
        } else if (false) {
          if (!["drag", "pinch", "scroll", "wheel", "move", "hover"].includes(key)) {
            if (key === "domTarget") {
              throw Error(`[@use-gesture]: \`domTarget\` option has been renamed to \`target\`.`);
            }
            console.warn(`[@use-gesture]: Unknown config key \`${key}\` was used. Please read the documentation for further information.`);
          }
        }
      }
    }
    return _config;
  }
  var EventStore = class {
    constructor(ctrl) {
      _defineProperty(this, "_listeners", []);
      this._ctrl = ctrl;
    }
    add(element, device, action, handler, options) {
      const type = toDomEventType(device, action);
      const eventOptions = _objectSpread2(_objectSpread2({}, this._ctrl.config.shared.eventOptions), options);
      element.addEventListener(type, handler, eventOptions);
      this._listeners.push(() => element.removeEventListener(type, handler, eventOptions));
    }
    clean() {
      this._listeners.forEach((remove) => remove());
      this._listeners = [];
    }
  };
  var TimeoutStore = class {
    constructor() {
      _defineProperty(this, "_timeouts", new Map());
    }
    add(key, callback, ms = 140, ...args) {
      this.remove(key);
      this._timeouts.set(key, window.setTimeout(callback, ms, ...args));
    }
    remove(key) {
      const timeout = this._timeouts.get(key);
      if (timeout)
        window.clearTimeout(timeout);
    }
    clean() {
      this._timeouts.forEach((timeout) => void window.clearTimeout(timeout));
      this._timeouts.clear();
    }
  };
  var Controller = class {
    constructor(handlers) {
      _defineProperty(this, "gestures", new Set());
      _defineProperty(this, "_targetEventStore", new EventStore(this));
      _defineProperty(this, "gestureEventStores", {});
      _defineProperty(this, "gestureTimeoutStores", {});
      _defineProperty(this, "handlers", {});
      _defineProperty(this, "config", {});
      _defineProperty(this, "pointerIds", new Set());
      _defineProperty(this, "touchIds", new Set());
      _defineProperty(this, "state", {
        shared: {
          shiftKey: false,
          metaKey: false,
          ctrlKey: false,
          altKey: false
        }
      });
      resolveGestures(this, handlers);
    }
    setEventIds(event) {
      if (isTouch(event)) {
        this.touchIds = new Set(touchIds(event));
      } else if ("pointerId" in event) {
        if (event.type === "pointerup")
          this.pointerIds.delete(event.pointerId);
        else
          this.pointerIds.add(event.pointerId);
      }
    }
    applyHandlers(handlers, nativeHandlers) {
      this.handlers = handlers;
      this.nativeHandlers = nativeHandlers;
    }
    applyConfig(config, gestureKey) {
      this.config = parse(config, gestureKey);
    }
    clean() {
      this._targetEventStore.clean();
      for (const key of this.gestures) {
        this.gestureEventStores[key].clean();
        this.gestureTimeoutStores[key].clean();
      }
    }
    effect() {
      if (this.config.shared.target)
        this.bind();
      return () => this._targetEventStore.clean();
    }
    bind(...args) {
      const sharedConfig = this.config.shared;
      const eventOptions = sharedConfig.eventOptions;
      const props = {};
      let target;
      if (sharedConfig.target) {
        target = sharedConfig.target();
        if (!target)
          return;
      }
      const bindFunction = bindToProps(props, eventOptions, !!target);
      if (sharedConfig.enabled) {
        for (const gestureKey of this.gestures) {
          if (this.config[gestureKey].enabled) {
            const Engine2 = EngineMap.get(gestureKey);
            new Engine2(this, args, gestureKey).bind(bindFunction);
          }
        }
        for (const eventKey in this.nativeHandlers) {
          bindFunction(eventKey, "", (event) => this.nativeHandlers[eventKey](_objectSpread2(_objectSpread2({}, this.state.shared), {}, {
            event,
            args
          })), void 0, true);
        }
      }
      for (const handlerProp in props) {
        props[handlerProp] = chain(...props[handlerProp]);
      }
      if (!target)
        return props;
      for (const handlerProp in props) {
        let eventKey = handlerProp.substr(2).toLowerCase();
        const capture = !!~eventKey.indexOf("capture");
        const passive = !!~eventKey.indexOf("passive");
        if (capture || passive)
          eventKey = eventKey.replace(/capture|passive/g, "");
        this._targetEventStore.add(target, eventKey, "", props[handlerProp], {
          capture,
          passive
        });
      }
    }
  };
  function setupGesture(ctrl, gestureKey) {
    ctrl.gestures.add(gestureKey);
    ctrl.gestureEventStores[gestureKey] = new EventStore(ctrl);
    ctrl.gestureTimeoutStores[gestureKey] = new TimeoutStore();
  }
  function resolveGestures(ctrl, internalHandlers) {
    if (internalHandlers.drag)
      setupGesture(ctrl, "drag");
    if (internalHandlers.wheel)
      setupGesture(ctrl, "wheel");
    if (internalHandlers.scroll)
      setupGesture(ctrl, "scroll");
    if (internalHandlers.move)
      setupGesture(ctrl, "move");
    if (internalHandlers.pinch)
      setupGesture(ctrl, "pinch");
    if (internalHandlers.hover)
      setupGesture(ctrl, "hover");
  }
  var bindToProps = (props, eventOptions, withPassiveOption) => (device, action, handler, options = {}, isNative = false) => {
    var _options$capture, _options$passive;
    const capture = (_options$capture = options.capture) !== null && _options$capture !== void 0 ? _options$capture : eventOptions.capture;
    const passive = (_options$passive = options.passive) !== null && _options$passive !== void 0 ? _options$passive : eventOptions.passive;
    let handlerProp = isNative ? device : toHandlerProp(device, action, capture);
    if (withPassiveOption && passive)
      handlerProp += "Passive";
    props[handlerProp] = props[handlerProp] || [];
    props[handlerProp].push(handler);
  };
  var RE_NOT_NATIVE = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;
  function sortHandlers(_handlers2) {
    const native = {};
    const handlers = {};
    const actions = new Set();
    for (let key in _handlers2) {
      if (RE_NOT_NATIVE.test(key)) {
        actions.add(RegExp.lastMatch);
        handlers[key] = _handlers2[key];
      } else {
        native[key] = _handlers2[key];
      }
    }
    return [handlers, native, actions];
  }
  function registerGesture(actions, handlers, handlerKey, key, internalHandlers, config) {
    if (!actions.has(handlerKey))
      return;
    if (!EngineMap.has(key)) {
      if (false) {
        console.warn(`[@use-gesture]: You've created a custom handler that that uses the \`${key}\` gesture but isn't properly configured.

Please add \`${key}Action\` when creating your handler.`);
      }
      return;
    }
    const startKey = handlerKey + "Start";
    const endKey = handlerKey + "End";
    const fn = (state) => {
      let memo19 = void 0;
      if (state.first && startKey in handlers)
        handlers[startKey](state);
      if (handlerKey in handlers)
        memo19 = handlers[handlerKey](state);
      if (state.last && endKey in handlers)
        handlers[endKey](state);
      return memo19;
    };
    internalHandlers[key] = fn;
    config[key] = config[key] || {};
  }
  function parseMergedHandlers(mergedHandlers, mergedConfig) {
    const [handlers, nativeHandlers, actions] = sortHandlers(mergedHandlers);
    const internalHandlers = {};
    registerGesture(actions, handlers, "onDrag", "drag", internalHandlers, mergedConfig);
    registerGesture(actions, handlers, "onWheel", "wheel", internalHandlers, mergedConfig);
    registerGesture(actions, handlers, "onScroll", "scroll", internalHandlers, mergedConfig);
    registerGesture(actions, handlers, "onPinch", "pinch", internalHandlers, mergedConfig);
    registerGesture(actions, handlers, "onMove", "move", internalHandlers, mergedConfig);
    registerGesture(actions, handlers, "onHover", "hover", internalHandlers, mergedConfig);
    return {
      handlers: internalHandlers,
      config: mergedConfig,
      nativeHandlers
    };
  }

  // ../../node_modules/@use-gesture/react/dist/use-gesture-react.esm.js
  function useRecognizers(handlers, config = {}, gestureKey, nativeHandlers) {
    const ctrl = import_react.default.useMemo(() => new Controller(handlers), []);
    ctrl.applyHandlers(handlers, nativeHandlers);
    ctrl.applyConfig(config, gestureKey);
    import_react.default.useEffect(ctrl.effect.bind(ctrl));
    import_react.default.useEffect(() => {
      return ctrl.clean.bind(ctrl);
    }, []);
    if (config.target === void 0) {
      return ctrl.bind.bind(ctrl);
    }
    return void 0;
  }
  function createUseGesture(actions) {
    actions.forEach(registerAction);
    return function useGesture2(_handlers2, _config = {}) {
      const {
        handlers,
        nativeHandlers,
        config
      } = parseMergedHandlers(_handlers2, _config);
      return useRecognizers(handlers, config, void 0, nativeHandlers);
    };
  }
  function useGesture(handlers, config = {}) {
    const hook = createUseGesture([dragAction, pinchAction, scrollAction, wheelAction, moveAction, hoverAction]);
    return hook(handlers, config);
  }

  // ../../node_modules/@tldraw/vec/dist/module.js
  var $a8e101027d325e52$export$e947a0f742cf021e = class {
    static clamp(n2, min, max) {
      return Math.max(min, typeof max !== "undefined" ? Math.min(n2, max) : n2);
    }
    static clampV(A2, min, max) {
      return A2.map((n2) => max ? $a8e101027d325e52$export$e947a0f742cf021e.clamp(n2, min, max) : $a8e101027d325e52$export$e947a0f742cf021e.clamp(n2, min));
    }
    static cross(x2, y2, z) {
      return (y2[0] - x2[0]) * (z[1] - x2[1]) - (z[0] - x2[0]) * (y2[1] - x2[1]);
    }
  };
  $a8e101027d325e52$export$e947a0f742cf021e.neg = (A2) => {
    return [
      -A2[0],
      -A2[1]
    ];
  };
  $a8e101027d325e52$export$e947a0f742cf021e.add = (A2, B2) => {
    return [
      A2[0] + B2[0],
      A2[1] + B2[1]
    ];
  };
  $a8e101027d325e52$export$e947a0f742cf021e.addScalar = (A2, n2) => {
    return [
      A2[0] + n2,
      A2[1] + n2
    ];
  };
  $a8e101027d325e52$export$e947a0f742cf021e.sub = (A2, B2) => {
    return [
      A2[0] - B2[0],
      A2[1] - B2[1]
    ];
  };
  $a8e101027d325e52$export$e947a0f742cf021e.subScalar = (A2, n2) => {
    return [
      A2[0] - n2,
      A2[1] - n2
    ];
  };
  $a8e101027d325e52$export$e947a0f742cf021e.vec = (A2, B2) => {
    return [
      B2[0] - A2[0],
      B2[1] - A2[1]
    ];
  };
  $a8e101027d325e52$export$e947a0f742cf021e.mul = (A2, n2) => {
    return [
      A2[0] * n2,
      A2[1] * n2
    ];
  };
  $a8e101027d325e52$export$e947a0f742cf021e.mulV = (A2, B2) => {
    return [
      A2[0] * B2[0],
      A2[1] * B2[1]
    ];
  };
  $a8e101027d325e52$export$e947a0f742cf021e.div = (A2, n2) => {
    return [
      A2[0] / n2,
      A2[1] / n2
    ];
  };
  $a8e101027d325e52$export$e947a0f742cf021e.divV = (A2, B2) => {
    return [
      A2[0] / B2[0],
      A2[1] / B2[1]
    ];
  };
  $a8e101027d325e52$export$e947a0f742cf021e.per = (A2) => {
    return [
      A2[1],
      -A2[0]
    ];
  };
  $a8e101027d325e52$export$e947a0f742cf021e.dpr = (A2, B2) => {
    return A2[0] * B2[0] + A2[1] * B2[1];
  };
  $a8e101027d325e52$export$e947a0f742cf021e.cpr = (A2, B2) => {
    return A2[0] * B2[1] - B2[0] * A2[1];
  };
  $a8e101027d325e52$export$e947a0f742cf021e.len2 = (A2) => {
    return A2[0] * A2[0] + A2[1] * A2[1];
  };
  $a8e101027d325e52$export$e947a0f742cf021e.len = (A2) => {
    return Math.hypot(A2[0], A2[1]);
  };
  $a8e101027d325e52$export$e947a0f742cf021e.pry = (A2, B2) => {
    return $a8e101027d325e52$export$e947a0f742cf021e.dpr(A2, B2) / $a8e101027d325e52$export$e947a0f742cf021e.len(B2);
  };
  $a8e101027d325e52$export$e947a0f742cf021e.uni = (A2) => {
    return $a8e101027d325e52$export$e947a0f742cf021e.div(A2, $a8e101027d325e52$export$e947a0f742cf021e.len(A2));
  };
  $a8e101027d325e52$export$e947a0f742cf021e.normalize = (A2) => {
    return $a8e101027d325e52$export$e947a0f742cf021e.uni(A2);
  };
  $a8e101027d325e52$export$e947a0f742cf021e.tangent = (A2, B2) => {
    return $a8e101027d325e52$export$e947a0f742cf021e.uni($a8e101027d325e52$export$e947a0f742cf021e.sub(A2, B2));
  };
  $a8e101027d325e52$export$e947a0f742cf021e.dist2 = (A2, B2) => {
    return $a8e101027d325e52$export$e947a0f742cf021e.len2($a8e101027d325e52$export$e947a0f742cf021e.sub(A2, B2));
  };
  $a8e101027d325e52$export$e947a0f742cf021e.dist = (A2, B2) => {
    return Math.hypot(A2[1] - B2[1], A2[0] - B2[0]);
  };
  $a8e101027d325e52$export$e947a0f742cf021e.fastDist = (A2, B2) => {
    const V3 = [
      B2[0] - A2[0],
      B2[1] - A2[1]
    ];
    const aV = [
      Math.abs(V3[0]),
      Math.abs(V3[1])
    ];
    let r4 = 1 / Math.max(aV[0], aV[1]);
    r4 = r4 * (1.29289 - (aV[0] + aV[1]) * r4 * 0.29289);
    return [
      V3[0] * r4,
      V3[1] * r4
    ];
  };
  $a8e101027d325e52$export$e947a0f742cf021e.ang = (A2, B2) => {
    return Math.atan2($a8e101027d325e52$export$e947a0f742cf021e.cpr(A2, B2), $a8e101027d325e52$export$e947a0f742cf021e.dpr(A2, B2));
  };
  $a8e101027d325e52$export$e947a0f742cf021e.angle = (A2, B2) => {
    return Math.atan2(B2[1] - A2[1], B2[0] - A2[0]);
  };
  $a8e101027d325e52$export$e947a0f742cf021e.med = (A2, B2) => {
    return $a8e101027d325e52$export$e947a0f742cf021e.mul($a8e101027d325e52$export$e947a0f742cf021e.add(A2, B2), 0.5);
  };
  $a8e101027d325e52$export$e947a0f742cf021e.rot = (A2, r4 = 0) => {
    return [
      A2[0] * Math.cos(r4) - A2[1] * Math.sin(r4),
      A2[0] * Math.sin(r4) + A2[1] * Math.cos(r4)
    ];
  };
  $a8e101027d325e52$export$e947a0f742cf021e.rotWith = (A2, C3, r4 = 0) => {
    if (r4 === 0)
      return A2;
    const s2 = Math.sin(r4);
    const c = Math.cos(r4);
    const px = A2[0] - C3[0];
    const py = A2[1] - C3[1];
    const nx = px * c - py * s2;
    const ny = px * s2 + py * c;
    return [
      nx + C3[0],
      ny + C3[1]
    ];
  };
  $a8e101027d325e52$export$e947a0f742cf021e.isEqual = (A2, B2) => {
    return A2[0] === B2[0] && A2[1] === B2[1];
  };
  $a8e101027d325e52$export$e947a0f742cf021e.lrp = (A2, B2, t6) => {
    return $a8e101027d325e52$export$e947a0f742cf021e.add(A2, $a8e101027d325e52$export$e947a0f742cf021e.mul($a8e101027d325e52$export$e947a0f742cf021e.sub(B2, A2), t6));
  };
  $a8e101027d325e52$export$e947a0f742cf021e.int = (A2, B2, from, to, s2 = 1) => {
    const t6 = ($a8e101027d325e52$export$e947a0f742cf021e.clamp(from, to) - from) / (to - from);
    return $a8e101027d325e52$export$e947a0f742cf021e.add($a8e101027d325e52$export$e947a0f742cf021e.mul(A2, 1 - t6), $a8e101027d325e52$export$e947a0f742cf021e.mul(B2, s2));
  };
  $a8e101027d325e52$export$e947a0f742cf021e.ang3 = (p1, pc, p22) => {
    const v1 = $a8e101027d325e52$export$e947a0f742cf021e.vec(pc, p1);
    const v2 = $a8e101027d325e52$export$e947a0f742cf021e.vec(pc, p22);
    return $a8e101027d325e52$export$e947a0f742cf021e.ang(v1, v2);
  };
  $a8e101027d325e52$export$e947a0f742cf021e.abs = (A2) => {
    return [
      Math.abs(A2[0]),
      Math.abs(A2[1])
    ];
  };
  $a8e101027d325e52$export$e947a0f742cf021e.rescale = (a2, n2) => {
    const l4 = $a8e101027d325e52$export$e947a0f742cf021e.len(a2);
    return [
      n2 * a2[0] / l4,
      n2 * a2[1] / l4
    ];
  };
  $a8e101027d325e52$export$e947a0f742cf021e.isLeft = (p1, pc, p22) => {
    return (pc[0] - p1[0]) * (p22[1] - p1[1]) - (p22[0] - p1[0]) * (pc[1] - p1[1]);
  };
  $a8e101027d325e52$export$e947a0f742cf021e.clockwise = (p1, pc, p22) => {
    return $a8e101027d325e52$export$e947a0f742cf021e.isLeft(p1, pc, p22) > 0;
  };
  $a8e101027d325e52$export$e947a0f742cf021e.round = (a2, d2 = 2) => {
    return a2.map((v2) => +v2.toFixed(d2));
  };
  $a8e101027d325e52$export$e947a0f742cf021e.nearestPointOnLineThroughPoint = (A2, u2, P2) => {
    return $a8e101027d325e52$export$e947a0f742cf021e.add(A2, $a8e101027d325e52$export$e947a0f742cf021e.mul(u2, $a8e101027d325e52$export$e947a0f742cf021e.pry($a8e101027d325e52$export$e947a0f742cf021e.sub(P2, A2), u2)));
  };
  $a8e101027d325e52$export$e947a0f742cf021e.distanceToLineThroughPoint = (A2, u2, P2) => {
    return $a8e101027d325e52$export$e947a0f742cf021e.dist(P2, $a8e101027d325e52$export$e947a0f742cf021e.nearestPointOnLineThroughPoint(A2, u2, P2));
  };
  $a8e101027d325e52$export$e947a0f742cf021e.nearestPointOnLineSegment = (A2, B2, P2, clamp3 = true) => {
    const u2 = $a8e101027d325e52$export$e947a0f742cf021e.uni($a8e101027d325e52$export$e947a0f742cf021e.sub(B2, A2));
    const C3 = $a8e101027d325e52$export$e947a0f742cf021e.add(A2, $a8e101027d325e52$export$e947a0f742cf021e.mul(u2, $a8e101027d325e52$export$e947a0f742cf021e.pry($a8e101027d325e52$export$e947a0f742cf021e.sub(P2, A2), u2)));
    if (clamp3) {
      if (C3[0] < Math.min(A2[0], B2[0]))
        return A2[0] < B2[0] ? A2 : B2;
      if (C3[0] > Math.max(A2[0], B2[0]))
        return A2[0] > B2[0] ? A2 : B2;
      if (C3[1] < Math.min(A2[1], B2[1]))
        return A2[1] < B2[1] ? A2 : B2;
      if (C3[1] > Math.max(A2[1], B2[1]))
        return A2[1] > B2[1] ? A2 : B2;
    }
    return C3;
  };
  $a8e101027d325e52$export$e947a0f742cf021e.distanceToLineSegment = (A2, B2, P2, clamp3 = true) => {
    return $a8e101027d325e52$export$e947a0f742cf021e.dist(P2, $a8e101027d325e52$export$e947a0f742cf021e.nearestPointOnLineSegment(A2, B2, P2, clamp3));
  };
  $a8e101027d325e52$export$e947a0f742cf021e.nudge = (A2, B2, d2) => {
    return $a8e101027d325e52$export$e947a0f742cf021e.add(A2, $a8e101027d325e52$export$e947a0f742cf021e.mul($a8e101027d325e52$export$e947a0f742cf021e.uni($a8e101027d325e52$export$e947a0f742cf021e.sub(B2, A2)), d2));
  };
  $a8e101027d325e52$export$e947a0f742cf021e.nudgeAtAngle = (A2, a2, d2) => {
    return [
      Math.cos(a2) * d2 + A2[0],
      Math.sin(a2) * d2 + A2[1]
    ];
  };
  $a8e101027d325e52$export$e947a0f742cf021e.toPrecision = (a2, n2 = 4) => {
    return [
      +a2[0].toPrecision(n2),
      +a2[1].toPrecision(n2)
    ];
  };
  $a8e101027d325e52$export$e947a0f742cf021e.pointsBetween = (A2, B2, steps = 6) => {
    return Array.from(Array(steps)).map((_, i2) => {
      const t6 = i2 / (steps - 1);
      const k = Math.min(1, 0.5 + Math.abs(0.5 - t6));
      return [
        ...$a8e101027d325e52$export$e947a0f742cf021e.lrp(A2, B2, t6),
        k
      ];
    });
  };

  // ../../node_modules/@tldraw/core/dist/esm/index.js
  var import_react7 = __toModule(require_react());
  var import_react8 = __toModule(require_react());
  var import_react9 = __toModule(require_react());
  var import_react10 = __toModule(require_react());
  var import_react11 = __toModule(require_react());
  var import_react12 = __toModule(require_react());
  var import_react13 = __toModule(require_react());
  var import_react14 = __toModule(require_react());
  var import_react15 = __toModule(require_react());
  var import_react16 = __toModule(require_react());
  var import_react17 = __toModule(require_react());
  var import_react18 = __toModule(require_react());
  var import_react19 = __toModule(require_react());
  var import_react20 = __toModule(require_react());
  var import_react21 = __toModule(require_react());
  var import_react22 = __toModule(require_react());
  var import_react23 = __toModule(require_react());
  var import_react24 = __toModule(require_react());
  var import_react25 = __toModule(require_react());
  var import_react26 = __toModule(require_react());
  var import_react27 = __toModule(require_react());
  var import_react28 = __toModule(require_react());
  var import_react29 = __toModule(require_react());
  var import_react30 = __toModule(require_react());
  var import_react31 = __toModule(require_react());
  var import_react32 = __toModule(require_react());
  var import_react33 = __toModule(require_react());
  var import_react34 = __toModule(require_react());
  var import_react35 = __toModule(require_react());
  var import_react36 = __toModule(require_react());
  var import_react37 = __toModule(require_react());
  var import_react38 = __toModule(require_react());
  var import_react39 = __toModule(require_react());
  var import_react40 = __toModule(require_react());
  var import_react41 = __toModule(require_react());
  var import_react42 = __toModule(require_react());
  var import_react43 = __toModule(require_react());
  var import_react44 = __toModule(require_react());
  var import_react45 = __toModule(require_react());
  var import_react46 = __toModule(require_react());
  var import_react47 = __toModule(require_react());
  var import_react48 = __toModule(require_react());
  var import_react49 = __toModule(require_react());

  // ../../node_modules/@tldraw/intersect/dist/module.js
  function $a8e101027d325e52$var$createIntersection(message, ...points) {
    const didIntersect = points.length > 0;
    return {
      didIntersect,
      message,
      points
    };
  }
  function $a8e101027d325e52$var$getRectangleSides(point, size, rotation = 0) {
    const center = [
      point[0] + size[0] / 2,
      point[1] + size[1] / 2
    ];
    const tl = $a8e101027d325e52$export$e947a0f742cf021e.rotWith(point, center, rotation);
    const tr = $a8e101027d325e52$export$e947a0f742cf021e.rotWith($a8e101027d325e52$export$e947a0f742cf021e.add(point, [
      size[0],
      0
    ]), center, rotation);
    const br = $a8e101027d325e52$export$e947a0f742cf021e.rotWith($a8e101027d325e52$export$e947a0f742cf021e.add(point, size), center, rotation);
    const bl = $a8e101027d325e52$export$e947a0f742cf021e.rotWith($a8e101027d325e52$export$e947a0f742cf021e.add(point, [
      0,
      size[1]
    ]), center, rotation);
    return [
      [
        "top",
        [
          tl,
          tr
        ]
      ],
      [
        "right",
        [
          tr,
          br
        ]
      ],
      [
        "bottom",
        [
          br,
          bl
        ]
      ],
      [
        "left",
        [
          bl,
          tl
        ]
      ]
    ];
  }
  function $a8e101027d325e52$export$3a248ff64a609f03(a1, a2, b1, b22) {
    const AB = $a8e101027d325e52$export$e947a0f742cf021e.sub(a1, b1);
    const BV = $a8e101027d325e52$export$e947a0f742cf021e.sub(b22, b1);
    const AV = $a8e101027d325e52$export$e947a0f742cf021e.sub(a2, a1);
    const ua_t = BV[0] * AB[1] - BV[1] * AB[0];
    const ub_t = AV[0] * AB[1] - AV[1] * AB[0];
    const u_b = BV[1] * AV[0] - BV[0] * AV[1];
    if (ua_t === 0 || ub_t === 0)
      return $a8e101027d325e52$var$createIntersection("coincident");
    if (u_b === 0)
      return $a8e101027d325e52$var$createIntersection("parallel");
    if (u_b !== 0) {
      const ua = ua_t / u_b;
      const ub = ub_t / u_b;
      if (0 <= ua && ua <= 1 && 0 <= ub && ub <= 1)
        return $a8e101027d325e52$var$createIntersection("intersection", $a8e101027d325e52$export$e947a0f742cf021e.add(a1, $a8e101027d325e52$export$e947a0f742cf021e.mul(AV, ua)));
    }
    return $a8e101027d325e52$var$createIntersection("no intersection");
  }
  function $a8e101027d325e52$export$e6fc4c4923324118(a1, a2, points) {
    const pts = [];
    for (let i2 = 1; i2 < points.length + 1; i2++) {
      const int = $a8e101027d325e52$export$3a248ff64a609f03(a1, a2, points[i2 - 1], points[i2 % points.length]);
      if (int)
        pts.push(...int.points);
    }
    if (pts.length === 0)
      return $a8e101027d325e52$var$createIntersection("no intersection");
    return $a8e101027d325e52$var$createIntersection("intersection", ...points);
  }
  function $a8e101027d325e52$export$83be3175b6937b40(point, size, a1, a2) {
    const sideIntersections = $a8e101027d325e52$var$getRectangleSides(point, size).reduce((acc, [message, [b1, b22]]) => {
      const intersection = $a8e101027d325e52$export$3a248ff64a609f03(a1, a2, b1, b22);
      if (intersection)
        acc.push($a8e101027d325e52$var$createIntersection(message, ...intersection.points));
      return acc;
    }, []);
    return sideIntersections.filter((int) => int.didIntersect);
  }
  function $a8e101027d325e52$export$dc6b6a0b9522f0d4(point1, size1, point2, size2) {
    const sideIntersections = $a8e101027d325e52$var$getRectangleSides(point1, size1).reduce((acc, [message, [a1, a2]]) => {
      const intersections = $a8e101027d325e52$export$83be3175b6937b40(point2, size2, a1, a2);
      acc.push(...intersections.map((int) => $a8e101027d325e52$var$createIntersection(`${message} ${int.message}`, ...int.points)));
      return acc;
    }, []);
    return sideIntersections.filter((int) => int.didIntersect);
  }
  function $a8e101027d325e52$export$ca9f8bb922670483(point, size, points) {
    const sideIntersections = $a8e101027d325e52$var$getRectangleSides(point, size).reduce((acc, [message, [a1, a2]]) => {
      const intersection = $a8e101027d325e52$export$e6fc4c4923324118(a1, a2, points);
      if (intersection.didIntersect)
        acc.push($a8e101027d325e52$var$createIntersection(message, ...intersection.points));
      return acc;
    }, []);
    return sideIntersections.filter((int) => int.didIntersect);
  }
  function $a8e101027d325e52$export$d137a39b1cd79230(bounds1, bounds2) {
    return $a8e101027d325e52$export$dc6b6a0b9522f0d4([
      bounds1.minX,
      bounds1.minY
    ], [
      bounds1.width,
      bounds1.height
    ], [
      bounds2.minX,
      bounds2.minY
    ], [
      bounds2.width,
      bounds2.height
    ]);
  }
  function $a8e101027d325e52$export$87aca63d0856a2c6(bounds, points) {
    return $a8e101027d325e52$export$850cb6fb2fd493c0(points, bounds);
  }
  function $a8e101027d325e52$export$850cb6fb2fd493c0(points, bounds) {
    return $a8e101027d325e52$export$ca9f8bb922670483([
      bounds.minX,
      bounds.minY
    ], [
      bounds.width,
      bounds.height
    ], points);
  }

  // ../../node_modules/@tldraw/core/dist/esm/index.js
  var __defProp2 = Object.defineProperty;
  var __defProps2 = Object.defineProperties;
  var __getOwnPropDescs2 = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues2 = (a2, b4) => {
    for (var prop in b4 || (b4 = {}))
      if (__hasOwnProp2.call(b4, prop))
        __defNormalProp2(a2, prop, b4[prop]);
    if (__getOwnPropSymbols2)
      for (var prop of __getOwnPropSymbols2(b4)) {
        if (__propIsEnum2.call(b4, prop))
          __defNormalProp2(a2, prop, b4[prop]);
      }
    return a2;
  };
  var __spreadProps2 = (a2, b4) => __defProps2(a2, __getOwnPropDescs2(b4));
  var __objRest2 = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp2.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols2)
      for (var prop of __getOwnPropSymbols2(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum2.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var TLContext = (0, import_react4.createContext)({});
  function useTLContext() {
    const context2 = (0, import_react4.useContext)(TLContext);
    return context2;
  }
  function useZoomEvents(zoom, ref) {
    const rOriginPoint = (0, import_react5.useRef)(void 0);
    const rPinchPoint = (0, import_react5.useRef)(void 0);
    const rDelta = (0, import_react5.useRef)([0, 0]);
    const { inputs: inputs2, bounds, callbacks } = useTLContext();
    (0, import_react5.useEffect)(() => {
      const preventGesture = (event) => {
        event.preventDefault();
      };
      document.addEventListener("gesturestart", preventGesture);
      document.addEventListener("gesturechange", preventGesture);
      return () => {
        document.removeEventListener("gesturestart", preventGesture);
        document.removeEventListener("gesturechange", preventGesture);
      };
    }, []);
    useGesture({
      onWheel: ({ delta, event: e7 }) => {
        var _a, _b, _c, _d;
        if (e7.altKey && e7.buttons === 0) {
          const point = (_b = (_a = inputs2.pointer) == null ? void 0 : _a.point) != null ? _b : [bounds.width / 2, bounds.height / 2];
          const info2 = inputs2.pinch(point, point);
          (_c = callbacks.onZoom) == null ? void 0 : _c.call(callbacks, __spreadProps2(__spreadValues2({}, info2), { delta: [...point, -e7.deltaY] }), e7);
          return;
        }
        e7.preventDefault();
        if (inputs2.isPinching)
          return;
        if ($a8e101027d325e52$export$e947a0f742cf021e.isEqual(delta, [0, 0]))
          return;
        const info = inputs2.pan(delta, e7);
        (_d = callbacks.onPan) == null ? void 0 : _d.call(callbacks, info, e7);
      },
      onPinchStart: ({ origin, event }) => {
        var _a;
        const elm = ref.current;
        if (!elm || !(event.target === elm || elm.contains(event.target)))
          return;
        const info = inputs2.pinch(origin, origin);
        inputs2.isPinching = true;
        (_a = callbacks.onPinchStart) == null ? void 0 : _a.call(callbacks, info, event);
        rPinchPoint.current = info.point;
        rOriginPoint.current = info.origin;
        rDelta.current = [0, 0];
      },
      onPinchEnd: ({ origin, event }) => {
        var _a;
        const elm = ref.current;
        if (!(event.target === elm || (elm == null ? void 0 : elm.contains(event.target))))
          return;
        const info = inputs2.pinch(origin, origin);
        inputs2.isPinching = false;
        (_a = callbacks.onPinchEnd) == null ? void 0 : _a.call(callbacks, info, event);
        rPinchPoint.current = void 0;
        rOriginPoint.current = void 0;
        rDelta.current = [0, 0];
      },
      onPinch: ({ origin, offset, event }) => {
        var _a;
        const elm = ref.current;
        if (!(event.target === elm || (elm == null ? void 0 : elm.contains(event.target))))
          return;
        if (!rOriginPoint.current)
          return;
        const info = inputs2.pinch(origin, rOriginPoint.current);
        const trueDelta = $a8e101027d325e52$export$e947a0f742cf021e.sub(info.delta, rDelta.current);
        rDelta.current = info.delta;
        (_a = callbacks.onPinch) == null ? void 0 : _a.call(callbacks, __spreadProps2(__spreadValues2({}, info), {
          point: info.point,
          origin: rOriginPoint.current,
          delta: [...trueDelta, offset[0]]
        }), event);
        rPinchPoint.current = origin;
      }
    }, {
      target: ref,
      eventOptions: { passive: false },
      pinch: {
        from: zoom,
        scaleBounds: () => ({ from: inputs2.zoom, max: 5, min: 0.1 })
      }
    });
  }
  var TLBoundsEdge;
  (function (TLBoundsEdge2) {
    TLBoundsEdge2["Top"] = "top_edge";
    TLBoundsEdge2["Right"] = "right_edge";
    TLBoundsEdge2["Bottom"] = "bottom_edge";
    TLBoundsEdge2["Left"] = "left_edge";
  })(TLBoundsEdge || (TLBoundsEdge = {}));
  var TLBoundsCorner;
  (function (TLBoundsCorner2) {
    TLBoundsCorner2["TopLeft"] = "top_left_corner";
    TLBoundsCorner2["TopRight"] = "top_right_corner";
    TLBoundsCorner2["BottomRight"] = "bottom_right_corner";
    TLBoundsCorner2["BottomLeft"] = "bottom_left_corner";
  })(TLBoundsCorner || (TLBoundsCorner = {}));
  var SnapPoints;
  (function (SnapPoints2) {
    SnapPoints2["minX"] = "minX";
    SnapPoints2["midX"] = "midX";
    SnapPoints2["maxX"] = "maxX";
    SnapPoints2["minY"] = "minY";
    SnapPoints2["midY"] = "midY";
    SnapPoints2["maxY"] = "maxY";
  })(SnapPoints || (SnapPoints = {}));
  if (!String.prototype.replaceAll) {
    String.prototype.replaceAll = function (str, newStr) {
      if (Object.prototype.toString.call(str).toLowerCase() === "[object regexp]") {
        return this.replace(str, newStr);
      }
      return this.replace(new RegExp(str, "g"), newStr);
    };
  }
  var TAU = Math.PI * 2;
  var _Utils = class {
    static filterObject(obj, fn) {
      return Object.fromEntries(Object.entries(obj).filter(fn));
    }
    static lerp(y1, y2, mu) {
      mu = _Utils.clamp(mu, 0, 1);
      return y1 * (1 - mu) + y2 * mu;
    }
    static lerpColor(color1, color2, factor = 0.5) {
      function h2r(hex) {
        const result2 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return [parseInt(result2[1], 16), parseInt(result2[2], 16), parseInt(result2[3], 16)];
      }
      function r2h(rgb) {
        return "#" + ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1);
      }
      const c1 = h2r(color1) || [0, 0, 0];
      const c2 = h2r(color2) || [0, 0, 0];
      const result = c1.slice();
      for (let i2 = 0; i2 < 3; i2++) {
        result[i2] = Math.round(result[i2] + factor * (c2[i2] - c1[i2]));
      }
      return r2h(result);
    }
    static modulate(value, rangeA, rangeB, clamp3 = false) {
      const [fromLow, fromHigh] = rangeA;
      const [v0, v1] = rangeB;
      const result = v0 + (value - fromLow) / (fromHigh - fromLow) * (v1 - v0);
      return clamp3 ? v0 < v1 ? Math.max(Math.min(result, v1), v0) : Math.max(Math.min(result, v0), v1) : result;
    }
    static clamp(n2, min, max) {
      return Math.max(min, typeof max !== "undefined" ? Math.min(n2, max) : n2);
    }
    static compress(s2) {
      return s2;
    }
    static decompress(s2) {
      return s2;
    }
    static deepClone(obj) {
      if (obj === null)
        return obj;
      if (Array.isArray(obj)) {
        return [...obj];
      }
      if (typeof obj === "object") {
        const clone = __spreadValues2({}, obj);
        Object.keys(clone).forEach((key) => clone[key] = typeof obj[key] === "object" ? _Utils.deepClone(obj[key]) : obj[key]);
        return clone;
      }
      return obj;
    }
    static rng(seed = "") {
      let x2 = 0;
      let y2 = 0;
      let z = 0;
      let w2 = 0;
      function next() {
        const t6 = x2 ^ x2 << 11;
        x2 = y2;
        y2 = z;
        z = w2;
        w2 ^= (w2 >>> 19 ^ t6 ^ t6 >>> 8) >>> 0;
        return w2 / 4294967296;
      }
      for (let k = 0; k < seed.length + 64; k++) {
        x2 ^= seed.charCodeAt(k) | 0;
        next();
      }
      return next;
    }
    static getRectangleSides(point, size, rotation = 0) {
      const center = [point[0] + size[0] / 2, point[1] + size[1] / 2];
      const tl = $a8e101027d325e52$export$e947a0f742cf021e.rotWith(point, center, rotation);
      const tr = $a8e101027d325e52$export$e947a0f742cf021e.rotWith($a8e101027d325e52$export$e947a0f742cf021e.add(point, [size[0], 0]), center, rotation);
      const br = $a8e101027d325e52$export$e947a0f742cf021e.rotWith($a8e101027d325e52$export$e947a0f742cf021e.add(point, size), center, rotation);
      const bl = $a8e101027d325e52$export$e947a0f742cf021e.rotWith($a8e101027d325e52$export$e947a0f742cf021e.add(point, [0, size[1]]), center, rotation);
      return [
        ["top", [tl, tr]],
        ["right", [tr, br]],
        ["bottom", [br, bl]],
        ["left", [bl, tl]]
      ];
    }
    static getBoundsSides(bounds) {
      return this.getRectangleSides([bounds.minX, bounds.minY], [bounds.width, bounds.height]);
    }
    static shallowEqual(objA, objB) {
      if (objA === objB)
        return true;
      if (!objA || !objB)
        return false;
      const aKeys = Object.keys(objA);
      const bKeys = Object.keys(objB);
      const len = aKeys.length;
      if (bKeys.length !== len)
        return false;
      for (let i2 = 0; i2 < len; i2++) {
        const key = aKeys[i2];
        if (objA[key] !== objB[key] || !Object.prototype.hasOwnProperty.call(objB, key)) {
          return false;
        }
      }
      return true;
    }
    static getCircleTangentToPoint(C3, r4, P2, side) {
      const B2 = $a8e101027d325e52$export$e947a0f742cf021e.lrp(C3, P2, 0.5);
      const r1 = $a8e101027d325e52$export$e947a0f742cf021e.dist(C3, B2);
      const delta = $a8e101027d325e52$export$e947a0f742cf021e.sub(B2, C3);
      const d2 = $a8e101027d325e52$export$e947a0f742cf021e.len(delta);
      if (!(d2 <= r4 + r1 && d2 >= Math.abs(r4 - r1))) {
        return null;
      }
      const a2 = (r4 * r4 - r1 * r1 + d2 * d2) / (2 * d2);
      const n2 = 1 / d2;
      const p3 = $a8e101027d325e52$export$e947a0f742cf021e.add(C3, $a8e101027d325e52$export$e947a0f742cf021e.mul(delta, a2 * n2));
      const h2 = Math.sqrt(r4 * r4 - a2 * a2);
      const k = $a8e101027d325e52$export$e947a0f742cf021e.mul($a8e101027d325e52$export$e947a0f742cf021e.per(delta), h2 * n2);
      return side === 0 ? $a8e101027d325e52$export$e947a0f742cf021e.add(p3, k) : $a8e101027d325e52$export$e947a0f742cf021e.sub(p3, k);
    }
    static getOuterTangentsOfCircles(C0, r0, C1, r1) {
      const a0 = $a8e101027d325e52$export$e947a0f742cf021e.angle(C0, C1);
      const d2 = $a8e101027d325e52$export$e947a0f742cf021e.dist(C0, C1);
      if (d2 < Math.abs(r1 - r0)) {
        return null;
      }
      const a1 = Math.acos((r0 - r1) / d2);
      const t0 = a0 + a1;
      const t1 = a0 - a1;
      return [
        [C0[0] + r0 * Math.cos(t1), C0[1] + r0 * Math.sin(t1)],
        [C1[0] + r1 * Math.cos(t1), C1[1] + r1 * Math.sin(t1)],
        [C0[0] + r0 * Math.cos(t0), C0[1] + r0 * Math.sin(t0)],
        [C1[0] + r1 * Math.cos(t0), C1[1] + r1 * Math.sin(t0)]
      ];
    }
    static getClosestPointOnCircle(C3, r4, P2) {
      const v2 = $a8e101027d325e52$export$e947a0f742cf021e.sub(C3, P2);
      return $a8e101027d325e52$export$e947a0f742cf021e.sub(C3, $a8e101027d325e52$export$e947a0f742cf021e.mul($a8e101027d325e52$export$e947a0f742cf021e.div(v2, $a8e101027d325e52$export$e947a0f742cf021e.len(v2)), r4));
    }
    static circleFromThreePoints(A2, B2, C3) {
      const [x1, y1] = A2;
      const [x2, y2] = B2;
      const [x3, y3] = C3;
      const a2 = x1 * (y2 - y3) - y1 * (x2 - x3) + x2 * y3 - x3 * y2;
      const b4 = (x1 * x1 + y1 * y1) * (y3 - y2) + (x2 * x2 + y2 * y2) * (y1 - y3) + (x3 * x3 + y3 * y3) * (y2 - y1);
      const c = (x1 * x1 + y1 * y1) * (x2 - x3) + (x2 * x2 + y2 * y2) * (x3 - x1) + (x3 * x3 + y3 * y3) * (x1 - x2);
      const x4 = -b4 / (2 * a2);
      const y4 = -c / (2 * a2);
      return [x4, y4, Math.hypot(x4 - x1, y4 - y1)];
    }
    static perimeterOfEllipse(rx, ry) {
      const h2 = Math.pow(rx - ry, 2) / Math.pow(rx + ry, 2);
      const p3 = Math.PI * (rx + ry) * (1 + 3 * h2 / (10 + Math.sqrt(4 - 3 * h2)));
      return p3;
    }
    static shortAngleDist(a0, a1) {
      const max = Math.PI * 2;
      const da = (a1 - a0) % max;
      return 2 * da % max - da;
    }
    static longAngleDist(a0, a1) {
      return Math.PI * 2 - _Utils.shortAngleDist(a0, a1);
    }
    static lerpAngles(a0, a1, t6) {
      return a0 + _Utils.shortAngleDist(a0, a1) * t6;
    }
    static angleDelta(a0, a1) {
      return _Utils.shortAngleDist(a0, a1);
    }
    static getSweep(C3, A2, B2) {
      return _Utils.angleDelta($a8e101027d325e52$export$e947a0f742cf021e.angle(C3, A2), $a8e101027d325e52$export$e947a0f742cf021e.angle(C3, B2));
    }
    static rotatePoint(A2, B2, angle) {
      const s2 = Math.sin(angle);
      const c = Math.cos(angle);
      const px = A2[0] - B2[0];
      const py = A2[1] - B2[1];
      const nx = px * c - py * s2;
      const ny = px * s2 + py * c;
      return [nx + B2[0], ny + B2[1]];
    }
    static clampRadians(r4) {
      return (Math.PI * 2 + r4) % (Math.PI * 2);
    }
    static snapAngleToSegments(r4, segments) {
      const seg = Math.PI * 2 / segments;
      return Math.floor((_Utils.clampRadians(r4) + seg / 2) / seg) * seg;
    }
    static isAngleBetween(a2, b4, c) {
      if (c === a2 || c === b4)
        return true;
      const AB = (b4 - a2 + TAU) % TAU;
      const AC = (c - a2 + TAU) % TAU;
      return AB <= Math.PI !== AC > AB;
    }
    static degreesToRadians(d2) {
      return d2 * Math.PI / 180;
    }
    static radiansToDegrees(r4) {
      return r4 * 180 / Math.PI;
    }
    static getArcLength(C3, r4, A2, B2) {
      const sweep = _Utils.getSweep(C3, A2, B2);
      return r4 * (2 * Math.PI) * (sweep / (2 * Math.PI));
    }
    static getSweepFlag(A2, B2, C3) {
      const angleAC = $a8e101027d325e52$export$e947a0f742cf021e.angle(A2, C3);
      const angleAB = $a8e101027d325e52$export$e947a0f742cf021e.angle(A2, B2);
      const angleCAB = (angleAB - angleAC + 3 * Math.PI) % (2 * Math.PI) - Math.PI;
      return angleCAB > 0 ? 0 : 1;
    }
    static getLargeArcFlag(A2, C3, P2) {
      const anglePA = $a8e101027d325e52$export$e947a0f742cf021e.angle(P2, A2);
      const anglePC = $a8e101027d325e52$export$e947a0f742cf021e.angle(P2, C3);
      const angleAPC = (anglePC - anglePA + 3 * Math.PI) % (2 * Math.PI) - Math.PI;
      return Math.abs(angleAPC) > Math.PI / 2 ? 0 : 1;
    }
    static getArcDashOffset(C3, r4, A2, B2, step) {
      const del0 = _Utils.getSweepFlag(C3, A2, B2);
      const len0 = _Utils.getArcLength(C3, r4, A2, B2);
      const off0 = del0 < 0 ? len0 : 2 * Math.PI * C3[2] - len0;
      return -off0 / 2 + step;
    }
    static getEllipseDashOffset(A2, step) {
      const c = 2 * Math.PI * A2[2];
      return -c / 2 + -step;
    }
    static getTLBezierCurveSegments(points, tension = 0.4) {
      const len = points.length;
      const cpoints = [...points];
      if (len < 2) {
        throw Error("Curve must have at least two points.");
      }
      for (let i2 = 1; i2 < len - 1; i2++) {
        const p0 = points[i2 - 1];
        const p1 = points[i2];
        const p22 = points[i2 + 1];
        const pdx = p22[0] - p0[0];
        const pdy = p22[1] - p0[1];
        const pd = Math.hypot(pdx, pdy);
        const nx = pdx / pd;
        const ny = pdy / pd;
        const dp = Math.hypot(p1[0] - p0[0], p1[1] - p0[1]);
        const dn = Math.hypot(p1[0] - p22[0], p1[1] - p22[1]);
        cpoints[i2] = [
          p1[0] - nx * dp * tension,
          p1[1] - ny * dp * tension,
          p1[0] + nx * dn * tension,
          p1[1] + ny * dn * tension,
          nx,
          ny
        ];
      }
      const d0 = Math.hypot(points[0][0] + cpoints[1][0]);
      cpoints[0][2] = (points[0][0] + cpoints[1][0]) / 2;
      cpoints[0][3] = (points[0][1] + cpoints[1][1]) / 2;
      cpoints[0][4] = (cpoints[1][0] - points[0][0]) / d0;
      cpoints[0][5] = (cpoints[1][1] - points[0][1]) / d0;
      const d1 = Math.hypot(points[len - 1][1] + cpoints[len - 1][1]);
      cpoints[len - 1][0] = (points[len - 1][0] + cpoints[len - 2][2]) / 2;
      cpoints[len - 1][1] = (points[len - 1][1] + cpoints[len - 2][3]) / 2;
      cpoints[len - 1][4] = (cpoints[len - 2][2] - points[len - 1][0]) / -d1;
      cpoints[len - 1][5] = (cpoints[len - 2][3] - points[len - 1][1]) / -d1;
      const results = [];
      for (let i2 = 1; i2 < cpoints.length; i2++) {
        results.push({
          start: points[i2 - 1].slice(0, 2),
          tangentStart: cpoints[i2 - 1].slice(2, 4),
          normalStart: cpoints[i2 - 1].slice(4, 6),
          pressureStart: 2 + ((i2 - 1) % 2 === 0 ? 1.5 : 0),
          end: points[i2].slice(0, 2),
          tangentEnd: cpoints[i2].slice(0, 2),
          normalEnd: cpoints[i2].slice(4, 6),
          pressureEnd: 2 + (i2 % 2 === 0 ? 1.5 : 0)
        });
      }
      return results;
    }
    static computePointOnCurve(t6, points) {
      if (t6 === 0) {
        return points[0];
      }
      const order = points.length - 1;
      if (t6 === 1) {
        return points[order];
      }
      const mt = 1 - t6;
      let p3 = points;
      if (order === 0) {
        return points[0];
      }
      if (order === 1) {
        return [mt * p3[0][0] + t6 * p3[1][0], mt * p3[0][1] + t6 * p3[1][1]];
      }
      const mt2 = mt * mt;
      const t22 = t6 * t6;
      let a2;
      let b4;
      let c;
      let d2 = 0;
      if (order === 2) {
        p3 = [p3[0], p3[1], p3[2], [0, 0]];
        a2 = mt2;
        b4 = mt * t6 * 2;
        c = t22;
      } else {
        a2 = mt2 * mt;
        b4 = mt2 * t6 * 3;
        c = mt * t22 * 3;
        d2 = t6 * t22;
      }
      return [
        a2 * p3[0][0] + b4 * p3[1][0] + c * p3[2][0] + d2 * p3[3][0],
        a2 * p3[0][1] + b4 * p3[1][1] + c * p3[2][1] + d2 * p3[3][1]
      ];
    }
    static cubicBezier(tx, x1, y1, x2, y2) {
      const x0 = 0;
      const y0 = 0;
      const x3 = 1;
      const y3 = 1;
      const A2 = x3 - 3 * x2 + 3 * x1 - x0;
      const B2 = 3 * x2 - 6 * x1 + 3 * x0;
      const C3 = 3 * x1 - 3 * x0;
      const D2 = x0;
      const E2 = y3 - 3 * y2 + 3 * y1 - y0;
      const F = 3 * y2 - 6 * y1 + 3 * y0;
      const G2 = 3 * y1 - 3 * y0;
      const H = y0;
      const iterations = 5;
      let i2;
      let slope;
      let x4;
      let t6 = tx;
      for (i2 = 0; i2 < iterations; i2++) {
        x4 = A2 * t6 * t6 * t6 + B2 * t6 * t6 + C3 * t6 + D2;
        slope = 1 / (3 * A2 * t6 * t6 + 2 * B2 * t6 + C3);
        t6 -= (x4 - tx) * slope;
        t6 = t6 > 1 ? 1 : t6 < 0 ? 0 : t6;
      }
      return Math.abs(E2 * t6 * t6 * t6 + F * t6 * t6 + G2 * t6 * H);
    }
    static getSpline(pts, k = 0.5) {
      let p0;
      let [p1, p22, p3] = pts;
      const results = [];
      for (let i2 = 1, len = pts.length; i2 < len; i2++) {
        p0 = p1;
        p1 = p22;
        p22 = p3;
        p3 = pts[i2 + 2] ? pts[i2 + 2] : p22;
        results.push({
          cp1x: p1[0] + (p22[0] - p0[0]) / 6 * k,
          cp1y: p1[1] + (p22[1] - p0[1]) / 6 * k,
          cp2x: p22[0] - (p3[0] - p1[0]) / 6 * k,
          cp2y: p22[1] - (p3[1] - p1[1]) / 6 * k,
          px: pts[i2][0],
          py: pts[i2][1]
        });
      }
      return results;
    }
    static getCurvePoints(pts, tension = 0.5, isClosed = false, numOfSegments = 3) {
      const _pts = [...pts];
      const len = pts.length;
      const res = [];
      let t1x, t2x, t1y, t2y, c1, c2, c3, c4, st, st2, st3;
      if (isClosed) {
        _pts.unshift(_pts[len - 1]);
        _pts.push(_pts[0]);
      } else {
        _pts.unshift(_pts[0]);
        _pts.push(_pts[len - 1]);
      }
      for (let i2 = 1; i2 < _pts.length - 2; i2++) {
        for (let t6 = 0; t6 <= numOfSegments; t6++) {
          st = t6 / numOfSegments;
          st2 = Math.pow(st, 2);
          st3 = Math.pow(st, 3);
          c1 = 2 * st3 - 3 * st2 + 1;
          c2 = -(2 * st3) + 3 * st2;
          c3 = st3 - 2 * st2 + st;
          c4 = st3 - st2;
          t1x = (_pts[i2 + 1][0] - _pts[i2 - 1][0]) * tension;
          t2x = (_pts[i2 + 2][0] - _pts[i2][0]) * tension;
          t1y = (_pts[i2 + 1][1] - _pts[i2 - 1][1]) * tension;
          t2y = (_pts[i2 + 2][1] - _pts[i2][1]) * tension;
          res.push([
            c1 * _pts[i2][0] + c2 * _pts[i2 + 1][0] + c3 * t1x + c4 * t2x,
            c1 * _pts[i2][1] + c2 * _pts[i2 + 1][1] + c3 * t1y + c4 * t2y
          ]);
        }
      }
      res.push(pts[pts.length - 1]);
      return res;
    }
    static simplify(points, tolerance = 1) {
      const len = points.length;
      const a2 = points[0];
      const b4 = points[len - 1];
      const [x1, y1] = a2;
      const [x2, y2] = b4;
      if (len > 2) {
        let distance = 0;
        let index = 0;
        const max = Math.hypot(y2 - y1, x2 - x1);
        for (let i2 = 1; i2 < len - 1; i2++) {
          const [x0, y0] = points[i2];
          const d2 = Math.abs((y2 - y1) * x0 - (x2 - x1) * y0 + x2 * y1 - y2 * x1) / max;
          if (distance > d2)
            continue;
          distance = d2;
          index = i2;
        }
        if (distance > tolerance) {
          const l0 = _Utils.simplify(points.slice(0, index + 1), tolerance);
          const l1 = _Utils.simplify(points.slice(index + 1), tolerance);
          return l0.concat(l1.slice(1));
        }
      }
      return [a2, b4];
    }
    static pointInCircle(A2, C3, r4) {
      return $a8e101027d325e52$export$e947a0f742cf021e.dist(A2, C3) <= r4;
    }
    static pointInEllipse(A2, C3, rx, ry, rotation = 0) {
      rotation = rotation || 0;
      const cos = Math.cos(rotation);
      const sin = Math.sin(rotation);
      const delta = $a8e101027d325e52$export$e947a0f742cf021e.sub(A2, C3);
      const tdx = cos * delta[0] + sin * delta[1];
      const tdy = sin * delta[0] - cos * delta[1];
      return tdx * tdx / (rx * rx) + tdy * tdy / (ry * ry) <= 1;
    }
    static pointInRect(point, size) {
      return !(point[0] < size[0] || point[0] > point[0] + size[0] || point[1] < size[1] || point[1] > point[1] + size[1]);
    }
    static pointInPolygon(p3, points) {
      let wn = 0;
      points.forEach((a2, i2) => {
        const b4 = points[(i2 + 1) % points.length];
        if (a2[1] <= p3[1]) {
          if (b4[1] > p3[1] && $a8e101027d325e52$export$e947a0f742cf021e.cross(a2, b4, p3) > 0) {
            wn += 1;
          }
        } else if (b4[1] <= p3[1] && $a8e101027d325e52$export$e947a0f742cf021e.cross(a2, b4, p3) < 0) {
          wn -= 1;
        }
      });
      return wn !== 0;
    }
    static expandBounds(bounds, delta) {
      return {
        minX: bounds.minX - delta,
        minY: bounds.minY - delta,
        maxX: bounds.maxX + delta,
        maxY: bounds.maxY + delta,
        width: bounds.width + delta * 2,
        height: bounds.height + delta * 2
      };
    }
    static pointInBounds(A2, b4) {
      return !(A2[0] < b4.minX || A2[0] > b4.maxX || A2[1] < b4.minY || A2[1] > b4.maxY);
    }
    static boundsCollide(a2, b4) {
      return !(a2.maxX < b4.minX || a2.minX > b4.maxX || a2.maxY < b4.minY || a2.minY > b4.maxY);
    }
    static boundsContain(a2, b4) {
      return a2.minX < b4.minX && a2.minY < b4.minY && a2.maxY > b4.maxY && a2.maxX > b4.maxX;
    }
    static boundsContained(a2, b4) {
      return _Utils.boundsContain(b4, a2);
    }
    static boundsAreEqual(a2, b4) {
      return !(b4.maxX !== a2.maxX || b4.minX !== a2.minX || b4.maxY !== a2.maxY || b4.minY !== a2.minY);
    }
    static getBoundsFromPoints(points, rotation = 0) {
      let minX = Infinity;
      let minY = Infinity;
      let maxX = -Infinity;
      let maxY = -Infinity;
      if (points.length < 2) {
        minX = 0;
        minY = 0;
        maxX = 1;
        maxY = 1;
      } else {
        for (const [x2, y2] of points) {
          minX = Math.min(x2, minX);
          minY = Math.min(y2, minY);
          maxX = Math.max(x2, maxX);
          maxY = Math.max(y2, maxY);
        }
      }
      if (rotation !== 0) {
        return _Utils.getBoundsFromPoints(points.map((pt) => $a8e101027d325e52$export$e947a0f742cf021e.rotWith(pt, [(minX + maxX) / 2, (minY + maxY) / 2], rotation)));
      }
      return {
        minX,
        minY,
        maxX,
        maxY,
        width: Math.max(1, maxX - minX),
        height: Math.max(1, maxY - minY)
      };
    }
    static centerBounds(bounds, point) {
      const boundsCenter = this.getBoundsCenter(bounds);
      const dx = point[0] - boundsCenter[0];
      const dy = point[1] - boundsCenter[1];
      return this.translateBounds(bounds, [dx, dy]);
    }
    static translateBounds(bounds, delta) {
      return {
        minX: bounds.minX + delta[0],
        minY: bounds.minY + delta[1],
        maxX: bounds.maxX + delta[0],
        maxY: bounds.maxY + delta[1],
        width: bounds.width,
        height: bounds.height
      };
    }
    static rotateBounds(bounds, center, rotation) {
      const [minX, minY] = $a8e101027d325e52$export$e947a0f742cf021e.rotWith([bounds.minX, bounds.minY], center, rotation);
      const [maxX, maxY] = $a8e101027d325e52$export$e947a0f742cf021e.rotWith([bounds.maxX, bounds.maxY], center, rotation);
      return {
        minX,
        minY,
        maxX,
        maxY,
        width: bounds.width,
        height: bounds.height
      };
    }
    static getRotatedEllipseBounds(x2, y2, rx, ry, rotation = 0) {
      const c = Math.cos(rotation);
      const s2 = Math.sin(rotation);
      const w2 = Math.hypot(rx * c, ry * s2);
      const h2 = Math.hypot(rx * s2, ry * c);
      return {
        minX: x2 + rx - w2,
        minY: y2 + ry - h2,
        maxX: x2 + rx + w2,
        maxY: y2 + ry + h2,
        width: w2 * 2,
        height: h2 * 2
      };
    }
    static getExpandedBounds(a2, b4) {
      const minX = Math.min(a2.minX, b4.minX);
      const minY = Math.min(a2.minY, b4.minY);
      const maxX = Math.max(a2.maxX, b4.maxX);
      const maxY = Math.max(a2.maxY, b4.maxY);
      const width = Math.abs(maxX - minX);
      const height = Math.abs(maxY - minY);
      return { minX, minY, maxX, maxY, width, height };
    }
    static getCommonBounds(bounds) {
      if (bounds.length < 2)
        return bounds[0];
      let result = bounds[0];
      for (let i2 = 1; i2 < bounds.length; i2++) {
        result = _Utils.getExpandedBounds(result, bounds[i2]);
      }
      return result;
    }
    static getRotatedCorners(b4, rotation = 0) {
      const center = [b4.minX + b4.width / 2, b4.minY + b4.height / 2];
      return [
        [b4.minX, b4.minY],
        [b4.maxX, b4.minY],
        [b4.maxX, b4.maxY],
        [b4.minX, b4.maxY]
      ].map((point) => $a8e101027d325e52$export$e947a0f742cf021e.rotWith(point, center, rotation));
    }
    static getTransformedBoundingBox(bounds, handle, delta, rotation = 0, isAspectRatioLocked = false) {
      const [ax0, ay0] = [bounds.minX, bounds.minY];
      const [ax1, ay1] = [bounds.maxX, bounds.maxY];
      let [bx0, by0] = [bounds.minX, bounds.minY];
      let [bx1, by1] = [bounds.maxX, bounds.maxY];
      if (handle === "center") {
        return {
          minX: bx0 + delta[0],
          minY: by0 + delta[1],
          maxX: bx1 + delta[0],
          maxY: by1 + delta[1],
          width: bx1 - bx0,
          height: by1 - by0,
          scaleX: 1,
          scaleY: 1
        };
      }
      const [dx, dy] = $a8e101027d325e52$export$e947a0f742cf021e.rot(delta, -rotation);
      switch (handle) {
        case TLBoundsEdge.Top:
        case TLBoundsCorner.TopLeft:
        case TLBoundsCorner.TopRight: {
          by0 += dy;
          break;
        }
        case TLBoundsEdge.Bottom:
        case TLBoundsCorner.BottomLeft:
        case TLBoundsCorner.BottomRight: {
          by1 += dy;
          break;
        }
      }
      switch (handle) {
        case TLBoundsEdge.Left:
        case TLBoundsCorner.TopLeft:
        case TLBoundsCorner.BottomLeft: {
          bx0 += dx;
          break;
        }
        case TLBoundsEdge.Right:
        case TLBoundsCorner.TopRight:
        case TLBoundsCorner.BottomRight: {
          bx1 += dx;
          break;
        }
      }
      const aw = ax1 - ax0;
      const ah = ay1 - ay0;
      const scaleX = (bx1 - bx0) / aw;
      const scaleY = (by1 - by0) / ah;
      const flipX = scaleX < 0;
      const flipY = scaleY < 0;
      const bw = Math.abs(bx1 - bx0);
      const bh = Math.abs(by1 - by0);
      if (isAspectRatioLocked) {
        const ar = aw / ah;
        const isTall = ar < bw / bh;
        const tw = bw * (scaleY < 0 ? 1 : -1) * (1 / ar);
        const th = bh * (scaleX < 0 ? 1 : -1) * ar;
        switch (handle) {
          case TLBoundsCorner.TopLeft: {
            if (isTall)
              by0 = by1 + tw;
            else
              bx0 = bx1 + th;
            break;
          }
          case TLBoundsCorner.TopRight: {
            if (isTall)
              by0 = by1 + tw;
            else
              bx1 = bx0 - th;
            break;
          }
          case TLBoundsCorner.BottomRight: {
            if (isTall)
              by1 = by0 - tw;
            else
              bx1 = bx0 - th;
            break;
          }
          case TLBoundsCorner.BottomLeft: {
            if (isTall)
              by1 = by0 - tw;
            else
              bx0 = bx1 + th;
            break;
          }
          case TLBoundsEdge.Bottom:
          case TLBoundsEdge.Top: {
            const m3 = (bx0 + bx1) / 2;
            const w2 = bh * ar;
            bx0 = m3 - w2 / 2;
            bx1 = m3 + w2 / 2;
            break;
          }
          case TLBoundsEdge.Left:
          case TLBoundsEdge.Right: {
            const m3 = (by0 + by1) / 2;
            const h2 = bw / ar;
            by0 = m3 - h2 / 2;
            by1 = m3 + h2 / 2;
            break;
          }
        }
      }
      if (rotation % (Math.PI * 2) !== 0) {
        let cv = [0, 0];
        const c0 = $a8e101027d325e52$export$e947a0f742cf021e.med([ax0, ay0], [ax1, ay1]);
        const c1 = $a8e101027d325e52$export$e947a0f742cf021e.med([bx0, by0], [bx1, by1]);
        switch (handle) {
          case TLBoundsCorner.TopLeft: {
            cv = $a8e101027d325e52$export$e947a0f742cf021e.sub($a8e101027d325e52$export$e947a0f742cf021e.rotWith([bx1, by1], c1, rotation), $a8e101027d325e52$export$e947a0f742cf021e.rotWith([ax1, ay1], c0, rotation));
            break;
          }
          case TLBoundsCorner.TopRight: {
            cv = $a8e101027d325e52$export$e947a0f742cf021e.sub($a8e101027d325e52$export$e947a0f742cf021e.rotWith([bx0, by1], c1, rotation), $a8e101027d325e52$export$e947a0f742cf021e.rotWith([ax0, ay1], c0, rotation));
            break;
          }
          case TLBoundsCorner.BottomRight: {
            cv = $a8e101027d325e52$export$e947a0f742cf021e.sub($a8e101027d325e52$export$e947a0f742cf021e.rotWith([bx0, by0], c1, rotation), $a8e101027d325e52$export$e947a0f742cf021e.rotWith([ax0, ay0], c0, rotation));
            break;
          }
          case TLBoundsCorner.BottomLeft: {
            cv = $a8e101027d325e52$export$e947a0f742cf021e.sub($a8e101027d325e52$export$e947a0f742cf021e.rotWith([bx1, by0], c1, rotation), $a8e101027d325e52$export$e947a0f742cf021e.rotWith([ax1, ay0], c0, rotation));
            break;
          }
          case TLBoundsEdge.Top: {
            cv = $a8e101027d325e52$export$e947a0f742cf021e.sub($a8e101027d325e52$export$e947a0f742cf021e.rotWith($a8e101027d325e52$export$e947a0f742cf021e.med([bx0, by1], [bx1, by1]), c1, rotation), $a8e101027d325e52$export$e947a0f742cf021e.rotWith($a8e101027d325e52$export$e947a0f742cf021e.med([ax0, ay1], [ax1, ay1]), c0, rotation));
            break;
          }
          case TLBoundsEdge.Left: {
            cv = $a8e101027d325e52$export$e947a0f742cf021e.sub($a8e101027d325e52$export$e947a0f742cf021e.rotWith($a8e101027d325e52$export$e947a0f742cf021e.med([bx1, by0], [bx1, by1]), c1, rotation), $a8e101027d325e52$export$e947a0f742cf021e.rotWith($a8e101027d325e52$export$e947a0f742cf021e.med([ax1, ay0], [ax1, ay1]), c0, rotation));
            break;
          }
          case TLBoundsEdge.Bottom: {
            cv = $a8e101027d325e52$export$e947a0f742cf021e.sub($a8e101027d325e52$export$e947a0f742cf021e.rotWith($a8e101027d325e52$export$e947a0f742cf021e.med([bx0, by0], [bx1, by0]), c1, rotation), $a8e101027d325e52$export$e947a0f742cf021e.rotWith($a8e101027d325e52$export$e947a0f742cf021e.med([ax0, ay0], [ax1, ay0]), c0, rotation));
            break;
          }
          case TLBoundsEdge.Right: {
            cv = $a8e101027d325e52$export$e947a0f742cf021e.sub($a8e101027d325e52$export$e947a0f742cf021e.rotWith($a8e101027d325e52$export$e947a0f742cf021e.med([bx0, by0], [bx0, by1]), c1, rotation), $a8e101027d325e52$export$e947a0f742cf021e.rotWith($a8e101027d325e52$export$e947a0f742cf021e.med([ax0, ay0], [ax0, ay1]), c0, rotation));
            break;
          }
        }
        ;
        [bx0, by0] = $a8e101027d325e52$export$e947a0f742cf021e.sub([bx0, by0], cv);
        [bx1, by1] = $a8e101027d325e52$export$e947a0f742cf021e.sub([bx1, by1], cv);
      }
      if (bx1 < bx0) {
        ;
        [bx1, bx0] = [bx0, bx1];
      }
      if (by1 < by0) {
        ;
        [by1, by0] = [by0, by1];
      }
      return {
        minX: bx0,
        minY: by0,
        maxX: bx1,
        maxY: by1,
        width: bx1 - bx0,
        height: by1 - by0,
        scaleX: (bx1 - bx0) / (ax1 - ax0 || 1) * (flipX ? -1 : 1),
        scaleY: (by1 - by0) / (ay1 - ay0 || 1) * (flipY ? -1 : 1)
      };
    }
    static getTransformAnchor(type, isFlippedX, isFlippedY) {
      let anchor = type;
      switch (type) {
        case TLBoundsCorner.TopLeft: {
          if (isFlippedX && isFlippedY) {
            anchor = TLBoundsCorner.BottomRight;
          } else if (isFlippedX) {
            anchor = TLBoundsCorner.TopRight;
          } else if (isFlippedY) {
            anchor = TLBoundsCorner.BottomLeft;
          } else {
            anchor = TLBoundsCorner.BottomRight;
          }
          break;
        }
        case TLBoundsCorner.TopRight: {
          if (isFlippedX && isFlippedY) {
            anchor = TLBoundsCorner.BottomLeft;
          } else if (isFlippedX) {
            anchor = TLBoundsCorner.TopLeft;
          } else if (isFlippedY) {
            anchor = TLBoundsCorner.BottomRight;
          } else {
            anchor = TLBoundsCorner.BottomLeft;
          }
          break;
        }
        case TLBoundsCorner.BottomRight: {
          if (isFlippedX && isFlippedY) {
            anchor = TLBoundsCorner.TopLeft;
          } else if (isFlippedX) {
            anchor = TLBoundsCorner.BottomLeft;
          } else if (isFlippedY) {
            anchor = TLBoundsCorner.TopRight;
          } else {
            anchor = TLBoundsCorner.TopLeft;
          }
          break;
        }
        case TLBoundsCorner.BottomLeft: {
          if (isFlippedX && isFlippedY) {
            anchor = TLBoundsCorner.TopRight;
          } else if (isFlippedX) {
            anchor = TLBoundsCorner.BottomRight;
          } else if (isFlippedY) {
            anchor = TLBoundsCorner.TopLeft;
          } else {
            anchor = TLBoundsCorner.TopRight;
          }
          break;
        }
      }
      return anchor;
    }
    static getRelativeTransformedBoundingBox(bounds, initialBounds, initialShapeBounds, isFlippedX, isFlippedY) {
      const nx = (isFlippedX ? initialBounds.maxX - initialShapeBounds.maxX : initialShapeBounds.minX - initialBounds.minX) / initialBounds.width;
      const ny = (isFlippedY ? initialBounds.maxY - initialShapeBounds.maxY : initialShapeBounds.minY - initialBounds.minY) / initialBounds.height;
      const nw = initialShapeBounds.width / initialBounds.width;
      const nh = initialShapeBounds.height / initialBounds.height;
      const minX = bounds.minX + bounds.width * nx;
      const minY = bounds.minY + bounds.height * ny;
      const width = bounds.width * nw;
      const height = bounds.height * nh;
      return {
        minX,
        minY,
        maxX: minX + width,
        maxY: minY + height,
        width,
        height
      };
    }
    static getRotatedSize(size, rotation) {
      const center = $a8e101027d325e52$export$e947a0f742cf021e.div(size, 2);
      const points = [[0, 0], [size[0], 0], size, [0, size[1]]].map((point) => $a8e101027d325e52$export$e947a0f742cf021e.rotWith(point, center, rotation));
      const bounds = _Utils.getBoundsFromPoints(points);
      return [bounds.width, bounds.height];
    }
    static getBoundsCenter(bounds) {
      return [bounds.minX + bounds.width / 2, bounds.minY + bounds.height / 2];
    }
    static getBoundsWithCenter(bounds) {
      const center = _Utils.getBoundsCenter(bounds);
      return __spreadProps2(__spreadValues2({}, bounds), {
        midX: center[0],
        midY: center[1]
      });
    }
    static getCommonTopLeft(points) {
      const min = [Infinity, Infinity];
      points.forEach((point) => {
        min[0] = Math.min(min[0], point[0]);
        min[1] = Math.min(min[1], point[1]);
      });
      return min;
    }
    static removeDuplicatePoints(points) {
      return points.reduce((acc, pt, i2) => {
        if (i2 === 0 || !$a8e101027d325e52$export$e947a0f742cf021e.isEqual(pt, acc[i2 - 1])) {
          acc.push(pt);
        }
        return acc;
      }, []);
    }
    static getFromCache(cache, item, getNext) {
      let value = cache.get(item);
      if (value === void 0) {
        cache.set(item, getNext());
        value = cache.get(item);
        if (value === void 0) {
          throw Error("Cache did not include item!");
        }
      }
      return value;
    }
    static uniqueId(a2 = "") {
      return a2 ? ((Number(a2) ^ Math.random() * 16) >> Number(a2) / 4).toString(16) : `${1e7}-${1e3}-${4e3}-${8e3}-${1e11}`.replace(/[018]/g, _Utils.uniqueId);
    }
    static rotateArray(arr, offset) {
      return arr.map((_, i2) => arr[(i2 + offset) % arr.length]);
    }
    static deepCompareArrays(a2, b4) {
      if ((a2 == null ? void 0 : a2.length) !== (b4 == null ? void 0 : b4.length))
        return false;
      return _Utils.deepCompare(a2, b4);
    }
    static deepCompare(a2, b4) {
      return a2 === b4 || JSON.stringify(a2) === JSON.stringify(b4);
    }
    static arrsIntersect(a2, b4, fn) {
      return a2.some((item) => b4.includes(fn ? fn(item) : item));
    }
    static uniqueArray(...items) {
      return Array.from(new Set(items).values());
    }
    static setToArray(set2) {
      return Array.from(set2.values());
    }
    static debounce(fn, ms = 0) {
      let timeoutId;
      return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(args), ms);
      };
    }
    static getSvgPathFromStroke(points, closed = true) {
      if (!points.length) {
        return "";
      }
      const max = points.length - 1;
      return points.reduce((acc, point, i2, arr) => {
        if (i2 === max) {
          if (closed) {
            acc.push("Z");
          }
        } else {
          acc.push(point, $a8e101027d325e52$export$e947a0f742cf021e.med(point, arr[i2 + 1]));
        }
        return acc;
      }, ["M", points[0], "Q"]).join(" ").replaceAll(this.TRIM_NUMBERS, "$1");
    }
    static getPerfectDashProps(length, strokeWidth, style, snap = 1, outset = true) {
      let dashLength;
      let strokeDashoffset;
      let ratio;
      if (style.toLowerCase() === "dashed") {
        dashLength = strokeWidth * 2;
        ratio = 1;
        strokeDashoffset = outset ? (dashLength / 2).toString() : "0";
      } else if (style.toLowerCase() === "dotted") {
        dashLength = strokeWidth / 100;
        ratio = 100;
        strokeDashoffset = "0";
      } else {
        return {
          strokeDasharray: "none",
          strokeDashoffset: "none"
        };
      }
      let dashes = Math.floor(length / dashLength / (2 * ratio));
      dashes -= dashes % snap;
      dashes = Math.max(dashes, 4);
      const gapLength = Math.max(dashLength, (length - dashes * dashLength) / (outset ? dashes : dashes - 1));
      return {
        strokeDasharray: [dashLength, gapLength].join(" "),
        strokeDashoffset
      };
    }
    static isMobileSize() {
      if (typeof window === "undefined")
        return false;
      return window.innerWidth < 768;
    }
    static isMobileSafari() {
      if (typeof window === "undefined")
        return false;
      const ua = window.navigator.userAgent;
      const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
      const webkit = !!ua.match(/WebKit/i);
      return iOS && webkit && !ua.match(/CriOS/i);
    }
    static throttle(func, limit) {
      let inThrottle;
      let lastResult;
      return function (...args) {
        if (!inThrottle) {
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
          lastResult = func(...args);
        }
        return lastResult;
      };
    }
    static isDarwin() {
      return /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);
    }
    static metaKey(e7) {
      return _Utils.isDarwin() ? e7.metaKey : e7.ctrlKey;
    }
  };
  var Utils = _Utils;
  Utils.deepMerge = (target, patch) => {
    const result = __spreadValues2({}, target);
    const entries = Object.entries(patch);
    for (const [key, value] of entries)
      result[key] = value === Object(value) && !Array.isArray(value) ? _Utils.deepMerge(result[key], value) : value;
    return result;
  };
  Utils.getSnapPoints = (bounds, others, snapDistance) => {
    const A2 = __spreadValues2({}, bounds);
    const offset = [0, 0];
    const snapLines = [];
    const snaps = {
      [SnapPoints.minX]: { id: SnapPoints.minX, isSnapped: false },
      [SnapPoints.midX]: { id: SnapPoints.midX, isSnapped: false },
      [SnapPoints.maxX]: { id: SnapPoints.maxX, isSnapped: false },
      [SnapPoints.minY]: { id: SnapPoints.minY, isSnapped: false },
      [SnapPoints.midY]: { id: SnapPoints.midY, isSnapped: false },
      [SnapPoints.maxY]: { id: SnapPoints.maxY, isSnapped: false }
    };
    const xs = [SnapPoints.midX, SnapPoints.minX, SnapPoints.maxX];
    const ys = [SnapPoints.midY, SnapPoints.minY, SnapPoints.maxY];
    const snapResults = others.map((B2) => {
      const rx = xs.flatMap((f3, i2) => xs.map((t6, k) => {
        const gap = A2[f3] - B2[t6];
        const distance = Math.abs(gap);
        return {
          f: f3,
          t: t6,
          gap,
          distance,
          isCareful: i2 === 0 || i2 + k === 3
        };
      }));
      const ry = ys.flatMap((f3, i2) => ys.map((t6, k) => {
        const gap = A2[f3] - B2[t6];
        const distance = Math.abs(gap);
        return {
          f: f3,
          t: t6,
          gap,
          distance,
          isCareful: i2 === 0 || i2 + k === 3
        };
      }));
      return [B2, rx, ry];
    });
    let gapX = Infinity;
    let gapY = Infinity;
    let minX = Infinity;
    let minY = Infinity;
    snapResults.forEach(([_, rx, ry]) => {
      rx.forEach((r4) => {
        if (r4.distance < snapDistance && r4.distance < minX) {
          minX = r4.distance;
          gapX = r4.gap;
        }
      });
      ry.forEach((r4) => {
        if (r4.distance < snapDistance && r4.distance < minY) {
          minY = r4.distance;
          gapY = r4.gap;
        }
      });
    });
    snapResults.forEach(([B2, rx, ry]) => {
      if (gapX !== Infinity) {
        rx.forEach((r4) => {
          if (Math.abs(r4.gap - gapX) < 2) {
            snaps[r4.f] = __spreadProps2(__spreadValues2({}, snaps[r4.f]), {
              isSnapped: true,
              to: B2[r4.t],
              B: B2,
              distance: r4.distance
            });
          }
        });
      }
      if (gapY !== Infinity) {
        ry.forEach((r4) => {
          if (Math.abs(r4.gap - gapY) < 2) {
            snaps[r4.f] = __spreadProps2(__spreadValues2({}, snaps[r4.f]), {
              isSnapped: true,
              to: B2[r4.t],
              B: B2,
              distance: r4.distance
            });
          }
        });
      }
    });
    offset[0] = gapX === Infinity ? 0 : gapX;
    offset[1] = gapY === Infinity ? 0 : gapY;
    A2.minX -= offset[0];
    A2.midX -= offset[0];
    A2.maxX -= offset[0];
    A2.minY -= offset[1];
    A2.midY -= offset[1];
    A2.maxY -= offset[1];
    xs.forEach((from) => {
      const snap = snaps[from];
      if (!snap.isSnapped)
        return;
      const { id, B: B2 } = snap;
      const x2 = A2[id];
      snapLines.push(id === SnapPoints.minX ? [
        [x2, A2.midY],
        [x2, B2.minY],
        [x2, B2.maxY]
      ] : [
        [x2, A2.minY],
        [x2, A2.maxY],
        [x2, B2.minY],
        [x2, B2.maxY]
      ]);
    });
    ys.forEach((from) => {
      const snap = snaps[from];
      if (!snap.isSnapped)
        return;
      const { id, B: B2 } = snap;
      const y2 = A2[id];
      snapLines.push(id === SnapPoints.midY ? [
        [A2.midX, y2],
        [B2.minX, y2],
        [B2.maxX, y2]
      ] : [
        [A2.minX, y2],
        [A2.maxX, y2],
        [B2.minX, y2],
        [B2.maxX, y2]
      ]);
    });
    return { offset, snapLines };
  };
  Utils.TRIM_NUMBERS = /(\s?[A-Z]?,?-?[0-9]*\.[0-9]{0,2})(([0-9]|e|-)*)/g;
  var utils_default = Utils;
  function useSafariFocusOutFix() {
    const { callbacks } = useTLContext();
    (0, import_react7.useEffect)(() => {
      function handleFocusOut() {
        var _a;
        (_a = callbacks.onShapeBlur) == null ? void 0 : _a.call(callbacks);
      }
      if (utils_default.isMobileSafari()) {
        document.addEventListener("focusout", handleFocusOut);
        return () => document.removeEventListener("focusout", handleFocusOut);
      }
      return () => null;
    }, [callbacks]);
  }
  function useCanvasEvents() {
    const { callbacks, inputs: inputs2 } = useTLContext();
    const onPointerDown = (0, import_react8.useCallback)((e7) => {
      var _a, _b;
      if (e7.button !== 0)
        return;
      if (!inputs2.pointerIsValid(e7))
        return;
      e7.currentTarget.setPointerCapture(e7.pointerId);
      const info = inputs2.pointerDown(e7, "canvas");
      if (e7.button === 0) {
        (_a = callbacks.onPointCanvas) == null ? void 0 : _a.call(callbacks, info, e7);
        (_b = callbacks.onPointerDown) == null ? void 0 : _b.call(callbacks, info, e7);
      }
    }, [callbacks, inputs2]);
    const onPointerMove = (0, import_react8.useCallback)((e7) => {
      var _a, _b;
      if (!inputs2.pointerIsValid(e7))
        return;
      const info = inputs2.pointerMove(e7, "canvas");
      if (e7.currentTarget.hasPointerCapture(e7.pointerId)) {
        (_a = callbacks.onDragCanvas) == null ? void 0 : _a.call(callbacks, info, e7);
      }
      (_b = callbacks.onPointerMove) == null ? void 0 : _b.call(callbacks, info, e7);
    }, [callbacks, inputs2]);
    const onPointerUp = (0, import_react8.useCallback)((e7) => {
      var _a, _b, _c, _d;
      if (e7.button !== 0)
        return;
      if (!inputs2.pointerIsValid(e7))
        return;
      const isDoubleClick = inputs2.isDoubleClick();
      const info = inputs2.pointerUp(e7, "canvas");
      if (e7.currentTarget.hasPointerCapture(e7.pointerId)) {
        (_a = e7.currentTarget) == null ? void 0 : _a.releasePointerCapture(e7.pointerId);
      }
      if (isDoubleClick && !(info.altKey || info.metaKey)) {
        (_b = callbacks.onDoubleClickCanvas) == null ? void 0 : _b.call(callbacks, info, e7);
      }
      (_c = callbacks.onReleaseCanvas) == null ? void 0 : _c.call(callbacks, info, e7);
      (_d = callbacks.onPointerUp) == null ? void 0 : _d.call(callbacks, info, e7);
    }, [callbacks, inputs2]);
    return {
      onPointerDown,
      onPointerMove,
      onPointerUp
    };
  }
  function useShapeEvents(id) {
    const { rPageState, rSelectionBounds, callbacks, inputs: inputs2 } = (0, import_react9.useContext)(TLContext);
    const onPointerDown = (0, import_react9.useCallback)((e7) => {
      var _a, _b, _c, _d, _e, _f;
      if (!inputs2.pointerIsValid(e7))
        return;
      if (e7.button === 2) {
        (_a = callbacks.onRightPointShape) == null ? void 0 : _a.call(callbacks, inputs2.pointerDown(e7, id), e7);
        return;
      }
      if (e7.button !== 0)
        return;
      const info = inputs2.pointerDown(e7, id);
      e7.stopPropagation();
      (_b = e7.currentTarget) == null ? void 0 : _b.setPointerCapture(e7.pointerId);
      if (rSelectionBounds.current && Utils.pointInBounds(info.point, rSelectionBounds.current) && !rPageState.current.selectedIds.includes(id)) {
        (_c = callbacks.onPointBounds) == null ? void 0 : _c.call(callbacks, inputs2.pointerDown(e7, "bounds"), e7);
        (_d = callbacks.onPointShape) == null ? void 0 : _d.call(callbacks, info, e7);
        return;
      }
      (_e = callbacks.onPointShape) == null ? void 0 : _e.call(callbacks, info, e7);
      (_f = callbacks.onPointerDown) == null ? void 0 : _f.call(callbacks, info, e7);
    }, [inputs2, callbacks, id]);
    const onPointerUp = (0, import_react9.useCallback)((e7) => {
      var _a, _b, _c, _d;
      if (e7.button !== 0)
        return;
      if (!inputs2.pointerIsValid(e7))
        return;
      e7.stopPropagation();
      const isDoubleClick = inputs2.isDoubleClick();
      const info = inputs2.pointerUp(e7, id);
      if (e7.currentTarget.hasPointerCapture(e7.pointerId)) {
        (_a = e7.currentTarget) == null ? void 0 : _a.releasePointerCapture(e7.pointerId);
      }
      if (isDoubleClick && !(info.altKey || info.metaKey)) {
        (_b = callbacks.onDoubleClickShape) == null ? void 0 : _b.call(callbacks, info, e7);
      }
      (_c = callbacks.onReleaseShape) == null ? void 0 : _c.call(callbacks, info, e7);
      (_d = callbacks.onPointerUp) == null ? void 0 : _d.call(callbacks, info, e7);
    }, [inputs2, callbacks, id]);
    const onPointerMove = (0, import_react9.useCallback)((e7) => {
      var _a, _b;
      if (!inputs2.pointerIsValid(e7))
        return;
      e7.stopPropagation();
      if (inputs2.pointer && e7.pointerId !== inputs2.pointer.pointerId)
        return;
      const info = inputs2.pointerMove(e7, id);
      if (e7.currentTarget.hasPointerCapture(e7.pointerId)) {
        (_a = callbacks.onDragShape) == null ? void 0 : _a.call(callbacks, info, e7);
      }
      (_b = callbacks.onPointerMove) == null ? void 0 : _b.call(callbacks, info, e7);
    }, [inputs2, callbacks, id]);
    const onPointerEnter = (0, import_react9.useCallback)((e7) => {
      var _a;
      if (!inputs2.pointerIsValid(e7))
        return;
      const info = inputs2.pointerEnter(e7, id);
      (_a = callbacks.onHoverShape) == null ? void 0 : _a.call(callbacks, info, e7);
    }, [inputs2, callbacks, id]);
    const onPointerLeave = (0, import_react9.useCallback)((e7) => {
      var _a;
      if (!inputs2.pointerIsValid(e7))
        return;
      const info = inputs2.pointerEnter(e7, id);
      (_a = callbacks.onUnhoverShape) == null ? void 0 : _a.call(callbacks, info, e7);
    }, [inputs2, callbacks, id]);
    return {
      onPointerDown,
      onPointerUp,
      onPointerEnter,
      onPointerMove,
      onPointerLeave
    };
  }
  function addToShapeTree(shape, branch, shapes, pageState, meta) {
    const node = {
      shape,
      meta,
      isEditing: pageState.editingId === shape.id,
      isBinding: pageState.bindingTargetId === shape.id,
      isSelected: pageState.selectedIds.includes(shape.id),
      isHovered: pageState.hoveredId === shape.id || shape.children !== void 0 && (pageState.hoveredId && shape.children.includes(pageState.hoveredId) || shape.children.some((childId) => pageState.selectedIds.includes(childId)))
    };
    branch.push(node);
    if (shape.children) {
      node.children = [];
      shape.children.map((id) => shapes[id]).sort((a2, b4) => a2.childIndex - b4.childIndex).forEach((childShape) => addToShapeTree(childShape, node.children, shapes, pageState, meta));
    }
  }
  function shapeIsInViewport(bounds, viewport) {
    return Utils.boundsContain(viewport, bounds) || Utils.boundsCollide(viewport, bounds);
  }
  function useShapeTree(page, pageState, meta) {
    const { callbacks, shapeUtils: shapeUtils2, bounds } = useTLContext();
    const rTimeout = (0, import_react10.useRef)();
    const rPreviousCount = (0, import_react10.useRef)(0);
    const rShapesIdsToRender = (0, import_react10.useRef)(new Set());
    const rShapesToRender = (0, import_react10.useRef)(new Set());
    const { selectedIds, camera } = pageState;
    const [minX, minY] = $a8e101027d325e52$export$e947a0f742cf021e.sub($a8e101027d325e52$export$e947a0f742cf021e.div([0, 0], camera.zoom), camera.point);
    const [maxX, maxY] = $a8e101027d325e52$export$e947a0f742cf021e.sub($a8e101027d325e52$export$e947a0f742cf021e.div([bounds.width, bounds.height], camera.zoom), camera.point);
    const viewport = {
      minX,
      minY,
      maxX,
      maxY,
      height: maxX - minX,
      width: maxY - minY
    };
    const shapesToRender = rShapesToRender.current;
    const shapesIdsToRender = rShapesIdsToRender.current;
    shapesToRender.clear();
    shapesIdsToRender.clear();
    Object.values(page.shapes).filter((shape) => shapeUtils2[shape.type].isStateful || selectedIds.includes(shape.id) || shapeIsInViewport(shapeUtils2[shape.type].getBounds(shape), viewport)).sort((a2, b4) => a2.childIndex - b4.childIndex).forEach((shape) => {
      if (shape.parentId === page.id) {
        shapesIdsToRender.add(shape.id);
        shapesToRender.add(shape);
        return;
      }
      shapesIdsToRender.add(shape.parentId);
      shapesToRender.add(page.shapes[shape.parentId]);
    });
    if (shapesToRender.size !== rPreviousCount.current) {
      if (rTimeout.current) {
        clearTimeout(rTimeout.current);
      }
      rTimeout.current = requestAnimationFrame(() => {
        var _a;
        (_a = callbacks.onRenderCountChange) == null ? void 0 : _a.call(callbacks, Array.from(shapesIdsToRender.values()));
      });
      rPreviousCount.current = shapesToRender.size;
    }
    const bindingTargetId = pageState.bindingId ? page.bindings[pageState.bindingId].toId : void 0;
    const tree = [];
    const info = __spreadProps2(__spreadValues2({}, pageState), { bindingTargetId });
    shapesToRender.forEach((shape) => addToShapeTree(shape, tree, page.shapes, info, meta));
    return tree;
  }
  var styles = new Map();
  function makeCssTheme(prefix, theme) {
    return Object.keys(theme).reduce((acc, key) => {
      const value = theme[key];
      if (value) {
        return acc + `${`--${prefix}-${key}`}: ${value};
`;
      }
      return acc;
    }, "");
  }
  function useTheme(prefix, theme, selector = ":root") {
    (0, import_react11.useLayoutEffect)(() => {
      const style = document.createElement("style");
      const cssTheme = makeCssTheme(prefix, theme);
      style.setAttribute("id", `${prefix}-theme`);
      style.setAttribute("data-selector", selector);
      style.innerHTML = `
        ${selector} {
          ${cssTheme}
        }
      `;
      document.head.appendChild(style);
      return () => {
        if (style && document.head.contains(style)) {
          document.head.removeChild(style);
        }
      };
    }, [prefix, theme, selector]);
  }
  function useStyle(uid, rules) {
    (0, import_react11.useLayoutEffect)(() => {
      if (styles.get(uid)) {
        return () => void 0;
      }
      const style = document.createElement("style");
      style.innerHTML = rules;
      style.setAttribute("id", uid);
      document.head.appendChild(style);
      styles.set(uid, style);
      return () => {
        if (style && document.head.contains(style)) {
          document.head.removeChild(style);
          styles.delete(uid);
        }
      };
    }, [uid, rules]);
  }
  var css = (strings, ...args) => strings.reduce((acc, string, index) => acc + string + (index < args.length ? args[index] : ""), "");
  var defaultTheme = {
    accent: "rgb(255, 0, 0)",
    brushFill: "rgba(0,0,0,.05)",
    brushStroke: "rgba(0,0,0,.25)",
    selectStroke: "rgb(66, 133, 244)",
    selectFill: "rgba(65, 132, 244, 0.05)",
    background: "url('profile.png')", // ****** BACKGROUND
    foreground: "rgb(51, 51, 51)"
  };
  var tlcss = css`
  
  .tl-container {
    --tl-zoom: 1;
    --tl-scale: calc(1 / var(--tl-zoom));
    --tl-padding: calc(64px * max(1, var(--tl-scale)));
    position: relative;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
    z-index: 100;
    overflow: hidden;
    touch-action: none;
    overscroll-behavior: none;
    background-color: var(--tl-background);
  }

  .tl-container * {
    box-sizing: border-box;
  }

  .tl-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    touch-action: none;
    pointer-events: none;
  }

  .tl-snap-line {
    stroke: var(--tl-accent);
    stroke-width: calc(1px * var(--tl-scale));
  }

  .tl-snap-point {
    stroke: var(--tl-accent);
    stroke-width: calc(1px * var(--tl-scale));
  }

  .tl-canvas {
    position: absolute;
    border: 1px solid red;
    width: 100%;
    height: 100%;
    touch-action: none;
    pointer-events: all;
    overflow: clip;
  }

  .tl-layer {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 0px;
    width: 0px;
    contain: layout style size;
  }

  .tl-absolute {
    position: absolute;
    top: 0px;
    left: 0px;
    transform-origin: center center;
    contain: layout style size;
  }

  .tl-positioned {
    position: absolute;
    top: 0px;
    left: 0px;
    transform-origin: center center;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    contain: layout style size;
  }

  .tl-positioned-svg {
    width: 100%;
    height: 100%;
    overflow: hidden;
    contain: layout style size;
  }

  .tl-positioned-div {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: var(--tl-padding);
    overflow: hidden;
    contain: layout style size;
  }

  .tl-counter-scaled {
    transform: scale(var(--tl-scale));
  }

  .tl-dashed {
    stroke-dasharray: calc(2px * var(--tl-scale)), calc(2px * var(--tl-scale));
  }

  .tl-transparent {
    fill: transparent;
    stroke: transparent;
  }

  .tl-cursor-ns {
    cursor: ns-resize;
  }

  .tl-cursor-ew {
    cursor: ew-resize;
  }

  .tl-cursor-nesw {
    cursor: nesw-resize;
  }

  .tl-cursor-nwse {
    cursor: nwse-resize;
  }

  .tl-corner-handle {
    stroke: var(--tl-selectStroke);
    fill: var(--tl-background);
    stroke-width: calc(1.5px * var(--tl-scale));
  }

  .tl-rotate-handle {
    stroke: var(--tl-selectStroke);
    fill: var(--tl-background);
    stroke-width: calc(1.5px * var(--tl-scale));
    cursor: grab;
  }

  .tl-binding {
    fill: var(--tl-selectFill);
    stroke: var(--tl-selectStroke);
    stroke-width: calc(1px * var(--tl-scale));
    pointer-events: none;
  }

  .tl-user {
    left: -4px;
    top: -4px;
    height: 8px;
    width: 8px;
    border-radius: 100%;
    pointer-events: none;
  }

  .tl-indicator {
    fill: transparent;
    stroke-width: calc(1.5px * var(--tl-scale));
    pointer-events: none;
  }

  .tl-user-indicator-bounds {
    border-style: solid;
    border-width: calc(1px * var(--tl-scale));
  }

  .tl-selected {
    stroke: var(--tl-selectStroke);
  }

  .tl-hovered {
    stroke: var(--tl-selectStroke);
  }

  .tl-clone-target {
    pointer-events: all;
  }

  .tl-clone-target:hover .tl-clone-button {
    opacity: 1;
  }

  .tl-clone-button-target {
    cursor: pointer;
    pointer-events: all;
  }

  .tl-clone-button-target:hover .tl-clone-button {
    fill: var(--tl-selectStroke);
  }

  .tl-clone-button {
    opacity: 0;
    r: calc(8px * var(--tl-scale));
    stroke-width: calc(1.5px * var(--tl-scale));
    stroke: var(--tl-selectStroke);
    fill: var(--tl-background);
  }

  .tl-bounds {
    pointer-events: none;
    contain: layout style size;
  }

  .tl-bounds-bg {
    stroke: none;
    fill: var(--tl-selectFill);
    pointer-events: all;
    contain: layout style size;
  }

  .tl-bounds-center {
    fill: transparent;
    stroke: var(--tl-selectStroke);
    stroke-width: calc(1.5px * var(--tl-scale));
  }

  .tl-brush {
    fill: var(--tl-brushFill);
    stroke: var(--tl-brushStroke);
    stroke-width: calc(1px * var(--tl-scale));
    pointer-events: none;
    contain: layout style size;
  }

  .tl-dot {
    fill: var(--tl-background);
    stroke: var(--tl-foreground);
    stroke-width: 2px;
  }

  .tl-handle {
    pointer-events: all;
  }

  .tl-handle:hover .tl-handle-bg {
    fill: var(--tl-selectFill);
  }

  .tl-handle:hover .tl-handle-bg > * {
    stroke: var(--tl-selectFill);
  }

  .tl-handle:active .tl-handle-bg {
    fill: var(--tl-selectFill);
  }

  .tl-handle:active .tl-handle-bg > * {
    stroke: var(--tl-selectFill);
  }

  .tl-handle {
    fill: var(--tl-background);
    stroke: var(--tl-selectStroke);
    stroke-width: 1.5px;
  }

  .tl-handle-bg {
    fill: transparent;
    stroke: none;
    pointer-events: all;
    r: calc(16px / max(1, var(--tl-zoom)));
  }

  .tl-binding-indicator {
    stroke-width: calc(3px * var(--tl-scale));
    fill: var(--tl-selectFill);
    stroke: var(--tl-selected);
  }

  .tl-centered-g {
    transform: translate(var(--tl-padding), var(--tl-padding));
  }

  .tl-current-parent > *[data-shy='true'] {
    opacity: 1;
  }

  .tl-binding {
    fill: none;
    stroke: var(--tl-selectStroke);
    stroke-width: calc(2px * var(--tl-scale));
  }
`;
  function useTLTheme(theme, selector) {
    const tltheme = (0, import_react11.useMemo)(() => __spreadValues2(__spreadValues2({}, defaultTheme), theme), [theme]);
    useTheme("tl", tltheme, selector);
    useStyle("tl-canvas", tlcss);
  }
  function useBoundsHandleEvents(id) {
    const { callbacks, inputs: inputs2 } = useTLContext();
    const onPointerDown = (0, import_react12.useCallback)((e7) => {
      var _a, _b, _c;
      if (e7.button !== 0)
        return;
      if (!inputs2.pointerIsValid(e7))
        return;
      e7.stopPropagation();
      (_a = e7.currentTarget) == null ? void 0 : _a.setPointerCapture(e7.pointerId);
      const info = inputs2.pointerDown(e7, id);
      (_b = callbacks.onPointBoundsHandle) == null ? void 0 : _b.call(callbacks, info, e7);
      (_c = callbacks.onPointerDown) == null ? void 0 : _c.call(callbacks, info, e7);
    }, [inputs2, callbacks, id]);
    const onPointerUp = (0, import_react12.useCallback)((e7) => {
      var _a, _b, _c, _d;
      if (e7.button !== 0)
        return;
      if (!inputs2.pointerIsValid(e7))
        return;
      e7.stopPropagation();
      const isDoubleClick = inputs2.isDoubleClick();
      const info = inputs2.pointerUp(e7, id);
      if (e7.currentTarget.hasPointerCapture(e7.pointerId)) {
        (_a = e7.currentTarget) == null ? void 0 : _a.releasePointerCapture(e7.pointerId);
      }
      if (isDoubleClick && !(info.altKey || info.metaKey)) {
        (_b = callbacks.onDoubleClickBoundsHandle) == null ? void 0 : _b.call(callbacks, info, e7);
      }
      (_c = callbacks.onReleaseBoundsHandle) == null ? void 0 : _c.call(callbacks, info, e7);
      (_d = callbacks.onPointerUp) == null ? void 0 : _d.call(callbacks, info, e7);
    }, [inputs2, callbacks, id]);
    const onPointerMove = (0, import_react12.useCallback)((e7) => {
      var _a, _b;
      if (!inputs2.pointerIsValid(e7))
        return;
      e7.stopPropagation();
      if (e7.currentTarget.hasPointerCapture(e7.pointerId)) {
        (_a = callbacks.onDragBoundsHandle) == null ? void 0 : _a.call(callbacks, inputs2.pointerMove(e7, id), e7);
      }
      const info = inputs2.pointerMove(e7, id);
      (_b = callbacks.onPointerMove) == null ? void 0 : _b.call(callbacks, info, e7);
    }, [inputs2, callbacks, id]);
    const onPointerEnter = (0, import_react12.useCallback)((e7) => {
      var _a;
      if (!inputs2.pointerIsValid(e7))
        return;
      (_a = callbacks.onHoverBoundsHandle) == null ? void 0 : _a.call(callbacks, inputs2.pointerEnter(e7, id), e7);
    }, [inputs2, callbacks, id]);
    const onPointerLeave = (0, import_react12.useCallback)((e7) => {
      var _a;
      if (!inputs2.pointerIsValid(e7))
        return;
      (_a = callbacks.onUnhoverBoundsHandle) == null ? void 0 : _a.call(callbacks, inputs2.pointerEnter(e7, id), e7);
    }, [inputs2, callbacks, id]);
    return {
      onPointerDown,
      onPointerUp,
      onPointerEnter,
      onPointerMove,
      onPointerLeave
    };
  }
  function useCameraCss(layerRef, containerRef, pageState) {
    const rZoom = (0, import_react13.useRef)();
    const rPoint = (0, import_react13.useRef)();
    (0, import_react13.useLayoutEffect)(() => {
      const { zoom, point } = pageState.camera;
      const didZoom = zoom !== rZoom.current;
      const didPan = point !== rPoint.current;
      rZoom.current = zoom;
      rPoint.current = point;
      if (didZoom || didPan) {
        const layer = layerRef.current;
        if (containerRef && "current" in containerRef) {
          const container = containerRef.current;
          if (didZoom) {
            if (container) {
              container.style.setProperty("--tl-zoom", zoom.toString());
            }
          }
          if (layer) {
            layer.style.setProperty("transform", `scale(${zoom}) translateX(${point[0]}px) translateY(${point[1]}px)`);
          }
        }
      }
    }, [pageState.camera]);
  }
  function canvasToScreen(point, camera) {
    return [(point[0] + camera.point[0]) * camera.zoom, (point[1] + camera.point[1]) * camera.zoom];
  }
  function getShapeUtils(shapeUtils2, shape) {
    return shapeUtils2[shape.type];
  }
  function useSelection(page, pageState, shapeUtils2) {
    const { rSelectionBounds } = useTLContext();
    const { selectedIds } = pageState;
    const rPrevBounds = (0, import_react14.useRef)();
    let bounds = void 0;
    let rotation = 0;
    let isLocked = false;
    let isLinked = false;
    if (selectedIds.length === 1) {
      const id = selectedIds[0];
      const shape = page.shapes[id];
      rotation = shape.rotation || 0;
      isLocked = shape.isLocked || false;
      const utils = getShapeUtils(shapeUtils2, shape);
      bounds = utils.hideBounds ? void 0 : utils.getBounds(shape);
    } else if (selectedIds.length > 1) {
      const selectedShapes = selectedIds.map((id) => page.shapes[id]);
      rotation = 0;
      isLocked = selectedShapes.every((shape) => shape.isLocked);
      bounds = selectedShapes.reduce((acc, shape, i2) => {
        if (i2 === 0) {
          return getShapeUtils(shapeUtils2, shape).getRotatedBounds(shape);
        }
        return utils_default.getExpandedBounds(acc, getShapeUtils(shapeUtils2, shape).getRotatedBounds(shape));
      }, {});
    }
    if (bounds) {
      const [minX, minY] = canvasToScreen([bounds.minX, bounds.minY], pageState.camera);
      const [maxX, maxY] = canvasToScreen([bounds.maxX, bounds.maxY], pageState.camera);
      isLinked = !!Object.values(page.bindings).find((binding) => selectedIds.includes(binding.toId) || selectedIds.includes(binding.fromId));
      rSelectionBounds.current = {
        minX,
        minY,
        maxX,
        maxY,
        width: maxX - minX,
        height: maxY - minY
      };
    } else {
      rSelectionBounds.current = null;
    }
    const prevBounds = rPrevBounds.current;
    if (!prevBounds || !bounds) {
      rPrevBounds.current = bounds;
    } else if (bounds) {
      if (prevBounds.minX === bounds.minX && prevBounds.minY === bounds.minY && prevBounds.maxX === bounds.maxX && prevBounds.maxY === bounds.maxY) {
        bounds = rPrevBounds.current;
      }
    }
    return { bounds, rotation, isLocked, isLinked };
  }
  function useHandleEvents(id) {
    const { inputs: inputs2, callbacks } = useTLContext();
    const onPointerDown = (0, import_react15.useCallback)((e7) => {
      var _a, _b, _c;
      if (e7.button !== 0)
        return;
      if (!inputs2.pointerIsValid(e7))
        return;
      e7.stopPropagation();
      (_a = e7.currentTarget) == null ? void 0 : _a.setPointerCapture(e7.pointerId);
      const info = inputs2.pointerDown(e7, id);
      (_b = callbacks.onPointHandle) == null ? void 0 : _b.call(callbacks, info, e7);
      (_c = callbacks.onPointerDown) == null ? void 0 : _c.call(callbacks, info, e7);
    }, [inputs2, callbacks, id]);
    const onPointerUp = (0, import_react15.useCallback)((e7) => {
      var _a, _b, _c, _d;
      if (e7.button !== 0)
        return;
      if (!inputs2.pointerIsValid(e7))
        return;
      e7.stopPropagation();
      const isDoubleClick = inputs2.isDoubleClick();
      const info = inputs2.pointerUp(e7, id);
      if (e7.currentTarget.hasPointerCapture(e7.pointerId)) {
        (_a = e7.currentTarget) == null ? void 0 : _a.releasePointerCapture(e7.pointerId);
        if (isDoubleClick && !(info.altKey || info.metaKey)) {
          (_b = callbacks.onDoubleClickHandle) == null ? void 0 : _b.call(callbacks, info, e7);
        }
        (_c = callbacks.onReleaseHandle) == null ? void 0 : _c.call(callbacks, info, e7);
      }
      (_d = callbacks.onPointerUp) == null ? void 0 : _d.call(callbacks, info, e7);
    }, [inputs2, callbacks]);
    const onPointerMove = (0, import_react15.useCallback)((e7) => {
      var _a, _b;
      if (!inputs2.pointerIsValid(e7))
        return;
      e7.stopPropagation();
      const info = inputs2.pointerMove(e7, id);
      if (e7.currentTarget.hasPointerCapture(e7.pointerId)) {
        (_a = callbacks.onDragHandle) == null ? void 0 : _a.call(callbacks, info, e7);
      }
      (_b = callbacks.onPointerMove) == null ? void 0 : _b.call(callbacks, info, e7);
    }, [inputs2, callbacks, id]);
    const onPointerEnter = (0, import_react15.useCallback)((e7) => {
      var _a;
      if (!inputs2.pointerIsValid(e7))
        return;
      const info = inputs2.pointerEnter(e7, id);
      (_a = callbacks.onHoverHandle) == null ? void 0 : _a.call(callbacks, info, e7);
    }, [inputs2, callbacks, id]);
    const onPointerLeave = (0, import_react15.useCallback)((e7) => {
      var _a;
      if (!inputs2.pointerIsValid(e7))
        return;
      const info = inputs2.pointerEnter(e7, id);
      (_a = callbacks.onUnhoverHandle) == null ? void 0 : _a.call(callbacks, info, e7);
    }, [inputs2, callbacks, id]);
    return {
      onPointerDown,
      onPointerUp,
      onPointerEnter,
      onPointerMove,
      onPointerLeave
    };
  }
  function usePreventNavigation(rCanvas) {
    const { bounds } = useTLContext();
    (0, import_react16.useEffect)(() => {
      const preventGestureNavigation = (event) => {
        event.preventDefault();
      };
      const preventNavigation = (event) => {
        const touchXPosition = event.touches[0].pageX;
        const touchXRadius = event.touches[0].radiusX || 0;
        if (touchXPosition - touchXRadius < 10 || touchXPosition + touchXRadius > bounds.width - 10) {
          event.preventDefault();
        }
      };
      const elm = rCanvas.current;
      if (!elm)
        return () => void 0;
      elm.addEventListener("touchstart", preventGestureNavigation);
      elm.addEventListener("gestureend", preventGestureNavigation);
      elm.addEventListener("gesturechange", preventGestureNavigation);
      elm.addEventListener("gesturestart", preventGestureNavigation);
      elm.addEventListener("touchstart", preventNavigation);
      return () => {
        if (elm) {
          elm.removeEventListener("touchstart", preventGestureNavigation);
          elm.removeEventListener("gestureend", preventGestureNavigation);
          elm.removeEventListener("gesturechange", preventGestureNavigation);
          elm.removeEventListener("gesturestart", preventGestureNavigation);
          elm.removeEventListener("touchstart", preventNavigation);
        }
      };
    }, [rCanvas, bounds.width]);
  }
  function useBoundsEvents() {
    const { callbacks, inputs: inputs2 } = useTLContext();
    const onPointerDown = (0, import_react17.useCallback)((e7) => {
      var _a, _b, _c;
      if (e7.button !== 0)
        return;
      if (!inputs2.pointerIsValid(e7))
        return;
      e7.stopPropagation();
      (_a = e7.currentTarget) == null ? void 0 : _a.setPointerCapture(e7.pointerId);
      const info = inputs2.pointerDown(e7, "bounds");
      (_b = callbacks.onPointBounds) == null ? void 0 : _b.call(callbacks, info, e7);
      (_c = callbacks.onPointerDown) == null ? void 0 : _c.call(callbacks, info, e7);
    }, [callbacks, inputs2]);
    const onPointerUp = (0, import_react17.useCallback)((e7) => {
      var _a, _b, _c, _d;
      if (e7.button !== 0)
        return;
      if (!inputs2.pointerIsValid(e7))
        return;
      e7.stopPropagation();
      const isDoubleClick = inputs2.isDoubleClick();
      const info = inputs2.pointerUp(e7, "bounds");
      if (e7.currentTarget.hasPointerCapture(e7.pointerId)) {
        (_a = e7.currentTarget) == null ? void 0 : _a.releasePointerCapture(e7.pointerId);
      }
      if (isDoubleClick && !(info.altKey || info.metaKey)) {
        (_b = callbacks.onDoubleClickBounds) == null ? void 0 : _b.call(callbacks, info, e7);
      }
      (_c = callbacks.onReleaseBounds) == null ? void 0 : _c.call(callbacks, info, e7);
      (_d = callbacks.onPointerUp) == null ? void 0 : _d.call(callbacks, info, e7);
    }, [callbacks, inputs2]);
    const onPointerMove = (0, import_react17.useCallback)((e7) => {
      var _a, _b;
      if (!inputs2.pointerIsValid(e7))
        return;
      if (e7.currentTarget.hasPointerCapture(e7.pointerId)) {
        (_a = callbacks.onDragBounds) == null ? void 0 : _a.call(callbacks, inputs2.pointerMove(e7, "bounds"), e7);
      }
      const info = inputs2.pointerMove(e7, "bounds");
      (_b = callbacks.onPointerMove) == null ? void 0 : _b.call(callbacks, info, e7);
    }, [callbacks, inputs2]);
    const onPointerEnter = (0, import_react17.useCallback)((e7) => {
      var _a;
      if (!inputs2.pointerIsValid(e7))
        return;
      (_a = callbacks.onHoverBounds) == null ? void 0 : _a.call(callbacks, inputs2.pointerEnter(e7, "bounds"), e7);
    }, [callbacks, inputs2]);
    const onPointerLeave = (0, import_react17.useCallback)((e7) => {
      var _a;
      if (!inputs2.pointerIsValid(e7))
        return;
      (_a = callbacks.onUnhoverBounds) == null ? void 0 : _a.call(callbacks, inputs2.pointerEnter(e7, "bounds"), e7);
    }, [callbacks, inputs2]);
    return {
      onPointerDown,
      onPointerUp,
      onPointerEnter,
      onPointerMove,
      onPointerLeave
    };
  }
  function usePosition(bounds, rotation = 0) {
    const rBounds = (0, import_react18.useRef)(null);
    (0, import_react18.useLayoutEffect)(() => {
      const elm = rBounds.current;
      const transform = `
    translate(
      calc(${bounds.minX}px - var(--tl-padding)),
      calc(${bounds.minY}px - var(--tl-padding))
    )
    rotate(${rotation + (bounds.rotation || 0)}rad)`;
      elm.style.setProperty("transform", transform);
      elm.style.setProperty("width", `calc(${Math.floor(bounds.width)}px + (var(--tl-padding) * 2))`);
      elm.style.setProperty("height", `calc(${Math.floor(bounds.height)}px + (var(--tl-padding) * 2))`);
    }, [bounds, rotation]);
    return rBounds;
  }
  function useKeyEvents() {
    const { inputs: inputs2, callbacks } = useTLContext();
    (0, import_react19.useEffect)(() => {
      const handleKeyDown = (e7) => {
        var _a;
        (_a = callbacks.onKeyDown) == null ? void 0 : _a.call(callbacks, e7.key, inputs2.keydown(e7), e7);
      };
      const handleKeyUp = (e7) => {
        var _a;
        inputs2.keyup(e7);
        (_a = callbacks.onKeyUp) == null ? void 0 : _a.call(callbacks, e7.key, inputs2.keyup(e7), e7);
      };
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keyup", handleKeyUp);
      };
    }, [inputs2, callbacks]);
  }
  var ErrorFallback = (0, import_react20.memo)(function ErrorFallback2({
    error,
    resetErrorBoundary
  }) {
    const { callbacks } = useTLContext();
    (0, import_react20.useEffect)(() => {
      var _a;
      (_a = callbacks.onError) == null ? void 0 : _a.call(callbacks, error);
    }, [error, resetErrorBoundary, callbacks]);
    return null;
  });
  var changedArray = (a2 = [], b4 = []) => a2.length !== b4.length || a2.some((item, index) => !Object.is(item, b4[index]));
  var initialState = { error: null };
  var ErrorBoundary = class extends import_react21.Component {
    constructor() {
      super(...arguments);
      this.state = initialState;
      this.updatedWithError = false;
      this.resetErrorBoundary = (...args) => {
        var _a, _b;
        (_b = (_a = this.props).onReset) == null ? void 0 : _b.call(_a, ...args);
        this.reset();
      };
    }
    static getDerivedStateFromError(error) {
      return { error };
    }
    reset() {
      this.updatedWithError = false;
      this.setState(initialState);
    }
    componentDidCatch(error, info) {
      var _a, _b;
      (_b = (_a = this.props).onError) == null ? void 0 : _b.call(_a, error, info);
    }
    componentDidMount() {
      const { error } = this.state;
      if (error !== null) {
        this.updatedWithError = true;
      }
    }
    componentDidUpdate(prevProps) {
      var _a, _b;
      const { error } = this.state;
      const { resetKeys } = this.props;
      if (error !== null && !this.updatedWithError) {
        this.updatedWithError = true;
        return;
      }
      if (error !== null && changedArray(prevProps.resetKeys, resetKeys)) {
        (_b = (_a = this.props).onResetKeysChange) == null ? void 0 : _b.call(_a, prevProps.resetKeys, resetKeys);
        this.reset();
      }
    }
    render() {
      const { error } = this.state;
      const { fallbackRender, FallbackComponent, fallback } = this.props;
      if (error !== null) {
        const props = {
          error,
          resetErrorBoundary: this.resetErrorBoundary
        };
        if ((0, import_react21.isValidElement)(fallback)) {
          return fallback;
        } else if (typeof fallbackRender === "function") {
          return fallbackRender(props);
        } else if (FallbackComponent) {
          return /* @__PURE__ */ (0, import_react21.createElement)(FallbackComponent, __spreadValues2({}, props));
        } else {
          throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop");
        }
      }
      return this.props.children;
    }
  };
  var Container = (0, import_react22.memo)(function Container2({
    id,
    bounds,
    rotation = 0,
    className,
    children
  }) {
    const rPositioned = usePosition(bounds, rotation);
    return /* @__PURE__ */ (0, import_react22.createElement)("div", {
      id,
      ref: rPositioned,
      className: ["tl-positioned", className || ""].join(" ")
    }, children);
  });
  var Brush = (0, import_react23.memo)(function Brush2({ brush }) {
    return /* @__PURE__ */ (0, import_react23.createElement)(Container, {
      bounds: brush,
      rotation: 0
    }, /* @__PURE__ */(0, import_react23.createElement)(SVGContainer, null, /* @__PURE__ */(0, import_react23.createElement)("rect", {
      className: "tl-brush",
      opacity: 1,
      x: 0,
      y: 0,
      width: brush.width,
      height: brush.height
    })));
  });
  var CenterHandle = (0, import_react26.memo)(function CenterHandle2({
    bounds,
    isLocked,
    isHidden
  }) {
    return /* @__PURE__ */ (0, import_react26.createElement)("rect", {
      className: isLocked ? "tl-bounds-center tl-dashed" : "tl-bounds-center",
      x: -1,
      y: -1,
      width: bounds.width + 2,
      height: bounds.height + 2,
      opacity: isHidden ? 0 : 1,
      pointerEvents: "none",
      "aria-label": "center handle"
    });
  });
  var RotateHandle = (0, import_react27.memo)(function RotateHandle2({
    bounds,
    targetSize,
    size,
    isHidden
  }) {
    const events = useBoundsHandleEvents("rotate");
    return /* @__PURE__ */ (0, import_react27.createElement)("g", {
      cursor: "grab",
      opacity: isHidden ? 0 : 1
    }, /* @__PURE__ */(0, import_react27.createElement)("circle", __spreadValues2({
      className: "tl-transparent",
      "aria-label": "rotate handle transparent",
      cx: bounds.width / 2,
      cy: size * -2,
      r: targetSize,
      pointerEvents: isHidden ? "none" : "all"
    }, events)), /* @__PURE__ */(0, import_react27.createElement)("circle", {
      className: "tl-rotate-handle",
      "aria-label": "rotate handle",
      cx: bounds.width / 2,
      cy: size * -2,
      r: size / 2,
      pointerEvents: "none"
    }));
  });
  var cornerBgClassnames = {
    [TLBoundsCorner.TopLeft]: "tl-cursor-nwse",
    [TLBoundsCorner.TopRight]: "tl-cursor-nesw",
    [TLBoundsCorner.BottomRight]: "tl-cursor-nwse",
    [TLBoundsCorner.BottomLeft]: "tl-cursor-nesw"
  };
  var CornerHandle = (0, import_react28.memo)(function CornerHandle2({
    size,
    targetSize,
    isHidden,
    corner,
    bounds
  }) {
    const events = useBoundsHandleEvents(corner);
    const isTop = corner === TLBoundsCorner.TopLeft || corner === TLBoundsCorner.TopRight;
    const isLeft = corner === TLBoundsCorner.TopLeft || corner === TLBoundsCorner.BottomLeft;
    return /* @__PURE__ */ (0, import_react28.createElement)("g", {
      opacity: isHidden ? 0 : 1
    }, /* @__PURE__ */(0, import_react28.createElement)("rect", __spreadValues2({
      className: "tl-transparent " + (isHidden ? "" : cornerBgClassnames[corner]),
      "aria-label": "corner transparent",
      x: (isLeft ? -1 : bounds.width + 1) - targetSize,
      y: (isTop ? -1 : bounds.height + 1) - targetSize,
      width: targetSize * 2,
      height: targetSize * 2,
      pointerEvents: isHidden ? "none" : "all"
    }, events)), /* @__PURE__ */(0, import_react28.createElement)("rect", {
      className: "tl-corner-handle",
      "aria-label": "corner handle",
      x: (isLeft ? -1 : bounds.width + 1) - size / 2,
      y: (isTop ? -1 : bounds.height + 1) - size / 2,
      width: size,
      height: size,
      pointerEvents: "none"
    }));
  });
  var edgeClassnames = {
    [TLBoundsEdge.Top]: "tl-cursor-ns",
    [TLBoundsEdge.Right]: "tl-cursor-ew",
    [TLBoundsEdge.Bottom]: "tl-cursor-ns",
    [TLBoundsEdge.Left]: "tl-cursor-ew"
  };
  var EdgeHandle = (0, import_react29.memo)(function EdgeHandle2({
    size,
    isHidden,
    bounds,
    edge
  }) {
    const events = useBoundsHandleEvents(edge);
    const isHorizontal = edge === TLBoundsEdge.Top || edge === TLBoundsEdge.Bottom;
    const isFarEdge = edge === TLBoundsEdge.Right || edge === TLBoundsEdge.Bottom;
    const { height, width } = bounds;
    return /* @__PURE__ */ (0, import_react29.createElement)("rect", __spreadValues2({
      pointerEvents: isHidden ? "none" : "all",
      className: "tl-transparent tl-edge-handle " + (isHidden ? "" : edgeClassnames[edge]),
      "aria-label": `${edge} handle`,
      opacity: isHidden ? 0 : 1,
      x: isHorizontal ? size / 2 : (isFarEdge ? width + 1 : -1) - size / 2,
      y: isHorizontal ? (isFarEdge ? height + 1 : -1) - size / 2 : size / 2,
      width: isHorizontal ? Math.max(0, width + 1 - size) : size,
      height: isHorizontal ? size : Math.max(0, height + 1 - size)
    }, events));
  });
  var ROTATIONS = {
    right: 0,
    bottomRight: 45,
    bottom: 90,
    bottomLeft: 135,
    left: 180,
    topLeft: 225,
    top: 270,
    topRight: 315
  };
  function CloneButton({ bounds, side, targetSize, size }) {
    const x2 = {
      left: -44,
      topLeft: -44,
      bottomLeft: -44,
      right: bounds.width + 44,
      topRight: bounds.width + 44,
      bottomRight: bounds.width + 44,
      top: bounds.width / 2,
      bottom: bounds.width / 2
    }[side];
    const y2 = {
      left: bounds.height / 2,
      right: bounds.height / 2,
      top: -44,
      topLeft: -44,
      topRight: -44,
      bottom: bounds.height + 44,
      bottomLeft: bounds.height + 44,
      bottomRight: bounds.height + 44
    }[side];
    const { callbacks, inputs: inputs2 } = useTLContext();
    const handleClick = (0, import_react31.useCallback)((e7) => {
      var _a;
      e7.stopPropagation();
      const info = inputs2.pointerDown(e7, side);
      (_a = callbacks.onShapeClone) == null ? void 0 : _a.call(callbacks, info, e7);
    }, [callbacks.onShapeClone]);
    return /* @__PURE__ */ (0, import_react31.createElement)("g", {
      className: "tl-clone-target",
      transform: `translate(${x2}, ${y2})`,
      "aria-label": "clone button"
    }, /* @__PURE__ */(0, import_react31.createElement)("rect", {
      className: "tl-transparent",
      width: targetSize * 4,
      height: targetSize * 4,
      x: -targetSize * 2,
      y: -targetSize * 2
    }), /* @__PURE__ */(0, import_react31.createElement)("g", {
      className: "tl-clone-button-target",
      onPointerDown: handleClick,
      transform: `rotate(${ROTATIONS[side]})`
    }, /* @__PURE__ */(0, import_react31.createElement)("circle", {
      className: "tl-transparent ",
      r: targetSize
    }), /* @__PURE__ */(0, import_react31.createElement)("path", {
      className: "tl-clone-button",
      d: `M -${size / 2},-${size / 2} L ${size / 2},0 -${size / 2},${size / 2} Z`,
      strokeLinejoin: "round"
    })));
  }
  function CloneButtons({ targetSize, size, bounds }) {
    return /* @__PURE__ */ (0, import_react30.createElement)(import_react30.Fragment, null, /* @__PURE__ */(0, import_react30.createElement)(CloneButton, {
      targetSize,
      size,
      bounds,
      side: "top"
    }), /* @__PURE__ */(0, import_react30.createElement)(CloneButton, {
      targetSize,
      size,
      bounds,
      side: "right"
    }), /* @__PURE__ */(0, import_react30.createElement)(CloneButton, {
      targetSize,
      size,
      bounds,
      side: "bottom"
    }), /* @__PURE__ */(0, import_react30.createElement)(CloneButton, {
      targetSize,
      size,
      bounds,
      side: "left"
    }), /* @__PURE__ */(0, import_react30.createElement)(CloneButton, {
      targetSize,
      size,
      bounds,
      side: "topLeft"
    }), /* @__PURE__ */(0, import_react30.createElement)(CloneButton, {
      targetSize,
      size,
      bounds,
      side: "topRight"
    }), /* @__PURE__ */(0, import_react30.createElement)(CloneButton, {
      targetSize,
      size,
      bounds,
      side: "bottomLeft"
    }), /* @__PURE__ */(0, import_react30.createElement)(CloneButton, {
      targetSize,
      size,
      bounds,
      side: "bottomRight"
    }));
  }
  var SVGContainer = (0, import_react32.memo)((0, import_react32.forwardRef)(function SVGContainer2(_a, ref) {
    var _b = _a, { id, children } = _b, rest = __objRest2(_b, ["id", "children"]);
    return /* @__PURE__ */ (0, import_react32.createElement)("svg", __spreadValues2({
      ref,
      className: "tl-positioned-svg"
    }, rest), /* @__PURE__ */(0, import_react32.createElement)("g", {
      id,
      className: "tl-centered-g"
    }, children));
  }));
  function LinkHandle({ size, bounds, isHidden }) {
    const leftEvents = useBoundsHandleEvents("left");
    const centerEvents = useBoundsHandleEvents("center");
    const rightEvents = useBoundsHandleEvents("right");
    return /* @__PURE__ */ (0, import_react33.createElement)("g", {
      cursor: "grab",
      transform: `translate(${bounds.width / 2 - size * 4}, ${bounds.height + size * 2})`,
      "aria-label": "link handle"
    }, /* @__PURE__ */(0, import_react33.createElement)("g", {
      className: "tl-transparent",
      pointerEvents: isHidden ? "none" : "all"
    }, /* @__PURE__ */(0, import_react33.createElement)("rect", __spreadValues2({
      x: 0,
      y: 0,
      width: size * 2,
      height: size * 2
    }, leftEvents)), /* @__PURE__ */(0, import_react33.createElement)("rect", __spreadValues2({
      x: size * 3,
      y: 0,
      width: size * 2,
      height: size * 2
    }, centerEvents)), /* @__PURE__ */(0, import_react33.createElement)("rect", __spreadValues2({
      x: size * 6,
      y: 0,
      width: size * 2,
      height: size * 2
    }, rightEvents))), /* @__PURE__ */(0, import_react33.createElement)("g", {
      className: "tl-rotate-handle",
      transform: `translate(${size / 2}, ${size / 2})`,
      "aria-label": "link rotate handle"
    }, /* @__PURE__ */(0, import_react33.createElement)("path", {
      d: `M 0,${size / 2} L ${size},${size} ${size},0 Z`,
      pointerEvents: "none",
      opacity: isHidden ? 0 : 1
    }), /* @__PURE__ */(0, import_react33.createElement)("path", {
      transform: `translate(${size * 3}, 0)`,
      d: `M 0,0 L ${size},0 ${size / 2},${size} Z`,
      pointerEvents: "none",
      opacity: isHidden ? 0 : 1
    }), /* @__PURE__ */(0, import_react33.createElement)("path", {
      transform: `translate(${size * 6}, 0)`,
      d: `M ${size},${size / 2} L 0,0 0,${size} Z`,
      pointerEvents: "none",
      opacity: isHidden ? 0 : 1
    })));
  }
  var Bounds = (0, import_react25.memo)(function Bounds2({
    zoom,
    bounds,
    viewportWidth,
    rotation,
    isHidden,
    isLocked,
    hideCloneHandles,
    hideRotateHandle,
    hideBindingHandles
  }) {
    const targetSize = (viewportWidth < 768 ? 16 : 8) / zoom;
    const size = 8 / zoom;
    const smallDimension = Math.min(bounds.width, bounds.height) * zoom;
    const showRotateHandle = !hideRotateHandle && !isHidden && !isLocked && smallDimension > 32;
    const showEdgeHandles = !isHidden && !isLocked && smallDimension > 24;
    const showCornerHandles = !isHidden && !isLocked && smallDimension > 20;
    const showCloneHandles = !hideCloneHandles && smallDimension > 24;
    return /* @__PURE__ */ (0, import_react25.createElement)(Container, {
      bounds,
      rotation
    }, /* @__PURE__ */(0, import_react25.createElement)(SVGContainer, null, /* @__PURE__ */(0, import_react25.createElement)(CenterHandle, {
      bounds,
      isLocked,
      isHidden
    }), /* @__PURE__ */(0, import_react25.createElement)(EdgeHandle, {
      targetSize,
      size,
      bounds,
      edge: TLBoundsEdge.Top,
      isHidden: !showEdgeHandles
    }), /* @__PURE__ */(0, import_react25.createElement)(EdgeHandle, {
      targetSize,
      size,
      bounds,
      edge: TLBoundsEdge.Right,
      isHidden: !showEdgeHandles
    }), /* @__PURE__ */(0, import_react25.createElement)(EdgeHandle, {
      targetSize,
      size,
      bounds,
      edge: TLBoundsEdge.Bottom,
      isHidden: !showEdgeHandles
    }), /* @__PURE__ */(0, import_react25.createElement)(EdgeHandle, {
      targetSize,
      size,
      bounds,
      edge: TLBoundsEdge.Left,
      isHidden: !showEdgeHandles
    }), /* @__PURE__ */(0, import_react25.createElement)(CornerHandle, {
      targetSize,
      size,
      bounds,
      isHidden: isHidden || !showCornerHandles,
      corner: TLBoundsCorner.TopLeft
    }), /* @__PURE__ */(0, import_react25.createElement)(CornerHandle, {
      targetSize,
      size,
      bounds,
      isHidden: isHidden || !showCornerHandles,
      corner: TLBoundsCorner.TopRight
    }), /* @__PURE__ */(0, import_react25.createElement)(CornerHandle, {
      targetSize,
      size,
      bounds,
      isHidden: isHidden || !showCornerHandles,
      corner: TLBoundsCorner.BottomRight
    }), /* @__PURE__ */(0, import_react25.createElement)(CornerHandle, {
      targetSize,
      size,
      bounds,
      isHidden: isHidden || !showCornerHandles,
      corner: TLBoundsCorner.BottomLeft
    }), showRotateHandle && /* @__PURE__ */ (0, import_react25.createElement)(RotateHandle, {
      targetSize,
      size,
      bounds,
      isHidden: !showEdgeHandles
    }), showCloneHandles && /* @__PURE__ */ (0, import_react25.createElement)(CloneButtons, {
      bounds,
      targetSize,
      size
    }), !hideBindingHandles && /* @__PURE__ */ (0, import_react25.createElement)(LinkHandle, {
      targetSize,
      size,
      bounds,
      isHidden: !showEdgeHandles
    })));
  });
  var BoundsBg = (0, import_react34.memo)(function BoundsBg2({
    bounds,
    rotation,
    isHidden
  }) {
    const events = useBoundsEvents();
    return /* @__PURE__ */ (0, import_react34.createElement)(Container, {
      bounds,
      rotation
    }, /* @__PURE__ */(0, import_react34.createElement)(SVGContainer, null, /* @__PURE__ */(0, import_react34.createElement)("rect", __spreadValues2({
      className: "tl-bounds-bg",
      "aria-label": "bounds bg",
      width: bounds.width,
      height: bounds.height,
      opacity: isHidden ? 0 : 1
    }, events))));
  });
  var Handle = (0, import_react36.memo)(function Handle2({ id, point }) {
    const events = useHandleEvents(id);
    return /* @__PURE__ */ (0, import_react36.createElement)(Container, {
      bounds: utils_default.translateBounds({
        minX: 0,
        minY: 0,
        maxX: 0,
        maxY: 0,
        width: 0,
        height: 0
      }, point)
    }, /* @__PURE__ */(0, import_react36.createElement)(SVGContainer, null, /* @__PURE__ */(0, import_react36.createElement)("g", __spreadValues2({
      className: "tl-handle"
    }, events), /* @__PURE__ */(0, import_react36.createElement)("circle", {
      className: "tl-handle-bg",
      pointerEvents: "all"
    }), /* @__PURE__ */(0, import_react36.createElement)("circle", {
      className: "tl-counter-scaled tl-handle",
      pointerEvents: "none",
      r: 4
    }))));
  });
  var Handles = (0, import_react35.memo)(function Handles2({
    shape,
    zoom
  }) {
    if (shape.handles === void 0) {
      return null;
    }
    let prev = null;
    const handlesToShow = Object.values(shape.handles).reduce((acc, cur) => {
      const point = $a8e101027d325e52$export$e947a0f742cf021e.add(cur.point, shape.point);
      if (!prev || $a8e101027d325e52$export$e947a0f742cf021e.dist(point, prev) * zoom >= 32) {
        acc.push(cur);
        prev = point;
      }
      return acc;
    }, []);
    if (handlesToShow.length === 1)
      return null;
    return /* @__PURE__ */ (0, import_react35.createElement)(import_react35.Fragment, null, handlesToShow.map((handle) => /* @__PURE__ */(0, import_react35.createElement)(Handle, {
      key: shape.id + "_" + handle.id,
      id: handle.id,
      point: $a8e101027d325e52$export$e947a0f742cf021e.add(handle.point, shape.point)
    })));
  });
  var RenderedShape = (0, import_react39.memo)(function RenderedShape2({
    shape,
    utils,
    isEditing,
    isBinding,
    isHovered,
    isSelected,
    onShapeChange,
    onShapeBlur,
    events,
    meta
  }) {
    const ref = utils.getRef(shape);
    return /* @__PURE__ */ (0, import_react39.createElement)(utils.Component, {
      ref,
      shape,
      isEditing,
      isBinding,
      isHovered,
      isSelected,
      meta,
      events,
      onShapeChange,
      onShapeBlur
    });
  }, (prev, next) => {
    if (prev.isHovered !== next.isHovered || prev.isSelected !== next.isSelected || prev.isEditing !== next.isEditing || prev.isBinding !== next.isBinding || prev.meta !== next.meta) {
      return false;
    }
    if (next.shape !== prev.shape) {
      return !next.utils.shouldRender(next.shape, prev.shape);
    }
    return true;
  });
  function useForceUpdate() {
    const forceUpdate = (0, import_react40.useReducer)((s2) => s2 + 1, 0);
    (0, import_react40.useLayoutEffect)(() => forceUpdate[1](), []);
  }
  var Shape = (0, import_react38.memo)(function Shape2({
    shape,
    utils,
    isEditing,
    isBinding,
    isHovered,
    isSelected,
    meta
  }) {
    const { callbacks } = useTLContext();
    const bounds = utils.getBounds(shape);
    const events = useShapeEvents(shape.id);
    useForceUpdate();
    return /* @__PURE__ */ (0, import_react38.createElement)(Container, {
      id: shape.id,
      bounds,
      rotation: shape.rotation
    }, /* @__PURE__ */(0, import_react38.createElement)(RenderedShape, {
      shape,
      isBinding,
      isEditing,
      isHovered,
      isSelected,
      utils,
      meta,
      events,
      onShapeChange: callbacks.onShapeChange,
      onShapeBlur: callbacks.onShapeBlur
    }));
  });
  var ShapeNode = (0, import_react37.memo)(function ShapeNode2({
    shape,
    utils,
    children,
    isEditing,
    isBinding,
    isHovered,
    isSelected,
    meta
  }) {
    return /* @__PURE__ */ (0, import_react37.createElement)(import_react37.Fragment, null, /* @__PURE__ */(0, import_react37.createElement)(Shape, {
      shape,
      isEditing,
      isBinding,
      isHovered,
      isSelected,
      utils: utils[shape.type],
      meta
    }), children && children.map((childNode) => /* @__PURE__ */(0, import_react37.createElement)(ShapeNode2, __spreadValues2({
      key: childNode.shape.id,
      utils
    }, childNode))));
  });
  var ShapeIndicator = (0, import_react41.memo)(function ShapeIndicator2({
    isHovered = false,
    isSelected = false,
    shape,
    user,
    meta
  }) {
    const { shapeUtils: shapeUtils2 } = useTLContext();
    const utils = shapeUtils2[shape.type];
    const bounds = utils.getBounds(shape);
    const rPositioned = usePosition(bounds, shape.rotation);
    return /* @__PURE__ */ (0, import_react41.createElement)("div", {
      ref: rPositioned,
      className: "tl-indicator tl-absolute " + (user ? "" : isSelected ? "tl-selected" : "tl-hovered")
    }, /* @__PURE__ */(0, import_react41.createElement)("svg", {
      width: "100%",
      height: "100%"
    }, /* @__PURE__ */(0, import_react41.createElement)("g", {
      className: "tl-centered-g",
      stroke: user == null ? void 0 : user.color
    }, /* @__PURE__ */(0, import_react41.createElement)(utils.Indicator, {
      shape,
      meta,
      user,
      isSelected,
      isHovered
    }))));
  });
  var Page = (0, import_react24.memo)(function Page2({
    page,
    pageState,
    hideBounds,
    hideHandles,
    hideIndicators,
    hideBindingHandles,
    hideCloneHandles,
    hideRotateHandle,
    meta
  }) {
    const { bounds: rendererBounds, shapeUtils: shapeUtils2 } = useTLContext();
    const shapeTree = useShapeTree(page, pageState, meta);
    const { bounds, isLinked, isLocked, rotation } = useSelection(page, pageState, shapeUtils2);
    const {
      selectedIds,
      hoveredId,
      camera: { zoom }
    } = pageState;
    let _hideCloneHandles = true;
    let shapeWithHandles = void 0;
    const selectedShapes = selectedIds.map((id) => page.shapes[id]);
    if (selectedShapes.length === 1) {
      const shape = selectedShapes[0];
      const utils = shapeUtils2[shape.type];
      _hideCloneHandles = hideCloneHandles || !utils.showCloneHandles;
      if (shape.handles !== void 0) {
        shapeWithHandles = shape;
      }
    }
    return /* @__PURE__ */ (0, import_react24.createElement)(import_react24.Fragment, null, bounds && /* @__PURE__ */ (0, import_react24.createElement)(BoundsBg, {
      bounds,
      rotation,
      isHidden: hideBounds
    }), shapeTree.map((node) => /* @__PURE__ */(0, import_react24.createElement)(ShapeNode, __spreadValues2({
      key: node.shape.id,
      utils: shapeUtils2
    }, node))), !hideIndicators && selectedShapes.map((shape) => /* @__PURE__ */(0, import_react24.createElement)(ShapeIndicator, {
      key: "selected_" + shape.id,
      shape,
      meta,
      isSelected: true
    })), !hideIndicators && hoveredId && /* @__PURE__ */ (0, import_react24.createElement)(ShapeIndicator, {
      key: "hovered_" + hoveredId,
      shape: page.shapes[hoveredId],
      meta,
      isHovered: true
    }), bounds && /* @__PURE__ */ (0, import_react24.createElement)(Bounds, {
      zoom,
      bounds,
      viewportWidth: rendererBounds.width,
      isLocked,
      rotation,
      isHidden: hideBounds,
      hideRotateHandle,
      hideBindingHandles: hideBindingHandles || !isLinked,
      hideCloneHandles: _hideCloneHandles
    }), !hideHandles && shapeWithHandles && /* @__PURE__ */ (0, import_react24.createElement)(Handles, {
      shape: shapeWithHandles,
      zoom
    }));
  });
  function User({ user }) {
    const rUser = (0, import_react43.useRef)(null);
    return /* @__PURE__ */ (0, import_react43.createElement)("div", {
      ref: rUser,
      className: "tl-absolute tl-user",
      style: {
        backgroundColor: user.color,
        transform: `translate(${user.point[0]}px, ${user.point[1]}px)`
      }
    });
  }
  function Users({ userId, users }) {
    return /* @__PURE__ */ (0, import_react42.createElement)(import_react42.Fragment, null, Object.values(users).filter((user) => user && user.id !== userId).map((user) => /* @__PURE__ */(0, import_react42.createElement)(User, {
      key: user.id,
      user
    })));
  }
  function useResizeObserver(ref, onBoundsChange) {
    const { inputs: inputs2, callbacks } = useTLContext();
    const rIsMounted = (0, import_react44.useRef)(false);
    const updateBounds = (0, import_react44.useCallback)(() => {
      var _a, _b;
      if (rIsMounted.current) {
        const rect = (_a = ref.current) == null ? void 0 : _a.getBoundingClientRect();
        if (rect) {
          const bounds = {
            minX: rect.left,
            maxX: rect.left + rect.width,
            minY: rect.top,
            maxY: rect.top + rect.height,
            width: rect.width,
            height: rect.height
          };
          inputs2.bounds = bounds;
          onBoundsChange(bounds);
          (_b = callbacks.onBoundsChange) == null ? void 0 : _b.call(callbacks, bounds);
        }
      } else {
        rIsMounted.current = true;
      }
    }, [ref, inputs2, callbacks.onBoundsChange]);
    (0, import_react44.useEffect)(() => {
      const debouncedupdateBounds = Utils.debounce(updateBounds, 100);
      window.addEventListener("scroll", debouncedupdateBounds);
      window.addEventListener("resize", debouncedupdateBounds);
      return () => {
        window.removeEventListener("scroll", debouncedupdateBounds);
        window.removeEventListener("resize", debouncedupdateBounds);
      };
    }, []);
    (0, import_react44.useEffect)(() => {
      const resizeObserver = new ResizeObserver((entries) => {
        if (inputs2.isPinching) {
          return;
        }
        if (entries[0].contentRect) {
          updateBounds();
        }
      });
      if (ref.current) {
        resizeObserver.observe(ref.current);
      }
      return () => {
        resizeObserver.disconnect();
      };
    }, [ref, inputs2]);
    (0, import_react44.useEffect)(() => {
      updateBounds();
    }, [ref]);
  }
  var DOUBLE_CLICK_DURATION = 250;
  var Inputs = class {
    constructor() {
      this.keys = {};
      this.isPinching = false;
      this.bounds = {
        minX: 0,
        maxX: 640,
        minY: 0,
        maxY: 480,
        width: 640,
        height: 480
      };
      this.zoom = 1;
      this.pointerUpTime = 0;
      this.panStart = (e7) => {
        var _a, _b;
        const { shiftKey, ctrlKey, metaKey, altKey } = e7;
        const info = {
          target: "wheel",
          pointerId: ((_a = this.pointer) == null ? void 0 : _a.pointerId) || 0,
          origin: ((_b = this.pointer) == null ? void 0 : _b.origin) || [0, 0],
          delta: [0, 0],
          pressure: 0.5,
          point: Inputs.getPoint(e7, this.bounds),
          shiftKey,
          ctrlKey,
          metaKey,
          altKey,
          spaceKey: this.keys[" "]
        };
        this.pointer = info;
        return info;
      };
      this.pan = (delta, e7) => {
        if (!this.pointer || this.pointer.target !== "wheel") {
          return this.panStart(e7);
        }
        const { shiftKey, ctrlKey, metaKey, altKey } = e7;
        const prev = this.pointer;
        const point = Inputs.getPoint(e7, this.bounds);
        const info = __spreadProps2(__spreadValues2({}, prev), {
          target: "wheel",
          delta,
          point,
          shiftKey,
          ctrlKey,
          metaKey,
          altKey,
          spaceKey: this.keys[" "]
        });
        this.pointer = info;
        return info;
      };
      this.keydown = (e7) => {
        var _a, _b;
        const { shiftKey, ctrlKey, metaKey, altKey } = e7;
        this.keys[e7.key] = true;
        return {
          point: ((_a = this.pointer) == null ? void 0 : _a.point) || [0, 0],
          origin: ((_b = this.pointer) == null ? void 0 : _b.origin) || [0, 0],
          key: e7.key,
          keys: Object.keys(this.keys),
          shiftKey,
          ctrlKey,
          metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
          altKey
        };
      };
      this.keyup = (e7) => {
        var _a, _b;
        const { shiftKey, ctrlKey, metaKey, altKey } = e7;
        delete this.keys[e7.key];
        return {
          point: ((_a = this.pointer) == null ? void 0 : _a.point) || [0, 0],
          origin: ((_b = this.pointer) == null ? void 0 : _b.origin) || [0, 0],
          key: e7.key,
          keys: Object.keys(this.keys),
          shiftKey,
          ctrlKey,
          metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
          altKey
        };
      };
    }
    pointerIsValid(e7) {
      if ("pointerId" in e7) {
        if (this.activePointer && this.activePointer !== e7.pointerId)
          return false;
      }
      if ("touches" in e7) {
        const touch = e7.changedTouches[0];
        if (this.activePointer && this.activePointer !== touch.identifier)
          return false;
      }
      return true;
    }
    touchStart(e7, target) {
      const { shiftKey, ctrlKey, metaKey, altKey } = e7;
      const touch = e7.changedTouches[0];
      this.activePointer = touch.identifier;
      const info = {
        target,
        pointerId: touch.identifier,
        origin: Inputs.getPoint(touch, this.bounds),
        delta: [0, 0],
        point: Inputs.getPoint(touch, this.bounds),
        pressure: Inputs.getPressure(touch),
        shiftKey,
        ctrlKey,
        metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
        altKey,
        spaceKey: this.keys[" "]
      };
      this.pointer = info;
      return info;
    }
    touchEnd(e7, target) {
      const { shiftKey, ctrlKey, metaKey, altKey } = e7;
      const touch = e7.changedTouches[0];
      const info = {
        target,
        pointerId: touch.identifier,
        origin: Inputs.getPoint(touch, this.bounds),
        delta: [0, 0],
        point: Inputs.getPoint(touch, this.bounds),
        pressure: Inputs.getPressure(touch),
        shiftKey,
        ctrlKey,
        metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
        altKey,
        spaceKey: this.keys[" "]
      };
      this.pointer = info;
      this.activePointer = void 0;
      return info;
    }
    touchMove(e7, target) {
      const { shiftKey, ctrlKey, metaKey, altKey } = e7;
      const touch = e7.changedTouches[0];
      const prev = this.pointer;
      const point = Inputs.getPoint(touch, this.bounds);
      const delta = (prev == null ? void 0 : prev.point) ? $a8e101027d325e52$export$e947a0f742cf021e.sub(point, prev.point) : [0, 0];
      const info = __spreadProps2(__spreadValues2({
        origin: point
      }, prev), {
        target,
        pointerId: touch.identifier,
        point,
        delta,
        pressure: Inputs.getPressure(touch),
        shiftKey,
        ctrlKey,
        metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
        altKey,
        spaceKey: this.keys[" "]
      });
      this.pointer = info;
      return info;
    }
    pointerDown(e7, target) {
      const { shiftKey, ctrlKey, metaKey, altKey } = e7;
      const point = Inputs.getPoint(e7, this.bounds);
      this.activePointer = e7.pointerId;
      const info = {
        target,
        pointerId: e7.pointerId,
        origin: point,
        point,
        delta: [0, 0],
        pressure: Inputs.getPressure(e7),
        shiftKey,
        ctrlKey,
        metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
        altKey,
        spaceKey: this.keys[" "]
      };
      this.pointer = info;
      return info;
    }
    pointerEnter(e7, target) {
      const { shiftKey, ctrlKey, metaKey, altKey } = e7;
      const point = Inputs.getPoint(e7, this.bounds);
      const info = {
        target,
        pointerId: e7.pointerId,
        origin: point,
        delta: [0, 0],
        point,
        pressure: Inputs.getPressure(e7),
        shiftKey,
        ctrlKey,
        metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
        altKey,
        spaceKey: this.keys[" "]
      };
      this.pointer = info;
      return info;
    }
    pointerMove(e7, target) {
      const { shiftKey, ctrlKey, metaKey, altKey } = e7;
      const prev = this.pointer;
      const point = Inputs.getPoint(e7, this.bounds);
      const delta = (prev == null ? void 0 : prev.point) ? $a8e101027d325e52$export$e947a0f742cf021e.sub(point, prev.point) : [0, 0];
      const info = __spreadProps2(__spreadValues2({
        origin: point
      }, prev), {
        target,
        pointerId: e7.pointerId,
        point,
        delta,
        pressure: Inputs.getPressure(e7),
        shiftKey,
        ctrlKey,
        metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
        altKey,
        spaceKey: this.keys[" "]
      });
      this.pointer = info;
      return info;
    }
    pointerUp(e7, target) {
      const { shiftKey, ctrlKey, metaKey, altKey } = e7;
      const prev = this.pointer;
      const point = Inputs.getPoint(e7, this.bounds);
      const delta = (prev == null ? void 0 : prev.point) ? $a8e101027d325e52$export$e947a0f742cf021e.sub(point, prev.point) : [0, 0];
      this.activePointer = void 0;
      const info = __spreadProps2(__spreadValues2({
        origin: point
      }, prev), {
        target,
        pointerId: e7.pointerId,
        point,
        delta,
        pressure: Inputs.getPressure(e7),
        shiftKey,
        ctrlKey,
        metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
        altKey,
        spaceKey: this.keys[" "]
      });
      this.pointer = info;
      this.pointerUpTime = Date.now();
      return info;
    }
    isDoubleClick() {
      if (!this.pointer)
        return false;
      const { origin, point } = this.pointer;
      return Date.now() - this.pointerUpTime < DOUBLE_CLICK_DURATION && $a8e101027d325e52$export$e947a0f742cf021e.dist(origin, point) < 4;
    }
    clear() {
      this.pointer = void 0;
    }
    resetDoubleClick() {
      this.pointerUpTime = 0;
    }
    pinch(point, origin) {
      const { shiftKey, ctrlKey, metaKey, altKey } = this.keys;
      const delta = $a8e101027d325e52$export$e947a0f742cf021e.sub(origin, point);
      const info = {
        pointerId: 0,
        target: "pinch",
        origin,
        delta,
        point: $a8e101027d325e52$export$e947a0f742cf021e.sub($a8e101027d325e52$export$e947a0f742cf021e.round(point), [this.bounds.minX, this.bounds.minY]),
        pressure: 0.5,
        shiftKey,
        ctrlKey,
        metaKey: Utils.isDarwin() ? metaKey : ctrlKey,
        altKey,
        spaceKey: this.keys[" "]
      };
      this.pointer = info;
      return info;
    }
    reset() {
      this.pointerUpTime = 0;
      this.pointer = void 0;
      this.keyboard = void 0;
      this.activePointer = void 0;
      this.keys = {};
    }
    static getPoint(e7, bounds) {
      return [+e7.clientX.toFixed(2) - bounds.minX, +e7.clientY.toFixed(2) - bounds.minY];
    }
    static getPressure(e7) {
      return "pressure" in e7 ? +e7.pressure.toFixed(2) || 0.5 : 0.5;
    }
    static commandKey() {
      return Utils.isDarwin() ? "\u2318" : "Ctrl";
    }
  };
  var inputs = new Inputs();
  function UsersIndicators({
    userId,
    users,
    meta,
    page
  }) {
    const { shapeUtils: shapeUtils2 } = useTLContext();
    return /* @__PURE__ */ (0, import_react45.createElement)(import_react45.Fragment, null, Object.values(users).filter(Boolean).filter((user) => user.id !== userId && user.selectedIds.length > 0).map((user) => {
      const shapes = user.selectedIds.map((id) => page.shapes[id]).filter(Boolean);
      if (shapes.length === 0)
        return null;
      const bounds = utils_default.getCommonBounds(shapes.map((shape) => shapeUtils2[shape.type].getBounds(shape)));
      return /* @__PURE__ */ (0, import_react45.createElement)(import_react45.Fragment, {
        key: user.id + "_shapes"
      }, /* @__PURE__ */(0, import_react45.createElement)("div", {
        className: "tl-absolute tl-user-indicator-bounds",
        style: {
          backgroundColor: user.color + "0d",
          borderColor: user.color + "78",
          transform: `translate(${bounds.minX}px, ${bounds.minY}px)`,
          width: bounds.width,
          height: bounds.height,
          pointerEvents: "none"
        }
      }), shapes.map((shape) => /* @__PURE__ */(0, import_react45.createElement)(ShapeIndicator, {
        key: `${user.id}_${shape.id}_indicator`,
        shape,
        user,
        meta,
        isHovered: true
      })));
    }));
  }
  function SnapLines({ snapLines }) {
    return /* @__PURE__ */ (0, import_react46.createElement)(import_react46.Fragment, null, snapLines.map((snapLine, i2) => /* @__PURE__ */(0, import_react46.createElement)(SnapLine, {
      key: i2,
      snapLine
    })));
  }
  function SnapLine({ snapLine }) {
    const bounds = utils_default.getBoundsFromPoints(snapLine);
    return /* @__PURE__ */ (0, import_react46.createElement)(import_react46.Fragment, null, /* @__PURE__ */(0, import_react46.createElement)("line", {
      className: "tl-snap-line",
      x1: bounds.minX,
      y1: bounds.minY,
      x2: bounds.maxX,
      y2: bounds.maxY
    }), snapLine.map(([x2, y2], i2) => /* @__PURE__ */(0, import_react46.createElement)("use", {
      key: i2,
      href: "#tl-snap-point",
      x: x2,
      y: y2
    })));
  }
  function Overlay({
    camera,
    children
  }) {
    const l4 = 2.5 / camera.zoom;
    return /* @__PURE__ */ (0, import_react47.createElement)("svg", {
      className: "tl-overlay"
    }, /* @__PURE__ */(0, import_react47.createElement)("defs", null, /* @__PURE__ */(0, import_react47.createElement)("g", {
      id: "tl-snap-point"
    }, /* @__PURE__ */(0, import_react47.createElement)("path", {
      className: "tl-snap-point",
      d: `M ${-l4},${-l4} L ${l4},${l4} M ${-l4},${l4} L ${l4},${-l4}`
    }))), /* @__PURE__ */(0, import_react47.createElement)("g", {
      transform: `scale(${camera.zoom}) translate(${camera.point})`
    }, children));
  }
  function resetError() {
    void 0;
  }
  function Canvas({
    id,
    page,
    pageState,
    snapLines,
    users,
    userId,
    meta,
    externalContainerRef,
    hideHandles,
    hideBounds,
    hideIndicators,
    hideBindingHandles,
    hideCloneHandles,
    hideRotateHandle,
    onBoundsChange
  }) {
    const rCanvas = (0, import_react3.useRef)(null);
    const rContainer = (0, import_react3.useRef)(null);
    const rLayer = (0, import_react3.useRef)(null);
    inputs.zoom = pageState.camera.zoom;
    useResizeObserver(rCanvas, onBoundsChange);
    useZoomEvents(pageState.camera.zoom, externalContainerRef || rCanvas);
    useSafariFocusOutFix();
    usePreventNavigation(rCanvas);
    useCameraCss(rLayer, rContainer, pageState);
    useKeyEvents();
    const events = useCanvasEvents();
    return /* @__PURE__ */ (0, import_react3.createElement)("div", {
      id,
      className: "tl-container",
      ref: rContainer
    }, /* @__PURE__ */(0, import_react3.createElement)("div", __spreadValues2({
      id: "canvas",
      className: "tl-absolute tl-canvas",
      ref: rCanvas
    }, events), /* @__PURE__ */(0, import_react3.createElement)(ErrorBoundary, {
      FallbackComponent: ErrorFallback,
      onReset: resetError
    }, /* @__PURE__ */(0, import_react3.createElement)("div", {
      ref: rLayer,
      className: "tl-absolute tl-layer"
    }, /* @__PURE__ */(0, import_react3.createElement)(Page, {
      page,
      pageState,
      hideBounds,
      hideIndicators,
      hideHandles,
      hideBindingHandles,
      hideCloneHandles,
      hideRotateHandle,
      meta
    }), users && userId && /* @__PURE__ */ (0, import_react3.createElement)(UsersIndicators, {
      userId,
      users,
      page,
      meta
    }), pageState.brush && /* @__PURE__ */ (0, import_react3.createElement)(Brush, {
      brush: pageState.brush
    }), users && /* @__PURE__ */ (0, import_react3.createElement)(Users, {
      userId,
      users
    }))), /* @__PURE__ */(0, import_react3.createElement)(Overlay, {
      camera: pageState.camera
    }, snapLines && /* @__PURE__ */ (0, import_react3.createElement)(SnapLines, {
      snapLines
    }))));
  }
  function Renderer(_a) {
    var _b = _a, {
      id = "tl",
      shapeUtils: shapeUtils2,
      page,
      pageState,
      users,
      userId,
      theme,
      meta,
      snapLines,
      containerRef,
      hideHandles = false,
      hideIndicators = false,
      hideCloneHandles = false,
      hideBindingHandles = false,
      hideRotateHandles = false,
      hideBounds = false
    } = _b, rest = __objRest2(_b, [
      "id",
      "shapeUtils",
      "page",
      "pageState",
      "users",
      "userId",
      "theme",
      "meta",
      "snapLines",
      "containerRef",
      "hideHandles",
      "hideIndicators",
      "hideCloneHandles",
      "hideBindingHandles",
      "hideRotateHandles",
      "hideBounds"
    ]);
    useTLTheme(theme, "#" + id);
    const rSelectionBounds = (0, import_react2.useRef)(null);
    const rPageState = (0, import_react2.useRef)(pageState);
    (0, import_react2.useEffect)(() => {
      rPageState.current = pageState;
    }, [pageState]);
    const [context2, setContext] = (0, import_react2.useState)(() => ({
      callbacks: rest,
      shapeUtils: shapeUtils2,
      rSelectionBounds,
      rPageState,
      bounds: {

        // ********* BOUNDS, WIDTH, HEIGHT

        minX: 0,
        minY: 0,
        maxX: Infinity,
        maxY: Infinity,
        width: Infinity,
        height: Infinity,
      },
      inputs: new Inputs()
    }));
    const onBoundsChange = (0, import_react2.useCallback)((bounds) => {
      setContext((context22) => __spreadProps2(__spreadValues2({}, context22), {
        bounds
      }));
    }, []);
    return /* @__PURE__ */ (0, import_react2.createElement)(TLContext.Provider, {
      value: context2
    }, /* @__PURE__ */(0, import_react2.createElement)(Canvas, {
      id,
      page,
      pageState,
      snapLines,
      users,
      userId,
      externalContainerRef: containerRef,
      hideBounds,
      hideIndicators,
      hideHandles,
      hideCloneHandles,
      hideBindingHandles,
      hideRotateHandle: hideRotateHandles,
      onBoundsChange,
      meta
    }));
  }
  var HTMLContainer = (0, import_react48.memo)((0, import_react48.forwardRef)(function HTMLContainer2(_a, ref) {
    var _b = _a, { children } = _b, rest = __objRest2(_b, ["children"]);
    return /* @__PURE__ */ (0, import_react48.createElement)("div", __spreadValues2({
      ref,
      className: "tl-positioned-div"
    }, rest), children);
  }));
  var TLShapeUtil = class {
    constructor() {
      this.refMap = new Map();
      this.boundsCache = new WeakMap();
      this.showCloneHandles = false;
      this.hideBounds = false;
      this.isStateful = false;
      this.shouldRender = (prev, next) => true;
      this.getRef = (shape) => {
        if (!this.refMap.has(shape.id)) {
          this.refMap.set(shape.id, (0, import_react49.createRef)());
        }
        return this.refMap.get(shape.id);
      };
      this.hitTestBounds = (shape, bounds) => {
        const shapeBounds = this.getBounds(shape);
        if (!shape.rotation) {
          return utils_default.boundsContain(bounds, shapeBounds) || utils_default.boundsContain(shapeBounds, bounds) || utils_default.boundsCollide(shapeBounds, bounds);
        }
        const corners = utils_default.getRotatedCorners(shapeBounds, shape.rotation);
        return corners.every((point) => utils_default.pointInBounds(point, bounds)) || $a8e101027d325e52$export$850cb6fb2fd493c0(corners, bounds).length > 0;
      };
      this.getRotatedBounds = (shape) => {
        return utils_default.getBoundsFromPoints(utils_default.getRotatedCorners(this.getBounds(shape), shape.rotation));
      };
    }
  };
  TLShapeUtil.Component = (component) => {
    return (0, import_react49.forwardRef)(component);
  };
  TLShapeUtil.Indicator = (component) => component;

  // src/state/state.ts
  var React3 = __toModule(require_react());

  // ../../node_modules/rko/dist/esm/index.js
  var import_react50 = __toModule(require_react());
  var __defProp3 = Object.defineProperty;
  var __defProps3 = Object.defineProperties;
  var __getOwnPropDescs3 = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols3 = Object.getOwnPropertySymbols;
  var __hasOwnProp3 = Object.prototype.hasOwnProperty;
  var __propIsEnum3 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp3 = (obj, key, value) => key in obj ? __defProp3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues3 = (a2, b4) => {
    for (var prop in b4 || (b4 = {}))
      if (__hasOwnProp3.call(b4, prop))
        __defNormalProp3(a2, prop, b4[prop]);
    if (__getOwnPropSymbols3)
      for (var prop of __getOwnPropSymbols3(b4)) {
        if (__propIsEnum3.call(b4, prop))
          __defNormalProp3(a2, prop, b4[prop]);
      }
    return a2;
  };
  var __spreadProps3 = (a2, b4) => __defProps3(a2, __getOwnPropDescs3(b4));
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e7) {
          reject(e7);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e7) {
          reject(e7);
        }
      };
      var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  function create(createState) {
    let state;
    const listeners = new Set();
    const setState = (partial, replace) => {
      const nextState = typeof partial === "function" ? partial(state) : partial;
      if (nextState !== state) {
        const previousState = state;
        state = replace ? nextState : Object.assign({}, state, nextState);
        listeners.forEach((listener) => listener(state, previousState));
      }
    };
    const getState = () => state;
    const subscribeWithSelector = (listener, selector = getState, equalityFn = Object.is) => {
      let currentSlice = selector(state);
      function listenerToAdd() {
        const nextSlice = selector(state);
        if (!equalityFn(currentSlice, nextSlice)) {
          const previousSlice = currentSlice;
          listener(currentSlice = nextSlice, previousSlice);
        }
      }
      listeners.add(listenerToAdd);
      return () => listeners.delete(listenerToAdd);
    };
    const subscribe = (listener, selector, equalityFn) => {
      if (selector || equalityFn) {
        return subscribeWithSelector(listener, selector, equalityFn);
      }
      listeners.add(listener);
      return () => listeners.delete(listener);
    };
    const destroy = () => listeners.clear();
    const api = { setState, getState, subscribe, destroy };
    state = createState(setState, getState, api);
    return api;
  }
  function create$1(createState) {
    let state;
    const listeners = new Set();
    const setState = (partial, replace) => {
      const nextState = typeof partial === "function" ? partial(state) : partial;
      if (nextState !== state) {
        const previousState = state;
        state = replace ? nextState : Object.assign({}, state, nextState);
        listeners.forEach((listener) => listener(state, previousState));
      }
    };
    const getState = () => state;
    const subscribeWithSelector = (listener, selector = getState, equalityFn = Object.is) => {
      let currentSlice = selector(state);
      function listenerToAdd() {
        const nextSlice = selector(state);
        if (!equalityFn(currentSlice, nextSlice)) {
          const previousSlice = currentSlice;
          listener(currentSlice = nextSlice, previousSlice);
        }
      }
      listeners.add(listenerToAdd);
      return () => listeners.delete(listenerToAdd);
    };
    const subscribe = (listener, selector, equalityFn) => {
      if (selector || equalityFn) {
        return subscribeWithSelector(listener, selector, equalityFn);
      }
      listeners.add(listener);
      return () => listeners.delete(listener);
    };
    const destroy = () => listeners.clear();
    const api = { setState, getState, subscribe, destroy };
    state = createState(setState, getState, api);
    return api;
  }
  var isSSR = typeof window === "undefined" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
  var useIsomorphicLayoutEffect = isSSR ? import_react50.useEffect : import_react50.useLayoutEffect;
  function create2(createState) {
    const api = typeof createState === "function" ? create$1(createState) : createState;
    const useStore = (selector = api.getState, equalityFn = Object.is) => {
      const [, forceUpdate] = (0, import_react50.useReducer)((c) => c + 1, 0);
      const state = api.getState();
      const stateRef = (0, import_react50.useRef)(state);
      const selectorRef = (0, import_react50.useRef)(selector);
      const equalityFnRef = (0, import_react50.useRef)(equalityFn);
      const erroredRef = (0, import_react50.useRef)(false);
      const currentSliceRef = (0, import_react50.useRef)();
      if (currentSliceRef.current === void 0) {
        currentSliceRef.current = selector(state);
      }
      let newStateSlice;
      let hasNewStateSlice = false;
      if (stateRef.current !== state || selectorRef.current !== selector || equalityFnRef.current !== equalityFn || erroredRef.current) {
        newStateSlice = selector(state);
        hasNewStateSlice = !equalityFn(currentSliceRef.current, newStateSlice);
      }
      useIsomorphicLayoutEffect(() => {
        if (hasNewStateSlice) {
          currentSliceRef.current = newStateSlice;
        }
        stateRef.current = state;
        selectorRef.current = selector;
        equalityFnRef.current = equalityFn;
        erroredRef.current = false;
      });
      const stateBeforeSubscriptionRef = (0, import_react50.useRef)(state);
      useIsomorphicLayoutEffect(() => {
        const listener = () => {
          try {
            const nextState = api.getState();
            const nextStateSlice = selectorRef.current(nextState);
            if (!equalityFnRef.current(currentSliceRef.current, nextStateSlice)) {
              stateRef.current = nextState;
              currentSliceRef.current = nextStateSlice;
              forceUpdate();
            }
          } catch (error) {
            erroredRef.current = true;
            forceUpdate();
          }
        };
        const unsubscribe = api.subscribe(listener);
        if (api.getState() !== stateBeforeSubscriptionRef.current) {
          listener();
        }
        return unsubscribe;
      }, []);
      return hasNewStateSlice ? newStateSlice : currentSliceRef.current;
    };
    Object.assign(useStore, api);
    useStore[Symbol.iterator] = function () {
      console.warn("[useStore, api] = create() is deprecated and will be removed in v4");
      const items = [useStore, api];
      return {
        next() {
          const done = items.length <= 0;
          return { value: items.shift(), done };
        }
      };
    };
    return useStore;
  }
  function idbReady() {
    const isSafari = !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent);
    if (!isSafari || !indexedDB.databases)
      return Promise.resolve();
    let intervalId;
    return new Promise((resolve) => {
      const tryIdb = () => indexedDB.databases().finally(resolve);
      intervalId = setInterval(tryIdb, 100);
      tryIdb();
    }).finally(() => clearInterval(intervalId));
  }
  var esm_default = idbReady;
  function promisifyRequest(request) {
    return new Promise((resolve, reject) => {
      request.oncomplete = request.onsuccess = () => resolve(request.result);
      request.onabort = request.onerror = () => reject(request.error);
    });
  }
  function createStore(dbName, storeName) {
    const dbp = esm_default().then(() => {
      const request = indexedDB.open(dbName);
      request.onupgradeneeded = () => request.result.createObjectStore(storeName);
      return promisifyRequest(request);
    });
    return (txMode, callback) => dbp.then((db) => callback(db.transaction(storeName, txMode).objectStore(storeName)));
  }
  var defaultGetStoreFunc;
  function defaultGetStore() {
    if (!defaultGetStoreFunc) {
      defaultGetStoreFunc = createStore("keyval-store", "keyval");
    }
    return defaultGetStoreFunc;
  }
  function get(key, customStore = defaultGetStore()) {
    return customStore("readonly", (store) => promisifyRequest(store.get(key)));
  }
  function set(key, value, customStore = defaultGetStore()) {
    return customStore("readwrite", (store) => {
      store.put(value, key);
      return promisifyRequest(store.transaction);
    });
  }
  function deepCopy(target) {
    if (target === null) {
      return target;
    }
    if (target instanceof Date) {
      return new Date(target.getTime());
    }
    if (typeof target === "object") {
      if (typeof target[Symbol.iterator] === "function") {
        const cp = [];
        if (target.length > 0) {
          for (const arrayMember of target) {
            cp.push(deepCopy(arrayMember));
          }
        }
        return cp;
      } else {
        const targetKeys = Object.keys(target);
        const cp = {};
        if (targetKeys.length > 0) {
          for (const key of targetKeys) {
            cp[key] = deepCopy(target[key]);
          }
        }
        return cp;
      }
    }
    return target;
  }
  function merge(target, patch) {
    const result = __spreadValues3({}, target);
    const entries = Object.entries(patch);
    for (const [key, value] of entries)
      result[key] = value === Object(value) && !Array.isArray(value) ? merge(result[key], value) : value;
    return result;
  }
  var StateManager = class {
    constructor(initialState3, id, version, update) {
      this.pointer = -1;
      this._status = "loading";
      this.stack = [];
      this.persist = () => {
        if (this._idbId) {
          return set(this._idbId, this._state);
        }
      };
      this.applyPatch = (patch, id2) => {
        const prev = this._state;
        const next = merge(this._state, patch);
        const final = this.cleanup(next, prev, patch, id2);
        this.onStateWillChange(final, id2);
        this._state = final;
        this.store.setState(this._state, true);
        this.onStateDidChange(this._state, id2);
        return this;
      };
      this.onReady = () => {
      };
      this.cleanup = (nextState, prevState, patch, id2) => nextState;
      this.onStateWillChange = (state, id2) => {
      };
      this.onStateDidChange = (state, id2) => {
      };
      this.patchState = (patch, id2) => {
        this.applyPatch(patch, id2 ? "patch:" + id2 : "patch");
        return this;
      };
      this.replaceState = (state, id2) => {
        const final = this.cleanup(state, this._state, state, id2 ? "replace:" + id2 : "replace");
        this.onStateWillChange(final, id2 ? "replace:" + id2 : "replace");
        this._state = final;
        this.store.setState(this._state, true);
        this.onStateDidChange(this._state, id2 ? "replace:" + id2 : "replace");
        return this;
      };
      this.setState = (command, id2 = command.id) => {
        if (this.pointer < this.stack.length - 1) {
          this.stack = this.stack.slice(0, this.pointer + 1);
        }
        this.stack.push(__spreadProps3(__spreadValues3({}, command), { id: id2 }));
        this.pointer = this.stack.length - 1;
        this.applyPatch(command.after, id2 ? "command:" + id2 : "command");
        this.persist();
        return this;
      };
      this.reset = () => {
        this.onStateWillChange(this.initialState, "reset");
        this._state = this.initialState;
        this.store.setState(this._state, true);
        this.resetHistory();
        this.persist();
        this.onStateDidChange(this._state, "reset");
        return this;
      };
      this.replaceHistory = (history, pointer = history.length - 1) => {
        this.stack = history;
        this.pointer = pointer;
        return this;
      };
      this.resetHistory = () => {
        this.stack = [];
        this.pointer = -1;
        return this;
      };
      this.undo = () => {
        if (!this.canUndo)
          return this;
        const command = this.stack[this.pointer];
        this.pointer--;
        this.applyPatch(command.before, command.id ? `undo:${command.id}` : "undo");
        this.persist();
        return this;
      };
      this.redo = () => {
        if (!this.canRedo)
          return this;
        this.pointer++;
        const command = this.stack[this.pointer];
        this.applyPatch(command.after, command.id ? `redo:${command.id}` : "redo");
        this.persist();
        return this;
      };
      this.setSnapshot = () => {
        this._snapshot = __spreadValues3({}, this._state);
        return this;
      };
      this.forceUpdate = () => {
        this.store.setState(this._state, true);
      };
      this._idbId = id;
      this._state = deepCopy(initialState3);
      this._snapshot = deepCopy(initialState3);
      this.initialState = deepCopy(initialState3);
      this.store = create(() => this._state);
      this.useStore = create2(this.store);
      if (this._idbId) {
        get(this._idbId).then((saved) => __async(this, null, function* () {
          if (saved) {
            let next = saved;
            if (version) {
              let savedVersion = yield get(id + "_version");
              if (savedVersion && savedVersion < version) {
                next = update ? update(saved, initialState3, savedVersion) : initialState3;
              }
            }
            yield set(id + "_version", version || -1);
            this._state = deepCopy(next);
            this._snapshot = deepCopy(next);
            this.store.setState(this._state, true);
          } else {
            yield set(id + "_version", version || -1);
          }
          this._status = "ready";
          this.onReady();
        }));
      } else {
        new Promise((resolve) => resolve()).then(() => {
          this._status = "ready";
          this.onReady();
        });
      }
    }
    get canUndo() {
      return this.pointer > -1;
    }
    get canRedo() {
      return this.pointer < this.stack.length - 1;
    }
    get state() {
      return this._state;
    }
    get status() {
      return this._status;
    }
    get snapshot() {
      return this._snapshot;
    }
  };


  /// ****** SOURCE CODE START


  // src/state/shapes/draw.tsx
  var React2 = __toModule(require_react());

  // ../perfect-freehand/dist/esm/index.mjs
  function $(e7, t6, u2, x2 = (h2) => h2) {
    return e7 * x2(0.5 - t6 * (0.5 - u2));
  }
  function se(e7) {
    return [-e7[0], -e7[1]];
  }
  function l(e7, t6) {
    return [e7[0] + t6[0], e7[1] + t6[1]];
  }
  function a(e7, t6) {
    return [e7[0] - t6[0], e7[1] - t6[1]];
  }
  function b(e7, t6) {
    return [e7[0] * t6, e7[1] * t6];
  }
  function he(e7, t6) {
    return [e7[0] / t6, e7[1] / t6];
  }
  function R(e7) {
    return [e7[1], -e7[0]];
  }
  function B(e7, t6) {
    return e7[0] * t6[0] + e7[1] * t6[1];
  }
  function ue(e7, t6) {
    return e7[0] === t6[0] && e7[1] === t6[1];
  }
  function ge(e7) {
    return Math.hypot(e7[0], e7[1]);
  }
  function de(e7) {
    return e7[0] * e7[0] + e7[1] * e7[1];
  }
  function A(e7, t6) {
    return de(a(e7, t6));
  }
  function G(e7) {
    return he(e7, ge(e7));
  }
  function ie(e7, t6) {
    return Math.hypot(e7[1] - t6[1], e7[0] - t6[0]);
  }
  function L(e7, t6, u2) {
    let x2 = Math.sin(u2), h2 = Math.cos(u2), y2 = e7[0] - t6[0], n2 = e7[1] - t6[1], f3 = y2 * h2 - n2 * x2, d2 = y2 * x2 + n2 * h2;
    return [f3 + t6[0], d2 + t6[1]];
  }
  function K(e7, t6, u2) {
    return l(e7, b(a(t6, e7), u2));
  }
  function ee(e7, t6, u2) {
    return l(e7, b(t6, u2));
  }
  var { min: C, PI: xe } = Math;
  var pe = 0.275;
  var V2 = xe + 1e-4;
  function ce(e7, t6 = {}) {
    let { size: u2 = 16, smoothing: x2 = 0.5, thinning: h2 = 0.5, simulatePressure: y2 = true, easing: n2 = (r4) => r4, start: f3 = {}, end: d2 = {}, last: D2 = false } = t6, { cap: S2 = true, easing: j = (r4) => r4 * (2 - r4) } = f3, { cap: q = true, easing: c = (r4) => --r4 * r4 * r4 + 1 } = d2;
    if (e7.length === 0 || u2 <= 0)
      return [];
    let p3 = e7[e7.length - 1].runningLength, g2 = f3.taper === false ? 0 : f3.taper === true ? Math.max(u2, p3) : f3.taper, T = d2.taper === false ? 0 : d2.taper === true ? Math.max(u2, p3) : d2.taper, te = Math.pow(u2 * x2, 2), _ = [], M2 = [], H = e7.slice(0, 10).reduce((r4, i2) => {
      let o6 = i2.pressure;
      if (y2) {
        let s2 = C(1, i2.distance / u2), W = C(1, 1 - s2);
        o6 = C(1, r4 + (W - r4) * (s2 * pe));
      }
      return (r4 + o6) / 2;
    }, e7[0].pressure), m3 = $(u2, h2, e7[e7.length - 1].pressure, n2), U, X = e7[0].vector, z = e7[0].point, F = z, O = z, E2 = F, J = false;
    for (let r4 = 0; r4 < e7.length; r4++) {
      let { pressure: i2 } = e7[r4], { point: o6, vector: s2, distance: W, runningLength: I } = e7[r4];
      if (r4 < e7.length - 1 && p3 - I < 3)
        continue;
      if (h2) {
        if (y2) {
          let v2 = C(1, W / u2), Z = C(1, 1 - v2);
          i2 = C(1, H + (Z - H) * (v2 * pe));
        }
        m3 = $(u2, h2, i2, n2);
      } else
        m3 = u2 / 2;
      U === void 0 && (U = m3);
      let le = I < g2 ? j(I / g2) : 1, fe = p3 - I < T ? c((p3 - I) / T) : 1;
      m3 = Math.max(0.01, m3 * Math.min(le, fe));
      let re = (r4 < e7.length - 1 ? e7[r4 + 1] : e7[r4]).vector, Y = r4 < e7.length - 1 ? B(s2, re) : 1, be = B(s2, X) < 0 && !J, ne = Y !== null && Y < 0;
      if (be || ne) {
        let v2 = b(R(X), m3);
        for (let Z = 1 / 13, w2 = 0; w2 <= 1; w2 += Z)
          O = L(a(o6, v2), o6, V2 * w2), _.push(O), E2 = L(l(o6, v2), o6, V2 * -w2), M2.push(E2);
        z = O, F = E2, ne && (J = true);
        continue;
      }
      if (J = false, r4 === e7.length - 1) {
        let v2 = b(R(s2), m3);
        _.push(a(o6, v2)), M2.push(l(o6, v2));
        continue;
      }
      let oe = b(R(K(re, s2, Y)), m3);
      O = a(o6, oe), (r4 <= 1 || A(z, O) > te) && (_.push(O), z = O), E2 = l(o6, oe), (r4 <= 1 || A(F, E2) > te) && (M2.push(E2), F = E2), H = i2, X = s2;
    }
    let P2 = e7[0].point.slice(0, 2), k = e7.length > 1 ? e7[e7.length - 1].point.slice(0, 2) : l(e7[0].point, [1, 1]), Q = [], N = [];
    if (e7.length === 1) {
      if (!(g2 || T) || D2) {
        let r4 = ee(P2, G(R(a(P2, k))), -(U || m3)), i2 = [];
        for (let o6 = 1 / 13, s2 = o6; s2 <= 1; s2 += o6)
          i2.push(L(r4, P2, V2 * 2 * s2));
        return i2;
      }
    } else {
      if (!(g2 || T && e7.length === 1))
        if (S2)
          for (let i2 = 1 / 13, o6 = i2; o6 <= 1; o6 += i2) {
            let s2 = L(M2[0], P2, V2 * o6);
            Q.push(s2);
          }
        else {
          let i2 = a(_[0], M2[0]), o6 = b(i2, 0.5), s2 = b(i2, 0.51);
          Q.push(a(P2, o6), a(P2, s2), l(P2, s2), l(P2, o6));
        }
      let r4 = R(se(e7[e7.length - 1].vector));
      if (T || g2 && e7.length === 1)
        N.push(k);
      else if (q) {
        let i2 = ee(k, r4, m3);
        for (let o6 = 1 / 29, s2 = o6; s2 < 1; s2 += o6)
          N.push(L(i2, k, V2 * 3 * s2));
      } else
        N.push(l(k, b(r4, m3)), l(k, b(r4, m3 * 0.99)), a(k, b(r4, m3 * 0.99)), a(k, b(r4, m3)));
    }
    return _.concat(N, M2.reverse(), Q);
  }
  function me(e7, t6 = {}) {
    var q;
    let { streamline: u2 = 0.5, size: x2 = 16, last: h2 = false } = t6;
    if (e7.length === 0)
      return [];
    let y2 = 0.15 + (1 - u2) * 0.85, n2 = Array.isArray(e7[0]) ? e7 : e7.map(({ x: c, y: p3, pressure: g2 = 0.5 }) => [c, p3, g2]);
    if (n2.length === 2) {
      let c = n2[1];
      n2 = n2.slice(0, -1);
      for (let p3 = 1; p3 < 5; p3++)
        n2.push(K(n2[0], c, p3 / 4));
    }
    n2.length === 1 && (n2 = [...n2, [...l(n2[0], [1, 1]), ...n2[0].slice(2)]]);
    let f3 = [{ point: [n2[0][0], n2[0][1]], pressure: n2[0][2] >= 0 ? n2[0][2] : 0.25, vector: [1, 1], distance: 0, runningLength: 0 }], d2 = false, D2 = 0, S2 = f3[0], j = n2.length - 1;
    for (let c = 1; c < n2.length; c++) {
      let p3 = h2 && c === j ? n2[c].slice(0, 2) : K(S2.point, n2[c], y2);
      if (ue(S2.point, p3))
        continue;
      let g2 = ie(p3, S2.point);
      if (D2 += g2, c < j && !d2) {
        if (D2 < x2)
          continue;
        d2 = true;
      }
      S2 = { point: p3, pressure: n2[c][2] >= 0 ? n2[c][2] : 0.5, vector: G(a(S2.point, p3)), distance: g2, runningLength: D2 }, f3.push(S2);
    }
    return f3[0].vector = ((q = f3[1]) == null ? void 0 : q.vector) || [0, 0], f3;
  }
  function ae(e7, t6 = {}) {
    return ce(me(e7, t6), t6);
  }

  // src/state/easings.ts
  var EASINGS = {
    linear: (t6) => t6,
    easeInQuad: (t6) => t6 * t6,
    easeOutQuad: (t6) => t6 * (2 - t6),
    easeInOutQuad: (t6) => t6 < 0.5 ? 2 * t6 * t6 : -1 + (4 - 2 * t6) * t6,
    easeInCubic: (t6) => t6 * t6 * t6,
    easeOutCubic: (t6) => --t6 * t6 * t6 + 1,
    easeInOutCubic: (t6) => t6 < 0.5 ? 4 * t6 * t6 * t6 : (t6 - 1) * (2 * t6 - 2) * (2 * t6 - 2) + 1,
    easeInQuart: (t6) => t6 * t6 * t6 * t6,
    easeOutQuart: (t6) => 1 - --t6 * t6 * t6 * t6,
    easeInOutQuart: (t6) => t6 < 0.5 ? 8 * t6 * t6 * t6 * t6 : 1 - 8 * --t6 * t6 * t6 * t6,
    easeInQuint: (t6) => t6 * t6 * t6 * t6 * t6,
    easeOutQuint: (t6) => 1 + --t6 * t6 * t6 * t6 * t6,
    easeInOutQuint: (t6) => t6 < 0.5 ? 16 * t6 * t6 * t6 * t6 * t6 : 1 + 16 * --t6 * t6 * t6 * t6 * t6,
    easeInSine: (t6) => 1 - Math.cos(t6 * Math.PI / 2),
    easeOutSine: (t6) => Math.sin(t6 * Math.PI / 2),
    easeInOutSine: (t6) => -(Math.cos(Math.PI * t6) - 1) / 2,
    easeInExpo: (t6) => t6 <= 0 ? 0 : Math.pow(2, 10 * t6 - 10),
    easeOutExpo: (t6) => t6 >= 1 ? 1 : 1 - Math.pow(2, -10 * t6),
    easeInOutExpo: (t6) => t6 <= 0 ? 0 : t6 >= 1 ? 1 : t6 < 0.5 ? Math.pow(2, 20 * t6 - 10) / 2 : (2 - Math.pow(2, -20 * t6 + 10)) / 2
  };
  var EASING_STRINGS = {
    linear: `(t) => t`,
    easeInQuad: `(t) => t * t`,
    easeOutQuad: `(t) => t * (2 - t)`,
    easeInOutQuad: `(t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)`,
    easeInCubic: `(t) => t * t * t`,
    easeOutCubic: `(t) => --t * t * t + 1`,
    easeInOutCubic: `(t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1`,
    easeInQuart: `(t) => t * t * t * t`,
    easeOutQuart: `(t) => 1 - --t * t * t * t`,
    easeInOutQuart: `(t) => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t`,
    easeInQuint: `(t) => t * t * t * t * t`,
    easeOutQuint: `(t) => 1 + --t * t * t * t * t`,
    easeInOutQuint: `(t) => t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t`,
    easeInSine: `(t) => 1 - Math.cos((t * Math.PI) / 2)`,
    easeOutSine: `(t) => Math.sin((t * Math.PI) / 2)`,
    easeInOutSine: `(t) => -(Math.cos(Math.PI * t) - 1) / 2`,
    easeInExpo: `(t) => (t <= 0 ? 0 : Math.pow(2, 10 * t - 10))`,
    easeOutExpo: `(t) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t))`,
    easeInOutExpo: `(t) =>
    t <= 0
      ? 0
      : t >= 1
      ? 1
      : t < 0.5
      ? Math.pow(2, 20 * t - 10) / 2
      : (2 - Math.pow(2, -20 * t + 10)) / 2`
  };

  // src/state/shapes/draw.tsx
  var DrawUtil = class extends TLShapeUtil {
    constructor() {
      super(...arguments);
      this.type = "draw";
      this.pointsBoundsCache = new WeakMap([]);
      this.rotatedCache = new WeakMap([]);
      this.strokeCache = new WeakMap([]);
      this.getShape = (props) => {
        return Utils.deepMerge({
          id: "id",
          type: "draw",
          name: "Draw",
          parentId: "page",
          childIndex: 1,
          point: [0, 0],
          points: [[0, 0, 0.5]],
          rotation: 0,
          isDone: false,
          style: {
            size: 8,
            strokeWidth: 0,
            thinning: 0.75,
            streamline: 0.5,
            smoothing: 0.5,
            easing: "linear",
            taperStart: 0,
            taperEnd: 0,
            capStart: true,
            capEnd: true,
            easingStart: "linear",
            easingEnd: "linear",
            isFilled: true,
            stroke: "black",
            fill: "black"
          }
        }, props);
      };
      this.Component = TLShapeUtil.Component(({ shape, events }, ref) => {
        var _a;
        const {
          style: {
            size,
            thinning,
            strokeWidth,
            streamline,
            smoothing,
            easing,
            taperStart,
            taperEnd,
            capStart,
            capEnd,
            easingEnd,
            easingStart,
            stroke,
            fill,
            isFilled
          },
          isDone
        } = shape;
        const simulatePressure = ((_a = shape.points[2]) == null ? void 0 : _a[2]) === 0.5;
        const outlinePoints = Utils.getFromCache(this.strokeCache, shape, () => ae(shape.points, {
          size,
          thinning,
          streamline,
          easing: EASINGS[easing],
          smoothing,
          start: {
            taper: taperStart,
            cap: capStart,
            easing: EASINGS[easingStart]
          },
          end: {
            taper: taperEnd,
            cap: capEnd,
            easing: EASINGS[easingEnd]
          },
          simulatePressure,
          last: isDone
        }));
        const drawPathData = getSvgPathFromStroke(outlinePoints);
        return /* @__PURE__ */ React2.createElement(SVGContainer, __spreadValues({
          ref,
          fr: ""
        }, events), strokeWidth ? /* @__PURE__ */ React2.createElement("path", {
          d: drawPathData,
          id: "path_stroke_" + shape.id,
          fill: "transparent",
          stroke,
          strokeWidth,
          strokeLinejoin: "round",
          strokeLinecap: "round",
          pointerEvents: "all"
        }) : null, /* @__PURE__ */ React2.createElement("path", {
          id: "path_" + shape.id,
          d: drawPathData,
          fill: isFilled ? fill : "transparent",
          stroke: isFilled || strokeWidth > 0 ? "transparent" : "black",
          strokeWidth: isFilled || strokeWidth > 0 ? 0 : 1,
          strokeLinejoin: "round",
          strokeLinecap: "round",
          pointerEvents: "all"
        }));
      });
      this.Indicator = TLShapeUtil.Indicator(() => {
        return /* @__PURE__ */ React2.createElement("g", null);
      });
      this.create = (props) => {
        this.refMap.set(props.id, React2.createRef());
        return this.getShape(props);
      };
      this.getBounds = (shape) => {
        const bounds = Utils.translateBounds(Utils.getFromCache(this.pointsBoundsCache, shape.points, () => Utils.getBoundsFromPoints(shape.points)), shape.point);
        return bounds;
      };
      this.hitTestBounds = (shape, brushBounds) => {
        if (!shape.rotation) {
          const bounds = this.getBounds(shape);
          return Utils.boundsContain(brushBounds, bounds) || (Utils.boundsContain(bounds, brushBounds) || $a8e101027d325e52$export$d137a39b1cd79230(bounds, brushBounds).length > 0) && $a8e101027d325e52$export$87aca63d0856a2c6(Utils.translateBounds(brushBounds, $a8e101027d325e52$export$e947a0f742cf021e.neg(shape.point)), shape.points).length > 0;
        }
        const rBounds = this.getRotatedBounds(shape);
        const rotatedBounds = Utils.getFromCache(this.rotatedCache, shape, () => {
          const c = Utils.getBoundsCenter(Utils.getBoundsFromPoints(shape.points));
          return shape.points.map((pt) => $a8e101027d325e52$export$e947a0f742cf021e.rotWith(pt, c, shape.rotation || 0));
        });
        return Utils.boundsContain(brushBounds, rBounds) || $a8e101027d325e52$export$87aca63d0856a2c6(Utils.translateBounds(brushBounds, $a8e101027d325e52$export$e947a0f742cf021e.neg(shape.point)), rotatedBounds).length > 0;
      };
      this.transform = (shape, bounds, { initialShape, scaleX, scaleY }) => {
        const initialShapeBounds = Utils.getFromCache(this.boundsCache, initialShape, () => Utils.getBoundsFromPoints(initialShape.points));
        const points = initialShape.points.map(([x2, y2, r4]) => {
          return [
            bounds.width * (scaleX < 0 ? 1 - x2 / initialShapeBounds.width : x2 / initialShapeBounds.width),
            bounds.height * (scaleY < 0 ? 1 - y2 / initialShapeBounds.height : y2 / initialShapeBounds.height),
            r4
          ];
        });
        const newBounds = Utils.getBoundsFromPoints(shape.points);
        const point = $a8e101027d325e52$export$e947a0f742cf021e.sub([bounds.minX, bounds.minY], [newBounds.minX, newBounds.minY]);
        return {
          points,
          point
        };
      };
    }
  };
  var average = (a2, b4) => (a2 + b4) / 2;
  function getSvgPathFromStroke(points, closed = true) {
    const len = points.length;
    if (len < 4) {
      return ``;
    }
    let a2 = points[0];
    let b4 = points[1];
    const c = points[2];
    let result = `M${a2[0].toFixed(2)},${a2[1].toFixed(2)} Q${b4[0].toFixed(2)},${b4[1].toFixed(2)} ${average(b4[0], c[0]).toFixed(2)},${average(b4[1], c[1]).toFixed(2)} T`;
    for (let i2 = 2, max = len - 1; i2 < max; i2++) {
      a2 = points[i2];
      b4 = points[i2 + 1];
      result += `${average(a2[0], b4[0]).toFixed(2)},${average(a2[1], b4[1]).toFixed(2)} `;
    }
    if (closed) {
      result += "Z";
    }
    return result;
  }
  var draw = new DrawUtil();

  // src/state/sample.json
  var sample_default = []

  // src/state/utils.ts
  function cross(x2, y2, z) {
    return (y2[0] - x2[0]) * (z[1] - x2[1]) - (z[0] - x2[0]) * (y2[1] - x2[1]);
  }
  function pointInPolygon(p3, points) {
    let wn = 0;
    points.forEach((a2, i2) => {
      const b4 = points[(i2 + 1) % points.length];
      if (a2[1] <= p3[1]) {
        if (b4[1] > p3[1] && cross(a2, b4, p3) > 0) {
          wn += 1;
        }
      } else if (b4[1] <= p3[1] && cross(a2, b4, p3) < 0) {
        wn -= 1;
      }
    });
    return wn !== 0;
  }
  function copyTextToClipboard(string) {
    try {
      navigator.clipboard.writeText(string);
    } catch (e7) {
      const textarea = document.createElement("textarea");
      textarea.setAttribute("position", "fixed");
      textarea.setAttribute("top", "0");
      textarea.setAttribute("readonly", "true");
      textarea.setAttribute("contenteditable", "true");
      textarea.style.position = "fixed";
      textarea.value = string;
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      try {
        const range = document.createRange();
        range.selectNodeContents(textarea);
        const sel = window.getSelection();
        if (!sel)
          return;
        sel.removeAllRanges();
        sel.addRange(range);
        textarea.setSelectionRange(0, textarea.value.length);
      } catch (err) {
        console.warn("Could not copy to clipboard");
        null;
      } finally {
        document.body.removeChild(textarea);
      }
    }
  }

  // src/state/state.ts
  var shapeUtils = {
    draw: new DrawUtil()
  };
  var initialDoc = {
    page: {
      id: "page",
      shapes: {},
      bindings: {}
    },
    pageState: {
      id: "page",
      selectedIds: [],
      camera: {
        point: [0, 0],
        zoom: 1
      }
    }
  };

  /// ****** DEFAULT STYLE

  var defaultStyle = {
    size: 2,
    strokeWidth: 0,
    thinning: 0.9,
    streamline: 0.5,
    smoothing: 0.5,
    easing: "linear",
    taperStart: 0,
    taperEnd: 0,
    capStart: true,
    capEnd: true,
    easingStart: "linear",
    easingEnd: "linear",
    isFilled: true,
    fill: "#000000",
    stroke: "#000000"
  };
  var initialState2 = __spreadValues({
    appState: {
      status: "idle",
      tool: "drawing",
      editingId: void 0,
      style: defaultStyle,
      isPanelOpen: false // ****** DISABLE SIDE PANEL BY DEFAULT
    }
  }, initialDoc);
  var context = React3.createContext({});
  var AppState = class extends StateManager {
    constructor() {
      super(...arguments);
      this.shapeUtils = shapeUtils;
      this.log = false;
      this.currentStroke = {
        startTime: 0
      };
      this.onReady = () => {
        window["app"] = this;

        // ***** INIT CANVAS
        const searchParams = new URLSearchParams(window.location.search);
        const caseId = searchParams.get('caseId');

        if (caseId) {
          const patientCase = window.sqlite.dbrepo?.getPatientCase(caseId);

          let canvas = document.getElementById('canvas');

          const parser = new DOMParser();
          const previousSvg = parser.parseFromString(patientCase.image, 'image/svg+xml');

          while (previousSvg.childNodes.length > 0) {
            canvas.appendChild(previousSvg.childNodes[0]);
          }
        }
      };
      this.cleanup = (state) => {
        for (const id in state.page.shapes) {
          if (!state.page.shapes[id]) {
            delete state.page.shapes[id];
          }
        }
        return state;
      };
      this.onPointerDown = (info) => {
        const { state } = this;
        switch (state.appState.tool) {
          case "drawing": {
            this.createDrawingShape(info.point);
            break;
          }
          case "erasing": {
            this.setSnapshot();
            this.patchState({
              appState: {
                status: "erasing"
              }
            });
            this.erase(info.point);
            break;
          }
        }
      };
      this.onPointerMove = (info, event) => {
        if (event.buttons > 1)
          return;
        const { status, tool } = this.state.appState;
        switch (tool) {
          case "drawing": {
            if (status === "drawing") {
              const nextShape = this.updateDrawingShape(info.point, info.pressure);
              if (nextShape) {
                this.patchState({
                  page: {
                    shapes: {
                      [nextShape.id]: nextShape
                    }
                  }
                });
              }
            }
            break;
          }
          case "erasing": {
            if (status === "erasing") {
              this.erase(info.point);
            }
            break;
          }
        }
      };
      this.onPointerUp = () => {
        const { state } = this;
        switch (state.appState.tool) {
          case "drawing": {
            this.completeDrawingShape();
            break;
          }
          case "erasing": {
            this.setState({
              before: this.snapshot,
              after: {
                appState: {
                  status: "idle"
                },
                page: {
                  shapes: this.state.page.shapes
                }
              }
            });
            break;
          }
        }
      };
      this.pinchZoom = (point, delta, zoom) => {

        /// ****** COMMENTED THIS TO DISABLE PINCH ZOOM

        return;
        // const { camera } = this.state.pageState;
        // const nextPoint = $a8e101027d325e52$export$e947a0f742cf021e.sub(camera.point, $a8e101027d325e52$export$e947a0f742cf021e.div(delta, camera.zoom));
        // const nextZoom = zoom;
        // const p0 = $a8e101027d325e52$export$e947a0f742cf021e.sub($a8e101027d325e52$export$e947a0f742cf021e.div(point, camera.zoom), nextPoint);
        // const p1 = $a8e101027d325e52$export$e947a0f742cf021e.sub($a8e101027d325e52$export$e947a0f742cf021e.div(point, nextZoom), nextPoint);
        // return this.patchState({
        //   pageState: {
        //     camera: {
        //       point: $a8e101027d325e52$export$e947a0f742cf021e.round($a8e101027d325e52$export$e947a0f742cf021e.add(nextPoint, $a8e101027d325e52$export$e947a0f742cf021e.sub(p1, p0))),
        //       zoom: nextZoom
        //     }
        //   }
        // });
      };
      this.onPinchEnd = () => {
        this.patchState({
          appState: { status: "idle" }
        });
      };
      this.onPinch = (info, e7) => {
        var _a;
        if (this.state.appState.status !== "pinching")
          return;
        this.pinchZoom(info.point, info.delta, info.delta[2]);
        (_a = this.onPointerMove) == null ? void 0 : _a.call(this, info, e7);
      };
      this.onPan = (info) => {
        const { state } = this;
        if (state.appState.status === "pinching")
          return this;
        const { camera } = state.pageState;
        const delta = $a8e101027d325e52$export$e947a0f742cf021e.div(info.delta, camera.zoom);
        const prev = camera.point;
        const next = $a8e101027d325e52$export$e947a0f742cf021e.sub(prev, delta);
        if ($a8e101027d325e52$export$e947a0f742cf021e.isEqual(next, prev))
          return this;
        const point = $a8e101027d325e52$export$e947a0f742cf021e.round(next);
        if (state.appState.editingId && state.appState.status === "drawing") {
          const shape = state.page.shapes[state.appState.editingId];
          const nextShape = this.updateDrawingShape(info.point, info.pressure);
          this.patchState({
            pageState: {
              camera: {
                point
              }
            },
            page: {
              shapes: {
                [shape.id]: nextShape
              }
            }
          });
          if (nextShape) {
            this.patchState({
              page: {
                shapes: {
                  [nextShape.id]: nextShape
                }
              }
            });
          }
        }
        return this.patchState({
          pageState: {
            camera: {
              point
            }
          }
        });
      };
      this.togglePanelOpen = () => {
        const { state } = this;
        this.patchState({
          appState: {
            isPanelOpen: !state.appState.isPanelOpen
          }
        });
      };
      this.createDrawingShape = (point) => {
        const { state } = this;
        const camera = state.pageState.camera;
        const pt = $a8e101027d325e52$export$e947a0f742cf021e.sub($a8e101027d325e52$export$e947a0f742cf021e.div(point, camera.zoom), camera.point);
        const shape = draw.create({
          id: Utils.uniqueId(),
          point: pt,
          style: state.appState.style,
          points: [[0, 0, 0.5, 0]],
          isDone: false
        });
        this.currentStroke.startTime = Date.now();
        return this.patchState({
          appState: {
            status: "drawing",
            editingId: shape.id
          },
          page: {
            shapes: {
              [shape.id]: shape
            }
          }
        });
      };
      this.updateDrawingShape = (point, pressure) => {
        const { state, currentStroke } = this;
        if (state.appState.status !== "drawing")
          return;
        if (!state.appState.editingId)
          return;
        const shape = state.page.shapes[state.appState.editingId];
        const camera = state.pageState.camera;
        const newPoint = [
          ...$a8e101027d325e52$export$e947a0f742cf021e.sub($a8e101027d325e52$export$e947a0f742cf021e.round($a8e101027d325e52$export$e947a0f742cf021e.sub($a8e101027d325e52$export$e947a0f742cf021e.div(point, camera.zoom), camera.point)), shape.point),
          pressure,
          Date.now() - currentStroke.startTime
        ];
        let shapePoint = shape.point;
        let shapePoints = [...shape.points, newPoint];
        const offset = [Math.min(newPoint[0], 0), Math.min(newPoint[1], 0)];
        if (offset[0] < 0 || offset[1] < 0) {
          shapePoint = [
            ...$a8e101027d325e52$export$e947a0f742cf021e.round($a8e101027d325e52$export$e947a0f742cf021e.add(shapePoint, offset)),
            shapePoint[2],
            shapePoint[3]
          ];
          shapePoints = shapePoints.map((pt) => $a8e101027d325e52$export$e947a0f742cf021e.round($a8e101027d325e52$export$e947a0f742cf021e.sub(pt, offset)).concat(pt[2], pt[3]));
        }
        return {
          id: shape.id,
          point: shapePoint,
          points: shapePoints
        };
      };
      this.completeDrawingShape = () => {
        const { state } = this;
        const { shapes } = state.page;
        if (!state.appState.editingId)
          return this;
        let shape = shapes[state.appState.editingId];
        shape.isDone = true;
        shape = __spreadValues({}, shape);
        return this.setState({
          before: {
            appState: {
              status: "idle",
              editingId: void 0
            },
            page: {
              shapes: {
                [shape.id]: void 0
              }
            }
          },
          after: {
            appState: {
              status: "idle",
              editingId: void 0
            },
            page: {
              shapes: {
                [shape.id]: shape
              }
            }
          }
        });
      };
      this.centerShape = (id) => {
        const shape = this.state.page.shapes[id];
        const bounds = shapeUtils.draw.getBounds(this.state.page.shapes[id]);
        this.patchState({
          pageState: {
            camera: {
              point: $a8e101027d325e52$export$e947a0f742cf021e.add(shape.point, [
                window.innerWidth / 2 - bounds.width / 2,
                window.innerHeight / 2 - bounds.height / 2
              ]),
              zoom: 1
            }
          }
        });
      };
      this.replayShape = (points) => {
        this.eraseAll();
        const newShape = draw.create({
          id: Utils.uniqueId(),
          parentId: "page",
          childIndex: 1,
          point: [0, 0],
          points: [],
          style: this.state.appState.style
        });
        this.patchState({
          page: {
            shapes: {
              [newShape.id]: newShape
            }
          }
        });
        this.centerShape(newShape.id);
        points.map((pt, i2) => [...$a8e101027d325e52$export$e947a0f742cf021e.sub(pt, newShape.point), pt[2], pt[3] || i2 * 10]).forEach((pt, i2) => {
          setTimeout(() => {
            this.patchState({
              page: {
                shapes: {
                  [newShape.id]: {
                    points: points.slice(0, i2)
                  }
                }
              }
            });
          }, pt[3] * 20);
        });
      };
      this.addShape = (shape) => {
        const newShape = draw.create(__spreadValues({
          id: Utils.uniqueId(),
          parentId: "page",
          childIndex: 1,
          point: [0, 0],
          points: [],
          style: this.state.appState.style
        }, shape));
        const bounds = Utils.getBoundsFromPoints(newShape.points);
        const topLeft = [bounds.minX, bounds.minY];
        newShape.points = newShape.points.map((pt, i2) => $a8e101027d325e52$export$e947a0f742cf021e.sub(pt, topLeft).concat(pt[2] || 0.5, pt[3] || i2 * 10));
        this.patchState({
          page: {
            shapes: {
              [newShape.id]: newShape
            }
          }
        });
        this.persist();
        return newShape;
      };
      this.erase = (point) => {
        const { state } = this;
        const camera = state.pageState.camera;
        const pt = $a8e101027d325e52$export$e947a0f742cf021e.sub($a8e101027d325e52$export$e947a0f742cf021e.div(point, camera.zoom), camera.point);
        const { getBounds } = shapeUtils.draw;
        return this.patchState({
          page: {
            shapes: __spreadValues({}, Object.fromEntries(Object.entries(state.page.shapes).map(([id, shape]) => {
              const bounds = getBounds(shape);
              if ($a8e101027d325e52$export$e947a0f742cf021e.dist(pt, shape.point) < 10) {
                return [id, void 0];
              }
              if (Utils.pointInBounds(pt, bounds)) {
                const points = draw.strokeCache.get(shape);
                if (points && pointInPolygon($a8e101027d325e52$export$e947a0f742cf021e.sub(pt, shape.point), points) || $a8e101027d325e52$export$e947a0f742cf021e.dist(pt, shape.point) < 10) {
                  return [id, void 0];
                }
              }
              return [id, shape];
            })))
          }
        });
      };
      this.eraseAll = () => {
        const { state } = this;
        const { shapes } = state.page;
        if (state.appState.editingId)
          return this;
        return this.setState({
          before: {
            page: {
              shapes
            }
          },
          after: {
            page: {
              shapes: {}
            }
          }
        });
      };
      this.startStyleUpdate = () => {
        return this.setSnapshot();
      };
      this.patchStyleForAllShapes = (style) => {
        const { shapes } = this.state.page;
        return this.patchState({
          appState: {
            style
          },
          page: {
            shapes: __spreadValues({}, Object.fromEntries(Object.keys(shapes).map((id) => [id, { style }])))
          }
        });
      };
      this.patchStyle = (style) => {
        return this.patchState({
          appState: {
            style
          }
        });
      };
      this.finishStyleUpdate = () => {
        const { state, snapshot } = this;
        const { shapes } = state.page;
        return this.setState({
          before: snapshot,
          after: {
            appState: {
              style: state.appState.style
            },
            page: {
              shapes: __spreadValues({}, Object.fromEntries(Object.entries(shapes).map(([id, { style }]) => [id, { style }])))
            }
          }
        });
      };
      this.setNextStyleForAllShapes = (style) => {
        const { shapes } = this.state.page;
        return this.setState({
          before: {
            appState: {
              style: Object.fromEntries(Object.keys(style).map((key) => [
                key,
                this.state.appState.style[key]
              ]))
            },
            page: {
              shapes: __spreadValues({}, Object.fromEntries(Object.entries(shapes).map(([id, shape]) => [
                id,
                {
                  style: Object.fromEntries(Object.keys(style).map((key) => [
                    key,
                    shape.style[key]
                  ]))
                }
              ])))
            }
          },
          after: {
            appState: {
              style
            },
            page: {
              shapes: __spreadValues({}, Object.fromEntries(Object.keys(shapes).map((id) => [id, { style }])))
            }
          }
        });
      };
      this.resetStyle = (prop) => {
        const { shapes } = this.state.page;
        const { state } = this;
        const initialStyle = initialState2.appState.style[prop];
        return this.setState({
          before: {
            appState: state.appState,
            page: {
              shapes: __spreadValues({}, Object.fromEntries(Object.entries(shapes).map(([id, shape]) => [
                id,
                {
                  style: { [prop]: shape.style[prop] }
                }
              ])))
            }
          },
          after: {
            appState: {
              style: { [prop]: initialStyle }
            },
            page: {
              shapes: __spreadValues({}, Object.fromEntries(Object.keys(shapes).map((id) => [id, { [prop]: initialStyle }])))
            }
          }
        });
      };
      this.zoomToContent = () => {
        const shapes = Object.values(this.state.page.shapes);
        const pageState = this.state.pageState;
        if (shapes.length === 0) {
          this.patchState({
            pageState: {
              camera: {
                zoom: 1,
                point: [0, 0]
              }
            }
          });
        }
        const bounds = Utils.getCommonBounds(Object.values(shapes).map(shapeUtils.draw.getBounds));
        const { zoom } = pageState.camera;
        const mx = (window.innerWidth - bounds.width * zoom) / 2 / zoom;
        const my = (window.innerHeight - bounds.height * zoom) / 2 / zoom;
        const point = $a8e101027d325e52$export$e947a0f742cf021e.round($a8e101027d325e52$export$e947a0f742cf021e.add([-bounds.minX, -bounds.minY], [mx, my]));
        return this.patchState({
          pageState: { camera: { point } }
        });
      };
      this.resetStyles = () => {
        const { shapes } = this.state.page;
        const { state } = this;
        const currentAppState = state.appState;
        const initialAppState = initialState2.appState;
        return this.setState({
          before: {
            appState: currentAppState,
            page: {
              shapes: __spreadValues({}, Object.fromEntries(Object.keys(shapes).map((id) => [
                id,
                {
                  style: currentAppState.style
                }
              ])))
            }
          },
          after: {
            appState: initialAppState,
            page: {
              shapes: __spreadValues({}, Object.fromEntries(Object.keys(shapes).map((id) => [
                id,
                { style: initialAppState.style }
              ])))
            },
            pageState: {
              camera: {
                zoom: 1
              }
            }
          }
        });
      };
      this.copyStyles = () => {
        const { state } = this;
        const { style } = state.appState;
        copyTextToClipboard(`{
  size: ${style.size},
  smoothing: ${style.smoothing},
  thinning: ${style.thinning},
  streamline: ${style.streamline},
  easing: ${EASING_STRINGS[style.easing].toString()},
  start: {
    taper: ${style.taperStart},
    cap: ${style.capStart},
  },
  end: {
    taper: ${style.taperEnd},
    cap: ${style.capEnd},
  },
}`);
      };

      this.returnToPatient = () => {
        const searchParams = new URLSearchParams(window.location.search);
        const patientId = searchParams.get('patientId');

        // console.log("patientid: ", patientId);

        window.location = `index.html?patientId=${patientId}`;
      }

      this.parseSvgString = (svgString) => {
        // Create a DOM parser to parse the SVG string
        const parser = new DOMParser();
        const doc = parser.parseFromString(svgString, "image/svg+xml");

        // Extract the SVG element
        const svg = doc.documentElement;

        // Extract shapes from the SVG element
        const shapes = [];
        const pathElements = svg.querySelectorAll('path');

        pathElements.forEach(path => {
          const shape = {};

          const id = path.getAttribute('id');
          if (id.startsWith('path_stroke_')) {
            shape.type = 'stroke';
          } else if (id.startsWith('path_')) {
            shape.type = 'fill';
          } else {
            return; // Skip if it doesn't match the expected IDs
          }

          shape.id = id;

          // Parse the d attribute to extract points
          const pathData = path.getAttribute('d');
          shape.points = this.parsePathData(pathData);

          // Extract transform attribute if present
          const transform = path.getAttribute('transform');
          if (transform) {
            const position = transform.match(/translate\(([^,]+),\s*([^)]+)\)/);
            if (position) {
              shape.point = [parseFloat(position[1]), parseFloat(position[2])];
            }
          }

          shapes.push(shape);
        });

        return shapes;
      }

      // Function to parse the path data and extract points
      this.parsePathData = (d) => {
        const commands = d.match(/[a-z][^a-z]*/ig);
        const points = [];
        let currentPoint = [0, 0];

        commands.forEach(command => {
          const type = command[0];
          const values = command.slice(1).trim().split(/[\s,]+/).map(Number);

          switch (type) {
            case 'M':
              currentPoint = [values[0], values[1]];
              points.push([...currentPoint]);
              break;
            case 'L':
              currentPoint = [values[0], values[1]];
              points.push([...currentPoint]);
              break;
            case 'H':
              currentPoint[0] = values[0];
              points.push([...currentPoint]);
              break;
            case 'V':
              currentPoint[1] = values[0];
              points.push([...currentPoint]);
              break;
            case 'Z':
              // Z indicates closing the path; for simplicity, we'll ignore it
              break;
            default:
              // For simplicity, ignoring complex commands (C, S, Q, T, A)
              break;
          }
        });

        return points;
      }

      /// ****** SAVE TO DATABASE

      this.saveCanvas = () => {
        // get query params
        const searchParams = new URLSearchParams(window.location.search);
        const patientId = searchParams.get('patientId');
        const caseId = searchParams.get('caseId');

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        const shapes = Object.values(this.state.page.shapes);

        // const bounds = Utils.getCommonBounds(shapes.map(draw.getBounds));
        // const padding = 40;
        const padding = 0;
        shapes.forEach((shape) => {
          const fillElm = document.getElementById("path_" + shape.id);
          if (!fillElm)
            return;
          const fillClone = fillElm.cloneNode(false);
          const strokeElm = document.getElementById("path_stroke_" + shape.id);
          if (strokeElm) {
            const g2 = document.createElementNS("http://www.w3.org/2000/svg", "g");
            g2.setAttribute("transform", `translate(${shape.point[0]}, ${shape.point[1]})`);
            const strokeClone = strokeElm.cloneNode(false);
            g2.appendChild(strokeClone);
            g2.appendChild(fillClone);
            svg.appendChild(g2);
          } else {
            fillClone.setAttribute("transform", `translate(${shape.point[0]}, ${shape.point[1]})`);
            svg.appendChild(fillClone);
          }
        });

        // svg.setAttribute("viewBox", [
        //   bounds.minX - padding,
        //   bounds.minY - padding,
        //   bounds.width + padding * 2,
        //   bounds.height + padding * 2
        // ].join(" "));
        // svg.setAttribute("width", String(bounds.width));
        // svg.setAttribute("height", String(bounds.height));

        let canvas = document.getElementById('canvas');

        svg.setAttribute("viewBox", [
          0,
          0,
          canvas.offsetWidth,
          canvas.offsetHeight
        ].join(" "));
        svg.setAttribute("width", canvas.offsetWidth);
        svg.setAttribute("height", canvas.offsetHeight);

        while (canvas.childNodes.length > 0) {
          svg.appendChild(canvas.childNodes[0]);
        }

        const s2 = new XMLSerializer();
        const svgString = s2.serializeToString(svg).replaceAll("&#10;      ", "").replaceAll(/((\s|")[0-9]*\.[0-9]{2})([0-9]*)(\b|"|\))/g, "$1");

        if (caseId) {
          window.sqlite.dbrepo?.updateCase(caseId, svgString);
        } else {
          window.sqlite.dbrepo?.createCase(patientId, svgString, Date.now());
        }

        app.resetDoc()
        app.returnToPatient(patientId);
      };

      this.makeSVG = (tag, attrs) => {
        var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
        for (var k in attrs) {
          if (k == "xlink:href") {
            el.setAttributeNS('http://www.w3.org/1999/xlink', 'href', attrs[k]);
          } else {
            el.setAttribute(k, attrs[k]);
          }
        }

        return el;
      }

      this.copySvg = () => {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        const shapes = Object.values(this.state.page.shapes);
        const bounds = Utils.getCommonBounds(shapes.map(draw.getBounds));
        const padding = 40;
        shapes.forEach((shape) => {
          const fillElm = document.getElementById("path_" + shape.id);
          if (!fillElm)
            return;
          const fillClone = fillElm.cloneNode(false);
          const strokeElm = document.getElementById("path_stroke_" + shape.id);
          if (strokeElm) {
            const g2 = document.createElementNS("http://www.w3.org/2000/svg", "g");
            g2.setAttribute("transform", `translate(${shape.point[0]}, ${shape.point[1]})`);
            const strokeClone = strokeElm.cloneNode(false);
            g2.appendChild(strokeClone);
            g2.appendChild(fillClone);
            svg.appendChild(g2);
          } else {
            fillClone.setAttribute("transform", `translate(${shape.point[0]}, ${shape.point[1]})`);
            svg.appendChild(fillClone);
          }
        });
        svg.setAttribute("viewBox", [
          bounds.minX - padding,
          bounds.minY - padding,
          bounds.width + padding * 2,
          bounds.height + padding * 2
        ].join(" "));
        svg.setAttribute("width", String(bounds.width));
        svg.setAttribute("height", String(bounds.height));
        const s2 = new XMLSerializer();
        const svgString = s2.serializeToString(svg).replaceAll("&#10;      ", "").replaceAll(/((\s|")[0-9]*\.[0-9]{2})([0-9]*)(\b|"|\))/g, "$1");
        copyTextToClipboard(svgString);
        return svgString;
      };
      this.resetDoc = () => {
        const { shapes } = this.state.page;
        return this.setState({
          before: {
            page: {
              shapes
            }
          },
          after: {
            page: {
              shapes: __spreadValues({}, Object.fromEntries(Object.keys(shapes).map((key) => [key, void 0])))
            },
            pageState: {
              camera: {
                point: [0, 0],
                zoom: 1
              }
            }
          }
        });
      };
      this.onPinchStart = () => {
        if (this.state.appState.status !== "idle")
          return;
        this.patchState({
          appState: { status: "pinching" }
        });
      };
      this.selectDrawingTool = () => {
        this.patchState({
          appState: {
            tool: "drawing"
          }
        });
      };
      this.selectErasingTool = () => {
        this.patchState({
          appState: {
            tool: "erasing"
          }
        });
      };
    }
  };
  var app = new AppState(initialState2, "perfect-freehand", 1, (p3, n2) => n2);
  function useAppState(selector) {
    if (selector) {
      return app.useStore(selector);
    }
    return app.useStore();
  }

  // esbuild-css-modules-plugin-namespace:/tmp/tmp-272-OkkEAsDcGBE0/dev/src/components/editor/editor.module.css.js
  var digest = "c899bf9ffb6f5ef99f9a21b8d1defcd3531f6d65ea20d15f4270d317b4f4ced0";
  var css2 = `._container_13606_1 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
`;
  (function () {
    if (!document.getElementById(digest)) {
      var el = document.createElement("style");
      el.id = digest;
      el.textContent = css2;
      document.head.appendChild(el);
    }
  })();
  var editor_module_css_default = { "container": "_container_13606_1" };

  // src/components/editor/editor.tsx
  function Editor() {
    const {
      onPinch,
      onPinchStart,
      onPinchEnd,
      onPan,
      onPointerDown,
      onPointerMove,
      onPointerUp,
      shapeUtils: shapeUtils2
    } = app;
    const { page, pageState } = useAppState();
    React4.useEffect(() => {
      window.freehand = app;
    }, []);
    return /* @__PURE__ */ React4.createElement("div", {
      className: editor_module_css_default.container
    }, /* @__PURE__ */ React4.createElement(Renderer, {
      page,
      pageState,
      shapeUtils: shapeUtils2,
      onPointerDown,
      onPointerMove,
      onPointerUp,
      // onPinch,
      // onPinchStart,
      // onPinchEnd,
      // onPan
    }));
  }

  // src/components/controls/controls.tsx
  var React9 = __toModule(require_react());

  // src/components/colors/colors.tsx
  var React5 = __toModule(require_react());

  // ../../node_modules/@radix-ui/react-id/dist/index.module.js
  var e = __toModule(require_react());

  // ../../node_modules/@babel/runtime/helpers/esm/extends.js
  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i2 = 1; i2 < arguments.length; i2++) {
        var source = arguments[i2];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }

  // ../../node_modules/@radix-ui/react-id/dist/index.module.js
  var t = { prefix: Math.round(1e10 * Math.random()), current: 0 };
  var n = /* @__PURE__ */ e.createContext(t);
  function useId(r4) {
    const o6 = e.useContext(n);
    return Boolean(globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) || o6 !== t || console.warn("When server rendering, you must wrap your application in an <IdProvider> to ensure consistent ids are generated between the client and server."), e.useMemo(() => r4 || `radix-id-${o6.prefix}-${++o6.current}`, [r4]);
  }

  // ../../node_modules/@radix-ui/react-compose-refs/dist/index.module.js
  var o = __toModule(require_react());
  function composeRefs(...o6) {
    return (e7) => o6.forEach((o7) => function (o8, e8) {
      typeof o8 == "function" ? o8(e8) : o8 != null && (o8.current = e8);
    }(o7, e7));
  }
  function useComposedRefs(...e7) {
    return o.useCallback(composeRefs(...e7), e7);
  }

  // ../../node_modules/@radix-ui/react-slot/dist/index.module.js
  var t2 = __toModule(require_react());
  var Slot = /* @__PURE__ */ t2.forwardRef((e7, o6) => {
    const _a = e7, { children: l4 } = _a, c = __objRest(_a, ["children"]);
    return t2.Children.count(l4) === 1 ? /* @__PURE__ */ t2.createElement(r, _extends({}, c, { ref: o6 }), l4) : /* @__PURE__ */ t2.createElement(t2.Fragment, null, t2.Children.map(l4, (e8) => /* @__PURE__ */ t2.isValidElement(e8) && e8.type === Slottable ? /* @__PURE__ */ t2.createElement(r, _extends({}, c, { ref: o6 }), e8.props.children) : e8));
  });
  Slot.displayName = "Slot";
  var r = /* @__PURE__ */ t2.forwardRef((n2, r4) => {
    const _a = n2, { children: l4 } = _a, c = __objRest(_a, ["children"]), i2 = t2.Children.only(l4);
    return t2.isValidElement(i2) ? /* @__PURE__ */ t2.cloneElement(i2, __spreadProps(__spreadValues({}, o2(c, i2.props)), { ref: composeRefs(r4, i2.ref) })) : null;
  });
  r.displayName = "SlotClone";
  var Slottable = ({ children: e7 }) => e7;
  function o2(e7, t6) {
    const n2 = __spreadValues({}, t6);
    for (const r4 in t6) {
      const o6 = e7[r4], c = t6[r4];
      /^on[A-Z]/.test(r4) ? n2[r4] = l2(c, o6) : r4 === "style" ? n2[r4] = __spreadValues(__spreadValues({}, o6), c) : r4 === "className" && (n2[r4] = [o6, c].filter(Boolean).join(" "));
    }
    return __spreadValues(__spreadValues({}, e7), n2);
  }
  function l2(e7, t6) {
    return function (...n2) {
      e7 == null || e7(...n2);
      n2[0] instanceof Event && n2[0].defaultPrevented || t6 == null || t6(...n2);
    };
  }

  // ../../node_modules/@radix-ui/react-primitive/dist/index.module.js
  var r2 = __toModule(require_react());
  var Primitive = ["a", "button", "div", "h2", "h3", "p", "img", "span", "svg"].reduce((i2, s2) => __spreadProps(__spreadValues({}, i2), {
    [s2]: /* @__PURE__ */ r2.forwardRef((i3, n2) => {
      const _a = i3, { asChild: a2 } = _a, m3 = __objRest(_a, ["asChild"]), d2 = a2 ? Slot : s2;
      return i3.as && console.error(o3), /* @__PURE__ */ r2.createElement(d2, _extends({}, m3, { ref: n2 }));
    })
  }), {});
  var o3 = "Warning: The `as` prop has been removed in favour of `asChild`. For details, see https://radix-ui.com/docs/primitives/overview/styling#changing-the-rendered-element";

  // ../../node_modules/@radix-ui/react-label/dist/index.module.js
  var o4 = __toModule(require_react());
  var i = /* @__PURE__ */ o4.createContext(void 0);
  var Label = /* @__PURE__ */ o4.forwardRef((a2, s2) => {
    const _a = a2, { htmlFor: c, id: u2 } = _a, d2 = __objRest(_a, ["htmlFor", "id"]), f3 = o4.useRef(null), m3 = useComposedRefs(s2, f3), b4 = useId(u2);
    return o4.useEffect(() => {
      const e7 = f3.current;
      if (e7) {
        const t6 = (e8) => {
          e8.detail > 1 && e8.preventDefault();
        };
        return e7.addEventListener("mousedown", t6), () => e7.removeEventListener("mousedown", t6);
      }
    }, [f3]), o4.useEffect(() => {
      if (c) {
        const e7 = document.getElementById(c), t6 = f3.current;
        if (t6 && e7) {
          const r4 = l3(t6, e7), o6 = () => e7.getAttribute("aria-labelledby"), n2 = [o6(), b4].filter(Boolean).join(" ");
          return e7.setAttribute("aria-labelledby", n2), () => {
            var t7;
            r4();
            const n3 = (t7 = o6()) === null || t7 === void 0 ? void 0 : t7.replace(b4, "");
            n3 === "" ? e7.removeAttribute("aria-labelledby") : n3 && e7.setAttribute("aria-labelledby", n3);
          };
        }
      }
    }, [b4, c]), /* @__PURE__ */ o4.createElement(i.Provider, { value: o4.useMemo(() => ({ id: b4, ref: f3 }), [b4]) }, /* @__PURE__ */ o4.createElement(Primitive.span, _extends({ role: "label", id: b4 }, d2, { ref: m3 })));
  });
  var useLabelContext = (e7) => {
    const t6 = o4.useContext(i);
    return o4.useEffect(() => {
      const r4 = t6 == null ? void 0 : t6.ref.current;
      if (r4 && e7)
        return l3(r4, e7);
    }, [t6, e7]), t6 == null ? void 0 : t6.id;
  };
  function l3(e7, t6) {
    const r4 = (e8) => {
      const r5 = t6.contains(e8.target), o6 = e8.isTrusted === true;
      !r5 && o6 && (t6.click(), t6.focus());
    };
    return e7.addEventListener("click", r4), () => e7.removeEventListener("click", r4);
  }
  var Root = Label;

  // esbuild-css-modules-plugin-namespace:/tmp/tmp-272-OkkEAsDcGBE0/dev/src/components/colors/colors.module.css.js
  var digest2 = "69255ca4ab3f68bf2aadb63e15ecddb7ba69155a980dbb8a3bd4013af2403643";
  var css3 = `._grid_bihe2_1 {
  display: flex;
  grid-column: span 2;
  margin-left: -4px;
}

._color_bihe2_7 {
  cursor: pointer;
  flex-grow: 2;
  border: none;
  height: 24px;
  width: 100%;
  padding: none;
}

._selected_bihe2_16 {
  border-bottom: 5px solid dodgerblue;
}
`;
  (function () {
    if (!document.getElementById(digest2)) {
      var el = document.createElement("style");
      el.id = digest2;
      el.textContent = css3;
      document.head.appendChild(el);
    }
  })();
  var colors_module_css_default = { "grid": "_grid_bihe2_1", "color": "_color_bihe2_7", "selected": "_selected_bihe2_16" };

  // src/components/colors/colors.tsx
  function Colors(props) {
    return /* @__PURE__ */ React5.createElement(React5.Fragment, null, /* @__PURE__ */ React5.createElement(Root, {
      htmlFor: props.name
    }, props.name), /* @__PURE__ */ React5.createElement("div", {
      className: colors_module_css_default.grid
    }, props.colors.map((color) => {
      return /* @__PURE__ */ React5.createElement("button", {
        key: color,
        className: color === props.color ? [colors_module_css_default.color, colors_module_css_default.selected].join(" ") : colors_module_css_default.color,
        style: {
          backgroundColor: color
        },
        onClick: () => props.onChange(color)
      });
    })));
  }

  // src/components/checkbox/checkbox.tsx
  var React6 = __toModule(require_react());

  // ../../node_modules/@radix-ui/react-use-layout-effect/dist/index.module.js
  var o5 = __toModule(require_react());
  var useLayoutEffect7 = Boolean(globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) ? o5.useLayoutEffect : () => {
  };

  // ../../node_modules/@radix-ui/react-presence/dist/index.module.js
  var t3 = __toModule(require_react());
  var Presence = (u2) => {
    const { present: o6, children: s2 } = u2, i2 = function (n2) {
      const [u3, o7] = t3.useState(), s3 = t3.useRef({}), i3 = t3.useRef(n2), c2 = t3.useRef("none"), d3 = n2 ? "mounted" : "unmounted", [m3, a2] = function (e7, n3) {
        return t3.useReducer((e8, t6) => {
          const r4 = n3[e8][t6];
          return r4 != null ? r4 : e8;
        }, e7);
      }(d3, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
      return t3.useEffect(() => {
        const e7 = r3(s3.current);
        c2.current = m3 === "mounted" ? e7 : "none";
      }, [m3]), useLayoutEffect7(() => {
        const e7 = s3.current, t6 = i3.current;
        if (t6 !== n2) {
          const u4 = c2.current, o8 = r3(e7);
          if (n2)
            a2("MOUNT");
          else if (o8 === "none" || (e7 == null ? void 0 : e7.display) === "none")
            a2("UNMOUNT");
          else {
            const e8 = u4 !== o8;
            a2(t6 && e8 ? "ANIMATION_OUT" : "UNMOUNT");
          }
          i3.current = n2;
        }
      }, [n2, a2]), useLayoutEffect7(() => {
        if (u3) {
          const e7 = (e8) => {
            const n3 = r3(s3.current).includes(e8.animationName);
            e8.target === u3 && n3 && a2("ANIMATION_END");
          };
          return u3.addEventListener("animationcancel", e7), u3.addEventListener("animationend", e7), () => {
            u3.removeEventListener("animationcancel", e7), u3.removeEventListener("animationend", e7);
          };
        }
      }, [u3, a2]), {
        isPresent: ["mounted", "unmountSuspended"].includes(m3), ref: t3.useCallback((e7) => {
          e7 && (s3.current = getComputedStyle(e7)), o7(e7);
        }, [])
      };
    }(o6), c = typeof s2 == "function" ? s2({ present: i2.isPresent }) : t3.Children.only(s2), d2 = useComposedRefs(i2.ref, c.ref);
    return typeof s2 == "function" || i2.isPresent ? /* @__PURE__ */ t3.cloneElement(c, { ref: d2 }) : null;
  };
  function r3(e7) {
    return (e7 == null ? void 0 : e7.animationName) || "none";
  }
  Presence.displayName = "Presence";

  // ../../node_modules/@radix-ui/react-use-size/dist/index.module.js
  var e2 = __toModule(require_react());
  function useSize(r4) {
    const [i2, t6] = e2.useState(void 0);
    return e2.useEffect(() => {
      if (r4) {
        const e7 = new ResizeObserver((e8) => {
          if (!Array.isArray(e8))
            return;
          if (!e8.length)
            return;
          const i3 = e8[0];
          let o6, n2;
          if ("borderBoxSize" in i3) {
            const e9 = i3.borderBoxSize, r5 = Array.isArray(e9) ? e9[0] : e9;
            o6 = r5.inlineSize, n2 = r5.blockSize;
          } else {
            const e9 = r4.getBoundingClientRect();
            o6 = e9.width, n2 = e9.height;
          }
          t6({ width: o6, height: n2 });
        });
        return e7.observe(r4, { box: "border-box" }), () => {
          t6(void 0), e7.unobserve(r4);
        };
      }
    }, [r4]), i2;
  }

  // ../../node_modules/@radix-ui/react-use-previous/dist/index.module.js
  var e3 = __toModule(require_react());
  function usePrevious(r4) {
    const t6 = e3.useRef(r4);
    return e3.useEffect(() => {
      t6.current = r4;
    }, [r4]), t6.current;
  }

  // ../../node_modules/@radix-ui/react-use-callback-ref/dist/index.module.js
  var e4 = __toModule(require_react());
  function useCallbackRef(r4) {
    const t6 = e4.useRef(r4);
    return e4.useEffect(() => {
      t6.current = r4;
    }), e4.useMemo(() => (...e7) => {
      var r5;
      return (r5 = t6.current) === null || r5 === void 0 ? void 0 : r5.call(t6, ...e7);
    }, []);
  }

  // ../../node_modules/@radix-ui/react-use-controllable-state/dist/index.module.js
  var t4 = __toModule(require_react());
  function useControllableState({ prop: o6, defaultProp: r4, onChange: n2 = () => {
  } }) {
    const [a2, u2] = function ({ defaultProp: o7, onChange: r5 }) {
      const n3 = t4.useState(o7), [a3] = n3, u3 = t4.useRef(a3), c2 = useCallbackRef(r5);
      return t4.useEffect(() => {
        u3.current !== a3 && (c2(a3), u3.current = a3);
      }, [a3, u3, c2]), n3;
    }({ defaultProp: r4, onChange: n2 }), c = o6 !== void 0, f3 = c ? o6 : a2, l4 = useCallbackRef(n2);
    return [f3, t4.useCallback((e7) => {
      if (c) {
        const t6 = e7, r5 = typeof e7 == "function" ? t6(o6) : e7;
        r5 !== o6 && l4(r5);
      } else
        u2(e7);
    }, [c, o6, u2, l4])];
  }

  // ../../node_modules/@radix-ui/primitive/dist/index.module.js
  function composeEventHandlers(e7, n2, { checkForDefaultPrevented: t6 = true } = {}) {
    return function (r4) {
      if (e7 == null || e7(r4), t6 === false || !r4.defaultPrevented)
        return n2 == null ? void 0 : n2(r4);
    };
  }

  // ../../node_modules/@radix-ui/react-context/dist/index.module.js
  var e5 = __toModule(require_react());
  function createContext6(t6) {
    const r4 = /* @__PURE__ */ e5.createContext(null);
    function n2(t7) {
      const _a = t7, { children: n3 } = _a, o6 = __objRest(_a, ["children"]), u2 = e5.useMemo(() => o6, Object.values(o6));
      return e5.createElement(r4.Provider, { value: u2 }, n3);
    }
    return n2.displayName = t6 + "Provider", [n2, function (n3) {
      const o6 = e5.useContext(r4);
      if (o6 === null)
        throw new Error(`\`${n3}\` must be used within \`${t6}\``);
      return o6;
    }];
  }

  // ../../node_modules/@radix-ui/react-checkbox/dist/index.module.js
  var d = __toModule(require_react());
  var [u, p] = createContext6("Checkbox");
  var Checkbox = /* @__PURE__ */ d.forwardRef((t6, o6) => {
    const _a = t6, { "aria-labelledby": a2, name: c, checked: p3, defaultChecked: x2, required: h2, disabled: k, value: C3 = "on", onCheckedChange: v2 } = _a, y2 = __objRest(_a, ["aria-labelledby", "name", "checked", "defaultChecked", "required", "disabled", "value", "onCheckedChange"]), [E2, g2] = d.useState(null), w2 = useComposedRefs(o6, (e7) => g2(e7)), I = useLabelContext(E2), R3 = a2 || I, P2 = d.useRef(false), q = !E2 || Boolean(E2.closest("form")), [M2 = false, O] = useControllableState({ prop: p3, defaultProp: x2, onChange: v2 });
    return d.createElement(u, { state: M2, disabled: k }, /* @__PURE__ */ d.createElement(Primitive.button, _extends({ type: "button", role: "checkbox", "aria-checked": b2(M2) ? "mixed" : M2, "aria-labelledby": R3, "aria-required": h2, "data-state": f(M2), "data-disabled": k ? "" : void 0, disabled: k, value: C3 }, y2, {
      ref: w2, onClick: composeEventHandlers(t6.onClick, (e7) => {
        O((e8) => !!b2(e8) || !e8), q && (P2.current = e7.isPropagationStopped(), P2.current || e7.stopPropagation());
      })
    })), q && /* @__PURE__ */ d.createElement(m, { control: E2, bubbles: !P2.current, name: c, value: C3, checked: M2, required: h2, disabled: k, style: { transform: "translateX(-100%)" } }));
  });
  var CheckboxIndicator = /* @__PURE__ */ d.forwardRef((r4, o6) => {
    const _a = r4, { forceMount: a2 } = _a, n2 = __objRest(_a, ["forceMount"]), i2 = p("CheckboxIndicator");
    return d.createElement(Presence, { present: a2 || b2(i2.state) || i2.state === true }, /* @__PURE__ */ d.createElement(Primitive.span, _extends({ "data-state": f(i2.state), "data-disabled": i2.disabled ? "" : void 0 }, n2, { ref: o6, style: __spreadValues({ pointerEvents: "none" }, r4.style) })));
  });
  var m = (e7) => {
    const _a = e7, { control: t6, checked: r4, bubbles: n2 = true } = _a, i2 = __objRest(_a, ["control", "checked", "bubbles"]), c = d.useRef(null), s2 = usePrevious(r4), u2 = useSize(t6);
    return d.useEffect(() => {
      const e8 = c.current, t7 = window.HTMLInputElement.prototype, o6 = Object.getOwnPropertyDescriptor(t7, "checked").set;
      if (s2 !== r4 && o6) {
        const t8 = new Event("click", { bubbles: n2 });
        e8.indeterminate = b2(r4), o6.call(e8, !b2(r4) && r4), e8.dispatchEvent(t8);
      }
    }, [s2, r4, n2]), /* @__PURE__ */ d.createElement("input", _extends({ type: "checkbox", defaultChecked: !b2(r4) && r4 }, i2, { tabIndex: -1, ref: c, style: __spreadProps(__spreadValues(__spreadValues({}, e7.style), u2), { position: "absolute", pointerEvents: "none", opacity: 0, margin: 0 }) }));
  };
  function b2(e7) {
    return e7 === "indeterminate";
  }
  function f(e7) {
    return b2(e7) ? "indeterminate" : e7 ? "checked" : "unchecked";
  }
  var Root2 = Checkbox;
  var Indicator = CheckboxIndicator;

  // esbuild-css-modules-plugin-namespace:/tmp/tmp-272-OkkEAsDcGBE0/dev/src/components/checkbox/checkbox.module.css.js
  var digest3 = "8a87aba432309d13558f7d6368d3bd6b7a0481cab4e001944e99f418ee8d5a6f";
  var css4 = `._root_hcu64_1 {
  position: relative;
  flex-grow: 2;
  max-width: 200px;
  display: flex;
  height: 16px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

._root_hcu64_1:disabled {
  opacity: 0.5;
}
._root_hcu64_1:disabled::after {
  background-color: gainsboro;
  opacity: 1;
}

._root_hcu64_1:focus {
  outline: none;
}

._root_hcu64_1:focus::after {
  border: 2px solid dodgerblue;
}

._root_hcu64_1::after {
  content: '';
  position: absolute;
  left: 0px;
  top: 0px;
  bottom: 0px;
  width: 16px;
  height: 16px;
  border: 1px solid gainsboro;
  border-radius: 2px;
  box-sizing: border-box;
}

._indicator_hcu64_42 {
  position: initial;
  height: 16px;
  width: 16px;
  border-radius: 2px;
  box-sizing: border-box;
  background-color: dodgerblue;
  border: 1px solid dodgerblue;
  z-index: 2;
}
`;
  (function () {
    if (!document.getElementById(digest3)) {
      var el = document.createElement("style");
      el.id = digest3;
      el.textContent = css4;
      document.head.appendChild(el);
    }
  })();
  var checkbox_module_css_default = { "root": "_root_hcu64_1", "indicator": "_indicator_hcu64_42" };

  // src/components/checkbox/checkbox.tsx
  function Checkbox2(props) {
    return /* @__PURE__ */ React6.createElement(React6.Fragment, null, /* @__PURE__ */ React6.createElement(Root, {
      dir: "ltr",
      htmlFor: props.name
    }, props.name), /* @__PURE__ */ React6.createElement(Root2, __spreadProps(__spreadValues({}, props), {
      dir: "ltr",
      className: checkbox_module_css_default.root
    }), /* @__PURE__ */ React6.createElement(Indicator, {
      className: checkbox_module_css_default.indicator
    })), /* @__PURE__ */ React6.createElement("div", null));
  }

  // src/components/select/select.tsx
  var React7 = __toModule(require_react());

  // esbuild-css-modules-plugin-namespace:/tmp/tmp-272-OkkEAsDcGBE0/dev/src/components/select/select.module.css.js
  var digest4 = "4d6c37380d46e75034599b610c211a4b8b7fb7c38fb3a2ae914e91fe291927c0";
  var css5 = `._select_1eg20_1 {
  grid-column: 2 / span 2;
  padding: 0;
}

._select_1eg20_1 select {
  position: relative;
  display: flex;
  height: 30px;
  width: calc(100% + 6px);
  background: none;
  border: none;
  cursor: pointer;
  border-radius: none;
  padding: 0;
  margin-left: -6px;
  outline: none;
  font: inherit;
  border: 2px solid transparent;
}

._select_1eg20_1 select:focus {
  outline: none;
  border: 2px solid dodgerblue;
}
`;
  (function () {
    if (!document.getElementById(digest4)) {
      var el = document.createElement("style");
      el.id = digest4;
      el.textContent = css5;
      document.head.appendChild(el);
    }
  })();
  var select_module_css_default = { "select": "_select_1eg20_1" };

  // src/components/select/select.tsx
  function Select({
    onValueChange,
    onDoubleClick,
    name,
    value,
    children
  }) {
    const handleValueChange = React7.useCallback((e7) => {
      onValueChange == null ? void 0 : onValueChange(e7.currentTarget.value);
    }, [onValueChange]);
    return /* @__PURE__ */ React7.createElement(React7.Fragment, null, /* @__PURE__ */ React7.createElement(Root, {
      dir: "ltr",
      htmlFor: name,
      onDoubleClick
    }, name), /* @__PURE__ */ React7.createElement("div", {
      className: select_module_css_default.select
    }, /* @__PURE__ */ React7.createElement("select", {
      name,
      value,
      onChange: handleValueChange
    }, children)));
  }

  // src/components/slider/slider.tsx
  var React8 = __toModule(require_react());

  // ../../node_modules/@radix-ui/react-collection/dist/index.module.js
  var import_react51 = __toModule(require_react());
  function createCollection() {
    const n2 = /* @__PURE__ */ import_react51.default.createContext({}), o6 = (e7) => {
      const { children: r4 } = e7, o7 = import_react51.default.useRef(null), c2 = import_react51.default.useRef(new Map()).current;
      return import_react51.default.createElement(n2.Provider, { value: import_react51.default.useMemo(() => ({ itemMap: c2, collectionRef: o7 }), [c2]) }, r4);
    }, c = /* @__PURE__ */ import_react51.default.forwardRef((o7, c2) => {
      const { children: f4 } = o7, l5 = import_react51.default.useContext(n2), u2 = useComposedRefs(c2, l5.collectionRef);
      return import_react51.default.createElement(Slot, { ref: u2 }, f4);
    }), f3 = "data-radix-collection-item", l4 = /* @__PURE__ */ import_react51.default.forwardRef((o7, c2) => {
      const _a = o7, { children: l5 } = _a, u2 = __objRest(_a, ["children"]), i2 = import_react51.default.useRef(null), a2 = useComposedRefs(c2, i2), s2 = import_react51.default.useContext(n2);
      return import_react51.default.useEffect(() => (s2.itemMap.set(i2, __spreadValues({ ref: i2 }, u2)), () => {
        s2.itemMap.delete(i2);
      })), /* @__PURE__ */ import_react51.default.createElement(Slot, { [f3]: "", ref: a2 }, l5);
    });
    return [o6, c, l4, function () {
      const e7 = import_react51.default.useContext(n2);
      return {
        getItems() {
          const r4 = Array.from(e7.collectionRef.current.querySelectorAll(`[${f3}]`));
          return Array.from(e7.itemMap.values()).sort((e8, t6) => r4.indexOf(e8.ref.current) - r4.indexOf(t6.ref.current));
        }
      };
    }];
  }

  // ../../node_modules/@radix-ui/react-use-direction/dist/index.module.js
  var e6 = __toModule(require_react());
  function useDirection(t6, n2) {
    const [r4, o6] = e6.useState("ltr"), [i2, u2] = e6.useState(), c = e6.useRef(0);
    return e6.useEffect(() => {
      if (n2 === void 0 && t6 != null && t6.parentElement) {
        const e7 = getComputedStyle(t6.parentElement);
        u2(e7);
      }
    }, [t6, n2]), e6.useEffect(() => (n2 === void 0 && function e7() {
      c.current = requestAnimationFrame(() => {
        const t7 = i2 == null ? void 0 : i2.direction;
        t7 && o6(t7), e7();
      });
    }(), () => cancelAnimationFrame(c.current)), [i2, n2, o6]), n2 || r4;
  }

  // ../../node_modules/@radix-ui/number/dist/index.module.js
  function clamp2(t6, [a2, n2]) {
    return Math.min(n2, Math.max(a2, t6));
  }

  // ../../node_modules/@radix-ui/react-slider/dist/index.module.js
  var s = __toModule(require_react());
  var m2 = ["PageUp", "PageDown"];
  var f2 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
  var p2 = { ltr: ["ArrowDown", "Home", "ArrowLeft", "PageDown"], rtl: ["ArrowDown", "Home", "ArrowRight", "PageDown"] };
  var [v, h, S, w] = createCollection();
  var [x, g] = createContext6("Slider");
  var Slider = /* @__PURE__ */ s.forwardRef((e7, t6) => {
    const _a = e7, { name: n2, min: r4 = 0, max: o6 = 100, step: a2 = 1, orientation: u2 = "horizontal", disabled: p3 = false, minStepsBetweenThumbs: S2 = 0, defaultValue: w2 = [r4], value: g2, onValueChange: b4 = () => {
    } } = _a, R3 = __objRest(_a, ["name", "min", "max", "step", "orientation", "disabled", "minStepsBetweenThumbs", "defaultValue", "value", "onValueChange"]), [D2, P2] = s.useState(null), C3 = useComposedRefs(t6, (e8) => P2(e8)), K2 = s.useRef(new Set()), k = s.useRef(0), T = u2 === "horizontal", I = !D2 || Boolean(D2.closest("form")), A2 = T ? y : E, [z = [], H] = useControllableState({
      prop: g2, defaultProp: w2, onChange: (e8) => {
        var t7;
        (t7 = [...K2.current][k.current]) === null || t7 === void 0 || t7.focus(), b4(e8);
      }
    });
    function B2(e8, t7) {
      const n3 = function (e9) {
        return (String(e9).split(".")[1] || "").length;
      }(a2), i2 = function (e9, t8) {
        const n4 = Math.pow(10, t8);
        return Math.round(e9 * n4) / n4;
      }(Math.round((e8 - r4) / a2) * a2 + r4, n3), l4 = clamp2(i2, [r4, o6]);
      H((e9 = []) => {
        const n4 = function (e10 = [], t8, n5) {
          const r5 = [...e10];
          return r5[n5] = t8, r5.sort((e11, t9) => e11 - t9);
        }(e9, l4, t7);
        return function (e10, t8) {
          if (t8 > 0) {
            const n5 = function (e11) {
              return e11.slice(0, -1).map((t9, n6) => e11[n6 + 1] - t9);
            }(e10);
            return Math.min(...n5) >= t8;
          }
          return true;
        }(n4, S2 * a2) ? (k.current = n4.indexOf(l4), String(n4) === String(e9) ? e9 : n4) : e9;
      });
    }
    return s.createElement(x, { disabled: p3, min: r4, max: o6, valueIndexToChangeRef: k, thumbs: K2.current, values: z, orientation: u2 }, /* @__PURE__ */ s.createElement(v, null, /* @__PURE__ */ s.createElement(h, null, /* @__PURE__ */ s.createElement(A2, _extends({ "aria-disabled": p3, "data-disabled": p3 ? "" : void 0 }, R3, {
      ref: C3, min: r4, max: o6, onSlideStart: p3 ? void 0 : function (e8) {
        B2(e8, function (e9, t7) {
          if (e9.length === 1)
            return 0;
          const n3 = e9.map((e10) => Math.abs(e10 - t7)), r5 = Math.min(...n3);
          return n3.indexOf(r5);
        }(z, e8));
      }, onSlideMove: p3 ? void 0 : function (e8) {
        B2(e8, k.current);
      }, onHomeKeyDown: () => !p3 && B2(r4, 0), onEndKeyDown: () => !p3 && B2(o6, z.length - 1), onStepKeyDown: ({ event: e8, direction: t7 }) => {
        if (!p3) {
          const n3 = m2.includes(e8.key) || e8.shiftKey && f2.includes(e8.key) ? 10 : 1, r5 = k.current;
          B2(z[r5] + a2 * n3 * t7, r5);
        }
      }
    })))), I && z.map((e8, t7) => /* @__PURE__ */ s.createElement(M, { key: t7, name: n2 ? n2 + (z.length > 1 ? "[]" : "") : void 0, value: e8 })));
  });
  var b3 = /* @__PURE__ */ s.createContext({});
  var y = /* @__PURE__ */ s.forwardRef((e7, t6) => {
    const _a = e7, { min: n2, max: r4, dir: i2, onSlideStart: a2, onSlideMove: u2, onStepKeyDown: d2 } = _a, m3 = __objRest(_a, ["min", "max", "dir", "onSlideStart", "onSlideMove", "onStepKeyDown"]), [f3, v2] = s.useState(null), h2 = useComposedRefs(t6, (e8) => v2(e8)), S2 = s.useRef(), w2 = useDirection(f3, i2), x2 = w2 === "ltr";
    function g2(e8) {
      const t7 = S2.current || f3.getBoundingClientRect(), o6 = C2([0, t7.width], x2 ? [n2, r4] : [r4, n2]);
      return S2.current = t7, o6(e8 - t7.left);
    }
    return s.createElement(b3.Provider, { value: s.useMemo(() => ({ startEdge: x2 ? "left" : "right", endEdge: x2 ? "right" : "left", direction: x2 ? 1 : -1, size: "width" }), [x2]) }, /* @__PURE__ */ s.createElement(R2, _extends({ "data-orientation": "horizontal" }, m3, {
      ref: h2, style: __spreadProps(__spreadValues({}, m3.style), { "--radix-slider-thumb-transform": "translateX(-50%)" }), onSlideStart: (e8) => {
        const t7 = g2(e8.clientX);
        a2 == null || a2(t7);
      }, onSlideMove: (e8) => {
        const t7 = g2(e8.clientX);
        u2 == null || u2(t7);
      }, onSlideEnd: () => S2.current = void 0, onStepKeyDown: (e8) => {
        const t7 = p2[w2].includes(e8.key);
        d2 == null || d2({ event: e8, direction: t7 ? -1 : 1 });
      }
    })));
  });
  var E = /* @__PURE__ */ s.forwardRef((e7, t6) => {
    const _a = e7, { min: n2, max: r4, onSlideStart: o6, onSlideMove: i2, onStepKeyDown: a2 } = _a, u2 = __objRest(_a, ["min", "max", "onSlideStart", "onSlideMove", "onStepKeyDown"]), d2 = s.useRef(null), m3 = useComposedRefs(t6, d2), f3 = s.useRef();
    function v2(e8) {
      const t7 = f3.current || d2.current.getBoundingClientRect(), o7 = C2([0, t7.height], [r4, n2]);
      return f3.current = t7, o7(e8 - t7.top);
    }
    return s.createElement(b3.Provider, { value: s.useMemo(() => ({ startEdge: "bottom", endEdge: "top", size: "height", direction: 1 }), []) }, /* @__PURE__ */ s.createElement(R2, _extends({ "data-orientation": "vertical" }, u2, {
      ref: m3, style: __spreadProps(__spreadValues({}, u2.style), { "--radix-slider-thumb-transform": "translateY(50%)" }), onSlideStart: (e8) => {
        const t7 = v2(e8.clientY);
        o6 == null || o6(t7);
      }, onSlideMove: (e8) => {
        const t7 = v2(e8.clientY);
        i2 == null || i2(t7);
      }, onSlideEnd: () => f3.current = void 0, onStepKeyDown: (e8) => {
        const t7 = p2.ltr.includes(e8.key);
        a2 == null || a2({ event: e8, direction: t7 ? -1 : 1 });
      }
    })));
  });
  var R2 = /* @__PURE__ */ s.forwardRef((e7, n2) => {
    const _a = e7, { onSlideStart: r4, onSlideMove: o6, onSlideEnd: i2, onHomeKeyDown: a2, onEndKeyDown: l4, onStepKeyDown: d2 } = _a, p3 = __objRest(_a, ["onSlideStart", "onSlideMove", "onSlideEnd", "onHomeKeyDown", "onEndKeyDown", "onStepKeyDown"]), v2 = g("Slider");
    return s.createElement(Primitive.span, _extends({}, p3, {
      ref: n2, onKeyDown: composeEventHandlers(e7.onKeyDown, (e8) => {
        e8.key === "Home" ? a2(e8) : e8.key === "End" ? l4(e8) : m2.concat(f2).includes(e8.key) && (d2(e8), e8.preventDefault());
      }), onPointerDown: composeEventHandlers(e7.onPointerDown, (e8) => {
        const t6 = e8.target;
        t6.setPointerCapture(e8.pointerId), e8.preventDefault(), v2.thumbs.has(t6) ? t6.focus() : r4(e8);
      }), onPointerMove: composeEventHandlers(e7.onPointerMove, (e8) => {
        e8.target.hasPointerCapture(e8.pointerId) && o6(e8);
      }), onPointerUp: composeEventHandlers(e7.onPointerUp, (e8) => {
        const t6 = e8.target;
        t6.hasPointerCapture(e8.pointerId) && (t6.releasePointerCapture(e8.pointerId), i2(e8));
      })
    }));
  });
  var SliderTrack = /* @__PURE__ */ s.forwardRef((e7, n2) => {
    const r4 = g("SliderTrack");
    return s.createElement(Primitive.span, _extends({ "data-disabled": r4.disabled ? "" : void 0, "data-orientation": r4.orientation }, e7, { ref: n2 }));
  });
  var SliderRange = /* @__PURE__ */ s.forwardRef((e7, n2) => {
    const r4 = g("SliderRange"), o6 = s.useContext(b3), i2 = s.useRef(null), a2 = useComposedRefs(n2, i2), u2 = r4.values.length, d2 = r4.values.map((e8) => P(e8, r4.min, r4.max)), m3 = u2 > 1 ? Math.min(...d2) : 0, f3 = 100 - Math.max(...d2);
    return s.createElement(Primitive.span, _extends({ "data-orientation": r4.orientation, "data-disabled": r4.disabled ? "" : void 0 }, e7, { ref: a2, style: __spreadProps(__spreadValues({}, e7.style), { [o6.startEdge]: m3 + "%", [o6.endEdge]: f3 + "%" }) }));
  });
  var SliderThumb = /* @__PURE__ */ s.forwardRef((e7, t6) => {
    const { getItems: n2 } = w(), [r4, o6] = s.useState(null), i2 = useComposedRefs(t6, (e8) => o6(e8)), a2 = s.useMemo(() => r4 ? n2().findIndex((e8) => e8.ref.current === r4) : -1, [n2, r4]);
    return s.createElement(D, _extends({}, e7, { ref: i2, index: a2 }));
  });
  var D = /* @__PURE__ */ s.forwardRef((e7, r4) => {
    const _a = e7, { index: o6 } = _a, i2 = __objRest(_a, ["index"]), a2 = g("SliderThumb"), d2 = s.useContext(b3), [m3, f3] = s.useState(null), p3 = useComposedRefs(r4, (e8) => f3(e8)), v2 = useSize(m3), h2 = a2.values[o6], w2 = h2 ? P(h2, a2.min, a2.max) : 0, x2 = function (e8, t6) {
      return t6 > 2 ? `Value ${e8 + 1} of ${t6}` : t6 === 2 ? ["Minimum", "Maximum"][e8] : void 0;
    }(o6, a2.values.length), y2 = v2 == null ? void 0 : v2[d2.size], E2 = y2 ? function (e8, t6, n2) {
      const r5 = e8 / 2, o7 = C2([0, 50], [0, r5]);
      return (r5 - o7(t6) * n2) * n2;
    }(y2, w2, d2.direction) : 0;
    return s.useEffect(() => {
      if (m3)
        return a2.thumbs.add(m3), () => {
          a2.thumbs.delete(m3);
        };
    }, [m3, a2.thumbs]), /* @__PURE__ */ s.createElement("span", { style: { transform: "var(--radix-slider-thumb-transform)", position: "absolute", [d2.startEdge]: `calc(${w2}% + ${E2}px)` } }, /* @__PURE__ */ s.createElement(S, null, /* @__PURE__ */ s.createElement(Primitive.span, _extends({ role: "slider", "aria-label": e7["aria-label"] || x2, "aria-valuemin": a2.min, "aria-valuenow": h2, "aria-valuemax": a2.max, "aria-orientation": a2.orientation, "data-orientation": a2.orientation, "data-disabled": a2.disabled ? "" : void 0, tabIndex: a2.disabled ? void 0 : 0 }, i2, {
      ref: p3, style: h2 === void 0 ? { display: "none" } : e7.style, onFocus: composeEventHandlers(e7.onFocus, () => {
        a2.valueIndexToChangeRef.current = o6;
      })
    }))));
  });
  var M = (e7) => {
    const _a = e7, { value: t6 } = _a, n2 = __objRest(_a, ["value"]), o6 = s.useRef(null), i2 = usePrevious(t6);
    return s.useEffect(() => {
      const e8 = o6.current, n3 = window.HTMLInputElement.prototype, r4 = Object.getOwnPropertyDescriptor(n3, "value").set;
      if (i2 !== t6 && r4) {
        const n4 = new Event("input", { bubbles: true });
        r4.call(e8, t6), e8.dispatchEvent(n4);
      }
    }, [i2, t6]), /* @__PURE__ */ s.createElement("input", _extends({ style: { display: "none" } }, n2, { ref: o6, defaultValue: t6 }));
  };
  function P(e7, t6, n2) {
    return 100 / (n2 - t6) * (e7 - t6);
  }
  function C2(e7, t6) {
    return (n2) => {
      if (e7[0] === e7[1] || t6[0] === t6[1])
        return t6[0];
      const r4 = (t6[1] - t6[0]) / (e7[1] - e7[0]);
      return t6[0] + r4 * (n2 - e7[0]);
    };
  }
  var Root3 = Slider;
  var Track = SliderTrack;
  var Range = SliderRange;
  var Thumb = SliderThumb;

  // esbuild-css-modules-plugin-namespace:/tmp/tmp-272-OkkEAsDcGBE0/dev/src/components/slider/slider.module.css.js
  var digest5 = "9e693654bcd3a55eae2d545b75e308338fb93e4684411a2fa6e66ad38acbbf9b";
  var css6 = `._root_1bglo_1 {
  max-width: 200px;
  height: 16px;
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  flex-grow: 1;
  user-select: none;
  touch-action: none;
}

._range_1bglo_13 {
  position: absolute;
  height: 3px;
  background-color: dodgerblue;
  border-radius: 5px;
}

._track_1bglo_20 {
  position: relative;
  height: 3px;
  flex-grow: 1;
  background-color: gainsboro;
  border-radius: 5px;
}

._thumb_1bglo_28 {
  position: relative;
  height: 4px;
  width: 4px;
  outline: none;
}

._thumbBall_1bglo_35 {
  display: block;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

._thumbBall_1bglo_35::after {
  display: block;
  content: '';
  width: 12px;
  height: 12px;
  border-radius: 100%;
  background-color: white;
  border: 2px solid dodgerblue;
  transform: scale(1);
  transition: all 0.12s;
}

._thumb_1bglo_28:focus > ._thumbBall_1bglo_35::after {
  background-color: dodgerblue;
}

._numberInput_1bglo_60 {
  font-family: 'Yekan';
  font-size: 12px;
  border: none;
  width: 40px;
  text-align: right;
  padding: 4px 4px;
}

._numberInput_1bglo_60::-webkit-outer-spin-button,
._numberInput_1bglo_60::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

._numberInput_1bglo_60:focus {
  border-radius: 2px;
  outline: 2px solid dodgerblue;
}
`;
  (function () {
    if (!document.getElementById(digest5)) {
      var el = document.createElement("style");
      el.id = digest5;
      el.textContent = css6;
      document.head.appendChild(el);
    }
  })();
  var slider_module_css_default = { "root": "_root_1bglo_1", "range": "_range_1bglo_13", "track": "_track_1bglo_20", "thumb": "_thumb_1bglo_28", "thumbBall": "_thumbBall_1bglo_35", "numberInput": "_numberInput_1bglo_60" };

  // src/components/slider/slider.tsx
  function Slider2(_a) {
    var _b = _a, {
      onDoubleClick,
      onPointerUp,
      onPointerDown,
      onValueChange,
      min,
      max,
      step,
      label,
      value = [0]
    } = _b, props = __objRest(_b, [
      "onDoubleClick",
      "onPointerUp",
      "onPointerDown",
      "onValueChange",
      "min",
      "max",
      "step",
      "label",
      "value"
    ]);
    const handleValueChange = React8.useCallback((e7) => {
      onValueChange == null ? void 0 : onValueChange([+e7.currentTarget.value]);
    }, [onValueChange]);
    return /* @__PURE__ */ React8.createElement(React8.Fragment, null, /* @__PURE__ */ React8.createElement(Root, {
      dir: "ltr",
      htmlFor: props.name,
      onDoubleClick
    }, props.name), /* @__PURE__ */ React8.createElement(Root3, __spreadProps(__spreadValues({}, props), {
      className: slider_module_css_default.root,
      dir: "ltr",
      min,
      max,
      step,
      value,
      onPointerDown,
      onPointerUp,
      onValueChange
    }), /* @__PURE__ */ React8.createElement(Track, {
      className: slider_module_css_default.track
    }, /* @__PURE__ */ React8.createElement(Range, {
      className: slider_module_css_default.range
    })), value.map((_, i2) => /* @__PURE__ */ React8.createElement(Thumb, {
      className: slider_module_css_default.thumb,
      key: i2
    }, /* @__PURE__ */ React8.createElement("div", {
      className: slider_module_css_default.thumbBall
    })))), label ? /* @__PURE__ */ React8.createElement("span", {
      style: { textAlign: "right" }
    }, label) : /* @__PURE__ */ React8.createElement("input", {
      className: slider_module_css_default.numberInput,
      type: "number",
      value: value[0],
      min,
      max,
      step,
      onChange: handleValueChange
    }));
  }

  // esbuild-css-modules-plugin-namespace:/tmp/tmp-272-OkkEAsDcGBE0/dev/src/components/controls/controls.module.css.js
  var digest6 = "91426e1055520f4c37a3f87a9cc4662d5a43d1698756f8bebfdbc956fa5f2d36";
  var css7 = `._container_1l8m7_1 {
  position: fixed;
  width: min(100%, 320px);
  top: 48px;
  left: 0px;
  padding: 12px;
  background-color: rgba(255, 255, 255, 0.95);
  border-bottom-right-radius: 16px;
  box-shadow: 0px 0px 8px -4px rgba(0, 0, 0, 0.16),
    0px 0px 36px 0px rgba(0, 0, 0, 0.08);
  z-index: 100;
  transform: translate(-100%, 0px);
}

._open_1l8m7_15 {
  transform: translate(0%, 0px);
  transition: transform 0.2s;
}

._inputs_1l8m7_20 {
  display: grid;
  grid-template-columns: 96px 1fr auto;
  grid-auto-rows: 32px;
  align-items: center;
  column-gap: 16px;
}

._colors_1l8m7_28 {
  padding: 12px 0;
}

hr {
  grid-column: 1 / span 3;
  height: 1px;
  border: none;
  background-color: gainsboro;
  width: calc(100% + 24px);
  margin-left: -12px;
}

._buttonsRow_1l8m7_41 {
  display: flex;
  height: 40px;
}

._rowButton_1l8m7_46 {
  cursor: pointer;
  flex-grow: 2;
  font-family: 'Yekan';
  border: none;
  background-color: transparent;
  border: 2px solid transparent;
}

._rowButton_1l8m7_46:hover {
  color: dodgerblue;
}

._rowButton_1l8m7_46:focus {
  outline: none;
  border: 2px solid dodgerblue;
}
`;
  (function () {
    if (!document.getElementById(digest6)) {
      var el = document.createElement("style");
      el.id = digest6;
      el.textContent = css7;
      document.head.appendChild(el);
    }
  })();
  var controls_module_css_default = { "container": "_container_1l8m7_1", "open": "_open_1l8m7_15", "inputs": "_inputs_1l8m7_20", "colors": "_colors_1l8m7_28", "buttonsRow": "_buttonsRow_1l8m7_41", "rowButton": "_rowButton_1l8m7_46" };

  // src/components/controls/controls.tsx
  var COLORS = [
    "#000000",
    "#ffc107",
    "#ff5722",
    "#e91e63",
    "#673ab7",
    "#00bcd4",
    "#efefef"
  ];
  var EASINGS2 = [
    "linear",
    "easeInQuad",
    "easeOutQuad",
    "easeInOutQuad",
    "easeInCubic",
    "easeOutCubic",
    "easeInOutCubic",
    "easeInQuart",
    "easeOutQuart",
    "easeInOutQuart",
    "easeInQuint",
    "easeOutQuint",
    "easeInOutQuint",
    "easeInSine",
    "easeOutSine",
    "easeInOutSine",
    "easeInExpo",
    "easeOutExpo",
    "easeInOutExpo"
  ];
  var appStateSelector = (s2) => s2.appState;
  function Controls() {
    const appState = useAppState(appStateSelector);
    const { style } = appState;
    const handleSizeChangeStart = React9.useCallback(() => {
      app.setSnapshot();
    }, []);
    const handleSizeChange = React9.useCallback((v2) => {
      app.patchStyleForAllShapes({ size: v2[0] });
    }, []);
    const handleStrokeWidthChangeStart = React9.useCallback(() => {
      app.setSnapshot();
    }, []);
    const handleStrokeWidthChange = React9.useCallback((v2) => {
      app.patchStyleForAllShapes({ strokeWidth: v2[0] });
    }, []);
    const handleThinningChangeStart = React9.useCallback(() => {
      app.setSnapshot();
    }, []);
    const handleThinningChange = React9.useCallback((v2) => {
      app.patchStyleForAllShapes({ thinning: v2[0] });
    }, []);
    const handleStreamlineChangeStart = React9.useCallback(() => {
      app.setSnapshot();
    }, []);
    const handleStreamlineChange = React9.useCallback((v2) => {
      app.patchStyleForAllShapes({ streamline: v2[0] });
    }, []);
    const handleSmoothingChangeStart = React9.useCallback(() => {
      app.setSnapshot();
    }, []);
    const handleSmoothingChange = React9.useCallback((v2) => {
      app.patchStyleForAllShapes({ smoothing: v2[0] });
    }, []);
    const handleEasingChange = React9.useCallback((easing) => {
      app.patchStyleForAllShapes({ easing });
    }, []);
    const handleCapStartChange = React9.useCallback((v2) => {
      app.setNextStyleForAllShapes({ capStart: !!v2 });
    }, []);
    const handleTaperStartChangeStart = React9.useCallback(() => {
      app.setSnapshot();
    }, []);
    const handleTaperStartChange = React9.useCallback((v2) => {
      app.patchStyleForAllShapes({ taperStart: v2[0] === 100 ? true : v2[0] });
    }, []);
    const handleEasingStartChange = React9.useCallback((easing) => {
      app.patchStyleForAllShapes({ easingStart: easing });
    }, []);
    const handleCapEndChange = React9.useCallback((v2) => {
      app.setNextStyleForAllShapes({ capEnd: !!v2 });
    }, []);
    const handleTaperEndChangeStart = React9.useCallback(() => {
      app.setSnapshot();
    }, []);
    const handleTaperEndChange = React9.useCallback((v2) => {
      app.patchStyleForAllShapes({ taperEnd: v2[0] === 100 ? true : v2[0] });
    }, []);
    const handleEasingEndChange = React9.useCallback((easing) => {
      app.patchStyleForAllShapes({ easingEnd: easing });
    }, []);
    const handleIsFilledChange = React9.useCallback((v2) => {
      app.setNextStyleForAllShapes({ isFilled: !!v2 });
    }, []);
    const handleStyleChangeComplete = React9.useCallback(() => {
      app.finishStyleUpdate();
    }, []);
    const handleStrokeColorChange = React9.useCallback((color) => {
      app.patchStyle({ stroke: color });
    }, []);
    const handleFillColorChange = React9.useCallback((color) => {
      app.patchStyle({ fill: color });
    }, []);
    const handleResetSize = React9.useCallback(() => {
      app.resetStyle("size");
    }, []);
    const handleResetThinning = React9.useCallback(() => {
      app.resetStyle("thinning");
    }, []);
    const handleResetStreamline = React9.useCallback(() => {
      app.resetStyle("streamline");
    }, []);
    const handleResetSmoothing = React9.useCallback(() => {
      app.resetStyle("smoothing");
    }, []);
    const handleResetEasing = React9.useCallback(() => {
      app.resetStyle("easing");
    }, []);
    const handleResetTaperStart = React9.useCallback(() => {
      app.resetStyle("taperStart");
    }, []);
    const handleResetEasingStart = React9.useCallback(() => {
      app.resetStyle("easingStart");
    }, []);
    const handleResetTaperEnd = React9.useCallback(() => {
      app.resetStyle("taperEnd");
    }, []);
    const handleResetEasingEnd = React9.useCallback(() => {
      app.resetStyle("easingEnd");
    }, []);
    const handleResetStrokeWidth = React9.useCallback(() => {
      app.resetStyle("strokeWidth");
    }, []);
    return /* @__PURE__ */ React9.createElement("div", {
      className: [
        controls_module_css_default.container,
        appState.isPanelOpen ? controls_module_css_default.open : ""
      ].join(" ")
    }, /* @__PURE__ */ React9.createElement("div", {
      className: controls_module_css_default.inputs
    }, /* @__PURE__ */ React9.createElement(Slider2, {
      // name: "Size",
      name: "اندازه قلم",
      value: [style.size],
      min: 1,
      max: 15,
      step: 1,
      onDoubleClick: handleResetSize,
      onValueChange: handleSizeChange,
      onPointerDown: handleSizeChangeStart,
      onPointerUp: handleStyleChangeComplete
    }), /* @__PURE__ */ React9.createElement(Slider2, {
      name: "Thinning",
      value: [style.thinning],
      min: -0.99,
      max: 0.99,
      step: 0.01,
      onDoubleClick: handleResetThinning,
      onValueChange: handleThinningChange,
      onPointerDown: handleThinningChangeStart,
      onPointerUp: handleStyleChangeComplete
    }), /* @__PURE__ */ React9.createElement(Slider2, {
      name: "Streamline",
      value: [style.streamline],
      min: 0.01,
      max: 0.99,
      step: 0.01,
      onDoubleClick: handleResetStreamline,
      onValueChange: handleStreamlineChange,
      onPointerDown: handleStreamlineChangeStart,
      onPointerUp: handleStyleChangeComplete
    }), /* @__PURE__ */ React9.createElement(Slider2, {
      name: "Smoothing",
      value: [style.smoothing],
      min: 0.01,
      max: 0.99,
      step: 0.01,
      onDoubleClick: handleResetSmoothing,
      onValueChange: handleSmoothingChange,
      onPointerDown: handleSmoothingChangeStart,
      onPointerUp: handleStyleChangeComplete
    }), /* @__PURE__ */ React9.createElement(Select, {
      name: "Easing",
      value: style.easing,
      onValueChange: handleEasingChange,
      onDoubleClick: handleResetEasing
    }, EASINGS2.map((easing) => /* @__PURE__ */ React9.createElement("option", {
      key: easing,
      value: easing
    }, easing[0].toUpperCase() + easing.slice(1)))), /* @__PURE__ */ React9.createElement("hr", null), /* @__PURE__ */ React9.createElement(Slider2, {
      name: "Taper Start",
      value: [
        Math.max(0, Math.min(100, style.taperStart === true ? 100 : style.taperStart === false ? 0 : style.taperStart))
      ],
      label: typeof style.taperStart === "boolean" ? style.taperStart.toString() : void 0,
      min: 0,
      max: 100,
      step: 1,
      onDoubleClick: handleResetTaperStart,
      onValueChange: handleTaperStartChange,
      onPointerDown: handleTaperStartChangeStart,
      onPointerUp: handleStyleChangeComplete
    }), style.taperStart <= 0 && /* @__PURE__ */ React9.createElement(Checkbox2, {
      name: "Cap Start",
      disabled: style.taperStart > 0,
      checked: style.taperStart === 0 && style.capStart,
      onCheckedChange: handleCapStartChange
    }), style.taperStart > 0 && /* @__PURE__ */ React9.createElement(Select, {
      name: "Easing Start",
      value: style.easingStart,
      onValueChange: handleEasingStartChange,
      onDoubleClick: handleResetEasingStart
    }, EASINGS2.map((easing) => /* @__PURE__ */ React9.createElement("option", {
      key: easing,
      value: easing
    }, easing[0].toUpperCase() + easing.slice(1)))), /* @__PURE__ */ React9.createElement("hr", null), /* @__PURE__ */ React9.createElement(Slider2, {
      name: "Taper End",
      value: [
        Math.max(0, Math.min(100, style.taperEnd === true ? 100 : style.taperEnd === false ? 0 : style.taperEnd))
      ],
      min: 0,
      max: 100,
      step: 1,
      onDoubleClick: handleResetTaperEnd,
      onValueChange: handleTaperEndChange,
      onPointerDown: handleTaperEndChangeStart,
      onPointerUp: handleStyleChangeComplete,
      label: typeof style.taperEnd === "boolean" ? style.taperEnd.toString() : void 0
    }), style.taperEnd <= 0 && /* @__PURE__ */ React9.createElement(Checkbox2, {
      name: "Cap End",
      disabled: style.taperEnd > 0,
      checked: style.taperEnd === 0 && style.capEnd,
      onCheckedChange: handleCapEndChange
    }), style.taperEnd > 0 && /* @__PURE__ */ React9.createElement(Select, {
      name: "Easing End",
      value: style.easingEnd,
      onValueChange: handleEasingEndChange,
      onDoubleClick: handleResetEasingEnd
    }, EASINGS2.map((easing) => /* @__PURE__ */ React9.createElement("option", {
      key: easing,
      value: easing
    }, easing[0].toUpperCase() + easing.slice(1)))), /* @__PURE__ */ React9.createElement("hr", null), /* @__PURE__ */ React9.createElement(Checkbox2, {
      name: "Fill",
      checked: style.isFilled,
      onCheckedChange: handleIsFilledChange
    }), style.isFilled && /* @__PURE__ */ React9.createElement(Colors, {
      name: "",
      color: style.fill,
      colors: COLORS,
      onChange: handleFillColorChange
    }), /* @__PURE__ */ React9.createElement(Slider2, {
      name: "Stroke",
      value: [style.strokeWidth],
      min: 0,
      max: 100,
      step: 1,
      onDoubleClick: handleResetStrokeWidth,
      onValueChange: handleStrokeWidthChange,
      onPointerDown: handleStrokeWidthChangeStart,
      onPointerUp: handleStyleChangeComplete
    }), style.strokeWidth > 0 && /* @__PURE__ */ React9.createElement(Colors, {
      name: "",
      color: style.stroke,
      colors: COLORS,
      onChange: handleStrokeColorChange
    }))
      // , /* @__PURE__ */ React9.createElement("hr", null), /* @__PURE__ */ React9.createElement("div", {
      //   className: controls_module_css_default.buttonsRow
      // },
      // /* @__PURE__ */ React9.createElement("button", {
      //   className: controls_module_css_default.rowButton,
      //   onClick: app.resetStyles
      // }, "Reset Options"), /* @__PURE__ */ React9.createElement("button", {
      //   className: controls_module_css_default.rowButton,
      //   onClick: app.copyStyles
      // }, "Copy Options")), /* @__PURE__ */ React9.createElement("hr", null), /* @__PURE__ */ React9.createElement("div", {
      //   className: controls_module_css_default.buttonsRow
      // }, /* @__PURE__ */ React9.createElement("button", {
      //   className: controls_module_css_default.rowButton,
      //   // onClick: app.copySvg // ****** CHANGED THIS
      //   onClick: app.saveCanvas
      // }, "Copy to SVG"))
    );
  }

  // src/components/panel/panel.tsx
  var React10 = __toModule(require_react());

  // esbuild-css-modules-plugin-namespace:/tmp/tmp-272-OkkEAsDcGBE0/dev/src/components/panel/panel.module.css.js
  var digest7 = "4c3369704f2cf5b18a53b6ad2c8cf2b8f8233c4def5968179cd7cfbd91f8b9a9";
  var css8 = `._container_tfbz8_1 {
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 20;
  width: fit-content;
  user-select: none;
}

._container_tfbz8_1 a,
._container_tfbz8_1 button {
  border: 1px solid lightgrey;
  height: 40px;
  width: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-family: 'Yekan';
  user-select: none;
  background-color: rgba(255, 255, 255, 1);
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 1),
    1px 1px 3px rgba(255, 255, 255, 1), 1px 1px 8px rgba(255, 255, 255, 1);
}

._container_tfbz8_1 button {
  margin-right: 5px;
}

._container_tfbz8_1 a:hover,
._container_tfbz8_1 button:hover,
._container_tfbz8_1 button[data-active='true'] {
  color: dodgerblue;
  background-color: white;
}

._bottom_tfbz8_36 {
  bottom: 0px;
}

._left_tfbz8_40 {
  left: 10px;
}

._left_tfbz8_40 button {
  left: 0px;
  border : none;
}

._right_tfbz8_44 {
  right: 5px;
}

._top_tfbz8_48 {
  top: 10px;
}

._center_tfbz8_52 {
  position: fixed;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: none;
  z-index: 10;
}

._center_tfbz8_52 a {
  color: black;
  text-decoration: none;
}
`;
  (function () {
    if (!document.getElementById(digest7)) {
      var el = document.createElement("style");
      el.id = digest7;
      el.textContent = css8;
      document.head.appendChild(el);
    }
  })();
  var panel_module_css_default = { "container": "_container_tfbz8_1", "bottom": "_bottom_tfbz8_36", "left": "_left_tfbz8_40", "right": "_right_tfbz8_44", "top": "_top_tfbz8_48", "center": "_center_tfbz8_52" };

  // ../../node_modules/@radix-ui/react-icons/dist/react-icons.esm.js
  var import_react52 = __toModule(require_react());
  function _objectWithoutPropertiesLoose2(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i2;
    for (i2 = 0; i2 < sourceKeys.length; i2++) {
      key = sourceKeys[i2];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
  }
  var GitHubLogoIcon = /* @__PURE__ */ (0, import_react52.forwardRef)(function (_ref, forwardedRef) {
    var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose2(_ref, ["color"]);
    return (0, import_react52.createElement)("svg", Object.assign({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      ref: forwardedRef
    }), (0, import_react52.createElement)("path", {
      d: "M7.49936 0.850006C3.82767 0.850006 0.849976 3.8273 0.849976 7.50023C0.849976 10.4379 2.75523 12.9306 5.39775 13.8104C5.73047 13.8712 5.85171 13.6658 5.85171 13.4895C5.85171 13.3315 5.846 12.9135 5.84273 12.3587C3.99301 12.7604 3.60273 11.4671 3.60273 11.4671C3.30022 10.6988 2.86423 10.4942 2.86423 10.4942C2.26044 10.0819 2.90995 10.0901 2.90995 10.0901C3.57742 10.137 3.9285 10.7755 3.9285 10.7755C4.52167 11.7916 5.48512 11.4981 5.86396 11.3279C5.92438 10.8984 6.09625 10.6053 6.28608 10.4391C4.80948 10.2709 3.25695 9.70063 3.25695 7.15241C3.25695 6.42615 3.51618 5.83298 3.94157 5.368C3.87299 5.1998 3.64478 4.52375 4.00689 3.60807C4.00689 3.60807 4.56494 3.42926 5.83538 4.28941C6.36568 4.14204 6.93477 4.06856 7.50018 4.0657C8.06518 4.06856 8.63386 4.14204 9.16498 4.28941C10.4346 3.42926 10.9918 3.60807 10.9918 3.60807C11.3548 4.52375 11.1266 5.1998 11.0584 5.368C11.4846 5.83298 11.7418 6.42615 11.7418 7.15241C11.7418 9.70716 10.1868 10.2693 8.70571 10.4338C8.94412 10.6392 9.15681 11.045 9.15681 11.6655C9.15681 12.5542 9.14865 13.2715 9.14865 13.4895C9.14865 13.6675 9.26867 13.8745 9.60588 13.8095C12.2464 12.9282 14.15 10.4375 14.15 7.50023C14.15 3.8273 11.1723 0.850006 7.49936 0.850006Z",
      fill: color,
      fillRule: "evenodd",
      clipRule: "evenodd"
    }));
  });
  var HamburgerMenuIcon = /* @__PURE__ */ (0, import_react52.forwardRef)(function (_ref, forwardedRef) {
    var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, props = _objectWithoutPropertiesLoose2(_ref, ["color"]);
    return (0, import_react52.createElement)("svg", Object.assign({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      ref: forwardedRef
    }), (0, import_react52.createElement)("path", {
      d: "M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z",
      fill: color,
      fillRule: "evenodd",
      clipRule: "evenodd"
    }));
  });

  // src/components/panel/panel.tsx
  function Panel() {
    const tool = useAppState((s2) => s2.appState.tool);
    return /* @__PURE__ */ React10.createElement(React10.Fragment, null, /* @__PURE__ */ React10.createElement("div", {
      className: [panel_module_css_default.top, panel_module_css_default.center].join(" ")
    },
      // /* @__PURE__ */ React10.createElement("a", {
      //   href: "https://github.com/steveruizok/perfect-freehand",
      //   target: "_blank",
      //   rel: "noopener nofollow"
      // }, "perfect-freehand")
    ), /* @__PURE__ */ React10.createElement("div", {
      className: [panel_module_css_default.container, panel_module_css_default.top, panel_module_css_default.left].join(" ")
    }, /* @__PURE__ */ React10.createElement("a", {
      onClick: app.togglePanelOpen
    }, /* @__PURE__ */ React10.createElement(HamburgerMenuIcon, {
      height: 24,
      width: 24,
      color: "black"
    }))),
    // /* @__PURE__ */ React10.createElement("div", {
    //   className: [panel_module_css_default.container, panel_module_css_default.top, panel_module_css_default.right].join(" ")
    // }, /* @__PURE__ */ React10.createElement("a", {
    //   href: "https://github.com/steveruizok/perfect-freehand",
    //   target: "_blank",
    //   rel: "noopener nofollow"
    // }, /* @__PURE__ */ React10.createElement(GitHubLogoIcon, {
    //   height: 24,
    //   width: 24
    // }))),
    // /* @__PURE__ */ React10.createElement("div", {
    //   className: [panel_module_css_default.container, panel_module_css_default.bottom, panel_module_css_default.left].join(" ")
    // },
    // /* @__PURE__ */ React10.createElement("button", {
    //   onClick: app.selectDrawingTool,
    //   "data-active": tool === "drawing"
    // }, "Draw")),
    /* @__PURE__ */ React10.createElement("div", {
      className: [panel_module_css_default.container, panel_module_css_default.top, panel_module_css_default.right].join(" ")
    }, /* @__PURE__ */ React10.createElement("button", {
      onClick: app.undo
    }, "به عقب"), /* @__PURE__ */ React10.createElement("button", {
      onClick: app.redo
    }, "به جلو"), /* @__PURE__ */ React10.createElement("button", {
      onClick: app.resetDoc
    }, "پاک کردن"), /* @__PURE__ */ React10.createElement("button", {
      onClick: app.saveCanvas
    }, "ذخیره"), /* @__PURE__ */ React10.createElement("button", {
      onClick: app.returnToPatient
    }, "بازگشت")));
  }

  // src/hooks/useKeyboardShortcuts.ts
  var React11 = __toModule(require_react());

  // ../../node_modules/hotkeys-js/dist/hotkeys.esm.js
  var isff = typeof navigator !== "undefined" ? navigator.userAgent.toLowerCase().indexOf("firefox") > 0 : false;
  function addEvent(object, event, method) {
    if (object.addEventListener) {
      object.addEventListener(event, method, false);
    } else if (object.attachEvent) {
      object.attachEvent("on".concat(event), function () {
        method(window.event);
      });
    }
  }
  function getMods(modifier, key) {
    var mods = key.slice(0, key.length - 1);
    for (var i2 = 0; i2 < mods.length; i2++) {
      mods[i2] = modifier[mods[i2].toLowerCase()];
    }
    return mods;
  }
  function getKeys(key) {
    if (typeof key !== "string")
      key = "";
    key = key.replace(/\s/g, "");
    var keys = key.split(",");
    var index = keys.lastIndexOf("");
    for (; index >= 0;) {
      keys[index - 1] += ",";
      keys.splice(index, 1);
      index = keys.lastIndexOf("");
    }
    return keys;
  }
  function compareArray(a1, a2) {
    var arr1 = a1.length >= a2.length ? a1 : a2;
    var arr2 = a1.length >= a2.length ? a2 : a1;
    var isIndex = true;
    for (var i2 = 0; i2 < arr1.length; i2++) {
      if (arr2.indexOf(arr1[i2]) === -1)
        isIndex = false;
    }
    return isIndex;
  }
  var _keyMap = {
    backspace: 8,
    tab: 9,
    clear: 12,
    enter: 13,
    return: 13,
    esc: 27,
    escape: 27,
    space: 32,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    del: 46,
    delete: 46,
    ins: 45,
    insert: 45,
    home: 36,
    end: 35,
    pageup: 33,
    pagedown: 34,
    capslock: 20,
    num_0: 96,
    num_1: 97,
    num_2: 98,
    num_3: 99,
    num_4: 100,
    num_5: 101,
    num_6: 102,
    num_7: 103,
    num_8: 104,
    num_9: 105,
    num_multiply: 106,
    num_add: 107,
    num_enter: 108,
    num_subtract: 109,
    num_decimal: 110,
    num_divide: 111,
    "\u21EA": 20,
    ",": 188,
    ".": 190,
    "/": 191,
    "`": 192,
    "-": isff ? 173 : 189,
    "=": isff ? 61 : 187,
    ";": isff ? 59 : 186,
    "'": 222,
    "[": 219,
    "]": 221,
    "\\": 220
  };
  var _modifier = {
    "\u21E7": 16,
    shift: 16,
    "\u2325": 18,
    alt: 18,
    option: 18,
    "\u2303": 17,
    ctrl: 17,
    control: 17,
    "\u2318": 91,
    cmd: 91,
    command: 91
  };
  var modifierMap = {
    16: "shiftKey",
    18: "altKey",
    17: "ctrlKey",
    91: "metaKey",
    shiftKey: 16,
    ctrlKey: 17,
    altKey: 18,
    metaKey: 91
  };
  var _mods = {
    16: false,
    18: false,
    17: false,
    91: false
  };
  var _handlers = {};
  for (k = 1; k < 20; k++) {
    _keyMap["f".concat(k)] = 111 + k;
  }
  var k;
  var _downKeys = [];
  var _scope = "all";
  var elementHasBindEvent = [];
  var code = function code2(x2) {
    return _keyMap[x2.toLowerCase()] || _modifier[x2.toLowerCase()] || x2.toUpperCase().charCodeAt(0);
  };
  function setScope(scope) {
    _scope = scope || "all";
  }
  function getScope() {
    return _scope || "all";
  }
  function getPressedKeyCodes() {
    return _downKeys.slice(0);
  }
  function filter(event) {
    var target = event.target || event.srcElement;
    var tagName = target.tagName;
    var flag = true;
    if (target.isContentEditable || (tagName === "INPUT" || tagName === "TEXTAREA" || tagName === "SELECT") && !target.readOnly) {
      flag = false;
    }
    return flag;
  }
  function isPressed(keyCode) {
    if (typeof keyCode === "string") {
      keyCode = code(keyCode);
    }
    return _downKeys.indexOf(keyCode) !== -1;
  }
  function deleteScope(scope, newScope) {
    var handlers;
    var i2;
    if (!scope)
      scope = getScope();
    for (var key in _handlers) {
      if (Object.prototype.hasOwnProperty.call(_handlers, key)) {
        handlers = _handlers[key];
        for (i2 = 0; i2 < handlers.length;) {
          if (handlers[i2].scope === scope)
            handlers.splice(i2, 1);
          else
            i2++;
        }
      }
    }
    if (getScope() === scope)
      setScope(newScope || "all");
  }
  function clearModifier(event) {
    var key = event.keyCode || event.which || event.charCode;
    var i2 = _downKeys.indexOf(key);
    if (i2 >= 0) {
      _downKeys.splice(i2, 1);
    }
    if (event.key && event.key.toLowerCase() === "meta") {
      _downKeys.splice(0, _downKeys.length);
    }
    if (key === 93 || key === 224)
      key = 91;
    if (key in _mods) {
      _mods[key] = false;
      for (var k in _modifier) {
        if (_modifier[k] === key)
          hotkeys[k] = false;
      }
    }
  }
  function unbind(keysInfo) {
    if (!keysInfo) {
      Object.keys(_handlers).forEach(function (key) {
        return delete _handlers[key];
      });
    } else if (Array.isArray(keysInfo)) {
      keysInfo.forEach(function (info) {
        if (info.key)
          eachUnbind(info);
      });
    } else if (typeof keysInfo === "object") {
      if (keysInfo.key)
        eachUnbind(keysInfo);
    } else if (typeof keysInfo === "string") {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var scope = args[0], method = args[1];
      if (typeof scope === "function") {
        method = scope;
        scope = "";
      }
      eachUnbind({
        key: keysInfo,
        scope,
        method,
        splitKey: "+"
      });
    }
  }
  var eachUnbind = function eachUnbind2(_ref) {
    var key = _ref.key, scope = _ref.scope, method = _ref.method, _ref$splitKey = _ref.splitKey, splitKey = _ref$splitKey === void 0 ? "+" : _ref$splitKey;
    var multipleKeys = getKeys(key);
    multipleKeys.forEach(function (originKey) {
      var unbindKeys = originKey.split(splitKey);
      var len = unbindKeys.length;
      var lastKey = unbindKeys[len - 1];
      var keyCode = lastKey === "*" ? "*" : code(lastKey);
      if (!_handlers[keyCode])
        return;
      if (!scope)
        scope = getScope();
      var mods = len > 1 ? getMods(_modifier, unbindKeys) : [];
      _handlers[keyCode] = _handlers[keyCode].map(function (record) {
        var isMatchingMethod = method ? record.method === method : true;
        if (isMatchingMethod && record.scope === scope && compareArray(record.mods, mods)) {
          return {};
        }
        return record;
      });
    });
  };
  function eventHandler(event, handler, scope) {
    var modifiersMatch;
    if (handler.scope === scope || handler.scope === "all") {
      modifiersMatch = handler.mods.length > 0;
      for (var y2 in _mods) {
        if (Object.prototype.hasOwnProperty.call(_mods, y2)) {
          if (!_mods[y2] && handler.mods.indexOf(+y2) > -1 || _mods[y2] && handler.mods.indexOf(+y2) === -1) {
            modifiersMatch = false;
          }
        }
      }
      if (handler.mods.length === 0 && !_mods[16] && !_mods[18] && !_mods[17] && !_mods[91] || modifiersMatch || handler.shortcut === "*") {
        if (handler.method(event, handler) === false) {
          if (event.preventDefault)
            event.preventDefault();
          else
            event.returnValue = false;
          if (event.stopPropagation)
            event.stopPropagation();
          if (event.cancelBubble)
            event.cancelBubble = true;
        }
      }
    }
  }
  function dispatch(event) {
    var asterisk = _handlers["*"];
    var key = event.keyCode || event.which || event.charCode;
    if (!hotkeys.filter.call(this, event))
      return;
    if (key === 93 || key === 224)
      key = 91;
    if (_downKeys.indexOf(key) === -1 && key !== 229)
      _downKeys.push(key);
    ["ctrlKey", "altKey", "shiftKey", "metaKey"].forEach(function (keyName) {
      var keyNum = modifierMap[keyName];
      if (event[keyName] && _downKeys.indexOf(keyNum) === -1) {
        _downKeys.push(keyNum);
      } else if (!event[keyName] && _downKeys.indexOf(keyNum) > -1) {
        _downKeys.splice(_downKeys.indexOf(keyNum), 1);
      } else if (keyName === "metaKey" && event[keyName] && _downKeys.length === 3) {
        if (!(event.ctrlKey || event.shiftKey || event.altKey)) {
          _downKeys = _downKeys.slice(_downKeys.indexOf(keyNum));
        }
      }
    });
    if (key in _mods) {
      _mods[key] = true;
      for (var k in _modifier) {
        if (_modifier[k] === key)
          hotkeys[k] = true;
      }
      if (!asterisk)
        return;
    }
    for (var e7 in _mods) {
      if (Object.prototype.hasOwnProperty.call(_mods, e7)) {
        _mods[e7] = event[modifierMap[e7]];
      }
    }
    if (event.getModifierState && !(event.altKey && !event.ctrlKey) && event.getModifierState("AltGraph")) {
      if (_downKeys.indexOf(17) === -1) {
        _downKeys.push(17);
      }
      if (_downKeys.indexOf(18) === -1) {
        _downKeys.push(18);
      }
      _mods[17] = true;
      _mods[18] = true;
    }
    var scope = getScope();
    if (asterisk) {
      for (var i2 = 0; i2 < asterisk.length; i2++) {
        if (asterisk[i2].scope === scope && (event.type === "keydown" && asterisk[i2].keydown || event.type === "keyup" && asterisk[i2].keyup)) {
          eventHandler(event, asterisk[i2], scope);
        }
      }
    }
    if (!(key in _handlers))
      return;
    for (var _i = 0; _i < _handlers[key].length; _i++) {
      if (event.type === "keydown" && _handlers[key][_i].keydown || event.type === "keyup" && _handlers[key][_i].keyup) {
        if (_handlers[key][_i].key) {
          var record = _handlers[key][_i];
          var splitKey = record.splitKey;
          var keyShortcut = record.key.split(splitKey);
          var _downKeysCurrent = [];
          for (var a2 = 0; a2 < keyShortcut.length; a2++) {
            _downKeysCurrent.push(code(keyShortcut[a2]));
          }
          if (_downKeysCurrent.sort().join("") === _downKeys.sort().join("")) {
            eventHandler(event, record, scope);
          }
        }
      }
    }
  }
  function isElementBind(element) {
    return elementHasBindEvent.indexOf(element) > -1;
  }
  function hotkeys(key, option, method) {
    _downKeys = [];
    var keys = getKeys(key);
    var mods = [];
    var scope = "all";
    var element = document;
    var i2 = 0;
    var keyup = false;
    var keydown = true;
    var splitKey = "+";
    if (method === void 0 && typeof option === "function") {
      method = option;
    }
    if (Object.prototype.toString.call(option) === "[object Object]") {
      if (option.scope)
        scope = option.scope;
      if (option.element)
        element = option.element;
      if (option.keyup)
        keyup = option.keyup;
      if (option.keydown !== void 0)
        keydown = option.keydown;
      if (typeof option.splitKey === "string")
        splitKey = option.splitKey;
    }
    if (typeof option === "string")
      scope = option;
    for (; i2 < keys.length; i2++) {
      key = keys[i2].split(splitKey);
      mods = [];
      if (key.length > 1)
        mods = getMods(_modifier, key);
      key = key[key.length - 1];
      key = key === "*" ? "*" : code(key);
      if (!(key in _handlers))
        _handlers[key] = [];
      _handlers[key].push({
        keyup,
        keydown,
        scope,
        mods,
        shortcut: keys[i2],
        method,
        key: keys[i2],
        splitKey
      });
    }
    if (typeof element !== "undefined" && !isElementBind(element) && window) {
      elementHasBindEvent.push(element);
      addEvent(element, "keydown", function (e7) {
        dispatch(e7);
      });
      addEvent(window, "focus", function () {
        _downKeys = [];
      });
      addEvent(element, "keyup", function (e7) {
        dispatch(e7);
        clearModifier(e7);
      });
    }
  }
  var _api = {
    setScope,
    getScope,
    deleteScope,
    getPressedKeyCodes,
    isPressed,
    filter,
    unbind
  };
  for (a2 in _api) {
    if (Object.prototype.hasOwnProperty.call(_api, a2)) {
      hotkeys[a2] = _api[a2];
    }
  }
  var a2;
  if (typeof window !== "undefined") {
    _hotkeys = window.hotkeys;
    hotkeys.noConflict = function (deep) {
      if (deep && window.hotkeys === hotkeys) {
        window.hotkeys = _hotkeys;
      }
      return hotkeys;
    };
    window.hotkeys = hotkeys;
  }
  var _hotkeys;
  var hotkeys_esm_default = hotkeys;

  // ../../node_modules/react-hotkeys-hook/dist/react-hotkeys-hook.esm.js
  var import_react53 = __toModule(require_react());
  hotkeys_esm_default.filter = function () {
    return true;
  };
  var tagFilter = function tagFilter2(_ref, enableOnTags) {
    var target = _ref.target;
    var targetTagName = target && target.tagName;
    return Boolean(targetTagName && enableOnTags && enableOnTags.includes(targetTagName));
  };
  var isKeyboardEventTriggeredByInput = function isKeyboardEventTriggeredByInput2(ev) {
    return tagFilter(ev, ["INPUT", "TEXTAREA", "SELECT"]);
  };
  function useHotkeys(keys, callback, options, deps) {
    if (options instanceof Array) {
      deps = options;
      options = void 0;
    }
    var _ref2 = options || {}, enableOnTags = _ref2.enableOnTags, filter2 = _ref2.filter, keyup = _ref2.keyup, keydown = _ref2.keydown, _ref2$filterPreventDe = _ref2.filterPreventDefault, filterPreventDefault = _ref2$filterPreventDe === void 0 ? true : _ref2$filterPreventDe, _ref2$enabled = _ref2.enabled, enabled = _ref2$enabled === void 0 ? true : _ref2$enabled, _ref2$enableOnContent = _ref2.enableOnContentEditable, enableOnContentEditable = _ref2$enableOnContent === void 0 ? false : _ref2$enableOnContent;
    var ref = (0, import_react53.useRef)(null);
    var memoisedCallback = (0, import_react53.useCallback)(function (keyboardEvent, hotkeysEvent) {
      var _keyboardEvent$target;
      if (filter2 && !filter2(keyboardEvent)) {
        return !filterPreventDefault;
      }
      if (isKeyboardEventTriggeredByInput(keyboardEvent) && !tagFilter(keyboardEvent, enableOnTags) || (_keyboardEvent$target = keyboardEvent.target) != null && _keyboardEvent$target.isContentEditable && !enableOnContentEditable) {
        return true;
      }
      if (ref.current === null || document.activeElement === ref.current) {
        callback(keyboardEvent, hotkeysEvent);
        return true;
      }
      return false;
    }, deps ? [ref, enableOnTags, filter2].concat(deps) : [ref, enableOnTags, filter2]);
    (0, import_react53.useEffect)(function () {
      if (!enabled) {
        return;
      }
      if (keyup && keydown !== true) {
        options.keydown = false;
      }
      hotkeys_esm_default(keys, options || {}, memoisedCallback);
      return function () {
        return hotkeys_esm_default.unbind(keys, memoisedCallback);
      };
    }, [memoisedCallback, keys, enabled]);
    return ref;
  }
  var isHotkeyPressed = hotkeys_esm_default.isPressed;

  // src/hooks/useKeyboardShortcuts.ts
  function useKeyboardShortcuts() {
    useHotkeys("command+z,ctrl+z", () => {
      app.undo();
    });
    useHotkeys("command+shift+z,ctrl+shift+z", () => {
      app.redo();
    });
    useHotkeys("command+c,ctrl+c", () => {
      app.copySvg();
    });
    useHotkeys("command+shift+c,ctrl+shift+c", () => {
      app.copyStyles();
    });
    useHotkeys("e,backspace", () => {
      app.resetDoc();
    });
  }

  // src/app.tsx
  function App() {
    useKeyboardShortcuts();
    return /* @__PURE__ */ React12.createElement("div", {
      className: "app"
    }, /* @__PURE__ */ React12.createElement(Editor, null), /* @__PURE__ */ React12.createElement(Controls, null), /* @__PURE__ */ React12.createElement(Panel, null));
  }
  var AppWrapper = () => {
    return /* @__PURE__ */ React12.createElement(App, null);
  };
  var app_default = AppWrapper;

  // src/index.tsx
  import_react_dom.default.render(/* @__PURE__ */ import_react54.default.createElement(import_react54.default.StrictMode, null, /* @__PURE__ */ import_react54.default.createElement(app_default, null)), document.getElementById("root"));
})();