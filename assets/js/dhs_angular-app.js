/*
MIT OPEN SOURCE MODIFIED BY ROBERT SANTORE: DHS APP CONTAINER
Version: 1.0 03/17/2016
Twitter Bootstrap 3.3.5
Author: Robert Santore
*/

var dhsAdminApp = angular.module('dhsAdminApp', [
    'ui.router',
    'ui.bootstrap',
    'oc.lazyLoad'
]);

dhsAdminApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/app/dashboard/DSS_Welcome');

/* -- ================== 01.0 Dashboards - Landing Page ============================================= --*/
    $stateProvider
        .state('app', {
            url: '/app',
            templateUrl: 'template/app.html',
            data: 	{
	            	agencyTitle:'DSS',
	            	agencyURL:	'http://intranet.dhs.nycnet:4444',
	            	deptTitle: 	'OIT',
	            	appTitle: 	'Capacity & Planning',
	            	appShTitle: 'CapApp',
	            	globalLogo:	'assets/img/dss_logo_white_sm.png'
	            	},
            abstract: true
        })
        .state('app.dashboard', {
            url: '/dashboard',
            template: '<div ui-view></div>',
            abstract: true
        })

        /* -- 01.1 Landing Page Index Page -- */
        .state('app.dashboard.welcome', {
            url: '/DSS_Welcome',
            templateUrl: 'views/index.html',
            data: 	{
	            	pageTitle: 	'Welcome To Your CapApp Dashboard',
					pageIcon:	'dashboard'
	            	},
			resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/gritter/css/jquery.gritter.css',
                            'assets/plugins/gritter/js/jquery.gritter.js',
                            'assets/plugins/nvd3/build/nv.d3.css',
                            'https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.2/d3.min.js',
                            'assets/plugins/nvd3/build/nv.d3.js',
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Scroller/css/scroller.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/Scroller/js/dataTables.scroller.min.js',
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
        })

        /* -- 01.1.1Landing Page Dashboard -- */
        .state('app.dashboard.dashboard', {
            url: '/dashboard/your_dashboard',
            templateUrl: 'views/dashboard.html',
            data: 	{
	            	pageTitle: 	'Your CapApp Dashboard',
	            	pageIcon:	'dashboard'
	            	},
			resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/gritter/css/jquery.gritter.css',
                            'assets/plugins/gritter/js/jquery.gritter.js',
                            'assets/plugins/nvd3/build/nv.d3.css',
                            'https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.2/d3.min.js',
                            'assets/plugins/nvd3/build/nv.d3.js',
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Scroller/css/scroller.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/Scroller/js/dataTables.scroller.min.js',
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
        })
/* -- ================== 02.0 Units ============================================================= --*/
        .state('app.units', {
            url: '/units',
            template: '<div ui-view></div>',
            abstract: true
        })

        /* -- 02.1 Units With Static Grid-- */
		.state('app.units.offline', {
            url: '/units/offline-units',
            templateUrl: 'views/offline-units.html',
            data: 	{
	            	pageTitle: 	'Offline Units : All (Static HTML Feed)',
	            	pageIcon:	'building-o'
	            	},
			resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Buttons/css/buttons.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/AutoFill/css/autoFill.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/ColReorder/css/colReorder.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/KeyTable/css/keyTable.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Select/css/select.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/dataTables.buttons.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/buttons.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/buttons.print.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/buttons.flash.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/buttons.html5.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/buttons.colVis.min.js',
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js',
                            'assets/plugins/DataTables/extensions/AutoFill/js/dataTables.autoFill.min.js',
                            'assets/plugins/DataTables/extensions/ColReorder/js/dataTables.colReorder.min.js',
                            'assets/plugins/DataTables/extensions/Select/js/dataTables.select.min.js',
                            'assets/plugins/select2/dist/css/select2.min.css',
                            'assets/plugins/select2/dist/js/select2.min.js'

                        ]
                    });
                }]
            }
        })

        /* -- 02.2 HERO-- */
        .state('app.units.hero', {
            url: '/units/hero',
            templateUrl: 'views/page_blank.html',
            data: 	{
	            	pageTitle: 	'HERO',
	            	pageIcon:	'building-o'
	            	},
        })

        /* -- 02.3 LTR -- */
        .state('app.units.ltr', {
            url: '/units/ltr',
            templateUrl: 'views/page_blank.html',
            data: 	{
	            	pageTitle: 	'Long Term Renovations (LTR)',
	            	pageIcon:	'building-o'
	            	},
        })

        /* -- 02.4 Manhattan Buildings with data grid-- */
        .state('app.units.demand', {
            url: '/units/demand',
            templateUrl: 'views/page_blank.html',
            data: 	{
	            	pageTitle: 	'Demand & Projections',
	            	pageIcon:	'building-o'
	            	},
        })


        /* -- 02.7 Building Detail-- */
        .state('app.buildings.detail24', {
            url: '/detail24',
            templateUrl: 'views/page_bulding_detail.html',
            data: 	{
	            	pageTitle: 				'Building Details',
	            	pageIcon:				'building',
	            	buildingName:			'Beaver Street Complex',
	            	buildingAddress:		'24 New Street',
	            	buildingBourough:		'Manhattan',
	            	buildingZip:			'10004',
	            	buildingContactFn:		'Mchael',
	            	buildingContactLn:		'Livacca',
	            	buildingContactPhn:		'(555)555-1224',
	            	buildingContactEm:		'Mmivacca@dhs.nyc.gov',
	            	buildingContactTitle:	'Shelter Director',
	            	buildingActiveUnits: 	'26',
	            	buildingDHSUnits:		'2',
	            	SARACompliant:			'Yes',
	            	SARACompliantC:			'success',
	            	communityDistrict:		'301',
	            	distict:				'13',
	            	BBL:					'2-9992-2314',
	            	councilDistrict:		'35',
	            	congressionalDistrict:	'08',
	            	cityOwned:				'no',
	            	cityOwnedC:				'danger',
	            	commercialHotel:		'no',
	            	commercialHotelC:		'danger',
	            	managingAgent:			'Durst Orginzation',
	            	buildingOwnership:		'Durst Orginzation',
	            	landlord:				'Yarrow Two, LLC',
	            	providerName:			'Beaver Street Homeless Services, Inc.',
	            	BIN:					'2242478',
	            	violationsSevere:		'12',
	            	violationsCritical:		'19',
	            	violationsMinor:		'2',
	            	relatedBuilding1:		'30 Beaver Street',
	            		relatedBuilding1S:		'square-o',
						relatedBuilding1C:		'',
	            	relatedBuilding2:		'33 Beaver Street',
	            		relatedBuilding2S:		'square-o',
						relatedBuilding2C:		'',
	            	relatedBuilding3:		'60 Broad Street',
	            		relatedBuilding3S:		'square-o',
						relatedBuilding3C:		'',
	            	relatedBuilding4:		'26 New Street',
	            		relatedBuilding4S:		'square-o',
						relatedBuilding4C:		'',
	            	relatedBuilding5:		'24 New Street',
	            		relatedBuilding5S:		'check-square',
						relatedBuilding5C:		'white'
	            	},
			resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Buttons/css/buttons.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/AutoFill/css/autoFill.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/ColReorder/css/colReorder.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/KeyTable/css/keyTable.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Select/css/select.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/dataTables.buttons.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/buttons.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/buttons.print.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/buttons.flash.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/buttons.html5.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/buttons.colVis.min.js',
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js',
                            'assets/plugins/DataTables/extensions/AutoFill/js/dataTables.autoFill.min.js',
                            'assets/plugins/DataTables/extensions/ColReorder/js/dataTables.colReorder.min.js',
                            'assets/plugins/DataTables/extensions/Select/js/dataTables.select.min.js',
                            'assets/plugins/select2/dist/css/select2.min.css',
                            'assets/plugins/select2/dist/js/select2.min.js'

                        ]
                    });
                }]
            }
        })
/* -- ================== 03.0 Edit Demand & Projections ============================================================= --*/

		.state('app.editDemand', {
            url: '/editDemand',
            template: '<div ui-view></div>',
            abstract: true
        })
        /* -- Basic Forms -- */
        .state('app.editDemand.edit', {
            url: '/editDemand',
            data: 	{
	            	pageTitle: 'Edit Global Demand & Projections',
	            	pageIcon:	'edit'
	            	},
            templateUrl: 'views/editDemand.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootstrap-datepicker/css/datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-colorpicker/css/bootstrap-colorpicker.min.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/password-indicator/css/password-indicator.css',
                            'assets/plugins/bootstrap-combobox/css/bootstrap-combobox.css',
                            'assets/plugins/bootstrap-select/bootstrap-select.min.css',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.css',
                            'assets/plugins/jquery-tag-it/css/jquery.tagit.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker-bs3.css',
                            'assets/plugins/select2/dist/css/select2.min.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-colorpicker/js/bootstrap-colorpicker.min.js',
                            'assets/plugins/masked-input/masked-input.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/password-indicator/js/password-indicator.js',
                            'assets/plugins/bootstrap-combobox/js/bootstrap-combobox.js',
                            'assets/plugins/bootstrap-select/bootstrap-select.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput-typeahead.js',
                            'assets/plugins/jquery-tag-it/js/tag-it.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/select2/dist/js/select2.min.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ]
                    });
                }]
            }
        })

		/* -- 03.1 All Providers with data grid-- */
        .state('app.providers.all', {
            url: '/providers/all',
            templateUrl: 'views/page_blank.html',
            data: 	{
	            	pageTitle: 	'Providers : All',
	            	pageIcon:	'hospital-o'
	            	},
        })

		/* -- 03.2 Bronx Providers with data grid-- */
        .state('app.providers.bronx', {
            url: '/providers/bronx',
            data: 	{
	            	pageTitle: 	'Providers : Bronx',
	            	pageIcon:	'hospital-o'
	            	},
            templateUrl: 'views/page_blank.html'
        })

		/* -- 03.3 Brooklyn Providers with data grid-- */
        .state('app.providers.brooklyn', {
            url: '/providers/brooklyn',
            data: 	{
	            	pageTitle: 	'Providers : Brooklyn',
	            	pageIcon:	'hospital-o'
	            	},
            templateUrl: 'views/page_blank.html'
        })

		/* -- 03.4 Manhattan Providers with data grid-- */
        .state('app.providers.manhattan', {
            url: '/providers/manhattan',
            data: 	{
	            	pageTitle: 'Providers : Manhattan',
	            	pageIcon:	'hospital-o'
	            	},
            templateUrl: 'views/page_blank.html'
        })

		/* -- 03.5 Staten Island Providers with data grid-- */
        .state('app.providers.staten_island', {
            url: '/providers/staten_island',
            data: 	{
	            	pageTitle: 'Providers : Staten Island',
	            	pageIcon:	'hospital-o'
	            	},
            templateUrl: 'views/page_blank.html'
        })

		/* -- 03.6 Queens Providers with data grid-- */
        .state('app.providers.queens', {
            url: '/providers/queens',
            data: 	{
	            	pageTitle: 	'Providers : Queens',
	            	pageIcon:	'hospital-o'
	            	},
            templateUrl: 'views/page_blank.html'
        })

/* -- ================== 04.0 Shelters ============================================================== --*/
        .state('app.shelters', {
            url: '/shelters',
            template: '<div ui-view></div>',
            abstract: true
        })

		/* -- 04.1 All Shelters with data grid-- */
		.state('app.shelters.all', {
            url: '/shelters/all',
            templateUrl: 'views/page_shelters_all.html',
            data: 	{
	            	pageTitle: 	'Shelters : All',
	            	pageIcon:	'bed'
	            	},
			resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Buttons/css/buttons.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/AutoFill/css/autoFill.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/ColReorder/css/colReorder.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/KeyTable/css/keyTable.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/RowReorder/css/rowReorder.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Select/css/select.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/dataTables.buttons.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/buttons.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/buttons.print.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/buttons.flash.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/buttons.html5.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/buttons.colVis.min.js',
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js',
                            'assets/plugins/DataTables/extensions/AutoFill/js/dataTables.autoFill.min.js',
                            'assets/plugins/DataTables/extensions/ColReorder/js/dataTables.colReorder.min.js',
                            'assets/plugins/DataTables/extensions/RowReorder/js/dataTables.rowReorder.min.js',
                            'assets/plugins/DataTables/extensions/Select/js/dataTables.select.min.js'
                        ]
                    });
                }]
            }
        })

		/* -- 04.2 Bronx with data grid-- */
        .state('app.shelters.bronx', {
            url: '/shelters/bronx',
            data: 	{
	            	pageTitle: 	'Shelters : Bronx',
	            	pageIcon:	'bed'
	            	},
            templateUrl: 'views/page_blank.html'
        })

		/* -- 04.3 Brooklyn with data grid-- */
        .state('app.shelters.brooklyn', {
            url: '/shelters/brooklyn',
            data: 	{
	            	pageTitle: 	'Shelters : Brooklyn',
	            	pageIcon:	'bed'
	            	},
            templateUrl: 'views/page_blank.html'
        })

		/* -- 04.4 Manhattan with data grid-- */
        .state('app.shelters.manhattan', {
            url: '/shelters/manhattan',
            data: 	{
	            	pageTitle: 'Shelters : Manhattan',
	            	pageIcon:	'bed'
	            	},
            templateUrl: 'views/page_blank.html'
        })

		/* -- 04.5 Staten Island with data grid-- */
        .state('app.shelters.staten_island', {
            url: '/shelters/staten_island',
            data: 	{
	            	pageTitle: 'Shelters : Staten Island',
	            	pageIcon:	'bed'
	            	},
            templateUrl: 'views/page_blank.html'
        })

		/* -- 04.6 Queens with data grid-- */
        .state('app.shelters.queens', {
            url: '/shelters/queens',
            data: 	{
	            	pageTitle: 'Shelters : Queens',
	            	pageIcon:	'bed'
	            	},
            templateUrl: 'views/page_blank.html'
        })

		/* -- 04.7 Shelter Map Example -- */
		.state('app.shelters.map', {
            url: '/shelters/map',
            data: 	{
	            	pageTitle: 'Google Shelter 2 Map',
	            	pageIcon:	'map-marker'
	            	},
            templateUrl: 'views/map_google.html'
        })

		/* -- 04.8 Shelter Detail -- */
		.state('app.shelters.detail', {
            url: '/shelters/detail',
            data: 	{
	            	pageTitle: 				'Shelter Detail',
	            	pageIcon:				'bed',
	            	buildingName:			'Beaver Street Complex',
	            	shelterName:			'33 Beaver Street',
	            	shelterAddress:			'33 Beaver Street',
	            	shelterBourough:		'Manhattan',
	            	shelterZip:				'10004',
	            	shelterContactFn:		'Mchael',
	            	shelterContactLn:		'Livacca',
	            	shelterContactPhn:		'(555)555-1224',
	            	shelterContactEm:		'Mmivacca@dhs.nyc.gov',
	            	shelterContactTitle:	'Shelter Director',
	            	shelterActiveUnits: 	'26',
	            	shelterDHSUnits:		'2',
	            	faclityType:			'Adult Shelter',
	            	faclityID:				'10000012',
	            	faclityCode:			'B0100',
	            	faclityClass:			'TBD',
	            	programType:			'General',
	            	contractType:			'General',
	            	status:					'Active',
	            	statusC:				'success',
	            	startDate:				'03/15/2016',
	            	endDate:				'04/27/2016',
	            	enrollmentDate:			'03/15/2016',
	            	communityDistrict:		'301',
	            	distict:				'13',
	            	BBL:					'2-9992-2314',
	            	councilDistrict:		'35',
	            	congressionalDistrict:	'08',
	            	cityOwned:				'No',
	            	cityOwnedC:				'danger',
	            	commercialHotel:		'No',
	            	commercialHotelC:		'danger',
	            	managingAgent:			'Durst Orginzation',
	            	buildingOwnership:		'Durst Orginzation',
	            	landlord:				'Yarrow Two, LLC',
	            	providerName:			'Beaver Street Homeless Services, Inc.',
	            	BIN:					'2242478',
	            	violationsSevere:		'12',
	            	violationsCritical:		'19',
	            	violationsMinor:		'2',
	            	relatedBuilding1:		'30 Beaver Street',
	            		relatedBuilding1S:		'square-o',
						relatedBuilding1C:		'',
	            	relatedBuilding2:		'33 Beaver Street',
	            		relatedBuilding2S:		'check-square',
						relatedBuilding2C:		'white',
	            	relatedBuilding3:		'60 Broad Street',
	            		relatedBuilding3S:		'',
						relatedBuilding3C:		'',
	            	relatedBuilding4:		'26 New Street',
	            		relatedBuilding4S:		'square-o',
						relatedBuilding4C:		'',
	            	relatedBuilding5:		'24 New Street',
	            		relatedBuilding5S:		'square-o',
						relatedBuilding5C:		''
	            	},
            templateUrl: 'views/page_shelter_detail.html'
        })

        /* -- 04.8 Shelter Detail -- */
		.state('app.shelters.scoreCard', {
            url: '/shelters/scoreCard',
            templateUrl: 'views/page_shelter_scoreCard.html',
            data: 	{
	            	pageTitle: 				'Shelter Score Card',
	            	pageIcon:				'bed',
	            	buildingName:			'Beaver Street Complex',
	            	shelterName:			'33 Beaver Street',
	            	shelterAddress:			'33 Beaver Street',
	            	shelterBourough:		'Manhattan',
	            	shelterZip:				'10004',
	            	shelterContactFn:		'Mchael',
	            	shelterContactLn:		'Livacca',
	            	shelterContactPhn:		'(555)555-1224',
	            	shelterContactEm:		'Mmivacca@dhs.nyc.gov',
	            	shelterContactTitle:	'Shelter Director',
	            	shelterActiveUnits: 	'26',
	            	shelterDHSUnits:		'2',
	            	faclityType:			'Adult Shelter',
	            	faclityID:				'10000012',
	            	faclityCode:			'B0100',
	            	faclityClass:			'TBD',
	            	programType:			'General',
	            	contractType:			'General',
	            	status:					'Active',
	            	statusC:				'success',
	            	startDate:				'03/15/2016',
	            	endDate:				'04/27/2016',
	            	enrollmentDate:			'03/15/2016',
	            	communityDistrict:		'301',
	            	distict:				'13',
	            	BBL:					'2-9992-2314',
	            	councilDistrict:		'35',
	            	congressionalDistrict:	'08',
	            	cityOwned:				'No',
	            	cityOwnedC:				'danger',
	            	commercialHotel:		'No',
	            	commercialHotelC:		'danger',
	            	managingAgent:			'Durst Orginzation',
	            	buildingOwnership:		'Durst Orginzation',
	            	landlord:				'Yarrow Two, LLC',
	            	providerName:			'Beaver Street Homeless Services, Inc.',
	            	BIN:					'2242478',
	            	violationsSevere:		'12',
	            	violationsCritical:		'19',
	            	violationsMinor:		'2',
	            	relatedBuilding1:		'30 Beaver Street',
	            		relatedBuilding1S:		'square-o',
						relatedBuilding1C:		'',
	            	relatedBuilding2:		'33 Beaver Street',
	            		relatedBuilding2S:		'check-square',
						relatedBuilding2C:		'white',
	            	relatedBuilding3:		'60 Broad Street',
	            		relatedBuilding3S:		'',
						relatedBuilding3C:		'',
	            	relatedBuilding4:		'26 New Street',
	            		relatedBuilding4S:		'square-o',
						relatedBuilding4C:		'',
	            	relatedBuilding5:		'24 New Street',
	            		relatedBuilding5S:		'square-o',
						relatedBuilding5C:		''
	            	},
			resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/dhs-circleChart/circle.css'
                        ]
                    });
                }]
            }
        })
/* -- 04.8 Shelter Detail -- */
		.state('app.shelters.scoreCard2', {
            url: '/shelters/scoreCard2',
            templateUrl: 'views/page_shelter_scoreCard2.html',
            data: 	{
	            	pageTitle: 				'Shelter Score Card',
	            	pageIcon:				'bed',
	            	buildingName:			'Beaver Street Complex',
	            	shelterName:			'33 Beaver Street',
	            	shelterAddress:			'33 Beaver Street',
	            	shelterBourough:		'Manhattan',
	            	shelterZip:				'10004',
	            	shelterContactFn:		'Mchael',
	            	shelterContactLn:		'Livacca',
	            	shelterContactPhn:		'(555)555-1224',
	            	shelterContactEm:		'Mmivacca@dhs.nyc.gov',
	            	shelterContactTitle:	'Shelter Director',
	            	shelterActiveUnits: 	'26',
	            	shelterDHSUnits:		'2',
	            	faclityType:			'Adult Shelter',
	            	faclityID:				'10000012',
	            	faclityCode:			'B0100',
	            	faclityClass:			'TBD',
	            	programType:			'General',
	            	contractType:			'General',
	            	status:					'Active',
	            	statusC:				'success',
	            	startDate:				'03/15/2016',
	            	endDate:				'04/27/2016',
	            	enrollmentDate:			'03/15/2016',
	            	communityDistrict:		'301',
	            	distict:				'13',
	            	BBL:					'2-9992-2314',
	            	councilDistrict:		'35',
	            	congressionalDistrict:	'08',
	            	cityOwned:				'No',
	            	cityOwnedC:				'danger',
	            	commercialHotel:		'No',
	            	commercialHotelC:		'danger',
	            	managingAgent:			'Durst Orginzation',
	            	buildingOwnership:		'Durst Orginzation',
	            	landlord:				'Yarrow Two, LLC',
	            	providerName:			'Beaver Street Homeless Services, Inc.',
	            	BIN:					'2242478',
	            	violationsSevere:		'12',
	            	violationsCritical:		'19',
	            	violationsMinor:		'2',
	            	relatedBuilding1:		'30 Beaver Street',
	            		relatedBuilding1S:		'square-o',
						relatedBuilding1C:		'',
	            	relatedBuilding2:		'33 Beaver Street',
	            		relatedBuilding2S:		'check-square',
						relatedBuilding2C:		'white',
	            	relatedBuilding3:		'60 Broad Street',
	            		relatedBuilding3S:		'',
						relatedBuilding3C:		'',
	            	relatedBuilding4:		'26 New Street',
	            		relatedBuilding4S:		'square-o',
						relatedBuilding4C:		'',
	            	relatedBuilding5:		'24 New Street',
	            		relatedBuilding5S:		'square-o',
						relatedBuilding5C:		''
	            	},
			resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/dhs-circleChart/circle.css'
                        ]
                    });
                }]
            }
        })
/* -- ================== 05.0  Violations =============================================================== --*/
		.state('app.violations', {
            url: '/violations',
            template: '<div ui-view></div>',
            abstract: true
        })

		/* -- All Violations -- */
        .state('app.violations.all', {
            url: '/violations/all',
            data: 	{
	            	pageTitle: 	'All Violations',
	            	pageIcon:	'warning'
	            	},
            templateUrl: 'views/page_blank.html'
        })

		/* -- Critical Violations -- */
        .state('app.violations.critical', {
            url: '/violations/critical_violations',
            data: 	{
	            	pageTitle: 	'Critical Violations',
	            	pageIcon:	'warning',
	            	pageIconColor:	'danger'
	            	},
            templateUrl: 'views/page_blank.html',
        })

		/* -- Severe Violations -- */
        .state('app.violations.severe', {
            url: '/violations/severe_violations',
            data: 	{
	            	pageTitle: 	'Severe Violations',
	            	pageIcon:	'warning',
	            	pageIconColor:	'warning'
	            	},
            templateUrl: 'views/page_blank.html',
        })

		/* -- Minor Violations -- */
        .state('app.violations.minor', {
            url: '/violations/minor_violations',
            data: 	{
	            	pageTitle: 'Minor Violations',
	            	pageIcon:	'warning',
	            	pageIconColor:	'success'
	            	},
            templateUrl: 'views/page_blank.html',
        })

		/* -- Violations Detail with Tabs and Data Grid-- */
        .state('app.violations.detail', {
            url: '/violations/detail',
            data: 	{
	            	pageTitle: 	'Violation Details: Shelter Street Address',
	            	pageIcon:	'warning',
	            	pageIconColor:	'danger'
	            	},
            templateUrl: 'views/page_violation_detail.html'
        })
		/* -- 04.8 Shelter Violations Timeline -- */
        .state('app.violations.timeline', {
            url: '/violations/timeline',
            data: 	{
	            	pageTitle: 	'Shelter Timeline',
	            	pageIcon:	'clock-o'
	            	},
            templateUrl: 'views/extra_timeline.html'
        })

/* -- ================== 06.0 Work Orders =========================================================== --*/
        .state('app.work_orders', {
            url: '/work_orders',
            template: '<div ui-view></div>',
            abstract: true
        })
        /* -- 06.1 Work Orders Master Schedule Calendar -- */
        .state('app.work_orders.calendar', {
            url: '/work_orders/calendar',
            data: 	{
	            	pageTitle: 'Work Orders Master Schedule',
	            	pageIcon:	'list-alt'
	            	},
            templateUrl: 'views/calendar.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'assets/plugins/fullcalendar/fullcalendar/fullcalendar.css',
                            'assets/plugins/fullcalendar/fullcalendar/fullcalendar.js'
                        ]
                    })
                }]
            }
        })

		/* -- 06.2 Work Orders All -- */
        .state('app.work_orders.all', {
            url: '/work_orders',
            data: 	{
	            	pageTitle: 'All Work Orders',
	            	pageIcon:	'list-alt'
	            	},
            templateUrl: 'views/page_blank.html',
        })
		/* -- 06.3 Bronx Work Orders -- */
        .state('app.work_orders.bronx', {
            url: '/work_orders/bronx',
            data: 	{
	            	pageTitle: 'Work Orders : Bronx',
	            	pageIcon:	'list-alt'
	            	},
            templateUrl: 'views/page_blank.html'
        })

		/* -- 06.4 Brooklyn Work Orders -- */
        .state('app.work_orders.brooklyn', {
            url: '/work_orders/brooklyn',
            data: 	{
	            	pageTitle: 'Work Orders : Brooklyn',
	            	pageIcon:	'list-alt'
	            	},
            templateUrl: 'views/page_blank.html'
        })

		/* -- 06.5 Manhattan Work Orders -- */
        .state('app.work_orders.manhattan', {
            url: '/work_orders/Manhattan',
            data: 	{
	            	pageTitle: 'Work Orders : Manhattan',
	            	pageIcon:	'list-alt'
	            	},
            templateUrl: 'views/page_blank.html'
        })

		/* -- 06.6 Staten Island Work Orders -- */
        .state('app.work_orders.staten_island', {
            url: '/work_orders/staten_island',
            data: 	{
	            	pageTitle: 'Work Orders : Staten Island',
	            	pageIcon:	'list-alt'
	            	},
            templateUrl: 'views/page_blank.html'
        })

		/* -- 06.7 Queens Work Orders-- */
        .state('app.work_orders.queens', {
            url: '/work_orders/queens',
            data: 	{
	            	pageTitle: 'Work Orders : Queens',
	            	pageIcon:	'list-alt'
	            	},
            templateUrl: 'views/page_blank.html'
        })
		/* -- 06.8 Create New Work Order-- */
        .state('app.work_orders.new', {
            url: '/work_orders/new',
            data: 	{
	            	pageTitle: 'Create New Work Order',
	            	pageIcon:	'file-o'
	            	},
            templateUrl: 'views/page_blank.html'
        })
/* -- ================== 07.0 Reports =========================================================== --*/
        .state('app.reports', {
            url: '/reports',
            template: '<div ui-view></div>',
            abstract: true
        })

		/* -- 07.1 All Reports -- */
        .state('app.reports.general', {
            url: '/reports/general',
            data: 	{
	            	pageTitle: 'General Reports',
	            	pageIcon:	'list-alt'
	            	},
            templateUrl: 'views/page_blank.html',
        })
		/* -- 07.2 All Reports -- */
        .state('app.reports.all', {
            url: '/reports/all',
            data: 	{
	            	pageTitle: 'All Reports',
	            	pageIcon:	'list-alt'
	            	},
            templateUrl: 'views/page_blank.html',
        })
		/* -- 07.3 All Reports -- */
        .state('app.reports.v1', {
            url: '/reports/v1',
            data: 	{
	            	pageTitle: ' Report Template 1',
	            	pageIcon:	'list-alt'
	            	},
            templateUrl: 'views/page_blank.html',
        })
		/* -- 07.4 All Reports -- */
        .state('app.reports.v2', {
            url: '/reports/v2',
            data: 	{
	            	pageTitle: 'Report Template 2',
	            	pageIcon:	'list-alt'
	            	},
            templateUrl: 'views/page_blank.html',
        })
		/* -- 07.5 All Reports -- */
        .state('app.reports.v3', {
            url: '/reports/v3',
            data: 	{
	            	pageTitle: 'Report Template 3',
	            	pageIcon:	'list-alt'
	            	},
            templateUrl: 'views/page_blank.html',
        })
/* -- ================== 08.0 Contacts ============================================================== --*/
        .state('app.contacts', {
            url: '/contacts',
            template: '<div ui-view></div>',
            abstract: true
        })

		/* -- 08.1 All Contacts With Data Grid -- */
		.state('app.contacts.all', {
            url: '/contacts/all',
            templateUrl: 'views/page_blank.html',
            data: 	{
	            	pageTitle: 	'Contacts : All',
	            	pageIcon:	'users'
	            	},
        })
		/* -- 08.2 Building Contacts With Data Grid -- */
		.state('app.contacts.buildings', {
            url: '/contacts/buildings',
            templateUrl: 'views/page_blank.html',
            data: 	{
	            	pageTitle: 	'Contacts : Building',
	            	pageIcon:	'users'
	            	},
        })
		/* -- 08.3 Provider Contacts With Data Grid -- */
		.state('app.contacts.providers', {
            url: '/contacts/providers',
            templateUrl: 'views/page_blank.html',
            data: 	{
	            	pageTitle: 	'Contacts : Providers',
	            	pageIcon:	'users'
	            	},
        })
 		/* -- 08.4 Shelter Contacts With Data Grid -- */
		.state('app.contacts.shelters', {
            url: '/contacts/shelters',
            templateUrl: 'views/page_blank.html',
            data: 	{
	            	pageTitle: 	'Contacts : Shelters',
	            	pageIcon:	'users'
	            	},
        })
 		/* -- 08.5 Tradesmen Contacts With Data Grid -- */
		.state('app.contacts.tradesmen', {
            url: '/contacts/tradesmen',
            templateUrl: 'views/page_blank.html',
            data: 	{
	            	pageTitle: 	'Contacts : Tradesmen',
	            	pageIcon:	'briefcase'
	            	},
        })

/* -- ================== 09.0 App Settings ========================================================== --*/
		.state('app.settings', {
            url: '/settings',
            template: '<div ui-view></div>',
            abstract: true
        })

		/* -- 09.1 App Settings -- */
        .state('app.settings.general', {
            url: '/settings/app_settings',
            data: 	{
	            	pageTitle: 	'App Settings',
	            	pageIcon: 	'cogs'
	            	},
            templateUrl: 'views/page_blank.html'
        })

/* -- ================== 10.0 App Help ============================================================== --*/
		.state('app.help', {
            url: '/help',
            template: '<div ui-view></div>',
            abstract: true
        })

		/* --  10.1 App Help -- */
        .state('app.help.general', {
            url: '/settings/app_help',
            data: 	{
	            	pageTitle: 	'App Help',
	            	pageIcon: 	'life-buoy'
	            	},
            templateUrl: 'views/page_blank.html'
        })

/* -- ================== Login Logout ========================================================== --*/
        .state('user', {
            url: '/user',
            template: '<div ui-view></div>',
            abstract: true
        })

        .state('user.login', {
            url: '/login',
            template: '<div ui-view></div>',
            abstract: true
        })

        .state('user.register', {
            url: '/register',
            data: 	{
	            		pageTitle: 	'Register',
						agencyTitle:'DHS',
						agencyURL:	'http://intranet.dhs.nycnet:4444',
						deptTitle: 	'OIT',
						appTitle: 	'Building Compliance System',
						appShTitle: 'BCS',
						globalLogoB:	'dhs_logo_blue.png',
						pageIcon: 	'building-o'
	            	},
            templateUrl: 'views/register_v2.html'
        })

         .state('user.login.login', {
            url: '/login/',
            data: 	{
	            	pageTitle: 	'Please Login',
	            	pageIcon: 	'sign-in'
	            	},
            templateUrl: 'views/login-logout.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'assets/plugins/gritter/css/jquery.gritter.css',
                            'assets/plugins/gritter/js/jquery.gritter.js'
                        ]
                    });
                }]
            }
        })

/* -- ================== Logout ================================================================ --*/
         .state('user.login.logout', {
            url: '/login-logout',
            data: 	{
	            	pageTitle: 	'You Have Logged 0ut',
	            	pageIcon: 	'sign-out'
	            	},
            templateUrl: 'views/login-logout.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'assets/plugins/gritter/css/jquery.gritter.css',
                            'assets/plugins/gritter/js/jquery.gritter.js'
                        ]
                    });
                }]
            }
        })




/* -- ========================================================================================== --*/
/* -- ============ Below Used In Development Only ============================================== --*/
/* -- ========================================================================================== --*/
       /* -- UI Elements -- */
	   .state('app.ui', {
            url: '/ui',
            template: '<div ui-view></div>',
            abstract: true
        })
 		.state('app.ui.comp', {
            url: '/comp',
            template: '<div ui-view></div>',
            abstract: true
        })
        /* -- UI General -- */
        .state('app.ui.comp.general', {
            url: '/general',
            data: { pageTitle: 'UI General' },
            templateUrl: 'uiux/ui_general.html'
        })

        /* -- UI Typography -- */
        .state('app.ui.comp.typography', {
            url: '/typography',
            data: { pageTitle: 'UI Typography' },
            templateUrl: 'uiux/ui_typography.html'
        })

        /* -- UI Tabs Accordions -- */
        .state('app.ui.comp.tabsAccordions', {
            url: '/tabs-accordions',
            data: { pageTitle: 'UI Tabs & Accordions' },
            templateUrl: 'uiux/ui_tabs_accordions.html'
        })

        /* -- UI Modal Notifications -- */
        .state('app.ui.comp.modalNotification', {
            url: '/modal-notification',
            data: { pageTitle: 'UI Modal & Notification' },
            templateUrl: 'uiux/ui_modal_notification.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'assets/plugins/gritter/css/jquery.gritter.css',
                            'assets/plugins/gritter/js/jquery.gritter.js'
                        ]
                    });
                }]
            }
        })

        /* -- UI Widget Boxes -- */
        .state('app.ui.comp.widgetBoxes', {
            url: '/widget-boxes',
            data: { pageTitle: 'UI Widget Boxes' },
            templateUrl: 'uiux/ui_widget_boxes.html'
        })

        /* -- UI Media Objects -- */
        .state('app.ui.comp.mediaObject', {
            url: '/media-object',
            data: { pageTitle: 'UI Media Object' },
            templateUrl: 'uiux/ui_media_object.html'
        })

        /* -- UI Buttons -- */
        .state('app.ui.comp.buttons', {
            url: '/buttons',
            data: { pageTitle: 'UI Buttons' },
            templateUrl: 'uiux/ui_buttons.html'
        })

        /* -- UI Font Awesome Icons -- */
        .state('app.ui.comp.icons', {
            url: '/font-awesome',
            data: { pageTitle: 'UI FontAwesome' },
            templateUrl: 'uiux/ui_icons.html'
        })

        /* -- UI Tree -- */
        .state('app.ui.tree', {
            url: '/tree',
            data: { pageTitle: 'UI Tree View' },
            templateUrl: 'uiux/ui_tree.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'assets/plugins/jstree/dist/themes/default/style.min.css',
                            'assets/plugins/jstree/dist/jstree.min.js'
                        ]
                    });
                }]
            }
        })

       /* -- CSS Helper -- */
        .state('app.ui.helper', {
            url: '/helper',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.ui.helper.css', {
            url: '/css',
            data: { pageTitle: 'Predefined CSS Classes' },
            templateUrl: 'views/helper_css.html'
        })
/* -- ================== 404 Error ================================================================= --*/
		.state('error404', {
            url: '/error404',
            data: 	{
	            	pageTitle: 	'404',
	            	agencyTitle:'DHS',
	            	agencyURL:	'http://intranet.dhs.nycnet:4444',
	            	deptTitle: 	'OIT',
	            	appTitle: 	'Building Compliance System',
	            	appShTitle: 'BCS',
	            	globalLogo:	'assets/img/dhs_logo.png',
	            	pageIcon: 	'exclamation-circle',
	            	pageShCont:	'Opps, page not found...'
	            	},
            templateUrl: 'uiux/extra_error.html'
        })
        .state('error505', {
            url: '/error505',
            data: 	{
	            	pageTitle: 	'505',
	            	agencyTitle:'DHS',
	            	agencyURL:	'http://intranet.dhs.nycnet:4444',
	            	deptTitle: 	'OIT',
	            	appTitle: 	'Building Compliance System',
	            	appShTitle: 'BCS',
	            	globalLogo:	'assets/img/dhs_logo.png',
	            	pageIcon: 	'server',
	            	pageShCont:	'Opps, internal server error'
	            	},
            templateUrl: 'uiux/extra_error.html'
        })

/* -- ================== Coming Soon =========================================================== --*/
        .state('comingSoon', {
            url: '/coming-soon',
            data: 	{
	            	pageTitle: 	'Coming Soon',
	            	agencyTitle:'DHS',
	            	agencyURL:	'http://intranet.dhs.nycnet:4444',
	            	deptTitle: 	'OIT',
	            	appTitle: 	'Building Compliance System',
	            	appShTitle: 'BCS',
	            	globalLogo:	'assets/img/dhs_logo.png',
	            	pageIcon: 	'hand-peace-o'
	            	},
            templateUrl: 'uiux/extra_coming_soon.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'assets/plugins/jquery.countdown/jquery.countdown.css',
                            'assets/plugins/jquery.countdown/jquery.plugin.js',
                            'assets/plugins/jquery.countdown/jquery.countdown.js'
                        ]
                    })
                }]
            }
        })


/* -- ================== Form Elements =========================================================== --*/
		.state('app.ui.form', {
            url: '/form',
            template: '<div ui-view></div>',
            abstract: true
        })
        /* -- Basic Forms -- */
        .state('app.ui.form.elements', {
            url: '/elements',
            data: 	{
	            	pageTitle: 'Form Elements',
	            	pageIcon:	'check-square-o'
	            	},
            templateUrl: 'uiux/form_elements.html'
        })

        /* -- Basic upload -- */
        .state('app.ui.form.upload', {
            url: '/upload',
            data: 	{
	            	pageTitle: 'Form Upload',
	            	pageIcon:	'cloud-upload'
	            	},
            templateUrl: 'uiux/form_upload.html',
			resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
								'assets/plugins/dropzone/basic.css',
								'assets/plugins/dropzone/dropzone.css',
								'assets/plugins/dropzone/dropzone.js'
                        ]
                    })
                }]
            }
        })
        /* -- Basic upload -- */
        .state('app.ui.form.wizards', {
            url: '/wizards',
            data: 	{
	            	pageTitle: 'Form Wizards',
	            	pageIcon:	'cloud-upload'
	            	},
            templateUrl: 'uiux/form_wizard.html',
			resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
								'assets/plugins/bootstrap-wizard/css/bwizard.min.css',
								'assets/plugins/parsley/src/parsley.css',
								'assets/plugins/parsley/dist/parsley.js',
								'assets/plugins/bootstrap-wizard/js/bwizard.js',
								'assets/js/form-wizards.demo.js'
                        ]
                    })
                }]
            }
        })
        /* -- Form with plugins -- */
        .state('app.ui.form.plugins', {
            url: '/plugins',
            data: { pageTitle: 'Form Plugins' },
            templateUrl: 'uiux/form_plugins.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/bootstrap-datepicker/css/datepicker.css',
                            'assets/plugins/bootstrap-datepicker/css/datepicker3.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.css',
                            'assets/plugins/ionRangeSlider/css/ion.rangeSlider.skinNice.css',
                            'assets/plugins/bootstrap-colorpicker/css/bootstrap-colorpicker.min.css',
                            'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'assets/plugins/password-indicator/css/password-indicator.css',
                            'assets/plugins/bootstrap-combobox/css/bootstrap-combobox.css',
                            'assets/plugins/bootstrap-select/bootstrap-select.min.css',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.css',
                            'assets/plugins/jquery-tag-it/css/jquery.tagit.css',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker-bs3.css',
                            'assets/plugins/select2/dist/css/select2.min.css',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'assets/plugins/ionRangeSlider/js/ion-rangeSlider/ion.rangeSlider.min.js',
                            'assets/plugins/bootstrap-colorpicker/js/bootstrap-colorpicker.min.js',
                            'assets/plugins/masked-input/masked-input.min.js',
                            'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            'assets/plugins/password-indicator/js/password-indicator.js',
                            'assets/plugins/bootstrap-combobox/js/bootstrap-combobox.js',
                            'assets/plugins/bootstrap-select/bootstrap-select.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.min.js',
                            'assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput-typeahead.js',
                            'assets/plugins/jquery-tag-it/js/tag-it.min.js',
                            'assets/plugins/bootstrap-daterangepicker/moment.js',
                            'assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            'assets/plugins/select2/dist/js/select2.min.js',
                            'assets/plugins/bootstrap-eonasdan-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                        ]
                    });
                }]
            }
        })
        /* -- Form Switcher Elements -- */
        .state('app.ui.form.sliderSwitcher', {
            url: '/slider-switcher',
            data: 	{
	            	pageTitle: 'Form Slider + Switcher',
	            	pageIcon:	'check-square-o'
	            	},
            templateUrl: 'uiux/form_slider_switcher.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'assets/plugins/switchery/switchery.min.css',
                            'assets/plugins/powerange/powerange.min.css',
                            'assets/plugins/switchery/switchery.min.js',
                            'assets/plugins/powerange/powerange.min.js'
                        ]
                    });
                }]
            }
        })
        /* -- Form Validations -- */
        .state('app.ui.form.validation', {
            url: '/validation',
            data: 	{
	            	pageTitle:	'Form Validation',
	            	pageIcon:	'check-square-o'
	            	},
            templateUrl: 'uiux/form_validation.html'
        })

/* -- ================== Cgarts =========================================================== --*/

        .state('app.ui.chart', {
            url: '/chart',
            template: '<div ui-view></div>',
            abstract: true
        })

        /* -- Flot Charts -- */
        .state('app.ui.chart.flot', {
            url: '/flot',
            data: 	{
	            	pageTitle: 'Flot Chart',
	            	pageIcon:	'pie-chart'
	            	},
            templateUrl: 'uiux/chart_flot.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        name: 'angular-flot',
                        files: [
                            'assets/plugins/flot/jquery.flot.min.js',
                            'assets/plugins/flot/jquery.flot.time.min.js',
                            'assets/plugins/flot/jquery.flot.resize.min.js',
                            'assets/plugins/flot/jquery.flot.pie.min.js',
                            'assets/plugins/flot/jquery.flot.stack.min.js',
                            'assets/plugins/flot/jquery.flot.crosshair.min.js',
                            'assets/plugins/flot/jquery.flot.categories.js',
                            'assets/plugins/flot/angular-flot.js',
                        ]
                    })
                }]
            }
        })
        /* -- Morris Charts -- */
        .state('app.ui.chart.morris', {
            url: '/morris',
            data: 	{
	            	pageTitle: 'Morris Chart',
	            	pageIcon:	'pie-chart'
	            	},
            templateUrl: 'uiux/chart_morris.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'assets/plugins/morris/morris.css',
                            'assets/plugins/morris/raphael.min.js',
                            'assets/plugins/morris/morris.js'
                        ]
                    })
                }]
            }
        })

        /* -- JS Charts -- */
        .state('app.ui.chart.js', {
            url: '/chart-js',
            data: 	{
	            	pageTitle: 'Chart JS',
	            	pageIcon:	'pie-chart'
	            	},
            templateUrl: 'uiux/chart_js.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        name: 'angles',
                        files: [
                            'assets/plugins/chart-js/chart.js',
                            'assets/plugins/chart-js/angular/angles.js'
                        ]
                    })
                }]
            }
        })
        /* -- d3 Charts -- */
        .state('app.ui.chart.d3', {
            url: '/chart-d3',
            data: 	{
	            	pageTitle: 'Chart d3',
	            	pageIcon:	'pie-chart'
	            	},
            templateUrl: 'uiux/chart_d3.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/nvd3/build/nv.d3.css',
                            'https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.2/d3.min.js',
                            'assets/plugins/nvd3/build/nv.d3.js'
                        ]
                    })
                }]
            }
        })

        .state('app.table', {
            url: '/table',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.table.basic', {
            url: '/basic',
            data: { pageTitle: 'Basic Table' },
            templateUrl: 'uiux/table_basic.html'
        })
/* -- ========================================================================================== --*/
/* -- ============ Above Used In Development Only ============================================== --*/
/* -- ========================================================================================== --*/




        .state('app.email.detail', {
            url: '/detail',
            data: { pageTitle: 'Email Detail' },
            templateUrl: 'views/email_detail.html'
        })



        .state('app.table.manage', {
            url: '/manage',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.table.manage.default', {
            url: '/default',
            data: { pageTitle: 'Managed Table Default' },
            templateUrl: 'views/table_manage.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
        })
        .state('app.table.manage.autofill', {
            url: '/autofill',
            data: { pageTitle: 'Managed Table Autofill' },
            templateUrl: 'views/table_manage_autofill.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/AutoFill/css/autoFill.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/AutoFill/js/dataTables.autoFill.min.js',
                            'assets/plugins/DataTables/extensions/AutoFill/js/autoFill.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }

        })
        .state('app.table.manage.buttons', {
            url: '/buttons',
            data: { pageTitle: 'Managed Table Buttons' },
            templateUrl: 'views/table_manage_buttons.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Buttons/css/buttons.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/dataTables.buttons.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/buttons.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/buttons.print.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/buttons.flash.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/buttons.html5.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/buttons.colVis.min.js',
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
        })
        .state('app.table.manage.colReorder', {
            url: '/colreorder',
            data: { pageTitle: 'Managed Table ColReorder' },
            templateUrl: 'views/table_manage_colreorder.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/ColReorder/css/colReorder.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/ColReorder/js/dataTables.colReorder.min.js',
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
        })
        .state('app.table.manage.fixedColumns', {
            url: '/fixed-column',
            data: { pageTitle: 'Managed Table Fixed Columns' },
            templateUrl: 'views/table_manage_fixed_columns.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/FixedColumns/css/fixedColumns.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/FixedColumns/js/dataTables.fixedColumns.min.js',
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
        })
        .state('app.table.manage.fixedHeader', {
            url: '/fixed-header',
            data: { pageTitle: 'Managed Table Fixed Header' },
            templateUrl: 'views/table_manage_fixed_header.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/FixedHeader/css/fixedHeader.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/FixedHeader/js/dataTables.fixedHeader.min.js',
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
        })
        .state('app.table.manage.keyTable', {
            url: '/keytable',
            data: { pageTitle: 'Managed Table KeyTable' },
            templateUrl: 'views/table_manage_keytable.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/KeyTable/css/keyTable.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/KeyTable/js/dataTables.keyTable.min.js',
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
        })
        .state('app.table.manage.responsive', {
            url: '/responsive',
            data: { pageTitle: 'Managed Table Responsive' },
            templateUrl: 'views/table_manage_responsive.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
        })
        .state('app.table.manage.rowReorder', {
            url: '/rowreorder',
            data: { pageTitle: 'Managed Table RowReorder' },
            templateUrl: 'views/table_manage_rowreorder.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/RowReorder/css/rowReorder.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/RowReorder/js/dataTables.rowReorder.min.js',
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
        })
        .state('app.table.manage.scroller', {
            url: '/scroller',
            data: { pageTitle: 'Managed Table Scroller' },
            templateUrl: 'uiux/table_manage_scroller.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Scroller/css/scroller.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/Scroller/js/dataTables.scroller.min.js',
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
        })
        .state('app.table.manage.select', {
            url: '/select',
            data: { pageTitle: 'Managed Table Select' },
            templateUrl: 'views/table_manage_select.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Select/css/select.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/Select/js/dataTables.select.min.js',
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
        })
        .state('app.table.manage.combine', {
            url: '/combine',
            data: { pageTitle: 'Managed Table Extension Combination' },
            templateUrl: 'views/table_manage_combine.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Buttons/css/buttons.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/AutoFill/css/autoFill.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/ColReorder/css/colReorder.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/KeyTable/css/keyTable.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/RowReorder/css/rowReorder.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Select/css/select.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/dataTables.buttons.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/buttons.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/buttons.print.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/buttons.flash.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/buttons.html5.min.js',
                            'assets/plugins/DataTables/extensions/Buttons/js/buttons.colVis.min.js',
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js',
                            'assets/plugins/DataTables/extensions/AutoFill/js/dataTables.autoFill.min.js',
                            'assets/plugins/DataTables/extensions/ColReorder/js/dataTables.colReorder.min.js',
                            'assets/plugins/DataTables/extensions/KeyTable/js/dataTables.keyTable.min.js',
                            'assets/plugins/DataTables/extensions/RowReorder/js/dataTables.rowReorder.min.js',
                            'assets/plugins/DataTables/extensions/Select/js/dataTables.select.min.js'
                        ]
                    });
                }]
            }
        })


        .state('app.map', {
            url: '/map',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.map.vector', {
            url: '/vector',
            data: { pageTitle: 'Vector Map' },
            templateUrl: 'views/map_vector.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/jquery-jvectormap/jquery-jvectormap-1.2.2.css',
                            'assets/plugins/jquery-jvectormap/jquery-jvectormap-1.2.2.min.js',
                            'assets/plugins/jquery-jvectormap/jquery-jvectormap-world-mill-en.js'
                        ]
                    })
                }]
            }
        })

        .state('app.gallery', {
            url: '/gallery',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.gallery.v1', {
            url: '/v1',
            data: { pageTitle: 'Gallery V1' },
            templateUrl: 'views/gallery.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/isotope/isotope.css',
                            'assets/plugins/lightbox/css/lightbox.css',
                            'assets/plugins/isotope/jquery.isotope.min.js',
                            'assets/plugins/lightbox/js/lightbox-2.6.min.js'
                        ]
                    })
                }]
            }
        })
        .state('app.gallery.v2', {
            url: '/v2',
            data: { pageTitle: 'Gallery V2' },
            templateUrl: 'views/gallery_v2.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/superbox/js/superbox.js'
                        ]
                    })
                }]
            }
        })
        .state('app.options', {
            url: '/options',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.options.pageBlank', {
            url: '/blank',
            data: { pageTitle: 'Blank Page' },
            templateUrl: 'views/page_blank.html'
        })
        .state('app.options.pageWithFooter', {
            url: '/with-footer',
            data: { pageTitle: 'Page with Footer' },
            templateUrl: 'views/page_with_footer.html'
        })
        .state('app.options.pageWithoutSidebar', {
            url: '/without-sidebar',
            data: { pageTitle: 'Page without Sidebar' },
            templateUrl: 'views/page_without_sidebar.html'
        })
        .state('app.options.pageWithRightSidebar', {
            url: '/right-sidebar',
            data: { pageTitle: 'Page with Right Sidebar' },
            templateUrl: 'views/page_with_right_sidebar.html'
        })
        .state('app.options.pageWithMinifiedSidebar', {
            url: '/minified-sidebar',
            data: { pageTitle: 'Page with Minified Sidebar' },
            templateUrl: 'views/page_with_minified_sidebar.html'
        })
        .state('app.options.pageWithTwoSidebar', {
            url: '/two-sidebar',
            data: { pageTitle: 'Page with Two Sidebar' },
            templateUrl: 'views/page_with_two_sidebar.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'assets/plugins/sparkline/jquery.sparkline.js',
                            'assets/plugins/jquery-knob/js/jquery.knob.js'
                        ]
                    })
                }]
            }
        })
        .state('app.options.pageFullHeightContent', {
            url: '/full-height-content',
            data: { pageTitle: 'Full Height Content' },
            templateUrl: 'views/page_full_height.html'
        })
        .state('app.options.pageWithWideSidebar', {
            url: '/wide-sidebar',
            data: { pageTitle: 'Page with Wide Sidebar' },
            templateUrl: 'views/page_with_wide_sidebar.html'
        })
        .state('app.options.pageWithLightSidebar', {
            url: '/light-sidebar',
            data: { pageTitle: 'Page with Light Sidebar' },
            templateUrl: 'views/page_with_light_sidebar.html'
        })
        .state('app.options.pageWithMegaMenu', {
            url: '/light-sidebar',
            data: { pageTitle: 'Page with Mega Menu' },
            templateUrl: 'views/page_with_mega_menu.html'
        })
        .state('app.options.pageWithTopMenu', {
            url: '/top-menu',
            data: { pageTitle: 'Page with Top Menu' },
            templateUrl: 'views/page_with_top_menu.html'
        })
        .state('app.options.pageWithMixedMenu', {
            url: '/mixed-menu',
            data: { pageTitle: 'Page with Mixed Menu' },
            templateUrl: 'views/page_with_mixed_menu.html'
        })
        .state('app.options.pageWithBoxedLayout', {
            url: '/boxed-layout',
            data: { pageTitle: 'Page with Boxed Layout' },
            templateUrl: 'views/page_with_boxed_layout.html'
        })
        .state('app.options.pageWithBoxedMixedMenu', {
            url: '/boxed-mixed-menu',
            data: { pageTitle: 'Page with Mixed Menu Boxed Layout' },
            templateUrl: 'views/page_boxed_layout_with_mixed_menu.html'
        })
        .state('app.options.pageWithTransparentSidebar', {
            url: '/transparent-sidebar',
            data: { pageTitle: 'Page with Transparent Sidebar' },
            templateUrl: 'views/page_with_transparent_sidebar.html'
        })
        .state('app.extra', {
            url: '/extra',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.extra.timeline', {
            url: '/timeline',
            data: { pageTitle: 'Timeline' },
            templateUrl: 'views/extra_timeline.html'
        })
        .state('app.extra.searchResults', {
            url: '/search-results',
            data: { pageTitle: 'Search Results' },
            templateUrl: 'views/extra_search_results.html'
        })
        .state('app.extra.invoice', {
            url: '/invoice',
            data: { pageTitle: 'Invoice' },
            templateUrl: 'views/extra_invoice.html'
        })
        .state('app.extra.profile', {
            url: '/profile',
            data:
            	{
	            	pageTitle: 	'Profile: Robert Santore',
	            	agencyTitle:'DHS',
	            	agencyURL:	'http://intranet.dhs.nycnet:4444',
	            	deptTitle: 	'OIT',
	            	appTitle: 	'Building Compliance System',
	            	appShTitle: 'BCS',
	            	globalLogo:	'assets/img/dhs_logo.png',
	            	pageIcon: 	'thumbs-o-up'
	            },
            templateUrl: 'views/extra_profile.html'
        })



}]);

dhsAdminApp.run(['$rootScope', '$state', 'setting', function($rootScope, $state, setting) {
    $rootScope.$state = $state;
    $rootScope.setting = setting;
}]);