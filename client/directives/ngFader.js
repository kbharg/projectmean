(function () {
    'use strict';
    angular.module('ngFader', [])
      .directive('ngFader', function($interval) {

      function link(scope){

        //Set your interval time. 4000 = 4 seconds
        scope.setTime = 3000;

        //List your images here. 
        scope.images = [{
            src: 'data:image/jpeg;base64,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',
            alt: 'The Beach'
        }, {
            src: 'http://queenbeecoupons.com/wp-content/upload/2015/12/Spend-30dollars-on-select-Barbie-items-get-free-fashion-2-pack-550x315.png',
            alt: 'The Car'
        }  ,{
            src: 'http://www.babysavers.com/wp-content/uploads/2013/02/fisher-price-toy-deals.jpg',
            alt: 'The Car'
        }  ,{
            src: 'http://1ue0vq2ip2m91b3g7z258a5v.wpengine.netdna-cdn.com/wp-content/uploads/2015/12/IMAGINEXT-TOY-DEALS-ON-AMAZON-560x293.jpg',
            alt: 'The Car'
        }  ,{
            src: 'http://www.southernsavers.com/wp-content/uploads/2016/03/toy-deals.jpg',
            alt: 'The Car'
        }  ];

        /*****************************************************
            STOP! NO FURTHER CODE SHOULD HAVE TO BE EDITED
        ******************************************************/

        //Pagination dots - gets number of images
        scope.numberOfImages = scope.images.length;
        scope.dots = function(num) {
          return new Array(num);   
        };

        //Pagination - click on dots and change image
        scope.selectedImage = 0;
        scope.setSelected = function (idx) {
          scope.stopSlider();
          scope.selectedImage = idx;
        };

        //Slideshow controls
        scope.sliderBack = function() {
          scope.stopSlider();
          scope.selectedImage === 0 ? scope.selectedImage = scope.numberOfImages - 1 : scope.selectedImage--;
        };

        scope.sliderForward = function() {
          scope.stopSlider();
          scope.autoSlider();
        };

        scope.autoSlider = function (){
          scope.selectedImage < scope.numberOfImages - 1 ? scope.selectedImage++ : scope.selectedImage = 0;
        };

        scope.stopSlider = function() {
          $interval.cancel(scope.intervalPromise);
          scope.activePause = true;
          scope.activeStart = false;
        };

        scope.toggleStartStop = function() {
          if(scope.activeStart) {
            scope.stopSlider();
          } else {
            scope.startSlider();
          }
        };
        
        scope.startSlider = function(){
          scope.intervalPromise = $interval(scope.autoSlider, scope.setTime);
          scope.activeStart = true;
          scope.activePause = false;
        };
        scope.startSlider();

        scope.show = function(idx){
            if (scope.selectedImage==idx) {
                return "show";
            }
        };
        

    }

      return {
        restrict: 'E',
        scope: false,
        template: '<div class="ng-fader">'+
                //images will render here
            '<ul>' + 
                '<li ng-repeat="image in images" ng-click="toggleStartStop()" ng-swipe-right="sliderBack()" ng-swipe-left="sliderForward()"><img data-ng-src="{{image.src}}" data-ng-alt="{{image.alt}}" ng-class="show($index)"/></li>' + 
            '</ul>' + 
            //pagination dots will render here
            '<div class="ng-fader-pagination">' + 
                '<ul>' + 
                    '<li ng-repeat="i in dots(numberOfImages) track by $index" ng-class="{current: selectedImage==$index}" ng-click="setSelected($index)"></li>' + 
                '</ul>' + 
            '</div>' + 
            //controls are here
            '<div class="ng-fader-controls">' + 
                '<ul>' + 
                    '<li ng-click="sliderBack()">' + 
                        '<i class="ngfader-back"></i>' + 
                    '</li>' + 
                    '<li ng-click="stopSlider()">' + 
                        '<i class="ngfader-pause" ng-class="{\'active\': activePause}"></i>' + 
                    '</li>' + 
                    '<li ng-click="startSlider()">' + 
                        '<i class="ngfader-play"  ng-class="{\'active\': activeStart}"></i>' + 
                    '</li>' + 
                    '<li ng-click="sliderForward()">' + 
                        '<i class="ngfader-forward"></i>' + 
                    '</li>' + 
                '</ul>' + 
            '</div>' +
        '</div>',
        link: link
      };
      });

}());