/*
MIT OPEN SOURCE MODIFIED BY ROBERT SANTORE: DHS INTRANET
Version: 1.0 02/12/2016
Twitter Bootstrap 3.3.5
Author: Robert Santore
*/

/* Global Setting
------------------------------------------------ */

dhsAdminApp.factory('setting', ['$rootScope', function($rootScope) {
    var setting = {
        layout: {
            pageSidebarMinified: false,
            pageFixedFooter: false,
            pageRightSidebar: false,
            pageTwoSidebar: false,
            pageTopMenu: false,
            pageBoxedLayout: false,
            pageWithoutSidebar: false,
            pageContentFullHeight: false,
            pageContentFullWidth: false,
            pageContentInverseMode: false,
            pageSidebarTransparent: false,
            pageWithFooter: false,
            pageLightSidebar: false,
            pageMegaMenu: false,
            pageBgWhite: false,
            pageWithoutHeader: false,
            paceTop: false
        }
    };

    return setting;
}]);