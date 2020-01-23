
'use strict';
var FAU_App = angular.module('fau-Sample', ['ui.router', 'fau_App_Cntrls']);

FAU_App.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', { url: '/home', templateUrl: 'views/home.html', controller: 'mainController' })

        // route for the about page
        .state('about', { url: '/about', templateUrl: 'views/about-us.html', controller: 'aboutController' })
        // route for the about page
        .state('blog', { url: '/blog', templateUrl: 'views/blog.html', controller: 'aboutController' })
        // route for the about page
        .state('faq', { url: '/faq', templateUrl: 'views/faq.html', controller: 'faqController' })
        // route for the about page
        .state('fueled', { url: '/fueled', templateUrl: 'views/fuleledbyus.html', controller: 'aboutController' })

        // route for the about page
        .state('product', { url: '/product', templateUrl: 'views/product-page.html', controller: 'aboutController' })

        // route for the about page
        .state('products', { url: '/products/', templateUrl: 'views/products/', controller: 'aboutController' })

        // route for the about page
        .state('testimonials', { url: '/testimonials', templateUrl: 'views/testimonials.html', controller: 'testimonialsController' })

        // route for the about page
        .state('interest', { url: '/interest', templateUrl: 'views/interest-areas.html', controller: 'aboutController' })

            // route for the portfolio page
        .state('portfolio', { url: '/portfolio', templateUrl: 'views/portfolio.html', controller: 'portfolioController' })

    // route for the contact-us page
    .state('contact', { url: '/contact', templateUrl: 'views/contact-us.html', controller: 'contactController' })

    // route for the events page
    .state('events', { url: '/events', templateUrl: 'views/event1.html', controller: 'eventsController' })

    // route for the Product-details page
        .state('productDetails', { url: '/productDetails', templateUrl: 'views/products-details.html', controller: 'productDetailsController' })

// route for the events page
    .state('privacy', { url: '/privacy', templateUrl: 'views/privacy.html', controller: 'privacyController' })

    // route for the events page
    .state('shpiingAndReturn', { url: '/shpiingReturn', templateUrl: 'views/shpiing-return.html', controller: 'shpiingReturnController' })

    // route for the events page
    .state('terms-Condition', { url: '/termsCondition', templateUrl: 'views/terms-condition.html', controller: 'termsConditionController' })

    $urlRouterProvider.otherwise('/home');
    //$locationProvider.html5Mode(true);

});


var fau_Cntrls = angular.module("fau_App_Cntrls", []);

fau_Cntrls.directive('fauNav', [function () {
    return {
        restrict: 'E',
        templateUrl: 'views/navbar.html',
    };
}]);

fau_Cntrls.directive('fauFoot', [function () {
    return {
        restrict: 'E',
        templateUrl: 'views/foot.html',

    };
}
]);


fau_Cntrls.controller("mainController", function ($scope) {
    $scope.message = 'Everyone come and see how good I look!';
});

fau_Cntrls.controller("aboutController", function ($scope) {
    $scope.message = 'Everyone come and see how good I look!';
});

fau_Cntrls.controller("contactController", function ($scope) {
    $scope.message = 'Contact us! Teja This is just a demo.';
});

fau_Cntrls.controller("portfolioController", function ($scope) {
  $scope.message = 'portfolioController us! Teja This is just a demo.';
});

fau_Cntrls.controller("contactController", function ($scope) {
    $scope.message = 'contactController us! Teja This is just a demo.';
});

fau_Cntrls.controller("eventsController", function ($scope) {
    $scope.message = 'eventsController us! Teja This is just a demo.';
});

fau_Cntrls.controller("testimonialsController", function ($scope) {
    $scope.message = 'testimonialsController us! Teja This is just a demo.';
});
fau_Cntrls.controller("productDetailsController", function ($scope) {
    $scope.message = 'productDetailsController us! Teja This is just a demo.';
});

fau_Cntrls.controller("faqController", function ($scope) {
    $scope.message = 'faqController us! Teja This is just a demo.';
});


fau_Cntrls.controller("privacyController", function ($scope) {
    $scope.message = 'privacyController us! Teja This is just a demo.';
});
fau_Cntrls.controller("shpiingReturnController", function ($scope) {
    $scope.message = 'shpiingReturnController us! Teja This is just a demo.';
});

fau_Cntrls.controller("termsConditionController", function ($scope) {
    $scope.message = 'termsConditionController us! Teja This is just a demo.';
});

