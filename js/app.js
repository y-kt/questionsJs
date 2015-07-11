/*global angular */
/*jshint unused:false */
'use strict';

/**
 * The main TodoMVC app module
 *
 * @type {angular.Module}
 */
var todomvc = angular.module('todomvc', ['firebase', 'ngStorage']);

// Dummy controller for testing
todomvc.
	controller('MyCtrl1', ['$scope', '$location', function($scope, $location) {
		$scope.test1 = 'EFG';

		// Get the first sentence and rest
		$scope.getFirstAndRestSentence = function($string) {
			var head = $string;
			var desc = "";

			var separators = ['.', '?', '\n'];

			var firstIndex = -1;
			for (var i in separators) {
				var index = $string.indexOf(separators[i]);
				if (index == -1) continue;
				if (firstIndex == -1) {firstIndex = index; continue;}
				if (firstIndex > index) {firstIndex = index;}
			}

			if (firstIndex !=-1) {
					head = $string.slice(0, firstIndex+1);
					desc = $string.slice(firstIndex+1);
			}
			return [head, desc];
		}

	}]);

todomvc.filter('todoFilter', function ($location) {
	return function (input, max) {
		var sorted = [];
		var newQuestions = [];
		var sortedCount = 0;

		angular.forEach(input, function (todo) {
			console.log("Max: " + max);
				if (todo.timestamp > new Date().getTime() - 180000) {
					todo.new = true;
					newQuestions.push(todo);
				} else if (sortedCount++<=max){  // show top 100 only.
					todo.new = false;
				  sorted.push(todo);
        }

				// sorting new
				newQuestions.sort(function(a, b) {
					if (a.echo == b.echo) {
						return b.timestamp - a.timestamp;
					}
					return b.echo - a.echo
				});
		});
		return newQuestions.concat(sorted);
	};
});

// http://stackoverflow.com/questions/9439725/javascript-how-to-detect-if-browser-window-is-scrolled-to-bottom
// http://jsfiddle.net/88TzF/
/*
todomvc.directive("scroll", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
             if ($window.innerHeight + $window.scrollY >= $window.document.body.offsetHeight) {
                 scope.boolChangeClass = true;
                 console.log('Hit the bottom.');
								 $scope.increaseMax();
								 scope.$apply();
             } else {
                 scope.boolChangeClass = false;
                 console.log('Header is in view.');
             }

        });
    };
});
*/
