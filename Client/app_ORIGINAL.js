
/* ORIGINAL */

Ext.Loader.setConfig({
    enabled: true
});





Ext.application({
    name: 'AM',

    appFolder: 'app',

    controllers: [
        'Users',
        'TreeMenuController'
    ],


    launch: function () {
        Ext.create('Ext.container.Viewport', {
            //Ext.create('Ext.panel.Panel', {
            // layout: 'fit',
            // layout: 'border',

            layout:
            {
                type: 'border',
                padding: 5
            },
            items: [
                {
                    xtype: 'userlist',
                    region: 'center'
                },
                {
                    xtype: 'userlist',
                    region: 'west',
                    width: 200
                }
            ],

            autoCreateViewPort: false,
            renderTo: Ext.Element.get('ext_portal')
            //renderTo: Ext.Element.get('content_wrapper')
        });



    }






});





