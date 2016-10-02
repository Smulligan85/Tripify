(function() {

    'use strict';

    var tabs = {
        transclude: true,
        controller: tabsController,
        templateUrl: 'components/tabs.html'
    };

    function tabsController() {
        var panes = this.panes = [];
        this.select = function(pane) {
            angular.forEach(panes, function(pane) {
                pane.selected = false;
            });
            pane.selected = true;
        };
        this.addPane = function(pane) {
            panes.push(pane);
        };
    }

    angular
        .module('app')
        .component('tabs', tabs);

}());
