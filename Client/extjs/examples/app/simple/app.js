/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as published by the Free Software Foundation and appearing in the file LICENSE included in the packaging of this file.  Please review the following information to ensure the GNU General Public License version 3.0 requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'AM',

    controllers: [
        'Users'
    ],

    launch: function () {
        Ext.create('Ext.Viewport', {
            layout: 'border',
            title: 'Ext Layout Browser',
            items: [{
                xtype: 'box',
                id: 'header',
                region: 'north',
                html: '<h1> Ext.Layout.Browser</h1>',
                height: 30
            }, {
                layout: 'border',
                id: 'layout-browser',
                region: 'west',
                border: false,
                split: true,
                margins: '2 0 5 5',
                width: 275,
                minSize: 100,
                maxSize: 500,
                items: [{ title: 'HI'}]
            },
            {
                region: 'center',
                html: 'fukn work or ill kill u '
            }
        ],
            renderTo: Ext.getBody()
        });
    }
});

