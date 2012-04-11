
Ext.define('FV.view.article.Grid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.articlegrid',

	cls: 'feed-grid',
	disabled: true,

    requires: ['Ext.ux.PreviewPlugin', 'Ext.toolbar.Toolbar'],
    
    border: false,
    
	initComponent: function() {
		Ext.apply(this, {
		    store: 'AppStore',

			/*viewConfig: {
				plugins: [{
					pluginId: 'preview',
					ptype: 'preview',
					bodyField: 'description',
					previewExpanded: true
				}]
			},*/ 

			columns: [{
				text: 'Master Name',
				dataIndex: 'MasterName',
				flex: 1
				//renderer: this.formatTitle
			}, {
				text: 'Description',
				dataIndex: 'Description',
				hidden: true,
				width: 200
			}, {
			    text: 'Web Site',
			    dataIndex: 'Url',
				//renderer: this.formatDate,
				width: 200
			}],
			dockedItems:[{
				xtype: 'toolbar',
				dock: 'top',
				items: [{
					text: 'For fuck sake',
					action: 'openall'
				}]
			}]
		});

		this.callParent(arguments);
	}
	
});

