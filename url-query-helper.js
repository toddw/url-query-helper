/**
 * UrlQueryHelper JavaScript Library v1.0
 * https://github.com/toddw/url-query-helper
 *
 * Requires Underscore.js
 * http://underscorejs.org/
 *
 * Copyright 2013 Todd Williams
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 * Date: 2013-10-22
 */

/**
 * Creates an instance of UrlQueryHelper
 *
 * @param {string} url The url that we will be parseing
 * @param {object} updatedParams An optional object of new or updated parameters that will modify the url
 */
UrlQueryHelper = function (url, updatedParams) {
  if(this.init) {
    this.init(url, updatedParams);
  }
};

UrlQueryHelper.prototype = {
  /**
   * The initializing script that gets all of the params from the url query string
   *
   * @param {string} url The url that we will be parseing
   * @param {object} updatedParams An optional object of new or updated parameters that will modify the url
   */
  init: function (url, updatedParams) {
    var self = this,
      oldParamsArray;

    // set the constant variables
    self.originalUrl = url;
    self.updateParams = updatedParams;
    self.params = {};

    // convert all of the params in the url to a hash
    if(self.originalUrl.split('?').length > 1) {
      originalParamsArray = self.originalUrl.split('?')[1].split('&');
      _.each(originalParamsArray, function (param) {
        var paramParts = param.split('=');
        self.params[paramParts[0]] = paramParts[1];
      });
    }

    // update params hash with new params if any passed in
    if(updatedParams) {
      self.setParams(updatedParams);
    }

    return self;
  },

  /**
   * Builds and returns a url with the current params for this instance
   *
   * @return {string} The url
   */
  getUrl: function () {
    var self = this;
    // build new url
    if(_.size(self.params) > 0) {
      return self.originalUrl.split('?')[0] + '?' + _.map(self.params, function (value, key) { return key + '=' + value }).join('&');
    }
    else {
      return self.originalUrl.split('?')[0];
    }
  },

  /**
   * Returns the params object which shows the current state of params for this instance
   *
   * @return {object} All of the params for this helper
   */
  getParams: function () {
    return this.params;
  },

  /**
   * Return s a single param from this instance
   *
   * @return {string} The value of the requested param
   */
  getParam: function (param) {
    return this.params[param];
  },

  /**
   * Update or add a param to this instance
   *
   * @param {string} param The name of the parameter to add
   * @param {string} value The desired value for the given parameter
   * @return {UrlQueryHelper}
   */
  setParam: function (param, value) {
    var self = this;
    self.params[param] = value;
    return self;
  },

  /**
   * Update or add multiple parameters at once
   *
   * @param {object} paramsHash An object with all of the paremters to update or add
   * @return {UrlQueryHelper}
   */
  setParams: function (paramsHash) {
    var self = this;
    _.each(paramsHash, function (value, param) {
      self.setParam(param, value);
    });
    return self;
  },

  /**
   * Remove a parameter from this instance
   *
   * @param {string} param the name of the parameter to remove
   * @return {UrlQueryHelper}
   */
  removeParam: function (param) {
    var self = this;
    self.params = _.omit(self.params, param);
    return self;
  },

  /**
   * Remove a list of paremters from this instance
   *
   * @param {...string} Arguments as a list of param names to remove from this instance
   * @return {UrlQueryHelper}
   */
  removeParams: function () {
    var self = this;
    _.each(arguments, function (param) {
      self.removeParam(param);
    });
    return self;
  },

  /**
   * Create a String representation of the UrlQueryHelper
   *
   * @this {UrlQueryHelper}
   * @return {string} Human-readable representation of UrlQuerHelper
   */
  toString: function () {
    return this.getUrl();
  }
};

