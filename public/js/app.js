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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = [
    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath'
  ];

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys);

  var otherKeys = Object
    .keys(config2)
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/lodash/lodash.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/lodash.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
;(function() {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /** Used as the semantic version number. */
  var VERSION = '4.17.15';

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /** Error message constants. */
  var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
      FUNC_ERROR_TEXT = 'Expected a function';

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /** Used as the internal argument placeholder. */
  var PLACEHOLDER = '__lodash_placeholder__';

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG = 4;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_FLAG = 1,
      WRAP_BIND_KEY_FLAG = 2,
      WRAP_CURRY_BOUND_FLAG = 4,
      WRAP_CURRY_FLAG = 8,
      WRAP_CURRY_RIGHT_FLAG = 16,
      WRAP_PARTIAL_FLAG = 32,
      WRAP_PARTIAL_RIGHT_FLAG = 64,
      WRAP_ARY_FLAG = 128,
      WRAP_REARG_FLAG = 256,
      WRAP_FLIP_FLAG = 512;

  /** Used as default options for `_.truncate`. */
  var DEFAULT_TRUNC_LENGTH = 30,
      DEFAULT_TRUNC_OMISSION = '...';

  /** Used to detect hot functions by number of calls within a span of milliseconds. */
  var HOT_COUNT = 800,
      HOT_SPAN = 16;

  /** Used to indicate the type of lazy iteratees. */
  var LAZY_FILTER_FLAG = 1,
      LAZY_MAP_FLAG = 2,
      LAZY_WHILE_FLAG = 3;

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0,
      MAX_SAFE_INTEGER = 9007199254740991,
      MAX_INTEGER = 1.7976931348623157e+308,
      NAN = 0 / 0;

  /** Used as references for the maximum length and index of an array. */
  var MAX_ARRAY_LENGTH = 4294967295,
      MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
      HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

  /** Used to associate wrap methods with their bit flags. */
  var wrapFlags = [
    ['ary', WRAP_ARY_FLAG],
    ['bind', WRAP_BIND_FLAG],
    ['bindKey', WRAP_BIND_KEY_FLAG],
    ['curry', WRAP_CURRY_FLAG],
    ['curryRight', WRAP_CURRY_RIGHT_FLAG],
    ['flip', WRAP_FLIP_FLAG],
    ['partial', WRAP_PARTIAL_FLAG],
    ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
    ['rearg', WRAP_REARG_FLAG]
  ];

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      asyncTag = '[object AsyncFunction]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      domExcTag = '[object DOMException]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      nullTag = '[object Null]',
      objectTag = '[object Object]',
      promiseTag = '[object Promise]',
      proxyTag = '[object Proxy]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]',
      undefinedTag = '[object Undefined]',
      weakMapTag = '[object WeakMap]',
      weakSetTag = '[object WeakSet]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to match empty string literals in compiled template source. */
  var reEmptyStringLeading = /\b__p \+= '';/g,
      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

  /** Used to match HTML entities and HTML characters. */
  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
      reUnescapedHtml = /[&<>"']/g,
      reHasEscapedHtml = RegExp(reEscapedHtml.source),
      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

  /** Used to match template delimiters. */
  var reEscape = /<%-([\s\S]+?)%>/g,
      reEvaluate = /<%([\s\S]+?)%>/g,
      reInterpolate = /<%=([\s\S]+?)%>/g;

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/,
      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
      reHasRegExpChar = RegExp(reRegExpChar.source);

  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g,
      reTrimStart = /^\s+/,
      reTrimEnd = /\s+$/;

  /** Used to match wrap detail comments. */
  var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
      reSplitDetails = /,? & /;

  /** Used to match words composed of alphanumeric characters. */
  var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Used to match
   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
   */
  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /** Used to match Latin Unicode letters (excluding mathematical operators). */
  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

  /** Used to ensure capturing order of template delimiters. */
  var reNoMatch = /($^)/;

  /** Used to match unescaped characters in compiled string literals. */
  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

  /** Used to compose unicode character classes. */
  var rsAstralRange = '\\ud800-\\udfff',
      rsComboMarksRange = '\\u0300-\\u036f',
      reComboHalfMarksRange = '\\ufe20-\\ufe2f',
      rsComboSymbolsRange = '\\u20d0-\\u20ff',
      rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
      rsDingbatRange = '\\u2700-\\u27bf',
      rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
      rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      rsPunctuationRange = '\\u2000-\\u206f',
      rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      rsVarRange = '\\ufe0e\\ufe0f',
      rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

  /** Used to compose unicode capture groups. */
  var rsApos = "['\u2019]",
      rsAstral = '[' + rsAstralRange + ']',
      rsBreak = '[' + rsBreakRange + ']',
      rsCombo = '[' + rsComboRange + ']',
      rsDigits = '\\d+',
      rsDingbat = '[' + rsDingbatRange + ']',
      rsLower = '[' + rsLowerRange + ']',
      rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
      rsFitz = '\\ud83c[\\udffb-\\udfff]',
      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
      rsNonAstral = '[^' + rsAstralRange + ']',
      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      rsUpper = '[' + rsUpperRange + ']',
      rsZWJ = '\\u200d';

  /** Used to compose unicode regexes. */
  var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
      rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
      rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
      rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
      reOptMod = rsModifier + '?',
      rsOptVar = '[' + rsVarRange + ']?',
      rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
      rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
      rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
      rsSeq = rsOptVar + reOptMod + rsOptJoin,
      rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
      rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

  /** Used to match apostrophes. */
  var reApos = RegExp(rsApos, 'g');

  /**
   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
   */
  var reComboMark = RegExp(rsCombo, 'g');

  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
  var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

  /** Used to match complex or compound words. */
  var reUnicodeWord = RegExp([
    rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
    rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
    rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
    rsUpper + '+' + rsOptContrUpper,
    rsOrdUpper,
    rsOrdLower,
    rsDigits,
    rsEmoji
  ].join('|'), 'g');

  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
  var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

  /** Used to detect strings that need a more robust regexp to match words. */
  var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

  /** Used to assign default `context` object properties. */
  var contextProps = [
    'Array', 'Buffer', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array',
    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Map', 'Math', 'Object',
    'Promise', 'RegExp', 'Set', 'String', 'Symbol', 'TypeError', 'Uint8Array',
    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap',
    '_', 'clearTimeout', 'isFinite', 'parseInt', 'setTimeout'
  ];

  /** Used to make template sourceURLs easier to identify. */
  var templateCounter = -1;

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
  typedArrayTags[errorTag] = typedArrayTags[funcTag] =
  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
  typedArrayTags[setTag] = typedArrayTags[stringTag] =
  typedArrayTags[weakMapTag] = false;

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] =
  cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
  cloneableTags[boolTag] = cloneableTags[dateTag] =
  cloneableTags[float32Tag] = cloneableTags[float64Tag] =
  cloneableTags[int8Tag] = cloneableTags[int16Tag] =
  cloneableTags[int32Tag] = cloneableTags[mapTag] =
  cloneableTags[numberTag] = cloneableTags[objectTag] =
  cloneableTags[regexpTag] = cloneableTags[setTag] =
  cloneableTags[stringTag] = cloneableTags[symbolTag] =
  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] =
  cloneableTags[weakMapTag] = false;

  /** Used to map Latin Unicode letters to basic Latin letters. */
  var deburredLetters = {
    // Latin-1 Supplement block.
    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
    '\xc7': 'C',  '\xe7': 'c',
    '\xd0': 'D',  '\xf0': 'd',
    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
    '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
    '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
    '\xd1': 'N',  '\xf1': 'n',
    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
    '\xc6': 'Ae', '\xe6': 'ae',
    '\xde': 'Th', '\xfe': 'th',
    '\xdf': 'ss',
    // Latin Extended-A block.
    '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
    '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
    '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
    '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
    '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
    '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
    '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
    '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
    '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
    '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
    '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
    '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
    '\u0134': 'J',  '\u0135': 'j',
    '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
    '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
    '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
    '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
    '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
    '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
    '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
    '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
    '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
    '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
    '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
    '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
    '\u0163': 't',  '\u0165': 't', '\u0167': 't',
    '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
    '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
    '\u0174': 'W',  '\u0175': 'w',
    '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
    '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
    '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
    '\u0132': 'IJ', '\u0133': 'ij',
    '\u0152': 'Oe', '\u0153': 'oe',
    '\u0149': "'n", '\u017f': 's'
  };

  /** Used to map characters to HTML entities. */
  var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  /** Used to map HTML entities to characters. */
  var htmlUnescapes = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'"
  };

  /** Used to escape characters for inclusion in compiled string literals. */
  var stringEscapes = {
    '\\': '\\',
    "'": "'",
    '\n': 'n',
    '\r': 'r',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  /** Built-in method references without a dependency on `root`. */
  var freeParseFloat = parseFloat,
      freeParseInt = parseInt;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Detect free variable `exports`. */
  var freeExports =  true && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule && freeModule.require && freeModule.require('util').types;

      if (types) {
        return types;
      }

      // Legacy `process.binding('util')` for Node.js < 10.
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  /* Node.js helper references. */
  var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer,
      nodeIsDate = nodeUtil && nodeUtil.isDate,
      nodeIsMap = nodeUtil && nodeUtil.isMap,
      nodeIsRegExp = nodeUtil && nodeUtil.isRegExp,
      nodeIsSet = nodeUtil && nodeUtil.isSet,
      nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

  /*--------------------------------------------------------------------------*/

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0: return func.call(thisArg);
      case 1: return func.call(thisArg, args[0]);
      case 2: return func.call(thisArg, args[0], args[1]);
      case 3: return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  /**
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */
  function arrayAggregator(array, setter, iteratee, accumulator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      var value = array[index];
      setter(accumulator, value, iteratee(value), array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEachRight(array, iteratee) {
    var length = array == null ? 0 : array.length;

    while (length--) {
      if (iteratee(array[length], length, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.every` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   */
  function arrayEvery(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (!predicate(array[index], index, array)) {
        return false;
      }
    }
    return true;
  }

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  /**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
  }

  /**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludesWith(array, value, comparator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }
    return false;
  }

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  /**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1,
        length = array == null ? 0 : array.length;

    if (initAccum && length) {
      accumulator = array[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.reduceRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the last element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduceRight(array, iteratee, accumulator, initAccum) {
    var length = array == null ? 0 : array.length;
    if (initAccum && length) {
      accumulator = array[--length];
    }
    while (length--) {
      accumulator = iteratee(accumulator, array[length], length, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function arraySome(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Gets the size of an ASCII `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  var asciiSize = baseProperty('length');

  /**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function asciiToArray(string) {
    return string.split('');
  }

  /**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function asciiWords(string) {
    return string.match(reAsciiWord) || [];
  }

  /**
   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
   * without support for iteratee shorthands, which iterates over `collection`
   * using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the found element or its key, else `undefined`.
   */
  function baseFindKey(collection, predicate, eachFunc) {
    var result;
    eachFunc(collection, function(value, key, collection) {
      if (predicate(value, key, collection)) {
        result = key;
        return false;
      }
    });
    return result;
  }

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1);

    while ((fromRight ? index-- : ++index < length)) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    return value === value
      ? strictIndexOf(array, value, fromIndex)
      : baseFindIndex(array, baseIsNaN, fromIndex);
  }

  /**
   * This function is like `baseIndexOf` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOfWith(array, value, fromIndex, comparator) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (comparator(array[index], value)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */
  function baseIsNaN(value) {
    return value !== value;
  }

  /**
   * The base implementation of `_.mean` and `_.meanBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the mean.
   */
  function baseMean(array, iteratee) {
    var length = array == null ? 0 : array.length;
    return length ? (baseSum(array, iteratee) / length) : NAN;
  }

  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyOf(object) {
    return function(key) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.reduce` and `_.reduceRight`, without support
   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initAccum Specify using the first or last element of
   *  `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the accumulated value.
   */
  function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
    eachFunc(collection, function(value, index, collection) {
      accumulator = initAccum
        ? (initAccum = false, value)
        : iteratee(accumulator, value, index, collection);
    });
    return accumulator;
  }

  /**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */
  function baseSortBy(array, comparer) {
    var length = array.length;

    array.sort(comparer);
    while (length--) {
      array[length] = array[length].value;
    }
    return array;
  }

  /**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the sum.
   */
  function baseSum(array, iteratee) {
    var result,
        index = -1,
        length = array.length;

    while (++index < length) {
      var current = iteratee(array[index]);
      if (current !== undefined) {
        result = result === undefined ? current : (result + current);
      }
    }
    return result;
  }

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  /**
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the key-value pairs.
   */
  function baseToPairs(object, props) {
    return arrayMap(props, function(key) {
      return [key, object[key]];
    });
  }

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  /**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */
  function baseValues(object, props) {
    return arrayMap(props, function(key) {
      return object[key];
    });
  }

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function cacheHas(cache, key) {
    return cache.has(key);
  }

  /**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */
  function charsStartIndex(strSymbols, chrSymbols) {
    var index = -1,
        length = strSymbols.length;

    while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */
  function charsEndIndex(strSymbols, chrSymbols) {
    var index = strSymbols.length;

    while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */
  function countHolders(array, placeholder) {
    var length = array.length,
        result = 0;

    while (length--) {
      if (array[length] === placeholder) {
        ++result;
      }
    }
    return result;
  }

  /**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */
  var deburrLetter = basePropertyOf(deburredLetters);

  /**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  var escapeHtmlChar = basePropertyOf(htmlEscapes);

  /**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  function escapeStringChar(chr) {
    return '\\' + stringEscapes[chr];
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }

  /**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */
  function hasUnicodeWord(string) {
    return reHasUnicodeWord.test(string);
  }

  /**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */
  function iteratorToArray(iterator) {
    var data,
        result = [];

    while (!(data = iterator.next()).done) {
      result.push(data.value);
    }
    return result;
  }

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  /**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */
  function replaceHolders(array, placeholder) {
    var index = -1,
        length = array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (value === placeholder || value === PLACEHOLDER) {
        array[index] = PLACEHOLDER;
        result[resIndex++] = index;
      }
    }
    return result;
  }

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }

  /**
   * Converts `set` to its value-value pairs.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the value-value pairs.
   */
  function setToPairs(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = [value, value];
    });
    return result;
  }

  /**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * A specialized version of `_.lastIndexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictLastIndexOf(array, value, fromIndex) {
    var index = fromIndex + 1;
    while (index--) {
      if (array[index] === value) {
        return index;
      }
    }
    return index;
  }

  /**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */
  function stringSize(string) {
    return hasUnicode(string)
      ? unicodeSize(string)
      : asciiSize(string);
  }

  /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function stringToArray(string) {
    return hasUnicode(string)
      ? unicodeToArray(string)
      : asciiToArray(string);
  }

  /**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */
  var unescapeHtmlChar = basePropertyOf(htmlUnescapes);

  /**
   * Gets the size of a Unicode `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  function unicodeSize(string) {
    var result = reUnicode.lastIndex = 0;
    while (reUnicode.test(string)) {
      ++result;
    }
    return result;
  }

  /**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }

  /**
   * Splits a Unicode `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function unicodeWords(string) {
    return string.match(reUnicodeWord) || [];
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Create a new pristine `lodash` function using the `context` object.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Util
   * @param {Object} [context=root] The context object.
   * @returns {Function} Returns a new `lodash` function.
   * @example
   *
   * _.mixin({ 'foo': _.constant('foo') });
   *
   * var lodash = _.runInContext();
   * lodash.mixin({ 'bar': lodash.constant('bar') });
   *
   * _.isFunction(_.foo);
   * // => true
   * _.isFunction(_.bar);
   * // => false
   *
   * lodash.isFunction(lodash.foo);
   * // => false
   * lodash.isFunction(lodash.bar);
   * // => true
   *
   * // Create a suped-up `defer` in Node.js.
   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
   */
  var runInContext = (function runInContext(context) {
    context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));

    /** Built-in constructor references. */
    var Array = context.Array,
        Date = context.Date,
        Error = context.Error,
        Function = context.Function,
        Math = context.Math,
        Object = context.Object,
        RegExp = context.RegExp,
        String = context.String,
        TypeError = context.TypeError;

    /** Used for built-in method references. */
    var arrayProto = Array.prototype,
        funcProto = Function.prototype,
        objectProto = Object.prototype;

    /** Used to detect overreaching core-js shims. */
    var coreJsData = context['__core-js_shared__'];

    /** Used to resolve the decompiled source of functions. */
    var funcToString = funcProto.toString;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /** Used to generate unique IDs. */
    var idCounter = 0;

    /** Used to detect methods masquerading as native. */
    var maskSrcKey = (function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
      return uid ? ('Symbol(src)_1.' + uid) : '';
    }());

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var nativeObjectToString = objectProto.toString;

    /** Used to infer the `Object` constructor. */
    var objectCtorString = funcToString.call(Object);

    /** Used to restore the original `_` reference in `_.noConflict`. */
    var oldDash = root._;

    /** Used to detect if a method is native. */
    var reIsNative = RegExp('^' +
      funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
    );

    /** Built-in value references. */
    var Buffer = moduleExports ? context.Buffer : undefined,
        Symbol = context.Symbol,
        Uint8Array = context.Uint8Array,
        allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
        getPrototype = overArg(Object.getPrototypeOf, Object),
        objectCreate = Object.create,
        propertyIsEnumerable = objectProto.propertyIsEnumerable,
        splice = arrayProto.splice,
        spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined,
        symIterator = Symbol ? Symbol.iterator : undefined,
        symToStringTag = Symbol ? Symbol.toStringTag : undefined;

    var defineProperty = (function() {
      try {
        var func = getNative(Object, 'defineProperty');
        func({}, '', {});
        return func;
      } catch (e) {}
    }());

    /** Mocked built-ins. */
    var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout,
        ctxNow = Date && Date.now !== root.Date.now && Date.now,
        ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeCeil = Math.ceil,
        nativeFloor = Math.floor,
        nativeGetSymbols = Object.getOwnPropertySymbols,
        nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
        nativeIsFinite = context.isFinite,
        nativeJoin = arrayProto.join,
        nativeKeys = overArg(Object.keys, Object),
        nativeMax = Math.max,
        nativeMin = Math.min,
        nativeNow = Date.now,
        nativeParseInt = context.parseInt,
        nativeRandom = Math.random,
        nativeReverse = arrayProto.reverse;

    /* Built-in method references that are verified to be native. */
    var DataView = getNative(context, 'DataView'),
        Map = getNative(context, 'Map'),
        Promise = getNative(context, 'Promise'),
        Set = getNative(context, 'Set'),
        WeakMap = getNative(context, 'WeakMap'),
        nativeCreate = getNative(Object, 'create');

    /** Used to store function metadata. */
    var metaMap = WeakMap && new WeakMap;

    /** Used to lookup unminified function names. */
    var realNames = {};

    /** Used to detect maps, sets, and weakmaps. */
    var dataViewCtorString = toSource(DataView),
        mapCtorString = toSource(Map),
        promiseCtorString = toSource(Promise),
        setCtorString = toSource(Set),
        weakMapCtorString = toSource(WeakMap);

    /** Used to convert symbols to primitives and strings. */
    var symbolProto = Symbol ? Symbol.prototype : undefined,
        symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
        symbolToString = symbolProto ? symbolProto.toString : undefined;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` object which wraps `value` to enable implicit method
     * chain sequences. Methods that operate on and return arrays, collections,
     * and functions can be chained together. Methods that retrieve a single value
     * or may return a primitive value will automatically end the chain sequence
     * and return the unwrapped value. Otherwise, the value must be unwrapped
     * with `_#value`.
     *
     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
     * enabled using `_.chain`.
     *
     * The execution of chained methods is lazy, that is, it's deferred until
     * `_#value` is implicitly or explicitly called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion.
     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
     * the creation of intermediate arrays and can greatly reduce the number of
     * iteratee executions. Sections of a chain sequence qualify for shortcut
     * fusion if the section is applied to an array and iteratees accept only
     * one argument. The heuristic for whether a section qualifies for shortcut
     * fusion is subject to change.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
     * `zipObject`, `zipObjectDeep`, and `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
     * `upperFirst`, `value`, and `words`
     *
     * @name _
     * @constructor
     * @category Seq
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // Returns an unwrapped value.
     * wrapped.reduce(_.add);
     * // => 6
     *
     * // Returns a wrapped value.
     * var squares = wrapped.map(square);
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */
    function lodash(value) {
      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
        if (value instanceof LodashWrapper) {
          return value;
        }
        if (hasOwnProperty.call(value, '__wrapped__')) {
          return wrapperClone(value);
        }
      }
      return new LodashWrapper(value);
    }

    /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} proto The object to inherit from.
     * @returns {Object} Returns the new object.
     */
    var baseCreate = (function() {
      function object() {}
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object;
        object.prototype = undefined;
        return result;
      };
    }());

    /**
     * The function whose prototype chain sequence wrappers inherit from.
     *
     * @private
     */
    function baseLodash() {
      // No operation performed.
    }

    /**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable explicit method chain sequences.
     */
    function LodashWrapper(value, chainAll) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__chain__ = !!chainAll;
      this.__index__ = 0;
      this.__values__ = undefined;
    }

    /**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
     * following template settings to use alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type {Object}
     */
    lodash.templateSettings = {

      /**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'escape': reEscape,

      /**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'evaluate': reEvaluate,

      /**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'interpolate': reInterpolate,

      /**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type {string}
       */
      'variable': '',

      /**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type {Object}
       */
      'imports': {

        /**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type {Function}
         */
        '_': lodash
      }
    };

    // Ensure wrappers are instances of `baseLodash`.
    lodash.prototype = baseLodash.prototype;
    lodash.prototype.constructor = lodash;

    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
    LodashWrapper.prototype.constructor = LodashWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @constructor
     * @param {*} value The value to wrap.
     */
    function LazyWrapper(value) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__dir__ = 1;
      this.__filtered__ = false;
      this.__iteratees__ = [];
      this.__takeCount__ = MAX_ARRAY_LENGTH;
      this.__views__ = [];
    }

    /**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Object} Returns the cloned `LazyWrapper` object.
     */
    function lazyClone() {
      var result = new LazyWrapper(this.__wrapped__);
      result.__actions__ = copyArray(this.__actions__);
      result.__dir__ = this.__dir__;
      result.__filtered__ = this.__filtered__;
      result.__iteratees__ = copyArray(this.__iteratees__);
      result.__takeCount__ = this.__takeCount__;
      result.__views__ = copyArray(this.__views__);
      return result;
    }

    /**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} Returns the new reversed `LazyWrapper` object.
     */
    function lazyReverse() {
      if (this.__filtered__) {
        var result = new LazyWrapper(this);
        result.__dir__ = -1;
        result.__filtered__ = true;
      } else {
        result = this.clone();
        result.__dir__ *= -1;
      }
      return result;
    }

    /**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
     * @returns {*} Returns the unwrapped value.
     */
    function lazyValue() {
      var array = this.__wrapped__.value(),
          dir = this.__dir__,
          isArr = isArray(array),
          isRight = dir < 0,
          arrLength = isArr ? array.length : 0,
          view = getView(0, arrLength, this.__views__),
          start = view.start,
          end = view.end,
          length = end - start,
          index = isRight ? end : (start - 1),
          iteratees = this.__iteratees__,
          iterLength = iteratees.length,
          resIndex = 0,
          takeCount = nativeMin(length, this.__takeCount__);

      if (!isArr || (!isRight && arrLength == length && takeCount == length)) {
        return baseWrapperValue(array, this.__actions__);
      }
      var result = [];

      outer:
      while (length-- && resIndex < takeCount) {
        index += dir;

        var iterIndex = -1,
            value = array[index];

        while (++iterIndex < iterLength) {
          var data = iteratees[iterIndex],
              iteratee = data.iteratee,
              type = data.type,
              computed = iteratee(value);

          if (type == LAZY_MAP_FLAG) {
            value = computed;
          } else if (!computed) {
            if (type == LAZY_FILTER_FLAG) {
              continue outer;
            } else {
              break outer;
            }
          }
        }
        result[resIndex++] = value;
      }
      return result;
    }

    // Ensure `LazyWrapper` is an instance of `baseLodash`.
    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
    LazyWrapper.prototype.constructor = LazyWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Hash(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : undefined;
    }

    /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
    }

    /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
      return this;
    }

    // Add methods to `Hash`.
    Hash.prototype.clear = hashClear;
    Hash.prototype['delete'] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function ListCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function listCacheDelete(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }

    /**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function listCacheGet(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      return index < 0 ? undefined : data[index][1];
    }

    /**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }

    /**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */
    function listCacheSet(key, value) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }

    // Add methods to `ListCache`.
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype['delete'] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function MapCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        'hash': new Hash,
        'map': new (Map || ListCache),
        'string': new Hash
      };
    }

    /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function mapCacheDelete(key) {
      var result = getMapData(this, key)['delete'](key);
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }

    /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }

    /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */
    function mapCacheSet(key, value) {
      var data = getMapData(this, key),
          size = data.size;

      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }

    // Add methods to `MapCache`.
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */
    function SetCache(values) {
      var index = -1,
          length = values == null ? 0 : values.length;

      this.__data__ = new MapCache;
      while (++index < length) {
        this.add(values[index]);
      }
    }

    /**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }

    /**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */
    function setCacheHas(value) {
      return this.__data__.has(value);
    }

    // Add methods to `SetCache`.
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }

    /**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */
    function stackClear() {
      this.__data__ = new ListCache;
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function stackDelete(key) {
      var data = this.__data__,
          result = data['delete'](key);

      this.size = data.size;
      return result;
    }

    /**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function stackGet(key) {
      return this.__data__.get(key);
    }

    /**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function stackHas(key) {
      return this.__data__.has(key);
    }

    /**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }

    // Add methods to `Stack`.
    Stack.prototype.clear = stackClear;
    Stack.prototype['delete'] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value),
          isArg = !isArr && isArguments(value),
          isBuff = !isArr && !isArg && isBuffer(value),
          isType = !isArr && !isArg && !isBuff && isTypedArray(value),
          skipIndexes = isArr || isArg || isBuff || isType,
          result = skipIndexes ? baseTimes(value.length, String) : [],
          length = result.length;

      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) &&
            !(skipIndexes && (
               // Safari 9 has enumerable `arguments.length` in strict mode.
               key == 'length' ||
               // Node.js 0.10 has enumerable non-index properties on buffers.
               (isBuff && (key == 'offset' || key == 'parent')) ||
               // PhantomJS 2 has enumerable non-index properties on typed arrays.
               (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
               // Skip index properties.
               isIndex(key, length)
            ))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * A specialized version of `_.sample` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @returns {*} Returns the random element.
     */
    function arraySample(array) {
      var length = array.length;
      return length ? array[baseRandom(0, length - 1)] : undefined;
    }

    /**
     * A specialized version of `_.sampleSize` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function arraySampleSize(array, n) {
      return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
    }

    /**
     * A specialized version of `_.shuffle` for arrays.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function arrayShuffle(array) {
      return shuffleSelf(copyArray(array));
    }

    /**
     * This function is like `assignValue` except that it doesn't assign
     * `undefined` values.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignMergeValue(object, key, value) {
      if ((value !== undefined && !eq(object[key], value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }

    /**
     * Aggregates elements of `collection` on `accumulator` with keys transformed
     * by `iteratee` and values set by `setter`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseAggregator(collection, setter, iteratee, accumulator) {
      baseEach(collection, function(value, key, collection) {
        setter(accumulator, value, iteratee(value), collection);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }

    /**
     * The base implementation of `_.assignIn` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssignIn(object, source) {
      return object && copyObject(source, keysIn(source), object);
    }

    /**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function baseAssignValue(object, key, value) {
      if (key == '__proto__' && defineProperty) {
        defineProperty(object, key, {
          'configurable': true,
          'enumerable': true,
          'value': value,
          'writable': true
        });
      } else {
        object[key] = value;
      }
    }

    /**
     * The base implementation of `_.at` without support for individual paths.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {string[]} paths The property paths to pick.
     * @returns {Array} Returns the picked elements.
     */
    function baseAt(object, paths) {
      var index = -1,
          length = paths.length,
          result = Array(length),
          skip = object == null;

      while (++index < length) {
        result[index] = skip ? undefined : get(object, paths[index]);
      }
      return result;
    }

    /**
     * The base implementation of `_.clamp` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     */
    function baseClamp(number, lower, upper) {
      if (number === number) {
        if (upper !== undefined) {
          number = number <= upper ? number : upper;
        }
        if (lower !== undefined) {
          number = number >= lower ? number : lower;
        }
      }
      return number;
    }

    /**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Deep clone
     *  2 - Flatten inherited properties
     *  4 - Clone symbols
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result,
          isDeep = bitmask & CLONE_DEEP_FLAG,
          isFlat = bitmask & CLONE_FLAT_FLAG,
          isFull = bitmask & CLONE_SYMBOLS_FLAG;

      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== undefined) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value),
            isFunc = tag == funcTag || tag == genTag;

        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
          result = (isFlat || isFunc) ? {} : initCloneObject(value);
          if (!isDeep) {
            return isFlat
              ? copySymbolsIn(value, baseAssignIn(result, value))
              : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, isDeep);
        }
      }
      // Check for circular references and return its corresponding clone.
      stack || (stack = new Stack);
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);

      if (isSet(value)) {
        value.forEach(function(subValue) {
          result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
        });
      } else if (isMap(value)) {
        value.forEach(function(subValue, key) {
          result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
        });
      }

      var keysFunc = isFull
        ? (isFlat ? getAllKeysIn : getAllKeys)
        : (isFlat ? keysIn : keys);

      var props = isArr ? undefined : keysFunc(value);
      arrayEach(props || value, function(subValue, key) {
        if (props) {
          key = subValue;
          subValue = value[key];
        }
        // Recursively populate clone (susceptible to call stack limits).
        assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
      });
      return result;
    }

    /**
     * The base implementation of `_.conforms` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     */
    function baseConforms(source) {
      var props = keys(source);
      return function(object) {
        return baseConformsTo(object, source, props);
      };
    }

    /**
     * The base implementation of `_.conformsTo` which accepts `props` to check.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     */
    function baseConformsTo(object, source, props) {
      var length = props.length;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (length--) {
        var key = props[length],
            predicate = source[key],
            value = object[key];

        if ((value === undefined && !(key in object)) || !predicate(value)) {
          return false;
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.delay` and `_.defer` which accepts `args`
     * to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Array} args The arguments to provide to `func`.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    function baseDelay(func, wait, args) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return setTimeout(function() { func.apply(undefined, args); }, wait);
    }

    /**
     * The base implementation of methods like `_.difference` without support
     * for excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     */
    function baseDifference(array, values, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          isCommon = true,
          length = array.length,
          result = [],
          valuesLength = values.length;

      if (!length) {
        return result;
      }
      if (iteratee) {
        values = arrayMap(values, baseUnary(iteratee));
      }
      if (comparator) {
        includes = arrayIncludesWith;
        isCommon = false;
      }
      else if (values.length >= LARGE_ARRAY_SIZE) {
        includes = cacheHas;
        isCommon = false;
        values = new SetCache(values);
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee == null ? value : iteratee(value);

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var valuesIndex = valuesLength;
          while (valuesIndex--) {
            if (values[valuesIndex] === computed) {
              continue outer;
            }
          }
          result.push(value);
        }
        else if (!includes(values, computed, comparator)) {
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEach = createBaseEach(baseForOwn);

    /**
     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEachRight = createBaseEach(baseForOwnRight, true);

    /**
     * The base implementation of `_.every` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */
    function baseEvery(collection, predicate) {
      var result = true;
      baseEach(collection, function(value, index, collection) {
        result = !!predicate(value, index, collection);
        return result;
      });
      return result;
    }

    /**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
     * @returns {*} Returns the extremum value.
     */
    function baseExtremum(array, iteratee, comparator) {
      var index = -1,
          length = array.length;

      while (++index < length) {
        var value = array[index],
            current = iteratee(value);

        if (current != null && (computed === undefined
              ? (current === current && !isSymbol(current))
              : comparator(current, computed)
            )) {
          var computed = current,
              result = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */
    function baseFill(array, value, start, end) {
      var length = array.length;

      start = toInteger(start);
      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = (end === undefined || end > length) ? length : toInteger(end);
      if (end < 0) {
        end += length;
      }
      end = start > end ? 0 : toLength(end);
      while (start < end) {
        array[start++] = value;
      }
      return array;
    }

    /**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function baseFilter(collection, predicate) {
      var result = [];
      baseEach(collection, function(value, index, collection) {
        if (predicate(value, index, collection)) {
          result.push(value);
        }
      });
      return result;
    }

    /**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {number} depth The maximum recursion depth.
     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */
    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index = -1,
          length = array.length;

      predicate || (predicate = isFlattenable);
      result || (result = []);

      while (++index < length) {
        var value = array[index];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            // Recursively flatten arrays (susceptible to call stack limits).
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseFor = createBaseFor();

    /**
     * This function is like `baseFor` except that it iterates over properties
     * in the opposite order.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseForRight = createBaseFor(true);

    /**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwnRight(object, iteratee) {
      return object && baseForRight(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from `props`.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the function names.
     */
    function baseFunctions(object, props) {
      return arrayFilter(props, function(key) {
        return isFunction(object[key]);
      });
    }

    /**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */
    function baseGet(object, path) {
      path = castPath(path, object);

      var index = 0,
          length = path.length;

      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return (index && index == length) ? object : undefined;
    }

    /**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }

    /**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    function baseGetTag(value) {
      if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
      }
      return (symToStringTag && symToStringTag in Object(value))
        ? getRawTag(value)
        : objectToString(value);
    }

    /**
     * The base implementation of `_.gt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     */
    function baseGt(value, other) {
      return value > other;
    }

    /**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHas(object, key) {
      return object != null && hasOwnProperty.call(object, key);
    }

    /**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }

    /**
     * The base implementation of `_.inRange` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to check.
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     */
    function baseInRange(number, start, end) {
      return number >= nativeMin(start, end) && number < nativeMax(start, end);
    }

    /**
     * The base implementation of methods like `_.intersection`, without support
     * for iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of shared values.
     */
    function baseIntersection(arrays, iteratee, comparator) {
      var includes = comparator ? arrayIncludesWith : arrayIncludes,
          length = arrays[0].length,
          othLength = arrays.length,
          othIndex = othLength,
          caches = Array(othLength),
          maxLength = Infinity,
          result = [];

      while (othIndex--) {
        var array = arrays[othIndex];
        if (othIndex && iteratee) {
          array = arrayMap(array, baseUnary(iteratee));
        }
        maxLength = nativeMin(array.length, maxLength);
        caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
          ? new SetCache(othIndex && array)
          : undefined;
      }
      array = arrays[0];

      var index = -1,
          seen = caches[0];

      outer:
      while (++index < length && result.length < maxLength) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (!(seen
              ? cacheHas(seen, computed)
              : includes(result, computed, comparator)
            )) {
          othIndex = othLength;
          while (--othIndex) {
            var cache = caches[othIndex];
            if (!(cache
                  ? cacheHas(cache, computed)
                  : includes(arrays[othIndex], computed, comparator))
                ) {
              continue outer;
            }
          }
          if (seen) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.invert` and `_.invertBy` which inverts
     * `object` with values transformed by `iteratee` and set by `setter`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform values.
     * @param {Object} accumulator The initial inverted object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseInverter(object, setter, iteratee, accumulator) {
      baseForOwn(object, function(value, key, object) {
        setter(accumulator, iteratee(value), key, object);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.invoke` without support for individual
     * method arguments.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */
    function baseInvoke(object, path, args) {
      path = castPath(path, object);
      object = parent(object, path);
      var func = object == null ? object : object[toKey(last(path))];
      return func == null ? undefined : apply(func, object, args);
    }

    /**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }

    /**
     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     */
    function baseIsArrayBuffer(value) {
      return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
    }

    /**
     * The base implementation of `_.isDate` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     */
    function baseIsDate(value) {
      return isObjectLike(value) && baseGetTag(value) == dateTag;
    }

    /**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Unordered comparison
     *  2 - Partial comparison
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }

    /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object),
          othIsArr = isArray(other),
          objTag = objIsArr ? arrayTag : getTag(object),
          othTag = othIsArr ? arrayTag : getTag(other);

      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;

      var objIsObj = objTag == objectTag,
          othIsObj = othTag == objectTag,
          isSameTag = objTag == othTag;

      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack);
        return (objIsArr || isTypedArray(object))
          ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
          : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object,
              othUnwrapped = othIsWrapped ? other.value() : other;

          stack || (stack = new Stack);
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack);
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }

    /**
     * The base implementation of `_.isMap` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     */
    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }

    /**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length,
          length = index,
          noCustomizer = !customizer;

      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if ((noCustomizer && data[2])
              ? data[1] !== object[data[0]]
              : !(data[0] in object)
            ) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0],
            objValue = object[key],
            srcValue = data[1];

        if (noCustomizer && data[2]) {
          if (objValue === undefined && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack;
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === undefined
                ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
                : result
              )) {
            return false;
          }
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }

    /**
     * The base implementation of `_.isRegExp` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     */
    function baseIsRegExp(value) {
      return isObjectLike(value) && baseGetTag(value) == regexpTag;
    }

    /**
     * The base implementation of `_.isSet` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     */
    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
    }

    /**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */
    function baseIsTypedArray(value) {
      return isObjectLike(value) &&
        isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }

    /**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */
    function baseIteratee(value) {
      // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
      // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
      if (typeof value == 'function') {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == 'object') {
        return isArray(value)
          ? baseMatchesProperty(value[0], value[1])
          : baseMatches(value);
      }
      return property(value);
    }

    /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object),
          result = [];

      for (var key in object) {
        if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.lt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     */
    function baseLt(value, other) {
      return value < other;
    }

    /**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function baseMap(collection, iteratee) {
      var index = -1,
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value, key, collection) {
        result[++index] = iteratee(value, key, collection);
      });
      return result;
    }

    /**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }

    /**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get(object, path);
        return (objValue === undefined && objValue === srcValue)
          ? hasIn(object, path)
          : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }

    /**
     * The base implementation of `_.merge` without support for multiple sources.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMerge(object, source, srcIndex, customizer, stack) {
      if (object === source) {
        return;
      }
      baseFor(source, function(srcValue, key) {
        stack || (stack = new Stack);
        if (isObject(srcValue)) {
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        }
        else {
          var newValue = customizer
            ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
            : undefined;

          if (newValue === undefined) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      }, keysIn);
    }

    /**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = safeGet(object, key),
          srcValue = safeGet(source, key),
          stacked = stack.get(srcValue);

      if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
      }
      var newValue = customizer
        ? customizer(objValue, srcValue, (key + ''), object, source, stack)
        : undefined;

      var isCommon = newValue === undefined;

      if (isCommon) {
        var isArr = isArray(srcValue),
            isBuff = !isArr && isBuffer(srcValue),
            isTyped = !isArr && !isBuff && isTypedArray(srcValue);

        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray(objValue)) {
            newValue = objValue;
          }
          else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          }
          else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          }
          else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          }
          else {
            newValue = [];
          }
        }
        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          }
          else if (!isObject(objValue) || isFunction(objValue)) {
            newValue = initCloneObject(srcValue);
          }
        }
        else {
          isCommon = false;
        }
      }
      if (isCommon) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack['delete'](srcValue);
      }
      assignMergeValue(object, key, newValue);
    }

    /**
     * The base implementation of `_.nth` which doesn't coerce arguments.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {number} n The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     */
    function baseNth(array, n) {
      var length = array.length;
      if (!length) {
        return;
      }
      n += n < 0 ? length : 0;
      return isIndex(n, length) ? array[n] : undefined;
    }

    /**
     * The base implementation of `_.orderBy` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {string[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */
    function baseOrderBy(collection, iteratees, orders) {
      var index = -1;
      iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(getIteratee()));

      var result = baseMap(collection, function(value, key, collection) {
        var criteria = arrayMap(iteratees, function(iteratee) {
          return iteratee(value);
        });
        return { 'criteria': criteria, 'index': ++index, 'value': value };
      });

      return baseSortBy(result, function(object, other) {
        return compareMultiple(object, other, orders);
      });
    }

    /**
     * The base implementation of `_.pick` without support for individual
     * property identifiers.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @returns {Object} Returns the new object.
     */
    function basePick(object, paths) {
      return basePickBy(object, paths, function(value, path) {
        return hasIn(object, path);
      });
    }

    /**
     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @param {Function} predicate The function invoked per property.
     * @returns {Object} Returns the new object.
     */
    function basePickBy(object, paths, predicate) {
      var index = -1,
          length = paths.length,
          result = {};

      while (++index < length) {
        var path = paths[index],
            value = baseGet(object, path);

        if (predicate(value, path)) {
          baseSet(result, castPath(path, object), value);
        }
      }
      return result;
    }

    /**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     */
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }

    /**
     * The base implementation of `_.pullAllBy` without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     */
    function basePullAll(array, values, iteratee, comparator) {
      var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
          index = -1,
          length = values.length,
          seen = array;

      if (array === values) {
        values = copyArray(values);
      }
      if (iteratee) {
        seen = arrayMap(array, baseUnary(iteratee));
      }
      while (++index < length) {
        var fromIndex = 0,
            value = values[index],
            computed = iteratee ? iteratee(value) : value;

        while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
          if (seen !== array) {
            splice.call(seen, fromIndex, 1);
          }
          splice.call(array, fromIndex, 1);
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.pullAt` without support for individual
     * indexes or capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to remove.
     * @returns {Array} Returns `array`.
     */
    function basePullAt(array, indexes) {
      var length = array ? indexes.length : 0,
          lastIndex = length - 1;

      while (length--) {
        var index = indexes[length];
        if (length == lastIndex || index !== previous) {
          var previous = index;
          if (isIndex(index)) {
            splice.call(array, index, 1);
          } else {
            baseUnset(array, index);
          }
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.random` without support for returning
     * floating-point numbers.
     *
     * @private
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the random number.
     */
    function baseRandom(lower, upper) {
      return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
    }

    /**
     * The base implementation of `_.range` and `_.rangeRight` which doesn't
     * coerce arguments.
     *
     * @private
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @param {number} step The value to increment or decrement by.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the range of numbers.
     */
    function baseRange(start, end, step, fromRight) {
      var index = -1,
          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
          result = Array(length);

      while (length--) {
        result[fromRight ? length : ++index] = start;
        start += step;
      }
      return result;
    }

    /**
     * The base implementation of `_.repeat` which doesn't coerce arguments.
     *
     * @private
     * @param {string} string The string to repeat.
     * @param {number} n The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     */
    function baseRepeat(string, n) {
      var result = '';
      if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
        return result;
      }
      // Leverage the exponentiation by squaring algorithm for a faster repeat.
      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
      do {
        if (n % 2) {
          result += string;
        }
        n = nativeFloor(n / 2);
        if (n) {
          string += string;
        }
      } while (n);

      return result;
    }

    /**
     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     */
    function baseRest(func, start) {
      return setToString(overRest(func, start, identity), func + '');
    }

    /**
     * The base implementation of `_.sample`.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     */
    function baseSample(collection) {
      return arraySample(values(collection));
    }

    /**
     * The base implementation of `_.sampleSize` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function baseSampleSize(collection, n) {
      var array = values(collection);
      return shuffleSelf(array, baseClamp(n, 0, array.length));
    }

    /**
     * The base implementation of `_.set`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseSet(object, path, value, customizer) {
      if (!isObject(object)) {
        return object;
      }
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          lastIndex = length - 1,
          nested = object;

      while (nested != null && ++index < length) {
        var key = toKey(path[index]),
            newValue = value;

        if (index != lastIndex) {
          var objValue = nested[key];
          newValue = customizer ? customizer(objValue, key, nested) : undefined;
          if (newValue === undefined) {
            newValue = isObject(objValue)
              ? objValue
              : (isIndex(path[index + 1]) ? [] : {});
          }
        }
        assignValue(nested, key, newValue);
        nested = nested[key];
      }
      return object;
    }

    /**
     * The base implementation of `setData` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var baseSetData = !metaMap ? identity : function(func, data) {
      metaMap.set(func, data);
      return func;
    };

    /**
     * The base implementation of `setToString` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, 'toString', {
        'configurable': true,
        'enumerable': false,
        'value': constant(string),
        'writable': true
      });
    };

    /**
     * The base implementation of `_.shuffle`.
     *
     * @private
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function baseShuffle(collection) {
      return shuffleSelf(values(collection));
    }

    /**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseSlice(array, start, end) {
      var index = -1,
          length = array.length;

      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : ((end - start) >>> 0);
      start >>>= 0;

      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }

    /**
     * The base implementation of `_.some` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */
    function baseSome(collection, predicate) {
      var result;

      baseEach(collection, function(value, index, collection) {
        result = predicate(value, index, collection);
        return !result;
      });
      return !!result;
    }

    /**
     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
     * performs a binary search of `array` to determine the index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndex(array, value, retHighest) {
      var low = 0,
          high = array == null ? low : array.length;

      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
        while (low < high) {
          var mid = (low + high) >>> 1,
              computed = array[mid];

          if (computed !== null && !isSymbol(computed) &&
              (retHighest ? (computed <= value) : (computed < value))) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return high;
      }
      return baseSortedIndexBy(array, value, identity, retHighest);
    }

    /**
     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
     * which invokes `iteratee` for `value` and each element of `array` to compute
     * their sort ranking. The iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The iteratee invoked per element.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndexBy(array, value, iteratee, retHighest) {
      value = iteratee(value);

      var low = 0,
          high = array == null ? 0 : array.length,
          valIsNaN = value !== value,
          valIsNull = value === null,
          valIsSymbol = isSymbol(value),
          valIsUndefined = value === undefined;

      while (low < high) {
        var mid = nativeFloor((low + high) / 2),
            computed = iteratee(array[mid]),
            othIsDefined = computed !== undefined,
            othIsNull = computed === null,
            othIsReflexive = computed === computed,
            othIsSymbol = isSymbol(computed);

        if (valIsNaN) {
          var setLow = retHighest || othIsReflexive;
        } else if (valIsUndefined) {
          setLow = othIsReflexive && (retHighest || othIsDefined);
        } else if (valIsNull) {
          setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
        } else if (valIsSymbol) {
          setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
        } else if (othIsNull || othIsSymbol) {
          setLow = false;
        } else {
          setLow = retHighest ? (computed <= value) : (computed < value);
        }
        if (setLow) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      return nativeMin(high, MAX_ARRAY_INDEX);
    }

    /**
     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseSortedUniq(array, iteratee) {
      var index = -1,
          length = array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        if (!index || !eq(computed, seen)) {
          var seen = computed;
          result[resIndex++] = value === 0 ? 0 : value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.toNumber` which doesn't ensure correct
     * conversions of binary, hexadecimal, or octal string values.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     */
    function baseToNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      return +value;
    }

    /**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */
    function baseToString(value) {
      // Exit early for strings to avoid a performance hit in some environments.
      if (typeof value == 'string') {
        return value;
      }
      if (isArray(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return arrayMap(value, baseToString) + '';
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseUniq(array, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          length = array.length,
          isCommon = true,
          result = [],
          seen = result;

      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      }
      else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) {
          return setToArray(set);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache;
      }
      else {
        seen = iteratee ? [] : result;
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var seenIndex = seen.length;
          while (seenIndex--) {
            if (seen[seenIndex] === computed) {
              continue outer;
            }
          }
          if (iteratee) {
            seen.push(computed);
          }
          result.push(value);
        }
        else if (!includes(seen, computed, comparator)) {
          if (seen !== result) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.unset`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The property path to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     */
    function baseUnset(object, path) {
      path = castPath(path, object);
      object = parent(object, path);
      return object == null || delete object[toKey(last(path))];
    }

    /**
     * The base implementation of `_.update`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to update.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseUpdate(object, path, updater, customizer) {
      return baseSet(object, path, updater(baseGet(object, path)), customizer);
    }

    /**
     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
     * without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseWhile(array, predicate, isDrop, fromRight) {
      var length = array.length,
          index = fromRight ? length : -1;

      while ((fromRight ? index-- : ++index < length) &&
        predicate(array[index], index, array)) {}

      return isDrop
        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
    }

    /**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to perform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */
    function baseWrapperValue(value, actions) {
      var result = value;
      if (result instanceof LazyWrapper) {
        result = result.value();
      }
      return arrayReduce(actions, function(result, action) {
        return action.func.apply(action.thisArg, arrayPush([result], action.args));
      }, result);
    }

    /**
     * The base implementation of methods like `_.xor`, without support for
     * iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of values.
     */
    function baseXor(arrays, iteratee, comparator) {
      var length = arrays.length;
      if (length < 2) {
        return length ? baseUniq(arrays[0]) : [];
      }
      var index = -1,
          result = Array(length);

      while (++index < length) {
        var array = arrays[index],
            othIndex = -1;

        while (++othIndex < length) {
          if (othIndex != index) {
            result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
          }
        }
      }
      return baseUniq(baseFlatten(result, 1), iteratee, comparator);
    }

    /**
     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
     *
     * @private
     * @param {Array} props The property identifiers.
     * @param {Array} values The property values.
     * @param {Function} assignFunc The function to assign values.
     * @returns {Object} Returns the new object.
     */
    function baseZipObject(props, values, assignFunc) {
      var index = -1,
          length = props.length,
          valsLength = values.length,
          result = {};

      while (++index < length) {
        var value = index < valsLength ? values[index] : undefined;
        assignFunc(result, props[index], value);
      }
      return result;
    }

    /**
     * Casts `value` to an empty array if it's not an array like object.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array|Object} Returns the cast array-like object.
     */
    function castArrayLikeObject(value) {
      return isArrayLikeObject(value) ? value : [];
    }

    /**
     * Casts `value` to `identity` if it's not a function.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Function} Returns cast function.
     */
    function castFunction(value) {
      return typeof value == 'function' ? value : identity;
    }

    /**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }

    /**
     * A `baseRest` alias which can be replaced with `identity` by module
     * replacement plugins.
     *
     * @private
     * @type {Function}
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    var castRest = baseRest;

    /**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the cast slice.
     */
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === undefined ? length : end;
      return (!start && end >= length) ? array : baseSlice(array, start, end);
    }

    /**
     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
     *
     * @private
     * @param {number|Object} id The timer id or timeout object of the timer to clear.
     */
    var clearTimeout = ctxClearTimeout || function(id) {
      return root.clearTimeout(id);
    };

    /**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length,
          result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

      buffer.copy(result);
      return result;
    }

    /**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }

    /**
     * Creates a clone of `dataView`.
     *
     * @private
     * @param {Object} dataView The data view to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned data view.
     */
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }

    /**
     * Creates a clone of `regexp`.
     *
     * @private
     * @param {Object} regexp The regexp to clone.
     * @returns {Object} Returns the cloned regexp.
     */
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }

    /**
     * Creates a clone of the `symbol` object.
     *
     * @private
     * @param {Object} symbol The symbol object to clone.
     * @returns {Object} Returns the cloned symbol object.
     */
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }

    /**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }

    /**
     * Compares values to sort them in ascending order.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {number} Returns the sort order indicator for `value`.
     */
    function compareAscending(value, other) {
      if (value !== other) {
        var valIsDefined = value !== undefined,
            valIsNull = value === null,
            valIsReflexive = value === value,
            valIsSymbol = isSymbol(value);

        var othIsDefined = other !== undefined,
            othIsNull = other === null,
            othIsReflexive = other === other,
            othIsSymbol = isSymbol(other);

        if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
            (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
            (valIsNull && othIsDefined && othIsReflexive) ||
            (!valIsDefined && othIsReflexive) ||
            !valIsReflexive) {
          return 1;
        }
        if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
            (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
            (othIsNull && valIsDefined && valIsReflexive) ||
            (!othIsDefined && valIsReflexive) ||
            !othIsReflexive) {
          return -1;
        }
      }
      return 0;
    }

    /**
     * Used by `_.orderBy` to compare multiple properties of a value to another
     * and stable sort them.
     *
     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
     * specify an order of "desc" for descending or "asc" for ascending sort order
     * of corresponding values.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {boolean[]|string[]} orders The order to sort by for each property.
     * @returns {number} Returns the sort order indicator for `object`.
     */
    function compareMultiple(object, other, orders) {
      var index = -1,
          objCriteria = object.criteria,
          othCriteria = other.criteria,
          length = objCriteria.length,
          ordersLength = orders.length;

      while (++index < length) {
        var result = compareAscending(objCriteria[index], othCriteria[index]);
        if (result) {
          if (index >= ordersLength) {
            return result;
          }
          var order = orders[index];
          return result * (order == 'desc' ? -1 : 1);
        }
      }
      // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
      // that causes it, under certain circumstances, to provide the same value for
      // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
      // for more details.
      //
      // This also ensures a stable sort in V8 and other engines.
      // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
      return object.index - other.index;
    }

    /**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgs(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersLength = holders.length,
          leftIndex = -1,
          leftLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(leftLength + rangeLength),
          isUncurried = !isCurried;

      while (++leftIndex < leftLength) {
        result[leftIndex] = partials[leftIndex];
      }
      while (++argsIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[holders[argsIndex]] = args[argsIndex];
        }
      }
      while (rangeLength--) {
        result[leftIndex++] = args[argsIndex++];
      }
      return result;
    }

    /**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgsRight(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersIndex = -1,
          holdersLength = holders.length,
          rightIndex = -1,
          rightLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(rangeLength + rightLength),
          isUncurried = !isCurried;

      while (++argsIndex < rangeLength) {
        result[argsIndex] = args[argsIndex];
      }
      var offset = argsIndex;
      while (++rightIndex < rightLength) {
        result[offset + rightIndex] = partials[rightIndex];
      }
      while (++holdersIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[offset + holders[holdersIndex]] = args[argsIndex++];
        }
      }
      return result;
    }

    /**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */
    function copyArray(source, array) {
      var index = -1,
          length = source.length;

      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }

    /**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});

      var index = -1,
          length = props.length;

      while (++index < length) {
        var key = props[index];

        var newValue = customizer
          ? customizer(object[key], source[key], key, object, source)
          : undefined;

        if (newValue === undefined) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }

    /**
     * Copies own symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }

    /**
     * Copies own and inherited symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbolsIn(source, object) {
      return copyObject(source, getSymbolsIn(source), object);
    }

    /**
     * Creates a function like `_.groupBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} [initializer] The accumulator object initializer.
     * @returns {Function} Returns the new aggregator function.
     */
    function createAggregator(setter, initializer) {
      return function(collection, iteratee) {
        var func = isArray(collection) ? arrayAggregator : baseAggregator,
            accumulator = initializer ? initializer() : {};

        return func(collection, setter, getIteratee(iteratee, 2), accumulator);
      };
    }

    /**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index = -1,
            length = sources.length,
            customizer = length > 1 ? sources[length - 1] : undefined,
            guard = length > 2 ? sources[2] : undefined;

        customizer = (assigner.length > 3 && typeof customizer == 'function')
          ? (length--, customizer)
          : undefined;

        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? undefined : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index < length) {
          var source = sources[index];
          if (source) {
            assigner(object, source, index, customizer);
          }
        }
        return object;
      });
    }

    /**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length,
            index = fromRight ? length : -1,
            iterable = Object(collection);

        while ((fromRight ? index-- : ++index < length)) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }

    /**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1,
            iterable = Object(object),
            props = keysFunc(object),
            length = props.length;

        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }

    /**
     * Creates a function that wraps `func` to invoke it with the optional `this`
     * binding of `thisArg`.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createBind(func, bitmask, thisArg) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return fn.apply(isBind ? thisArg : this, arguments);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @returns {Function} Returns the new case function.
     */
    function createCaseFirst(methodName) {
      return function(string) {
        string = toString(string);

        var strSymbols = hasUnicode(string)
          ? stringToArray(string)
          : undefined;

        var chr = strSymbols
          ? strSymbols[0]
          : string.charAt(0);

        var trailing = strSymbols
          ? castSlice(strSymbols, 1).join('')
          : string.slice(1);

        return chr[methodName]() + trailing;
      };
    }

    /**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */
    function createCompounder(callback) {
      return function(string) {
        return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
      };
    }

    /**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCtor(Ctor) {
      return function() {
        // Use a `switch` statement to work with class constructors. See
        // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
        // for more details.
        var args = arguments;
        switch (args.length) {
          case 0: return new Ctor;
          case 1: return new Ctor(args[0]);
          case 2: return new Ctor(args[0], args[1]);
          case 3: return new Ctor(args[0], args[1], args[2]);
          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        }
        var thisBinding = baseCreate(Ctor.prototype),
            result = Ctor.apply(thisBinding, args);

        // Mimic the constructor's `return` behavior.
        // See https://es5.github.io/#x13.2.2 for more details.
        return isObject(result) ? result : thisBinding;
      };
    }

    /**
     * Creates a function that wraps `func` to enable currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {number} arity The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCurry(func, bitmask, arity) {
      var Ctor = createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length,
            placeholder = getHolder(wrapper);

        while (index--) {
          args[index] = arguments[index];
        }
        var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
          ? []
          : replaceHolders(args, placeholder);

        length -= holders.length;
        if (length < arity) {
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, undefined,
            args, holders, undefined, undefined, arity - length);
        }
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return apply(fn, this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} findIndexFunc The function to find the collection index.
     * @returns {Function} Returns the new find function.
     */
    function createFind(findIndexFunc) {
      return function(collection, predicate, fromIndex) {
        var iterable = Object(collection);
        if (!isArrayLike(collection)) {
          var iteratee = getIteratee(predicate, 3);
          collection = keys(collection);
          predicate = function(key) { return iteratee(iterable[key], key, iterable); };
        }
        var index = findIndexFunc(collection, predicate, fromIndex);
        return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
      };
    }

    /**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new flow function.
     */
    function createFlow(fromRight) {
      return flatRest(function(funcs) {
        var length = funcs.length,
            index = length,
            prereq = LodashWrapper.prototype.thru;

        if (fromRight) {
          funcs.reverse();
        }
        while (index--) {
          var func = funcs[index];
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
            var wrapper = new LodashWrapper([], true);
          }
        }
        index = wrapper ? index : length;
        while (++index < length) {
          func = funcs[index];

          var funcName = getFuncName(func),
              data = funcName == 'wrapper' ? getData(func) : undefined;

          if (data && isLaziable(data[0]) &&
                data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) &&
                !data[4].length && data[9] == 1
              ) {
            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
          } else {
            wrapper = (func.length == 1 && isLaziable(func))
              ? wrapper[funcName]()
              : wrapper.thru(func);
          }
        }
        return function() {
          var args = arguments,
              value = args[0];

          if (wrapper && args.length == 1 && isArray(value)) {
            return wrapper.plant(value).value();
          }
          var index = 0,
              result = length ? funcs[index].apply(this, args) : value;

          while (++index < length) {
            result = funcs[index].call(this, result);
          }
          return result;
        };
      });
    }

    /**
     * Creates a function that wraps `func` to invoke it with optional `this`
     * binding of `thisArg`, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided
     *  to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
      var isAry = bitmask & WRAP_ARY_FLAG,
          isBind = bitmask & WRAP_BIND_FLAG,
          isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
          isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
          isFlip = bitmask & WRAP_FLIP_FLAG,
          Ctor = isBindKey ? undefined : createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length;

        while (index--) {
          args[index] = arguments[index];
        }
        if (isCurried) {
          var placeholder = getHolder(wrapper),
              holdersCount = countHolders(args, placeholder);
        }
        if (partials) {
          args = composeArgs(args, partials, holders, isCurried);
        }
        if (partialsRight) {
          args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
        }
        length -= holdersCount;
        if (isCurried && length < arity) {
          var newHolders = replaceHolders(args, placeholder);
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, thisArg,
            args, newHolders, argPos, ary, arity - length
          );
        }
        var thisBinding = isBind ? thisArg : this,
            fn = isBindKey ? thisBinding[func] : func;

        length = args.length;
        if (argPos) {
          args = reorder(args, argPos);
        } else if (isFlip && length > 1) {
          args.reverse();
        }
        if (isAry && ary < length) {
          args.length = ary;
        }
        if (this && this !== root && this instanceof wrapper) {
          fn = Ctor || createCtor(fn);
        }
        return fn.apply(thisBinding, args);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.invertBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} toIteratee The function to resolve iteratees.
     * @returns {Function} Returns the new inverter function.
     */
    function createInverter(setter, toIteratee) {
      return function(object, iteratee) {
        return baseInverter(object, setter, toIteratee(iteratee), {});
      };
    }

    /**
     * Creates a function that performs a mathematical operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @param {number} [defaultValue] The value used for `undefined` arguments.
     * @returns {Function} Returns the new mathematical operation function.
     */
    function createMathOperation(operator, defaultValue) {
      return function(value, other) {
        var result;
        if (value === undefined && other === undefined) {
          return defaultValue;
        }
        if (value !== undefined) {
          result = value;
        }
        if (other !== undefined) {
          if (result === undefined) {
            return other;
          }
          if (typeof value == 'string' || typeof other == 'string') {
            value = baseToString(value);
            other = baseToString(other);
          } else {
            value = baseToNumber(value);
            other = baseToNumber(other);
          }
          result = operator(value, other);
        }
        return result;
      };
    }

    /**
     * Creates a function like `_.over`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over iteratees.
     * @returns {Function} Returns the new over function.
     */
    function createOver(arrayFunc) {
      return flatRest(function(iteratees) {
        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
        return baseRest(function(args) {
          var thisArg = this;
          return arrayFunc(iteratees, function(iteratee) {
            return apply(iteratee, thisArg, args);
          });
        });
      });
    }

    /**
     * Creates the padding for `string` based on `length`. The `chars` string
     * is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {number} length The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padding for `string`.
     */
    function createPadding(length, chars) {
      chars = chars === undefined ? ' ' : baseToString(chars);

      var charsLength = chars.length;
      if (charsLength < 2) {
        return charsLength ? baseRepeat(chars, length) : chars;
      }
      var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
      return hasUnicode(chars)
        ? castSlice(stringToArray(result), 0, length).join('')
        : result.slice(0, length);
    }

    /**
     * Creates a function that wraps `func` to invoke it with the `this` binding
     * of `thisArg` and `partials` prepended to the arguments it receives.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} partials The arguments to prepend to those provided to
     *  the new function.
     * @returns {Function} Returns the new wrapped function.
     */
    function createPartial(func, bitmask, thisArg, partials) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var argsIndex = -1,
            argsLength = arguments.length,
            leftIndex = -1,
            leftLength = partials.length,
            args = Array(leftLength + argsLength),
            fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

        while (++leftIndex < leftLength) {
          args[leftIndex] = partials[leftIndex];
        }
        while (argsLength--) {
          args[leftIndex++] = arguments[++argsIndex];
        }
        return apply(fn, isBind ? thisArg : this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.range` or `_.rangeRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new range function.
     */
    function createRange(fromRight) {
      return function(start, end, step) {
        if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
          end = step = undefined;
        }
        // Ensure the sign of `-0` is preserved.
        start = toFinite(start);
        if (end === undefined) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
        return baseRange(start, end, step, fromRight);
      };
    }

    /**
     * Creates a function that performs a relational operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @returns {Function} Returns the new relational operation function.
     */
    function createRelationalOperation(operator) {
      return function(value, other) {
        if (!(typeof value == 'string' && typeof other == 'string')) {
          value = toNumber(value);
          other = toNumber(other);
        }
        return operator(value, other);
      };
    }

    /**
     * Creates a function that wraps `func` to continue currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {Function} wrapFunc The function to create the `func` wrapper.
     * @param {*} placeholder The placeholder value.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
      var isCurry = bitmask & WRAP_CURRY_FLAG,
          newHolders = isCurry ? holders : undefined,
          newHoldersRight = isCurry ? undefined : holders,
          newPartials = isCurry ? partials : undefined,
          newPartialsRight = isCurry ? undefined : partials;

      bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
      bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

      if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
        bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
      }
      var newData = [
        func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
        newHoldersRight, argPos, ary, arity
      ];

      var result = wrapFunc.apply(undefined, newData);
      if (isLaziable(func)) {
        setData(result, newData);
      }
      result.placeholder = placeholder;
      return setWrapToString(result, func, bitmask);
    }

    /**
     * Creates a function like `_.round`.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */
    function createRound(methodName) {
      var func = Math[methodName];
      return function(number, precision) {
        number = toNumber(number);
        precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
        if (precision && nativeIsFinite(number)) {
          // Shift with exponential notation to avoid floating-point issues.
          // See [MDN](https://mdn.io/round#Examples) for more details.
          var pair = (toString(number) + 'e').split('e'),
              value = func(pair[0] + 'e' + (+pair[1] + precision));

          pair = (toString(value) + 'e').split('e');
          return +(pair[0] + 'e' + (+pair[1] - precision));
        }
        return func(number);
      };
    }

    /**
     * Creates a set object of `values`.
     *
     * @private
     * @param {Array} values The values to add to the set.
     * @returns {Object} Returns the new set.
     */
    var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
      return new Set(values);
    };

    /**
     * Creates a `_.toPairs` or `_.toPairsIn` function.
     *
     * @private
     * @param {Function} keysFunc The function to get the keys of a given object.
     * @returns {Function} Returns the new pairs function.
     */
    function createToPairs(keysFunc) {
      return function(object) {
        var tag = getTag(object);
        if (tag == mapTag) {
          return mapToArray(object);
        }
        if (tag == setTag) {
          return setToPairs(object);
        }
        return baseToPairs(object, keysFunc(object));
      };
    }

    /**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags.
     *    1 - `_.bind`
     *    2 - `_.bindKey`
     *    4 - `_.curry` or `_.curryRight` of a bound function
     *    8 - `_.curry`
     *   16 - `_.curryRight`
     *   32 - `_.partial`
     *   64 - `_.partialRight`
     *  128 - `_.rearg`
     *  256 - `_.ary`
     *  512 - `_.flip`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
      var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
      if (!isBindKey && typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var length = partials ? partials.length : 0;
      if (!length) {
        bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
        partials = holders = undefined;
      }
      ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
      arity = arity === undefined ? arity : toInteger(arity);
      length -= holders ? holders.length : 0;

      if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
        var partialsRight = partials,
            holdersRight = holders;

        partials = holders = undefined;
      }
      var data = isBindKey ? undefined : getData(func);

      var newData = [
        func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
        argPos, ary, arity
      ];

      if (data) {
        mergeData(newData, data);
      }
      func = newData[0];
      bitmask = newData[1];
      thisArg = newData[2];
      partials = newData[3];
      holders = newData[4];
      arity = newData[9] = newData[9] === undefined
        ? (isBindKey ? 0 : func.length)
        : nativeMax(newData[9] - length, 0);

      if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
        bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
      }
      if (!bitmask || bitmask == WRAP_BIND_FLAG) {
        var result = createBind(func, bitmask, thisArg);
      } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
        result = createCurry(func, bitmask, arity);
      } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
        result = createPartial(func, bitmask, thisArg, partials);
      } else {
        result = createHybrid.apply(undefined, newData);
      }
      var setter = data ? baseSetData : setData;
      return setWrapToString(setter(result, newData), func, bitmask);
    }

    /**
     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
     * of source objects to the destination object for all destination properties
     * that resolve to `undefined`.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to assign.
     * @param {Object} object The parent object of `objValue`.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsAssignIn(objValue, srcValue, key, object) {
      if (objValue === undefined ||
          (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        return srcValue;
      }
      return objValue;
    }

    /**
     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
     * objects into destination objects that are passed thru.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to merge.
     * @param {Object} object The parent object of `objValue`.
     * @param {Object} source The parent object of `srcValue`.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
      if (isObject(objValue) && isObject(srcValue)) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, objValue);
        baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
        stack['delete'](srcValue);
      }
      return objValue;
    }

    /**
     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
     * objects.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {string} key The key of the property to inspect.
     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
     */
    function customOmitClone(value) {
      return isPlainObject(value) ? undefined : value;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          arrLength = array.length,
          othLength = other.length;

      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(array);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var index = -1,
          result = true,
          seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

      stack.set(array, other);
      stack.set(other, array);

      // Ignore non-index properties.
      while (++index < arrLength) {
        var arrValue = array[index],
            othValue = other[index];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, arrValue, index, other, array, stack)
            : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== undefined) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
          if (!arraySome(other, function(othValue, othIndex) {
                if (!cacheHas(seen, othIndex) &&
                    (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
            result = false;
            break;
          }
        } else if (!(
              arrValue === othValue ||
                equalFunc(arrValue, othValue, bitmask, customizer, stack)
            )) {
          result = false;
          break;
        }
      }
      stack['delete'](array);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if ((object.byteLength != other.byteLength) ||
              (object.byteOffset != other.byteOffset)) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;

        case arrayBufferTag:
          if ((object.byteLength != other.byteLength) ||
              !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;

        case boolTag:
        case dateTag:
        case numberTag:
          // Coerce booleans to `1` or `0` and dates to milliseconds.
          // Invalid dates are coerced to `NaN`.
          return eq(+object, +other);

        case errorTag:
          return object.name == other.name && object.message == other.message;

        case regexpTag:
        case stringTag:
          // Coerce regexes to strings and treat strings, primitives and objects,
          // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
          // for more details.
          return object == (other + '');

        case mapTag:
          var convert = mapToArray;

        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);

          if (object.size != other.size && !isPartial) {
            return false;
          }
          // Assume cyclic values are equal.
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;

          // Recursively compare objects (susceptible to call stack limits).
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack['delete'](object);
          return result;

        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          objProps = getAllKeys(object),
          objLength = objProps.length,
          othProps = getAllKeys(other),
          othLength = othProps.length;

      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);

      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key],
            othValue = other[key];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, objValue, key, other, object, stack)
            : customizer(objValue, othValue, key, object, other, stack);
        }
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined
              ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
              : compared
            )) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == 'constructor');
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor,
            othCtor = other.constructor;

        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor &&
            ('constructor' in object && 'constructor' in other) &&
            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack['delete'](object);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseRest` which flattens the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    function flatRest(func) {
      return setToString(overRest(func, undefined, flatten), func + '');
    }

    /**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }

    /**
     * Creates an array of own and inherited enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }

    /**
     * Gets metadata for `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {*} Returns the metadata for `func`.
     */
    var getData = !metaMap ? noop : function(func) {
      return metaMap.get(func);
    };

    /**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {string} Returns the function name.
     */
    function getFuncName(func) {
      var result = (func.name + ''),
          array = realNames[result],
          length = hasOwnProperty.call(realNames, result) ? array.length : 0;

      while (length--) {
        var data = array[length],
            otherFunc = data.func;
        if (otherFunc == null || otherFunc == func) {
          return data.name;
        }
      }
      return result;
    }

    /**
     * Gets the argument placeholder value for `func`.
     *
     * @private
     * @param {Function} func The function to inspect.
     * @returns {*} Returns the placeholder value.
     */
    function getHolder(func) {
      var object = hasOwnProperty.call(lodash, 'placeholder') ? lodash : func;
      return object.placeholder;
    }

    /**
     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
     * this function returns the custom method, otherwise it returns `baseIteratee`.
     * If arguments are provided, the chosen function is invoked with them and
     * its result is returned.
     *
     * @private
     * @param {*} [value] The value to convert to an iteratee.
     * @param {number} [arity] The arity of the created iteratee.
     * @returns {Function} Returns the chosen function or its result.
     */
    function getIteratee() {
      var result = lodash.iteratee || iteratee;
      result = result === iteratee ? baseIteratee : result;
      return arguments.length ? result(arguments[0], arguments[1]) : result;
    }

    /**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key)
        ? data[typeof key == 'string' ? 'string' : 'hash']
        : data.map;
    }

    /**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */
    function getMatchData(object) {
      var result = keys(object),
          length = result.length;

      while (length--) {
        var key = result[length],
            value = object[key];

        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }

    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : undefined;
    }

    /**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag),
          tag = value[symToStringTag];

      try {
        value[symToStringTag] = undefined;
        var unmasked = true;
      } catch (e) {}

      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }

    /**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };

    /**
     * Creates an array of the own and inherited enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };

    /**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    var getTag = baseGetTag;

    // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
    if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
        (Map && getTag(new Map) != mapTag) ||
        (Promise && getTag(Promise.resolve()) != promiseTag) ||
        (Set && getTag(new Set) != setTag) ||
        (WeakMap && getTag(new WeakMap) != weakMapTag)) {
      getTag = function(value) {
        var result = baseGetTag(value),
            Ctor = result == objectTag ? value.constructor : undefined,
            ctorString = Ctor ? toSource(Ctor) : '';

        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString: return dataViewTag;
            case mapCtorString: return mapTag;
            case promiseCtorString: return promiseTag;
            case setCtorString: return setTag;
            case weakMapCtorString: return weakMapTag;
          }
        }
        return result;
      };
    }

    /**
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} transforms The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `start` and `end`
     *  positions of the view.
     */
    function getView(start, end, transforms) {
      var index = -1,
          length = transforms.length;

      while (++index < length) {
        var data = transforms[index],
            size = data.size;

        switch (data.type) {
          case 'drop':      start += size; break;
          case 'dropRight': end -= size; break;
          case 'take':      end = nativeMin(end, start + size); break;
          case 'takeRight': start = nativeMax(start, end - size); break;
        }
      }
      return { 'start': start, 'end': end };
    }

    /**
     * Extracts wrapper details from the `source` body comment.
     *
     * @private
     * @param {string} source The source to inspect.
     * @returns {Array} Returns the wrapper details.
     */
    function getWrapDetails(source) {
      var match = source.match(reWrapDetails);
      return match ? match[1].split(reSplitDetails) : [];
    }

    /**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */
    function hasPath(object, path, hasFunc) {
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          result = false;

      while (++index < length) {
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) &&
        (isArray(object) || isArguments(object));
    }

    /**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */
    function initCloneArray(array) {
      var length = array.length,
          result = new array.constructor(length);

      // Add properties assigned by `RegExp#exec`.
      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }

    /**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneObject(object) {
      return (typeof object.constructor == 'function' && !isPrototype(object))
        ? baseCreate(getPrototype(object))
        : {};
    }

    /**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneByTag(object, tag, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);

        case boolTag:
        case dateTag:
          return new Ctor(+object);

        case dataViewTag:
          return cloneDataView(object, isDeep);

        case float32Tag: case float64Tag:
        case int8Tag: case int16Tag: case int32Tag:
        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
          return cloneTypedArray(object, isDeep);

        case mapTag:
          return new Ctor;

        case numberTag:
        case stringTag:
          return new Ctor(object);

        case regexpTag:
          return cloneRegExp(object);

        case setTag:
          return new Ctor;

        case symbolTag:
          return cloneSymbol(object);
      }
    }

    /**
     * Inserts wrapper `details` in a comment at the top of the `source` body.
     *
     * @private
     * @param {string} source The source to modify.
     * @returns {Array} details The details to insert.
     * @returns {string} Returns the modified source.
     */
    function insertWrapDetails(source, details) {
      var length = details.length;
      if (!length) {
        return source;
      }
      var lastIndex = length - 1;
      details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
      details = details.join(length > 2 ? ', ' : ' ');
      return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
    }

    /**
     * Checks if `value` is a flattenable `arguments` object or array.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
     */
    function isFlattenable(value) {
      return isArray(value) || isArguments(value) ||
        !!(spreadableSymbol && value && value[spreadableSymbol]);
    }

    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;

      return !!length &&
        (type == 'number' ||
          (type != 'symbol' && reIsUint.test(value))) &&
            (value > -1 && value % 1 == 0 && value < length);
    }

    /**
     * Checks if the given arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
     *  else `false`.
     */
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (type == 'number'
            ? (isArrayLike(object) && isIndex(index, object.length))
            : (type == 'string' && index in object)
          ) {
        return eq(object[index], value);
      }
      return false;
    }

    /**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == 'number' || type == 'symbol' || type == 'boolean' ||
          value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
        (object != null && value in Object(object));
    }

    /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */
    function isKeyable(value) {
      var type = typeof value;
      return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
        ? (value !== '__proto__')
        : (value === null);
    }

    /**
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
     *  else `false`.
     */
    function isLaziable(func) {
      var funcName = getFuncName(func),
          other = lodash[funcName];

      if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
        return false;
      }
      if (func === other) {
        return true;
      }
      var data = getData(other);
      return !!data && func === data[0];
    }

    /**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */
    function isMasked(func) {
      return !!maskSrcKey && (maskSrcKey in func);
    }

    /**
     * Checks if `func` is capable of being masked.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
     */
    var isMaskable = coreJsData ? isFunction : stubFalse;

    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */
    function isPrototype(value) {
      var Ctor = value && value.constructor,
          proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

      return value === proto;
    }

    /**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }

    /**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue &&
          (srcValue !== undefined || (key in Object(object)));
      };
    }

    /**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns {Function} Returns the new memoized function.
     */
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });

      var cache = result.cache;
      return result;
    }

    /**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers used to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and
     * `_.rearg` modify function arguments, making the order in which they are
     * executed important, preventing the merging of metadata. However, we make
     * an exception for a safe combined case where curried functions have `_.ary`
     * and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source metadata.
     * @returns {Array} Returns `data`.
     */
    function mergeData(data, source) {
      var bitmask = data[1],
          srcBitmask = source[1],
          newBitmask = bitmask | srcBitmask,
          isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

      var isCombo =
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
        ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));

      // Exit early if metadata can't be merged.
      if (!(isCommon || isCombo)) {
        return data;
      }
      // Use source `thisArg` if available.
      if (srcBitmask & WRAP_BIND_FLAG) {
        data[2] = source[2];
        // Set when currying a bound function.
        newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
      }
      // Compose partial arguments.
      var value = source[3];
      if (value) {
        var partials = data[3];
        data[3] = partials ? composeArgs(partials, value, source[4]) : value;
        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
      }
      // Compose partial right arguments.
      value = source[5];
      if (value) {
        partials = data[5];
        data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
      }
      // Use source `argPos` if available.
      value = source[7];
      if (value) {
        data[7] = value;
      }
      // Use source `ary` if it's smaller.
      if (srcBitmask & WRAP_ARY_FLAG) {
        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
      }
      // Use source `arity` if one is not provided.
      if (data[9] == null) {
        data[9] = source[9];
      }
      // Use source `func` and merge bitmasks.
      data[0] = source[0];
      data[1] = newBitmask;

      return data;
    }

    /**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }

    /**
     * A specialized version of `baseRest` which transforms the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @param {Function} transform The rest array transform.
     * @returns {Function} Returns the new function.
     */
    function overRest(func, start, transform) {
      start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
      return function() {
        var args = arguments,
            index = -1,
            length = nativeMax(args.length - start, 0),
            array = Array(length);

        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
      };
    }

    /**
     * Gets the parent value at `path` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path to get the parent value of.
     * @returns {*} Returns the parent value.
     */
    function parent(object, path) {
      return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
    }

    /**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */
    function reorder(array, indexes) {
      var arrLength = array.length,
          length = nativeMin(indexes.length, arrLength),
          oldArray = copyArray(array);

      while (length--) {
        var index = indexes[length];
        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
      }
      return array;
    }

    /**
     * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */
    function safeGet(object, key) {
      if (key === 'constructor' && typeof object[key] === 'function') {
        return;
      }

      if (key == '__proto__') {
        return;
      }

      return object[key];
    }

    /**
     * Sets metadata for `func`.
     *
     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
     * period of time, it will trip its breaker and transition to an identity
     * function to avoid garbage collection pauses in V8. See
     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
     * for more details.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var setData = shortOut(baseSetData);

    /**
     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    var setTimeout = ctxSetTimeout || function(func, wait) {
      return root.setTimeout(func, wait);
    };

    /**
     * Sets the `toString` method of `func` to return `string`.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var setToString = shortOut(baseSetToString);

    /**
     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
     * with wrapper details in a comment at the top of the source body.
     *
     * @private
     * @param {Function} wrapper The function to modify.
     * @param {Function} reference The reference function.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Function} Returns `wrapper`.
     */
    function setWrapToString(wrapper, reference, bitmask) {
      var source = (reference + '');
      return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
    }

    /**
     * Creates a function that'll short out and invoke `identity` instead
     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
     * milliseconds.
     *
     * @private
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new shortable function.
     */
    function shortOut(func) {
      var count = 0,
          lastCalled = 0;

      return function() {
        var stamp = nativeNow(),
            remaining = HOT_SPAN - (stamp - lastCalled);

        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(undefined, arguments);
      };
    }

    /**
     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @param {number} [size=array.length] The size of `array`.
     * @returns {Array} Returns `array`.
     */
    function shuffleSelf(array, size) {
      var index = -1,
          length = array.length,
          lastIndex = length - 1;

      size = size === undefined ? length : size;
      while (++index < size) {
        var rand = baseRandom(index, lastIndex),
            value = array[rand];

        array[rand] = array[index];
        array[index] = value;
      }
      array.length = size;
      return array;
    }

    /**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46 /* . */) {
        result.push('');
      }
      string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
      });
      return result;
    });

    /**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */
    function toKey(value) {
      if (typeof value == 'string' || isSymbol(value)) {
        return value;
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {}
        try {
          return (func + '');
        } catch (e) {}
      }
      return '';
    }

    /**
     * Updates wrapper `details` based on `bitmask` flags.
     *
     * @private
     * @returns {Array} details The details to modify.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Array} Returns `details`.
     */
    function updateWrapDetails(details, bitmask) {
      arrayEach(wrapFlags, function(pair) {
        var value = '_.' + pair[0];
        if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
          details.push(value);
        }
      });
      return details.sort();
    }

    /**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */
    function wrapperClone(wrapper) {
      if (wrapper instanceof LazyWrapper) {
        return wrapper.clone();
      }
      var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
      result.__actions__ = copyArray(wrapper.__actions__);
      result.__index__  = wrapper.__index__;
      result.__values__ = wrapper.__values__;
      return result;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of elements split into groups the length of `size`.
     * If `array` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the new array of chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */
    function chunk(array, size, guard) {
      if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
        size = 1;
      } else {
        size = nativeMax(toInteger(size), 0);
      }
      var length = array == null ? 0 : array.length;
      if (!length || size < 1) {
        return [];
      }
      var index = 0,
          resIndex = 0,
          result = Array(nativeCeil(length / size));

      while (index < length) {
        result[resIndex++] = baseSlice(array, index, (index += size));
      }
      return result;
    }

    /**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */
    function compact(array) {
      var index = -1,
          length = array == null ? 0 : array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index];
        if (value) {
          result[resIndex++] = value;
        }
      }
      return result;
    }

    /**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to concatenate.
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */
    function concat() {
      var length = arguments.length;
      if (!length) {
        return [];
      }
      var args = Array(length - 1),
          array = arguments[0],
          index = length;

      while (index--) {
        args[index - 1] = arguments[index];
      }
      return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
    }

    /**
     * Creates an array of `array` values not included in the other given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * **Note:** Unlike `_.pullAll`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.without, _.xor
     * @example
     *
     * _.difference([2, 1], [2, 3]);
     * // => [1]
     */
    var difference = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `iteratee` which
     * is invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var differenceBy = baseRest(function(array, values) {
      var iteratee = last(values);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `comparator`
     * which is invoked to compare elements of `array` to `values`. The order and
     * references of result values are determined by the first array. The comparator
     * is invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     *
     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }]
     */
    var differenceWith = baseRest(function(array, values) {
      var comparator = last(values);
      if (isArrayLikeObject(comparator)) {
        comparator = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)
        : [];
    });

    /**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     * _.drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function drop(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dropRight([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function dropRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.dropRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropRightWhile(users, ['active', false]);
     * // => objects for ['barney']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropRightWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true, true)
        : [];
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.dropWhile(users, function(o) { return !o.active; });
     * // => objects for ['pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropWhile(users, ['active', false]);
     * // => objects for ['pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true)
        : [];
    }

    /**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8, 10], '*', 1, 3);
     * // => [4, '*', '*', 10]
     */
    function fill(array, value, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
        start = 0;
        end = length;
      }
      return baseFill(array, value, start, end);
    }

    /**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(o) { return o.user == 'barney'; });
     * // => 0
     *
     * // The `_.matches` iteratee shorthand.
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findIndex(users, ['active', false]);
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.findIndex(users, 'active');
     * // => 2
     */
    function findIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index);
    }

    /**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
     * // => 2
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastIndex(users, ['active', false]);
     * // => 2
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastIndex(users, 'active');
     * // => 0
     */
    function findLastIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length - 1;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = fromIndex < 0
          ? nativeMax(length + index, 0)
          : nativeMin(index, length - 1);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index, true);
    }

    /**
     * Flattens `array` a single level deep.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, [3, [4]], 5]]);
     * // => [1, 2, [3, [4]], 5]
     */
    function flatten(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, 1) : [];
    }

    /**
     * Recursively flattens `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2, [3, [4]], 5]]);
     * // => [1, 2, 3, 4, 5]
     */
    function flattenDeep(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, INFINITY) : [];
    }

    /**
     * Recursively flatten `array` up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * var array = [1, [2, [3, [4]], 5]];
     *
     * _.flattenDepth(array, 1);
     * // => [1, 2, [3, [4]], 5]
     *
     * _.flattenDepth(array, 2);
     * // => [1, 2, 3, [4], 5]
     */
    function flattenDepth(array, depth) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(array, depth);
    }

    /**
     * The inverse of `_.toPairs`; this method returns an object composed
     * from key-value `pairs`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} pairs The key-value pairs.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.fromPairs([['a', 1], ['b', 2]]);
     * // => { 'a': 1, 'b': 2 }
     */
    function fromPairs(pairs) {
      var index = -1,
          length = pairs == null ? 0 : pairs.length,
          result = {};

      while (++index < length) {
        var pair = pairs[index];
        result[pair[0]] = pair[1];
      }
      return result;
    }

    /**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.head([1, 2, 3]);
     * // => 1
     *
     * _.head([]);
     * // => undefined
     */
    function head(array) {
      return (array && array.length) ? array[0] : undefined;
    }

    /**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it's used as the
     * offset from the end of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // Search from the `fromIndex`.
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     */
    function indexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseIndexOf(array, value, index);
    }

    /**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     */
    function initial(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 0, -1) : [];
    }

    /**
     * Creates an array of unique values that are included in all given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersection([2, 1], [2, 3]);
     * // => [2]
     */
    var intersection = baseRest(function(arrays) {
      var mapped = arrayMap(arrays, castArrayLikeObject);
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped)
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `iteratee`
     * which is invoked for each element of each `arrays` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [2.1]
     *
     * // The `_.property` iteratee shorthand.
     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }]
     */
    var intersectionBy = baseRest(function(arrays) {
      var iteratee = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      if (iteratee === last(mapped)) {
        iteratee = undefined;
      } else {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `comparator`
     * which is invoked to compare elements of `arrays`. The order and references
     * of result values are determined by the first array. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.intersectionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }]
     */
    var intersectionWith = baseRest(function(arrays) {
      var comparator = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      comparator = typeof comparator == 'function' ? comparator : undefined;
      if (comparator) {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, undefined, comparator)
        : [];
    });

    /**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to convert.
     * @param {string} [separator=','] The element separator.
     * @returns {string} Returns the joined string.
     * @example
     *
     * _.join(['a', 'b', 'c'], '~');
     * // => 'a~b~c'
     */
    function join(array, separator) {
      return array == null ? '' : nativeJoin.call(array, separator);
    }

    /**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */
    function last(array) {
      var length = array == null ? 0 : array.length;
      return length ? array[length - 1] : undefined;
    }

    /**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // Search from the `fromIndex`.
     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     */
    function lastIndexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
      }
      return value === value
        ? strictLastIndexOf(array, value, index)
        : baseFindIndex(array, baseIsNaN, index, true);
    }

    /**
     * Gets the element at index `n` of `array`. If `n` is negative, the nth
     * element from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.11.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=0] The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     *
     * _.nth(array, 1);
     * // => 'b'
     *
     * _.nth(array, -2);
     * // => 'c';
     */
    function nth(array, n) {
      return (array && array.length) ? baseNth(array, toInteger(n)) : undefined;
    }

    /**
     * Removes all given values from `array` using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
     * to remove elements from an array by predicate.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...*} [values] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pull(array, 'a', 'c');
     * console.log(array);
     * // => ['b', 'b']
     */
    var pull = baseRest(pullAll);

    /**
     * This method is like `_.pull` except that it accepts an array of values to remove.
     *
     * **Note:** Unlike `_.difference`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pullAll(array, ['a', 'c']);
     * console.log(array);
     * // => ['b', 'b']
     */
    function pullAll(array, values) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values)
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    function pullAllBy(array, values, iteratee) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, getIteratee(iteratee, 2))
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which
     * is invoked to compare elements of `array` to `values`. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    function pullAllWith(array, values, comparator) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, undefined, comparator)
        : array;
    }

    /**
     * Removes elements from `array` corresponding to `indexes` and returns an
     * array of removed elements.
     *
     * **Note:** Unlike `_.at`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     * var pulled = _.pullAt(array, [1, 3]);
     *
     * console.log(array);
     * // => ['a', 'c']
     *
     * console.log(pulled);
     * // => ['b', 'd']
     */
    var pullAt = flatRest(function(array, indexes) {
      var length = array == null ? 0 : array.length,
          result = baseAt(array, indexes);

      basePullAt(array, arrayMap(indexes, function(index) {
        return isIndex(index, length) ? +index : index;
      }).sort(compareAscending));

      return result;
    });

    /**
     * Removes all elements from `array` that `predicate` returns truthy for
     * and returns an array of the removed elements. The predicate is invoked
     * with three arguments: (value, index, array).
     *
     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
     * to pull elements from an array by value.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4];
     * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
     *
     * console.log(array);
     * // => [1, 3]
     *
     * console.log(evens);
     * // => [2, 4]
     */
    function remove(array, predicate) {
      var result = [];
      if (!(array && array.length)) {
        return result;
      }
      var index = -1,
          indexes = [],
          length = array.length;

      predicate = getIteratee(predicate, 3);
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result.push(value);
          indexes.push(index);
        }
      }
      basePullAt(array, indexes);
      return result;
    }

    /**
     * Reverses `array` so that the first element becomes the last, the second
     * element becomes the second to last, and so on.
     *
     * **Note:** This method mutates `array` and is based on
     * [`Array#reverse`](https://mdn.io/Array/reverse).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.reverse(array);
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function reverse(array) {
      return array == null ? array : nativeReverse.call(array);
    }

    /**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of
     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
     * returned.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function slice(array, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
        start = 0;
        end = length;
      }
      else {
        start = start == null ? 0 : toInteger(start);
        end = end === undefined ? length : toInteger(end);
      }
      return baseSlice(array, start, end);
    }

    /**
     * Uses a binary search to determine the lowest index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     */
    function sortedIndex(array, value) {
      return baseSortedIndex(array, value);
    }

    /**
     * This method is like `_.sortedIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
     * // => 0
     */
    function sortedIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
    }

    /**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
     * // => 1
     */
    function sortedIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value);
        if (index < length && eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
     * // => 4
     */
    function sortedLastIndex(array, value) {
      return baseSortedIndex(array, value, true);
    }

    /**
     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 1
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
     * // => 1
     */
    function sortedLastIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);
    }

    /**
     * This method is like `_.lastIndexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
     * // => 3
     */
    function sortedLastIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value, true) - 1;
        if (eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.uniq` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniq([1, 1, 2]);
     * // => [1, 2]
     */
    function sortedUniq(array) {
      return (array && array.length)
        ? baseSortedUniq(array)
        : [];
    }

    /**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.3]
     */
    function sortedUniqBy(array, iteratee) {
      return (array && array.length)
        ? baseSortedUniq(array, getIteratee(iteratee, 2))
        : [];
    }

    /**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.tail([1, 2, 3]);
     * // => [2, 3]
     */
    function tail(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 1, length) : [];
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.take([1, 2, 3], 0);
     * // => []
     */
    function take(array, n, guard) {
      if (!(array && array.length)) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.takeRight([1, 2, 3], 0);
     * // => []
     */
    function takeRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.takeRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeRightWhile(users, ['active', false]);
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeRightWhile(users, 'active');
     * // => []
     */
    function takeRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), false, true)
        : [];
    }

    /**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.takeWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeWhile(users, ['active', false]);
     * // => objects for ['barney', 'fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeWhile(users, 'active');
     * // => []
     */
    function takeWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3))
        : [];
    }

    /**
     * Creates an array of unique values, in order, from all given arrays using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.union([2], [1, 2]);
     * // => [2, 1]
     */
    var union = baseRest(function(arrays) {
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
    });

    /**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which uniqueness is computed. Result values are chosen from the first
     * array in which the value occurs. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    var unionBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.union` except that it accepts `comparator` which
     * is invoked to compare elements of `arrays`. Result values are chosen from
     * the first array in which the value occurs. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.unionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var unionWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
    });

    /**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons, in which only the first occurrence of each element
     * is kept. The order of result values is determined by the order they occur
     * in the array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniq([2, 1, 2]);
     * // => [2, 1]
     */
    function uniq(array) {
      return (array && array.length) ? baseUniq(array) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * uniqueness is computed. The order of result values is determined by the
     * order they occur in the array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    function uniqBy(array, iteratee) {
      return (array && array.length) ? baseUniq(array, getIteratee(iteratee, 2)) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `comparator` which
     * is invoked to compare elements of `array`. The order of result values is
     * determined by the order they occur in the array.The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.uniqWith(objects, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     */
    function uniqWith(array, comparator) {
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return (array && array.length) ? baseUniq(array, undefined, comparator) : [];
    }

    /**
     * This method is like `_.zip` except that it accepts an array of grouped
     * elements and creates an array regrouping the elements to their pre-zip
     * configuration.
     *
     * @static
     * @memberOf _
     * @since 1.2.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     *
     * _.unzip(zipped);
     * // => [['a', 'b'], [1, 2], [true, false]]
     */
    function unzip(array) {
      if (!(array && array.length)) {
        return [];
      }
      var length = 0;
      array = arrayFilter(array, function(group) {
        if (isArrayLikeObject(group)) {
          length = nativeMax(group.length, length);
          return true;
        }
      });
      return baseTimes(length, function(index) {
        return arrayMap(array, baseProperty(index));
      });
    }

    /**
     * This method is like `_.unzip` except that it accepts `iteratee` to specify
     * how regrouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  regrouped values.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
     * // => [[1, 10, 100], [2, 20, 200]]
     *
     * _.unzipWith(zipped, _.add);
     * // => [3, 30, 300]
     */
    function unzipWith(array, iteratee) {
      if (!(array && array.length)) {
        return [];
      }
      var result = unzip(array);
      if (iteratee == null) {
        return result;
      }
      return arrayMap(result, function(group) {
        return apply(iteratee, undefined, group);
      });
    }

    /**
     * Creates an array excluding all given values using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.pull`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...*} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.xor
     * @example
     *
     * _.without([2, 1, 2, 3], 1, 2);
     * // => [3]
     */
    var without = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, values)
        : [];
    });

    /**
     * Creates an array of unique values that is the
     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
     * of the given arrays. The order of result values is determined by the order
     * they occur in the arrays.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.without
     * @example
     *
     * _.xor([2, 1], [2, 3]);
     * // => [1, 3]
     */
    var xor = baseRest(function(arrays) {
      return baseXor(arrayFilter(arrays, isArrayLikeObject));
    });

    /**
     * This method is like `_.xor` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which by which they're compared. The order of result values is determined
     * by the order they occur in the arrays. The iteratee is invoked with one
     * argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2, 3.4]
     *
     * // The `_.property` iteratee shorthand.
     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var xorBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.xor` except that it accepts `comparator` which is
     * invoked to compare elements of `arrays`. The order of result values is
     * determined by the order they occur in the arrays. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.xorWith(objects, others, _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var xorWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
    });

    /**
     * Creates an array of grouped elements, the first of which contains the
     * first elements of the given arrays, the second of which contains the
     * second elements of the given arrays, and so on.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     */
    var zip = baseRest(unzip);

    /**
     * This method is like `_.fromPairs` except that it accepts two arrays,
     * one of property identifiers and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 0.4.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject(['a', 'b'], [1, 2]);
     * // => { 'a': 1, 'b': 2 }
     */
    function zipObject(props, values) {
      return baseZipObject(props || [], values || [], assignValue);
    }

    /**
     * This method is like `_.zipObject` except that it supports property paths.
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
     */
    function zipObjectDeep(props, values) {
      return baseZipObject(props || [], values || [], baseSet);
    }

    /**
     * This method is like `_.zip` except that it accepts `iteratee` to specify
     * how grouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  grouped values.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
     *   return a + b + c;
     * });
     * // => [111, 222]
     */
    var zipWith = baseRest(function(arrays) {
      var length = arrays.length,
          iteratee = length > 1 ? arrays[length - 1] : undefined;

      iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
      return unzipWith(arrays, iteratee);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
     * chain sequences enabled. The result of such sequences must be unwrapped
     * with `_#value`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Seq
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _
     *   .chain(users)
     *   .sortBy('age')
     *   .map(function(o) {
     *     return o.user + ' is ' + o.age;
     *   })
     *   .head()
     *   .value();
     * // => 'pebbles is 1'
     */
    function chain(value) {
      var result = lodash(value);
      result.__chain__ = true;
      return result;
    }

    /**
     * This method invokes `interceptor` and returns `value`. The interceptor
     * is invoked with one argument; (value). The purpose of this method is to
     * "tap into" a method chain sequence in order to modify intermediate results.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
     *    // Mutate input array.
     *    array.pop();
     *  })
     *  .reverse()
     *  .value();
     * // => [2, 1]
     */
    function tap(value, interceptor) {
      interceptor(value);
      return value;
    }

    /**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     * The purpose of this method is to "pass thru" values replacing intermediate
     * results in a method chain sequence.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
     *    return [value];
     *  })
     *  .value();
     * // => ['abc']
     */
    function thru(value, interceptor) {
      return interceptor(value);
    }

    /**
     * This method is the wrapper version of `_.at`.
     *
     * @name at
     * @memberOf _
     * @since 1.0.0
     * @category Seq
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _(object).at(['a[0].b.c', 'a[1]']).value();
     * // => [3, 4]
     */
    var wrapperAt = flatRest(function(paths) {
      var length = paths.length,
          start = length ? paths[0] : 0,
          value = this.__wrapped__,
          interceptor = function(object) { return baseAt(object, paths); };

      if (length > 1 || this.__actions__.length ||
          !(value instanceof LazyWrapper) || !isIndex(start)) {
        return this.thru(interceptor);
      }
      value = value.slice(start, +start + (length ? 1 : 0));
      value.__actions__.push({
        'func': thru,
        'args': [interceptor],
        'thisArg': undefined
      });
      return new LodashWrapper(value, this.__chain__).thru(function(array) {
        if (length && !array.length) {
          array.push(undefined);
        }
        return array;
      });
    });

    /**
     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
     *
     * @name chain
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // A sequence without explicit chaining.
     * _(users).head();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // A sequence with explicit chaining.
     * _(users)
     *   .chain()
     *   .head()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */
    function wrapperChain() {
      return chain(this);
    }

    /**
     * Executes the chain sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapped = wrapped.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapped.last();
     * // => 3
     *
     * console.log(array);
     * // => [1, 2, 3]
     */
    function wrapperCommit() {
      return new LodashWrapper(this.value(), this.__chain__);
    }

    /**
     * Gets the next value on a wrapped object following the
     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
     *
     * @name next
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the next iterator value.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 1 }
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 2 }
     *
     * wrapped.next();
     * // => { 'done': true, 'value': undefined }
     */
    function wrapperNext() {
      if (this.__values__ === undefined) {
        this.__values__ = toArray(this.value());
      }
      var done = this.__index__ >= this.__values__.length,
          value = done ? undefined : this.__values__[this.__index__++];

      return { 'done': done, 'value': value };
    }

    /**
     * Enables the wrapper to be iterable.
     *
     * @name Symbol.iterator
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped[Symbol.iterator]() === wrapped;
     * // => true
     *
     * Array.from(wrapped);
     * // => [1, 2]
     */
    function wrapperToIterator() {
      return this;
    }

    /**
     * Creates a clone of the chain sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @param {*} value The value to plant.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2]).map(square);
     * var other = wrapped.plant([3, 4]);
     *
     * other.value();
     * // => [9, 16]
     *
     * wrapped.value();
     * // => [1, 4]
     */
    function wrapperPlant(value) {
      var result,
          parent = this;

      while (parent instanceof baseLodash) {
        var clone = wrapperClone(parent);
        clone.__index__ = 0;
        clone.__values__ = undefined;
        if (result) {
          previous.__wrapped__ = clone;
        } else {
          result = clone;
        }
        var previous = clone;
        parent = parent.__wrapped__;
      }
      previous.__wrapped__ = value;
      return result;
    }

    /**
     * This method is the wrapper version of `_.reverse`.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function wrapperReverse() {
      var value = this.__wrapped__;
      if (value instanceof LazyWrapper) {
        var wrapped = value;
        if (this.__actions__.length) {
          wrapped = new LazyWrapper(this);
        }
        wrapped = wrapped.reverse();
        wrapped.__actions__.push({
          'func': thru,
          'args': [reverse],
          'thisArg': undefined
        });
        return new LodashWrapper(wrapped, this.__chain__);
      }
      return this.thru(reverse);
    }

    /**
     * Executes the chain sequence to resolve the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @since 0.1.0
     * @alias toJSON, valueOf
     * @category Seq
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */
    function wrapperValue() {
      return baseWrapperValue(this.__wrapped__, this.__actions__);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the number of times the key was returned by `iteratee`. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': 1, '6': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => { '3': 2, '5': 1 }
     */
    var countBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        ++result[key];
      } else {
        baseAssignValue(result, key, 1);
      }
    });

    /**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * **Note:** This method returns `true` for
     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
     * elements of empty collections.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.every(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.every(users, 'active');
     * // => false
     */
    function every(collection, predicate, guard) {
      var func = isArray(collection) ? arrayEvery : baseEvery;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     */
    function filter(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': true },
     *   { 'user': 'fred',    'age': 40, 'active': false },
     *   { 'user': 'pebbles', 'age': 1,  'active': true }
     * ];
     *
     * _.find(users, function(o) { return o.age < 40; });
     * // => object for 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.find(users, { 'age': 1, 'active': true });
     * // => object for 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.find(users, ['active', false]);
     * // => object for 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.find(users, 'active');
     * // => object for 'barney'
     */
    var find = createFind(findIndex);

    /**
     * This method is like `_.find` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=collection.length-1] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * _.findLast([1, 2, 3, 4], function(n) {
     *   return n % 2 == 1;
     * });
     * // => 3
     */
    var findLast = createFind(findLastIndex);

    /**
     * Creates a flattened array of values by running each element in `collection`
     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
     * with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [n, n];
     * }
     *
     * _.flatMap([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMap(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), 1);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDeep([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMapDeep(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), INFINITY);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDepth([1, 2], duplicate, 2);
     * // => [[1, 1], [2, 2]]
     */
    function flatMapDepth(collection, iteratee, depth) {
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(map(collection, iteratee), depth);
    }

    /**
     * Iterates over elements of `collection` and invokes `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length"
     * property are iterated like arrays. To avoid this behavior use `_.forIn`
     * or `_.forOwn` for object iteration.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEachRight
     * @example
     *
     * _.forEach([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `1` then `2`.
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forEach(collection, iteratee) {
      var func = isArray(collection) ? arrayEach : baseEach;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forEach` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @alias eachRight
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEach
     * @example
     *
     * _.forEachRight([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `2` then `1`.
     */
    function forEachRight(collection, iteratee) {
      var func = isArray(collection) ? arrayEachRight : baseEachRight;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The order of grouped values
     * is determined by the order they occur in `collection`. The corresponding
     * value of each key is an array of elements responsible for generating the
     * key. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': [4.2], '6': [6.1, 6.3] }
     *
     * // The `_.property` iteratee shorthand.
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */
    var groupBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        result[key].push(value);
      } else {
        baseAssignValue(result, key, [value]);
      }
    });

    /**
     * Checks if `value` is in `collection`. If `collection` is a string, it's
     * checked for a substring of `value`, otherwise
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * is used for equality comparisons. If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'a': 1, 'b': 2 }, 1);
     * // => true
     *
     * _.includes('abcd', 'bc');
     * // => true
     */
    function includes(collection, value, fromIndex, guard) {
      collection = isArrayLike(collection) ? collection : values(collection);
      fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

      var length = collection.length;
      if (fromIndex < 0) {
        fromIndex = nativeMax(length + fromIndex, 0);
      }
      return isString(collection)
        ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
        : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
    }

    /**
     * Invokes the method at `path` of each element in `collection`, returning
     * an array of the results of each invoked method. Any additional arguments
     * are provided to each invoked method. If `path` is a function, it's invoked
     * for, and `this` bound to, each element in `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array|Function|string} path The path of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [args] The arguments to invoke each method with.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invokeMap([123, 456], String.prototype.split, '');
     * // => [['1', '2', '3'], ['4', '5', '6']]
     */
    var invokeMap = baseRest(function(collection, path, args) {
      var index = -1,
          isFunc = typeof path == 'function',
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value) {
        result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
      });
      return result;
    });

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the last element responsible for generating the key. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * var array = [
     *   { 'dir': 'left', 'code': 97 },
     *   { 'dir': 'right', 'code': 100 }
     * ];
     *
     * _.keyBy(array, function(o) {
     *   return String.fromCharCode(o.code);
     * });
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     *
     * _.keyBy(array, 'dir');
     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
     */
    var keyBy = createAggregator(function(result, value, key) {
      baseAssignValue(result, key, value);
    });

    /**
     * Creates an array of values by running each element in `collection` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * _.map([4, 8], square);
     * // => [16, 64]
     *
     * _.map({ 'a': 4, 'b': 8 }, square);
     * // => [16, 64] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */
    function map(collection, iteratee) {
      var func = isArray(collection) ? arrayMap : baseMap;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.sortBy` except that it allows specifying the sort
     * orders of the iteratees to sort by. If `orders` is unspecified, all values
     * are sorted in ascending order. Otherwise, specify an order of "desc" for
     * descending or "asc" for ascending sort order of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @param {string[]} [orders] The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 36 }
     * ];
     *
     * // Sort by `user` in ascending order and by `age` in descending order.
     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     */
    function orderBy(collection, iteratees, orders, guard) {
      if (collection == null) {
        return [];
      }
      if (!isArray(iteratees)) {
        iteratees = iteratees == null ? [] : [iteratees];
      }
      orders = guard ? undefined : orders;
      if (!isArray(orders)) {
        orders = orders == null ? [] : [orders];
      }
      return baseOrderBy(collection, iteratees, orders);
    }

    /**
     * Creates an array of elements split into two groups, the first of which
     * contains elements `predicate` returns truthy for, the second of which
     * contains elements `predicate` returns falsey for. The predicate is
     * invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of grouped elements.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': false },
     *   { 'user': 'fred',    'age': 40, 'active': true },
     *   { 'user': 'pebbles', 'age': 1,  'active': false }
     * ];
     *
     * _.partition(users, function(o) { return o.active; });
     * // => objects for [['fred'], ['barney', 'pebbles']]
     *
     * // The `_.matches` iteratee shorthand.
     * _.partition(users, { 'age': 1, 'active': false });
     * // => objects for [['pebbles'], ['barney', 'fred']]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.partition(users, ['active', false]);
     * // => objects for [['barney', 'pebbles'], ['fred']]
     *
     * // The `_.property` iteratee shorthand.
     * _.partition(users, 'active');
     * // => objects for [['fred'], ['barney', 'pebbles']]
     */
    var partition = createAggregator(function(result, value, key) {
      result[key ? 0 : 1].push(value);
    }, function() { return [[], []]; });

    /**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` thru `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not given, the first element of `collection` is used as the initial
     * value. The iteratee is invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
     * and `sortBy`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduceRight
     * @example
     *
     * _.reduce([1, 2], function(sum, n) {
     *   return sum + n;
     * }, 0);
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     *   return result;
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
     */
    function reduce(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduce : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
    }

    /**
     * This method is like `_.reduce` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduce
     * @example
     *
     * var array = [[0, 1], [2, 3], [4, 5]];
     *
     * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
     * }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */
    function reduceRight(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduceRight : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
    }

    /**
     * The opposite of `_.filter`; this method returns the elements of `collection`
     * that `predicate` does **not** return truthy for.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.filter
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': true }
     * ];
     *
     * _.reject(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.reject(users, { 'age': 40, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.reject(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.reject(users, 'active');
     * // => objects for ['barney']
     */
    function reject(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, negate(getIteratee(predicate, 3)));
    }

    /**
     * Gets a random element from `collection`.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     */
    function sample(collection) {
      var func = isArray(collection) ? arraySample : baseSample;
      return func(collection);
    }

    /**
     * Gets `n` random elements at unique keys from `collection` up to the
     * size of `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @param {number} [n=1] The number of elements to sample.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the random elements.
     * @example
     *
     * _.sampleSize([1, 2, 3], 2);
     * // => [3, 1]
     *
     * _.sampleSize([1, 2, 3], 4);
     * // => [2, 3, 1]
     */
    function sampleSize(collection, n, guard) {
      if ((guard ? isIterateeCall(collection, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      var func = isArray(collection) ? arraySampleSize : baseSampleSize;
      return func(collection, n);
    }

    /**
     * Creates an array of shuffled values, using a version of the
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     * @example
     *
     * _.shuffle([1, 2, 3, 4]);
     * // => [4, 1, 3, 2]
     */
    function shuffle(collection) {
      var func = isArray(collection) ? arrayShuffle : baseShuffle;
      return func(collection);
    }

    /**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable string keyed properties for objects.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the collection size.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */
    function size(collection) {
      if (collection == null) {
        return 0;
      }
      if (isArrayLike(collection)) {
        return isString(collection) ? stringSize(collection) : collection.length;
      }
      var tag = getTag(collection);
      if (tag == mapTag || tag == setTag) {
        return collection.size;
      }
      return baseKeys(collection).length;
    }

    /**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * Iteration is stopped once `predicate` returns truthy. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.some(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.some(users, 'active');
     * // => true
     */
    function some(collection, predicate, guard) {
      var func = isArray(collection) ? arraySome : baseSome;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection thru each iteratee. This method
     * performs a stable sort, that is, it preserves the original sort order of
     * equal elements. The iteratees are invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 34 }
     * ];
     *
     * _.sortBy(users, [function(o) { return o.user; }]);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     *
     * _.sortBy(users, ['user', 'age']);
     * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
     */
    var sortBy = baseRest(function(collection, iteratees) {
      if (collection == null) {
        return [];
      }
      var length = iteratees.length;
      if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
        iteratees = [];
      } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
        iteratees = [iteratees[0]];
      }
      return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */
    var now = ctxNow || function() {
      return root.Date.now();
    };

    /*------------------------------------------------------------------------*/

    /**
     * The opposite of `_.before`; this method creates a function that invokes
     * `func` once it's called `n` or more times.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {number} n The number of calls before `func` is invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => Logs 'done saving!' after the two async saves have completed.
     */
    function after(n, func) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n < 1) {
          return func.apply(this, arguments);
        }
      };
    }

    /**
     * Creates a function that invokes `func`, with up to `n` arguments,
     * ignoring any additional arguments.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @param {number} [n=func.length] The arity cap.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
     * // => [6, 8, 10]
     */
    function ary(func, n, guard) {
      n = guard ? undefined : n;
      n = (func && n == null) ? func.length : n;
      return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
    }

    /**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it's called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery(element).on('click', _.before(5, addContactToList));
     * // => Allows adding up to 4 contacts to the list.
     */
    function before(n, func) {
      var result;
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n > 0) {
          result = func.apply(this, arguments);
        }
        if (n <= 1) {
          func = undefined;
        }
        return result;
      };
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and `partials` prepended to the arguments it receives.
     *
     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for partially applied arguments.
     *
     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
     * property of bound functions.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * function greet(greeting, punctuation) {
     *   return greeting + ' ' + this.user + punctuation;
     * }
     *
     * var object = { 'user': 'fred' };
     *
     * var bound = _.bind(greet, object, 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bind(greet, object, _, '!');
     * bound('hi');
     * // => 'hi fred!'
     */
    var bind = baseRest(function(func, thisArg, partials) {
      var bitmask = WRAP_BIND_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bind));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(func, bitmask, thisArg, partials, holders);
    });

    /**
     * Creates a function that invokes the method at `object[key]` with `partials`
     * prepended to the arguments it receives.
     *
     * This method differs from `_.bind` by allowing bound functions to reference
     * methods that may be redefined or don't yet exist. See
     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
     * for more details.
     *
     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Function
     * @param {Object} object The object to invoke the method on.
     * @param {string} key The key of the method.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var object = {
     *   'user': 'fred',
     *   'greet': function(greeting, punctuation) {
     *     return greeting + ' ' + this.user + punctuation;
     *   }
     * };
     *
     * var bound = _.bindKey(object, 'greet', 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * object.greet = function(greeting, punctuation) {
     *   return greeting + 'ya ' + this.user + punctuation;
     * };
     *
     * bound('!');
     * // => 'hiya fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bindKey(object, 'greet', _, '!');
     * bound('hi');
     * // => 'hiya fred!'
     */
    var bindKey = baseRest(function(object, key, partials) {
      var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bindKey));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(key, bitmask, object, partials, holders);
    });

    /**
     * Creates a function that accepts arguments of `func` and either invokes
     * `func` returning its result, if at least `arity` number of arguments have
     * been provided, or returns a function that accepts the remaining `func`
     * arguments, and so on. The arity of `func` may be specified if `func.length`
     * is not sufficient.
     *
     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curry(abc);
     *
     * curried(1)(2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(1)(_, 3)(2);
     * // => [1, 2, 3]
     */
    function curry(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curry.placeholder;
      return result;
    }

    /**
     * This method is like `_.curry` except that arguments are applied to `func`
     * in the manner of `_.partialRight` instead of `_.partial`.
     *
     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curryRight(abc);
     *
     * curried(3)(2)(1);
     * // => [1, 2, 3]
     *
     * curried(2, 3)(1);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(3)(1, _)(2);
     * // => [1, 2, 3]
     */
    function curryRight(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curryRight.placeholder;
      return result;
    }

    /**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */
    function debounce(func, wait, options) {
      var lastArgs,
          lastThis,
          maxWait,
          result,
          timerId,
          lastCallTime,
          lastInvokeTime = 0,
          leading = false,
          maxing = false,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }

      function invokeFunc(time) {
        var args = lastArgs,
            thisArg = lastThis;

        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }

      function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
      }

      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime,
            timeWaiting = wait - timeSinceLastCall;

        return maxing
          ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
          : timeWaiting;
      }

      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime;

        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
          (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
      }

      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
      }

      function trailingEdge(time) {
        timerId = undefined;

        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
      }

      function cancel() {
        if (timerId !== undefined) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
      }

      function flush() {
        return timerId === undefined ? result : trailingEdge(now());
      }

      function debounced() {
        var time = now(),
            isInvoking = shouldInvoke(time);

        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;

        if (isInvoking) {
          if (timerId === undefined) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            // Handle invocations in a tight loop.
            clearTimeout(timerId);
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === undefined) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }

    /**
     * Defers invoking the `func` until the current call stack has cleared. Any
     * additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to defer.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) {
     *   console.log(text);
     * }, 'deferred');
     * // => Logs 'deferred' after one millisecond.
     */
    var defer = baseRest(function(func, args) {
      return baseDelay(func, 1, args);
    });

    /**
     * Invokes `func` after `wait` milliseconds. Any additional arguments are
     * provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) {
     *   console.log(text);
     * }, 1000, 'later');
     * // => Logs 'later' after one second.
     */
    var delay = baseRest(function(func, wait, args) {
      return baseDelay(func, toNumber(wait) || 0, args);
    });

    /**
     * Creates a function that invokes `func` with arguments reversed.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to flip arguments for.
     * @returns {Function} Returns the new flipped function.
     * @example
     *
     * var flipped = _.flip(function() {
     *   return _.toArray(arguments);
     * });
     *
     * flipped('a', 'b', 'c', 'd');
     * // => ['d', 'c', 'b', 'a']
     */
    function flip(func) {
      return createWrap(func, WRAP_FLIP_FLAG);
    }

    /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */
    function memoize(func, resolver) {
      if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments,
            key = resolver ? resolver.apply(this, args) : args[0],
            cache = memoized.cache;

        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache);
      return memoized;
    }

    // Expose `MapCache`.
    memoize.Cache = MapCache;

    /**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new negated function.
     * @example
     *
     * function isEven(n) {
     *   return n % 2 == 0;
     * }
     *
     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
     * // => [1, 3, 5]
     */
    function negate(predicate) {
      if (typeof predicate != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return function() {
        var args = arguments;
        switch (args.length) {
          case 0: return !predicate.call(this);
          case 1: return !predicate.call(this, args[0]);
          case 2: return !predicate.call(this, args[0], args[1]);
          case 3: return !predicate.call(this, args[0], args[1], args[2]);
        }
        return !predicate.apply(this, args);
      };
    }

    /**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first invocation. The `func` is
     * invoked with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // => `createApplication` is invoked once
     */
    function once(func) {
      return before(2, func);
    }

    /**
     * Creates a function that invokes `func` with its arguments transformed.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Function
     * @param {Function} func The function to wrap.
     * @param {...(Function|Function[])} [transforms=[_.identity]]
     *  The argument transforms.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function doubled(n) {
     *   return n * 2;
     * }
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var func = _.overArgs(function(x, y) {
     *   return [x, y];
     * }, [square, doubled]);
     *
     * func(9, 3);
     * // => [81, 6]
     *
     * func(10, 5);
     * // => [100, 10]
     */
    var overArgs = castRest(function(func, transforms) {
      transforms = (transforms.length == 1 && isArray(transforms[0]))
        ? arrayMap(transforms[0], baseUnary(getIteratee()))
        : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));

      var funcsLength = transforms.length;
      return baseRest(function(args) {
        var index = -1,
            length = nativeMin(args.length, funcsLength);

        while (++index < length) {
          args[index] = transforms[index].call(this, args[index]);
        }
        return apply(func, this, args);
      });
    });

    /**
     * Creates a function that invokes `func` with `partials` prepended to the
     * arguments it receives. This method is like `_.bind` except it does **not**
     * alter the `this` binding.
     *
     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 0.2.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var sayHelloTo = _.partial(greet, 'hello');
     * sayHelloTo('fred');
     * // => 'hello fred'
     *
     * // Partially applied with placeholders.
     * var greetFred = _.partial(greet, _, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     */
    var partial = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partial));
      return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
    });

    /**
     * This method is like `_.partial` except that partially applied arguments
     * are appended to the arguments it receives.
     *
     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var greetFred = _.partialRight(greet, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     *
     * // Partially applied with placeholders.
     * var sayHelloTo = _.partialRight(greet, 'hello', _);
     * sayHelloTo('fred');
     * // => 'hello fred'
     */
    var partialRight = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partialRight));
      return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
    });

    /**
     * Creates a function that invokes `func` with arguments arranged according
     * to the specified `indexes` where the argument value at the first index is
     * provided as the first argument, the argument value at the second index is
     * provided as the second argument, and so on.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to rearrange arguments for.
     * @param {...(number|number[])} indexes The arranged argument indexes.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var rearged = _.rearg(function(a, b, c) {
     *   return [a, b, c];
     * }, [2, 0, 1]);
     *
     * rearged('b', 'c', 'a')
     * // => ['a', 'b', 'c']
     */
    var rearg = flatRest(function(func, indexes) {
      return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
    });

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as
     * an array.
     *
     * **Note:** This method is based on the
     * [rest parameter](https://mdn.io/rest_parameters).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.rest(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */
    function rest(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start === undefined ? start : toInteger(start);
      return baseRest(func, start);
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * create function and an array of arguments much like
     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
     *
     * **Note:** This method is based on the
     * [spread operator](https://mdn.io/spread_operator).
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Function
     * @param {Function} func The function to spread arguments over.
     * @param {number} [start=0] The start position of the spread.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
     *
     * say(['fred', 'hello']);
     * // => 'fred says hello'
     *
     * var numbers = Promise.all([
     *   Promise.resolve(40),
     *   Promise.resolve(36)
     * ]);
     *
     * numbers.then(_.spread(function(x, y) {
     *   return x + y;
     * }));
     * // => a Promise of 76
     */
    function spread(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start == null ? 0 : nativeMax(toInteger(start), 0);
      return baseRest(function(args) {
        var array = args[start],
            otherArgs = castSlice(args, 0, start);

        if (array) {
          arrayPush(otherArgs, array);
        }
        return apply(func, this, otherArgs);
      });
    }

    /**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQuery(window).on('popstate', throttled.cancel);
     */
    function throttle(func, wait, options) {
      var leading = true,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }
      return debounce(func, wait, {
        'leading': leading,
        'maxWait': wait,
        'trailing': trailing
      });
    }

    /**
     * Creates a function that accepts up to one argument, ignoring any
     * additional arguments.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.unary(parseInt));
     * // => [6, 8, 10]
     */
    function unary(func) {
      return ary(func, 1);
    }

    /**
     * Creates a function that provides `value` to `wrapper` as its first
     * argument. Any additional arguments provided to the function are appended
     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
     * binding of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {*} value The value to wrap.
     * @param {Function} [wrapper=identity] The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('fred, barney, & pebbles');
     * // => '<p>fred, barney, &amp; pebbles</p>'
     */
    function wrap(value, wrapper) {
      return partial(castFunction(wrapper), value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Casts `value` as an array if it's not one.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Lang
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast array.
     * @example
     *
     * _.castArray(1);
     * // => [1]
     *
     * _.castArray({ 'a': 1 });
     * // => [{ 'a': 1 }]
     *
     * _.castArray('abc');
     * // => ['abc']
     *
     * _.castArray(null);
     * // => [null]
     *
     * _.castArray(undefined);
     * // => [undefined]
     *
     * _.castArray();
     * // => []
     *
     * var array = [1, 2, 3];
     * console.log(_.castArray(array) === array);
     * // => true
     */
    function castArray() {
      if (!arguments.length) {
        return [];
      }
      var value = arguments[0];
      return isArray(value) ? value : [value];
    }

    /**
     * Creates a shallow clone of `value`.
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
     * and supports cloning arrays, array buffers, booleans, date objects, maps,
     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
     * arrays. The own enumerable properties of `arguments` objects are cloned
     * as plain objects. An empty object is returned for uncloneable values such
     * as error objects, functions, DOM nodes, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to clone.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeep
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var shallow = _.clone(objects);
     * console.log(shallow[0] === objects[0]);
     * // => true
     */
    function clone(value) {
      return baseClone(value, CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.clone` except that it accepts `customizer` which
     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
     * cloning is handled by the method instead. The `customizer` is invoked with
     * up to four arguments; (value [, index|key, object, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeepWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(false);
     *   }
     * }
     *
     * var el = _.cloneWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 0
     */
    function cloneWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * This method is like `_.clone` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @returns {*} Returns the deep cloned value.
     * @see _.clone
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var deep = _.cloneDeep(objects);
     * console.log(deep[0] === objects[0]);
     * // => false
     */
    function cloneDeep(value) {
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.cloneWith` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the deep cloned value.
     * @see _.cloneWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * }
     *
     * var el = _.cloneDeepWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 20
     */
    function cloneDeepWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * Checks if `object` conforms to `source` by invoking the predicate
     * properties of `source` with the corresponding property values of `object`.
     *
     * **Note:** This method is equivalent to `_.conforms` when `source` is
     * partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
     * // => true
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
     * // => false
     */
    function conformsTo(object, source) {
      return source == null || baseConformsTo(object, source, keys(source));
    }

    /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */
    function eq(value, other) {
      return value === other || (value !== value && other !== other);
    }

    /**
     * Checks if `value` is greater than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     * @see _.lt
     * @example
     *
     * _.gt(3, 1);
     * // => true
     *
     * _.gt(3, 3);
     * // => false
     *
     * _.gt(1, 3);
     * // => false
     */
    var gt = createRelationalOperation(baseGt);

    /**
     * Checks if `value` is greater than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than or equal to
     *  `other`, else `false`.
     * @see _.lte
     * @example
     *
     * _.gte(3, 1);
     * // => true
     *
     * _.gte(3, 3);
     * // => true
     *
     * _.gte(1, 3);
     * // => false
     */
    var gte = createRelationalOperation(function(value, other) {
      return value >= other;
    });

    /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */
    var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
        !propertyIsEnumerable.call(value, 'callee');
    };

    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */
    var isArray = Array.isArray;

    /**
     * Checks if `value` is classified as an `ArrayBuffer` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     * @example
     *
     * _.isArrayBuffer(new ArrayBuffer(2));
     * // => true
     *
     * _.isArrayBuffer(new Array(2));
     * // => false
     */
    var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;

    /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }

    /**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }

    /**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */
    function isBoolean(value) {
      return value === true || value === false ||
        (isObjectLike(value) && baseGetTag(value) == boolTag);
    }

    /**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */
    var isBuffer = nativeIsBuffer || stubFalse;

    /**
     * Checks if `value` is classified as a `Date` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     * @example
     *
     * _.isDate(new Date);
     * // => true
     *
     * _.isDate('Mon April 23 2012');
     * // => false
     */
    var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;

    /**
     * Checks if `value` is likely a DOM element.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     *
     * _.isElement('<body>');
     * // => false
     */
    function isElement(value) {
      return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
    }

    /**
     * Checks if `value` is an empty object, collection, map, or set.
     *
     * Objects are considered empty if they have no own enumerable string keyed
     * properties.
     *
     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
     * jQuery-like collections are considered empty if they have a `length` of `0`.
     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */
    function isEmpty(value) {
      if (value == null) {
        return true;
      }
      if (isArrayLike(value) &&
          (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
            isBuffer(value) || isTypedArray(value) || isArguments(value))) {
        return !value.length;
      }
      var tag = getTag(value);
      if (tag == mapTag || tag == setTag) {
        return !value.size;
      }
      if (isPrototype(value)) {
        return !baseKeys(value).length;
      }
      for (var key in value) {
        if (hasOwnProperty.call(value, key)) {
          return false;
        }
      }
      return true;
    }

    /**
     * Performs a deep comparison between two values to determine if they are
     * equivalent.
     *
     * **Note:** This method supports comparing arrays, array buffers, booleans,
     * date objects, error objects, maps, numbers, `Object` objects, regexes,
     * sets, strings, symbols, and typed arrays. `Object` objects are compared
     * by their own, not inherited, enumerable properties. Functions and DOM
     * nodes are compared by strict equality, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.isEqual(object, other);
     * // => true
     *
     * object === other;
     * // => false
     */
    function isEqual(value, other) {
      return baseIsEqual(value, other);
    }

    /**
     * This method is like `_.isEqual` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with up to
     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, othValue) {
     *   if (isGreeting(objValue) && isGreeting(othValue)) {
     *     return true;
     *   }
     * }
     *
     * var array = ['hello', 'goodbye'];
     * var other = ['hi', 'goodbye'];
     *
     * _.isEqualWith(array, other, customizer);
     * // => true
     */
    function isEqualWith(value, other, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      var result = customizer ? customizer(value, other) : undefined;
      return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
    }

    /**
     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
     * `SyntaxError`, `TypeError`, or `URIError` object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
     * @example
     *
     * _.isError(new Error);
     * // => true
     *
     * _.isError(Error);
     * // => false
     */
    function isError(value) {
      if (!isObjectLike(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == errorTag || tag == domExcTag ||
        (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
    }

    /**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on
     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(3);
     * // => true
     *
     * _.isFinite(Number.MIN_VALUE);
     * // => true
     *
     * _.isFinite(Infinity);
     * // => false
     *
     * _.isFinite('3');
     * // => false
     */
    function isFinite(value) {
      return typeof value == 'number' && nativeIsFinite(value);
    }

    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 9 which returns 'object' for typed arrays and other constructors.
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }

    /**
     * Checks if `value` is an integer.
     *
     * **Note:** This method is based on
     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
     * @example
     *
     * _.isInteger(3);
     * // => true
     *
     * _.isInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isInteger(Infinity);
     * // => false
     *
     * _.isInteger('3');
     * // => false
     */
    function isInteger(value) {
      return typeof value == 'number' && value == toInteger(value);
    }

    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */
    function isLength(value) {
      return typeof value == 'number' &&
        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == 'object' || type == 'function');
    }

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return value != null && typeof value == 'object';
    }

    /**
     * Checks if `value` is classified as a `Map` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     * @example
     *
     * _.isMap(new Map);
     * // => true
     *
     * _.isMap(new WeakMap);
     * // => false
     */
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

    /**
     * Performs a partial deep comparison between `object` and `source` to
     * determine if `object` contains equivalent property values.
     *
     * **Note:** This method is equivalent to `_.matches` when `source` is
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.isMatch(object, { 'b': 2 });
     * // => true
     *
     * _.isMatch(object, { 'b': 1 });
     * // => false
     */
    function isMatch(object, source) {
      return object === source || baseIsMatch(object, source, getMatchData(source));
    }

    /**
     * This method is like `_.isMatch` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with five
     * arguments: (objValue, srcValue, index|key, object, source).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, srcValue) {
     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
     *     return true;
     *   }
     * }
     *
     * var object = { 'greeting': 'hello' };
     * var source = { 'greeting': 'hi' };
     *
     * _.isMatchWith(object, source, customizer);
     * // => true
     */
    function isMatchWith(object, source, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseIsMatch(object, source, getMatchData(source), customizer);
    }

    /**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is based on
     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
     * `undefined` and other non-number values.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */
    function isNaN(value) {
      // An `NaN` primitive is the only value that is not equal to itself.
      // Perform the `toStringTag` check first to avoid errors with some
      // ActiveX objects in IE.
      return isNumber(value) && value != +value;
    }

    /**
     * Checks if `value` is a pristine native function.
     *
     * **Note:** This method can't reliably detect native functions in the presence
     * of the core-js package because core-js circumvents this kind of detection.
     * Despite multiple requests, the core-js maintainer has made it clear: any
     * attempt to fix the detection will be obstructed. As a result, we're left
     * with little choice but to throw an error. Unfortunately, this also affects
     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
     * which rely on core-js.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */
    function isNative(value) {
      if (isMaskable(value)) {
        throw new Error(CORE_ERROR_TEXT);
      }
      return baseIsNative(value);
    }

    /**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(void 0);
     * // => false
     */
    function isNull(value) {
      return value === null;
    }

    /**
     * Checks if `value` is `null` or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
     * @example
     *
     * _.isNil(null);
     * // => true
     *
     * _.isNil(void 0);
     * // => true
     *
     * _.isNil(NaN);
     * // => false
     */
    function isNil(value) {
      return value == null;
    }

    /**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
     * classified as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */
    function isNumber(value) {
      return typeof value == 'number' ||
        (isObjectLike(value) && baseGetTag(value) == numberTag);
    }

    /**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * @static
     * @memberOf _
     * @since 0.8.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
      return typeof Ctor == 'function' && Ctor instanceof Ctor &&
        funcToString.call(Ctor) == objectCtorString;
    }

    /**
     * Checks if `value` is classified as a `RegExp` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     * @example
     *
     * _.isRegExp(/abc/);
     * // => true
     *
     * _.isRegExp('/abc/');
     * // => false
     */
    var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

    /**
     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
     * double precision number which isn't the result of a rounded unsafe integer.
     *
     * **Note:** This method is based on
     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
     * @example
     *
     * _.isSafeInteger(3);
     * // => true
     *
     * _.isSafeInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isSafeInteger(Infinity);
     * // => false
     *
     * _.isSafeInteger('3');
     * // => false
     */
    function isSafeInteger(value) {
      return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is classified as a `Set` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     * @example
     *
     * _.isSet(new Set);
     * // => true
     *
     * _.isSet(new WeakSet);
     * // => false
     */
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

    /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */
    function isString(value) {
      return typeof value == 'string' ||
        (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
    }

    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */
    function isSymbol(value) {
      return typeof value == 'symbol' ||
        (isObjectLike(value) && baseGetTag(value) == symbolTag);
    }

    /**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

    /**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
     * _.isUndefined(null);
     * // => false
     */
    function isUndefined(value) {
      return value === undefined;
    }

    /**
     * Checks if `value` is classified as a `WeakMap` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
     * @example
     *
     * _.isWeakMap(new WeakMap);
     * // => true
     *
     * _.isWeakMap(new Map);
     * // => false
     */
    function isWeakMap(value) {
      return isObjectLike(value) && getTag(value) == weakMapTag;
    }

    /**
     * Checks if `value` is classified as a `WeakSet` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
     * @example
     *
     * _.isWeakSet(new WeakSet);
     * // => true
     *
     * _.isWeakSet(new Set);
     * // => false
     */
    function isWeakSet(value) {
      return isObjectLike(value) && baseGetTag(value) == weakSetTag;
    }

    /**
     * Checks if `value` is less than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     * @see _.gt
     * @example
     *
     * _.lt(1, 3);
     * // => true
     *
     * _.lt(3, 3);
     * // => false
     *
     * _.lt(3, 1);
     * // => false
     */
    var lt = createRelationalOperation(baseLt);

    /**
     * Checks if `value` is less than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than or equal to
     *  `other`, else `false`.
     * @see _.gte
     * @example
     *
     * _.lte(1, 3);
     * // => true
     *
     * _.lte(3, 3);
     * // => true
     *
     * _.lte(3, 1);
     * // => false
     */
    var lte = createRelationalOperation(function(value, other) {
      return value <= other;
    });

    /**
     * Converts `value` to an array.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * _.toArray({ 'a': 1, 'b': 2 });
     * // => [1, 2]
     *
     * _.toArray('abc');
     * // => ['a', 'b', 'c']
     *
     * _.toArray(1);
     * // => []
     *
     * _.toArray(null);
     * // => []
     */
    function toArray(value) {
      if (!value) {
        return [];
      }
      if (isArrayLike(value)) {
        return isString(value) ? stringToArray(value) : copyArray(value);
      }
      if (symIterator && value[symIterator]) {
        return iteratorToArray(value[symIterator]());
      }
      var tag = getTag(value),
          func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);

      return func(value);
    }

    /**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = (value < 0 ? -1 : 1);
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }

    /**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */
    function toInteger(value) {
      var result = toFinite(value),
          remainder = result % 1;

      return result === result ? (remainder ? result - remainder : result) : 0;
    }

    /**
     * Converts `value` to an integer suitable for use as the length of an
     * array-like object.
     *
     * **Note:** This method is based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toLength(3.2);
     * // => 3
     *
     * _.toLength(Number.MIN_VALUE);
     * // => 0
     *
     * _.toLength(Infinity);
     * // => 4294967295
     *
     * _.toLength('3.2');
     * // => 3
     */
    function toLength(value) {
      return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
    }

    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */
    function toNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? (other + '') : other;
      }
      if (typeof value != 'string') {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, '');
      var isBinary = reIsBinary.test(value);
      return (isBinary || reIsOctal.test(value))
        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
        : (reIsBadHex.test(value) ? NAN : +value);
    }

    /**
     * Converts `value` to a plain object flattening inherited enumerable string
     * keyed properties of `value` to own properties of the plain object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Object} Returns the converted plain object.
     * @example
     *
     * function Foo() {
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.assign({ 'a': 1 }, new Foo);
     * // => { 'a': 1, 'b': 2 }
     *
     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
     * // => { 'a': 1, 'b': 2, 'c': 3 }
     */
    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }

    /**
     * Converts `value` to a safe integer. A safe integer can be compared and
     * represented correctly.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toSafeInteger(3.2);
     * // => 3
     *
     * _.toSafeInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toSafeInteger(Infinity);
     * // => 9007199254740991
     *
     * _.toSafeInteger('3.2');
     * // => 3
     */
    function toSafeInteger(value) {
      return value
        ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER)
        : (value === 0 ? value : 0);
    }

    /**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */
    function toString(value) {
      return value == null ? '' : baseToString(value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Assigns own enumerable string keyed properties of source objects to the
     * destination object. Source objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object` and is loosely based on
     * [`Object.assign`](https://mdn.io/Object/assign).
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assignIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assign({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'c': 3 }
     */
    var assign = createAssigner(function(object, source) {
      if (isPrototype(source) || isArrayLike(source)) {
        copyObject(source, keys(source), object);
        return;
      }
      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          assignValue(object, key, source[key]);
        }
      }
    });

    /**
     * This method is like `_.assign` except that it iterates over own and
     * inherited source properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extend
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assign
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assignIn({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
     */
    var assignIn = createAssigner(function(object, source) {
      copyObject(source, keysIn(source), object);
    });

    /**
     * This method is like `_.assignIn` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extendWith
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignInWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keysIn(source), object, customizer);
    });

    /**
     * This method is like `_.assign` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignInWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keys(source), object, customizer);
    });

    /**
     * Creates an array of values corresponding to `paths` of `object`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Array} Returns the picked values.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _.at(object, ['a[0].b.c', 'a[1]']);
     * // => [3, 4]
     */
    var at = flatRest(baseAt);

    /**
     * Creates an object that inherits from the `prototype` object. If a
     * `properties` object is given, its own enumerable string keyed properties
     * are assigned to the created object.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Object
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, {
     *   'constructor': Circle
     * });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */
    function create(prototype, properties) {
      var result = baseCreate(prototype);
      return properties == null ? result : baseAssign(result, properties);
    }

    /**
     * Assigns own and inherited enumerable string keyed properties of source
     * objects to the destination object for all destination properties that
     * resolve to `undefined`. Source objects are applied from left to right.
     * Once a property is set, additional values of the same property are ignored.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaultsDeep
     * @example
     *
     * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var defaults = baseRest(function(object, sources) {
      object = Object(object);

      var index = -1;
      var length = sources.length;
      var guard = length > 2 ? sources[2] : undefined;

      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        length = 1;
      }

      while (++index < length) {
        var source = sources[index];
        var props = keysIn(source);
        var propsIndex = -1;
        var propsLength = props.length;

        while (++propsIndex < propsLength) {
          var key = props[propsIndex];
          var value = object[key];

          if (value === undefined ||
              (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
            object[key] = source[key];
          }
        }
      }

      return object;
    });

    /**
     * This method is like `_.defaults` except that it recursively assigns
     * default properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaults
     * @example
     *
     * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
     * // => { 'a': { 'b': 2, 'c': 3 } }
     */
    var defaultsDeep = baseRest(function(args) {
      args.push(undefined, customDefaultsMerge);
      return apply(mergeWith, undefined, args);
    });

    /**
     * This method is like `_.find` except that it returns the key of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findKey(users, function(o) { return o.age < 40; });
     * // => 'barney' (iteration order is not guaranteed)
     *
     * // The `_.matches` iteratee shorthand.
     * _.findKey(users, { 'age': 1, 'active': true });
     * // => 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findKey(users, 'active');
     * // => 'barney'
     */
    function findKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
    }

    /**
     * This method is like `_.findKey` except that it iterates over elements of
     * a collection in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findLastKey(users, function(o) { return o.age < 40; });
     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastKey(users, { 'age': 36, 'active': true });
     * // => 'barney'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastKey(users, 'active');
     * // => 'pebbles'
     */
    function findLastKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
    }

    /**
     * Iterates over own and inherited enumerable string keyed properties of an
     * object and invokes `iteratee` for each property. The iteratee is invoked
     * with three arguments: (value, key, object). Iteratee functions may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forInRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forIn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
     */
    function forIn(object, iteratee) {
      return object == null
        ? object
        : baseFor(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * This method is like `_.forIn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forInRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
     */
    function forInRight(object, iteratee) {
      return object == null
        ? object
        : baseForRight(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * Iterates over own enumerable string keyed properties of an object and
     * invokes `iteratee` for each property. The iteratee is invoked with three
     * arguments: (value, key, object). Iteratee functions may exit iteration
     * early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwnRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forOwn(object, iteratee) {
      return object && baseForOwn(object, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forOwn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwnRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
     */
    function forOwnRight(object, iteratee) {
      return object && baseForOwnRight(object, getIteratee(iteratee, 3));
    }

    /**
     * Creates an array of function property names from own enumerable properties
     * of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functionsIn
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functions(new Foo);
     * // => ['a', 'b']
     */
    function functions(object) {
      return object == null ? [] : baseFunctions(object, keys(object));
    }

    /**
     * Creates an array of function property names from own and inherited
     * enumerable properties of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functions
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functionsIn(new Foo);
     * // => ['a', 'b', 'c']
     */
    function functionsIn(object) {
      return object == null ? [] : baseFunctions(object, keysIn(object));
    }

    /**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */
    function get(object, path, defaultValue) {
      var result = object == null ? undefined : baseGet(object, path);
      return result === undefined ? defaultValue : result;
    }

    /**
     * Checks if `path` is a direct property of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': 2 } };
     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b');
     * // => true
     *
     * _.has(object, ['a', 'b']);
     * // => true
     *
     * _.has(other, 'a');
     * // => false
     */
    function has(object, path) {
      return object != null && hasPath(object, path, baseHas);
    }

    /**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }

    /**
     * Creates an object composed of the inverted keys and values of `object`.
     * If `object` contains duplicate values, subsequent values overwrite
     * property assignments of previous values.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Object
     * @param {Object} object The object to invert.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invert(object);
     * // => { '1': 'c', '2': 'b' }
     */
    var invert = createInverter(function(result, value, key) {
      if (value != null &&
          typeof value.toString != 'function') {
        value = nativeObjectToString.call(value);
      }

      result[value] = key;
    }, constant(identity));

    /**
     * This method is like `_.invert` except that the inverted object is generated
     * from the results of running each element of `object` thru `iteratee`. The
     * corresponding inverted value of each inverted key is an array of keys
     * responsible for generating the inverted value. The iteratee is invoked
     * with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Object
     * @param {Object} object The object to invert.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invertBy(object);
     * // => { '1': ['a', 'c'], '2': ['b'] }
     *
     * _.invertBy(object, function(value) {
     *   return 'group' + value;
     * });
     * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
     */
    var invertBy = createInverter(function(result, value, key) {
      if (value != null &&
          typeof value.toString != 'function') {
        value = nativeObjectToString.call(value);
      }

      if (hasOwnProperty.call(result, value)) {
        result[value].push(key);
      } else {
        result[value] = [key];
      }
    }, getIteratee);

    /**
     * Invokes the method at `path` of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
     *
     * _.invoke(object, 'a[0].b.c.slice', 1, 3);
     * // => [2, 3]
     */
    var invoke = baseRest(baseInvoke);

    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }

    /**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }

    /**
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
     * with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapValues
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
     * // => { 'a1': 1, 'b2': 2 }
     */
    function mapKeys(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, iteratee(value, key, object), value);
      });
      return result;
    }

    /**
     * Creates an object with the same keys as `object` and values generated
     * by running each own enumerable string keyed property of `object` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapKeys
     * @example
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * _.mapValues(users, function(o) { return o.age; });
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     *
     * // The `_.property` iteratee shorthand.
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */
    function mapValues(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, key, iteratee(value, key, object));
      });
      return result;
    }

    /**
     * This method is like `_.assign` except that it recursively merges own and
     * inherited enumerable string keyed properties of source objects into the
     * destination object. Source properties that resolve to `undefined` are
     * skipped if a destination value exists. Array and plain object properties
     * are merged recursively. Other objects and value types are overridden by
     * assignment. Source objects are applied from left to right. Subsequent
     * sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {
     *   'a': [{ 'b': 2 }, { 'd': 4 }]
     * };
     *
     * var other = {
     *   'a': [{ 'c': 3 }, { 'e': 5 }]
     * };
     *
     * _.merge(object, other);
     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
     */
    var merge = createAssigner(function(object, source, srcIndex) {
      baseMerge(object, source, srcIndex);
    });

    /**
     * This method is like `_.merge` except that it accepts `customizer` which
     * is invoked to produce the merged values of the destination and source
     * properties. If `customizer` returns `undefined`, merging is handled by the
     * method instead. The `customizer` is invoked with six arguments:
     * (objValue, srcValue, key, object, source, stack).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} customizer The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   if (_.isArray(objValue)) {
     *     return objValue.concat(srcValue);
     *   }
     * }
     *
     * var object = { 'a': [1], 'b': [2] };
     * var other = { 'a': [3], 'b': [4] };
     *
     * _.mergeWith(object, other, customizer);
     * // => { 'a': [1, 3], 'b': [2, 4] }
     */
    var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
      baseMerge(object, source, srcIndex, customizer);
    });

    /**
     * The opposite of `_.pick`; this method creates an object composed of the
     * own and inherited enumerable property paths of `object` that are not omitted.
     *
     * **Note:** This method is considerably slower than `_.pick`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to omit.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omit(object, ['a', 'c']);
     * // => { 'b': '2' }
     */
    var omit = flatRest(function(object, paths) {
      var result = {};
      if (object == null) {
        return result;
      }
      var isDeep = false;
      paths = arrayMap(paths, function(path) {
        path = castPath(path, object);
        isDeep || (isDeep = path.length > 1);
        return path;
      });
      copyObject(object, getAllKeysIn(object), result);
      if (isDeep) {
        result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
      }
      var length = paths.length;
      while (length--) {
        baseUnset(result, paths[length]);
      }
      return result;
    });

    /**
     * The opposite of `_.pickBy`; this method creates an object composed of
     * the own and inherited enumerable string keyed properties of `object` that
     * `predicate` doesn't return truthy for. The predicate is invoked with two
     * arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omitBy(object, _.isNumber);
     * // => { 'b': '2' }
     */
    function omitBy(object, predicate) {
      return pickBy(object, negate(getIteratee(predicate)));
    }

    /**
     * Creates an object composed of the picked `object` properties.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pick(object, ['a', 'c']);
     * // => { 'a': 1, 'c': 3 }
     */
    var pick = flatRest(function(object, paths) {
      return object == null ? {} : basePick(object, paths);
    });

    /**
     * Creates an object composed of the `object` properties `predicate` returns
     * truthy for. The predicate is invoked with two arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pickBy(object, _.isNumber);
     * // => { 'a': 1, 'c': 3 }
     */
    function pickBy(object, predicate) {
      if (object == null) {
        return {};
      }
      var props = arrayMap(getAllKeysIn(object), function(prop) {
        return [prop];
      });
      predicate = getIteratee(predicate);
      return basePickBy(object, props, function(value, path) {
        return predicate(value, path[0]);
      });
    }

    /**
     * This method is like `_.get` except that if the resolved value is a
     * function it's invoked with the `this` binding of its parent object and
     * its result is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to resolve.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     *
     * _.result(object, 'a[0].b.c1');
     * // => 3
     *
     * _.result(object, 'a[0].b.c2');
     * // => 4
     *
     * _.result(object, 'a[0].b.c3', 'default');
     * // => 'default'
     *
     * _.result(object, 'a[0].b.c3', _.constant('default'));
     * // => 'default'
     */
    function result(object, path, defaultValue) {
      path = castPath(path, object);

      var index = -1,
          length = path.length;

      // Ensure the loop is entered when path is empty.
      if (!length) {
        length = 1;
        object = undefined;
      }
      while (++index < length) {
        var value = object == null ? undefined : object[toKey(path[index])];
        if (value === undefined) {
          index = length;
          value = defaultValue;
        }
        object = isFunction(value) ? value.call(object) : value;
      }
      return object;
    }

    /**
     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
     * it's created. Arrays are created for missing index properties while objects
     * are created for all other missing properties. Use `_.setWith` to customize
     * `path` creation.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.set(object, 'a[0].b.c', 4);
     * console.log(object.a[0].b.c);
     * // => 4
     *
     * _.set(object, ['x', '0', 'y', 'z'], 5);
     * console.log(object.x[0].y.z);
     * // => 5
     */
    function set(object, path, value) {
      return object == null ? object : baseSet(object, path, value);
    }

    /**
     * This method is like `_.set` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.setWith(object, '[0][1]', 'a', Object);
     * // => { '0': { '1': 'a' } }
     */
    function setWith(object, path, value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseSet(object, path, value, customizer);
    }

    /**
     * Creates an array of own enumerable string keyed-value pairs for `object`
     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
     * entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entries
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairs(new Foo);
     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
     */
    var toPairs = createToPairs(keys);

    /**
     * Creates an array of own and inherited enumerable string keyed-value pairs
     * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
     * or set, its entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entriesIn
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairsIn(new Foo);
     * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
     */
    var toPairsIn = createToPairs(keysIn);

    /**
     * An alternative to `_.reduce`; this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own
     * enumerable string keyed properties thru `iteratee`, with each invocation
     * potentially mutating the `accumulator` object. If `accumulator` is not
     * provided, a new object with the same `[[Prototype]]` will be used. The
     * iteratee is invoked with four arguments: (accumulator, value, key, object).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.transform([2, 3, 4], function(result, n) {
     *   result.push(n *= n);
     *   return n % 2 == 0;
     * }, []);
     * // => [4, 9]
     *
     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] }
     */
    function transform(object, iteratee, accumulator) {
      var isArr = isArray(object),
          isArrLike = isArr || isBuffer(object) || isTypedArray(object);

      iteratee = getIteratee(iteratee, 4);
      if (accumulator == null) {
        var Ctor = object && object.constructor;
        if (isArrLike) {
          accumulator = isArr ? new Ctor : [];
        }
        else if (isObject(object)) {
          accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
        }
        else {
          accumulator = {};
        }
      }
      (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
        return iteratee(accumulator, value, index, object);
      });
      return accumulator;
    }

    /**
     * Removes the property at `path` of `object`.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
     * _.unset(object, 'a[0].b.c');
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     *
     * _.unset(object, ['a', '0', 'b', 'c']);
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     */
    function unset(object, path) {
      return object == null ? true : baseUnset(object, path);
    }

    /**
     * This method is like `_.set` except that accepts `updater` to produce the
     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
     * is invoked with one argument: (value).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
     * console.log(object.a[0].b.c);
     * // => 9
     *
     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
     * console.log(object.x[0].y.z);
     * // => 0
     */
    function update(object, path, updater) {
      return object == null ? object : baseUpdate(object, path, castFunction(updater));
    }

    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    function updateWith(object, path, updater, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
    }

    /**
     * Creates an array of the own enumerable string keyed property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */
    function values(object) {
      return object == null ? [] : baseValues(object, keys(object));
    }

    /**
     * Creates an array of the own and inherited enumerable string keyed property
     * values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.valuesIn(new Foo);
     * // => [1, 2, 3] (iteration order is not guaranteed)
     */
    function valuesIn(object) {
      return object == null ? [] : baseValues(object, keysIn(object));
    }

    /*------------------------------------------------------------------------*/

    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Number
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    function clamp(number, lower, upper) {
      if (upper === undefined) {
        upper = lower;
        lower = undefined;
      }
      if (upper !== undefined) {
        upper = toNumber(upper);
        upper = upper === upper ? upper : 0;
      }
      if (lower !== undefined) {
        lower = toNumber(lower);
        lower = lower === lower ? lower : 0;
      }
      return baseClamp(toNumber(number), lower, upper);
    }

    /**
     * Checks if `n` is between `start` and up to, but not including, `end`. If
     * `end` is not specified, it's set to `start` with `start` then set to `0`.
     * If `start` is greater than `end` the params are swapped to support
     * negative ranges.
     *
     * @static
     * @memberOf _
     * @since 3.3.0
     * @category Number
     * @param {number} number The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     * @see _.range, _.rangeRight
     * @example
     *
     * _.inRange(3, 2, 4);
     * // => true
     *
     * _.inRange(4, 8);
     * // => true
     *
     * _.inRange(4, 2);
     * // => false
     *
     * _.inRange(2, 2);
     * // => false
     *
     * _.inRange(1.2, 2);
     * // => true
     *
     * _.inRange(5.2, 4);
     * // => false
     *
     * _.inRange(-3, -2, -6);
     * // => true
     */
    function inRange(number, start, end) {
      start = toFinite(start);
      if (end === undefined) {
        end = start;
        start = 0;
      } else {
        end = toFinite(end);
      }
      number = toNumber(number);
      return baseInRange(number, start, end);
    }

    /**
     * Produces a random number between the inclusive `lower` and `upper` bounds.
     * If only one argument is provided a number between `0` and the given number
     * is returned. If `floating` is `true`, or either `lower` or `upper` are
     * floats, a floating-point number is returned instead of an integer.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Number
     * @param {number} [lower=0] The lower bound.
     * @param {number} [upper=1] The upper bound.
     * @param {boolean} [floating] Specify returning a floating-point number.
     * @returns {number} Returns the random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */
    function random(lower, upper, floating) {
      if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
        upper = floating = undefined;
      }
      if (floating === undefined) {
        if (typeof upper == 'boolean') {
          floating = upper;
          upper = undefined;
        }
        else if (typeof lower == 'boolean') {
          floating = lower;
          lower = undefined;
        }
      }
      if (lower === undefined && upper === undefined) {
        lower = 0;
        upper = 1;
      }
      else {
        lower = toFinite(lower);
        if (upper === undefined) {
          upper = lower;
          lower = 0;
        } else {
          upper = toFinite(upper);
        }
      }
      if (lower > upper) {
        var temp = lower;
        lower = upper;
        upper = temp;
      }
      if (floating || lower % 1 || upper % 1) {
        var rand = nativeRandom();
        return nativeMin(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
      }
      return baseRandom(lower, upper);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the camel cased string.
     * @example
     *
     * _.camelCase('Foo Bar');
     * // => 'fooBar'
     *
     * _.camelCase('--foo-bar--');
     * // => 'fooBar'
     *
     * _.camelCase('__FOO_BAR__');
     * // => 'fooBar'
     */
    var camelCase = createCompounder(function(result, word, index) {
      word = word.toLowerCase();
      return result + (index ? capitalize(word) : word);
    });

    /**
     * Converts the first character of `string` to upper case and the remaining
     * to lower case.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
     * _.capitalize('FRED');
     * // => 'Fred'
     */
    function capitalize(string) {
      return upperFirst(toString(string).toLowerCase());
    }

    /**
     * Deburrs `string` by converting
     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
     * letters to basic Latin letters and removing
     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
     * _.deburr('déjà vu');
     * // => 'deja vu'
     */
    function deburr(string) {
      string = toString(string);
      return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
    }

    /**
     * Checks if `string` ends with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=string.length] The position to search up to.
     * @returns {boolean} Returns `true` if `string` ends with `target`,
     *  else `false`.
     * @example
     *
     * _.endsWith('abc', 'c');
     * // => true
     *
     * _.endsWith('abc', 'b');
     * // => false
     *
     * _.endsWith('abc', 'b', 2);
     * // => true
     */
    function endsWith(string, target, position) {
      string = toString(string);
      target = baseToString(target);

      var length = string.length;
      position = position === undefined
        ? length
        : baseClamp(toInteger(position), 0, length);

      var end = position;
      position -= target.length;
      return position >= 0 && string.slice(position, end) == target;
    }

    /**
     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
     * corresponding HTML entities.
     *
     * **Note:** No other characters are escaped. To escape additional
     * characters use a third-party library like [_he_](https://mths.be/he).
     *
     * Though the ">" character is escaped for symmetry, characters like
     * ">" and "/" don't need escaping in HTML and have no special meaning
     * unless they're part of a tag or unquoted attribute value. See
     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
     * (under "semi-related fun fact") for more details.
     *
     * When working with HTML you should always
     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
     * XSS vectors.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('fred, barney, & pebbles');
     * // => 'fred, barney, &amp; pebbles'
     */
    function escape(string) {
      string = toString(string);
      return (string && reHasUnescapedHtml.test(string))
        ? string.replace(reUnescapedHtml, escapeHtmlChar)
        : string;
    }

    /**
     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escapeRegExp('[lodash](https://lodash.com/)');
     * // => '\[lodash\]\(https://lodash\.com/\)'
     */
    function escapeRegExp(string) {
      string = toString(string);
      return (string && reHasRegExpChar.test(string))
        ? string.replace(reRegExpChar, '\\$&')
        : string;
    }

    /**
     * Converts `string` to
     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the kebab cased string.
     * @example
     *
     * _.kebabCase('Foo Bar');
     * // => 'foo-bar'
     *
     * _.kebabCase('fooBar');
     * // => 'foo-bar'
     *
     * _.kebabCase('__FOO_BAR__');
     * // => 'foo-bar'
     */
    var kebabCase = createCompounder(function(result, word, index) {
      return result + (index ? '-' : '') + word.toLowerCase();
    });

    /**
     * Converts `string`, as space separated words, to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.lowerCase('--Foo-Bar--');
     * // => 'foo bar'
     *
     * _.lowerCase('fooBar');
     * // => 'foo bar'
     *
     * _.lowerCase('__FOO_BAR__');
     * // => 'foo bar'
     */
    var lowerCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toLowerCase();
    });

    /**
     * Converts the first character of `string` to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.lowerFirst('Fred');
     * // => 'fred'
     *
     * _.lowerFirst('FRED');
     * // => 'fRED'
     */
    var lowerFirst = createCaseFirst('toLowerCase');

    /**
     * Pads `string` on the left and right sides if it's shorter than `length`.
     * Padding characters are truncated if they can't be evenly divided by `length`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.pad('abc', 8);
     * // => '  abc   '
     *
     * _.pad('abc', 8, '_-');
     * // => '_-abc_-_'
     *
     * _.pad('abc', 3);
     * // => 'abc'
     */
    function pad(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      if (!length || strLength >= length) {
        return string;
      }
      var mid = (length - strLength) / 2;
      return (
        createPadding(nativeFloor(mid), chars) +
        string +
        createPadding(nativeCeil(mid), chars)
      );
    }

    /**
     * Pads `string` on the right side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padEnd('abc', 6);
     * // => 'abc   '
     *
     * _.padEnd('abc', 6, '_-');
     * // => 'abc_-_'
     *
     * _.padEnd('abc', 3);
     * // => 'abc'
     */
    function padEnd(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (string + createPadding(length - strLength, chars))
        : string;
    }

    /**
     * Pads `string` on the left side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padStart('abc', 6);
     * // => '   abc'
     *
     * _.padStart('abc', 6, '_-');
     * // => '_-_abc'
     *
     * _.padStart('abc', 3);
     * // => 'abc'
     */
    function padStart(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (createPadding(length - strLength, chars) + string)
        : string;
    }

    /**
     * Converts `string` to an integer of the specified radix. If `radix` is
     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
     * hexadecimal, in which case a `radix` of `16` is used.
     *
     * **Note:** This method aligns with the
     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category String
     * @param {string} string The string to convert.
     * @param {number} [radix=10] The radix to interpret `value` by.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     *
     * _.map(['6', '08', '10'], _.parseInt);
     * // => [6, 8, 10]
     */
    function parseInt(string, radix, guard) {
      if (guard || radix == null) {
        radix = 0;
      } else if (radix) {
        radix = +radix;
      }
      return nativeParseInt(toString(string).replace(reTrimStart, ''), radix || 0);
    }

    /**
     * Repeats the given string `n` times.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to repeat.
     * @param {number} [n=1] The number of times to repeat the string.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the repeated string.
     * @example
     *
     * _.repeat('*', 3);
     * // => '***'
     *
     * _.repeat('abc', 2);
     * // => 'abcabc'
     *
     * _.repeat('abc', 0);
     * // => ''
     */
    function repeat(string, n, guard) {
      if ((guard ? isIterateeCall(string, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      return baseRepeat(toString(string), n);
    }

    /**
     * Replaces matches for `pattern` in `string` with `replacement`.
     *
     * **Note:** This method is based on
     * [`String#replace`](https://mdn.io/String/replace).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to modify.
     * @param {RegExp|string} pattern The pattern to replace.
     * @param {Function|string} replacement The match replacement.
     * @returns {string} Returns the modified string.
     * @example
     *
     * _.replace('Hi Fred', 'Fred', 'Barney');
     * // => 'Hi Barney'
     */
    function replace() {
      var args = arguments,
          string = toString(args[0]);

      return args.length < 3 ? string : string.replace(args[1], args[2]);
    }

    /**
     * Converts `string` to
     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the snake cased string.
     * @example
     *
     * _.snakeCase('Foo Bar');
     * // => 'foo_bar'
     *
     * _.snakeCase('fooBar');
     * // => 'foo_bar'
     *
     * _.snakeCase('--FOO-BAR--');
     * // => 'foo_bar'
     */
    var snakeCase = createCompounder(function(result, word, index) {
      return result + (index ? '_' : '') + word.toLowerCase();
    });

    /**
     * Splits `string` by `separator`.
     *
     * **Note:** This method is based on
     * [`String#split`](https://mdn.io/String/split).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to split.
     * @param {RegExp|string} separator The separator pattern to split by.
     * @param {number} [limit] The length to truncate results to.
     * @returns {Array} Returns the string segments.
     * @example
     *
     * _.split('a-b-c', '-', 2);
     * // => ['a', 'b']
     */
    function split(string, separator, limit) {
      if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
        separator = limit = undefined;
      }
      limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
      if (!limit) {
        return [];
      }
      string = toString(string);
      if (string && (
            typeof separator == 'string' ||
            (separator != null && !isRegExp(separator))
          )) {
        separator = baseToString(separator);
        if (!separator && hasUnicode(string)) {
          return castSlice(stringToArray(string), 0, limit);
        }
      }
      return string.split(separator, limit);
    }

    /**
     * Converts `string` to
     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
     *
     * @static
     * @memberOf _
     * @since 3.1.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the start cased string.
     * @example
     *
     * _.startCase('--foo-bar--');
     * // => 'Foo Bar'
     *
     * _.startCase('fooBar');
     * // => 'Foo Bar'
     *
     * _.startCase('__FOO_BAR__');
     * // => 'FOO BAR'
     */
    var startCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + upperFirst(word);
    });

    /**
     * Checks if `string` starts with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=0] The position to search from.
     * @returns {boolean} Returns `true` if `string` starts with `target`,
     *  else `false`.
     * @example
     *
     * _.startsWith('abc', 'a');
     * // => true
     *
     * _.startsWith('abc', 'b');
     * // => false
     *
     * _.startsWith('abc', 'b', 1);
     * // => true
     */
    function startsWith(string, target, position) {
      string = toString(string);
      position = position == null
        ? 0
        : baseClamp(toInteger(position), 0, string.length);

      target = baseToString(target);
      return string.slice(position, position + target.length) == target;
    }

    /**
     * Creates a compiled template function that can interpolate data properties
     * in "interpolate" delimiters, HTML-escape interpolated data properties in
     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
     * properties may be accessed as free variables in the template. If a setting
     * object is given, it takes precedence over `_.templateSettings` values.
     *
     * **Note:** In the development build `_.template` utilizes
     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
     * for easier debugging.
     *
     * For more information on precompiling templates see
     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
     *
     * For more information on Chrome extension sandboxes see
     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The template string.
     * @param {Object} [options={}] The options object.
     * @param {RegExp} [options.escape=_.templateSettings.escape]
     *  The HTML "escape" delimiter.
     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
     *  The "evaluate" delimiter.
     * @param {Object} [options.imports=_.templateSettings.imports]
     *  An object to import into the template as free variables.
     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
     *  The "interpolate" delimiter.
     * @param {string} [options.sourceURL='lodash.templateSources[n]']
     *  The sourceURL of the compiled template.
     * @param {string} [options.variable='obj']
     *  The data object variable name.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the compiled template function.
     * @example
     *
     * // Use the "interpolate" delimiter to create a compiled template.
     * var compiled = _.template('hello <%= user %>!');
     * compiled({ 'user': 'fred' });
     * // => 'hello fred!'
     *
     * // Use the HTML "escape" delimiter to escape data property values.
     * var compiled = _.template('<b><%- value %></b>');
     * compiled({ 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the internal `print` function in "evaluate" delimiters.
     * var compiled = _.template('<% print("hello " + user); %>!');
     * compiled({ 'user': 'barney' });
     * // => 'hello barney!'
     *
     * // Use the ES template literal delimiter as an "interpolate" delimiter.
     * // Disable support by replacing the "interpolate" delimiter.
     * var compiled = _.template('hello ${ user }!');
     * compiled({ 'user': 'pebbles' });
     * // => 'hello pebbles!'
     *
     * // Use backslashes to treat delimiters as plain text.
     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
     * compiled({ 'value': 'ignored' });
     * // => '<%- value %>'
     *
     * // Use the `imports` option to import `jQuery` as `jq`.
     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
     *
     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     * //   var __t, __p = '';
     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
     * //   return __p;
     * // }
     *
     * // Use custom template delimiters.
     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
     * var compiled = _.template('hello {{ user }}!');
     * compiled({ 'user': 'mustache' });
     * // => 'hello mustache!'
     *
     * // Use the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and stack traces.
     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
     * ');
     */
    function template(string, options, guard) {
      // Based on John Resig's `tmpl` implementation
      // (http://ejohn.org/blog/javascript-micro-templating/)
      // and Laura Doktorova's doT.js (https://github.com/olado/doT).
      var settings = lodash.templateSettings;

      if (guard && isIterateeCall(string, options, guard)) {
        options = undefined;
      }
      string = toString(string);
      options = assignInWith({}, options, settings, customDefaultsAssignIn);

      var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn),
          importsKeys = keys(imports),
          importsValues = baseValues(imports, importsKeys);

      var isEscaping,
          isEvaluating,
          index = 0,
          interpolate = options.interpolate || reNoMatch,
          source = "__p += '";

      // Compile the regexp to match each delimiter.
      var reDelimiters = RegExp(
        (options.escape || reNoMatch).source + '|' +
        interpolate.source + '|' +
        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
        (options.evaluate || reNoMatch).source + '|$'
      , 'g');

      // Use a sourceURL for easier debugging.
      // The sourceURL gets injected into the source that's eval-ed, so be careful
      // with lookup (in case of e.g. prototype pollution), and strip newlines if any.
      // A newline wouldn't be a valid sourceURL anyway, and it'd enable code injection.
      var sourceURL = '//# sourceURL=' +
        (hasOwnProperty.call(options, 'sourceURL')
          ? (options.sourceURL + '').replace(/[\r\n]/g, ' ')
          : ('lodash.templateSources[' + (++templateCounter) + ']')
        ) + '\n';

      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
        interpolateValue || (interpolateValue = esTemplateValue);

        // Escape characters that can't be included in string literals.
        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

        // Replace delimiters with snippets.
        if (escapeValue) {
          isEscaping = true;
          source += "' +\n__e(" + escapeValue + ") +\n'";
        }
        if (evaluateValue) {
          isEvaluating = true;
          source += "';\n" + evaluateValue + ";\n__p += '";
        }
        if (interpolateValue) {
          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
        }
        index = offset + match.length;

        // The JS engine embedded in Adobe products needs `match` returned in
        // order to produce the correct `offset` value.
        return match;
      });

      source += "';\n";

      // If `variable` is not specified wrap a with-statement around the generated
      // code to add the data object to the top of the scope chain.
      // Like with sourceURL, we take care to not check the option's prototype,
      // as this configuration is a code injection vector.
      var variable = hasOwnProperty.call(options, 'variable') && options.variable;
      if (!variable) {
        source = 'with (obj) {\n' + source + '\n}\n';
      }
      // Cleanup code by stripping empty strings.
      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
        .replace(reEmptyStringMiddle, '$1')
        .replace(reEmptyStringTrailing, '$1;');

      // Frame code as the function body.
      source = 'function(' + (variable || 'obj') + ') {\n' +
        (variable
          ? ''
          : 'obj || (obj = {});\n'
        ) +
        "var __t, __p = ''" +
        (isEscaping
           ? ', __e = _.escape'
           : ''
        ) +
        (isEvaluating
          ? ', __j = Array.prototype.join;\n' +
            "function print() { __p += __j.call(arguments, '') }\n"
          : ';\n'
        ) +
        source +
        'return __p\n}';

      var result = attempt(function() {
        return Function(importsKeys, sourceURL + 'return ' + source)
          .apply(undefined, importsValues);
      });

      // Provide the compiled function's source by its `toString` method or
      // the `source` property as a convenience for inlining compiled templates.
      result.source = source;
      if (isError(result)) {
        throw result;
      }
      return result;
    }

    /**
     * Converts `string`, as a whole, to lower case just like
     * [String#toLowerCase](https://mdn.io/toLowerCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.toLower('--Foo-Bar--');
     * // => '--foo-bar--'
     *
     * _.toLower('fooBar');
     * // => 'foobar'
     *
     * _.toLower('__FOO_BAR__');
     * // => '__foo_bar__'
     */
    function toLower(value) {
      return toString(value).toLowerCase();
    }

    /**
     * Converts `string`, as a whole, to upper case just like
     * [String#toUpperCase](https://mdn.io/toUpperCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.toUpper('--foo-bar--');
     * // => '--FOO-BAR--'
     *
     * _.toUpper('fooBar');
     * // => 'FOOBAR'
     *
     * _.toUpper('__foo_bar__');
     * // => '__FOO_BAR__'
     */
    function toUpper(value) {
      return toString(value).toUpperCase();
    }

    /**
     * Removes leading and trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trim('  abc  ');
     * // => 'abc'
     *
     * _.trim('-_-abc-_-', '_-');
     * // => 'abc'
     *
     * _.map(['  foo  ', '  bar  '], _.trim);
     * // => ['foo', 'bar']
     */
    function trim(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrim, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          chrSymbols = stringToArray(chars),
          start = charsStartIndex(strSymbols, chrSymbols),
          end = charsEndIndex(strSymbols, chrSymbols) + 1;

      return castSlice(strSymbols, start, end).join('');
    }

    /**
     * Removes trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimEnd('  abc  ');
     * // => '  abc'
     *
     * _.trimEnd('-_-abc-_-', '_-');
     * // => '-_-abc'
     */
    function trimEnd(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrimEnd, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;

      return castSlice(strSymbols, 0, end).join('');
    }

    /**
     * Removes leading whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimStart('  abc  ');
     * // => 'abc  '
     *
     * _.trimStart('-_-abc-_-', '_-');
     * // => 'abc-_-'
     */
    function trimStart(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrimStart, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          start = charsStartIndex(strSymbols, stringToArray(chars));

      return castSlice(strSymbols, start).join('');
    }

    /**
     * Truncates `string` if it's longer than the given maximum string length.
     * The last characters of the truncated string are replaced with the omission
     * string which defaults to "...".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to truncate.
     * @param {Object} [options={}] The options object.
     * @param {number} [options.length=30] The maximum string length.
     * @param {string} [options.omission='...'] The string to indicate text is omitted.
     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
     * @returns {string} Returns the truncated string.
     * @example
     *
     * _.truncate('hi-diddly-ho there, neighborino');
     * // => 'hi-diddly-ho there, neighbo...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': ' '
     * });
     * // => 'hi-diddly-ho there,...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': /,? +/
     * });
     * // => 'hi-diddly-ho there...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'omission': ' [...]'
     * });
     * // => 'hi-diddly-ho there, neig [...]'
     */
    function truncate(string, options) {
      var length = DEFAULT_TRUNC_LENGTH,
          omission = DEFAULT_TRUNC_OMISSION;

      if (isObject(options)) {
        var separator = 'separator' in options ? options.separator : separator;
        length = 'length' in options ? toInteger(options.length) : length;
        omission = 'omission' in options ? baseToString(options.omission) : omission;
      }
      string = toString(string);

      var strLength = string.length;
      if (hasUnicode(string)) {
        var strSymbols = stringToArray(string);
        strLength = strSymbols.length;
      }
      if (length >= strLength) {
        return string;
      }
      var end = length - stringSize(omission);
      if (end < 1) {
        return omission;
      }
      var result = strSymbols
        ? castSlice(strSymbols, 0, end).join('')
        : string.slice(0, end);

      if (separator === undefined) {
        return result + omission;
      }
      if (strSymbols) {
        end += (result.length - end);
      }
      if (isRegExp(separator)) {
        if (string.slice(end).search(separator)) {
          var match,
              substring = result;

          if (!separator.global) {
            separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
          }
          separator.lastIndex = 0;
          while ((match = separator.exec(substring))) {
            var newEnd = match.index;
          }
          result = result.slice(0, newEnd === undefined ? end : newEnd);
        }
      } else if (string.indexOf(baseToString(separator), end) != end) {
        var index = result.lastIndexOf(separator);
        if (index > -1) {
          result = result.slice(0, index);
        }
      }
      return result + omission;
    }

    /**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
     * their corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional
     * HTML entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @since 0.6.0
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pebbles');
     * // => 'fred, barney, & pebbles'
     */
    function unescape(string) {
      string = toString(string);
      return (string && reHasEscapedHtml.test(string))
        ? string.replace(reEscapedHtml, unescapeHtmlChar)
        : string;
    }

    /**
     * Converts `string`, as space separated words, to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.upperCase('--foo-bar');
     * // => 'FOO BAR'
     *
     * _.upperCase('fooBar');
     * // => 'FOO BAR'
     *
     * _.upperCase('__foo_bar__');
     * // => 'FOO BAR'
     */
    var upperCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toUpperCase();
    });

    /**
     * Converts the first character of `string` to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.upperFirst('fred');
     * // => 'Fred'
     *
     * _.upperFirst('FRED');
     * // => 'FRED'
     */
    var upperFirst = createCaseFirst('toUpperCase');

    /**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */
    function words(string, pattern, guard) {
      string = toString(string);
      pattern = guard ? undefined : pattern;

      if (pattern === undefined) {
        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
      }
      return string.match(pattern) || [];
    }

    /*------------------------------------------------------------------------*/

    /**
     * Attempts to invoke `func`, returning either the result or the caught error
     * object. Any additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Function} func The function to attempt.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {*} Returns the `func` result or error object.
     * @example
     *
     * // Avoid throwing errors for invalid selectors.
     * var elements = _.attempt(function(selector) {
     *   return document.querySelectorAll(selector);
     * }, '>_>');
     *
     * if (_.isError(elements)) {
     *   elements = [];
     * }
     */
    var attempt = baseRest(function(func, args) {
      try {
        return apply(func, undefined, args);
      } catch (e) {
        return isError(e) ? e : new Error(e);
      }
    });

    /**
     * Binds methods of an object to the object itself, overwriting the existing
     * method.
     *
     * **Note:** This method doesn't set the "length" property of bound functions.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Object} object The object to bind and assign the bound methods to.
     * @param {...(string|string[])} methodNames The object method names to bind.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var view = {
     *   'label': 'docs',
     *   'click': function() {
     *     console.log('clicked ' + this.label);
     *   }
     * };
     *
     * _.bindAll(view, ['click']);
     * jQuery(element).on('click', view.click);
     * // => Logs 'clicked docs' when clicked.
     */
    var bindAll = flatRest(function(object, methodNames) {
      arrayEach(methodNames, function(key) {
        key = toKey(key);
        baseAssignValue(object, key, bind(object[key], object));
      });
      return object;
    });

    /**
     * Creates a function that iterates over `pairs` and invokes the corresponding
     * function of the first predicate to return truthy. The predicate-function
     * pairs are invoked with the `this` binding and arguments of the created
     * function.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Array} pairs The predicate-function pairs.
     * @returns {Function} Returns the new composite function.
     * @example
     *
     * var func = _.cond([
     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
     *   [_.stubTrue,                      _.constant('no match')]
     * ]);
     *
     * func({ 'a': 1, 'b': 2 });
     * // => 'matches A'
     *
     * func({ 'a': 0, 'b': 1 });
     * // => 'matches B'
     *
     * func({ 'a': '1', 'b': '2' });
     * // => 'no match'
     */
    function cond(pairs) {
      var length = pairs == null ? 0 : pairs.length,
          toIteratee = getIteratee();

      pairs = !length ? [] : arrayMap(pairs, function(pair) {
        if (typeof pair[1] != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return [toIteratee(pair[0]), pair[1]];
      });

      return baseRest(function(args) {
        var index = -1;
        while (++index < length) {
          var pair = pairs[index];
          if (apply(pair[0], this, args)) {
            return apply(pair[1], this, args);
          }
        }
      });
    }

    /**
     * Creates a function that invokes the predicate properties of `source` with
     * the corresponding property values of a given object, returning `true` if
     * all predicates return truthy, else `false`.
     *
     * **Note:** The created function is equivalent to `_.conformsTo` with
     * `source` partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 2, 'b': 1 },
     *   { 'a': 1, 'b': 2 }
     * ];
     *
     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
     * // => [{ 'a': 1, 'b': 2 }]
     */
    function conforms(source) {
      return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new constant function.
     * @example
     *
     * var objects = _.times(2, _.constant({ 'a': 1 }));
     *
     * console.log(objects);
     * // => [{ 'a': 1 }, { 'a': 1 }]
     *
     * console.log(objects[0] === objects[1]);
     * // => true
     */
    function constant(value) {
      return function() {
        return value;
      };
    }

    /**
     * Checks `value` to determine whether a default value should be returned in
     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
     * or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Util
     * @param {*} value The value to check.
     * @param {*} defaultValue The default value.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * _.defaultTo(1, 10);
     * // => 1
     *
     * _.defaultTo(undefined, 10);
     * // => 10
     */
    function defaultTo(value, defaultValue) {
      return (value == null || value !== value) ? defaultValue : value;
    }

    /**
     * Creates a function that returns the result of invoking the given functions
     * with the `this` binding of the created function, where each successive
     * invocation is supplied the return value of the previous.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flowRight
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flow([_.add, square]);
     * addSquare(1, 2);
     * // => 9
     */
    var flow = createFlow();

    /**
     * This method is like `_.flow` except that it creates a function that
     * invokes the given functions from right to left.
     *
     * @static
     * @since 3.0.0
     * @memberOf _
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flow
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flowRight([square, _.add]);
     * addSquare(1, 2);
     * // => 9
     */
    var flowRight = createFlow(true);

    /**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */
    function identity(value) {
      return value;
    }

    /**
     * Creates a function that invokes `func` with the arguments of the created
     * function. If `func` is a property name, the created function returns the
     * property value for a given element. If `func` is an array or object, the
     * created function returns `true` for elements that contain the equivalent
     * source properties, otherwise it returns `false`.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Util
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @returns {Function} Returns the callback.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, _.iteratee(['user', 'fred']));
     * // => [{ 'user': 'fred', 'age': 40 }]
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, _.iteratee('user'));
     * // => ['barney', 'fred']
     *
     * // Create custom iteratee shorthands.
     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
     *     return func.test(string);
     *   };
     * });
     *
     * _.filter(['abc', 'def'], /ef/);
     * // => ['def']
     */
    function iteratee(func) {
      return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between a given
     * object and `source`, returning `true` if the given object has equivalent
     * property values, else `false`.
     *
     * **Note:** The created function is equivalent to `_.isMatch` with `source`
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
     */
    function matches(source) {
      return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between the
     * value at `path` of a given object to `srcValue`, returning `true` if the
     * object value is equivalent, else `false`.
     *
     * **Note:** Partial comparisons will match empty array and empty object
     * `srcValue` values against any array or object value, respectively. See
     * `_.isEqual` for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.find(objects, _.matchesProperty('a', 4));
     * // => { 'a': 4, 'b': 5, 'c': 6 }
     */
    function matchesProperty(path, srcValue) {
      return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that invokes the method at `path` of a given object.
     * Any additional arguments are provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': _.constant(2) } },
     *   { 'a': { 'b': _.constant(1) } }
     * ];
     *
     * _.map(objects, _.method('a.b'));
     * // => [2, 1]
     *
     * _.map(objects, _.method(['a', 'b']));
     * // => [2, 1]
     */
    var method = baseRest(function(path, args) {
      return function(object) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * The opposite of `_.method`; this method creates a function that invokes
     * the method at a given path of `object`. Any additional arguments are
     * provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Object} object The object to query.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var array = _.times(3, _.constant),
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
     * // => [2, 0]
     */
    var methodOf = baseRest(function(object, args) {
      return function(path) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * Adds all own enumerable string keyed function properties of a source
     * object to the destination object. If `object` is a function, then methods
     * are added to its prototype as well.
     *
     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
     * avoid conflicts caused by modifying the original.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Function|Object} [object=lodash] The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
     * @returns {Function|Object} Returns `object`.
     * @example
     *
     * function vowels(string) {
     *   return _.filter(string, function(v) {
     *     return /[aeiou]/i.test(v);
     *   });
     * }
     *
     * _.mixin({ 'vowels': vowels });
     * _.vowels('fred');
     * // => ['e']
     *
     * _('fred').vowels().value();
     * // => ['e']
     *
     * _.mixin({ 'vowels': vowels }, { 'chain': false });
     * _('fred').vowels();
     * // => ['e']
     */
    function mixin(object, source, options) {
      var props = keys(source),
          methodNames = baseFunctions(source, props);

      if (options == null &&
          !(isObject(source) && (methodNames.length || !props.length))) {
        options = source;
        source = object;
        object = this;
        methodNames = baseFunctions(source, keys(source));
      }
      var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
          isFunc = isFunction(object);

      arrayEach(methodNames, function(methodName) {
        var func = source[methodName];
        object[methodName] = func;
        if (isFunc) {
          object.prototype[methodName] = function() {
            var chainAll = this.__chain__;
            if (chain || chainAll) {
              var result = object(this.__wrapped__),
                  actions = result.__actions__ = copyArray(this.__actions__);

              actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
              result.__chain__ = chainAll;
              return result;
            }
            return func.apply(object, arrayPush([this.value()], arguments));
          };
        }
      });

      return object;
    }

    /**
     * Reverts the `_` variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */
    function noConflict() {
      if (root._ === this) {
        root._ = oldDash;
      }
      return this;
    }

    /**
     * This method returns `undefined`.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Util
     * @example
     *
     * _.times(2, _.noop);
     * // => [undefined, undefined]
     */
    function noop() {
      // No operation performed.
    }

    /**
     * Creates a function that gets the argument at index `n`. If `n` is negative,
     * the nth argument from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [n=0] The index of the argument to return.
     * @returns {Function} Returns the new pass-thru function.
     * @example
     *
     * var func = _.nthArg(1);
     * func('a', 'b', 'c', 'd');
     * // => 'b'
     *
     * var func = _.nthArg(-2);
     * func('a', 'b', 'c', 'd');
     * // => 'c'
     */
    function nthArg(n) {
      n = toInteger(n);
      return baseRest(function(args) {
        return baseNth(args, n);
      });
    }

    /**
     * Creates a function that invokes `iteratees` with the arguments it receives
     * and returns their results.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.over([Math.max, Math.min]);
     *
     * func(1, 2, 3, 4);
     * // => [4, 1]
     */
    var over = createOver(arrayMap);

    /**
     * Creates a function that checks if **all** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overEvery([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => false
     *
     * func(NaN);
     * // => false
     */
    var overEvery = createOver(arrayEvery);

    /**
     * Creates a function that checks if **any** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overSome([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => true
     *
     * func(NaN);
     * // => false
     */
    var overSome = createOver(arraySome);

    /**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }

    /**
     * The opposite of `_.property`; this method creates a function that returns
     * the value at a given path of `object`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var array = [0, 1, 2],
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
     * // => [2, 0]
     */
    function propertyOf(object) {
      return function(path) {
        return object == null ? undefined : baseGet(object, path);
      };
    }

    /**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
     * `start` is specified without an `end` or `step`. If `end` is not specified,
     * it's set to `start` with `start` then set to `0`.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.rangeRight
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(-4);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */
    var range = createRange();

    /**
     * This method is like `_.range` except that it populates values in
     * descending order.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.range
     * @example
     *
     * _.rangeRight(4);
     * // => [3, 2, 1, 0]
     *
     * _.rangeRight(-4);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 5);
     * // => [4, 3, 2, 1]
     *
     * _.rangeRight(0, 20, 5);
     * // => [15, 10, 5, 0]
     *
     * _.rangeRight(0, -4, -1);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.rangeRight(0);
     * // => []
     */
    var rangeRight = createRange(true);

    /**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */
    function stubArray() {
      return [];
    }

    /**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */
    function stubFalse() {
      return false;
    }

    /**
     * This method returns a new empty object.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Object} Returns the new empty object.
     * @example
     *
     * var objects = _.times(2, _.stubObject);
     *
     * console.log(objects);
     * // => [{}, {}]
     *
     * console.log(objects[0] === objects[1]);
     * // => false
     */
    function stubObject() {
      return {};
    }

    /**
     * This method returns an empty string.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {string} Returns the empty string.
     * @example
     *
     * _.times(2, _.stubString);
     * // => ['', '']
     */
    function stubString() {
      return '';
    }

    /**
     * This method returns `true`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `true`.
     * @example
     *
     * _.times(2, _.stubTrue);
     * // => [true, true]
     */
    function stubTrue() {
      return true;
    }

    /**
     * Invokes the iteratee `n` times, returning an array of the results of
     * each invocation. The iteratee is invoked with one argument; (index).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.times(3, String);
     * // => ['0', '1', '2']
     *
     *  _.times(4, _.constant(0));
     * // => [0, 0, 0, 0]
     */
    function times(n, iteratee) {
      n = toInteger(n);
      if (n < 1 || n > MAX_SAFE_INTEGER) {
        return [];
      }
      var index = MAX_ARRAY_LENGTH,
          length = nativeMin(n, MAX_ARRAY_LENGTH);

      iteratee = getIteratee(iteratee);
      n -= MAX_ARRAY_LENGTH;

      var result = baseTimes(length, iteratee);
      while (++index < n) {
        iteratee(index);
      }
      return result;
    }

    /**
     * Converts `value` to a property path array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {*} value The value to convert.
     * @returns {Array} Returns the new property path array.
     * @example
     *
     * _.toPath('a.b.c');
     * // => ['a', 'b', 'c']
     *
     * _.toPath('a[0].b.c');
     * // => ['a', '0', 'b', 'c']
     */
    function toPath(value) {
      if (isArray(value)) {
        return arrayMap(value, toKey);
      }
      return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
    }

    /**
     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {string} [prefix=''] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */
    function uniqueId(prefix) {
      var id = ++idCounter;
      return toString(prefix) + id;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Adds two numbers.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {number} augend The first number in an addition.
     * @param {number} addend The second number in an addition.
     * @returns {number} Returns the total.
     * @example
     *
     * _.add(6, 4);
     * // => 10
     */
    var add = createMathOperation(function(augend, addend) {
      return augend + addend;
    }, 0);

    /**
     * Computes `number` rounded up to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round up.
     * @param {number} [precision=0] The precision to round up to.
     * @returns {number} Returns the rounded up number.
     * @example
     *
     * _.ceil(4.006);
     * // => 5
     *
     * _.ceil(6.004, 2);
     * // => 6.01
     *
     * _.ceil(6040, -2);
     * // => 6100
     */
    var ceil = createRound('ceil');

    /**
     * Divide two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} dividend The first number in a division.
     * @param {number} divisor The second number in a division.
     * @returns {number} Returns the quotient.
     * @example
     *
     * _.divide(6, 4);
     * // => 1.5
     */
    var divide = createMathOperation(function(dividend, divisor) {
      return dividend / divisor;
    }, 1);

    /**
     * Computes `number` rounded down to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round down.
     * @param {number} [precision=0] The precision to round down to.
     * @returns {number} Returns the rounded down number.
     * @example
     *
     * _.floor(4.006);
     * // => 4
     *
     * _.floor(0.046, 2);
     * // => 0.04
     *
     * _.floor(4060, -2);
     * // => 4000
     */
    var floor = createRound('floor');

    /**
     * Computes the maximum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => undefined
     */
    function max(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseGt)
        : undefined;
    }

    /**
     * This method is like `_.max` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.maxBy(objects, function(o) { return o.n; });
     * // => { 'n': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.maxBy(objects, 'n');
     * // => { 'n': 2 }
     */
    function maxBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseGt)
        : undefined;
    }

    /**
     * Computes the mean of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the mean.
     * @example
     *
     * _.mean([4, 2, 8, 6]);
     * // => 5
     */
    function mean(array) {
      return baseMean(array, identity);
    }

    /**
     * This method is like `_.mean` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be averaged.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the mean.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.meanBy(objects, function(o) { return o.n; });
     * // => 5
     *
     * // The `_.property` iteratee shorthand.
     * _.meanBy(objects, 'n');
     * // => 5
     */
    function meanBy(array, iteratee) {
      return baseMean(array, getIteratee(iteratee, 2));
    }

    /**
     * Computes the minimum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * _.min([]);
     * // => undefined
     */
    function min(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseLt)
        : undefined;
    }

    /**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.n; });
     * // => { 'n': 1 }
     *
     * // The `_.property` iteratee shorthand.
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */
    function minBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseLt)
        : undefined;
    }

    /**
     * Multiply two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} multiplier The first number in a multiplication.
     * @param {number} multiplicand The second number in a multiplication.
     * @returns {number} Returns the product.
     * @example
     *
     * _.multiply(6, 4);
     * // => 24
     */
    var multiply = createMathOperation(function(multiplier, multiplicand) {
      return multiplier * multiplicand;
    }, 1);

    /**
     * Computes `number` rounded to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round.
     * @param {number} [precision=0] The precision to round to.
     * @returns {number} Returns the rounded number.
     * @example
     *
     * _.round(4.006);
     * // => 4
     *
     * _.round(4.006, 2);
     * // => 4.01
     *
     * _.round(4060, -2);
     * // => 4100
     */
    var round = createRound('round');

    /**
     * Subtract two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {number} minuend The first number in a subtraction.
     * @param {number} subtrahend The second number in a subtraction.
     * @returns {number} Returns the difference.
     * @example
     *
     * _.subtract(6, 4);
     * // => 2
     */
    var subtract = createMathOperation(function(minuend, subtrahend) {
      return minuend - subtrahend;
    }, 0);

    /**
     * Computes the sum of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.sum([4, 2, 8, 6]);
     * // => 20
     */
    function sum(array) {
      return (array && array.length)
        ? baseSum(array, identity)
        : 0;
    }

    /**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // The `_.property` iteratee shorthand.
     * _.sumBy(objects, 'n');
     * // => 20
     */
    function sumBy(array, iteratee) {
      return (array && array.length)
        ? baseSum(array, getIteratee(iteratee, 2))
        : 0;
    }

    /*------------------------------------------------------------------------*/

    // Add methods that return wrapped values in chain sequences.
    lodash.after = after;
    lodash.ary = ary;
    lodash.assign = assign;
    lodash.assignIn = assignIn;
    lodash.assignInWith = assignInWith;
    lodash.assignWith = assignWith;
    lodash.at = at;
    lodash.before = before;
    lodash.bind = bind;
    lodash.bindAll = bindAll;
    lodash.bindKey = bindKey;
    lodash.castArray = castArray;
    lodash.chain = chain;
    lodash.chunk = chunk;
    lodash.compact = compact;
    lodash.concat = concat;
    lodash.cond = cond;
    lodash.conforms = conforms;
    lodash.constant = constant;
    lodash.countBy = countBy;
    lodash.create = create;
    lodash.curry = curry;
    lodash.curryRight = curryRight;
    lodash.debounce = debounce;
    lodash.defaults = defaults;
    lodash.defaultsDeep = defaultsDeep;
    lodash.defer = defer;
    lodash.delay = delay;
    lodash.difference = difference;
    lodash.differenceBy = differenceBy;
    lodash.differenceWith = differenceWith;
    lodash.drop = drop;
    lodash.dropRight = dropRight;
    lodash.dropRightWhile = dropRightWhile;
    lodash.dropWhile = dropWhile;
    lodash.fill = fill;
    lodash.filter = filter;
    lodash.flatMap = flatMap;
    lodash.flatMapDeep = flatMapDeep;
    lodash.flatMapDepth = flatMapDepth;
    lodash.flatten = flatten;
    lodash.flattenDeep = flattenDeep;
    lodash.flattenDepth = flattenDepth;
    lodash.flip = flip;
    lodash.flow = flow;
    lodash.flowRight = flowRight;
    lodash.fromPairs = fromPairs;
    lodash.functions = functions;
    lodash.functionsIn = functionsIn;
    lodash.groupBy = groupBy;
    lodash.initial = initial;
    lodash.intersection = intersection;
    lodash.intersectionBy = intersectionBy;
    lodash.intersectionWith = intersectionWith;
    lodash.invert = invert;
    lodash.invertBy = invertBy;
    lodash.invokeMap = invokeMap;
    lodash.iteratee = iteratee;
    lodash.keyBy = keyBy;
    lodash.keys = keys;
    lodash.keysIn = keysIn;
    lodash.map = map;
    lodash.mapKeys = mapKeys;
    lodash.mapValues = mapValues;
    lodash.matches = matches;
    lodash.matchesProperty = matchesProperty;
    lodash.memoize = memoize;
    lodash.merge = merge;
    lodash.mergeWith = mergeWith;
    lodash.method = method;
    lodash.methodOf = methodOf;
    lodash.mixin = mixin;
    lodash.negate = negate;
    lodash.nthArg = nthArg;
    lodash.omit = omit;
    lodash.omitBy = omitBy;
    lodash.once = once;
    lodash.orderBy = orderBy;
    lodash.over = over;
    lodash.overArgs = overArgs;
    lodash.overEvery = overEvery;
    lodash.overSome = overSome;
    lodash.partial = partial;
    lodash.partialRight = partialRight;
    lodash.partition = partition;
    lodash.pick = pick;
    lodash.pickBy = pickBy;
    lodash.property = property;
    lodash.propertyOf = propertyOf;
    lodash.pull = pull;
    lodash.pullAll = pullAll;
    lodash.pullAllBy = pullAllBy;
    lodash.pullAllWith = pullAllWith;
    lodash.pullAt = pullAt;
    lodash.range = range;
    lodash.rangeRight = rangeRight;
    lodash.rearg = rearg;
    lodash.reject = reject;
    lodash.remove = remove;
    lodash.rest = rest;
    lodash.reverse = reverse;
    lodash.sampleSize = sampleSize;
    lodash.set = set;
    lodash.setWith = setWith;
    lodash.shuffle = shuffle;
    lodash.slice = slice;
    lodash.sortBy = sortBy;
    lodash.sortedUniq = sortedUniq;
    lodash.sortedUniqBy = sortedUniqBy;
    lodash.split = split;
    lodash.spread = spread;
    lodash.tail = tail;
    lodash.take = take;
    lodash.takeRight = takeRight;
    lodash.takeRightWhile = takeRightWhile;
    lodash.takeWhile = takeWhile;
    lodash.tap = tap;
    lodash.throttle = throttle;
    lodash.thru = thru;
    lodash.toArray = toArray;
    lodash.toPairs = toPairs;
    lodash.toPairsIn = toPairsIn;
    lodash.toPath = toPath;
    lodash.toPlainObject = toPlainObject;
    lodash.transform = transform;
    lodash.unary = unary;
    lodash.union = union;
    lodash.unionBy = unionBy;
    lodash.unionWith = unionWith;
    lodash.uniq = uniq;
    lodash.uniqBy = uniqBy;
    lodash.uniqWith = uniqWith;
    lodash.unset = unset;
    lodash.unzip = unzip;
    lodash.unzipWith = unzipWith;
    lodash.update = update;
    lodash.updateWith = updateWith;
    lodash.values = values;
    lodash.valuesIn = valuesIn;
    lodash.without = without;
    lodash.words = words;
    lodash.wrap = wrap;
    lodash.xor = xor;
    lodash.xorBy = xorBy;
    lodash.xorWith = xorWith;
    lodash.zip = zip;
    lodash.zipObject = zipObject;
    lodash.zipObjectDeep = zipObjectDeep;
    lodash.zipWith = zipWith;

    // Add aliases.
    lodash.entries = toPairs;
    lodash.entriesIn = toPairsIn;
    lodash.extend = assignIn;
    lodash.extendWith = assignInWith;

    // Add methods to `lodash.prototype`.
    mixin(lodash, lodash);

    /*------------------------------------------------------------------------*/

    // Add methods that return unwrapped values in chain sequences.
    lodash.add = add;
    lodash.attempt = attempt;
    lodash.camelCase = camelCase;
    lodash.capitalize = capitalize;
    lodash.ceil = ceil;
    lodash.clamp = clamp;
    lodash.clone = clone;
    lodash.cloneDeep = cloneDeep;
    lodash.cloneDeepWith = cloneDeepWith;
    lodash.cloneWith = cloneWith;
    lodash.conformsTo = conformsTo;
    lodash.deburr = deburr;
    lodash.defaultTo = defaultTo;
    lodash.divide = divide;
    lodash.endsWith = endsWith;
    lodash.eq = eq;
    lodash.escape = escape;
    lodash.escapeRegExp = escapeRegExp;
    lodash.every = every;
    lodash.find = find;
    lodash.findIndex = findIndex;
    lodash.findKey = findKey;
    lodash.findLast = findLast;
    lodash.findLastIndex = findLastIndex;
    lodash.findLastKey = findLastKey;
    lodash.floor = floor;
    lodash.forEach = forEach;
    lodash.forEachRight = forEachRight;
    lodash.forIn = forIn;
    lodash.forInRight = forInRight;
    lodash.forOwn = forOwn;
    lodash.forOwnRight = forOwnRight;
    lodash.get = get;
    lodash.gt = gt;
    lodash.gte = gte;
    lodash.has = has;
    lodash.hasIn = hasIn;
    lodash.head = head;
    lodash.identity = identity;
    lodash.includes = includes;
    lodash.indexOf = indexOf;
    lodash.inRange = inRange;
    lodash.invoke = invoke;
    lodash.isArguments = isArguments;
    lodash.isArray = isArray;
    lodash.isArrayBuffer = isArrayBuffer;
    lodash.isArrayLike = isArrayLike;
    lodash.isArrayLikeObject = isArrayLikeObject;
    lodash.isBoolean = isBoolean;
    lodash.isBuffer = isBuffer;
    lodash.isDate = isDate;
    lodash.isElement = isElement;
    lodash.isEmpty = isEmpty;
    lodash.isEqual = isEqual;
    lodash.isEqualWith = isEqualWith;
    lodash.isError = isError;
    lodash.isFinite = isFinite;
    lodash.isFunction = isFunction;
    lodash.isInteger = isInteger;
    lodash.isLength = isLength;
    lodash.isMap = isMap;
    lodash.isMatch = isMatch;
    lodash.isMatchWith = isMatchWith;
    lodash.isNaN = isNaN;
    lodash.isNative = isNative;
    lodash.isNil = isNil;
    lodash.isNull = isNull;
    lodash.isNumber = isNumber;
    lodash.isObject = isObject;
    lodash.isObjectLike = isObjectLike;
    lodash.isPlainObject = isPlainObject;
    lodash.isRegExp = isRegExp;
    lodash.isSafeInteger = isSafeInteger;
    lodash.isSet = isSet;
    lodash.isString = isString;
    lodash.isSymbol = isSymbol;
    lodash.isTypedArray = isTypedArray;
    lodash.isUndefined = isUndefined;
    lodash.isWeakMap = isWeakMap;
    lodash.isWeakSet = isWeakSet;
    lodash.join = join;
    lodash.kebabCase = kebabCase;
    lodash.last = last;
    lodash.lastIndexOf = lastIndexOf;
    lodash.lowerCase = lowerCase;
    lodash.lowerFirst = lowerFirst;
    lodash.lt = lt;
    lodash.lte = lte;
    lodash.max = max;
    lodash.maxBy = maxBy;
    lodash.mean = mean;
    lodash.meanBy = meanBy;
    lodash.min = min;
    lodash.minBy = minBy;
    lodash.stubArray = stubArray;
    lodash.stubFalse = stubFalse;
    lodash.stubObject = stubObject;
    lodash.stubString = stubString;
    lodash.stubTrue = stubTrue;
    lodash.multiply = multiply;
    lodash.nth = nth;
    lodash.noConflict = noConflict;
    lodash.noop = noop;
    lodash.now = now;
    lodash.pad = pad;
    lodash.padEnd = padEnd;
    lodash.padStart = padStart;
    lodash.parseInt = parseInt;
    lodash.random = random;
    lodash.reduce = reduce;
    lodash.reduceRight = reduceRight;
    lodash.repeat = repeat;
    lodash.replace = replace;
    lodash.result = result;
    lodash.round = round;
    lodash.runInContext = runInContext;
    lodash.sample = sample;
    lodash.size = size;
    lodash.snakeCase = snakeCase;
    lodash.some = some;
    lodash.sortedIndex = sortedIndex;
    lodash.sortedIndexBy = sortedIndexBy;
    lodash.sortedIndexOf = sortedIndexOf;
    lodash.sortedLastIndex = sortedLastIndex;
    lodash.sortedLastIndexBy = sortedLastIndexBy;
    lodash.sortedLastIndexOf = sortedLastIndexOf;
    lodash.startCase = startCase;
    lodash.startsWith = startsWith;
    lodash.subtract = subtract;
    lodash.sum = sum;
    lodash.sumBy = sumBy;
    lodash.template = template;
    lodash.times = times;
    lodash.toFinite = toFinite;
    lodash.toInteger = toInteger;
    lodash.toLength = toLength;
    lodash.toLower = toLower;
    lodash.toNumber = toNumber;
    lodash.toSafeInteger = toSafeInteger;
    lodash.toString = toString;
    lodash.toUpper = toUpper;
    lodash.trim = trim;
    lodash.trimEnd = trimEnd;
    lodash.trimStart = trimStart;
    lodash.truncate = truncate;
    lodash.unescape = unescape;
    lodash.uniqueId = uniqueId;
    lodash.upperCase = upperCase;
    lodash.upperFirst = upperFirst;

    // Add aliases.
    lodash.each = forEach;
    lodash.eachRight = forEachRight;
    lodash.first = head;

    mixin(lodash, (function() {
      var source = {};
      baseForOwn(lodash, function(func, methodName) {
        if (!hasOwnProperty.call(lodash.prototype, methodName)) {
          source[methodName] = func;
        }
      });
      return source;
    }()), { 'chain': false });

    /*------------------------------------------------------------------------*/

    /**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type {string}
     */
    lodash.VERSION = VERSION;

    // Assign default placeholders.
    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
      lodash[methodName].placeholder = lodash;
    });

    // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
    arrayEach(['drop', 'take'], function(methodName, index) {
      LazyWrapper.prototype[methodName] = function(n) {
        n = n === undefined ? 1 : nativeMax(toInteger(n), 0);

        var result = (this.__filtered__ && !index)
          ? new LazyWrapper(this)
          : this.clone();

        if (result.__filtered__) {
          result.__takeCount__ = nativeMin(n, result.__takeCount__);
        } else {
          result.__views__.push({
            'size': nativeMin(n, MAX_ARRAY_LENGTH),
            'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
          });
        }
        return result;
      };

      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
        return this.reverse()[methodName](n).reverse();
      };
    });

    // Add `LazyWrapper` methods that accept an `iteratee` value.
    arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
      var type = index + 1,
          isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;

      LazyWrapper.prototype[methodName] = function(iteratee) {
        var result = this.clone();
        result.__iteratees__.push({
          'iteratee': getIteratee(iteratee, 3),
          'type': type
        });
        result.__filtered__ = result.__filtered__ || isFilter;
        return result;
      };
    });

    // Add `LazyWrapper` methods for `_.head` and `_.last`.
    arrayEach(['head', 'last'], function(methodName, index) {
      var takeName = 'take' + (index ? 'Right' : '');

      LazyWrapper.prototype[methodName] = function() {
        return this[takeName](1).value()[0];
      };
    });

    // Add `LazyWrapper` methods for `_.initial` and `_.tail`.
    arrayEach(['initial', 'tail'], function(methodName, index) {
      var dropName = 'drop' + (index ? '' : 'Right');

      LazyWrapper.prototype[methodName] = function() {
        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
      };
    });

    LazyWrapper.prototype.compact = function() {
      return this.filter(identity);
    };

    LazyWrapper.prototype.find = function(predicate) {
      return this.filter(predicate).head();
    };

    LazyWrapper.prototype.findLast = function(predicate) {
      return this.reverse().find(predicate);
    };

    LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
      if (typeof path == 'function') {
        return new LazyWrapper(this);
      }
      return this.map(function(value) {
        return baseInvoke(value, path, args);
      });
    });

    LazyWrapper.prototype.reject = function(predicate) {
      return this.filter(negate(getIteratee(predicate)));
    };

    LazyWrapper.prototype.slice = function(start, end) {
      start = toInteger(start);

      var result = this;
      if (result.__filtered__ && (start > 0 || end < 0)) {
        return new LazyWrapper(result);
      }
      if (start < 0) {
        result = result.takeRight(-start);
      } else if (start) {
        result = result.drop(start);
      }
      if (end !== undefined) {
        end = toInteger(end);
        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
      }
      return result;
    };

    LazyWrapper.prototype.takeRightWhile = function(predicate) {
      return this.reverse().takeWhile(predicate).reverse();
    };

    LazyWrapper.prototype.toArray = function() {
      return this.take(MAX_ARRAY_LENGTH);
    };

    // Add `LazyWrapper` methods to `lodash.prototype`.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
          isTaker = /^(?:head|last)$/.test(methodName),
          lodashFunc = lodash[isTaker ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName],
          retUnwrapped = isTaker || /^find/.test(methodName);

      if (!lodashFunc) {
        return;
      }
      lodash.prototype[methodName] = function() {
        var value = this.__wrapped__,
            args = isTaker ? [1] : arguments,
            isLazy = value instanceof LazyWrapper,
            iteratee = args[0],
            useLazy = isLazy || isArray(value);

        var interceptor = function(value) {
          var result = lodashFunc.apply(lodash, arrayPush([value], args));
          return (isTaker && chainAll) ? result[0] : result;
        };

        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
          // Avoid lazy use if the iteratee has a "length" value other than `1`.
          isLazy = useLazy = false;
        }
        var chainAll = this.__chain__,
            isHybrid = !!this.__actions__.length,
            isUnwrapped = retUnwrapped && !chainAll,
            onlyLazy = isLazy && !isHybrid;

        if (!retUnwrapped && useLazy) {
          value = onlyLazy ? value : new LazyWrapper(this);
          var result = func.apply(value, args);
          result.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
          return new LodashWrapper(result, chainAll);
        }
        if (isUnwrapped && onlyLazy) {
          return func.apply(this, args);
        }
        result = this.thru(interceptor);
        return isUnwrapped ? (isTaker ? result.value()[0] : result.value()) : result;
      };
    });

    // Add `Array` methods to `lodash.prototype`.
    arrayEach(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
      var func = arrayProto[methodName],
          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
          retUnwrapped = /^(?:pop|shift)$/.test(methodName);

      lodash.prototype[methodName] = function() {
        var args = arguments;
        if (retUnwrapped && !this.__chain__) {
          var value = this.value();
          return func.apply(isArray(value) ? value : [], args);
        }
        return this[chainName](function(value) {
          return func.apply(isArray(value) ? value : [], args);
        });
      };
    });

    // Map minified method names to their real names.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var lodashFunc = lodash[methodName];
      if (lodashFunc) {
        var key = lodashFunc.name + '';
        if (!hasOwnProperty.call(realNames, key)) {
          realNames[key] = [];
        }
        realNames[key].push({ 'name': methodName, 'func': lodashFunc });
      }
    });

    realNames[createHybrid(undefined, WRAP_BIND_KEY_FLAG).name] = [{
      'name': 'wrapper',
      'func': undefined
    }];

    // Add methods to `LazyWrapper`.
    LazyWrapper.prototype.clone = lazyClone;
    LazyWrapper.prototype.reverse = lazyReverse;
    LazyWrapper.prototype.value = lazyValue;

    // Add chain sequence methods to the `lodash` wrapper.
    lodash.prototype.at = wrapperAt;
    lodash.prototype.chain = wrapperChain;
    lodash.prototype.commit = wrapperCommit;
    lodash.prototype.next = wrapperNext;
    lodash.prototype.plant = wrapperPlant;
    lodash.prototype.reverse = wrapperReverse;
    lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;

    // Add lazy aliases.
    lodash.prototype.first = lodash.prototype.head;

    if (symIterator) {
      lodash.prototype[symIterator] = wrapperToIterator;
    }
    return lodash;
  });

  /*--------------------------------------------------------------------------*/

  // Export lodash.
  var _ = runInContext();

  // Some AMD build optimizers, like r.js, check for condition patterns like:
  if (true) {
    // Expose Lodash on the global object to prevent errors when Lodash is
    // loaded by a script tag in the presence of an AMD loader.
    // See http://requirejs.org/docs/errors.html#mismatch for more details.
    // Use `_.noConflict` to remove Lodash from the global object.
    root._ = _;

    // Define as an anonymous module so, through path mapping, it can be
    // referenced as the "underscore" module.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return _;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  // Check for `exports` after `define` in case a build optimizer adds it.
  else {}
}.call(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
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

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

/***/ }),

/***/ "./resources/js/global.js":
/*!********************************!*\
  !*** ./resources/js/global.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Created by User2 on 4/7/2020.
 */
function ShowMessageBox(title, message, status, btn1text, tableClass) {
  var icon = 'ui-icon-info';

  if (status == 0) {
    icon = 'ui-icon-alert';
  } else if (status == 1) {
    icon = 'ui-icon-circle-check';
  }

  $("#dialog-icon").addClass(icon);
  $("#lblMessage").html(message);
  $("#dialog").dialog({
    resizable: false,
    draggable: false,
    title: title,
    modal: true,
    width: '400px',
    height: 'auto',
    bgiframe: false,
    hide: {
      effect: 'scale',
      duration: 400
    },
    show: {
      effect: 'scale',
      duration: 400
    },
    buttons: [{
      text: btn1text,
      "class": '',
      click: function click() {
        if (typeof tableClass === "undefined") {
          $("#dialog").dialog('close');
        } else {
          dataTable.reload(tableClass);
          $("#dialog").dialog('close');
        }
      }
    }]
  });
}

/***/ }),

/***/ "./resources/js/page/agama.js":
/*!************************************!*\
  !*** ./resources/js/page/agama.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Created by User2 on 4/7/2020.
 */

/**
 * Created by User2 on 3/30/2020.
 */
$(document).ready(function () {
  var configs = {
    columns: [{
      title: 'ID',
      field: 'id',
      columnType: {
        type: 'field'
      }
    }, {
      title: 'Nama',
      field: 'nama',
      columnType: {
        type: 'field'
      }
    }, [{
      title: 'Action',
      field: 'Edit',
      columnType: {
        type: 'modal',
        target: 'modal-edit-agama',
        modalParam: {
          type: 'column',
          value: 'id'
        }
      }
    }, {
      title: 'Action',
      field: 'Delete',
      columnType: {
        type: 'modal',
        target: 'modal-delete-agama',
        modalParam: {
          type: 'column',
          value: 'id'
        }
      }
    }]]
  };

  if ($('#js-table-agama').hasClass('js-data-agama')) {
    dataTable.init(".js-data-agama", configs);
  }

  $('#modal-create-agama').on('show.bs.modal', function (e) {
    var formElement = $(this);
    var idElement = formElement.find('input#id');
    var namaElement = formElement.find('input#nama');
    idElement.val("");
    namaElement.val("");
  });
  $(".js-agama-save-btn").click(function () {
    var _token = $(this).attr('data-token');

    var _url = $(this).attr('data-url');

    var formElement = $('#modal-create-agama');
    var namaElement = formElement.find('input#nama');

    var _nama = namaElement.val();

    $.ajax({
      method: "POST",
      url: _url,
      data: {
        nama: _nama,
        _token: _token
      }
    }).done(function (_return) {
      $("#modal-create-agama").modal("hide");
      ShowMessageBox("Success", "Data successfully Saved!", 1, 'OK', '.js-data-agama');
    });
  });
  $('#modal-edit-agama').on('show.bs.modal', function (e) {
    var id = e.relatedTarget.dataset.id;
    $(this).attr('data-id', id);

    var _url = $(this).attr('data-url');

    var _token = $(this).attr('data-token');

    var formElement = $(this);
    var idElement = formElement.find('input#id');
    var namaElement = formElement.find('input#nama');
    $.ajax({
      method: "POST",
      url: _url,
      data: {
        id: id,
        _token: _token
      }
    }).done(function (_return) {
      idElement.val(_return.data.id);
      namaElement.val(_return.data.nama);
    });
  });
  $(".js-agama-update-btn").click(function () {
    var _token = $(this).attr('data-token');

    var _url = $(this).attr('data-url');

    var formElement = $('#modal-edit-agama');
    var idElement = formElement.find('input#id');
    var namaElement = formElement.find('input#nama');

    var _id = idElement.val();

    var _nama = namaElement.val();

    $.ajax({
      method: "POST",
      url: _url,
      data: {
        id: _id,
        nama: _nama,
        _token: _token
      }
    }).done(function (_return) {
      $("#modal-edit-agama").modal("hide");
      ShowMessageBox("Success", "Data successfully Updated!", 1, 'OK', '.js-data-agama');
    });
  });
  $('#modal-delete-agama').on('show.bs.modal', function (e) {
    var id = e.relatedTarget.dataset.id;
    $(this).attr('data-id', id);
  });
  $('.js-agama-remove-btn').click(function () {
    var _token = $(this).attr('data-token');

    var _url = $(this).attr('data-url');

    var _id = $('#modal-delete-agama').attr('data-id');

    $.ajax({
      method: "POST",
      url: _url,
      data: {
        id: _id,
        _token: _token
      }
    }).done(function (_return) {
      $("#modal-delete-agama").modal("hide");
      ShowMessageBox("Success", "Data successfully Deleted!", 1, 'OK', '.js-data-agama');
    });
  });
});

/***/ }),

/***/ "./resources/js/page/anamnesis.js":
/*!****************************************!*\
  !*** ./resources/js/page/anamnesis.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Created by User2 on 4/7/2020.
 */

/**
 * Created by User2 on 4/7/2020.
 */

/**
 * Created by User2 on 3/30/2020.
 */
$(document).ready(function () {
  urls = document.URL.split('/');
  url = '/anamnesis';
  if (urls[urls.length - 2] == 'public') url = '/public/anamnesis';
  var configs = {
    columns: [{
      title: 'Nama',
      field: ['pasien', 'nama'],
      columnType: {
        type: 'field'
      }
    }, {
      title: 'Kunjungan',
      field: 'Kunjungan',
      columnType: {
        type: 'field'
      }
    }, {
      title: 'Tanggal Periksa',
      field: 'tgl_periksa',
      columnType: {
        type: 'field'
      }
    }, [{
      title: 'Action',
      field: 'View',
      columnType: {
        type: 'link',
        link: url,
        linkQuery: '/find/',
        linkParam: {
          type: 'column',
          value: 'id'
        }
      }
    }, {
      title: 'Action',
      field: 'Edit',
      columnType: {
        type: 'modal',
        target: 'modal-edit-anamnesis',
        modalParam: {
          type: 'column',
          value: 'id'
        }
      }
    }, {
      title: 'Action',
      field: 'Delete',
      columnType: {
        type: 'modal',
        target: 'modal-delete-anamnesis',
        modalParam: {
          type: 'column',
          value: 'id'
        }
      }
    }]]
  };

  if ($('#js-table-anamnesis').hasClass('js-data-anamnesis')) {
    dataTable.init(".js-data-anamnesis", configs);
  }

  $('#modal-create-anamnesis').on('show.bs.modal', function (e) {
    var formElement = $(this);
    var idElement = formElement.find('input#id');
    var id_pasienElement = formElement.find('#id_pasien');
    var kunjunganElement = formElement.find('#kunjungan');
    var tgl_periksaElement = formElement.find('#tgl_periksa');
    var medrecElement = formElement.find('#medrec');
    var aa1Element = formElement.find('#aa1');
    var aa2Element = formElement.find('#aa2');
    var aa3Element = formElement.find('#aa3');
    var ab1Element = formElement.find('#ab1');
    var ab2Element = formElement.find('#ab2');
    var ab3Element = formElement.find('#ab3');
    var ac1Element = formElement.find('#ac1');
    var ac2Element = formElement.find('#ac2');
    var ac3Element = formElement.find('#ac3');
    var ad1Element = formElement.find('#ad1');
    var ad2Element = formElement.find('#ad2');
    var ad3Element = formElement.find('#ad3');
    var ae1Element = formElement.find('#ae1');
    var ae2Element = formElement.find('#ae2');
    var ae3Element = formElement.find('#ae3');
    var af1Element = formElement.find('#af1');
    var af2Element = formElement.find('#af2');
    var af3Element = formElement.find('#af3');
    var ag1Element = formElement.find('#ag1');
    var ag2Element = formElement.find('#ag2');
    var ag3Element = formElement.find('#ag3');
    var ah1Element = formElement.find('#ah1');
    var ah2Element = formElement.find('#ah2');
    var ah3Element = formElement.find('#ah3');
    var ai1Element = formElement.find('#ai1');
    var ai2Element = formElement.find('#ai2');
    var ai3Element = formElement.find('#ai3');
    var aj1Element = formElement.find('#aj1');
    var aj2Element = formElement.find('#aj2');
    var aj3Element = formElement.find('#aj3');
    var ak1Element = formElement.find('#ak1');
    var ak2Element = formElement.find('#ak2');
    var ak3Element = formElement.find('#ak3');
    var al1Element = formElement.find('#al1');
    var al2Element = formElement.find('#al2');
    var al3Element = formElement.find('#al3');
    var am1Element = formElement.find('#am1');
    var am2Element = formElement.find('#am2');
    var am21Element = formElement.find('#am21');
    var am22Element = formElement.find('#am22');
    var am23Element = formElement.find('#am23');
    var am24Element = formElement.find('#am24');
    var am25Element = formElement.find('#am25');
    var am26Element = formElement.find('#am26');
    var am27Element = formElement.find('#am27');
    var am28Element = formElement.find('#am28');
    var am29Element = formElement.find('#am29');
    var am210Element = formElement.find('#am210');
    var am211Element = formElement.find('#am211');
    var am212Element = formElement.find('#am212');
    var am3Element = formElement.find('#am3');
    var an1Element = formElement.find('#an1');
    var an2Element = formElement.find('#an2');
    var ba1Element = formElement.find('#ba1');
    var ba2Element = formElement.find('#ba2');
    var ba3Element = formElement.find('#ba3');
    var bb1Element = formElement.find('#bb1');
    var bb2Element = formElement.find('#bb2');
    var bb3Element = formElement.find('#bb3');
    var bc1Element = formElement.find('#bc1');
    var bc2Element = formElement.find('#bc2');
    var bc3Element = formElement.find('#bc3');
    var bd1Element = formElement.find('#bd1');
    var bd2Element = formElement.find('#bd2');
    var bd3Element = formElement.find('#bd3');
    var be1Element = formElement.find('#be1');
    var be2Element = formElement.find('#be2');
    var be3Element = formElement.find('#be3');
    var bf1Element = formElement.find('#bf1');
    var bf2Element = formElement.find('#bf2');
    var bf3Element = formElement.find('#bf3');
    var bg1Element = formElement.find('#bg1');
    var bg2Element = formElement.find('#bg2');
    var bg3Element = formElement.find('#bg3');
    var bh1Element = formElement.find('#bh1');
    var bh2Element = formElement.find('#bh2');
    var bh3Element = formElement.find('#bh3');
    var bi1Element = formElement.find('#bi1');
    var bi2Element = formElement.find('#bi2');
    var bi3Element = formElement.find('#bi3');
    var bj1Element = formElement.find('#bj1');
    var bj2Element = formElement.find('#bj2');
    var bj3Element = formElement.find('#bj3');
    var bk1Element = formElement.find('#bk1');
    var bk2Element = formElement.find('#bk2');
    var bk3Element = formElement.find('#bk3');
    var ca1Element = formElement.find('#ca1');
    var ca2Element = formElement.find('#ca2');
    var ca3Element = formElement.find('#ca3');
    var cb1Element = formElement.find('#cb1');
    var cb2Element = formElement.find('#cb2');
    var cb3Element = formElement.find('#cb3');
    var cc1Element = formElement.find('#cc1');
    var cc2Element = formElement.find('#cc2');
    var cc3Element = formElement.find('#cc3');
    var cd1Element = formElement.find('#cd1');
    var cd2Element = formElement.find('#cd2');
    var cd3Element = formElement.find('#cd3');
    var ce1Element = formElement.find('#ce1');
    var ce2Element = formElement.find('#ce2');
    var ce3Element = formElement.find('#ce3');
    var cf1Element = formElement.find('#cf1');
    var cf2Element = formElement.find('#cf2');
    var cf3Element = formElement.find('#cf3');
    var cg1Element = formElement.find('#cg1');
    var cg2Element = formElement.find('#cg2');
    var cg3Element = formElement.find('#cg3');
    var ch1Element = formElement.find('#ch1');
    var ch2Element = formElement.find('#ch2');
    var ci1Element = formElement.find('#ci1');
    var ci2Element = formElement.find('#ci2');
    var ci3Element = formElement.find('#ci3');
    var da1Element = formElement.find('#da1');
    var da2Element = formElement.find('#da2');
    var da3Element = formElement.find('#da3');
    var db1Element = formElement.find('#db1');
    var db2Element = formElement.find('#db2');
    var db3Element = formElement.find('#db3');
    var dc1Element = formElement.find('#dc1');
    var dc2Element = formElement.find('#dc2');
    var dc3Element = formElement.find('#dc3');
    var dd1Element = formElement.find('#dd1');
    var dd2Element = formElement.find('#dd2');
    var dd3Element = formElement.find('#dd3');
    var de1Element = formElement.find('#de1');
    var de2Element = formElement.find('#de2');
    var de3Element = formElement.find('#de3');
    var df1Element = formElement.find('#df1');
    var df2Element = formElement.find('#df2');
    var df3Element = formElement.find('#df3');
    var dg1Element = formElement.find('#dg1');
    var dg2Element = formElement.find('#dg2');
    var dg3Element = formElement.find('#dg3');
    var dh1Element = formElement.find('#dh1');
    var dh2Element = formElement.find('#dh2');
    var di1Element = formElement.find('#di1');
    var di2Element = formElement.find('#di2');
    var dj1Element = formElement.find('#dj1');
    var dj2Element = formElement.find('#dj2');
    var dj3Element = formElement.find('#dj3');
    var Ea1Element = formElement.find('#Ea1');
    var Ea2Element = formElement.find('#Ea2');
    var Ea3Element = formElement.find('#Ea3');
    var Eb1Element = formElement.find('#Eb1');
    var Eb2Element = formElement.find('#Eb2');
    var Eb3Element = formElement.find('#Eb3');
    var Ec1Element = formElement.find('#Ec1');
    var Ec2Element = formElement.find('#Ec2');
    var Ec3Element = formElement.find('#Ec3');
    var Ed1Element = formElement.find('#Ed1');
    var Ed2Element = formElement.find('#Ed2');
    var Ed3Element = formElement.find('#Ed3');
    var Ee1Element = formElement.find('#Ee1');
    var Ee2Element = formElement.find('#Ee2');
    var Ee3Element = formElement.find('#Ee3');
    var Ef1Element = formElement.find('#Ef1');
    var Ef2Element = formElement.find('#Ef2');
    var Ef3Element = formElement.find('#Ef3');
    var Ef2LainnyaElement = formElement.find('#Ef2Lainnya');
    var Eg1Element = formElement.find('#Eg1');
    var Eg2Element = formElement.find('#Eg2');
    var Eg3Element = formElement.find('#Eg3');
    var Eg4Element = formElement.find('#Eg4');
    var Eg5Element = formElement.find('#Eg5');
    var Eg6Element = formElement.find('#Eg6');
    var EgLainnyaElement = formElement.find('#EgLainnya');
    var Fa1Element = formElement.find('#Fa1');
    var Fa2Element = formElement.find('#Fa2');
    var Fb1Element = formElement.find('#Fb1');
    var Fb2Element = formElement.find('#Fb2');
    var Fc1Element = formElement.find('#Fc1');
    var Fc2Element = formElement.find('#Fc2');
    var Fd1Element = formElement.find('#Fd1');
    var Fd2Element = formElement.find('#Fd2');
    var Fe1Element = formElement.find('#Fe1');
    var Fe2Element = formElement.find('#Fe2');
    var Ff1Element = formElement.find('#Ff1');
    var Ff2Element = formElement.find('#Ff2');
    var Fg1Element = formElement.find('#Fg1');
    var Fg2Element = formElement.find('#Fg2');
    var Fg3Element = formElement.find('#Fg3');
    var Fh1Element = formElement.find('#Fh1');
    var Fh2Element = formElement.find('#Fh2');
    var Fi1Element = formElement.find('#Fi1');
    var Fi2Element = formElement.find('#Fi2');
    var Ga1Element = formElement.find('#Ga1');
    var Ga2Element = formElement.find('#Ga2');
    var Ga3Element = formElement.find('#Ga3');
    var Gb1Element = formElement.find('#Gb1');
    var Gb2Element = formElement.find('#Gb2');
    var Gb3Element = formElement.find('#Gb3');
    var Gc1Element = formElement.find('#Gc1');
    var Gd1Element = formElement.find('#Gd1');
    var Gd2Element = formElement.find('#Gd2');
    var Ge1Element = formElement.find('#Ge1');
    var Ge2Element = formElement.find('#Ge2');
    var Ge3Element = formElement.find('#Ge3');
    var Gf1Element = formElement.find('#Gf1');
    var Gf2Element = formElement.find('#Gf2');
    var Gg1Element = formElement.find('#Gg1');
    var Gg2Element = formElement.find('#Gg2');
    var Gg2LainnyaElement = formElement.find('#Gg2Lainnya');
    var Gg3Element = formElement.find('#Gg3');
    var Gh1Element = formElement.find('#Gh1');
    var Gh2Element = formElement.find('#Gh2');
    var Ha1Element = formElement.find('#Ha1');
    var Ha2Element = formElement.find('#Ha2');
    var Ha3Element = formElement.find('#Ha3');
    var Hb1Element = formElement.find('#Hb1');
    var Hb2Element = formElement.find('#Hb2');
    var Hb3Element = formElement.find('#Hb3');
    var Hc1Element = formElement.find('#Hc1');
    var Hc2Element = formElement.find('#Hc2');
    var Hc3Element = formElement.find('#Hc3');
    var Hd1Element = formElement.find('#Hd1');
    var Hd2Element = formElement.find('#Hd2');
    var Hd3Element = formElement.find('#Hd3');
    var He1Element = formElement.find('#He1');
    var He2Element = formElement.find('#He2');
    var He3Element = formElement.find('#He3');
    var Hf1Element = formElement.find('#Hf1');
    var Hf2Element = formElement.find('#Hf2');
    var Hf3Element = formElement.find('#Hf3');
    var Hg1Element = formElement.find('#Hg1');
    var Hg2Element = formElement.find('#Hg2');
    var Hg3Element = formElement.find('#Hg3');
    var Hh1Element = formElement.find('#Hh1');
    var Hh2Element = formElement.find('#Hh2');
    var Hh3Element = formElement.find('#Hh3');
    var Hi1Element = formElement.find('#Hi1');
    var Hi2Element = formElement.find('#Hi2');
    var Hi3Element = formElement.find('#Hi3');
    var Hj1Element = formElement.find('#Hj1');
    var Hj2Element = formElement.find('#Hj2');
    var Hj3Element = formElement.find('#Hj3');
    var Ia1Element = formElement.find('#Ia1');
    var Ia2Element = formElement.find('#Ia2');
    var Ia3Element = formElement.find('#Ia3');
    var Ib1Element = formElement.find('#Ib1');
    var Ib2Element = formElement.find('#Ib2');
    var Ib3Element = formElement.find('#Ib3');
    var Ic1Element = formElement.find('#Ic1');
    var Ic2Element = formElement.find('#Ic2');
    var Ic3Element = formElement.find('#Ic3');
    var Id1Element = formElement.find('#Id1');
    var Id2Element = formElement.find('#Id2');
    var Id3Element = formElement.find('#Id3');
    var Ie1Element = formElement.find('#Ie1');
    var Ie2Element = formElement.find('#Ie2');
    var Ie3Element = formElement.find('#Ie3');
    var If1Element = formElement.find('#If1');
    var If2Element = formElement.find('#If2');
    var If3Element = formElement.find('#If3');
    var Ig1Element = formElement.find('#Ig1');
    var Ig2Element = formElement.find('#Ig2');
    var Ig3Element = formElement.find('#Ig3');
    var Ih1Element = formElement.find('#Ih1');
    var Ih2Element = formElement.find('#Ih2');
    var Ih3Element = formElement.find('#Ih3');
    var Ii1Element = formElement.find('#Ii1');
    var Ii2Element = formElement.find('#Ii2');
    var Ii3Element = formElement.find('#Ii3');
    var Ja1Element = formElement.find('#Ja1');
    var Ja2Element = formElement.find('#Ja2');
    var Ja2LainnyaElement = formElement.find('#Ja2Lainnya');
    var Ja3Element = formElement.find('#Ja3');
    var Ja3LainnyaElement = formElement.find('#Ja3Lainnya');
    var Ka1Element = formElement.find('#Ka1');
    var Ka2Element = formElement.find('#Ka2');
    var Ka3Element = formElement.find('#Ka3');
    var Ka4Element = formElement.find('#Ka4');
    var Kb1Element = formElement.find('#Kb1');
    var Kb2Element = formElement.find('#Kb2');
    var Kb3Element = formElement.find('#Kb3');
    var Kb4Element = formElement.find('#Kb4');
    var Kc1Element = formElement.find('#Kc1');
    var Kc2Element = formElement.find('#Kc2');
    var Kd1Element = formElement.find('#Kd1');
    var Kd2Element = formElement.find('#Kd2');
    var Kd3Element = formElement.find('#Kd3');
    var Ke1Element = formElement.find('#Ke1');
    var Ke2Element = formElement.find('#Ke2');
    var Kf1Element = formElement.find('#Kf1');
    var Kg1Element = formElement.find('#Kg1');
    var Kh1Element = formElement.find('#Kh1');
    var La1Element = formElement.find('#La1');
    var La2Element = formElement.find('#La2');
    var La3Element = formElement.find('#La3');
    var La4Element = formElement.find('#La4');
    var LaLainLainElement = formElement.find('#LaLainLain');
    var Lb1Element = formElement.find('#Lb1');
    var Lb2Element = formElement.find('#Lb2');
    var Lb3Element = formElement.find('#Lb3');
    var Ma1Element = formElement.find('#Ma1');
    var Ma2Element = formElement.find('#Ma2');
    var Mb1Element = formElement.find('#Mb1');
    var Mb2Element = formElement.find('#Mb2');
    var Mc1Element = formElement.find('#Mc1');
    var Mc2Element = formElement.find('#Mc2');
    var Mc3Element = formElement.find('#Mc3');
    var Md1Element = formElement.find('#Md1');
    var Md2Element = formElement.find('#Md2');
    var Me1Element = formElement.find('#Me1');
    var Me2Element = formElement.find('#Me2');
    var Me3Element = formElement.find('#Me3');
    var Mf1Element = formElement.find('#Mf1');
    var Mf2Element = formElement.find('#Mf2');
    var Na1Element = formElement.find('#Na1');
    var Na2Element = formElement.find('#Na2');
    var Nb1Element = formElement.find('#Nb1');
    var Nb2Element = formElement.find('#Nb2');
    var Nc1Element = formElement.find('#Nc1');
    var Nc2Element = formElement.find('#Nc2');
    var Nd1Element = formElement.find('#Nd1');
    var Nd2Element = formElement.find('#Nd2');
    var Nd3Element = formElement.find('#Nd3');
    var Ne1Element = formElement.find('#Ne1');
    var Ne2Element = formElement.find('#Ne2');
    var Oa1Element = formElement.find('#Oa1');
    var Oa2Element = formElement.find('#Oa2');
    var Ob1Element = formElement.find('#Ob1');
    var Ob2Element = formElement.find('#Ob2');
    var Oc1Element = formElement.find('#Oc1');
    var Oc2Element = formElement.find('#Oc2');
    var Od1Element = formElement.find('#Od1');
    var Od2Element = formElement.find('#Od2');
    var Oe1Element = formElement.find('#Oe1');
    var Oe2Element = formElement.find('#Oe2');
    var Pa1Element = formElement.find('#Pa1');
    var Pa2Element = formElement.find('#Pa2');
    var Pa2LainnyaElement = formElement.find('#Pa2Lainnya');
    var Pa3Element = formElement.find('#Pa3');
    var Pb1Element = formElement.find('#Pb1');
    var Pb2Element = formElement.find('#Pb2');
    var Pc1Element = formElement.find('#Pc1');
    var Pc2Element = formElement.find('#Pc2');
    var Pd1Element = formElement.find('#Pd1');
    var Pd2Element = formElement.find('#Pd2');
    var Pe1Element = formElement.find('#Pe1');
    var Pe2Element = formElement.find('#Pe2');
    var Qa1Element = formElement.find('#Qa1');
    var Qa2Element = formElement.find('#Qa2');
    var Qa2LainnyaElement = formElement.find('#Qa2Lainnya');
    var Qa3Element = formElement.find('#Qa3');
    var Qb1Element = formElement.find('#Qb1');
    var Qb2Element = formElement.find('#Qb2');
    var Qc1Element = formElement.find('#Qc1');
    var Qc2Element = formElement.find('#Qc2');
    var Qd1Element = formElement.find('#Qd1');
    var Qd2Element = formElement.find('#Qd2');
    var Qe1Element = formElement.find('#Qe1');
    var Qe2Element = formElement.find('#Qe2');
    var Ra1Element = formElement.find('#Ra1');
    var Ra2Element = formElement.find('#Ra2');
    var Rb1Element = formElement.find('#Rb1');
    var Rb2Element = formElement.find('#Rb2');
    var Rc1Element = formElement.find('#Rc1');
    var Rc2Element = formElement.find('#Rc2');
    var Rd1Element = formElement.find('#Rd1');
    var Rd2Element = formElement.find('#Rd2');
    var Re1Element = formElement.find('#Re1');
    var Re2Element = formElement.find('#Re2');
    var Rf1Element = formElement.find('#Rf1');
    var Rf2Element = formElement.find('#Rf2');
    var Sa1Element = formElement.find('#Sa1');
    var Sa2Element = formElement.find('#Sa2');
    var Sa3Element = formElement.find('#Sa3');
    var Sb1Element = formElement.find('#Sb1');
    var Sb2Element = formElement.find('#Sb2');
    var Sc1Element = formElement.find('#Sc1');
    var Sc2Element = formElement.find('#Sc2');
    var Sd1Element = formElement.find('#Sd1');
    var Sd2Element = formElement.find('#Sd2');
    var Sd3Element = formElement.find('#Sd3');
    var Sd4Element = formElement.find('#Sd4');
    var Se1Element = formElement.find('#Se1');
    var Se2Element = formElement.find('#Se2');
    var Ta1Element = formElement.find('#Ta1');
    var Ta2Element = formElement.find('#Ta2');
    var Tb1Element = formElement.find('#Tb1');
    var Tb2Element = formElement.find('#Tb2');
    var Tb21Element = formElement.find('#Tb21');
    var Tb22Element = formElement.find('#Tb22');
    var Tb23Element = formElement.find('#Tb23');
    var Tb24Element = formElement.find('#Tb24');
    var Tb25Element = formElement.find('#Tb25');
    var Tb25LainnyaElement = formElement.find('#Tb25Lainnya');
    var Tc1Element = formElement.find('#Tc1');
    var Tc1LainnyaElement = formElement.find('#Tc1Lainnya');
    var Tc2Element = formElement.find('#Tc2');
    var LaElement = formElement.find('#La');
    idElement.val("");
    id_pasienElement.val("");
    kunjunganElement.val("");
    tgl_periksaElement.val("");
    medrecElement.val("");
    aa1Element.val("");
    aa2Element.val("");
    aa3Element.val("");
    ab1Element.val("");
    ab2Element.val("");
    ab3Element.val("");
    ac1Element.val("");
    ac2Element.val("");
    ac3Element.val("");
    ad1Element.val("");
    ad2Element.val("");
    ad3Element.val("");
    ae1Element.val("");
    ae2Element.val("");
    ae3Element.val("");
    af1Element.val("");
    af2Element.val("");
    af3Element.val("");
    ag1Element.val("");
    ag2Element.val("");
    ag3Element.val("");
    ah1Element.val("");
    ah2Element.val("");
    ah3Element.val("");
    ai1Element.val("");
    ai2Element.val("");
    ai3Element.val("");
    aj1Element.val("");
    aj2Element.val("");
    aj3Element.val("");
    ak1Element.val("");
    ak2Element.val("");
    ak3Element.val("");
    al1Element.val("");
    al2Element.val("");
    al3Element.val("");
    am1Element.val("");
    am2Element.val("");
    am21Element.val("");
    am22Element.val("");
    am23Element.val("");
    am24Element.val("");
    am25Element.val("");
    am26Element.val("");
    am27Element.val("");
    am28Element.val("");
    am29Element.val("");
    am210Element.val("");
    am211Element.val("");
    am212Element.val("");
    am3Element.val("");
    an1Element.val("");
    an2Element.val("");
    ba1Element.val("");
    ba2Element.val("");
    ba3Element.val("");
    bb1Element.val("");
    bb2Element.val("");
    bb3Element.val("");
    bc1Element.val("");
    bc2Element.val("");
    bc3Element.val("");
    bd1Element.val("");
    bd2Element.val("");
    bd3Element.val("");
    be1Element.val("");
    be2Element.val("");
    be3Element.val("");
    bf1Element.val("");
    bf2Element.val("");
    bf3Element.val("");
    bg1Element.val("");
    bg2Element.val("");
    bg3Element.val("");
    bh1Element.val("");
    bh2Element.val("");
    bh3Element.val("");
    bi1Element.val("");
    bi2Element.val("");
    bi3Element.val("");
    bj1Element.val("");
    bj2Element.val("");
    bj3Element.val("");
    bk1Element.val("");
    bk2Element.val("");
    bk3Element.val("");
    ca1Element.val("");
    ca2Element.val("");
    ca3Element.val("");
    cb1Element.val("");
    cb2Element.val("");
    cb3Element.val("");
    cc1Element.val("");
    cc2Element.val("");
    cc3Element.val("");
    cd1Element.val("");
    cd2Element.val("");
    cd3Element.val("");
    ce1Element.val("");
    ce2Element.val("");
    ce3Element.val("");
    cf1Element.val("");
    cf2Element.val("");
    cf3Element.val("");
    cg1Element.val("");
    cg2Element.val("");
    cg3Element.val("");
    ch1Element.val("");
    ch2Element.val("");
    ci1Element.val("");
    ci2Element.val("");
    ci3Element.val("");
    da1Element.val("");
    da2Element.val("");
    da3Element.val("");
    db1Element.val("");
    db2Element.val("");
    db3Element.val("");
    dc1Element.val("");
    dc2Element.val("");
    dc3Element.val("");
    dd1Element.val("");
    dd2Element.val("");
    dd3Element.val("");
    de1Element.val("");
    de2Element.val("");
    de3Element.val("");
    df1Element.val("");
    df2Element.val("");
    df3Element.val("");
    dg1Element.val("");
    dg2Element.val("");
    dg3Element.val("");
    dh1Element.val("");
    dh2Element.val("");
    di1Element.val("");
    di2Element.val("");
    dj1Element.val("");
    dj2Element.val("");
    dj3Element.val("");
    Ea1Element.val("");
    Ea2Element.val("");
    Ea3Element.val("");
    Eb1Element.val("");
    Eb2Element.val("");
    Eb3Element.val("");
    Ec1Element.val("");
    Ec2Element.val("");
    Ec3Element.val("");
    Ed1Element.val("");
    Ed2Element.val("");
    Ed3Element.val("");
    Ee1Element.val("");
    Ee2Element.val("");
    Ee3Element.val("");
    Ef1Element.val("");
    Ef2Element.val("");
    Ef3Element.val("");
    Ef2LainnyaElement.val("");
    Eg1Element.val("");
    Eg2Element.val("");
    Eg3Element.val("");
    Eg4Element.val("");
    Eg5Element.val("");
    Eg6Element.val("");
    EgLainnyaElement.val("");
    Fa1Element.val("");
    Fa2Element.val("");
    Fb1Element.val("");
    Fb2Element.val("");
    Fc1Element.val("");
    Fc2Element.val("");
    Fd1Element.val("");
    Fd2Element.val("");
    Fe1Element.val("");
    Fe2Element.val("");
    Ff1Element.val("");
    Ff2Element.val("");
    Fg1Element.val("");
    Fg2Element.val("");
    Fg3Element.val("");
    Fh1Element.val("");
    Fh2Element.val("");
    Fi1Element.val("");
    Fi2Element.val("");
    Ga1Element.val("");
    Ga2Element.val("");
    Ga3Element.val("");
    Gb1Element.val("");
    Gb2Element.val("");
    Gb3Element.val("");
    Gc1Element.val("");
    Gd1Element.val("");
    Gd2Element.val("");
    Ge1Element.val("");
    Ge2Element.val("");
    Ge3Element.val("");
    Gf1Element.val("");
    Gf2Element.val("");
    Gg1Element.val("");
    Gg2Element.val("");
    Gg2LainnyaElement.val("");
    Gg3Element.val("");
    Gh1Element.val("");
    Gh2Element.val("");
    Ha1Element.val("");
    Ha2Element.val("");
    Ha3Element.val("");
    Hb1Element.val("");
    Hb2Element.val("");
    Hb3Element.val("");
    Hc1Element.val("");
    Hc2Element.val("");
    Hc3Element.val("");
    Hd1Element.val("");
    Hd2Element.val("");
    Hd3Element.val("");
    He1Element.val("");
    He2Element.val("");
    He3Element.val("");
    Hf1Element.val("");
    Hf2Element.val("");
    Hf3Element.val("");
    Hg1Element.val("");
    Hg2Element.val("");
    Hg3Element.val("");
    Hh1Element.val("");
    Hh2Element.val("");
    Hh3Element.val("");
    Hi1Element.val("");
    Hi2Element.val("");
    Hi3Element.val("");
    Hj1Element.val("");
    Hj2Element.val("");
    Hj3Element.val("");
    Ia1Element.val("");
    Ia2Element.val("");
    Ia3Element.val("");
    Ib1Element.val("");
    Ib2Element.val("");
    Ib3Element.val("");
    Ic1Element.val("");
    Ic2Element.val("");
    Ic3Element.val("");
    Id1Element.val("");
    Id2Element.val("");
    Id3Element.val("");
    Ie1Element.val("");
    Ie2Element.val("");
    Ie3Element.val("");
    If1Element.val("");
    If2Element.val("");
    If3Element.val("");
    Ig1Element.val("");
    Ig2Element.val("");
    Ig3Element.val("");
    Ih1Element.val("");
    Ih2Element.val("");
    Ih3Element.val("");
    Ii1Element.val("");
    Ii2Element.val("");
    Ii3Element.val("");
    Ja1Element.val("");
    Ja2Element.val("");
    Ja2LainnyaElement.val("");
    Ja3Element.val("");
    Ja3LainnyaElement.val("");
    Ka1Element.val("");
    Ka2Element.val("");
    Ka3Element.val("");
    Ka4Element.val("");
    Kb1Element.val("");
    Kb2Element.val("");
    Kb3Element.val("");
    Kb4Element.val("");
    Kc1Element.val("");
    Kc2Element.val("");
    Kd1Element.val("");
    Kd2Element.val("");
    Kd3Element.val("");
    Ke1Element.val("");
    Ke2Element.val("");
    Kf1Element.val("");
    Kg1Element.val("");
    Kh1Element.val("");
    La1Element.val("");
    La2Element.val("");
    La3Element.val("");
    La4Element.val("");
    LaLainLainElement.val("");
    Lb1Element.val("");
    Lb2Element.val("");
    Lb3Element.val("");
    Ma1Element.val("");
    Ma2Element.val("");
    Mb1Element.val("");
    Mb2Element.val("");
    Mc1Element.val("");
    Mc2Element.val("");
    Mc3Element.val("");
    Md1Element.val("");
    Md2Element.val("");
    Me1Element.val("");
    Me2Element.val("");
    Me3Element.val("");
    Mf1Element.val("");
    Mf2Element.val("");
    Na1Element.val("");
    Na2Element.val("");
    Nb1Element.val("");
    Nb2Element.val("");
    Nc1Element.val("");
    Nc2Element.val("");
    Nd1Element.val("");
    Nd2Element.val("");
    Nd3Element.val("");
    Ne1Element.val("");
    Ne2Element.val("");
    Oa1Element.val("");
    Oa2Element.val("");
    Ob1Element.val("");
    Ob2Element.val("");
    Oc1Element.val("");
    Oc2Element.val("");
    Od1Element.val("");
    Od2Element.val("");
    Oe1Element.val("");
    Oe2Element.val("");
    Pa1Element.val("");
    Pa2Element.val("");
    Pa2LainnyaElement.val("");
    Pa3Element.val("");
    Pb1Element.val("");
    Pb2Element.val("");
    Pc1Element.val("");
    Pc2Element.val("");
    Pd1Element.val("");
    Pd2Element.val("");
    Pe1Element.val("");
    Pe2Element.val("");
    Qa1Element.val("");
    Qa2Element.val("");
    Qa2LainnyaElement.val("");
    Qa3Element.val("");
    Qb1Element.val("");
    Qb2Element.val("");
    Qc1Element.val("");
    Qc2Element.val("");
    Qd1Element.val("");
    Qd2Element.val("");
    Qe1Element.val("");
    Qe2Element.val("");
    Ra1Element.val("");
    Ra2Element.val("");
    Rb1Element.val("");
    Rb2Element.val("");
    Rc1Element.val("");
    Rc2Element.val("");
    Rd1Element.val("");
    Rd2Element.val("");
    Re1Element.val("");
    Re2Element.val("");
    Rf1Element.val("");
    Rf2Element.val("");
    Sa1Element.val("");
    Sa2Element.val("");
    Sa3Element.val("");
    Sb1Element.val("");
    Sb2Element.val("");
    Sc1Element.val("");
    Sc2Element.val("");
    Sd1Element.val("");
    Sd2Element.val("");
    Sd3Element.val("");
    Sd4Element.val("");
    Se1Element.val("");
    Se2Element.val("");
    Ta1Element.val("");
    Ta2Element.val("");
    Tb1Element.val("");
    Tb2Element.val("");
    Tb21Element.val("");
    Tb22Element.val("");
    Tb23Element.val("");
    Tb24Element.val("");
    Tb25Element.val("");
    Tb25LainnyaElement.val("");
    Tc1Element.val("");
    Tc1LainnyaElement.val("");
    Tc2Element.val("");
    LaElement.val("");
  });
  $(".js-anamnesis-save-btn").click(function () {
    var _token = $(this).attr('data-token');

    var _url = $(this).attr('data-url');

    var formElement = $('#modal-create-anamnesis'); //var idElement = formElement.find('input#id');

    var id_pasienElement = formElement.find('#id_pasien');
    var kunjunganElement = formElement.find('#kunjungan');
    var tgl_periksaElement = formElement.find('#tgl_periksa');
    var medrecElement = formElement.find('#medrec');
    var aa1Element = formElement.find('#aa1');
    var aa2Element = formElement.find('#aa2');
    var aa3Element = formElement.find('#aa3');
    var ab1Element = formElement.find('#ab1');
    var ab2Element = formElement.find('#ab2');
    var ab3Element = formElement.find('#ab3');
    var ac1Element = formElement.find('#ac1');
    var ac2Element = formElement.find('#ac2');
    var ac3Element = formElement.find('#ac3');
    var ad1Element = formElement.find('#ad1');
    var ad2Element = formElement.find('#ad2');
    var ad3Element = formElement.find('#ad3');
    var ae1Element = formElement.find('#ae1');
    var ae2Element = formElement.find('#ae2');
    var ae3Element = formElement.find('#ae3');
    var af1Element = formElement.find('#af1');
    var af2Element = formElement.find('#af2');
    var af3Element = formElement.find('#af3');
    var ag1Element = formElement.find('#ag1');
    var ag2Element = formElement.find('#ag2');
    var ag3Element = formElement.find('#ag3');
    var ah1Element = formElement.find('#ah1');
    var ah2Element = formElement.find('#ah2');
    var ah3Element = formElement.find('#ah3');
    var ai1Element = formElement.find('#ai1');
    var ai2Element = formElement.find('#ai2');
    var ai3Element = formElement.find('#ai3');
    var aj1Element = formElement.find('#aj1');
    var aj2Element = formElement.find('#aj2');
    var aj3Element = formElement.find('#aj3');
    var ak1Element = formElement.find('#ak1');
    var ak2Element = formElement.find('#ak2');
    var ak3Element = formElement.find('#ak3');
    var al1Element = formElement.find('#al1');
    var al2Element = formElement.find('#al2');
    var al3Element = formElement.find('#al3');
    var am1Element = formElement.find('#am1');
    var am2Element = formElement.find('#am2');
    var am21Element = formElement.find('#am21');
    var am22Element = formElement.find('#am22');
    var am23Element = formElement.find('#am23');
    var am24Element = formElement.find('#am24');
    var am25Element = formElement.find('#am25');
    var am26Element = formElement.find('#am26');
    var am27Element = formElement.find('#am27');
    var am28Element = formElement.find('#am28');
    var am29Element = formElement.find('#am29');
    var am210Element = formElement.find('#am210');
    var am211Element = formElement.find('#am211');
    var am212Element = formElement.find('#am212');
    var am3Element = formElement.find('#am3');
    var an1Element = formElement.find('#an1');
    var an2Element = formElement.find('#an2');
    var ba1Element = formElement.find('#ba1');
    var ba2Element = formElement.find('#ba2');
    var ba3Element = formElement.find('#ba3');
    var bb1Element = formElement.find('#bb1');
    var bb2Element = formElement.find('#bb2');
    var bb3Element = formElement.find('#bb3');
    var bc1Element = formElement.find('#bc1');
    var bc2Element = formElement.find('#bc2');
    var bc3Element = formElement.find('#bc3');
    var bd1Element = formElement.find('#bd1');
    var bd2Element = formElement.find('#bd2');
    var bd3Element = formElement.find('#bd3');
    var be1Element = formElement.find('#be1');
    var be2Element = formElement.find('#be2');
    var be3Element = formElement.find('#be3');
    var bf1Element = formElement.find('#bf1');
    var bf2Element = formElement.find('#bf2');
    var bf3Element = formElement.find('#bf3');
    var bg1Element = formElement.find('#bg1');
    var bg2Element = formElement.find('#bg2');
    var bg3Element = formElement.find('#bg3');
    var bh1Element = formElement.find('#bh1');
    var bh2Element = formElement.find('#bh2');
    var bh3Element = formElement.find('#bh3');
    var bi1Element = formElement.find('#bi1');
    var bi2Element = formElement.find('#bi2');
    var bi3Element = formElement.find('#bi3');
    var bj1Element = formElement.find('#bj1');
    var bj2Element = formElement.find('#bj2');
    var bj3Element = formElement.find('#bj3');
    var bk1Element = formElement.find('#bk1');
    var bk2Element = formElement.find('#bk2');
    var bk3Element = formElement.find('#bk3');
    var ca1Element = formElement.find('#ca1');
    var ca2Element = formElement.find('#ca2');
    var ca3Element = formElement.find('#ca3');
    var cb1Element = formElement.find('#cb1');
    var cb2Element = formElement.find('#cb2');
    var cb3Element = formElement.find('#cb3');
    var cc1Element = formElement.find('#cc1');
    var cc2Element = formElement.find('#cc2');
    var cc3Element = formElement.find('#cc3');
    var cd1Element = formElement.find('#cd1');
    var cd2Element = formElement.find('#cd2');
    var cd3Element = formElement.find('#cd3');
    var ce1Element = formElement.find('#ce1');
    var ce2Element = formElement.find('#ce2');
    var ce3Element = formElement.find('#ce3');
    var cf1Element = formElement.find('#cf1');
    var cf2Element = formElement.find('#cf2');
    var cf3Element = formElement.find('#cf3');
    var cg1Element = formElement.find('#cg1');
    var cg2Element = formElement.find('#cg2');
    var cg3Element = formElement.find('#cg3');
    var ch1Element = formElement.find('#ch1');
    var ch2Element = formElement.find('#ch2');
    var ci1Element = formElement.find('#ci1');
    var ci2Element = formElement.find('#ci2');
    var ci3Element = formElement.find('#ci3');
    var da1Element = formElement.find('#da1');
    var da2Element = formElement.find('#da2');
    var da3Element = formElement.find('#da3');
    var db1Element = formElement.find('#db1');
    var db2Element = formElement.find('#db2');
    var db3Element = formElement.find('#db3');
    var dc1Element = formElement.find('#dc1');
    var dc2Element = formElement.find('#dc2');
    var dc3Element = formElement.find('#dc3');
    var dd1Element = formElement.find('#dd1');
    var dd2Element = formElement.find('#dd2');
    var dd3Element = formElement.find('#dd3');
    var de1Element = formElement.find('#de1');
    var de2Element = formElement.find('#de2');
    var de3Element = formElement.find('#de3');
    var df1Element = formElement.find('#df1');
    var df2Element = formElement.find('#df2');
    var df3Element = formElement.find('#df3');
    var dg1Element = formElement.find('#dg1');
    var dg2Element = formElement.find('#dg2');
    var dg3Element = formElement.find('#dg3');
    var dh1Element = formElement.find('#dh1');
    var dh2Element = formElement.find('#dh2');
    var di1Element = formElement.find('#di1');
    var di2Element = formElement.find('#di2');
    var dj1Element = formElement.find('#dj1');
    var dj2Element = formElement.find('#dj2');
    var dj3Element = formElement.find('#dj3');
    var Ea1Element = formElement.find('#Ea1');
    var Ea2Element = formElement.find('#Ea2');
    var Ea3Element = formElement.find('#Ea3');
    var Eb1Element = formElement.find('#Eb1');
    var Eb2Element = formElement.find('#Eb2');
    var Eb3Element = formElement.find('#Eb3');
    var Ec1Element = formElement.find('#Ec1');
    var Ec2Element = formElement.find('#Ec2');
    var Ec3Element = formElement.find('#Ec3');
    var Ed1Element = formElement.find('#Ed1');
    var Ed2Element = formElement.find('#Ed2');
    var Ed3Element = formElement.find('#Ed3');
    var Ee1Element = formElement.find('#Ee1');
    var Ee2Element = formElement.find('#Ee2');
    var Ee3Element = formElement.find('#Ee3');
    var Ef1Element = formElement.find('#Ef1');
    var Ef2Element = formElement.find('#Ef2');
    var Ef3Element = formElement.find('#Ef3');
    var Ef2LainnyaElement = formElement.find('#Ef2Lainnya');
    var Eg1Element = formElement.find('#Eg1');
    var Eg2Element = formElement.find('#Eg2');
    var Eg3Element = formElement.find('#Eg3');
    var Eg4Element = formElement.find('#Eg4');
    var Eg5Element = formElement.find('#Eg5');
    var Eg6Element = formElement.find('#Eg6');
    var EgLainnyaElement = formElement.find('#EgLainnya');
    var Fa1Element = formElement.find('#Fa1');
    var Fa2Element = formElement.find('#Fa2');
    var Fb1Element = formElement.find('#Fb1');
    var Fb2Element = formElement.find('#Fb2');
    var Fc1Element = formElement.find('#Fc1');
    var Fc2Element = formElement.find('#Fc2');
    var Fd1Element = formElement.find('#Fd1');
    var Fd2Element = formElement.find('#Fd2');
    var Fe1Element = formElement.find('#Fe1');
    var Fe2Element = formElement.find('#Fe2');
    var Ff1Element = formElement.find('#Ff1');
    var Ff2Element = formElement.find('#Ff2');
    var Fg1Element = formElement.find('#Fg1');
    var Fg2Element = formElement.find('#Fg2');
    var Fg3Element = formElement.find('#Fg3');
    var Fh1Element = formElement.find('#Fh1');
    var Fh2Element = formElement.find('#Fh2');
    var Fi1Element = formElement.find('#Fi1');
    var Fi2Element = formElement.find('#Fi2');
    var Ga1Element = formElement.find('#Ga1');
    var Ga2Element = formElement.find('#Ga2');
    var Ga3Element = formElement.find('#Ga3');
    var Gb1Element = formElement.find('#Gb1');
    var Gb2Element = formElement.find('#Gb2');
    var Gb3Element = formElement.find('#Gb3');
    var Gc1Element = formElement.find('#Gc1');
    var Gd1Element = formElement.find('#Gd1');
    var Gd2Element = formElement.find('#Gd2');
    var Ge1Element = formElement.find('#Ge1');
    var Ge2Element = formElement.find('#Ge2');
    var Ge3Element = formElement.find('#Ge3');
    var Gf1Element = formElement.find('#Gf1');
    var Gf2Element = formElement.find('#Gf2');
    var Gg1Element = formElement.find('#Gg1');
    var Gg2Element = formElement.find('#Gg2');
    var Gg2LainnyaElement = formElement.find('#Gg2Lainnya');
    var Gg3Element = formElement.find('#Gg3');
    var Gh1Element = formElement.find('#Gh1');
    var Gh2Element = formElement.find('#Gh2');
    var Ha1Element = formElement.find('#Ha1');
    var Ha2Element = formElement.find('#Ha2');
    var Ha3Element = formElement.find('#Ha3');
    var Hb1Element = formElement.find('#Hb1');
    var Hb2Element = formElement.find('#Hb2');
    var Hb3Element = formElement.find('#Hb3');
    var Hc1Element = formElement.find('#Hc1');
    var Hc2Element = formElement.find('#Hc2');
    var Hc3Element = formElement.find('#Hc3');
    var Hd1Element = formElement.find('#Hd1');
    var Hd2Element = formElement.find('#Hd2');
    var Hd3Element = formElement.find('#Hd3');
    var He1Element = formElement.find('#He1');
    var He2Element = formElement.find('#He2');
    var He3Element = formElement.find('#He3');
    var Hf1Element = formElement.find('#Hf1');
    var Hf2Element = formElement.find('#Hf2');
    var Hf3Element = formElement.find('#Hf3');
    var Hg1Element = formElement.find('#Hg1');
    var Hg2Element = formElement.find('#Hg2');
    var Hg3Element = formElement.find('#Hg3');
    var Hh1Element = formElement.find('#Hh1');
    var Hh2Element = formElement.find('#Hh2');
    var Hh3Element = formElement.find('#Hh3');
    var Hi1Element = formElement.find('#Hi1');
    var Hi2Element = formElement.find('#Hi2');
    var Hi3Element = formElement.find('#Hi3');
    var Hj1Element = formElement.find('#Hj1');
    var Hj2Element = formElement.find('#Hj2');
    var Hj3Element = formElement.find('#Hj3');
    var Ia1Element = formElement.find('#Ia1');
    var Ia2Element = formElement.find('#Ia2');
    var Ia3Element = formElement.find('#Ia3');
    var Ib1Element = formElement.find('#Ib1');
    var Ib2Element = formElement.find('#Ib2');
    var Ib3Element = formElement.find('#Ib3');
    var Ic1Element = formElement.find('#Ic1');
    var Ic2Element = formElement.find('#Ic2');
    var Ic3Element = formElement.find('#Ic3');
    var Id1Element = formElement.find('#Id1');
    var Id2Element = formElement.find('#Id2');
    var Id3Element = formElement.find('#Id3');
    var Ie1Element = formElement.find('#Ie1');
    var Ie2Element = formElement.find('#Ie2');
    var Ie3Element = formElement.find('#Ie3');
    var If1Element = formElement.find('#If1');
    var If2Element = formElement.find('#If2');
    var If3Element = formElement.find('#If3');
    var Ig1Element = formElement.find('#Ig1');
    var Ig2Element = formElement.find('#Ig2');
    var Ig3Element = formElement.find('#Ig3');
    var Ih1Element = formElement.find('#Ih1');
    var Ih2Element = formElement.find('#Ih2');
    var Ih3Element = formElement.find('#Ih3');
    var Ii1Element = formElement.find('#Ii1');
    var Ii2Element = formElement.find('#Ii2');
    var Ii3Element = formElement.find('#Ii3');
    var Ja1Element = formElement.find('#Ja1');
    var Ja2Element = formElement.find('#Ja2');
    var Ja2LainnyaElement = formElement.find('#Ja2Lainnya');
    var Ja3Element = formElement.find('#Ja3');
    var Ja3LainnyaElement = formElement.find('#Ja3Lainnya');
    var Ka1Element = formElement.find('#Ka1');
    var Ka2Element = formElement.find('#Ka2');
    var Ka3Element = formElement.find('#Ka3');
    var Ka4Element = formElement.find('#Ka4');
    var Kb1Element = formElement.find('#Kb1');
    var Kb2Element = formElement.find('#Kb2');
    var Kb3Element = formElement.find('#Kb3');
    var Kb4Element = formElement.find('#Kb4');
    var Kc1Element = formElement.find('#Kc1');
    var Kc2Element = formElement.find('#Kc2');
    var Kd1Element = formElement.find('#Kd1');
    var Kd2Element = formElement.find('#Kd2');
    var Kd3Element = formElement.find('#Kd3');
    var Ke1Element = formElement.find('#Ke1');
    var Ke2Element = formElement.find('#Ke2');
    var Kf1Element = formElement.find('#Kf1');
    var Kg1Element = formElement.find('#Kg1');
    var Kh1Element = formElement.find('#Kh1');
    var La1Element = formElement.find('#La1');
    var La2Element = formElement.find('#La2');
    var La3Element = formElement.find('#La3');
    var La4Element = formElement.find('#La4');
    var LaLainLainElement = formElement.find('#LaLainLain');
    var Lb1Element = formElement.find('#Lb1');
    var Lb2Element = formElement.find('#Lb2');
    var Lb3Element = formElement.find('#Lb3');
    var Ma1Element = formElement.find('#Ma1');
    var Ma2Element = formElement.find('#Ma2');
    var Mb1Element = formElement.find('#Mb1');
    var Mb2Element = formElement.find('#Mb2');
    var Mc1Element = formElement.find('#Mc1');
    var Mc2Element = formElement.find('#Mc2');
    var Mc3Element = formElement.find('#Mc3');
    var Md1Element = formElement.find('#Md1');
    var Md2Element = formElement.find('#Md2');
    var Me1Element = formElement.find('#Me1');
    var Me2Element = formElement.find('#Me2');
    var Me3Element = formElement.find('#Me3');
    var Mf1Element = formElement.find('#Mf1');
    var Mf2Element = formElement.find('#Mf2');
    var Na1Element = formElement.find('#Na1');
    var Na2Element = formElement.find('#Na2');
    var Nb1Element = formElement.find('#Nb1');
    var Nb2Element = formElement.find('#Nb2');
    var Nc1Element = formElement.find('#Nc1');
    var Nc2Element = formElement.find('#Nc2');
    var Nd1Element = formElement.find('#Nd1');
    var Nd2Element = formElement.find('#Nd2');
    var Nd3Element = formElement.find('#Nd3');
    var Ne1Element = formElement.find('#Ne1');
    var Ne2Element = formElement.find('#Ne2');
    var Oa1Element = formElement.find('#Oa1');
    var Oa2Element = formElement.find('#Oa2');
    var Ob1Element = formElement.find('#Ob1');
    var Ob2Element = formElement.find('#Ob2');
    var Oc1Element = formElement.find('#Oc1');
    var Oc2Element = formElement.find('#Oc2');
    var Od1Element = formElement.find('#Od1');
    var Od2Element = formElement.find('#Od2');
    var Oe1Element = formElement.find('#Oe1');
    var Oe2Element = formElement.find('#Oe2');
    var Pa1Element = formElement.find('#Pa1');
    var Pa2Element = formElement.find('#Pa2');
    var Pa2LainnyaElement = formElement.find('#Pa2Lainnya');
    var Pa3Element = formElement.find('#Pa3');
    var Pb1Element = formElement.find('#Pb1');
    var Pb2Element = formElement.find('#Pb2');
    var Pc1Element = formElement.find('#Pc1');
    var Pc2Element = formElement.find('#Pc2');
    var Pd1Element = formElement.find('#Pd1');
    var Pd2Element = formElement.find('#Pd2');
    var Pe1Element = formElement.find('#Pe1');
    var Pe2Element = formElement.find('#Pe2');
    var Qa1Element = formElement.find('#Qa1');
    var Qa2Element = formElement.find('#Qa2');
    var Qa2LainnyaElement = formElement.find('#Qa2Lainnya');
    var Qa3Element = formElement.find('#Qa3');
    var Qb1Element = formElement.find('#Qb1');
    var Qb2Element = formElement.find('#Qb2');
    var Qc1Element = formElement.find('#Qc1');
    var Qc2Element = formElement.find('#Qc2');
    var Qd1Element = formElement.find('#Qd1');
    var Qd2Element = formElement.find('#Qd2');
    var Qe1Element = formElement.find('#Qe1');
    var Qe2Element = formElement.find('#Qe2');
    var Ra1Element = formElement.find('#Ra1');
    var Ra2Element = formElement.find('#Ra2');
    var Rb1Element = formElement.find('#Rb1');
    var Rb2Element = formElement.find('#Rb2');
    var Rc1Element = formElement.find('#Rc1');
    var Rc2Element = formElement.find('#Rc2');
    var Rd1Element = formElement.find('#Rd1');
    var Rd2Element = formElement.find('#Rd2');
    var Re1Element = formElement.find('#Re1');
    var Re2Element = formElement.find('#Re2');
    var Rf1Element = formElement.find('#Rf1');
    var Rf2Element = formElement.find('#Rf2');
    var Sa1Element = formElement.find('#Sa1');
    var Sa2Element = formElement.find('#Sa2');
    var Sa3Element = formElement.find('#Sa3');
    var Sb1Element = formElement.find('#Sb1');
    var Sb2Element = formElement.find('#Sb2');
    var Sc1Element = formElement.find('#Sc1');
    var Sc2Element = formElement.find('#Sc2');
    var Sd1Element = formElement.find('#Sd1');
    var Sd2Element = formElement.find('#Sd2');
    var Sd3Element = formElement.find('#Sd3');
    var Sd4Element = formElement.find('#Sd4');
    var Se1Element = formElement.find('#Se1');
    var Se2Element = formElement.find('#Se2');
    var Ta1Element = formElement.find('#Ta1');
    var Ta2Element = formElement.find('#Ta2');
    var Tb1Element = formElement.find('#Tb1');
    var Tb2Element = formElement.find('#Tb2');
    var Tb21Element = formElement.find('#Tb21');
    var Tb22Element = formElement.find('#Tb22');
    var Tb23Element = formElement.find('#Tb23');
    var Tb24Element = formElement.find('#Tb24');
    var Tb25Element = formElement.find('#Tb25');
    var Tb25LainnyaElement = formElement.find('#Tb25Lainnya');
    var Tc1Element = formElement.find('#Tc1');
    var Tc1LainnyaElement = formElement.find('#Tc1Lainnya');
    var Tc2Element = formElement.find('#Tc2');
    var LaElement = formElement.find('#La');

    var _id_pasien = id_pasienElement.val();

    var _kunjungan = kunjunganElement.val();

    var _tgl_periksa = tgl_periksaElement.val();

    var _medrec = medrecElement.val();

    var _aa1 = aa1Element.val();

    var _aa2 = aa2Element.val();

    var _aa3 = aa3Element.val();

    var _ab1 = ab1Element.val();

    var _ab2 = ab2Element.val();

    var _ab3 = ab3Element.val();

    var _ac1 = ac1Element.val();

    var _ac2 = ac2Element.val();

    var _ac3 = ac3Element.val();

    var _ad1 = ad1Element.val();

    var _ad2 = ad2Element.val();

    var _ad3 = ad3Element.val();

    var _ae1 = ae1Element.val();

    var _ae2 = ae2Element.val();

    var _ae3 = ae3Element.val();

    var _af1 = af1Element.val();

    var _af2 = af2Element.val();

    var _af3 = af3Element.val();

    var _ag1 = ag1Element.val();

    var _ag2 = ag2Element.val();

    var _ag3 = ag3Element.val();

    var _ah1 = ah1Element.val();

    var _ah2 = ah2Element.val();

    var _ah3 = ah3Element.val();

    var _ai1 = ai1Element.val();

    var _ai2 = ai2Element.val();

    var _ai3 = ai3Element.val();

    var _aj1 = aj1Element.val();

    var _aj2 = aj2Element.val();

    var _aj3 = aj3Element.val();

    var _ak1 = ak1Element.val();

    var _ak2 = ak2Element.val();

    var _ak3 = ak3Element.val();

    var _al1 = al1Element.val();

    var _al2 = al2Element.val();

    var _al3 = al3Element.val();

    var _am1 = am1Element.val();

    var _am2 = am2Element.val();

    var _am21 = am21Element.val();

    var _am22 = am22Element.val();

    var _am23 = am23Element.val();

    var _am24 = am24Element.val();

    var _am25 = am25Element.val();

    var _am26 = am26Element.val();

    var _am27 = am27Element.val();

    var _am28 = am28Element.val();

    var _am29 = am29Element.val();

    var _am210 = am210Element.val();

    var _am211 = am211Element.val();

    var _am212 = am212Element.val();

    var _am3 = am3Element.val();

    var _an1 = an1Element.val();

    var _an2 = an2Element.val();

    var _ba1 = ba1Element.val();

    var _ba2 = ba2Element.val();

    var _ba3 = ba3Element.val();

    var _bb1 = bb1Element.val();

    var _bb2 = bb2Element.val();

    var _bb3 = bb3Element.val();

    var _bc1 = bc1Element.val();

    var _bc2 = bc2Element.val();

    var _bc3 = bc3Element.val();

    var _bd1 = bd1Element.val();

    var _bd2 = bd2Element.val();

    var _bd3 = bd3Element.val();

    var _be1 = be1Element.val();

    var _be2 = be2Element.val();

    var _be3 = be3Element.val();

    var _bf1 = bf1Element.val();

    var _bf2 = bf2Element.val();

    var _bf3 = bf3Element.val();

    var _bg1 = bg1Element.val();

    var _bg2 = bg2Element.val();

    var _bg3 = bg3Element.val();

    var _bh1 = bh1Element.val();

    var _bh2 = bh2Element.val();

    var _bh3 = bh3Element.val();

    var _bi1 = bi1Element.val();

    var _bi2 = bi2Element.val();

    var _bi3 = bi3Element.val();

    var _bj1 = bj1Element.val();

    var _bj2 = bj2Element.val();

    var _bj3 = bj3Element.val();

    var _bk1 = bk1Element.val();

    var _bk2 = bk2Element.val();

    var _bk3 = bk3Element.val();

    var _ca1 = ca1Element.val();

    var _ca2 = ca2Element.val();

    var _ca3 = ca3Element.val();

    var _cb1 = cb1Element.val();

    var _cb2 = cb2Element.val();

    var _cb3 = cb3Element.val();

    var _cc1 = cc1Element.val();

    var _cc2 = cc2Element.val();

    var _cc3 = cc3Element.val();

    var _cd1 = cd1Element.val();

    var _cd2 = cd2Element.val();

    var _cd3 = cd3Element.val();

    var _ce1 = ce1Element.val();

    var _ce2 = ce2Element.val();

    var _ce3 = ce3Element.val();

    var _cf1 = cf1Element.val();

    var _cf2 = cf2Element.val();

    var _cf3 = cf3Element.val();

    var _cg1 = cg1Element.val();

    var _cg2 = cg2Element.val();

    var _cg3 = cg3Element.val();

    var _ch1 = ch1Element.val();

    var _ch2 = ch2Element.val();

    var _ci1 = ci1Element.val();

    var _ci2 = ci2Element.val();

    var _ci3 = ci3Element.val();

    var _da1 = da1Element.val();

    var _da2 = da2Element.val();

    var _da3 = da3Element.val();

    var _db1 = db1Element.val();

    var _db2 = db2Element.val();

    var _db3 = db3Element.val();

    var _dc1 = dc1Element.val();

    var _dc2 = dc2Element.val();

    var _dc3 = dc3Element.val();

    var _dd1 = dd1Element.val();

    var _dd2 = dd2Element.val();

    var _dd3 = dd3Element.val();

    var _de1 = de1Element.val();

    var _de2 = de2Element.val();

    var _de3 = de3Element.val();

    var _df1 = df1Element.val();

    var _df2 = df2Element.val();

    var _df3 = df3Element.val();

    var _dg1 = dg1Element.val();

    var _dg2 = dg2Element.val();

    var _dg3 = dg3Element.val();

    var _dh1 = dh1Element.val();

    var _dh2 = dh2Element.val();

    var _di1 = di1Element.val();

    var _di2 = di2Element.val();

    var _dj1 = dj1Element.val();

    var _dj2 = dj2Element.val();

    var _dj3 = dj3Element.val();

    var _Ea1 = Ea1Element.val();

    var _Ea2 = Ea2Element.val();

    var _Ea3 = Ea3Element.val();

    var _Eb1 = Eb1Element.val();

    var _Eb2 = Eb2Element.val();

    var _Eb3 = Eb3Element.val();

    var _Ec1 = Ec1Element.val();

    var _Ec2 = Ec2Element.val();

    var _Ec3 = Ec3Element.val();

    var _Ed1 = Ed1Element.val();

    var _Ed2 = Ed2Element.val();

    var _Ed3 = Ed3Element.val();

    var _Ee1 = Ee1Element.val();

    var _Ee2 = Ee2Element.val();

    var _Ee3 = Ee3Element.val();

    var _Ef1 = Ef1Element.val();

    var _Ef2 = Ef2Element.val();

    var _Ef3 = Ef3Element.val();

    var _Ef2Lainnya = Ef2LainnyaElement.val();

    var _Eg1 = Eg1Element.val();

    var _Eg2 = Eg2Element.val();

    var _Eg3 = Eg3Element.val();

    var _Eg4 = Eg4Element.val();

    var _Eg5 = Eg5Element.val();

    var _Eg6 = Eg6Element.val();

    var _EgLainnya = EgLainnyaElement.val();

    var _Fa1 = Fa1Element.val();

    var _Fa2 = Fa2Element.val();

    var _Fb1 = Fb1Element.val();

    var _Fb2 = Fb2Element.val();

    var _Fc1 = Fc1Element.val();

    var _Fc2 = Fc2Element.val();

    var _Fd1 = Fd1Element.val();

    var _Fd2 = Fd2Element.val();

    var _Fe1 = Fe1Element.val();

    var _Fe2 = Fe2Element.val();

    var _Ff1 = Ff1Element.val();

    var _Ff2 = Ff2Element.val();

    var _Fg1 = Fg1Element.val();

    var _Fg2 = Fg2Element.val();

    var _Fg3 = Fg3Element.val();

    var _Fh1 = Fh1Element.val();

    var _Fh2 = Fh2Element.val();

    var _Fi1 = Fi1Element.val();

    var _Fi2 = Fi2Element.val();

    var _Ga1 = Ga1Element.val();

    var _Ga2 = Ga2Element.val();

    var _Ga3 = Ga3Element.val();

    var _Gb1 = Gb1Element.val();

    var _Gb2 = Gb2Element.val();

    var _Gb3 = Gb3Element.val();

    var _Gc1 = Gc1Element.val();

    var _Gd1 = Gd1Element.val();

    var _Gd2 = Gd2Element.val();

    var _Ge1 = Ge1Element.val();

    var _Ge2 = Ge2Element.val();

    var _Ge3 = Ge3Element.val();

    var _Gf1 = Gf1Element.val();

    var _Gf2 = Gf2Element.val();

    var _Gg1 = Gg1Element.val();

    var _Gg2 = Gg2Element.val();

    var _Gg2Lainnya = Gg2LainnyaElement.val();

    var _Gg3 = Gg3Element.val();

    var _Gh1 = Gh1Element.val();

    var _Gh2 = Gh2Element.val();

    var _Ha1 = Ha1Element.val();

    var _Ha2 = Ha2Element.val();

    var _Ha3 = Ha3Element.val();

    var _Hb1 = Hb1Element.val();

    var _Hb2 = Hb2Element.val();

    var _Hb3 = Hb3Element.val();

    var _Hc1 = Hc1Element.val();

    var _Hc2 = Hc2Element.val();

    var _Hc3 = Hc3Element.val();

    var _Hd1 = Hd1Element.val();

    var _Hd2 = Hd2Element.val();

    var _Hd3 = Hd3Element.val();

    var _He1 = He1Element.val();

    var _He2 = He2Element.val();

    var _He3 = He3Element.val();

    var _Hf1 = Hf1Element.val();

    var _Hf2 = Hf2Element.val();

    var _Hf3 = Hf3Element.val();

    var _Hg1 = Hg1Element.val();

    var _Hg2 = Hg2Element.val();

    var _Hg3 = Hg3Element.val();

    var _Hh1 = Hh1Element.val();

    var _Hh2 = Hh2Element.val();

    var _Hh3 = Hh3Element.val();

    var _Hi1 = Hi1Element.val();

    var _Hi2 = Hi2Element.val();

    var _Hi3 = Hi3Element.val();

    var _Hj1 = Hj1Element.val();

    var _Hj2 = Hj2Element.val();

    var _Hj3 = Hj3Element.val();

    var _Ia1 = Ia1Element.val();

    var _Ia2 = Ia2Element.val();

    var _Ia3 = Ia3Element.val();

    var _Ib1 = Ib1Element.val();

    var _Ib2 = Ib2Element.val();

    var _Ib3 = Ib3Element.val();

    var _Ic1 = Ic1Element.val();

    var _Ic2 = Ic2Element.val();

    var _Ic3 = Ic3Element.val();

    var _Id1 = Id1Element.val();

    var _Id2 = Id2Element.val();

    var _Id3 = Id3Element.val();

    var _Ie1 = Ie1Element.val();

    var _Ie2 = Ie2Element.val();

    var _Ie3 = Ie3Element.val();

    var _If1 = If1Element.val();

    var _If2 = If2Element.val();

    var _If3 = If3Element.val();

    var _Ig1 = Ig1Element.val();

    var _Ig2 = Ig2Element.val();

    var _Ig3 = Ig3Element.val();

    var _Ih1 = Ih1Element.val();

    var _Ih2 = Ih2Element.val();

    var _Ih3 = Ih3Element.val();

    var _Ii1 = Ii1Element.val();

    var _Ii2 = Ii2Element.val();

    var _Ii3 = Ii3Element.val();

    var _Ja1 = Ja1Element.val();

    var _Ja2 = Ja2Element.val();

    var _Ja2Lainnya = Ja2LainnyaElement.val();

    var _Ja3 = Ja3Element.val();

    var _Ja3Lainnya = Ja3LainnyaElement.val();

    var _Ka1 = Ka1Element.val();

    var _Ka2 = Ka2Element.val();

    var _Ka3 = Ka3Element.val();

    var _Ka4 = Ka4Element.val();

    var _Kb1 = Kb1Element.val();

    var _Kb2 = Kb2Element.val();

    var _Kb3 = Kb3Element.val();

    var _Kb4 = Kb4Element.val();

    var _Kc1 = Kc1Element.val();

    var _Kc2 = Kc2Element.val();

    var _Kd1 = Kd1Element.val();

    var _Kd2 = Kd2Element.val();

    var _Kd3 = Kd3Element.val();

    var _Ke1 = Ke1Element.val();

    var _Ke2 = Ke2Element.val();

    var _Kf1 = Kf1Element.val();

    var _Kg1 = Kg1Element.val();

    var _Kh1 = Kh1Element.val();

    var _La1 = La1Element.val();

    var _La2 = La2Element.val();

    var _La3 = La3Element.val();

    var _La4 = La4Element.val();

    var _LaLainLain = LaLainLainElement.val();

    var _Lb1 = Lb1Element.val();

    var _Lb2 = Lb2Element.val();

    var _Lb3 = Lb3Element.val();

    var _Ma1 = Ma1Element.val();

    var _Ma2 = Ma2Element.val();

    var _Mb1 = Mb1Element.val();

    var _Mb2 = Mb2Element.val();

    var _Mc1 = Mc1Element.val();

    var _Mc2 = Mc2Element.val();

    var _Mc3 = Mc3Element.val();

    var _Md1 = Md1Element.val();

    var _Md2 = Md2Element.val();

    var _Me1 = Me1Element.val();

    var _Me2 = Me2Element.val();

    var _Me3 = Me3Element.val();

    var _Mf1 = Mf1Element.val();

    var _Mf2 = Mf2Element.val();

    var _Na1 = Na1Element.val();

    var _Na2 = Na2Element.val();

    var _Nb1 = Nb1Element.val();

    var _Nb2 = Nb2Element.val();

    var _Nc1 = Nc1Element.val();

    var _Nc2 = Nc2Element.val();

    var _Nd1 = Nd1Element.val();

    var _Nd2 = Nd2Element.val();

    var _Nd3 = Nd3Element.val();

    var _Ne1 = Ne1Element.val();

    var _Ne2 = Ne2Element.val();

    var _Oa1 = Oa1Element.val();

    var _Oa2 = Oa2Element.val();

    var _Ob1 = Ob1Element.val();

    var _Ob2 = Ob2Element.val();

    var _Oc1 = Oc1Element.val();

    var _Oc2 = Oc2Element.val();

    var _Od1 = Od1Element.val();

    var _Od2 = Od2Element.val();

    var _Oe1 = Oe1Element.val();

    var _Oe2 = Oe2Element.val();

    var _Pa1 = Pa1Element.val();

    var _Pa2 = Pa2Element.val();

    var _Pa2Lainnya = Pa2LainnyaElement.val();

    var _Pa3 = Pa3Element.val();

    var _Pb1 = Pb1Element.val();

    var _Pb2 = Pb2Element.val();

    var _Pc1 = Pc1Element.val();

    var _Pc2 = Pc2Element.val();

    var _Pd1 = Pd1Element.val();

    var _Pd2 = Pd2Element.val();

    var _Pe1 = Pe1Element.val();

    var _Pe2 = Pe2Element.val();

    var _Qa1 = Qa1Element.val();

    var _Qa2 = Qa2Element.val();

    var _Qa2Lainnya = Qa2LainnyaElement.val();

    var _Qa3 = Qa3Element.val();

    var _Qb1 = Qb1Element.val();

    var _Qb2 = Qb2Element.val();

    var _Qc1 = Qc1Element.val();

    var _Qc2 = Qc2Element.val();

    var _Qd1 = Qd1Element.val();

    var _Qd2 = Qd2Element.val();

    var _Qe1 = Qe1Element.val();

    var _Qe2 = Qe2Element.val();

    var _Ra1 = Ra1Element.val();

    var _Ra2 = Ra2Element.val();

    var _Rb1 = Rb1Element.val();

    var _Rb2 = Rb2Element.val();

    var _Rc1 = Rc1Element.val();

    var _Rc2 = Rc2Element.val();

    var _Rd1 = Rd1Element.val();

    var _Rd2 = Rd2Element.val();

    var _Re1 = Re1Element.val();

    var _Re2 = Re2Element.val();

    var _Rf1 = Rf1Element.val();

    var _Rf2 = Rf2Element.val();

    var _Sa1 = Sa1Element.val();

    var _Sa2 = Sa2Element.val();

    var _Sa3 = Sa3Element.val();

    var _Sb1 = Sb1Element.val();

    var _Sb2 = Sb2Element.val();

    var _Sc1 = Sc1Element.val();

    var _Sc2 = Sc2Element.val();

    var _Sd1 = Sd1Element.val();

    var _Sd2 = Sd2Element.val();

    var _Sd3 = Sd3Element.val();

    var _Sd4 = Sd4Element.val();

    var _Se1 = Se1Element.val();

    var _Se2 = Se2Element.val();

    var _Ta1 = Ta1Element.val();

    var _Ta2 = Ta2Element.val();

    var _Tb1 = Tb1Element.val();

    var _Tb2 = Tb2Element.val();

    var _Tb21 = Tb21Element.val();

    var _Tb22 = Tb22Element.val();

    var _Tb23 = Tb23Element.val();

    var _Tb24 = Tb24Element.val();

    var _Tb25 = Tb25Element.val();

    var _Tb25Lainnya = Tb25LainnyaElement.val();

    var _Tc1 = Tc1Element.val();

    var _Tc1Lainnya = Tc1LainnyaElement.val();

    var _Tc2 = Tc2Element.val();

    var _La = LaElement.val();

    $.ajax({
      method: "POST",
      url: _url,
      data: {
        id_pasien: _id_pasien,
        kunjungan: _kunjungan,
        tgl_periksa: _tgl_periksa,
        medrec: _medrec,
        aa1: _aa1,
        aa2: _aa2,
        aa3: _aa3,
        ab1: _ab1,
        ab2: _ab2,
        ab3: _ab3,
        ac1: _ac1,
        ac2: _ac2,
        ac3: _ac3,
        ad1: _ad1,
        ad2: _ad2,
        ad3: _ad3,
        ae1: _ae1,
        ae2: _ae2,
        ae3: _ae3,
        af1: _af1,
        af2: _af2,
        af3: _af3,
        ag1: _ag1,
        ag2: _ag2,
        ag3: _ag3,
        ah1: _ah1,
        ah2: _ah2,
        ah3: _ah3,
        ai1: _ai1,
        ai2: _ai2,
        ai3: _ai3,
        aj1: _aj1,
        aj2: _aj2,
        aj3: _aj3,
        ak1: _ak1,
        ak2: _ak2,
        ak3: _ak3,
        al1: _al1,
        al2: _al2,
        al3: _al3,
        am1: _am1,
        am2: _am2,
        am21: _am21,
        am22: _am22,
        am23: _am23,
        am24: _am24,
        am25: _am25,
        am26: _am26,
        am27: _am27,
        am28: _am28,
        am29: _am29,
        am210: _am210,
        am211: _am211,
        am212: _am212,
        am3: _am3,
        an1: _an1,
        an2: _an2,
        ba1: _ba1,
        ba2: _ba2,
        ba3: _ba3,
        bb1: _bb1,
        bb2: _bb2,
        bb3: _bb3,
        bc1: _bc1,
        bc2: _bc2,
        bc3: _bc3,
        bd1: _bd1,
        bd2: _bd2,
        bd3: _bd3,
        be1: _be1,
        be2: _be2,
        be3: _be3,
        bf1: _bf1,
        bf2: _bf2,
        bf3: _bf3,
        bg1: _bg1,
        bg2: _bg2,
        bg3: _bg3,
        bh1: _bh1,
        bh2: _bh2,
        bh3: _bh3,
        bi1: _bi1,
        bi2: _bi2,
        bi3: _bi3,
        bj1: _bj1,
        bj2: _bj2,
        bj3: _bj3,
        bk1: _bk1,
        bk2: _bk2,
        bk3: _bk3,
        ca1: _ca1,
        ca2: _ca2,
        ca3: _ca3,
        cb1: _cb1,
        cb2: _cb2,
        cb3: _cb3,
        cc1: _cc1,
        cc2: _cc2,
        cc3: _cc3,
        cd1: _cd1,
        cd2: _cd2,
        cd3: _cd3,
        ce1: _ce1,
        ce2: _ce2,
        ce3: _ce3,
        cf1: _cf1,
        cf2: _cf2,
        cf3: _cf3,
        cg1: _cg1,
        cg2: _cg2,
        cg3: _cg3,
        ch1: _ch1,
        ch2: _ch2,
        ci1: _ci1,
        ci2: _ci2,
        ci3: _ci3,
        da1: _da1,
        da2: _da2,
        da3: _da3,
        db1: _db1,
        db2: _db2,
        db3: _db3,
        dc1: _dc1,
        dc2: _dc2,
        dc3: _dc3,
        dd1: _dd1,
        dd2: _dd2,
        dd3: _dd3,
        de1: _de1,
        de2: _de2,
        de3: _de3,
        df1: _df1,
        df2: _df2,
        df3: _df3,
        dg1: _dg1,
        dg2: _dg2,
        dg3: _dg3,
        dh1: _dh1,
        dh2: _dh2,
        di1: _di1,
        di2: _di2,
        dj1: _dj1,
        dj2: _dj2,
        dj3: _dj3,
        ea1: _Ea1,
        ea2: _Ea2,
        ea3: _Ea3,
        eb1: _Eb1,
        eb2: _Eb2,
        eb3: _Eb3,
        ec1: _Ec1,
        ec2: _Ec2,
        ec3: _Ec3,
        ed1: _Ed1,
        ed2: _Ed2,
        ed3: _Ed3,
        ee1: _Ee1,
        ee2: _Ee2,
        ee3: _Ee3,
        ef1: _Ef1,
        ef2: _Ef2,
        ef3: _Ef3,
        ef2Lainnya: _Ef2Lainnya,
        eg1: _Eg1,
        eg2: _Eg2,
        eg3: _Eg3,
        eg4: _Eg4,
        eg5: _Eg5,
        eg6: _Eg6,
        egLainnya: _EgLainnya,
        fa1: _Fa1,
        fa2: _Fa2,
        fb1: _Fb1,
        fb2: _Fb2,
        fc1: _Fc1,
        fc2: _Fc2,
        fd1: _Fd1,
        fd2: _Fd2,
        fe1: _Fe1,
        fe2: _Fe2,
        ff1: _Ff1,
        ff2: _Ff2,
        fg1: _Fg1,
        fg2: _Fg2,
        fg3: _Fg3,
        fh1: _Fh1,
        fh2: _Fh2,
        fi1: _Fi1,
        fi2: _Fi2,
        ga1: _Ga1,
        ga2: _Ga2,
        ga3: _Ga3,
        gb1: _Gb1,
        gb2: _Gb2,
        gb3: _Gb3,
        gc1: _Gc1,
        gd1: _Gd1,
        gd2: _Gd2,
        ge1: _Ge1,
        ge2: _Ge2,
        ge3: _Ge3,
        gf1: _Gf1,
        gf2: _Gf2,
        gg1: _Gg1,
        gg2: _Gg2,
        gg2Lainnya: _Gg2Lainnya,
        gg3: _Gg3,
        gh1: _Gh1,
        gh2: _Gh2,
        ha1: _Ha1,
        ha2: _Ha2,
        ha3: _Ha3,
        hb1: _Hb1,
        hb2: _Hb2,
        hb3: _Hb3,
        hc1: _Hc1,
        hc2: _Hc2,
        hc3: _Hc3,
        hd1: _Hd1,
        hd2: _Hd2,
        hd3: _Hd3,
        he1: _He1,
        he2: _He2,
        he3: _He3,
        hf1: _Hf1,
        hf2: _Hf2,
        hf3: _Hf3,
        hg1: _Hg1,
        hg2: _Hg2,
        hg3: _Hg3,
        hh1: _Hh1,
        hh2: _Hh2,
        hh3: _Hh3,
        hi1: _Hi1,
        hi2: _Hi2,
        hi3: _Hi3,
        hj1: _Hj1,
        hj2: _Hj2,
        hj3: _Hj3,
        ia1: _Ia1,
        ia2: _Ia2,
        ia3: _Ia3,
        ib1: _Ib1,
        ib2: _Ib2,
        ib3: _Ib3,
        ic1: _Ic1,
        ic2: _Ic2,
        ic3: _Ic3,
        id1: _Id1,
        id2: _Id2,
        id3: _Id3,
        ie1: _Ie1,
        ie2: _Ie2,
        ie3: _Ie3,
        if1: _If1,
        if2: _If2,
        if3: _If3,
        ig1: _Ig1,
        ig2: _Ig2,
        ig3: _Ig3,
        ih1: _Ih1,
        ih2: _Ih2,
        ih3: _Ih3,
        ii1: _Ii1,
        ii2: _Ii2,
        ii3: _Ii3,
        ja1: _Ja1,
        ja2: _Ja2,
        ja2Lainnya: _Ja2Lainnya,
        ja3: _Ja3,
        ja3Lainnya: _Ja3Lainnya,
        ka1: _Ka1,
        ka2: _Ka2,
        ka3: _Ka3,
        ka4: _Ka4,
        kb1: _Kb1,
        kb2: _Kb2,
        kb3: _Kb3,
        kb4: _Kb4,
        kc1: _Kc1,
        kc2: _Kc2,
        kd1: _Kd1,
        kd2: _Kd2,
        kd3: _Kd3,
        ke1: _Ke1,
        ke2: _Ke2,
        kf1: _Kf1,
        kg1: _Kg1,
        kh1: _Kh1,
        la1: _La1,
        la2: _La2,
        la3: _La3,
        la4: _La4,
        laLainLain: _LaLainLain,
        lb1: _Lb1,
        lb2: _Lb2,
        lb3: _Lb3,
        ma1: _Ma1,
        ma2: _Ma2,
        mb1: _Mb1,
        mb2: _Mb2,
        mc1: _Mc1,
        mc2: _Mc2,
        mc3: _Mc3,
        md1: _Md1,
        md2: _Md2,
        me1: _Me1,
        me2: _Me2,
        me3: _Me3,
        mf1: _Mf1,
        mf2: _Mf2,
        na1: _Na1,
        na2: _Na2,
        nb1: _Nb1,
        nb2: _Nb2,
        nc1: _Nc1,
        nc2: _Nc2,
        nd1: _Nd1,
        nd2: _Nd2,
        nd3: _Nd3,
        ne1: _Ne1,
        ne2: _Ne2,
        oa1: _Oa1,
        oa2: _Oa2,
        ob1: _Ob1,
        ob2: _Ob2,
        oc1: _Oc1,
        oc2: _Oc2,
        od1: _Od1,
        od2: _Od2,
        oe1: _Oe1,
        oe2: _Oe2,
        pa1: _Pa1,
        pa2: _Pa2,
        pa2Lainnya: _Pa2Lainnya,
        pa3: _Pa3,
        pb1: _Pb1,
        pb2: _Pb2,
        pc1: _Pc1,
        pc2: _Pc2,
        pd1: _Pd1,
        pd2: _Pd2,
        pe1: _Pe1,
        pe2: _Pe2,
        qa1: _Qa1,
        qa2: _Qa2,
        qa2Lainnya: _Qa2Lainnya,
        qa3: _Qa3,
        qb1: _Qb1,
        qb2: _Qb2,
        qc1: _Qc1,
        qc2: _Qc2,
        qd1: _Qd1,
        qd2: _Qd2,
        qe1: _Qe1,
        qe2: _Qe2,
        ra1: _Ra1,
        ra2: _Ra2,
        rb1: _Rb1,
        rb2: _Rb2,
        rc1: _Rc1,
        rc2: _Rc2,
        rd1: _Rd1,
        rd2: _Rd2,
        re1: _Re1,
        re2: _Re2,
        rf1: _Rf1,
        rf2: _Rf2,
        sa1: _Sa1,
        sa2: _Sa2,
        sa3: _Sa3,
        sb1: _Sb1,
        sb2: _Sb2,
        sc1: _Sc1,
        sc2: _Sc2,
        sd1: _Sd1,
        sd2: _Sd2,
        sd3: _Sd3,
        sd4: _Sd4,
        se1: _Se1,
        se2: _Se2,
        ta1: _Ta1,
        ta2: _Ta2,
        tb1: _Tb1,
        tb2: _Tb2,
        tb21: _Tb21,
        tb22: _Tb22,
        tb23: _Tb23,
        tb24: _Tb24,
        tb25: _Tb25,
        tb25Lainnya: _Tb25Lainnya,
        tc1: _Tc1,
        tc1Lainnya: _Tc1Lainnya,
        tc2: _Tc2,
        la: _La,
        _token: _token
      }
    }).done(function (_return) {
      $("#modal-create-anamnesis").modal("hide");
      ShowMessageBox("Success", "Data successfully Saved!", 1, 'OK', '.js-data-anamnesis');
    });
  });
  $('#modal-edit-anamnesis').on('show.bs.modal', function (e) {
    var id = e.relatedTarget.dataset.id;
    $(this).attr('data-id', id);

    var _url = $(this).attr('data-url');

    var _token = $(this).attr('data-token');

    var formElement = $(this);
    var idElement = formElement.find('input#id');
    var id_pasienElement = formElement.find('#id_pasien');
    var kunjunganElement = formElement.find('#kunjungan');
    var tgl_periksaElement = formElement.find('#tgl_periksa');
    var medrecElement = formElement.find('#medrec');
    var aa1Element = formElement.find('#aa1');
    var aa2Element = formElement.find('#aa2');
    var aa3Element = formElement.find('#aa3');
    var ab1Element = formElement.find('#ab1');
    var ab2Element = formElement.find('#ab2');
    var ab3Element = formElement.find('#ab3');
    var ac1Element = formElement.find('#ac1');
    var ac2Element = formElement.find('#ac2');
    var ac3Element = formElement.find('#ac3');
    var ad1Element = formElement.find('#ad1');
    var ad2Element = formElement.find('#ad2');
    var ad3Element = formElement.find('#ad3');
    var ae1Element = formElement.find('#ae1');
    var ae2Element = formElement.find('#ae2');
    var ae3Element = formElement.find('#ae3');
    var af1Element = formElement.find('#af1');
    var af2Element = formElement.find('#af2');
    var af3Element = formElement.find('#af3');
    var ag1Element = formElement.find('#ag1');
    var ag2Element = formElement.find('#ag2');
    var ag3Element = formElement.find('#ag3');
    var ah1Element = formElement.find('#ah1');
    var ah2Element = formElement.find('#ah2');
    var ah3Element = formElement.find('#ah3');
    var ai1Element = formElement.find('#ai1');
    var ai2Element = formElement.find('#ai2');
    var ai3Element = formElement.find('#ai3');
    var aj1Element = formElement.find('#aj1');
    var aj2Element = formElement.find('#aj2');
    var aj3Element = formElement.find('#aj3');
    var ak1Element = formElement.find('#ak1');
    var ak2Element = formElement.find('#ak2');
    var ak3Element = formElement.find('#ak3');
    var al1Element = formElement.find('#al1');
    var al2Element = formElement.find('#al2');
    var al3Element = formElement.find('#al3');
    var am1Element = formElement.find('#am1');
    var am2Element = formElement.find('#am2');
    var am21Element = formElement.find('#am21');
    var am22Element = formElement.find('#am22');
    var am23Element = formElement.find('#am23');
    var am24Element = formElement.find('#am24');
    var am25Element = formElement.find('#am25');
    var am26Element = formElement.find('#am26');
    var am27Element = formElement.find('#am27');
    var am28Element = formElement.find('#am28');
    var am29Element = formElement.find('#am29');
    var am210Element = formElement.find('#am210');
    var am211Element = formElement.find('#am211');
    var am212Element = formElement.find('#am212');
    var am3Element = formElement.find('#am3');
    var an1Element = formElement.find('#an1');
    var an2Element = formElement.find('#an2');
    var ba1Element = formElement.find('#ba1');
    var ba2Element = formElement.find('#ba2');
    var ba3Element = formElement.find('#ba3');
    var bb1Element = formElement.find('#bb1');
    var bb2Element = formElement.find('#bb2');
    var bb3Element = formElement.find('#bb3');
    var bc1Element = formElement.find('#bc1');
    var bc2Element = formElement.find('#bc2');
    var bc3Element = formElement.find('#bc3');
    var bd1Element = formElement.find('#bd1');
    var bd2Element = formElement.find('#bd2');
    var bd3Element = formElement.find('#bd3');
    var be1Element = formElement.find('#be1');
    var be2Element = formElement.find('#be2');
    var be3Element = formElement.find('#be3');
    var bf1Element = formElement.find('#bf1');
    var bf2Element = formElement.find('#bf2');
    var bf3Element = formElement.find('#bf3');
    var bg1Element = formElement.find('#bg1');
    var bg2Element = formElement.find('#bg2');
    var bg3Element = formElement.find('#bg3');
    var bh1Element = formElement.find('#bh1');
    var bh2Element = formElement.find('#bh2');
    var bh3Element = formElement.find('#bh3');
    var bi1Element = formElement.find('#bi1');
    var bi2Element = formElement.find('#bi2');
    var bi3Element = formElement.find('#bi3');
    var bj1Element = formElement.find('#bj1');
    var bj2Element = formElement.find('#bj2');
    var bj3Element = formElement.find('#bj3');
    var bk1Element = formElement.find('#bk1');
    var bk2Element = formElement.find('#bk2');
    var bk3Element = formElement.find('#bk3');
    var ca1Element = formElement.find('#ca1');
    var ca2Element = formElement.find('#ca2');
    var ca3Element = formElement.find('#ca3');
    var cb1Element = formElement.find('#cb1');
    var cb2Element = formElement.find('#cb2');
    var cb3Element = formElement.find('#cb3');
    var cc1Element = formElement.find('#cc1');
    var cc2Element = formElement.find('#cc2');
    var cc3Element = formElement.find('#cc3');
    var cd1Element = formElement.find('#cd1');
    var cd2Element = formElement.find('#cd2');
    var cd3Element = formElement.find('#cd3');
    var ce1Element = formElement.find('#ce1');
    var ce2Element = formElement.find('#ce2');
    var ce3Element = formElement.find('#ce3');
    var cf1Element = formElement.find('#cf1');
    var cf2Element = formElement.find('#cf2');
    var cf3Element = formElement.find('#cf3');
    var cg1Element = formElement.find('#cg1');
    var cg2Element = formElement.find('#cg2');
    var cg3Element = formElement.find('#cg3');
    var ch1Element = formElement.find('#ch1');
    var ch2Element = formElement.find('#ch2');
    var ci1Element = formElement.find('#ci1');
    var ci2Element = formElement.find('#ci2');
    var ci3Element = formElement.find('#ci3');
    var da1Element = formElement.find('#da1');
    var da2Element = formElement.find('#da2');
    var da3Element = formElement.find('#da3');
    var db1Element = formElement.find('#db1');
    var db2Element = formElement.find('#db2');
    var db3Element = formElement.find('#db3');
    var dc1Element = formElement.find('#dc1');
    var dc2Element = formElement.find('#dc2');
    var dc3Element = formElement.find('#dc3');
    var dd1Element = formElement.find('#dd1');
    var dd2Element = formElement.find('#dd2');
    var dd3Element = formElement.find('#dd3');
    var de1Element = formElement.find('#de1');
    var de2Element = formElement.find('#de2');
    var de3Element = formElement.find('#de3');
    var df1Element = formElement.find('#df1');
    var df2Element = formElement.find('#df2');
    var df3Element = formElement.find('#df3');
    var dg1Element = formElement.find('#dg1');
    var dg2Element = formElement.find('#dg2');
    var dg3Element = formElement.find('#dg3');
    var dh1Element = formElement.find('#dh1');
    var dh2Element = formElement.find('#dh2');
    var di1Element = formElement.find('#di1');
    var di2Element = formElement.find('#di2');
    var dj1Element = formElement.find('#dj1');
    var dj2Element = formElement.find('#dj2');
    var dj3Element = formElement.find('#dj3');
    var Ea1Element = formElement.find('#Ea1');
    var Ea2Element = formElement.find('#Ea2');
    var Ea3Element = formElement.find('#Ea3');
    var Eb1Element = formElement.find('#Eb1');
    var Eb2Element = formElement.find('#Eb2');
    var Eb3Element = formElement.find('#Eb3');
    var Ec1Element = formElement.find('#Ec1');
    var Ec2Element = formElement.find('#Ec2');
    var Ec3Element = formElement.find('#Ec3');
    var Ed1Element = formElement.find('#Ed1');
    var Ed2Element = formElement.find('#Ed2');
    var Ed3Element = formElement.find('#Ed3');
    var Ee1Element = formElement.find('#Ee1');
    var Ee2Element = formElement.find('#Ee2');
    var Ee3Element = formElement.find('#Ee3');
    var Ef1Element = formElement.find('#Ef1');
    var Ef2Element = formElement.find('#Ef2');
    var Ef3Element = formElement.find('#Ef3');
    var Ef2LainnyaElement = formElement.find('#Ef2Lainnya');
    var Eg1Element = formElement.find('#Eg1');
    var Eg2Element = formElement.find('#Eg2');
    var Eg3Element = formElement.find('#Eg3');
    var Eg4Element = formElement.find('#Eg4');
    var Eg5Element = formElement.find('#Eg5');
    var Eg6Element = formElement.find('#Eg6');
    var EgLainnyaElement = formElement.find('#EgLainnya');
    var Fa1Element = formElement.find('#Fa1');
    var Fa2Element = formElement.find('#Fa2');
    var Fb1Element = formElement.find('#Fb1');
    var Fb2Element = formElement.find('#Fb2');
    var Fc1Element = formElement.find('#Fc1');
    var Fc2Element = formElement.find('#Fc2');
    var Fd1Element = formElement.find('#Fd1');
    var Fd2Element = formElement.find('#Fd2');
    var Fe1Element = formElement.find('#Fe1');
    var Fe2Element = formElement.find('#Fe2');
    var Ff1Element = formElement.find('#Ff1');
    var Ff2Element = formElement.find('#Ff2');
    var Fg1Element = formElement.find('#Fg1');
    var Fg2Element = formElement.find('#Fg2');
    var Fg3Element = formElement.find('#Fg3');
    var Fh1Element = formElement.find('#Fh1');
    var Fh2Element = formElement.find('#Fh2');
    var Fi1Element = formElement.find('#Fi1');
    var Fi2Element = formElement.find('#Fi2');
    var Ga1Element = formElement.find('#Ga1');
    var Ga2Element = formElement.find('#Ga2');
    var Ga3Element = formElement.find('#Ga3');
    var Gb1Element = formElement.find('#Gb1');
    var Gb2Element = formElement.find('#Gb2');
    var Gb3Element = formElement.find('#Gb3');
    var Gc1Element = formElement.find('#Gc1');
    var Gd1Element = formElement.find('#Gd1');
    var Gd2Element = formElement.find('#Gd2');
    var Ge1Element = formElement.find('#Ge1');
    var Ge2Element = formElement.find('#Ge2');
    var Ge3Element = formElement.find('#Ge3');
    var Gf1Element = formElement.find('#Gf1');
    var Gf2Element = formElement.find('#Gf2');
    var Gg1Element = formElement.find('#Gg1');
    var Gg2Element = formElement.find('#Gg2');
    var Gg2LainnyaElement = formElement.find('#Gg2Lainnya');
    var Gg3Element = formElement.find('#Gg3');
    var Gh1Element = formElement.find('#Gh1');
    var Gh2Element = formElement.find('#Gh2');
    var Ha1Element = formElement.find('#Ha1');
    var Ha2Element = formElement.find('#Ha2');
    var Ha3Element = formElement.find('#Ha3');
    var Hb1Element = formElement.find('#Hb1');
    var Hb2Element = formElement.find('#Hb2');
    var Hb3Element = formElement.find('#Hb3');
    var Hc1Element = formElement.find('#Hc1');
    var Hc2Element = formElement.find('#Hc2');
    var Hc3Element = formElement.find('#Hc3');
    var Hd1Element = formElement.find('#Hd1');
    var Hd2Element = formElement.find('#Hd2');
    var Hd3Element = formElement.find('#Hd3');
    var He1Element = formElement.find('#He1');
    var He2Element = formElement.find('#He2');
    var He3Element = formElement.find('#He3');
    var Hf1Element = formElement.find('#Hf1');
    var Hf2Element = formElement.find('#Hf2');
    var Hf3Element = formElement.find('#Hf3');
    var Hg1Element = formElement.find('#Hg1');
    var Hg2Element = formElement.find('#Hg2');
    var Hg3Element = formElement.find('#Hg3');
    var Hh1Element = formElement.find('#Hh1');
    var Hh2Element = formElement.find('#Hh2');
    var Hh3Element = formElement.find('#Hh3');
    var Hi1Element = formElement.find('#Hi1');
    var Hi2Element = formElement.find('#Hi2');
    var Hi3Element = formElement.find('#Hi3');
    var Hj1Element = formElement.find('#Hj1');
    var Hj2Element = formElement.find('#Hj2');
    var Hj3Element = formElement.find('#Hj3');
    var Ia1Element = formElement.find('#Ia1');
    var Ia2Element = formElement.find('#Ia2');
    var Ia3Element = formElement.find('#Ia3');
    var Ib1Element = formElement.find('#Ib1');
    var Ib2Element = formElement.find('#Ib2');
    var Ib3Element = formElement.find('#Ib3');
    var Ic1Element = formElement.find('#Ic1');
    var Ic2Element = formElement.find('#Ic2');
    var Ic3Element = formElement.find('#Ic3');
    var Id1Element = formElement.find('#Id1');
    var Id2Element = formElement.find('#Id2');
    var Id3Element = formElement.find('#Id3');
    var Ie1Element = formElement.find('#Ie1');
    var Ie2Element = formElement.find('#Ie2');
    var Ie3Element = formElement.find('#Ie3');
    var If1Element = formElement.find('#If1');
    var If2Element = formElement.find('#If2');
    var If3Element = formElement.find('#If3');
    var Ig1Element = formElement.find('#Ig1');
    var Ig2Element = formElement.find('#Ig2');
    var Ig3Element = formElement.find('#Ig3');
    var Ih1Element = formElement.find('#Ih1');
    var Ih2Element = formElement.find('#Ih2');
    var Ih3Element = formElement.find('#Ih3');
    var Ii1Element = formElement.find('#Ii1');
    var Ii2Element = formElement.find('#Ii2');
    var Ii3Element = formElement.find('#Ii3');
    var Ja1Element = formElement.find('#Ja1');
    var Ja2Element = formElement.find('#Ja2');
    var Ja2LainnyaElement = formElement.find('#Ja2Lainnya');
    var Ja3Element = formElement.find('#Ja3');
    var Ja3LainnyaElement = formElement.find('#Ja3Lainnya');
    var Ka1Element = formElement.find('#Ka1');
    var Ka2Element = formElement.find('#Ka2');
    var Ka3Element = formElement.find('#Ka3');
    var Ka4Element = formElement.find('#Ka4');
    var Kb1Element = formElement.find('#Kb1');
    var Kb2Element = formElement.find('#Kb2');
    var Kb3Element = formElement.find('#Kb3');
    var Kb4Element = formElement.find('#Kb4');
    var Kc1Element = formElement.find('#Kc1');
    var Kc2Element = formElement.find('#Kc2');
    var Kd1Element = formElement.find('#Kd1');
    var Kd2Element = formElement.find('#Kd2');
    var Kd3Element = formElement.find('#Kd3');
    var Ke1Element = formElement.find('#Ke1');
    var Ke2Element = formElement.find('#Ke2');
    var Kf1Element = formElement.find('#Kf1');
    var Kg1Element = formElement.find('#Kg1');
    var Kh1Element = formElement.find('#Kh1');
    var La1Element = formElement.find('#La1');
    var La2Element = formElement.find('#La2');
    var La3Element = formElement.find('#La3');
    var La4Element = formElement.find('#La4');
    var LaLainLainElement = formElement.find('#LaLainLain');
    var Lb1Element = formElement.find('#Lb1');
    var Lb2Element = formElement.find('#Lb2');
    var Lb3Element = formElement.find('#Lb3');
    var Ma1Element = formElement.find('#Ma1');
    var Ma2Element = formElement.find('#Ma2');
    var Mb1Element = formElement.find('#Mb1');
    var Mb2Element = formElement.find('#Mb2');
    var Mc1Element = formElement.find('#Mc1');
    var Mc2Element = formElement.find('#Mc2');
    var Mc3Element = formElement.find('#Mc3');
    var Md1Element = formElement.find('#Md1');
    var Md2Element = formElement.find('#Md2');
    var Me1Element = formElement.find('#Me1');
    var Me2Element = formElement.find('#Me2');
    var Me3Element = formElement.find('#Me3');
    var Mf1Element = formElement.find('#Mf1');
    var Mf2Element = formElement.find('#Mf2');
    var Na1Element = formElement.find('#Na1');
    var Na2Element = formElement.find('#Na2');
    var Nb1Element = formElement.find('#Nb1');
    var Nb2Element = formElement.find('#Nb2');
    var Nc1Element = formElement.find('#Nc1');
    var Nc2Element = formElement.find('#Nc2');
    var Nd1Element = formElement.find('#Nd1');
    var Nd2Element = formElement.find('#Nd2');
    var Nd3Element = formElement.find('#Nd3');
    var Ne1Element = formElement.find('#Ne1');
    var Ne2Element = formElement.find('#Ne2');
    var Oa1Element = formElement.find('#Oa1');
    var Oa2Element = formElement.find('#Oa2');
    var Ob1Element = formElement.find('#Ob1');
    var Ob2Element = formElement.find('#Ob2');
    var Oc1Element = formElement.find('#Oc1');
    var Oc2Element = formElement.find('#Oc2');
    var Od1Element = formElement.find('#Od1');
    var Od2Element = formElement.find('#Od2');
    var Oe1Element = formElement.find('#Oe1');
    var Oe2Element = formElement.find('#Oe2');
    var Pa1Element = formElement.find('#Pa1');
    var Pa2Element = formElement.find('#Pa2');
    var Pa2LainnyaElement = formElement.find('#Pa2Lainnya');
    var Pa3Element = formElement.find('#Pa3');
    var Pb1Element = formElement.find('#Pb1');
    var Pb2Element = formElement.find('#Pb2');
    var Pc1Element = formElement.find('#Pc1');
    var Pc2Element = formElement.find('#Pc2');
    var Pd1Element = formElement.find('#Pd1');
    var Pd2Element = formElement.find('#Pd2');
    var Pe1Element = formElement.find('#Pe1');
    var Pe2Element = formElement.find('#Pe2');
    var Qa1Element = formElement.find('#Qa1');
    var Qa2Element = formElement.find('#Qa2');
    var Qa2LainnyaElement = formElement.find('#Qa2Lainnya');
    var Qa3Element = formElement.find('#Qa3');
    var Qb1Element = formElement.find('#Qb1');
    var Qb2Element = formElement.find('#Qb2');
    var Qc1Element = formElement.find('#Qc1');
    var Qc2Element = formElement.find('#Qc2');
    var Qd1Element = formElement.find('#Qd1');
    var Qd2Element = formElement.find('#Qd2');
    var Qe1Element = formElement.find('#Qe1');
    var Qe2Element = formElement.find('#Qe2');
    var Ra1Element = formElement.find('#Ra1');
    var Ra2Element = formElement.find('#Ra2');
    var Rb1Element = formElement.find('#Rb1');
    var Rb2Element = formElement.find('#Rb2');
    var Rc1Element = formElement.find('#Rc1');
    var Rc2Element = formElement.find('#Rc2');
    var Rd1Element = formElement.find('#Rd1');
    var Rd2Element = formElement.find('#Rd2');
    var Re1Element = formElement.find('#Re1');
    var Re2Element = formElement.find('#Re2');
    var Rf1Element = formElement.find('#Rf1');
    var Rf2Element = formElement.find('#Rf2');
    var Sa1Element = formElement.find('#Sa1');
    var Sa2Element = formElement.find('#Sa2');
    var Sa3Element = formElement.find('#Sa3');
    var Sb1Element = formElement.find('#Sb1');
    var Sb2Element = formElement.find('#Sb2');
    var Sc1Element = formElement.find('#Sc1');
    var Sc2Element = formElement.find('#Sc2');
    var Sd1Element = formElement.find('#Sd1');
    var Sd2Element = formElement.find('#Sd2');
    var Sd3Element = formElement.find('#Sd3');
    var Sd4Element = formElement.find('#Sd4');
    var Se1Element = formElement.find('#Se1');
    var Se2Element = formElement.find('#Se2');
    var Ta1Element = formElement.find('#Ta1');
    var Ta2Element = formElement.find('#Ta2');
    var Tb1Element = formElement.find('#Tb1');
    var Tb2Element = formElement.find('#Tb2');
    var Tb21Element = formElement.find('#Tb21');
    var Tb22Element = formElement.find('#Tb22');
    var Tb23Element = formElement.find('#Tb23');
    var Tb24Element = formElement.find('#Tb24');
    var Tb25Element = formElement.find('#Tb25');
    var Tb25LainnyaElement = formElement.find('#Tb25Lainnya');
    var Tc1Element = formElement.find('#Tc1');
    var Tc1LainnyaElement = formElement.find('#Tc1Lainnya');
    var Tc2Element = formElement.find('#Tc2');
    var LaElement = formElement.find('#La');
    idElement.val("");
    id_pasienElement.val("");
    kunjunganElement.val("");
    tgl_periksaElement.val("");
    medrecElement.val("");
    aa1Element.val("");
    aa2Element.val("");
    aa3Element.val("");
    ab1Element.val("");
    ab2Element.val("");
    ab3Element.val("");
    ac1Element.val("");
    ac2Element.val("");
    ac3Element.val("");
    ad1Element.val("");
    ad2Element.val("");
    ad3Element.val("");
    ae1Element.val("");
    ae2Element.val("");
    ae3Element.val("");
    af1Element.val("");
    af2Element.val("");
    af3Element.val("");
    ag1Element.val("");
    ag2Element.val("");
    ag3Element.val("");
    ah1Element.val("");
    ah2Element.val("");
    ah3Element.val("");
    ai1Element.val("");
    ai2Element.val("");
    ai3Element.val("");
    aj1Element.val("");
    aj2Element.val("");
    aj3Element.val("");
    ak1Element.val("");
    ak2Element.val("");
    ak3Element.val("");
    al1Element.val("");
    al2Element.val("");
    al3Element.val("");
    am1Element.val("");
    am2Element.val("");
    am21Element.val("");
    am22Element.val("");
    am23Element.val("");
    am24Element.val("");
    am25Element.val("");
    am26Element.val("");
    am27Element.val("");
    am28Element.val("");
    am29Element.val("");
    am210Element.val("");
    am211Element.val("");
    am212Element.val("");
    am3Element.val("");
    an1Element.val("");
    an2Element.val("");
    ba1Element.val("");
    ba2Element.val("");
    ba3Element.val("");
    bb1Element.val("");
    bb2Element.val("");
    bb3Element.val("");
    bc1Element.val("");
    bc2Element.val("");
    bc3Element.val("");
    bd1Element.val("");
    bd2Element.val("");
    bd3Element.val("");
    be1Element.val("");
    be2Element.val("");
    be3Element.val("");
    bf1Element.val("");
    bf2Element.val("");
    bf3Element.val("");
    bg1Element.val("");
    bg2Element.val("");
    bg3Element.val("");
    bh1Element.val("");
    bh2Element.val("");
    bh3Element.val("");
    bi1Element.val("");
    bi2Element.val("");
    bi3Element.val("");
    bj1Element.val("");
    bj2Element.val("");
    bj3Element.val("");
    bk1Element.val("");
    bk2Element.val("");
    bk3Element.val("");
    ca1Element.val("");
    ca2Element.val("");
    ca3Element.val("");
    cb1Element.val("");
    cb2Element.val("");
    cb3Element.val("");
    cc1Element.val("");
    cc2Element.val("");
    cc3Element.val("");
    cd1Element.val("");
    cd2Element.val("");
    cd3Element.val("");
    ce1Element.val("");
    ce2Element.val("");
    ce3Element.val("");
    cf1Element.val("");
    cf2Element.val("");
    cf3Element.val("");
    cg1Element.val("");
    cg2Element.val("");
    cg3Element.val("");
    ch1Element.val("");
    ch2Element.val("");
    ci1Element.val("");
    ci2Element.val("");
    ci3Element.val("");
    da1Element.val("");
    da2Element.val("");
    da3Element.val("");
    db1Element.val("");
    db2Element.val("");
    db3Element.val("");
    dc1Element.val("");
    dc2Element.val("");
    dc3Element.val("");
    dd1Element.val("");
    dd2Element.val("");
    dd3Element.val("");
    de1Element.val("");
    de2Element.val("");
    de3Element.val("");
    df1Element.val("");
    df2Element.val("");
    df3Element.val("");
    dg1Element.val("");
    dg2Element.val("");
    dg3Element.val("");
    dh1Element.val("");
    dh2Element.val("");
    di1Element.val("");
    di2Element.val("");
    dj1Element.val("");
    dj2Element.val("");
    dj3Element.val("");
    Ea1Element.val("");
    Ea2Element.val("");
    Ea3Element.val("");
    Eb1Element.val("");
    Eb2Element.val("");
    Eb3Element.val("");
    Ec1Element.val("");
    Ec2Element.val("");
    Ec3Element.val("");
    Ed1Element.val("");
    Ed2Element.val("");
    Ed3Element.val("");
    Ee1Element.val("");
    Ee2Element.val("");
    Ee3Element.val("");
    Ef1Element.val("");
    Ef2Element.val("");
    Ef3Element.val("");
    Ef2LainnyaElement.val("");
    Eg1Element.val("");
    Eg2Element.val("");
    Eg3Element.val("");
    Eg4Element.val("");
    Eg5Element.val("");
    Eg6Element.val("");
    EgLainnyaElement.val("");
    Fa1Element.val("");
    Fa2Element.val("");
    Fb1Element.val("");
    Fb2Element.val("");
    Fc1Element.val("");
    Fc2Element.val("");
    Fd1Element.val("");
    Fd2Element.val("");
    Fe1Element.val("");
    Fe2Element.val("");
    Ff1Element.val("");
    Ff2Element.val("");
    Fg1Element.val("");
    Fg2Element.val("");
    Fg3Element.val("");
    Fh1Element.val("");
    Fh2Element.val("");
    Fi1Element.val("");
    Fi2Element.val("");
    Ga1Element.val("");
    Ga2Element.val("");
    Ga3Element.val("");
    Gb1Element.val("");
    Gb2Element.val("");
    Gb3Element.val("");
    Gc1Element.val("");
    Gd1Element.val("");
    Gd2Element.val("");
    Ge1Element.val("");
    Ge2Element.val("");
    Ge3Element.val("");
    Gf1Element.val("");
    Gf2Element.val("");
    Gg1Element.val("");
    Gg2Element.val("");
    Gg2LainnyaElement.val("");
    Gg3Element.val("");
    Gh1Element.val("");
    Gh2Element.val("");
    Ha1Element.val("");
    Ha2Element.val("");
    Ha3Element.val("");
    Hb1Element.val("");
    Hb2Element.val("");
    Hb3Element.val("");
    Hc1Element.val("");
    Hc2Element.val("");
    Hc3Element.val("");
    Hd1Element.val("");
    Hd2Element.val("");
    Hd3Element.val("");
    He1Element.val("");
    He2Element.val("");
    He3Element.val("");
    Hf1Element.val("");
    Hf2Element.val("");
    Hf3Element.val("");
    Hg1Element.val("");
    Hg2Element.val("");
    Hg3Element.val("");
    Hh1Element.val("");
    Hh2Element.val("");
    Hh3Element.val("");
    Hi1Element.val("");
    Hi2Element.val("");
    Hi3Element.val("");
    Hj1Element.val("");
    Hj2Element.val("");
    Hj3Element.val("");
    Ia1Element.val("");
    Ia2Element.val("");
    Ia3Element.val("");
    Ib1Element.val("");
    Ib2Element.val("");
    Ib3Element.val("");
    Ic1Element.val("");
    Ic2Element.val("");
    Ic3Element.val("");
    Id1Element.val("");
    Id2Element.val("");
    Id3Element.val("");
    Ie1Element.val("");
    Ie2Element.val("");
    Ie3Element.val("");
    If1Element.val("");
    If2Element.val("");
    If3Element.val("");
    Ig1Element.val("");
    Ig2Element.val("");
    Ig3Element.val("");
    Ih1Element.val("");
    Ih2Element.val("");
    Ih3Element.val("");
    Ii1Element.val("");
    Ii2Element.val("");
    Ii3Element.val("");
    Ja1Element.val("");
    Ja2Element.val("");
    Ja2LainnyaElement.val("");
    Ja3Element.val("");
    Ja3LainnyaElement.val("");
    Ka1Element.val("");
    Ka2Element.val("");
    Ka3Element.val("");
    Ka4Element.val("");
    Kb1Element.val("");
    Kb2Element.val("");
    Kb3Element.val("");
    Kb4Element.val("");
    Kc1Element.val("");
    Kc2Element.val("");
    Kd1Element.val("");
    Kd2Element.val("");
    Kd3Element.val("");
    Ke1Element.val("");
    Ke2Element.val("");
    Kf1Element.val("");
    Kg1Element.val("");
    Kh1Element.val("");
    La1Element.val("");
    La2Element.val("");
    La3Element.val("");
    La4Element.val("");
    LaLainLainElement.val("");
    Lb1Element.val("");
    Lb2Element.val("");
    Lb3Element.val("");
    Ma1Element.val("");
    Ma2Element.val("");
    Mb1Element.val("");
    Mb2Element.val("");
    Mc1Element.val("");
    Mc2Element.val("");
    Mc3Element.val("");
    Md1Element.val("");
    Md2Element.val("");
    Me1Element.val("");
    Me2Element.val("");
    Me3Element.val("");
    Mf1Element.val("");
    Mf2Element.val("");
    Na1Element.val("");
    Na2Element.val("");
    Nb1Element.val("");
    Nb2Element.val("");
    Nc1Element.val("");
    Nc2Element.val("");
    Nd1Element.val("");
    Nd2Element.val("");
    Nd3Element.val("");
    Ne1Element.val("");
    Ne2Element.val("");
    Oa1Element.val("");
    Oa2Element.val("");
    Ob1Element.val("");
    Ob2Element.val("");
    Oc1Element.val("");
    Oc2Element.val("");
    Od1Element.val("");
    Od2Element.val("");
    Oe1Element.val("");
    Oe2Element.val("");
    Pa1Element.val("");
    Pa2Element.val("");
    Pa2LainnyaElement.val("");
    Pa3Element.val("");
    Pb1Element.val("");
    Pb2Element.val("");
    Pc1Element.val("");
    Pc2Element.val("");
    Pd1Element.val("");
    Pd2Element.val("");
    Pe1Element.val("");
    Pe2Element.val("");
    Qa1Element.val("");
    Qa2Element.val("");
    Qa2LainnyaElement.val("");
    Qa3Element.val("");
    Qb1Element.val("");
    Qb2Element.val("");
    Qc1Element.val("");
    Qc2Element.val("");
    Qd1Element.val("");
    Qd2Element.val("");
    Qe1Element.val("");
    Qe2Element.val("");
    Ra1Element.val("");
    Ra2Element.val("");
    Rb1Element.val("");
    Rb2Element.val("");
    Rc1Element.val("");
    Rc2Element.val("");
    Rd1Element.val("");
    Rd2Element.val("");
    Re1Element.val("");
    Re2Element.val("");
    Rf1Element.val("");
    Rf2Element.val("");
    Sa1Element.val("");
    Sa2Element.val("");
    Sa3Element.val("");
    Sb1Element.val("");
    Sb2Element.val("");
    Sc1Element.val("");
    Sc2Element.val("");
    Sd1Element.val("");
    Sd2Element.val("");
    Sd3Element.val("");
    Sd4Element.val("");
    Se1Element.val("");
    Se2Element.val("");
    Ta1Element.val("");
    Ta2Element.val("");
    Tb1Element.val("");
    Tb2Element.val("");
    Tb21Element.val("");
    Tb22Element.val("");
    Tb23Element.val("");
    Tb24Element.val("");
    Tb25Element.val("");
    Tb25LainnyaElement.val("");
    Tc1Element.val("");
    Tc1LainnyaElement.val("");
    Tc2Element.val("");
    LaElement.val("");
    $.ajax({
      method: "POST",
      url: _url,
      data: {
        id: id,
        _token: _token
      }
    }).done(function (_return) {
      idElement.val(_return.data.id);
      id_pasienElement.val(_return.data.id_pasien);
      kunjunganElement.val(_return.data.kunjungan);
      tgl_periksaElement.val(_return.data.tgl_periksa);
      medrecElement.val(_return.data.medrec);
      aa1Element.val(_return.data.aa1);
      aa2Element.val(_return.data.aa2);
      aa3Element.val(_return.data.aa3);
      ab1Element.val(_return.data.ab1);
      ab2Element.val(_return.data.ab2);
      ab3Element.val(_return.data.ab3);
      ac1Element.val(_return.data.ac1);
      ac2Element.val(_return.data.ac2);
      ac3Element.val(_return.data.ac3);
      ad1Element.val(_return.data.ad1);
      ad2Element.val(_return.data.ad2);
      ad3Element.val(_return.data.ad3);
      ae1Element.val(_return.data.ae1);
      ae2Element.val(_return.data.ae2);
      ae3Element.val(_return.data.ae3);
      af1Element.val(_return.data.af1);
      af2Element.val(_return.data.af2);
      af3Element.val(_return.data.af3);
      ag1Element.val(_return.data.ag1);
      ag2Element.val(_return.data.ag2);
      ag3Element.val(_return.data.ag3);
      ah1Element.val(_return.data.ah1);
      ah2Element.val(_return.data.ah2);
      ah3Element.val(_return.data.ah3);
      ai1Element.val(_return.data.ai1);
      ai2Element.val(_return.data.ai2);
      ai3Element.val(_return.data.ai3);
      aj1Element.val(_return.data.aj1);
      aj2Element.val(_return.data.aj2);
      aj3Element.val(_return.data.aj3);
      ak1Element.val(_return.data.ak1);
      ak2Element.val(_return.data.ak2);
      ak3Element.val(_return.data.ak3);
      al1Element.val(_return.data.al1);
      al2Element.val(_return.data.al2);
      al3Element.val(_return.data.al3);
      am1Element.val(_return.data.am1);
      am2Element.val(_return.data.am2);
      am21Element.val(_return.data.am21);
      am22Element.val(_return.data.am22);
      am23Element.val(_return.data.am23);
      am24Element.val(_return.data.am24);
      am25Element.val(_return.data.am25);
      am26Element.val(_return.data.am26);
      am27Element.val(_return.data.am27);
      am28Element.val(_return.data.am28);
      am29Element.val(_return.data.am29);
      am210Element.val(_return.data.am210);
      am211Element.val(_return.data.am211);
      am212Element.val(_return.data.am212);
      am3Element.val(_return.data.am3);
      an1Element.val(_return.data.an1);
      an2Element.val(_return.data.an2);
      ba1Element.val(_return.data.ba1);
      ba2Element.val(_return.data.ba2);
      ba3Element.val(_return.data.ba3);
      bb1Element.val(_return.data.bb1);
      bb2Element.val(_return.data.bb2);
      bb3Element.val(_return.data.bb3);
      bc1Element.val(_return.data.bc1);
      bc2Element.val(_return.data.bc2);
      bc3Element.val(_return.data.bc3);
      bd1Element.val(_return.data.bd1);
      bd2Element.val(_return.data.bd2);
      bd3Element.val(_return.data.bd3);
      be1Element.val(_return.data.be1);
      be2Element.val(_return.data.be2);
      be3Element.val(_return.data.be3);
      bf1Element.val(_return.data.bf1);
      bf2Element.val(_return.data.bf2);
      bf3Element.val(_return.data.bf3);
      bg1Element.val(_return.data.bg1);
      bg2Element.val(_return.data.bg2);
      bg3Element.val(_return.data.bg3);
      bh1Element.val(_return.data.bh1);
      bh2Element.val(_return.data.bh2);
      bh3Element.val(_return.data.bh3);
      bi1Element.val(_return.data.bi1);
      bi2Element.val(_return.data.bi2);
      bi3Element.val(_return.data.bi3);
      bj1Element.val(_return.data.bj1);
      bj2Element.val(_return.data.bj2);
      bj3Element.val(_return.data.bj3);
      bk1Element.val(_return.data.bk1);
      bk2Element.val(_return.data.bk2);
      bk3Element.val(_return.data.bk3);
      ca1Element.val(_return.data.ca1);
      ca2Element.val(_return.data.ca2);
      ca3Element.val(_return.data.ca3);
      cb1Element.val(_return.data.cb1);
      cb2Element.val(_return.data.cb2);
      cb3Element.val(_return.data.cb3);
      cc1Element.val(_return.data.cc1);
      cc2Element.val(_return.data.cc2);
      cc3Element.val(_return.data.cc3);
      cd1Element.val(_return.data.cd1);
      cd2Element.val(_return.data.cd2);
      cd3Element.val(_return.data.cd3);
      ce1Element.val(_return.data.ce1);
      ce2Element.val(_return.data.ce2);
      ce3Element.val(_return.data.ce3);
      cf1Element.val(_return.data.cf1);
      cf2Element.val(_return.data.cf2);
      cf3Element.val(_return.data.cf3);
      cg1Element.val(_return.data.cg1);
      cg2Element.val(_return.data.cg2);
      cg3Element.val(_return.data.cg3);
      ch1Element.val(_return.data.ch1);
      ch2Element.val(_return.data.ch2);
      ci1Element.val(_return.data.ci1);
      ci2Element.val(_return.data.ci2);
      ci3Element.val(_return.data.ci3);
      da1Element.val(_return.data.da1);
      da2Element.val(_return.data.da2);
      da3Element.val(_return.data.da3);
      db1Element.val(_return.data.db1);
      db2Element.val(_return.data.db2);
      db3Element.val(_return.data.db3);
      dc1Element.val(_return.data.dc1);
      dc2Element.val(_return.data.dc2);
      dc3Element.val(_return.data.dc3);
      dd1Element.val(_return.data.dd1);
      dd2Element.val(_return.data.dd2);
      dd3Element.val(_return.data.dd3);
      de1Element.val(_return.data.de1);
      de2Element.val(_return.data.de2);
      de3Element.val(_return.data.de3);
      df1Element.val(_return.data.df1);
      df2Element.val(_return.data.df2);
      df3Element.val(_return.data.df3);
      dg1Element.val(_return.data.dg1);
      dg2Element.val(_return.data.dg2);
      dg3Element.val(_return.data.dg3);
      dh1Element.val(_return.data.dh1);
      dh2Element.val(_return.data.dh2);
      di1Element.val(_return.data.di1);
      di2Element.val(_return.data.di2);
      dj1Element.val(_return.data.dj1);
      dj2Element.val(_return.data.dj2);
      dj3Element.val(_return.data.dj3);
      Ea1Element.val(_return.data.Ea1);
      Ea2Element.val(_return.data.Ea2);
      Ea3Element.val(_return.data.Ea3);
      Eb1Element.val(_return.data.Eb1);
      Eb2Element.val(_return.data.Eb2);
      Eb3Element.val(_return.data.Eb3);
      Ec1Element.val(_return.data.Ec1);
      Ec2Element.val(_return.data.Ec2);
      Ec3Element.val(_return.data.Ec3);
      Ed1Element.val(_return.data.Ed1);
      Ed2Element.val(_return.data.Ed2);
      Ed3Element.val(_return.data.Ed3);
      Ee1Element.val(_return.data.Ee1);
      Ee2Element.val(_return.data.Ee2);
      Ee3Element.val(_return.data.Ee3);
      Ef1Element.val(_return.data.Ef1);
      Ef2Element.val(_return.data.Ef2);
      Ef3Element.val(_return.data.Ef3);
      Ef2LainnyaElement.val(_return.data.Ef2Lainnya);
      Eg1Element.val(_return.data.Eg1);
      Eg2Element.val(_return.data.Eg2);
      Eg3Element.val(_return.data.Eg3);
      Eg4Element.val(_return.data.Eg4);
      Eg5Element.val(_return.data.Eg5);
      Eg6Element.val(_return.data.Eg6);
      EgLainnyaElement.val(_return.data.EgLainnya);
      Fa1Element.val(_return.data.Fa1);
      Fa2Element.val(_return.data.Fa2);
      Fb1Element.val(_return.data.Fb1);
      Fb2Element.val(_return.data.Fb2);
      Fc1Element.val(_return.data.Fc1);
      Fc2Element.val(_return.data.Fc2);
      Fd1Element.val(_return.data.Fd1);
      Fd2Element.val(_return.data.Fd2);
      Fe1Element.val(_return.data.Fe1);
      Fe2Element.val(_return.data.Fe2);
      Ff1Element.val(_return.data.Ff1);
      Ff2Element.val(_return.data.Ff2);
      Fg1Element.val(_return.data.Fg1);
      Fg2Element.val(_return.data.Fg2);
      Fg3Element.val(_return.data.Fg3);
      Fh1Element.val(_return.data.Fh1);
      Fh2Element.val(_return.data.Fh2);
      Fi1Element.val(_return.data.Fi1);
      Fi2Element.val(_return.data.Fi2);
      Ga1Element.val(_return.data.Ga1);
      Ga2Element.val(_return.data.Ga2);
      Ga3Element.val(_return.data.Ga3);
      Gb1Element.val(_return.data.Gb1);
      Gb2Element.val(_return.data.Gb2);
      Gb3Element.val(_return.data.Gb3);
      Gc1Element.val(_return.data.Gc1);
      Gd1Element.val(_return.data.Gd1);
      Gd2Element.val(_return.data.Gd2);
      Ge1Element.val(_return.data.Ge1);
      Ge2Element.val(_return.data.Ge2);
      Ge3Element.val(_return.data.Ge3);
      Gf1Element.val(_return.data.Gf1);
      Gf2Element.val(_return.data.Gf2);
      Gg1Element.val(_return.data.Gg1);
      Gg2Element.val(_return.data.Gg2);
      Gg2LainnyaElement.val(_return.data.Gg2Lainnya);
      Gg3Element.val(_return.data.Gg3);
      Gh1Element.val(_return.data.Gh1);
      Gh2Element.val(_return.data.Gh2);
      Ha1Element.val(_return.data.Ha1);
      Ha2Element.val(_return.data.Ha2);
      Ha3Element.val(_return.data.Ha3);
      Hb1Element.val(_return.data.Hb1);
      Hb2Element.val(_return.data.Hb2);
      Hb3Element.val(_return.data.Hb3);
      Hc1Element.val(_return.data.Hc1);
      Hc2Element.val(_return.data.Hc2);
      Hc3Element.val(_return.data.Hc3);
      Hd1Element.val(_return.data.Hd1);
      Hd2Element.val(_return.data.Hd2);
      Hd3Element.val(_return.data.Hd3);
      He1Element.val(_return.data.He1);
      He2Element.val(_return.data.He2);
      He3Element.val(_return.data.He3);
      Hf1Element.val(_return.data.Hf1);
      Hf2Element.val(_return.data.Hf2);
      Hf3Element.val(_return.data.Hf3);
      Hg1Element.val(_return.data.Hg1);
      Hg2Element.val(_return.data.Hg2);
      Hg3Element.val(_return.data.Hg3);
      Hh1Element.val(_return.data.Hh1);
      Hh2Element.val(_return.data.Hh2);
      Hh3Element.val(_return.data.Hh3);
      Hi1Element.val(_return.data.Hi1);
      Hi2Element.val(_return.data.Hi2);
      Hi3Element.val(_return.data.Hi3);
      Hj1Element.val(_return.data.Hj1);
      Hj2Element.val(_return.data.Hj2);
      Hj3Element.val(_return.data.Hj3);
      Ia1Element.val(_return.data.Ia1);
      Ia2Element.val(_return.data.Ia2);
      Ia3Element.val(_return.data.Ia3);
      Ib1Element.val(_return.data.Ib1);
      Ib2Element.val(_return.data.Ib2);
      Ib3Element.val(_return.data.Ib3);
      Ic1Element.val(_return.data.Ic1);
      Ic2Element.val(_return.data.Ic2);
      Ic3Element.val(_return.data.Ic3);
      Id1Element.val(_return.data.Id1);
      Id2Element.val(_return.data.Id2);
      Id3Element.val(_return.data.Id3);
      Ie1Element.val(_return.data.Ie1);
      Ie2Element.val(_return.data.Ie2);
      Ie3Element.val(_return.data.Ie3);
      If1Element.val(_return.data.If1);
      If2Element.val(_return.data.If2);
      If3Element.val(_return.data.If3);
      Ig1Element.val(_return.data.Ig1);
      Ig2Element.val(_return.data.Ig2);
      Ig3Element.val(_return.data.Ig3);
      Ih1Element.val(_return.data.Ih1);
      Ih2Element.val(_return.data.Ih2);
      Ih3Element.val(_return.data.Ih3);
      Ii1Element.val(_return.data.Ii1);
      Ii2Element.val(_return.data.Ii2);
      Ii3Element.val(_return.data.Ii3);
      Ja1Element.val(_return.data.Ja1);
      Ja2Element.val(_return.data.Ja2);
      Ja2LainnyaElement.val(_return.data.Ja2Lainnya);
      Ja3Element.val(_return.data.Ja3);
      Ja3LainnyaElement.val(_return.data.Ja3Lainnya);
      Ka1Element.val(_return.data.Ka1);
      Ka2Element.val(_return.data.Ka2);
      Ka3Element.val(_return.data.Ka3);
      Ka4Element.val(_return.data.Ka4);
      Kb1Element.val(_return.data.Kb1);
      Kb2Element.val(_return.data.Kb2);
      Kb3Element.val(_return.data.Kb3);
      Kb4Element.val(_return.data.Kb4);
      Kc1Element.val(_return.data.Kc1);
      Kc2Element.val(_return.data.Kc2);
      Kd1Element.val(_return.data.Kd1);
      Kd2Element.val(_return.data.Kd2);
      Kd3Element.val(_return.data.Kd3);
      Ke1Element.val(_return.data.Ke1);
      Ke2Element.val(_return.data.Ke2);
      Kf1Element.val(_return.data.Kf1);
      Kg1Element.val(_return.data.Kg1);
      Kh1Element.val(_return.data.Kh1);
      La1Element.val(_return.data.La1);
      La2Element.val(_return.data.La2);
      La3Element.val(_return.data.La3);
      La4Element.val(_return.data.La4);
      LaLainLainElement.val(_return.data.LaLainLain);
      Lb1Element.val(_return.data.Lb1);
      Lb2Element.val(_return.data.Lb2);
      Lb3Element.val(_return.data.Lb3);
      Ma1Element.val(_return.data.Ma1);
      Ma2Element.val(_return.data.Ma2);
      Mb1Element.val(_return.data.Mb1);
      Mb2Element.val(_return.data.Mb2);
      Mc1Element.val(_return.data.Mc1);
      Mc2Element.val(_return.data.Mc2);
      Mc3Element.val(_return.data.Mc3);
      Md1Element.val(_return.data.Md1);
      Md2Element.val(_return.data.Md2);
      Me1Element.val(_return.data.Me1);
      Me2Element.val(_return.data.Me2);
      Me3Element.val(_return.data.Me3);
      Mf1Element.val(_return.data.Mf1);
      Mf2Element.val(_return.data.Mf2);
      Na1Element.val(_return.data.Na1);
      Na2Element.val(_return.data.Na2);
      Nb1Element.val(_return.data.Nb1);
      Nb2Element.val(_return.data.Nb2);
      Nc1Element.val(_return.data.Nc1);
      Nc2Element.val(_return.data.Nc2);
      Nd1Element.val(_return.data.Nd1);
      Nd2Element.val(_return.data.Nd2);
      Nd3Element.val(_return.data.Nd3);
      Ne1Element.val(_return.data.Ne1);
      Ne2Element.val(_return.data.Ne2);
      Oa1Element.val(_return.data.Oa1);
      Oa2Element.val(_return.data.Oa2);
      Ob1Element.val(_return.data.Ob1);
      Ob2Element.val(_return.data.Ob2);
      Oc1Element.val(_return.data.Oc1);
      Oc2Element.val(_return.data.Oc2);
      Od1Element.val(_return.data.Od1);
      Od2Element.val(_return.data.Od2);
      Oe1Element.val(_return.data.Oe1);
      Oe2Element.val(_return.data.Oe2);
      Pa1Element.val(_return.data.Pa1);
      Pa2Element.val(_return.data.Pa2);
      Pa2LainnyaElement.val(_return.data.Pa2Lainnya);
      Pa3Element.val(_return.data.Pa3);
      Pb1Element.val(_return.data.Pb1);
      Pb2Element.val(_return.data.Pb2);
      Pc1Element.val(_return.data.Pc1);
      Pc2Element.val(_return.data.Pc2);
      Pd1Element.val(_return.data.Pd1);
      Pd2Element.val(_return.data.Pd2);
      Pe1Element.val(_return.data.Pe1);
      Pe2Element.val(_return.data.Pe2);
      Qa1Element.val(_return.data.Qa1);
      Qa2Element.val(_return.data.Qa2);
      Qa2LainnyaElement.val(_return.data.Qa2Lainnya);
      Qa3Element.val(_return.data.Qa3);
      Qb1Element.val(_return.data.Qb1);
      Qb2Element.val(_return.data.Qb2);
      Qc1Element.val(_return.data.Qc1);
      Qc2Element.val(_return.data.Qc2);
      Qd1Element.val(_return.data.Qd1);
      Qd2Element.val(_return.data.Qd2);
      Qe1Element.val(_return.data.Qe1);
      Qe2Element.val(_return.data.Qe2);
      Ra1Element.val(_return.data.Ra1);
      Ra2Element.val(_return.data.Ra2);
      Rb1Element.val(_return.data.Rb1);
      Rb2Element.val(_return.data.Rb2);
      Rc1Element.val(_return.data.Rc1);
      Rc2Element.val(_return.data.Rc2);
      Rd1Element.val(_return.data.Rd1);
      Rd2Element.val(_return.data.Rd2);
      Re1Element.val(_return.data.Re1);
      Re2Element.val(_return.data.Re2);
      Rf1Element.val(_return.data.Rf1);
      Rf2Element.val(_return.data.Rf2);
      Sa1Element.val(_return.data.Sa1);
      Sa2Element.val(_return.data.Sa2);
      Sa3Element.val(_return.data.Sa3);
      Sb1Element.val(_return.data.Sb1);
      Sb2Element.val(_return.data.Sb2);
      Sc1Element.val(_return.data.Sc1);
      Sc2Element.val(_return.data.Sc2);
      Sd1Element.val(_return.data.Sd1);
      Sd2Element.val(_return.data.Sd2);
      Sd3Element.val(_return.data.Sd3);
      Sd4Element.val(_return.data.Sd4);
      Se1Element.val(_return.data.Se1);
      Se2Element.val(_return.data.Se2);
      Ta1Element.val(_return.data.Ta1);
      Ta2Element.val(_return.data.Ta2);
      Tb1Element.val(_return.data.Tb1);
      Tb2Element.val(_return.data.Tb2);
      Tb21Element.val(_return.data.Tb21);
      Tb22Element.val(_return.data.Tb22);
      Tb23Element.val(_return.data.Tb23);
      Tb24Element.val(_return.data.Tb24);
      Tb25Element.val(_return.data.Tb25);
      Tb25LainnyaElement.val(_return.data.Tb25Lainnya);
      Tc1Element.val(_return.data.Tc1);
      Tc1LainnyaElement.val(_return.data.Tc1Lainnya);
      Tc2Element.val(_return.data.Tc2);
      LaElement.val(_return.data.La);
    });
  });
  $(".js-anamnesis-update-btn").click(function () {
    var _token = $(this).attr('data-token');

    var _url = $(this).attr('data-url');

    var formElement = $('#modal-edit-anamnesis');
    var idElement = formElement.find('input#id');
    var id_pasienElement = formElement.find('#id_pasien');
    var kunjunganElement = formElement.find('#kunjungan');
    var tgl_periksaElement = formElement.find('#tgl_periksa');
    var medrecElement = formElement.find('#medrec');
    var aa1Element = formElement.find('#aa1');
    var aa2Element = formElement.find('#aa2');
    var aa3Element = formElement.find('#aa3');
    var ab1Element = formElement.find('#ab1');
    var ab2Element = formElement.find('#ab2');
    var ab3Element = formElement.find('#ab3');
    var ac1Element = formElement.find('#ac1');
    var ac2Element = formElement.find('#ac2');
    var ac3Element = formElement.find('#ac3');
    var ad1Element = formElement.find('#ad1');
    var ad2Element = formElement.find('#ad2');
    var ad3Element = formElement.find('#ad3');
    var ae1Element = formElement.find('#ae1');
    var ae2Element = formElement.find('#ae2');
    var ae3Element = formElement.find('#ae3');
    var af1Element = formElement.find('#af1');
    var af2Element = formElement.find('#af2');
    var af3Element = formElement.find('#af3');
    var ag1Element = formElement.find('#ag1');
    var ag2Element = formElement.find('#ag2');
    var ag3Element = formElement.find('#ag3');
    var ah1Element = formElement.find('#ah1');
    var ah2Element = formElement.find('#ah2');
    var ah3Element = formElement.find('#ah3');
    var ai1Element = formElement.find('#ai1');
    var ai2Element = formElement.find('#ai2');
    var ai3Element = formElement.find('#ai3');
    var aj1Element = formElement.find('#aj1');
    var aj2Element = formElement.find('#aj2');
    var aj3Element = formElement.find('#aj3');
    var ak1Element = formElement.find('#ak1');
    var ak2Element = formElement.find('#ak2');
    var ak3Element = formElement.find('#ak3');
    var al1Element = formElement.find('#al1');
    var al2Element = formElement.find('#al2');
    var al3Element = formElement.find('#al3');
    var am1Element = formElement.find('#am1');
    var am2Element = formElement.find('#am2');
    var am21Element = formElement.find('#am21');
    var am22Element = formElement.find('#am22');
    var am23Element = formElement.find('#am23');
    var am24Element = formElement.find('#am24');
    var am25Element = formElement.find('#am25');
    var am26Element = formElement.find('#am26');
    var am27Element = formElement.find('#am27');
    var am28Element = formElement.find('#am28');
    var am29Element = formElement.find('#am29');
    var am210Element = formElement.find('#am210');
    var am211Element = formElement.find('#am211');
    var am212Element = formElement.find('#am212');
    var am3Element = formElement.find('#am3');
    var an1Element = formElement.find('#an1');
    var an2Element = formElement.find('#an2');
    var ba1Element = formElement.find('#ba1');
    var ba2Element = formElement.find('#ba2');
    var ba3Element = formElement.find('#ba3');
    var bb1Element = formElement.find('#bb1');
    var bb2Element = formElement.find('#bb2');
    var bb3Element = formElement.find('#bb3');
    var bc1Element = formElement.find('#bc1');
    var bc2Element = formElement.find('#bc2');
    var bc3Element = formElement.find('#bc3');
    var bd1Element = formElement.find('#bd1');
    var bd2Element = formElement.find('#bd2');
    var bd3Element = formElement.find('#bd3');
    var be1Element = formElement.find('#be1');
    var be2Element = formElement.find('#be2');
    var be3Element = formElement.find('#be3');
    var bf1Element = formElement.find('#bf1');
    var bf2Element = formElement.find('#bf2');
    var bf3Element = formElement.find('#bf3');
    var bg1Element = formElement.find('#bg1');
    var bg2Element = formElement.find('#bg2');
    var bg3Element = formElement.find('#bg3');
    var bh1Element = formElement.find('#bh1');
    var bh2Element = formElement.find('#bh2');
    var bh3Element = formElement.find('#bh3');
    var bi1Element = formElement.find('#bi1');
    var bi2Element = formElement.find('#bi2');
    var bi3Element = formElement.find('#bi3');
    var bj1Element = formElement.find('#bj1');
    var bj2Element = formElement.find('#bj2');
    var bj3Element = formElement.find('#bj3');
    var bk1Element = formElement.find('#bk1');
    var bk2Element = formElement.find('#bk2');
    var bk3Element = formElement.find('#bk3');
    var ca1Element = formElement.find('#ca1');
    var ca2Element = formElement.find('#ca2');
    var ca3Element = formElement.find('#ca3');
    var cb1Element = formElement.find('#cb1');
    var cb2Element = formElement.find('#cb2');
    var cb3Element = formElement.find('#cb3');
    var cc1Element = formElement.find('#cc1');
    var cc2Element = formElement.find('#cc2');
    var cc3Element = formElement.find('#cc3');
    var cd1Element = formElement.find('#cd1');
    var cd2Element = formElement.find('#cd2');
    var cd3Element = formElement.find('#cd3');
    var ce1Element = formElement.find('#ce1');
    var ce2Element = formElement.find('#ce2');
    var ce3Element = formElement.find('#ce3');
    var cf1Element = formElement.find('#cf1');
    var cf2Element = formElement.find('#cf2');
    var cf3Element = formElement.find('#cf3');
    var cg1Element = formElement.find('#cg1');
    var cg2Element = formElement.find('#cg2');
    var cg3Element = formElement.find('#cg3');
    var ch1Element = formElement.find('#ch1');
    var ch2Element = formElement.find('#ch2');
    var ci1Element = formElement.find('#ci1');
    var ci2Element = formElement.find('#ci2');
    var ci3Element = formElement.find('#ci3');
    var da1Element = formElement.find('#da1');
    var da2Element = formElement.find('#da2');
    var da3Element = formElement.find('#da3');
    var db1Element = formElement.find('#db1');
    var db2Element = formElement.find('#db2');
    var db3Element = formElement.find('#db3');
    var dc1Element = formElement.find('#dc1');
    var dc2Element = formElement.find('#dc2');
    var dc3Element = formElement.find('#dc3');
    var dd1Element = formElement.find('#dd1');
    var dd2Element = formElement.find('#dd2');
    var dd3Element = formElement.find('#dd3');
    var de1Element = formElement.find('#de1');
    var de2Element = formElement.find('#de2');
    var de3Element = formElement.find('#de3');
    var df1Element = formElement.find('#df1');
    var df2Element = formElement.find('#df2');
    var df3Element = formElement.find('#df3');
    var dg1Element = formElement.find('#dg1');
    var dg2Element = formElement.find('#dg2');
    var dg3Element = formElement.find('#dg3');
    var dh1Element = formElement.find('#dh1');
    var dh2Element = formElement.find('#dh2');
    var di1Element = formElement.find('#di1');
    var di2Element = formElement.find('#di2');
    var dj1Element = formElement.find('#dj1');
    var dj2Element = formElement.find('#dj2');
    var dj3Element = formElement.find('#dj3');
    var Ea1Element = formElement.find('#Ea1');
    var Ea2Element = formElement.find('#Ea2');
    var Ea3Element = formElement.find('#Ea3');
    var Eb1Element = formElement.find('#Eb1');
    var Eb2Element = formElement.find('#Eb2');
    var Eb3Element = formElement.find('#Eb3');
    var Ec1Element = formElement.find('#Ec1');
    var Ec2Element = formElement.find('#Ec2');
    var Ec3Element = formElement.find('#Ec3');
    var Ed1Element = formElement.find('#Ed1');
    var Ed2Element = formElement.find('#Ed2');
    var Ed3Element = formElement.find('#Ed3');
    var Ee1Element = formElement.find('#Ee1');
    var Ee2Element = formElement.find('#Ee2');
    var Ee3Element = formElement.find('#Ee3');
    var Ef1Element = formElement.find('#Ef1');
    var Ef2Element = formElement.find('#Ef2');
    var Ef3Element = formElement.find('#Ef3');
    var Ef2LainnyaElement = formElement.find('#Ef2Lainnya');
    var Eg1Element = formElement.find('#Eg1');
    var Eg2Element = formElement.find('#Eg2');
    var Eg3Element = formElement.find('#Eg3');
    var Eg4Element = formElement.find('#Eg4');
    var Eg5Element = formElement.find('#Eg5');
    var Eg6Element = formElement.find('#Eg6');
    var EgLainnyaElement = formElement.find('#EgLainnya');
    var Fa1Element = formElement.find('#Fa1');
    var Fa2Element = formElement.find('#Fa2');
    var Fb1Element = formElement.find('#Fb1');
    var Fb2Element = formElement.find('#Fb2');
    var Fc1Element = formElement.find('#Fc1');
    var Fc2Element = formElement.find('#Fc2');
    var Fd1Element = formElement.find('#Fd1');
    var Fd2Element = formElement.find('#Fd2');
    var Fe1Element = formElement.find('#Fe1');
    var Fe2Element = formElement.find('#Fe2');
    var Ff1Element = formElement.find('#Ff1');
    var Ff2Element = formElement.find('#Ff2');
    var Fg1Element = formElement.find('#Fg1');
    var Fg2Element = formElement.find('#Fg2');
    var Fg3Element = formElement.find('#Fg3');
    var Fh1Element = formElement.find('#Fh1');
    var Fh2Element = formElement.find('#Fh2');
    var Fi1Element = formElement.find('#Fi1');
    var Fi2Element = formElement.find('#Fi2');
    var Ga1Element = formElement.find('#Ga1');
    var Ga2Element = formElement.find('#Ga2');
    var Ga3Element = formElement.find('#Ga3');
    var Gb1Element = formElement.find('#Gb1');
    var Gb2Element = formElement.find('#Gb2');
    var Gb3Element = formElement.find('#Gb3');
    var Gc1Element = formElement.find('#Gc1');
    var Gd1Element = formElement.find('#Gd1');
    var Gd2Element = formElement.find('#Gd2');
    var Ge1Element = formElement.find('#Ge1');
    var Ge2Element = formElement.find('#Ge2');
    var Ge3Element = formElement.find('#Ge3');
    var Gf1Element = formElement.find('#Gf1');
    var Gf2Element = formElement.find('#Gf2');
    var Gg1Element = formElement.find('#Gg1');
    var Gg2Element = formElement.find('#Gg2');
    var Gg2LainnyaElement = formElement.find('#Gg2Lainnya');
    var Gg3Element = formElement.find('#Gg3');
    var Gh1Element = formElement.find('#Gh1');
    var Gh2Element = formElement.find('#Gh2');
    var Ha1Element = formElement.find('#Ha1');
    var Ha2Element = formElement.find('#Ha2');
    var Ha3Element = formElement.find('#Ha3');
    var Hb1Element = formElement.find('#Hb1');
    var Hb2Element = formElement.find('#Hb2');
    var Hb3Element = formElement.find('#Hb3');
    var Hc1Element = formElement.find('#Hc1');
    var Hc2Element = formElement.find('#Hc2');
    var Hc3Element = formElement.find('#Hc3');
    var Hd1Element = formElement.find('#Hd1');
    var Hd2Element = formElement.find('#Hd2');
    var Hd3Element = formElement.find('#Hd3');
    var He1Element = formElement.find('#He1');
    var He2Element = formElement.find('#He2');
    var He3Element = formElement.find('#He3');
    var Hf1Element = formElement.find('#Hf1');
    var Hf2Element = formElement.find('#Hf2');
    var Hf3Element = formElement.find('#Hf3');
    var Hg1Element = formElement.find('#Hg1');
    var Hg2Element = formElement.find('#Hg2');
    var Hg3Element = formElement.find('#Hg3');
    var Hh1Element = formElement.find('#Hh1');
    var Hh2Element = formElement.find('#Hh2');
    var Hh3Element = formElement.find('#Hh3');
    var Hi1Element = formElement.find('#Hi1');
    var Hi2Element = formElement.find('#Hi2');
    var Hi3Element = formElement.find('#Hi3');
    var Hj1Element = formElement.find('#Hj1');
    var Hj2Element = formElement.find('#Hj2');
    var Hj3Element = formElement.find('#Hj3');
    var Ia1Element = formElement.find('#Ia1');
    var Ia2Element = formElement.find('#Ia2');
    var Ia3Element = formElement.find('#Ia3');
    var Ib1Element = formElement.find('#Ib1');
    var Ib2Element = formElement.find('#Ib2');
    var Ib3Element = formElement.find('#Ib3');
    var Ic1Element = formElement.find('#Ic1');
    var Ic2Element = formElement.find('#Ic2');
    var Ic3Element = formElement.find('#Ic3');
    var Id1Element = formElement.find('#Id1');
    var Id2Element = formElement.find('#Id2');
    var Id3Element = formElement.find('#Id3');
    var Ie1Element = formElement.find('#Ie1');
    var Ie2Element = formElement.find('#Ie2');
    var Ie3Element = formElement.find('#Ie3');
    var If1Element = formElement.find('#If1');
    var If2Element = formElement.find('#If2');
    var If3Element = formElement.find('#If3');
    var Ig1Element = formElement.find('#Ig1');
    var Ig2Element = formElement.find('#Ig2');
    var Ig3Element = formElement.find('#Ig3');
    var Ih1Element = formElement.find('#Ih1');
    var Ih2Element = formElement.find('#Ih2');
    var Ih3Element = formElement.find('#Ih3');
    var Ii1Element = formElement.find('#Ii1');
    var Ii2Element = formElement.find('#Ii2');
    var Ii3Element = formElement.find('#Ii3');
    var Ja1Element = formElement.find('#Ja1');
    var Ja2Element = formElement.find('#Ja2');
    var Ja2LainnyaElement = formElement.find('#Ja2Lainnya');
    var Ja3Element = formElement.find('#Ja3');
    var Ja3LainnyaElement = formElement.find('#Ja3Lainnya');
    var Ka1Element = formElement.find('#Ka1');
    var Ka2Element = formElement.find('#Ka2');
    var Ka3Element = formElement.find('#Ka3');
    var Ka4Element = formElement.find('#Ka4');
    var Kb1Element = formElement.find('#Kb1');
    var Kb2Element = formElement.find('#Kb2');
    var Kb3Element = formElement.find('#Kb3');
    var Kb4Element = formElement.find('#Kb4');
    var Kc1Element = formElement.find('#Kc1');
    var Kc2Element = formElement.find('#Kc2');
    var Kd1Element = formElement.find('#Kd1');
    var Kd2Element = formElement.find('#Kd2');
    var Kd3Element = formElement.find('#Kd3');
    var Ke1Element = formElement.find('#Ke1');
    var Ke2Element = formElement.find('#Ke2');
    var Kf1Element = formElement.find('#Kf1');
    var Kg1Element = formElement.find('#Kg1');
    var Kh1Element = formElement.find('#Kh1');
    var La1Element = formElement.find('#La1');
    var La2Element = formElement.find('#La2');
    var La3Element = formElement.find('#La3');
    var La4Element = formElement.find('#La4');
    var LaLainLainElement = formElement.find('#LaLainLain');
    var Lb1Element = formElement.find('#Lb1');
    var Lb2Element = formElement.find('#Lb2');
    var Lb3Element = formElement.find('#Lb3');
    var Ma1Element = formElement.find('#Ma1');
    var Ma2Element = formElement.find('#Ma2');
    var Mb1Element = formElement.find('#Mb1');
    var Mb2Element = formElement.find('#Mb2');
    var Mc1Element = formElement.find('#Mc1');
    var Mc2Element = formElement.find('#Mc2');
    var Mc3Element = formElement.find('#Mc3');
    var Md1Element = formElement.find('#Md1');
    var Md2Element = formElement.find('#Md2');
    var Me1Element = formElement.find('#Me1');
    var Me2Element = formElement.find('#Me2');
    var Me3Element = formElement.find('#Me3');
    var Mf1Element = formElement.find('#Mf1');
    var Mf2Element = formElement.find('#Mf2');
    var Na1Element = formElement.find('#Na1');
    var Na2Element = formElement.find('#Na2');
    var Nb1Element = formElement.find('#Nb1');
    var Nb2Element = formElement.find('#Nb2');
    var Nc1Element = formElement.find('#Nc1');
    var Nc2Element = formElement.find('#Nc2');
    var Nd1Element = formElement.find('#Nd1');
    var Nd2Element = formElement.find('#Nd2');
    var Nd3Element = formElement.find('#Nd3');
    var Ne1Element = formElement.find('#Ne1');
    var Ne2Element = formElement.find('#Ne2');
    var Oa1Element = formElement.find('#Oa1');
    var Oa2Element = formElement.find('#Oa2');
    var Ob1Element = formElement.find('#Ob1');
    var Ob2Element = formElement.find('#Ob2');
    var Oc1Element = formElement.find('#Oc1');
    var Oc2Element = formElement.find('#Oc2');
    var Od1Element = formElement.find('#Od1');
    var Od2Element = formElement.find('#Od2');
    var Oe1Element = formElement.find('#Oe1');
    var Oe2Element = formElement.find('#Oe2');
    var Pa1Element = formElement.find('#Pa1');
    var Pa2Element = formElement.find('#Pa2');
    var Pa2LainnyaElement = formElement.find('#Pa2Lainnya');
    var Pa3Element = formElement.find('#Pa3');
    var Pb1Element = formElement.find('#Pb1');
    var Pb2Element = formElement.find('#Pb2');
    var Pc1Element = formElement.find('#Pc1');
    var Pc2Element = formElement.find('#Pc2');
    var Pd1Element = formElement.find('#Pd1');
    var Pd2Element = formElement.find('#Pd2');
    var Pe1Element = formElement.find('#Pe1');
    var Pe2Element = formElement.find('#Pe2');
    var Qa1Element = formElement.find('#Qa1');
    var Qa2Element = formElement.find('#Qa2');
    var Qa2LainnyaElement = formElement.find('#Qa2Lainnya');
    var Qa3Element = formElement.find('#Qa3');
    var Qb1Element = formElement.find('#Qb1');
    var Qb2Element = formElement.find('#Qb2');
    var Qc1Element = formElement.find('#Qc1');
    var Qc2Element = formElement.find('#Qc2');
    var Qd1Element = formElement.find('#Qd1');
    var Qd2Element = formElement.find('#Qd2');
    var Qe1Element = formElement.find('#Qe1');
    var Qe2Element = formElement.find('#Qe2');
    var Ra1Element = formElement.find('#Ra1');
    var Ra2Element = formElement.find('#Ra2');
    var Rb1Element = formElement.find('#Rb1');
    var Rb2Element = formElement.find('#Rb2');
    var Rc1Element = formElement.find('#Rc1');
    var Rc2Element = formElement.find('#Rc2');
    var Rd1Element = formElement.find('#Rd1');
    var Rd2Element = formElement.find('#Rd2');
    var Re1Element = formElement.find('#Re1');
    var Re2Element = formElement.find('#Re2');
    var Rf1Element = formElement.find('#Rf1');
    var Rf2Element = formElement.find('#Rf2');
    var Sa1Element = formElement.find('#Sa1');
    var Sa2Element = formElement.find('#Sa2');
    var Sa3Element = formElement.find('#Sa3');
    var Sb1Element = formElement.find('#Sb1');
    var Sb2Element = formElement.find('#Sb2');
    var Sc1Element = formElement.find('#Sc1');
    var Sc2Element = formElement.find('#Sc2');
    var Sd1Element = formElement.find('#Sd1');
    var Sd2Element = formElement.find('#Sd2');
    var Sd3Element = formElement.find('#Sd3');
    var Sd4Element = formElement.find('#Sd4');
    var Se1Element = formElement.find('#Se1');
    var Se2Element = formElement.find('#Se2');
    var Ta1Element = formElement.find('#Ta1');
    var Ta2Element = formElement.find('#Ta2');
    var Tb1Element = formElement.find('#Tb1');
    var Tb2Element = formElement.find('#Tb2');
    var Tb21Element = formElement.find('#Tb21');
    var Tb22Element = formElement.find('#Tb22');
    var Tb23Element = formElement.find('#Tb23');
    var Tb24Element = formElement.find('#Tb24');
    var Tb25Element = formElement.find('#Tb25');
    var Tb25LainnyaElement = formElement.find('#Tb25Lainnya');
    var Tc1Element = formElement.find('#Tc1');
    var Tc1LainnyaElement = formElement.find('#Tc1Lainnya');
    var Tc2Element = formElement.find('#Tc2');
    var LaElement = formElement.find('#La');

    var _id = idElement.val();

    var _id_pasien = id_pasienElement.val();

    var _kunjungan = kunjunganElement.val();

    var _tgl_periksa = tgl_periksaElement.val();

    var _medrec = medrecElement.val();

    var _aa1 = aa1Element.val();

    var _aa2 = aa2Element.val();

    var _aa3 = aa3Element.val();

    var _ab1 = ab1Element.val();

    var _ab2 = ab2Element.val();

    var _ab3 = ab3Element.val();

    var _ac1 = ac1Element.val();

    var _ac2 = ac2Element.val();

    var _ac3 = ac3Element.val();

    var _ad1 = ad1Element.val();

    var _ad2 = ad2Element.val();

    var _ad3 = ad3Element.val();

    var _ae1 = ae1Element.val();

    var _ae2 = ae2Element.val();

    var _ae3 = ae3Element.val();

    var _af1 = af1Element.val();

    var _af2 = af2Element.val();

    var _af3 = af3Element.val();

    var _ag1 = ag1Element.val();

    var _ag2 = ag2Element.val();

    var _ag3 = ag3Element.val();

    var _ah1 = ah1Element.val();

    var _ah2 = ah2Element.val();

    var _ah3 = ah3Element.val();

    var _ai1 = ai1Element.val();

    var _ai2 = ai2Element.val();

    var _ai3 = ai3Element.val();

    var _aj1 = aj1Element.val();

    var _aj2 = aj2Element.val();

    var _aj3 = aj3Element.val();

    var _ak1 = ak1Element.val();

    var _ak2 = ak2Element.val();

    var _ak3 = ak3Element.val();

    var _al1 = al1Element.val();

    var _al2 = al2Element.val();

    var _al3 = al3Element.val();

    var _am1 = am1Element.val();

    var _am2 = am2Element.val();

    var _am21 = am21Element.val();

    var _am22 = am22Element.val();

    var _am23 = am23Element.val();

    var _am24 = am24Element.val();

    var _am25 = am25Element.val();

    var _am26 = am26Element.val();

    var _am27 = am27Element.val();

    var _am28 = am28Element.val();

    var _am29 = am29Element.val();

    var _am210 = am210Element.val();

    var _am211 = am211Element.val();

    var _am212 = am212Element.val();

    var _am3 = am3Element.val();

    var _an1 = an1Element.val();

    var _an2 = an2Element.val();

    var _ba1 = ba1Element.val();

    var _ba2 = ba2Element.val();

    var _ba3 = ba3Element.val();

    var _bb1 = bb1Element.val();

    var _bb2 = bb2Element.val();

    var _bb3 = bb3Element.val();

    var _bc1 = bc1Element.val();

    var _bc2 = bc2Element.val();

    var _bc3 = bc3Element.val();

    var _bd1 = bd1Element.val();

    var _bd2 = bd2Element.val();

    var _bd3 = bd3Element.val();

    var _be1 = be1Element.val();

    var _be2 = be2Element.val();

    var _be3 = be3Element.val();

    var _bf1 = bf1Element.val();

    var _bf2 = bf2Element.val();

    var _bf3 = bf3Element.val();

    var _bg1 = bg1Element.val();

    var _bg2 = bg2Element.val();

    var _bg3 = bg3Element.val();

    var _bh1 = bh1Element.val();

    var _bh2 = bh2Element.val();

    var _bh3 = bh3Element.val();

    var _bi1 = bi1Element.val();

    var _bi2 = bi2Element.val();

    var _bi3 = bi3Element.val();

    var _bj1 = bj1Element.val();

    var _bj2 = bj2Element.val();

    var _bj3 = bj3Element.val();

    var _bk1 = bk1Element.val();

    var _bk2 = bk2Element.val();

    var _bk3 = bk3Element.val();

    var _ca1 = ca1Element.val();

    var _ca2 = ca2Element.val();

    var _ca3 = ca3Element.val();

    var _cb1 = cb1Element.val();

    var _cb2 = cb2Element.val();

    var _cb3 = cb3Element.val();

    var _cc1 = cc1Element.val();

    var _cc2 = cc2Element.val();

    var _cc3 = cc3Element.val();

    var _cd1 = cd1Element.val();

    var _cd2 = cd2Element.val();

    var _cd3 = cd3Element.val();

    var _ce1 = ce1Element.val();

    var _ce2 = ce2Element.val();

    var _ce3 = ce3Element.val();

    var _cf1 = cf1Element.val();

    var _cf2 = cf2Element.val();

    var _cf3 = cf3Element.val();

    var _cg1 = cg1Element.val();

    var _cg2 = cg2Element.val();

    var _cg3 = cg3Element.val();

    var _ch1 = ch1Element.val();

    var _ch2 = ch2Element.val();

    var _ci1 = ci1Element.val();

    var _ci2 = ci2Element.val();

    var _ci3 = ci3Element.val();

    var _da1 = da1Element.val();

    var _da2 = da2Element.val();

    var _da3 = da3Element.val();

    var _db1 = db1Element.val();

    var _db2 = db2Element.val();

    var _db3 = db3Element.val();

    var _dc1 = dc1Element.val();

    var _dc2 = dc2Element.val();

    var _dc3 = dc3Element.val();

    var _dd1 = dd1Element.val();

    var _dd2 = dd2Element.val();

    var _dd3 = dd3Element.val();

    var _de1 = de1Element.val();

    var _de2 = de2Element.val();

    var _de3 = de3Element.val();

    var _df1 = df1Element.val();

    var _df2 = df2Element.val();

    var _df3 = df3Element.val();

    var _dg1 = dg1Element.val();

    var _dg2 = dg2Element.val();

    var _dg3 = dg3Element.val();

    var _dh1 = dh1Element.val();

    var _dh2 = dh2Element.val();

    var _di1 = di1Element.val();

    var _di2 = di2Element.val();

    var _dj1 = dj1Element.val();

    var _dj2 = dj2Element.val();

    var _dj3 = dj3Element.val();

    var _Ea1 = Ea1Element.val();

    var _Ea2 = Ea2Element.val();

    var _Ea3 = Ea3Element.val();

    var _Eb1 = Eb1Element.val();

    var _Eb2 = Eb2Element.val();

    var _Eb3 = Eb3Element.val();

    var _Ec1 = Ec1Element.val();

    var _Ec2 = Ec2Element.val();

    var _Ec3 = Ec3Element.val();

    var _Ed1 = Ed1Element.val();

    var _Ed2 = Ed2Element.val();

    var _Ed3 = Ed3Element.val();

    var _Ee1 = Ee1Element.val();

    var _Ee2 = Ee2Element.val();

    var _Ee3 = Ee3Element.val();

    var _Ef1 = Ef1Element.val();

    var _Ef2 = Ef2Element.val();

    var _Ef3 = Ef3Element.val();

    var _Ef2Lainnya = Ef2LainnyaElement.val();

    var _Eg1 = Eg1Element.val();

    var _Eg2 = Eg2Element.val();

    var _Eg3 = Eg3Element.val();

    var _Eg4 = Eg4Element.val();

    var _Eg5 = Eg5Element.val();

    var _Eg6 = Eg6Element.val();

    var _EgLainnya = EgLainnyaElement.val();

    var _Fa1 = Fa1Element.val();

    var _Fa2 = Fa2Element.val();

    var _Fb1 = Fb1Element.val();

    var _Fb2 = Fb2Element.val();

    var _Fc1 = Fc1Element.val();

    var _Fc2 = Fc2Element.val();

    var _Fd1 = Fd1Element.val();

    var _Fd2 = Fd2Element.val();

    var _Fe1 = Fe1Element.val();

    var _Fe2 = Fe2Element.val();

    var _Ff1 = Ff1Element.val();

    var _Ff2 = Ff2Element.val();

    var _Fg1 = Fg1Element.val();

    var _Fg2 = Fg2Element.val();

    var _Fg3 = Fg3Element.val();

    var _Fh1 = Fh1Element.val();

    var _Fh2 = Fh2Element.val();

    var _Fi1 = Fi1Element.val();

    var _Fi2 = Fi2Element.val();

    var _Ga1 = Ga1Element.val();

    var _Ga2 = Ga2Element.val();

    var _Ga3 = Ga3Element.val();

    var _Gb1 = Gb1Element.val();

    var _Gb2 = Gb2Element.val();

    var _Gb3 = Gb3Element.val();

    var _Gc1 = Gc1Element.val();

    var _Gd1 = Gd1Element.val();

    var _Gd2 = Gd2Element.val();

    var _Ge1 = Ge1Element.val();

    var _Ge2 = Ge2Element.val();

    var _Ge3 = Ge3Element.val();

    var _Gf1 = Gf1Element.val();

    var _Gf2 = Gf2Element.val();

    var _Gg1 = Gg1Element.val();

    var _Gg2 = Gg2Element.val();

    var _Gg2Lainnya = Gg2LainnyaElement.val();

    var _Gg3 = Gg3Element.val();

    var _Gh1 = Gh1Element.val();

    var _Gh2 = Gh2Element.val();

    var _Ha1 = Ha1Element.val();

    var _Ha2 = Ha2Element.val();

    var _Ha3 = Ha3Element.val();

    var _Hb1 = Hb1Element.val();

    var _Hb2 = Hb2Element.val();

    var _Hb3 = Hb3Element.val();

    var _Hc1 = Hc1Element.val();

    var _Hc2 = Hc2Element.val();

    var _Hc3 = Hc3Element.val();

    var _Hd1 = Hd1Element.val();

    var _Hd2 = Hd2Element.val();

    var _Hd3 = Hd3Element.val();

    var _He1 = He1Element.val();

    var _He2 = He2Element.val();

    var _He3 = He3Element.val();

    var _Hf1 = Hf1Element.val();

    var _Hf2 = Hf2Element.val();

    var _Hf3 = Hf3Element.val();

    var _Hg1 = Hg1Element.val();

    var _Hg2 = Hg2Element.val();

    var _Hg3 = Hg3Element.val();

    var _Hh1 = Hh1Element.val();

    var _Hh2 = Hh2Element.val();

    var _Hh3 = Hh3Element.val();

    var _Hi1 = Hi1Element.val();

    var _Hi2 = Hi2Element.val();

    var _Hi3 = Hi3Element.val();

    var _Hj1 = Hj1Element.val();

    var _Hj2 = Hj2Element.val();

    var _Hj3 = Hj3Element.val();

    var _Ia1 = Ia1Element.val();

    var _Ia2 = Ia2Element.val();

    var _Ia3 = Ia3Element.val();

    var _Ib1 = Ib1Element.val();

    var _Ib2 = Ib2Element.val();

    var _Ib3 = Ib3Element.val();

    var _Ic1 = Ic1Element.val();

    var _Ic2 = Ic2Element.val();

    var _Ic3 = Ic3Element.val();

    var _Id1 = Id1Element.val();

    var _Id2 = Id2Element.val();

    var _Id3 = Id3Element.val();

    var _Ie1 = Ie1Element.val();

    var _Ie2 = Ie2Element.val();

    var _Ie3 = Ie3Element.val();

    var _If1 = If1Element.val();

    var _If2 = If2Element.val();

    var _If3 = If3Element.val();

    var _Ig1 = Ig1Element.val();

    var _Ig2 = Ig2Element.val();

    var _Ig3 = Ig3Element.val();

    var _Ih1 = Ih1Element.val();

    var _Ih2 = Ih2Element.val();

    var _Ih3 = Ih3Element.val();

    var _Ii1 = Ii1Element.val();

    var _Ii2 = Ii2Element.val();

    var _Ii3 = Ii3Element.val();

    var _Ja1 = Ja1Element.val();

    var _Ja2 = Ja2Element.val();

    var _Ja2Lainnya = Ja2LainnyaElement.val();

    var _Ja3 = Ja3Element.val();

    var _Ja3Lainnya = Ja3LainnyaElement.val();

    var _Ka1 = Ka1Element.val();

    var _Ka2 = Ka2Element.val();

    var _Ka3 = Ka3Element.val();

    var _Ka4 = Ka4Element.val();

    var _Kb1 = Kb1Element.val();

    var _Kb2 = Kb2Element.val();

    var _Kb3 = Kb3Element.val();

    var _Kb4 = Kb4Element.val();

    var _Kc1 = Kc1Element.val();

    var _Kc2 = Kc2Element.val();

    var _Kd1 = Kd1Element.val();

    var _Kd2 = Kd2Element.val();

    var _Kd3 = Kd3Element.val();

    var _Ke1 = Ke1Element.val();

    var _Ke2 = Ke2Element.val();

    var _Kf1 = Kf1Element.val();

    var _Kg1 = Kg1Element.val();

    var _Kh1 = Kh1Element.val();

    var _La1 = La1Element.val();

    var _La2 = La2Element.val();

    var _La3 = La3Element.val();

    var _La4 = La4Element.val();

    var _LaLainLain = LaLainLainElement.val();

    var _Lb1 = Lb1Element.val();

    var _Lb2 = Lb2Element.val();

    var _Lb3 = Lb3Element.val();

    var _Ma1 = Ma1Element.val();

    var _Ma2 = Ma2Element.val();

    var _Mb1 = Mb1Element.val();

    var _Mb2 = Mb2Element.val();

    var _Mc1 = Mc1Element.val();

    var _Mc2 = Mc2Element.val();

    var _Mc3 = Mc3Element.val();

    var _Md1 = Md1Element.val();

    var _Md2 = Md2Element.val();

    var _Me1 = Me1Element.val();

    var _Me2 = Me2Element.val();

    var _Me3 = Me3Element.val();

    var _Mf1 = Mf1Element.val();

    var _Mf2 = Mf2Element.val();

    var _Na1 = Na1Element.val();

    var _Na2 = Na2Element.val();

    var _Nb1 = Nb1Element.val();

    var _Nb2 = Nb2Element.val();

    var _Nc1 = Nc1Element.val();

    var _Nc2 = Nc2Element.val();

    var _Nd1 = Nd1Element.val();

    var _Nd2 = Nd2Element.val();

    var _Nd3 = Nd3Element.val();

    var _Ne1 = Ne1Element.val();

    var _Ne2 = Ne2Element.val();

    var _Oa1 = Oa1Element.val();

    var _Oa2 = Oa2Element.val();

    var _Ob1 = Ob1Element.val();

    var _Ob2 = Ob2Element.val();

    var _Oc1 = Oc1Element.val();

    var _Oc2 = Oc2Element.val();

    var _Od1 = Od1Element.val();

    var _Od2 = Od2Element.val();

    var _Oe1 = Oe1Element.val();

    var _Oe2 = Oe2Element.val();

    var _Pa1 = Pa1Element.val();

    var _Pa2 = Pa2Element.val();

    var _Pa2Lainnya = Pa2LainnyaElement.val();

    var _Pa3 = Pa3Element.val();

    var _Pb1 = Pb1Element.val();

    var _Pb2 = Pb2Element.val();

    var _Pc1 = Pc1Element.val();

    var _Pc2 = Pc2Element.val();

    var _Pd1 = Pd1Element.val();

    var _Pd2 = Pd2Element.val();

    var _Pe1 = Pe1Element.val();

    var _Pe2 = Pe2Element.val();

    var _Qa1 = Qa1Element.val();

    var _Qa2 = Qa2Element.val();

    var _Qa2Lainnya = Qa2LainnyaElement.val();

    var _Qa3 = Qa3Element.val();

    var _Qb1 = Qb1Element.val();

    var _Qb2 = Qb2Element.val();

    var _Qc1 = Qc1Element.val();

    var _Qc2 = Qc2Element.val();

    var _Qd1 = Qd1Element.val();

    var _Qd2 = Qd2Element.val();

    var _Qe1 = Qe1Element.val();

    var _Qe2 = Qe2Element.val();

    var _Ra1 = Ra1Element.val();

    var _Ra2 = Ra2Element.val();

    var _Rb1 = Rb1Element.val();

    var _Rb2 = Rb2Element.val();

    var _Rc1 = Rc1Element.val();

    var _Rc2 = Rc2Element.val();

    var _Rd1 = Rd1Element.val();

    var _Rd2 = Rd2Element.val();

    var _Re1 = Re1Element.val();

    var _Re2 = Re2Element.val();

    var _Rf1 = Rf1Element.val();

    var _Rf2 = Rf2Element.val();

    var _Sa1 = Sa1Element.val();

    var _Sa2 = Sa2Element.val();

    var _Sa3 = Sa3Element.val();

    var _Sb1 = Sb1Element.val();

    var _Sb2 = Sb2Element.val();

    var _Sc1 = Sc1Element.val();

    var _Sc2 = Sc2Element.val();

    var _Sd1 = Sd1Element.val();

    var _Sd2 = Sd2Element.val();

    var _Sd3 = Sd3Element.val();

    var _Sd4 = Sd4Element.val();

    var _Se1 = Se1Element.val();

    var _Se2 = Se2Element.val();

    var _Ta1 = Ta1Element.val();

    var _Ta2 = Ta2Element.val();

    var _Tb1 = Tb1Element.val();

    var _Tb2 = Tb2Element.val();

    var _Tb21 = Tb21Element.val();

    var _Tb22 = Tb22Element.val();

    var _Tb23 = Tb23Element.val();

    var _Tb24 = Tb24Element.val();

    var _Tb25 = Tb25Element.val();

    var _Tb25Lainnya = Tb25LainnyaElement.val();

    var _Tc1 = Tc1Element.val();

    var _Tc1Lainnya = Tc1LainnyaElement.val();

    var _Tc2 = Tc2Element.val();

    var _La = LaElement.val();

    $.ajax({
      method: "POST",
      url: _url,
      data: {
        id: _id,
        id_pasien: _id_pasien,
        kunjungan: _kunjungan,
        tgl_periksa: _tgl_periksa,
        medrec: _medrec,
        aa1: _aa1,
        aa2: _aa2,
        aa3: _aa3,
        ab1: _ab1,
        ab2: _ab2,
        ab3: _ab3,
        ac1: _ac1,
        ac2: _ac2,
        ac3: _ac3,
        ad1: _ad1,
        ad2: _ad2,
        ad3: _ad3,
        ae1: _ae1,
        ae2: _ae2,
        ae3: _ae3,
        af1: _af1,
        af2: _af2,
        af3: _af3,
        ag1: _ag1,
        ag2: _ag2,
        ag3: _ag3,
        ah1: _ah1,
        ah2: _ah2,
        ah3: _ah3,
        ai1: _ai1,
        ai2: _ai2,
        ai3: _ai3,
        aj1: _aj1,
        aj2: _aj2,
        aj3: _aj3,
        ak1: _ak1,
        ak2: _ak2,
        ak3: _ak3,
        al1: _al1,
        al2: _al2,
        al3: _al3,
        am1: _am1,
        am2: _am2,
        am21: _am21,
        am22: _am22,
        am23: _am23,
        am24: _am24,
        am25: _am25,
        am26: _am26,
        am27: _am27,
        am28: _am28,
        am29: _am29,
        am210: _am210,
        am211: _am211,
        am212: _am212,
        am3: _am3,
        an1: _an1,
        an2: _an2,
        ba1: _ba1,
        ba2: _ba2,
        ba3: _ba3,
        bb1: _bb1,
        bb2: _bb2,
        bb3: _bb3,
        bc1: _bc1,
        bc2: _bc2,
        bc3: _bc3,
        bd1: _bd1,
        bd2: _bd2,
        bd3: _bd3,
        be1: _be1,
        be2: _be2,
        be3: _be3,
        bf1: _bf1,
        bf2: _bf2,
        bf3: _bf3,
        bg1: _bg1,
        bg2: _bg2,
        bg3: _bg3,
        bh1: _bh1,
        bh2: _bh2,
        bh3: _bh3,
        bi1: _bi1,
        bi2: _bi2,
        bi3: _bi3,
        bj1: _bj1,
        bj2: _bj2,
        bj3: _bj3,
        bk1: _bk1,
        bk2: _bk2,
        bk3: _bk3,
        ca1: _ca1,
        ca2: _ca2,
        ca3: _ca3,
        cb1: _cb1,
        cb2: _cb2,
        cb3: _cb3,
        cc1: _cc1,
        cc2: _cc2,
        cc3: _cc3,
        cd1: _cd1,
        cd2: _cd2,
        cd3: _cd3,
        ce1: _ce1,
        ce2: _ce2,
        ce3: _ce3,
        cf1: _cf1,
        cf2: _cf2,
        cf3: _cf3,
        cg1: _cg1,
        cg2: _cg2,
        cg3: _cg3,
        ch1: _ch1,
        ch2: _ch2,
        ci1: _ci1,
        ci2: _ci2,
        ci3: _ci3,
        da1: _da1,
        da2: _da2,
        da3: _da3,
        db1: _db1,
        db2: _db2,
        db3: _db3,
        dc1: _dc1,
        dc2: _dc2,
        dc3: _dc3,
        dd1: _dd1,
        dd2: _dd2,
        dd3: _dd3,
        de1: _de1,
        de2: _de2,
        de3: _de3,
        df1: _df1,
        df2: _df2,
        df3: _df3,
        dg1: _dg1,
        dg2: _dg2,
        dg3: _dg3,
        dh1: _dh1,
        dh2: _dh2,
        di1: _di1,
        di2: _di2,
        dj1: _dj1,
        dj2: _dj2,
        dj3: _dj3,
        ea1: _Ea1,
        ea2: _Ea2,
        ea3: _Ea3,
        eb1: _Eb1,
        eb2: _Eb2,
        eb3: _Eb3,
        ec1: _Ec1,
        ec2: _Ec2,
        ec3: _Ec3,
        ed1: _Ed1,
        ed2: _Ed2,
        ed3: _Ed3,
        ee1: _Ee1,
        ee2: _Ee2,
        ee3: _Ee3,
        ef1: _Ef1,
        ef2: _Ef2,
        ef3: _Ef3,
        ef2Lainnya: _Ef2Lainnya,
        eg1: _Eg1,
        eg2: _Eg2,
        eg3: _Eg3,
        eg4: _Eg4,
        eg5: _Eg5,
        eg6: _Eg6,
        egLainnya: _EgLainnya,
        fa1: _Fa1,
        fa2: _Fa2,
        fb1: _Fb1,
        fb2: _Fb2,
        fc1: _Fc1,
        fc2: _Fc2,
        fd1: _Fd1,
        fd2: _Fd2,
        fe1: _Fe1,
        fe2: _Fe2,
        ff1: _Ff1,
        ff2: _Ff2,
        fg1: _Fg1,
        fg2: _Fg2,
        fg3: _Fg3,
        fh1: _Fh1,
        fh2: _Fh2,
        fi1: _Fi1,
        fi2: _Fi2,
        ga1: _Ga1,
        ga2: _Ga2,
        ga3: _Ga3,
        gb1: _Gb1,
        gb2: _Gb2,
        gb3: _Gb3,
        gc1: _Gc1,
        gd1: _Gd1,
        gd2: _Gd2,
        ge1: _Ge1,
        ge2: _Ge2,
        ge3: _Ge3,
        gf1: _Gf1,
        gf2: _Gf2,
        gg1: _Gg1,
        gg2: _Gg2,
        gg2Lainnya: _Gg2Lainnya,
        gg3: _Gg3,
        gh1: _Gh1,
        gh2: _Gh2,
        ha1: _Ha1,
        ha2: _Ha2,
        ha3: _Ha3,
        hb1: _Hb1,
        hb2: _Hb2,
        hb3: _Hb3,
        hc1: _Hc1,
        hc2: _Hc2,
        hc3: _Hc3,
        hd1: _Hd1,
        hd2: _Hd2,
        hd3: _Hd3,
        he1: _He1,
        he2: _He2,
        he3: _He3,
        hf1: _Hf1,
        hf2: _Hf2,
        hf3: _Hf3,
        hg1: _Hg1,
        hg2: _Hg2,
        hg3: _Hg3,
        hh1: _Hh1,
        hh2: _Hh2,
        hh3: _Hh3,
        hi1: _Hi1,
        hi2: _Hi2,
        hi3: _Hi3,
        hj1: _Hj1,
        hj2: _Hj2,
        hj3: _Hj3,
        ia1: _Ia1,
        ia2: _Ia2,
        ia3: _Ia3,
        ib1: _Ib1,
        ib2: _Ib2,
        ib3: _Ib3,
        ic1: _Ic1,
        ic2: _Ic2,
        ic3: _Ic3,
        id1: _Id1,
        id2: _Id2,
        id3: _Id3,
        ie1: _Ie1,
        ie2: _Ie2,
        ie3: _Ie3,
        if1: _If1,
        if2: _If2,
        if3: _If3,
        ig1: _Ig1,
        ig2: _Ig2,
        ig3: _Ig3,
        ih1: _Ih1,
        ih2: _Ih2,
        ih3: _Ih3,
        ii1: _Ii1,
        ii2: _Ii2,
        ii3: _Ii3,
        ja1: _Ja1,
        ja2: _Ja2,
        ja2Lainnya: _Ja2Lainnya,
        ja3: _Ja3,
        ja3Lainnya: _Ja3Lainnya,
        ka1: _Ka1,
        ka2: _Ka2,
        ka3: _Ka3,
        ka4: _Ka4,
        kb1: _Kb1,
        kb2: _Kb2,
        kb3: _Kb3,
        kb4: _Kb4,
        kc1: _Kc1,
        kc2: _Kc2,
        kd1: _Kd1,
        kd2: _Kd2,
        kd3: _Kd3,
        ke1: _Ke1,
        ke2: _Ke2,
        kf1: _Kf1,
        kg1: _Kg1,
        kh1: _Kh1,
        la1: _La1,
        la2: _La2,
        la3: _La3,
        la4: _La4,
        laLainLain: _LaLainLain,
        lb1: _Lb1,
        lb2: _Lb2,
        lb3: _Lb3,
        ma1: _Ma1,
        ma2: _Ma2,
        mb1: _Mb1,
        mb2: _Mb2,
        mc1: _Mc1,
        mc2: _Mc2,
        mc3: _Mc3,
        md1: _Md1,
        md2: _Md2,
        me1: _Me1,
        me2: _Me2,
        me3: _Me3,
        mf1: _Mf1,
        mf2: _Mf2,
        na1: _Na1,
        na2: _Na2,
        nb1: _Nb1,
        nb2: _Nb2,
        nc1: _Nc1,
        nc2: _Nc2,
        nd1: _Nd1,
        nd2: _Nd2,
        nd3: _Nd3,
        ne1: _Ne1,
        ne2: _Ne2,
        oa1: _Oa1,
        oa2: _Oa2,
        ob1: _Ob1,
        ob2: _Ob2,
        oc1: _Oc1,
        oc2: _Oc2,
        od1: _Od1,
        od2: _Od2,
        oe1: _Oe1,
        oe2: _Oe2,
        pa1: _Pa1,
        pa2: _Pa2,
        pa2Lainnya: _Pa2Lainnya,
        pa3: _Pa3,
        pb1: _Pb1,
        pb2: _Pb2,
        pc1: _Pc1,
        pc2: _Pc2,
        pd1: _Pd1,
        pd2: _Pd2,
        pe1: _Pe1,
        pe2: _Pe2,
        qa1: _Qa1,
        qa2: _Qa2,
        qa2Lainnya: _Qa2Lainnya,
        qa3: _Qa3,
        qb1: _Qb1,
        qb2: _Qb2,
        qc1: _Qc1,
        qc2: _Qc2,
        qd1: _Qd1,
        qd2: _Qd2,
        qe1: _Qe1,
        qe2: _Qe2,
        ra1: _Ra1,
        ra2: _Ra2,
        rb1: _Rb1,
        rb2: _Rb2,
        rc1: _Rc1,
        rc2: _Rc2,
        rd1: _Rd1,
        rd2: _Rd2,
        re1: _Re1,
        re2: _Re2,
        rf1: _Rf1,
        rf2: _Rf2,
        sa1: _Sa1,
        sa2: _Sa2,
        sa3: _Sa3,
        sb1: _Sb1,
        sb2: _Sb2,
        sc1: _Sc1,
        sc2: _Sc2,
        sd1: _Sd1,
        sd2: _Sd2,
        sd3: _Sd3,
        sd4: _Sd4,
        se1: _Se1,
        se2: _Se2,
        ta1: _Ta1,
        ta2: _Ta2,
        tb1: _Tb1,
        tb2: _Tb2,
        tb21: _Tb21,
        tb22: _Tb22,
        tb23: _Tb23,
        tb24: _Tb24,
        tb25: _Tb25,
        tb25Lainnya: _Tb25Lainnya,
        tc1: _Tc1,
        tc1Lainnya: _Tc1Lainnya,
        tc2: _Tc2,
        la: _La,
        _token: _token
      }
    }).done(function (_return) {
      $("#modal-edit-anamnesis").modal("hide");
      ShowMessageBox("Success", "Data successfully Updated!", 1, 'OK', '.js-data-anamnesis');
    });
  });
  $('#modal-delete-anamnesis').on('show.bs.modal', function (e) {
    var id = e.relatedTarget.dataset.id;
    $(this).attr('data-id', id);
  });
  $('.js-anamnesis-remove-btn').click(function () {
    var _token = $(this).attr('data-token');

    var _url = $(this).attr('data-url');

    var _id = $('#modal-delete-anamnesis').attr('data-id');

    $.ajax({
      method: "POST",
      url: _url,
      data: {
        id: _id,
        _token: _token
      }
    }).done(function (_return) {
      $("#modal-delete-anamnesis").modal("hide");
      ShowMessageBox("Success", "Data successfully Deleted!", 1, 'OK', '.js-data-anamnesis');
    });
  });
});

/***/ }),

/***/ "./resources/js/page/diagnosa.js":
/*!***************************************!*\
  !*** ./resources/js/page/diagnosa.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  urls = document.URL.split('/');
  url = '/diagnosa';
  if (urls[urls.length - 2] == 'public') url = '/public/diagnosa';
  var configs = {
    columns: [{
      title: 'Nama',
      field: ['pasien', 'nama'],
      columnType: {
        type: 'field'
      }
    }, {
      title: 'Kunjungan',
      field: 'kunjungan',
      columnType: {
        type: 'field'
      }
    }, {
      title: 'No Rekam Medis',
      field: 'medrec',
      columnType: {
        type: 'field'
      }
    }, [{
      title: 'Action',
      field: 'View',
      columnType: {
        type: 'link',
        link: url,
        linkQuery: '/find/',
        linkParam: {
          type: 'column',
          value: 'id'
        }
      }
    }, {
      title: 'Action',
      field: 'Edit',
      columnType: {
        type: 'modal',
        target: 'modal-edit-diagnosa',
        modalParam: {
          type: 'column',
          value: 'id'
        }
      }
    }, {
      title: 'Action',
      field: 'Delete',
      columnType: {
        type: 'modal',
        target: 'modal-delete-diagnosa',
        modalParam: {
          type: 'column',
          value: 'id'
        }
      }
    }]]
  };

  if ($('#js-table-diagnosa').hasClass('js-data-diagnosa')) {
    dataTable.init(".js-data-diagnosa", configs);
  }

  $('#modal-create-diagnosa').on('show.bs.modal', function (e) {
    var formElement = $(this);
    var idElement = formElement.find("#id");
    var idPasienElement = formElement.find("#idPasien");
    var kunjunganElement = formElement.find("#kunjungan");
    var tglPeriksaElement = formElement.find("#tglPeriksa");
    var medrecElement = formElement.find("#medrec");
    idElement.val("");
    idPasienElement.val("");
    kunjunganElement.val("");
    tglPeriksaElement.val("");
    medrecElement.val("");
    kesadaranElement.val("");
  });
  $(".js-diagnosa-save-btn").click(function () {
    var _token = $(this).attr('data-token');

    var _url = $(this).attr('data-url');

    var formElement = $('#modal-create-diagnosa');
    var idPasienElement = formElement.find("#idPasien");
    var kunjunganElement = formElement.find("#kunjungan");
    var tglPeriksaElement = formElement.find("#tglPeriksa");
    var medrecElement = formElement.find("#medrec");

    var _idPasien = idPasienElement.val();

    var _kunjungan = kunjunganElement.val();

    var _tglPeriksa = tglPeriksaElement.val();

    var _medrec = medrecElement.val();

    $.ajax({
      method: "POST",
      url: _url,
      data: {
        idPasien: _idPasien,
        kunjungan: _kunjungan,
        tglPeriksa: _tglPeriksa,
        medrec: _medrec,
        _token: _token
      }
    }).done(function (_return) {
      $("#modal-create-diagnosa").modal("hide");
      ShowMessageBox("Success", "Data successfully Saved!", 1, 'OK', '.js-data-diagnosa');
    });
  });
  $('#modal-edit-diagnosa').on('show.bs.modal', function (e) {
    var id = e.relatedTarget.dataset.id;
    $(this).attr('data-id', id);

    var _url = $(this).attr('data-url');

    var _token = $(this).attr('data-token');

    var formElement = $(this);
    var idElement = formElement.find("#id");
    var idPasienElement = formElement.find("#idPasien");
    var kunjunganElement = formElement.find("#kunjungan");
    var tglPeriksaElement = formElement.find("#tglPeriksa");
    var medrecElement = formElement.find("#medrec");
    $.ajax({
      method: "POST",
      url: _url,
      data: {
        id: id,
        _token: _token
      }
    }).done(function (_return) {
      idElement.val(_return.data.id);
      idPasienElement.val(_return.data.idPasien);
      kunjunganElement.val(_return.data.kunjungan);
      tglPeriksaElement.val(_return.data.tglPeriksa);
      MedrecElement.val(_return.data.medrec);
      kesadaranElement.val(_return.data.kesadaran);
    });
  });
  $(".js-diagnosa-update-btn").click(function () {
    var _token = $(this).attr('data-token');

    var _url = $(this).attr('data-url');

    var formElement = $('#modal-edit-diagnosa');
    var idElement = formElement.find("#id");
    var idPasienElement = formElement.find("#idPasien");
    var kunjunganElement = formElement.find("#kunjungan");
    var tglPeriksaElement = formElement.find("#tglPeriksa");
    var medrecElement = formElement.find("#medrec");

    var _id = idElement.val();

    var _idPasien = idPasienElement.val();

    var _kunjungan = kunjunganElement.val();

    var _tglPeriksa = tglPeriksaElement.val();

    var _medrec = medrecElement.val();

    $.ajax({
      method: "POST",
      url: _url,
      data: {
        id: _id,
        idPasien: _idPasien,
        kunjungan: _kunjungan,
        tglPeriksa: _tglPeriksa,
        medrec: _medrec,
        _token: _token
      }
    }).done(function (_return) {
      $("#modal-edit-diagnosa").modal("hide");
      ShowMessageBox("Success", "Data successfully Updated!", 1, 'OK', '.js-data-diagnosa');
    });
  });
  $('#modal-delete-diagnosa').on('show.bs.modal', function (e) {
    var id = e.relatedTarget.dataset.id;
    $(this).attr('data-id', id);
  });
  $('.js-diagnosa-remove-btn').click(function () {
    var _token = $(this).attr('data-token');

    var _url = $(this).attr('data-url');

    var _id = $('#modal-delete-diagnosa').attr('data-id');

    $.ajax({
      method: "POST",
      url: _url,
      data: {
        id: _id,
        _token: _token
      }
    }).done(function (_return) {
      $("#modal-delete-diagnosa").modal("hide");
      ShowMessageBox("Success", "Data successfully Deleted!", 1, 'OK', '.js-data-diagnosa');
    });
  });
});

/***/ }),

/***/ "./resources/js/page/dirujuk.js":
/*!**************************************!*\
  !*** ./resources/js/page/dirujuk.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Created by User2 on 4/7/2020.
 */

/**
 * Created by User2 on 3/30/2020.
 */
$(document).ready(function () {
  var configs = {
    columns: [{
      title: 'ID',
      field: 'id',
      columnType: {
        type: 'field'
      }
    }, {
      title: 'Nama',
      field: 'nama',
      columnType: {
        type: 'field'
      }
    }, [{
      title: 'Action',
      field: 'Edit',
      columnType: {
        type: 'modal',
        target: 'modal-edit-dirujuk',
        modalParam: {
          type: 'column',
          value: 'id'
        }
      }
    }, {
      title: 'Action',
      field: 'Delete',
      columnType: {
        type: 'modal',
        target: 'modal-delete-dirujuk',
        modalParam: {
          type: 'column',
          value: 'id'
        }
      }
    }]]
  };

  if ($('#js-table-dirujuk').hasClass('js-data-dirujuk')) {
    dataTable.init(".js-data-dirujuk", configs);
  }

  $('#modal-create-dirujuk').on('show.bs.modal', function (e) {
    var formElement = $(this);
    var idElement = formElement.find('input#id');
    var namaElement = formElement.find('input#nama');
    idElement.val("");
    namaElement.val("");
  });
  $(".js-dirujuk-save-btn").click(function () {
    var _token = $(this).attr('data-token');

    var _url = $(this).attr('data-url');

    var formElement = $('#modal-create-dirujuk');
    var namaElement = formElement.find('input#nama');

    var _nama = namaElement.val();

    $.ajax({
      method: "POST",
      url: _url,
      data: {
        nama: _nama,
        _token: _token
      }
    }).done(function (_return) {
      $("#modal-create-dirujuk").modal("hide");
      ShowMessageBox("Success", "Data successfully Saved!", 1, 'OK', '.js-data-dirujuk');
    });
  });
  $('#modal-edit-dirujuk').on('show.bs.modal', function (e) {
    var id = e.relatedTarget.dataset.id;
    $(this).attr('data-id', id);

    var _url = $(this).attr('data-url');

    var _token = $(this).attr('data-token');

    var formElement = $(this);
    var idElement = formElement.find('input#id');
    var namaElement = formElement.find('input#nama');
    $.ajax({
      method: "POST",
      url: _url,
      data: {
        id: id,
        _token: _token
      }
    }).done(function (_return) {
      idElement.val(_return.data.id);
      namaElement.val(_return.data.nama);
    });
  });
  $(".js-dirujuk-update-btn").click(function () {
    var _token = $(this).attr('data-token');

    var _url = $(this).attr('data-url');

    var formElement = $('#modal-edit-dirujuk');
    var idElement = formElement.find('input#id');
    var namaElement = formElement.find('input#nama');

    var _id = idElement.val();

    var _nama = namaElement.val();

    $.ajax({
      method: "POST",
      url: _url,
      data: {
        id: _id,
        nama: _nama,
        _token: _token
      }
    }).done(function (_return) {
      $("#modal-edit-dirujuk").modal("hide");
      ShowMessageBox("Success", "Data successfully Updated!", 1, 'OK', '.js-data-dirujuk');
    });
  });
  $('#modal-delete-dirujuk').on('show.bs.modal', function (e) {
    var id = e.relatedTarget.dataset.id;
    $(this).attr('data-id', id);
  });
  $('.js-dirujuk-remove-btn').click(function () {
    var _token = $(this).attr('data-token');

    var _url = $(this).attr('data-url');

    var _id = $('#modal-delete-dirujuk').attr('data-id');

    $.ajax({
      method: "POST",
      url: _url,
      data: {
        id: _id,
        _token: _token
      }
    }).done(function (_return) {
      $("#modal-delete-dirujuk").modal("hide");
      ShowMessageBox("Success", "Data successfully Deleted!", 1, 'OK', '.js-data-dirujuk');
    });
  });
});

/***/ }),

/***/ "./resources/js/page/pasien.js":
/*!*************************************!*\
  !*** ./resources/js/page/pasien.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Created by User2 on 3/30/2020.
 */
$(document).ready(function () {
  urls = document.URL.split('/');
  url = '/pasien';
  if (urls[urls.length - 2] == 'public') url = '/public/pasien';
  var configs = {
    columns: [{
      title: 'Nama',
      field: 'nama',
      columnType: {
        type: 'field'
      }
    }, {
      title: 'No Rekam Medis',
      field: 'no_rekam_medis',
      columnType: {
        type: 'field'
      }
    }, {
      title: 'Domisili',
      field: 'kabupaten',
      columnType: {
        type: 'field'
      }
    }, {
      title: 'Rumah Sakit',
      field: ['rumah_sakit', 'nama'],
      columnType: {
        type: 'field'
      }
    }, [{
      title: 'Action',
      field: 'View',
      columnType: {
        type: 'link',
        link: url,
        linkQuery: '/find/',
        linkParam: {
          type: 'column',
          value: 'id'
        }
      }
    }, {
      title: 'Action',
      field: 'Edit',
      columnType: {
        type: 'link',
        link: url,
        linkQuery: '/edit/',
        linkParam: {
          type: 'column',
          value: 'id'
        }
      }
    }, {
      title: 'Action',
      field: 'Delete',
      columnType: {
        type: 'modal',
        target: 'modal-delete-pasien',
        modalParam: {
          type: 'column',
          value: 'id'
        }
      }
    }]]
  };

  if ($('#js-table-pasien').hasClass('js-data-pasien')) {
    dataTable.init(".js-data-pasien", configs);
  }

  $('#modal-edit-pasien').on('show.bs.modal', function (e) {
    var id = e.relatedTarget.dataset.id;
    console.log('id', id);
    $(this).attr('data-id', id);

    var _url = $(this).attr('data-url');

    var _token = $(this).attr('data-token');

    var formElement = $(this);
    var idElement = formElement.find('input#id');
    var namaElement = formElement.find('input#nama');
    $.ajax({
      method: "POST",
      url: _url,
      data: {
        id: id,
        _token: _token
      }
    }).done(function (_return) {
      idElement.val(_return.data.id);
      namaElement.val(_return.data.nama);
    });
  });
  $(".js-pasien-update-btn").click(function () {
    var _token = $(this).attr('data-token');

    var _url = $(this).attr('data-url');

    var formElement = $('#modal-edit-pasien');
    var idElement = formElement.find('input#id');
    var namaElement = formElement.find('input#nama');

    var _id = idElement.val();

    var _nama = namaElement.val();

    $.ajax({
      method: "POST",
      url: _url,
      data: {
        id: _id,
        nama: _nama,
        _token: _token
      }
    }).done(function (_return) {
      $("#modal-edit-pasien").modal("hide");
      ShowMessageBox("Success", "Data successfully Updated!", 1, 'OK', '.js-data-pasien');
    });
  });
  $('#modal-delete-pasien').on('show.bs.modal', function (e) {
    var id = e.relatedTarget.dataset.id;
    $(this).attr('data-id', id);
  });
  $('.js-pasien-remove-btn').click(function () {
    var _token = $(this).attr('data-token');

    var _url = $(this).attr('data-url');

    var _id = $('#modal-delete-pasien').attr('data-id');

    $.ajax({
      method: "POST",
      url: _url,
      data: {
        id: _id,
        _token: _token
      }
    }).done(function (_return) {
      $("#modal-delete-pasien").modal("hide");
      ShowMessageBox("Success", "Data successfully Deleted!", 1, 'OK', '.js-data-pasien');
    });
  });
  $('#modal-create-pasien').on('show.bs.modal', function (e) {
    var formElement = $(this);
    var idElement = formElement.find('input#id');
    var namaElement = formElement.find('input#nama');
    idElement.val("");
    namaElement.val("");
  });
  $(".js-pasien-save-btn").click(function () {
    var _token = $(this).attr('data-token');

    var _url = $(this).attr('data-url');

    var formElement = $('#modal-create-pasien');
    var namaElement = formElement.find('input#nama');

    var _nama = namaElement.val();

    $.ajax({
      method: "POST",
      url: _url,
      data: {
        nama: _nama,
        _token: _token
      }
    }).done(function (_return) {
      $("#modal-create-pasien").modal("hide");
      ShowMessageBox("Success", "Data successfully Saved!", 1, 'OK', '.js-data-pasien');
    });
  });
});

/***/ }),

/***/ "./resources/js/page/pekerjaan.js":
/*!****************************************!*\
  !*** ./resources/js/page/pekerjaan.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Created by User2 on 4/7/2020.
 */

/**
 * Created by User2 on 3/30/2020.
 */
$(document).ready(function () {
  var configs = {
    columns: [{
      title: 'ID',
      field: 'id',
      columnType: {
        type: 'field'
      }
    }, {
      title: 'Nama',
      field: 'nama',
      columnType: {
        type: 'field'
      }
    }, [{
      title: 'Action',
      field: 'Edit',
      columnType: {
        type: 'modal',
        target: 'modal-edit-pekerjaan',
        modalParam: {
          type: 'column',
          value: 'id'
        }
      }
    }, {
      title: 'Action',
      field: 'Delete',
      columnType: {
        type: 'modal',
        target: 'modal-delete-pekerjaan',
        modalParam: {
          type: 'column',
          value: 'id'
        }
      }
    }]]
  };

  if ($('#js-table-pekerjaan').hasClass('js-data-pekerjaan')) {
    dataTable.init(".js-data-pekerjaan", configs);
  }

  $('#modal-create-pekerjaan').on('show.bs.modal', function (e) {
    var formElement = $(this);
    var idElement = formElement.find('input#id');
    var namaElement = formElement.find('input#nama');
    idElement.val("");
    namaElement.val("");
  });
  $(".js-pekerjaan-save-btn").click(function () {
    var _token = $(this).attr('data-token');

    var _url = $(this).attr('data-url');

    var formElement = $('#modal-create-pekerjaan');
    var namaElement = formElement.find('input#nama');

    var _nama = namaElement.val();

    $.ajax({
      method: "POST",
      url: _url,
      data: {
        nama: _nama,
        _token: _token
      }
    }).done(function (_return) {
      $("#modal-create-pekerjaan").modal("hide");
      ShowMessageBox("Success", "Data successfully Saved!", 1, 'OK', '.js-data-pekerjaan');
    });
  });
  $('#modal-edit-pekerjaan').on('show.bs.modal', function (e) {
    var id = e.relatedTarget.dataset.id;
    $(this).attr('data-id', id);

    var _url = $(this).attr('data-url');

    var _token = $(this).attr('data-token');

    var formElement = $(this);
    var idElement = formElement.find('input#id');
    var namaElement = formElement.find('input#nama');
    $.ajax({
      method: "POST",
      url: _url,
      data: {
        id: id,
        _token: _token
      }
    }).done(function (_return) {
      idElement.val(_return.data.id);
      namaElement.val(_return.data.nama);
    });
  });
  $(".js-pekerjaan-update-btn").click(function () {
    var _token = $(this).attr('data-token');

    var _url = $(this).attr('data-url');

    var formElement = $('#modal-edit-pekerjaan');
    var idElement = formElement.find('input#id');
    var namaElement = formElement.find('input#nama');

    var _id = idElement.val();

    var _nama = namaElement.val();

    $.ajax({
      method: "POST",
      url: _url,
      data: {
        id: _id,
        nama: _nama,
        _token: _token
      }
    }).done(function (_return) {
      $("#modal-edit-pekerjaan").modal("hide");
      ShowMessageBox("Success", "Data successfully Updated!", 1, 'OK', '.js-data-pekerjaan');
    });
  });
  $('#modal-delete-pekerjaan').on('show.bs.modal', function (e) {
    var id = e.relatedTarget.dataset.id;
    $(this).attr('data-id', id);
  });
  $('.js-pekerjaan-remove-btn').click(function () {
    var _token = $(this).attr('data-token');

    var _url = $(this).attr('data-url');

    var _id = $('#modal-delete-pekerjaan').attr('data-id');

    $.ajax({
      method: "POST",
      url: _url,
      data: {
        id: _id,
        _token: _token
      }
    }).done(function (_return) {
      $("#modal-delete-pekerjaan").modal("hide");
      ShowMessageBox("Success", "Data successfully Deleted!", 1, 'OK', '.js-data-pekerjaan');
    });
  });
});

/***/ }),

/***/ "./resources/js/page/pemeriksaanfisik.js":
/*!***********************************************!*\
  !*** ./resources/js/page/pemeriksaanfisik.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Created by User2 on 4/7/2020.
 */

/**
 * Created by User2 on 3/30/2020.
 */
$(document).ready(function () {
  urls = document.URL.split('/');
  url = '/pemeriksaan-fisik';
  if (urls[urls.length - 2] == 'public') url = '/public//pemeriksaan-fisik';
  var configs = {
    columns: [{
      title: 'Nama',
      field: ['pasien', 'nama'],
      columnType: {
        type: 'field'
      }
    }, {
      title: 'Kunjungan',
      field: 'kunjungan',
      columnType: {
        type: 'field'
      }
    }, {
      title: 'No Rekam Medis',
      field: ['pasien', 'no_rekam_medis'],
      columnType: {
        type: 'field'
      }
    }, [{
      title: 'Action',
      field: 'View',
      columnType: {
        type: 'link',
        link: url,
        linkQuery: '/find/',
        linkParam: {
          type: 'column',
          value: 'id'
        }
      }
    }, {
      title: 'Action',
      field: 'Edit',
      columnType: {
        type: 'modal',
        target: 'modal-edit-pemeriksaan-fisik',
        modalParam: {
          type: 'column',
          value: 'id'
        }
      }
    }, {
      title: 'Action',
      field: 'Delete',
      columnType: {
        type: 'modal',
        target: 'modal-delete-pemeriksaan-fisik',
        modalParam: {
          type: 'column',
          value: 'id'
        }
      }
    }]]
  };

  if ($('#js-table-pemeriksaan-fisik').hasClass('js-data-pemeriksaan-fisik')) {
    dataTable.init(".js-data-pemeriksaan-fisik", configs);
  }

  $('#modal-create-pemeriksaan-fisik').on('show.bs.modal', function (e) {
    var formElement = $(this);
    var idElement = formElement.find("#id");
    var idPasienElement = formElement.find("#idPasien");
    var kunjunganElement = formElement.find("#kunjungan");
    var tglPeriksaElement = formElement.find("#tglPeriksa");
    var tdElement = formElement.find("#td");
    var td2Element = formElement.find("#td2");
    var nadiElement = formElement.find("#nadi");
    var tbElement = formElement.find("#td");
    var bbElement = formElement.find("#bb");
    var medrecElement = formElement.find("#medrec");
    var kesadaranElement = formElement.find("#kesadaran");
    var ks1Element = formElement.find("#ks1");
    var ks2Element = formElement.find("#ks2");
    var ks3Element = formElement.find("#ks3");
    var ks4Element = formElement.find("#ks4");
    var ks5Element = formElement.find("#ks5");
    var ks6Element = formElement.find("#ks6");
    var ks7Element = formElement.find("#ks7");
    var ks8Element = formElement.find("#ks8");
    var ks9Element = formElement.find("#ks9");
    var ks10Element = formElement.find("#ks10");
    var ks11Element = formElement.find("#ks11");
    var ks12Element = formElement.find("#ks12");
    var ks13Element = formElement.find("#ks13");
    var ks14Element = formElement.find("#ks14");
    var ks15Element = formElement.find("#ks15");
    var ks16Element = formElement.find("#ks16");
    var ks17Element = formElement.find("#ks17");
    var ks18Element = formElement.find("#ks18");
    var ks19Element = formElement.find("#ks19");
    var ks20Element = formElement.find("#ks20");
    var ks21Element = formElement.find("#ks21");
    var ks22Element = formElement.find("#ks22");
    var ks23Element = formElement.find("#ks23");
    var ks24Element = formElement.find("#ks24");
    var ks25Element = formElement.find("#ks25");
    var ks26Element = formElement.find("#ks26");
    var ks27Element = formElement.find("#ks27");
    var ks28Element = formElement.find("#ks28");
    var ks29Element = formElement.find("#ks29");
    var ks30Element = formElement.find("#ks30");
    var ks31Element = formElement.find("#ks31");
    var ks32Element = formElement.find("#ks32");
    var ks33Element = formElement.find("#ks33");
    var ks34Element = formElement.find("#ks34");
    var ks35Element = formElement.find("#ks35");
    var ks36Element = formElement.find("#ks36");
    var ks37Element = formElement.find("#ks37");
    var ks38Element = formElement.find("#ks38");
    var ks39Element = formElement.find("#ks39");
    var ks40Element = formElement.find("#ks40");
    var ks41Element = formElement.find("#ks41");
    var ks42Element = formElement.find("#ks42");
    var ks43Element = formElement.find("#ks43");
    var ks44Element = formElement.find("#ks44");
    var ks45Element = formElement.find("#ks45");
    var ks46Element = formElement.find("#ks46");
    var ks47Element = formElement.find("#ks47");
    var ks48Element = formElement.find("#ks48");
    var ks49Element = formElement.find("#ks49");
    var ks50Element = formElement.find("#ks50");
    var ks51Element = formElement.find("#ks51");
    var ks52Element = formElement.find("#ks52");
    var ks53Element = formElement.find("#ks53");
    var ks54Element = formElement.find("#ks54");
    var ks55Element = formElement.find("#ks55");
    var ks56Element = formElement.find("#ks56");
    var ks57Element = formElement.find("#ks57");
    var ks58Element = formElement.find("#ks58");
    var ks59Element = formElement.find("#ks59");
    var ks60Element = formElement.find("#ks60");
    var ks61Element = formElement.find("#ks61");
    var ks62Element = formElement.find("#ks62");
    var ks63Element = formElement.find("#ks63");
    var ks64Element = formElement.find("#ks64");
    var ks65Element = formElement.find("#ks65");
    var ks66Element = formElement.find("#ks66");
    var ks67Element = formElement.find("#ks67");
    var ks68Element = formElement.find("#ks68");
    var ks69aElement = formElement.find("#ks69a");
    var ks69bElement = formElement.find("#ks69b");
    var ks69cElement = formElement.find("#ks69c");
    var ks69dElement = formElement.find("#ks69d");
    var ks69eElement = formElement.find("#ks69e");
    var ks69fElement = formElement.find("#ks69f");
    var ks69gElement = formElement.find("#ks69g");
    var ks69hElement = formElement.find("#ks69h");
    var ks69iElement = formElement.find("#ks69i");
    var ks69jElement = formElement.find("#ks69j");
    var ks69kElement = formElement.find("#ks69k");
    var ks69lElement = formElement.find("#ks69l");
    var ks70Element = formElement.find("#ks70");
    var sl1Element = formElement.find("#sl1");
    var sl1aElement = formElement.find("#sl1a");
    var sl2Element = formElement.find("#sl2");
    var sl2aElement = formElement.find("#sl2a");
    var sl3Element = formElement.find("#sl3");
    var sl3aElement = formElement.find("#sl3a");
    var sl4Element = formElement.find("#sl4");
    var sl4aElement = formElement.find("#sl4a");
    var sl5Element = formElement.find("#sl5");
    var sl5aElement = formElement.find("#sl5a");
    var sl6Element = formElement.find("#sl6");
    var sl6aElement = formElement.find("#sl6a");
    var sl7Element = formElement.find("#sl7");
    var sl7aElement = formElement.find("#sl7a");
    var sl8Element = formElement.find("#sl8");
    var sl8aElement = formElement.find("#sl8a");
    var sl9Element = formElement.find("#sl9");
    var sl9aElement = formElement.find("#sl9a");
    var sl10Element = formElement.find("#sl10");
    var sl10aElement = formElement.find("#sl0a");
    var sl11Element = formElement.find("#sl11");
    var sl12Element = formElement.find("#sl12");
    var sl13Element = formElement.find("#sl13");
    var sl14Element = formElement.find("#sl14");
    var sl15Element = formElement.find("#sl15");
    var sl16Element = formElement.find("#sl16");
    var sl17Element = formElement.find("#sl17");
    var sl18Element = formElement.find("#sl18");
    var sl19Element = formElement.find("#sl19");
    var sl20Element = formElement.find("#sl20");
    var sl21Element = formElement.find("#sl21");
    var sl22Element = formElement.find("#sl22");
    var sl23Element = formElement.find("#sl23");
    var sl24Element = formElement.find("#sl24");
    var sl24aElement = formElement.find("#sl24a");
    var sl25Element = formElement.find("#sl25");
    var sl26Element = formElement.find("#sl26");
    var sl27Element = formElement.find("#sl27");
    idElement.val("");
    idPasienElement.val("");
    kunjunganElement.val("");
    tglPeriksaElement.val("");
    tdElement.val("");
    td2Element.val("");
    nadiElement.val("");
    tbElement.val("");
    bbElement.val("");
    medrecElement.val("");
    kesadaranElement.val("");
    ks1Element.val("");
    ks2Element.val("");
    ks3Element.val("");
    ks4Element.val("");
    ks5Element.val("");
    ks6Element.val("");
    ks7Element.val("");
    ks8Element.val("");
    ks9Element.val("");
    ks10Element.val("");
    ks11Element.val("");
    ks12Element.val("");
    ks13Element.val("");
    ks14Element.val("");
    ks15Element.val("");
    ks16Element.val("");
    ks17Element.val("");
    ks18Element.val("");
    ks19Element.val("");
    ks20Element.val("");
    ks21Element.val("");
    ks22Element.val("");
    ks23Element.val("");
    ks24Element.val("");
    ks25Element.val("");
    ks26Element.val("");
    ks27Element.val("");
    ks28Element.val("");
    ks29Element.val("");
    ks30Element.val("");
    ks31Element.val("");
    ks32Element.val("");
    ks33Element.val("");
    ks34Element.val("");
    ks35Element.val("");
    ks36Element.val("");
    ks37Element.val("");
    ks38Element.val("");
    ks39Element.val("");
    ks40Element.val("");
    ks41Element.val("");
    ks42Element.val("");
    ks43Element.val("");
    ks44Element.val("");
    ks45Element.val("");
    ks46Element.val("");
    ks47Element.val("");
    ks48Element.val("");
    ks49Element.val("");
    ks50Element.val("");
    ks51Element.val("");
    ks52Element.val("");
    ks53Element.val("");
    ks54Element.val("");
    ks55Element.val("");
    ks56Element.val("");
    ks57Element.val("");
    ks58Element.val("");
    ks59Element.val("");
    ks60Element.val("");
    ks61Element.val("");
    ks62Element.val("");
    ks63Element.val("");
    ks64Element.val("");
    ks65Element.val("");
    ks66Element.val("");
    ks67Element.val("");
    ks68Element.val("");
    ks69aElement.val("");
    ks69bElement.val("");
    ks69cElement.val("");
    ks69dElement.val("");
    ks69eElement.val("");
    ks69fElement.val("");
    ks69gElement.val("");
    ks69hElement.val("");
    ks69iElement.val("");
    ks69jElement.val("");
    ks69kElement.val("");
    ks69lElement.val("");
    ks70Element.val("");
    sl1Element.val("");
    sl1aElement.val("");
    sl2Element.val("");
    sl2aElement.val("");
    sl3Element.val("");
    sl3aElement.val("");
    sl4Element.val("");
    sl4aElement.val("");
    sl5Element.val("");
    sl5aElement.val("");
    sl6Element.val("");
    sl6aElement.val("");
    sl7Element.val("");
    sl7aElement.val("");
    sl8Element.val("");
    sl8aElement.val("");
    sl9Element.val("");
    sl9aElement.val("");
    sl10Element.val("");
    sl10aElement.val("");
    sl11Element.val("");
    sl12Element.val("");
    sl13Element.val("");
    sl14Element.val("");
    sl15Element.val("");
    sl16Element.val("");
    sl17Element.val("");
    sl18Element.val("");
    sl19Element.val("");
    sl20Element.val("");
    sl21Element.val("");
    sl22Element.val("");
    sl23Element.val("");
    sl24Element.val("");
    sl24aElement.val("");
    sl25Element.val("");
    sl26Element.val("");
    sl27Element.val("");
  });
  $(".js-pemeriksaan-fisik-save-btn").click(function () {
    var _token = $(this).attr('data-token');

    var _url = $(this).attr('data-url');

    var formElement = $('#modal-create-pemeriksaan-fisik');
    var idPasienElement = formElement.find("#idPasien");
    var kunjunganElement = formElement.find("#kunjungan");
    var tglPeriksaElement = formElement.find("#tglPeriksa");
    var tdElement = formElement.find("#td");
    var td2Element = formElement.find("#td2");
    var nadiElement = formElement.find("#nadi");
    var tbElement = formElement.find("#td");
    var bbElement = formElement.find("#bb");
    var medrecElement = formElement.find("#medrec");
    var kesadaranElement = formElement.find("#kesadaran");
    var ks1Element = formElement.find("#ks1");
    var ks2Element = formElement.find("#ks2");
    var ks3Element = formElement.find("#ks3");
    var ks4Element = formElement.find("#ks4");
    var ks5Element = formElement.find("#ks5");
    var ks6Element = formElement.find("#ks6");
    var ks7Element = formElement.find("#ks7");
    var ks8Element = formElement.find("#ks8");
    var ks9Element = formElement.find("#ks9");
    var ks10Element = formElement.find("#ks10");
    var ks11Element = formElement.find("#ks11");
    var ks12Element = formElement.find("#ks12");
    var ks13Element = formElement.find("#ks13");
    var ks14Element = formElement.find("#ks14");
    var ks15Element = formElement.find("#ks15");
    var ks16Element = formElement.find("#ks16");
    var ks17Element = formElement.find("#ks17");
    var ks18Element = formElement.find("#ks18");
    var ks19Element = formElement.find("#ks19");
    var ks20Element = formElement.find("#ks20");
    var ks21Element = formElement.find("#ks21");
    var ks22Element = formElement.find("#ks22");
    var ks23Element = formElement.find("#ks23");
    var ks24Element = formElement.find("#ks24");
    var ks25Element = formElement.find("#ks25");
    var ks26Element = formElement.find("#ks26");
    var ks27Element = formElement.find("#ks27");
    var ks28Element = formElement.find("#ks28");
    var ks29Element = formElement.find("#ks29");
    var ks30Element = formElement.find("#ks30");
    var ks31Element = formElement.find("#ks31");
    var ks32Element = formElement.find("#ks32");
    var ks33Element = formElement.find("#ks33");
    var ks34Element = formElement.find("#ks34");
    var ks35Element = formElement.find("#ks35");
    var ks36Element = formElement.find("#ks36");
    var ks37Element = formElement.find("#ks37");
    var ks38Element = formElement.find("#ks38");
    var ks39Element = formElement.find("#ks39");
    var ks40Element = formElement.find("#ks40");
    var ks41Element = formElement.find("#ks41");
    var ks42Element = formElement.find("#ks42");
    var ks43Element = formElement.find("#ks43");
    var ks44Element = formElement.find("#ks44");
    var ks45Element = formElement.find("#ks45");
    var ks46Element = formElement.find("#ks46");
    var ks47Element = formElement.find("#ks47");
    var ks48Element = formElement.find("#ks48");
    var ks49Element = formElement.find("#ks49");
    var ks50Element = formElement.find("#ks50");
    var ks51Element = formElement.find("#ks51");
    var ks52Element = formElement.find("#ks52");
    var ks53Element = formElement.find("#ks53");
    var ks54Element = formElement.find("#ks54");
    var ks55Element = formElement.find("#ks55");
    var ks56Element = formElement.find("#ks56");
    var ks57Element = formElement.find("#ks57");
    var ks58Element = formElement.find("#ks58");
    var ks59Element = formElement.find("#ks59");
    var ks60Element = formElement.find("#ks60");
    var ks61Element = formElement.find("#ks61");
    var ks62Element = formElement.find("#ks62");
    var ks63Element = formElement.find("#ks63");
    var ks64Element = formElement.find("#ks64");
    var ks65Element = formElement.find("#ks65");
    var ks66Element = formElement.find("#ks66");
    var ks67Element = formElement.find("#ks67");
    var ks68Element = formElement.find("#ks68");
    var ks69aElement = formElement.find("#ks69a");
    var ks69bElement = formElement.find("#ks69b");
    var ks69cElement = formElement.find("#ks69c");
    var ks69dElement = formElement.find("#ks69d");
    var ks69eElement = formElement.find("#ks69e");
    var ks69fElement = formElement.find("#ks69f");
    var ks69gElement = formElement.find("#ks69g");
    var ks69hElement = formElement.find("#ks69h");
    var ks69iElement = formElement.find("#ks69i");
    var ks69jElement = formElement.find("#ks69j");
    var ks69kElement = formElement.find("#ks69k");
    var ks69lElement = formElement.find("#ks69l");
    var ks70Element = formElement.find("#ks70");
    var sl1Element = formElement.find("#sl1");
    var sl1aElement = formElement.find("#sl1a");
    var sl2Element = formElement.find("#sl2");
    var sl2aElement = formElement.find("#sl2a");
    var sl3Element = formElement.find("#sl3");
    var sl3aElement = formElement.find("#sl3a");
    var sl4Element = formElement.find("#sl4");
    var sl4aElement = formElement.find("#sl4a");
    var sl5Element = formElement.find("#sl5");
    var sl5aElement = formElement.find("#sl5a");
    var sl6Element = formElement.find("#sl6");
    var sl6aElement = formElement.find("#sl6a");
    var sl7Element = formElement.find("#sl7");
    var sl7aElement = formElement.find("#sl7a");
    var sl8Element = formElement.find("#sl8");
    var sl8aElement = formElement.find("#sl8a");
    var sl9Element = formElement.find("#sl9");
    var sl9aElement = formElement.find("#sl9a");
    var sl10Element = formElement.find("#sl10");
    var sl10aElement = formElement.find("#sl0a");
    var sl11Element = formElement.find("#sl11");
    var sl12Element = formElement.find("#sl12");
    var sl13Element = formElement.find("#sl13");
    var sl14Element = formElement.find("#sl14");
    var sl15Element = formElement.find("#sl15");
    var sl16Element = formElement.find("#sl16");
    var sl17Element = formElement.find("#sl17");
    var sl18Element = formElement.find("#sl18");
    var sl19Element = formElement.find("#sl19");
    var sl20Element = formElement.find("#sl20");
    var sl21Element = formElement.find("#sl21");
    var sl22Element = formElement.find("#sl22");
    var sl23Element = formElement.find("#sl23");
    var sl24Element = formElement.find("#sl24");
    var sl24aElement = formElement.find("#sl24a");
    var sl25Element = formElement.find("#sl25");
    var sl26Element = formElement.find("#sl26");
    var sl27Element = formElement.find("#sl27");

    var _idPasien = idPasienElement.val();

    var _kunjungan = kunjunganElement.val();

    var _tglPeriksa = tglPeriksaElement.val();

    var _td = tdElement.val();

    var _td2 = td2Element.val();

    var _nadi = nadiElement.val();

    var _tb = tdElement.val();

    var _bb = bbElement.val();

    var _medrec = medrecElement.val();

    var _kesadaran = kesadaranElement.val();

    var _ks1 = ks1Element.val();

    var _ks2 = ks2Element.val();

    var _ks3 = ks3Element.val();

    var _ks4 = ks4Element.val();

    var _ks5 = ks5Element.val();

    var _ks6 = ks6Element.val();

    var _ks7 = ks7Element.val();

    var _ks8 = ks8Element.val();

    var _ks9 = ks9Element.val();

    var _ks10 = ks10Element.val();

    var _ks11 = ks11Element.val();

    var _ks12 = ks12Element.val();

    var _ks13 = ks13Element.val();

    var _ks14 = ks14Element.val();

    var _ks15 = ks15Element.val();

    var _ks16 = ks16Element.val();

    var _ks17 = ks17Element.val();

    var _ks18 = ks18Element.val();

    var _ks19 = ks19Element.val();

    var _ks20 = ks20Element.val();

    var _ks21 = ks21Element.val();

    var _ks22 = ks22Element.val();

    var _ks23 = ks23Element.val();

    var _ks24 = ks24Element.val();

    var _ks25 = ks25Element.val();

    var _ks26 = ks26Element.val();

    var _ks27 = ks27Element.val();

    var _ks28 = ks28Element.val();

    var _ks29 = ks29Element.val();

    var _ks30 = ks30Element.val();

    var _ks31 = ks31Element.val();

    var _ks32 = ks32Element.val();

    var _ks33 = ks33Element.val();

    var _ks34 = ks34Element.val();

    var _ks35 = ks35Element.val();

    var _ks36 = ks36Element.val();

    var _ks37 = ks37Element.val();

    var _ks38 = ks38Element.val();

    var _ks39 = ks39Element.val();

    var _ks40 = ks40Element.val();

    var _ks41 = ks41Element.val();

    var _ks42 = ks42Element.val();

    var _ks43 = ks43Element.val();

    var _ks44 = ks44Element.val();

    var _ks45 = ks45Element.val();

    var _ks46 = ks46Element.val();

    var _ks47 = ks47Element.val();

    var _ks48 = ks48Element.val();

    var _ks49 = ks49Element.val();

    var _ks50 = ks50Element.val();

    var _ks51 = ks51Element.val();

    var _ks52 = ks52Element.val();

    var _ks53 = ks53Element.val();

    var _ks54 = ks54Element.val();

    var _ks55 = ks55Element.val();

    var _ks56 = ks56Element.val();

    var _ks57 = ks57Element.val();

    var _ks58 = ks58Element.val();

    var _ks59 = ks59Element.val();

    var _ks60 = ks60Element.val();

    var _ks61 = ks61Element.val();

    var _ks62 = ks62Element.val();

    var _ks63 = ks63Element.val();

    var _ks64 = ks64Element.val();

    var _ks65 = ks65Element.val();

    var _ks66 = ks66Element.val();

    var _ks67 = ks67Element.val();

    var _ks68 = ks68Element.val();

    var _ks69a = ks69aElement.val();

    var _ks69b = ks69bElement.val();

    var _ks69c = ks69cElement.val();

    var _ks69d = ks69dElement.val();

    var _ks69e = ks69eElement.val();

    var _ks69f = ks69fElement.val();

    var _ks69g = ks69gElement.val();

    var _ks69h = ks69hElement.val();

    var _ks69i = ks69iElement.val();

    var _ks69j = ks69jElement.val();

    var _ks69k = ks69kElement.val();

    var _ks69l = ks69lElement.val();

    var _ks70 = ks70Element.val();

    var _sl1 = sl1Element.val();

    var _sl1a = sl1aElement.val();

    var _sl2 = sl2Element.val();

    var _sl2a = sl2aElement.val();

    var _sl3 = sl3Element.val();

    var _sl3a = sl3aElement.val();

    var _sl4 = sl4Element.val();

    var _sl4a = sl4aElement.val();

    var _sl5 = sl5Element.val();

    var _sl5a = sl5aElement.val();

    var _sl6 = sl6Element.val();

    var _sl6a = sl6aElement.val();

    var _sl7 = sl7Element.val();

    var _sl7a = sl7aElement.val();

    var _sl8 = sl8Element.val();

    var _sl8a = sl8aElement.val();

    var _sl9 = sl9Element.val();

    var _sl9a = sl9aElement.val();

    var _sl10 = sl10Element.val();

    var _sl10a = sl10aElement.val();

    var _sl11 = sl11Element.val();

    var _sl12 = sl12Element.val();

    var _sl13 = sl13Element.val();

    var _sl14 = sl14Element.val();

    var _sl15 = sl15Element.val();

    var _sl16 = sl16Element.val();

    var _sl17 = sl17Element.val();

    var _sl18 = sl18Element.val();

    var _sl19 = sl19Element.val();

    var _sl20 = sl20Element.val();

    var _sl21 = sl21Element.val();

    var _sl22 = sl22Element.val();

    var _sl23 = sl23Element.val();

    var _sl24 = sl24Element.val();

    var _sl24a = sl24aElement.val();

    var _sl25 = sl25Element.val();

    var _sl26 = sl26Element.val();

    var _sl27 = sl27Element.val();

    $.ajax({
      method: "POST",
      url: _url,
      data: {
        idPasien: _idPasien,
        kunjungan: _kunjungan,
        tglPeriksa: _tglPeriksa,
        td: _td,
        td2: _td2,
        nadi: _nadi,
        tb: _td,
        bb: _bb,
        medrec: _medrec,
        kesadaran: _kesadaran,
        ks1: _ks1,
        ks2: _ks2,
        ks3: _ks3,
        ks4: _ks4,
        ks5: _ks5,
        ks6: _ks6,
        ks7: _ks7,
        ks8: _ks8,
        ks9: _ks9,
        ks10: _ks10,
        ks11: _ks11,
        ks12: _ks12,
        ks13: _ks13,
        ks14: _ks14,
        ks15: _ks15,
        ks16: _ks16,
        ks17: _ks17,
        ks18: _ks18,
        ks19: _ks19,
        ks20: _ks20,
        ks21: _ks21,
        ks22: _ks22,
        ks23: _ks23,
        ks24: _ks24,
        ks25: _ks25,
        ks26: _ks26,
        ks27: _ks27,
        ks28: _ks28,
        ks29: _ks29,
        ks30: _ks30,
        ks31: _ks31,
        ks32: _ks32,
        ks33: _ks33,
        ks34: _ks34,
        ks35: _ks35,
        ks36: _ks36,
        ks37: _ks37,
        ks38: _ks38,
        ks39: _ks39,
        ks40: _ks40,
        ks41: _ks41,
        ks42: _ks42,
        ks43: _ks43,
        ks44: _ks44,
        ks45: _ks45,
        ks46: _ks46,
        ks47: _ks47,
        ks48: _ks48,
        ks49: _ks49,
        ks50: _ks50,
        ks51: _ks51,
        ks52: _ks52,
        ks53: _ks53,
        ks54: _ks54,
        ks55: _ks55,
        ks56: _ks56,
        ks57: _ks57,
        ks58: _ks58,
        ks59: _ks59,
        ks60: _ks60,
        ks61: _ks61,
        ks62: _ks62,
        ks63: _ks63,
        ks64: _ks64,
        ks65: _ks65,
        ks66: _ks66,
        ks67: _ks67,
        ks68: _ks68,
        ks69a: _ks69a,
        ks69b: _ks69b,
        ks69c: _ks69c,
        ks69d: _ks69d,
        ks69e: _ks69e,
        ks69f: _ks69f,
        ks69g: _ks69g,
        ks69h: _ks69h,
        ks69i: _ks69i,
        ks69j: _ks69j,
        ks69k: _ks69k,
        ks69l: _ks69l,
        ks70: _ks70,
        sl1: _sl1,
        sl1a: _sl1a,
        sl2: _sl2,
        sl2a: _sl2a,
        sl3: _sl3,
        sl3a: _sl3a,
        sl4: _sl4,
        sl4a: _sl4a,
        sl5: _sl5,
        sl5a: _sl5a,
        sl6: _sl6,
        sl6a: _sl6a,
        sl7: _sl7,
        sl7a: _sl7a,
        sl8: _sl8,
        sl8a: _sl8a,
        sl9: _sl9,
        sl9a: _sl9a,
        sl10: _sl10,
        sl10a: _sl10a,
        sl11: _sl11,
        sl12: _sl12,
        sl13: _sl13,
        sl14: _sl14,
        sl15: _sl15,
        sl16: _sl16,
        sl17: _sl17,
        sl18: _sl18,
        sl19: _sl19,
        sl20: _sl20,
        sl21: _sl21,
        sl22: _sl22,
        sl23: _sl23,
        sl24: _sl24,
        sl24a: _sl24a,
        sl25: _sl25,
        sl26: _sl26,
        sl27: _sl27,
        _token: _token
      }
    }).done(function (_return) {
      $("#modal-create-pemeriksaan-fisik").modal("hide");
      ShowMessageBox("Success", "Data successfully Saved!", 1, 'OK', '.js-data-pemeriksaan-fisik');
    });
  });
  $('#modal-edit-pemeriksaan-fisik').on('show.bs.modal', function (e) {
    var id = e.relatedTarget.dataset.id;
    $(this).attr('data-id', id);

    var _url = $(this).attr('data-url');

    var _token = $(this).attr('data-token');

    var formElement = $(this);
    var idElement = formElement.find("#id");
    var idPasienElement = formElement.find("#idPasien");
    var kunjunganElement = formElement.find("#kunjungan");
    var tglPeriksaElement = formElement.find("#tglPeriksa");
    var tdElement = formElement.find("#td");
    var td2Element = formElement.find("#td2");
    var nadiElement = formElement.find("#nadi");
    var tbElement = formElement.find("#td");
    var bbElement = formElement.find("#bb");
    var medrecElement = formElement.find("#medrec");
    var kesadaranElement = formElement.find("#kesadaran");
    var ks1Element = formElement.find("#ks1");
    var ks2Element = formElement.find("#ks2");
    var ks3Element = formElement.find("#ks3");
    var ks4Element = formElement.find("#ks4");
    var ks5Element = formElement.find("#ks5");
    var ks6Element = formElement.find("#ks6");
    var ks7Element = formElement.find("#ks7");
    var ks8Element = formElement.find("#ks8");
    var ks9Element = formElement.find("#ks9");
    var ks10Element = formElement.find("#ks10");
    var ks11Element = formElement.find("#ks11");
    var ks12Element = formElement.find("#ks12");
    var ks13Element = formElement.find("#ks13");
    var ks14Element = formElement.find("#ks14");
    var ks15Element = formElement.find("#ks15");
    var ks16Element = formElement.find("#ks16");
    var ks17Element = formElement.find("#ks17");
    var ks18Element = formElement.find("#ks18");
    var ks19Element = formElement.find("#ks19");
    var ks20Element = formElement.find("#ks20");
    var ks21Element = formElement.find("#ks21");
    var ks22Element = formElement.find("#ks22");
    var ks23Element = formElement.find("#ks23");
    var ks24Element = formElement.find("#ks24");
    var ks25Element = formElement.find("#ks25");
    var ks26Element = formElement.find("#ks26");
    var ks27Element = formElement.find("#ks27");
    var ks28Element = formElement.find("#ks28");
    var ks29Element = formElement.find("#ks29");
    var ks30Element = formElement.find("#ks30");
    var ks31Element = formElement.find("#ks31");
    var ks32Element = formElement.find("#ks32");
    var ks33Element = formElement.find("#ks33");
    var ks34Element = formElement.find("#ks34");
    var ks35Element = formElement.find("#ks35");
    var ks36Element = formElement.find("#ks36");
    var ks37Element = formElement.find("#ks37");
    var ks38Element = formElement.find("#ks38");
    var ks39Element = formElement.find("#ks39");
    var ks40Element = formElement.find("#ks40");
    var ks41Element = formElement.find("#ks41");
    var ks42Element = formElement.find("#ks42");
    var ks43Element = formElement.find("#ks43");
    var ks44Element = formElement.find("#ks44");
    var ks45Element = formElement.find("#ks45");
    var ks46Element = formElement.find("#ks46");
    var ks47Element = formElement.find("#ks47");
    var ks48Element = formElement.find("#ks48");
    var ks49Element = formElement.find("#ks49");
    var ks50Element = formElement.find("#ks50");
    var ks51Element = formElement.find("#ks51");
    var ks52Element = formElement.find("#ks52");
    var ks53Element = formElement.find("#ks53");
    var ks54Element = formElement.find("#ks54");
    var ks55Element = formElement.find("#ks55");
    var ks56Element = formElement.find("#ks56");
    var ks57Element = formElement.find("#ks57");
    var ks58Element = formElement.find("#ks58");
    var ks59Element = formElement.find("#ks59");
    var ks60Element = formElement.find("#ks60");
    var ks61Element = formElement.find("#ks61");
    var ks62Element = formElement.find("#ks62");
    var ks63Element = formElement.find("#ks63");
    var ks64Element = formElement.find("#ks64");
    var ks65Element = formElement.find("#ks65");
    var ks66Element = formElement.find("#ks66");
    var ks67Element = formElement.find("#ks67");
    var ks68Element = formElement.find("#ks68");
    var ks69aElement = formElement.find("#ks69a");
    var ks69bElement = formElement.find("#ks69b");
    var ks69cElement = formElement.find("#ks69c");
    var ks69dElement = formElement.find("#ks69d");
    var ks69eElement = formElement.find("#ks69e");
    var ks69fElement = formElement.find("#ks69f");
    var ks69gElement = formElement.find("#ks69g");
    var ks69hElement = formElement.find("#ks69h");
    var ks69iElement = formElement.find("#ks69i");
    var ks69jElement = formElement.find("#ks69j");
    var ks69kElement = formElement.find("#ks69k");
    var ks69lElement = formElement.find("#ks69l");
    var ks70Element = formElement.find("#ks70");
    var sl1Element = formElement.find("#sl1");
    var sl1aElement = formElement.find("#sl1a");
    var sl2Element = formElement.find("#sl2");
    var sl2aElement = formElement.find("#sl2a");
    var sl3Element = formElement.find("#sl3");
    var sl3aElement = formElement.find("#sl3a");
    var sl4Element = formElement.find("#sl4");
    var sl4aElement = formElement.find("#sl4a");
    var sl5Element = formElement.find("#sl5");
    var sl5aElement = formElement.find("#sl5a");
    var sl6Element = formElement.find("#sl6");
    var sl6aElement = formElement.find("#sl6a");
    var sl7Element = formElement.find("#sl7");
    var sl7aElement = formElement.find("#sl7a");
    var sl8Element = formElement.find("#sl8");
    var sl8aElement = formElement.find("#sl8a");
    var sl9Element = formElement.find("#sl9");
    var sl9aElement = formElement.find("#sl9a");
    var sl10Element = formElement.find("#sl10");
    var sl10aElement = formElement.find("#sl0a");
    var sl11Element = formElement.find("#sl11");
    var sl12Element = formElement.find("#sl12");
    var sl13Element = formElement.find("#sl13");
    var sl14Element = formElement.find("#sl14");
    var sl15Element = formElement.find("#sl15");
    var sl16Element = formElement.find("#sl16");
    var sl17Element = formElement.find("#sl17");
    var sl18Element = formElement.find("#sl18");
    var sl19Element = formElement.find("#sl19");
    var sl20Element = formElement.find("#sl20");
    var sl21Element = formElement.find("#sl21");
    var sl22Element = formElement.find("#sl22");
    var sl23Element = formElement.find("#sl23");
    var sl24Element = formElement.find("#sl24");
    var sl24aElement = formElement.find("#sl24a");
    var sl25Element = formElement.find("#sl25");
    var sl26Element = formElement.find("#sl26");
    var sl27Element = formElement.find("#sl27");
    $.ajax({
      method: "POST",
      url: _url,
      data: {
        id: id,
        _token: _token
      }
    }).done(function (_return) {
      idElement.val(_return.data.id);
      idPasienElement.val(_return.data.idPasien);
      kunjunganElement.val(_return.data.kunjungan);
      tglPeriksaElement.val(_return.data.tglPeriksa);
      tdElement.val(_return.data.td);
      td2Element.val(_return.data.td2);
      nadiElement.val(_return.data.nadi);
      tbElement.val(_return.data.td);
      bbElement.val(_return.data.bb);
      MedrecElement.val(_return.data.medrec);
      kesadaranElement.val(_return.data.kesadaran);
      ks1Element.val(_return.data.ks1);
      ks2Element.val(_return.data.ks2);
      ks3Element.val(_return.data.ks3);
      ks4Element.val(_return.data.ks4);
      ks5Element.val(_return.data.ks5);
      ks6Element.val(_return.data.ks6);
      ks7Element.val(_return.data.ks7);
      ks8Element.val(_return.data.ks8);
      ks9Element.val(_return.data.ks9);
      ks10Element.val(_return.data.ks10);
      ks11Element.val(_return.data.ks11);
      ks12Element.val(_return.data.ks12);
      ks13Element.val(_return.data.ks13);
      ks14Element.val(_return.data.ks14);
      ks15Element.val(_return.data.ks15);
      ks16Element.val(_return.data.ks16);
      ks17Element.val(_return.data.ks17);
      ks18Element.val(_return.data.ks18);
      ks19Element.val(_return.data.ks19);
      ks20Element.val(_return.data.ks20);
      ks21Element.val(_return.data.ks21);
      ks22Element.val(_return.data.ks22);
      ks23Element.val(_return.data.ks23);
      ks24Element.val(_return.data.ks24);
      ks25Element.val(_return.data.ks25);
      ks26Element.val(_return.data.ks26);
      ks27Element.val(_return.data.ks27);
      ks28Element.val(_return.data.ks28);
      ks29Element.val(_return.data.ks29);
      ks30Element.val(_return.data.ks30);
      ks31Element.val(_return.data.ks31);
      ks32Element.val(_return.data.ks32);
      ks33Element.val(_return.data.ks33);
      ks34Element.val(_return.data.ks34);
      ks35Element.val(_return.data.ks35);
      ks36Element.val(_return.data.ks36);
      ks37Element.val(_return.data.ks37);
      ks38Element.val(_return.data.ks38);
      ks39Element.val(_return.data.ks39);
      ks40Element.val(_return.data.ks40);
      ks41Element.val(_return.data.ks41);
      ks42Element.val(_return.data.ks42);
      ks43Element.val(_return.data.ks43);
      ks44Element.val(_return.data.ks44);
      ks45Element.val(_return.data.ks45);
      ks46Element.val(_return.data.ks46);
      ks47Element.val(_return.data.ks47);
      ks48Element.val(_return.data.ks48);
      ks49Element.val(_return.data.ks49);
      ks50Element.val(_return.data.ks50);
      ks51Element.val(_return.data.ks51);
      ks52Element.val(_return.data.ks52);
      ks53Element.val(_return.data.ks53);
      ks54Element.val(_return.data.ks54);
      ks55Element.val(_return.data.ks55);
      ks56Element.val(_return.data.ks56);
      ks57Element.val(_return.data.ks57);
      ks58Element.val(_return.data.ks58);
      ks59Element.val(_return.data.ks59);
      ks60Element.val(_return.data.ks60);
      ks61Element.val(_return.data.ks61);
      ks62Element.val(_return.data.ks62);
      ks63Element.val(_return.data.ks63);
      ks64Element.val(_return.data.ks64);
      ks65Element.val(_return.data.ks65);
      ks66Element.val(_return.data.ks66);
      ks67Element.val(_return.data.ks67);
      ks68Element.val(_return.data.ks68);
      ks69aElement.val(_return.data.ks69a);
      ks69bElement.val(_return.data.ks69b);
      ks69cElement.val(_return.data.ks69c);
      ks69dElement.val(_return.data.ks69d);
      ks69eElement.val(_return.data.ks69e);
      ks69fElement.val(_return.data.ks69f);
      ks69gElement.val(_return.data.ks69g);
      ks69hElement.val(_return.data.ks69h);
      ks69iElement.val(_return.data.ks69i);
      ks69jElement.val(_return.data.ks69j);
      ks69kElement.val(_return.data.ks69k);
      ks69lElement.val(_return.data.ks69l);
      ks70Element.val(_return.data.ks70);
      sl1Element.val(_return.data.sl1);
      sl1aElement.val(_return.data.sl1a);
      sl2Element.val(_return.data.sl2);
      sl2aElement.val(_return.data.sl2a);
      sl3Element.val(_return.data.sl3);
      sl3aElement.val(_return.data.sl3a);
      sl4Element.val(_return.data.sl4);
      sl4aElement.val(_return.data.sl4a);
      sl5Element.val(_return.data.sl5);
      sl5aElement.val(_return.data.sl5a);
      sl6Element.val(_return.data.sl6);
      sl6aElement.val(_return.data.sl6a);
      sl7Element.val(_return.data.sl7);
      sl7aElement.val(_return.data.sl7a);
      sl8Element.val(_return.data.sl8);
      sl8aElement.val(_return.data.sl8a);
      sl9Element.val(_return.data.sl9);
      sl9aElement.val(_return.data.sl9a);
      sl10Element.val(_return.data.sl10);
      sl10aElement.val(_return.data.sl0a);
      sl11Element.val(_return.data.sl11);
      sl12Element.val(_return.data.sl12);
      sl13Element.val(_return.data.sl13);
      sl14Element.val(_return.data.sl14);
      sl15Element.val(_return.data.sl15);
      sl16Element.val(_return.data.sl16);
      sl17Element.val(_return.data.sl17);
      sl18Element.val(_return.data.sl18);
      sl19Element.val(_return.data.sl19);
      sl20Element.val(_return.data.sl20);
      sl21Element.val(_return.data.sl21);
      sl22Element.val(_return.data.sl22);
      sl23Element.val(_return.data.sl23);
      sl24Element.val(_return.data.sl24);
      sl24aElement.val(_return.data.sl24a);
      sl25Element.val(_return.data.sl25);
      sl26Element.val(_return.data.sl26);
      sl27Element.val(_return.data.sl27);
    });
  });
  $(".js-pemeriksaan-fisik-update-btn").click(function () {
    var _token = $(this).attr('data-token');

    var _url = $(this).attr('data-url');

    var formElement = $('#modal-edit-pemeriksaan-fisik');
    var idElement = formElement.find("#id");
    var idPasienElement = formElement.find("#idPasien");
    var kunjunganElement = formElement.find("#kunjungan");
    var tglPeriksaElement = formElement.find("#tglPeriksa");
    var tdElement = formElement.find("#td");
    var td2Element = formElement.find("#td2");
    var nadiElement = formElement.find("#nadi");
    var tbElement = formElement.find("#td");
    var bbElement = formElement.find("#bb");
    var medrecElement = formElement.find("#medrec");
    var kesadaranElement = formElement.find("#kesadaran");
    var ks1Element = formElement.find("#ks1");
    var ks2Element = formElement.find("#ks2");
    var ks3Element = formElement.find("#ks3");
    var ks4Element = formElement.find("#ks4");
    var ks5Element = formElement.find("#ks5");
    var ks6Element = formElement.find("#ks6");
    var ks7Element = formElement.find("#ks7");
    var ks8Element = formElement.find("#ks8");
    var ks9Element = formElement.find("#ks9");
    var ks10Element = formElement.find("#ks10");
    var ks11Element = formElement.find("#ks11");
    var ks12Element = formElement.find("#ks12");
    var ks13Element = formElement.find("#ks13");
    var ks14Element = formElement.find("#ks14");
    var ks15Element = formElement.find("#ks15");
    var ks16Element = formElement.find("#ks16");
    var ks17Element = formElement.find("#ks17");
    var ks18Element = formElement.find("#ks18");
    var ks19Element = formElement.find("#ks19");
    var ks20Element = formElement.find("#ks20");
    var ks21Element = formElement.find("#ks21");
    var ks22Element = formElement.find("#ks22");
    var ks23Element = formElement.find("#ks23");
    var ks24Element = formElement.find("#ks24");
    var ks25Element = formElement.find("#ks25");
    var ks26Element = formElement.find("#ks26");
    var ks27Element = formElement.find("#ks27");
    var ks28Element = formElement.find("#ks28");
    var ks29Element = formElement.find("#ks29");
    var ks30Element = formElement.find("#ks30");
    var ks31Element = formElement.find("#ks31");
    var ks32Element = formElement.find("#ks32");
    var ks33Element = formElement.find("#ks33");
    var ks34Element = formElement.find("#ks34");
    var ks35Element = formElement.find("#ks35");
    var ks36Element = formElement.find("#ks36");
    var ks37Element = formElement.find("#ks37");
    var ks38Element = formElement.find("#ks38");
    var ks39Element = formElement.find("#ks39");
    var ks40Element = formElement.find("#ks40");
    var ks41Element = formElement.find("#ks41");
    var ks42Element = formElement.find("#ks42");
    var ks43Element = formElement.find("#ks43");
    var ks44Element = formElement.find("#ks44");
    var ks45Element = formElement.find("#ks45");
    var ks46Element = formElement.find("#ks46");
    var ks47Element = formElement.find("#ks47");
    var ks48Element = formElement.find("#ks48");
    var ks49Element = formElement.find("#ks49");
    var ks50Element = formElement.find("#ks50");
    var ks51Element = formElement.find("#ks51");
    var ks52Element = formElement.find("#ks52");
    var ks53Element = formElement.find("#ks53");
    var ks54Element = formElement.find("#ks54");
    var ks55Element = formElement.find("#ks55");
    var ks56Element = formElement.find("#ks56");
    var ks57Element = formElement.find("#ks57");
    var ks58Element = formElement.find("#ks58");
    var ks59Element = formElement.find("#ks59");
    var ks60Element = formElement.find("#ks60");
    var ks61Element = formElement.find("#ks61");
    var ks62Element = formElement.find("#ks62");
    var ks63Element = formElement.find("#ks63");
    var ks64Element = formElement.find("#ks64");
    var ks65Element = formElement.find("#ks65");
    var ks66Element = formElement.find("#ks66");
    var ks67Element = formElement.find("#ks67");
    var ks68Element = formElement.find("#ks68");
    var ks69aElement = formElement.find("#ks69a");
    var ks69bElement = formElement.find("#ks69b");
    var ks69cElement = formElement.find("#ks69c");
    var ks69dElement = formElement.find("#ks69d");
    var ks69eElement = formElement.find("#ks69e");
    var ks69fElement = formElement.find("#ks69f");
    var ks69gElement = formElement.find("#ks69g");
    var ks69hElement = formElement.find("#ks69h");
    var ks69iElement = formElement.find("#ks69i");
    var ks69jElement = formElement.find("#ks69j");
    var ks69kElement = formElement.find("#ks69k");
    var ks69lElement = formElement.find("#ks69l");
    var ks70Element = formElement.find("#ks70");
    var sl1Element = formElement.find("#sl1");
    var sl1aElement = formElement.find("#sl1a");
    var sl2Element = formElement.find("#sl2");
    var sl2aElement = formElement.find("#sl2a");
    var sl3Element = formElement.find("#sl3");
    var sl3aElement = formElement.find("#sl3a");
    var sl4Element = formElement.find("#sl4");
    var sl4aElement = formElement.find("#sl4a");
    var sl5Element = formElement.find("#sl5");
    var sl5aElement = formElement.find("#sl5a");
    var sl6Element = formElement.find("#sl6");
    var sl6aElement = formElement.find("#sl6a");
    var sl7Element = formElement.find("#sl7");
    var sl7aElement = formElement.find("#sl7a");
    var sl8Element = formElement.find("#sl8");
    var sl8aElement = formElement.find("#sl8a");
    var sl9Element = formElement.find("#sl9");
    var sl9aElement = formElement.find("#sl9a");
    var sl10Element = formElement.find("#sl10");
    var sl10aElement = formElement.find("#sl0a");
    var sl11Element = formElement.find("#sl11");
    var sl12Element = formElement.find("#sl12");
    var sl13Element = formElement.find("#sl13");
    var sl14Element = formElement.find("#sl14");
    var sl15Element = formElement.find("#sl15");
    var sl16Element = formElement.find("#sl16");
    var sl17Element = formElement.find("#sl17");
    var sl18Element = formElement.find("#sl18");
    var sl19Element = formElement.find("#sl19");
    var sl20Element = formElement.find("#sl20");
    var sl21Element = formElement.find("#sl21");
    var sl22Element = formElement.find("#sl22");
    var sl23Element = formElement.find("#sl23");
    var sl24Element = formElement.find("#sl24");
    var sl24aElement = formElement.find("#sl24a");
    var sl25Element = formElement.find("#sl25");
    var sl26Element = formElement.find("#sl26");
    var sl27Element = formElement.find("#sl27");

    var _id = idElement.val();

    var _idPasien = idPasienElement.val();

    var _kunjungan = kunjunganElement.val();

    var _tglPeriksa = tglPeriksaElement.val();

    var _td = tdElement.val();

    var _td2 = td2Element.val();

    var _nadi = nadiElement.val();

    var _tb = tdElement.val();

    var _bb = bbElement.val();

    var _medrec = medrecElement.val();

    var _kesadaran = kesadaranElement.val();

    var _ks1 = ks1Element.val();

    var _ks2 = ks2Element.val();

    var _ks3 = ks3Element.val();

    var _ks4 = ks4Element.val();

    var _ks5 = ks5Element.val();

    var _ks6 = ks6Element.val();

    var _ks7 = ks7Element.val();

    var _ks8 = ks8Element.val();

    var _ks9 = ks9Element.val();

    var _ks10 = ks10Element.val();

    var _ks11 = ks11Element.val();

    var _ks12 = ks12Element.val();

    var _ks13 = ks13Element.val();

    var _ks14 = ks14Element.val();

    var _ks15 = ks15Element.val();

    var _ks16 = ks16Element.val();

    var _ks17 = ks17Element.val();

    var _ks18 = ks18Element.val();

    var _ks19 = ks19Element.val();

    var _ks20 = ks20Element.val();

    var _ks21 = ks21Element.val();

    var _ks22 = ks22Element.val();

    var _ks23 = ks23Element.val();

    var _ks24 = ks24Element.val();

    var _ks25 = ks25Element.val();

    var _ks26 = ks26Element.val();

    var _ks27 = ks27Element.val();

    var _ks28 = ks28Element.val();

    var _ks29 = ks29Element.val();

    var _ks30 = ks30Element.val();

    var _ks31 = ks31Element.val();

    var _ks32 = ks32Element.val();

    var _ks33 = ks33Element.val();

    var _ks34 = ks34Element.val();

    var _ks35 = ks35Element.val();

    var _ks36 = ks36Element.val();

    var _ks37 = ks37Element.val();

    var _ks38 = ks38Element.val();

    var _ks39 = ks39Element.val();

    var _ks40 = ks40Element.val();

    var _ks41 = ks41Element.val();

    var _ks42 = ks42Element.val();

    var _ks43 = ks43Element.val();

    var _ks44 = ks44Element.val();

    var _ks45 = ks45Element.val();

    var _ks46 = ks46Element.val();

    var _ks47 = ks47Element.val();

    var _ks48 = ks48Element.val();

    var _ks49 = ks49Element.val();

    var _ks50 = ks50Element.val();

    var _ks51 = ks51Element.val();

    var _ks52 = ks52Element.val();

    var _ks53 = ks53Element.val();

    var _ks54 = ks54Element.val();

    var _ks55 = ks55Element.val();

    var _ks56 = ks56Element.val();

    var _ks57 = ks57Element.val();

    var _ks58 = ks58Element.val();

    var _ks59 = ks59Element.val();

    var _ks60 = ks60Element.val();

    var _ks61 = ks61Element.val();

    var _ks62 = ks62Element.val();

    var _ks63 = ks63Element.val();

    var _ks64 = ks64Element.val();

    var _ks65 = ks65Element.val();

    var _ks66 = ks66Element.val();

    var _ks67 = ks67Element.val();

    var _ks68 = ks68Element.val();

    var _ks69a = ks69aElement.val();

    var _ks69b = ks69bElement.val();

    var _ks69c = ks69cElement.val();

    var _ks69d = ks69dElement.val();

    var _ks69e = ks69eElement.val();

    var _ks69f = ks69fElement.val();

    var _ks69g = ks69gElement.val();

    var _ks69h = ks69hElement.val();

    var _ks69i = ks69iElement.val();

    var _ks69j = ks69jElement.val();

    var _ks69k = ks69kElement.val();

    var _ks69l = ks69lElement.val();

    var _ks70 = ks70Element.val();

    var _sl1 = sl1Element.val();

    var _sl1a = sl1aElement.val();

    var _sl2 = sl2Element.val();

    var _sl2a = sl2aElement.val();

    var _sl3 = sl3Element.val();

    var _sl3a = sl3aElement.val();

    var _sl4 = sl4Element.val();

    var _sl4a = sl4aElement.val();

    var _sl5 = sl5Element.val();

    var _sl5a = sl5aElement.val();

    var _sl6 = sl6Element.val();

    var _sl6a = sl6aElement.val();

    var _sl7 = sl7Element.val();

    var _sl7a = sl7aElement.val();

    var _sl8 = sl8Element.val();

    var _sl8a = sl8aElement.val();

    var _sl9 = sl9Element.val();

    var _sl9a = sl9aElement.val();

    var _sl10 = sl10Element.val();

    var _sl10a = sl10aElement.val();

    var _sl11 = sl11Element.val();

    var _sl12 = sl12Element.val();

    var _sl13 = sl13Element.val();

    var _sl14 = sl14Element.val();

    var _sl15 = sl15Element.val();

    var _sl16 = sl16Element.val();

    var _sl17 = sl17Element.val();

    var _sl18 = sl18Element.val();

    var _sl19 = sl19Element.val();

    var _sl20 = sl20Element.val();

    var _sl21 = sl21Element.val();

    var _sl22 = sl22Element.val();

    var _sl23 = sl23Element.val();

    var _sl24 = sl24Element.val();

    var _sl24a = sl24aElement.val();

    var _sl25 = sl25Element.val();

    var _sl26 = sl26Element.val();

    var _sl27 = sl27Element.val();

    $.ajax({
      method: "POST",
      url: _url,
      data: {
        id: _id,
        idPasien: _idPasien,
        kunjungan: _kunjungan,
        tglPeriksa: _tglPeriksa,
        td: _td,
        td2: _td2,
        nadi: _nadi,
        tb: _td,
        bb: _bb,
        medrec: _medrec,
        kesadaran: _kesadaran,
        ks1: _ks1,
        ks2: _ks2,
        ks3: _ks3,
        ks4: _ks4,
        ks5: _ks5,
        ks6: _ks6,
        ks7: _ks7,
        ks8: _ks8,
        ks9: _ks9,
        ks10: _ks10,
        ks11: _ks11,
        ks12: _ks12,
        ks13: _ks13,
        ks14: _ks14,
        ks15: _ks15,
        ks16: _ks16,
        ks17: _ks17,
        ks18: _ks18,
        ks19: _ks19,
        ks20: _ks20,
        ks21: _ks21,
        ks22: _ks22,
        ks23: _ks23,
        ks24: _ks24,
        ks25: _ks25,
        ks26: _ks26,
        ks27: _ks27,
        ks28: _ks28,
        ks29: _ks29,
        ks30: _ks30,
        ks31: _ks31,
        ks32: _ks32,
        ks33: _ks33,
        ks34: _ks34,
        ks35: _ks35,
        ks36: _ks36,
        ks37: _ks37,
        ks38: _ks38,
        ks39: _ks39,
        ks40: _ks40,
        ks41: _ks41,
        ks42: _ks42,
        ks43: _ks43,
        ks44: _ks44,
        ks45: _ks45,
        ks46: _ks46,
        ks47: _ks47,
        ks48: _ks48,
        ks49: _ks49,
        ks50: _ks50,
        ks51: _ks51,
        ks52: _ks52,
        ks53: _ks53,
        ks54: _ks54,
        ks55: _ks55,
        ks56: _ks56,
        ks57: _ks57,
        ks58: _ks58,
        ks59: _ks59,
        ks60: _ks60,
        ks61: _ks61,
        ks62: _ks62,
        ks63: _ks63,
        ks64: _ks64,
        ks65: _ks65,
        ks66: _ks66,
        ks67: _ks67,
        ks68: _ks68,
        ks69a: _ks69a,
        ks69b: _ks69b,
        ks69c: _ks69c,
        ks69d: _ks69d,
        ks69e: _ks69e,
        ks69f: _ks69f,
        ks69g: _ks69g,
        ks69h: _ks69h,
        ks69i: _ks69i,
        ks69j: _ks69j,
        ks69k: _ks69k,
        ks69l: _ks69l,
        ks70: _ks70,
        sl1: _sl1,
        sl1a: _sl1a,
        sl2: _sl2,
        sl2a: _sl2a,
        sl3: _sl3,
        sl3a: _sl3a,
        sl4: _sl4,
        sl4a: _sl4a,
        sl5: _sl5,
        sl5a: _sl5a,
        sl6: _sl6,
        sl6a: _sl6a,
        sl7: _sl7,
        sl7a: _sl7a,
        sl8: _sl8,
        sl8a: _sl8a,
        sl9: _sl9,
        sl9a: _sl9a,
        sl10: _sl10,
        sl10a: _sl10a,
        sl11: _sl11,
        sl12: _sl12,
        sl13: _sl13,
        sl14: _sl14,
        sl15: _sl15,
        sl16: _sl16,
        sl17: _sl17,
        sl18: _sl18,
        sl19: _sl19,
        sl20: _sl20,
        sl21: _sl21,
        sl22: _sl22,
        sl23: _sl23,
        sl24: _sl24,
        sl24a: _sl24a,
        sl25: _sl25,
        sl26: _sl26,
        sl27: _sl27,
        _token: _token
      }
    }).done(function (_return) {
      $("#modal-edit-pemeriksaan-fisik").modal("hide");
      ShowMessageBox("Success", "Data successfully Updated!", 1, 'OK', '.js-data-pemeriksaan-fisik');
    });
  });
  $('#modal-delete-pemeriksaan-fisik').on('show.bs.modal', function (e) {
    var id = e.relatedTarget.dataset.id;
    $(this).attr('data-id', id);
  });
  $('.js-pemeriksaan-fisik-remove-btn').click(function () {
    var _token = $(this).attr('data-token');

    var _url = $(this).attr('data-url');

    var _id = $('#modal-delete-pemeriksaan-fisik').attr('data-id');

    $.ajax({
      method: "POST",
      url: _url,
      data: {
        id: _id,
        _token: _token
      }
    }).done(function (_return) {
      $("#modal-delete-pemeriksaan-fisik").modal("hide");
      ShowMessageBox("Success", "Data successfully Deleted!", 1, 'OK', '.js-data-pemeriksaan-fisik');
    });
  });
});

/***/ }),

/***/ "./resources/js/page/pemeriksaanpenunjang.js":
/*!***************************************************!*\
  !*** ./resources/js/page/pemeriksaanpenunjang.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  var configs = {
    columns: [{
      title: 'Nama',
      field: ['pasien', 'nama'],
      columnType: {
        type: 'field'
      }
    }, {
      title: 'Kunjungan',
      field: 'kunjungan',
      columnType: {
        type: 'field'
      }
    }, {
      title: 'No Rekam Medis',
      field: ['pasien', 'no_rekam_medis'],
      columnType: {
        type: 'field'
      }
    }, [{
      title: 'Action',
      field: 'Edit',
      columnType: {
        type: 'modal',
        target: 'modal-edit-pemeriksaan-penunjang',
        modalParam: {
          type: 'column',
          value: 'id'
        }
      }
    }, {
      title: 'Action',
      field: 'Delete',
      columnType: {
        type: 'modal',
        target: 'modal-delete-pemeriksaan-penunjang',
        modalParam: {
          type: 'column',
          value: 'id'
        }
      }
    }]]
  };

  if ($('#js-table-pemeriksaan-penunjang').hasClass('js-data-pemeriksaan-penunjang')) {
    dataTable.init(".js-data-pemeriksaan-penunjang", configs);
  }

  $('#modal-create-pemeriksaan-penunjang').on('show.bs.modal', function (e) {
    var formElement = $(this);
    var idElement = formElement.find("#id");
    var idPasienElement = formElement.find("#idPasien");
    var kunjunganElement = formElement.find("#kunjungan");
    var tglPeriksaElement = formElement.find("#tglPeriksa");
    var medrecElement = formElement.find("#medrec");
    idElement.val("");
    idPasienElement.val("");
    kunjunganElement.val("");
    tglPeriksaElement.val("");
    medrecElement.val("");
    kesadaranElement.val("");
  });
  $(".js-pemeriksaan-penunjang-save-btn").click(function () {
    var _token = $(this).attr('data-token');

    var _url = $(this).attr('data-url');

    var formElement = $('#modal-create-pemeriksaan-penunjang');
    var idPasienElement = formElement.find("#idPasien");
    var kunjunganElement = formElement.find("#kunjungan");
    var tglPeriksaElement = formElement.find("#tglPeriksa");
    var medrecElement = formElement.find("#medrec");

    var _idPasien = idPasienElement.val();

    var _kunjungan = kunjunganElement.val();

    var _tglPeriksa = tglPeriksaElement.val();

    var _medrec = medrecElement.val();

    $.ajax({
      method: "POST",
      url: _url,
      data: {
        idPasien: _idPasien,
        kunjungan: _kunjungan,
        tglPeriksa: _tglPeriksa,
        medrec: _medrec,
        _token: _token
      }
    }).done(function (_return) {
      $("#modal-create-pemeriksaan-penunjang").modal("hide");
      ShowMessageBox("Success", "Data successfully Saved!", 1, 'OK', '.js-data-pemeriksaan-penunjang');
    });
  });
  $('#modal-edit-pemeriksaan-penunjang').on('show.bs.modal', function (e) {
    var id = e.relatedTarget.dataset.id;
    $(this).attr('data-id', id);

    var _url = $(this).attr('data-url');

    var _token = $(this).attr('data-token');

    var formElement = $(this);
    var idElement = formElement.find("#id");
    var idPasienElement = formElement.find("#idPasien");
    var kunjunganElement = formElement.find("#kunjungan");
    var tglPeriksaElement = formElement.find("#tglPeriksa");
    var medrecElement = formElement.find("#medrec");
    $.ajax({
      method: "POST",
      url: _url,
      data: {
        id: id,
        _token: _token
      }
    }).done(function (_return) {
      idElement.val(_return.data.id);
      idPasienElement.val(_return.data.idPasien);
      kunjunganElement.val(_return.data.kunjungan);
      tglPeriksaElement.val(_return.data.tglPeriksa);
      MedrecElement.val(_return.data.medrec);
      kesadaranElement.val(_return.data.kesadaran);
    });
  });
  $(".js-pemeriksaan-penunjang-update-btn").click(function () {
    var _token = $(this).attr('data-token');

    var _url = $(this).attr('data-url');

    var formElement = $('#modal-edit-pemeriksaan-penunjang');
    var idElement = formElement.find("#id");
    var idPasienElement = formElement.find("#idPasien");
    var kunjunganElement = formElement.find("#kunjungan");
    var tglPeriksaElement = formElement.find("#tglPeriksa");
    var medrecElement = formElement.find("#medrec");

    var _id = idElement.val();

    var _idPasien = idPasienElement.val();

    var _kunjungan = kunjunganElement.val();

    var _tglPeriksa = tglPeriksaElement.val();

    var _medrec = medrecElement.val();

    $.ajax({
      method: "POST",
      url: _url,
      data: {
        id: _id,
        idPasien: _idPasien,
        kunjungan: _kunjungan,
        tglPeriksa: _tglPeriksa,
        medrec: _medrec,
        _token: _token
      }
    }).done(function (_return) {
      $("#modal-edit-pemeriksaan-penunjang").modal("hide");
      ShowMessageBox("Success", "Data successfully Updated!", 1, 'OK', '.js-data-pemeriksaan-penunjang');
    });
  });
  $('#modal-delete-pemeriksaan-penunjang').on('show.bs.modal', function (e) {
    var id = e.relatedTarget.dataset.id;
    $(this).attr('data-id', id);
  });
  $('.js-pemeriksaan-penunjang-remove-btn').click(function () {
    var _token = $(this).attr('data-token');

    var _url = $(this).attr('data-url');

    var _id = $('#modal-delete-pemeriksaan-penunjang').attr('data-id');

    $.ajax({
      method: "POST",
      url: _url,
      data: {
        id: _id,
        _token: _token
      }
    }).done(function (_return) {
      $("#modal-delete-pemeriksaan-penunjang").modal("hide");
      ShowMessageBox("Success", "Data successfully Deleted!", 1, 'OK', '.js-data-pemeriksaan-penunjang');
    });
  });
});

/***/ }),

/***/ "./resources/js/page/pendidikan.js":
/*!*****************************************!*\
  !*** ./resources/js/page/pendidikan.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Created by User2 on 4/7/2020.
 */

/**
 * Created by User2 on 3/30/2020.
 */
$(document).ready(function () {
  var configs = {
    columns: [{
      title: 'ID',
      field: 'id',
      columnType: {
        type: 'field'
      }
    }, {
      title: 'Nama',
      field: 'nama',
      columnType: {
        type: 'field'
      }
    }, [{
      title: 'Action',
      field: 'Edit',
      columnType: {
        type: 'modal',
        target: 'modal-edit-pendidikan',
        modalParam: {
          type: 'column',
          value: 'id'
        }
      }
    }, {
      title: 'Action',
      field: 'Delete',
      columnType: {
        type: 'modal',
        target: 'modal-delete-pendidikan',
        modalParam: {
          type: 'column',
          value: 'id'
        }
      }
    }]]
  };

  if ($('#js-table-pendidikan').hasClass('js-data-pendidikan')) {
    dataTable.init(".js-data-pendidikan", configs);
  }

  $('#modal-create-pendidikan').on('show.bs.modal', function (e) {
    var formElement = $(this);
    var idElement = formElement.find('input#id');
    var namaElement = formElement.find('input#nama');
    idElement.val("");
    namaElement.val("");
  });
  $(".js-pendidikan-save-btn").click(function () {
    var _token = $(this).attr('data-token');

    var _url = $(this).attr('data-url');

    var formElement = $('#modal-create-pendidikan');
    var namaElement = formElement.find('input#nama');

    var _nama = namaElement.val();

    $.ajax({
      method: "POST",
      url: _url,
      data: {
        nama: _nama,
        _token: _token
      }
    }).done(function (_return) {
      $("#modal-create-pendidikan").modal("hide");
      ShowMessageBox("Success", "Data successfully Saved!", 1, 'OK', '.js-data-pendidikan');
    });
  });
  $('#modal-edit-pendidikan').on('show.bs.modal', function (e) {
    var id = e.relatedTarget.dataset.id;
    $(this).attr('data-id', id);

    var _url = $(this).attr('data-url');

    var _token = $(this).attr('data-token');

    var formElement = $(this);
    var idElement = formElement.find('input#id');
    var namaElement = formElement.find('input#nama');
    $.ajax({
      method: "POST",
      url: _url,
      data: {
        id: id,
        _token: _token
      }
    }).done(function (_return) {
      idElement.val(_return.data.id);
      namaElement.val(_return.data.nama);
    });
  });
  $(".js-pendidikan-update-btn").click(function () {
    var _token = $(this).attr('data-token');

    var _url = $(this).attr('data-url');

    var formElement = $('#modal-edit-pendidikan');
    var idElement = formElement.find('input#id');
    var namaElement = formElement.find('input#nama');

    var _id = idElement.val();

    var _nama = namaElement.val();

    $.ajax({
      method: "POST",
      url: _url,
      data: {
        id: _id,
        nama: _nama,
        _token: _token
      }
    }).done(function (_return) {
      $("#modal-edit-pendidikan").modal("hide");
      ShowMessageBox("Success", "Data successfully Updated!", 1, 'OK', '.js-data-pendidikan');
    });
  });
  $('#modal-delete-pendidikan').on('show.bs.modal', function (e) {
    var id = e.relatedTarget.dataset.id;
    $(this).attr('data-id', id);
  });
  $('.js-pendidikan-remove-btn').click(function () {
    var _token = $(this).attr('data-token');

    var _url = $(this).attr('data-url');

    var _id = $('#modal-delete-pendidikan').attr('data-id');

    $.ajax({
      method: "POST",
      url: _url,
      data: {
        id: _id,
        _token: _token
      }
    }).done(function (_return) {
      $("#modal-delete-pendidikan").modal("hide");
      ShowMessageBox("Success", "Data successfully Deleted!", 1, 'OK', '.js-data-pendidikan');
    });
  });
});

/***/ }),

/***/ "./resources/js/page/rumahsakit.js":
/*!*****************************************!*\
  !*** ./resources/js/page/rumahsakit.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Created by User2 on 4/7/2020.
 */

/**
 * Created by User2 on 3/30/2020.
 */
$(document).ready(function () {
  var configs = {
    columns: [{
      title: 'Kode',
      field: 'kode',
      columnType: {
        type: 'field'
      }
    }, {
      title: 'Nama',
      field: 'nama',
      columnType: {
        type: 'field'
      }
    }, [{
      title: 'Action',
      field: 'Edit',
      columnType: {
        type: 'modal',
        target: 'modal-edit-rumah-sakit',
        modalParam: {
          type: 'column',
          value: 'id'
        }
      }
    }, {
      title: 'Action',
      field: 'Delete',
      columnType: {
        type: 'modal',
        target: 'modal-delete-rumah-sakit',
        modalParam: {
          type: 'column',
          value: 'id'
        }
      }
    }]]
  };

  if ($('#js-table-rumah-sakit').hasClass('js-data-rumah-sakit')) {
    dataTable.init(".js-data-rumah-sakit", configs);
  }

  $('#modal-create-rumah-sakit').on('show.bs.modal', function (e) {
    var formElement = $(this);
    var idElement = formElement.find('input#id');
    var kodeElement = formElement.find('input#kode');
    var namaElement = formElement.find('input#nama');
    var alamatElement = formElement.find('input#alamat');
    idElement.val("");
    kodeElement.val("");
    namaElement.val("");
    alamatElement.val("");
  });
  $(".js-rumah-sakit-save-btn").click(function () {
    var _token = $(this).attr('data-token');

    var _url = $(this).attr('data-url');

    var formElement = $('#modal-create-rumah-sakit');
    var kodeElement = formElement.find('input#kode');
    var namaElement = formElement.find('input#nama');
    var alamatElement = formElement.find('input#alamat');

    var _kode = kodeElement.val();

    var _nama = namaElement.val();

    var _alamat = alamatElement.val();

    $.ajax({
      method: "POST",
      url: _url,
      data: {
        kode: _kode,
        nama: _nama,
        alamat: _alamat,
        _token: _token
      }
    }).done(function (_return) {
      $("#modal-create-rumah-sakit").modal("hide");
      ShowMessageBox("Success", "Data successfully Saved!", 1, 'OK', '.js-data-rumah-sakit');
    });
  });
  $('#modal-edit-rumah-sakit').on('show.bs.modal', function (e) {
    var id = e.relatedTarget.dataset.id;
    $(this).attr('data-id', id);

    var _url = $(this).attr('data-url');

    var _token = $(this).attr('data-token');

    var formElement = $(this);
    var idElement = formElement.find('input#id');
    var kodeElement = formElement.find('input#kode');
    var namaElement = formElement.find('input#nama');
    var alamatElement = formElement.find('textarea#alamat');
    $.ajax({
      method: "POST",
      url: _url,
      data: {
        id: id,
        _token: _token
      }
    }).done(function (_return) {
      idElement.val(_return.data.id);
      kodeElement.val(_return.data.kode);
      namaElement.val(_return.data.nama);
      alamatElement.val(_return.data.alamat);
    });
  });
  $(".js-rumah-sakit-update-btn").click(function () {
    var _token = $(this).attr('data-token');

    var _url = $(this).attr('data-url');

    var formElement = $('#modal-edit-rumah-sakit');
    var idElement = formElement.find('input#id');
    var kodeElement = formElement.find('input#kode');
    var namaElement = formElement.find('input#nama');
    var alamatElement = formElement.find('input#alamat');

    var _id = idElement.val();

    var _kode = kodeElement.val();

    var _nama = namaElement.val();

    var _alamat = alamatElement.val();

    $.ajax({
      method: "POST",
      url: _url,
      data: {
        id: _id,
        kode: _kode,
        nama: _nama,
        alamat: _alamat,
        _token: _token
      }
    }).done(function (_return) {
      $("#modal-edit-rumah-sakit").modal("hide");
      ShowMessageBox("Success", "Data successfully Updated!", 1, 'OK', '.js-data-rumah-sakit');
    });
  });
  $('#modal-delete-rumah-sakit').on('show.bs.modal', function (e) {
    var id = e.relatedTarget.dataset.id;
    $(this).attr('data-id', id);
  });
  $('.js-rumah-sakit-remove-btn').click(function () {
    var _token = $(this).attr('data-token');

    var _url = $(this).attr('data-url');

    var _id = $('#modal-delete-rumah-sakit').attr('data-id');

    $.ajax({
      method: "POST",
      url: _url,
      data: {
        id: _id,
        _token: _token
      }
    }).done(function (_return) {
      $("#modal-delete-rumah-sakit").modal("hide");
      ShowMessageBox("Success", "Data successfully Deleted!", 1, 'OK', '.js-data-rumah-sakit');
    });
  });
});

/***/ }),

/***/ "./resources/js/page/statuspernikahan.js":
/*!***********************************************!*\
  !*** ./resources/js/page/statuspernikahan.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Created by User2 on 4/7/2020.
 */

/**
 * Created by User2 on 3/30/2020.
 */
$(document).ready(function () {
  var configs = {
    columns: [{
      title: 'ID',
      field: 'id',
      columnType: {
        type: 'field'
      }
    }, {
      title: 'Nama',
      field: 'nama',
      columnType: {
        type: 'field'
      }
    }, [{
      title: 'Action',
      field: 'Edit',
      columnType: {
        type: 'modal',
        target: 'modal-edit-status-pernikahan',
        modalParam: {
          type: 'column',
          value: 'id'
        }
      }
    }, {
      title: 'Action',
      field: 'Delete',
      columnType: {
        type: 'modal',
        target: 'modal-delete-status-pernikahan',
        modalParam: {
          type: 'column',
          value: 'id'
        }
      }
    }]]
  };

  if ($('#js-table-status-pernikahan').hasClass('js-data-status-pernikahan')) {
    dataTable.init(".js-data-status-pernikahan", configs);
  }

  $('#modal-create-status-pernikahan').on('show.bs.modal', function (e) {
    var formElement = $(this);
    var idElement = formElement.find('input#id');
    var namaElement = formElement.find('input#nama');
    idElement.val("");
    namaElement.val("");
  });
  $(".js-status-pernikahan-save-btn").click(function () {
    var _token = $(this).attr('data-token');

    var _url = $(this).attr('data-url');

    var formElement = $('#modal-create-status-pernikahan');
    var namaElement = formElement.find('input#nama');

    var _nama = namaElement.val();

    $.ajax({
      method: "POST",
      url: _url,
      data: {
        nama: _nama,
        _token: _token
      }
    }).done(function (_return) {
      $("#modal-create-status-pernikahan").modal("hide");
      ShowMessageBox("Success", "Data successfully Saved!", 1, 'OK', '.js-data-status-pernikahan');
    });
  });
  $('#modal-edit-status-pernikahan').on('show.bs.modal', function (e) {
    var id = e.relatedTarget.dataset.id;
    $(this).attr('data-id', id);

    var _url = $(this).attr('data-url');

    var _token = $(this).attr('data-token');

    var formElement = $(this);
    var idElement = formElement.find('input#id');
    var namaElement = formElement.find('input#nama');
    $.ajax({
      method: "POST",
      url: _url,
      data: {
        id: id,
        _token: _token
      }
    }).done(function (_return) {
      idElement.val(_return.data.id);
      namaElement.val(_return.data.nama);
    });
  });
  $(".js-status-pernikahan-update-btn").click(function () {
    var _token = $(this).attr('data-token');

    var _url = $(this).attr('data-url');

    var formElement = $('#modal-edit-status-pernikahan');
    var idElement = formElement.find('input#id');
    var namaElement = formElement.find('input#nama');

    var _id = idElement.val();

    var _nama = namaElement.val();

    $.ajax({
      method: "POST",
      url: _url,
      data: {
        id: _id,
        nama: _nama,
        _token: _token
      }
    }).done(function (_return) {
      $("#modal-edit-status-pernikahan").modal("hide");
      ShowMessageBox("Success", "Data successfully Updated!", 1, 'OK', '.js-data-status-pernikahan');
    });
  });
  $('#modal-delete-status-pernikahan').on('show.bs.modal', function (e) {
    var id = e.relatedTarget.dataset.id;
    $(this).attr('data-id', id);
  });
  $('.js-status-pernikahan-remove-btn').click(function () {
    var _token = $(this).attr('data-token');

    var _url = $(this).attr('data-url');

    var _id = $('#modal-delete-status-pernikahan').attr('data-id');

    $.ajax({
      method: "POST",
      url: _url,
      data: {
        id: _id,
        _token: _token
      }
    }).done(function (_return) {
      $("#modal-delete-status-pernikahan").modal("hide");
      ShowMessageBox("Success", "Data successfully Deleted!", 1, 'OK', '.js-data-status-pernikahan');
    });
  });
});

/***/ }),

/***/ "./resources/js/page/terapi.js":
/*!*************************************!*\
  !*** ./resources/js/page/terapi.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  var configs = {
    columns: [{
      title: 'Nama',
      field: ['pasien', 'nama'],
      columnType: {
        type: 'field'
      }
    }, {
      title: 'Kunjungan',
      field: 'kunjungan',
      columnType: {
        type: 'field'
      }
    }, {
      title: 'No Rekam Medis',
      field: 'medrec',
      columnType: {
        type: 'field'
      }
    }, [{
      title: 'Action',
      field: 'Edit',
      columnType: {
        type: 'modal',
        target: 'modal-edit-terapi',
        modalParam: {
          type: 'column',
          value: 'id'
        }
      }
    }, {
      title: 'Action',
      field: 'Delete',
      columnType: {
        type: 'modal',
        target: 'modal-delete-terapi',
        modalParam: {
          type: 'column',
          value: 'id'
        }
      }
    }]]
  };

  if ($('#js-table-terapi').hasClass('js-data-terapi')) {
    dataTable.init(".js-data-terapi", configs);
  }

  $('#modal-create-terapi').on('show.bs.modal', function (e) {
    var formElement = $(this);
    var idElement = formElement.find("#id");
    var idPasienElement = formElement.find("#idPasien");
    var kunjunganElement = formElement.find("#kunjungan");
    var tglPeriksaElement = formElement.find("#tglPeriksa");
    var medrecElement = formElement.find("#medrec");
    idElement.val("");
    idPasienElement.val("");
    kunjunganElement.val("");
    tglPeriksaElement.val("");
    medrecElement.val("");
    kesadaranElement.val("");
  });
  $(".js-terapi-save-btn").click(function () {
    var _token = $(this).attr('data-token');

    var _url = $(this).attr('data-url');

    var formElement = $('#modal-create-terapi');
    var idPasienElement = formElement.find("#idPasien");
    var kunjunganElement = formElement.find("#kunjungan");
    var tglPeriksaElement = formElement.find("#tglPeriksa");
    var medrecElement = formElement.find("#medrec");

    var _idPasien = idPasienElement.val();

    var _kunjungan = kunjunganElement.val();

    var _tglPeriksa = tglPeriksaElement.val();

    var _medrec = medrecElement.val();

    $.ajax({
      method: "POST",
      url: _url,
      data: {
        idPasien: _idPasien,
        kunjungan: _kunjungan,
        tglPeriksa: _tglPeriksa,
        medrec: _medrec,
        _token: _token
      }
    }).done(function (_return) {
      $("#modal-create-terapi").modal("hide");
      ShowMessageBox("Success", "Data successfully Saved!", 1, 'OK', '.js-data-terapi');
    });
  });
  $('#modal-edit-terapi').on('show.bs.modal', function (e) {
    var id = e.relatedTarget.dataset.id;
    $(this).attr('data-id', id);

    var _url = $(this).attr('data-url');

    var _token = $(this).attr('data-token');

    var formElement = $(this);
    var idElement = formElement.find("#id");
    var idPasienElement = formElement.find("#idPasien");
    var kunjunganElement = formElement.find("#kunjungan");
    var tglPeriksaElement = formElement.find("#tglPeriksa");
    var medrecElement = formElement.find("#medrec");
    $.ajax({
      method: "POST",
      url: _url,
      data: {
        id: id,
        _token: _token
      }
    }).done(function (_return) {
      idElement.val(_return.data.id);
      idPasienElement.val(_return.data.idPasien);
      kunjunganElement.val(_return.data.kunjungan);
      tglPeriksaElement.val(_return.data.tglPeriksa);
      MedrecElement.val(_return.data.medrec);
      kesadaranElement.val(_return.data.kesadaran);
    });
  });
  $(".js-terapi-update-btn").click(function () {
    var _token = $(this).attr('data-token');

    var _url = $(this).attr('data-url');

    var formElement = $('#modal-edit-terapi');
    var idElement = formElement.find("#id");
    var idPasienElement = formElement.find("#idPasien");
    var kunjunganElement = formElement.find("#kunjungan");
    var tglPeriksaElement = formElement.find("#tglPeriksa");
    var medrecElement = formElement.find("#medrec");

    var _id = idElement.val();

    var _idPasien = idPasienElement.val();

    var _kunjungan = kunjunganElement.val();

    var _tglPeriksa = tglPeriksaElement.val();

    var _medrec = medrecElement.val();

    $.ajax({
      method: "POST",
      url: _url,
      data: {
        id: _id,
        idPasien: _idPasien,
        kunjungan: _kunjungan,
        tglPeriksa: _tglPeriksa,
        medrec: _medrec,
        _token: _token
      }
    }).done(function (_return) {
      $("#modal-edit-terapi").modal("hide");
      ShowMessageBox("Success", "Data successfully Updated!", 1, 'OK', '.js-data-terapi');
    });
  });
  $('#modal-delete-terapi').on('show.bs.modal', function (e) {
    var id = e.relatedTarget.dataset.id;
    $(this).attr('data-id', id);
  });
  $('.js-terapi-remove-btn').click(function () {
    var _token = $(this).attr('data-token');

    var _url = $(this).attr('data-url');

    var _id = $('#modal-delete-terapi').attr('data-id');

    $.ajax({
      method: "POST",
      url: _url,
      data: {
        id: _id,
        _token: _token
      }
    }).done(function (_return) {
      $("#modal-delete-terapi").modal("hide");
      ShowMessageBox("Success", "Data successfully Deleted!", 1, 'OK', '.js-data-terapi');
    });
  });
});

/***/ }),

/***/ "./resources/js/page/users.js":
/*!************************************!*\
  !*** ./resources/js/page/users.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Created by User2 on 3/23/2020.
 */
$(document).ready(function () {
  var configs = {
    columns: [{
      title: 'ID',
      field: 'id',
      columnType: {
        type: 'field'
      }
    }, {
      title: 'Nama',
      field: 'nama',
      columnType: {
        type: 'field'
      }
    }, {
      title: 'Email',
      field: 'email',
      columnType: {
        type: 'field'
      }
    }, [{
      title: 'Action',
      field: 'Edit',
      columnType: {
        type: 'modal',
        target: 'modal-edit-user',
        modalParam: {
          type: 'column',
          value: 'id'
        }
      }
    }, {
      title: 'Action',
      field: 'Delete',
      columnType: {
        type: 'modal',
        target: 'modal-delete-user',
        modalParam: {
          type: 'column',
          value: 'id'
        }
      }
    }]]
  };

  if ($('#js-table-users').hasClass('js-data-users')) {
    dataTable.init(".js-data-users", configs);
  }

  $('#modal-create-user').on('show.bs.modal', function (e) {
    var formElement = $(this);
    var idElement = formElement.find('input#id');
    var namaElement = formElement.find('input#nama');
    var passwordElement = formElement.find('input#password');
    var emailElement = formElement.find('input#email');
    var hakAksesElement = formElement.find('select#hak_akses');
    idElement.val("");
    namaElement.val("");
    passwordElement.val("");
    emailElement.val("");
    hakAksesElement.val("");
  });
  $(".js-user-save-btn").click(function () {
    var _token = $(this).attr('data-token');

    var _url = $(this).attr('data-url');

    var formElement = $('#modal-create-users');
    var namaElement = formElement.find('input#nama_user');
    var passwordElement = formElement.find('input#password');
    var emailElement = formElement.find('input#email');
    var hakAksesElement = formElement.find('select#hak_akses');

    var _nama = namaElement.val();

    var _email = emailElement.val();

    var _password = passwordElement.val();

    var _hak_akses = hakAksesElement.val();

    $.ajax({
      method: "POST",
      url: _url,
      data: {
        nama: _nama,
        password: _password,
        email: _email,
        _token: _token
      }
    }).done(function (_return) {
      $("#modal-create-user").modal("hide");
      ShowMessageBox("Success", "Data successfully Saved!", 1, 'OK', '.js-data-users');
    });
  });
  $('#modal-edit-user').on('show.bs.modal', function (e) {
    var id = e.relatedTarget.dataset.id;
    $(this).attr('data-id', id);

    var _url = $(this).attr('data-url');

    var _token = $(this).attr('data-token');

    var formElement = $(this);
    var idElement = formElement.find('input#id_user');
    var namaElement = formElement.find('input#nama_user');
    var emailElement = formElement.find('input#email');
    var hakAksesElement = formElement.find('select#hak_akses');
    $.ajax({
      method: "POST",
      url: _url,
      data: {
        id: id,
        _token: _token
      }
    }).done(function (_return) {
      console.log(_return);
      idElement.val(_return.data.id);
      namaElement.val(_return.data.nama);
      emailElement.val(_return.data.email);
      hakAksesElement.val(_return.data.hak_akses);
    });
  });
  $(".js-user-update-btn").click(function () {
    var _token = $(this).attr('data-token');

    var _url = $(this).attr('data-url');

    var formElement = $('#modal-edit-user');
    var idElement = formElement.find('input#id_user');
    var namaElement = formElement.find('input#nama_user');
    var emailElement = formElement.find('input#email');
    var hakAksesElement = formElement.find('select#hak_akses');

    var _id = idElement.val();

    var _nama = namaElement.val();

    var _email = emailElement.val();

    var _hak_akses = hakAksesElement.val();

    $.ajax({
      method: "POST",
      url: _url,
      data: {
        id: _id,
        nama: _nama,
        email: _email,
        hak_akses: _hak_akses,
        _token: _token
      }
    }).done(function (_return) {
      $("#modal-edit-agama").modal("hide");
      ShowMessageBox("Success", "Data successfully Updated!", 1, 'OK', '.js-data-users');
    });
  });
  $('#modal-delete-user').on('show.bs.modal', function (e) {
    var id = e.relatedTarget.dataset.id;
    $(this).attr('data-id', id);
  });
  $('.js-user-remove-btn').click(function () {
    var _token = $(this).attr('data-token');

    var _url = $(this).attr('data-url');

    var _id = $('#modal-delete-user').attr('data-id');

    $.ajax({
      method: "POST",
      url: _url,
      data: {
        id: _id,
        _token: _token
      }
    }).done(function (_return) {
      $("#modal-delete-user").modal("hide");
      ShowMessageBox("Success", "Data successfully Deleted!", 1, 'OK', '.js-data-users');
    });
  });
});

function PreviewImage(obj) {}

/***/ }),

/***/ "./resources/js/plugins/table.js":
/*!***************************************!*\
  !*** ./resources/js/plugins/table.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var dataTable = {
  configs: {
    search: null,
    columns: [],
    perPage: 10,
    page: 1,
    searchInput: true,
    loading: false,
    showDataInfo: false,
    baseUrl: window.location.protocol.concat("//") + window.location.host
  },
  init: function init(_tableElement, _configs) {
    if (_configs) {
      dataTable.set(_configs);
    }

    dataTable.fetchData(_tableElement);
  },
  fetchData: function fetchData(_tableElement) {
    var _url = $(_tableElement).attr('data-url');

    var _token = $(_tableElement).attr('data-token');

    var _limit = dataTable.configs.perPage;

    var _offset = dataTable.configs.page - 1;

    if (dataTable.configs.loading) {
      dataTable.generateLoading(_tableElement, true);
    }

    $.ajax({
      method: "POST",
      url: _url,
      data: {
        search: [],
        limit: _limit,
        offset: _offset,
        _token: _token,
        sort: []
      }
    }).done(function (_return) {
      dataTable.generateSearchField(_tableElement);
      dataTable.generateTableHeader(_tableElement, _return.data);
      dataTable.generateTableBody(_tableElement, _return.data);
      dataTable.generateTableFoot(_tableElement, _return);
      dataTable.generatePagination(_tableElement, _return);

      if (dataTable.configs.loading) {
        dataTable.generateLoading(_tableElement, false);
      }
    });
  },
  generateLoading: function generateLoading(_tableElement, _show) {
    if (_show) {
      var element = $(_tableElement);

      if ($(_tableElement).parent('.table-responsive').length > 0) {
        element = $(_tableElement).parent('.table-responsive');
      }

      var insertedHtml = '<div class="loading"><div class="loader"></div></div>';
      element.prepend(insertedHtml);
    } else {
      var element = $(_tableElement);

      if ($(_tableElement).parent('.table-responsive').length > 0) {
        element = $(_tableElement).parent('.table-responsive');
      }

      element.find(".loading").remove();
    }
  },
  generateSearchField: function generateSearchField(_tableElement) {
    var element = $(_tableElement);

    if ($(_tableElement).parent('.table-responsive').length > 0) {
      element = $(_tableElement).parent('.table-responsive');
    }

    var inputSearchHtml = "";

    if (dataTable.configs.searchInput) {
      inputSearchHtml = '<div class="col-sm-12 col-md-6">' + '<div id="example_filter" class="dataTables_filter float-right">' + '<label>Search:<input type="search" class="form-control form-control-sm" placeholder="" aria-controls="example"></label>' + '</div>' + '</div>';
    }

    var insertedHtml = '<div class="row">' + '<div class="col-sm-12 col-md-6">' + '<div class="dataTables_length" id="example_length">' + '<label>Show <select name="example_length" aria-controls="example" class="custom-select custom-select-sm form-control form-control-sm">' + '<option value="10">10</option>' + '<option value="25">25</option>' + '<option value="50">50</option>' + '<option value="100">100</option>' + '</select> entries</label>' + '</div>' + '</div>' + inputSearchHtml + '</div>';
    element.prepend(insertedHtml);
  },
  generateTableHeader: function generateTableHeader(_tableElement, _data) {
    var columns = [];

    if (dataTable.configs.columns.length > 0) {
      for (var i = 0; i < dataTable.configs.columns.length; i++) {
        if ($.isArray(dataTable.configs.columns[i])) {
          if (dataTable.configs.columns[i].length > 0) {
            columns.push({
              title: dataTable.configs.columns[i][0].title ? dataTable.configs.columns[i][0].title : '',
              sort: dataTable.configs.columns[i][0].sort ? dataTable.configs.columns[i][0].sort : false
            });
          } else {
            columns.push({
              title: '',
              sort: false
            });
          }
        } else {
          columns.push({
            title: dataTable.configs.columns[i].title ? dataTable.configs.columns[i].title : '',
            sort: dataTable.configs.columns[i].sort ? dataTable.configs.columns[i].sort : false
          });
        }
      }
    } else if (_data.length > 0) {
      var keys = Object.keys(_data[0]);

      for (var j = 0; j < keys.length; j++) {
        columns.push({
          title: keys[j],
          sort: false
        });
      }
    }

    var tHead = "<thead>" + "<tr>";

    for (var key in columns) {
      tHead += "<th>";
      tHead += columns[key].title;

      if (columns[key].sort) {
        tHead += "";
      }

      tHead += "</th>";
    }

    tHead += "</tr></thead>";
    $(_tableElement).append(tHead);
  },
  generateTableBody: function generateTableBody(_tableElement, _data) {
    var fieldSettings = [];

    if (dataTable.configs.columns.length > 0) {
      for (var i = 0; i < dataTable.configs.columns.length; i++) {
        console.log("column", dataTable.configs.columns[i]);

        if ($.isArray(dataTable.configs.columns[i])) {
          var settings = [];

          for (var j = 0; j < dataTable.configs.columns[i].length; j++) {
            settings.push({
              field: dataTable.configs.columns[i][j].field ? dataTable.configs.columns[i][j].field : '',
              columnType: dataTable.configs.columns[i][j].columnType ? dataTable.configs.columns[i][j].columnType : {
                type: 'field'
              }
            });
          }

          fieldSettings.push(settings);
        } else {
          fieldSettings.push({
            field: dataTable.configs.columns[i].field ? dataTable.configs.columns[i].field : '',
            columnType: dataTable.configs.columns[i].columnType ? dataTable.configs.columns[i].columnType : {
              type: 'field'
            }
          });
        }
      }
    } else if (_data.length > 0) {
      var keys = Object.keys(_data[0]);

      for (var x = 0; x < keys.length; x++) {
        fieldSettings.push({
          field: keys[x],
          columnType: {
            type: 'field'
          }
        });
      }
    }

    console.log("settings", fieldSettings);
    var allowedFields = [];

    for (var j = 0; j < _data.length; j++) {
      var fieldDetails = [];

      for (var k = 0; k < fieldSettings.length; k++) {
        if ($.isArray(fieldSettings[k])) {
          var fieldsArray = [];

          for (var x = 0; x < fieldSettings[k].length; x++) {
            var field = fieldSettings[k][x].field;

            if (fieldSettings[k][x].field) {
              if (fieldSettings[k][x].columnType.type == "field") {
                field = _data[j][fieldSettings[k][x].field];
              }
            }

            fieldsArray.push({
              value: field,
              columnType: fieldSettings[k][x].columnType
            });
          }

          fieldDetails.push(fieldsArray);
        } else {
          var field = fieldSettings[k].field;

          if (fieldSettings[k].field) {
            if ($.isArray(fieldSettings[k].field)) {
              for (iField = 0; iField < fieldSettings[k].field.length; iField++) {
                if (fieldSettings[k].columnType.type == "field") {
                  if (iField == 0) {
                    field = _data[j][fieldSettings[k].field[iField]];
                  } else {
                    if (field != null) {
                      field = field[fieldSettings[k].field[iField]];
                    } else {
                      field = "-";
                    }
                  }
                }
              }
            } else {
              if (fieldSettings[k].columnType.type == "field") {
                field = _data[j][fieldSettings[k].field];
              }
            }
          }

          fieldDetails.push({
            value: field,
            columnType: fieldSettings[k].columnType
          });
        }
      }

      allowedFields.push(fieldDetails);
    }

    console.log("body", allowedFields);
    var tBody = "<tbody>";

    if (allowedFields.length > 0) {
      for (var a = 0; a < allowedFields.length; a++) {
        tBody += "<tr>";

        for (var b = 0; b < allowedFields[a].length; b++) {
          tBody += "<td>";

          if ($.isArray(allowedFields[a][b])) {
            if (allowedFields[a][b].length > 0) {
              console.log(allowedFields[a][b]);

              for (var x = 0; x < allowedFields[a][b].length; x++) {
                if (x > 0) {
                  tBody += "&nbsp;&nbsp;";
                }

                if (allowedFields[a][b][x].columnType.type == "link") {
                  var identifier = '';

                  if (allowedFields[a][b][x].columnType.linkParam.type == 'column') {
                    identifier = _data.length ? _data[a][allowedFields[a][b][x].columnType.linkParam.value] : '';
                  } else if (allowedFields[a][b][x].columnType.linkParam.type == 'string') {
                    identifier = allowedFields[a][b][x].columnType.linkParam.value;
                  }

                  var url = dataTable.configs.baseUrl + allowedFields[a][b][x].columnType.link + allowedFields[a][b][x].columnType.linkQuery + identifier;
                  tBody += "<a href=\"" + url + "\" class=\"btn btn-primary\">" + allowedFields[a][b][x].value + "</a>";
                } else if (allowedFields[a][b][x].columnType.type == "modal") {
                  var identifier = '';

                  if (allowedFields[a][b][x].columnType.modalParam.type == 'column') {
                    identifier = _data.length ? _data[a][allowedFields[a][b][x].columnType.modalParam.value] : '';
                  } else if (allowedFields[a][b][x].columnType.modalParam.type == 'string') {
                    identifier = allowedFields[a][b][x].columnType.modalParam.value;
                  }

                  tBody += "<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#" + allowedFields[a][b][x].columnType.target + "\" " + "data-id=\"" + identifier + "\">" + allowedFields[a][b][x].value + "</button>";
                } else {
                  tBody += allowedFields[a][b].value;
                }
              }
            }
          } else {
            if (allowedFields[a][b].columnType.type == "link") {
              var identifier = '';

              if (allowedFields[a][b].columnType.linkParam.type == 'column') {
                identifier = _data.length ? _data[a][allowedFields[a][b].columnType.linkParam.value] : '';
              } else if (allowedFields[a][b].columnType.linkParam.type == 'string') {
                identifier = allowedFields[a][b].columnType.linkParam.value;
              }

              var url = dataTable.configs.baseUrl + allowedFields[a][b].columnType.link + allowedFields[a][b].columnType.linkQuery + identifier;
              tBody += "<a href=\"" + url + "\" class=\"btn btn-primary\">" + allowedFields[a][b].value + "</a>";
            } else if (allowedFields[a][b].columnType.type == "modal") {
              var identifier = '';

              if (allowedFields[a][b].columnType.modalParam.type == 'column') {
                identifier = _data.length ? _data[a][allowedFields[a][b].columnType.modalParam.value] : '';
              } else if (allowedFields[a][b].columnType.modalParam.type == 'string') {
                identifier = allowedFields[a][b].columnType.modalParam.value;
              }

              tBody += "<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#" + allowedFields[a][b].columnType.target + "\" " + "data-id=\"" + identifier + "\">" + allowedFields[a][b].value + "</button>";
            } else {
              tBody += allowedFields[a][b].value;
            }
          }

          tBody += "</td>";
        }

        tBody += "</tr>";
      }
    }

    tBody += "</tbody>";
    $(_tableElement).append(tBody);
  },
  generateTableFoot: function generateTableFoot(_tableElement, _response) {
    var totalColumns = 0;

    if (dataTable.configs.columns.length > 0) {
      totalColumns = dataTable.configs.columns.length;
    } else if (_response.data.length > 0) {
      totalColumns = Object.keys(_response.data[0]).length;
    }

    var currentData = parseInt(dataTable.configs.page) * parseInt(dataTable.configs.perPage);

    if (currentData > _response.data.length || currentData < _response.data.length) {
      currentData = _response.data.length;
    }

    var info = "";

    if (dataTable.configs.showDataInfo) {
      info = "Showing " + currentData + " of " + _response.totalRecords;
    }

    var tFoot = "<tfoot><tr><td colspan=\"" + totalColumns + "\">" + info + "</td></tr></tfoot>";
    $(_tableElement).append(tFoot);
  },
  generatePagination: function generatePagination(_tableElement, _totalData) {
    var paginationHtml = "<ul class=\"pagination pagination-sm no-margin pull-right\">";
    var currentPage = dataTable.configs.page;
    var startPage = 1;
    var totalPage = parseInt(_totalData) / parseInt(dataTable.configs.perPage);
    var endPage = parseInt(_totalData) / parseInt(dataTable.configs.perPage);

    if (parseInt(totalPage) > 10) {
      endPage = 10;
    }

    if (parseInt(currentPage) > 5) {
      paginationHtml += "<li class=\"page-item\"><span class=\"page-link\" onclick=\"dataTable.setPageAt(this)\" data-page=\"1\" data-element=\"" + _tableElement + "\">First</span></li>";
    }

    if (parseInt(currentPage) > 3) {
      paginationHtml += "<li class=\"page-item\"><span class=\"page-link\" onclick=\"dataTable.setPageAt(this)\" data-page=\"" + (parseInt(currentPage) - 1) + "\">Prev</span></li>";
    }

    if (parseInt(currentPage) > 5) {
      startPage = parseInt(currentPage) - 4;
      endPage = parseInt(currentPage) + 5;
    }

    if (parseInt(endPage) > parseInt(totalPage)) {
      endPage = totalPage;
    }

    if (parseInt(totalPage) > 1) {
      for (var i = startPage; i <= endPage; i++) {
        var activePage = "";
        var clickable = "onclick=\"dataTable.setPageAt(this)\"";

        if (i == currentPage) {
          activePage = "active";
          clickable = "";
        }

        paginationHtml += "<li class=\"page-item" + activePage + "\"><span class=\"page-link\" " + clickable + "  data-page=\"" + i + "\">" + i + "</span></li>";
      }
    }

    if (parseInt(totalPage) > 10 && parseInt(currentPage) < parseInt(totalPage)) {
      paginationHtml += "<li class=\"page-item\"><span class=\"page-link\" onclick=\"dataTable.setPageAt(this)\" data-page=\"" + (parseInt(currentPage) + 1) + "\">Next</span></li>";
      var activePage = "";
      var clickable = "onclick=\"dataTable.setPageAt(this)\"";

      if (totalPage == currentPage) {
        activePage = "active";
        clickable = "";
      }

      paginationHtml += "<li class=\"page-item " + activePage + " \"><span class=\"page-link\" " + clickable + " data-page=\"" + parseInt(totalPage) + "\">Last</span></li>";
    }

    paginationHtml += "</ul>";
    $(paginationHtml).insertAfter(_tableElement);
  },
  setPageAt: function setPageAt(_obj) {
    var tableElement = $(_obj).attr("data-element");
    var page = $(_obj).attr("data-page");
    dataTable.configs.page = page;
    dataTable.fetchData(tableElement);
  },
  set: function set(_configs) {
    if (_configs.search) {
      dataTable.configs.search = _configs.search;
    }

    if (_configs.columns) {
      if (_configs.columns.length > 0) {
        for (var i = 0; i < _configs.columns.length; i++) {
          if ($.isArray(_configs.columns[i])) {
            var column = [];

            for (var j = 0; j < _configs.columns[i].length; j++) {
              column.push({
                title: _configs.columns[i][j].title ? _configs.columns[i][j].title : '',
                sort: _configs.columns[i][j].sort ? _configs.columns[i][j].sort : false,
                field: _configs.columns[i][j].field ? _configs.columns[i][j].field : '',
                columnType: _configs.columns[i][j].columnType ? _configs.columns[i][j].columnType : ''
              });
            }

            dataTable.configs.columns.push(column);
          } else {
            var column = {
              title: _configs.columns[i].title ? _configs.columns[i].title : '',
              sort: _configs.columns[i].sort ? _configs.columns[i].sort : false,
              field: _configs.columns[i].field ? _configs.columns[i].field : '',
              columnType: _configs.columns[i].columnType ? _configs.columns[i].columnType : ''
            };
            dataTable.configs.columns.push(column);
          }
        }
      }
    }

    if (_configs.perPage) {
      dataTable.configs.perPage = _configs.perPage;
    }

    if (_configs.page) {
      dataTable.configs.page = _configs.page;
    }
  },
  get: function get() {
    return dataTable.configs;
  }
};

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/js/global.js ./resources/js/plugins/table.js ./resources/js/page/users.js ./resources/js/page/pasien.js ./resources/js/page/agama.js ./resources/js/page/anamnesis.js ./resources/js/page/dirujuk.js ./resources/js/page/pekerjaan.js ./resources/js/page/pemeriksaanfisik.js ./resources/js/page/pendidikan.js ./resources/js/page/rumahsakit.js ./resources/js/page/statuspernikahan.js ./resources/js/page/pemeriksaanpenunjang.js ./resources/js/page/diagnosa.js ./resources/js/page/terapi.js ./resources/sass/app.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\xampp\htdocs\registrasi\resources\js\app.js */"./resources/js/app.js");
__webpack_require__(/*! D:\xampp\htdocs\registrasi\resources\js\global.js */"./resources/js/global.js");
__webpack_require__(/*! D:\xampp\htdocs\registrasi\resources\js\plugins\table.js */"./resources/js/plugins/table.js");
__webpack_require__(/*! D:\xampp\htdocs\registrasi\resources\js\page\users.js */"./resources/js/page/users.js");
__webpack_require__(/*! D:\xampp\htdocs\registrasi\resources\js\page\pasien.js */"./resources/js/page/pasien.js");
__webpack_require__(/*! D:\xampp\htdocs\registrasi\resources\js\page\agama.js */"./resources/js/page/agama.js");
__webpack_require__(/*! D:\xampp\htdocs\registrasi\resources\js\page\anamnesis.js */"./resources/js/page/anamnesis.js");
__webpack_require__(/*! D:\xampp\htdocs\registrasi\resources\js\page\dirujuk.js */"./resources/js/page/dirujuk.js");
__webpack_require__(/*! D:\xampp\htdocs\registrasi\resources\js\page\pekerjaan.js */"./resources/js/page/pekerjaan.js");
__webpack_require__(/*! D:\xampp\htdocs\registrasi\resources\js\page\pemeriksaanfisik.js */"./resources/js/page/pemeriksaanfisik.js");
__webpack_require__(/*! D:\xampp\htdocs\registrasi\resources\js\page\pendidikan.js */"./resources/js/page/pendidikan.js");
__webpack_require__(/*! D:\xampp\htdocs\registrasi\resources\js\page\rumahsakit.js */"./resources/js/page/rumahsakit.js");
__webpack_require__(/*! D:\xampp\htdocs\registrasi\resources\js\page\statuspernikahan.js */"./resources/js/page/statuspernikahan.js");
__webpack_require__(/*! D:\xampp\htdocs\registrasi\resources\js\page\pemeriksaanpenunjang.js */"./resources/js/page/pemeriksaanpenunjang.js");
__webpack_require__(/*! D:\xampp\htdocs\registrasi\resources\js\page\diagnosa.js */"./resources/js/page/diagnosa.js");
__webpack_require__(/*! D:\xampp\htdocs\registrasi\resources\js\page\terapi.js */"./resources/js/page/terapi.js");
module.exports = __webpack_require__(/*! D:\xampp\htdocs\registrasi\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });