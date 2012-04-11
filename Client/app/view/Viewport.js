Ext.define('AM.view.Viewport', {
    extend: 'Ext.container.Viewport',

    // ~~~~~~~~~~~~~
    // Imports/using
    requires: [
        'Ext.layout.container.Border',
        'AM.view.nav.navList'                
    ],//eof Requires

    //~~~~~~~~
    // Layout
    layout: 'border',

    // ~~~~~~~~~~~~~~~~~~~
    // Add items to display
    items: [
        {
            region: 'Center',
            xtype: 'userlist'
        }
    ]//eof Items

}); //eof Class