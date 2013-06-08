define([
    'app',
    'backbone',

    // Views
    'views/headerView',
    'views/notificationView',
    'views/dashboard/dashboardView',
    'views/dashboard/selectionView',
    'views/dashboard/filterView',
    'views/loginView',
    'views/settings/settingsView',
    'views/accounts/accountListView'
], function(
    App, Backbone, HeaderView, NotificationView, DashboardView, SelectionView, FilterView, LoginView, SettingsView, AccountListView) {
    'use strict';
    // TODO some views does not need to be loaded instantly

    return {

        header: function() {
            if (!App.header.currentView) {
                App.header.show(new HeaderView());
                App.header.currentView.init();
                App.notification.attachView(new NotificationView());
            }
        },

        dashboard: function() {
            this.header();

            App.actionbar.show(new FilterView());
            // TODO: not completly visible after reattaching
            App.selection.attachView(new SelectionView());
            App.content.show(new DashboardView());
        },

        login: function() {
            App.content.show(new LoginView());
        },

        logout: function() {
            alert('Not implemented');
        },

        settings: function() {
            this.header();

            var view = new SettingsView();
            App.actionbar.show(new view.actionbar());
            App.content.show(view);
        },

        accounts: function() {
            this.header();

            var view = new AccountListView();
            App.actionbar.show(new view.actionbar());
            App.content.show(view);
        },

        admin: function() {
            alert('Not implemented');
        }
    };

});
