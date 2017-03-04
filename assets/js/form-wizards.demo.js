/*
MIT OPEN SOURCE MODIFIED BY ROBERT SANTORE: DHS APP CONTAINER
Version: 1.0 03/17/2016
Twitter Bootstrap 3.3.5
Author: Robert Santore
*/

var handleBootstrapWizards = function() {
	"use strict";
	$("#wizard").bwizard();
};

var FormWizard = function () {
	"use strict";
    return {
        //main function
        init: function () {
            handleBootstrapWizards();
        }
    };
}();