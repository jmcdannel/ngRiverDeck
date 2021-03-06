; // jshint ignore:line
(function() {
  'use strict';

  /**
   * global/native prototyping
   */

  // String.format
  if (!String.prototype.format) {
    String.prototype.format = function() {
      var args = arguments;
      return this.replace(/{(\d+)}/g, function(match, number) {
        return typeof args[number] !== 'undefined' ? args[number] : match;
      });
    };
  }

 /**
  * angular app declaration
  */
  angular
    .module('RiverDeckApp', [
      'RiverDeckApp.core',
      'RiverDeckApp.deck',
      'RiverDeckApp.footer',
      'RiverDeckApp.header',
      'RiverDeckApp.log',
      'RiverDeckApp.nav',
      'RiverDeckApp.rivers',
      'RiverDeckApp.users'
    ]);

})();
