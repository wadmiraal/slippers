"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // node_modules/coffeescript/lib/coffeescript-browser-compiler-legacy/coffeescript.js
  var require_coffeescript = __commonJS({
    "node_modules/coffeescript/lib/coffeescript-browser-compiler-legacy/coffeescript.js"(exports) {
      function _get(target, property, receiver) {
        return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (base) {
            var desc = Object.getOwnPropertyDescriptor(base, property2);
            return desc.get ? desc.get.call(receiver2) : desc.value;
          }
        }, _get(target, property, receiver || target);
      }
      function _superPropBase(object, property) {
        for (; !Object.prototype.hasOwnProperty.call(object, property) && (object = _getPrototypeOf(object), null !== object); )
          ;
        return object;
      }
      function _possibleConstructorReturn(self, call) {
        return call && ("object" === _typeof(call) || "function" == typeof call) ? call : _assertThisInitialized(self);
      }
      function _assertThisInitialized(self) {
        if (void 0 === self)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return self;
      }
      function _getPrototypeOf(o) {
        return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        }, _getPrototypeOf(o);
      }
      function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass)
          throw new TypeError("Super expression must either be null or a function");
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), superClass && _setPrototypeOf(subClass, superClass);
      }
      function _setPrototypeOf(o, p) {
        return _setPrototypeOf = Object.setPrototypeOf || function(o2, p2) {
          return o2.__proto__ = p2, o2;
        }, _setPrototypeOf(o, p);
      }
      function _toArray(arr) {
        return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest();
      }
      function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
      }
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
      function _iterableToArrayLimit(arr, i) {
        if (Symbol.iterator in Object(arr) || "[object Arguments]" === Object.prototype.toString.call(arr)) {
          var _arr = [], _n = true, _d = false, _e = void 0;
          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !(i && _arr.length === i)); _n = true)
              ;
          } catch (err) {
            _d = true, _e = err;
          } finally {
            try {
              _n || null == _i["return"] || _i["return"]();
            } finally {
              if (_d)
                throw _e;
            }
          }
          return _arr;
        }
      }
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr))
          return arr;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor))
          throw new TypeError("Cannot call a class as a function");
      }
      function _defineProperties(target, props) {
        for (var i = 0, descriptor; i < props.length; i++)
          descriptor = props[i], descriptor.enumerable = descriptor.enumerable || false, descriptor.configurable = true, "value" in descriptor && (descriptor.writable = true), Object.defineProperty(target, descriptor.key, descriptor);
      }
      function _createClass(Constructor, protoProps, staticProps) {
        return protoProps && _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), Constructor;
      }
      function _typeof(obj) {
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
          return typeof obj2;
        } : function(obj2) {
          return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        }, _typeof(obj);
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }
      function _iterableToArray(iter) {
        if (Symbol.iterator in Object(iter) || "[object Arguments]" === Object.prototype.toString.call(iter))
          return Array.from(iter);
      }
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
            arr2[i] = arr[i];
          return arr2;
        }
      }
      (function(root) {
        var CoffeeScript = function() {
          var _Mathabs = Math.abs, _StringfromCharCode = String.fromCharCode, _Mathfloor = Math.floor;
          function require2(path) {
            return require2[path];
          }
          return require2["../../package.json"] = function() {
            return { name: "coffeescript", description: "Unfancy JavaScript", keywords: ["javascript", "language", "coffeescript", "compiler"], author: "Jeremy Ashkenas", version: "2.5.1", license: "MIT", engines: { node: ">=6" }, directories: { lib: "./lib/coffeescript" }, main: "./lib/coffeescript/index", module: "./lib/coffeescript-browser-compiler-modern/coffeescript.js", browser: "./lib/coffeescript-browser-compiler-legacy/coffeescript.js", bin: { coffee: "./bin/coffee", cake: "./bin/cake" }, files: ["bin", "lib", "register.js", "repl.js"], scripts: { test: "node ./bin/cake test", "test-harmony": "node --harmony ./bin/cake test" }, homepage: "https://coffeescript.org", bugs: "https://github.com/jashkenas/coffeescript/issues", repository: { type: "git", url: "git://github.com/jashkenas/coffeescript.git" }, devDependencies: { "@babel/core": "^7.7.7", "@babel/preset-env": "^7.7.7", "babel-preset-minify": "^0.5.1", codemirror: "^5.50.0", docco: "~0.8.0", "highlight.js": "~9.17.1", jison: "^0.4.18", "markdown-it": "~10.0.0", underscore: "~1.9.1", webpack: "~4.41.5" }, dependencies: {} };
          }(), require2["./helpers"] = function() {
            var exports2 = {};
            return function() {
              var indexOf = [].indexOf, UNICODE_CODE_POINT_ESCAPE, attachCommentsToNode, buildLocationData, buildLocationHash, buildTokenDataDictionary, extend, _flatten, isBoolean, isNumber, isString, ref, repeat, syntaxErrorToString, unicodeCodePointToUnicodeEscapes;
              exports2.starts = function(string, literal, start) {
                return literal === string.substr(start, literal.length);
              }, exports2.ends = function(string, literal, back) {
                var len;
                return len = literal.length, literal === string.substr(string.length - len - (back || 0), len);
              }, exports2.repeat = repeat = function(str, n) {
                var res;
                for (res = ""; 0 < n; )
                  1 & n && (res += str), n >>>= 1, str += str;
                return res;
              }, exports2.compact = function(array) {
                var i, item, len1, results;
                for (results = [], i = 0, len1 = array.length; i < len1; i++)
                  item = array[i], item && results.push(item);
                return results;
              }, exports2.count = function(string, substr) {
                var num, pos;
                if (num = pos = 0, !substr.length)
                  return 1 / 0;
                for (; pos = 1 + string.indexOf(substr, pos); )
                  num++;
                return num;
              }, exports2.merge = function(options, overrides) {
                return extend(extend({}, options), overrides);
              }, extend = exports2.extend = function(object, properties) {
                var key, val;
                for (key in properties)
                  val = properties[key], object[key] = val;
                return object;
              }, exports2.flatten = _flatten = function flatten(array) {
                var element, flattened, i, len1;
                for (flattened = [], i = 0, len1 = array.length; i < len1; i++)
                  element = array[i], "[object Array]" === Object.prototype.toString.call(element) ? flattened = flattened.concat(_flatten(element)) : flattened.push(element);
                return flattened;
              }, exports2.del = function(obj, key) {
                var val;
                return val = obj[key], delete obj[key], val;
              }, exports2.some = null == (ref = Array.prototype.some) ? function(fn) {
                var e, i, len1, ref1;
                for (ref1 = this, i = 0, len1 = ref1.length; i < len1; i++)
                  if (e = ref1[i], fn(e))
                    return true;
                return false;
              } : ref, exports2.invertLiterate = function(code) {
                var blankLine, i, indented, insideComment, len1, line, listItemStart, out, ref1;
                for (out = [], blankLine = /^\s*$/, indented = /^[\t ]/, listItemStart = /^(?:\t?| {0,3})(?:[\*\-\+]|[0-9]{1,9}\.)[ \t]/, insideComment = false, ref1 = code.split("\n"), i = 0, len1 = ref1.length; i < len1; i++)
                  line = ref1[i], blankLine.test(line) ? (insideComment = false, out.push(line)) : insideComment || listItemStart.test(line) ? (insideComment = true, out.push("# ".concat(line))) : !insideComment && indented.test(line) ? out.push(line) : (insideComment = true, out.push("# ".concat(line)));
                return out.join("\n");
              }, buildLocationData = function(first, last) {
                return last ? { first_line: first.first_line, first_column: first.first_column, last_line: last.last_line, last_column: last.last_column, last_line_exclusive: last.last_line_exclusive, last_column_exclusive: last.last_column_exclusive, range: [first.range[0], last.range[1]] } : first;
              }, exports2.extractAllCommentTokens = function(tokens) {
                var allCommentsObj, comment, commentKey, i, j, k, key, len1, len2, len3, ref1, results, sortedKeys, token;
                for (allCommentsObj = {}, i = 0, len1 = tokens.length; i < len1; i++)
                  if (token = tokens[i], token.comments)
                    for (ref1 = token.comments, j = 0, len2 = ref1.length; j < len2; j++)
                      comment = ref1[j], commentKey = comment.locationData.range[0], allCommentsObj[commentKey] = comment;
                for (sortedKeys = Object.keys(allCommentsObj).sort(function(a, b) {
                  return a - b;
                }), results = [], k = 0, len3 = sortedKeys.length; k < len3; k++)
                  key = sortedKeys[k], results.push(allCommentsObj[key]);
                return results;
              }, buildLocationHash = function(loc) {
                return "".concat(loc.range[0], "-").concat(loc.range[1]);
              }, exports2.buildTokenDataDictionary = buildTokenDataDictionary = function(tokens) {
                var base1, i, len1, token, tokenData, tokenHash;
                for (tokenData = {}, i = 0, len1 = tokens.length; i < len1; i++)
                  if ((token = tokens[i], !!token.comments) && (tokenHash = buildLocationHash(token[2]), null == tokenData[tokenHash] && (tokenData[tokenHash] = {}), token.comments)) {
                    var _ref;
                    (_ref = null == (base1 = tokenData[tokenHash]).comments ? base1.comments = [] : base1.comments).push.apply(_ref, _toConsumableArray(token.comments));
                  }
                return tokenData;
              }, exports2.addDataToNode = function(parserState, firstLocationData, firstValue, lastLocationData, lastValue) {
                var forceUpdateLocation = !(5 < arguments.length && void 0 !== arguments[5]) || arguments[5];
                return function(obj) {
                  var locationData, objHash, ref1, ref2, ref3;
                  return locationData = buildLocationData(null == (ref1 = null == firstValue ? void 0 : firstValue.locationData) ? firstLocationData : ref1, null == (ref2 = null == lastValue ? void 0 : lastValue.locationData) ? lastLocationData : ref2), null != (null == obj ? void 0 : obj.updateLocationDataIfMissing) && null != firstLocationData ? obj.updateLocationDataIfMissing(locationData, forceUpdateLocation) : obj.locationData = locationData, null == parserState.tokenData && (parserState.tokenData = buildTokenDataDictionary(parserState.parser.tokens)), null != obj.locationData && (objHash = buildLocationHash(obj.locationData), null != (null == (ref3 = parserState.tokenData[objHash]) ? void 0 : ref3.comments) && attachCommentsToNode(parserState.tokenData[objHash].comments, obj)), obj;
                };
              }, exports2.attachCommentsToNode = attachCommentsToNode = function(comments, node) {
                var _node$comments;
                if (null != comments && 0 !== comments.length)
                  return null == node.comments && (node.comments = []), (_node$comments = node.comments).push.apply(_node$comments, _toConsumableArray(comments));
              }, exports2.locationDataToString = function(obj) {
                var locationData;
                return "2" in obj && "first_line" in obj[2] ? locationData = obj[2] : "first_line" in obj && (locationData = obj), locationData ? "".concat(locationData.first_line + 1, ":").concat(locationData.first_column + 1, "-") + "".concat(locationData.last_line + 1, ":").concat(locationData.last_column + 1) : "No location data";
              }, exports2.baseFileName = function(file) {
                var stripExt = !!(1 < arguments.length && void 0 !== arguments[1]) && arguments[1], useWinPathSep = !!(2 < arguments.length && void 0 !== arguments[2]) && arguments[2], parts, pathSep;
                return (pathSep = useWinPathSep ? /\\|\// : /\//, parts = file.split(pathSep), file = parts[parts.length - 1], !(stripExt && 0 <= file.indexOf("."))) ? file : (parts = file.split("."), parts.pop(), "coffee" === parts[parts.length - 1] && 1 < parts.length && parts.pop(), parts.join("."));
              }, exports2.isCoffee = function(file) {
                return /\.((lit)?coffee|coffee\.md)$/.test(file);
              }, exports2.isLiterate = function(file) {
                return /\.(litcoffee|coffee\.md)$/.test(file);
              }, exports2.throwSyntaxError = function(message, location) {
                var error;
                throw error = new SyntaxError(message), error.location = location, error.toString = syntaxErrorToString, error.stack = error.toString(), error;
              }, exports2.updateSyntaxError = function(error, code, filename) {
                return error.toString === syntaxErrorToString && (error.code || (error.code = code), error.filename || (error.filename = filename), error.stack = error.toString()), error;
              }, syntaxErrorToString = function() {
                var codeLine, colorize, colorsEnabled, end, filename, first_column, first_line, last_column, last_line, marker, ref1, ref2, ref3, start;
                if (!(this.code && this.location))
                  return Error.prototype.toString.call(this);
                var _this$location = this.location;
                return first_line = _this$location.first_line, first_column = _this$location.first_column, last_line = _this$location.last_line, last_column = _this$location.last_column, null == last_line && (last_line = first_line), null == last_column && (last_column = first_column), filename = this.filename || "[stdin]", codeLine = this.code.split("\n")[first_line], start = first_column, end = first_line === last_line ? last_column + 1 : codeLine.length, marker = codeLine.slice(0, start).replace(/[^\s]/g, " ") + repeat("^", end - start), "undefined" != typeof process && null !== process && (colorsEnabled = (null == (ref1 = process.stdout) ? void 0 : ref1.isTTY) && (null == (ref2 = process.env) || !ref2.NODE_DISABLE_COLORS)), (null == (ref3 = this.colorful) ? colorsEnabled : ref3) && (colorize = function(str) {
                  return "\x1B[1;31m".concat(str, "\x1B[0m");
                }, codeLine = codeLine.slice(0, start) + colorize(codeLine.slice(start, end)) + codeLine.slice(end), marker = colorize(marker)), "".concat(filename, ":").concat(first_line + 1, ":").concat(first_column + 1, ": error: ").concat(this.message, "\n").concat(codeLine, "\n").concat(marker);
              }, exports2.nameWhitespaceCharacter = function(string) {
                return " " === string ? "space" : "\n" === string ? "newline" : "\r" === string ? "carriage return" : "	" === string ? "tab" : string;
              }, exports2.parseNumber = function(string) {
                var base;
                return null == string ? 0 / 0 : (base = function() {
                  switch (string.charAt(1)) {
                    case "b":
                      return 2;
                    case "o":
                      return 8;
                    case "x":
                      return 16;
                    default:
                      return null;
                  }
                }(), null == base ? parseFloat(string.replace(/_/g, "")) : parseInt(string.slice(2).replace(/_/g, ""), base));
              }, exports2.isFunction = function(obj) {
                return "[object Function]" === Object.prototype.toString.call(obj);
              }, exports2.isNumber = isNumber = function(obj) {
                return "[object Number]" === Object.prototype.toString.call(obj);
              }, exports2.isString = isString = function(obj) {
                return "[object String]" === Object.prototype.toString.call(obj);
              }, exports2.isBoolean = isBoolean = function(obj) {
                return true === obj || false === obj || "[object Boolean]" === Object.prototype.toString.call(obj);
              }, exports2.isPlainObject = function(obj) {
                return "object" === _typeof(obj) && !!obj && !Array.isArray(obj) && !isNumber(obj) && !isString(obj) && !isBoolean(obj);
              }, unicodeCodePointToUnicodeEscapes = function(codePoint) {
                var high, low, toUnicodeEscape;
                return (toUnicodeEscape = function(val) {
                  var str;
                  return str = val.toString(16), "\\u".concat(repeat("0", 4 - str.length)).concat(str);
                }, 65536 > codePoint) ? toUnicodeEscape(codePoint) : (high = _Mathfloor((codePoint - 65536) / 1024) + 55296, low = (codePoint - 65536) % 1024 + 56320, "".concat(toUnicodeEscape(high)).concat(toUnicodeEscape(low)));
              }, exports2.replaceUnicodeCodePointEscapes = function(str) {
                var _ref2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, flags = _ref2.flags, error = _ref2.error, _ref2$delimiter = _ref2.delimiter, delimiter = void 0 === _ref2$delimiter ? "" : _ref2$delimiter, shouldReplace;
                return shouldReplace = null != flags && 0 > indexOf.call(flags, "u"), str.replace(UNICODE_CODE_POINT_ESCAPE, function(match, escapedBackslash, codePointHex, offset) {
                  var codePointDecimal;
                  return escapedBackslash ? escapedBackslash : (codePointDecimal = parseInt(codePointHex, 16), 1114111 < codePointDecimal && error("unicode code point escapes greater than \\u{10ffff} are not allowed", { offset: offset + delimiter.length, length: codePointHex.length + 4 }), shouldReplace ? unicodeCodePointToUnicodeEscapes(codePointDecimal) : match);
                });
              }, UNICODE_CODE_POINT_ESCAPE = /(\\\\)|\\u\{([\da-fA-F]+)\}/g;
            }.call(this), { exports: exports2 }.exports;
          }(), require2["./rewriter"] = function() {
            var exports2 = {};
            return function() {
              var indexOf = [].indexOf, hasProp = {}.hasOwnProperty, _require = require2("./helpers"), BALANCED_PAIRS, CALL_CLOSERS, CONTROL_IN_IMPLICIT, DISCARDED, EXPRESSION_CLOSE, EXPRESSION_END, EXPRESSION_START, IMPLICIT_CALL, IMPLICIT_END, IMPLICIT_FUNC, IMPLICIT_UNSPACED_CALL, INVERSES, LINEBREAKS, Rewriter, SINGLE_CLOSERS, SINGLE_LINERS, UNFINISHED, extractAllCommentTokens, generate, k, left, len, moveComments, right, throwSyntaxError;
              for (throwSyntaxError = _require.throwSyntaxError, extractAllCommentTokens = _require.extractAllCommentTokens, moveComments = function(fromToken, toToken) {
                var comment, k2, len2, ref, unshiftedComments;
                if (fromToken.comments) {
                  if (toToken.comments && 0 !== toToken.comments.length) {
                    for (unshiftedComments = [], ref = fromToken.comments, k2 = 0, len2 = ref.length; k2 < len2; k2++)
                      comment = ref[k2], comment.unshift ? unshiftedComments.push(comment) : toToken.comments.push(comment);
                    toToken.comments = unshiftedComments.concat(toToken.comments);
                  } else
                    toToken.comments = fromToken.comments;
                  return delete fromToken.comments;
                }
              }, generate = function(tag, value, origin, commentsToken) {
                var token;
                return token = [tag, value], token.generated = true, origin && (token.origin = origin), commentsToken && moveComments(commentsToken, token), token;
              }, exports2.Rewriter = Rewriter = function() {
                var Rewriter2 = function() {
                  "use strict";
                  function Rewriter3() {
                    _classCallCheck(this, Rewriter3);
                  }
                  return _createClass(Rewriter3, [{ key: "rewrite", value: function rewrite(tokens1) {
                    var ref, ref1, t;
                    return this.tokens = tokens1, ("undefined" != typeof process && null !== process ? null == (ref = process.env) ? void 0 : ref.DEBUG_TOKEN_STREAM : void 0) && (process.env.DEBUG_REWRITTEN_TOKEN_STREAM && console.log("Initial token stream:"), console.log(function() {
                      var k2, len2, ref12, results;
                      for (ref12 = this.tokens, results = [], k2 = 0, len2 = ref12.length; k2 < len2; k2++)
                        t = ref12[k2], results.push(t[0] + "/" + t[1] + (t.comments ? "*" : ""));
                      return results;
                    }.call(this).join(" "))), this.removeLeadingNewlines(), this.closeOpenCalls(), this.closeOpenIndexes(), this.normalizeLines(), this.tagPostfixConditionals(), this.addImplicitBracesAndParens(), this.rescueStowawayComments(), this.addLocationDataToGeneratedTokens(), this.enforceValidJSXAttributes(), this.fixIndentationLocationData(), this.exposeTokenDataToGrammar(), ("undefined" != typeof process && null !== process ? null == (ref1 = process.env) ? void 0 : ref1.DEBUG_REWRITTEN_TOKEN_STREAM : void 0) && (process.env.DEBUG_TOKEN_STREAM && console.log("Rewritten token stream:"), console.log(function() {
                      var k2, len2, ref2, results;
                      for (ref2 = this.tokens, results = [], k2 = 0, len2 = ref2.length; k2 < len2; k2++)
                        t = ref2[k2], results.push(t[0] + "/" + t[1] + (t.comments ? "*" : ""));
                      return results;
                    }.call(this).join(" "))), this.tokens;
                  } }, { key: "scanTokens", value: function scanTokens(block) {
                    var i, token, tokens;
                    for (tokens = this.tokens, i = 0; token = tokens[i]; )
                      i += block.call(this, token, i, tokens);
                    return true;
                  } }, { key: "detectEnd", value: function detectEnd(i, condition, action) {
                    var opts = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {}, levels, ref, ref1, token, tokens;
                    for (tokens = this.tokens, levels = 0; token = tokens[i]; ) {
                      if (0 === levels && condition.call(this, token, i))
                        return action.call(this, token, i);
                      if ((ref = token[0], 0 <= indexOf.call(EXPRESSION_START, ref)) ? levels += 1 : (ref1 = token[0], 0 <= indexOf.call(EXPRESSION_END, ref1)) && (levels -= 1), 0 > levels)
                        return opts.returnOnNegativeLevel ? void 0 : action.call(this, token, i);
                      i += 1;
                    }
                    return i - 1;
                  } }, { key: "removeLeadingNewlines", value: function removeLeadingNewlines() {
                    var i, k2, l, leadingNewlineToken, len2, len1, ref, ref1, tag;
                    for (ref = this.tokens, i = k2 = 0, len2 = ref.length; k2 < len2; i = ++k2) {
                      var _ref$i = _slicedToArray(ref[i], 1);
                      if (tag = _ref$i[0], "TERMINATOR" !== tag)
                        break;
                    }
                    if (0 !== i) {
                      for (ref1 = this.tokens.slice(0, i), l = 0, len1 = ref1.length; l < len1; l++)
                        leadingNewlineToken = ref1[l], moveComments(leadingNewlineToken, this.tokens[i]);
                      return this.tokens.splice(0, i);
                    }
                  } }, { key: "closeOpenCalls", value: function closeOpenCalls() {
                    var action, condition;
                    return condition = function(token) {
                      var ref;
                      return ")" === (ref = token[0]) || "CALL_END" === ref;
                    }, action = function(token) {
                      return token[0] = "CALL_END";
                    }, this.scanTokens(function(token, i) {
                      return "CALL_START" === token[0] && this.detectEnd(i + 1, condition, action), 1;
                    });
                  } }, { key: "closeOpenIndexes", value: function closeOpenIndexes() {
                    var action, condition, startToken;
                    return startToken = null, condition = function(token) {
                      var ref;
                      return "]" === (ref = token[0]) || "INDEX_END" === ref;
                    }, action = function(token, i) {
                      return this.tokens.length >= i && ":" === this.tokens[i + 1][0] ? (startToken[0] = "[", token[0] = "]") : token[0] = "INDEX_END";
                    }, this.scanTokens(function(token, i) {
                      return "INDEX_START" === token[0] && (startToken = token, this.detectEnd(i + 1, condition, action)), 1;
                    });
                  } }, { key: "indexOfTag", value: function indexOfTag(i) {
                    var fuzz, j, k2, ref, ref1;
                    fuzz = 0;
                    for (var _len = arguments.length, pattern = Array(1 < _len ? _len - 1 : 0), _key = 1; _key < _len; _key++)
                      pattern[_key - 1] = arguments[_key];
                    for (j = k2 = 0, ref = pattern.length; 0 <= ref ? k2 < ref : k2 > ref; j = 0 <= ref ? ++k2 : --k2)
                      if (null != pattern[j] && ("string" == typeof pattern[j] && (pattern[j] = [pattern[j]]), ref1 = this.tag(i + j + fuzz), 0 > indexOf.call(pattern[j], ref1)))
                        return -1;
                    return i + j + fuzz - 1;
                  } }, { key: "looksObjectish", value: function looksObjectish(j) {
                    var end, index;
                    return -1 !== this.indexOfTag(j, "@", null, ":") || -1 !== this.indexOfTag(j, null, ":") || (index = this.indexOfTag(j, EXPRESSION_START), !!(-1 !== index && (end = null, this.detectEnd(index + 1, function(token) {
                      var ref;
                      return ref = token[0], 0 <= indexOf.call(EXPRESSION_END, ref);
                    }, function(token, i) {
                      return end = i;
                    }), ":" === this.tag(end + 1))));
                  } }, { key: "findTagsBackwards", value: function findTagsBackwards(i, tags) {
                    var backStack, ref, ref1, ref2, ref3, ref4, ref5;
                    for (backStack = []; 0 <= i && (backStack.length || (ref2 = this.tag(i), 0 > indexOf.call(tags, ref2)) && ((ref3 = this.tag(i), 0 > indexOf.call(EXPRESSION_START, ref3)) || this.tokens[i].generated) && (ref4 = this.tag(i), 0 > indexOf.call(LINEBREAKS, ref4))); )
                      (ref = this.tag(i), 0 <= indexOf.call(EXPRESSION_END, ref)) && backStack.push(this.tag(i)), (ref1 = this.tag(i), 0 <= indexOf.call(EXPRESSION_START, ref1)) && backStack.length && backStack.pop(), i -= 1;
                    return ref5 = this.tag(i), 0 <= indexOf.call(tags, ref5);
                  } }, { key: "addImplicitBracesAndParens", value: function addImplicitBracesAndParens() {
                    var stack, start;
                    return stack = [], start = null, this.scanTokens(function(token, i, tokens) {
                      var _this = this, _token = _slicedToArray(token, 1), endImplicitCall, endImplicitObject, forward, implicitObjectContinues, implicitObjectIndent, inControlFlow, inImplicit, inImplicitCall, inImplicitControl, inImplicitObject, isImplicit, isImplicitCall, isImplicitObject, k2, newLine, nextTag, nextToken, offset, preContinuationLineIndent, preObjectToken, prevTag, prevToken, ref, ref1, ref2, ref3, s, sameLine, stackIdx, stackItem, stackTag, stackTop, startIdx, startImplicitCall, startImplicitObject, startIndex, startTag, startsLine, tag;
                      tag = _token[0];
                      var _prevToken = prevToken = 0 < i ? tokens[i - 1] : [], _prevToken2 = _slicedToArray(_prevToken, 1);
                      prevTag = _prevToken2[0];
                      var _nextToken = nextToken = i < tokens.length - 1 ? tokens[i + 1] : [], _nextToken2 = _slicedToArray(_nextToken, 1);
                      if (nextTag = _nextToken2[0], stackTop = function() {
                        return stack[stack.length - 1];
                      }, startIdx = i, forward = function(n) {
                        return i - startIdx + n;
                      }, isImplicit = function(stackItem2) {
                        var ref4;
                        return null == stackItem2 || null == (ref4 = stackItem2[2]) ? void 0 : ref4.ours;
                      }, isImplicitObject = function(stackItem2) {
                        return isImplicit(stackItem2) && "{" === (null == stackItem2 ? void 0 : stackItem2[0]);
                      }, isImplicitCall = function(stackItem2) {
                        return isImplicit(stackItem2) && "(" === (null == stackItem2 ? void 0 : stackItem2[0]);
                      }, inImplicit = function() {
                        return isImplicit(stackTop());
                      }, inImplicitCall = function() {
                        return isImplicitCall(stackTop());
                      }, inImplicitObject = function() {
                        return isImplicitObject(stackTop());
                      }, inImplicitControl = function() {
                        var ref4;
                        return inImplicit() && "CONTROL" === (null == (ref4 = stackTop()) ? void 0 : ref4[0]);
                      }, startImplicitCall = function(idx) {
                        return stack.push(["(", idx, { ours: true }]), tokens.splice(idx, 0, generate("CALL_START", "(", ["", "implicit function call", token[2]], prevToken));
                      }, endImplicitCall = function() {
                        return stack.pop(), tokens.splice(i, 0, generate("CALL_END", ")", ["", "end of input", token[2]], prevToken)), i += 1;
                      }, startImplicitObject = function(idx) {
                        var _ref3 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, _ref3$startsLine = _ref3.startsLine, continuationLineIndent = _ref3.continuationLineIndent, val;
                        return stack.push(["{", idx, { sameLine: true, startsLine: void 0 === _ref3$startsLine || _ref3$startsLine, ours: true, continuationLineIndent }]), val = new String("{"), val.generated = true, tokens.splice(idx, 0, generate("{", val, token, prevToken));
                      }, endImplicitObject = function(j) {
                        return j = null == j ? i : j, stack.pop(), tokens.splice(j, 0, generate("}", "}", token, prevToken)), i += 1;
                      }, implicitObjectContinues = function(j) {
                        var nextTerminatorIdx;
                        return nextTerminatorIdx = null, _this.detectEnd(j, function(token2) {
                          return "TERMINATOR" === token2[0];
                        }, function(token2, i2) {
                          return nextTerminatorIdx = i2;
                        }, { returnOnNegativeLevel: true }), null != nextTerminatorIdx && _this.looksObjectish(nextTerminatorIdx + 1);
                      }, (inImplicitCall() || inImplicitObject()) && 0 <= indexOf.call(CONTROL_IN_IMPLICIT, tag) || inImplicitObject() && ":" === prevTag && "FOR" === tag)
                        return stack.push(["CONTROL", i, { ours: true }]), forward(1);
                      if ("INDENT" === tag && inImplicit()) {
                        if ("=>" !== prevTag && "->" !== prevTag && "[" !== prevTag && "(" !== prevTag && "," !== prevTag && "{" !== prevTag && "ELSE" !== prevTag && "=" !== prevTag)
                          for (; inImplicitCall() || inImplicitObject() && ":" !== prevTag; )
                            inImplicitCall() ? endImplicitCall() : endImplicitObject();
                        return inImplicitControl() && stack.pop(), stack.push([tag, i]), forward(1);
                      }
                      if (0 <= indexOf.call(EXPRESSION_START, tag))
                        return stack.push([tag, i]), forward(1);
                      if (0 <= indexOf.call(EXPRESSION_END, tag)) {
                        for (; inImplicit(); )
                          inImplicitCall() ? endImplicitCall() : inImplicitObject() ? endImplicitObject() : stack.pop();
                        start = stack.pop();
                      }
                      if (inControlFlow = function() {
                        var controlFlow, isFunc, seenFor, tagCurrentLine;
                        return (seenFor = _this.findTagsBackwards(i, ["FOR"]) && _this.findTagsBackwards(i, ["FORIN", "FOROF", "FORFROM"]), controlFlow = seenFor || _this.findTagsBackwards(i, ["WHILE", "UNTIL", "LOOP", "LEADING_WHEN"]), !!controlFlow) && (isFunc = false, tagCurrentLine = token[2].first_line, _this.detectEnd(i, function(token2) {
                          var ref4;
                          return ref4 = token2[0], 0 <= indexOf.call(LINEBREAKS, ref4);
                        }, function(token2, i2) {
                          var _ref4 = tokens[i2 - 1] || [], _ref5 = _slicedToArray(_ref4, 3), first_line;
                          return prevTag = _ref5[0], first_line = _ref5[2].first_line, isFunc = tagCurrentLine === first_line && ("->" === prevTag || "=>" === prevTag);
                        }, { returnOnNegativeLevel: true }), isFunc);
                      }, (0 <= indexOf.call(IMPLICIT_FUNC, tag) && token.spaced || "?" === tag && 0 < i && !tokens[i - 1].spaced) && (0 <= indexOf.call(IMPLICIT_CALL, nextTag) || "..." === nextTag && (ref = this.tag(i + 2), 0 <= indexOf.call(IMPLICIT_CALL, ref)) && !this.findTagsBackwards(i, ["INDEX_START", "["]) || 0 <= indexOf.call(IMPLICIT_UNSPACED_CALL, nextTag) && !nextToken.spaced && !nextToken.newLine) && !inControlFlow())
                        return "?" === tag && (tag = token[0] = "FUNC_EXIST"), startImplicitCall(i + 1), forward(2);
                      if (0 <= indexOf.call(IMPLICIT_FUNC, tag) && -1 < this.indexOfTag(i + 1, "INDENT") && this.looksObjectish(i + 2) && !this.findTagsBackwards(i, ["CLASS", "EXTENDS", "IF", "CATCH", "SWITCH", "LEADING_WHEN", "FOR", "WHILE", "UNTIL"]))
                        return startImplicitCall(i + 1), stack.push(["INDENT", i + 2]), forward(3);
                      if (":" === tag) {
                        if (s = function() {
                          var ref12;
                          switch (false) {
                            case (ref12 = this.tag(i - 1), 0 > indexOf.call(EXPRESSION_END, ref12)):
                              var _start = start, _start2 = _slicedToArray(_start, 2);
                              return startTag = _start2[0], startIndex = _start2[1], "[" === startTag && 0 < startIndex && "@" === this.tag(startIndex - 1) && !tokens[startIndex - 1].spaced ? startIndex - 1 : startIndex;
                              break;
                            case "@" !== this.tag(i - 2):
                              return i - 2;
                            default:
                              return i - 1;
                          }
                        }.call(this), startsLine = 0 >= s || (ref1 = this.tag(s - 1), 0 <= indexOf.call(LINEBREAKS, ref1)) || tokens[s - 1].newLine, stackTop()) {
                          var _stackTop = stackTop(), _stackTop2 = _slicedToArray(_stackTop, 2);
                          if (stackTag = _stackTop2[0], stackIdx = _stackTop2[1], ("{" === stackTag || "INDENT" === stackTag && "{" === this.tag(stackIdx - 1)) && (startsLine || "," === this.tag(s - 1) || "{" === this.tag(s - 1)) && (ref2 = this.tag(s - 1), 0 > indexOf.call(UNFINISHED, ref2)))
                            return forward(1);
                        }
                        return preObjectToken = 1 < i ? tokens[i - 2] : [], startImplicitObject(s, { startsLine: !!startsLine, continuationLineIndent: preObjectToken.continuationLineIndent }), forward(2);
                      }
                      if (0 <= indexOf.call(LINEBREAKS, tag))
                        for (k2 = stack.length - 1; 0 <= k2 && (stackItem = stack[k2], !!isImplicit(stackItem)); k2 += -1)
                          isImplicitObject(stackItem) && (stackItem[2].sameLine = false);
                      if ("TERMINATOR" === tag && token.endsContinuationLineIndentation)
                        for (preContinuationLineIndent = token.endsContinuationLineIndentation.preContinuationLineIndent; inImplicitObject() && null != (implicitObjectIndent = stackTop()[2].continuationLineIndent) && implicitObjectIndent > preContinuationLineIndent; )
                          endImplicitObject();
                      if (newLine = "OUTDENT" === prevTag || prevToken.newLine, 0 <= indexOf.call(IMPLICIT_END, tag) || 0 <= indexOf.call(CALL_CLOSERS, tag) && newLine || (".." === tag || "..." === tag) && this.findTagsBackwards(i, ["INDEX_START"]))
                        for (; inImplicit(); ) {
                          var _stackTop3 = stackTop(), _stackTop4 = _slicedToArray(_stackTop3, 3);
                          stackTag = _stackTop4[0], stackIdx = _stackTop4[1];
                          var _stackTop4$ = _stackTop4[2];
                          if (sameLine = _stackTop4$.sameLine, startsLine = _stackTop4$.startsLine, inImplicitCall() && "," !== prevTag || "," === prevTag && "TERMINATOR" === tag && null == nextTag)
                            endImplicitCall();
                          else if (inImplicitObject() && sameLine && "TERMINATOR" !== tag && ":" !== prevTag && !(("POST_IF" === tag || "FOR" === tag || "WHILE" === tag || "UNTIL" === tag) && startsLine && implicitObjectContinues(i + 1)))
                            endImplicitObject();
                          else if (inImplicitObject() && "TERMINATOR" === tag && "," !== prevTag && !(startsLine && this.looksObjectish(i + 1)))
                            endImplicitObject();
                          else if (inImplicitControl() && "CLASS" === tokens[stackTop()[1]][0] && "TERMINATOR" === tag)
                            stack.pop();
                          else
                            break;
                        }
                      if ("," === tag && !this.looksObjectish(i + 1) && inImplicitObject() && "FOROF" !== (ref3 = this.tag(i + 2)) && "FORIN" !== ref3 && ("TERMINATOR" !== nextTag || !this.looksObjectish(i + 2)))
                        for (offset = "OUTDENT" === nextTag ? 1 : 0; inImplicitObject(); )
                          endImplicitObject(i + offset);
                      return forward(1);
                    });
                  } }, { key: "enforceValidJSXAttributes", value: function enforceValidJSXAttributes() {
                    return this.scanTokens(function(token, i, tokens) {
                      var next, ref;
                      return token.jsxColon && (next = tokens[i + 1], "STRING_START" !== (ref = next[0]) && "STRING" !== ref && "(" !== ref && throwSyntaxError("expected wrapped or quoted JSX attribute", next[2])), 1;
                    });
                  } }, { key: "rescueStowawayComments", value: function rescueStowawayComments() {
                    var dontShiftForward, insertPlaceholder, shiftCommentsBackward, shiftCommentsForward;
                    return insertPlaceholder = function(token, j, tokens, method) {
                      return "TERMINATOR" !== tokens[j][0] && tokens[method](generate("TERMINATOR", "\n", tokens[j])), tokens[method](generate("JS", "", tokens[j], token));
                    }, dontShiftForward = function(i, tokens) {
                      var j, ref;
                      for (j = i + 1; j !== tokens.length && (ref = tokens[j][0], 0 <= indexOf.call(DISCARDED, ref)); ) {
                        if ("INTERPOLATION_END" === tokens[j][0])
                          return true;
                        j++;
                      }
                      return false;
                    }, shiftCommentsForward = function(token, i, tokens) {
                      var comment, j, k2, len2, ref, ref1, ref2;
                      for (j = i; j !== tokens.length && (ref = tokens[j][0], 0 <= indexOf.call(DISCARDED, ref)); )
                        j++;
                      if (!(j === tokens.length || (ref1 = tokens[j][0], 0 <= indexOf.call(DISCARDED, ref1)))) {
                        for (ref2 = token.comments, k2 = 0, len2 = ref2.length; k2 < len2; k2++)
                          comment = ref2[k2], comment.unshift = true;
                        return moveComments(token, tokens[j]), 1;
                      }
                      return j = tokens.length - 1, insertPlaceholder(token, j, tokens, "push"), 1;
                    }, shiftCommentsBackward = function(token, i, tokens) {
                      var j, ref, ref1;
                      for (j = i; -1 !== j && (ref = tokens[j][0], 0 <= indexOf.call(DISCARDED, ref)); )
                        j--;
                      return -1 === j || (ref1 = tokens[j][0], 0 <= indexOf.call(DISCARDED, ref1)) ? (insertPlaceholder(token, 0, tokens, "unshift"), 3) : (moveComments(token, tokens[j]), 1);
                    }, this.scanTokens(function(token, i, tokens) {
                      var dummyToken, j, ref, ref1, ret;
                      if (!token.comments)
                        return 1;
                      if (ret = 1, ref = token[0], 0 <= indexOf.call(DISCARDED, ref)) {
                        for (dummyToken = { comments: [] }, j = token.comments.length - 1; -1 !== j; )
                          false === token.comments[j].newLine && false === token.comments[j].here && (dummyToken.comments.unshift(token.comments[j]), token.comments.splice(j, 1)), j--;
                        0 !== dummyToken.comments.length && (ret = shiftCommentsBackward(dummyToken, i - 1, tokens)), 0 !== token.comments.length && shiftCommentsForward(token, i, tokens);
                      } else if (!dontShiftForward(i, tokens)) {
                        for (dummyToken = { comments: [] }, j = token.comments.length - 1; -1 !== j; )
                          !token.comments[j].newLine || token.comments[j].unshift || "JS" === token[0] && token.generated || (dummyToken.comments.unshift(token.comments[j]), token.comments.splice(j, 1)), j--;
                        0 !== dummyToken.comments.length && (ret = shiftCommentsForward(dummyToken, i + 1, tokens));
                      }
                      return 0 === (null == (ref1 = token.comments) ? void 0 : ref1.length) && delete token.comments, ret;
                    });
                  } }, { key: "addLocationDataToGeneratedTokens", value: function addLocationDataToGeneratedTokens() {
                    return this.scanTokens(function(token, i, tokens) {
                      var column, line, nextLocation, prevLocation, rangeIndex, ref, ref1;
                      if (token[2])
                        return 1;
                      if (!(token.generated || token.explicit))
                        return 1;
                      if (token.fromThen && "INDENT" === token[0])
                        return token[2] = token.origin[2], 1;
                      if ("{" === token[0] && (nextLocation = null == (ref = tokens[i + 1]) ? void 0 : ref[2])) {
                        var _nextLocation = nextLocation;
                        line = _nextLocation.first_line, column = _nextLocation.first_column;
                        var _nextLocation$range = _slicedToArray(_nextLocation.range, 1);
                        rangeIndex = _nextLocation$range[0];
                      } else if (prevLocation = null == (ref1 = tokens[i - 1]) ? void 0 : ref1[2]) {
                        var _prevLocation = prevLocation;
                        line = _prevLocation.last_line, column = _prevLocation.last_column;
                        var _prevLocation$range = _slicedToArray(_prevLocation.range, 2);
                        rangeIndex = _prevLocation$range[1], column += 1;
                      } else
                        line = column = 0, rangeIndex = 0;
                      return token[2] = { first_line: line, first_column: column, last_line: line, last_column: column, last_line_exclusive: line, last_column_exclusive: column, range: [rangeIndex, rangeIndex] }, 1;
                    });
                  } }, { key: "fixIndentationLocationData", value: function fixIndentationLocationData() {
                    var _this2 = this, findPrecedingComment;
                    return null == this.allComments && (this.allComments = extractAllCommentTokens(this.tokens)), findPrecedingComment = function(token, _ref6) {
                      var afterPosition = _ref6.afterPosition, indentSize = _ref6.indentSize, first = _ref6.first, indented = _ref6.indented, comment, k2, l, lastMatching, matches, ref, ref1, tokenStart;
                      if (tokenStart = token[2].range[0], matches = function(comment2) {
                        return (!comment2.outdented || null != indentSize && comment2.indentSize > indentSize) && (!indented || comment2.indented) && !!(comment2.locationData.range[0] < tokenStart) && !!(comment2.locationData.range[0] > afterPosition);
                      }, first) {
                        for (lastMatching = null, ref = _this2.allComments, k2 = ref.length - 1; 0 <= k2; k2 += -1)
                          if (comment = ref[k2], matches(comment))
                            lastMatching = comment;
                          else if (lastMatching)
                            return lastMatching;
                        return lastMatching;
                      }
                      for (ref1 = _this2.allComments, l = ref1.length - 1; 0 <= l; l += -1)
                        if (comment = ref1[l], matches(comment))
                          return comment;
                      return null;
                    }, this.scanTokens(function(token, i, tokens) {
                      var isIndent, nextToken, nextTokenIndex, precedingComment, prevLocationData, prevToken, ref, ref1, ref2, useNextToken;
                      if ("INDENT" !== (ref = token[0]) && "OUTDENT" !== ref && (!token.generated || "CALL_END" !== token[0] || null != (ref1 = token.data) && ref1.closingTagNameToken) && (!token.generated || "}" !== token[0]))
                        return 1;
                      if (isIndent = "INDENT" === token[0], prevToken = null == (ref2 = token.prevToken) ? tokens[i - 1] : ref2, prevLocationData = prevToken[2], useNextToken = token.explicit || token.generated, useNextToken)
                        for (nextToken = token, nextTokenIndex = i; (nextToken.explicit || nextToken.generated) && nextTokenIndex !== tokens.length - 1; )
                          nextToken = tokens[nextTokenIndex++];
                      return (precedingComment = findPrecedingComment(useNextToken ? nextToken : token, { afterPosition: prevLocationData.range[0], indentSize: token.indentSize, first: isIndent, indented: useNextToken }), isIndent && (null == precedingComment || !precedingComment.newLine)) ? 1 : token.generated && "CALL_END" === token[0] && (null == precedingComment ? void 0 : precedingComment.indented) ? 1 : (null != precedingComment && (prevLocationData = precedingComment.locationData), token[2] = { first_line: null == precedingComment ? prevLocationData.last_line : prevLocationData.first_line, first_column: null == precedingComment ? prevLocationData.last_column : isIndent ? 0 : prevLocationData.first_column, last_line: prevLocationData.last_line, last_column: prevLocationData.last_column, last_line_exclusive: prevLocationData.last_line_exclusive, last_column_exclusive: prevLocationData.last_column_exclusive, range: isIndent && null != precedingComment ? [prevLocationData.range[0] - precedingComment.indentSize, prevLocationData.range[1]] : prevLocationData.range }, 1);
                    });
                  } }, { key: "normalizeLines", value: function normalizeLines() {
                    var _this3 = this, action, closeElseTag, condition, ifThens, indent, leading_if_then, leading_switch_when, outdent, starter;
                    return starter = indent = outdent = null, leading_switch_when = null, leading_if_then = null, ifThens = [], condition = function(token, i) {
                      var ref, ref1, ref2, ref3;
                      return ";" !== token[1] && (ref = token[0], 0 <= indexOf.call(SINGLE_CLOSERS, ref)) && !("TERMINATOR" === token[0] && (ref1 = this.tag(i + 1), 0 <= indexOf.call(EXPRESSION_CLOSE, ref1))) && !("ELSE" === token[0] && ("THEN" !== starter || leading_if_then || leading_switch_when)) && ("CATCH" !== (ref2 = token[0]) && "FINALLY" !== ref2 || "->" !== starter && "=>" !== starter) || (ref3 = token[0], 0 <= indexOf.call(CALL_CLOSERS, ref3)) && (this.tokens[i - 1].newLine || "OUTDENT" === this.tokens[i - 1][0]);
                    }, action = function(token, i) {
                      return "ELSE" === token[0] && "THEN" === starter && ifThens.pop(), this.tokens.splice("," === this.tag(i - 1) ? i - 1 : i, 0, outdent);
                    }, closeElseTag = function(tokens, i) {
                      var lastThen, outdentElse, tlen;
                      if (tlen = ifThens.length, !(0 < tlen))
                        return i;
                      lastThen = ifThens.pop();
                      var _this3$indentation = _this3.indentation(tokens[lastThen]), _this3$indentation2 = _slicedToArray(_this3$indentation, 2);
                      return outdentElse = _this3$indentation2[1], outdentElse[1] = 2 * tlen, tokens.splice(i, 0, outdentElse), outdentElse[1] = 2, tokens.splice(i + 1, 0, outdentElse), _this3.detectEnd(i + 2, function(token) {
                        var ref;
                        return "OUTDENT" === (ref = token[0]) || "TERMINATOR" === ref;
                      }, function(token, i2) {
                        if ("OUTDENT" === this.tag(i2) && "OUTDENT" === this.tag(i2 + 1))
                          return tokens.splice(i2, 2);
                      }), i + 2;
                    }, this.scanTokens(function(token, i, tokens) {
                      var _token2 = _slicedToArray(token, 1), conditionTag, j, k2, ref, ref1, ref2, tag;
                      if (tag = _token2[0], conditionTag = ("->" === tag || "=>" === tag) && this.findTagsBackwards(i, ["IF", "WHILE", "FOR", "UNTIL", "SWITCH", "WHEN", "LEADING_WHEN", "[", "INDEX_START"]) && !this.findTagsBackwards(i, ["THEN", "..", "..."]), "TERMINATOR" === tag) {
                        if ("ELSE" === this.tag(i + 1) && "OUTDENT" !== this.tag(i - 1))
                          return tokens.splice.apply(tokens, [i, 1].concat(_toConsumableArray(this.indentation()))), 1;
                        if (ref = this.tag(i + 1), 0 <= indexOf.call(EXPRESSION_CLOSE, ref))
                          return ";" === token[1] && "OUTDENT" === this.tag(i + 1) && (tokens[i + 1].prevToken = token, moveComments(token, tokens[i + 1])), tokens.splice(i, 1), 0;
                      }
                      if ("CATCH" === tag) {
                        for (j = k2 = 1; 2 >= k2; j = ++k2)
                          if ("OUTDENT" === (ref1 = this.tag(i + j)) || "TERMINATOR" === ref1 || "FINALLY" === ref1)
                            return tokens.splice.apply(tokens, [i + j, 0].concat(_toConsumableArray(this.indentation()))), 2 + j;
                      }
                      if (("->" === tag || "=>" === tag) && ("," === (ref2 = this.tag(i + 1)) || "]" === ref2 || "." === this.tag(i + 1) && token.newLine)) {
                        var _this$indentation = this.indentation(tokens[i]), _this$indentation2 = _slicedToArray(_this$indentation, 2);
                        return indent = _this$indentation2[0], outdent = _this$indentation2[1], tokens.splice(i + 1, 0, indent, outdent), 1;
                      }
                      if (0 <= indexOf.call(SINGLE_LINERS, tag) && "INDENT" !== this.tag(i + 1) && ("ELSE" !== tag || "IF" !== this.tag(i + 1)) && !conditionTag) {
                        starter = tag;
                        var _this$indentation3 = this.indentation(tokens[i]), _this$indentation4 = _slicedToArray(_this$indentation3, 2);
                        return indent = _this$indentation4[0], outdent = _this$indentation4[1], "THEN" === starter && (indent.fromThen = true), "THEN" === tag && (leading_switch_when = this.findTagsBackwards(i, ["LEADING_WHEN"]) && "IF" === this.tag(i + 1), leading_if_then = this.findTagsBackwards(i, ["IF"]) && "IF" === this.tag(i + 1)), "THEN" === tag && this.findTagsBackwards(i, ["IF"]) && ifThens.push(i), "ELSE" === tag && "OUTDENT" !== this.tag(i - 1) && (i = closeElseTag(tokens, i)), tokens.splice(i + 1, 0, indent), this.detectEnd(i + 2, condition, action), "THEN" === tag && tokens.splice(i, 1), 1;
                      }
                      return 1;
                    });
                  } }, { key: "tagPostfixConditionals", value: function tagPostfixConditionals() {
                    var action, condition, original;
                    return original = null, condition = function(token, i) {
                      var _token3 = _slicedToArray(token, 1), prevTag, tag;
                      tag = _token3[0];
                      var _this$tokens = _slicedToArray(this.tokens[i - 1], 1);
                      return prevTag = _this$tokens[0], "TERMINATOR" === tag || "INDENT" === tag && 0 > indexOf.call(SINGLE_LINERS, prevTag);
                    }, action = function(token) {
                      if ("INDENT" !== token[0] || token.generated && !token.fromThen)
                        return original[0] = "POST_" + original[0];
                    }, this.scanTokens(function(token, i) {
                      return "IF" === token[0] ? (original = token, this.detectEnd(i + 1, condition, action), 1) : 1;
                    });
                  } }, { key: "exposeTokenDataToGrammar", value: function exposeTokenDataToGrammar() {
                    return this.scanTokens(function(token) {
                      var key, ref, ref1, val;
                      if (token.generated || token.data && 0 !== Object.keys(token.data).length) {
                        for (key in token[1] = new String(token[1]), ref1 = null == (ref = token.data) ? {} : ref, ref1)
                          hasProp.call(ref1, key) && (val = ref1[key], token[1][key] = val);
                        token.generated && (token[1].generated = true);
                      }
                      return 1;
                    });
                  } }, { key: "indentation", value: function indentation(origin) {
                    var indent, outdent;
                    return indent = ["INDENT", 2], outdent = ["OUTDENT", 2], origin ? (indent.generated = outdent.generated = true, indent.origin = outdent.origin = origin) : indent.explicit = outdent.explicit = true, [indent, outdent];
                  } }, { key: "tag", value: function tag(i) {
                    var ref;
                    return null == (ref = this.tokens[i]) ? void 0 : ref[0];
                  } }]), Rewriter3;
                }();
                return Rewriter2.prototype.generate = generate, Rewriter2;
              }.call(this), BALANCED_PAIRS = [["(", ")"], ["[", "]"], ["{", "}"], ["INDENT", "OUTDENT"], ["CALL_START", "CALL_END"], ["PARAM_START", "PARAM_END"], ["INDEX_START", "INDEX_END"], ["STRING_START", "STRING_END"], ["INTERPOLATION_START", "INTERPOLATION_END"], ["REGEX_START", "REGEX_END"]], exports2.INVERSES = INVERSES = {}, EXPRESSION_START = [], EXPRESSION_END = [], k = 0, len = BALANCED_PAIRS.length; k < len; k++) {
                var _BALANCED_PAIRS$k = _slicedToArray(BALANCED_PAIRS[k], 2);
                left = _BALANCED_PAIRS$k[0], right = _BALANCED_PAIRS$k[1], EXPRESSION_START.push(INVERSES[right] = left), EXPRESSION_END.push(INVERSES[left] = right);
              }
              EXPRESSION_CLOSE = ["CATCH", "THEN", "ELSE", "FINALLY"].concat(EXPRESSION_END), IMPLICIT_FUNC = ["IDENTIFIER", "PROPERTY", "SUPER", ")", "CALL_END", "]", "INDEX_END", "@", "THIS"], IMPLICIT_CALL = ["IDENTIFIER", "JSX_TAG", "PROPERTY", "NUMBER", "INFINITY", "NAN", "STRING", "STRING_START", "REGEX", "REGEX_START", "JS", "NEW", "PARAM_START", "CLASS", "IF", "TRY", "SWITCH", "THIS", "UNDEFINED", "NULL", "BOOL", "UNARY", "DO", "DO_IIFE", "YIELD", "AWAIT", "UNARY_MATH", "SUPER", "THROW", "@", "->", "=>", "[", "(", "{", "--", "++"], IMPLICIT_UNSPACED_CALL = ["+", "-"], IMPLICIT_END = ["POST_IF", "FOR", "WHILE", "UNTIL", "WHEN", "BY", "LOOP", "TERMINATOR"], SINGLE_LINERS = ["ELSE", "->", "=>", "TRY", "FINALLY", "THEN"], SINGLE_CLOSERS = ["TERMINATOR", "CATCH", "FINALLY", "ELSE", "OUTDENT", "LEADING_WHEN"], LINEBREAKS = ["TERMINATOR", "INDENT", "OUTDENT"], CALL_CLOSERS = [".", "?.", "::", "?::"], CONTROL_IN_IMPLICIT = ["IF", "TRY", "FINALLY", "CATCH", "CLASS", "SWITCH"], DISCARDED = ["(", ")", "[", "]", "{", "}", ":", ".", "..", "...", ",", "=", "++", "--", "?", "AS", "AWAIT", "CALL_START", "CALL_END", "DEFAULT", "DO", "DO_IIFE", "ELSE", "EXTENDS", "EXPORT", "FORIN", "FOROF", "FORFROM", "IMPORT", "INDENT", "INDEX_SOAK", "INTERPOLATION_START", "INTERPOLATION_END", "LEADING_WHEN", "OUTDENT", "PARAM_END", "REGEX_START", "REGEX_END", "RETURN", "STRING_END", "THROW", "UNARY", "YIELD"].concat(IMPLICIT_UNSPACED_CALL.concat(IMPLICIT_END.concat(CALL_CLOSERS.concat(CONTROL_IN_IMPLICIT)))), exports2.UNFINISHED = UNFINISHED = ["\\", ".", "?.", "?::", "UNARY", "DO", "DO_IIFE", "MATH", "UNARY_MATH", "+", "-", "**", "SHIFT", "RELATION", "COMPARE", "&", "^", "|", "&&", "||", "BIN?", "EXTENDS"];
            }.call(this), { exports: exports2 }.exports;
          }(), require2["./lexer"] = function() {
            var exports2 = {};
            return function() {
              var indexOf = [].indexOf, slice = [].slice, _require2 = require2("./rewriter"), BOM, BOOL, CALLABLE, CODE, COFFEE_ALIASES, COFFEE_ALIAS_MAP, COFFEE_KEYWORDS, COMMENT, COMPARABLE_LEFT_SIDE, COMPARE, COMPOUND_ASSIGN, HERECOMMENT_ILLEGAL, HEREDOC_DOUBLE, HEREDOC_INDENT, HEREDOC_SINGLE, HEREGEX, HEREGEX_COMMENT, HERE_JSTOKEN, IDENTIFIER, INDENTABLE_CLOSERS, INDEXABLE, INSIDE_JSX, INVERSES, JSTOKEN, JSX_ATTRIBUTE, JSX_FRAGMENT_IDENTIFIER, JSX_IDENTIFIER, JSX_IDENTIFIER_PART, JSX_INTERPOLATION, JS_KEYWORDS, LINE_BREAK, LINE_CONTINUER, Lexer, MATH, MULTI_DENT, NOT_REGEX, NUMBER, OPERATOR, POSSIBLY_DIVISION, REGEX, REGEX_FLAGS, REGEX_ILLEGAL, REGEX_INVALID_ESCAPE, RELATION, RESERVED, Rewriter, SHIFT, STRICT_PROSCRIBED, STRING_DOUBLE, STRING_INVALID_ESCAPE, STRING_SINGLE, STRING_START, TRAILING_SPACES, UNARY, UNARY_MATH, UNFINISHED, VALID_FLAGS, WHITESPACE, addTokenData, attachCommentsToNode, compact, count, flatten, invertLiterate, isForFrom, isUnassignable, key, locationDataToString, merge, parseNumber, repeat, replaceUnicodeCodePointEscapes, starts, throwSyntaxError;
              Rewriter = _require2.Rewriter, INVERSES = _require2.INVERSES, UNFINISHED = _require2.UNFINISHED;
              var _require3 = require2("./helpers");
              count = _require3.count, starts = _require3.starts, compact = _require3.compact, repeat = _require3.repeat, invertLiterate = _require3.invertLiterate, merge = _require3.merge, attachCommentsToNode = _require3.attachCommentsToNode, locationDataToString = _require3.locationDataToString, throwSyntaxError = _require3.throwSyntaxError, replaceUnicodeCodePointEscapes = _require3.replaceUnicodeCodePointEscapes, flatten = _require3.flatten, parseNumber = _require3.parseNumber, exports2.Lexer = Lexer = function() {
                "use strict";
                function Lexer2() {
                  _classCallCheck(this, Lexer2), this.error = this.error.bind(this);
                }
                return _createClass(Lexer2, [{ key: "tokenize", value: function tokenize(code) {
                  var opts = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, consumed, end, i, ref;
                  for (this.literate = opts.literate, this.indent = 0, this.baseIndent = 0, this.continuationLineAdditionalIndent = 0, this.outdebt = 0, this.indents = [], this.indentLiteral = "", this.ends = [], this.tokens = [], this.seenFor = false, this.seenImport = false, this.seenExport = false, this.importSpecifierList = false, this.exportSpecifierList = false, this.jsxDepth = 0, this.jsxObjAttribute = {}, this.chunkLine = opts.line || 0, this.chunkColumn = opts.column || 0, this.chunkOffset = opts.offset || 0, this.locationDataCompensations = opts.locationDataCompensations || {}, code = this.clean(code), i = 0; this.chunk = code.slice(i); ) {
                    consumed = this.identifierToken() || this.commentToken() || this.whitespaceToken() || this.lineToken() || this.stringToken() || this.numberToken() || this.jsxToken() || this.regexToken() || this.jsToken() || this.literalToken();
                    var _this$getLineAndColum = this.getLineAndColumnFromChunk(consumed), _this$getLineAndColum2 = _slicedToArray(_this$getLineAndColum, 3);
                    if (this.chunkLine = _this$getLineAndColum2[0], this.chunkColumn = _this$getLineAndColum2[1], this.chunkOffset = _this$getLineAndColum2[2], i += consumed, opts.untilBalanced && 0 === this.ends.length)
                      return { tokens: this.tokens, index: i };
                  }
                  return this.closeIndentation(), (end = this.ends.pop()) && this.error("missing ".concat(end.tag), (null == (ref = end.origin) ? end : ref)[2]), false === opts.rewrite ? this.tokens : new Rewriter().rewrite(this.tokens);
                } }, { key: "clean", value: function clean(code) {
                  var _this4 = this, base, thusFar;
                  return thusFar = 0, code.charCodeAt(0) === BOM && (code = code.slice(1), this.locationDataCompensations[0] = 1, thusFar += 1), WHITESPACE.test(code) && (code = "\n".concat(code), this.chunkLine--, null == (base = this.locationDataCompensations)[0] && (base[0] = 0), this.locationDataCompensations[0] -= 1), code = code.replace(/\r/g, function(match, offset) {
                    return _this4.locationDataCompensations[thusFar + offset] = 1, "";
                  }).replace(TRAILING_SPACES, ""), this.literate && (code = invertLiterate(code)), code;
                } }, { key: "identifierToken", value: function identifierToken() {
                  var alias, colon, colonOffset, colonToken, id, idLength, inJSXTag, input, match, poppedToken, prev, prevprev, ref, ref1, ref10, ref11, ref12, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, regExSuper, regex, sup, tag, tagToken, tokenData;
                  if (inJSXTag = this.atJSXTag(), regex = inJSXTag ? JSX_ATTRIBUTE : IDENTIFIER, !(match = regex.exec(this.chunk)))
                    return 0;
                  var _match = match, _match2 = _slicedToArray(_match, 3);
                  if (input = _match2[0], id = _match2[1], colon = _match2[2], idLength = id.length, poppedToken = void 0, "own" === id && "FOR" === this.tag())
                    return this.token("OWN", id), id.length;
                  if ("from" === id && "YIELD" === this.tag())
                    return this.token("FROM", id), id.length;
                  if ("as" === id && this.seenImport) {
                    if ("*" === this.value())
                      this.tokens[this.tokens.length - 1][0] = "IMPORT_ALL";
                    else if (ref = this.value(true), 0 <= indexOf.call(COFFEE_KEYWORDS, ref)) {
                      prev = this.prev();
                      var _ref7 = ["IDENTIFIER", this.value(true)];
                      prev[0] = _ref7[0], prev[1] = _ref7[1];
                    }
                    if ("DEFAULT" === (ref1 = this.tag()) || "IMPORT_ALL" === ref1 || "IDENTIFIER" === ref1)
                      return this.token("AS", id), id.length;
                  }
                  if ("as" === id && this.seenExport) {
                    if ("IDENTIFIER" === (ref2 = this.tag()) || "DEFAULT" === ref2)
                      return this.token("AS", id), id.length;
                    if (ref3 = this.value(true), 0 <= indexOf.call(COFFEE_KEYWORDS, ref3)) {
                      prev = this.prev();
                      var _ref8 = ["IDENTIFIER", this.value(true)];
                      return prev[0] = _ref8[0], prev[1] = _ref8[1], this.token("AS", id), id.length;
                    }
                  }
                  if ("default" === id && this.seenExport && ("EXPORT" === (ref4 = this.tag()) || "AS" === ref4))
                    return this.token("DEFAULT", id), id.length;
                  if ("do" === id && (regExSuper = /^(\s*super)(?!\(\))/.exec(this.chunk.slice(3)))) {
                    this.token("SUPER", "super"), this.token("CALL_START", "("), this.token("CALL_END", ")");
                    var _regExSuper = regExSuper, _regExSuper2 = _slicedToArray(_regExSuper, 2);
                    return input = _regExSuper2[0], sup = _regExSuper2[1], sup.length + 3;
                  }
                  if (prev = this.prev(), tag = colon || null != prev && ("." === (ref5 = prev[0]) || "?." === ref5 || "::" === ref5 || "?::" === ref5 || !prev.spaced && "@" === prev[0]) ? "PROPERTY" : "IDENTIFIER", tokenData = {}, "IDENTIFIER" === tag && (0 <= indexOf.call(JS_KEYWORDS, id) || 0 <= indexOf.call(COFFEE_KEYWORDS, id)) && !(this.exportSpecifierList && 0 <= indexOf.call(COFFEE_KEYWORDS, id)) ? (tag = id.toUpperCase(), "WHEN" === tag && (ref6 = this.tag(), 0 <= indexOf.call(LINE_BREAK, ref6)) ? tag = "LEADING_WHEN" : "FOR" === tag ? this.seenFor = { endsLength: this.ends.length } : "UNLESS" === tag ? tag = "IF" : "IMPORT" === tag ? this.seenImport = true : "EXPORT" === tag ? this.seenExport = true : 0 <= indexOf.call(UNARY, tag) ? tag = "UNARY" : 0 <= indexOf.call(RELATION, tag) && ("INSTANCEOF" !== tag && this.seenFor ? (tag = "FOR" + tag, this.seenFor = false) : (tag = "RELATION", "!" === this.value() && (poppedToken = this.tokens.pop(), tokenData.invert = null == (ref7 = null == (ref8 = poppedToken.data) ? void 0 : ref8.original) ? poppedToken[1] : ref7)))) : "IDENTIFIER" === tag && this.seenFor && "from" === id && isForFrom(prev) ? (tag = "FORFROM", this.seenFor = false) : "PROPERTY" === tag && prev && (prev.spaced && (ref9 = prev[0], 0 <= indexOf.call(CALLABLE, ref9)) && /^[gs]et$/.test(prev[1]) && 1 < this.tokens.length && "." !== (ref10 = this.tokens[this.tokens.length - 2][0]) && "?." !== ref10 && "@" !== ref10 ? this.error("'".concat(prev[1], "' cannot be used as a keyword, or as a function call without parentheses"), prev[2]) : "." === prev[0] && 1 < this.tokens.length && "UNARY" === (prevprev = this.tokens[this.tokens.length - 2])[0] && "new" === prevprev[1] ? prevprev[0] = "NEW_TARGET" : 2 < this.tokens.length && (prevprev = this.tokens[this.tokens.length - 2], ("@" === (ref11 = prev[0]) || "THIS" === ref11) && prevprev && prevprev.spaced && /^[gs]et$/.test(prevprev[1]) && "." !== (ref12 = this.tokens[this.tokens.length - 3][0]) && "?." !== ref12 && "@" !== ref12 && this.error("'".concat(prevprev[1], "' cannot be used as a keyword, or as a function call without parentheses"), prevprev[2]))), "IDENTIFIER" === tag && 0 <= indexOf.call(RESERVED, id) && !inJSXTag && this.error("reserved word '".concat(id, "'"), { length: id.length }), "PROPERTY" === tag || this.exportSpecifierList || this.importSpecifierList || (0 <= indexOf.call(COFFEE_ALIASES, id) && (alias = id, id = COFFEE_ALIAS_MAP[id], tokenData.original = alias), tag = function() {
                    return "!" === id ? "UNARY" : "==" === id || "!=" === id ? "COMPARE" : "true" === id || "false" === id ? "BOOL" : "break" === id || "continue" === id || "debugger" === id ? "STATEMENT" : "&&" === id || "||" === id ? id : tag;
                  }()), tagToken = this.token(tag, id, { length: idLength, data: tokenData }), alias && (tagToken.origin = [tag, alias, tagToken[2]]), poppedToken) {
                    var _ref9 = [poppedToken[2].first_line, poppedToken[2].first_column, poppedToken[2].range[0]];
                    tagToken[2].first_line = _ref9[0], tagToken[2].first_column = _ref9[1], tagToken[2].range[0] = _ref9[2];
                  }
                  return colon && (colonOffset = input.lastIndexOf(inJSXTag ? "=" : ":"), colonToken = this.token(":", ":", { offset: colonOffset }), inJSXTag && (colonToken.jsxColon = true)), inJSXTag && "IDENTIFIER" === tag && ":" !== prev[0] && this.token(",", ",", { length: 0, origin: tagToken, generated: true }), input.length;
                } }, { key: "numberToken", value: function numberToken() {
                  var lexedLength, match, number, parsedValue, tag, tokenData;
                  if (!(match = NUMBER.exec(this.chunk)))
                    return 0;
                  switch (number = match[0], lexedLength = number.length, false) {
                    case !/^0[BOX]/.test(number):
                      this.error("radix prefix in '".concat(number, "' must be lowercase"), { offset: 1 });
                      break;
                    case !/^(?!0x).*E/.test(number):
                      this.error("exponential notation in '".concat(number, "' must be indicated with a lowercase 'e'"), { offset: number.indexOf("E") });
                      break;
                    case !/^0\d*[89]/.test(number):
                      this.error("decimal literal '".concat(number, "' must not be prefixed with '0'"), { length: lexedLength });
                      break;
                    case !/^0\d+/.test(number):
                      this.error("octal literal '".concat(number, "' must be prefixed with '0o'"), { length: lexedLength });
                  }
                  return parsedValue = parseNumber(number), tokenData = { parsedValue }, tag = Infinity === parsedValue ? "INFINITY" : "NUMBER", "INFINITY" === tag && (tokenData.original = number), this.token(tag, number, { length: lexedLength, data: tokenData }), lexedLength;
                } }, { key: "stringToken", value: function stringToken() {
                  var _this5 = this, _ref10 = STRING_START.exec(this.chunk) || [], _ref11 = _slicedToArray(_ref10, 1), attempt, delimiter, doc, end, heredoc, i, indent, match, prev, quote, ref, regex, token, tokens;
                  if (quote = _ref11[0], !quote)
                    return 0;
                  prev = this.prev(), prev && "from" === this.value() && (this.seenImport || this.seenExport) && (prev[0] = "FROM"), regex = function() {
                    return "'" === quote ? STRING_SINGLE : '"' === quote ? STRING_DOUBLE : "'''" === quote ? HEREDOC_SINGLE : '"""' === quote ? HEREDOC_DOUBLE : void 0;
                  }();
                  var _this$matchWithInterp = this.matchWithInterpolations(regex, quote);
                  if (tokens = _this$matchWithInterp.tokens, end = _this$matchWithInterp.index, heredoc = 3 === quote.length, heredoc)
                    for (indent = null, doc = function() {
                      var j, len, results;
                      for (results = [], i = j = 0, len = tokens.length; j < len; i = ++j)
                        token = tokens[i], "NEOSTRING" === token[0] && results.push(token[1]);
                      return results;
                    }().join("#{}"); match = HEREDOC_INDENT.exec(doc); )
                      attempt = match[1], (null === indent || 0 < (ref = attempt.length) && ref < indent.length) && (indent = attempt);
                  return delimiter = quote.charAt(0), this.mergeInterpolationTokens(tokens, { quote, indent, endOffset: end }, function(value) {
                    return _this5.validateUnicodeCodePointEscapes(value, { delimiter: quote });
                  }), this.atJSXTag() && this.token(",", ",", { length: 0, origin: this.prev, generated: true }), end;
                } }, { key: "commentToken", value: function commentToken() {
                  var chunk = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.chunk, _ref12 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, heregex = _ref12.heregex, _ref12$returnCommentT = _ref12.returnCommentTokens, _ref12$offsetInChunk = _ref12.offsetInChunk, offsetInChunk = void 0 === _ref12$offsetInChunk ? 0 : _ref12$offsetInChunk, commentAttachment, commentAttachments, commentWithSurroundingWhitespace, content, contents, getIndentSize, hasSeenFirstCommentLine, hereComment, hereLeadingWhitespace, hereTrailingWhitespace, i, indentSize, leadingNewline, leadingNewlineOffset, leadingNewlines, leadingWhitespace, length, lineComment, match, matchIllegal, noIndent, nonInitial, placeholderToken, precededByBlankLine, precedingNonCommentLines, prev;
                  if (!(match = chunk.match(COMMENT)))
                    return 0;
                  var _match3 = match, _match4 = _slicedToArray(_match3, 5);
                  return commentWithSurroundingWhitespace = _match4[0], hereLeadingWhitespace = _match4[1], hereComment = _match4[2], hereTrailingWhitespace = _match4[3], lineComment = _match4[4], contents = null, leadingNewline = /^\s*\n+\s*#/.test(commentWithSurroundingWhitespace), hereComment ? (matchIllegal = HERECOMMENT_ILLEGAL.exec(hereComment), matchIllegal && this.error("block comments cannot contain ".concat(matchIllegal[0]), { offset: "###".length + matchIllegal.index, length: matchIllegal[0].length }), chunk = chunk.replace("###".concat(hereComment, "###"), ""), chunk = chunk.replace(/^\n+/, ""), this.lineToken({ chunk }), content = hereComment, contents = [{ content, length: commentWithSurroundingWhitespace.length - hereLeadingWhitespace.length - hereTrailingWhitespace.length, leadingWhitespace: hereLeadingWhitespace }]) : (leadingNewlines = "", content = lineComment.replace(/^(\n*)/, function(leading) {
                    return leadingNewlines = leading, "";
                  }), precedingNonCommentLines = "", hasSeenFirstCommentLine = false, contents = content.split("\n").map(function(line) {
                    var comment, leadingWhitespace2;
                    return -1 < line.indexOf("#") ? (leadingWhitespace2 = "", content = line.replace(/^([ |\t]*)#/, function(_, whitespace) {
                      return leadingWhitespace2 = whitespace, "";
                    }), comment = { content, length: "#".length + content.length, leadingWhitespace: "".concat(hasSeenFirstCommentLine ? "" : leadingNewlines).concat(precedingNonCommentLines).concat(leadingWhitespace2), precededByBlankLine: !!precedingNonCommentLines }, hasSeenFirstCommentLine = true, precedingNonCommentLines = "", comment) : void (precedingNonCommentLines += "\n".concat(line));
                  }).filter(function(comment) {
                    return comment;
                  })), getIndentSize = function(_ref13) {
                    var leadingWhitespace2 = _ref13.leadingWhitespace, nonInitial2 = _ref13.nonInitial, lastNewlineIndex;
                    if (lastNewlineIndex = leadingWhitespace2.lastIndexOf("\n"), null == hereComment && nonInitial2)
                      null == lastNewlineIndex && (lastNewlineIndex = -1);
                    else if (!(-1 < lastNewlineIndex))
                      return null;
                    return leadingWhitespace2.length - 1 - lastNewlineIndex;
                  }, commentAttachments = function() {
                    var j, len, results;
                    for (results = [], i = j = 0, len = contents.length; j < len; i = ++j) {
                      var _contents$i = contents[i];
                      content = _contents$i.content, length = _contents$i.length, leadingWhitespace = _contents$i.leadingWhitespace, precededByBlankLine = _contents$i.precededByBlankLine, nonInitial = 0 !== i, leadingNewlineOffset = nonInitial ? 1 : 0, offsetInChunk += leadingNewlineOffset + leadingWhitespace.length, indentSize = getIndentSize({ leadingWhitespace, nonInitial }), noIndent = null == indentSize || -1 === indentSize, commentAttachment = { content, here: null != hereComment, newLine: leadingNewline || nonInitial, locationData: this.makeLocationData({ offsetInChunk, length }), precededByBlankLine, indentSize, indented: !noIndent && indentSize > this.indent, outdented: !noIndent && indentSize < this.indent }, heregex && (commentAttachment.heregex = true), offsetInChunk += length, results.push(commentAttachment);
                    }
                    return results;
                  }.call(this), prev = this.prev(), prev ? attachCommentsToNode(commentAttachments, prev) : (commentAttachments[0].newLine = true, this.lineToken({ chunk: this.chunk.slice(commentWithSurroundingWhitespace.length), offset: commentWithSurroundingWhitespace.length }), placeholderToken = this.makeToken("JS", "", { offset: commentWithSurroundingWhitespace.length, generated: true }), placeholderToken.comments = commentAttachments, this.tokens.push(placeholderToken), this.newlineToken(commentWithSurroundingWhitespace.length)), void 0 !== _ref12$returnCommentT && _ref12$returnCommentT ? commentAttachments : commentWithSurroundingWhitespace.length;
                } }, { key: "jsToken", value: function jsToken() {
                  var length, match, matchedHere, script;
                  return "`" === this.chunk.charAt(0) && (match = (matchedHere = HERE_JSTOKEN.exec(this.chunk)) || JSTOKEN.exec(this.chunk)) ? (script = match[1], length = match[0].length, this.token("JS", script, { length, data: { here: !!matchedHere } }), length) : 0;
                } }, { key: "regexToken", value: function regexToken() {
                  var _this6 = this, body, closed, comment, commentIndex, commentOpts, commentTokens, comments, delimiter, end, flags, fullMatch, index, leadingWhitespace, match, matchedComment, origin, prev, ref, ref1, regex, tokens;
                  switch (false) {
                    case !(match = REGEX_ILLEGAL.exec(this.chunk)):
                      this.error("regular expressions cannot begin with ".concat(match[2]), { offset: match.index + match[1].length });
                      break;
                    case !(match = this.matchWithInterpolations(HEREGEX, "///")):
                      var _match5 = match;
                      for (tokens = _match5.tokens, index = _match5.index, comments = []; matchedComment = HEREGEX_COMMENT.exec(this.chunk.slice(0, index)); ) {
                        var _matchedComment = matchedComment;
                        commentIndex = _matchedComment.index;
                        var _matchedComment2 = matchedComment, _matchedComment3 = _slicedToArray(_matchedComment2, 3);
                        fullMatch = _matchedComment3[0], leadingWhitespace = _matchedComment3[1], comment = _matchedComment3[2], comments.push({ comment, offsetInChunk: commentIndex + leadingWhitespace.length });
                      }
                      commentTokens = flatten(function() {
                        var j, len, results;
                        for (results = [], j = 0, len = comments.length; j < len; j++)
                          commentOpts = comments[j], results.push(this.commentToken(commentOpts.comment, Object.assign(commentOpts, { heregex: true, returnCommentTokens: true })));
                        return results;
                      }.call(this));
                      break;
                    case !(match = REGEX.exec(this.chunk)):
                      var _match6 = match, _match7 = _slicedToArray(_match6, 3);
                      if (regex = _match7[0], body = _match7[1], closed = _match7[2], this.validateEscapes(body, { isRegex: true, offsetInChunk: 1 }), index = regex.length, prev = this.prev(), prev) {
                        if (prev.spaced && (ref = prev[0], 0 <= indexOf.call(CALLABLE, ref))) {
                          if (!closed || POSSIBLY_DIVISION.test(regex))
                            return 0;
                        } else if (ref1 = prev[0], 0 <= indexOf.call(NOT_REGEX, ref1))
                          return 0;
                      }
                      closed || this.error("missing / (unclosed regex)");
                      break;
                    default:
                      return 0;
                  }
                  var _REGEX_FLAGS$exec = REGEX_FLAGS.exec(this.chunk.slice(index)), _REGEX_FLAGS$exec2 = _slicedToArray(_REGEX_FLAGS$exec, 1);
                  switch (flags = _REGEX_FLAGS$exec2[0], end = index + flags.length, origin = this.makeToken("REGEX", null, { length: end }), false) {
                    case !!VALID_FLAGS.test(flags):
                      this.error("invalid regular expression flags ".concat(flags), { offset: index, length: flags.length });
                      break;
                    case !(regex || 1 === tokens.length):
                      delimiter = body ? "/" : "///", null == body && (body = tokens[0][1]), this.validateUnicodeCodePointEscapes(body, { delimiter }), this.token("REGEX", "/".concat(body, "/").concat(flags), { length: end, origin, data: { delimiter } });
                      break;
                    default:
                      this.token("REGEX_START", "(", { length: 0, origin, generated: true }), this.token("IDENTIFIER", "RegExp", { length: 0, generated: true }), this.token("CALL_START", "(", { length: 0, generated: true }), this.mergeInterpolationTokens(tokens, { double: true, heregex: { flags }, endOffset: end - flags.length, quote: "///" }, function(str) {
                        return _this6.validateUnicodeCodePointEscapes(str, { delimiter });
                      }), flags && (this.token(",", ",", { offset: index - 1, length: 0, generated: true }), this.token("STRING", '"' + flags + '"', { offset: index, length: flags.length })), this.token(")", ")", { offset: end, length: 0, generated: true }), this.token("REGEX_END", ")", { offset: end, length: 0, generated: true });
                  }
                  return (null == commentTokens ? void 0 : commentTokens.length) && addTokenData(this.tokens[this.tokens.length - 1], { heregexCommentTokens: commentTokens }), end;
                } }, { key: "lineToken", value: function lineToken() {
                  var _Mathmin = Math.min, _ref14 = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, _ref14$chunk = _ref14.chunk, chunk = void 0 === _ref14$chunk ? this.chunk : _ref14$chunk, _ref14$offset = _ref14.offset, offset = void 0 === _ref14$offset ? 0 : _ref14$offset, backslash, diff, endsContinuationLineIndentation, indent, match, minLiteralLength, newIndentLiteral, noNewlines, prev, ref, size;
                  if (!(match = MULTI_DENT.exec(chunk)))
                    return 0;
                  if (indent = match[0], prev = this.prev(), backslash = "\\" === (null == prev ? void 0 : prev[0]), (backslash || (null == (ref = this.seenFor) ? void 0 : ref.endsLength) < this.ends.length) && this.seenFor || (this.seenFor = false), backslash && this.seenImport || this.importSpecifierList || (this.seenImport = false), backslash && this.seenExport || this.exportSpecifierList || (this.seenExport = false), size = indent.length - 1 - indent.lastIndexOf("\n"), noNewlines = this.unfinished(), newIndentLiteral = 0 < size ? indent.slice(-size) : "", !/^(.?)\1*$/.exec(newIndentLiteral))
                    return this.error("mixed indentation", { offset: indent.length }), indent.length;
                  if (minLiteralLength = _Mathmin(newIndentLiteral.length, this.indentLiteral.length), newIndentLiteral.slice(0, minLiteralLength) !== this.indentLiteral.slice(0, minLiteralLength))
                    return this.error("indentation mismatch", { offset: indent.length }), indent.length;
                  if (size - this.continuationLineAdditionalIndent === this.indent)
                    return noNewlines ? this.suppressNewlines() : this.newlineToken(offset), indent.length;
                  if (size > this.indent) {
                    if (noNewlines)
                      return backslash || (this.continuationLineAdditionalIndent = size - this.indent), this.continuationLineAdditionalIndent && (prev.continuationLineIndent = this.indent + this.continuationLineAdditionalIndent), this.suppressNewlines(), indent.length;
                    if (!this.tokens.length)
                      return this.baseIndent = this.indent = size, this.indentLiteral = newIndentLiteral, indent.length;
                    diff = size - this.indent + this.outdebt, this.token("INDENT", diff, { offset: offset + indent.length - size, length: size }), this.indents.push(diff), this.ends.push({ tag: "OUTDENT" }), this.outdebt = this.continuationLineAdditionalIndent = 0, this.indent = size, this.indentLiteral = newIndentLiteral;
                  } else
                    size < this.baseIndent ? this.error("missing indentation", { offset: offset + indent.length }) : (endsContinuationLineIndentation = 0 < this.continuationLineAdditionalIndent, this.continuationLineAdditionalIndent = 0, this.outdentToken({ moveOut: this.indent - size, noNewlines, outdentLength: indent.length, offset, indentSize: size, endsContinuationLineIndentation }));
                  return indent.length;
                } }, { key: "outdentToken", value: function outdentToken(_ref15) {
                  var moveOut = _ref15.moveOut, noNewlines = _ref15.noNewlines, _ref15$outdentLength = _ref15.outdentLength, outdentLength = void 0 === _ref15$outdentLength ? 0 : _ref15$outdentLength, _ref15$offset = _ref15.offset, offset = void 0 === _ref15$offset ? 0 : _ref15$offset, indentSize = _ref15.indentSize, endsContinuationLineIndentation = _ref15.endsContinuationLineIndentation, decreasedIndent, dent, lastIndent, ref, terminatorToken;
                  for (decreasedIndent = this.indent - moveOut; 0 < moveOut; )
                    lastIndent = this.indents[this.indents.length - 1], lastIndent ? this.outdebt && moveOut <= this.outdebt ? (this.outdebt -= moveOut, moveOut = 0) : (dent = this.indents.pop() + this.outdebt, outdentLength && (ref = this.chunk[outdentLength], 0 <= indexOf.call(INDENTABLE_CLOSERS, ref)) && (decreasedIndent -= dent - moveOut, moveOut = dent), this.outdebt = 0, this.pair("OUTDENT"), this.token("OUTDENT", moveOut, { length: outdentLength, indentSize: indentSize + moveOut - dent }), moveOut -= dent) : this.outdebt = moveOut = 0;
                  return dent && (this.outdebt -= moveOut), this.suppressSemicolons(), "TERMINATOR" === this.tag() || noNewlines || (terminatorToken = this.token("TERMINATOR", "\n", { offset: offset + outdentLength, length: 0 }), endsContinuationLineIndentation && (terminatorToken.endsContinuationLineIndentation = { preContinuationLineIndent: this.indent })), this.indent = decreasedIndent, this.indentLiteral = this.indentLiteral.slice(0, decreasedIndent), this;
                } }, { key: "whitespaceToken", value: function whitespaceToken() {
                  var match, nline, prev;
                  return (match = WHITESPACE.exec(this.chunk)) || (nline = "\n" === this.chunk.charAt(0)) ? (prev = this.prev(), prev && (prev[match ? "spaced" : "newLine"] = true), match ? match[0].length : 0) : 0;
                } }, { key: "newlineToken", value: function newlineToken(offset) {
                  return this.suppressSemicolons(), "TERMINATOR" !== this.tag() && this.token("TERMINATOR", "\n", { offset, length: 0 }), this;
                } }, { key: "suppressNewlines", value: function suppressNewlines() {
                  var prev;
                  return prev = this.prev(), "\\" === prev[1] && (prev.comments && 1 < this.tokens.length && attachCommentsToNode(prev.comments, this.tokens[this.tokens.length - 2]), this.tokens.pop()), this;
                } }, { key: "jsxToken", value: function jsxToken() {
                  var _this7 = this, afterTag, end, endToken, firstChar, fullId, fullTagName, id, input, j, jsxTag, len, match, offset, openingTagToken, prev, prevChar, properties, property, ref, tagToken, token, tokens;
                  if (firstChar = this.chunk[0], prevChar = 0 < this.tokens.length ? this.tokens[this.tokens.length - 1][0] : "", "<" === firstChar) {
                    if (match = JSX_IDENTIFIER.exec(this.chunk.slice(1)) || JSX_FRAGMENT_IDENTIFIER.exec(this.chunk.slice(1)), !(match && (0 < this.jsxDepth || !(prev = this.prev()) || prev.spaced || (ref = prev[0], 0 > indexOf.call(COMPARABLE_LEFT_SIDE, ref)))))
                      return 0;
                    var _match8 = match, _match9 = _slicedToArray(_match8, 2);
                    if (input = _match9[0], id = _match9[1], fullId = id, 0 <= indexOf.call(id, ".")) {
                      var _id$split = id.split("."), _id$split2 = _toArray(_id$split);
                      id = _id$split2[0], properties = _id$split2.slice(1);
                    } else
                      properties = [];
                    for (tagToken = this.token("JSX_TAG", id, { length: id.length + 1, data: { openingBracketToken: this.makeToken("<", "<"), tagNameToken: this.makeToken("IDENTIFIER", id, { offset: 1 }) } }), offset = id.length + 1, j = 0, len = properties.length; j < len; j++)
                      property = properties[j], this.token(".", ".", { offset }), offset += 1, this.token("PROPERTY", property, { offset }), offset += property.length;
                    return this.token("CALL_START", "(", { generated: true }), this.token("[", "[", { generated: true }), this.ends.push({ tag: "/>", origin: tagToken, name: id, properties }), this.jsxDepth++, fullId.length + 1;
                  }
                  if (jsxTag = this.atJSXTag()) {
                    if ("/>" === this.chunk.slice(0, 2))
                      return this.pair("/>"), this.token("]", "]", { length: 2, generated: true }), this.token("CALL_END", ")", { length: 2, generated: true, data: { selfClosingSlashToken: this.makeToken("/", "/"), closingBracketToken: this.makeToken(">", ">", { offset: 1 }) } }), this.jsxDepth--, 2;
                    if ("{" === firstChar)
                      return ":" === prevChar ? (token = this.token("(", "{"), this.jsxObjAttribute[this.jsxDepth] = false, addTokenData(this.tokens[this.tokens.length - 3], { jsx: true })) : (token = this.token("{", "{"), this.jsxObjAttribute[this.jsxDepth] = true), this.ends.push({ tag: "}", origin: token }), 1;
                    if (">" === firstChar) {
                      var _this$pair = this.pair("/>");
                      openingTagToken = _this$pair.origin, this.token("]", "]", { generated: true, data: { closingBracketToken: this.makeToken(">", ">") } }), this.token(",", "JSX_COMMA", { generated: true });
                      var _this$matchWithInterp2 = this.matchWithInterpolations(INSIDE_JSX, ">", "</", JSX_INTERPOLATION);
                      tokens = _this$matchWithInterp2.tokens, end = _this$matchWithInterp2.index, this.mergeInterpolationTokens(tokens, { endOffset: end, jsx: true }, function(value) {
                        return _this7.validateUnicodeCodePointEscapes(value, { delimiter: ">" });
                      }), match = JSX_IDENTIFIER.exec(this.chunk.slice(end)) || JSX_FRAGMENT_IDENTIFIER.exec(this.chunk.slice(end)), match && match[1] === "".concat(jsxTag.name).concat(function() {
                        var k, len1, ref1, results;
                        for (ref1 = jsxTag.properties, results = [], k = 0, len1 = ref1.length; k < len1; k++)
                          property = ref1[k], results.push(".".concat(property));
                        return results;
                      }().join("")) || this.error("expected corresponding JSX closing tag for ".concat(jsxTag.name), jsxTag.origin.data.tagNameToken[2]);
                      var _match10 = match, _match11 = _slicedToArray(_match10, 2);
                      return fullTagName = _match11[1], afterTag = end + fullTagName.length, ">" !== this.chunk[afterTag] && this.error("missing closing > after tag name", { offset: afterTag, length: 1 }), endToken = this.token("CALL_END", ")", { offset: end - 2, length: fullTagName.length + 3, generated: true, data: { closingTagOpeningBracketToken: this.makeToken("<", "<", { offset: end - 2 }), closingTagSlashToken: this.makeToken("/", "/", { offset: end - 1 }), closingTagNameToken: this.makeToken("IDENTIFIER", fullTagName, { offset: end }), closingTagClosingBracketToken: this.makeToken(">", ">", { offset: end + fullTagName.length }) } }), addTokenData(openingTagToken, endToken.data), this.jsxDepth--, afterTag + 1;
                    }
                    return 0;
                  }
                  return this.atJSXTag(1) ? "}" === firstChar ? (this.pair(firstChar), this.jsxObjAttribute[this.jsxDepth] ? (this.token("}", "}"), this.jsxObjAttribute[this.jsxDepth] = false) : this.token(")", "}"), this.token(",", ",", { generated: true }), 1) : 0 : 0;
                } }, { key: "atJSXTag", value: function atJSXTag() {
                  var depth = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0, i, last, ref;
                  if (0 === this.jsxDepth)
                    return false;
                  for (i = this.ends.length - 1; "OUTDENT" === (null == (ref = this.ends[i]) ? void 0 : ref.tag) || 0 < depth--; )
                    i--;
                  return last = this.ends[i], "/>" === (null == last ? void 0 : last.tag) && last;
                } }, { key: "literalToken", value: function literalToken() {
                  var match, message, origin, prev, ref, ref1, ref2, ref3, ref4, ref5, skipToken, tag, token, value;
                  if (match = OPERATOR.exec(this.chunk)) {
                    var _match12 = match, _match13 = _slicedToArray(_match12, 1);
                    value = _match13[0], CODE.test(value) && this.tagParameters();
                  } else
                    value = this.chunk.charAt(0);
                  if (tag = value, prev = this.prev(), prev && 0 <= indexOf.call(["="].concat(_toConsumableArray(COMPOUND_ASSIGN)), value) && (skipToken = false, "=" !== value || "||" !== (ref = prev[1]) && "&&" !== ref || prev.spaced || (prev[0] = "COMPOUND_ASSIGN", prev[1] += "=", (null == (ref1 = prev.data) ? void 0 : ref1.original) && (prev.data.original += "="), prev[2].range = [prev[2].range[0], prev[2].range[1] + 1], prev[2].last_column += 1, prev[2].last_column_exclusive += 1, prev = this.tokens[this.tokens.length - 2], skipToken = true), prev && "PROPERTY" !== prev[0] && (origin = null == (ref2 = prev.origin) ? prev : ref2, message = isUnassignable(prev[1], origin[1]), message && this.error(message, origin[2])), skipToken))
                    return value.length;
                  if ("(" === value && "IMPORT" === (null == prev ? void 0 : prev[0]) && (prev[0] = "DYNAMIC_IMPORT"), "{" === value && this.seenImport ? this.importSpecifierList = true : this.importSpecifierList && "}" === value ? this.importSpecifierList = false : "{" === value && "EXPORT" === (null == prev ? void 0 : prev[0]) ? this.exportSpecifierList = true : this.exportSpecifierList && "}" === value && (this.exportSpecifierList = false), ";" === value)
                    (ref3 = null == prev ? void 0 : prev[0], 0 <= indexOf.call(["="].concat(_toConsumableArray(UNFINISHED)), ref3)) && this.error("unexpected ;"), this.seenFor = this.seenImport = this.seenExport = false, tag = "TERMINATOR";
                  else if ("*" === value && "EXPORT" === (null == prev ? void 0 : prev[0]))
                    tag = "EXPORT_ALL";
                  else if (0 <= indexOf.call(MATH, value))
                    tag = "MATH";
                  else if (0 <= indexOf.call(COMPARE, value))
                    tag = "COMPARE";
                  else if (0 <= indexOf.call(COMPOUND_ASSIGN, value))
                    tag = "COMPOUND_ASSIGN";
                  else if (0 <= indexOf.call(UNARY, value))
                    tag = "UNARY";
                  else if (0 <= indexOf.call(UNARY_MATH, value))
                    tag = "UNARY_MATH";
                  else if (0 <= indexOf.call(SHIFT, value))
                    tag = "SHIFT";
                  else if ("?" === value && (null == prev ? void 0 : prev.spaced))
                    tag = "BIN?";
                  else if (prev) {
                    if ("(" === value && !prev.spaced && (ref4 = prev[0], 0 <= indexOf.call(CALLABLE, ref4)))
                      "?" === prev[0] && (prev[0] = "FUNC_EXIST"), tag = "CALL_START";
                    else if ("[" === value && ((ref5 = prev[0], 0 <= indexOf.call(INDEXABLE, ref5)) && !prev.spaced || "::" === prev[0]))
                      switch (tag = "INDEX_START", prev[0]) {
                        case "?":
                          prev[0] = "INDEX_SOAK";
                      }
                  }
                  return token = this.makeToken(tag, value), "(" === value || "{" === value || "[" === value ? this.ends.push({ tag: INVERSES[value], origin: token }) : ")" === value || "}" === value || "]" === value ? this.pair(value) : void 0, this.tokens.push(this.makeToken(tag, value)), value.length;
                } }, { key: "tagParameters", value: function tagParameters() {
                  var i, paramEndToken, stack, tok, tokens;
                  if (")" !== this.tag())
                    return this.tagDoIife();
                  for (stack = [], tokens = this.tokens, i = tokens.length, paramEndToken = tokens[--i], paramEndToken[0] = "PARAM_END"; tok = tokens[--i]; )
                    switch (tok[0]) {
                      case ")":
                        stack.push(tok);
                        break;
                      case "(":
                      case "CALL_START":
                        if (stack.length)
                          stack.pop();
                        else
                          return "(" === tok[0] ? (tok[0] = "PARAM_START", this.tagDoIife(i - 1)) : (paramEndToken[0] = "CALL_END", this);
                    }
                  return this;
                } }, { key: "tagDoIife", value: function tagDoIife(tokenIndex) {
                  var tok;
                  return (tok = this.tokens[null == tokenIndex ? this.tokens.length - 1 : tokenIndex], "DO" !== (null == tok ? void 0 : tok[0])) ? this : (tok[0] = "DO_IIFE", this);
                } }, { key: "closeIndentation", value: function closeIndentation() {
                  return this.outdentToken({ moveOut: this.indent, indentSize: 0 });
                } }, { key: "matchWithInterpolations", value: function matchWithInterpolations(regex, delimiter) {
                  var closingDelimiter = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : delimiter, interpolators = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : /^#\{/, braceInterpolator, close, column, index, interpolationOffset, interpolator, line, match, nested, offset, offsetInChunk, open, ref, ref1, rest, str, strPart, tokens;
                  if (tokens = [], offsetInChunk = delimiter.length, this.chunk.slice(0, offsetInChunk) !== delimiter)
                    return null;
                  for (str = this.chunk.slice(offsetInChunk); ; ) {
                    var _regex$exec = regex.exec(str), _regex$exec2 = _slicedToArray(_regex$exec, 1);
                    if (strPart = _regex$exec2[0], this.validateEscapes(strPart, { isRegex: "/" === delimiter.charAt(0), offsetInChunk }), tokens.push(this.makeToken("NEOSTRING", strPart, { offset: offsetInChunk })), str = str.slice(strPart.length), offsetInChunk += strPart.length, !(match = interpolators.exec(str)))
                      break;
                    var _match14 = match, _match15 = _slicedToArray(_match14, 1);
                    interpolator = _match15[0], interpolationOffset = interpolator.length - 1;
                    var _this$getLineAndColum3 = this.getLineAndColumnFromChunk(offsetInChunk + interpolationOffset), _this$getLineAndColum4 = _slicedToArray(_this$getLineAndColum3, 3);
                    line = _this$getLineAndColum4[0], column = _this$getLineAndColum4[1], offset = _this$getLineAndColum4[2], rest = str.slice(interpolationOffset);
                    var _tokenize = new Lexer2().tokenize(rest, { line, column, offset, untilBalanced: true, locationDataCompensations: this.locationDataCompensations });
                    if (nested = _tokenize.tokens, index = _tokenize.index, index += interpolationOffset, braceInterpolator = "}" === str[index - 1], braceInterpolator) {
                      var _nested, _nested2, _slice$call, _slice$call2;
                      _nested = nested, _nested2 = _slicedToArray(_nested, 1), open = _nested2[0], _nested, _slice$call = slice.call(nested, -1), _slice$call2 = _slicedToArray(_slice$call, 1), close = _slice$call2[0], _slice$call, open[0] = "INTERPOLATION_START", open[1] = "(", open[2].first_column -= interpolationOffset, open[2].range = [open[2].range[0] - interpolationOffset, open[2].range[1]], close[0] = "INTERPOLATION_END", close[1] = ")", close.origin = ["", "end of interpolation", close[2]];
                    }
                    "TERMINATOR" === (null == (ref = nested[1]) ? void 0 : ref[0]) && nested.splice(1, 1), "INDENT" === (null == (ref1 = nested[nested.length - 3]) ? void 0 : ref1[0]) && "OUTDENT" === nested[nested.length - 2][0] && nested.splice(-3, 2), braceInterpolator || (open = this.makeToken("INTERPOLATION_START", "(", { offset: offsetInChunk, length: 0, generated: true }), close = this.makeToken("INTERPOLATION_END", ")", { offset: offsetInChunk + index, length: 0, generated: true }), nested = [open].concat(_toConsumableArray(nested), [close])), tokens.push(["TOKENS", nested]), str = str.slice(index), offsetInChunk += index;
                  }
                  return str.slice(0, closingDelimiter.length) !== closingDelimiter && this.error("missing ".concat(closingDelimiter), { length: delimiter.length }), { tokens, index: offsetInChunk + closingDelimiter.length };
                } }, { key: "mergeInterpolationTokens", value: function mergeInterpolationTokens(tokens, options, fn) {
                  var $, converted, _double, endOffset, firstIndex, heregex, i, indent, j, jsx, k, lastToken, len, len1, locationToken, lparen, placeholderToken, quote, ref, ref1, rparen, tag, token, tokensToPush, val, value;
                  for (quote = options.quote, indent = options.indent, _double = options.double, heregex = options.heregex, endOffset = options.endOffset, jsx = options.jsx, 1 < tokens.length && (lparen = this.token("STRING_START", "(", { length: null == (ref = null == quote ? void 0 : quote.length) ? 0 : ref, data: { quote }, generated: null == quote || !quote.length })), firstIndex = this.tokens.length, $ = tokens.length - 1, i = j = 0, len = tokens.length; j < len; i = ++j) {
                    var _this$tokens2;
                    token = tokens[i];
                    var _token4 = token, _token5 = _slicedToArray(_token4, 2);
                    switch (tag = _token5[0], value = _token5[1], tag) {
                      case "TOKENS":
                        if (2 === value.length && (value[0].comments || value[1].comments)) {
                          for (placeholderToken = this.makeToken("JS", "", { generated: true }), placeholderToken[2] = value[0][2], k = 0, len1 = value.length; k < len1; k++) {
                            var _placeholderToken$com;
                            (val = value[k], !!val.comments) && (null == placeholderToken.comments && (placeholderToken.comments = []), (_placeholderToken$com = placeholderToken.comments).push.apply(_placeholderToken$com, _toConsumableArray(val.comments)));
                          }
                          value.splice(1, 0, placeholderToken);
                        }
                        locationToken = value[0], tokensToPush = value;
                        break;
                      case "NEOSTRING":
                        converted = fn.call(this, token[1], i), 0 === i && addTokenData(token, { initialChunk: true }), i === $ && addTokenData(token, { finalChunk: true }), addTokenData(token, { indent, quote, double: _double }), heregex && addTokenData(token, { heregex }), jsx && addTokenData(token, { jsx }), token[0] = "STRING", token[1] = '"' + converted + '"', 1 === tokens.length && null != quote && (token[2].first_column -= quote.length, "\n" === token[1].substr(-2, 1) ? (token[2].last_line += 1, token[2].last_column = quote.length - 1) : (token[2].last_column += quote.length, 2 === token[1].length && (token[2].last_column -= 1)), token[2].last_column_exclusive += quote.length, token[2].range = [token[2].range[0] - quote.length, token[2].range[1] + quote.length]), locationToken = token, tokensToPush = [token];
                    }
                    (_this$tokens2 = this.tokens).push.apply(_this$tokens2, _toConsumableArray(tokensToPush));
                  }
                  if (lparen) {
                    var _slice$call3 = slice.call(tokens, -1), _slice$call4 = _slicedToArray(_slice$call3, 1);
                    return lastToken = _slice$call4[0], lparen.origin = ["STRING", null, { first_line: lparen[2].first_line, first_column: lparen[2].first_column, last_line: lastToken[2].last_line, last_column: lastToken[2].last_column, last_line_exclusive: lastToken[2].last_line_exclusive, last_column_exclusive: lastToken[2].last_column_exclusive, range: [lparen[2].range[0], lastToken[2].range[1]] }], (null == quote ? void 0 : quote.length) || (lparen[2] = lparen.origin[2]), rparen = this.token("STRING_END", ")", { offset: endOffset - (null == quote ? "" : quote).length, length: null == (ref1 = null == quote ? void 0 : quote.length) ? 0 : ref1, generated: null == quote || !quote.length });
                  }
                } }, { key: "pair", value: function pair(tag) {
                  var _slice$call5, _slice$call6, lastIndent, prev, ref, ref1, wanted;
                  if (ref = this.ends, _slice$call5 = slice.call(ref, -1), _slice$call6 = _slicedToArray(_slice$call5, 1), prev = _slice$call6[0], _slice$call5, tag !== (wanted = null == prev ? void 0 : prev.tag)) {
                    var _slice$call7, _slice$call8;
                    return "OUTDENT" !== wanted && this.error("unmatched ".concat(tag)), ref1 = this.indents, _slice$call7 = slice.call(ref1, -1), _slice$call8 = _slicedToArray(_slice$call7, 1), lastIndent = _slice$call8[0], _slice$call7, this.outdentToken({ moveOut: lastIndent, noNewlines: true }), this.pair(tag);
                  }
                  return this.ends.pop();
                } }, { key: "getLocationDataCompensation", value: function getLocationDataCompensation(start, end) {
                  var compensation, current, initialEnd, totalCompensation;
                  for (totalCompensation = 0, initialEnd = end, current = start; current <= end && (current !== end || start === initialEnd); )
                    compensation = this.locationDataCompensations[current], null != compensation && (totalCompensation += compensation, end += compensation), current++;
                  return totalCompensation;
                } }, { key: "getLineAndColumnFromChunk", value: function getLineAndColumnFromChunk(offset) {
                  var column, columnCompensation, compensation, lastLine, lineCount, previousLinesCompensation, ref, string;
                  if (compensation = this.getLocationDataCompensation(this.chunkOffset, this.chunkOffset + offset), 0 === offset)
                    return [this.chunkLine, this.chunkColumn + compensation, this.chunkOffset + compensation];
                  if (string = offset >= this.chunk.length ? this.chunk : this.chunk.slice(0, +(offset - 1) + 1 || 9e9), lineCount = count(string, "\n"), column = this.chunkColumn, 0 < lineCount) {
                    var _slice$call9, _slice$call10;
                    ref = string.split("\n"), _slice$call9 = slice.call(ref, -1), _slice$call10 = _slicedToArray(_slice$call9, 1), lastLine = _slice$call10[0], _slice$call9, column = lastLine.length, previousLinesCompensation = this.getLocationDataCompensation(this.chunkOffset, this.chunkOffset + offset - column), 0 > previousLinesCompensation && (previousLinesCompensation = 0), columnCompensation = this.getLocationDataCompensation(this.chunkOffset + offset + previousLinesCompensation - column, this.chunkOffset + offset + previousLinesCompensation);
                  } else
                    column += string.length, columnCompensation = compensation;
                  return [this.chunkLine + lineCount, column + columnCompensation, this.chunkOffset + offset + compensation];
                } }, { key: "makeLocationData", value: function makeLocationData(_ref16) {
                  var offsetInChunk = _ref16.offsetInChunk, length = _ref16.length, endOffset, lastCharacter, locationData;
                  locationData = { range: [] };
                  var _this$getLineAndColum5 = this.getLineAndColumnFromChunk(offsetInChunk), _this$getLineAndColum6 = _slicedToArray(_this$getLineAndColum5, 3);
                  locationData.first_line = _this$getLineAndColum6[0], locationData.first_column = _this$getLineAndColum6[1], locationData.range[0] = _this$getLineAndColum6[2], lastCharacter = 0 < length ? length - 1 : 0;
                  var _this$getLineAndColum7 = this.getLineAndColumnFromChunk(offsetInChunk + lastCharacter), _this$getLineAndColum8 = _slicedToArray(_this$getLineAndColum7, 3);
                  locationData.last_line = _this$getLineAndColum8[0], locationData.last_column = _this$getLineAndColum8[1], endOffset = _this$getLineAndColum8[2];
                  var _this$getLineAndColum9 = this.getLineAndColumnFromChunk(offsetInChunk + lastCharacter + (0 < length ? 1 : 0)), _this$getLineAndColum10 = _slicedToArray(_this$getLineAndColum9, 2);
                  return locationData.last_line_exclusive = _this$getLineAndColum10[0], locationData.last_column_exclusive = _this$getLineAndColum10[1], locationData.range[1] = 0 < length ? endOffset + 1 : endOffset, locationData;
                } }, { key: "makeToken", value: function makeToken(tag, value) {
                  var _ref17 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, _ref17$offset = _ref17.offset, offsetInChunk = void 0 === _ref17$offset ? 0 : _ref17$offset, _ref17$length = _ref17.length, length = void 0 === _ref17$length ? value.length : _ref17$length, origin = _ref17.origin, generated = _ref17.generated, indentSize = _ref17.indentSize, token;
                  return token = [tag, value, this.makeLocationData({ offsetInChunk, length })], origin && (token.origin = origin), generated && (token.generated = true), null != indentSize && (token.indentSize = indentSize), token;
                } }, { key: "token", value: function(tag, value) {
                  var _ref18 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, offset = _ref18.offset, length = _ref18.length, origin = _ref18.origin, data = _ref18.data, generated = _ref18.generated, indentSize = _ref18.indentSize, token;
                  return token = this.makeToken(tag, value, { offset, length, origin, generated, indentSize }), data && addTokenData(token, data), this.tokens.push(token), token;
                } }, { key: "tag", value: function tag() {
                  var _slice$call11, _slice$call12, ref, token;
                  return ref = this.tokens, _slice$call11 = slice.call(ref, -1), _slice$call12 = _slicedToArray(_slice$call11, 1), token = _slice$call12[0], _slice$call11, null == token ? void 0 : token[0];
                } }, { key: "value", value: function value() {
                  var useOrigin = !!(0 < arguments.length && void 0 !== arguments[0]) && arguments[0], _slice$call13, _slice$call14, ref, token;
                  return ref = this.tokens, _slice$call13 = slice.call(ref, -1), _slice$call14 = _slicedToArray(_slice$call13, 1), token = _slice$call14[0], _slice$call13, useOrigin && null != (null == token ? void 0 : token.origin) ? token.origin[1] : null == token ? void 0 : token[1];
                } }, { key: "prev", value: function prev() {
                  return this.tokens[this.tokens.length - 1];
                } }, { key: "unfinished", value: function unfinished() {
                  var ref;
                  return LINE_CONTINUER.test(this.chunk) || (ref = this.tag(), 0 <= indexOf.call(UNFINISHED, ref));
                } }, { key: "validateUnicodeCodePointEscapes", value: function validateUnicodeCodePointEscapes(str, options) {
                  return replaceUnicodeCodePointEscapes(str, merge(options, { error: this.error }));
                } }, { key: "validateEscapes", value: function validateEscapes(str) {
                  var options = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, before, hex, invalidEscape, invalidEscapeRegex, match, message, octal, ref, unicode, unicodeCodePoint;
                  if (invalidEscapeRegex = options.isRegex ? REGEX_INVALID_ESCAPE : STRING_INVALID_ESCAPE, match = invalidEscapeRegex.exec(str), !!match)
                    return match[0], before = match[1], octal = match[2], hex = match[3], unicodeCodePoint = match[4], unicode = match[5], message = octal ? "octal escape sequences are not allowed" : "invalid escape sequence", invalidEscape = "\\".concat(octal || hex || unicodeCodePoint || unicode), this.error("".concat(message, " ").concat(invalidEscape), { offset: (null == (ref = options.offsetInChunk) ? 0 : ref) + match.index + before.length, length: invalidEscape.length });
                } }, { key: "suppressSemicolons", value: function suppressSemicolons() {
                  var ref, ref1, results;
                  for (results = []; ";" === this.value(); )
                    this.tokens.pop(), (ref = null == (ref1 = this.prev()) ? void 0 : ref1[0], 0 <= indexOf.call(["="].concat(_toConsumableArray(UNFINISHED)), ref)) ? results.push(this.error("unexpected ;")) : results.push(void 0);
                  return results;
                } }, { key: "error", value: function error(message) {
                  var options = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, _this$getLineAndColum11, _this$getLineAndColum12, first_column, first_line, location, ref, ref1;
                  return location = "first_line" in options ? options : (_this$getLineAndColum11 = this.getLineAndColumnFromChunk(null == (ref = options.offset) ? 0 : ref), _this$getLineAndColum12 = _slicedToArray(_this$getLineAndColum11, 2), first_line = _this$getLineAndColum12[0], first_column = _this$getLineAndColum12[1], _this$getLineAndColum11, { first_line, first_column, last_column: first_column + (null == (ref1 = options.length) ? 1 : ref1) - 1 }), throwSyntaxError(message, location);
                } }]), Lexer2;
              }(), isUnassignable = function(name) {
                var displayName = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : name;
                switch (false) {
                  case 0 > indexOf.call([].concat(_toConsumableArray(JS_KEYWORDS), _toConsumableArray(COFFEE_KEYWORDS)), name):
                    return "keyword '".concat(displayName, "' can't be assigned");
                  case 0 > indexOf.call(STRICT_PROSCRIBED, name):
                    return "'".concat(displayName, "' can't be assigned");
                  case 0 > indexOf.call(RESERVED, name):
                    return "reserved word '".concat(displayName, "' can't be assigned");
                  default:
                    return false;
                }
              }, exports2.isUnassignable = isUnassignable, isForFrom = function(prev) {
                var ref;
                return "IDENTIFIER" === prev[0] || "FOR" !== prev[0] && "{" !== (ref = prev[1]) && "[" !== ref && "," !== ref && ":" !== ref;
              }, addTokenData = function(token, data) {
                return Object.assign(null == token.data ? token.data = {} : token.data, data);
              }, JS_KEYWORDS = ["true", "false", "null", "this", "new", "delete", "typeof", "in", "instanceof", "return", "throw", "break", "continue", "debugger", "yield", "await", "if", "else", "switch", "for", "while", "do", "try", "catch", "finally", "class", "extends", "super", "import", "export", "default"], COFFEE_KEYWORDS = ["undefined", "Infinity", "NaN", "then", "unless", "until", "loop", "of", "by", "when"], COFFEE_ALIAS_MAP = { and: "&&", or: "||", is: "==", isnt: "!=", not: "!", yes: "true", no: "false", on: "true", off: "false" }, COFFEE_ALIASES = function() {
                var results;
                for (key in results = [], COFFEE_ALIAS_MAP)
                  results.push(key);
                return results;
              }(), COFFEE_KEYWORDS = COFFEE_KEYWORDS.concat(COFFEE_ALIASES), RESERVED = ["case", "function", "var", "void", "with", "const", "let", "enum", "native", "implements", "interface", "package", "private", "protected", "public", "static"], STRICT_PROSCRIBED = ["arguments", "eval"], exports2.JS_FORBIDDEN = JS_KEYWORDS.concat(RESERVED).concat(STRICT_PROSCRIBED), BOM = 65279, IDENTIFIER = /^(?!\d)((?:(?!\s)[$\w\x7f-\uffff])+)([^\n\S]*:(?!:))?/, JSX_IDENTIFIER_PART = /(?:(?!\s)[\-$\w\x7f-\uffff])+/.source, JSX_IDENTIFIER = RegExp("^(?![\\d<])(".concat(JSX_IDENTIFIER_PART, "(?:\\s*:\\s*").concat(JSX_IDENTIFIER_PART, "|(?:\\s*\\.\\s*").concat(JSX_IDENTIFIER_PART, ")+)?)")), JSX_FRAGMENT_IDENTIFIER = /^()>/, JSX_ATTRIBUTE = RegExp("^(?!\\d)(".concat(JSX_IDENTIFIER_PART, "(?:\\s*:\\s*").concat(JSX_IDENTIFIER_PART, ")?)([^\\S]*=(?!=))?")), NUMBER = /^0b[01](?:_?[01])*n?|^0o[0-7](?:_?[0-7])*n?|^0x[\da-f](?:_?[\da-f])*n?|^\d+n|^(?:\d(?:_?\d)*)?\.?(?:\d(?:_?\d)*)+(?:e[+-]?(?:\d(?:_?\d)*)+)?/i, OPERATOR = /^(?:[-=]>|[-+*\/%<>&|^!?=]=|>>>=?|([-+:])\1|([&|<>*\/%])\2=?|\?(\.|::)|\.{2,3})/, WHITESPACE = /^[^\n\S]+/, COMMENT = /^(\s*)###([^#][\s\S]*?)(?:###([^\n\S]*)|###$)|^((?:\s*#(?!##[^#]).*)+)/, CODE = /^[-=]>/, MULTI_DENT = /^(?:\n[^\n\S]*)+/, JSTOKEN = /^`(?!``)((?:[^`\\]|\\[\s\S])*)`/, HERE_JSTOKEN = /^```((?:[^`\\]|\\[\s\S]|`(?!``))*)```/, STRING_START = /^(?:'''|"""|'|")/, STRING_SINGLE = /^(?:[^\\']|\\[\s\S])*/, STRING_DOUBLE = /^(?:[^\\"#]|\\[\s\S]|\#(?!\{))*/, HEREDOC_SINGLE = /^(?:[^\\']|\\[\s\S]|'(?!''))*/, HEREDOC_DOUBLE = /^(?:[^\\"#]|\\[\s\S]|"(?!"")|\#(?!\{))*/, INSIDE_JSX = /^(?:[^\{<])*/, JSX_INTERPOLATION = /^(?:\{|<(?!\/))/, HEREDOC_INDENT = /\n+([^\n\S]*)(?=\S)/g, REGEX = /^\/(?!\/)((?:[^[\/\n\\]|\\[^\n]|\[(?:\\[^\n]|[^\]\n\\])*\])*)(\/)?/, REGEX_FLAGS = /^\w*/, VALID_FLAGS = /^(?!.*(.).*\1)[gimsuy]*$/, HEREGEX = /^(?:[^\\\/#\s]|\\[\s\S]|\/(?!\/\/)|\#(?!\{)|\s+(?:#(?!\{).*)?)*/, HEREGEX_COMMENT = /(\s+)(#(?!{).*)/gm, REGEX_ILLEGAL = /^(\/|\/{3}\s*)(\*)/, POSSIBLY_DIVISION = /^\/=?\s/, HERECOMMENT_ILLEGAL = /\*\//, LINE_CONTINUER = /^\s*(?:,|\??\.(?![.\d])|\??::)/, STRING_INVALID_ESCAPE = /((?:^|[^\\])(?:\\\\)*)\\(?:(0\d|[1-7])|(x(?![\da-fA-F]{2}).{0,2})|(u\{(?![\da-fA-F]{1,}\})[^}]*\}?)|(u(?!\{|[\da-fA-F]{4}).{0,4}))/, REGEX_INVALID_ESCAPE = /((?:^|[^\\])(?:\\\\)*)\\(?:(0\d)|(x(?![\da-fA-F]{2}).{0,2})|(u\{(?![\da-fA-F]{1,}\})[^}]*\}?)|(u(?!\{|[\da-fA-F]{4}).{0,4}))/, TRAILING_SPACES = /\s+$/, COMPOUND_ASSIGN = ["-=", "+=", "/=", "*=", "%=", "||=", "&&=", "?=", "<<=", ">>=", ">>>=", "&=", "^=", "|=", "**=", "//=", "%%="], UNARY = ["NEW", "TYPEOF", "DELETE"], UNARY_MATH = ["!", "~"], SHIFT = ["<<", ">>", ">>>"], COMPARE = ["==", "!=", "<", ">", "<=", ">="], MATH = ["*", "/", "%", "//", "%%"], RELATION = ["IN", "OF", "INSTANCEOF"], BOOL = ["TRUE", "FALSE"], CALLABLE = ["IDENTIFIER", "PROPERTY", ")", "]", "?", "@", "THIS", "SUPER", "DYNAMIC_IMPORT"], INDEXABLE = CALLABLE.concat(["NUMBER", "INFINITY", "NAN", "STRING", "STRING_END", "REGEX", "REGEX_END", "BOOL", "NULL", "UNDEFINED", "}", "::"]), COMPARABLE_LEFT_SIDE = ["IDENTIFIER", ")", "]", "NUMBER"], NOT_REGEX = INDEXABLE.concat(["++", "--"]), LINE_BREAK = ["INDENT", "OUTDENT", "TERMINATOR"], INDENTABLE_CLOSERS = [")", "}", "]"];
            }.call(this), { exports: exports2 }.exports;
          }(), require2["./parser"] = function() {
            var exports2 = {}, module2 = { exports: exports2 }, parser = function() {
              function Parser() {
                this.yy = {};
              }
              var o = function(k, v, _o, l) {
                for (_o = _o || {}, l = k.length; l--; _o[k[l]] = v)
                  ;
                return _o;
              }, $V0 = [1, 24], $V1 = [1, 59], $V2 = [1, 97], $V3 = [1, 98], $V4 = [1, 93], $V5 = [1, 99], $V6 = [1, 100], $V7 = [1, 95], $V8 = [1, 96], $V9 = [1, 68], $Va = [1, 70], $Vb = [1, 71], $Vc = [1, 72], $Vd = [1, 73], $Ve = [1, 74], $Vf = [1, 76], $Vg = [1, 80], $Vh = [1, 77], $Vi = [1, 78], $Vj = [1, 62], $Vk = [1, 45], $Vl = [1, 38], $Vm = [1, 82], $Vn = [1, 83], $Vo = [1, 81], $Vp = [1, 92], $Vq = [1, 57], $Vr = [1, 63], $Vs = [1, 64], $Vt = [1, 79], $Vu = [1, 50], $Vv = [1, 58], $Vw = [1, 75], $Vx = [1, 87], $Vy = [1, 88], $Vz = [1, 89], $VA = [1, 90], $VB = [1, 56], $VC = [1, 86], $VD = [1, 40], $VE = [1, 41], $VF = [1, 61], $VG = [1, 42], $VH = [1, 43], $VI = [1, 44], $VJ = [1, 46], $VK = [1, 47], $VL = [1, 101], $VM = [1, 6, 35, 52, 153], $VN = [1, 6, 33, 35, 52, 74, 76, 96, 135, 142, 153, 156, 164], $VO = [1, 119], $VP = [1, 120], $VQ = [1, 121], $VR = [1, 116], $VS = [1, 104], $VT = [1, 103], $VU = [1, 102], $VV = [1, 105], $VW = [1, 106], $VX = [1, 107], $VY = [1, 108], $VZ = [1, 109], $V_ = [1, 110], $V$ = [1, 111], $V01 = [1, 112], $V11 = [1, 113], $V21 = [1, 114], $V31 = [1, 115], $V41 = [1, 123], $V51 = [1, 6, 33, 35, 52, 74, 76, 91, 96, 107, 118, 135, 142, 153, 155, 156, 157, 163, 164, 181, 187, 188, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202], $V61 = [2, 211], $V71 = [1, 129], $V81 = [1, 134], $V91 = [1, 130], $Va1 = [1, 131], $Vb1 = [1, 132], $Vc1 = [1, 135], $Vd1 = [1, 128], $Ve1 = [1, 6, 33, 35, 52, 74, 76, 96, 135, 142, 153, 155, 156, 157, 163, 164, 181], $Vf1 = [1, 6, 33, 35, 46, 47, 52, 74, 76, 91, 96, 105, 106, 107, 109, 110, 111, 114, 118, 133, 134, 135, 142, 153, 155, 156, 157, 163, 164, 181, 187, 188, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202], $Vg1 = [2, 129], $Vh1 = [2, 133], $Vi1 = [6, 33, 91, 96], $Vj1 = [2, 106], $Vk1 = [1, 147], $Vl1 = [1, 146], $Vm1 = [1, 141], $Vn1 = [1, 150], $Vo1 = [1, 155], $Vp1 = [1, 153], $Vq1 = [1, 159], $Vr1 = [1, 165], $Vs1 = [1, 161], $Vt1 = [1, 162], $Vu1 = [1, 164], $Vv1 = [1, 169], $Vw1 = [1, 6, 33, 35, 46, 47, 52, 66, 74, 76, 91, 96, 105, 106, 107, 109, 110, 111, 114, 118, 133, 134, 135, 142, 153, 155, 156, 157, 163, 164, 181, 187, 188, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202], $Vx1 = [2, 126], $Vy1 = [1, 6, 35, 52, 74, 76, 91, 96, 107, 118, 135, 142, 153, 155, 156, 157, 163, 164, 181, 187, 188, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202], $Vz1 = [2, 31], $VA1 = [1, 194], $VB1 = [1, 195], $VC1 = [2, 93], $VD1 = [1, 201], $VE1 = [1, 207], $VF1 = [1, 222], $VG1 = [1, 217], $VH1 = [1, 226], $VI1 = [1, 223], $VJ1 = [1, 228], $VK1 = [1, 229], $VL1 = [1, 231], $VM1 = [2, 216], $VN1 = [1, 233], $VO1 = [14, 32, 33, 39, 40, 44, 46, 47, 54, 55, 59, 60, 61, 62, 63, 64, 73, 75, 82, 85, 87, 88, 89, 93, 94, 108, 116, 119, 121, 129, 137, 147, 151, 152, 155, 157, 160, 163, 174, 180, 183, 184, 185, 186, 187, 188, 189, 190], $VP1 = [1, 6, 33, 35, 46, 47, 52, 66, 74, 76, 91, 96, 105, 106, 107, 109, 110, 111, 114, 118, 120, 133, 134, 135, 142, 153, 155, 156, 157, 163, 164, 181, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203], $VQ1 = [1, 245], $VR1 = [1, 246], $VS1 = [2, 155], $VT1 = [1, 262], $VU1 = [1, 263], $VV1 = [1, 265], $VW1 = [1, 275], $VX1 = [1, 276], $VY1 = [1, 6, 33, 35, 46, 47, 52, 70, 74, 76, 91, 96, 105, 106, 107, 109, 110, 111, 114, 118, 133, 134, 135, 142, 153, 155, 156, 157, 163, 164, 181, 187, 188, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202], $VZ1 = [1, 6, 33, 35, 36, 46, 47, 52, 66, 70, 74, 76, 91, 96, 105, 106, 107, 109, 110, 111, 114, 118, 120, 126, 133, 134, 135, 142, 153, 155, 156, 157, 163, 164, 171, 172, 173, 181, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203], $V_1 = [1, 6, 33, 35, 46, 47, 49, 51, 52, 57, 70, 74, 76, 91, 96, 105, 106, 107, 109, 110, 111, 114, 118, 133, 134, 135, 142, 153, 155, 156, 157, 163, 164, 181, 187, 188, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202], $V$1 = [1, 281], $V02 = [46, 47, 134], $V12 = [1, 320], $V22 = [1, 319], $V32 = [6, 33], $V42 = [2, 104], $V52 = [1, 326], $V62 = [6, 33, 35, 91, 96], $V72 = [6, 33, 35, 66, 76, 91, 96], $V82 = [1, 6, 33, 35, 52, 74, 76, 91, 96, 107, 118, 135, 142, 153, 155, 156, 157, 163, 164, 181, 187, 188, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202], $V92 = [2, 366], $Va2 = [2, 367], $Vb2 = [1, 6, 33, 35, 52, 74, 76, 91, 96, 107, 118, 135, 142, 153, 155, 156, 157, 163, 164, 181, 187, 188, 192, 194, 195, 196, 197, 198, 199, 200, 201, 202], $Vc2 = [46, 47, 105, 106, 109, 110, 111, 114, 133, 134], $Vd2 = [1, 355], $Ve2 = [1, 6, 33, 35, 52, 74, 76, 91, 96, 107, 118, 135, 142, 153, 155, 156, 157, 163, 164, 181], $Vf2 = [2, 91], $Vg2 = [1, 372], $Vh2 = [1, 374], $Vi2 = [1, 379], $Vj2 = [1, 381], $Vk2 = [6, 33, 74, 96], $Vl2 = [2, 236], $Vm2 = [2, 237], $Vn2 = [1, 6, 33, 35, 46, 47, 52, 66, 74, 76, 91, 96, 105, 106, 107, 109, 110, 111, 114, 118, 133, 134, 135, 142, 153, 155, 156, 157, 163, 164, 171, 172, 173, 181, 187, 188, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202], $Vo2 = [1, 395], $Vp2 = [14, 32, 33, 35, 39, 40, 44, 46, 47, 54, 55, 59, 60, 61, 62, 63, 64, 73, 74, 75, 76, 82, 85, 87, 88, 89, 93, 94, 96, 108, 116, 119, 121, 129, 137, 147, 151, 152, 155, 157, 160, 163, 174, 180, 183, 184, 185, 186, 187, 188, 189, 190], $Vq2 = [1, 397], $Vr2 = [6, 33, 35, 74, 96], $Vs2 = [6, 14, 32, 33, 35, 39, 40, 44, 46, 47, 54, 55, 59, 60, 61, 62, 63, 64, 73, 74, 75, 76, 82, 85, 87, 88, 89, 93, 94, 96, 108, 116, 119, 121, 129, 137, 147, 151, 152, 155, 157, 160, 163, 174, 180, 183, 184, 185, 186, 187, 188, 189, 190], $Vt2 = [6, 33, 35, 74, 96, 135], $Vu2 = [1, 6, 33, 35, 46, 47, 52, 57, 74, 76, 91, 96, 105, 106, 107, 109, 110, 111, 114, 118, 133, 134, 135, 142, 153, 155, 156, 157, 163, 164, 181, 187, 188, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202], $Vv2 = [1, 408], $Vw2 = [1, 6, 33, 35, 46, 47, 52, 66, 70, 74, 76, 91, 96, 105, 106, 107, 109, 110, 111, 114, 118, 120, 133, 134, 135, 142, 153, 155, 156, 157, 163, 164, 171, 172, 173, 181, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203], $Vx2 = [1, 6, 33, 35, 52, 74, 76, 91, 96, 107, 118, 135, 142, 153, 164, 181], $Vy2 = [1, 6, 33, 35, 52, 74, 76, 91, 96, 107, 118, 135, 142, 153, 156, 164, 181], $Vz2 = [2, 289], $VA2 = [171, 172, 173], $VB2 = [96, 171, 172, 173], $VC2 = [6, 33, 118], $VD2 = [1, 427], $VE2 = [6, 33, 35, 96, 118], $VF2 = [6, 33, 35, 70, 96, 118], $VG2 = [6, 33, 35, 66, 70, 76, 96, 105, 106, 109, 110, 111, 114, 118, 133, 134], $VH2 = [6, 33, 35, 76, 96, 105, 106, 109, 110, 111, 114, 118, 133, 134], $VI2 = [46, 47, 49, 51], $VJ2 = [1, 6, 33, 35, 52, 74, 76, 91, 96, 107, 118, 135, 142, 153, 155, 156, 157, 163, 164, 181, 187, 188, 194, 195, 196, 197, 198, 199, 200, 201, 202], $VK2 = [2, 356], $VL2 = [2, 355], $VM2 = [35, 107], $VN2 = [14, 32, 35, 39, 40, 44, 46, 47, 54, 55, 59, 60, 61, 62, 63, 64, 73, 75, 82, 85, 87, 88, 89, 93, 94, 107, 108, 116, 119, 121, 129, 137, 147, 151, 152, 155, 157, 160, 163, 174, 180, 183, 184, 185, 186, 187, 188, 189, 190], $VO2 = [2, 222], $VP2 = [6, 33, 35], $VQ2 = [2, 105], $VR2 = [1, 466], $VS2 = [1, 467], $VT2 = [1, 6, 33, 35, 46, 47, 52, 74, 76, 91, 96, 105, 106, 107, 109, 110, 111, 114, 118, 133, 134, 135, 142, 149, 150, 153, 155, 156, 157, 163, 164, 176, 178, 181, 187, 188, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202], $VU2 = [1, 335], $VV2 = [35, 176, 178], $VW2 = [1, 6, 35, 52, 74, 76, 91, 96, 107, 118, 135, 142, 153, 156, 164, 181], $VX2 = [1, 504], $VY2 = [1, 511], $VZ2 = [1, 6, 33, 35, 52, 74, 76, 96, 135, 142, 153, 156, 164, 181], $V_2 = [2, 120], $V$2 = [1, 524], $V03 = [33, 35, 74], $V13 = [1, 532], $V23 = [6, 33, 35, 96, 135], $V33 = [1, 6, 33, 35, 52, 74, 76, 91, 96, 107, 118, 135, 142, 153, 155, 156, 157, 163, 164, 176, 181, 187, 188, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202], $V43 = [1, 6, 33, 35, 52, 74, 76, 96, 135, 142, 153, 156, 164, 176], $V53 = [2, 303], $V63 = [2, 304], $V73 = [2, 319], $V83 = [1, 552], $V93 = [1, 553], $Va3 = [6, 33, 35, 118], $Vb3 = [1, 6, 33, 35, 52, 74, 76, 91, 96, 107, 118, 135, 142, 153, 155, 157, 163, 164, 181], $Vc3 = [6, 33, 35, 96], $Vd3 = [1, 6, 33, 35, 52, 74, 76, 91, 96, 107, 118, 135, 142, 149, 153, 155, 156, 157, 163, 164, 181, 187, 188, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202], $Ve3 = [33, 96], $Vf3 = [1, 604], $Vg3 = [1, 605], $Vh3 = [1, 612], $Vi3 = [1, 613], $Vj3 = [1, 630], $Vk3 = [1, 631], $Vl3 = [2, 274], $Vm3 = [2, 277], $Vn3 = [2, 290], $Vo3 = [2, 305], $Vp3 = [2, 309], $Vq3 = [2, 306], $Vr3 = [2, 310], $Vs3 = [2, 307], $Vt3 = [2, 308], $Vu3 = [2, 320], $Vv3 = [2, 321], $Vw3 = [1, 6, 33, 35, 52, 74, 76, 91, 96, 107, 118, 135, 142, 153, 155, 156, 157, 163, 181], $Vx3 = [2, 311], $Vy3 = [2, 313], $Vz3 = [2, 315], $VA3 = [2, 317], $VB3 = [2, 312], $VC3 = [2, 314], $VD3 = [2, 316], $VE3 = [2, 318], parser2 = { trace: function() {
              }, yy: {}, symbols_: { error: 2, Root: 3, Body: 4, Line: 5, TERMINATOR: 6, Expression: 7, ExpressionLine: 8, Statement: 9, FuncDirective: 10, YieldReturn: 11, AwaitReturn: 12, Return: 13, STATEMENT: 14, Import: 15, Export: 16, Value: 17, Code: 18, Operation: 19, Assign: 20, If: 21, Try: 22, While: 23, For: 24, Switch: 25, Class: 26, Throw: 27, Yield: 28, CodeLine: 29, IfLine: 30, OperationLine: 31, YIELD: 32, INDENT: 33, Object: 34, OUTDENT: 35, FROM: 36, Block: 37, Identifier: 38, IDENTIFIER: 39, JSX_TAG: 40, Property: 41, PROPERTY: 42, AlphaNumeric: 43, NUMBER: 44, String: 45, STRING: 46, STRING_START: 47, Interpolations: 48, STRING_END: 49, InterpolationChunk: 50, INTERPOLATION_START: 51, INTERPOLATION_END: 52, Regex: 53, REGEX: 54, REGEX_START: 55, Invocation: 56, REGEX_END: 57, Literal: 58, JS: 59, UNDEFINED: 60, NULL: 61, BOOL: 62, INFINITY: 63, NAN: 64, Assignable: 65, "=": 66, AssignObj: 67, ObjAssignable: 68, ObjRestValue: 69, ":": 70, SimpleObjAssignable: 71, ThisProperty: 72, "[": 73, "]": 74, "@": 75, "...": 76, ObjSpreadExpr: 77, ObjSpreadIdentifier: 78, Parenthetical: 79, Super: 80, This: 81, SUPER: 82, OptFuncExist: 83, Arguments: 84, DYNAMIC_IMPORT: 85, Accessor: 86, RETURN: 87, AWAIT: 88, PARAM_START: 89, ParamList: 90, PARAM_END: 91, FuncGlyph: 92, "->": 93, "=>": 94, OptComma: 95, ",": 96, Param: 97, ParamVar: 98, Array: 99, Splat: 100, SimpleAssignable: 101, Range: 102, DoIife: 103, MetaProperty: 104, ".": 105, INDEX_START: 106, INDEX_END: 107, NEW_TARGET: 108, "?.": 109, "::": 110, "?::": 111, Index: 112, IndexValue: 113, INDEX_SOAK: 114, Slice: 115, "{": 116, AssignList: 117, "}": 118, CLASS: 119, EXTENDS: 120, IMPORT: 121, ImportDefaultSpecifier: 122, ImportNamespaceSpecifier: 123, ImportSpecifierList: 124, ImportSpecifier: 125, AS: 126, DEFAULT: 127, IMPORT_ALL: 128, EXPORT: 129, ExportSpecifierList: 130, EXPORT_ALL: 131, ExportSpecifier: 132, FUNC_EXIST: 133, CALL_START: 134, CALL_END: 135, ArgList: 136, THIS: 137, Elisions: 138, ArgElisionList: 139, OptElisions: 140, RangeDots: 141, "..": 142, Arg: 143, ArgElision: 144, Elision: 145, SimpleArgs: 146, TRY: 147, Catch: 148, FINALLY: 149, CATCH: 150, THROW: 151, "(": 152, ")": 153, WhileLineSource: 154, WHILE: 155, WHEN: 156, UNTIL: 157, WhileSource: 158, Loop: 159, LOOP: 160, ForBody: 161, ForLineBody: 162, FOR: 163, BY: 164, ForStart: 165, ForSource: 166, ForLineSource: 167, ForVariables: 168, OWN: 169, ForValue: 170, FORIN: 171, FOROF: 172, FORFROM: 173, SWITCH: 174, Whens: 175, ELSE: 176, When: 177, LEADING_WHEN: 178, IfBlock: 179, IF: 180, POST_IF: 181, IfBlockLine: 182, UNARY: 183, DO: 184, DO_IIFE: 185, UNARY_MATH: 186, "-": 187, "+": 188, "--": 189, "++": 190, "?": 191, MATH: 192, "**": 193, SHIFT: 194, COMPARE: 195, "&": 196, "^": 197, "|": 198, "&&": 199, "||": 200, "BIN?": 201, RELATION: 202, COMPOUND_ASSIGN: 203, $accept: 0, $end: 1 }, terminals_: { 2: "error", 6: "TERMINATOR", 14: "STATEMENT", 32: "YIELD", 33: "INDENT", 35: "OUTDENT", 36: "FROM", 39: "IDENTIFIER", 40: "JSX_TAG", 42: "PROPERTY", 44: "NUMBER", 46: "STRING", 47: "STRING_START", 49: "STRING_END", 51: "INTERPOLATION_START", 52: "INTERPOLATION_END", 54: "REGEX", 55: "REGEX_START", 57: "REGEX_END", 59: "JS", 60: "UNDEFINED", 61: "NULL", 62: "BOOL", 63: "INFINITY", 64: "NAN", 66: "=", 70: ":", 73: "[", 74: "]", 75: "@", 76: "...", 82: "SUPER", 85: "DYNAMIC_IMPORT", 87: "RETURN", 88: "AWAIT", 89: "PARAM_START", 91: "PARAM_END", 93: "->", 94: "=>", 96: ",", 105: ".", 106: "INDEX_START", 107: "INDEX_END", 108: "NEW_TARGET", 109: "?.", 110: "::", 111: "?::", 114: "INDEX_SOAK", 116: "{", 118: "}", 119: "CLASS", 120: "EXTENDS", 121: "IMPORT", 126: "AS", 127: "DEFAULT", 128: "IMPORT_ALL", 129: "EXPORT", 131: "EXPORT_ALL", 133: "FUNC_EXIST", 134: "CALL_START", 135: "CALL_END", 137: "THIS", 142: "..", 147: "TRY", 149: "FINALLY", 150: "CATCH", 151: "THROW", 152: "(", 153: ")", 155: "WHILE", 156: "WHEN", 157: "UNTIL", 160: "LOOP", 163: "FOR", 164: "BY", 169: "OWN", 171: "FORIN", 172: "FOROF", 173: "FORFROM", 174: "SWITCH", 176: "ELSE", 178: "LEADING_WHEN", 180: "IF", 181: "POST_IF", 183: "UNARY", 184: "DO", 185: "DO_IIFE", 186: "UNARY_MATH", 187: "-", 188: "+", 189: "--", 190: "++", 191: "?", 192: "MATH", 193: "**", 194: "SHIFT", 195: "COMPARE", 196: "&", 197: "^", 198: "|", 199: "&&", 200: "||", 201: "BIN?", 202: "RELATION", 203: "COMPOUND_ASSIGN" }, productions_: [0, [3, 0], [3, 1], [4, 1], [4, 3], [4, 2], [5, 1], [5, 1], [5, 1], [5, 1], [10, 1], [10, 1], [9, 1], [9, 1], [9, 1], [9, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [8, 1], [8, 1], [8, 1], [28, 1], [28, 2], [28, 4], [28, 3], [37, 2], [37, 3], [38, 1], [38, 1], [41, 1], [43, 1], [43, 1], [45, 1], [45, 3], [48, 1], [48, 2], [50, 3], [50, 5], [50, 2], [50, 1], [53, 1], [53, 3], [58, 1], [58, 1], [58, 1], [58, 1], [58, 1], [58, 1], [58, 1], [58, 1], [20, 3], [20, 4], [20, 5], [67, 1], [67, 1], [67, 3], [67, 5], [67, 3], [67, 5], [71, 1], [71, 1], [71, 1], [68, 1], [68, 3], [68, 4], [68, 1], [69, 2], [69, 2], [69, 2], [69, 2], [77, 1], [77, 1], [77, 1], [77, 1], [77, 1], [77, 3], [77, 2], [77, 3], [77, 3], [78, 2], [78, 2], [13, 2], [13, 4], [13, 1], [11, 3], [11, 2], [12, 3], [12, 2], [18, 5], [18, 2], [29, 5], [29, 2], [92, 1], [92, 1], [95, 0], [95, 1], [90, 0], [90, 1], [90, 3], [90, 4], [90, 6], [97, 1], [97, 2], [97, 2], [97, 3], [97, 1], [98, 1], [98, 1], [98, 1], [98, 1], [100, 2], [100, 2], [101, 1], [101, 2], [101, 2], [101, 1], [65, 1], [65, 1], [65, 1], [17, 1], [17, 1], [17, 1], [17, 1], [17, 1], [17, 1], [17, 1], [17, 1], [17, 1], [80, 3], [80, 4], [80, 6], [104, 3], [86, 2], [86, 2], [86, 2], [86, 2], [86, 1], [86, 1], [86, 1], [112, 3], [112, 5], [112, 2], [113, 1], [113, 1], [34, 4], [117, 0], [117, 1], [117, 3], [117, 4], [117, 6], [26, 1], [26, 2], [26, 3], [26, 4], [26, 2], [26, 3], [26, 4], [26, 5], [15, 2], [15, 4], [15, 4], [15, 5], [15, 7], [15, 6], [15, 9], [124, 1], [124, 3], [124, 4], [124, 4], [124, 6], [125, 1], [125, 3], [125, 1], [125, 3], [122, 1], [123, 3], [16, 3], [16, 5], [16, 2], [16, 4], [16, 5], [16, 6], [16, 3], [16, 5], [16, 4], [16, 5], [16, 7], [130, 1], [130, 3], [130, 4], [130, 4], [130, 6], [132, 1], [132, 3], [132, 3], [132, 1], [132, 3], [56, 3], [56, 3], [56, 3], [56, 2], [83, 0], [83, 1], [84, 2], [84, 4], [81, 1], [81, 1], [72, 2], [99, 2], [99, 3], [99, 4], [141, 1], [141, 1], [102, 5], [102, 5], [115, 3], [115, 2], [115, 3], [115, 2], [115, 2], [115, 1], [136, 1], [136, 3], [136, 4], [136, 4], [136, 6], [143, 1], [143, 1], [143, 1], [143, 1], [139, 1], [139, 3], [139, 4], [139, 4], [139, 6], [144, 1], [144, 2], [140, 1], [140, 2], [138, 1], [138, 2], [145, 1], [145, 2], [146, 1], [146, 1], [146, 3], [146, 3], [22, 2], [22, 3], [22, 4], [22, 5], [148, 3], [148, 3], [148, 2], [27, 2], [27, 4], [79, 3], [79, 5], [154, 2], [154, 4], [154, 2], [154, 4], [158, 2], [158, 4], [158, 4], [158, 2], [158, 4], [158, 4], [23, 2], [23, 2], [23, 2], [23, 2], [23, 1], [159, 2], [159, 2], [24, 2], [24, 2], [24, 2], [24, 2], [161, 2], [161, 4], [161, 2], [162, 4], [162, 2], [165, 2], [165, 3], [165, 3], [170, 1], [170, 1], [170, 1], [170, 1], [168, 1], [168, 3], [166, 2], [166, 2], [166, 4], [166, 4], [166, 4], [166, 4], [166, 4], [166, 4], [166, 6], [166, 6], [166, 6], [166, 6], [166, 6], [166, 6], [166, 6], [166, 6], [166, 2], [166, 4], [166, 4], [167, 2], [167, 2], [167, 4], [167, 4], [167, 4], [167, 4], [167, 4], [167, 4], [167, 6], [167, 6], [167, 6], [167, 6], [167, 6], [167, 6], [167, 6], [167, 6], [167, 2], [167, 4], [167, 4], [25, 5], [25, 5], [25, 7], [25, 7], [25, 4], [25, 6], [175, 1], [175, 2], [177, 3], [177, 4], [179, 3], [179, 5], [21, 1], [21, 3], [21, 3], [21, 3], [182, 3], [182, 5], [30, 1], [30, 3], [30, 3], [30, 3], [31, 2], [31, 2], [31, 2], [19, 2], [19, 2], [19, 2], [19, 2], [19, 2], [19, 2], [19, 4], [19, 2], [19, 2], [19, 2], [19, 2], [19, 2], [19, 3], [19, 3], [19, 3], [19, 3], [19, 3], [19, 3], [19, 3], [19, 3], [19, 3], [19, 3], [19, 3], [19, 3], [19, 3], [19, 3], [19, 5], [19, 4], [103, 2]], performAction: function(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
                var $0 = $$.length - 1;
                switch (yystate) {
                  case 1:
                    return this.$ = yy.addDataToNode(yy, _$[$0], $$[$0], _$[$0], $$[$0], true)(new yy.Root(new yy.Block()));
                    break;
                  case 2:
                    return this.$ = yy.addDataToNode(yy, _$[$0], $$[$0], _$[$0], $$[$0], true)(new yy.Root($$[$0]));
                    break;
                  case 3:
                    this.$ = yy.addDataToNode(yy, _$[$0], $$[$0], _$[$0], $$[$0], true)(yy.Block.wrap([$$[$0]]));
                    break;
                  case 4:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)($$[$0 - 2].push($$[$0]));
                    break;
                  case 5:
                    this.$ = $$[$0 - 1];
                    break;
                  case 6:
                  case 7:
                  case 8:
                  case 9:
                  case 10:
                  case 11:
                  case 12:
                  case 14:
                  case 15:
                  case 16:
                  case 17:
                  case 18:
                  case 19:
                  case 20:
                  case 21:
                  case 22:
                  case 23:
                  case 24:
                  case 25:
                  case 26:
                  case 27:
                  case 28:
                  case 29:
                  case 30:
                  case 41:
                  case 52:
                  case 54:
                  case 64:
                  case 69:
                  case 70:
                  case 71:
                  case 72:
                  case 75:
                  case 80:
                  case 81:
                  case 82:
                  case 83:
                  case 84:
                  case 104:
                  case 105:
                  case 116:
                  case 117:
                  case 118:
                  case 119:
                  case 125:
                  case 126:
                  case 129:
                  case 135:
                  case 148:
                  case 236:
                  case 237:
                  case 238:
                  case 240:
                  case 253:
                  case 254:
                  case 297:
                  case 298:
                  case 353:
                  case 359:
                    this.$ = $$[$0];
                    break;
                  case 13:
                    this.$ = yy.addDataToNode(yy, _$[$0], $$[$0], _$[$0], $$[$0], true)(new yy.StatementLiteral($$[$0]));
                    break;
                  case 31:
                    this.$ = yy.addDataToNode(yy, _$[$0], $$[$0], _$[$0], $$[$0], true)(new yy.Op($$[$0], new yy.Value(new yy.Literal(""))));
                    break;
                  case 32:
                  case 363:
                  case 364:
                  case 365:
                  case 367:
                  case 368:
                  case 371:
                  case 394:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.Op($$[$0 - 1], $$[$0]));
                    break;
                  case 33:
                  case 372:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 3], $$[$0 - 3], _$[$0], $$[$0], true)(new yy.Op($$[$0 - 3], $$[$0 - 1]));
                    break;
                  case 34:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(new yy.Op($$[$0 - 2].concat($$[$0 - 1]), $$[$0]));
                    break;
                  case 35:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.Block());
                    break;
                  case 36:
                  case 149:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)($$[$0 - 1]);
                    break;
                  case 37:
                    this.$ = yy.addDataToNode(yy, _$[$0], $$[$0], _$[$0], $$[$0], true)(new yy.IdentifierLiteral($$[$0]));
                    break;
                  case 38:
                    this.$ = yy.addDataToNode(yy, _$[$0], $$[$0], _$[$0], $$[$0], true)(function() {
                      var ref, ref1, ref2, ref3;
                      return new yy.JSXTag($$[$0].toString(), { tagNameLocationData: $$[$0].tagNameToken[2], closingTagOpeningBracketLocationData: null == (ref = $$[$0].closingTagOpeningBracketToken) ? void 0 : ref[2], closingTagSlashLocationData: null == (ref1 = $$[$0].closingTagSlashToken) ? void 0 : ref1[2], closingTagNameLocationData: null == (ref2 = $$[$0].closingTagNameToken) ? void 0 : ref2[2], closingTagClosingBracketLocationData: null == (ref3 = $$[$0].closingTagClosingBracketToken) ? void 0 : ref3[2] });
                    }());
                    break;
                  case 39:
                    this.$ = yy.addDataToNode(yy, _$[$0], $$[$0], _$[$0], $$[$0], true)(new yy.PropertyName($$[$0].toString()));
                    break;
                  case 40:
                    this.$ = yy.addDataToNode(yy, _$[$0], $$[$0], _$[$0], $$[$0], true)(new yy.NumberLiteral($$[$0].toString(), { parsedValue: $$[$0].parsedValue }));
                    break;
                  case 42:
                    this.$ = yy.addDataToNode(yy, _$[$0], $$[$0], _$[$0], $$[$0], true)(new yy.StringLiteral($$[$0].slice(1, -1), { quote: $$[$0].quote, initialChunk: $$[$0].initialChunk, finalChunk: $$[$0].finalChunk, indent: $$[$0].indent, double: $$[$0].double, heregex: $$[$0].heregex }));
                    break;
                  case 43:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(new yy.StringWithInterpolations(yy.Block.wrap($$[$0 - 1]), { quote: $$[$0 - 2].quote, startQuote: yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], null, null, true)(new yy.Literal($$[$0 - 2].toString())) }));
                    break;
                  case 44:
                  case 107:
                  case 156:
                  case 175:
                  case 197:
                  case 231:
                  case 245:
                  case 249:
                  case 301:
                  case 347:
                    this.$ = yy.addDataToNode(yy, _$[$0], $$[$0], _$[$0], $$[$0], true)([$$[$0]]);
                    break;
                  case 45:
                  case 246:
                  case 250:
                  case 348:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)($$[$0 - 1].concat($$[$0]));
                    break;
                  case 46:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(new yy.Interpolation($$[$0 - 1]));
                    break;
                  case 47:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 4], $$[$0 - 4], _$[$0], $$[$0], true)(new yy.Interpolation($$[$0 - 2]));
                    break;
                  case 48:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.Interpolation());
                    break;
                  case 49:
                  case 282:
                    this.$ = yy.addDataToNode(yy, _$[$0], $$[$0], _$[$0], $$[$0], true)($$[$0]);
                    break;
                  case 50:
                    this.$ = yy.addDataToNode(yy, _$[$0], $$[$0], _$[$0], $$[$0], true)(new yy.RegexLiteral($$[$0].toString(), { delimiter: $$[$0].delimiter, heregexCommentTokens: $$[$0].heregexCommentTokens }));
                    break;
                  case 51:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(new yy.RegexWithInterpolations($$[$0 - 1], { heregexCommentTokens: $$[$0].heregexCommentTokens }));
                    break;
                  case 53:
                    this.$ = yy.addDataToNode(yy, _$[$0], $$[$0], _$[$0], $$[$0], true)(new yy.PassthroughLiteral($$[$0].toString(), { here: $$[$0].here, generated: $$[$0].generated }));
                    break;
                  case 55:
                    this.$ = yy.addDataToNode(yy, _$[$0], $$[$0], _$[$0], $$[$0], true)(new yy.UndefinedLiteral($$[$0]));
                    break;
                  case 56:
                    this.$ = yy.addDataToNode(yy, _$[$0], $$[$0], _$[$0], $$[$0], true)(new yy.NullLiteral($$[$0]));
                    break;
                  case 57:
                    this.$ = yy.addDataToNode(yy, _$[$0], $$[$0], _$[$0], $$[$0], true)(new yy.BooleanLiteral($$[$0].toString(), { originalValue: $$[$0].original }));
                    break;
                  case 58:
                    this.$ = yy.addDataToNode(yy, _$[$0], $$[$0], _$[$0], $$[$0], true)(new yy.InfinityLiteral($$[$0].toString(), { originalValue: $$[$0].original }));
                    break;
                  case 59:
                    this.$ = yy.addDataToNode(yy, _$[$0], $$[$0], _$[$0], $$[$0], true)(new yy.NaNLiteral($$[$0]));
                    break;
                  case 60:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(new yy.Assign($$[$0 - 2], $$[$0]));
                    break;
                  case 61:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 3], $$[$0 - 3], _$[$0], $$[$0], true)(new yy.Assign($$[$0 - 3], $$[$0]));
                    break;
                  case 62:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 4], $$[$0 - 4], _$[$0], $$[$0], true)(new yy.Assign($$[$0 - 4], $$[$0 - 1]));
                    break;
                  case 63:
                  case 122:
                  case 127:
                  case 128:
                  case 130:
                  case 131:
                  case 132:
                  case 133:
                  case 134:
                  case 136:
                  case 137:
                  case 299:
                  case 300:
                    this.$ = yy.addDataToNode(yy, _$[$0], $$[$0], _$[$0], $$[$0], true)(new yy.Value($$[$0]));
                    break;
                  case 65:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(new yy.Assign(yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], null, null, true)(new yy.Value($$[$0 - 2])), $$[$0], "object", { operatorToken: yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], null, null, true)(new yy.Literal($$[$0 - 1])) }));
                    break;
                  case 66:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 4], $$[$0 - 4], _$[$0], $$[$0], true)(new yy.Assign(yy.addDataToNode(yy, _$[$0 - 4], $$[$0 - 4], null, null, true)(new yy.Value($$[$0 - 4])), $$[$0 - 1], "object", { operatorToken: yy.addDataToNode(yy, _$[$0 - 3], $$[$0 - 3], null, null, true)(new yy.Literal($$[$0 - 3])) }));
                    break;
                  case 67:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(new yy.Assign(yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], null, null, true)(new yy.Value($$[$0 - 2])), $$[$0], null, { operatorToken: yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], null, null, true)(new yy.Literal($$[$0 - 1])) }));
                    break;
                  case 68:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 4], $$[$0 - 4], _$[$0], $$[$0], true)(new yy.Assign(yy.addDataToNode(yy, _$[$0 - 4], $$[$0 - 4], null, null, true)(new yy.Value($$[$0 - 4])), $$[$0 - 1], null, { operatorToken: yy.addDataToNode(yy, _$[$0 - 3], $$[$0 - 3], null, null, true)(new yy.Literal($$[$0 - 3])) }));
                    break;
                  case 73:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(new yy.Value(new yy.ComputedPropertyName($$[$0 - 1])));
                    break;
                  case 74:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 3], $$[$0 - 3], _$[$0], $$[$0], true)(new yy.Value(yy.addDataToNode(yy, _$[$0 - 3], $$[$0 - 3], null, null, true)(new yy.ThisLiteral($$[$0 - 3])), [yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], null, null, true)(new yy.ComputedPropertyName($$[$0 - 1]))], "this"));
                    break;
                  case 76:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.Splat(new yy.Value($$[$0 - 1])));
                    break;
                  case 77:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.Splat(new yy.Value($$[$0]), { postfix: false }));
                    break;
                  case 78:
                  case 120:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.Splat($$[$0 - 1]));
                    break;
                  case 79:
                  case 121:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.Splat($$[$0], { postfix: false }));
                    break;
                  case 85:
                  case 209:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(new yy.SuperCall(yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], null, null, true)(new yy.Super()), $$[$0], $$[$0 - 1].soak, $$[$0 - 2]));
                    break;
                  case 86:
                  case 210:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.DynamicImportCall(yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], null, null, true)(new yy.DynamicImport()), $$[$0]));
                    break;
                  case 87:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(new yy.Call(new yy.Value($$[$0 - 2]), $$[$0], $$[$0 - 1].soak));
                    break;
                  case 88:
                  case 208:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(new yy.Call($$[$0 - 2], $$[$0], $$[$0 - 1].soak));
                    break;
                  case 89:
                  case 90:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.Value($$[$0 - 1]).add($$[$0]));
                    break;
                  case 91:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.Return($$[$0]));
                    break;
                  case 92:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 3], $$[$0 - 3], _$[$0], $$[$0], true)(new yy.Return(new yy.Value($$[$0 - 1])));
                    break;
                  case 93:
                    this.$ = yy.addDataToNode(yy, _$[$0], $$[$0], _$[$0], $$[$0], true)(new yy.Return());
                    break;
                  case 94:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(new yy.YieldReturn($$[$0], { returnKeyword: yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], null, null, true)(new yy.Literal($$[$0 - 1])) }));
                    break;
                  case 95:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.YieldReturn(null, { returnKeyword: yy.addDataToNode(yy, _$[$0], $$[$0], null, null, true)(new yy.Literal($$[$0])) }));
                    break;
                  case 96:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(new yy.AwaitReturn($$[$0], { returnKeyword: yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], null, null, true)(new yy.Literal($$[$0 - 1])) }));
                    break;
                  case 97:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.AwaitReturn(null, { returnKeyword: yy.addDataToNode(yy, _$[$0], $$[$0], null, null, true)(new yy.Literal($$[$0])) }));
                    break;
                  case 98:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 4], $$[$0 - 4], _$[$0], $$[$0], true)(new yy.Code($$[$0 - 3], $$[$0], $$[$0 - 1], yy.addDataToNode(yy, _$[$0 - 4], $$[$0 - 4], null, null, true)(new yy.Literal($$[$0 - 4]))));
                    break;
                  case 99:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.Code([], $$[$0], $$[$0 - 1]));
                    break;
                  case 100:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 4], $$[$0 - 4], _$[$0], $$[$0], true)(new yy.Code($$[$0 - 3], yy.addDataToNode(yy, _$[$0], $$[$0], null, null, true)(yy.Block.wrap([$$[$0]])), $$[$0 - 1], yy.addDataToNode(yy, _$[$0 - 4], $$[$0 - 4], null, null, true)(new yy.Literal($$[$0 - 4]))));
                    break;
                  case 101:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.Code([], yy.addDataToNode(yy, _$[$0], $$[$0], null, null, true)(yy.Block.wrap([$$[$0]])), $$[$0 - 1]));
                    break;
                  case 102:
                  case 103:
                    this.$ = yy.addDataToNode(yy, _$[$0], $$[$0], _$[$0], $$[$0], true)(new yy.FuncGlyph($$[$0]));
                    break;
                  case 106:
                  case 155:
                  case 247:
                    this.$ = yy.addDataToNode(yy, _$[$0], $$[$0], _$[$0], $$[$0], true)([]);
                    break;
                  case 108:
                  case 157:
                  case 176:
                  case 198:
                  case 232:
                  case 241:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)($$[$0 - 2].concat($$[$0]));
                    break;
                  case 109:
                  case 158:
                  case 177:
                  case 199:
                  case 233:
                  case 242:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 3], $$[$0 - 3], _$[$0], $$[$0], true)($$[$0 - 3].concat($$[$0]));
                    break;
                  case 110:
                  case 159:
                  case 179:
                  case 201:
                  case 235:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 5], $$[$0 - 5], _$[$0], $$[$0], true)($$[$0 - 5].concat($$[$0 - 2]));
                    break;
                  case 111:
                    this.$ = yy.addDataToNode(yy, _$[$0], $$[$0], _$[$0], $$[$0], true)(new yy.Param($$[$0]));
                    break;
                  case 112:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.Param($$[$0 - 1], null, true));
                    break;
                  case 113:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.Param($$[$0], null, { postfix: false }));
                    break;
                  case 114:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(new yy.Param($$[$0 - 2], $$[$0]));
                    break;
                  case 115:
                  case 239:
                    this.$ = yy.addDataToNode(yy, _$[$0], $$[$0], _$[$0], $$[$0], true)(new yy.Expansion());
                    break;
                  case 123:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)($$[$0 - 1].add($$[$0]));
                    break;
                  case 124:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.Value($$[$0 - 1]).add($$[$0]));
                    break;
                  case 138:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(new yy.Super(yy.addDataToNode(yy, _$[$0], $$[$0], null, null, true)(new yy.Access($$[$0])), yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], null, null, true)(new yy.Literal($$[$0 - 2]))));
                    break;
                  case 139:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 3], $$[$0 - 3], _$[$0], $$[$0], true)(new yy.Super(yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], null, null, true)(new yy.Index($$[$0 - 1])), yy.addDataToNode(yy, _$[$0 - 3], $$[$0 - 3], null, null, true)(new yy.Literal($$[$0 - 3]))));
                    break;
                  case 140:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 5], $$[$0 - 5], _$[$0], $$[$0], true)(new yy.Super(yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], null, null, true)(new yy.Index($$[$0 - 2])), yy.addDataToNode(yy, _$[$0 - 5], $$[$0 - 5], null, null, true)(new yy.Literal($$[$0 - 5]))));
                    break;
                  case 141:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(new yy.MetaProperty(yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], null, null, true)(new yy.IdentifierLiteral($$[$0 - 2])), yy.addDataToNode(yy, _$[$0], $$[$0], null, null, true)(new yy.Access($$[$0]))));
                    break;
                  case 142:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.Access($$[$0]));
                    break;
                  case 143:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.Access($$[$0], { soak: true }));
                    break;
                  case 144:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)([yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], null, null, true)(new yy.Access(new yy.PropertyName("prototype"), { shorthand: true })), yy.addDataToNode(yy, _$[$0], $$[$0], null, null, true)(new yy.Access($$[$0]))]);
                    break;
                  case 145:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)([yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], null, null, true)(new yy.Access(new yy.PropertyName("prototype"), { shorthand: true, soak: true })), yy.addDataToNode(yy, _$[$0], $$[$0], null, null, true)(new yy.Access($$[$0]))]);
                    break;
                  case 146:
                    this.$ = yy.addDataToNode(yy, _$[$0], $$[$0], _$[$0], $$[$0], true)(new yy.Access(new yy.PropertyName("prototype"), { shorthand: true }));
                    break;
                  case 147:
                    this.$ = yy.addDataToNode(yy, _$[$0], $$[$0], _$[$0], $$[$0], true)(new yy.Access(new yy.PropertyName("prototype"), { shorthand: true, soak: true }));
                    break;
                  case 150:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 4], $$[$0 - 4], _$[$0], $$[$0], true)($$[$0 - 2]);
                    break;
                  case 151:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(yy.extend($$[$0], { soak: true }));
                    break;
                  case 152:
                    this.$ = yy.addDataToNode(yy, _$[$0], $$[$0], _$[$0], $$[$0], true)(new yy.Index($$[$0]));
                    break;
                  case 153:
                    this.$ = yy.addDataToNode(yy, _$[$0], $$[$0], _$[$0], $$[$0], true)(new yy.Slice($$[$0]));
                    break;
                  case 154:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 3], $$[$0 - 3], _$[$0], $$[$0], true)(new yy.Obj($$[$0 - 2], $$[$0 - 3].generated));
                    break;
                  case 160:
                    this.$ = yy.addDataToNode(yy, _$[$0], $$[$0], _$[$0], $$[$0], true)(new yy.Class());
                    break;
                  case 161:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.Class(null, null, $$[$0]));
                    break;
                  case 162:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(new yy.Class(null, $$[$0]));
                    break;
                  case 163:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 3], $$[$0 - 3], _$[$0], $$[$0], true)(new yy.Class(null, $$[$0 - 1], $$[$0]));
                    break;
                  case 164:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.Class($$[$0]));
                    break;
                  case 165:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(new yy.Class($$[$0 - 1], null, $$[$0]));
                    break;
                  case 166:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 3], $$[$0 - 3], _$[$0], $$[$0], true)(new yy.Class($$[$0 - 2], $$[$0]));
                    break;
                  case 167:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 4], $$[$0 - 4], _$[$0], $$[$0], true)(new yy.Class($$[$0 - 3], $$[$0 - 1], $$[$0]));
                    break;
                  case 168:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.ImportDeclaration(null, $$[$0]));
                    break;
                  case 169:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 3], $$[$0 - 3], _$[$0], $$[$0], true)(new yy.ImportDeclaration(new yy.ImportClause($$[$0 - 2], null), $$[$0]));
                    break;
                  case 170:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 3], $$[$0 - 3], _$[$0], $$[$0], true)(new yy.ImportDeclaration(new yy.ImportClause(null, $$[$0 - 2]), $$[$0]));
                    break;
                  case 171:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 4], $$[$0 - 4], _$[$0], $$[$0], true)(new yy.ImportDeclaration(new yy.ImportClause(null, new yy.ImportSpecifierList([])), $$[$0]));
                    break;
                  case 172:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 6], $$[$0 - 6], _$[$0], $$[$0], true)(new yy.ImportDeclaration(new yy.ImportClause(null, new yy.ImportSpecifierList($$[$0 - 4])), $$[$0]));
                    break;
                  case 173:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 5], $$[$0 - 5], _$[$0], $$[$0], true)(new yy.ImportDeclaration(new yy.ImportClause($$[$0 - 4], $$[$0 - 2]), $$[$0]));
                    break;
                  case 174:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 8], $$[$0 - 8], _$[$0], $$[$0], true)(new yy.ImportDeclaration(new yy.ImportClause($$[$0 - 7], new yy.ImportSpecifierList($$[$0 - 4])), $$[$0]));
                    break;
                  case 178:
                  case 200:
                  case 234:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 3], $$[$0 - 3], _$[$0], $$[$0], true)($$[$0 - 2]);
                    break;
                  case 180:
                    this.$ = yy.addDataToNode(yy, _$[$0], $$[$0], _$[$0], $$[$0], true)(new yy.ImportSpecifier($$[$0]));
                    break;
                  case 181:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(new yy.ImportSpecifier($$[$0 - 2], $$[$0]));
                    break;
                  case 182:
                    this.$ = yy.addDataToNode(yy, _$[$0], $$[$0], _$[$0], $$[$0], true)(new yy.ImportSpecifier(yy.addDataToNode(yy, _$[$0], $$[$0], null, null, true)(new yy.DefaultLiteral($$[$0]))));
                    break;
                  case 183:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(new yy.ImportSpecifier(yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], null, null, true)(new yy.DefaultLiteral($$[$0 - 2])), $$[$0]));
                    break;
                  case 184:
                    this.$ = yy.addDataToNode(yy, _$[$0], $$[$0], _$[$0], $$[$0], true)(new yy.ImportDefaultSpecifier($$[$0]));
                    break;
                  case 185:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(new yy.ImportNamespaceSpecifier(new yy.Literal($$[$0 - 2]), $$[$0]));
                    break;
                  case 186:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(new yy.ExportNamedDeclaration(new yy.ExportSpecifierList([])));
                    break;
                  case 187:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 4], $$[$0 - 4], _$[$0], $$[$0], true)(new yy.ExportNamedDeclaration(new yy.ExportSpecifierList($$[$0 - 2])));
                    break;
                  case 188:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.ExportNamedDeclaration($$[$0]));
                    break;
                  case 189:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 3], $$[$0 - 3], _$[$0], $$[$0], true)(new yy.ExportNamedDeclaration(yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(new yy.Assign($$[$0 - 2], $$[$0], null, { moduleDeclaration: "export" }))));
                    break;
                  case 190:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 4], $$[$0 - 4], _$[$0], $$[$0], true)(new yy.ExportNamedDeclaration(yy.addDataToNode(yy, _$[$0 - 3], $$[$0 - 3], _$[$0], $$[$0], true)(new yy.Assign($$[$0 - 3], $$[$0], null, { moduleDeclaration: "export" }))));
                    break;
                  case 191:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 5], $$[$0 - 5], _$[$0], $$[$0], true)(new yy.ExportNamedDeclaration(yy.addDataToNode(yy, _$[$0 - 4], $$[$0 - 4], _$[$0], $$[$0], true)(new yy.Assign($$[$0 - 4], $$[$0 - 1], null, { moduleDeclaration: "export" }))));
                    break;
                  case 192:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(new yy.ExportDefaultDeclaration($$[$0]));
                    break;
                  case 193:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 4], $$[$0 - 4], _$[$0], $$[$0], true)(new yy.ExportDefaultDeclaration(new yy.Value($$[$0 - 1])));
                    break;
                  case 194:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 3], $$[$0 - 3], _$[$0], $$[$0], true)(new yy.ExportAllDeclaration(new yy.Literal($$[$0 - 2]), $$[$0]));
                    break;
                  case 195:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 4], $$[$0 - 4], _$[$0], $$[$0], true)(new yy.ExportNamedDeclaration(new yy.ExportSpecifierList([]), $$[$0]));
                    break;
                  case 196:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 6], $$[$0 - 6], _$[$0], $$[$0], true)(new yy.ExportNamedDeclaration(new yy.ExportSpecifierList($$[$0 - 4]), $$[$0]));
                    break;
                  case 202:
                    this.$ = yy.addDataToNode(yy, _$[$0], $$[$0], _$[$0], $$[$0], true)(new yy.ExportSpecifier($$[$0]));
                    break;
                  case 203:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(new yy.ExportSpecifier($$[$0 - 2], $$[$0]));
                    break;
                  case 204:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(new yy.ExportSpecifier($$[$0 - 2], yy.addDataToNode(yy, _$[$0], $$[$0], null, null, true)(new yy.DefaultLiteral($$[$0]))));
                    break;
                  case 205:
                    this.$ = yy.addDataToNode(yy, _$[$0], $$[$0], _$[$0], $$[$0], true)(new yy.ExportSpecifier(yy.addDataToNode(yy, _$[$0], $$[$0], null, null, true)(new yy.DefaultLiteral($$[$0]))));
                    break;
                  case 206:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(new yy.ExportSpecifier(yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], null, null, true)(new yy.DefaultLiteral($$[$0 - 2])), $$[$0]));
                    break;
                  case 207:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(new yy.TaggedTemplateCall($$[$0 - 2], $$[$0], $$[$0 - 1].soak));
                    break;
                  case 211:
                    this.$ = yy.addDataToNode(yy, _$[$0], $$[$0], _$[$0], $$[$0], true)({ soak: false });
                    break;
                  case 212:
                    this.$ = yy.addDataToNode(yy, _$[$0], $$[$0], _$[$0], $$[$0], true)({ soak: true });
                    break;
                  case 213:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)([]);
                    break;
                  case 214:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 3], $$[$0 - 3], _$[$0], $$[$0], true)(function() {
                      return $$[$0 - 2].implicit = $$[$0 - 3].generated, $$[$0 - 2];
                    }());
                    break;
                  case 215:
                  case 216:
                    this.$ = yy.addDataToNode(yy, _$[$0], $$[$0], _$[$0], $$[$0], true)(new yy.Value(new yy.ThisLiteral($$[$0])));
                    break;
                  case 217:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.Value(yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], null, null, true)(new yy.ThisLiteral($$[$0 - 1])), [yy.addDataToNode(yy, _$[$0], $$[$0], null, null, true)(new yy.Access($$[$0]))], "this"));
                    break;
                  case 218:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.Arr([]));
                    break;
                  case 219:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(new yy.Arr($$[$0 - 1]));
                    break;
                  case 220:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 3], $$[$0 - 3], _$[$0], $$[$0], true)(new yy.Arr([].concat($$[$0 - 2], $$[$0 - 1])));
                    break;
                  case 221:
                    this.$ = yy.addDataToNode(yy, _$[$0], $$[$0], _$[$0], $$[$0], true)({ exclusive: false });
                    break;
                  case 222:
                    this.$ = yy.addDataToNode(yy, _$[$0], $$[$0], _$[$0], $$[$0], true)({ exclusive: true });
                    break;
                  case 223:
                  case 224:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 4], $$[$0 - 4], _$[$0], $$[$0], true)(new yy.Range($$[$0 - 3], $$[$0 - 1], $$[$0 - 2].exclusive ? "exclusive" : "inclusive"));
                    break;
                  case 225:
                  case 227:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(new yy.Range($$[$0 - 2], $$[$0], $$[$0 - 1].exclusive ? "exclusive" : "inclusive"));
                    break;
                  case 226:
                  case 228:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.Range($$[$0 - 1], null, $$[$0].exclusive ? "exclusive" : "inclusive"));
                    break;
                  case 229:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.Range(null, $$[$0], $$[$0 - 1].exclusive ? "exclusive" : "inclusive"));
                    break;
                  case 230:
                    this.$ = yy.addDataToNode(yy, _$[$0], $$[$0], _$[$0], $$[$0], true)(new yy.Range(null, null, $$[$0].exclusive ? "exclusive" : "inclusive"));
                    break;
                  case 243:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 3], $$[$0 - 3], _$[$0], $$[$0], true)($$[$0 - 2].concat($$[$0 - 1]));
                    break;
                  case 244:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 5], $$[$0 - 5], _$[$0], $$[$0], true)($$[$0 - 5].concat($$[$0 - 4], $$[$0 - 2], $$[$0 - 1]));
                    break;
                  case 248:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)([].concat($$[$0]));
                    break;
                  case 251:
                    this.$ = yy.addDataToNode(yy, _$[$0], $$[$0], _$[$0], $$[$0], true)(new yy.Elision());
                    break;
                  case 252:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)($$[$0 - 1]);
                    break;
                  case 255:
                  case 256:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)([].concat($$[$0 - 2], $$[$0]));
                    break;
                  case 257:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.Try($$[$0]));
                    break;
                  case 258:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(new yy.Try($$[$0 - 1], $$[$0]));
                    break;
                  case 259:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 3], $$[$0 - 3], _$[$0], $$[$0], true)(new yy.Try($$[$0 - 2], null, $$[$0], yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], null, null, true)(new yy.Literal($$[$0 - 1]))));
                    break;
                  case 260:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 4], $$[$0 - 4], _$[$0], $$[$0], true)(new yy.Try($$[$0 - 3], $$[$0 - 2], $$[$0], yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], null, null, true)(new yy.Literal($$[$0 - 1]))));
                    break;
                  case 261:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(new yy.Catch($$[$0], $$[$0 - 1]));
                    break;
                  case 262:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(new yy.Catch($$[$0], yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], null, null, true)(new yy.Value($$[$0 - 1]))));
                    break;
                  case 263:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.Catch($$[$0]));
                    break;
                  case 264:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.Throw($$[$0]));
                    break;
                  case 265:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 3], $$[$0 - 3], _$[$0], $$[$0], true)(new yy.Throw(new yy.Value($$[$0 - 1])));
                    break;
                  case 266:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(new yy.Parens($$[$0 - 1]));
                    break;
                  case 267:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 4], $$[$0 - 4], _$[$0], $$[$0], true)(new yy.Parens($$[$0 - 2]));
                    break;
                  case 268:
                  case 272:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.While($$[$0]));
                    break;
                  case 269:
                  case 273:
                  case 274:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 3], $$[$0 - 3], _$[$0], $$[$0], true)(new yy.While($$[$0 - 2], { guard: $$[$0] }));
                    break;
                  case 270:
                  case 275:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.While($$[$0], { invert: true }));
                    break;
                  case 271:
                  case 276:
                  case 277:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 3], $$[$0 - 3], _$[$0], $$[$0], true)(new yy.While($$[$0 - 2], { invert: true, guard: $$[$0] }));
                    break;
                  case 278:
                  case 279:
                  case 287:
                  case 288:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)($$[$0 - 1].addBody($$[$0]));
                    break;
                  case 280:
                  case 281:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(Object.assign($$[$0], { postfix: true }).addBody(yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], null, null, true)(yy.Block.wrap([$$[$0 - 1]]))));
                    break;
                  case 283:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.While(yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], null, null, true)(new yy.BooleanLiteral("true")), { isLoop: true }).addBody($$[$0]));
                    break;
                  case 284:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.While(yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], null, null, true)(new yy.BooleanLiteral("true")), { isLoop: true }).addBody(yy.addDataToNode(yy, _$[$0], $$[$0], null, null, true)(yy.Block.wrap([$$[$0]]))));
                    break;
                  case 285:
                  case 286:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(function() {
                      return $$[$0].postfix = true, $$[$0].addBody($$[$0 - 1]);
                    }());
                    break;
                  case 289:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.For([], { source: yy.addDataToNode(yy, _$[$0], $$[$0], null, null, true)(new yy.Value($$[$0])) }));
                    break;
                  case 290:
                  case 292:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 3], $$[$0 - 3], _$[$0], $$[$0], true)(new yy.For([], { source: yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], null, null, true)(new yy.Value($$[$0 - 2])), step: $$[$0] }));
                    break;
                  case 291:
                  case 293:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)($$[$0 - 1].addSource($$[$0]));
                    break;
                  case 294:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.For([], { name: $$[$0][0], index: $$[$0][1] }));
                    break;
                  case 295:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(function() {
                      var _$$$$ = _slicedToArray($$[$0], 2), index, name;
                      return name = _$$$$[0], index = _$$$$[1], new yy.For([], { name, index, await: true, awaitTag: yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], null, null, true)(new yy.Literal($$[$0 - 1])) });
                    }());
                    break;
                  case 296:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(function() {
                      var _$$$$2 = _slicedToArray($$[$0], 2), index, name;
                      return name = _$$$$2[0], index = _$$$$2[1], new yy.For([], { name, index, own: true, ownTag: yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], null, null, true)(new yy.Literal($$[$0 - 1])) });
                    }());
                    break;
                  case 302:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)([$$[$0 - 2], $$[$0]]);
                    break;
                  case 303:
                  case 322:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)({ source: $$[$0] });
                    break;
                  case 304:
                  case 323:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)({ source: $$[$0], object: true });
                    break;
                  case 305:
                  case 306:
                  case 324:
                  case 325:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 3], $$[$0 - 3], _$[$0], $$[$0], true)({ source: $$[$0 - 2], guard: $$[$0] });
                    break;
                  case 307:
                  case 308:
                  case 326:
                  case 327:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 3], $$[$0 - 3], _$[$0], $$[$0], true)({ source: $$[$0 - 2], guard: $$[$0], object: true });
                    break;
                  case 309:
                  case 310:
                  case 328:
                  case 329:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 3], $$[$0 - 3], _$[$0], $$[$0], true)({ source: $$[$0 - 2], step: $$[$0] });
                    break;
                  case 311:
                  case 312:
                  case 313:
                  case 314:
                  case 330:
                  case 331:
                  case 332:
                  case 333:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 5], $$[$0 - 5], _$[$0], $$[$0], true)({ source: $$[$0 - 4], guard: $$[$0 - 2], step: $$[$0] });
                    break;
                  case 315:
                  case 316:
                  case 317:
                  case 318:
                  case 334:
                  case 335:
                  case 336:
                  case 337:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 5], $$[$0 - 5], _$[$0], $$[$0], true)({ source: $$[$0 - 4], step: $$[$0 - 2], guard: $$[$0] });
                    break;
                  case 319:
                  case 338:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)({ source: $$[$0], from: true });
                    break;
                  case 320:
                  case 321:
                  case 339:
                  case 340:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 3], $$[$0 - 3], _$[$0], $$[$0], true)({ source: $$[$0 - 2], guard: $$[$0], from: true });
                    break;
                  case 341:
                  case 342:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 4], $$[$0 - 4], _$[$0], $$[$0], true)(new yy.Switch($$[$0 - 3], $$[$0 - 1]));
                    break;
                  case 343:
                  case 344:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 6], $$[$0 - 6], _$[$0], $$[$0], true)(new yy.Switch($$[$0 - 5], $$[$0 - 3], yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0 - 1], $$[$0 - 1], true)($$[$0 - 1])));
                    break;
                  case 345:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 3], $$[$0 - 3], _$[$0], $$[$0], true)(new yy.Switch(null, $$[$0 - 1]));
                    break;
                  case 346:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 5], $$[$0 - 5], _$[$0], $$[$0], true)(new yy.Switch(null, $$[$0 - 3], yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0 - 1], $$[$0 - 1], true)($$[$0 - 1])));
                    break;
                  case 349:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(new yy.SwitchWhen($$[$0 - 1], $$[$0]));
                    break;
                  case 350:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 3], $$[$0 - 3], _$[$0], $$[$0], false)(yy.addDataToNode(yy, _$[$0 - 3], $$[$0 - 3], _$[$0 - 1], $$[$0 - 1], true)(new yy.SwitchWhen($$[$0 - 2], $$[$0 - 1])));
                    break;
                  case 351:
                  case 357:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(new yy.If($$[$0 - 1], $$[$0], { type: $$[$0 - 2] }));
                    break;
                  case 352:
                  case 358:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 4], $$[$0 - 4], _$[$0], $$[$0], true)($$[$0 - 4].addElse(yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(new yy.If($$[$0 - 1], $$[$0], { type: $$[$0 - 2] }))));
                    break;
                  case 354:
                  case 360:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)($$[$0 - 2].addElse($$[$0]));
                    break;
                  case 355:
                  case 356:
                  case 361:
                  case 362:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(new yy.If($$[$0], yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], null, null, true)(yy.Block.wrap([$$[$0 - 2]])), { type: $$[$0 - 1], postfix: true }));
                    break;
                  case 366:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.Op($$[$0 - 1].toString(), $$[$0], void 0, void 0, { originalOperator: $$[$0 - 1].original }));
                    break;
                  case 369:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.Op("-", $$[$0]));
                    break;
                  case 370:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.Op("+", $$[$0]));
                    break;
                  case 373:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.Op("--", $$[$0]));
                    break;
                  case 374:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.Op("++", $$[$0]));
                    break;
                  case 375:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.Op("--", $$[$0 - 1], null, true));
                    break;
                  case 376:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.Op("++", $$[$0 - 1], null, true));
                    break;
                  case 377:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 1], $$[$0 - 1], _$[$0], $$[$0], true)(new yy.Existence($$[$0 - 1]));
                    break;
                  case 378:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(new yy.Op("+", $$[$0 - 2], $$[$0]));
                    break;
                  case 379:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(new yy.Op("-", $$[$0 - 2], $$[$0]));
                    break;
                  case 380:
                  case 381:
                  case 382:
                  case 384:
                  case 385:
                  case 386:
                  case 389:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(new yy.Op($$[$0 - 1], $$[$0 - 2], $$[$0]));
                    break;
                  case 383:
                  case 387:
                  case 388:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(new yy.Op($$[$0 - 1].toString(), $$[$0 - 2], $$[$0], void 0, { originalOperator: $$[$0 - 1].original }));
                    break;
                  case 390:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(function() {
                      var ref, ref1;
                      return new yy.Op($$[$0 - 1].toString(), $$[$0 - 2], $$[$0], void 0, { invertOperator: null == (ref = null == (ref1 = $$[$0 - 1].invert) ? void 0 : ref1.original) ? $$[$0 - 1].invert : ref });
                    }());
                    break;
                  case 391:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 2], $$[$0 - 2], _$[$0], $$[$0], true)(new yy.Assign($$[$0 - 2], $$[$0], $$[$0 - 1].toString(), { originalContext: $$[$0 - 1].original }));
                    break;
                  case 392:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 4], $$[$0 - 4], _$[$0], $$[$0], true)(new yy.Assign($$[$0 - 4], $$[$0 - 1], $$[$0 - 3].toString(), { originalContext: $$[$0 - 3].original }));
                    break;
                  case 393:
                    this.$ = yy.addDataToNode(yy, _$[$0 - 3], $$[$0 - 3], _$[$0], $$[$0], true)(new yy.Assign($$[$0 - 3], $$[$0], $$[$0 - 2].toString(), { originalContext: $$[$0 - 2].original }));
                }
              }, table: [{ 1: [2, 1], 3: 1, 4: 2, 5: 3, 7: 4, 8: 5, 9: 6, 10: 7, 11: 27, 12: 28, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $V1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vk, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 1: [3] }, { 1: [2, 2], 6: $VL }, o($VM, [2, 3]), o($VN, [2, 6], { 158: 117, 161: 118, 165: 122, 155: $VO, 157: $VP, 163: $VQ, 181: $VR, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), o($VN, [2, 7]), o($VN, [2, 8], { 165: 122, 158: 124, 161: 125, 155: $VO, 157: $VP, 163: $VQ, 181: $V41 }), o($VN, [2, 9]), o($V51, [2, 16], { 83: 126, 86: 127, 112: 133, 46: $V61, 47: $V61, 134: $V61, 105: $V71, 106: $V81, 109: $V91, 110: $Va1, 111: $Vb1, 114: $Vc1, 133: $Vd1 }), o($V51, [2, 17], { 112: 133, 86: 136, 105: $V71, 106: $V81, 109: $V91, 110: $Va1, 111: $Vb1, 114: $Vc1 }), o($V51, [2, 18]), o($V51, [2, 19]), o($V51, [2, 20]), o($V51, [2, 21]), o($V51, [2, 22]), o($V51, [2, 23]), o($V51, [2, 24]), o($V51, [2, 25]), o($V51, [2, 26]), o($V51, [2, 27]), o($VN, [2, 28]), o($VN, [2, 29]), o($VN, [2, 30]), o($Ve1, [2, 12]), o($Ve1, [2, 13]), o($Ve1, [2, 14]), o($Ve1, [2, 15]), o($VN, [2, 10]), o($VN, [2, 11]), o($Vf1, $Vg1, { 66: [1, 137] }), o($Vf1, [2, 130]), o($Vf1, [2, 131]), o($Vf1, [2, 132]), o($Vf1, $Vh1), o($Vf1, [2, 134]), o($Vf1, [2, 135]), o($Vf1, [2, 136]), o($Vf1, [2, 137]), o($Vi1, $Vj1, { 90: 138, 97: 139, 98: 140, 38: 142, 72: 143, 99: 144, 34: 145, 39: $V2, 40: $V3, 73: $Vk1, 75: $Vl1, 76: $Vm1, 116: $Vp }), { 5: 149, 7: 4, 8: 5, 9: 6, 10: 7, 11: 27, 12: 28, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $V1, 33: $Vn1, 34: 66, 37: 148, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vk, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 151, 8: 152, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 156, 8: 157, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 158, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 166, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 167, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 168, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 33: $Vv1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: [1, 170], 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 17: 172, 18: 173, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 174, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 171, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 137: $Vt, 152: $Vw, 185: $Vu1 }, { 17: 172, 18: 173, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 174, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 175, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 137: $Vt, 152: $Vw, 185: $Vu1 }, o($Vw1, $Vx1, { 189: [1, 176], 190: [1, 177], 203: [1, 178] }), o($V51, [2, 353], { 176: [1, 179] }), { 33: $Vn1, 37: 180 }, { 33: $Vn1, 37: 181 }, { 33: $Vn1, 37: 182 }, o($V51, [2, 282]), { 33: $Vn1, 37: 183 }, { 33: $Vn1, 37: 184 }, { 7: 185, 8: 186, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 33: [1, 187], 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o($Vy1, [2, 160], { 58: 30, 79: 31, 102: 32, 56: 33, 103: 34, 81: 35, 80: 36, 104: 37, 99: 65, 34: 66, 43: 67, 53: 69, 38: 84, 72: 85, 45: 94, 92: 160, 17: 172, 18: 173, 65: 174, 37: 188, 101: 190, 33: $Vn1, 39: $V2, 40: $V3, 44: $V4, 46: $V5, 47: $V6, 54: $V7, 55: $V8, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 73: $Vf, 75: $Vg, 82: $Vh, 85: $Vi, 89: $Vq1, 93: $Vm, 94: $Vn, 108: $Vo, 116: $Vp, 120: [1, 189], 137: $Vt, 152: $Vw, 185: $Vu1 }), { 7: 191, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 33: [1, 192], 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o([1, 6, 35, 52, 74, 76, 96, 135, 142, 153, 155, 156, 157, 163, 164, 181, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202], $Vz1, { 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 13: 23, 15: 25, 16: 26, 65: 29, 58: 30, 79: 31, 102: 32, 56: 33, 103: 34, 81: 35, 80: 36, 104: 37, 101: 48, 179: 49, 158: 51, 154: 52, 159: 53, 161: 54, 162: 55, 99: 65, 34: 66, 43: 67, 53: 69, 38: 84, 72: 85, 165: 91, 45: 94, 92: 160, 9: 163, 7: 193, 14: $V0, 32: $Vo1, 33: $VA1, 36: $VB1, 39: $V2, 40: $V3, 44: $V4, 46: $V5, 47: $V6, 54: $V7, 55: $V8, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 73: $Vf, 75: $Vg, 82: $Vh, 85: $Vi, 87: [1, 196], 88: $Vp1, 89: $Vq1, 93: $Vm, 94: $Vn, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 160: $Vz, 174: $VB, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }), o($VN, [2, 359], { 176: [1, 197] }), { 18: 199, 29: 198, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn }, o([1, 6, 35, 52, 74, 76, 96, 135, 142, 153, 155, 156, 157, 163, 164, 181], $VC1, { 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 13: 23, 15: 25, 16: 26, 65: 29, 58: 30, 79: 31, 102: 32, 56: 33, 103: 34, 81: 35, 80: 36, 104: 37, 101: 48, 179: 49, 158: 51, 154: 52, 159: 53, 161: 54, 162: 55, 99: 65, 34: 66, 43: 67, 53: 69, 38: 84, 72: 85, 165: 91, 45: 94, 92: 160, 9: 163, 7: 200, 14: $V0, 32: $Vo1, 33: $VD1, 39: $V2, 40: $V3, 44: $V4, 46: $V5, 47: $V6, 54: $V7, 55: $V8, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 73: $Vf, 75: $Vg, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 93: $Vm, 94: $Vn, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 160: $Vz, 174: $VB, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }), { 38: 206, 39: $V2, 40: $V3, 45: 202, 46: $V5, 47: $V6, 116: [1, 205], 122: 203, 123: 204, 128: $VE1 }, { 26: 209, 38: 210, 39: $V2, 40: $V3, 116: [1, 208], 119: $Vq, 127: [1, 211], 131: [1, 212] }, o($Vw1, [2, 127]), o($Vw1, [2, 128]), o($Vf1, [2, 52]), o($Vf1, [2, 53]), o($Vf1, [2, 54]), o($Vf1, [2, 55]), o($Vf1, [2, 56]), o($Vf1, [2, 57]), o($Vf1, [2, 58]), o($Vf1, [2, 59]), { 4: 213, 5: 3, 7: 4, 8: 5, 9: 6, 10: 7, 11: 27, 12: 28, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $V1, 33: [1, 214], 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vk, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 215, 8: 216, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 33: $VF1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 74: $VG1, 75: $Vg, 76: $VH1, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 96: $VI1, 99: 65, 100: 225, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 138: 218, 139: 219, 143: 224, 144: 221, 145: 220, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 83: 227, 105: $VJ1, 106: $VK1, 133: $Vd1, 134: $V61 }, { 84: 230, 134: $VL1 }, o($Vf1, [2, 215]), o($Vf1, $VM1, { 41: 232, 42: $VN1 }), { 105: [1, 234] }, o($VO1, [2, 102]), o($VO1, [2, 103]), o($VP1, [2, 122]), o($VP1, [2, 125]), { 7: 235, 8: 236, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 237, 8: 238, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 239, 8: 240, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 242, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 33: $Vn1, 34: 66, 37: 241, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 34: 251, 38: 248, 39: $V2, 40: $V3, 72: 249, 73: $Vf, 75: $Vl1, 88: $VQ1, 99: 250, 102: 243, 116: $Vp, 168: 244, 169: $VR1, 170: 247 }, { 166: 252, 167: 253, 171: [1, 254], 172: [1, 255], 173: [1, 256] }, o([6, 33, 96, 118], $VS1, { 45: 94, 117: 257, 67: 258, 68: 259, 69: 260, 71: 261, 43: 264, 77: 266, 38: 267, 41: 268, 72: 269, 78: 270, 34: 271, 79: 272, 80: 273, 81: 274, 39: $V2, 40: $V3, 42: $VN1, 44: $V4, 46: $V5, 47: $V6, 73: $VT1, 75: $VU1, 76: $VV1, 82: $VW1, 85: $VX1, 116: $Vp, 137: $Vt, 152: $Vw }), o($VY1, [2, 40]), o($VY1, [2, 41]), o($Vf1, [2, 50]), { 17: 172, 18: 173, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 277, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 174, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 278, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 137: $Vt, 152: $Vw, 185: $Vu1 }, o($VZ1, [2, 37]), o($VZ1, [2, 38]), o($V_1, [2, 42]), { 45: 282, 46: $V5, 47: $V6, 48: 279, 50: 280, 51: $V$1 }, o($VM, [2, 5], { 7: 4, 8: 5, 9: 6, 10: 7, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 13: 23, 15: 25, 16: 26, 11: 27, 12: 28, 65: 29, 58: 30, 79: 31, 102: 32, 56: 33, 103: 34, 81: 35, 80: 36, 104: 37, 92: 39, 101: 48, 179: 49, 158: 51, 154: 52, 159: 53, 161: 54, 162: 55, 182: 60, 99: 65, 34: 66, 43: 67, 53: 69, 38: 84, 72: 85, 165: 91, 45: 94, 5: 283, 14: $V0, 32: $V1, 39: $V2, 40: $V3, 44: $V4, 46: $V5, 47: $V6, 54: $V7, 55: $V8, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 73: $Vf, 75: $Vg, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vk, 89: $Vl, 93: $Vm, 94: $Vn, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 155: $Vx, 157: $Vy, 160: $Vz, 163: $VA, 174: $VB, 180: $VC, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }), o($V51, [2, 377]), { 7: 284, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 285, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 286, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 287, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 288, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 289, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 290, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 291, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 292, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 293, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 294, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 295, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 296, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 297, 8: 298, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o($V51, [2, 281]), o($V51, [2, 286]), { 7: 237, 8: 299, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 239, 8: 300, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 34: 251, 38: 248, 39: $V2, 40: $V3, 72: 249, 73: $Vf, 75: $Vl1, 88: $VQ1, 99: 250, 102: 301, 116: $Vp, 168: 244, 169: $VR1, 170: 247 }, { 166: 252, 171: [1, 302], 172: [1, 303], 173: [1, 304] }, { 7: 305, 8: 306, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o($V51, [2, 280]), o($V51, [2, 285]), { 45: 307, 46: $V5, 47: $V6, 84: 308, 134: $VL1 }, o($VP1, [2, 123]), o($V02, [2, 212]), { 41: 309, 42: $VN1 }, { 41: 310, 42: $VN1 }, o($VP1, [2, 146], { 41: 311, 42: $VN1 }), o($VP1, [2, 147], { 41: 312, 42: $VN1 }), o($VP1, [2, 148]), { 7: 315, 8: 317, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 33: [1, 314], 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 76: $V12, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 113: 313, 115: 316, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 141: 318, 142: $V22, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 106: $V81, 112: 321, 114: $Vc1 }, o($VP1, [2, 124]), { 6: [1, 323], 7: 322, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 33: [1, 324], 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o($V32, $V42, { 95: 327, 91: [1, 325], 96: $V52 }), o($V62, [2, 107]), o($V62, [2, 111], { 66: [1, 329], 76: [1, 328] }), o($V62, [2, 115], { 38: 142, 72: 143, 99: 144, 34: 145, 98: 330, 39: $V2, 40: $V3, 73: $Vk1, 75: $Vl1, 116: $Vp }), o($V72, [2, 116]), o($V72, [2, 117]), o($V72, [2, 118]), o($V72, [2, 119]), { 41: 232, 42: $VN1 }, { 7: 331, 8: 332, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 33: $VF1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 74: $VG1, 75: $Vg, 76: $VH1, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 96: $VI1, 99: 65, 100: 225, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 138: 218, 139: 219, 143: 224, 144: 221, 145: 220, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o($Vf1, [2, 99]), o($VN, [2, 101]), { 4: 334, 5: 3, 7: 4, 8: 5, 9: 6, 10: 7, 11: 27, 12: 28, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $V1, 34: 66, 35: [1, 333], 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vk, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o($V82, $V92, { 158: 117, 161: 118, 165: 122, 191: $VU }), o($VN, [2, 363]), { 7: 168, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 33: $Vv1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 155: $VO, 157: $VP, 158: 124, 161: 125, 163: $VQ, 165: 122, 181: $V41 }, o([1, 6, 35, 52, 74, 76, 91, 96, 107, 118, 135, 142, 153, 155, 156, 157, 163, 164, 181, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202], $Vz1, { 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 13: 23, 15: 25, 16: 26, 65: 29, 58: 30, 79: 31, 102: 32, 56: 33, 103: 34, 81: 35, 80: 36, 104: 37, 101: 48, 179: 49, 158: 51, 154: 52, 159: 53, 161: 54, 162: 55, 99: 65, 34: 66, 43: 67, 53: 69, 38: 84, 72: 85, 165: 91, 45: 94, 92: 160, 9: 163, 7: 193, 14: $V0, 32: $Vo1, 33: $VA1, 36: $VB1, 39: $V2, 40: $V3, 44: $V4, 46: $V5, 47: $V6, 54: $V7, 55: $V8, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 73: $Vf, 75: $Vg, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 93: $Vm, 94: $Vn, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 160: $Vz, 174: $VB, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }), o($V82, $Va2, { 158: 117, 161: 118, 165: 122, 191: $VU }), o($VN, [2, 364]), o($Vb2, [2, 368], { 158: 117, 161: 118, 165: 122, 191: $VU, 193: $VW }), o($Vi1, $Vj1, { 97: 139, 98: 140, 38: 142, 72: 143, 99: 144, 34: 145, 90: 336, 39: $V2, 40: $V3, 73: $Vk1, 75: $Vl1, 76: $Vm1, 116: $Vp }), { 33: $Vn1, 37: 148 }, { 7: 337, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 338, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 155: $VO, 157: $VP, 158: 124, 161: 125, 163: $VQ, 165: 122, 181: [1, 339] }, { 18: 199, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn }, { 7: 340, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o($Vb2, [2, 369], { 158: 117, 161: 118, 165: 122, 191: $VU, 193: $VW }), o($Vb2, [2, 370], { 158: 117, 161: 118, 165: 122, 191: $VU, 193: $VW }), o($V82, [2, 371], { 158: 117, 161: 118, 165: 122, 191: $VU }), { 34: 341, 116: $Vp }, o($VN, [2, 97], { 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 13: 23, 15: 25, 16: 26, 65: 29, 58: 30, 79: 31, 102: 32, 56: 33, 103: 34, 81: 35, 80: 36, 104: 37, 101: 48, 179: 49, 158: 51, 154: 52, 159: 53, 161: 54, 162: 55, 99: 65, 34: 66, 43: 67, 53: 69, 38: 84, 72: 85, 165: 91, 45: 94, 92: 160, 9: 163, 7: 342, 14: $V0, 32: $Vo1, 39: $V2, 40: $V3, 44: $V4, 46: $V5, 47: $V6, 54: $V7, 55: $V8, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 73: $Vf, 75: $Vg, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 93: $Vm, 94: $Vn, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 155: $VC1, 157: $VC1, 163: $VC1, 181: $VC1, 160: $Vz, 174: $VB, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }), o($V51, [2, 373], { 46: $Vx1, 47: $Vx1, 105: $Vx1, 106: $Vx1, 109: $Vx1, 110: $Vx1, 111: $Vx1, 114: $Vx1, 133: $Vx1, 134: $Vx1 }), o($V02, $V61, { 83: 126, 86: 127, 112: 133, 105: $V71, 106: $V81, 109: $V91, 110: $Va1, 111: $Vb1, 114: $Vc1, 133: $Vd1 }), { 86: 136, 105: $V71, 106: $V81, 109: $V91, 110: $Va1, 111: $Vb1, 112: 133, 114: $Vc1 }, o($Vc2, $Vg1), o($V51, [2, 374], { 46: $Vx1, 47: $Vx1, 105: $Vx1, 106: $Vx1, 109: $Vx1, 110: $Vx1, 111: $Vx1, 114: $Vx1, 133: $Vx1, 134: $Vx1 }), o($V51, [2, 375]), o($V51, [2, 376]), { 6: [1, 345], 7: 343, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 33: [1, 344], 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 33: $Vn1, 37: 346, 180: [1, 347] }, o($V51, [2, 257], { 148: 348, 149: [1, 349], 150: [1, 350] }), o($V51, [2, 278]), o($V51, [2, 279]), o($V51, [2, 287]), o($V51, [2, 288]), { 33: [1, 351], 155: $VO, 157: $VP, 158: 117, 161: 118, 163: $VQ, 165: 122, 181: $VR, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }, { 33: [1, 352] }, { 175: 353, 177: 354, 178: $Vd2 }, o($V51, [2, 161]), { 7: 356, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o($Vy1, [2, 164], { 37: 357, 33: $Vn1, 46: $Vx1, 47: $Vx1, 105: $Vx1, 106: $Vx1, 109: $Vx1, 110: $Vx1, 111: $Vx1, 114: $Vx1, 133: $Vx1, 134: $Vx1, 120: [1, 358] }), o($Ve2, [2, 264], { 158: 117, 161: 118, 165: 122, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), { 34: 359, 116: $Vp }, o($Ve2, [2, 32], { 158: 117, 161: 118, 165: 122, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), { 34: 360, 116: $Vp }, { 7: 361, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o([1, 6, 35, 52, 74, 76, 96, 135, 142, 153, 156, 164], [2, 95], { 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 13: 23, 15: 25, 16: 26, 65: 29, 58: 30, 79: 31, 102: 32, 56: 33, 103: 34, 81: 35, 80: 36, 104: 37, 101: 48, 179: 49, 158: 51, 154: 52, 159: 53, 161: 54, 162: 55, 99: 65, 34: 66, 43: 67, 53: 69, 38: 84, 72: 85, 165: 91, 45: 94, 92: 160, 9: 163, 7: 362, 14: $V0, 32: $Vo1, 33: $VD1, 39: $V2, 40: $V3, 44: $V4, 46: $V5, 47: $V6, 54: $V7, 55: $V8, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 73: $Vf, 75: $Vg, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 93: $Vm, 94: $Vn, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 155: $VC1, 157: $VC1, 163: $VC1, 181: $VC1, 160: $Vz, 174: $VB, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }), { 33: $Vn1, 37: 363, 180: [1, 364] }, o($VN, [2, 365]), o($Vf1, [2, 394]), o($Ve1, $Vf2, { 158: 117, 161: 118, 165: 122, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), { 34: 365, 116: $Vp }, o($Ve1, [2, 168]), { 36: [1, 366], 96: [1, 367] }, { 36: [1, 368] }, { 33: $Vg2, 38: 373, 39: $V2, 40: $V3, 118: [1, 369], 124: 370, 125: 371, 127: $Vh2 }, o([36, 96], [2, 184]), { 126: [1, 375] }, { 33: $Vi2, 38: 380, 39: $V2, 40: $V3, 118: [1, 376], 127: $Vj2, 130: 377, 132: 378 }, o($Ve1, [2, 188]), { 66: [1, 382] }, { 7: 383, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 33: [1, 384], 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 36: [1, 385] }, { 6: $VL, 153: [1, 386] }, { 4: 387, 5: 3, 7: 4, 8: 5, 9: 6, 10: 7, 11: 27, 12: 28, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $V1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vk, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o($Vk2, $Vl2, { 158: 117, 161: 118, 165: 122, 141: 388, 76: [1, 389], 142: $V22, 155: $VO, 157: $VP, 163: $VQ, 181: $VR, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), o($Vk2, $Vm2, { 141: 390, 76: $V12, 142: $V22 }), o($Vn2, [2, 218]), { 7: 331, 8: 332, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 74: [1, 391], 75: $Vg, 76: $VH1, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 96: $VI1, 99: 65, 100: 225, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 143: 393, 145: 392, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o([6, 33, 74], $V42, { 140: 394, 95: 396, 96: $Vo2 }), o($Vp2, [2, 249], { 6: $Vq2 }), o($Vr2, [2, 240]), { 7: 331, 8: 332, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 33: $VF1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 76: $VH1, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 96: $VI1, 99: 65, 100: 225, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 138: 399, 139: 398, 143: 224, 144: 221, 145: 220, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o($Vs2, [2, 251]), o($Vr2, [2, 245]), o($Vt2, [2, 238]), o($Vt2, [2, 239], { 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 13: 23, 15: 25, 16: 26, 65: 29, 58: 30, 79: 31, 102: 32, 56: 33, 103: 34, 81: 35, 80: 36, 104: 37, 101: 48, 179: 49, 158: 51, 154: 52, 159: 53, 161: 54, 162: 55, 99: 65, 34: 66, 43: 67, 53: 69, 38: 84, 72: 85, 165: 91, 45: 94, 92: 160, 9: 163, 7: 400, 14: $V0, 32: $Vo1, 39: $V2, 40: $V3, 44: $V4, 46: $V5, 47: $V6, 54: $V7, 55: $V8, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 73: $Vf, 75: $Vg, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 93: $Vm, 94: $Vn, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 155: $Vx, 157: $Vy, 160: $Vz, 163: $VA, 174: $VB, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }), { 84: 401, 134: $VL1 }, { 41: 402, 42: $VN1 }, { 7: 403, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 33: [1, 404], 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o($Vu2, [2, 210]), { 7: 331, 8: 332, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 33: $Vv2, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 76: $VH1, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 100: 225, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 135: [1, 405], 136: 406, 137: $Vt, 143: 407, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o($Vw2, [2, 217]), o($Vw2, [2, 39]), { 41: 409, 42: $VN1 }, { 33: $Vn1, 37: 410, 155: $VO, 157: $VP, 158: 117, 161: 118, 163: $VQ, 165: 122, 181: $VR, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }, { 33: $Vn1, 37: 411 }, o($Vx2, [2, 272], { 158: 117, 161: 118, 165: 122, 155: $VO, 156: [1, 412], 157: $VP, 163: $VQ, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), { 33: [2, 268], 156: [1, 413] }, o($Vx2, [2, 275], { 158: 117, 161: 118, 165: 122, 155: $VO, 156: [1, 414], 157: $VP, 163: $VQ, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), { 33: [2, 270], 156: [1, 415] }, o($V51, [2, 283]), o($Vy2, [2, 284], { 158: 117, 161: 118, 165: 122, 155: $VO, 157: $VP, 163: $VQ, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), { 33: $Vz2, 164: [1, 416] }, o($VA2, [2, 294]), { 34: 251, 38: 248, 39: $V2, 40: $V3, 72: 249, 73: $Vk1, 75: $Vl1, 99: 250, 116: $Vp, 168: 417, 170: 247 }, { 34: 251, 38: 248, 39: $V2, 40: $V3, 72: 249, 73: $Vk1, 75: $Vl1, 99: 250, 116: $Vp, 168: 418, 170: 247 }, o($VA2, [2, 301], { 96: [1, 419] }), o($VB2, [2, 297]), o($VB2, [2, 298]), o($VB2, [2, 299]), o($VB2, [2, 300]), o($V51, [2, 291]), { 33: [2, 293] }, { 7: 420, 8: 421, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 422, 8: 423, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 424, 8: 425, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o($VC2, $V42, { 95: 426, 96: $VD2 }), o($VE2, [2, 156]), o($VE2, [2, 63], { 70: [1, 428] }), o($VE2, [2, 64]), o($VF2, [2, 72], { 112: 133, 83: 431, 86: 432, 66: [1, 429], 76: [1, 430], 105: $V71, 106: $V81, 109: $V91, 110: $Va1, 111: $Vb1, 114: $Vc1, 133: $Vd1, 134: $V61 }), { 7: 433, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o([76, 105, 106, 109, 110, 111, 114, 133, 134], $VM1, { 41: 232, 42: $VN1, 73: [1, 434] }), o($VF2, [2, 75]), { 34: 271, 38: 267, 39: $V2, 40: $V3, 41: 268, 42: $VN1, 71: 435, 72: 269, 75: $Vg, 77: 436, 78: 270, 79: 272, 80: 273, 81: 274, 82: $VW1, 85: $VX1, 116: $Vp, 137: $Vt, 152: $Vw }, { 76: [1, 437], 83: 438, 86: 439, 105: $V71, 106: $V81, 109: $V91, 110: $Va1, 111: $Vb1, 112: 133, 114: $Vc1, 133: $Vd1, 134: $V61 }, o($VG2, [2, 69]), o($VG2, [2, 70]), o($VG2, [2, 71]), o($VH2, [2, 80]), o($VH2, [2, 81]), o($VH2, [2, 82]), o($VH2, [2, 83]), o($VH2, [2, 84]), { 83: 440, 105: $VJ1, 106: $VK1, 133: $Vd1, 134: $V61 }, { 84: 441, 134: $VL1 }, o($Vc2, $Vh1, { 57: [1, 442] }), o($Vc2, $Vx1), { 45: 282, 46: $V5, 47: $V6, 49: [1, 443], 50: 444, 51: $V$1 }, o($VI2, [2, 44]), { 4: 445, 5: 3, 7: 4, 8: 5, 9: 6, 10: 7, 11: 27, 12: 28, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $V1, 33: [1, 446], 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 52: [1, 447], 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vk, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o($VI2, [2, 49]), o($VM, [2, 4]), o($VJ2, [2, 378], { 158: 117, 161: 118, 165: 122, 191: $VU, 192: $VV, 193: $VW }), o($VJ2, [2, 379], { 158: 117, 161: 118, 165: 122, 191: $VU, 192: $VV, 193: $VW }), o($Vb2, [2, 380], { 158: 117, 161: 118, 165: 122, 191: $VU, 193: $VW }), o($Vb2, [2, 381], { 158: 117, 161: 118, 165: 122, 191: $VU, 193: $VW }), o([1, 6, 33, 35, 52, 74, 76, 91, 96, 107, 118, 135, 142, 153, 155, 156, 157, 163, 164, 181, 194, 195, 196, 197, 198, 199, 200, 201, 202], [2, 382], { 158: 117, 161: 118, 165: 122, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW }), o([1, 6, 33, 35, 52, 74, 76, 91, 96, 107, 118, 135, 142, 153, 155, 156, 157, 163, 164, 181, 195, 196, 197, 198, 199, 200, 201], [2, 383], { 158: 117, 161: 118, 165: 122, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 202: $V31 }), o([1, 6, 33, 35, 52, 74, 76, 91, 96, 107, 118, 135, 142, 153, 155, 156, 157, 163, 164, 181, 196, 197, 198, 199, 200, 201], [2, 384], { 158: 117, 161: 118, 165: 122, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 202: $V31 }), o([1, 6, 33, 35, 52, 74, 76, 91, 96, 107, 118, 135, 142, 153, 155, 156, 157, 163, 164, 181, 197, 198, 199, 200, 201], [2, 385], { 158: 117, 161: 118, 165: 122, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 202: $V31 }), o([1, 6, 33, 35, 52, 74, 76, 91, 96, 107, 118, 135, 142, 153, 155, 156, 157, 163, 164, 181, 198, 199, 200, 201], [2, 386], { 158: 117, 161: 118, 165: 122, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 202: $V31 }), o([1, 6, 33, 35, 52, 74, 76, 91, 96, 107, 118, 135, 142, 153, 155, 156, 157, 163, 164, 181, 199, 200, 201], [2, 387], { 158: 117, 161: 118, 165: 122, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 202: $V31 }), o([1, 6, 33, 35, 52, 74, 76, 91, 96, 107, 118, 135, 142, 153, 155, 156, 157, 163, 164, 181, 200, 201], [2, 388], { 158: 117, 161: 118, 165: 122, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 202: $V31 }), o([1, 6, 33, 35, 52, 74, 76, 91, 96, 107, 118, 135, 142, 153, 155, 156, 157, 163, 164, 181, 201], [2, 389], { 158: 117, 161: 118, 165: 122, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 202: $V31 }), o([1, 6, 33, 35, 52, 74, 76, 91, 96, 107, 118, 135, 142, 153, 155, 156, 157, 163, 164, 181, 195, 196, 197, 198, 199, 200, 201, 202], [2, 390], { 158: 117, 161: 118, 165: 122, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX }), o($Vy2, $VK2, { 158: 117, 161: 118, 165: 122, 155: $VO, 157: $VP, 163: $VQ, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), o($VN, [2, 362]), { 156: [1, 448] }, { 156: [1, 449] }, o([1, 6, 33, 35, 52, 74, 76, 91, 96, 107, 118, 135, 142, 153, 155, 156, 157, 163, 181, 187, 188, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202], $Vz2, { 164: [1, 450] }), { 7: 451, 8: 452, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 453, 8: 454, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 455, 8: 456, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o($Vy2, $VL2, { 158: 117, 161: 118, 165: 122, 155: $VO, 157: $VP, 163: $VQ, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), o($VN, [2, 361]), o($Vu2, [2, 207]), o($Vu2, [2, 208]), o($VP1, [2, 142]), o($VP1, [2, 143]), o($VP1, [2, 144]), o($VP1, [2, 145]), { 107: [1, 457] }, { 7: 315, 8: 317, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 76: $V12, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 113: 458, 115: 316, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 141: 318, 142: $V22, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o($VM2, [2, 152], { 158: 117, 161: 118, 165: 122, 141: 459, 76: $V12, 142: $V22, 155: $VO, 157: $VP, 163: $VQ, 181: $VR, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), o($VM2, [2, 153]), { 76: $V12, 141: 460, 142: $V22 }, o($VM2, [2, 230], { 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 13: 23, 15: 25, 16: 26, 65: 29, 58: 30, 79: 31, 102: 32, 56: 33, 103: 34, 81: 35, 80: 36, 104: 37, 101: 48, 179: 49, 158: 51, 154: 52, 159: 53, 161: 54, 162: 55, 99: 65, 34: 66, 43: 67, 53: 69, 38: 84, 72: 85, 165: 91, 45: 94, 92: 160, 9: 163, 7: 461, 14: $V0, 32: $Vo1, 39: $V2, 40: $V3, 44: $V4, 46: $V5, 47: $V6, 54: $V7, 55: $V8, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 73: $Vf, 75: $Vg, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 93: $Vm, 94: $Vn, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 155: $Vx, 157: $Vy, 160: $Vz, 163: $VA, 174: $VB, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }), o($VN2, [2, 221]), o($VN2, $VO2), o($VP1, [2, 151]), o($Ve2, [2, 60], { 158: 117, 161: 118, 165: 122, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), { 7: 462, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 463, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 92: 464, 93: $Vm, 94: $Vn }, o($VP2, $VQ2, { 98: 140, 38: 142, 72: 143, 99: 144, 34: 145, 97: 465, 39: $V2, 40: $V3, 73: $Vk1, 75: $Vl1, 76: $Vm1, 116: $Vp }), { 6: $VR2, 33: $VS2 }, o($V62, [2, 112]), { 7: 468, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o($V62, [2, 113]), o($Vt2, $Vl2, { 158: 117, 161: 118, 165: 122, 76: [1, 469], 155: $VO, 157: $VP, 163: $VQ, 181: $VR, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), o($Vt2, $Vm2), o($VT2, [2, 35]), { 6: $VL, 35: [1, 470] }, { 7: 471, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o($V32, $V42, { 95: 327, 91: [1, 472], 96: $V52 }), o($V82, $V92, { 158: 117, 161: 118, 165: 122, 191: $VU }), o($V82, $Va2, { 158: 117, 161: 118, 165: 122, 191: $VU }), { 7: 473, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 33: $Vn1, 37: 410, 155: $VO, 157: $VP, 158: 117, 161: 118, 163: $VQ, 165: 122, 181: $VU2, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }, { 35: [1, 474] }, o($VN, [2, 96], { 158: 117, 161: 118, 165: 122, 155: $Vf2, 157: $Vf2, 163: $Vf2, 181: $Vf2, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), o($Ve2, [2, 391], { 158: 117, 161: 118, 165: 122, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), { 7: 475, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 476, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o($V51, [2, 354]), { 7: 477, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o($V51, [2, 258], { 149: [1, 478] }), { 33: $Vn1, 37: 479 }, { 33: $Vn1, 34: 481, 37: 482, 38: 480, 39: $V2, 40: $V3, 116: $Vp }, { 175: 483, 177: 354, 178: $Vd2 }, { 175: 484, 177: 354, 178: $Vd2 }, { 35: [1, 485], 176: [1, 486], 177: 487, 178: $Vd2 }, o($VV2, [2, 347]), { 7: 489, 8: 490, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 146: 488, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o($VW2, [2, 162], { 158: 117, 161: 118, 165: 122, 37: 491, 33: $Vn1, 155: $VO, 157: $VP, 163: $VQ, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), o($V51, [2, 165]), { 7: 492, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 35: [1, 493] }, { 35: [1, 494] }, o($Ve2, [2, 34], { 158: 117, 161: 118, 165: 122, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), o($VN, [2, 94], { 158: 117, 161: 118, 165: 122, 155: $Vf2, 157: $Vf2, 163: $Vf2, 181: $Vf2, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), o($VN, [2, 360]), { 7: 496, 8: 495, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 35: [1, 497] }, { 45: 498, 46: $V5, 47: $V6 }, { 116: [1, 500], 123: 499, 128: $VE1 }, { 45: 501, 46: $V5, 47: $V6 }, { 36: [1, 502] }, o($VC2, $V42, { 95: 503, 96: $VX2 }), o($VE2, [2, 175]), { 33: $Vg2, 38: 373, 39: $V2, 40: $V3, 124: 505, 125: 371, 127: $Vh2 }, o($VE2, [2, 180], { 126: [1, 506] }), o($VE2, [2, 182], { 126: [1, 507] }), { 38: 508, 39: $V2, 40: $V3 }, o($Ve1, [2, 186], { 36: [1, 509] }), o($VC2, $V42, { 95: 510, 96: $VY2 }), o($VE2, [2, 197]), { 33: $Vi2, 38: 380, 39: $V2, 40: $V3, 127: $Vj2, 130: 512, 132: 378 }, o($VE2, [2, 202], { 126: [1, 513] }), o($VE2, [2, 205], { 126: [1, 514] }), { 6: [1, 516], 7: 515, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 33: [1, 517], 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o($VZ2, [2, 192], { 158: 117, 161: 118, 165: 122, 155: $VO, 157: $VP, 163: $VQ, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), { 34: 518, 116: $Vp }, { 45: 519, 46: $V5, 47: $V6 }, o($Vf1, [2, 266]), { 6: $VL, 35: [1, 520] }, { 7: 521, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o([14, 32, 39, 40, 44, 46, 47, 54, 55, 59, 60, 61, 62, 63, 64, 73, 75, 82, 85, 87, 88, 89, 93, 94, 108, 116, 119, 121, 129, 137, 147, 151, 152, 155, 157, 160, 163, 174, 180, 183, 184, 185, 186, 187, 188, 189, 190], $VO2, { 6: $V_2, 33: $V_2, 74: $V_2, 96: $V_2 }), { 7: 522, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o($Vn2, [2, 219]), o($Vp2, [2, 250], { 6: $Vq2 }), o($Vr2, [2, 246]), { 33: $V$2, 74: [1, 523] }, o([6, 33, 35, 74], $VQ2, { 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 13: 23, 15: 25, 16: 26, 65: 29, 58: 30, 79: 31, 102: 32, 56: 33, 103: 34, 81: 35, 80: 36, 104: 37, 92: 39, 101: 48, 179: 49, 158: 51, 154: 52, 159: 53, 161: 54, 162: 55, 182: 60, 99: 65, 34: 66, 43: 67, 53: 69, 38: 84, 72: 85, 165: 91, 45: 94, 9: 154, 145: 220, 143: 224, 100: 225, 7: 331, 8: 332, 144: 525, 138: 526, 14: $V0, 32: $Vo1, 39: $V2, 40: $V3, 44: $V4, 46: $V5, 47: $V6, 54: $V7, 55: $V8, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 73: $Vf, 75: $Vg, 76: $VH1, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 93: $Vm, 94: $Vn, 96: $VI1, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 155: $Vx, 157: $Vy, 160: $Vz, 163: $VA, 174: $VB, 180: $VC, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }), o($V03, [2, 247], { 6: [1, 527] }), o($Vs2, [2, 252]), o($VP2, $V42, { 95: 396, 140: 528, 96: $Vo2 }), { 7: 331, 8: 332, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 76: $VH1, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 96: $VI1, 99: 65, 100: 225, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 143: 393, 145: 392, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o($Vt2, [2, 121], { 158: 117, 161: 118, 165: 122, 155: $VO, 157: $VP, 163: $VQ, 181: $VU2, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), o($Vu2, [2, 209]), o($Vf1, [2, 138]), { 107: [1, 529], 155: $VO, 157: $VP, 158: 117, 161: 118, 163: $VQ, 165: 122, 181: $VU2, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }, { 7: 530, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o($Vu2, [2, 213]), o([6, 33, 135], $V42, { 95: 531, 96: $V13 }), o($V23, [2, 231]), { 7: 331, 8: 332, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 33: $Vv2, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 76: $VH1, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 100: 225, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 136: 533, 137: $Vt, 143: 407, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o($Vf1, [2, 141]), o($V33, [2, 351]), o($V43, [2, 357]), { 7: 534, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 535, 8: 536, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 537, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 538, 8: 539, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 540, 8: 541, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o($VA2, [2, 295]), o($VA2, [2, 296]), { 34: 251, 38: 248, 39: $V2, 40: $V3, 72: 249, 73: $Vk1, 75: $Vl1, 99: 250, 116: $Vp, 170: 542 }, { 33: $V53, 155: $VO, 156: [1, 543], 157: $VP, 158: 117, 161: 118, 163: $VQ, 164: [1, 544], 165: 122, 181: $VR, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }, { 33: [2, 322], 156: [1, 545], 164: [1, 546] }, { 33: $V63, 155: $VO, 156: [1, 547], 157: $VP, 158: 117, 161: 118, 163: $VQ, 165: 122, 181: $VR, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }, { 33: [2, 323], 156: [1, 548] }, { 33: $V73, 155: $VO, 156: [1, 549], 157: $VP, 158: 117, 161: 118, 163: $VQ, 165: 122, 181: $VR, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }, { 33: [2, 338], 156: [1, 550] }, { 6: $V83, 33: $V93, 118: [1, 551] }, o($Va3, $VQ2, { 45: 94, 68: 259, 69: 260, 71: 261, 43: 264, 77: 266, 38: 267, 41: 268, 72: 269, 78: 270, 34: 271, 79: 272, 80: 273, 81: 274, 67: 554, 39: $V2, 40: $V3, 42: $VN1, 44: $V4, 46: $V5, 47: $V6, 73: $VT1, 75: $VU1, 76: $VV1, 82: $VW1, 85: $VX1, 116: $Vp, 137: $Vt, 152: $Vw }), { 7: 555, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 33: [1, 556], 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 557, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 33: [1, 558], 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o($VE2, [2, 76]), { 84: 559, 134: $VL1 }, o($VH2, [2, 89]), { 74: [1, 560], 155: $VO, 157: $VP, 158: 117, 161: 118, 163: $VQ, 165: 122, 181: $VU2, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }, { 7: 561, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o($VE2, [2, 77], { 112: 133, 83: 431, 86: 432, 105: $V71, 106: $V81, 109: $V91, 110: $Va1, 111: $Vb1, 114: $Vc1, 133: $Vd1, 134: $V61 }), o($VE2, [2, 79], { 112: 133, 83: 438, 86: 439, 105: $V71, 106: $V81, 109: $V91, 110: $Va1, 111: $Vb1, 114: $Vc1, 133: $Vd1, 134: $V61 }), o($VE2, [2, 78]), { 84: 562, 134: $VL1 }, o($VH2, [2, 90]), { 84: 563, 134: $VL1 }, o($VH2, [2, 86]), o($Vf1, [2, 51]), o($V_1, [2, 43]), o($VI2, [2, 45]), { 6: $VL, 52: [1, 564] }, { 4: 565, 5: 3, 7: 4, 8: 5, 9: 6, 10: 7, 11: 27, 12: 28, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $V1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vk, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o($VI2, [2, 48]), { 7: 566, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 567, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 568, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o([1, 6, 33, 35, 52, 74, 76, 91, 96, 107, 118, 135, 142, 153, 155, 157, 163, 181], $V53, { 158: 117, 161: 118, 165: 122, 156: [1, 569], 164: [1, 570], 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), { 156: [1, 571], 164: [1, 572] }, o($Vb3, $V63, { 158: 117, 161: 118, 165: 122, 156: [1, 573], 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), { 156: [1, 574] }, o($Vb3, $V73, { 158: 117, 161: 118, 165: 122, 156: [1, 575], 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), { 156: [1, 576] }, o($VP1, [2, 149]), { 35: [1, 577] }, o($VM2, [2, 226], { 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 13: 23, 15: 25, 16: 26, 65: 29, 58: 30, 79: 31, 102: 32, 56: 33, 103: 34, 81: 35, 80: 36, 104: 37, 101: 48, 179: 49, 158: 51, 154: 52, 159: 53, 161: 54, 162: 55, 99: 65, 34: 66, 43: 67, 53: 69, 38: 84, 72: 85, 165: 91, 45: 94, 92: 160, 9: 163, 7: 578, 14: $V0, 32: $Vo1, 39: $V2, 40: $V3, 44: $V4, 46: $V5, 47: $V6, 54: $V7, 55: $V8, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 73: $Vf, 75: $Vg, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 93: $Vm, 94: $Vn, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 155: $Vx, 157: $Vy, 160: $Vz, 163: $VA, 174: $VB, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }), o($VM2, [2, 228], { 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 13: 23, 15: 25, 16: 26, 65: 29, 58: 30, 79: 31, 102: 32, 56: 33, 103: 34, 81: 35, 80: 36, 104: 37, 101: 48, 179: 49, 158: 51, 154: 52, 159: 53, 161: 54, 162: 55, 99: 65, 34: 66, 43: 67, 53: 69, 38: 84, 72: 85, 165: 91, 45: 94, 92: 160, 9: 163, 7: 579, 14: $V0, 32: $Vo1, 39: $V2, 40: $V3, 44: $V4, 46: $V5, 47: $V6, 54: $V7, 55: $V8, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 73: $Vf, 75: $Vg, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 93: $Vm, 94: $Vn, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 155: $Vx, 157: $Vy, 160: $Vz, 163: $VA, 174: $VB, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }), o($VM2, [2, 229], { 158: 117, 161: 118, 165: 122, 155: $VO, 157: $VP, 163: $VQ, 181: $VU2, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), o($Ve2, [2, 61], { 158: 117, 161: 118, 165: 122, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), { 35: [1, 580], 155: $VO, 157: $VP, 158: 117, 161: 118, 163: $VQ, 165: 122, 181: $VU2, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }, { 5: 582, 7: 4, 8: 5, 9: 6, 10: 7, 11: 27, 12: 28, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $V1, 33: $Vn1, 34: 66, 37: 581, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vk, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o($V62, [2, 108]), { 34: 145, 38: 142, 39: $V2, 40: $V3, 72: 143, 73: $Vk1, 75: $Vl1, 76: $Vm1, 97: 583, 98: 140, 99: 144, 116: $Vp }, o($Vc3, $Vj1, { 97: 139, 98: 140, 38: 142, 72: 143, 99: 144, 34: 145, 90: 584, 39: $V2, 40: $V3, 73: $Vk1, 75: $Vl1, 76: $Vm1, 116: $Vp }), o($V62, [2, 114], { 158: 117, 161: 118, 165: 122, 155: $VO, 157: $VP, 163: $VQ, 181: $VU2, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), o($Vt2, $V_2), o($VT2, [2, 36]), o($Vy2, $VK2, { 158: 117, 161: 118, 165: 122, 155: $VO, 157: $VP, 163: $VQ, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), { 92: 585, 93: $Vm, 94: $Vn }, o($Vy2, $VL2, { 158: 117, 161: 118, 165: 122, 155: $VO, 157: $VP, 163: $VQ, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), o($V51, [2, 372]), { 35: [1, 586], 155: $VO, 157: $VP, 158: 117, 161: 118, 163: $VQ, 165: 122, 181: $VU2, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }, o($Ve2, [2, 393], { 158: 117, 161: 118, 165: 122, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), { 33: $Vn1, 37: 587, 155: $VO, 157: $VP, 158: 117, 161: 118, 163: $VQ, 165: 122, 181: $VU2, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }, { 33: $Vn1, 37: 588 }, o($V51, [2, 259]), { 33: $Vn1, 37: 589 }, { 33: $Vn1, 37: 590 }, o($Vd3, [2, 263]), { 35: [1, 591], 176: [1, 592], 177: 487, 178: $Vd2 }, { 35: [1, 593], 176: [1, 594], 177: 487, 178: $Vd2 }, o($V51, [2, 345]), { 33: $Vn1, 37: 595 }, o($VV2, [2, 348]), { 33: $Vn1, 37: 596, 96: [1, 597] }, o($Ve3, [2, 253], { 158: 117, 161: 118, 165: 122, 155: $VO, 157: $VP, 163: $VQ, 181: $VR, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), o($Ve3, [2, 254]), o($V51, [2, 163]), o($VW2, [2, 166], { 158: 117, 161: 118, 165: 122, 37: 598, 33: $Vn1, 155: $VO, 157: $VP, 163: $VQ, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), o($V51, [2, 265]), o($V51, [2, 33]), { 33: $Vn1, 37: 599 }, { 155: $VO, 157: $VP, 158: 117, 161: 118, 163: $VQ, 165: 122, 181: $VR, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }, o($Ve1, [2, 92]), o($Ve1, [2, 169]), { 36: [1, 600] }, { 33: $Vg2, 38: 373, 39: $V2, 40: $V3, 124: 601, 125: 371, 127: $Vh2 }, o($Ve1, [2, 170]), { 45: 602, 46: $V5, 47: $V6 }, { 6: $Vf3, 33: $Vg3, 118: [1, 603] }, o($Va3, $VQ2, { 38: 373, 125: 606, 39: $V2, 40: $V3, 127: $Vh2 }), o($VP2, $V42, { 95: 607, 96: $VX2 }), { 38: 608, 39: $V2, 40: $V3 }, { 38: 609, 39: $V2, 40: $V3 }, { 36: [2, 185] }, { 45: 610, 46: $V5, 47: $V6 }, { 6: $Vh3, 33: $Vi3, 118: [1, 611] }, o($Va3, $VQ2, { 38: 380, 132: 614, 39: $V2, 40: $V3, 127: $Vj2 }), o($VP2, $V42, { 95: 615, 96: $VY2 }), { 38: 616, 39: $V2, 40: $V3, 127: [1, 617] }, { 38: 618, 39: $V2, 40: $V3 }, o($VZ2, [2, 189], { 158: 117, 161: 118, 165: 122, 155: $VO, 157: $VP, 163: $VQ, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), { 7: 619, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 620, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 35: [1, 621] }, o($Ve1, [2, 194]), { 153: [1, 622] }, { 74: [1, 623], 155: $VO, 157: $VP, 158: 117, 161: 118, 163: $VQ, 165: 122, 181: $VU2, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }, { 74: [1, 624], 155: $VO, 157: $VP, 158: 117, 161: 118, 163: $VQ, 165: 122, 181: $VU2, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }, o($Vn2, [2, 220]), { 7: 331, 8: 332, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 33: $VF1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 76: $VH1, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 96: $VI1, 99: 65, 100: 225, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 138: 399, 139: 625, 143: 224, 144: 221, 145: 220, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o($Vr2, [2, 241]), o($V03, [2, 248], { 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 13: 23, 15: 25, 16: 26, 65: 29, 58: 30, 79: 31, 102: 32, 56: 33, 103: 34, 81: 35, 80: 36, 104: 37, 92: 39, 101: 48, 179: 49, 158: 51, 154: 52, 159: 53, 161: 54, 162: 55, 182: 60, 99: 65, 34: 66, 43: 67, 53: 69, 38: 84, 72: 85, 165: 91, 45: 94, 9: 154, 100: 225, 7: 331, 8: 332, 145: 392, 143: 393, 14: $V0, 32: $Vo1, 39: $V2, 40: $V3, 44: $V4, 46: $V5, 47: $V6, 54: $V7, 55: $V8, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 73: $Vf, 75: $Vg, 76: $VH1, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 93: $Vm, 94: $Vn, 96: $VI1, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 155: $Vx, 157: $Vy, 160: $Vz, 163: $VA, 174: $VB, 180: $VC, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }), { 7: 331, 8: 332, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 76: $VH1, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 96: $VI1, 99: 65, 100: 225, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 138: 399, 143: 224, 144: 626, 145: 220, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 33: $V$2, 35: [1, 627] }, o($Vf1, [2, 139]), { 35: [1, 628], 155: $VO, 157: $VP, 158: 117, 161: 118, 163: $VQ, 165: 122, 181: $VU2, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }, { 6: $Vj3, 33: $Vk3, 135: [1, 629] }, o([6, 33, 35, 135], $VQ2, { 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 13: 23, 15: 25, 16: 26, 65: 29, 58: 30, 79: 31, 102: 32, 56: 33, 103: 34, 81: 35, 80: 36, 104: 37, 92: 39, 101: 48, 179: 49, 158: 51, 154: 52, 159: 53, 161: 54, 162: 55, 182: 60, 99: 65, 34: 66, 43: 67, 53: 69, 38: 84, 72: 85, 165: 91, 45: 94, 9: 154, 100: 225, 7: 331, 8: 332, 143: 632, 14: $V0, 32: $Vo1, 39: $V2, 40: $V3, 44: $V4, 46: $V5, 47: $V6, 54: $V7, 55: $V8, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 73: $Vf, 75: $Vg, 76: $VH1, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 93: $Vm, 94: $Vn, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 155: $Vx, 157: $Vy, 160: $Vz, 163: $VA, 174: $VB, 180: $VC, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }), o($VP2, $V42, { 95: 633, 96: $V13 }), o($Vy2, [2, 273], { 158: 117, 161: 118, 165: 122, 155: $VO, 157: $VP, 163: $VQ, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), { 33: $Vl3, 155: $VO, 157: $VP, 158: 117, 161: 118, 163: $VQ, 165: 122, 181: $VR, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }, { 33: [2, 269] }, o($Vy2, [2, 276], { 158: 117, 161: 118, 165: 122, 155: $VO, 157: $VP, 163: $VQ, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), { 33: $Vm3, 155: $VO, 157: $VP, 158: 117, 161: 118, 163: $VQ, 165: 122, 181: $VR, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }, { 33: [2, 271] }, { 33: $Vn3, 155: $VO, 157: $VP, 158: 117, 161: 118, 163: $VQ, 165: 122, 181: $VR, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }, { 33: [2, 292] }, o($VA2, [2, 302]), { 7: 634, 8: 635, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 636, 8: 637, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 638, 8: 639, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 640, 8: 641, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 642, 8: 643, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 644, 8: 645, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 646, 8: 647, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 648, 8: 649, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o($Vn2, [2, 154]), { 34: 271, 38: 267, 39: $V2, 40: $V3, 41: 268, 42: $VN1, 43: 264, 44: $V4, 45: 94, 46: $V5, 47: $V6, 67: 650, 68: 259, 69: 260, 71: 261, 72: 269, 73: $VT1, 75: $VU1, 76: $VV1, 77: 266, 78: 270, 79: 272, 80: 273, 81: 274, 82: $VW1, 85: $VX1, 116: $Vp, 137: $Vt, 152: $Vw }, o($Vc3, $VS1, { 45: 94, 67: 258, 68: 259, 69: 260, 71: 261, 43: 264, 77: 266, 38: 267, 41: 268, 72: 269, 78: 270, 34: 271, 79: 272, 80: 273, 81: 274, 117: 651, 39: $V2, 40: $V3, 42: $VN1, 44: $V4, 46: $V5, 47: $V6, 73: $VT1, 75: $VU1, 76: $VV1, 82: $VW1, 85: $VX1, 116: $Vp, 137: $Vt, 152: $Vw }), o($VE2, [2, 157]), o($VE2, [2, 65], { 158: 117, 161: 118, 165: 122, 155: $VO, 157: $VP, 163: $VQ, 181: $VU2, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), { 7: 652, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o($VE2, [2, 67], { 158: 117, 161: 118, 165: 122, 155: $VO, 157: $VP, 163: $VQ, 181: $VU2, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), { 7: 653, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o($VH2, [2, 87]), o($VF2, [2, 73]), { 74: [1, 654], 155: $VO, 157: $VP, 158: 117, 161: 118, 163: $VQ, 165: 122, 181: $VU2, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }, o($VH2, [2, 88]), o($VH2, [2, 85]), o($VI2, [2, 46]), { 6: $VL, 35: [1, 655] }, o($Vy2, $Vl3, { 158: 117, 161: 118, 165: 122, 155: $VO, 157: $VP, 163: $VQ, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), o($Vy2, $Vm3, { 158: 117, 161: 118, 165: 122, 155: $VO, 157: $VP, 163: $VQ, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), o($Vy2, $Vn3, { 158: 117, 161: 118, 165: 122, 155: $VO, 157: $VP, 163: $VQ, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), { 7: 656, 8: 657, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 658, 8: 659, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 660, 8: 661, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 662, 8: 663, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 664, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 665, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 666, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 667, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 107: [1, 668] }, o($VM2, [2, 225], { 158: 117, 161: 118, 165: 122, 155: $VO, 157: $VP, 163: $VQ, 181: $VU2, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), o($VM2, [2, 227], { 158: 117, 161: 118, 165: 122, 155: $VO, 157: $VP, 163: $VQ, 181: $VU2, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), o($V51, [2, 62]), o($Vf1, [2, 98]), o($VN, [2, 100]), o($V62, [2, 109]), o($VP2, $V42, { 95: 669, 96: $V52 }), { 33: $Vn1, 37: 581 }, o($V51, [2, 392]), o($V33, [2, 352]), o($V51, [2, 260]), o($Vd3, [2, 261]), o($Vd3, [2, 262]), o($V51, [2, 341]), { 33: $Vn1, 37: 670 }, o($V51, [2, 342]), { 33: $Vn1, 37: 671 }, { 35: [1, 672] }, o($VV2, [2, 349], { 6: [1, 673] }), { 7: 674, 8: 675, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o($V51, [2, 167]), o($V43, [2, 358]), { 45: 676, 46: $V5, 47: $V6 }, o($VC2, $V42, { 95: 677, 96: $VX2 }), o($Ve1, [2, 171]), { 36: [1, 678] }, { 38: 373, 39: $V2, 40: $V3, 125: 679, 127: $Vh2 }, { 33: $Vg2, 38: 373, 39: $V2, 40: $V3, 124: 680, 125: 371, 127: $Vh2 }, o($VE2, [2, 176]), { 6: $Vf3, 33: $Vg3, 35: [1, 681] }, o($VE2, [2, 181]), o($VE2, [2, 183]), o($Ve1, [2, 195]), o($Ve1, [2, 187], { 36: [1, 682] }), { 38: 380, 39: $V2, 40: $V3, 127: $Vj2, 132: 683 }, { 33: $Vi2, 38: 380, 39: $V2, 40: $V3, 127: $Vj2, 130: 684, 132: 378 }, o($VE2, [2, 198]), { 6: $Vh3, 33: $Vi3, 35: [1, 685] }, o($VE2, [2, 203]), o($VE2, [2, 204]), o($VE2, [2, 206]), o($VZ2, [2, 190], { 158: 117, 161: 118, 165: 122, 155: $VO, 157: $VP, 163: $VQ, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), { 35: [1, 686], 155: $VO, 157: $VP, 158: 117, 161: 118, 163: $VQ, 165: 122, 181: $VU2, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }, o($Ve1, [2, 193]), o($Vf1, [2, 267]), o($Vf1, [2, 223]), o($Vf1, [2, 224]), o($VP2, $V42, { 95: 396, 140: 687, 96: $Vo2 }), o($Vr2, [2, 242]), o($Vr2, [2, 243]), { 107: [1, 688] }, o($Vu2, [2, 214]), { 7: 331, 8: 332, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 76: $VH1, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 100: 225, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 143: 689, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 331, 8: 332, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 33: $Vv2, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 76: $VH1, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 100: 225, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 136: 690, 137: $Vt, 143: 407, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o($V23, [2, 232]), { 6: $Vj3, 33: $Vk3, 35: [1, 691] }, { 33: $Vo3, 155: $VO, 157: $VP, 158: 117, 161: 118, 163: $VQ, 164: [1, 692], 165: 122, 181: $VR, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }, { 33: [2, 324], 164: [1, 693] }, { 33: $Vp3, 155: $VO, 156: [1, 694], 157: $VP, 158: 117, 161: 118, 163: $VQ, 165: 122, 181: $VR, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }, { 33: [2, 328], 156: [1, 695] }, { 33: $Vq3, 155: $VO, 157: $VP, 158: 117, 161: 118, 163: $VQ, 164: [1, 696], 165: 122, 181: $VR, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }, { 33: [2, 325], 164: [1, 697] }, { 33: $Vr3, 155: $VO, 156: [1, 698], 157: $VP, 158: 117, 161: 118, 163: $VQ, 165: 122, 181: $VR, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }, { 33: [2, 329], 156: [1, 699] }, { 33: $Vs3, 155: $VO, 157: $VP, 158: 117, 161: 118, 163: $VQ, 165: 122, 181: $VR, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }, { 33: [2, 326] }, { 33: $Vt3, 155: $VO, 157: $VP, 158: 117, 161: 118, 163: $VQ, 165: 122, 181: $VR, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }, { 33: [2, 327] }, { 33: $Vu3, 155: $VO, 157: $VP, 158: 117, 161: 118, 163: $VQ, 165: 122, 181: $VR, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }, { 33: [2, 339] }, { 33: $Vv3, 155: $VO, 157: $VP, 158: 117, 161: 118, 163: $VQ, 165: 122, 181: $VR, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }, { 33: [2, 340] }, o($VE2, [2, 158]), o($VP2, $V42, { 95: 700, 96: $VD2 }), { 35: [1, 701], 155: $VO, 157: $VP, 158: 117, 161: 118, 163: $VQ, 165: 122, 181: $VU2, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }, { 35: [1, 702], 155: $VO, 157: $VP, 158: 117, 161: 118, 163: $VQ, 165: 122, 181: $VU2, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }, o($VF2, [2, 74]), { 52: [1, 703] }, o($Vw3, $Vo3, { 158: 117, 161: 118, 165: 122, 164: [1, 704], 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), { 164: [1, 705] }, o($Vb3, $Vp3, { 158: 117, 161: 118, 165: 122, 156: [1, 706], 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), { 156: [1, 707] }, o($Vw3, $Vq3, { 158: 117, 161: 118, 165: 122, 164: [1, 708], 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), { 164: [1, 709] }, o($Vb3, $Vr3, { 158: 117, 161: 118, 165: 122, 156: [1, 710], 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), { 156: [1, 711] }, o($Ve2, $Vs3, { 158: 117, 161: 118, 165: 122, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), o($Ve2, $Vt3, { 158: 117, 161: 118, 165: 122, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), o($Ve2, $Vu3, { 158: 117, 161: 118, 165: 122, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), o($Ve2, $Vv3, { 158: 117, 161: 118, 165: 122, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), o($VP1, [2, 150]), { 6: $VR2, 33: $VS2, 35: [1, 712] }, { 35: [1, 713] }, { 35: [1, 714] }, o($V51, [2, 346]), o($VV2, [2, 350]), o($Ve3, [2, 255], { 158: 117, 161: 118, 165: 122, 155: $VO, 157: $VP, 163: $VQ, 181: $VR, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), o($Ve3, [2, 256]), o($Ve1, [2, 173]), { 6: $Vf3, 33: $Vg3, 118: [1, 715] }, { 45: 716, 46: $V5, 47: $V6 }, o($VE2, [2, 177]), o($VP2, $V42, { 95: 717, 96: $VX2 }), o($VE2, [2, 178]), { 45: 718, 46: $V5, 47: $V6 }, o($VE2, [2, 199]), o($VP2, $V42, { 95: 719, 96: $VY2 }), o($VE2, [2, 200]), o($Ve1, [2, 191]), { 33: $V$2, 35: [1, 720] }, o($Vf1, [2, 140]), o($V23, [2, 233]), o($VP2, $V42, { 95: 721, 96: $V13 }), o($V23, [2, 234]), { 7: 722, 8: 723, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 724, 8: 725, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 726, 8: 727, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 728, 8: 729, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 730, 8: 731, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 732, 8: 733, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 734, 8: 735, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 736, 8: 737, 9: 154, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 29: 20, 30: 21, 31: 22, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vl, 92: 39, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $VC, 182: 60, 183: $VD, 184: $VE, 185: $VF, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 6: $V83, 33: $V93, 35: [1, 738] }, o($VE2, [2, 66]), o($VE2, [2, 68]), o($VI2, [2, 47]), { 7: 739, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 740, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 741, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 742, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 743, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 744, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 745, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, { 7: 746, 9: 163, 13: 23, 14: $V0, 15: 25, 16: 26, 17: 8, 18: 9, 19: 10, 20: 11, 21: 12, 22: 13, 23: 14, 24: 15, 25: 16, 26: 17, 27: 18, 28: 19, 32: $Vo1, 34: 66, 38: 84, 39: $V2, 40: $V3, 43: 67, 44: $V4, 45: 94, 46: $V5, 47: $V6, 53: 69, 54: $V7, 55: $V8, 56: 33, 58: 30, 59: $V9, 60: $Va, 61: $Vb, 62: $Vc, 63: $Vd, 64: $Ve, 65: 29, 72: 85, 73: $Vf, 75: $Vg, 79: 31, 80: 36, 81: 35, 82: $Vh, 85: $Vi, 87: $Vj, 88: $Vp1, 89: $Vq1, 92: 160, 93: $Vm, 94: $Vn, 99: 65, 101: 48, 102: 32, 103: 34, 104: 37, 108: $Vo, 116: $Vp, 119: $Vq, 121: $Vr, 129: $Vs, 137: $Vt, 147: $Vu, 151: $Vv, 152: $Vw, 154: 52, 155: $Vx, 157: $Vy, 158: 51, 159: 53, 160: $Vz, 161: 54, 162: 55, 163: $VA, 165: 91, 174: $VB, 179: 49, 180: $Vr1, 183: $Vs1, 184: $Vt1, 185: $Vu1, 186: $VG, 187: $VH, 188: $VI, 189: $VJ, 190: $VK }, o($V62, [2, 110]), o($V51, [2, 343]), o($V51, [2, 344]), { 36: [1, 747] }, o($Ve1, [2, 172]), { 6: $Vf3, 33: $Vg3, 35: [1, 748] }, o($Ve1, [2, 196]), { 6: $Vh3, 33: $Vi3, 35: [1, 749] }, o($Vr2, [2, 244]), { 6: $Vj3, 33: $Vk3, 35: [1, 750] }, { 33: $Vx3, 155: $VO, 157: $VP, 158: 117, 161: 118, 163: $VQ, 165: 122, 181: $VR, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }, { 33: [2, 330] }, { 33: $Vy3, 155: $VO, 157: $VP, 158: 117, 161: 118, 163: $VQ, 165: 122, 181: $VR, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }, { 33: [2, 332] }, { 33: $Vz3, 155: $VO, 157: $VP, 158: 117, 161: 118, 163: $VQ, 165: 122, 181: $VR, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }, { 33: [2, 334] }, { 33: $VA3, 155: $VO, 157: $VP, 158: 117, 161: 118, 163: $VQ, 165: 122, 181: $VR, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }, { 33: [2, 336] }, { 33: $VB3, 155: $VO, 157: $VP, 158: 117, 161: 118, 163: $VQ, 165: 122, 181: $VR, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }, { 33: [2, 331] }, { 33: $VC3, 155: $VO, 157: $VP, 158: 117, 161: 118, 163: $VQ, 165: 122, 181: $VR, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }, { 33: [2, 333] }, { 33: $VD3, 155: $VO, 157: $VP, 158: 117, 161: 118, 163: $VQ, 165: 122, 181: $VR, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }, { 33: [2, 335] }, { 33: $VE3, 155: $VO, 157: $VP, 158: 117, 161: 118, 163: $VQ, 165: 122, 181: $VR, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }, { 33: [2, 337] }, o($VE2, [2, 159]), o($Ve2, $Vx3, { 158: 117, 161: 118, 165: 122, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), o($Ve2, $Vy3, { 158: 117, 161: 118, 165: 122, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), o($Ve2, $Vz3, { 158: 117, 161: 118, 165: 122, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), o($Ve2, $VA3, { 158: 117, 161: 118, 165: 122, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), o($Ve2, $VB3, { 158: 117, 161: 118, 165: 122, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), o($Ve2, $VC3, { 158: 117, 161: 118, 165: 122, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), o($Ve2, $VD3, { 158: 117, 161: 118, 165: 122, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), o($Ve2, $VE3, { 158: 117, 161: 118, 165: 122, 187: $VS, 188: $VT, 191: $VU, 192: $VV, 193: $VW, 194: $VX, 195: $VY, 196: $VZ, 197: $V_, 198: $V$, 199: $V01, 200: $V11, 201: $V21, 202: $V31 }), { 45: 751, 46: $V5, 47: $V6 }, o($VE2, [2, 179]), o($VE2, [2, 201]), o($V23, [2, 235]), o($Ve1, [2, 174])], defaultActions: { 253: [2, 293], 508: [2, 185], 536: [2, 269], 539: [2, 271], 541: [2, 292], 643: [2, 326], 645: [2, 327], 647: [2, 339], 649: [2, 340], 723: [2, 330], 725: [2, 332], 727: [2, 334], 729: [2, 336], 731: [2, 331], 733: [2, 333], 735: [2, 335], 737: [2, 337] }, parseError: function(str, hash) {
                if (hash.recoverable)
                  this.trace(str);
                else {
                  var error = new Error(str);
                  throw error.hash = hash, error;
                }
              }, parse: function(input) {
                var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, EOF = 1, args = lstack.slice.call(arguments, 1), lexer = Object.create(this.lexer), sharedState = { yy: {} };
                for (var k in this.yy)
                  Object.prototype.hasOwnProperty.call(this.yy, k) && (sharedState.yy[k] = this.yy[k]);
                lexer.setInput(input, sharedState.yy), sharedState.yy.lexer = lexer, sharedState.yy.parser = this, "undefined" == typeof lexer.yylloc && (lexer.yylloc = {});
                var yyloc = lexer.yylloc;
                lstack.push(yyloc);
                var ranges = lexer.options && lexer.options.ranges;
                this.parseError = "function" == typeof sharedState.yy.parseError ? sharedState.yy.parseError : Object.getPrototypeOf(this).parseError;
                _token_stack:
                  var lex = function() {
                    var token;
                    return token = lexer.lex() || EOF, "number" != typeof token && (token = self.symbols_[token] || token), token;
                  };
                for (var yyval = {}, symbol, preErrorSymbol, state, action, r, p, len, newState, expected; ; ) {
                  if (state = stack[stack.length - 1], this.defaultActions[state] ? action = this.defaultActions[state] : ((null === symbol || "undefined" == typeof symbol) && (symbol = lex()), action = table[state] && table[state][symbol]), "undefined" == typeof action || !action.length || !action[0]) {
                    var errStr = "";
                    for (p in expected = [], table[state])
                      this.terminals_[p] && p > 2 && expected.push("'" + this.terminals_[p] + "'");
                    errStr = lexer.showPosition ? "Parse error on line " + (yylineno + 1) + ":\n" + lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'" : "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == EOF ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'"), this.parseError(errStr, { text: lexer.match, token: this.terminals_[symbol] || symbol, line: lexer.yylineno, loc: yyloc, expected });
                  }
                  if (action[0] instanceof Array && 1 < action.length)
                    throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
                  switch (action[0]) {
                    case 1:
                      stack.push(symbol), vstack.push(lexer.yytext), lstack.push(lexer.yylloc), stack.push(action[1]), symbol = null, preErrorSymbol ? (symbol = preErrorSymbol, preErrorSymbol = null) : (yyleng = lexer.yyleng, yytext = lexer.yytext, yylineno = lexer.yylineno, yyloc = lexer.yylloc, 0 < recovering && recovering--);
                      break;
                    case 2:
                      if (len = this.productions_[action[1]][1], yyval.$ = vstack[vstack.length - len], yyval._$ = { first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column }, ranges && (yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]]), r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args)), "undefined" != typeof r)
                        return r;
                      len && (stack = stack.slice(0, 2 * (-1 * len)), vstack = vstack.slice(0, -1 * len), lstack = lstack.slice(0, -1 * len)), stack.push(this.productions_[action[1]][0]), vstack.push(yyval.$), lstack.push(yyval._$), newState = table[stack[stack.length - 2]][stack[stack.length - 1]], stack.push(newState);
                      break;
                    case 3:
                      return true;
                  }
                }
                return true;
              } };
              return Parser.prototype = parser2, parser2.Parser = Parser, new Parser();
            }();
            return "undefined" != typeof require2 && "undefined" != typeof exports2 && (exports2.parser = parser, exports2.Parser = parser.Parser, exports2.parse = function() {
              return parser.parse.apply(parser, arguments);
            }, exports2.main = function() {
            }, require2.main === module2 && exports2.main(process.argv.slice(1))), module2.exports;
          }(), require2["./scope"] = function() {
            var exports2 = {};
            return function() {
              var indexOf = [].indexOf, Scope;
              exports2.Scope = Scope = function() {
                "use strict";
                function Scope2(parent, expressions, method, referencedVars) {
                  _classCallCheck(this, Scope2);
                  var ref, ref1;
                  this.parent = parent, this.expressions = expressions, this.method = method, this.referencedVars = referencedVars, this.variables = [{ name: "arguments", type: "arguments" }], this.comments = {}, this.positions = {}, this.parent || (this.utilities = {}), this.root = null == (ref = null == (ref1 = this.parent) ? void 0 : ref1.root) ? this : ref;
                }
                return _createClass(Scope2, [{ key: "add", value: function add(name, type, immediate) {
                  return this.shared && !immediate ? this.parent.add(name, type, immediate) : Object.prototype.hasOwnProperty.call(this.positions, name) ? this.variables[this.positions[name]].type = type : this.positions[name] = this.variables.push({ name, type }) - 1;
                } }, { key: "namedMethod", value: function namedMethod() {
                  var ref;
                  return (null == (ref = this.method) ? void 0 : ref.name) || !this.parent ? this.method : this.parent.namedMethod();
                } }, { key: "find", value: function find(name) {
                  var type = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "var";
                  return !!this.check(name) || (this.add(name, type), false);
                } }, { key: "parameter", value: function parameter(name) {
                  return this.shared && this.parent.check(name, true) ? void 0 : this.add(name, "param");
                } }, { key: "check", value: function check(name) {
                  var ref;
                  return !!(this.type(name) || (null == (ref = this.parent) ? void 0 : ref.check(name)));
                } }, { key: "temporary", value: function temporary(name, index) {
                  var single = !!(2 < arguments.length && void 0 !== arguments[2]) && arguments[2], diff, endCode, letter, newCode, num, startCode;
                  return single ? (startCode = name.charCodeAt(0), endCode = "z".charCodeAt(0), diff = endCode - startCode, newCode = startCode + index % (diff + 1), letter = _StringfromCharCode(newCode), num = _Mathfloor(index / (diff + 1)), "".concat(letter).concat(num || "")) : "".concat(name).concat(index || "");
                } }, { key: "type", value: function type(name) {
                  var i, len, ref, v;
                  for (ref = this.variables, i = 0, len = ref.length; i < len; i++)
                    if (v = ref[i], v.name === name)
                      return v.type;
                  return null;
                } }, { key: "freeVariable", value: function freeVariable(name) {
                  var options = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, index, ref, temp;
                  for (index = 0; temp = this.temporary(name, index, options.single), !!(this.check(temp) || 0 <= indexOf.call(this.root.referencedVars, temp)); )
                    index++;
                  return (null == (ref = options.reserve) || ref) && this.add(temp, "var", true), temp;
                } }, { key: "assign", value: function assign(name, value) {
                  return this.add(name, { value, assigned: true }, true), this.hasAssignments = true;
                } }, { key: "hasDeclarations", value: function hasDeclarations() {
                  return !!this.declaredVariables().length;
                } }, { key: "declaredVariables", value: function declaredVariables() {
                  var v;
                  return function() {
                    var i, len, ref, results;
                    for (ref = this.variables, results = [], i = 0, len = ref.length; i < len; i++)
                      v = ref[i], "var" === v.type && results.push(v.name);
                    return results;
                  }.call(this).sort();
                } }, { key: "assignedVariables", value: function assignedVariables() {
                  var i, len, ref, results, v;
                  for (ref = this.variables, results = [], i = 0, len = ref.length; i < len; i++)
                    v = ref[i], v.type.assigned && results.push("".concat(v.name, " = ").concat(v.type.value));
                  return results;
                } }]), Scope2;
              }();
            }.call(this), { exports: exports2 }.exports;
          }(), require2["./nodes"] = function() {
            var exports2 = {};
            return function() {
              var indexOf = [].indexOf, splice = [].splice, slice1 = [].slice, Access, Arr, Assign, AwaitReturn, Base, Block, BooleanLiteral, Call, Catch, Class, ClassProperty, ClassPrototypeProperty, Code, CodeFragment, ComputedPropertyName, DefaultLiteral, Directive, DynamicImport, DynamicImportCall, Elision, EmptyInterpolation, ExecutableClassBody, Existence, Expansion, ExportAllDeclaration, ExportDeclaration, ExportDefaultDeclaration, ExportNamedDeclaration, ExportSpecifier, ExportSpecifierList, Extends, For, FuncDirectiveReturn, FuncGlyph, HEREGEX_OMIT, HereComment, HoistTarget, IdentifierLiteral, If, ImportClause, ImportDeclaration, ImportDefaultSpecifier, ImportNamespaceSpecifier, ImportSpecifier, ImportSpecifierList, In, Index, InfinityLiteral, Interpolation, JSXAttribute, JSXAttributes, JSXElement, JSXEmptyExpression, JSXExpressionContainer, JSXIdentifier, JSXNamespacedName, JSXTag, JSXText, JS_FORBIDDEN, LEADING_BLANK_LINE, LEVEL_ACCESS, LEVEL_COND, LEVEL_LIST, LEVEL_OP, LEVEL_PAREN, LEVEL_TOP, LineComment, Literal, MetaProperty, ModuleDeclaration, ModuleSpecifier, ModuleSpecifierList, NEGATE, NO, NaNLiteral, NullLiteral, NumberLiteral, Obj, ObjectProperty, Op, Param, Parens, PassthroughLiteral, PropertyName, Range, RegexLiteral, RegexWithInterpolations, Return, Root, SIMPLENUM, SIMPLE_STRING_OMIT, STRING_OMIT, Scope, Sequence, Slice, Splat, StatementLiteral, StringLiteral, StringWithInterpolations, Super, SuperCall, Switch, SwitchCase, SwitchWhen, TAB, THIS, TRAILING_BLANK_LINE, TaggedTemplateCall, TemplateElement, ThisLiteral, Throw, Try, UTILITIES, UndefinedLiteral, Value, While, YES, YieldReturn, addDataToNode, astAsBlockIfNeeded, attachCommentsToNode, compact, del, emptyExpressionLocationData, ends, extend, extractSameLineLocationDataFirst, extractSameLineLocationDataLast, flatten, fragmentsToText, greater, hasLineComments, indentInitial, isAstLocGreater, isFunction, isLiteralArguments, isLiteralThis, isLocationDataEndGreater, isLocationDataStartGreater, isNumber, isPlainObject, isUnassignable, jisonLocationDataToAstLocationData, lesser, locationDataToString, makeDelimitedLiteral, merge, mergeAstLocationData, mergeLocationData, moveComments, multident, parseNumber, replaceUnicodeCodePointEscapes, shouldCacheOrIsAssignable, sniffDirectives, some, starts, throwSyntaxError, _unfoldSoak, unshiftAfterComments, utility, zeroWidthLocationDataFromEndLocation;
              Error.stackTraceLimit = Infinity;
              var _require4 = require2("./scope");
              Scope = _require4.Scope;
              var _require5 = require2("./lexer");
              isUnassignable = _require5.isUnassignable, JS_FORBIDDEN = _require5.JS_FORBIDDEN;
              var _require6 = require2("./helpers");
              compact = _require6.compact, flatten = _require6.flatten, extend = _require6.extend, merge = _require6.merge, del = _require6.del, starts = _require6.starts, ends = _require6.ends, some = _require6.some, addDataToNode = _require6.addDataToNode, attachCommentsToNode = _require6.attachCommentsToNode, locationDataToString = _require6.locationDataToString, throwSyntaxError = _require6.throwSyntaxError, replaceUnicodeCodePointEscapes = _require6.replaceUnicodeCodePointEscapes, isFunction = _require6.isFunction, isPlainObject = _require6.isPlainObject, isNumber = _require6.isNumber, parseNumber = _require6.parseNumber, exports2.extend = extend, exports2.addDataToNode = addDataToNode, YES = function() {
                return true;
              }, NO = function() {
                return false;
              }, THIS = function() {
                return this;
              }, NEGATE = function() {
                return this.negated = !this.negated, this;
              }, exports2.CodeFragment = CodeFragment = function() {
                "use strict";
                function CodeFragment2(parent, code) {
                  _classCallCheck(this, CodeFragment2);
                  var ref1;
                  this.code = "".concat(code), this.type = (null == parent || null == (ref1 = parent.constructor) ? void 0 : ref1.name) || "unknown", this.locationData = null == parent ? void 0 : parent.locationData, this.comments = null == parent ? void 0 : parent.comments;
                }
                return _createClass(CodeFragment2, [{ key: "toString", value: function toString() {
                  return "".concat(this.code).concat(this.locationData ? ": " + locationDataToString(this.locationData) : "");
                } }]), CodeFragment2;
              }(), fragmentsToText = function(fragments) {
                var fragment;
                return function() {
                  var j, len1, results1;
                  for (results1 = [], j = 0, len1 = fragments.length; j < len1; j++)
                    fragment = fragments[j], results1.push(fragment.code);
                  return results1;
                }().join("");
              }, exports2.Base = Base = function() {
                var Base2 = function() {
                  "use strict";
                  function Base3() {
                    _classCallCheck(this, Base3);
                  }
                  return _createClass(Base3, [{ key: "compile", value: function compile(o, lvl) {
                    return fragmentsToText(this.compileToFragments(o, lvl));
                  } }, { key: "compileWithoutComments", value: function compileWithoutComments(o, lvl) {
                    var method = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "compile", fragments, unwrapped;
                    return this.comments && (this.ignoreTheseCommentsTemporarily = this.comments, delete this.comments), unwrapped = this.unwrapAll(), unwrapped.comments && (unwrapped.ignoreTheseCommentsTemporarily = unwrapped.comments, delete unwrapped.comments), fragments = this[method](o, lvl), this.ignoreTheseCommentsTemporarily && (this.comments = this.ignoreTheseCommentsTemporarily, delete this.ignoreTheseCommentsTemporarily), unwrapped.ignoreTheseCommentsTemporarily && (unwrapped.comments = unwrapped.ignoreTheseCommentsTemporarily, delete unwrapped.ignoreTheseCommentsTemporarily), fragments;
                  } }, { key: "compileNodeWithoutComments", value: function compileNodeWithoutComments(o, lvl) {
                    return this.compileWithoutComments(o, lvl, "compileNode");
                  } }, { key: "compileToFragments", value: function compileToFragments(o, lvl) {
                    var fragments, node;
                    return o = extend({}, o), lvl && (o.level = lvl), node = this.unfoldSoak(o) || this, node.tab = o.indent, fragments = o.level !== LEVEL_TOP && node.isStatement(o) ? node.compileClosure(o) : node.compileNode(o), this.compileCommentFragments(o, node, fragments), fragments;
                  } }, { key: "compileToFragmentsWithoutComments", value: function compileToFragmentsWithoutComments(o, lvl) {
                    return this.compileWithoutComments(o, lvl, "compileToFragments");
                  } }, { key: "compileClosure", value: function compileClosure(o) {
                    var args, argumentsNode, func, meth, parts, ref1, ref2;
                    switch (this.checkForPureStatementInExpression(), o.sharedScope = true, func = new Code([], Block.wrap([this])), args = [], this.contains(function(node) {
                      return node instanceof SuperCall;
                    }) ? func.bound = true : ((argumentsNode = this.contains(isLiteralArguments)) || this.contains(isLiteralThis)) && (args = [new ThisLiteral()], argumentsNode ? (meth = "apply", args.push(new IdentifierLiteral("arguments"))) : meth = "call", func = new Value(func, [new Access(new PropertyName(meth))])), parts = new Call(func, args).compileNode(o), false) {
                      case !(func.isGenerator || (null == (ref1 = func.base) ? void 0 : ref1.isGenerator)):
                        parts.unshift(this.makeCode("(yield* ")), parts.push(this.makeCode(")"));
                        break;
                      case !(func.isAsync || (null == (ref2 = func.base) ? void 0 : ref2.isAsync)):
                        parts.unshift(this.makeCode("(await ")), parts.push(this.makeCode(")"));
                    }
                    return parts;
                  } }, { key: "compileCommentFragments", value: function compileCommentFragments(o, node, fragments) {
                    var base1, base2, comment, commentFragment, j, len1, ref1, unshiftCommentFragment;
                    if (!node.comments)
                      return fragments;
                    for (unshiftCommentFragment = function(commentFragment2) {
                      var precedingFragment;
                      return commentFragment2.unshift ? unshiftAfterComments(fragments, commentFragment2) : (0 !== fragments.length && (precedingFragment = fragments[fragments.length - 1], commentFragment2.newLine && "" !== precedingFragment.code && !/\n\s*$/.test(precedingFragment.code) && (commentFragment2.code = "\n".concat(commentFragment2.code))), fragments.push(commentFragment2));
                    }, ref1 = node.comments, j = 0, len1 = ref1.length; j < len1; j++)
                      (comment = ref1[j], !!(0 > indexOf.call(this.compiledComments, comment))) && (this.compiledComments.push(comment), commentFragment = comment.here ? new HereComment(comment).compileNode(o) : new LineComment(comment).compileNode(o), commentFragment.isHereComment && !commentFragment.newLine || node.includeCommentFragments() ? unshiftCommentFragment(commentFragment) : (0 === fragments.length && fragments.push(this.makeCode("")), commentFragment.unshift ? (null == (base1 = fragments[0]).precedingComments && (base1.precedingComments = []), fragments[0].precedingComments.push(commentFragment)) : (null == (base2 = fragments[fragments.length - 1]).followingComments && (base2.followingComments = []), fragments[fragments.length - 1].followingComments.push(commentFragment))));
                    return fragments;
                  } }, { key: "cache", value: function cache(o, level, shouldCache) {
                    var complex, ref, sub;
                    return complex = null == shouldCache ? this.shouldCache() : shouldCache(this), complex ? (ref = new IdentifierLiteral(o.scope.freeVariable("ref")), sub = new Assign(ref, this), level ? [sub.compileToFragments(o, level), [this.makeCode(ref.value)]] : [sub, ref]) : (ref = level ? this.compileToFragments(o, level) : this, [ref, ref]);
                  } }, { key: "hoist", value: function hoist() {
                    var compileNode, compileToFragments, target;
                    return this.hoisted = true, target = new HoistTarget(this), compileNode = this.compileNode, compileToFragments = this.compileToFragments, this.compileNode = function(o) {
                      return target.update(compileNode, o);
                    }, this.compileToFragments = function(o) {
                      return target.update(compileToFragments, o);
                    }, target;
                  } }, { key: "cacheToCodeFragments", value: function cacheToCodeFragments(cacheValues) {
                    return [fragmentsToText(cacheValues[0]), fragmentsToText(cacheValues[1])];
                  } }, { key: "makeReturn", value: function makeReturn(results, mark) {
                    var node;
                    return mark ? void (this.canBeReturned = true) : (node = this.unwrapAll(), results ? new Call(new Literal("".concat(results, ".push")), [node]) : new Return(node));
                  } }, { key: "contains", value: function contains(pred) {
                    var node;
                    return node = void 0, this.traverseChildren(false, function(n) {
                      if (pred(n))
                        return node = n, false;
                    }), node;
                  } }, { key: "lastNode", value: function lastNode(list) {
                    return 0 === list.length ? null : list[list.length - 1];
                  } }, { key: "toString", value: function toString() {
                    var idt = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "", name = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.constructor.name, tree;
                    return tree = "\n" + idt + name, this.soak && (tree += "?"), this.eachChild(function(node) {
                      return tree += node.toString(idt + TAB);
                    }), tree;
                  } }, { key: "checkForPureStatementInExpression", value: function checkForPureStatementInExpression() {
                    var jumpNode;
                    if (jumpNode = this.jumps())
                      return jumpNode.error("cannot use a pure statement in an expression");
                  } }, { key: "ast", value: function ast(o, level) {
                    var astNode;
                    return o = this.astInitialize(o, level), astNode = this.astNode(o), null != this.astNode && this.canBeReturned && Object.assign(astNode, { returns: true }), astNode;
                  } }, { key: "astInitialize", value: function astInitialize(o, level) {
                    return o = Object.assign({}, o), null != level && (o.level = level), o.level > LEVEL_TOP && this.checkForPureStatementInExpression(), this.isStatement(o) && o.level !== LEVEL_TOP && null != o.scope && this.makeReturn(null, true), o;
                  } }, { key: "astNode", value: function astNode(o) {
                    return Object.assign({}, { type: this.astType(o) }, this.astProperties(o), this.astLocationData());
                  } }, { key: "astProperties", value: function astProperties() {
                    return {};
                  } }, { key: "astType", value: function astType() {
                    return this.constructor.name;
                  } }, { key: "astLocationData", value: function astLocationData() {
                    return jisonLocationDataToAstLocationData(this.locationData);
                  } }, { key: "isStatementAst", value: function isStatementAst(o) {
                    return this.isStatement(o);
                  } }, { key: "eachChild", value: function eachChild(func) {
                    var attr, child, j, k, len1, len2, ref1, ref2;
                    if (!this.children)
                      return this;
                    for (ref1 = this.children, j = 0, len1 = ref1.length; j < len1; j++)
                      if (attr = ref1[j], this[attr]) {
                        for (ref2 = flatten([this[attr]]), k = 0, len2 = ref2.length; k < len2; k++)
                          if (child = ref2[k], false === func(child))
                            return this;
                      }
                    return this;
                  } }, { key: "traverseChildren", value: function traverseChildren(crossScope, func) {
                    return this.eachChild(function(child) {
                      var recur;
                      if (recur = func(child), false !== recur)
                        return child.traverseChildren(crossScope, func);
                    });
                  } }, { key: "replaceInContext", value: function replaceInContext(match, replacement) {
                    var attr, child, children, i, j, k, len1, len2, ref1, ref2;
                    if (!this.children)
                      return false;
                    for (ref1 = this.children, j = 0, len1 = ref1.length; j < len1; j++)
                      if (attr = ref1[j], children = this[attr])
                        if (Array.isArray(children))
                          for (i = k = 0, len2 = children.length; k < len2; i = ++k) {
                            if (child = children[i], match(child))
                              return splice.apply(children, [i, i - i + 1].concat(ref2 = replacement(child, this))), ref2, true;
                            if (child.replaceInContext(match, replacement))
                              return true;
                          }
                        else {
                          if (match(children))
                            return this[attr] = replacement(children, this), true;
                          if (children.replaceInContext(match, replacement))
                            return true;
                        }
                  } }, { key: "invert", value: function invert() {
                    return new Op("!", this);
                  } }, { key: "unwrapAll", value: function unwrapAll() {
                    var node;
                    for (node = this; node !== (node = node.unwrap()); )
                      continue;
                    return node;
                  } }, { key: "updateLocationDataIfMissing", value: function updateLocationDataIfMissing(locationData, force) {
                    return (force && (this.forceUpdateLocation = true), this.locationData && !this.forceUpdateLocation) ? this : (delete this.forceUpdateLocation, this.locationData = locationData, this.eachChild(function(child) {
                      return child.updateLocationDataIfMissing(locationData);
                    }));
                  } }, { key: "withLocationDataFrom", value: function withLocationDataFrom(_ref19) {
                    var locationData = _ref19.locationData;
                    return this.updateLocationDataIfMissing(locationData);
                  } }, { key: "withLocationDataAndCommentsFrom", value: function withLocationDataAndCommentsFrom(node) {
                    var comments;
                    return this.withLocationDataFrom(node), comments = node.comments, (null == comments ? void 0 : comments.length) && (this.comments = comments), this;
                  } }, { key: "error", value: function error(message) {
                    return throwSyntaxError(message, this.locationData);
                  } }, { key: "makeCode", value: function makeCode(code) {
                    return new CodeFragment(this, code);
                  } }, { key: "wrapInParentheses", value: function wrapInParentheses(fragments) {
                    return [this.makeCode("(")].concat(_toConsumableArray(fragments), [this.makeCode(")")]);
                  } }, { key: "wrapInBraces", value: function wrapInBraces(fragments) {
                    return [this.makeCode("{")].concat(_toConsumableArray(fragments), [this.makeCode("}")]);
                  } }, { key: "joinFragmentArrays", value: function joinFragmentArrays(fragmentsList, joinStr) {
                    var answer, fragments, i, j, len1;
                    for (answer = [], i = j = 0, len1 = fragmentsList.length; j < len1; i = ++j)
                      fragments = fragmentsList[i], i && answer.push(this.makeCode(joinStr)), answer = answer.concat(fragments);
                    return answer;
                  } }]), Base3;
                }();
                return Base2.prototype.children = [], Base2.prototype.isStatement = NO, Base2.prototype.compiledComments = [], Base2.prototype.includeCommentFragments = NO, Base2.prototype.jumps = NO, Base2.prototype.shouldCache = YES, Base2.prototype.isChainable = NO, Base2.prototype.isAssignable = NO, Base2.prototype.isNumber = NO, Base2.prototype.unwrap = THIS, Base2.prototype.unfoldSoak = NO, Base2.prototype.assigns = NO, Base2;
              }.call(this), exports2.HoistTarget = HoistTarget = function(_Base) {
                "use strict";
                function HoistTarget2(source1) {
                  var _this8;
                  return _classCallCheck(this, HoistTarget2), _this8 = _possibleConstructorReturn(this, _getPrototypeOf(HoistTarget2).call(this)), _this8.source = source1, _this8.options = {}, _this8.targetFragments = { fragments: [] }, _this8;
                }
                return _inherits(HoistTarget2, _Base), _createClass(HoistTarget2, null, [{ key: "expand", value: function expand(fragments) {
                  var fragment, i, j, ref1;
                  for (i = j = fragments.length - 1; 0 <= j; i = j += -1)
                    fragment = fragments[i], fragment.fragments && (splice.apply(fragments, [i, i - i + 1].concat(ref1 = this.expand(fragment.fragments))), ref1);
                  return fragments;
                } }]), _createClass(HoistTarget2, [{ key: "isStatement", value: function isStatement(o) {
                  return this.source.isStatement(o);
                } }, { key: "update", value: function update(compile, o) {
                  return this.targetFragments.fragments = compile.call(this.source, merge(o, this.options));
                } }, { key: "compileToFragments", value: function compileToFragments(o, level) {
                  return this.options.indent = o.indent, this.options.level = null == level ? o.level : level, [this.targetFragments];
                } }, { key: "compileNode", value: function compileNode(o) {
                  return this.compileToFragments(o);
                } }, { key: "compileClosure", value: function compileClosure(o) {
                  return this.compileToFragments(o);
                } }]), HoistTarget2;
              }(Base), exports2.Root = Root = function() {
                var Root2 = function(_Base2) {
                  "use strict";
                  function Root3(body1) {
                    var _this9;
                    return _classCallCheck(this, Root3), _this9 = _possibleConstructorReturn(this, _getPrototypeOf(Root3).call(this)), _this9.body = body1, _this9;
                  }
                  return _inherits(Root3, _Base2), _createClass(Root3, [{ key: "compileNode", value: function compileNode(o) {
                    var fragments;
                    return o.indent = o.bare ? "" : TAB, o.level = LEVEL_TOP, o.compiling = true, this.initializeScope(o), fragments = this.body.compileRoot(o), o.bare ? fragments : [].concat(this.makeCode("(function() {\n"), fragments, this.makeCode("\n}).call(this);\n"));
                  } }, { key: "initializeScope", value: function initializeScope(o) {
                    var j, len1, name, ref1, ref2, results1;
                    for (o.scope = new Scope(null, this.body, null, null == (ref1 = o.referencedVars) ? [] : ref1), ref2 = o.locals || [], results1 = [], j = 0, len1 = ref2.length; j < len1; j++)
                      name = ref2[j], results1.push(o.scope.parameter(name));
                    return results1;
                  } }, { key: "commentsAst", value: function commentsAst() {
                    var comment, commentToken, j, len1, ref1, results1;
                    for (null == this.allComments && (this.allComments = function() {
                      var j2, len12, ref12, ref2, results12;
                      for (ref2 = null == (ref12 = this.allCommentTokens) ? [] : ref12, results12 = [], j2 = 0, len12 = ref2.length; j2 < len12; j2++)
                        commentToken = ref2[j2], commentToken.heregex || (commentToken.here ? results12.push(new HereComment(commentToken)) : results12.push(new LineComment(commentToken)));
                      return results12;
                    }.call(this)), ref1 = this.allComments, results1 = [], j = 0, len1 = ref1.length; j < len1; j++)
                      comment = ref1[j], results1.push(comment.ast());
                    return results1;
                  } }, { key: "astNode", value: function astNode(o) {
                    return o.level = LEVEL_TOP, this.initializeScope(o), _get(_getPrototypeOf(Root3.prototype), "astNode", this).call(this, o);
                  } }, { key: "astType", value: function astType() {
                    return "File";
                  } }, { key: "astProperties", value: function astProperties(o) {
                    return this.body.isRootBlock = true, { program: Object.assign(this.body.ast(o), this.astLocationData()), comments: this.commentsAst() };
                  } }]), Root3;
                }(Base);
                return Root2.prototype.children = ["body"], Root2;
              }.call(this), exports2.Block = Block = function() {
                var Block2 = function(_Base3) {
                  "use strict";
                  function Block3(nodes) {
                    var _this10;
                    return _classCallCheck(this, Block3), _this10 = _possibleConstructorReturn(this, _getPrototypeOf(Block3).call(this)), _this10.expressions = compact(flatten(nodes || [])), _this10;
                  }
                  return _inherits(Block3, _Base3), _createClass(Block3, [{ key: "push", value: function push(node) {
                    return this.expressions.push(node), this;
                  } }, { key: "pop", value: function pop() {
                    return this.expressions.pop();
                  } }, { key: "unshift", value: function unshift(node) {
                    return this.expressions.unshift(node), this;
                  } }, { key: "unwrap", value: function unwrap() {
                    return 1 === this.expressions.length ? this.expressions[0] : this;
                  } }, { key: "isEmpty", value: function isEmpty() {
                    return !this.expressions.length;
                  } }, { key: "isStatement", value: function isStatement(o) {
                    var exp, j, len1, ref1;
                    for (ref1 = this.expressions, j = 0, len1 = ref1.length; j < len1; j++)
                      if (exp = ref1[j], exp.isStatement(o))
                        return true;
                    return false;
                  } }, { key: "jumps", value: function jumps(o) {
                    var exp, j, jumpNode, len1, ref1;
                    for (ref1 = this.expressions, j = 0, len1 = ref1.length; j < len1; j++)
                      if (exp = ref1[j], jumpNode = exp.jumps(o))
                        return jumpNode;
                  } }, { key: "makeReturn", value: function makeReturn(results, mark) {
                    var _slice1$call, _slice1$call2, expr, expressions, last, lastExp, len, penult, ref1, ref2;
                    if (len = this.expressions.length, ref1 = this.expressions, _slice1$call = slice1.call(ref1, -1), _slice1$call2 = _slicedToArray(_slice1$call, 1), lastExp = _slice1$call2[0], _slice1$call, lastExp = (null == lastExp ? void 0 : lastExp.unwrap()) || false, lastExp && lastExp instanceof Parens && 1 < lastExp.body.expressions.length) {
                      var _lastExp = lastExp;
                      expressions = _lastExp.body.expressions;
                      var _slice1$call3 = slice1.call(expressions, -2), _slice1$call4 = _slicedToArray(_slice1$call3, 2);
                      penult = _slice1$call4[0], last = _slice1$call4[1], penult = penult.unwrap(), last = last.unwrap(), penult instanceof JSXElement && last instanceof JSXElement && expressions[expressions.length - 1].error("Adjacent JSX elements must be wrapped in an enclosing tag");
                    }
                    if (mark)
                      return void (null != (ref2 = this.expressions[len - 1]) && ref2.makeReturn(results, mark));
                    for (; len--; ) {
                      expr = this.expressions[len], this.expressions[len] = expr.makeReturn(results), expr instanceof Return && !expr.expression && this.expressions.splice(len, 1);
                      break;
                    }
                    return this;
                  } }, { key: "compile", value: function compile(o, lvl) {
                    return o.scope ? _get(_getPrototypeOf(Block3.prototype), "compile", this).call(this, o, lvl) : new Root(this).withLocationDataFrom(this).compile(o, lvl);
                  } }, { key: "compileNode", value: function compileNode(o) {
                    var answer, compiledNodes, fragments, index, j, lastFragment, len1, node, ref1, top;
                    for (this.tab = o.indent, top = o.level === LEVEL_TOP, compiledNodes = [], ref1 = this.expressions, index = j = 0, len1 = ref1.length; j < len1; index = ++j) {
                      if (node = ref1[index], node.hoisted) {
                        node.compileToFragments(o);
                        continue;
                      }
                      if (node = node.unfoldSoak(o) || node, node instanceof Block3)
                        compiledNodes.push(node.compileNode(o));
                      else if (top) {
                        if (node.front = true, fragments = node.compileToFragments(o), !node.isStatement(o)) {
                          fragments = indentInitial(fragments, this);
                          var _slice1$call5 = slice1.call(fragments, -1), _slice1$call6 = _slicedToArray(_slice1$call5, 1);
                          lastFragment = _slice1$call6[0], "" === lastFragment.code || lastFragment.isComment || fragments.push(this.makeCode(";"));
                        }
                        compiledNodes.push(fragments);
                      } else
                        compiledNodes.push(node.compileToFragments(o, LEVEL_LIST));
                    }
                    return top ? this.spaced ? [].concat(this.joinFragmentArrays(compiledNodes, "\n\n"), this.makeCode("\n")) : this.joinFragmentArrays(compiledNodes, "\n") : (answer = compiledNodes.length ? this.joinFragmentArrays(compiledNodes, ", ") : [this.makeCode("void 0")], 1 < compiledNodes.length && o.level >= LEVEL_LIST ? this.wrapInParentheses(answer) : answer);
                  } }, { key: "compileRoot", value: function compileRoot(o) {
                    var fragments;
                    return this.spaced = true, fragments = this.compileWithDeclarations(o), HoistTarget.expand(fragments), this.compileComments(fragments);
                  } }, { key: "compileWithDeclarations", value: function compileWithDeclarations(o) {
                    var assigns, declaredVariable, declaredVariables, declaredVariablesIndex, declars, exp, fragments, i, j, k, len1, len2, post, ref1, rest, scope, spaced;
                    for (fragments = [], post = [], ref1 = this.expressions, i = j = 0, len1 = ref1.length; j < len1 && (exp = ref1[i], exp = exp.unwrap(), !!(exp instanceof Literal)); i = ++j)
                      ;
                    if (o = merge(o, { level: LEVEL_TOP }), i) {
                      rest = this.expressions.splice(i, 9e9);
                      var _ref20 = [this.spaced, false];
                      spaced = _ref20[0], this.spaced = _ref20[1];
                      var _ref21 = [this.compileNode(o), spaced];
                      fragments = _ref21[0], this.spaced = _ref21[1], this.expressions = rest;
                    }
                    post = this.compileNode(o);
                    var _o2 = o;
                    if (scope = _o2.scope, scope.expressions === this)
                      if (declars = o.scope.hasDeclarations(), assigns = scope.hasAssignments, declars || assigns) {
                        if (i && fragments.push(this.makeCode("\n")), fragments.push(this.makeCode("".concat(this.tab, "var "))), declars)
                          for (declaredVariables = scope.declaredVariables(), declaredVariablesIndex = k = 0, len2 = declaredVariables.length; k < len2; declaredVariablesIndex = ++k) {
                            if (declaredVariable = declaredVariables[declaredVariablesIndex], fragments.push(this.makeCode(declaredVariable)), Object.prototype.hasOwnProperty.call(o.scope.comments, declaredVariable)) {
                              var _fragments;
                              (_fragments = fragments).push.apply(_fragments, _toConsumableArray(o.scope.comments[declaredVariable]));
                            }
                            declaredVariablesIndex !== declaredVariables.length - 1 && fragments.push(this.makeCode(", "));
                          }
                        assigns && (declars && fragments.push(this.makeCode(",\n".concat(this.tab + TAB))), fragments.push(this.makeCode(scope.assignedVariables().join(",\n".concat(this.tab + TAB))))), fragments.push(this.makeCode(";\n".concat(this.spaced ? "\n" : "")));
                      } else
                        fragments.length && post.length && fragments.push(this.makeCode("\n"));
                    return fragments.concat(post);
                  } }, { key: "compileComments", value: function compileComments(fragments) {
                    var code, commentFragment, fragment, fragmentIndent, fragmentIndex, indent, j, k, l, len1, len2, len3, newLineIndex, onNextLine, p, pastFragment, pastFragmentIndex, q, ref1, ref2, ref3, ref4, trail, upcomingFragment, upcomingFragmentIndex;
                    for (fragmentIndex = j = 0, len1 = fragments.length; j < len1; fragmentIndex = ++j) {
                      if (fragment = fragments[fragmentIndex], fragment.precedingComments) {
                        for (fragmentIndent = "", ref1 = fragments.slice(0, fragmentIndex + 1), k = ref1.length - 1; 0 <= k; k += -1)
                          if (pastFragment = ref1[k], indent = /^ {2,}/m.exec(pastFragment.code), indent) {
                            fragmentIndent = indent[0];
                            break;
                          } else if (0 <= indexOf.call(pastFragment.code, "\n"))
                            break;
                        for (code = "\n".concat(fragmentIndent) + function() {
                          var l2, len22, ref22, results1;
                          for (ref22 = fragment.precedingComments, results1 = [], l2 = 0, len22 = ref22.length; l2 < len22; l2++)
                            commentFragment = ref22[l2], commentFragment.isHereComment && commentFragment.multiline ? results1.push(multident(commentFragment.code, fragmentIndent, false)) : results1.push(commentFragment.code);
                          return results1;
                        }().join("\n".concat(fragmentIndent)).replace(/^(\s*)$/gm, ""), ref2 = fragments.slice(0, fragmentIndex + 1), pastFragmentIndex = l = ref2.length - 1; 0 <= l; pastFragmentIndex = l += -1) {
                          if (pastFragment = ref2[pastFragmentIndex], newLineIndex = pastFragment.code.lastIndexOf("\n"), -1 === newLineIndex)
                            if (0 === pastFragmentIndex)
                              pastFragment.code = "\n" + pastFragment.code, newLineIndex = 0;
                            else if (pastFragment.isStringWithInterpolations && "{" === pastFragment.code)
                              code = code.slice(1) + "\n", newLineIndex = 1;
                            else
                              continue;
                          delete fragment.precedingComments, pastFragment.code = pastFragment.code.slice(0, newLineIndex) + code + pastFragment.code.slice(newLineIndex);
                          break;
                        }
                      }
                      if (fragment.followingComments) {
                        if (trail = fragment.followingComments[0].trail, fragmentIndent = "", !(trail && 1 === fragment.followingComments.length)) {
                          for (onNextLine = false, ref3 = fragments.slice(fragmentIndex), p = 0, len2 = ref3.length; p < len2; p++)
                            if (upcomingFragment = ref3[p], !onNextLine) {
                              if (0 <= indexOf.call(upcomingFragment.code, "\n"))
                                onNextLine = true;
                              else
                                continue;
                            } else if (indent = /^ {2,}/m.exec(upcomingFragment.code), indent) {
                              fragmentIndent = indent[0];
                              break;
                            } else if (0 <= indexOf.call(upcomingFragment.code, "\n"))
                              break;
                        }
                        for (code = 1 === fragmentIndex && /^\s+$/.test(fragments[0].code) ? "" : trail ? " " : "\n".concat(fragmentIndent), code += function() {
                          var len32, q2, ref42, results1;
                          for (ref42 = fragment.followingComments, results1 = [], q2 = 0, len32 = ref42.length; q2 < len32; q2++)
                            commentFragment = ref42[q2], commentFragment.isHereComment && commentFragment.multiline ? results1.push(multident(commentFragment.code, fragmentIndent, false)) : results1.push(commentFragment.code);
                          return results1;
                        }().join("\n".concat(fragmentIndent)).replace(/^(\s*)$/gm, ""), ref4 = fragments.slice(fragmentIndex), upcomingFragmentIndex = q = 0, len3 = ref4.length; q < len3; upcomingFragmentIndex = ++q) {
                          if (upcomingFragment = ref4[upcomingFragmentIndex], newLineIndex = upcomingFragment.code.indexOf("\n"), -1 === newLineIndex)
                            if (upcomingFragmentIndex === fragments.length - 1)
                              upcomingFragment.code += "\n", newLineIndex = upcomingFragment.code.length;
                            else if (upcomingFragment.isStringWithInterpolations && "}" === upcomingFragment.code)
                              code = "".concat(code, "\n"), newLineIndex = 0;
                            else
                              continue;
                          delete fragment.followingComments, "\n" === upcomingFragment.code && (code = code.replace(/^\n/, "")), upcomingFragment.code = upcomingFragment.code.slice(0, newLineIndex) + code + upcomingFragment.code.slice(newLineIndex);
                          break;
                        }
                      }
                    }
                    return fragments;
                  } }, { key: "astNode", value: function astNode(o) {
                    return null != o.level && o.level !== LEVEL_TOP && this.expressions.length ? new Sequence(this.expressions).withLocationDataFrom(this).ast(o) : _get(_getPrototypeOf(Block3.prototype), "astNode", this).call(this, o);
                  } }, { key: "astType", value: function astType() {
                    return this.isRootBlock ? "Program" : this.isClassBody ? "ClassBody" : "BlockStatement";
                  } }, { key: "astProperties", value: function astProperties(o) {
                    var body, checkForDirectives, directives, expression, expressionAst, j, len1, ref1;
                    for (checkForDirectives = del(o, "checkForDirectives"), (this.isRootBlock || checkForDirectives) && sniffDirectives(this.expressions, { notFinalExpression: checkForDirectives }), directives = [], body = [], ref1 = this.expressions, j = 0, len1 = ref1.length; j < len1; j++)
                      if (expression = ref1[j], expressionAst = expression.ast(o), null == expressionAst)
                        continue;
                      else
                        expression instanceof Directive ? directives.push(expressionAst) : expression.isStatementAst(o) ? body.push(expressionAst) : body.push(Object.assign({ type: "ExpressionStatement", expression: expressionAst }, expression.astLocationData()));
                    return { body, directives };
                  } }, { key: "astLocationData", value: function astLocationData() {
                    return this.isRootBlock && null == this.locationData ? void 0 : _get(_getPrototypeOf(Block3.prototype), "astLocationData", this).call(this);
                  } }], [{ key: "wrap", value: function wrap(nodes) {
                    return 1 === nodes.length && nodes[0] instanceof Block3 ? nodes[0] : new Block3(nodes);
                  } }]), Block3;
                }(Base);
                return Block2.prototype.children = ["expressions"], Block2;
              }.call(this), exports2.Directive = Directive = function(_Base4) {
                "use strict";
                function Directive2(value1) {
                  var _this11;
                  return _classCallCheck(this, Directive2), _this11 = _possibleConstructorReturn(this, _getPrototypeOf(Directive2).call(this)), _this11.value = value1, _this11;
                }
                return _inherits(Directive2, _Base4), _createClass(Directive2, [{ key: "astProperties", value: function astProperties(o) {
                  return { value: Object.assign({}, this.value.ast(o), { type: "DirectiveLiteral" }) };
                } }]), Directive2;
              }(Base), exports2.Literal = Literal = function() {
                var Literal2 = function(_Base5) {
                  "use strict";
                  function Literal3(value1) {
                    var _this12;
                    return _classCallCheck(this, Literal3), _this12 = _possibleConstructorReturn(this, _getPrototypeOf(Literal3).call(this)), _this12.value = value1, _this12;
                  }
                  return _inherits(Literal3, _Base5), _createClass(Literal3, [{ key: "assigns", value: function assigns(name) {
                    return name === this.value;
                  } }, { key: "compileNode", value: function compileNode() {
                    return [this.makeCode(this.value)];
                  } }, { key: "astProperties", value: function astProperties() {
                    return { value: this.value };
                  } }, { key: "toString", value: function toString() {
                    return " ".concat(this.isStatement() ? _get(_getPrototypeOf(Literal3.prototype), "toString", this).call(this) : this.constructor.name, ": ").concat(this.value);
                  } }]), Literal3;
                }(Base);
                return Literal2.prototype.shouldCache = NO, Literal2;
              }.call(this), exports2.NumberLiteral = NumberLiteral = function(_Literal) {
                "use strict";
                function NumberLiteral2(value1) {
                  var _ref22 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, parsedValue = _ref22.parsedValue, _this13;
                  return _classCallCheck(this, NumberLiteral2), _this13 = _possibleConstructorReturn(this, _getPrototypeOf(NumberLiteral2).call(this)), _this13.value = value1, _this13.parsedValue = parsedValue, null == _this13.parsedValue && (isNumber(_this13.value) ? (_this13.parsedValue = _this13.value, _this13.value = "".concat(_this13.value)) : _this13.parsedValue = parseNumber(_this13.value)), _this13;
                }
                return _inherits(NumberLiteral2, _Literal), _createClass(NumberLiteral2, [{ key: "isBigInt", value: function isBigInt() {
                  return /n$/.test(this.value);
                } }, { key: "astType", value: function astType() {
                  return this.isBigInt() ? "BigIntLiteral" : "NumericLiteral";
                } }, { key: "astProperties", value: function astProperties() {
                  return { value: this.isBigInt() ? this.parsedValue.toString() : this.parsedValue, extra: { rawValue: this.isBigInt() ? this.parsedValue.toString() : this.parsedValue, raw: this.value } };
                } }]), NumberLiteral2;
              }(Literal), exports2.InfinityLiteral = InfinityLiteral = function(_NumberLiteral) {
                "use strict";
                function InfinityLiteral2(value1) {
                  var _ref23 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, _ref23$originalValue = _ref23.originalValue, originalValue = void 0 === _ref23$originalValue ? "Infinity" : _ref23$originalValue, _this14;
                  return _classCallCheck(this, InfinityLiteral2), _this14 = _possibleConstructorReturn(this, _getPrototypeOf(InfinityLiteral2).call(this)), _this14.value = value1, _this14.originalValue = originalValue, _this14;
                }
                return _inherits(InfinityLiteral2, _NumberLiteral), _createClass(InfinityLiteral2, [{ key: "compileNode", value: function compileNode() {
                  return [this.makeCode("2e308")];
                } }, { key: "astNode", value: function astNode(o) {
                  return "Infinity" === this.originalValue ? _get(_getPrototypeOf(InfinityLiteral2.prototype), "astNode", this).call(this, o) : new NumberLiteral(this.value).withLocationDataFrom(this).ast(o);
                } }, { key: "astType", value: function astType() {
                  return "Identifier";
                } }, { key: "astProperties", value: function astProperties() {
                  return { name: "Infinity", declaration: false };
                } }]), InfinityLiteral2;
              }(NumberLiteral), exports2.NaNLiteral = NaNLiteral = function(_NumberLiteral2) {
                "use strict";
                function NaNLiteral2() {
                  return _classCallCheck(this, NaNLiteral2), _possibleConstructorReturn(this, _getPrototypeOf(NaNLiteral2).call(this, "NaN"));
                }
                return _inherits(NaNLiteral2, _NumberLiteral2), _createClass(NaNLiteral2, [{ key: "compileNode", value: function compileNode(o) {
                  var code;
                  return code = [this.makeCode("0/0")], o.level >= LEVEL_OP ? this.wrapInParentheses(code) : code;
                } }, { key: "astType", value: function astType() {
                  return "Identifier";
                } }, { key: "astProperties", value: function astProperties() {
                  return { name: "NaN", declaration: false };
                } }]), NaNLiteral2;
              }(NumberLiteral), exports2.StringLiteral = StringLiteral = function(_Literal2) {
                "use strict";
                function StringLiteral2(originalValue) {
                  var _ref24 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, quote = _ref24.quote, initialChunk = _ref24.initialChunk, finalChunk = _ref24.finalChunk, indent1 = _ref24.indent, double1 = _ref24.double, heregex1 = _ref24.heregex, _this15;
                  _classCallCheck(this, StringLiteral2);
                  var heredoc, indentRegex, val;
                  return _this15 = _possibleConstructorReturn(this, _getPrototypeOf(StringLiteral2).call(this, "")), _this15.originalValue = originalValue, _this15.quote = quote, _this15.initialChunk = initialChunk, _this15.finalChunk = finalChunk, _this15.indent = indent1, _this15.double = double1, _this15.heregex = heregex1, "///" === _this15.quote && (_this15.quote = null), _this15.fromSourceString = null != _this15.quote, null == _this15.quote && (_this15.quote = '"'), heredoc = _this15.isFromHeredoc(), val = _this15.originalValue, _this15.heregex ? (val = val.replace(HEREGEX_OMIT, "$1$2"), val = replaceUnicodeCodePointEscapes(val, { flags: _this15.heregex.flags })) : (val = val.replace(STRING_OMIT, "$1"), val = _this15.fromSourceString ? heredoc ? (_this15.indent ? indentRegex = RegExp("\\n".concat(_this15.indent), "g") : void 0, indentRegex ? val = val.replace(indentRegex, "\n") : void 0, _this15.initialChunk ? val = val.replace(LEADING_BLANK_LINE, "") : void 0, _this15.finalChunk ? val = val.replace(TRAILING_BLANK_LINE, "") : void 0, val) : val.replace(SIMPLE_STRING_OMIT, function(match, offset) {
                    return _this15.initialChunk && 0 === offset || _this15.finalChunk && offset + match.length === val.length ? "" : " ";
                  }) : val), _this15.delimiter = _this15.quote.charAt(0), _this15.value = makeDelimitedLiteral(val, { delimiter: _this15.delimiter, double: _this15.double }), _this15.unquotedValueForTemplateLiteral = makeDelimitedLiteral(val, { delimiter: "`", double: _this15.double, escapeNewlines: false, includeDelimiters: false, convertTrailingNullEscapes: true }), _this15.unquotedValueForJSX = makeDelimitedLiteral(val, { double: _this15.double, escapeNewlines: false, includeDelimiters: false, escapeDelimiter: false }), _this15;
                }
                return _inherits(StringLiteral2, _Literal2), _createClass(StringLiteral2, [{ key: "compileNode", value: function compileNode(o) {
                  return this.shouldGenerateTemplateLiteral() ? StringWithInterpolations.fromStringLiteral(this).compileNode(o) : this.jsx ? [this.makeCode(this.unquotedValueForJSX)] : _get(_getPrototypeOf(StringLiteral2.prototype), "compileNode", this).call(this, o);
                } }, { key: "withoutQuotesInLocationData", value: function withoutQuotesInLocationData() {
                  var copy, endsWithNewline, locationData;
                  return endsWithNewline = "\n" === this.originalValue.slice(-1), locationData = Object.assign({}, this.locationData), locationData.first_column += this.quote.length, endsWithNewline ? (locationData.last_line -= 1, locationData.last_column = locationData.last_line === locationData.first_line ? locationData.first_column + this.originalValue.length - "\n".length : this.originalValue.slice(0, -1).length - "\n".length - this.originalValue.slice(0, -1).lastIndexOf("\n")) : locationData.last_column -= this.quote.length, locationData.last_column_exclusive -= this.quote.length, locationData.range = [locationData.range[0] + this.quote.length, locationData.range[1] - this.quote.length], copy = new StringLiteral2(this.originalValue, { quote: this.quote, initialChunk: this.initialChunk, finalChunk: this.finalChunk, indent: this.indent, double: this.double, heregex: this.heregex }), copy.locationData = locationData, copy;
                } }, { key: "isFromHeredoc", value: function isFromHeredoc() {
                  return 3 === this.quote.length;
                } }, { key: "shouldGenerateTemplateLiteral", value: function shouldGenerateTemplateLiteral() {
                  return this.isFromHeredoc();
                } }, { key: "astNode", value: function astNode(o) {
                  return this.shouldGenerateTemplateLiteral() ? StringWithInterpolations.fromStringLiteral(this).ast(o) : _get(_getPrototypeOf(StringLiteral2.prototype), "astNode", this).call(this, o);
                } }, { key: "astProperties", value: function astProperties() {
                  return { value: this.originalValue, extra: { raw: "".concat(this.delimiter).concat(this.originalValue).concat(this.delimiter) } };
                } }]), StringLiteral2;
              }(Literal), exports2.RegexLiteral = RegexLiteral = function() {
                var RegexLiteral2 = function(_Literal3) {
                  "use strict";
                  function RegexLiteral3(value) {
                    var _ref25 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, _ref25$delimiter = _ref25.delimiter, delimiter1 = void 0 === _ref25$delimiter ? "/" : _ref25$delimiter, _ref25$heregexComment = _ref25.heregexCommentTokens, heregexCommentTokens = void 0 === _ref25$heregexComment ? [] : _ref25$heregexComment, _this16;
                    _classCallCheck(this, RegexLiteral3);
                    var endDelimiterIndex, heregex, val;
                    return _this16 = _possibleConstructorReturn(this, _getPrototypeOf(RegexLiteral3).call(this, "")), _this16.delimiter = delimiter1, _this16.heregexCommentTokens = heregexCommentTokens, heregex = "///" === _this16.delimiter, endDelimiterIndex = value.lastIndexOf("/"), _this16.flags = value.slice(endDelimiterIndex + 1), val = _this16.originalValue = value.slice(1, endDelimiterIndex), heregex && (val = val.replace(HEREGEX_OMIT, "$1$2")), val = replaceUnicodeCodePointEscapes(val, { flags: _this16.flags }), _this16.value = "".concat(makeDelimitedLiteral(val, { delimiter: "/" })).concat(_this16.flags), _this16;
                  }
                  return _inherits(RegexLiteral3, _Literal3), _createClass(RegexLiteral3, [{ key: "astType", value: function astType() {
                    return "RegExpLiteral";
                  } }, { key: "astProperties", value: function astProperties(o) {
                    var _this$REGEX_REGEX$exe = this.REGEX_REGEX.exec(this.value), _this$REGEX_REGEX$exe2 = _slicedToArray(_this$REGEX_REGEX$exe, 2), heregexCommentToken, pattern;
                    return pattern = _this$REGEX_REGEX$exe2[1], { value: void 0, pattern, flags: this.flags, delimiter: this.delimiter, originalPattern: this.originalValue, extra: { raw: this.value, originalRaw: "".concat(this.delimiter).concat(this.originalValue).concat(this.delimiter).concat(this.flags), rawValue: void 0 }, comments: function() {
                      var j, len1, ref1, results1;
                      for (ref1 = this.heregexCommentTokens, results1 = [], j = 0, len1 = ref1.length; j < len1; j++)
                        heregexCommentToken = ref1[j], heregexCommentToken.here ? results1.push(new HereComment(heregexCommentToken).ast(o)) : results1.push(new LineComment(heregexCommentToken).ast(o));
                      return results1;
                    }.call(this) };
                  } }]), RegexLiteral3;
                }(Literal);
                return RegexLiteral2.prototype.REGEX_REGEX = /^\/(.*)\/\w*$/, RegexLiteral2;
              }.call(this), exports2.PassthroughLiteral = PassthroughLiteral = function(_Literal4) {
                "use strict";
                function PassthroughLiteral2(originalValue) {
                  var _ref26 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, here = _ref26.here, generated = _ref26.generated, _this17;
                  return _classCallCheck(this, PassthroughLiteral2), _this17 = _possibleConstructorReturn(this, _getPrototypeOf(PassthroughLiteral2).call(this, "")), _this17.originalValue = originalValue, _this17.here = here, _this17.generated = generated, _this17.value = _this17.originalValue.replace(/\\+(`|$)/g, function(string) {
                    var _Mathceil = Math.ceil;
                    return string.slice(-_Mathceil(string.length / 2));
                  }), _this17;
                }
                return _inherits(PassthroughLiteral2, _Literal4), _createClass(PassthroughLiteral2, [{ key: "astNode", value: function astNode(o) {
                  return this.generated ? null : _get(_getPrototypeOf(PassthroughLiteral2.prototype), "astNode", this).call(this, o);
                } }, { key: "astProperties", value: function astProperties() {
                  return { value: this.originalValue, here: !!this.here };
                } }]), PassthroughLiteral2;
              }(Literal), exports2.IdentifierLiteral = IdentifierLiteral = function() {
                var IdentifierLiteral2 = function(_Literal5) {
                  "use strict";
                  function IdentifierLiteral3() {
                    return _classCallCheck(this, IdentifierLiteral3), _possibleConstructorReturn(this, _getPrototypeOf(IdentifierLiteral3).apply(this, arguments));
                  }
                  return _inherits(IdentifierLiteral3, _Literal5), _createClass(IdentifierLiteral3, [{ key: "eachName", value: function eachName(iterator) {
                    return iterator(this);
                  } }, { key: "astType", value: function astType() {
                    return this.jsx ? "JSXIdentifier" : "Identifier";
                  } }, { key: "astProperties", value: function astProperties() {
                    return { name: this.value, declaration: !!this.isDeclaration };
                  } }]), IdentifierLiteral3;
                }(Literal);
                return IdentifierLiteral2.prototype.isAssignable = YES, IdentifierLiteral2;
              }.call(this), exports2.PropertyName = PropertyName = function() {
                var PropertyName2 = function(_Literal6) {
                  "use strict";
                  function PropertyName3() {
                    return _classCallCheck(this, PropertyName3), _possibleConstructorReturn(this, _getPrototypeOf(PropertyName3).apply(this, arguments));
                  }
                  return _inherits(PropertyName3, _Literal6), _createClass(PropertyName3, [{ key: "astType", value: function astType() {
                    return this.jsx ? "JSXIdentifier" : "Identifier";
                  } }, { key: "astProperties", value: function astProperties() {
                    return { name: this.value, declaration: false };
                  } }]), PropertyName3;
                }(Literal);
                return PropertyName2.prototype.isAssignable = YES, PropertyName2;
              }.call(this), exports2.ComputedPropertyName = ComputedPropertyName = function(_PropertyName) {
                "use strict";
                function ComputedPropertyName2() {
                  return _classCallCheck(this, ComputedPropertyName2), _possibleConstructorReturn(this, _getPrototypeOf(ComputedPropertyName2).apply(this, arguments));
                }
                return _inherits(ComputedPropertyName2, _PropertyName), _createClass(ComputedPropertyName2, [{ key: "compileNode", value: function compileNode(o) {
                  return [this.makeCode("[")].concat(_toConsumableArray(this.value.compileToFragments(o, LEVEL_LIST)), [this.makeCode("]")]);
                } }, { key: "astNode", value: function astNode(o) {
                  return this.value.ast(o);
                } }]), ComputedPropertyName2;
              }(PropertyName), exports2.StatementLiteral = StatementLiteral = function() {
                var StatementLiteral2 = function(_Literal7) {
                  "use strict";
                  function StatementLiteral3() {
                    return _classCallCheck(this, StatementLiteral3), _possibleConstructorReturn(this, _getPrototypeOf(StatementLiteral3).apply(this, arguments));
                  }
                  return _inherits(StatementLiteral3, _Literal7), _createClass(StatementLiteral3, [{ key: "jumps", value: function jumps(o) {
                    return "break" !== this.value || (null == o ? void 0 : o.loop) || (null == o ? void 0 : o.block) ? "continue" !== this.value || null != o && o.loop ? void 0 : this : this;
                  } }, { key: "compileNode", value: function compileNode() {
                    return [this.makeCode("".concat(this.tab).concat(this.value, ";"))];
                  } }, { key: "astType", value: function astType() {
                    switch (this.value) {
                      case "continue":
                        return "ContinueStatement";
                      case "break":
                        return "BreakStatement";
                      case "debugger":
                        return "DebuggerStatement";
                    }
                  } }]), StatementLiteral3;
                }(Literal);
                return StatementLiteral2.prototype.isStatement = YES, StatementLiteral2.prototype.makeReturn = THIS, StatementLiteral2;
              }.call(this), exports2.ThisLiteral = ThisLiteral = function(_Literal8) {
                "use strict";
                function ThisLiteral2(value) {
                  var _this18;
                  return _classCallCheck(this, ThisLiteral2), _this18 = _possibleConstructorReturn(this, _getPrototypeOf(ThisLiteral2).call(this, "this")), _this18.shorthand = "@" === value, _this18;
                }
                return _inherits(ThisLiteral2, _Literal8), _createClass(ThisLiteral2, [{ key: "compileNode", value: function compileNode(o) {
                  var code, ref1;
                  return code = (null == (ref1 = o.scope.method) ? void 0 : ref1.bound) ? o.scope.method.context : this.value, [this.makeCode(code)];
                } }, { key: "astType", value: function astType() {
                  return "ThisExpression";
                } }, { key: "astProperties", value: function astProperties() {
                  return { shorthand: this.shorthand };
                } }]), ThisLiteral2;
              }(Literal), exports2.UndefinedLiteral = UndefinedLiteral = function(_Literal9) {
                "use strict";
                function UndefinedLiteral2() {
                  return _classCallCheck(this, UndefinedLiteral2), _possibleConstructorReturn(this, _getPrototypeOf(UndefinedLiteral2).call(this, "undefined"));
                }
                return _inherits(UndefinedLiteral2, _Literal9), _createClass(UndefinedLiteral2, [{ key: "compileNode", value: function compileNode(o) {
                  return [this.makeCode(o.level >= LEVEL_ACCESS ? "(void 0)" : "void 0")];
                } }, { key: "astType", value: function astType() {
                  return "Identifier";
                } }, { key: "astProperties", value: function astProperties() {
                  return { name: this.value, declaration: false };
                } }]), UndefinedLiteral2;
              }(Literal), exports2.NullLiteral = NullLiteral = function(_Literal10) {
                "use strict";
                function NullLiteral2() {
                  return _classCallCheck(this, NullLiteral2), _possibleConstructorReturn(this, _getPrototypeOf(NullLiteral2).call(this, "null"));
                }
                return _inherits(NullLiteral2, _Literal10), NullLiteral2;
              }(Literal), exports2.BooleanLiteral = BooleanLiteral = function(_Literal11) {
                "use strict";
                function BooleanLiteral2(value) {
                  var _ref27 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, originalValue = _ref27.originalValue, _this19;
                  return _classCallCheck(this, BooleanLiteral2), _this19 = _possibleConstructorReturn(this, _getPrototypeOf(BooleanLiteral2).call(this, value)), _this19.originalValue = originalValue, null == _this19.originalValue && (_this19.originalValue = _this19.value), _this19;
                }
                return _inherits(BooleanLiteral2, _Literal11), _createClass(BooleanLiteral2, [{ key: "astProperties", value: function astProperties() {
                  return { value: "true" === this.value, name: this.originalValue };
                } }]), BooleanLiteral2;
              }(Literal), exports2.DefaultLiteral = DefaultLiteral = function(_Literal12) {
                "use strict";
                function DefaultLiteral2() {
                  return _classCallCheck(this, DefaultLiteral2), _possibleConstructorReturn(this, _getPrototypeOf(DefaultLiteral2).apply(this, arguments));
                }
                return _inherits(DefaultLiteral2, _Literal12), _createClass(DefaultLiteral2, [{ key: "astType", value: function astType() {
                  return "Identifier";
                } }, { key: "astProperties", value: function astProperties() {
                  return { name: "default", declaration: false };
                } }]), DefaultLiteral2;
              }(Literal), exports2.Return = Return = function() {
                var Return2 = function(_Base6) {
                  "use strict";
                  function Return3(expression1) {
                    var _ref28 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, belongsToFuncDirectiveReturn = _ref28.belongsToFuncDirectiveReturn, _this20;
                    return _classCallCheck(this, Return3), _this20 = _possibleConstructorReturn(this, _getPrototypeOf(Return3).call(this)), _this20.expression = expression1, _this20.belongsToFuncDirectiveReturn = belongsToFuncDirectiveReturn, _this20;
                  }
                  return _inherits(Return3, _Base6), _createClass(Return3, [{ key: "compileToFragments", value: function compileToFragments(o, level) {
                    var expr, ref1;
                    return expr = null == (ref1 = this.expression) ? void 0 : ref1.makeReturn(), expr && !(expr instanceof Return3) ? expr.compileToFragments(o, level) : _get(_getPrototypeOf(Return3.prototype), "compileToFragments", this).call(this, o, level);
                  } }, { key: "compileNode", value: function compileNode(o) {
                    var answer, fragment, j, len1;
                    if (answer = [], this.expression) {
                      for (answer = this.expression.compileToFragments(o, LEVEL_PAREN), unshiftAfterComments(answer, this.makeCode("".concat(this.tab, "return "))), j = 0, len1 = answer.length; j < len1; j++)
                        if (fragment = answer[j], fragment.isHereComment && 0 <= indexOf.call(fragment.code, "\n"))
                          fragment.code = multident(fragment.code, this.tab);
                        else if (fragment.isLineComment)
                          fragment.code = "".concat(this.tab).concat(fragment.code);
                        else
                          break;
                    } else
                      answer.push(this.makeCode("".concat(this.tab, "return")));
                    return answer.push(this.makeCode(";")), answer;
                  } }, { key: "checkForPureStatementInExpression", value: function checkForPureStatementInExpression() {
                    return this.belongsToFuncDirectiveReturn ? void 0 : _get(_getPrototypeOf(Return3.prototype), "checkForPureStatementInExpression", this).call(this);
                  } }, { key: "astType", value: function astType() {
                    return "ReturnStatement";
                  } }, { key: "astProperties", value: function astProperties(o) {
                    var ref1, ref2;
                    return { argument: null == (ref1 = null == (ref2 = this.expression) ? void 0 : ref2.ast(o, LEVEL_PAREN)) ? null : ref1 };
                  } }]), Return3;
                }(Base);
                return Return2.prototype.children = ["expression"], Return2.prototype.isStatement = YES, Return2.prototype.makeReturn = THIS, Return2.prototype.jumps = THIS, Return2;
              }.call(this), exports2.FuncDirectiveReturn = FuncDirectiveReturn = function() {
                var FuncDirectiveReturn2 = function(_Return) {
                  "use strict";
                  function FuncDirectiveReturn3(expression, _ref29) {
                    var returnKeyword = _ref29.returnKeyword, _this21;
                    return _classCallCheck(this, FuncDirectiveReturn3), _this21 = _possibleConstructorReturn(this, _getPrototypeOf(FuncDirectiveReturn3).call(this, expression)), _this21.returnKeyword = returnKeyword, _this21;
                  }
                  return _inherits(FuncDirectiveReturn3, _Return), _createClass(FuncDirectiveReturn3, [{ key: "compileNode", value: function compileNode(o) {
                    return this.checkScope(o), _get(_getPrototypeOf(FuncDirectiveReturn3.prototype), "compileNode", this).call(this, o);
                  } }, { key: "checkScope", value: function checkScope(o) {
                    if (null == o.scope.parent)
                      return this.error("".concat(this.keyword, " can only occur inside functions"));
                  } }, { key: "astNode", value: function astNode(o) {
                    return this.checkScope(o), new Op(this.keyword, new Return(this.expression, { belongsToFuncDirectiveReturn: true }).withLocationDataFrom(null == this.expression ? this.returnKeyword : { locationData: mergeLocationData(this.returnKeyword.locationData, this.expression.locationData) })).withLocationDataFrom(this).ast(o);
                  } }]), FuncDirectiveReturn3;
                }(Return);
                return FuncDirectiveReturn2.prototype.isStatementAst = NO, FuncDirectiveReturn2;
              }.call(this), exports2.YieldReturn = YieldReturn = function() {
                var YieldReturn2 = function(_FuncDirectiveReturn) {
                  "use strict";
                  function YieldReturn3() {
                    return _classCallCheck(this, YieldReturn3), _possibleConstructorReturn(this, _getPrototypeOf(YieldReturn3).apply(this, arguments));
                  }
                  return _inherits(YieldReturn3, _FuncDirectiveReturn), YieldReturn3;
                }(FuncDirectiveReturn);
                return YieldReturn2.prototype.keyword = "yield", YieldReturn2;
              }.call(this), exports2.AwaitReturn = AwaitReturn = function() {
                var AwaitReturn2 = function(_FuncDirectiveReturn2) {
                  "use strict";
                  function AwaitReturn3() {
                    return _classCallCheck(this, AwaitReturn3), _possibleConstructorReturn(this, _getPrototypeOf(AwaitReturn3).apply(this, arguments));
                  }
                  return _inherits(AwaitReturn3, _FuncDirectiveReturn2), AwaitReturn3;
                }(FuncDirectiveReturn);
                return AwaitReturn2.prototype.keyword = "await", AwaitReturn2;
              }.call(this), exports2.Value = Value = function() {
                var Value2 = function(_Base7) {
                  "use strict";
                  function Value3(base, props, tag) {
                    var isDefaultValue = !!(3 < arguments.length && void 0 !== arguments[3]) && arguments[3], _this22;
                    _classCallCheck(this, Value3);
                    var ref1, ref2;
                    return (_this22 = _possibleConstructorReturn(this, _getPrototypeOf(Value3).call(this)), !props && base instanceof Value3) ? _possibleConstructorReturn(_this22, base) : (_this22.base = base, _this22.properties = props || [], _this22.tag = tag, tag && (_this22[tag] = true), _this22.isDefaultValue = isDefaultValue, (null == (ref1 = _this22.base) ? void 0 : ref1.comments) && _this22.base instanceof ThisLiteral && null != (null == (ref2 = _this22.properties[0]) ? void 0 : ref2.name) && moveComments(_this22.base, _this22.properties[0].name), _this22);
                  }
                  return _inherits(Value3, _Base7), _createClass(Value3, [{ key: "add", value: function add(props) {
                    return this.properties = this.properties.concat(props), this.forceUpdateLocation = true, this;
                  } }, { key: "hasProperties", value: function hasProperties() {
                    return 0 !== this.properties.length;
                  } }, { key: "bareLiteral", value: function bareLiteral(type) {
                    return !this.properties.length && this.base instanceof type;
                  } }, { key: "isArray", value: function isArray() {
                    return this.bareLiteral(Arr);
                  } }, { key: "isRange", value: function isRange() {
                    return this.bareLiteral(Range);
                  } }, { key: "shouldCache", value: function shouldCache() {
                    return this.hasProperties() || this.base.shouldCache();
                  } }, { key: "isAssignable", value: function isAssignable(opts) {
                    return this.hasProperties() || this.base.isAssignable(opts);
                  } }, { key: "isNumber", value: function() {
                    return this.bareLiteral(NumberLiteral);
                  } }, { key: "isString", value: function isString() {
                    return this.bareLiteral(StringLiteral);
                  } }, { key: "isRegex", value: function isRegex() {
                    return this.bareLiteral(RegexLiteral);
                  } }, { key: "isUndefined", value: function isUndefined() {
                    return this.bareLiteral(UndefinedLiteral);
                  } }, { key: "isNull", value: function isNull() {
                    return this.bareLiteral(NullLiteral);
                  } }, { key: "isBoolean", value: function isBoolean() {
                    return this.bareLiteral(BooleanLiteral);
                  } }, { key: "isAtomic", value: function isAtomic() {
                    var j, len1, node, ref1;
                    for (ref1 = this.properties.concat(this.base), j = 0, len1 = ref1.length; j < len1; j++)
                      if (node = ref1[j], node.soak || node instanceof Call || node instanceof Op && "do" === node.operator)
                        return false;
                    return true;
                  } }, { key: "isNotCallable", value: function isNotCallable() {
                    return this.isNumber() || this.isString() || this.isRegex() || this.isArray() || this.isRange() || this.isSplice() || this.isObject() || this.isUndefined() || this.isNull() || this.isBoolean();
                  } }, { key: "isStatement", value: function isStatement(o) {
                    return !this.properties.length && this.base.isStatement(o);
                  } }, { key: "isJSXTag", value: function isJSXTag() {
                    return this.base instanceof JSXTag;
                  } }, { key: "assigns", value: function assigns(name) {
                    return !this.properties.length && this.base.assigns(name);
                  } }, { key: "jumps", value: function jumps(o) {
                    return !this.properties.length && this.base.jumps(o);
                  } }, { key: "isObject", value: function isObject(onlyGenerated) {
                    return !this.properties.length && this.base instanceof Obj && (!onlyGenerated || this.base.generated);
                  } }, { key: "isElision", value: function isElision() {
                    return !!(this.base instanceof Arr) && this.base.hasElision();
                  } }, { key: "isSplice", value: function isSplice() {
                    var _slice1$call7, _slice1$call8, lastProperty, ref1;
                    return ref1 = this.properties, _slice1$call7 = slice1.call(ref1, -1), _slice1$call8 = _slicedToArray(_slice1$call7, 1), lastProperty = _slice1$call8[0], _slice1$call7, lastProperty instanceof Slice;
                  } }, { key: "looksStatic", value: function looksStatic(className) {
                    var name, ref1, thisLiteral;
                    return !!(((thisLiteral = this.base) instanceof ThisLiteral || (name = this.base).value === className) && 1 === this.properties.length && "prototype" !== (null == (ref1 = this.properties[0].name) ? void 0 : ref1.value)) && { staticClassName: null == thisLiteral ? name : thisLiteral };
                  } }, { key: "unwrap", value: function unwrap() {
                    return this.properties.length ? this : this.base;
                  } }, { key: "cacheReference", value: function cacheReference(o) {
                    var _slice1$call9, _slice1$call10, base, bref, name, nref, ref1;
                    return (ref1 = this.properties, _slice1$call9 = slice1.call(ref1, -1), _slice1$call10 = _slicedToArray(_slice1$call9, 1), name = _slice1$call10[0], _slice1$call9, 2 > this.properties.length && !this.base.shouldCache() && (null == name || !name.shouldCache())) ? [this, this] : (base = new Value3(this.base, this.properties.slice(0, -1)), base.shouldCache() && (bref = new IdentifierLiteral(o.scope.freeVariable("base")), base = new Value3(new Parens(new Assign(bref, base)))), !name) ? [base, bref] : (name.shouldCache() && (nref = new IdentifierLiteral(o.scope.freeVariable("name")), name = new Index(new Assign(nref, name.index)), nref = new Index(nref)), [base.add(name), new Value3(bref || base.base, [nref || name])]);
                  } }, { key: "compileNode", value: function compileNode(o) {
                    var fragments, j, len1, prop, props;
                    for (this.base.front = this.front, props = this.properties, fragments = props.length && null != this.base.cached ? this.base.cached : this.base.compileToFragments(o, props.length ? LEVEL_ACCESS : null), props.length && SIMPLENUM.test(fragmentsToText(fragments)) && fragments.push(this.makeCode(".")), j = 0, len1 = props.length; j < len1; j++) {
                      var _fragments2;
                      prop = props[j], (_fragments2 = fragments).push.apply(_fragments2, _toConsumableArray(prop.compileToFragments(o)));
                    }
                    return fragments;
                  } }, { key: "unfoldSoak", value: function unfoldSoak(o) {
                    var _this23 = this;
                    return null == this.unfoldedSoak ? this.unfoldedSoak = function() {
                      var fst, i, ifn, j, len1, prop, ref, ref1, snd;
                      if (ifn = _this23.base.unfoldSoak(o), ifn) {
                        var _ifn$body$properties;
                        return (_ifn$body$properties = ifn.body.properties).push.apply(_ifn$body$properties, _toConsumableArray(_this23.properties)), ifn;
                      }
                      for (ref1 = _this23.properties, i = j = 0, len1 = ref1.length; j < len1; i = ++j)
                        if (prop = ref1[i], !!prop.soak)
                          return prop.soak = false, fst = new Value3(_this23.base, _this23.properties.slice(0, i)), snd = new Value3(_this23.base, _this23.properties.slice(i)), fst.shouldCache() && (ref = new IdentifierLiteral(o.scope.freeVariable("ref")), fst = new Parens(new Assign(ref, fst)), snd.base = ref), new If(new Existence(fst), snd, { soak: true });
                      return false;
                    }() : this.unfoldedSoak;
                  } }, { key: "eachName", value: function eachName(iterator) {
                    var _ref30 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, _ref30$checkAssignabi = _ref30.checkAssignability;
                    return this.hasProperties() ? iterator(this) : !(void 0 === _ref30$checkAssignabi || _ref30$checkAssignabi) || this.base.isAssignable() ? this.base.eachName(iterator) : this.error("tried to assign to unassignable value");
                  } }, { key: "object", value: function() {
                    var initialProperties, object;
                    return this.hasProperties() ? (initialProperties = this.properties.slice(0, this.properties.length - 1), object = new Value3(this.base, initialProperties, this.tag, this.isDefaultValue), object.locationData = 0 === initialProperties.length ? this.base.locationData : mergeLocationData(this.base.locationData, initialProperties[initialProperties.length - 1].locationData), object) : this;
                  } }, { key: "containsSoak", value: function containsSoak() {
                    var j, len1, property, ref1;
                    if (!this.hasProperties())
                      return false;
                    for (ref1 = this.properties, j = 0, len1 = ref1.length; j < len1; j++)
                      if (property = ref1[j], property.soak)
                        return true;
                    return !!(this.base instanceof Call && this.base.soak);
                  } }, { key: "astNode", value: function astNode(o) {
                    return this.hasProperties() ? _get(_getPrototypeOf(Value3.prototype), "astNode", this).call(this, o) : this.base.ast(o);
                  } }, { key: "astType", value: function astType() {
                    return this.isJSXTag() ? "JSXMemberExpression" : this.containsSoak() ? "OptionalMemberExpression" : "MemberExpression";
                  } }, { key: "astProperties", value: function astProperties(o) {
                    var _slice1$call11, _slice1$call12, computed, property, ref1, ref2;
                    return ref1 = this.properties, _slice1$call11 = slice1.call(ref1, -1), _slice1$call12 = _slicedToArray(_slice1$call11, 1), property = _slice1$call12[0], _slice1$call11, this.isJSXTag() && (property.name.jsx = true), computed = property instanceof Index || !((null == (ref2 = property.name) ? void 0 : ref2.unwrap()) instanceof PropertyName), { object: this.object().ast(o, LEVEL_ACCESS), property: property.ast(o, computed ? LEVEL_PAREN : void 0), computed, optional: !!property.soak, shorthand: !!property.shorthand };
                  } }, { key: "astLocationData", value: function astLocationData() {
                    return this.isJSXTag() ? mergeAstLocationData(jisonLocationDataToAstLocationData(this.base.tagNameLocationData), jisonLocationDataToAstLocationData(this.properties[this.properties.length - 1].locationData)) : _get(_getPrototypeOf(Value3.prototype), "astLocationData", this).call(this);
                  } }]), Value3;
                }(Base);
                return Value2.prototype.children = ["base", "properties"], Value2;
              }.call(this), exports2.MetaProperty = MetaProperty = function() {
                var MetaProperty2 = function(_Base8) {
                  "use strict";
                  function MetaProperty3(meta, property1) {
                    var _this24;
                    return _classCallCheck(this, MetaProperty3), _this24 = _possibleConstructorReturn(this, _getPrototypeOf(MetaProperty3).call(this)), _this24.meta = meta, _this24.property = property1, _this24;
                  }
                  return _inherits(MetaProperty3, _Base8), _createClass(MetaProperty3, [{ key: "checkValid", value: function checkValid(o) {
                    if ("new" === this.meta.value) {
                      if (!(this.property instanceof Access && "target" === this.property.name.value))
                        return this.error("the only valid meta property for new is new.target");
                      if (null == o.scope.parent)
                        return this.error("new.target can only occur inside functions");
                    }
                  } }, { key: "compileNode", value: function compileNode(o) {
                    var _fragments3, _fragments4, fragments;
                    return this.checkValid(o), fragments = [], (_fragments3 = fragments).push.apply(_fragments3, _toConsumableArray(this.meta.compileToFragments(o, LEVEL_ACCESS))), (_fragments4 = fragments).push.apply(_fragments4, _toConsumableArray(this.property.compileToFragments(o))), fragments;
                  } }, { key: "astProperties", value: function astProperties(o) {
                    return this.checkValid(o), { meta: this.meta.ast(o, LEVEL_ACCESS), property: this.property.ast(o) };
                  } }]), MetaProperty3;
                }(Base);
                return MetaProperty2.prototype.children = ["meta", "property"], MetaProperty2;
              }.call(this), exports2.HereComment = HereComment = function(_Base9) {
                "use strict";
                function HereComment2(_ref31) {
                  var content1 = _ref31.content, newLine = _ref31.newLine, unshift = _ref31.unshift, locationData1 = _ref31.locationData, _this25;
                  return _classCallCheck(this, HereComment2), _this25 = _possibleConstructorReturn(this, _getPrototypeOf(HereComment2).call(this)), _this25.content = content1, _this25.newLine = newLine, _this25.unshift = unshift, _this25.locationData = locationData1, _this25;
                }
                return _inherits(HereComment2, _Base9), _createClass(HereComment2, [{ key: "compileNode", value: function compileNode() {
                  var fragment, hasLeadingMarks, indent, j, leadingWhitespace, len1, line, multiline, ref1;
                  if (multiline = 0 <= indexOf.call(this.content, "\n"), multiline) {
                    for (indent = null, ref1 = this.content.split("\n"), j = 0, len1 = ref1.length; j < len1; j++)
                      line = ref1[j], leadingWhitespace = /^\s*/.exec(line)[0], (!indent || leadingWhitespace.length < indent.length) && (indent = leadingWhitespace);
                    indent && (this.content = this.content.replace(RegExp("\\n".concat(indent), "g"), "\n"));
                  }
                  return hasLeadingMarks = /\n\s*[#|\*]/.test(this.content), hasLeadingMarks && (this.content = this.content.replace(/^([ \t]*)#(?=\s)/gm, " *")), this.content = "/*".concat(this.content).concat(hasLeadingMarks ? " " : "", "*/"), fragment = this.makeCode(this.content), fragment.newLine = this.newLine, fragment.unshift = this.unshift, fragment.multiline = multiline, fragment.isComment = fragment.isHereComment = true, fragment;
                } }, { key: "astType", value: function astType() {
                  return "CommentBlock";
                } }, { key: "astProperties", value: function astProperties() {
                  return { value: this.content };
                } }]), HereComment2;
              }(Base), exports2.LineComment = LineComment = function(_Base10) {
                "use strict";
                function LineComment2(_ref32) {
                  var content1 = _ref32.content, newLine = _ref32.newLine, unshift = _ref32.unshift, locationData1 = _ref32.locationData, precededByBlankLine = _ref32.precededByBlankLine, _this26;
                  return _classCallCheck(this, LineComment2), _this26 = _possibleConstructorReturn(this, _getPrototypeOf(LineComment2).call(this)), _this26.content = content1, _this26.newLine = newLine, _this26.unshift = unshift, _this26.locationData = locationData1, _this26.precededByBlankLine = precededByBlankLine, _this26;
                }
                return _inherits(LineComment2, _Base10), _createClass(LineComment2, [{ key: "compileNode", value: function compileNode(o) {
                  var fragment;
                  return fragment = this.makeCode(/^\s*$/.test(this.content) ? "" : "".concat(this.precededByBlankLine ? "\n".concat(o.indent) : "", "//").concat(this.content)), fragment.newLine = this.newLine, fragment.unshift = this.unshift, fragment.trail = !this.newLine && !this.unshift, fragment.isComment = fragment.isLineComment = true, fragment;
                } }, { key: "astType", value: function astType() {
                  return "CommentLine";
                } }, { key: "astProperties", value: function astProperties() {
                  return { value: this.content };
                } }]), LineComment2;
              }(Base), exports2.JSXIdentifier = JSXIdentifier = function(_IdentifierLiteral) {
                "use strict";
                function JSXIdentifier2() {
                  return _classCallCheck(this, JSXIdentifier2), _possibleConstructorReturn(this, _getPrototypeOf(JSXIdentifier2).apply(this, arguments));
                }
                return _inherits(JSXIdentifier2, _IdentifierLiteral), _createClass(JSXIdentifier2, [{ key: "astType", value: function astType() {
                  return "JSXIdentifier";
                } }]), JSXIdentifier2;
              }(IdentifierLiteral), exports2.JSXTag = JSXTag = function(_JSXIdentifier) {
                "use strict";
                function JSXTag2(value, _ref33) {
                  var tagNameLocationData = _ref33.tagNameLocationData, closingTagOpeningBracketLocationData = _ref33.closingTagOpeningBracketLocationData, closingTagSlashLocationData = _ref33.closingTagSlashLocationData, closingTagNameLocationData = _ref33.closingTagNameLocationData, closingTagClosingBracketLocationData = _ref33.closingTagClosingBracketLocationData, _this27;
                  return _classCallCheck(this, JSXTag2), _this27 = _possibleConstructorReturn(this, _getPrototypeOf(JSXTag2).call(this, value)), _this27.tagNameLocationData = tagNameLocationData, _this27.closingTagOpeningBracketLocationData = closingTagOpeningBracketLocationData, _this27.closingTagSlashLocationData = closingTagSlashLocationData, _this27.closingTagNameLocationData = closingTagNameLocationData, _this27.closingTagClosingBracketLocationData = closingTagClosingBracketLocationData, _this27;
                }
                return _inherits(JSXTag2, _JSXIdentifier), _createClass(JSXTag2, [{ key: "astProperties", value: function astProperties() {
                  return { name: this.value };
                } }]), JSXTag2;
              }(JSXIdentifier), exports2.JSXExpressionContainer = JSXExpressionContainer = function() {
                var JSXExpressionContainer2 = function(_Base11) {
                  "use strict";
                  function JSXExpressionContainer3(expression1) {
                    var _ref34 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, locationData = _ref34.locationData, _this28;
                    return _classCallCheck(this, JSXExpressionContainer3), _this28 = _possibleConstructorReturn(this, _getPrototypeOf(JSXExpressionContainer3).call(this)), _this28.expression = expression1, _this28.expression.jsxAttribute = true, _this28.locationData = null == locationData ? _this28.expression.locationData : locationData, _this28;
                  }
                  return _inherits(JSXExpressionContainer3, _Base11), _createClass(JSXExpressionContainer3, [{ key: "compileNode", value: function compileNode(o) {
                    return this.expression.compileNode(o);
                  } }, { key: "astProperties", value: function astProperties(o) {
                    return { expression: astAsBlockIfNeeded(this.expression, o) };
                  } }]), JSXExpressionContainer3;
                }(Base);
                return JSXExpressionContainer2.prototype.children = ["expression"], JSXExpressionContainer2;
              }.call(this), exports2.JSXEmptyExpression = JSXEmptyExpression = function(_Base12) {
                "use strict";
                function JSXEmptyExpression2() {
                  return _classCallCheck(this, JSXEmptyExpression2), _possibleConstructorReturn(this, _getPrototypeOf(JSXEmptyExpression2).apply(this, arguments));
                }
                return _inherits(JSXEmptyExpression2, _Base12), JSXEmptyExpression2;
              }(Base), exports2.JSXText = JSXText = function(_Base13) {
                "use strict";
                function JSXText2(stringLiteral) {
                  var _this29;
                  return _classCallCheck(this, JSXText2), _this29 = _possibleConstructorReturn(this, _getPrototypeOf(JSXText2).call(this)), _this29.value = stringLiteral.unquotedValueForJSX, _this29.locationData = stringLiteral.locationData, _this29;
                }
                return _inherits(JSXText2, _Base13), _createClass(JSXText2, [{ key: "astProperties", value: function astProperties() {
                  return { value: this.value, extra: { raw: this.value } };
                } }]), JSXText2;
              }(Base), exports2.JSXAttribute = JSXAttribute = function() {
                var JSXAttribute2 = function(_Base14) {
                  "use strict";
                  function JSXAttribute3(_ref35) {
                    var name1 = _ref35.name, value = _ref35.value, _this30;
                    _classCallCheck(this, JSXAttribute3);
                    var ref1;
                    return _this30 = _possibleConstructorReturn(this, _getPrototypeOf(JSXAttribute3).call(this)), _this30.name = name1, _this30.value = null == value ? null : (value = value.base, value instanceof StringLiteral ? value : new JSXExpressionContainer(value)), null != (ref1 = _this30.value) && (ref1.comments = value.comments), _this30;
                  }
                  return _inherits(JSXAttribute3, _Base14), _createClass(JSXAttribute3, [{ key: "compileNode", value: function compileNode(o) {
                    var compiledName, val;
                    return (compiledName = this.name.compileToFragments(o, LEVEL_LIST), null == this.value) ? compiledName : (val = this.value.compileToFragments(o, LEVEL_LIST), compiledName.concat(this.makeCode("="), val));
                  } }, { key: "astProperties", value: function astProperties(o) {
                    var name, ref1, ref2;
                    return name = this.name, 0 <= indexOf.call(name.value, ":") && (name = new JSXNamespacedName(name)), { name: name.ast(o), value: null == (ref1 = null == (ref2 = this.value) ? void 0 : ref2.ast(o)) ? null : ref1 };
                  } }]), JSXAttribute3;
                }(Base);
                return JSXAttribute2.prototype.children = ["name", "value"], JSXAttribute2;
              }.call(this), exports2.JSXAttributes = JSXAttributes = function() {
                var JSXAttributes2 = function(_Base15) {
                  "use strict";
                  function JSXAttributes3(arr) {
                    var _this31;
                    _classCallCheck(this, JSXAttributes3);
                    var attribute, base, j, k, len1, len2, object, property, ref1, ref2, value, variable;
                    for (_this31 = _possibleConstructorReturn(this, _getPrototypeOf(JSXAttributes3).call(this)), _this31.attributes = [], ref1 = arr.objects, j = 0, len1 = ref1.length; j < len1; j++) {
                      object = ref1[j], _this31.checkValidAttribute(object);
                      var _object = object;
                      if (base = _object.base, base instanceof IdentifierLiteral)
                        attribute = new JSXAttribute({ name: new JSXIdentifier(base.value).withLocationDataAndCommentsFrom(base) }), attribute.locationData = base.locationData, _this31.attributes.push(attribute);
                      else if (!base.generated)
                        attribute = base.properties[0], attribute.jsx = true, attribute.locationData = base.locationData, _this31.attributes.push(attribute);
                      else
                        for (ref2 = base.properties, k = 0, len2 = ref2.length; k < len2; k++) {
                          property = ref2[k];
                          var _property = property;
                          variable = _property.variable, value = _property.value, attribute = new JSXAttribute({ name: new JSXIdentifier(variable.base.value).withLocationDataAndCommentsFrom(variable.base), value }), attribute.locationData = property.locationData, _this31.attributes.push(attribute);
                        }
                    }
                    return _this31.locationData = arr.locationData, _this31;
                  }
                  return _inherits(JSXAttributes3, _Base15), _createClass(JSXAttributes3, [{ key: "checkValidAttribute", value: function checkValidAttribute(object) {
                    var attribute, properties;
                    if (attribute = object.base, properties = (null == attribute ? void 0 : attribute.properties) || [], !(attribute instanceof Obj || attribute instanceof IdentifierLiteral) || attribute instanceof Obj && !attribute.generated && (1 < properties.length || !(properties[0] instanceof Splat)))
                      return object.error('Unexpected token. Allowed JSX attributes are: id="val", src={source}, {props...} or attribute.');
                  } }, { key: "compileNode", value: function compileNode(o) {
                    var attribute, fragments, j, len1, ref1;
                    for (fragments = [], ref1 = this.attributes, j = 0, len1 = ref1.length; j < len1; j++) {
                      var _fragments5;
                      attribute = ref1[j], fragments.push(this.makeCode(" ")), (_fragments5 = fragments).push.apply(_fragments5, _toConsumableArray(attribute.compileToFragments(o, LEVEL_TOP)));
                    }
                    return fragments;
                  } }, { key: "astNode", value: function astNode(o) {
                    var attribute, j, len1, ref1, results1;
                    for (ref1 = this.attributes, results1 = [], j = 0, len1 = ref1.length; j < len1; j++)
                      attribute = ref1[j], results1.push(attribute.ast(o));
                    return results1;
                  } }]), JSXAttributes3;
                }(Base);
                return JSXAttributes2.prototype.children = ["attributes"], JSXAttributes2;
              }.call(this), exports2.JSXNamespacedName = JSXNamespacedName = function() {
                var JSXNamespacedName2 = function(_Base16) {
                  "use strict";
                  function JSXNamespacedName3(tag) {
                    var _this32;
                    _classCallCheck(this, JSXNamespacedName3);
                    var name, namespace;
                    _this32 = _possibleConstructorReturn(this, _getPrototypeOf(JSXNamespacedName3).call(this));
                    var _tag$value$split = tag.value.split(":"), _tag$value$split2 = _slicedToArray(_tag$value$split, 2);
                    return namespace = _tag$value$split2[0], name = _tag$value$split2[1], _this32.namespace = new JSXIdentifier(namespace).withLocationDataFrom({ locationData: extractSameLineLocationDataFirst(namespace.length)(tag.locationData) }), _this32.name = new JSXIdentifier(name).withLocationDataFrom({ locationData: extractSameLineLocationDataLast(name.length)(tag.locationData) }), _this32.locationData = tag.locationData, _this32;
                  }
                  return _inherits(JSXNamespacedName3, _Base16), _createClass(JSXNamespacedName3, [{ key: "astProperties", value: function astProperties(o) {
                    return { namespace: this.namespace.ast(o), name: this.name.ast(o) };
                  } }]), JSXNamespacedName3;
                }(Base);
                return JSXNamespacedName2.prototype.children = ["namespace", "name"], JSXNamespacedName2;
              }.call(this), exports2.JSXElement = JSXElement = function() {
                var JSXElement2 = function(_Base17) {
                  "use strict";
                  function JSXElement3(_ref36) {
                    var tagName1 = _ref36.tagName, attributes = _ref36.attributes, content1 = _ref36.content, _this33;
                    return _classCallCheck(this, JSXElement3), _this33 = _possibleConstructorReturn(this, _getPrototypeOf(JSXElement3).call(this)), _this33.tagName = tagName1, _this33.attributes = attributes, _this33.content = content1, _this33;
                  }
                  return _inherits(JSXElement3, _Base17), _createClass(JSXElement3, [{ key: "compileNode", value: function compileNode(o) {
                    var _fragments6, _fragments7, fragments, ref1, tag;
                    if (null != (ref1 = this.content) && (ref1.base.jsx = true), fragments = [this.makeCode("<")], (_fragments6 = fragments).push.apply(_fragments6, _toConsumableArray(tag = this.tagName.compileToFragments(o, LEVEL_ACCESS))), (_fragments7 = fragments).push.apply(_fragments7, _toConsumableArray(this.attributes.compileToFragments(o))), this.content) {
                      var _fragments8, _fragments9;
                      fragments.push(this.makeCode(">")), (_fragments8 = fragments).push.apply(_fragments8, _toConsumableArray(this.content.compileNode(o, LEVEL_LIST))), (_fragments9 = fragments).push.apply(_fragments9, [this.makeCode("</")].concat(_toConsumableArray(tag), [this.makeCode(">")]));
                    } else
                      fragments.push(this.makeCode(" />"));
                    return fragments;
                  } }, { key: "isFragment", value: function isFragment() {
                    return !this.tagName.base.value.length;
                  } }, { key: "astNode", value: function astNode(o) {
                    var tagName;
                    return this.openingElementLocationData = jisonLocationDataToAstLocationData(this.attributes.locationData), tagName = this.tagName.base, tagName.locationData = tagName.tagNameLocationData, null != this.content && (this.closingElementLocationData = mergeAstLocationData(jisonLocationDataToAstLocationData(tagName.closingTagOpeningBracketLocationData), jisonLocationDataToAstLocationData(tagName.closingTagClosingBracketLocationData))), _get(_getPrototypeOf(JSXElement3.prototype), "astNode", this).call(this, o);
                  } }, { key: "astType", value: function astType() {
                    return this.isFragment() ? "JSXFragment" : "JSXElement";
                  } }, { key: "elementAstProperties", value: function elementAstProperties(o) {
                    var _this34 = this, closingElement, columnDiff, currentExpr, openingElement, rangeDiff, ref1, shiftAstLocationData, tagNameAst;
                    if (tagNameAst = function() {
                      var tag;
                      return tag = _this34.tagName.unwrap(), (null == tag ? void 0 : tag.value) && 0 <= indexOf.call(tag.value, ":") && (tag = new JSXNamespacedName(tag)), tag.ast(o);
                    }, openingElement = Object.assign({ type: "JSXOpeningElement", name: tagNameAst(), selfClosing: null == this.closingElementLocationData, attributes: this.attributes.ast(o) }, this.openingElementLocationData), closingElement = null, null != this.closingElementLocationData && (closingElement = Object.assign({ type: "JSXClosingElement", name: Object.assign(tagNameAst(), jisonLocationDataToAstLocationData(this.tagName.base.closingTagNameLocationData)) }, this.closingElementLocationData), "JSXMemberExpression" === (ref1 = closingElement.name.type) || "JSXNamespacedName" === ref1))
                      if (rangeDiff = closingElement.range[0] - openingElement.range[0] + "/".length, columnDiff = closingElement.loc.start.column - openingElement.loc.start.column + "/".length, shiftAstLocationData = function(node) {
                        return node.range = [node.range[0] + rangeDiff, node.range[1] + rangeDiff], node.start += rangeDiff, node.end += rangeDiff, node.loc.start = { line: _this34.closingElementLocationData.loc.start.line, column: node.loc.start.column + columnDiff }, node.loc.end = { line: _this34.closingElementLocationData.loc.start.line, column: node.loc.end.column + columnDiff };
                      }, "JSXMemberExpression" === closingElement.name.type) {
                        for (currentExpr = closingElement.name; "JSXMemberExpression" === currentExpr.type; )
                          currentExpr !== closingElement.name && shiftAstLocationData(currentExpr), shiftAstLocationData(currentExpr.property), currentExpr = currentExpr.object;
                        shiftAstLocationData(currentExpr);
                      } else
                        shiftAstLocationData(closingElement.name.namespace), shiftAstLocationData(closingElement.name.name);
                    return { openingElement, closingElement };
                  } }, { key: "fragmentAstProperties", value: function fragmentAstProperties() {
                    var closingFragment, openingFragment;
                    return openingFragment = Object.assign({ type: "JSXOpeningFragment" }, this.openingElementLocationData), closingFragment = Object.assign({ type: "JSXClosingFragment" }, this.closingElementLocationData), { openingFragment, closingFragment };
                  } }, { key: "contentAst", value: function contentAst(o) {
                    var base1, child, children, content, element, emptyExpression, expression, j, len1, results1, unwrapped;
                    if (!this.content || ("function" == typeof (base1 = this.content.base).isEmpty ? base1.isEmpty() : void 0))
                      return [];
                    for (content = this.content.unwrapAll(), children = function() {
                      var j2, len12, ref1, results12;
                      if (content instanceof StringLiteral)
                        return [new JSXText(content)];
                      for (ref1 = this.content.unwrapAll().extractElements(o, { includeInterpolationWrappers: true, isJsx: true }), results12 = [], j2 = 0, len12 = ref1.length; j2 < len12; j2++)
                        if (element = ref1[j2], element instanceof StringLiteral)
                          results12.push(new JSXText(element));
                        else {
                          var _element = element;
                          expression = _element.expression, null == expression ? (emptyExpression = new JSXEmptyExpression(), emptyExpression.locationData = emptyExpressionLocationData({ interpolationNode: element, openingBrace: "{", closingBrace: "}" }), results12.push(new JSXExpressionContainer(emptyExpression, { locationData: element.locationData }))) : (unwrapped = expression.unwrapAll(), unwrapped instanceof JSXElement3 && unwrapped.locationData.range[0] === element.locationData.range[0] ? results12.push(unwrapped) : results12.push(new JSXExpressionContainer(unwrapped, { locationData: element.locationData })));
                        }
                      return results12;
                    }.call(this), results1 = [], j = 0, len1 = children.length; j < len1; j++)
                      child = children[j], child instanceof JSXText && 0 === child.value.length || results1.push(child.ast(o));
                    return results1;
                  } }, { key: "astProperties", value: function astProperties(o) {
                    return Object.assign(this.isFragment() ? this.fragmentAstProperties(o) : this.elementAstProperties(o), { children: this.contentAst(o) });
                  } }, { key: "astLocationData", value: function astLocationData() {
                    return null == this.closingElementLocationData ? this.openingElementLocationData : mergeAstLocationData(this.openingElementLocationData, this.closingElementLocationData);
                  } }]), JSXElement3;
                }(Base);
                return JSXElement2.prototype.children = ["tagName", "attributes", "content"], JSXElement2;
              }.call(this), exports2.Call = Call = function() {
                var Call2 = function(_Base18) {
                  "use strict";
                  function Call3(variable1) {
                    var args1 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [], soak1 = 2 < arguments.length ? arguments[2] : void 0, token1 = 3 < arguments.length ? arguments[3] : void 0, _this35;
                    _classCallCheck(this, Call3);
                    var ref1;
                    return (_this35 = _possibleConstructorReturn(this, _getPrototypeOf(Call3).call(this)), _this35.variable = variable1, _this35.args = args1, _this35.soak = soak1, _this35.token = token1, _this35.implicit = _this35.args.implicit, _this35.isNew = false, _this35.variable instanceof Value && _this35.variable.isNotCallable() && _this35.variable.error("literal is not a function"), _this35.variable.base instanceof JSXTag) ? _possibleConstructorReturn(_this35, new JSXElement({ tagName: _this35.variable, attributes: new JSXAttributes(_this35.args[0].base), content: _this35.args[1] })) : ("RegExp" === (null == (ref1 = _this35.variable.base) ? void 0 : ref1.value) && 0 !== _this35.args.length && moveComments(_this35.variable, _this35.args[0]), _this35);
                  }
                  return _inherits(Call3, _Base18), _createClass(Call3, [{ key: "updateLocationDataIfMissing", value: function updateLocationDataIfMissing(locationData) {
                    var base, ref1;
                    return this.locationData && this.needsUpdatedStartLocation && (this.locationData = Object.assign({}, this.locationData, { first_line: locationData.first_line, first_column: locationData.first_column, range: [locationData.range[0], this.locationData.range[1]] }), base = (null == (ref1 = this.variable) ? void 0 : ref1.base) || this.variable, base.needsUpdatedStartLocation && (this.variable.locationData = Object.assign({}, this.variable.locationData, { first_line: locationData.first_line, first_column: locationData.first_column, range: [locationData.range[0], this.variable.locationData.range[1]] }), base.updateLocationDataIfMissing(locationData)), delete this.needsUpdatedStartLocation), _get(_getPrototypeOf(Call3.prototype), "updateLocationDataIfMissing", this).call(this, locationData);
                  } }, { key: "newInstance", value: function newInstance() {
                    var base, ref1;
                    return base = (null == (ref1 = this.variable) ? void 0 : ref1.base) || this.variable, base instanceof Call3 && !base.isNew ? base.newInstance() : this.isNew = true, this.needsUpdatedStartLocation = true, this;
                  } }, { key: "unfoldSoak", value: function unfoldSoak(o) {
                    var call, ifn, j, left, len1, list, ref1, rite;
                    if (this.soak) {
                      if (this.variable instanceof Super)
                        left = new Literal(this.variable.compile(o)), rite = new Value(left), null == this.variable.accessor && this.variable.error("Unsupported reference to 'super'");
                      else {
                        if (ifn = _unfoldSoak(o, this, "variable"))
                          return ifn;
                        var _cacheReference = new Value(this.variable).cacheReference(o), _cacheReference2 = _slicedToArray(_cacheReference, 2);
                        left = _cacheReference2[0], rite = _cacheReference2[1];
                      }
                      return rite = new Call3(rite, this.args), rite.isNew = this.isNew, left = new Literal("typeof ".concat(left.compile(o), ' === "function"')), new If(left, new Value(rite), { soak: true });
                    }
                    for (call = this, list = []; ; ) {
                      if (call.variable instanceof Call3) {
                        list.push(call), call = call.variable;
                        continue;
                      }
                      if (!(call.variable instanceof Value))
                        break;
                      if (list.push(call), !((call = call.variable.base) instanceof Call3))
                        break;
                    }
                    for (ref1 = list.reverse(), j = 0, len1 = ref1.length; j < len1; j++)
                      call = ref1[j], ifn && (call.variable instanceof Call3 ? call.variable = ifn : call.variable.base = ifn), ifn = _unfoldSoak(o, call, "variable");
                    return ifn;
                  } }, { key: "compileNode", value: function compileNode(o) {
                    var _fragments10, _fragments11, arg, argCode, argIndex, cache, compiledArgs, fragments, j, len1, ref1, ref2, ref3, ref4, varAccess;
                    if (this.checkForNewSuper(), null != (ref1 = this.variable) && (ref1.front = this.front), compiledArgs = [], varAccess = (null == (ref2 = this.variable) || null == (ref3 = ref2.properties) ? void 0 : ref3[0]) instanceof Access, argCode = function() {
                      var j2, len12, ref42, results1;
                      for (ref42 = this.args || [], results1 = [], j2 = 0, len12 = ref42.length; j2 < len12; j2++)
                        arg = ref42[j2], arg instanceof Code && results1.push(arg);
                      return results1;
                    }.call(this), 0 < argCode.length && varAccess && !this.variable.base.cached) {
                      var _this$variable$base$c = this.variable.base.cache(o, LEVEL_ACCESS, function() {
                        return false;
                      }), _this$variable$base$c2 = _slicedToArray(_this$variable$base$c, 1);
                      cache = _this$variable$base$c2[0], this.variable.base.cached = cache;
                    }
                    for (ref4 = this.args, argIndex = j = 0, len1 = ref4.length; j < len1; argIndex = ++j) {
                      var _compiledArgs;
                      arg = ref4[argIndex], argIndex && compiledArgs.push(this.makeCode(", ")), (_compiledArgs = compiledArgs).push.apply(_compiledArgs, _toConsumableArray(arg.compileToFragments(o, LEVEL_LIST)));
                    }
                    return fragments = [], this.isNew && fragments.push(this.makeCode("new ")), (_fragments10 = fragments).push.apply(_fragments10, _toConsumableArray(this.variable.compileToFragments(o, LEVEL_ACCESS))), (_fragments11 = fragments).push.apply(_fragments11, [this.makeCode("(")].concat(_toConsumableArray(compiledArgs), [this.makeCode(")")])), fragments;
                  } }, { key: "checkForNewSuper", value: function checkForNewSuper() {
                    if (this.isNew && this.variable instanceof Super)
                      return this.variable.error("Unsupported reference to 'super'");
                  } }, { key: "containsSoak", value: function containsSoak() {
                    var ref1;
                    return !!this.soak || null != (ref1 = this.variable) && "function" == typeof ref1.containsSoak && ref1.containsSoak();
                  } }, { key: "astNode", value: function astNode(o) {
                    var ref1;
                    return this.soak && this.variable instanceof Super && (null == (ref1 = o.scope.namedMethod()) ? void 0 : ref1.ctor) && this.variable.error("Unsupported reference to 'super'"), this.checkForNewSuper(), _get(_getPrototypeOf(Call3.prototype), "astNode", this).call(this, o);
                  } }, { key: "astType", value: function astType() {
                    return this.isNew ? "NewExpression" : this.containsSoak() ? "OptionalCallExpression" : "CallExpression";
                  } }, { key: "astProperties", value: function astProperties(o) {
                    var arg;
                    return { callee: this.variable.ast(o, LEVEL_ACCESS), arguments: function() {
                      var j, len1, ref1, results1;
                      for (ref1 = this.args, results1 = [], j = 0, len1 = ref1.length; j < len1; j++)
                        arg = ref1[j], results1.push(arg.ast(o, LEVEL_LIST));
                      return results1;
                    }.call(this), optional: !!this.soak, implicit: !!this.implicit };
                  } }]), Call3;
                }(Base);
                return Call2.prototype.children = ["variable", "args"], Call2;
              }.call(this), exports2.SuperCall = SuperCall = function() {
                var SuperCall2 = function(_Call) {
                  "use strict";
                  function SuperCall3() {
                    return _classCallCheck(this, SuperCall3), _possibleConstructorReturn(this, _getPrototypeOf(SuperCall3).apply(this, arguments));
                  }
                  return _inherits(SuperCall3, _Call), _createClass(SuperCall3, [{ key: "isStatement", value: function isStatement(o) {
                    var ref1;
                    return (null == (ref1 = this.expressions) ? void 0 : ref1.length) && o.level === LEVEL_TOP;
                  } }, { key: "compileNode", value: function compileNode(o) {
                    var ref, ref1, replacement, superCall;
                    if (null == (ref1 = this.expressions) || !ref1.length)
                      return _get(_getPrototypeOf(SuperCall3.prototype), "compileNode", this).call(this, o);
                    if (superCall = new Literal(fragmentsToText(_get(_getPrototypeOf(SuperCall3.prototype), "compileNode", this).call(this, o))), replacement = new Block(this.expressions.slice()), o.level > LEVEL_TOP) {
                      var _superCall$cache = superCall.cache(o, null, YES), _superCall$cache2 = _slicedToArray(_superCall$cache, 2);
                      superCall = _superCall$cache2[0], ref = _superCall$cache2[1], replacement.push(ref);
                    }
                    return replacement.unshift(superCall), replacement.compileToFragments(o, o.level === LEVEL_TOP ? o.level : LEVEL_LIST);
                  } }]), SuperCall3;
                }(Call);
                return SuperCall2.prototype.children = Call.prototype.children.concat(["expressions"]), SuperCall2;
              }.call(this), exports2.Super = Super = function() {
                var Super2 = function(_Base19) {
                  "use strict";
                  function Super3(accessor, superLiteral) {
                    var _this36;
                    return _classCallCheck(this, Super3), _this36 = _possibleConstructorReturn(this, _getPrototypeOf(Super3).call(this)), _this36.accessor = accessor, _this36.superLiteral = superLiteral, _this36;
                  }
                  return _inherits(Super3, _Base19), _createClass(Super3, [{ key: "compileNode", value: function compileNode(o) {
                    var fragments, method, name, nref, ref1, ref2, salvagedComments, variable;
                    if (this.checkInInstanceMethod(o), method = o.scope.namedMethod(), null == method.ctor && null == this.accessor) {
                      var _method = method;
                      name = _method.name, variable = _method.variable, (name.shouldCache() || name instanceof Index && name.index.isAssignable()) && (nref = new IdentifierLiteral(o.scope.parent.freeVariable("name")), name.index = new Assign(nref, name.index)), this.accessor = null == nref ? name : new Index(nref);
                    }
                    return (null == (ref1 = this.accessor) || null == (ref2 = ref1.name) ? void 0 : ref2.comments) && (salvagedComments = this.accessor.name.comments, delete this.accessor.name.comments), fragments = new Value(new Literal("super"), this.accessor ? [this.accessor] : []).compileToFragments(o), salvagedComments && attachCommentsToNode(salvagedComments, this.accessor.name), fragments;
                  } }, { key: "checkInInstanceMethod", value: function checkInInstanceMethod(o) {
                    var method;
                    if (method = o.scope.namedMethod(), null == method || !method.isMethod)
                      return this.error("cannot use super outside of an instance method");
                  } }, { key: "astNode", value: function astNode(o) {
                    var ref1;
                    return this.checkInInstanceMethod(o), null == this.accessor ? _get(_getPrototypeOf(Super3.prototype), "astNode", this).call(this, o) : new Value(new Super3().withLocationDataFrom(null == (ref1 = this.superLiteral) ? this : ref1), [this.accessor]).withLocationDataFrom(this).ast(o);
                  } }]), Super3;
                }(Base);
                return Super2.prototype.children = ["accessor"], Super2;
              }.call(this), exports2.RegexWithInterpolations = RegexWithInterpolations = function() {
                var RegexWithInterpolations2 = function(_Base20) {
                  "use strict";
                  function RegexWithInterpolations3(call1) {
                    var _ref37 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, _ref37$heregexComment = _ref37.heregexCommentTokens, heregexCommentTokens = void 0 === _ref37$heregexComment ? [] : _ref37$heregexComment, _this37;
                    return _classCallCheck(this, RegexWithInterpolations3), _this37 = _possibleConstructorReturn(this, _getPrototypeOf(RegexWithInterpolations3).call(this)), _this37.call = call1, _this37.heregexCommentTokens = heregexCommentTokens, _this37;
                  }
                  return _inherits(RegexWithInterpolations3, _Base20), _createClass(RegexWithInterpolations3, [{ key: "compileNode", value: function compileNode(o) {
                    return this.call.compileNode(o);
                  } }, { key: "astType", value: function astType() {
                    return "InterpolatedRegExpLiteral";
                  } }, { key: "astProperties", value: function astProperties(o) {
                    var heregexCommentToken, ref1, ref2;
                    return { interpolatedPattern: this.call.args[0].ast(o), flags: null == (ref1 = null == (ref2 = this.call.args[1]) ? void 0 : ref2.unwrap().originalValue) ? "" : ref1, comments: function() {
                      var j, len1, ref3, results1;
                      for (ref3 = this.heregexCommentTokens, results1 = [], j = 0, len1 = ref3.length; j < len1; j++)
                        heregexCommentToken = ref3[j], heregexCommentToken.here ? results1.push(new HereComment(heregexCommentToken).ast(o)) : results1.push(new LineComment(heregexCommentToken).ast(o));
                      return results1;
                    }.call(this) };
                  } }]), RegexWithInterpolations3;
                }(Base);
                return RegexWithInterpolations2.prototype.children = ["call"], RegexWithInterpolations2;
              }.call(this), exports2.TaggedTemplateCall = TaggedTemplateCall = function(_Call2) {
                "use strict";
                function TaggedTemplateCall2(variable, arg, soak) {
                  return _classCallCheck(this, TaggedTemplateCall2), arg instanceof StringLiteral && (arg = StringWithInterpolations.fromStringLiteral(arg)), _possibleConstructorReturn(this, _getPrototypeOf(TaggedTemplateCall2).call(this, variable, [arg], soak));
                }
                return _inherits(TaggedTemplateCall2, _Call2), _createClass(TaggedTemplateCall2, [{ key: "compileNode", value: function compileNode(o) {
                  return this.variable.compileToFragments(o, LEVEL_ACCESS).concat(this.args[0].compileToFragments(o, LEVEL_LIST));
                } }, { key: "astType", value: function astType() {
                  return "TaggedTemplateExpression";
                } }, { key: "astProperties", value: function astProperties(o) {
                  return { tag: this.variable.ast(o, LEVEL_ACCESS), quasi: this.args[0].ast(o, LEVEL_LIST) };
                } }]), TaggedTemplateCall2;
              }(Call), exports2.Extends = Extends = function() {
                var Extends2 = function(_Base21) {
                  "use strict";
                  function Extends3(child1, parent1) {
                    var _this38;
                    return _classCallCheck(this, Extends3), _this38 = _possibleConstructorReturn(this, _getPrototypeOf(Extends3).call(this)), _this38.child = child1, _this38.parent = parent1, _this38;
                  }
                  return _inherits(Extends3, _Base21), _createClass(Extends3, [{ key: "compileToFragments", value: function compileToFragments(o) {
                    return new Call(new Value(new Literal(utility("extend", o))), [this.child, this.parent]).compileToFragments(o);
                  } }]), Extends3;
                }(Base);
                return Extends2.prototype.children = ["child", "parent"], Extends2;
              }.call(this), exports2.Access = Access = function() {
                var Access2 = function(_Base22) {
                  "use strict";
                  function Access3(name1) {
                    var _ref38 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, soak1 = _ref38.soak, shorthand = _ref38.shorthand, _this39;
                    return _classCallCheck(this, Access3), _this39 = _possibleConstructorReturn(this, _getPrototypeOf(Access3).call(this)), _this39.name = name1, _this39.soak = soak1, _this39.shorthand = shorthand, _this39;
                  }
                  return _inherits(Access3, _Base22), _createClass(Access3, [{ key: "compileToFragments", value: function compileToFragments(o) {
                    var name, node;
                    return name = this.name.compileToFragments(o), node = this.name.unwrap(), node instanceof PropertyName ? [this.makeCode(".")].concat(_toConsumableArray(name)) : [this.makeCode("[")].concat(_toConsumableArray(name), [this.makeCode("]")]);
                  } }, { key: "astNode", value: function astNode(o) {
                    return this.name.ast(o);
                  } }]), Access3;
                }(Base);
                return Access2.prototype.children = ["name"], Access2.prototype.shouldCache = NO, Access2;
              }.call(this), exports2.Index = Index = function() {
                var Index2 = function(_Base23) {
                  "use strict";
                  function Index3(index1) {
                    var _this40;
                    return _classCallCheck(this, Index3), _this40 = _possibleConstructorReturn(this, _getPrototypeOf(Index3).call(this)), _this40.index = index1, _this40;
                  }
                  return _inherits(Index3, _Base23), _createClass(Index3, [{ key: "compileToFragments", value: function compileToFragments(o) {
                    return [].concat(this.makeCode("["), this.index.compileToFragments(o, LEVEL_PAREN), this.makeCode("]"));
                  } }, { key: "shouldCache", value: function shouldCache() {
                    return this.index.shouldCache();
                  } }, { key: "astNode", value: function astNode(o) {
                    return this.index.ast(o);
                  } }]), Index3;
                }(Base);
                return Index2.prototype.children = ["index"], Index2;
              }.call(this), exports2.Range = Range = function() {
                var Range2 = function(_Base24) {
                  "use strict";
                  function Range3(from1, to1, tag) {
                    var _this41;
                    return _classCallCheck(this, Range3), _this41 = _possibleConstructorReturn(this, _getPrototypeOf(Range3).call(this)), _this41.from = from1, _this41.to = to1, _this41.exclusive = "exclusive" === tag, _this41.equals = _this41.exclusive ? "" : "=", _this41;
                  }
                  return _inherits(Range3, _Base24), _createClass(Range3, [{ key: "compileVariables", value: function compileVariables(o) {
                    var shouldCache, step;
                    o = merge(o, { top: true }), shouldCache = del(o, "shouldCache");
                    var _this$cacheToCodeFrag = this.cacheToCodeFragments(this.from.cache(o, LEVEL_LIST, shouldCache)), _this$cacheToCodeFrag2 = _slicedToArray(_this$cacheToCodeFrag, 2);
                    this.fromC = _this$cacheToCodeFrag2[0], this.fromVar = _this$cacheToCodeFrag2[1];
                    var _this$cacheToCodeFrag3 = this.cacheToCodeFragments(this.to.cache(o, LEVEL_LIST, shouldCache)), _this$cacheToCodeFrag4 = _slicedToArray(_this$cacheToCodeFrag3, 2);
                    if (this.toC = _this$cacheToCodeFrag4[0], this.toVar = _this$cacheToCodeFrag4[1], step = del(o, "step")) {
                      var _this$cacheToCodeFrag5 = this.cacheToCodeFragments(step.cache(o, LEVEL_LIST, shouldCache)), _this$cacheToCodeFrag6 = _slicedToArray(_this$cacheToCodeFrag5, 2);
                      this.step = _this$cacheToCodeFrag6[0], this.stepVar = _this$cacheToCodeFrag6[1];
                    }
                    return this.fromNum = this.from.isNumber() ? parseNumber(this.fromVar) : null, this.toNum = this.to.isNumber() ? parseNumber(this.toVar) : null, this.stepNum = (null == step ? void 0 : step.isNumber()) ? parseNumber(this.stepVar) : null;
                  } }, { key: "compileNode", value: function compileNode(o) {
                    var cond, condPart, from, gt, idx, idxName, known, lowerBound, lt, namedIndex, ref1, ref2, stepCond, stepNotZero, stepPart, to, upperBound, varPart;
                    if (this.fromVar || this.compileVariables(o), !o.index)
                      return this.compileArray(o);
                    known = null != this.fromNum && null != this.toNum, idx = del(o, "index"), idxName = del(o, "name"), namedIndex = idxName && idxName !== idx, varPart = known && !namedIndex ? "var ".concat(idx, " = ").concat(this.fromC) : "".concat(idx, " = ").concat(this.fromC), this.toC !== this.toVar && (varPart += ", ".concat(this.toC)), this.step !== this.stepVar && (varPart += ", ".concat(this.step)), lt = "".concat(idx, " <").concat(this.equals), gt = "".concat(idx, " >").concat(this.equals);
                    var _ref39 = [this.fromNum, this.toNum];
                    return from = _ref39[0], to = _ref39[1], stepNotZero = "".concat(null == (ref1 = this.stepNum) ? this.stepVar : ref1, " !== 0"), stepCond = "".concat(null == (ref2 = this.stepNum) ? this.stepVar : ref2, " > 0"), lowerBound = "".concat(lt, " ").concat(known ? to : this.toVar), upperBound = "".concat(gt, " ").concat(known ? to : this.toVar), condPart = null == this.step ? known ? "".concat(from <= to ? lt : gt, " ").concat(to) : "(".concat(this.fromVar, " <= ").concat(this.toVar, " ? ").concat(lowerBound, " : ").concat(upperBound, ")") : null != this.stepNum && 0 !== this.stepNum ? 0 < this.stepNum ? "".concat(lowerBound) : "".concat(upperBound) : "".concat(stepNotZero, " && (").concat(stepCond, " ? ").concat(lowerBound, " : ").concat(upperBound, ")"), cond = this.stepVar ? "".concat(this.stepVar, " > 0") : "".concat(this.fromVar, " <= ").concat(this.toVar), stepPart = this.stepVar ? "".concat(idx, " += ").concat(this.stepVar) : known ? namedIndex ? from <= to ? "++".concat(idx) : "--".concat(idx) : from <= to ? "".concat(idx, "++") : "".concat(idx, "--") : namedIndex ? "".concat(cond, " ? ++").concat(idx, " : --").concat(idx) : "".concat(cond, " ? ").concat(idx, "++ : ").concat(idx, "--"), namedIndex && (varPart = "".concat(idxName, " = ").concat(varPart)), namedIndex && (stepPart = "".concat(idxName, " = ").concat(stepPart)), [this.makeCode("".concat(varPart, "; ").concat(condPart, "; ").concat(stepPart))];
                  } }, { key: "compileArray", value: function compileArray(o) {
                    var args, body, cond, hasArgs, i, idt, known, post, pre, range, ref1, result, vars;
                    return (known = null != this.fromNum && null != this.toNum, known && 20 >= _Mathabs(this.fromNum - this.toNum)) ? (range = function() {
                      for (var results1 = [], j = ref1 = this.fromNum, ref2 = this.toNum; ref1 <= ref2 ? j <= ref2 : j >= ref2; ref1 <= ref2 ? j++ : j--)
                        results1.push(j);
                      return results1;
                    }.apply(this), this.exclusive && range.pop(), [this.makeCode("[".concat(range.join(", "), "]"))]) : (idt = this.tab + TAB, i = o.scope.freeVariable("i", { single: true, reserve: false }), result = o.scope.freeVariable("results", { reserve: false }), pre = "\n".concat(idt, "var ").concat(result, " = [];"), known ? (o.index = i, body = fragmentsToText(this.compileNode(o))) : (vars = "".concat(i, " = ").concat(this.fromC) + (this.toC === this.toVar ? "" : ", ".concat(this.toC)), cond = "".concat(this.fromVar, " <= ").concat(this.toVar), body = "var ".concat(vars, "; ").concat(cond, " ? ").concat(i, " <").concat(this.equals, " ").concat(this.toVar, " : ").concat(i, " >").concat(this.equals, " ").concat(this.toVar, "; ").concat(cond, " ? ").concat(i, "++ : ").concat(i, "--")), post = "{ ".concat(result, ".push(").concat(i, "); }\n").concat(idt, "return ").concat(result, ";\n").concat(o.indent), hasArgs = function(node) {
                      return null == node ? void 0 : node.contains(isLiteralArguments);
                    }, (hasArgs(this.from) || hasArgs(this.to)) && (args = ", arguments"), [this.makeCode("(function() {".concat(pre, "\n").concat(idt, "for (").concat(body, ")").concat(post, "}).apply(this").concat(null == args ? "" : args, ")"))]);
                  } }, { key: "astProperties", value: function astProperties(o) {
                    var ref1, ref2, ref3, ref4;
                    return { from: null == (ref1 = null == (ref2 = this.from) ? void 0 : ref2.ast(o)) ? null : ref1, to: null == (ref3 = null == (ref4 = this.to) ? void 0 : ref4.ast(o)) ? null : ref3, exclusive: this.exclusive };
                  } }]), Range3;
                }(Base);
                return Range2.prototype.children = ["from", "to"], Range2;
              }.call(this), exports2.Slice = Slice = function() {
                var Slice2 = function(_Base25) {
                  "use strict";
                  function Slice3(range1) {
                    var _this42;
                    return _classCallCheck(this, Slice3), _this42 = _possibleConstructorReturn(this, _getPrototypeOf(Slice3).call(this)), _this42.range = range1, _this42;
                  }
                  return _inherits(Slice3, _Base25), _createClass(Slice3, [{ key: "compileNode", value: function compileNode(o) {
                    var _this$range = this.range, compiled, compiledText, from, fromCompiled, to, toStr;
                    return to = _this$range.to, from = _this$range.from, (null == from ? void 0 : from.shouldCache()) && (from = new Value(new Parens(from))), (null == to ? void 0 : to.shouldCache()) && (to = new Value(new Parens(to))), fromCompiled = (null == from ? void 0 : from.compileToFragments(o, LEVEL_PAREN)) || [this.makeCode("0")], to && (compiled = to.compileToFragments(o, LEVEL_PAREN), compiledText = fragmentsToText(compiled), (this.range.exclusive || -1 != +compiledText) && (toStr = ", " + (this.range.exclusive ? compiledText : to.isNumber() ? "".concat(+compiledText + 1) : (compiled = to.compileToFragments(o, LEVEL_ACCESS), "+".concat(fragmentsToText(compiled), " + 1 || 9e9"))))), [this.makeCode(".slice(".concat(fragmentsToText(fromCompiled)).concat(toStr || "", ")"))];
                  } }, { key: "astNode", value: function astNode(o) {
                    return this.range.ast(o);
                  } }]), Slice3;
                }(Base);
                return Slice2.prototype.children = ["range"], Slice2;
              }.call(this), exports2.Obj = Obj = function() {
                var Obj2 = function(_Base26) {
                  "use strict";
                  function Obj3(props) {
                    var generated = !!(1 < arguments.length && void 0 !== arguments[1]) && arguments[1], _this43;
                    return _classCallCheck(this, Obj3), _this43 = _possibleConstructorReturn(this, _getPrototypeOf(Obj3).call(this)), _this43.generated = generated, _this43.objects = _this43.properties = props || [], _this43;
                  }
                  return _inherits(Obj3, _Base26), _createClass(Obj3, [{ key: "isAssignable", value: function isAssignable(opts) {
                    var j, len1, message, prop, ref1, ref2;
                    for (ref1 = this.properties, j = 0, len1 = ref1.length; j < len1; j++)
                      if (prop = ref1[j], message = isUnassignable(prop.unwrapAll().value), message && prop.error(message), prop instanceof Assign && "object" === prop.context && !((null == (ref2 = prop.value) ? void 0 : ref2.base) instanceof Arr) && (prop = prop.value), !prop.isAssignable(opts))
                        return false;
                    return true;
                  } }, { key: "shouldCache", value: function shouldCache() {
                    return !this.isAssignable();
                  } }, { key: "hasSplat", value: function hasSplat() {
                    var j, len1, prop, ref1;
                    for (ref1 = this.properties, j = 0, len1 = ref1.length; j < len1; j++)
                      if (prop = ref1[j], prop instanceof Splat)
                        return true;
                    return false;
                  } }, { key: "reorderProperties", value: function reorderProperties() {
                    var props, splatProp, splatProps;
                    return props = this.properties, splatProps = this.getAndCheckSplatProps(), splatProp = props.splice(splatProps[0], 1), this.objects = this.properties = [].concat(props, splatProp);
                  } }, { key: "compileNode", value: function compileNode(o) {
                    var answer, i, idt, indent, isCompact, j, join, k, key, l, lastNode, len1, len2, len3, node, prop, props, ref1, value;
                    if (this.hasSplat() && this.lhs && this.reorderProperties(), props = this.properties, this.generated)
                      for (j = 0, len1 = props.length; j < len1; j++)
                        node = props[j], node instanceof Value && node.error("cannot have an implicit value in an implicit object");
                    for (idt = o.indent += TAB, lastNode = this.lastNode(this.properties), this.propagateLhs(), isCompact = true, ref1 = this.properties, k = 0, len2 = ref1.length; k < len2; k++)
                      prop = ref1[k], prop instanceof Assign && "object" === prop.context && (isCompact = false);
                    for (answer = [], answer.push(this.makeCode(isCompact ? "" : "\n")), i = l = 0, len3 = props.length; l < len3; i = ++l) {
                      var _answer;
                      if (prop = props[i], join = i === props.length - 1 ? "" : isCompact ? ", " : prop === lastNode ? "\n" : ",\n", indent = isCompact ? "" : idt, key = prop instanceof Assign && "object" === prop.context ? prop.variable : prop instanceof Assign ? (this.lhs ? void 0 : prop.operatorToken.error("unexpected ".concat(prop.operatorToken.value)), prop.variable) : prop, key instanceof Value && key.hasProperties() && (("object" === prop.context || !key["this"]) && key.error("invalid object key"), key = key.properties[0].name, prop = new Assign(key, prop, "object")), key === prop)
                        if (prop.shouldCache()) {
                          var _prop$base$cache = prop.base.cache(o), _prop$base$cache2 = _slicedToArray(_prop$base$cache, 2);
                          key = _prop$base$cache2[0], value = _prop$base$cache2[1], key instanceof IdentifierLiteral && (key = new PropertyName(key.value)), prop = new Assign(key, value, "object");
                        } else if (!(key instanceof Value && key.base instanceof ComputedPropertyName))
                          "function" == typeof prop.bareLiteral && prop.bareLiteral(IdentifierLiteral) || prop instanceof Splat || (prop = new Assign(prop, prop, "object"));
                        else if (prop.base.value.shouldCache()) {
                          var _prop$base$value$cach = prop.base.value.cache(o), _prop$base$value$cach2 = _slicedToArray(_prop$base$value$cach, 2);
                          key = _prop$base$value$cach2[0], value = _prop$base$value$cach2[1], key instanceof IdentifierLiteral && (key = new ComputedPropertyName(key.value)), prop = new Assign(key, value, "object");
                        } else
                          prop = new Assign(key, prop.base.value, "object");
                      indent && answer.push(this.makeCode(indent)), (_answer = answer).push.apply(_answer, _toConsumableArray(prop.compileToFragments(o, LEVEL_TOP))), join && answer.push(this.makeCode(join));
                    }
                    return answer.push(this.makeCode(isCompact ? "" : "\n".concat(this.tab))), answer = this.wrapInBraces(answer), this.front ? this.wrapInParentheses(answer) : answer;
                  } }, { key: "getAndCheckSplatProps", value: function getAndCheckSplatProps() {
                    var i, prop, props, splatProps;
                    if (this.hasSplat() && this.lhs)
                      return props = this.properties, splatProps = function() {
                        var j, len1, results1;
                        for (results1 = [], i = j = 0, len1 = props.length; j < len1; i = ++j)
                          prop = props[i], prop instanceof Splat && results1.push(i);
                        return results1;
                      }(), 1 < (null == splatProps ? void 0 : splatProps.length) && props[splatProps[1]].error("multiple spread elements are disallowed"), splatProps;
                  } }, { key: "assigns", value: function assigns(name) {
                    var j, len1, prop, ref1;
                    for (ref1 = this.properties, j = 0, len1 = ref1.length; j < len1; j++)
                      if (prop = ref1[j], prop.assigns(name))
                        return true;
                    return false;
                  } }, { key: "eachName", value: function eachName(iterator) {
                    var j, len1, prop, ref1, results1;
                    for (ref1 = this.properties, results1 = [], j = 0, len1 = ref1.length; j < len1; j++)
                      prop = ref1[j], prop instanceof Assign && "object" === prop.context && (prop = prop.value), prop = prop.unwrapAll(), null == prop.eachName ? results1.push(void 0) : results1.push(prop.eachName(iterator));
                    return results1;
                  } }, { key: "expandProperty", value: function expandProperty(property) {
                    var context, key, operatorToken, variable;
                    return variable = property.variable, context = property.context, operatorToken = property.operatorToken, key = property instanceof Assign && "object" === context ? variable : property instanceof Assign ? (this.lhs ? void 0 : operatorToken.error("unexpected ".concat(operatorToken.value)), variable) : property, key instanceof Value && key.hasProperties() ? ("object" !== context && key["this"] || key.error("invalid object key"), property instanceof Assign ? new ObjectProperty({ fromAssign: property }) : new ObjectProperty({ key: property })) : key === property ? property instanceof Splat ? property : new ObjectProperty({ key: property }) : new ObjectProperty({ fromAssign: property });
                  } }, { key: "expandProperties", value: function expandProperties() {
                    var j, len1, property, ref1, results1;
                    for (ref1 = this.properties, results1 = [], j = 0, len1 = ref1.length; j < len1; j++)
                      property = ref1[j], results1.push(this.expandProperty(property));
                    return results1;
                  } }, { key: "propagateLhs", value: function propagateLhs(setLhs) {
                    var j, len1, property, ref1, results1, unwrappedValue, value;
                    if (setLhs && (this.lhs = true), !!this.lhs) {
                      for (ref1 = this.properties, results1 = [], j = 0, len1 = ref1.length; j < len1; j++)
                        if (property = ref1[j], property instanceof Assign && "object" === property.context) {
                          var _property2 = property;
                          value = _property2.value, unwrappedValue = value.unwrapAll(), unwrappedValue instanceof Arr || unwrappedValue instanceof Obj3 ? results1.push(unwrappedValue.propagateLhs(true)) : unwrappedValue instanceof Assign ? results1.push(unwrappedValue.nestedLhs = true) : results1.push(void 0);
                        } else
                          property instanceof Assign ? results1.push(property.nestedLhs = true) : property instanceof Splat ? results1.push(property.propagateLhs(true)) : results1.push(void 0);
                      return results1;
                    }
                  } }, { key: "astNode", value: function astNode(o) {
                    return this.getAndCheckSplatProps(), _get(_getPrototypeOf(Obj3.prototype), "astNode", this).call(this, o);
                  } }, { key: "astType", value: function astType() {
                    return this.lhs ? "ObjectPattern" : "ObjectExpression";
                  } }, { key: "astProperties", value: function astProperties(o) {
                    var property;
                    return { implicit: !!this.generated, properties: function() {
                      var j, len1, ref1, results1;
                      for (ref1 = this.expandProperties(), results1 = [], j = 0, len1 = ref1.length; j < len1; j++)
                        property = ref1[j], results1.push(property.ast(o));
                      return results1;
                    }.call(this) };
                  } }]), Obj3;
                }(Base);
                return Obj2.prototype.children = ["properties"], Obj2;
              }.call(this), exports2.ObjectProperty = ObjectProperty = function(_Base27) {
                "use strict";
                function ObjectProperty2(_ref40) {
                  var key = _ref40.key, fromAssign = _ref40.fromAssign, _this44;
                  _classCallCheck(this, ObjectProperty2);
                  var context, value;
                  return _this44 = _possibleConstructorReturn(this, _getPrototypeOf(ObjectProperty2).call(this)), fromAssign ? (_this44.key = fromAssign.variable, value = fromAssign.value, context = fromAssign.context, "object" === context ? _this44.value = value : (_this44.value = fromAssign, _this44.shorthand = true), _this44.locationData = fromAssign.locationData) : (_this44.key = key, _this44.shorthand = true, _this44.locationData = key.locationData), _this44;
                }
                return _inherits(ObjectProperty2, _Base27), _createClass(ObjectProperty2, [{ key: "astProperties", value: function astProperties(o) {
                  var isComputedPropertyName, keyAst, ref1, ref2;
                  return isComputedPropertyName = this.key instanceof Value && this.key.base instanceof ComputedPropertyName || this.key.unwrap() instanceof StringWithInterpolations, keyAst = this.key.ast(o, LEVEL_LIST), { key: (null == keyAst ? void 0 : keyAst.declaration) ? Object.assign({}, keyAst, { declaration: false }) : keyAst, value: null == (ref1 = null == (ref2 = this.value) ? void 0 : ref2.ast(o, LEVEL_LIST)) ? keyAst : ref1, shorthand: !!this.shorthand, computed: !!isComputedPropertyName, method: false };
                } }]), ObjectProperty2;
              }(Base), exports2.Arr = Arr = function() {
                var Arr2 = function(_Base28) {
                  "use strict";
                  function Arr3(objs) {
                    var lhs1 = !!(1 < arguments.length && void 0 !== arguments[1]) && arguments[1], _this45;
                    return _classCallCheck(this, Arr3), _this45 = _possibleConstructorReturn(this, _getPrototypeOf(Arr3).call(this)), _this45.lhs = lhs1, _this45.objects = objs || [], _this45.propagateLhs(), _this45;
                  }
                  return _inherits(Arr3, _Base28), _createClass(Arr3, [{ key: "hasElision", value: function hasElision() {
                    var j, len1, obj, ref1;
                    for (ref1 = this.objects, j = 0, len1 = ref1.length; j < len1; j++)
                      if (obj = ref1[j], obj instanceof Elision)
                        return true;
                    return false;
                  } }, { key: "isAssignable", value: function isAssignable(opts) {
                    var _ref41 = null == opts ? {} : opts, allowEmptyArray, allowExpansion, allowNontrailingSplat, i, j, len1, obj, ref1;
                    allowExpansion = _ref41.allowExpansion, allowNontrailingSplat = _ref41.allowNontrailingSplat;
                    var _ref41$allowEmptyArra = _ref41.allowEmptyArray;
                    if (allowEmptyArray = void 0 !== _ref41$allowEmptyArra && _ref41$allowEmptyArra, !this.objects.length)
                      return allowEmptyArray;
                    for (ref1 = this.objects, i = j = 0, len1 = ref1.length; j < len1; i = ++j) {
                      if (obj = ref1[i], !allowNontrailingSplat && obj instanceof Splat && i + 1 !== this.objects.length)
                        return false;
                      if (!(allowExpansion && obj instanceof Expansion || obj.isAssignable(opts) && (!obj.isAtomic || obj.isAtomic())))
                        return false;
                    }
                    return true;
                  } }, { key: "shouldCache", value: function shouldCache() {
                    return !this.isAssignable();
                  } }, { key: "compileNode", value: function compileNode(o) {
                    var answer, compiledObjs, fragment, fragmentIndex, fragmentIsElision, fragments, includesLineCommentsOnNonFirstElement, index, j, k, l, len1, len2, len3, len4, len5, obj, objIndex, olen, p, passedElision, q, ref1, ref2, unwrappedObj;
                    if (!this.objects.length)
                      return [this.makeCode("[]")];
                    for (o.indent += TAB, fragmentIsElision = function(_ref42) {
                      var _ref43 = _slicedToArray(_ref42, 1), fragment2 = _ref43[0];
                      return "Elision" === fragment2.type && "," === fragment2.code.trim();
                    }, passedElision = false, answer = [], ref1 = this.objects, objIndex = j = 0, len1 = ref1.length; j < len1; objIndex = ++j)
                      obj = ref1[objIndex], unwrappedObj = obj.unwrapAll(), unwrappedObj.comments && 0 === unwrappedObj.comments.filter(function(comment) {
                        return !comment.here;
                      }).length && (unwrappedObj.includeCommentFragments = YES);
                    for (compiledObjs = function() {
                      var k2, len22, ref22, results1;
                      for (ref22 = this.objects, results1 = [], k2 = 0, len22 = ref22.length; k2 < len22; k2++)
                        obj = ref22[k2], results1.push(obj.compileToFragments(o, LEVEL_LIST));
                      return results1;
                    }.call(this), olen = compiledObjs.length, includesLineCommentsOnNonFirstElement = false, index = k = 0, len2 = compiledObjs.length; k < len2; index = ++k) {
                      var _answer2;
                      for (fragments = compiledObjs[index], l = 0, len3 = fragments.length; l < len3; l++)
                        fragment = fragments[l], fragment.isHereComment ? fragment.code = fragment.code.trim() : 0 !== index && false === includesLineCommentsOnNonFirstElement && hasLineComments(fragment) && (includesLineCommentsOnNonFirstElement = true);
                      0 !== index && passedElision && (!fragmentIsElision(fragments) || index === olen - 1) && answer.push(this.makeCode(", ")), passedElision = passedElision || !fragmentIsElision(fragments), (_answer2 = answer).push.apply(_answer2, _toConsumableArray(fragments));
                    }
                    if (includesLineCommentsOnNonFirstElement || 0 <= indexOf.call(fragmentsToText(answer), "\n")) {
                      for (fragmentIndex = p = 0, len4 = answer.length; p < len4; fragmentIndex = ++p)
                        fragment = answer[fragmentIndex], fragment.isHereComment ? fragment.code = "".concat(multident(fragment.code, o.indent, false), "\n").concat(o.indent) : ", " === fragment.code && (null == fragment || !fragment.isElision) && "StringLiteral" !== (ref2 = fragment.type) && "StringWithInterpolations" !== ref2 && (fragment.code = ",\n".concat(o.indent));
                      answer.unshift(this.makeCode("[\n".concat(o.indent))), answer.push(this.makeCode("\n".concat(this.tab, "]")));
                    } else {
                      for (q = 0, len5 = answer.length; q < len5; q++)
                        fragment = answer[q], fragment.isHereComment && (fragment.code = "".concat(fragment.code, " "));
                      answer.unshift(this.makeCode("[")), answer.push(this.makeCode("]"));
                    }
                    return answer;
                  } }, { key: "assigns", value: function assigns(name) {
                    var j, len1, obj, ref1;
                    for (ref1 = this.objects, j = 0, len1 = ref1.length; j < len1; j++)
                      if (obj = ref1[j], obj.assigns(name))
                        return true;
                    return false;
                  } }, { key: "eachName", value: function eachName(iterator) {
                    var j, len1, obj, ref1, results1;
                    for (ref1 = this.objects, results1 = [], j = 0, len1 = ref1.length; j < len1; j++)
                      obj = ref1[j], obj = obj.unwrapAll(), results1.push(obj.eachName(iterator));
                    return results1;
                  } }, { key: "propagateLhs", value: function propagateLhs(setLhs) {
                    var j, len1, object, ref1, results1, unwrappedObject;
                    if (setLhs && (this.lhs = true), !!this.lhs) {
                      for (ref1 = this.objects, results1 = [], j = 0, len1 = ref1.length; j < len1; j++)
                        object = ref1[j], (object instanceof Splat || object instanceof Expansion) && (object.lhs = true), unwrappedObject = object.unwrapAll(), unwrappedObject instanceof Arr3 || unwrappedObject instanceof Obj ? results1.push(unwrappedObject.propagateLhs(true)) : unwrappedObject instanceof Assign ? results1.push(unwrappedObject.nestedLhs = true) : results1.push(void 0);
                      return results1;
                    }
                  } }, { key: "astType", value: function astType() {
                    return this.lhs ? "ArrayPattern" : "ArrayExpression";
                  } }, { key: "astProperties", value: function astProperties(o) {
                    var object;
                    return { elements: function() {
                      var j, len1, ref1, results1;
                      for (ref1 = this.objects, results1 = [], j = 0, len1 = ref1.length; j < len1; j++)
                        object = ref1[j], results1.push(object.ast(o, LEVEL_LIST));
                      return results1;
                    }.call(this) };
                  } }]), Arr3;
                }(Base);
                return Arr2.prototype.children = ["objects"], Arr2;
              }.call(this), exports2.Class = Class = function() {
                var Class2 = function(_Base29) {
                  "use strict";
                  function Class3(variable1, parent1, body1) {
                    var _this46;
                    return _classCallCheck(this, Class3), _this46 = _possibleConstructorReturn(this, _getPrototypeOf(Class3).call(this)), _this46.variable = variable1, _this46.parent = parent1, _this46.body = body1, null == _this46.body && (_this46.body = new Block(), _this46.hasGeneratedBody = true), _this46;
                  }
                  return _inherits(Class3, _Base29), _createClass(Class3, [{ key: "compileNode", value: function compileNode(o) {
                    var executableBody, node, parentName;
                    if (this.name = this.determineName(), executableBody = this.walkBody(o), this.parent instanceof Value && !this.parent.hasProperties() && (parentName = this.parent.base.value), this.hasNameClash = null != this.name && this.name === parentName, node = this, executableBody || this.hasNameClash ? node = new ExecutableClassBody(node, executableBody) : null == this.name && o.level === LEVEL_TOP && (node = new Parens(node)), this.boundMethods.length && this.parent && (null == this.variable && (this.variable = new IdentifierLiteral(o.scope.freeVariable("_class"))), null == this.variableRef)) {
                      var _this$variable$cache = this.variable.cache(o), _this$variable$cache2 = _slicedToArray(_this$variable$cache, 2);
                      this.variable = _this$variable$cache2[0], this.variableRef = _this$variable$cache2[1];
                    }
                    this.variable && (node = new Assign(this.variable, node, null, { moduleDeclaration: this.moduleDeclaration })), this.compileNode = this.compileClassDeclaration;
                    try {
                      return node.compileToFragments(o);
                    } finally {
                      delete this.compileNode;
                    }
                  } }, { key: "compileClassDeclaration", value: function compileClassDeclaration(o) {
                    var ref1, ref2, result;
                    if ((this.externalCtor || this.boundMethods.length) && null == this.ctor && (this.ctor = this.makeDefaultConstructor()), null != (ref1 = this.ctor) && (ref1.noReturn = true), this.boundMethods.length && this.proxyBoundMethods(), o.indent += TAB, result = [], result.push(this.makeCode("class ")), this.name && result.push(this.makeCode(this.name)), null != (null == (ref2 = this.variable) ? void 0 : ref2.comments) && this.compileCommentFragments(o, this.variable, result), this.name && result.push(this.makeCode(" ")), this.parent) {
                      var _result;
                      (_result = result).push.apply(_result, [this.makeCode("extends ")].concat(_toConsumableArray(this.parent.compileToFragments(o)), [this.makeCode(" ")]));
                    }
                    if (result.push(this.makeCode("{")), !this.body.isEmpty()) {
                      var _result2;
                      this.body.spaced = true, result.push(this.makeCode("\n")), (_result2 = result).push.apply(_result2, _toConsumableArray(this.body.compileToFragments(o, LEVEL_TOP))), result.push(this.makeCode("\n".concat(this.tab)));
                    }
                    return result.push(this.makeCode("}")), result;
                  } }, { key: "determineName", value: function determineName() {
                    var _slice1$call13, _slice1$call14, message, name, node, ref1, tail;
                    return this.variable ? (ref1 = this.variable.properties, _slice1$call13 = slice1.call(ref1, -1), _slice1$call14 = _slicedToArray(_slice1$call13, 1), tail = _slice1$call14[0], _slice1$call13, node = tail ? tail instanceof Access && tail.name : this.variable.base, !(node instanceof IdentifierLiteral || node instanceof PropertyName)) ? null : (name = node.value, tail || (message = isUnassignable(name), message && this.variable.error(message)), 0 <= indexOf.call(JS_FORBIDDEN, name) ? "_".concat(name) : name) : null;
                  } }, { key: "walkBody", value: function walkBody(o) {
                    var assign, end, executableBody, expression, expressions, exprs, i, initializer, initializerExpression, j, k, len1, len2, method, properties, pushSlice, ref1, start;
                    for (this.ctor = null, this.boundMethods = [], executableBody = null, initializer = [], expressions = this.body.expressions, i = 0, ref1 = expressions.slice(), j = 0, len1 = ref1.length; j < len1; j++)
                      if (expression = ref1[j], expression instanceof Value && expression.isObject(true)) {
                        for (properties = expression.base.properties, exprs = [], end = 0, start = 0, pushSlice = function() {
                          if (end > start)
                            return exprs.push(new Value(new Obj(properties.slice(start, end), true)));
                        }; assign = properties[end]; )
                          (initializerExpression = this.addInitializerExpression(assign, o)) && (pushSlice(), exprs.push(initializerExpression), initializer.push(initializerExpression), start = end + 1), end++;
                        pushSlice(), splice.apply(expressions, [i, i - i + 1].concat(exprs)), exprs, i += exprs.length;
                      } else
                        (initializerExpression = this.addInitializerExpression(expression, o)) && (initializer.push(initializerExpression), expressions[i] = initializerExpression), i += 1;
                    for (k = 0, len2 = initializer.length; k < len2; k++)
                      method = initializer[k], method instanceof Code && (method.ctor ? (this.ctor && method.error("Cannot define more than one constructor in a class"), this.ctor = method) : method.isStatic && method.bound ? method.context = this.name : method.bound && this.boundMethods.push(method));
                    return o.compiling ? initializer.length === expressions.length ? void 0 : (this.body.expressions = function() {
                      var l, len3, results1;
                      for (results1 = [], l = 0, len3 = initializer.length; l < len3; l++)
                        expression = initializer[l], results1.push(expression.hoist());
                      return results1;
                    }(), new Block(expressions)) : void 0;
                  } }, { key: "addInitializerExpression", value: function addInitializerExpression(node, o) {
                    return node.unwrapAll() instanceof PassthroughLiteral ? node : this.validInitializerMethod(node) ? this.addInitializerMethod(node) : !o.compiling && this.validClassProperty(node) ? this.addClassProperty(node) : !o.compiling && this.validClassPrototypeProperty(node) ? this.addClassPrototypeProperty(node) : null;
                  } }, { key: "validInitializerMethod", value: function validInitializerMethod(node) {
                    return !!(node instanceof Assign && node.value instanceof Code) && (!("object" !== node.context || node.variable.hasProperties()) || node.variable.looksStatic(this.name) && (this.name || !node.value.bound));
                  } }, { key: "addInitializerMethod", value: function addInitializerMethod(assign) {
                    var isConstructor, method, methodName, operatorToken, variable;
                    return variable = assign.variable, method = assign.value, operatorToken = assign.operatorToken, method.isMethod = true, method.isStatic = variable.looksStatic(this.name), method.isStatic ? method.name = variable.properties[0] : (methodName = variable.base, method.name = new (methodName.shouldCache() ? Index : Access)(methodName), method.name.updateLocationDataIfMissing(methodName.locationData), isConstructor = methodName instanceof StringLiteral ? "constructor" === methodName.originalValue : "constructor" === methodName.value, isConstructor && (method.ctor = this.parent ? "derived" : "base"), method.bound && method.ctor && method.error("Cannot define a constructor as a bound (fat arrow) function")), method.operatorToken = operatorToken, method;
                  } }, { key: "validClassProperty", value: function validClassProperty(node) {
                    return !!(node instanceof Assign) && node.variable.looksStatic(this.name);
                  } }, { key: "addClassProperty", value: function addClassProperty(assign) {
                    var operatorToken, staticClassName, value, variable;
                    variable = assign.variable, value = assign.value, operatorToken = assign.operatorToken;
                    var _variable$looksStatic = variable.looksStatic(this.name);
                    return staticClassName = _variable$looksStatic.staticClassName, new ClassProperty({ name: variable.properties[0], isStatic: true, staticClassName, value, operatorToken }).withLocationDataFrom(assign);
                  } }, { key: "validClassPrototypeProperty", value: function validClassPrototypeProperty(node) {
                    return !!(node instanceof Assign) && "object" === node.context && !node.variable.hasProperties();
                  } }, { key: "addClassPrototypeProperty", value: function addClassPrototypeProperty(assign) {
                    var value, variable;
                    return variable = assign.variable, value = assign.value, new ClassPrototypeProperty({ name: variable.base, value }).withLocationDataFrom(assign);
                  } }, { key: "makeDefaultConstructor", value: function makeDefaultConstructor() {
                    var applyArgs, applyCtor, ctor;
                    return ctor = this.addInitializerMethod(new Assign(new Value(new PropertyName("constructor")), new Code())), this.body.unshift(ctor), this.parent && ctor.body.push(new SuperCall(new Super(), [new Splat(new IdentifierLiteral("arguments"))])), this.externalCtor && (applyCtor = new Value(this.externalCtor, [new Access(new PropertyName("apply"))]), applyArgs = [new ThisLiteral(), new IdentifierLiteral("arguments")], ctor.body.push(new Call(applyCtor, applyArgs)), ctor.body.makeReturn()), ctor;
                  } }, { key: "proxyBoundMethods", value: function proxyBoundMethods() {
                    var method, name;
                    return this.ctor.thisAssignments = function() {
                      var j, len1, ref1, results1;
                      for (ref1 = this.boundMethods, results1 = [], j = 0, len1 = ref1.length; j < len1; j++)
                        method = ref1[j], this.parent && (method.classVariable = this.variableRef), name = new Value(new ThisLiteral(), [method.name]), results1.push(new Assign(name, new Call(new Value(name, [new Access(new PropertyName("bind"))]), [new ThisLiteral()])));
                      return results1;
                    }.call(this), null;
                  } }, { key: "declareName", value: function declareName(o) {
                    var alreadyDeclared, name, ref1;
                    if ((name = null == (ref1 = this.variable) ? void 0 : ref1.unwrap()) instanceof IdentifierLiteral)
                      return alreadyDeclared = o.scope.find(name.value), name.isDeclaration = !alreadyDeclared;
                  } }, { key: "isStatementAst", value: function isStatementAst() {
                    return true;
                  } }, { key: "astNode", value: function astNode(o) {
                    var argumentsNode, jumpNode, ref1;
                    return (jumpNode = this.body.jumps()) && jumpNode.error("Class bodies cannot contain pure statements"), (argumentsNode = this.body.contains(isLiteralArguments)) && argumentsNode.error("Class bodies shouldn't reference arguments"), this.declareName(o), this.name = this.determineName(), this.body.isClassBody = true, this.hasGeneratedBody && (this.body.locationData = zeroWidthLocationDataFromEndLocation(this.locationData)), this.walkBody(o), sniffDirectives(this.body.expressions), null != (ref1 = this.ctor) && (ref1.noReturn = true), _get(_getPrototypeOf(Class3.prototype), "astNode", this).call(this, o);
                  } }, { key: "astType", value: function astType(o) {
                    return o.level === LEVEL_TOP ? "ClassDeclaration" : "ClassExpression";
                  } }, { key: "astProperties", value: function astProperties(o) {
                    var ref1, ref2, ref3, ref4;
                    return { id: null == (ref1 = null == (ref2 = this.variable) ? void 0 : ref2.ast(o)) ? null : ref1, superClass: null == (ref3 = null == (ref4 = this.parent) ? void 0 : ref4.ast(o, LEVEL_PAREN)) ? null : ref3, body: this.body.ast(o, LEVEL_TOP) };
                  } }]), Class3;
                }(Base);
                return Class2.prototype.children = ["variable", "parent", "body"], Class2;
              }.call(this), exports2.ExecutableClassBody = ExecutableClassBody = function() {
                var ExecutableClassBody2 = function(_Base30) {
                  "use strict";
                  function ExecutableClassBody3(_class) {
                    var body1 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : new Block(), _this47;
                    return _classCallCheck(this, ExecutableClassBody3), _this47 = _possibleConstructorReturn(this, _getPrototypeOf(ExecutableClassBody3).call(this)), _this47["class"] = _class, _this47.body = body1, _this47;
                  }
                  return _inherits(ExecutableClassBody3, _Base30), _createClass(ExecutableClassBody3, [{ key: "compileNode", value: function compileNode(o) {
                    var _this$body$expression, args, argumentsNode, directives, externalCtor, ident, jumpNode, klass, params, parent, ref1, wrapper;
                    return (jumpNode = this.body.jumps()) && jumpNode.error("Class bodies cannot contain pure statements"), (argumentsNode = this.body.contains(isLiteralArguments)) && argumentsNode.error("Class bodies shouldn't reference arguments"), params = [], args = [new ThisLiteral()], wrapper = new Code(params, this.body), klass = new Parens(new Call(new Value(wrapper, [new Access(new PropertyName("call"))]), args)), this.body.spaced = true, o.classScope = wrapper.makeScope(o.scope), this.name = null == (ref1 = this["class"].name) ? o.classScope.freeVariable(this.defaultClassVariableName) : ref1, ident = new IdentifierLiteral(this.name), directives = this.walkBody(), this.setContext(), this["class"].hasNameClash && (parent = new IdentifierLiteral(o.classScope.freeVariable("superClass")), wrapper.params.push(new Param(parent)), args.push(this["class"].parent), this["class"].parent = parent), this.externalCtor && (externalCtor = new IdentifierLiteral(o.classScope.freeVariable("ctor", { reserve: false })), this["class"].externalCtor = externalCtor, this.externalCtor.variable.base = externalCtor), this.name === this["class"].name ? this.body.expressions.unshift(this["class"]) : this.body.expressions.unshift(new Assign(new IdentifierLiteral(this.name), this["class"])), (_this$body$expression = this.body.expressions).unshift.apply(_this$body$expression, _toConsumableArray(directives)), this.body.push(ident), klass.compileToFragments(o);
                  } }, { key: "walkBody", value: function walkBody() {
                    var _this48 = this, directives, expr, index;
                    for (directives = [], index = 0; (expr = this.body.expressions[index]) && !!(expr instanceof Value && expr.isString()); )
                      if (expr.hoisted)
                        index++;
                      else {
                        var _directives;
                        (_directives = directives).push.apply(_directives, _toConsumableArray(this.body.expressions.splice(index, 1)));
                      }
                    return this.traverseChildren(false, function(child) {
                      var cont, i, j, len1, node, ref1;
                      if (child instanceof Class || child instanceof HoistTarget)
                        return false;
                      if (cont = true, child instanceof Block) {
                        for (ref1 = child.expressions, i = j = 0, len1 = ref1.length; j < len1; i = ++j)
                          node = ref1[i], node instanceof Value && node.isObject(true) ? (cont = false, child.expressions[i] = _this48.addProperties(node.base.properties)) : node instanceof Assign && node.variable.looksStatic(_this48.name) && (node.value.isStatic = true);
                        child.expressions = flatten(child.expressions);
                      }
                      return cont;
                    }), directives;
                  } }, { key: "setContext", value: function setContext() {
                    var _this49 = this;
                    return this.body.traverseChildren(false, function(node) {
                      return node instanceof ThisLiteral ? node.value = _this49.name : node instanceof Code && node.bound && (node.isStatic || !node.name) ? node.context = _this49.name : void 0;
                    });
                  } }, { key: "addProperties", value: function addProperties(assigns) {
                    var assign, base, name, prototype, result, value, variable;
                    return result = function() {
                      var j, len1, results1;
                      for (results1 = [], j = 0, len1 = assigns.length; j < len1; j++)
                        assign = assigns[j], variable = assign.variable, base = null == variable ? void 0 : variable.base, value = assign.value, delete assign.context, "constructor" === base.value ? (value instanceof Code && base.error("constructors must be defined at the top level of a class body"), assign = this.externalCtor = new Assign(new Value(), value)) : assign.variable["this"] ? assign.value instanceof Code && (assign.value.isStatic = true) : (name = base instanceof ComputedPropertyName ? new Index(base.value) : new (base.shouldCache() ? Index : Access)(base), prototype = new Access(new PropertyName("prototype")), variable = new Value(new ThisLiteral(), [prototype, name]), assign.variable = variable), results1.push(assign);
                      return results1;
                    }.call(this), compact(result);
                  } }]), ExecutableClassBody3;
                }(Base);
                return ExecutableClassBody2.prototype.children = ["class", "body"], ExecutableClassBody2.prototype.defaultClassVariableName = "_Class", ExecutableClassBody2;
              }.call(this), exports2.ClassProperty = ClassProperty = function() {
                var ClassProperty2 = function(_Base31) {
                  "use strict";
                  function ClassProperty3(_ref44) {
                    var name1 = _ref44.name, isStatic = _ref44.isStatic, staticClassName1 = _ref44.staticClassName, value1 = _ref44.value, operatorToken1 = _ref44.operatorToken, _this50;
                    return _classCallCheck(this, ClassProperty3), _this50 = _possibleConstructorReturn(this, _getPrototypeOf(ClassProperty3).call(this)), _this50.name = name1, _this50.isStatic = isStatic, _this50.staticClassName = staticClassName1, _this50.value = value1, _this50.operatorToken = operatorToken1, _this50;
                  }
                  return _inherits(ClassProperty3, _Base31), _createClass(ClassProperty3, [{ key: "astProperties", value: function astProperties(o) {
                    var ref1, ref2, ref3, ref4;
                    return { key: this.name.ast(o, LEVEL_LIST), value: this.value.ast(o, LEVEL_LIST), static: !!this.isStatic, computed: this.name instanceof Index || this.name instanceof ComputedPropertyName, operator: null == (ref1 = null == (ref2 = this.operatorToken) ? void 0 : ref2.value) ? "=" : ref1, staticClassName: null == (ref3 = null == (ref4 = this.staticClassName) ? void 0 : ref4.ast(o)) ? null : ref3 };
                  } }]), ClassProperty3;
                }(Base);
                return ClassProperty2.prototype.children = ["name", "value", "staticClassName"], ClassProperty2.prototype.isStatement = YES, ClassProperty2;
              }.call(this), exports2.ClassPrototypeProperty = ClassPrototypeProperty = function() {
                var ClassPrototypeProperty2 = function(_Base32) {
                  "use strict";
                  function ClassPrototypeProperty3(_ref45) {
                    var name1 = _ref45.name, value1 = _ref45.value, _this51;
                    return _classCallCheck(this, ClassPrototypeProperty3), _this51 = _possibleConstructorReturn(this, _getPrototypeOf(ClassPrototypeProperty3).call(this)), _this51.name = name1, _this51.value = value1, _this51;
                  }
                  return _inherits(ClassPrototypeProperty3, _Base32), _createClass(ClassPrototypeProperty3, [{ key: "astProperties", value: function astProperties(o) {
                    return { key: this.name.ast(o, LEVEL_LIST), value: this.value.ast(o, LEVEL_LIST), computed: this.name instanceof ComputedPropertyName || this.name instanceof StringWithInterpolations };
                  } }]), ClassPrototypeProperty3;
                }(Base);
                return ClassPrototypeProperty2.prototype.children = ["name", "value"], ClassPrototypeProperty2.prototype.isStatement = YES, ClassPrototypeProperty2;
              }.call(this), exports2.ModuleDeclaration = ModuleDeclaration = function() {
                var ModuleDeclaration2 = function(_Base33) {
                  "use strict";
                  function ModuleDeclaration3(clause, source1) {
                    var _this52;
                    return _classCallCheck(this, ModuleDeclaration3), _this52 = _possibleConstructorReturn(this, _getPrototypeOf(ModuleDeclaration3).call(this)), _this52.clause = clause, _this52.source = source1, _this52.checkSource(), _this52;
                  }
                  return _inherits(ModuleDeclaration3, _Base33), _createClass(ModuleDeclaration3, [{ key: "checkSource", value: function checkSource() {
                    if (null != this.source && this.source instanceof StringWithInterpolations)
                      return this.source.error("the name of the module to be imported from must be an uninterpolated string");
                  } }, { key: "checkScope", value: function checkScope(o, moduleDeclarationType) {
                    if (0 !== o.indent.length)
                      return this.error("".concat(moduleDeclarationType, " statements must be at top-level scope"));
                  } }]), ModuleDeclaration3;
                }(Base);
                return ModuleDeclaration2.prototype.children = ["clause", "source"], ModuleDeclaration2.prototype.isStatement = YES, ModuleDeclaration2.prototype.jumps = THIS, ModuleDeclaration2.prototype.makeReturn = THIS, ModuleDeclaration2;
              }.call(this), exports2.ImportDeclaration = ImportDeclaration = function(_ModuleDeclaration) {
                "use strict";
                function ImportDeclaration2() {
                  return _classCallCheck(this, ImportDeclaration2), _possibleConstructorReturn(this, _getPrototypeOf(ImportDeclaration2).apply(this, arguments));
                }
                return _inherits(ImportDeclaration2, _ModuleDeclaration), _createClass(ImportDeclaration2, [{ key: "compileNode", value: function compileNode(o) {
                  var code, ref1;
                  if (this.checkScope(o, "import"), o.importedSymbols = [], code = [], code.push(this.makeCode("".concat(this.tab, "import "))), null != this.clause) {
                    var _code;
                    (_code = code).push.apply(_code, _toConsumableArray(this.clause.compileNode(o)));
                  }
                  return null != (null == (ref1 = this.source) ? void 0 : ref1.value) && (null !== this.clause && code.push(this.makeCode(" from ")), code.push(this.makeCode(this.source.value))), code.push(this.makeCode(";")), code;
                } }, { key: "astNode", value: function astNode(o) {
                  return o.importedSymbols = [], _get(_getPrototypeOf(ImportDeclaration2.prototype), "astNode", this).call(this, o);
                } }, { key: "astProperties", value: function astProperties(o) {
                  var ref1, ref2, ret;
                  return ret = { specifiers: null == (ref1 = null == (ref2 = this.clause) ? void 0 : ref2.ast(o)) ? [] : ref1, source: this.source.ast(o) }, this.clause && (ret.importKind = "value"), ret;
                } }]), ImportDeclaration2;
              }(ModuleDeclaration), exports2.ImportClause = ImportClause = function() {
                var ImportClause2 = function(_Base34) {
                  "use strict";
                  function ImportClause3(defaultBinding, namedImports) {
                    var _this53;
                    return _classCallCheck(this, ImportClause3), _this53 = _possibleConstructorReturn(this, _getPrototypeOf(ImportClause3).call(this)), _this53.defaultBinding = defaultBinding, _this53.namedImports = namedImports, _this53;
                  }
                  return _inherits(ImportClause3, _Base34), _createClass(ImportClause3, [{ key: "compileNode", value: function compileNode(o) {
                    var code;
                    if (code = [], null != this.defaultBinding) {
                      var _code2;
                      (_code2 = code).push.apply(_code2, _toConsumableArray(this.defaultBinding.compileNode(o))), null != this.namedImports && code.push(this.makeCode(", "));
                    }
                    if (null != this.namedImports) {
                      var _code3;
                      (_code3 = code).push.apply(_code3, _toConsumableArray(this.namedImports.compileNode(o)));
                    }
                    return code;
                  } }, { key: "astNode", value: function astNode(o) {
                    var ref1, ref2;
                    return compact(flatten([null == (ref1 = this.defaultBinding) ? void 0 : ref1.ast(o), null == (ref2 = this.namedImports) ? void 0 : ref2.ast(o)]));
                  } }]), ImportClause3;
                }(Base);
                return ImportClause2.prototype.children = ["defaultBinding", "namedImports"], ImportClause2;
              }.call(this), exports2.ExportDeclaration = ExportDeclaration = function(_ModuleDeclaration2) {
                "use strict";
                function ExportDeclaration2() {
                  return _classCallCheck(this, ExportDeclaration2), _possibleConstructorReturn(this, _getPrototypeOf(ExportDeclaration2).apply(this, arguments));
                }
                return _inherits(ExportDeclaration2, _ModuleDeclaration2), _createClass(ExportDeclaration2, [{ key: "compileNode", value: function compileNode(o) {
                  var code, ref1;
                  return this.checkScope(o, "export"), this.checkForAnonymousClassExport(), code = [], code.push(this.makeCode("".concat(this.tab, "export "))), this instanceof ExportDefaultDeclaration && code.push(this.makeCode("default ")), !(this instanceof ExportDefaultDeclaration) && (this.clause instanceof Assign || this.clause instanceof Class) && (code.push(this.makeCode("var ")), this.clause.moduleDeclaration = "export"), code = null != this.clause.body && this.clause.body instanceof Block ? code.concat(this.clause.compileToFragments(o, LEVEL_TOP)) : code.concat(this.clause.compileNode(o)), null != (null == (ref1 = this.source) ? void 0 : ref1.value) && code.push(this.makeCode(" from ".concat(this.source.value))), code.push(this.makeCode(";")), code;
                } }, { key: "checkForAnonymousClassExport", value: function checkForAnonymousClassExport() {
                  if (!(this instanceof ExportDefaultDeclaration) && this.clause instanceof Class && !this.clause.variable)
                    return this.clause.error("anonymous classes cannot be exported");
                } }, { key: "astNode", value: function astNode(o) {
                  return this.checkForAnonymousClassExport(), _get(_getPrototypeOf(ExportDeclaration2.prototype), "astNode", this).call(this, o);
                } }]), ExportDeclaration2;
              }(ModuleDeclaration), exports2.ExportNamedDeclaration = ExportNamedDeclaration = function(_ExportDeclaration) {
                "use strict";
                function ExportNamedDeclaration2() {
                  return _classCallCheck(this, ExportNamedDeclaration2), _possibleConstructorReturn(this, _getPrototypeOf(ExportNamedDeclaration2).apply(this, arguments));
                }
                return _inherits(ExportNamedDeclaration2, _ExportDeclaration), _createClass(ExportNamedDeclaration2, [{ key: "astProperties", value: function astProperties(o) {
                  var clauseAst, ref1, ref2, ret;
                  return ret = { source: null == (ref1 = null == (ref2 = this.source) ? void 0 : ref2.ast(o)) ? null : ref1, exportKind: "value" }, clauseAst = this.clause.ast(o), this.clause instanceof ExportSpecifierList ? (ret.specifiers = clauseAst, ret.declaration = null) : (ret.specifiers = [], ret.declaration = clauseAst), ret;
                } }]), ExportNamedDeclaration2;
              }(ExportDeclaration), exports2.ExportDefaultDeclaration = ExportDefaultDeclaration = function(_ExportDeclaration2) {
                "use strict";
                function ExportDefaultDeclaration2() {
                  return _classCallCheck(this, ExportDefaultDeclaration2), _possibleConstructorReturn(this, _getPrototypeOf(ExportDefaultDeclaration2).apply(this, arguments));
                }
                return _inherits(ExportDefaultDeclaration2, _ExportDeclaration2), _createClass(ExportDefaultDeclaration2, [{ key: "astProperties", value: function astProperties(o) {
                  return { declaration: this.clause.ast(o) };
                } }]), ExportDefaultDeclaration2;
              }(ExportDeclaration), exports2.ExportAllDeclaration = ExportAllDeclaration = function(_ExportDeclaration3) {
                "use strict";
                function ExportAllDeclaration2() {
                  return _classCallCheck(this, ExportAllDeclaration2), _possibleConstructorReturn(this, _getPrototypeOf(ExportAllDeclaration2).apply(this, arguments));
                }
                return _inherits(ExportAllDeclaration2, _ExportDeclaration3), _createClass(ExportAllDeclaration2, [{ key: "astProperties", value: function astProperties(o) {
                  return { source: this.source.ast(o), exportKind: "value" };
                } }]), ExportAllDeclaration2;
              }(ExportDeclaration), exports2.ModuleSpecifierList = ModuleSpecifierList = function() {
                var ModuleSpecifierList2 = function(_Base35) {
                  "use strict";
                  function ModuleSpecifierList3(specifiers) {
                    var _this54;
                    return _classCallCheck(this, ModuleSpecifierList3), _this54 = _possibleConstructorReturn(this, _getPrototypeOf(ModuleSpecifierList3).call(this)), _this54.specifiers = specifiers, _this54;
                  }
                  return _inherits(ModuleSpecifierList3, _Base35), _createClass(ModuleSpecifierList3, [{ key: "compileNode", value: function compileNode(o) {
                    var code, compiledList, fragments, index, j, len1, specifier;
                    if (code = [], o.indent += TAB, compiledList = function() {
                      var j2, len12, ref1, results1;
                      for (ref1 = this.specifiers, results1 = [], j2 = 0, len12 = ref1.length; j2 < len12; j2++)
                        specifier = ref1[j2], results1.push(specifier.compileToFragments(o, LEVEL_LIST));
                      return results1;
                    }.call(this), 0 !== this.specifiers.length) {
                      for (code.push(this.makeCode("{\n".concat(o.indent))), index = j = 0, len1 = compiledList.length; j < len1; index = ++j) {
                        var _code4;
                        fragments = compiledList[index], index && code.push(this.makeCode(",\n".concat(o.indent))), (_code4 = code).push.apply(_code4, _toConsumableArray(fragments));
                      }
                      code.push(this.makeCode("\n}"));
                    } else
                      code.push(this.makeCode("{}"));
                    return code;
                  } }, { key: "astNode", value: function astNode(o) {
                    var j, len1, ref1, results1, specifier;
                    for (ref1 = this.specifiers, results1 = [], j = 0, len1 = ref1.length; j < len1; j++)
                      specifier = ref1[j], results1.push(specifier.ast(o));
                    return results1;
                  } }]), ModuleSpecifierList3;
                }(Base);
                return ModuleSpecifierList2.prototype.children = ["specifiers"], ModuleSpecifierList2;
              }.call(this), exports2.ImportSpecifierList = ImportSpecifierList = function(_ModuleSpecifierList) {
                "use strict";
                function ImportSpecifierList2() {
                  return _classCallCheck(this, ImportSpecifierList2), _possibleConstructorReturn(this, _getPrototypeOf(ImportSpecifierList2).apply(this, arguments));
                }
                return _inherits(ImportSpecifierList2, _ModuleSpecifierList), ImportSpecifierList2;
              }(ModuleSpecifierList), exports2.ExportSpecifierList = ExportSpecifierList = function(_ModuleSpecifierList2) {
                "use strict";
                function ExportSpecifierList2() {
                  return _classCallCheck(this, ExportSpecifierList2), _possibleConstructorReturn(this, _getPrototypeOf(ExportSpecifierList2).apply(this, arguments));
                }
                return _inherits(ExportSpecifierList2, _ModuleSpecifierList2), ExportSpecifierList2;
              }(ModuleSpecifierList), exports2.ModuleSpecifier = ModuleSpecifier = function() {
                var ModuleSpecifier2 = function(_Base36) {
                  "use strict";
                  function ModuleSpecifier3(original, alias, moduleDeclarationType1) {
                    var _this55;
                    _classCallCheck(this, ModuleSpecifier3);
                    var ref1, ref2;
                    if (_this55 = _possibleConstructorReturn(this, _getPrototypeOf(ModuleSpecifier3).call(this)), _this55.original = original, _this55.alias = alias, _this55.moduleDeclarationType = moduleDeclarationType1, _this55.original.comments || (null == (ref1 = _this55.alias) ? void 0 : ref1.comments)) {
                      if (_this55.comments = [], _this55.original.comments) {
                        var _this55$comments;
                        (_this55$comments = _this55.comments).push.apply(_this55$comments, _toConsumableArray(_this55.original.comments));
                      }
                      if (null == (ref2 = _this55.alias) ? void 0 : ref2.comments) {
                        var _this55$comments2;
                        (_this55$comments2 = _this55.comments).push.apply(_this55$comments2, _toConsumableArray(_this55.alias.comments));
                      }
                    }
                    return _this55.identifier = null == _this55.alias ? _this55.original.value : _this55.alias.value, _this55;
                  }
                  return _inherits(ModuleSpecifier3, _Base36), _createClass(ModuleSpecifier3, [{ key: "compileNode", value: function compileNode(o) {
                    var code;
                    return this.addIdentifierToScope(o), code = [], code.push(this.makeCode(this.original.value)), null != this.alias && code.push(this.makeCode(" as ".concat(this.alias.value))), code;
                  } }, { key: "addIdentifierToScope", value: function addIdentifierToScope(o) {
                    return o.scope.find(this.identifier, this.moduleDeclarationType);
                  } }, { key: "astNode", value: function astNode(o) {
                    return this.addIdentifierToScope(o), _get(_getPrototypeOf(ModuleSpecifier3.prototype), "astNode", this).call(this, o);
                  } }]), ModuleSpecifier3;
                }(Base);
                return ModuleSpecifier2.prototype.children = ["original", "alias"], ModuleSpecifier2;
              }.call(this), exports2.ImportSpecifier = ImportSpecifier = function(_ModuleSpecifier) {
                "use strict";
                function ImportSpecifier2(imported, local) {
                  return _classCallCheck(this, ImportSpecifier2), _possibleConstructorReturn(this, _getPrototypeOf(ImportSpecifier2).call(this, imported, local, "import"));
                }
                return _inherits(ImportSpecifier2, _ModuleSpecifier), _createClass(ImportSpecifier2, [{ key: "addIdentifierToScope", value: function addIdentifierToScope(o) {
                  var ref1;
                  return (ref1 = this.identifier, 0 <= indexOf.call(o.importedSymbols, ref1)) || o.scope.check(this.identifier) ? this.error("'".concat(this.identifier, "' has already been declared")) : o.importedSymbols.push(this.identifier), _get(_getPrototypeOf(ImportSpecifier2.prototype), "addIdentifierToScope", this).call(this, o);
                } }, { key: "astProperties", value: function astProperties(o) {
                  var originalAst, ref1, ref2;
                  return originalAst = this.original.ast(o), { imported: originalAst, local: null == (ref1 = null == (ref2 = this.alias) ? void 0 : ref2.ast(o)) ? originalAst : ref1, importKind: null };
                } }]), ImportSpecifier2;
              }(ModuleSpecifier), exports2.ImportDefaultSpecifier = ImportDefaultSpecifier = function(_ImportSpecifier) {
                "use strict";
                function ImportDefaultSpecifier2() {
                  return _classCallCheck(this, ImportDefaultSpecifier2), _possibleConstructorReturn(this, _getPrototypeOf(ImportDefaultSpecifier2).apply(this, arguments));
                }
                return _inherits(ImportDefaultSpecifier2, _ImportSpecifier), _createClass(ImportDefaultSpecifier2, [{ key: "astProperties", value: function astProperties(o) {
                  return { local: this.original.ast(o) };
                } }]), ImportDefaultSpecifier2;
              }(ImportSpecifier), exports2.ImportNamespaceSpecifier = ImportNamespaceSpecifier = function(_ImportSpecifier2) {
                "use strict";
                function ImportNamespaceSpecifier2() {
                  return _classCallCheck(this, ImportNamespaceSpecifier2), _possibleConstructorReturn(this, _getPrototypeOf(ImportNamespaceSpecifier2).apply(this, arguments));
                }
                return _inherits(ImportNamespaceSpecifier2, _ImportSpecifier2), _createClass(ImportNamespaceSpecifier2, [{ key: "astProperties", value: function astProperties(o) {
                  return { local: this.alias.ast(o) };
                } }]), ImportNamespaceSpecifier2;
              }(ImportSpecifier), exports2.ExportSpecifier = ExportSpecifier = function(_ModuleSpecifier2) {
                "use strict";
                function ExportSpecifier2(local, exported) {
                  return _classCallCheck(this, ExportSpecifier2), _possibleConstructorReturn(this, _getPrototypeOf(ExportSpecifier2).call(this, local, exported, "export"));
                }
                return _inherits(ExportSpecifier2, _ModuleSpecifier2), _createClass(ExportSpecifier2, [{ key: "astProperties", value: function astProperties(o) {
                  var originalAst, ref1, ref2;
                  return originalAst = this.original.ast(o), { local: originalAst, exported: null == (ref1 = null == (ref2 = this.alias) ? void 0 : ref2.ast(o)) ? originalAst : ref1 };
                } }]), ExportSpecifier2;
              }(ModuleSpecifier), exports2.DynamicImport = DynamicImport = function(_Base37) {
                "use strict";
                function DynamicImport2() {
                  return _classCallCheck(this, DynamicImport2), _possibleConstructorReturn(this, _getPrototypeOf(DynamicImport2).apply(this, arguments));
                }
                return _inherits(DynamicImport2, _Base37), _createClass(DynamicImport2, [{ key: "compileNode", value: function compileNode() {
                  return [this.makeCode("import")];
                } }, { key: "astType", value: function astType() {
                  return "Import";
                } }]), DynamicImport2;
              }(Base), exports2.DynamicImportCall = DynamicImportCall = function(_Call3) {
                "use strict";
                function DynamicImportCall2() {
                  return _classCallCheck(this, DynamicImportCall2), _possibleConstructorReturn(this, _getPrototypeOf(DynamicImportCall2).apply(this, arguments));
                }
                return _inherits(DynamicImportCall2, _Call3), _createClass(DynamicImportCall2, [{ key: "compileNode", value: function compileNode(o) {
                  return this.checkArguments(), _get(_getPrototypeOf(DynamicImportCall2.prototype), "compileNode", this).call(this, o);
                } }, { key: "checkArguments", value: function checkArguments() {
                  if (1 !== this.args.length)
                    return this.error("import() requires exactly one argument");
                } }, { key: "astNode", value: function astNode(o) {
                  return this.checkArguments(), _get(_getPrototypeOf(DynamicImportCall2.prototype), "astNode", this).call(this, o);
                } }]), DynamicImportCall2;
              }(Call), exports2.Assign = Assign = function() {
                var Assign2 = function(_Base38) {
                  "use strict";
                  function Assign3(variable1, value1, context1) {
                    var options = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {}, _this56;
                    _classCallCheck(this, Assign3), _this56 = _possibleConstructorReturn(this, _getPrototypeOf(Assign3).call(this)), _this56.variable = variable1, _this56.value = value1, _this56.context = context1, _this56.param = options.param, _this56.subpattern = options.subpattern, _this56.operatorToken = options.operatorToken, _this56.moduleDeclaration = options.moduleDeclaration;
                    var _options$originalCont = options.originalContext;
                    return _this56.originalContext = void 0 === _options$originalCont ? _this56.context : _options$originalCont, _this56.propagateLhs(), _this56;
                  }
                  return _inherits(Assign3, _Base38), _createClass(Assign3, [{ key: "isStatement", value: function isStatement(o) {
                    return (null == o ? void 0 : o.level) === LEVEL_TOP && null != this.context && (this.moduleDeclaration || 0 <= indexOf.call(this.context, "?"));
                  } }, { key: "checkNameAssignability", value: function checkNameAssignability(o, varBase) {
                    if ("import" === o.scope.type(varBase.value))
                      return varBase.error("'".concat(varBase.value, "' is read-only"));
                  } }, { key: "assigns", value: function assigns(name) {
                    return this["object" === this.context ? "value" : "variable"].assigns(name);
                  } }, { key: "unfoldSoak", value: function unfoldSoak(o) {
                    return _unfoldSoak(o, this, "variable");
                  } }, { key: "addScopeVariables", value: function addScopeVariables(o) {
                    var _this57 = this, _ref46 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, _ref46$allowAssignmen = _ref46.allowAssignmentToExpansion, _ref46$allowAssignmen2 = _ref46.allowAssignmentToNontrailingSplat, _ref46$allowAssignmen3 = _ref46.allowAssignmentToEmptyArray, _ref46$allowAssignmen4 = _ref46.allowAssignmentToComplexSplat, varBase;
                    if (!(this.context && "**=" !== this.context))
                      return varBase = this.variable.unwrapAll(), varBase.isAssignable({ allowExpansion: void 0 !== _ref46$allowAssignmen && _ref46$allowAssignmen, allowNontrailingSplat: void 0 !== _ref46$allowAssignmen2 && _ref46$allowAssignmen2, allowEmptyArray: void 0 !== _ref46$allowAssignmen3 && _ref46$allowAssignmen3, allowComplexSplat: void 0 !== _ref46$allowAssignmen4 && _ref46$allowAssignmen4 }) || this.variable.error("'".concat(this.variable.compile(o), "' can't be assigned")), varBase.eachName(function(name) {
                        var alreadyDeclared, commentFragments, commentsNode, message;
                        if ("function" != typeof name.hasProperties || !name.hasProperties())
                          return (message = isUnassignable(name.value), message && name.error(message), _this57.checkNameAssignability(o, name), _this57.moduleDeclaration) ? (o.scope.add(name.value, _this57.moduleDeclaration), name.isDeclaration = true) : _this57.param ? o.scope.add(name.value, "alwaysDeclare" === _this57.param ? "var" : "param") : (alreadyDeclared = o.scope.find(name.value), null == name.isDeclaration && (name.isDeclaration = !alreadyDeclared), name.comments && !o.scope.comments[name.value] && !(_this57.value instanceof Class) && name.comments.every(function(comment) {
                            return comment.here && !comment.multiline;
                          })) ? (commentsNode = new IdentifierLiteral(name.value), commentsNode.comments = name.comments, commentFragments = [], _this57.compileCommentFragments(o, commentsNode, commentFragments), o.scope.comments[name.value] = commentFragments) : void 0;
                      });
                  } }, { key: "compileNode", value: function compileNode(o) {
                    var answer, compiledName, isValue, name, properties, prototype, ref1, ref2, ref3, ref4, val;
                    if (isValue = this.variable instanceof Value, isValue) {
                      if ((this.variable.isArray() || this.variable.isObject()) && !this.variable.isAssignable())
                        return this.variable.isObject() && this.variable.base.hasSplat() ? this.compileObjectDestruct(o) : this.compileDestructuring(o);
                      if (this.variable.isSplice())
                        return this.compileSplice(o);
                      if (this.isConditional())
                        return this.compileConditional(o);
                      if ("//=" === (ref1 = this.context) || "%%=" === ref1)
                        return this.compileSpecialMath(o);
                    }
                    if (this.addScopeVariables(o), this.value instanceof Code) {
                      if (this.value.isStatic)
                        this.value.name = this.variable.properties[0];
                      else if (2 <= (null == (ref2 = this.variable.properties) ? void 0 : ref2.length)) {
                        var _ref47, _ref48, _splice$call, _splice$call2;
                        ref3 = this.variable.properties, _ref47 = ref3, _ref48 = _toArray(_ref47), properties = _ref48.slice(0), _ref47, _splice$call = splice.call(properties, -2), _splice$call2 = _slicedToArray(_splice$call, 2), prototype = _splice$call2[0], name = _splice$call2[1], _splice$call, "prototype" === (null == (ref4 = prototype.name) ? void 0 : ref4.value) && (this.value.name = name);
                      }
                    }
                    return (val = this.value.compileToFragments(o, LEVEL_LIST), compiledName = this.variable.compileToFragments(o, LEVEL_LIST), "object" === this.context) ? (this.variable.shouldCache() && (compiledName.unshift(this.makeCode("[")), compiledName.push(this.makeCode("]"))), compiledName.concat(this.makeCode(": "), val)) : (answer = compiledName.concat(this.makeCode(" ".concat(this.context || "=", " ")), val), o.level > LEVEL_LIST || isValue && this.variable.base instanceof Obj && !this.nestedLhs && true !== this.param ? this.wrapInParentheses(answer) : answer);
                  } }, { key: "compileObjectDestruct", value: function compileObjectDestruct(o) {
                    var assigns, props, refVal, splat, splatProp;
                    this.variable.base.reorderProperties(), props = this.variable.base.properties;
                    var _slice1$call15 = slice1.call(props, -1), _slice1$call16 = _slicedToArray(_slice1$call15, 1);
                    return splat = _slice1$call16[0], splatProp = splat.name, assigns = [], refVal = new Value(new IdentifierLiteral(o.scope.freeVariable("ref"))), props.splice(-1, 1, new Splat(refVal)), assigns.push(new Assign3(new Value(new Obj(props)), this.value).compileToFragments(o, LEVEL_LIST)), assigns.push(new Assign3(new Value(splatProp), refVal).compileToFragments(o, LEVEL_LIST)), this.joinFragmentArrays(assigns, ", ");
                  } }, { key: "compileDestructuring", value: function compileDestructuring(o) {
                    var _this58 = this, assignObjects, assigns, code, compSlice, compSplice, complexObjects, expIdx, expans, fragments, hasObjAssigns, isExpans, isSplat, leftObjs, loopObjects, obj, objIsUnassignable, objects, olen, processObjects, pushAssign, ref, refExp, restVar, rightObjs, slicer, splatVar, splatVarAssign, splatVarRef, splats, splatsAndExpans, top, value, vvar, vvarText;
                    if (top = o.level === LEVEL_TOP, value = this.value, objects = this.variable.base.objects, olen = objects.length, 0 === olen)
                      return code = value.compileToFragments(o), o.level >= LEVEL_OP ? this.wrapInParentheses(code) : code;
                    var _objects = objects, _objects2 = _slicedToArray(_objects, 1);
                    obj = _objects2[0], this.disallowLoneExpansion();
                    var _this$getAndCheckSpla = this.getAndCheckSplatsAndExpansions();
                    return splats = _this$getAndCheckSpla.splats, expans = _this$getAndCheckSpla.expans, splatsAndExpans = _this$getAndCheckSpla.splatsAndExpans, isSplat = 0 < (null == splats ? void 0 : splats.length), isExpans = 0 < (null == expans ? void 0 : expans.length), vvar = value.compileToFragments(o, LEVEL_LIST), vvarText = fragmentsToText(vvar), assigns = [], pushAssign = function(variable, val) {
                      return assigns.push(new Assign3(variable, val, null, { param: _this58.param, subpattern: true }).compileToFragments(o, LEVEL_LIST));
                    }, isSplat && (splatVar = objects[splats[0]].name.unwrap(), (splatVar instanceof Arr || splatVar instanceof Obj) && (splatVarRef = new IdentifierLiteral(o.scope.freeVariable("ref")), objects[splats[0]].name = splatVarRef, splatVarAssign = function() {
                      return pushAssign(new Value(splatVar), splatVarRef);
                    })), (!(value.unwrap() instanceof IdentifierLiteral) || this.variable.assigns(vvarText)) && (ref = o.scope.freeVariable("ref"), assigns.push([this.makeCode(ref + " = ")].concat(_toConsumableArray(vvar))), vvar = [this.makeCode(ref)], vvarText = ref), slicer = function(type) {
                      return function(vvar2, start) {
                        var end = !!(2 < arguments.length && void 0 !== arguments[2]) && arguments[2], args, slice;
                        return vvar2 instanceof Value || (vvar2 = new IdentifierLiteral(vvar2)), args = [vvar2, new NumberLiteral(start)], end && args.push(new NumberLiteral(end)), slice = new Value(new IdentifierLiteral(utility(type, o)), [new Access(new PropertyName("call"))]), new Value(new Call(slice, args));
                      };
                    }, compSlice = slicer("slice"), compSplice = slicer("splice"), hasObjAssigns = function(objs) {
                      var i, j, len1, results1;
                      for (results1 = [], i = j = 0, len1 = objs.length; j < len1; i = ++j)
                        obj = objs[i], obj instanceof Assign3 && "object" === obj.context && results1.push(i);
                      return results1;
                    }, objIsUnassignable = function(objs) {
                      var j, len1;
                      for (j = 0, len1 = objs.length; j < len1; j++)
                        if (obj = objs[j], !obj.isAssignable())
                          return true;
                      return false;
                    }, complexObjects = function(objs) {
                      return hasObjAssigns(objs).length || objIsUnassignable(objs) || 1 === olen;
                    }, loopObjects = function(objs, vvar2, vvarTxt) {
                      var acc, i, idx, j, len1, message, results1, vval;
                      for (results1 = [], i = j = 0, len1 = objs.length; j < len1; i = ++j)
                        if (obj = objs[i], !(obj instanceof Elision)) {
                          if (obj instanceof Assign3 && "object" === obj.context) {
                            var _obj = obj;
                            if (idx = _obj.variable.base, vvar2 = _obj.value, vvar2 instanceof Assign3) {
                              var _vvar = vvar2;
                              vvar2 = _vvar.variable;
                            }
                            idx = vvar2["this"] ? vvar2.properties[0].name : new PropertyName(vvar2.unwrap().value), acc = idx.unwrap() instanceof PropertyName, vval = new Value(value, [new (acc ? Access : Index)(idx)]);
                          } else
                            vvar2 = function() {
                              switch (false) {
                                case !(obj instanceof Splat):
                                  return new Value(obj.name);
                                default:
                                  return obj;
                              }
                            }(), vval = function() {
                              switch (false) {
                                case !(obj instanceof Splat):
                                  return compSlice(vvarTxt, i);
                                default:
                                  return new Value(new Literal(vvarTxt), [new Index(new NumberLiteral(i))]);
                              }
                            }();
                          message = isUnassignable(vvar2.unwrap().value), message && vvar2.error(message), results1.push(pushAssign(vvar2, vval));
                        }
                      return results1;
                    }, assignObjects = function(objs, vvar2, vvarTxt) {
                      var vval;
                      return vvar2 = new Value(new Arr(objs, true)), vval = vvarTxt instanceof Value ? vvarTxt : new Value(new Literal(vvarTxt)), pushAssign(vvar2, vval);
                    }, processObjects = function(objs, vvar2, vvarTxt) {
                      return complexObjects(objs) ? loopObjects(objs, vvar2, vvarTxt) : assignObjects(objs, vvar2, vvarTxt);
                    }, splatsAndExpans.length ? (expIdx = splatsAndExpans[0], leftObjs = objects.slice(0, expIdx + (isSplat ? 1 : 0)), rightObjs = objects.slice(expIdx + 1), 0 !== leftObjs.length && processObjects(leftObjs, vvar, vvarText), 0 !== rightObjs.length && (refExp = function() {
                      switch (false) {
                        case !isSplat:
                          return compSplice(new Value(objects[expIdx].name), -1 * rightObjs.length);
                        case !isExpans:
                          return compSlice(vvarText, -1 * rightObjs.length);
                      }
                    }(), complexObjects(rightObjs) && (restVar = refExp, refExp = o.scope.freeVariable("ref"), assigns.push([this.makeCode(refExp + " = ")].concat(_toConsumableArray(restVar.compileToFragments(o, LEVEL_LIST))))), processObjects(rightObjs, vvar, refExp))) : processObjects(objects, vvar, vvarText), "function" == typeof splatVarAssign && splatVarAssign(), top || this.subpattern || assigns.push(vvar), fragments = this.joinFragmentArrays(assigns, ", "), o.level < LEVEL_LIST ? fragments : this.wrapInParentheses(fragments);
                  } }, { key: "disallowLoneExpansion", value: function disallowLoneExpansion() {
                    var loneObject, objects;
                    if (this.variable.base instanceof Arr && (objects = this.variable.base.objects, 1 === (null == objects ? void 0 : objects.length))) {
                      var _objects3 = objects, _objects4 = _slicedToArray(_objects3, 1);
                      if (loneObject = _objects4[0], loneObject instanceof Expansion)
                        return loneObject.error("Destructuring assignment has no target");
                    }
                  } }, { key: "getAndCheckSplatsAndExpansions", value: function getAndCheckSplatsAndExpansions() {
                    var expans, i, obj, objects, splats, splatsAndExpans;
                    return this.variable.base instanceof Arr ? (objects = this.variable.base.objects, splats = function() {
                      var j, len1, results1;
                      for (results1 = [], i = j = 0, len1 = objects.length; j < len1; i = ++j)
                        obj = objects[i], obj instanceof Splat && results1.push(i);
                      return results1;
                    }(), expans = function() {
                      var j, len1, results1;
                      for (results1 = [], i = j = 0, len1 = objects.length; j < len1; i = ++j)
                        obj = objects[i], obj instanceof Expansion && results1.push(i);
                      return results1;
                    }(), splatsAndExpans = [].concat(_toConsumableArray(splats), _toConsumableArray(expans)), 1 < splatsAndExpans.length && objects[splatsAndExpans.sort()[1]].error("multiple splats/expansions are disallowed in an assignment"), { splats, expans, splatsAndExpans }) : { splats: [], expans: [], splatsAndExpans: [] };
                  } }, { key: "compileConditional", value: function compileConditional(o) {
                    var _this$variable$cacheR = this.variable.cacheReference(o), _this$variable$cacheR2 = _slicedToArray(_this$variable$cacheR, 2), fragments, left, right;
                    return left = _this$variable$cacheR2[0], right = _this$variable$cacheR2[1], left.properties.length || !(left.base instanceof Literal) || left.base instanceof ThisLiteral || o.scope.check(left.base.value) || this.throwUnassignableConditionalError(left.base.value), 0 <= indexOf.call(this.context, "?") ? (o.isExistentialEquals = true, new If(new Existence(left), right, { type: "if" }).addElse(new Assign3(right, this.value, "=")).compileToFragments(o)) : (fragments = new Op(this.context.slice(0, -1), left, new Assign3(right, this.value, "=")).compileToFragments(o), o.level <= LEVEL_LIST ? fragments : this.wrapInParentheses(fragments));
                  } }, { key: "compileSpecialMath", value: function compileSpecialMath(o) {
                    var _this$variable$cacheR3 = this.variable.cacheReference(o), _this$variable$cacheR4 = _slicedToArray(_this$variable$cacheR3, 2), left, right;
                    return left = _this$variable$cacheR4[0], right = _this$variable$cacheR4[1], new Assign3(left, new Op(this.context.slice(0, -1), right, this.value)).compileToFragments(o);
                  } }, { key: "compileSplice", value: function compileSplice(o) {
                    var _this$variable$proper = this.variable.properties.pop(), _this$variable$proper2 = _this$variable$proper.range, answer, exclusive, from, fromDecl, fromRef, name, to, unwrappedVar, valDef, valRef;
                    if (from = _this$variable$proper2.from, to = _this$variable$proper2.to, exclusive = _this$variable$proper2.exclusive, unwrappedVar = this.variable.unwrapAll(), unwrappedVar.comments && (moveComments(unwrappedVar, this), delete this.variable.comments), name = this.variable.compile(o), from) {
                      var _this$cacheToCodeFrag7 = this.cacheToCodeFragments(from.cache(o, LEVEL_OP)), _this$cacheToCodeFrag8 = _slicedToArray(_this$cacheToCodeFrag7, 2);
                      fromDecl = _this$cacheToCodeFrag8[0], fromRef = _this$cacheToCodeFrag8[1];
                    } else
                      fromDecl = fromRef = "0";
                    to ? (null == from ? void 0 : from.isNumber()) && to.isNumber() ? (to = to.compile(o) - fromRef, !exclusive && (to += 1)) : (to = to.compile(o, LEVEL_ACCESS) + " - " + fromRef, !exclusive && (to += " + 1")) : to = "9e9";
                    var _this$value$cache = this.value.cache(o, LEVEL_LIST), _this$value$cache2 = _slicedToArray(_this$value$cache, 2);
                    return valDef = _this$value$cache2[0], valRef = _this$value$cache2[1], answer = [].concat(this.makeCode("".concat(utility("splice", o), ".apply(").concat(name, ", [").concat(fromDecl, ", ").concat(to, "].concat(")), valDef, this.makeCode(")), "), valRef), o.level > LEVEL_TOP ? this.wrapInParentheses(answer) : answer;
                  } }, { key: "eachName", value: function eachName(iterator) {
                    return this.variable.unwrapAll().eachName(iterator);
                  } }, { key: "isDefaultAssignment", value: function isDefaultAssignment() {
                    return this.param || this.nestedLhs;
                  } }, { key: "propagateLhs", value: function propagateLhs() {
                    var ref1, ref2;
                    return (null == (ref1 = this.variable) ? void 0 : "function" == typeof ref1.isArray ? ref1.isArray() : void 0) || (null == (ref2 = this.variable) ? void 0 : "function" == typeof ref2.isObject ? ref2.isObject() : void 0) ? this.variable.base.propagateLhs(true) : void 0;
                  } }, { key: "throwUnassignableConditionalError", value: function throwUnassignableConditionalError(name) {
                    return this.variable.error('the variable "'.concat(name, `" can't be assigned with `).concat(this.context, " because it has not been declared before"));
                  } }, { key: "isConditional", value: function isConditional() {
                    var ref1;
                    return "||=" === (ref1 = this.context) || "&&=" === ref1 || "?=" === ref1;
                  } }, { key: "astNode", value: function astNode(o) {
                    var variable;
                    return this.disallowLoneExpansion(), this.getAndCheckSplatsAndExpansions(), this.isConditional() && (variable = this.variable.unwrap(), variable instanceof IdentifierLiteral && !o.scope.check(variable.value) && this.throwUnassignableConditionalError(variable.value)), this.addScopeVariables(o, { allowAssignmentToExpansion: true, allowAssignmentToNontrailingSplat: true, allowAssignmentToEmptyArray: true, allowAssignmentToComplexSplat: true }), _get(_getPrototypeOf(Assign3.prototype), "astNode", this).call(this, o);
                  } }, { key: "astType", value: function astType() {
                    return this.isDefaultAssignment() ? "AssignmentPattern" : "AssignmentExpression";
                  } }, { key: "astProperties", value: function astProperties(o) {
                    var ref1, ret;
                    return ret = { right: this.value.ast(o, LEVEL_LIST), left: this.variable.ast(o, LEVEL_LIST) }, this.isDefaultAssignment() || (ret.operator = null == (ref1 = this.originalContext) ? "=" : ref1), ret;
                  } }]), Assign3;
                }(Base);
                return Assign2.prototype.children = ["variable", "value"], Assign2.prototype.isAssignable = YES, Assign2.prototype.isStatementAst = NO, Assign2;
              }.call(this), exports2.FuncGlyph = FuncGlyph = function(_Base39) {
                "use strict";
                function FuncGlyph2(glyph) {
                  var _this59;
                  return _classCallCheck(this, FuncGlyph2), _this59 = _possibleConstructorReturn(this, _getPrototypeOf(FuncGlyph2).call(this)), _this59.glyph = glyph, _this59;
                }
                return _inherits(FuncGlyph2, _Base39), FuncGlyph2;
              }(Base), exports2.Code = Code = function() {
                var Code2 = function(_Base40) {
                  "use strict";
                  function Code3(params, body, funcGlyph, paramStart) {
                    var _this60;
                    _classCallCheck(this, Code3);
                    var ref1;
                    return _this60 = _possibleConstructorReturn(this, _getPrototypeOf(Code3).call(this)), _this60.funcGlyph = funcGlyph, _this60.paramStart = paramStart, _this60.params = params || [], _this60.body = body || new Block(), _this60.bound = "=>" === (null == (ref1 = _this60.funcGlyph) ? void 0 : ref1.glyph), _this60.isGenerator = false, _this60.isAsync = false, _this60.isMethod = false, _this60.body.traverseChildren(false, function(node) {
                      if ((node instanceof Op && node.isYield() || node instanceof YieldReturn) && (_this60.isGenerator = true), (node instanceof Op && node.isAwait() || node instanceof AwaitReturn) && (_this60.isAsync = true), node instanceof For && node.isAwait())
                        return _this60.isAsync = true;
                    }), _this60.propagateLhs(), _this60;
                  }
                  return _inherits(Code3, _Base40), _createClass(Code3, [{ key: "isStatement", value: function isStatement() {
                    return this.isMethod;
                  } }, { key: "makeScope", value: function makeScope(parentScope) {
                    return new Scope(parentScope, this.body, this);
                  } }, { key: "compileNode", value: function compileNode(o) {
                    var _this$body$expression3, _answer4, answer, body, boundMethodCheck, comment, condition, exprs, generatedVariables, haveBodyParam, haveSplatParam, i, ifTrue, j, k, l, len1, len2, len3, m, methodScope, modifiers, name, param, paramToAddToScope, params, paramsAfterSplat, ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, scopeVariablesCount, signature, splatParamName, thisAssignments, wasEmpty, yieldNode;
                    for (this.checkForAsyncOrGeneratorConstructor(), this.bound && ((null == (ref1 = o.scope.method) ? void 0 : ref1.bound) && (this.context = o.scope.method.context), !this.context && (this.context = "this")), this.updateOptions(o), params = [], exprs = [], thisAssignments = null == (ref2 = null == (ref3 = this.thisAssignments) ? void 0 : ref3.slice()) ? [] : ref2, paramsAfterSplat = [], haveSplatParam = false, haveBodyParam = false, this.checkForDuplicateParams(), this.disallowLoneExpansionAndMultipleSplats(), this.eachParamName(function(name2, node, param2, obj) {
                      var replacement, target;
                      if (node["this"])
                        return name2 = node.properties[0].name.value, 0 <= indexOf.call(JS_FORBIDDEN, name2) && (name2 = "_".concat(name2)), target = new IdentifierLiteral(o.scope.freeVariable(name2, { reserve: false })), replacement = param2.name instanceof Obj && obj instanceof Assign && "=" === obj.operatorToken.value ? new Assign(new IdentifierLiteral(name2), target, "object") : target, param2.renameParam(node, replacement), thisAssignments.push(new Assign(node, target));
                    }), ref4 = this.params, i = j = 0, len1 = ref4.length; j < len1; i = ++j)
                      param = ref4[i], param.splat || param instanceof Expansion ? (haveSplatParam = true, param.splat ? (param.name instanceof Arr || param.name instanceof Obj ? (splatParamName = o.scope.freeVariable("arg"), params.push(ref = new Value(new IdentifierLiteral(splatParamName))), exprs.push(new Assign(new Value(param.name), ref))) : (params.push(ref = param.asReference(o)), splatParamName = fragmentsToText(ref.compileNodeWithoutComments(o))), param.shouldCache() && exprs.push(new Assign(new Value(param.name), ref))) : (splatParamName = o.scope.freeVariable("args"), params.push(new Value(new IdentifierLiteral(splatParamName)))), o.scope.parameter(splatParamName)) : ((param.shouldCache() || haveBodyParam) && (param.assignedInBody = true, haveBodyParam = true, null == param.value ? exprs.push(new Assign(new Value(param.name), param.asReference(o), null, { param: "alwaysDeclare" })) : (condition = new Op("===", param, new UndefinedLiteral()), ifTrue = new Assign(new Value(param.name), param.value), exprs.push(new If(condition, ifTrue)))), haveSplatParam ? (paramsAfterSplat.push(param), null != param.value && !param.shouldCache() && (condition = new Op("===", param, new UndefinedLiteral()), ifTrue = new Assign(new Value(param.name), param.value), exprs.push(new If(condition, ifTrue))), null != (null == (ref5 = param.name) ? void 0 : ref5.value) && o.scope.add(param.name.value, "var", true)) : (ref = param.shouldCache() ? param.asReference(o) : null == param.value || param.assignedInBody ? param : new Assign(new Value(param.name), param.value, null, { param: true }), param.name instanceof Arr || param.name instanceof Obj ? (param.name.lhs = true, !param.shouldCache() && param.name.eachName(function(prop) {
                        return o.scope.parameter(prop.value);
                      })) : (paramToAddToScope = null == param.value ? ref : param, o.scope.parameter(fragmentsToText(paramToAddToScope.compileToFragmentsWithoutComments(o)))), params.push(ref)));
                    if (0 !== paramsAfterSplat.length && exprs.unshift(new Assign(new Value(new Arr([new Splat(new IdentifierLiteral(splatParamName))].concat(_toConsumableArray(function() {
                      var k2, len22, results1;
                      for (results1 = [], k2 = 0, len22 = paramsAfterSplat.length; k2 < len22; k2++)
                        param = paramsAfterSplat[k2], results1.push(param.asReference(o));
                      return results1;
                    }())))), new Value(new IdentifierLiteral(splatParamName)))), wasEmpty = this.body.isEmpty(), this.disallowSuperInParamDefaults(), this.checkSuperCallsInConstructorBody(), !this.expandCtorSuper(thisAssignments)) {
                      var _this$body$expression2;
                      (_this$body$expression2 = this.body.expressions).unshift.apply(_this$body$expression2, _toConsumableArray(thisAssignments));
                    }
                    for ((_this$body$expression3 = this.body.expressions).unshift.apply(_this$body$expression3, _toConsumableArray(exprs)), this.isMethod && this.bound && !this.isStatic && this.classVariable && (boundMethodCheck = new Value(new Literal(utility("boundMethodCheck", o))), this.body.expressions.unshift(new Call(boundMethodCheck, [new Value(new ThisLiteral()), this.classVariable]))), wasEmpty || this.noReturn || this.body.makeReturn(), this.bound && this.isGenerator && (yieldNode = this.body.contains(function(node) {
                      return node instanceof Op && "yield" === node.operator;
                    }), (yieldNode || this).error("yield cannot occur inside bound (fat arrow) functions")), modifiers = [], this.isMethod && this.isStatic && modifiers.push("static"), this.isAsync && modifiers.push("async"), this.isMethod || this.bound ? this.isGenerator && modifiers.push("*") : modifiers.push("function".concat(this.isGenerator ? "*" : "")), signature = [this.makeCode("(")], null != (null == (ref6 = this.paramStart) ? void 0 : ref6.comments) && this.compileCommentFragments(o, this.paramStart, signature), i = k = 0, len2 = params.length; k < len2; i = ++k) {
                      var _signature;
                      if (param = params[i], 0 !== i && signature.push(this.makeCode(", ")), haveSplatParam && i === params.length - 1 && signature.push(this.makeCode("...")), scopeVariablesCount = o.scope.variables.length, (_signature = signature).push.apply(_signature, _toConsumableArray(param.compileToFragments(o, LEVEL_PAREN))), scopeVariablesCount !== o.scope.variables.length) {
                        var _o$scope$parent$varia;
                        generatedVariables = o.scope.variables.splice(scopeVariablesCount), (_o$scope$parent$varia = o.scope.parent.variables).push.apply(_o$scope$parent$varia, _toConsumableArray(generatedVariables));
                      }
                    }
                    if (signature.push(this.makeCode(")")), null != (null == (ref7 = this.funcGlyph) ? void 0 : ref7.comments)) {
                      for (ref8 = this.funcGlyph.comments, l = 0, len3 = ref8.length; l < len3; l++)
                        comment = ref8[l], comment.unshift = false;
                      this.compileCommentFragments(o, this.funcGlyph, signature);
                    }
                    if (this.body.isEmpty() || (body = this.body.compileWithDeclarations(o)), this.isMethod) {
                      var _ref49 = [o.scope, o.scope.parent];
                      methodScope = _ref49[0], o.scope = _ref49[1], name = this.name.compileToFragments(o), "." === name[0].code && name.shift(), o.scope = methodScope;
                    }
                    if (answer = this.joinFragmentArrays(function() {
                      var len4, p, results1;
                      for (results1 = [], p = 0, len4 = modifiers.length; p < len4; p++)
                        m = modifiers[p], results1.push(this.makeCode(m));
                      return results1;
                    }.call(this), " "), modifiers.length && name && answer.push(this.makeCode(" ")), name) {
                      var _answer3;
                      (_answer3 = answer).push.apply(_answer3, _toConsumableArray(name));
                    }
                    if ((_answer4 = answer).push.apply(_answer4, _toConsumableArray(signature)), this.bound && !this.isMethod && answer.push(this.makeCode(" =>")), answer.push(this.makeCode(" {")), null == body ? void 0 : body.length) {
                      var _answer5;
                      (_answer5 = answer).push.apply(_answer5, [this.makeCode("\n")].concat(_toConsumableArray(body), [this.makeCode("\n".concat(this.tab))]));
                    }
                    return answer.push(this.makeCode("}")), this.isMethod ? indentInitial(answer, this) : this.front || o.level >= LEVEL_ACCESS ? this.wrapInParentheses(answer) : answer;
                  } }, { key: "updateOptions", value: function updateOptions(o) {
                    return o.scope = del(o, "classScope") || this.makeScope(o.scope), o.scope.shared = del(o, "sharedScope"), o.indent += TAB, delete o.bare, delete o.isExistentialEquals;
                  } }, { key: "checkForDuplicateParams", value: function checkForDuplicateParams() {
                    var paramNames;
                    return paramNames = [], this.eachParamName(function(name, node) {
                      return 0 <= indexOf.call(paramNames, name) && node.error("multiple parameters named '".concat(name, "'")), paramNames.push(name);
                    });
                  } }, { key: "eachParamName", value: function eachParamName(iterator) {
                    var j, len1, param, ref1, results1;
                    for (ref1 = this.params, results1 = [], j = 0, len1 = ref1.length; j < len1; j++)
                      param = ref1[j], results1.push(param.eachName(iterator));
                    return results1;
                  } }, { key: "traverseChildren", value: function traverseChildren(crossScope, func) {
                    if (crossScope)
                      return _get(_getPrototypeOf(Code3.prototype), "traverseChildren", this).call(this, crossScope, func);
                  } }, { key: "replaceInContext", value: function replaceInContext(child, replacement) {
                    return !!this.bound && _get(_getPrototypeOf(Code3.prototype), "replaceInContext", this).call(this, child, replacement);
                  } }, { key: "disallowSuperInParamDefaults", value: function disallowSuperInParamDefaults() {
                    var _ref50 = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, forAst = _ref50.forAst;
                    return !!this.ctor && this.eachSuperCall(Block.wrap(this.params), function(superCall) {
                      return superCall.error("'super' is not allowed in constructor parameter defaults");
                    }, { checkForThisBeforeSuper: !forAst });
                  } }, { key: "checkSuperCallsInConstructorBody", value: function checkSuperCallsInConstructorBody() {
                    var _this61 = this, seenSuper;
                    return !!this.ctor && (seenSuper = this.eachSuperCall(this.body, function(superCall) {
                      if ("base" === _this61.ctor)
                        return superCall.error("'super' is only allowed in derived class constructors");
                    }), seenSuper);
                  } }, { key: "flagThisParamInDerivedClassConstructorWithoutCallingSuper", value: function flagThisParamInDerivedClassConstructorWithoutCallingSuper(param) {
                    return param.error("Can't use @params in derived class constructors without calling super");
                  } }, { key: "checkForAsyncOrGeneratorConstructor", value: function checkForAsyncOrGeneratorConstructor() {
                    if (this.ctor && (this.isAsync && this.name.error("Class constructor may not be async"), this.isGenerator))
                      return this.name.error("Class constructor may not be a generator");
                  } }, { key: "disallowLoneExpansionAndMultipleSplats", value: function disallowLoneExpansionAndMultipleSplats() {
                    var j, len1, param, ref1, results1, seenSplatParam;
                    for (seenSplatParam = false, ref1 = this.params, results1 = [], j = 0, len1 = ref1.length; j < len1; j++)
                      param = ref1[j], param.splat || param instanceof Expansion ? (seenSplatParam ? param.error("only one splat or expansion parameter is allowed per function definition") : param instanceof Expansion && 1 === this.params.length && param.error("an expansion parameter cannot be the only parameter in a function definition"), results1.push(seenSplatParam = true)) : results1.push(void 0);
                    return results1;
                  } }, { key: "expandCtorSuper", value: function expandCtorSuper(thisAssignments) {
                    var haveThisParam, param, ref1, seenSuper;
                    return !!this.ctor && (seenSuper = this.eachSuperCall(this.body, function(superCall) {
                      return superCall.expressions = thisAssignments;
                    }), haveThisParam = thisAssignments.length && thisAssignments.length !== (null == (ref1 = this.thisAssignments) ? void 0 : ref1.length), "derived" === this.ctor && !seenSuper && haveThisParam && (param = thisAssignments[0].variable, this.flagThisParamInDerivedClassConstructorWithoutCallingSuper(param)), seenSuper);
                  } }, { key: "eachSuperCall", value: function eachSuperCall(context, iterator) {
                    var _this62 = this, _ref51 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, _ref51$checkForThisBe = _ref51.checkForThisBeforeSuper, seenSuper;
                    return seenSuper = false, context.traverseChildren(true, function(child) {
                      var childArgs;
                      return child instanceof SuperCall ? (!child.variable.accessor && (childArgs = child.args.filter(function(arg) {
                        return !(arg instanceof Class) && (!(arg instanceof Code3) || arg.bound);
                      }), Block.wrap(childArgs).traverseChildren(true, function(node) {
                        if (node["this"])
                          return node.error("Can't call super with @params in derived class constructors");
                      })), seenSuper = true, iterator(child)) : (void 0 === _ref51$checkForThisBe || _ref51$checkForThisBe) && child instanceof ThisLiteral && "derived" === _this62.ctor && !seenSuper && child.error("Can't reference 'this' before calling super in derived class constructors"), !(child instanceof SuperCall) && (!(child instanceof Code3) || child.bound);
                    }), seenSuper;
                  } }, { key: "propagateLhs", value: function propagateLhs() {
                    var j, len1, name, param, ref1, results1;
                    for (ref1 = this.params, results1 = [], j = 0, len1 = ref1.length; j < len1; j++) {
                      param = ref1[j];
                      var _param = param;
                      name = _param.name, name instanceof Arr || name instanceof Obj ? results1.push(name.propagateLhs(true)) : param instanceof Expansion ? results1.push(param.lhs = true) : results1.push(void 0);
                    }
                    return results1;
                  } }, { key: "astAddParamsToScope", value: function astAddParamsToScope(o) {
                    return this.eachParamName(function(name) {
                      return o.scope.add(name, "param");
                    });
                  } }, { key: "astNode", value: function astNode(o) {
                    var _this63 = this, seenSuper;
                    return this.updateOptions(o), this.checkForAsyncOrGeneratorConstructor(), this.checkForDuplicateParams(), this.disallowSuperInParamDefaults({ forAst: true }), this.disallowLoneExpansionAndMultipleSplats(), seenSuper = this.checkSuperCallsInConstructorBody(), "derived" !== this.ctor || seenSuper || this.eachParamName(function(name, node) {
                      if (node["this"])
                        return _this63.flagThisParamInDerivedClassConstructorWithoutCallingSuper(node);
                    }), this.astAddParamsToScope(o), this.body.isEmpty() || this.noReturn || this.body.makeReturn(null, true), _get(_getPrototypeOf(Code3.prototype), "astNode", this).call(this, o);
                  } }, { key: "astType", value: function astType() {
                    return this.isMethod ? "ClassMethod" : this.bound ? "ArrowFunctionExpression" : "FunctionExpression";
                  } }, { key: "paramForAst", value: function paramForAst(param) {
                    var name, splat, value;
                    return param instanceof Expansion ? param : (name = param.name, value = param.value, splat = param.splat, splat ? new Splat(name, { lhs: true, postfix: splat.postfix }).withLocationDataFrom(param) : null == value ? name : new Assign(name, value, null, { param: true }).withLocationDataFrom({ locationData: mergeLocationData(name.locationData, value.locationData) }));
                  } }, { key: "methodAstProperties", value: function methodAstProperties(o) {
                    var _this64 = this, getIsComputed, ref1, ref2, ref3, ref4;
                    return getIsComputed = function() {
                      return !!(_this64.name instanceof Index) || !!(_this64.name instanceof ComputedPropertyName) || !!(_this64.name.name instanceof ComputedPropertyName);
                    }, { static: !!this.isStatic, key: this.name.ast(o), computed: getIsComputed(), kind: this.ctor ? "constructor" : "method", operator: null == (ref1 = null == (ref2 = this.operatorToken) ? void 0 : ref2.value) ? "=" : ref1, staticClassName: null == (ref3 = null == (ref4 = this.isStatic.staticClassName) ? void 0 : ref4.ast(o)) ? null : ref3, bound: !!this.bound };
                  } }, { key: "astProperties", value: function astProperties(o) {
                    var param, ref1;
                    return Object.assign({ params: function() {
                      var j, len1, ref12, results1;
                      for (ref12 = this.params, results1 = [], j = 0, len1 = ref12.length; j < len1; j++)
                        param = ref12[j], results1.push(this.paramForAst(param).ast(o));
                      return results1;
                    }.call(this), body: this.body.ast(Object.assign({}, o, { checkForDirectives: true }), LEVEL_TOP), generator: !!this.isGenerator, async: !!this.isAsync, id: null, hasIndentedBody: this.body.locationData.first_line > (null == (ref1 = this.funcGlyph) ? void 0 : ref1.locationData.first_line) }, this.isMethod ? this.methodAstProperties(o) : {});
                  } }, { key: "astLocationData", value: function() {
                    var astLocationData, functionLocationData;
                    return (functionLocationData = _get(_getPrototypeOf(Code3.prototype), "astLocationData", this).call(this), !this.isMethod) ? functionLocationData : (astLocationData = mergeAstLocationData(this.name.astLocationData(), functionLocationData), null != this.isStatic.staticClassName && (astLocationData = mergeAstLocationData(this.isStatic.staticClassName.astLocationData(), astLocationData)), astLocationData);
                  } }]), Code3;
                }(Base);
                return Code2.prototype.children = ["params", "body"], Code2.prototype.jumps = NO, Code2;
              }.call(this), exports2.Param = Param = function() {
                var Param2 = function(_Base41) {
                  "use strict";
                  function Param3(name1, value1, splat1) {
                    var _this65;
                    _classCallCheck(this, Param3);
                    var message, token;
                    return _this65 = _possibleConstructorReturn(this, _getPrototypeOf(Param3).call(this)), _this65.name = name1, _this65.value = value1, _this65.splat = splat1, message = isUnassignable(_this65.name.unwrapAll().value), message && _this65.name.error(message), _this65.name instanceof Obj && _this65.name.generated && (token = _this65.name.objects[0].operatorToken, token.error("unexpected ".concat(token.value))), _this65;
                  }
                  return _inherits(Param3, _Base41), _createClass(Param3, [{ key: "compileToFragments", value: function compileToFragments(o) {
                    return this.name.compileToFragments(o, LEVEL_LIST);
                  } }, { key: "compileToFragmentsWithoutComments", value: function compileToFragmentsWithoutComments(o) {
                    return this.name.compileToFragmentsWithoutComments(o, LEVEL_LIST);
                  } }, { key: "asReference", value: function asReference(o) {
                    var name, node;
                    return this.reference ? this.reference : (node = this.name, node["this"] ? (name = node.properties[0].name.value, 0 <= indexOf.call(JS_FORBIDDEN, name) && (name = "_".concat(name)), node = new IdentifierLiteral(o.scope.freeVariable(name))) : node.shouldCache() && (node = new IdentifierLiteral(o.scope.freeVariable("arg"))), node = new Value(node), node.updateLocationDataIfMissing(this.locationData), this.reference = node);
                  } }, { key: "shouldCache", value: function shouldCache() {
                    return this.name.shouldCache();
                  } }, { key: "eachName", value: function eachName(iterator) {
                    var _this66 = this, name = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.name, atParam, checkAssignabilityOfLiteral, j, len1, nObj, node, obj, ref1, ref2;
                    if (checkAssignabilityOfLiteral = function(literal) {
                      var message;
                      if (message = isUnassignable(literal.value), message && literal.error(message), !literal.isAssignable())
                        return literal.error("'".concat(literal.value, "' can't be assigned"));
                    }, atParam = function(obj2) {
                      var originalObj = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                      return iterator("@".concat(obj2.properties[0].name.value), obj2, _this66, originalObj);
                    }, name instanceof Call && name.error("Function invocation can't be assigned"), name instanceof Literal)
                      return checkAssignabilityOfLiteral(name), iterator(name.value, name, this);
                    if (name instanceof Value)
                      return atParam(name);
                    for (ref2 = null == (ref1 = name.objects) ? [] : ref1, j = 0, len1 = ref2.length; j < len1; j++)
                      obj = ref2[j], nObj = obj, obj instanceof Assign && null == obj.context && (obj = obj.variable), obj instanceof Assign ? (obj = obj.value instanceof Assign ? obj.value.variable : obj.value, this.eachName(iterator, obj.unwrap())) : obj instanceof Splat ? (node = obj.name.unwrap(), iterator(node.value, node, this)) : obj instanceof Value ? obj.isArray() || obj.isObject() ? this.eachName(iterator, obj.base) : obj["this"] ? atParam(obj, nObj) : (checkAssignabilityOfLiteral(obj.base), iterator(obj.base.value, obj.base, this)) : obj instanceof Elision ? obj : !(obj instanceof Expansion) && obj.error("illegal parameter ".concat(obj.compile()));
                  } }, { key: "renameParam", value: function renameParam(node, newNode) {
                    var isNode, replacement;
                    return isNode = function(candidate) {
                      return candidate === node;
                    }, replacement = function(node2, parent) {
                      var key;
                      return parent instanceof Obj ? (key = node2, node2["this"] && (key = node2.properties[0].name), node2["this"] && key.value === newNode.value ? new Value(newNode) : new Assign(new Value(key), newNode, "object")) : newNode;
                    }, this.replaceInContext(isNode, replacement);
                  } }]), Param3;
                }(Base);
                return Param2.prototype.children = ["name", "value"], Param2;
              }.call(this), exports2.Splat = Splat = function() {
                var Splat2 = function(_Base42) {
                  "use strict";
                  function Splat3(name) {
                    var _ref52 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, lhs1 = _ref52.lhs, _ref52$postfix = _ref52.postfix, _this67;
                    return _classCallCheck(this, Splat3), _this67 = _possibleConstructorReturn(this, _getPrototypeOf(Splat3).call(this)), _this67.lhs = lhs1, _this67.postfix = void 0 === _ref52$postfix || _ref52$postfix, _this67.name = name.compile ? name : new Literal(name), _this67;
                  }
                  return _inherits(Splat3, _Base42), _createClass(Splat3, [{ key: "shouldCache", value: function shouldCache() {
                    return false;
                  } }, { key: "isAssignable", value: function isAssignable() {
                    var _ref53 = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, _ref53$allowComplexSp = _ref53.allowComplexSplat;
                    return this.name instanceof Obj || this.name instanceof Parens ? void 0 !== _ref53$allowComplexSp && _ref53$allowComplexSp : this.name.isAssignable() && (!this.name.isAtomic || this.name.isAtomic());
                  } }, { key: "assigns", value: function assigns(name) {
                    return this.name.assigns(name);
                  } }, { key: "compileNode", value: function compileNode(o) {
                    var compiledSplat;
                    return compiledSplat = [this.makeCode("...")].concat(_toConsumableArray(this.name.compileToFragments(o, LEVEL_OP))), this.jsx ? [this.makeCode("{")].concat(_toConsumableArray(compiledSplat), [this.makeCode("}")]) : compiledSplat;
                  } }, { key: "unwrap", value: function unwrap() {
                    return this.name;
                  } }, { key: "propagateLhs", value: function propagateLhs(setLhs) {
                    var base1;
                    return setLhs && (this.lhs = true), this.lhs ? "function" == typeof (base1 = this.name).propagateLhs ? base1.propagateLhs(true) : void 0 : void 0;
                  } }, { key: "astType", value: function astType() {
                    return this.jsx ? "JSXSpreadAttribute" : this.lhs ? "RestElement" : "SpreadElement";
                  } }, { key: "astProperties", value: function astProperties(o) {
                    return { argument: this.name.ast(o, LEVEL_OP), postfix: this.postfix };
                  } }]), Splat3;
                }(Base);
                return Splat2.prototype.children = ["name"], Splat2;
              }.call(this), exports2.Expansion = Expansion = function() {
                var Expansion2 = function(_Base43) {
                  "use strict";
                  function Expansion3() {
                    return _classCallCheck(this, Expansion3), _possibleConstructorReturn(this, _getPrototypeOf(Expansion3).apply(this, arguments));
                  }
                  return _inherits(Expansion3, _Base43), _createClass(Expansion3, [{ key: "compileNode", value: function compileNode() {
                    return this.throwLhsError();
                  } }, { key: "asReference", value: function asReference() {
                    return this;
                  } }, { key: "eachName", value: function eachName() {
                  } }, { key: "throwLhsError", value: function throwLhsError() {
                    return this.error("Expansion must be used inside a destructuring assignment or parameter list");
                  } }, { key: "astNode", value: function astNode(o) {
                    return this.lhs || this.throwLhsError(), _get(_getPrototypeOf(Expansion3.prototype), "astNode", this).call(this, o);
                  } }, { key: "astType", value: function astType() {
                    return "RestElement";
                  } }, { key: "astProperties", value: function astProperties() {
                    return { argument: null };
                  } }]), Expansion3;
                }(Base);
                return Expansion2.prototype.shouldCache = NO, Expansion2;
              }.call(this), exports2.Elision = Elision = function() {
                var Elision2 = function(_Base44) {
                  "use strict";
                  function Elision3() {
                    return _classCallCheck(this, Elision3), _possibleConstructorReturn(this, _getPrototypeOf(Elision3).apply(this, arguments));
                  }
                  return _inherits(Elision3, _Base44), _createClass(Elision3, [{ key: "compileToFragments", value: function compileToFragments(o, level) {
                    var fragment;
                    return fragment = _get(_getPrototypeOf(Elision3.prototype), "compileToFragments", this).call(this, o, level), fragment.isElision = true, fragment;
                  } }, { key: "compileNode", value: function compileNode() {
                    return [this.makeCode(", ")];
                  } }, { key: "asReference", value: function asReference() {
                    return this;
                  } }, { key: "eachName", value: function eachName() {
                  } }, { key: "astNode", value: function astNode() {
                    return null;
                  } }]), Elision3;
                }(Base);
                return Elision2.prototype.isAssignable = YES, Elision2.prototype.shouldCache = NO, Elision2;
              }.call(this), exports2.While = While = function() {
                var While2 = function(_Base45) {
                  "use strict";
                  function While3(condition1) {
                    var _ref54 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, invert = _ref54.invert, guard = _ref54.guard, isLoop = _ref54.isLoop, _this68;
                    return _classCallCheck(this, While3), _this68 = _possibleConstructorReturn(this, _getPrototypeOf(While3).call(this)), _this68.condition = condition1, _this68.invert = invert, _this68.guard = guard, _this68.isLoop = isLoop, _this68;
                  }
                  return _inherits(While3, _Base45), _createClass(While3, [{ key: "makeReturn", value: function makeReturn(results, mark) {
                    return results ? _get(_getPrototypeOf(While3.prototype), "makeReturn", this).call(this, results, mark) : (this.returns = !this.jumps(), mark ? void (this.returns && this.body.makeReturn(results, mark)) : this);
                  } }, { key: "addBody", value: function addBody(body1) {
                    return this.body = body1, this;
                  } }, { key: "jumps", value: function jumps() {
                    var expressions, j, jumpNode, len1, node;
                    if (expressions = this.body.expressions, !expressions.length)
                      return false;
                    for (j = 0, len1 = expressions.length; j < len1; j++)
                      if (node = expressions[j], jumpNode = node.jumps({ loop: true }))
                        return jumpNode;
                    return false;
                  } }, { key: "compileNode", value: function compileNode(o) {
                    var answer, body, rvar, set;
                    return o.indent += TAB, set = "", body = this.body, body.isEmpty() ? body = this.makeCode("") : (this.returns && (body.makeReturn(rvar = o.scope.freeVariable("results")), set = "".concat(this.tab).concat(rvar, " = [];\n")), this.guard && (1 < body.expressions.length ? body.expressions.unshift(new If(new Parens(this.guard).invert(), new StatementLiteral("continue"))) : this.guard && (body = Block.wrap([new If(this.guard, body)]))), body = [].concat(this.makeCode("\n"), body.compileToFragments(o, LEVEL_TOP), this.makeCode("\n".concat(this.tab)))), answer = [].concat(this.makeCode(set + this.tab + "while ("), this.processedCondition().compileToFragments(o, LEVEL_PAREN), this.makeCode(") {"), body, this.makeCode("}")), this.returns && answer.push(this.makeCode("\n".concat(this.tab, "return ").concat(rvar, ";"))), answer;
                  } }, { key: "processedCondition", value: function processedCondition() {
                    return null == this.processedConditionCache ? this.processedConditionCache = this.invert ? this.condition.invert() : this.condition : this.processedConditionCache;
                  } }, { key: "astType", value: function astType() {
                    return "WhileStatement";
                  } }, { key: "astProperties", value: function astProperties(o) {
                    var ref1, ref2;
                    return { test: this.condition.ast(o, LEVEL_PAREN), body: this.body.ast(o, LEVEL_TOP), guard: null == (ref1 = null == (ref2 = this.guard) ? void 0 : ref2.ast(o)) ? null : ref1, inverted: !!this.invert, postfix: !!this.postfix, loop: !!this.isLoop };
                  } }]), While3;
                }(Base);
                return While2.prototype.children = ["condition", "guard", "body"], While2.prototype.isStatement = YES, While2;
              }.call(this), exports2.Op = Op = function() {
                var Op2 = function(_Base46) {
                  "use strict";
                  function Op3(op, first, second, flip) {
                    var _ref55 = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : {}, invertOperator = _ref55.invertOperator, _ref55$originalOperat = _ref55.originalOperator, originalOperator = void 0 === _ref55$originalOperat ? op : _ref55$originalOperat, _this69;
                    _classCallCheck(this, Op3);
                    var call, firstCall, message, ref1, unwrapped;
                    return (_this69 = _possibleConstructorReturn(this, _getPrototypeOf(Op3).call(this)), _this69.invertOperator = invertOperator, _this69.originalOperator = originalOperator, "new" === op) ? ((firstCall = unwrapped = first.unwrap()) instanceof Call || (firstCall = unwrapped.base) instanceof Call) && !firstCall["do"] && !firstCall.isNew ? _possibleConstructorReturn(_this69, new Value(firstCall.newInstance(), firstCall === unwrapped ? [] : unwrapped.properties)) : (first instanceof Parens || first.unwrap() instanceof IdentifierLiteral || ("function" == typeof first.hasProperties ? first.hasProperties() : void 0) || (first = new Parens(first)), call = new Call(first, []), call.locationData = _this69.locationData, call.isNew = true, _possibleConstructorReturn(_this69, call)) : (_this69.operator = CONVERSIONS[op] || op, _this69.first = first, _this69.second = second, _this69.flip = !!flip, ("--" === (ref1 = _this69.operator) || "++" === ref1) && (message = isUnassignable(_this69.first.unwrapAll().value), message && _this69.first.error(message)), _possibleConstructorReturn(_this69, _assertThisInitialized(_this69)));
                  }
                  return _inherits(Op3, _Base46), _createClass(Op3, [{ key: "isNumber", value: function() {
                    var ref1;
                    return this.isUnary() && ("+" === (ref1 = this.operator) || "-" === ref1) && this.first instanceof Value && this.first.isNumber();
                  } }, { key: "isAwait", value: function isAwait() {
                    return "await" === this.operator;
                  } }, { key: "isYield", value: function isYield() {
                    var ref1;
                    return "yield" === (ref1 = this.operator) || "yield*" === ref1;
                  } }, { key: "isUnary", value: function isUnary() {
                    return !this.second;
                  } }, { key: "shouldCache", value: function shouldCache() {
                    return !this.isNumber();
                  } }, { key: "isChainable", value: function isChainable() {
                    var ref1;
                    return "<" === (ref1 = this.operator) || ">" === ref1 || ">=" === ref1 || "<=" === ref1 || "===" === ref1 || "!==" === ref1;
                  } }, { key: "isChain", value: function isChain() {
                    return this.isChainable() && this.first.isChainable();
                  } }, { key: "invert", value: function invert() {
                    var allInvertable, curr, fst, op, ref1;
                    if (this.isInOperator())
                      return this.invertOperator = "!", this;
                    if (this.isChain()) {
                      for (allInvertable = true, curr = this; curr && curr.operator; )
                        allInvertable && (allInvertable = curr.operator in INVERSIONS), curr = curr.first;
                      if (!allInvertable)
                        return new Parens(this).invert();
                      for (curr = this; curr && curr.operator; )
                        curr.invert = !curr.invert, curr.operator = INVERSIONS[curr.operator], curr = curr.first;
                      return this;
                    }
                    return (op = INVERSIONS[this.operator]) ? (this.operator = op, this.first.unwrap() instanceof Op3 && this.first.invert(), this) : this.second ? new Parens(this).invert() : "!" === this.operator && (fst = this.first.unwrap()) instanceof Op3 && ("!" === (ref1 = fst.operator) || "in" === ref1 || "instanceof" === ref1) ? fst : new Op3("!", this);
                  } }, { key: "unfoldSoak", value: function unfoldSoak(o) {
                    var ref1;
                    return ("++" === (ref1 = this.operator) || "--" === ref1 || "delete" === ref1) && _unfoldSoak(o, this, "first");
                  } }, { key: "generateDo", value: function generateDo(exp) {
                    var call, func, j, len1, param, passedParams, ref, ref1;
                    for (passedParams = [], func = exp instanceof Assign && (ref = exp.value.unwrap()) instanceof Code ? ref : exp, ref1 = func.params || [], j = 0, len1 = ref1.length; j < len1; j++)
                      param = ref1[j], param.value ? (passedParams.push(param.value), delete param.value) : passedParams.push(param);
                    return call = new Call(exp, passedParams), call["do"] = true, call;
                  } }, { key: "isInOperator", value: function isInOperator() {
                    return "in" === this.originalOperator;
                  } }, { key: "compileNode", value: function compileNode(o) {
                    var answer, inNode, isChain, lhs, rhs;
                    if (this.isInOperator())
                      return inNode = new In(this.first, this.second), (this.invertOperator ? inNode.invert() : inNode).compileNode(o);
                    if (this.invertOperator)
                      return this.invertOperator = null, this.invert().compileNode(o);
                    if ("do" === this.operator)
                      return Op3.prototype.generateDo(this.first).compileNode(o);
                    if (isChain = this.isChain(), isChain || (this.first.front = this.front), this.checkDeleteOperand(o), this.isYield() || this.isAwait())
                      return this.compileContinuation(o);
                    if (this.isUnary())
                      return this.compileUnary(o);
                    if (isChain)
                      return this.compileChain(o);
                    switch (this.operator) {
                      case "?":
                        return this.compileExistence(o, this.second.isDefaultValue);
                      case "//":
                        return this.compileFloorDivision(o);
                      case "%%":
                        return this.compileModulo(o);
                      default:
                        return lhs = this.first.compileToFragments(o, LEVEL_OP), rhs = this.second.compileToFragments(o, LEVEL_OP), answer = [].concat(lhs, this.makeCode(" ".concat(this.operator, " ")), rhs), o.level <= LEVEL_OP ? answer : this.wrapInParentheses(answer);
                    }
                  } }, { key: "compileChain", value: function compileChain(o) {
                    var _this$first$second$ca = this.first.second.cache(o), _this$first$second$ca2 = _slicedToArray(_this$first$second$ca, 2), fragments, fst, shared;
                    return this.first.second = _this$first$second$ca2[0], shared = _this$first$second$ca2[1], fst = this.first.compileToFragments(o, LEVEL_OP), fragments = fst.concat(this.makeCode(" ".concat(this.invert ? "&&" : "||", " ")), shared.compileToFragments(o), this.makeCode(" ".concat(this.operator, " ")), this.second.compileToFragments(o, LEVEL_OP)), this.wrapInParentheses(fragments);
                  } }, { key: "compileExistence", value: function compileExistence(o, checkOnlyUndefined) {
                    var fst, ref;
                    return this.first.shouldCache() ? (ref = new IdentifierLiteral(o.scope.freeVariable("ref")), fst = new Parens(new Assign(ref, this.first))) : (fst = this.first, ref = fst), new If(new Existence(fst, checkOnlyUndefined), ref, { type: "if" }).addElse(this.second).compileToFragments(o);
                  } }, { key: "compileUnary", value: function compileUnary(o) {
                    var op, parts, plusMinus;
                    return (parts = [], op = this.operator, parts.push([this.makeCode(op)]), "!" === op && this.first instanceof Existence) ? (this.first.negated = !this.first.negated, this.first.compileToFragments(o)) : o.level >= LEVEL_ACCESS ? new Parens(this).compileToFragments(o) : (plusMinus = "+" === op || "-" === op, ("typeof" === op || "delete" === op || plusMinus && this.first instanceof Op3 && this.first.operator === op) && parts.push([this.makeCode(" ")]), plusMinus && this.first instanceof Op3 && (this.first = new Parens(this.first)), parts.push(this.first.compileToFragments(o, LEVEL_OP)), this.flip && parts.reverse(), this.joinFragmentArrays(parts, ""));
                  } }, { key: "compileContinuation", value: function compileContinuation(o) {
                    var op, parts, ref1;
                    return parts = [], op = this.operator, this.checkContinuation(o), 0 <= indexOf.call(Object.keys(this.first), "expression") && !(this.first instanceof Throw) ? null != this.first.expression && parts.push(this.first.expression.compileToFragments(o, LEVEL_OP)) : (o.level >= LEVEL_PAREN && parts.push([this.makeCode("(")]), parts.push([this.makeCode(op)]), "" !== (null == (ref1 = this.first.base) ? void 0 : ref1.value) && parts.push([this.makeCode(" ")]), parts.push(this.first.compileToFragments(o, LEVEL_OP)), o.level >= LEVEL_PAREN && parts.push([this.makeCode(")")])), this.joinFragmentArrays(parts, "");
                  } }, { key: "checkContinuation", value: function checkContinuation(o) {
                    var ref1;
                    if (null == o.scope.parent && this.error("".concat(this.operator, " can only occur inside functions")), (null == (ref1 = o.scope.method) ? void 0 : ref1.bound) && o.scope.method.isGenerator)
                      return this.error("yield cannot occur inside bound (fat arrow) functions");
                  } }, { key: "compileFloorDivision", value: function compileFloorDivision(o) {
                    var div, floor, second;
                    return floor = new Value(new IdentifierLiteral("Math"), [new Access(new PropertyName("floor"))]), second = this.second.shouldCache() ? new Parens(this.second) : this.second, div = new Op3("/", this.first, second), new Call(floor, [div]).compileToFragments(o);
                  } }, { key: "compileModulo", value: function compileModulo(o) {
                    var mod;
                    return mod = new Value(new Literal(utility("modulo", o))), new Call(mod, [this.first, this.second]).compileToFragments(o);
                  } }, { key: "toString", value: function toString(idt) {
                    return _get(_getPrototypeOf(Op3.prototype), "toString", this).call(this, idt, this.constructor.name + " " + this.operator);
                  } }, { key: "checkDeleteOperand", value: function checkDeleteOperand(o) {
                    if ("delete" === this.operator && o.scope.check(this.first.unwrapAll().value))
                      return this.error("delete operand may not be argument or var");
                  } }, { key: "astNode", value: function astNode(o) {
                    return (this.isYield() || this.isAwait()) && this.checkContinuation(o), this.checkDeleteOperand(o), _get(_getPrototypeOf(Op3.prototype), "astNode", this).call(this, o);
                  } }, { key: "astType", value: function astType() {
                    if (this.isAwait())
                      return "AwaitExpression";
                    if (this.isYield())
                      return "YieldExpression";
                    if (this.isChain())
                      return "ChainedComparison";
                    switch (this.operator) {
                      case "||":
                      case "&&":
                      case "?":
                        return "LogicalExpression";
                      case "++":
                      case "--":
                        return "UpdateExpression";
                      default:
                        return this.isUnary() ? "UnaryExpression" : "BinaryExpression";
                    }
                  } }, { key: "operatorAst", value: function operatorAst() {
                    return "".concat(this.invertOperator ? "".concat(this.invertOperator, " ") : "").concat(this.originalOperator);
                  } }, { key: "chainAstProperties", value: function chainAstProperties(o) {
                    var currentOp, operand, operands, operators;
                    for (operators = [this.operatorAst()], operands = [this.second], currentOp = this.first; ; )
                      if (operators.unshift(currentOp.operatorAst()), operands.unshift(currentOp.second), currentOp = currentOp.first, !currentOp.isChainable()) {
                        operands.unshift(currentOp);
                        break;
                      }
                    return { operators, operands: function() {
                      var j, len1, results1;
                      for (results1 = [], j = 0, len1 = operands.length; j < len1; j++)
                        operand = operands[j], results1.push(operand.ast(o, LEVEL_OP));
                      return results1;
                    }() };
                  } }, { key: "astProperties", value: function astProperties(o) {
                    var argument, firstAst, operatorAst, ref1, secondAst;
                    if (this.isChain())
                      return this.chainAstProperties(o);
                    switch (firstAst = this.first.ast(o, LEVEL_OP), secondAst = null == (ref1 = this.second) ? void 0 : ref1.ast(o, LEVEL_OP), operatorAst = this.operatorAst(), false) {
                      case !this.isUnary():
                        return argument = this.isYield() && "" === this.first.unwrap().value ? null : firstAst, this.isAwait() ? { argument } : this.isYield() ? { argument, delegate: "yield*" === this.operator } : { argument, operator: operatorAst, prefix: !this.flip };
                      default:
                        return { left: firstAst, right: secondAst, operator: operatorAst };
                    }
                  } }]), Op3;
                }(Base), CONVERSIONS, INVERSIONS;
                return CONVERSIONS = { "==": "===", "!=": "!==", of: "in", yieldfrom: "yield*" }, INVERSIONS = { "!==": "===", "===": "!==" }, Op2.prototype.children = ["first", "second"], Op2;
              }.call(this), exports2.In = In = function() {
                var In2 = function(_Base47) {
                  "use strict";
                  function In3(object1, array) {
                    var _this70;
                    return _classCallCheck(this, In3), _this70 = _possibleConstructorReturn(this, _getPrototypeOf(In3).call(this)), _this70.object = object1, _this70.array = array, _this70;
                  }
                  return _inherits(In3, _Base47), _createClass(In3, [{ key: "compileNode", value: function compileNode(o) {
                    var hasSplat, j, len1, obj, ref1;
                    if (this.array instanceof Value && this.array.isArray() && this.array.base.objects.length) {
                      for (ref1 = this.array.base.objects, j = 0, len1 = ref1.length; j < len1; j++)
                        if (obj = ref1[j], !!(obj instanceof Splat)) {
                          hasSplat = true;
                          break;
                        }
                      if (!hasSplat)
                        return this.compileOrTest(o);
                    }
                    return this.compileLoopTest(o);
                  } }, { key: "compileOrTest", value: function compileOrTest(o) {
                    var _this$object$cache = this.object.cache(o, LEVEL_OP), _this$object$cache2 = _slicedToArray(_this$object$cache, 2), cmp, cnj, i, item, j, len1, ref, ref1, sub, tests;
                    sub = _this$object$cache2[0], ref = _this$object$cache2[1];
                    var _ref56 = this.negated ? [" !== ", " && "] : [" === ", " || "], _ref57 = _slicedToArray(_ref56, 2);
                    for (cmp = _ref57[0], cnj = _ref57[1], tests = [], ref1 = this.array.base.objects, i = j = 0, len1 = ref1.length; j < len1; i = ++j)
                      item = ref1[i], i && tests.push(this.makeCode(cnj)), tests = tests.concat(i ? ref : sub, this.makeCode(cmp), item.compileToFragments(o, LEVEL_ACCESS));
                    return o.level < LEVEL_OP ? tests : this.wrapInParentheses(tests);
                  } }, { key: "compileLoopTest", value: function compileLoopTest(o) {
                    var _this$object$cache3 = this.object.cache(o, LEVEL_LIST), _this$object$cache4 = _slicedToArray(_this$object$cache3, 2), fragments, ref, sub;
                    return (sub = _this$object$cache4[0], ref = _this$object$cache4[1], fragments = [].concat(this.makeCode(utility("indexOf", o) + ".call("), this.array.compileToFragments(o, LEVEL_LIST), this.makeCode(", "), ref, this.makeCode(") " + (this.negated ? "< 0" : ">= 0"))), fragmentsToText(sub) === fragmentsToText(ref)) ? fragments : (fragments = sub.concat(this.makeCode(", "), fragments), o.level < LEVEL_LIST ? fragments : this.wrapInParentheses(fragments));
                  } }, { key: "toString", value: function toString(idt) {
                    return _get(_getPrototypeOf(In3.prototype), "toString", this).call(this, idt, this.constructor.name + (this.negated ? "!" : ""));
                  } }]), In3;
                }(Base);
                return In2.prototype.children = ["object", "array"], In2.prototype.invert = NEGATE, In2;
              }.call(this), exports2.Try = Try = function() {
                var Try2 = function(_Base48) {
                  "use strict";
                  function Try3(attempt, _catch, ensure, finallyTag) {
                    var _this71;
                    return _classCallCheck(this, Try3), _this71 = _possibleConstructorReturn(this, _getPrototypeOf(Try3).call(this)), _this71.attempt = attempt, _this71["catch"] = _catch, _this71.ensure = ensure, _this71.finallyTag = finallyTag, _this71;
                  }
                  return _inherits(Try3, _Base48), _createClass(Try3, [{ key: "jumps", value: function jumps(o) {
                    var ref1;
                    return this.attempt.jumps(o) || (null == (ref1 = this["catch"]) ? void 0 : ref1.jumps(o));
                  } }, { key: "makeReturn", value: function makeReturn(results, mark) {
                    var ref1, ref2;
                    return mark ? (null != (ref1 = this.attempt) && ref1.makeReturn(results, mark), void (null != (ref2 = this["catch"]) && ref2.makeReturn(results, mark))) : (this.attempt && (this.attempt = this.attempt.makeReturn(results)), this["catch"] && (this["catch"] = this["catch"].makeReturn(results)), this);
                  } }, { key: "compileNode", value: function compileNode(o) {
                    var catchPart, ensurePart, generatedErrorVariableName, originalIndent, tryPart;
                    return originalIndent = o.indent, o.indent += TAB, tryPart = this.attempt.compileToFragments(o, LEVEL_TOP), catchPart = this["catch"] ? this["catch"].compileToFragments(merge(o, { indent: originalIndent }), LEVEL_TOP) : this.ensure || this["catch"] ? [] : (generatedErrorVariableName = o.scope.freeVariable("error", { reserve: false }), [this.makeCode(" catch (".concat(generatedErrorVariableName, ") {}"))]), ensurePart = this.ensure ? [].concat(this.makeCode(" finally {\n"), this.ensure.compileToFragments(o, LEVEL_TOP), this.makeCode("\n".concat(this.tab, "}"))) : [], [].concat(this.makeCode("".concat(this.tab, "try {\n")), tryPart, this.makeCode("\n".concat(this.tab, "}")), catchPart, ensurePart);
                  } }, { key: "astType", value: function astType() {
                    return "TryStatement";
                  } }, { key: "astProperties", value: function astProperties(o) {
                    var ref1, ref2;
                    return { block: this.attempt.ast(o, LEVEL_TOP), handler: null == (ref1 = null == (ref2 = this["catch"]) ? void 0 : ref2.ast(o)) ? null : ref1, finalizer: null == this.ensure ? null : Object.assign(this.ensure.ast(o, LEVEL_TOP), mergeAstLocationData(jisonLocationDataToAstLocationData(this.finallyTag.locationData), this.ensure.astLocationData())) };
                  } }]), Try3;
                }(Base);
                return Try2.prototype.children = ["attempt", "catch", "ensure"], Try2.prototype.isStatement = YES, Try2;
              }.call(this), exports2.Catch = Catch = function() {
                var Catch2 = function(_Base49) {
                  "use strict";
                  function Catch3(recovery, errorVariable) {
                    var _this72;
                    _classCallCheck(this, Catch3);
                    var base1, ref1;
                    return _this72 = _possibleConstructorReturn(this, _getPrototypeOf(Catch3).call(this)), _this72.recovery = recovery, _this72.errorVariable = errorVariable, null != (ref1 = _this72.errorVariable) && "function" == typeof (base1 = ref1.unwrap()).propagateLhs && base1.propagateLhs(true), _this72;
                  }
                  return _inherits(Catch3, _Base49), _createClass(Catch3, [{ key: "jumps", value: function jumps(o) {
                    return this.recovery.jumps(o);
                  } }, { key: "makeReturn", value: function makeReturn(results, mark) {
                    var ret;
                    if (ret = this.recovery.makeReturn(results, mark), !mark)
                      return this.recovery = ret, this;
                  } }, { key: "compileNode", value: function compileNode(o) {
                    var generatedErrorVariableName, placeholder;
                    return o.indent += TAB, generatedErrorVariableName = o.scope.freeVariable("error", { reserve: false }), placeholder = new IdentifierLiteral(generatedErrorVariableName), this.checkUnassignable(), this.errorVariable && this.recovery.unshift(new Assign(this.errorVariable, placeholder)), [].concat(this.makeCode(" catch ("), placeholder.compileToFragments(o), this.makeCode(") {\n"), this.recovery.compileToFragments(o, LEVEL_TOP), this.makeCode("\n".concat(this.tab, "}")));
                  } }, { key: "checkUnassignable", value: function checkUnassignable() {
                    var message;
                    if (this.errorVariable && (message = isUnassignable(this.errorVariable.unwrapAll().value), message))
                      return this.errorVariable.error(message);
                  } }, { key: "astNode", value: function astNode(o) {
                    var ref1;
                    return this.checkUnassignable(), null != (ref1 = this.errorVariable) && ref1.eachName(function(name) {
                      var alreadyDeclared;
                      return alreadyDeclared = o.scope.find(name.value), name.isDeclaration = !alreadyDeclared;
                    }), _get(_getPrototypeOf(Catch3.prototype), "astNode", this).call(this, o);
                  } }, { key: "astType", value: function astType() {
                    return "CatchClause";
                  } }, { key: "astProperties", value: function astProperties(o) {
                    var ref1, ref2;
                    return { param: null == (ref1 = null == (ref2 = this.errorVariable) ? void 0 : ref2.ast(o)) ? null : ref1, body: this.recovery.ast(o, LEVEL_TOP) };
                  } }]), Catch3;
                }(Base);
                return Catch2.prototype.children = ["recovery", "errorVariable"], Catch2.prototype.isStatement = YES, Catch2;
              }.call(this), exports2.Throw = Throw = function() {
                var Throw2 = function(_Base50) {
                  "use strict";
                  function Throw3(expression1) {
                    var _this73;
                    return _classCallCheck(this, Throw3), _this73 = _possibleConstructorReturn(this, _getPrototypeOf(Throw3).call(this)), _this73.expression = expression1, _this73;
                  }
                  return _inherits(Throw3, _Base50), _createClass(Throw3, [{ key: "compileNode", value: function compileNode(o) {
                    var fragments;
                    return fragments = this.expression.compileToFragments(o, LEVEL_LIST), unshiftAfterComments(fragments, this.makeCode("throw ")), fragments.unshift(this.makeCode(this.tab)), fragments.push(this.makeCode(";")), fragments;
                  } }, { key: "astType", value: function astType() {
                    return "ThrowStatement";
                  } }, { key: "astProperties", value: function astProperties(o) {
                    return { argument: this.expression.ast(o, LEVEL_LIST) };
                  } }]), Throw3;
                }(Base);
                return Throw2.prototype.children = ["expression"], Throw2.prototype.isStatement = YES, Throw2.prototype.jumps = NO, Throw2.prototype.makeReturn = THIS, Throw2;
              }.call(this), exports2.Existence = Existence = function() {
                var Existence2 = function(_Base51) {
                  "use strict";
                  function Existence3(expression1) {
                    var onlyNotUndefined = !!(1 < arguments.length && void 0 !== arguments[1]) && arguments[1], _this74;
                    _classCallCheck(this, Existence3);
                    var salvagedComments;
                    return _this74 = _possibleConstructorReturn(this, _getPrototypeOf(Existence3).call(this)), _this74.expression = expression1, _this74.comparisonTarget = onlyNotUndefined ? "undefined" : "null", salvagedComments = [], _this74.expression.traverseChildren(true, function(child) {
                      var comment, j, len1, ref1;
                      if (child.comments) {
                        for (ref1 = child.comments, j = 0, len1 = ref1.length; j < len1; j++)
                          comment = ref1[j], 0 > indexOf.call(salvagedComments, comment) && salvagedComments.push(comment);
                        return delete child.comments;
                      }
                    }), attachCommentsToNode(salvagedComments, _assertThisInitialized(_this74)), moveComments(_this74.expression, _assertThisInitialized(_this74)), _this74;
                  }
                  return _inherits(Existence3, _Base51), _createClass(Existence3, [{ key: "compileNode", value: function compileNode(o) {
                    var cmp, cnj, code;
                    if (this.expression.front = this.front, code = this.expression.compile(o, LEVEL_OP), this.expression.unwrap() instanceof IdentifierLiteral && !o.scope.check(code)) {
                      var _ref58 = this.negated ? ["===", "||"] : ["!==", "&&"], _ref59 = _slicedToArray(_ref58, 2);
                      cmp = _ref59[0], cnj = _ref59[1], code = "typeof ".concat(code, " ").concat(cmp, ' "undefined"') + ("undefined" === this.comparisonTarget ? "" : " ".concat(cnj, " ").concat(code, " ").concat(cmp, " ").concat(this.comparisonTarget));
                    } else
                      cmp = "null" === this.comparisonTarget ? this.negated ? "==" : "!=" : this.negated ? "===" : "!==", code = "".concat(code, " ").concat(cmp, " ").concat(this.comparisonTarget);
                    return [this.makeCode(o.level <= LEVEL_COND ? code : "(".concat(code, ")"))];
                  } }, { key: "astType", value: function astType() {
                    return "UnaryExpression";
                  } }, { key: "astProperties", value: function astProperties(o) {
                    return { argument: this.expression.ast(o), operator: "?", prefix: false };
                  } }]), Existence3;
                }(Base);
                return Existence2.prototype.children = ["expression"], Existence2.prototype.invert = NEGATE, Existence2;
              }.call(this), exports2.Parens = Parens = function() {
                var Parens2 = function(_Base52) {
                  "use strict";
                  function Parens3(body1) {
                    var _this75;
                    return _classCallCheck(this, Parens3), _this75 = _possibleConstructorReturn(this, _getPrototypeOf(Parens3).call(this)), _this75.body = body1, _this75;
                  }
                  return _inherits(Parens3, _Base52), _createClass(Parens3, [{ key: "unwrap", value: function unwrap() {
                    return this.body;
                  } }, { key: "shouldCache", value: function shouldCache() {
                    return this.body.shouldCache();
                  } }, { key: "compileNode", value: function compileNode(o) {
                    var bare, expr, fragments, ref1, shouldWrapComment;
                    return (expr = this.body.unwrap(), shouldWrapComment = null == (ref1 = expr.comments) ? void 0 : ref1.some(function(comment) {
                      return comment.here && !comment.unshift && !comment.newLine;
                    }), expr instanceof Value && expr.isAtomic() && !this.jsxAttribute && !shouldWrapComment) ? (expr.front = this.front, expr.compileToFragments(o)) : (fragments = expr.compileToFragments(o, LEVEL_PAREN), bare = o.level < LEVEL_OP && !shouldWrapComment && (expr instanceof Op && !expr.isInOperator() || expr.unwrap() instanceof Call || expr instanceof For && expr.returns) && (o.level < LEVEL_COND || 3 >= fragments.length), this.jsxAttribute ? this.wrapInBraces(fragments) : bare ? fragments : this.wrapInParentheses(fragments));
                  } }, { key: "astNode", value: function astNode(o) {
                    return this.body.unwrap().ast(o, LEVEL_PAREN);
                  } }]), Parens3;
                }(Base);
                return Parens2.prototype.children = ["body"], Parens2;
              }.call(this), exports2.StringWithInterpolations = StringWithInterpolations = function() {
                var StringWithInterpolations2 = function(_Base53) {
                  "use strict";
                  function StringWithInterpolations3(body1) {
                    var _ref60 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, quote = _ref60.quote, startQuote = _ref60.startQuote, _this76;
                    return _classCallCheck(this, StringWithInterpolations3), _this76 = _possibleConstructorReturn(this, _getPrototypeOf(StringWithInterpolations3).call(this)), _this76.body = body1, _this76.quote = quote, _this76.startQuote = startQuote, _this76;
                  }
                  return _inherits(StringWithInterpolations3, _Base53), _createClass(StringWithInterpolations3, [{ key: "unwrap", value: function unwrap() {
                    return this;
                  } }, { key: "shouldCache", value: function shouldCache() {
                    return this.body.shouldCache();
                  } }, { key: "extractElements", value: function extractElements(o) {
                    var _ref61 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, includeInterpolationWrappers = _ref61.includeInterpolationWrappers, isJsx = _ref61.isJsx, elements, expr, salvagedComments;
                    return expr = this.body.unwrap(), elements = [], salvagedComments = [], expr.traverseChildren(false, function(node) {
                      var comment, commentPlaceholder, empty, j, k, len1, len2, ref1, ref2, ref3, unwrapped;
                      if (node instanceof StringLiteral) {
                        if (node.comments) {
                          var _salvagedComments;
                          (_salvagedComments = salvagedComments).push.apply(_salvagedComments, _toConsumableArray(node.comments)), delete node.comments;
                        }
                        return elements.push(node), true;
                      }
                      if (node instanceof Interpolation) {
                        if (0 !== salvagedComments.length) {
                          for (j = 0, len1 = salvagedComments.length; j < len1; j++)
                            comment = salvagedComments[j], comment.unshift = true, comment.newLine = true;
                          attachCommentsToNode(salvagedComments, node);
                        }
                        if ((unwrapped = null == (ref1 = node.expression) ? void 0 : ref1.unwrapAll()) instanceof PassthroughLiteral && unwrapped.generated && !(isJsx && o.compiling)) {
                          if (o.compiling) {
                            if (commentPlaceholder = new StringLiteral("").withLocationDataFrom(node), commentPlaceholder.comments = unwrapped.comments, node.comments) {
                              var _ref62;
                              (_ref62 = null == commentPlaceholder.comments ? commentPlaceholder.comments = [] : commentPlaceholder.comments).push.apply(_ref62, _toConsumableArray(node.comments));
                            }
                            elements.push(new Value(commentPlaceholder));
                          } else
                            empty = new Interpolation().withLocationDataFrom(node), empty.comments = node.comments, elements.push(empty);
                        } else if (node.expression || includeInterpolationWrappers) {
                          if (node.comments) {
                            var _ref63;
                            (_ref63 = null == (ref2 = node.expression) ? void 0 : null == ref2.comments ? ref2.comments = [] : ref2.comments).push.apply(_ref63, _toConsumableArray(node.comments));
                          }
                          elements.push(includeInterpolationWrappers ? node : node.expression);
                        }
                        return false;
                      }
                      if (node.comments) {
                        if (0 !== elements.length && !(elements[elements.length - 1] instanceof StringLiteral)) {
                          for (ref3 = node.comments, k = 0, len2 = ref3.length; k < len2; k++)
                            comment = ref3[k], comment.unshift = false, comment.newLine = true;
                          attachCommentsToNode(node.comments, elements[elements.length - 1]);
                        } else {
                          var _salvagedComments2;
                          (_salvagedComments2 = salvagedComments).push.apply(_salvagedComments2, _toConsumableArray(node.comments));
                        }
                        delete node.comments;
                      }
                      return true;
                    }), elements;
                  } }, { key: "compileNode", value: function compileNode(o) {
                    var code, element, elements, fragments, j, len1, ref1, unquotedElementValue, wrapped;
                    if (null == this.comments && (this.comments = null == (ref1 = this.startQuote) ? void 0 : ref1.comments), this.jsxAttribute)
                      return wrapped = new Parens(new StringWithInterpolations3(this.body)), wrapped.jsxAttribute = true, wrapped.compileNode(o);
                    for (elements = this.extractElements(o, { isJsx: this.jsx }), fragments = [], this.jsx || fragments.push(this.makeCode("`")), j = 0, len1 = elements.length; j < len1; j++)
                      if (element = elements[j], element instanceof StringLiteral)
                        unquotedElementValue = this.jsx ? element.unquotedValueForJSX : element.unquotedValueForTemplateLiteral, fragments.push(this.makeCode(unquotedElementValue));
                      else {
                        var _fragments12;
                        this.jsx || fragments.push(this.makeCode("$")), code = element.compileToFragments(o, LEVEL_PAREN), (!this.isNestedTag(element) || code.some(function(fragment) {
                          var ref2;
                          return null == (ref2 = fragment.comments) ? void 0 : ref2.some(function(comment) {
                            return false === comment.here;
                          });
                        })) && (code = this.wrapInBraces(code), code[0].isStringWithInterpolations = true, code[code.length - 1].isStringWithInterpolations = true), (_fragments12 = fragments).push.apply(_fragments12, _toConsumableArray(code));
                      }
                    return this.jsx || fragments.push(this.makeCode("`")), fragments;
                  } }, { key: "isNestedTag", value: function isNestedTag(element) {
                    var call;
                    return call = "function" == typeof element.unwrapAll ? element.unwrapAll() : void 0, this.jsx && call instanceof JSXElement;
                  } }, { key: "astType", value: function astType() {
                    return "TemplateLiteral";
                  } }, { key: "astProperties", value: function astProperties(o) {
                    var element, elements, emptyInterpolation, expression, expressions, index, j, last, len1, node, quasis;
                    elements = this.extractElements(o, { includeInterpolationWrappers: true });
                    var _slice1$call17 = slice1.call(elements, -1), _slice1$call18 = _slicedToArray(_slice1$call17, 1);
                    for (last = _slice1$call18[0], quasis = [], expressions = [], index = j = 0, len1 = elements.length; j < len1; index = ++j)
                      if (element = elements[index], element instanceof StringLiteral)
                        quasis.push(new TemplateElement(element.originalValue, { tail: element === last }).withLocationDataFrom(element).ast(o));
                      else {
                        var _element2 = element;
                        expression = _element2.expression, node = null == expression ? (emptyInterpolation = new EmptyInterpolation(), emptyInterpolation.locationData = emptyExpressionLocationData({ interpolationNode: element, openingBrace: "#{", closingBrace: "}" }), emptyInterpolation) : expression.unwrapAll(), expressions.push(astAsBlockIfNeeded(node, o));
                      }
                    return { expressions, quasis, quote: this.quote };
                  } }], [{ key: "fromStringLiteral", value: function fromStringLiteral(stringLiteral) {
                    var updatedString, updatedStringValue;
                    return updatedString = stringLiteral.withoutQuotesInLocationData(), updatedStringValue = new Value(updatedString).withLocationDataFrom(updatedString), new StringWithInterpolations3(Block.wrap([updatedStringValue]), { quote: stringLiteral.quote }).withLocationDataFrom(stringLiteral);
                  } }]), StringWithInterpolations3;
                }(Base);
                return StringWithInterpolations2.prototype.children = ["body"], StringWithInterpolations2;
              }.call(this), exports2.TemplateElement = TemplateElement = function(_Base54) {
                "use strict";
                function TemplateElement2(value1) {
                  var _ref64 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, tail1 = _ref64.tail, _this77;
                  return _classCallCheck(this, TemplateElement2), _this77 = _possibleConstructorReturn(this, _getPrototypeOf(TemplateElement2).call(this)), _this77.value = value1, _this77.tail = tail1, _this77;
                }
                return _inherits(TemplateElement2, _Base54), _createClass(TemplateElement2, [{ key: "astProperties", value: function astProperties() {
                  return { value: { raw: this.value }, tail: !!this.tail };
                } }]), TemplateElement2;
              }(Base), exports2.Interpolation = Interpolation = function() {
                var Interpolation2 = function(_Base55) {
                  "use strict";
                  function Interpolation3(expression1) {
                    var _this78;
                    return _classCallCheck(this, Interpolation3), _this78 = _possibleConstructorReturn(this, _getPrototypeOf(Interpolation3).call(this)), _this78.expression = expression1, _this78;
                  }
                  return _inherits(Interpolation3, _Base55), Interpolation3;
                }(Base);
                return Interpolation2.prototype.children = ["expression"], Interpolation2;
              }.call(this), exports2.EmptyInterpolation = EmptyInterpolation = function(_Base56) {
                "use strict";
                function EmptyInterpolation2() {
                  return _classCallCheck(this, EmptyInterpolation2), _possibleConstructorReturn(this, _getPrototypeOf(EmptyInterpolation2).call(this));
                }
                return _inherits(EmptyInterpolation2, _Base56), EmptyInterpolation2;
              }(Base), exports2.For = For = function() {
                var For2 = function(_While) {
                  "use strict";
                  function For3(body, source) {
                    var _this79;
                    return _classCallCheck(this, For3), _this79 = _possibleConstructorReturn(this, _getPrototypeOf(For3).call(this)), _this79.addBody(body), _this79.addSource(source), _this79;
                  }
                  return _inherits(For3, _While), _createClass(For3, [{ key: "isAwait", value: function isAwait() {
                    var ref1;
                    return null != (ref1 = this["await"]) && ref1;
                  } }, { key: "addBody", value: function addBody(body) {
                    var base1, expressions;
                    return this.body = Block.wrap([body]), expressions = this.body.expressions, expressions.length && null == (base1 = this.body).locationData && (base1.locationData = mergeLocationData(expressions[0].locationData, expressions[expressions.length - 1].locationData)), this;
                  } }, { key: "addSource", value: function addSource(source) {
                    var _this80 = this, _source$source = source.source, attr, attribs, attribute, base1, j, k, len1, len2, ref1, ref2, ref3, ref4;
                    for (this.source = void 0 !== _source$source && _source$source, attribs = ["name", "index", "guard", "step", "own", "ownTag", "await", "awaitTag", "object", "from"], j = 0, len1 = attribs.length; j < len1; j++)
                      attr = attribs[j], this[attr] = null == (ref1 = source[attr]) ? this[attr] : ref1;
                    if (!this.source)
                      return this;
                    if (this.from && this.index && this.index.error("cannot use index with for-from"), this.own && !this.object && this.ownTag.error("cannot use own with for-".concat(this.from ? "from" : "in")), this.object) {
                      var _ref65 = [this.index, this.name];
                      this.name = _ref65[0], this.index = _ref65[1];
                    }
                    for (((null == (ref2 = this.index) ? void 0 : "function" == typeof ref2.isArray ? ref2.isArray() : void 0) || (null == (ref3 = this.index) ? void 0 : "function" == typeof ref3.isObject ? ref3.isObject() : void 0)) && this.index.error("index cannot be a pattern matching expression"), this["await"] && !this.from && this.awaitTag.error("await must be used with for-from"), this.range = this.source instanceof Value && this.source.base instanceof Range && !this.source.properties.length && !this.from, this.pattern = this.name instanceof Value, this.pattern && "function" == typeof (base1 = this.name.unwrap()).propagateLhs && base1.propagateLhs(true), this.range && this.index && this.index.error("indexes do not apply to range loops"), this.range && this.pattern && this.name.error("cannot pattern match over range loops"), this.returns = false, ref4 = ["source", "guard", "step", "name", "index"], k = 0, len2 = ref4.length; k < len2; k++)
                      (attribute = ref4[k], !!this[attribute]) && (this[attribute].traverseChildren(true, function(node) {
                        var comment, l, len3, ref5;
                        if (node.comments) {
                          for (ref5 = node.comments, l = 0, len3 = ref5.length; l < len3; l++)
                            comment = ref5[l], comment.newLine = comment.unshift = true;
                          return moveComments(node, _this80[attribute]);
                        }
                      }), moveComments(this[attribute], this));
                    return this;
                  } }, { key: "compileNode", value: function compileNode(o) {
                    var _slice1$call19, _slice1$call20, body, bodyFragments, compare, compareDown, declare, declareDown, defPart, down, forClose, forCode, forPartFragments, fragments, guardPart, idt1, increment, index, ivar, kvar, kvarAssign, last, lvar, name, namePart, ref, ref1, resultPart, returnResult, rvar, scope, source, step, stepNum, stepVar, svar, varPart;
                    if (body = Block.wrap([this.body]), ref1 = body.expressions, _slice1$call19 = slice1.call(ref1, -1), _slice1$call20 = _slicedToArray(_slice1$call19, 1), last = _slice1$call20[0], _slice1$call19, (null == last ? void 0 : last.jumps()) instanceof Return && (this.returns = false), source = this.range ? this.source.base : this.source, scope = o.scope, this.pattern || (name = this.name && this.name.compile(o, LEVEL_LIST)), index = this.index && this.index.compile(o, LEVEL_LIST), name && !this.pattern && scope.find(name), index && !(this.index instanceof Value) && scope.find(index), this.returns && (rvar = scope.freeVariable("results")), this.from ? this.pattern && (ivar = scope.freeVariable("x", { single: true })) : ivar = this.object && index || scope.freeVariable("i", { single: true }), kvar = (this.range || this.from) && name || index || ivar, kvarAssign = kvar === ivar ? "" : "".concat(kvar, " = "), this.step && !this.range) {
                      var _this$cacheToCodeFrag9 = this.cacheToCodeFragments(this.step.cache(o, LEVEL_LIST, shouldCacheOrIsAssignable)), _this$cacheToCodeFrag10 = _slicedToArray(_this$cacheToCodeFrag9, 2);
                      step = _this$cacheToCodeFrag10[0], stepVar = _this$cacheToCodeFrag10[1], this.step.isNumber() && (stepNum = parseNumber(stepVar));
                    }
                    return this.pattern && (name = ivar), varPart = "", guardPart = "", defPart = "", idt1 = this.tab + TAB, this.range ? forPartFragments = source.compileToFragments(merge(o, { index: ivar, name, step: this.step, shouldCache: shouldCacheOrIsAssignable })) : (svar = this.source.compile(o, LEVEL_LIST), (name || this.own) && !(this.source.unwrap() instanceof IdentifierLiteral) && (defPart += "".concat(this.tab).concat(ref = scope.freeVariable("ref"), " = ").concat(svar, ";\n"), svar = ref), name && !this.pattern && !this.from && (namePart = "".concat(name, " = ").concat(svar, "[").concat(kvar, "]")), !this.object && !this.from && (step !== stepVar && (defPart += "".concat(this.tab).concat(step, ";\n")), down = 0 > stepNum, !(this.step && null != stepNum && down) && (lvar = scope.freeVariable("len")), declare = "".concat(kvarAssign).concat(ivar, " = 0, ").concat(lvar, " = ").concat(svar, ".length"), declareDown = "".concat(kvarAssign).concat(ivar, " = ").concat(svar, ".length - 1"), compare = "".concat(ivar, " < ").concat(lvar), compareDown = "".concat(ivar, " >= 0"), this.step ? (null == stepNum ? (compare = "".concat(stepVar, " > 0 ? ").concat(compare, " : ").concat(compareDown), declare = "(".concat(stepVar, " > 0 ? (").concat(declare, ") : ").concat(declareDown, ")")) : down && (compare = compareDown, declare = declareDown), increment = "".concat(ivar, " += ").concat(stepVar)) : increment = "".concat(kvar === ivar ? "".concat(ivar, "++") : "++".concat(ivar)), forPartFragments = [this.makeCode("".concat(declare, "; ").concat(compare, "; ").concat(kvarAssign).concat(increment))])), this.returns && (resultPart = "".concat(this.tab).concat(rvar, " = [];\n"), returnResult = "\n".concat(this.tab, "return ").concat(rvar, ";"), body.makeReturn(rvar)), this.guard && (1 < body.expressions.length ? body.expressions.unshift(new If(new Parens(this.guard).invert(), new StatementLiteral("continue"))) : this.guard && (body = Block.wrap([new If(this.guard, body)]))), this.pattern && body.expressions.unshift(new Assign(this.name, this.from ? new IdentifierLiteral(kvar) : new Literal("".concat(svar, "[").concat(kvar, "]")))), namePart && (varPart = "\n".concat(idt1).concat(namePart, ";")), this.object ? (forPartFragments = [this.makeCode("".concat(kvar, " in ").concat(svar))], this.own && (guardPart = "\n".concat(idt1, "if (!").concat(utility("hasProp", o), ".call(").concat(svar, ", ").concat(kvar, ")) continue;"))) : this.from && (this["await"] ? (forPartFragments = new Op("await", new Parens(new Literal("".concat(kvar, " of ").concat(svar)))), forPartFragments = forPartFragments.compileToFragments(o, LEVEL_TOP)) : forPartFragments = [this.makeCode("".concat(kvar, " of ").concat(svar))]), bodyFragments = body.compileToFragments(merge(o, { indent: idt1 }), LEVEL_TOP), bodyFragments && 0 < bodyFragments.length && (bodyFragments = [].concat(this.makeCode("\n"), bodyFragments, this.makeCode("\n"))), fragments = [this.makeCode(defPart)], resultPart && fragments.push(this.makeCode(resultPart)), forCode = this["await"] ? "for " : "for (", forClose = this["await"] ? "" : ")", fragments = fragments.concat(this.makeCode(this.tab), this.makeCode(forCode), forPartFragments, this.makeCode("".concat(forClose, " {").concat(guardPart).concat(varPart)), bodyFragments, this.makeCode(this.tab), this.makeCode("}")), returnResult && fragments.push(this.makeCode(returnResult)), fragments;
                  } }, { key: "astNode", value: function astNode(o) {
                    var addToScope, ref1, ref2;
                    return addToScope = function(name) {
                      var alreadyDeclared;
                      return alreadyDeclared = o.scope.find(name.value), name.isDeclaration = !alreadyDeclared;
                    }, null != (ref1 = this.name) && ref1.eachName(addToScope, { checkAssignability: false }), null != (ref2 = this.index) && ref2.eachName(addToScope, { checkAssignability: false }), _get(_getPrototypeOf(For3.prototype), "astNode", this).call(this, o);
                  } }, { key: "astType", value: function astType() {
                    return "For";
                  } }, { key: "astProperties", value: function astProperties(o) {
                    var ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9;
                    return { source: null == (ref1 = this.source) ? void 0 : ref1.ast(o), body: this.body.ast(o, LEVEL_TOP), guard: null == (ref2 = null == (ref3 = this.guard) ? void 0 : ref3.ast(o)) ? null : ref2, name: null == (ref4 = null == (ref5 = this.name) ? void 0 : ref5.ast(o)) ? null : ref4, index: null == (ref6 = null == (ref7 = this.index) ? void 0 : ref7.ast(o)) ? null : ref6, step: null == (ref8 = null == (ref9 = this.step) ? void 0 : ref9.ast(o)) ? null : ref8, postfix: !!this.postfix, own: !!this.own, await: !!this["await"], style: function() {
                      switch (false) {
                        case !this.from:
                          return "from";
                        case !this.object:
                          return "of";
                        case !this.name:
                          return "in";
                        default:
                          return "range";
                      }
                    }.call(this) };
                  } }]), For3;
                }(While);
                return For2.prototype.children = ["body", "source", "guard", "step"], For2;
              }.call(this), exports2.Switch = Switch = function() {
                var Switch2 = function(_Base57) {
                  "use strict";
                  function Switch3(subject, cases1, otherwise) {
                    var _this81;
                    return _classCallCheck(this, Switch3), _this81 = _possibleConstructorReturn(this, _getPrototypeOf(Switch3).call(this)), _this81.subject = subject, _this81.cases = cases1, _this81.otherwise = otherwise, _this81;
                  }
                  return _inherits(Switch3, _Base57), _createClass(Switch3, [{ key: "jumps", value: function jumps() {
                    var o = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : { block: true }, block, j, jumpNode, len1, ref1, ref2;
                    for (ref1 = this.cases, j = 0, len1 = ref1.length; j < len1; j++)
                      if (block = ref1[j].block, jumpNode = block.jumps(o))
                        return jumpNode;
                    return null == (ref2 = this.otherwise) ? void 0 : ref2.jumps(o);
                  } }, { key: "makeReturn", value: function makeReturn(results, mark) {
                    var block, j, len1, ref1, ref2;
                    for (ref1 = this.cases, j = 0, len1 = ref1.length; j < len1; j++)
                      block = ref1[j].block, block.makeReturn(results, mark);
                    return results && (this.otherwise || (this.otherwise = new Block([new Literal("void 0")]))), null != (ref2 = this.otherwise) && ref2.makeReturn(results, mark), this;
                  } }, { key: "compileNode", value: function compileNode(o) {
                    var block, body, cond, conditions, expr, fragments, i, idt1, idt2, j, k, len1, len2, ref1, ref2;
                    for (idt1 = o.indent + TAB, idt2 = o.indent = idt1 + TAB, fragments = [].concat(this.makeCode(this.tab + "switch ("), this.subject ? this.subject.compileToFragments(o, LEVEL_PAREN) : this.makeCode("false"), this.makeCode(") {\n")), ref1 = this.cases, i = j = 0, len1 = ref1.length; j < len1; i = ++j) {
                      var _ref1$i = ref1[i];
                      for (conditions = _ref1$i.conditions, block = _ref1$i.block, ref2 = flatten([conditions]), k = 0, len2 = ref2.length; k < len2; k++)
                        cond = ref2[k], this.subject || (cond = cond.invert()), fragments = fragments.concat(this.makeCode(idt1 + "case "), cond.compileToFragments(o, LEVEL_PAREN), this.makeCode(":\n"));
                      if (0 < (body = block.compileToFragments(o, LEVEL_TOP)).length && (fragments = fragments.concat(body, this.makeCode("\n"))), i === this.cases.length - 1 && !this.otherwise)
                        break;
                      (expr = this.lastNode(block.expressions), !(expr instanceof Return || expr instanceof Throw || expr instanceof Literal && expr.jumps() && "debugger" !== expr.value)) && fragments.push(cond.makeCode(idt2 + "break;\n"));
                    }
                    if (this.otherwise && this.otherwise.expressions.length) {
                      var _fragments13;
                      (_fragments13 = fragments).push.apply(_fragments13, [this.makeCode(idt1 + "default:\n")].concat(_toConsumableArray(this.otherwise.compileToFragments(o, LEVEL_TOP)), [this.makeCode("\n")]));
                    }
                    return fragments.push(this.makeCode(this.tab + "}")), fragments;
                  } }, { key: "astType", value: function astType() {
                    return "SwitchStatement";
                  } }, { key: "casesAst", value: function casesAst(o) {
                    var caseIndex, caseLocationData, cases, consequent, j, k, kase, l, lastTestIndex, len1, len2, len3, ref1, ref2, results1, test, testConsequent, testIndex, tests;
                    for (cases = [], ref1 = this.cases, caseIndex = j = 0, len1 = ref1.length; j < len1; caseIndex = ++j) {
                      kase = ref1[caseIndex];
                      var _kase = kase;
                      for (tests = _kase.conditions, consequent = _kase.block, tests = flatten([tests]), lastTestIndex = tests.length - 1, testIndex = k = 0, len2 = tests.length; k < len2; testIndex = ++k)
                        test = tests[testIndex], testConsequent = testIndex === lastTestIndex ? consequent : null, caseLocationData = test.locationData, (null == testConsequent ? void 0 : testConsequent.expressions.length) && (caseLocationData = mergeLocationData(caseLocationData, testConsequent.expressions[testConsequent.expressions.length - 1].locationData)), 0 === testIndex && (caseLocationData = mergeLocationData(caseLocationData, kase.locationData, { justLeading: true })), testIndex === lastTestIndex && (caseLocationData = mergeLocationData(caseLocationData, kase.locationData, { justEnding: true })), cases.push(new SwitchCase(test, testConsequent, { trailing: testIndex === lastTestIndex }).withLocationDataFrom({ locationData: caseLocationData }));
                    }
                    for ((null == (ref2 = this.otherwise) ? void 0 : ref2.expressions.length) && cases.push(new SwitchCase(null, this.otherwise).withLocationDataFrom(this.otherwise)), results1 = [], l = 0, len3 = cases.length; l < len3; l++)
                      kase = cases[l], results1.push(kase.ast(o));
                    return results1;
                  } }, { key: "astProperties", value: function astProperties(o) {
                    var ref1, ref2;
                    return { discriminant: null == (ref1 = null == (ref2 = this.subject) ? void 0 : ref2.ast(o, LEVEL_PAREN)) ? null : ref1, cases: this.casesAst(o) };
                  } }]), Switch3;
                }(Base);
                return Switch2.prototype.children = ["subject", "cases", "otherwise"], Switch2.prototype.isStatement = YES, Switch2;
              }.call(this), SwitchCase = function() {
                var SwitchCase2 = function(_Base58) {
                  "use strict";
                  function SwitchCase3(test1, block1) {
                    var _ref66 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, trailing = _ref66.trailing, _this82;
                    return _classCallCheck(this, SwitchCase3), _this82 = _possibleConstructorReturn(this, _getPrototypeOf(SwitchCase3).call(this)), _this82.test = test1, _this82.block = block1, _this82.trailing = trailing, _this82;
                  }
                  return _inherits(SwitchCase3, _Base58), _createClass(SwitchCase3, [{ key: "astProperties", value: function astProperties(o) {
                    var ref1, ref2, ref3, ref4;
                    return { test: null == (ref1 = null == (ref2 = this.test) ? void 0 : ref2.ast(o, LEVEL_PAREN)) ? null : ref1, consequent: null == (ref3 = null == (ref4 = this.block) ? void 0 : ref4.ast(o, LEVEL_TOP).body) ? [] : ref3, trailing: !!this.trailing };
                  } }]), SwitchCase3;
                }(Base);
                return SwitchCase2.prototype.children = ["test", "block"], SwitchCase2;
              }.call(this), exports2.SwitchWhen = SwitchWhen = function() {
                var SwitchWhen2 = function(_Base59) {
                  "use strict";
                  function SwitchWhen3(conditions1, block1) {
                    var _this83;
                    return _classCallCheck(this, SwitchWhen3), _this83 = _possibleConstructorReturn(this, _getPrototypeOf(SwitchWhen3).call(this)), _this83.conditions = conditions1, _this83.block = block1, _this83;
                  }
                  return _inherits(SwitchWhen3, _Base59), SwitchWhen3;
                }(Base);
                return SwitchWhen2.prototype.children = ["conditions", "block"], SwitchWhen2;
              }.call(this), exports2.If = If = function() {
                var If2 = function(_Base60) {
                  "use strict";
                  function If3(condition1, body1) {
                    var options = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, _this84;
                    return _classCallCheck(this, If3), _this84 = _possibleConstructorReturn(this, _getPrototypeOf(If3).call(this)), _this84.condition = condition1, _this84.body = body1, _this84.elseBody = null, _this84.isChain = false, _this84.soak = options.soak, _this84.postfix = options.postfix, _this84.type = options.type, _this84.condition.comments && moveComments(_this84.condition, _assertThisInitialized(_this84)), _this84;
                  }
                  return _inherits(If3, _Base60), _createClass(If3, [{ key: "bodyNode", value: function bodyNode() {
                    var ref1;
                    return null == (ref1 = this.body) ? void 0 : ref1.unwrap();
                  } }, { key: "elseBodyNode", value: function elseBodyNode() {
                    var ref1;
                    return null == (ref1 = this.elseBody) ? void 0 : ref1.unwrap();
                  } }, { key: "addElse", value: function addElse(elseBody) {
                    return this.isChain ? (this.elseBodyNode().addElse(elseBody), this.locationData = mergeLocationData(this.locationData, this.elseBodyNode().locationData)) : (this.isChain = elseBody instanceof If3, this.elseBody = this.ensureBlock(elseBody), this.elseBody.updateLocationDataIfMissing(elseBody.locationData), null != this.locationData && null != this.elseBody.locationData && (this.locationData = mergeLocationData(this.locationData, this.elseBody.locationData))), this;
                  } }, { key: "isStatement", value: function isStatement(o) {
                    var ref1;
                    return (null == o ? void 0 : o.level) === LEVEL_TOP || this.bodyNode().isStatement(o) || (null == (ref1 = this.elseBodyNode()) ? void 0 : ref1.isStatement(o));
                  } }, { key: "jumps", value: function jumps(o) {
                    var ref1;
                    return this.body.jumps(o) || (null == (ref1 = this.elseBody) ? void 0 : ref1.jumps(o));
                  } }, { key: "compileNode", value: function compileNode(o) {
                    return this.isStatement(o) ? this.compileStatement(o) : this.compileExpression(o);
                  } }, { key: "makeReturn", value: function makeReturn(results, mark) {
                    var ref1, ref2;
                    return mark ? (null != (ref1 = this.body) && ref1.makeReturn(results, mark), void (null != (ref2 = this.elseBody) && ref2.makeReturn(results, mark))) : (results && (this.elseBody || (this.elseBody = new Block([new Literal("void 0")]))), this.body && (this.body = new Block([this.body.makeReturn(results)])), this.elseBody && (this.elseBody = new Block([this.elseBody.makeReturn(results)])), this);
                  } }, { key: "ensureBlock", value: function ensureBlock(node) {
                    return node instanceof Block ? node : new Block([node]);
                  } }, { key: "compileStatement", value: function compileStatement(o) {
                    var answer, body, child, cond, exeq, ifPart, indent;
                    return (child = del(o, "chainChild"), exeq = del(o, "isExistentialEquals"), exeq) ? new If3(this.processedCondition().invert(), this.elseBodyNode(), { type: "if" }).compileToFragments(o) : (indent = o.indent + TAB, cond = this.processedCondition().compileToFragments(o, LEVEL_PAREN), body = this.ensureBlock(this.body).compileToFragments(merge(o, { indent })), ifPart = [].concat(this.makeCode("if ("), cond, this.makeCode(") {\n"), body, this.makeCode("\n".concat(this.tab, "}"))), child || ifPart.unshift(this.makeCode(this.tab)), !this.elseBody) ? ifPart : (answer = ifPart.concat(this.makeCode(" else ")), this.isChain ? (o.chainChild = true, answer = answer.concat(this.elseBody.unwrap().compileToFragments(o, LEVEL_TOP))) : answer = answer.concat(this.makeCode("{\n"), this.elseBody.compileToFragments(merge(o, { indent }), LEVEL_TOP), this.makeCode("\n".concat(this.tab, "}"))), answer);
                  } }, { key: "compileExpression", value: function compileExpression(o) {
                    var alt, body, cond, fragments;
                    return cond = this.processedCondition().compileToFragments(o, LEVEL_COND), body = this.bodyNode().compileToFragments(o, LEVEL_LIST), alt = this.elseBodyNode() ? this.elseBodyNode().compileToFragments(o, LEVEL_LIST) : [this.makeCode("void 0")], fragments = cond.concat(this.makeCode(" ? "), body, this.makeCode(" : "), alt), o.level >= LEVEL_COND ? this.wrapInParentheses(fragments) : fragments;
                  } }, { key: "unfoldSoak", value: function unfoldSoak() {
                    return this.soak && this;
                  } }, { key: "processedCondition", value: function processedCondition() {
                    return null == this.processedConditionCache ? this.processedConditionCache = "unless" === this.type ? this.condition.invert() : this.condition : this.processedConditionCache;
                  } }, { key: "isStatementAst", value: function isStatementAst(o) {
                    return o.level === LEVEL_TOP;
                  } }, { key: "astType", value: function astType(o) {
                    return this.isStatementAst(o) ? "IfStatement" : "ConditionalExpression";
                  } }, { key: "astProperties", value: function astProperties(o) {
                    var isStatement, ref1, ref2, ref3, ref4;
                    return isStatement = this.isStatementAst(o), { test: this.condition.ast(o, isStatement ? LEVEL_PAREN : LEVEL_COND), consequent: isStatement ? this.body.ast(o, LEVEL_TOP) : this.bodyNode().ast(o, LEVEL_TOP), alternate: this.isChain ? this.elseBody.unwrap().ast(o, isStatement ? LEVEL_TOP : LEVEL_COND) : isStatement || 1 !== (null == (ref1 = this.elseBody) || null == (ref2 = ref1.expressions) ? void 0 : ref2.length) ? null == (ref3 = null == (ref4 = this.elseBody) ? void 0 : ref4.ast(o, LEVEL_TOP)) ? null : ref3 : this.elseBody.expressions[0].ast(o, LEVEL_TOP), postfix: !!this.postfix, inverted: "unless" === this.type };
                  } }]), If3;
                }(Base);
                return If2.prototype.children = ["condition", "body", "elseBody"], If2;
              }.call(this), exports2.Sequence = Sequence = function() {
                var Sequence2 = function(_Base61) {
                  "use strict";
                  function Sequence3(expressions1) {
                    var _this85;
                    return _classCallCheck(this, Sequence3), _this85 = _possibleConstructorReturn(this, _getPrototypeOf(Sequence3).call(this)), _this85.expressions = expressions1, _this85;
                  }
                  return _inherits(Sequence3, _Base61), _createClass(Sequence3, [{ key: "astNode", value: function astNode(o) {
                    return 1 === this.expressions.length ? this.expressions[0].ast(o) : _get(_getPrototypeOf(Sequence3.prototype), "astNode", this).call(this, o);
                  } }, { key: "astType", value: function astType() {
                    return "SequenceExpression";
                  } }, { key: "astProperties", value: function astProperties(o) {
                    var expression;
                    return { expressions: function() {
                      var j, len1, ref1, results1;
                      for (ref1 = this.expressions, results1 = [], j = 0, len1 = ref1.length; j < len1; j++)
                        expression = ref1[j], results1.push(expression.ast(o));
                      return results1;
                    }.call(this) };
                  } }]), Sequence3;
                }(Base);
                return Sequence2.prototype.children = ["expressions"], Sequence2;
              }.call(this), UTILITIES = { modulo: function modulo() {
                return "function(a, b) { return (+a % (b = +b) + b) % b; }";
              }, boundMethodCheck: function boundMethodCheck() {
                return "function(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new Error('Bound instance method accessed before binding'); } }";
              }, hasProp: function hasProp() {
                return "{}.hasOwnProperty";
              }, indexOf: function() {
                return "[].indexOf";
              }, slice: function slice() {
                return "[].slice";
              }, splice: function() {
                return "[].splice";
              } }, LEVEL_TOP = 1, LEVEL_PAREN = 2, LEVEL_LIST = 3, LEVEL_COND = 4, LEVEL_OP = 5, LEVEL_ACCESS = 6, TAB = "  ", SIMPLENUM = /^[+-]?\d+$/, SIMPLE_STRING_OMIT = /\s*\n\s*/g, LEADING_BLANK_LINE = /^[^\n\S]*\n/, TRAILING_BLANK_LINE = /\n[^\n\S]*$/, STRING_OMIT = /((?:\\\\)+)|\\[^\S\n]*\n\s*/g, HEREGEX_OMIT = /((?:\\\\)+)|\\(\s)|\s+(?:#.*)?/g, utility = function(name, o) {
                var ref, root2;
                return root2 = o.scope.root, name in root2.utilities ? root2.utilities[name] : (ref = root2.freeVariable(name), root2.assign(ref, UTILITIES[name](o)), root2.utilities[name] = ref);
              }, multident = function(code, tab) {
                var includingFirstLine = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2], endsWithNewLine;
                return endsWithNewLine = "\n" === code[code.length - 1], code = (includingFirstLine ? tab : "") + code.replace(/\n/g, "$&".concat(tab)), code = code.replace(/\s+$/, ""), endsWithNewLine && (code += "\n"), code;
              }, indentInitial = function(fragments, node) {
                var fragment, fragmentIndex, j, len1;
                for (fragmentIndex = j = 0, len1 = fragments.length; j < len1; fragmentIndex = ++j)
                  if (fragment = fragments[fragmentIndex], fragment.isHereComment)
                    fragment.code = multident(fragment.code, node.tab);
                  else {
                    fragments.splice(fragmentIndex, 0, node.makeCode("".concat(node.tab)));
                    break;
                  }
                return fragments;
              }, hasLineComments = function(node) {
                var comment, j, len1, ref1;
                if (!node.comments)
                  return false;
                for (ref1 = node.comments, j = 0, len1 = ref1.length; j < len1; j++)
                  if (comment = ref1[j], false === comment.here)
                    return true;
                return false;
              }, moveComments = function(from, to) {
                if (null != from && from.comments)
                  return attachCommentsToNode(from.comments, to), delete from.comments;
              }, unshiftAfterComments = function(fragments, fragmentToInsert) {
                var fragment, fragmentIndex, inserted, j, len1;
                for (inserted = false, fragmentIndex = j = 0, len1 = fragments.length; j < len1; fragmentIndex = ++j)
                  if (fragment = fragments[fragmentIndex], !!!fragment.isComment) {
                    fragments.splice(fragmentIndex, 0, fragmentToInsert), inserted = true;
                    break;
                  }
                return inserted || fragments.push(fragmentToInsert), fragments;
              }, isLiteralArguments = function(node) {
                return node instanceof IdentifierLiteral && "arguments" === node.value;
              }, isLiteralThis = function(node) {
                return node instanceof ThisLiteral || node instanceof Code && node.bound;
              }, shouldCacheOrIsAssignable = function(node) {
                return node.shouldCache() || ("function" == typeof node.isAssignable ? node.isAssignable() : void 0);
              }, _unfoldSoak = function(o, parent, name) {
                var ifn;
                if (ifn = parent[name].unfoldSoak(o))
                  return parent[name] = ifn.body, ifn.body = new Value(parent), ifn;
              }, makeDelimitedLiteral = function(body) {
                var _ref67 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, delimiterOption = _ref67.delimiter, escapeNewlines = _ref67.escapeNewlines, _double2 = _ref67.double, _ref67$includeDelimit = _ref67.includeDelimiters, _ref67$escapeDelimite = _ref67.escapeDelimiter, escapeDelimiter = void 0 === _ref67$escapeDelimite || _ref67$escapeDelimite, convertTrailingNullEscapes = _ref67.convertTrailingNullEscapes, escapeTemplateLiteralCurlies, printedDelimiter, regex;
                return "" === body && "/" === delimiterOption && (body = "(?:)"), escapeTemplateLiteralCurlies = "`" === delimiterOption, regex = RegExp("(\\\\\\\\)|(\\\\0(?=\\d))".concat(convertTrailingNullEscapes ? /|(\\0)$/.source : "").concat(escapeDelimiter ? RegExp("|\\\\?(".concat(delimiterOption, ")")).source : "").concat(escapeTemplateLiteralCurlies ? /|\\?(\$\{)/.source : "", "|\\\\?(?:").concat(escapeNewlines ? "(\n)|" : "", "(\\r)|(\\u2028)|(\\u2029))|(\\\\.)"), "g"), body = body.replace(regex, function(match, backslash, nul) {
                  for (var _len2 = arguments.length, args = Array(3 < _len2 ? _len2 - 3 : 0), _key2 = 3, cr, delimiter, lf, ls, other, ps, templateLiteralCurly, trailingNullEscape; _key2 < _len2; _key2++)
                    args[_key2 - 3] = arguments[_key2];
                  switch (trailingNullEscape = convertTrailingNullEscapes ? args.shift() : void 0, delimiter = escapeDelimiter ? args.shift() : void 0, templateLiteralCurly = escapeTemplateLiteralCurlies ? args.shift() : void 0, lf = escapeNewlines ? args.shift() : void 0, cr = args[0], ls = args[1], ps = args[2], other = args[3], false) {
                    case !backslash:
                      return _double2 ? backslash + backslash : backslash;
                    case !nul:
                      return "\\x00";
                    case !trailingNullEscape:
                      return "\\x00";
                    case !delimiter:
                      return "\\".concat(delimiter);
                    case !templateLiteralCurly:
                      return "\\${";
                    case !lf:
                      return "\\n";
                    case !cr:
                      return "\\r";
                    case !ls:
                      return "\\u2028";
                    case !ps:
                      return "\\u2029";
                    case !other:
                      return _double2 ? "\\".concat(other) : other;
                  }
                }), printedDelimiter = void 0 === _ref67$includeDelimit || _ref67$includeDelimit ? delimiterOption : "", "".concat(printedDelimiter).concat(body).concat(printedDelimiter);
              }, sniffDirectives = function(expressions) {
                var _ref68 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, notFinalExpression = _ref68.notFinalExpression, expression, index, lastIndex, results1, unwrapped;
                for (index = 0, lastIndex = expressions.length - 1, results1 = []; index <= lastIndex && !(index === lastIndex && notFinalExpression); ) {
                  if (expression = expressions[index], (unwrapped = null == expression ? void 0 : "function" == typeof expression.unwrap ? expression.unwrap() : void 0) instanceof PassthroughLiteral && unwrapped.generated) {
                    index++;
                    continue;
                  }
                  if (!(expression instanceof Value && expression.isString() && !expression.unwrap().shouldGenerateTemplateLiteral()))
                    break;
                  expressions[index] = new Directive(expression).withLocationDataFrom(expression), results1.push(index++);
                }
                return results1;
              }, astAsBlockIfNeeded = function(node, o) {
                var unwrapped;
                return unwrapped = node.unwrap(), unwrapped instanceof Block && 1 < unwrapped.expressions.length ? (unwrapped.makeReturn(null, true), unwrapped.ast(o, LEVEL_TOP)) : node.ast(o, LEVEL_PAREN);
              }, lesser = function(a, b) {
                return a < b ? a : b;
              }, greater = function(a, b) {
                return a > b ? a : b;
              }, isAstLocGreater = function(a, b) {
                return !!(a.line > b.line) || a.line === b.line && a.column > b.column;
              }, isLocationDataStartGreater = function(a, b) {
                return !!(a.first_line > b.first_line) || a.first_line === b.first_line && a.first_column > b.first_column;
              }, isLocationDataEndGreater = function(a, b) {
                return !!(a.last_line > b.last_line) || a.last_line === b.last_line && a.last_column > b.last_column;
              }, exports2.mergeLocationData = mergeLocationData = function(locationDataA, locationDataB) {
                var _ref69 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, justLeading = _ref69.justLeading, justEnding = _ref69.justEnding;
                return Object.assign(justEnding ? { first_line: locationDataA.first_line, first_column: locationDataA.first_column } : isLocationDataStartGreater(locationDataA, locationDataB) ? { first_line: locationDataB.first_line, first_column: locationDataB.first_column } : { first_line: locationDataA.first_line, first_column: locationDataA.first_column }, justLeading ? { last_line: locationDataA.last_line, last_column: locationDataA.last_column, last_line_exclusive: locationDataA.last_line_exclusive, last_column_exclusive: locationDataA.last_column_exclusive } : isLocationDataEndGreater(locationDataA, locationDataB) ? { last_line: locationDataA.last_line, last_column: locationDataA.last_column, last_line_exclusive: locationDataA.last_line_exclusive, last_column_exclusive: locationDataA.last_column_exclusive } : { last_line: locationDataB.last_line, last_column: locationDataB.last_column, last_line_exclusive: locationDataB.last_line_exclusive, last_column_exclusive: locationDataB.last_column_exclusive }, { range: [justEnding ? locationDataA.range[0] : lesser(locationDataA.range[0], locationDataB.range[0]), justLeading ? locationDataA.range[1] : greater(locationDataA.range[1], locationDataB.range[1])] });
              }, exports2.mergeAstLocationData = mergeAstLocationData = function(nodeA, nodeB) {
                var _ref70 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, justLeading = _ref70.justLeading, justEnding = _ref70.justEnding;
                return { loc: { start: justEnding ? nodeA.loc.start : isAstLocGreater(nodeA.loc.start, nodeB.loc.start) ? nodeB.loc.start : nodeA.loc.start, end: justLeading ? nodeA.loc.end : isAstLocGreater(nodeA.loc.end, nodeB.loc.end) ? nodeA.loc.end : nodeB.loc.end }, range: [justEnding ? nodeA.range[0] : lesser(nodeA.range[0], nodeB.range[0]), justLeading ? nodeA.range[1] : greater(nodeA.range[1], nodeB.range[1])], start: justEnding ? nodeA.start : lesser(nodeA.start, nodeB.start), end: justLeading ? nodeA.end : greater(nodeA.end, nodeB.end) };
              }, exports2.jisonLocationDataToAstLocationData = jisonLocationDataToAstLocationData = function(_ref71) {
                var first_line = _ref71.first_line, first_column = _ref71.first_column, last_line_exclusive = _ref71.last_line_exclusive, last_column_exclusive = _ref71.last_column_exclusive, range = _ref71.range;
                return { loc: { start: { line: first_line + 1, column: first_column }, end: { line: last_line_exclusive + 1, column: last_column_exclusive } }, range: [range[0], range[1]], start: range[0], end: range[1] };
              }, zeroWidthLocationDataFromEndLocation = function(_ref72) {
                var _ref72$range = _slicedToArray(_ref72.range, 2), endRange = _ref72$range[1], last_line_exclusive = _ref72.last_line_exclusive, last_column_exclusive = _ref72.last_column_exclusive;
                return { first_line: last_line_exclusive, first_column: last_column_exclusive, last_line: last_line_exclusive, last_column: last_column_exclusive, last_line_exclusive, last_column_exclusive, range: [endRange, endRange] };
              }, extractSameLineLocationDataFirst = function(numChars) {
                return function(_ref73) {
                  var _ref73$range = _slicedToArray(_ref73.range, 1), startRange = _ref73$range[0], first_line = _ref73.first_line, first_column = _ref73.first_column;
                  return { first_line, first_column, last_line: first_line, last_column: first_column + numChars - 1, last_line_exclusive: first_line, last_column_exclusive: first_column + numChars, range: [startRange, startRange + numChars] };
                };
              }, extractSameLineLocationDataLast = function(numChars) {
                return function(_ref74) {
                  var _ref74$range = _slicedToArray(_ref74.range, 2), endRange = _ref74$range[1], last_line = _ref74.last_line, last_column = _ref74.last_column, last_line_exclusive = _ref74.last_line_exclusive, last_column_exclusive = _ref74.last_column_exclusive;
                  return { first_line: last_line, first_column: last_column - (numChars - 1), last_line, last_column, last_line_exclusive, last_column_exclusive, range: [endRange - numChars, endRange] };
                };
              }, emptyExpressionLocationData = function(_ref75) {
                var element = _ref75.interpolationNode, openingBrace = _ref75.openingBrace, closingBrace = _ref75.closingBrace;
                return { first_line: element.locationData.first_line, first_column: element.locationData.first_column + openingBrace.length, last_line: element.locationData.last_line, last_column: element.locationData.last_column - closingBrace.length, last_line_exclusive: element.locationData.last_line, last_column_exclusive: element.locationData.last_column, range: [element.locationData.range[0] + openingBrace.length, element.locationData.range[1] - closingBrace.length] };
              };
            }.call(this), { exports: exports2 }.exports;
          }(), require2["./sourcemap"] = function() {
            var module2 = { exports: {} };
            return function() {
              var LineMap, SourceMap;
              LineMap = function() {
                "use strict";
                function LineMap2(line1) {
                  _classCallCheck(this, LineMap2), this.line = line1, this.columns = [];
                }
                return _createClass(LineMap2, [{ key: "add", value: function add(column, _ref76) {
                  var _ref77 = _slicedToArray(_ref76, 2), sourceLine = _ref77[0], sourceColumn = _ref77[1], options = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                  return this.columns[column] && options.noReplace ? void 0 : this.columns[column] = { line: this.line, column, sourceLine, sourceColumn };
                } }, { key: "sourceLocation", value: function sourceLocation(column) {
                  for (var mapping; !((mapping = this.columns[column]) || 0 >= column); )
                    column--;
                  return mapping && [mapping.sourceLine, mapping.sourceColumn];
                } }]), LineMap2;
              }(), SourceMap = function() {
                var SourceMap2 = function() {
                  "use strict";
                  function SourceMap3() {
                    _classCallCheck(this, SourceMap3), this.lines = [];
                  }
                  return _createClass(SourceMap3, [{ key: "add", value: function add(sourceLocation, generatedLocation) {
                    var options = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, _generatedLocation = _slicedToArray(generatedLocation, 2), base, column, line, lineMap;
                    return line = _generatedLocation[0], column = _generatedLocation[1], lineMap = (base = this.lines)[line] || (base[line] = new LineMap(line)), lineMap.add(column, sourceLocation, options);
                  } }, { key: "sourceLocation", value: function sourceLocation(_ref78) {
                    for (var _ref79 = _slicedToArray(_ref78, 2), line = _ref79[0], column = _ref79[1], lineMap; !((lineMap = this.lines[line]) || 0 >= line); )
                      line--;
                    return lineMap && lineMap.sourceLocation(column);
                  } }, { key: "generate", value: function generate() {
                    var options = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, code = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null, buffer, i, j, lastColumn, lastSourceColumn, lastSourceLine, len, len1, lineMap, lineNumber, mapping, needComma, ref, ref1, sources, v3, writingline;
                    for (writingline = 0, lastColumn = 0, lastSourceLine = 0, lastSourceColumn = 0, needComma = false, buffer = "", ref = this.lines, lineNumber = i = 0, len = ref.length; i < len; lineNumber = ++i)
                      if (lineMap = ref[lineNumber], lineMap) {
                        for (ref1 = lineMap.columns, j = 0, len1 = ref1.length; j < len1; j++)
                          if (mapping = ref1[j], !!mapping) {
                            for (; writingline < mapping.line; )
                              lastColumn = 0, needComma = false, buffer += ";", writingline++;
                            needComma && (buffer += ",", needComma = false), buffer += this.encodeVlq(mapping.column - lastColumn), lastColumn = mapping.column, buffer += this.encodeVlq(0), buffer += this.encodeVlq(mapping.sourceLine - lastSourceLine), lastSourceLine = mapping.sourceLine, buffer += this.encodeVlq(mapping.sourceColumn - lastSourceColumn), lastSourceColumn = mapping.sourceColumn, needComma = true;
                          }
                      }
                    return sources = options.sourceFiles ? options.sourceFiles : options.filename ? [options.filename] : ["<anonymous>"], v3 = { version: 3, file: options.generatedFile || "", sourceRoot: options.sourceRoot || "", sources, names: [], mappings: buffer }, (options.sourceMap || options.inlineMap) && (v3.sourcesContent = [code]), v3;
                  } }, { key: "encodeVlq", value: function encodeVlq(value) {
                    var answer, nextChunk, signBit, valueToEncode;
                    for (answer = "", signBit = 0 > value ? 1 : 0, valueToEncode = (_Mathabs(value) << 1) + signBit; valueToEncode || !answer; )
                      nextChunk = valueToEncode & VLQ_VALUE_MASK, valueToEncode >>= VLQ_SHIFT, valueToEncode && (nextChunk |= VLQ_CONTINUATION_BIT), answer += this.encodeBase64(nextChunk);
                    return answer;
                  } }, { key: "encodeBase64", value: function encodeBase64(value) {
                    return BASE64_CHARS[value] || function() {
                      throw new Error("Cannot Base64 encode value: ".concat(value));
                    }();
                  } }]), SourceMap3;
                }(), BASE64_CHARS, VLQ_CONTINUATION_BIT, VLQ_SHIFT, VLQ_VALUE_MASK;
                return VLQ_SHIFT = 5, VLQ_CONTINUATION_BIT = 1 << VLQ_SHIFT, VLQ_VALUE_MASK = VLQ_CONTINUATION_BIT - 1, BASE64_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", SourceMap2;
              }.call(this), module2.exports = SourceMap;
            }.call(this), module2.exports;
          }(), require2["./coffeescript"] = function() {
            var exports2 = {};
            return function() {
              var indexOf = [].indexOf, _require7 = require2("./lexer"), FILE_EXTENSIONS, Lexer, SourceMap, base64encode, checkShebangLine, compile, formatSourcePosition, getSourceMap, helpers, lexer, packageJson, parser, registerCompiled, sourceMaps, sources, withPrettyErrors;
              Lexer = _require7.Lexer;
              var _require8 = require2("./parser");
              parser = _require8.parser, helpers = require2("./helpers"), SourceMap = require2("./sourcemap"), packageJson = require2("../../package.json"), exports2.VERSION = packageJson.version, exports2.FILE_EXTENSIONS = FILE_EXTENSIONS = [".coffee", ".litcoffee", ".coffee.md"], exports2.helpers = helpers, base64encode = function(src) {
                switch (false) {
                  case "function" != typeof Buffer:
                    return Buffer.from(src).toString("base64");
                  case "function" != typeof btoa:
                    return btoa(encodeURIComponent(src).replace(/%([0-9A-F]{2})/g, function(match, p1) {
                      return _StringfromCharCode("0x" + p1);
                    }));
                  default:
                    throw new Error("Unable to base64 encode inline sourcemap.");
                }
              }, withPrettyErrors = function(fn) {
                return function(code) {
                  var options = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, err;
                  try {
                    return fn.call(this, code, options);
                  } catch (error) {
                    if (err = error, "string" != typeof code)
                      throw err;
                    throw helpers.updateSyntaxError(err, code, options.filename);
                  }
                };
              }, sources = {}, sourceMaps = {}, exports2.registerCompiled = registerCompiled = function(filename, source, sourcemap) {
                if (null == sources[filename] && (sources[filename] = []), sources[filename].push(source), null != sourcemap)
                  return null == sourceMaps[filename] && (sourceMaps[filename] = []), sourceMaps[filename].push(sourcemap);
              }, exports2.compile = compile = withPrettyErrors(function(code) {
                var options = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, ast, currentColumn, currentLine, encoded, filename, fragment, fragments, generateSourceMap, header, i, j, js, len, len1, map, newLines, nodes, range, ref, ref1, sourceCodeLastLine, sourceCodeNumberOfLines, sourceMapDataURI, sourceURL, token, tokens, transpiler, transpilerOptions, transpilerOutput, v3SourceMap;
                if (options = Object.assign({}, options), generateSourceMap = options.sourceMap || options.inlineMap || null == options.filename, filename = options.filename || "<anonymous>", checkShebangLine(filename, code), generateSourceMap && (map = new SourceMap()), tokens = lexer.tokenize(code, options), options.referencedVars = function() {
                  var i2, len2, results;
                  for (results = [], i2 = 0, len2 = tokens.length; i2 < len2; i2++)
                    token = tokens[i2], "IDENTIFIER" === token[0] && results.push(token[1]);
                  return results;
                }(), null == options.bare || true !== options.bare) {
                  for (i = 0, len = tokens.length; i < len; i++)
                    if (token = tokens[i], "IMPORT" === (ref = token[0]) || "EXPORT" === ref) {
                      options.bare = true;
                      break;
                    }
                }
                if (nodes = parser.parse(tokens), options.ast)
                  return nodes.allCommentTokens = helpers.extractAllCommentTokens(tokens), sourceCodeNumberOfLines = (code.match(/\r?\n/g) || "").length + 1, sourceCodeLastLine = /.*$/.exec(code)[0], ast = nodes.ast(options), range = [0, code.length], ast.start = ast.program.start = range[0], ast.end = ast.program.end = range[1], ast.range = ast.program.range = range, ast.loc.start = ast.program.loc.start = { line: 1, column: 0 }, ast.loc.end.line = ast.program.loc.end.line = sourceCodeNumberOfLines, ast.loc.end.column = ast.program.loc.end.column = sourceCodeLastLine.length, ast.tokens = tokens, ast;
                for (fragments = nodes.compileToFragments(options), currentLine = 0, options.header && (currentLine += 1), options.shiftLine && (currentLine += 1), currentColumn = 0, js = "", j = 0, len1 = fragments.length; j < len1; j++)
                  fragment = fragments[j], generateSourceMap && (fragment.locationData && !/^[;\s]*$/.test(fragment.code) && map.add([fragment.locationData.first_line, fragment.locationData.first_column], [currentLine, currentColumn], { noReplace: true }), newLines = helpers.count(fragment.code, "\n"), currentLine += newLines, newLines ? currentColumn = fragment.code.length - (fragment.code.lastIndexOf("\n") + 1) : currentColumn += fragment.code.length), js += fragment.code;
                if (options.header && (header = "Generated by CoffeeScript ".concat(this.VERSION), js = "// ".concat(header, "\n").concat(js)), generateSourceMap && (v3SourceMap = map.generate(options, code)), options.transpile) {
                  if ("object" !== _typeof(options.transpile))
                    throw new Error("The transpile option must be given an object with options to pass to Babel");
                  transpiler = options.transpile.transpile, delete options.transpile.transpile, transpilerOptions = Object.assign({}, options.transpile), v3SourceMap && null == transpilerOptions.inputSourceMap && (transpilerOptions.inputSourceMap = v3SourceMap), transpilerOutput = transpiler(js, transpilerOptions), js = transpilerOutput.code, v3SourceMap && transpilerOutput.map && (v3SourceMap = transpilerOutput.map);
                }
                return options.inlineMap && (encoded = base64encode(JSON.stringify(v3SourceMap)), sourceMapDataURI = "//# sourceMappingURL=data:application/json;base64,".concat(encoded), sourceURL = "//# sourceURL=".concat(null == (ref1 = options.filename) ? "coffeescript" : ref1), js = "".concat(js, "\n").concat(sourceMapDataURI, "\n").concat(sourceURL)), registerCompiled(filename, code, map), options.sourceMap ? { js, sourceMap: map, v3SourceMap: JSON.stringify(v3SourceMap, null, 2) } : js;
              }), exports2.tokens = withPrettyErrors(function(code, options) {
                return lexer.tokenize(code, options);
              }), exports2.nodes = withPrettyErrors(function(source, options) {
                return "string" == typeof source && (source = lexer.tokenize(source, options)), parser.parse(source);
              }), exports2.run = exports2.eval = exports2.register = function() {
                throw new Error("require index.coffee, not this file");
              }, lexer = new Lexer(), parser.lexer = { yylloc: { range: [] }, options: { ranges: true }, lex: function lex() {
                var tag, token;
                if (token = parser.tokens[this.pos++], token) {
                  var _token6 = token, _token7 = _slicedToArray(_token6, 3);
                  tag = _token7[0], this.yytext = _token7[1], this.yylloc = _token7[2], parser.errorToken = token.origin || token, this.yylineno = this.yylloc.first_line;
                } else
                  tag = "";
                return tag;
              }, setInput: function setInput(tokens) {
                return parser.tokens = tokens, this.pos = 0;
              }, upcomingInput: function upcomingInput() {
                return "";
              } }, parser.yy = require2("./nodes"), parser.yy.parseError = function(message, _ref80) {
                var token = _ref80.token, _parser = parser, errorLoc, errorTag, errorText, errorToken, tokens;
                errorToken = _parser.errorToken, tokens = _parser.tokens;
                var _errorToken = errorToken, _errorToken2 = _slicedToArray(_errorToken, 3);
                return errorTag = _errorToken2[0], errorText = _errorToken2[1], errorLoc = _errorToken2[2], errorText = function() {
                  switch (false) {
                    case errorToken !== tokens[tokens.length - 1]:
                      return "end of input";
                    case ("INDENT" !== errorTag && "OUTDENT" !== errorTag):
                      return "indentation";
                    case ("IDENTIFIER" !== errorTag && "NUMBER" !== errorTag && "INFINITY" !== errorTag && "STRING" !== errorTag && "STRING_START" !== errorTag && "REGEX" !== errorTag && "REGEX_START" !== errorTag):
                      return errorTag.replace(/_START$/, "").toLowerCase();
                    default:
                      return helpers.nameWhitespaceCharacter(errorText);
                  }
                }(), helpers.throwSyntaxError("unexpected ".concat(errorText), errorLoc);
              }, formatSourcePosition = function(frame, getSourceMapping) {
                var as, column, fileLocation, filename, functionName, isConstructor, isMethodCall, line, methodName, source, tp, typeName;
                return filename = void 0, fileLocation = "", frame.isNative() ? fileLocation = "native" : (frame.isEval() ? (filename = frame.getScriptNameOrSourceURL(), !filename && (fileLocation = "".concat(frame.getEvalOrigin(), ", "))) : filename = frame.getFileName(), filename || (filename = "<anonymous>"), line = frame.getLineNumber(), column = frame.getColumnNumber(), source = getSourceMapping(filename, line, column), fileLocation = source ? "".concat(filename, ":").concat(source[0], ":").concat(source[1]) : "".concat(filename, ":").concat(line, ":").concat(column)), functionName = frame.getFunctionName(), isConstructor = frame.isConstructor(), isMethodCall = !(frame.isToplevel() || isConstructor), isMethodCall ? (methodName = frame.getMethodName(), typeName = frame.getTypeName(), functionName ? (tp = as = "", typeName && functionName.indexOf(typeName) && (tp = "".concat(typeName, ".")), methodName && functionName.indexOf(".".concat(methodName)) !== functionName.length - methodName.length - 1 && (as = " [as ".concat(methodName, "]")), "".concat(tp).concat(functionName).concat(as, " (").concat(fileLocation, ")")) : "".concat(typeName, ".").concat(methodName || "<anonymous>", " (").concat(fileLocation, ")")) : isConstructor ? "new ".concat(functionName || "<anonymous>", " (").concat(fileLocation, ")") : functionName ? "".concat(functionName, " (").concat(fileLocation, ")") : fileLocation;
              }, getSourceMap = function(filename, line, column) {
                var answer, i, map, ref, ref1, sourceLocation;
                if (!("<anonymous>" === filename || (ref = filename.slice(filename.lastIndexOf(".")), 0 <= indexOf.call(FILE_EXTENSIONS, ref))))
                  return null;
                if ("<anonymous>" !== filename && null != sourceMaps[filename])
                  return sourceMaps[filename][sourceMaps[filename].length - 1];
                if (null != sourceMaps["<anonymous>"]) {
                  for (ref1 = sourceMaps["<anonymous>"], i = ref1.length - 1; 0 <= i; i += -1)
                    if (map = ref1[i], sourceLocation = map.sourceLocation([line - 1, column - 1]), null != (null == sourceLocation ? void 0 : sourceLocation[0]) && null != sourceLocation[1])
                      return map;
                }
                return null == sources[filename] ? null : (answer = compile(sources[filename][sources[filename].length - 1], { filename, sourceMap: true, literate: helpers.isLiterate(filename) }), answer.sourceMap);
              }, Error.prepareStackTrace = function(err, stack) {
                var frame, frames, getSourceMapping;
                return getSourceMapping = function(filename, line, column) {
                  var answer, sourceMap;
                  return sourceMap = getSourceMap(filename, line, column), null != sourceMap && (answer = sourceMap.sourceLocation([line - 1, column - 1])), null == answer ? null : [answer[0] + 1, answer[1] + 1];
                }, frames = function() {
                  var i, len, results;
                  for (results = [], i = 0, len = stack.length; i < len && (frame = stack[i], frame.getFunction() !== exports2.run); i++)
                    results.push("    at ".concat(formatSourcePosition(frame, getSourceMapping)));
                  return results;
                }(), "".concat(err.toString(), "\n").concat(frames.join("\n"), "\n");
              }, checkShebangLine = function(file, input) {
                var args, firstLine, ref, rest;
                if (firstLine = input.split(/$/m)[0], rest = null == firstLine ? void 0 : firstLine.match(/^#!\s*([^\s]+\s*)(.*)/), args = null == rest || null == (ref = rest[2]) ? void 0 : ref.split(/\s/).filter(function(s) {
                  return "" !== s;
                }), 1 < (null == args ? void 0 : args.length))
                  return console.error("The script to be run begins with a shebang line with more than one\nargument. This script will fail on platforms such as Linux which only\nallow a single argument."), console.error("The shebang line was: '".concat(firstLine, "' in file '").concat(file, "'")), console.error("The arguments were: ".concat(JSON.stringify(args)));
              };
            }.call(this), { exports: exports2 }.exports;
          }(), require2["./browser"] = function() {
            var module2 = { exports: {} };
            return function() {
              var indexOf = [].indexOf, CoffeeScript2, compile;
              CoffeeScript2 = require2("./coffeescript");
              var _CoffeeScript = CoffeeScript2;
              compile = _CoffeeScript.compile, CoffeeScript2.eval = function(code) {
                var options = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, globalRoot;
                return null == options.bare && (options.bare = true), globalRoot = "undefined" != typeof window && null !== window ? window : global, globalRoot.eval(compile(code, options));
              }, CoffeeScript2.run = function(code) {
                var options = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                return options.bare = true, options.shiftLine = true, Function(compile(code, options))();
              }, module2.exports = CoffeeScript2, "undefined" == typeof window || null === window || ("undefined" != typeof btoa && null !== btoa && "undefined" != typeof JSON && null !== JSON && (compile = function(code) {
                var options = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                return options.inlineMap = true, CoffeeScript2.compile(code, options);
              }), CoffeeScript2.load = function(url, callback) {
                var options = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, hold = !!(3 < arguments.length && void 0 !== arguments[3]) && arguments[3], xhr;
                return options.sourceFiles = [url], xhr = window.ActiveXObject ? new window.ActiveXObject("Microsoft.XMLHTTP") : new window.XMLHttpRequest(), xhr.open("GET", url, true), "overrideMimeType" in xhr && xhr.overrideMimeType("text/plain"), xhr.onreadystatechange = function() {
                  var param, ref;
                  if (4 === xhr.readyState) {
                    if (0 !== (ref = xhr.status) && 200 !== ref)
                      throw new Error("Could not load ".concat(url));
                    else if (param = [xhr.responseText, options], !hold) {
                      var _CoffeeScript2;
                      (_CoffeeScript2 = CoffeeScript2).run.apply(_CoffeeScript2, _toConsumableArray(param));
                    }
                    if (callback)
                      return callback(param);
                  }
                }, xhr.send(null);
              }, CoffeeScript2.runScripts = function() {
                var coffees, coffeetypes, _execute, i, index, j, len, s, script, scripts;
                for (scripts = window.document.getElementsByTagName("script"), coffeetypes = ["text/coffeescript", "text/literate-coffeescript"], coffees = function() {
                  var j2, len2, ref, results;
                  for (results = [], j2 = 0, len2 = scripts.length; j2 < len2; j2++)
                    s = scripts[j2], (ref = s.type, 0 <= indexOf.call(coffeetypes, ref)) && results.push(s);
                  return results;
                }(), index = 0, _execute = function execute() {
                  var param;
                  if (param = coffees[index], param instanceof Array) {
                    var _CoffeeScript3;
                    return (_CoffeeScript3 = CoffeeScript2).run.apply(_CoffeeScript3, _toConsumableArray(param)), index++, _execute();
                  }
                }, i = j = 0, len = coffees.length; j < len; i = ++j)
                  script = coffees[i], function(script2, i2) {
                    var options, source;
                    return options = { literate: script2.type === coffeetypes[1] }, source = script2.src || script2.getAttribute("data-src"), source ? (options.filename = source, CoffeeScript2.load(source, function(param) {
                      return coffees[i2] = param, _execute();
                    }, options, true)) : (options.filename = script2.id && "" !== script2.id ? script2.id : "coffeescript".concat(0 === i2 ? "" : i2), options.sourceFiles = ["embedded"], coffees[i2] = [script2.innerHTML, options]);
                  }(script, i);
                return _execute();
              }, this === window && (window.addEventListener ? window.addEventListener("DOMContentLoaded", CoffeeScript2.runScripts, false) : window.attachEvent("onload", CoffeeScript2.runScripts)));
            }.call(this), module2.exports;
          }(), require2["./browser"];
        }();
        "function" == typeof define && define.amd ? define(function() {
          return CoffeeScript;
        }) : root.CoffeeScript = CoffeeScript;
      })(exports);
    }
  });

  // src/playground/index.ts
  var require_playground = __commonJS({
    "src/playground/index.ts"(exports) {
      var import_coffeescript = __toESM(require_coffeescript());
      function compileCoffeeCode(code) {
        return import_coffeescript.CoffeeScript.compile(code);
      }
      function executeCode(code) {
        new Function(code)();
      }
      function clearResult() {
        const resultWrapper = getResultWrapper();
        if (resultWrapper) {
          resultWrapper.innerText = "";
        }
      }
      function logError(e) {
        const resultWrapper = getResultWrapper();
        if (resultWrapper) {
          const log = document.createElement("PRE");
          log.id = "errors";
          log.innerText = `There was an error:
${e}`;
          resultWrapper.append(log);
        }
      }
      function getResultWrapper() {
        return document.getElementById("result");
      }
      var _a;
      (_a = document.getElementById("play")) == null ? void 0 : _a.addEventListener("click", () => {
        clearResult();
        try {
          executeCode(compileCoffeeCode(editor.getValue()));
        } catch (e) {
          logError(e);
        }
      });
      var _a2;
      (_a2 = document.getElementById("reset")) == null ? void 0 : _a2.addEventListener("click", () => {
        clearResult();
      });
      var _a3;
      (_a3 = document.getElementById("select-example")) == null ? void 0 : _a3.addEventListener("change", (e) => __async(exports, null, function* () {
        var _a4;
        const file = (_a4 = e.currentTarget) == null ? void 0 : _a4.value;
        if (editor.getValue().trim() !== "") {
          if (confirm(
            "You will lose your current work. Are you sure you want to load an example file and replace the contents of the editor?"
          )) {
            const data = yield fetch(`/examples/${file}.coffee`).then(
              (r) => r.text()
            );
            editor.setValue(data);
          }
        }
      }));
      var editor = window.ace.edit("editor");
      editor.setTheme("ace/theme/github");
      editor.session.setMode("ace/mode/coffee");
    }
  });
  require_playground();
})();