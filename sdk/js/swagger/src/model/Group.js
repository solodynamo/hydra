/**
 * Hydra OAuth2 & OpenID Connect Server (1.0.0-aplha1)
 * Please refer to the user guide for in-depth documentation: https://ory.gitbooks.io/hydra/content/   Hydra offers OAuth 2.0 and OpenID Connect Core 1.0 capabilities as a service. Hydra is different, because it works with any existing authentication infrastructure, not just LDAP or SAML. By implementing a consent app (works with any programming language) you build a bridge between Hydra and your authentication infrastructure. Hydra is able to securely manage JSON Web Keys, and has a sophisticated policy-based access control you can use if you want to. Hydra is suitable for green- (new) and brownfield (existing) projects. If you are not familiar with OAuth 2.0 and are working on a greenfield project, we recommend evaluating if OAuth 2.0 really serves your purpose. Knowledge of OAuth 2.0 is imperative in understanding what Hydra does and how it works.   The official repository is located at https://github.com/ory/hydra   ### ATTENTION - IMPORTANT NOTE   The swagger generator used to create this documentation does currently not support example responses. To see request and response payloads click on **\"Show JSON schema\"**: ![Enable JSON Schema on Apiary](https://storage.googleapis.com/ory.am/hydra/json-schema.png)
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.am
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.HydraOAuth2OpenIdConnectServer100Aplha1) {
      root.HydraOAuth2OpenIdConnectServer100Aplha1 = {};
    }
    root.HydraOAuth2OpenIdConnectServer100Aplha1.Group = factory(root.HydraOAuth2OpenIdConnectServer100Aplha1.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Group model module.
   * @module model/Group
   * @version Latest
   */

  /**
   * Constructs a new <code>Group</code>.
   * Group represents a warden group
   * @alias module:model/Group
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Group</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Group} obj Optional instance to populate.
   * @return {module:model/Group} The populated <code>Group</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('members')) {
        obj['members'] = ApiClient.convertToType(data['members'], ['String']);
      }
    }
    return obj;
  }

  /**
   * ID is the groups id.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Members is who belongs to the group.
   * @member {Array.<String>} members
   */
  exports.prototype['members'] = undefined;



  return exports;
}));

