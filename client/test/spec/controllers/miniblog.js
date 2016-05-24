'use strict';

describe('Controller: MiniblogCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var MiniblogCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MiniblogCtrl = $controller('MiniblogCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MiniblogCtrl.awesomeThings.length).toBe(3);
  });
});
