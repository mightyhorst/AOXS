
/* ORIGINAL */

Ext.Loader.setConfig({
    enabled: true
});


Ext.require(['Ext.chart.*']);


Ext.application({
    name: 'AM',

    appFolder: 'app',

    // controllers: [
    //     'Users',
    //     'navPanelControler'
    // ],


    launch: function () {

        // alert("fuckn work cunt");
        var myPanel = Ext.create('Ext.panel.Panel', { title: 'BEGINNER' });
        var myPanel2 = Ext.create('Ext.panel.Panel', { title: 'INTERMEDIATE' });
        var myPanel3 = Ext.create('Ext.panel.Panel', { title: 'ADVANCED' });
        var myPanel4 = Ext.create('Ext.panel.Panel', { title: 'INSTRUCTORS' });
        var myPanel5 = Ext.create('Ext.panel.Panel', { title: 'Step 1' });
        var myPanel6 = Ext.create('Ext.panel.Panel', { title: 'Step 2' });
        var myPanel7 = Ext.create('Ext.panel.Panel', { title: 'Step 3' });
        myPanel5.html = '<iframe width="100%" height="100%" src="http://www.youtube.com/embed/dEuvBqQBXvk" frameborder="0" allowfullscreen></iframe>';





        // ~~~~~~~ TREE PANEL ~~~~~~~~~~~
        var store = Ext.create('Ext.data.TreeStore', {
            root: {
                expanded: true,
                children: [
                    { text: "Beginner Lessons", expanded: true, children: [
                        { text: "Lesson 1", leaf: true },
                        { text: "Lesson 2", leaf: true },
                        { text: "Lesson 3", leaf: true },
                        { text: "Lesson 4", leaf: true },
                        { text: "Lesson 5", leaf: true }
                        ]
                    },
                    { text: "Intermediate Lessons", expanded: true, children: [
                        { text: "Lesson 6", leaf: true },
                        { text: "Lesson 7", leaf: true },
                        { text: "Lesson 8", leaf: true },
                        { text: "Lesson 9", leaf: true },
                        { text: "Lesson 10", leaf: true }
                        ]
                    },
                    { text: "Advanced Lessons", expanded: true, children: [
                        { text: "Lesson 11", leaf: true },
                        { text: "Lesson 12", leaf: true },
                        { text: "Lesson 13", leaf: true },
                        { text: "Lesson 14", leaf: true },
                        { text: "Lesson 15", leaf: true }
                        ]
                    }
                ]
            }
        });

        var treePanel1 = Ext.create('Ext.tree.Panel', {
            title: 'Lessons',
            store: store,
            rootVisible: false
        });

        var treePanel2 = Ext.create('Ext.tree.Panel', {
            title: 'Evaluation',
            store: store,
            rootVisible: false
        });

        // ~~~~~~~ /eof TREE PANEL ~~~~~~




        var viewPort = Ext.create('Ext.panel.Panel', {
            width: '100%',
            height: 680,
            // title: 'Surfing Learning Portal',
            layout: 'border',
            items: [
             {
                 // xtype: 'panel' implied by default
                 title: 'Level',
                 region: 'west',
                 xtype: 'panel',
                 margins: '5 0 0 5',
                 width: 200,
                 collapsible: true,   // make collapsible
                 id: 'west-region-container',
                 layout: 'accordion',
                 items: [treePanel1, treePanel2]
             }, {
                 title: 'Lesson Steps... ',
                 region: 'center',     // center region is required, no width/height specified
                 xtype: 'panel',
                 // xtype: 'userlist',
                 layout: 'accordion', //'fit',
                 id: 'chartface',
                 collapsible: true,
                 collapsed: false,
                 margins: '5 5 0 0',
                 height: 200,
                 items: [myPanel5, myPanel6, myPanel7]
             }],
           // renderTo: Ext.getBody()
            renderTo: Ext.Element.get('ext_portal')
        });





    }

});





