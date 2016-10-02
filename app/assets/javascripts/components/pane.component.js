(function() {

    'use strict';

    var pane = {
        transclude: true,
        require: {
            tabsCtrl: '^tabs'
        },
        bindings: {
            parentController: '=',
            title: '@'
        },
        controller: PaneController,
        templateUrl: 'components/pane.html'
    }

    function PaneController() {
        this.$onInit = function() {
            this.tabsCtrl.addPane(this);
        };
    }

    angular
        .module('app')
        .component('pane', pane);
}());
