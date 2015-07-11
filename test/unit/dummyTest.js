describe('서비스 단위 테스트', function() {
	beforeEach(module('myApp.services'));

	describe('버전 서비스 테스트', function() {
		it('현재 버전 반환', inject(function(version) {
			expect(version).toEqual('0.1');
		}));
	});
});


/* 컨트롤러 단위 테스트 */
describe('controllers 단위 테스트', function(){
	beforeEach(module('myApp.services'));
	var scope;
	it('MyCtrl1 컨트롤러 test1값', inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		var ctrl = $controller('MyCtrl1', {
			$scope : scope
		});
		expect(scope.test1).toBe('EFG');
	}));
	it('MyCtrl2 컨트롤러 test2값', inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		var ctrl = $controller('MyCtrl2', {
			$scope : scope
		});
  //	expect(scope.test2()).toBe('안녕히계세요!!');
    expect(scope.test2()).toBe('안녕하세요!');
	}));

  it('setFirstAndRestSentence Dummy', inject(function($rootScope, $controller) {
   scope = $rootScope.$new();
    var ctrl = $controller('MyCtrl1', {
      $scope : scope
    });
    var results = scope.getFirstAndRestSentence("Hello? This is Sung");
    expect(results[0]).toEqual('Hello?');
  }));

});
