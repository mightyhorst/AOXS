Ext.define('FV.view.appView.appList', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.appList',


    requires: ['Ext.toolbar.Toolbar'],

    title: 'Portfolios',
    collapsible: true,
    layout: 'fit',

    initComponent: function () {
        Ext.apply(this, {
            items:
            [
                {
                    title: 'Hero',
                    xtype: 'panel'
                }
            ], //eof Items

            dockedItems:
            [
                {
                    xtype: 'toolbar',
                    items:
                    [
                        {
                            text: 'Excel'
                        }
                    ]
                }
            ]//eof dockedItems

        }); //eof Aplly()

        this.callParent(arguments);
    }

});     //eof Class