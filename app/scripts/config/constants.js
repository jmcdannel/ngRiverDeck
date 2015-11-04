;
(function() {
  'use strict';

  angular
    .module('RiverDeckApp')
      .constant('firebaseId', 'riverdeck')
      .constant('firebaseUrl', 'https://riverdeck.firebaseio.com/')
      .constant('viewPath', 'views/{0}/views/{1}.html')
      .constant('directivePath', 'views/{0}/direcrtives/{1}.html');
})();
