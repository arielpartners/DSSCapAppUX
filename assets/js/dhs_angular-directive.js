/*
MIT OPEN SOURCE MODIFIED BY ROBERT SANTORE: DHS INTRANET
Version: 1.0 02/12/2016
Twitter Bootstrap 3.3.5
Author: Robert Santore
*/

/* Prevent Global Link Click
------------------------------------------------ */

dhsAdminApp.directive('a', function() {
    return {
        restrict: 'E',
        link: function(scope, elem, attrs) {
            if (attrs.ngClick || attrs.href === '' || attrs.href === '#') {
                elem.on('click', function(e) {
                    e.preventDefault();
                });
            }
        }
    };
});
