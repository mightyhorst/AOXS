Ext.define('FV.controller.Controlface', {
    extend: 'Ext.app.Controller',

    stores: ['Feeds', 'Articles'],//, 'AppStore'],
    // models: ['Feed'],
    //views: ['feed.Add'],
    // stores: ['AppStore'],
    // models: ['AppModel'],
    // views: ['appView.appList'],

    init: function () {
        Ext.create('Ext.window.Window',
        {
            title: 'Welcome',
            html: 'Welcome to the APO catalogue. This is a temporary portal all info will be getting migrated to the Casewise tool',
            width: 400, 
            height: 200
        }).show();
    }
});