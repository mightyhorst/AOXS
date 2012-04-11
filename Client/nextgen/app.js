Ext.Loader.setConfig({enabled: true});

/* MY APP */
Ext.application({
    name: 'FV',
    appFolder: 'nextgen/app', 

    // All the paths for custom classes
   // paths: {
   //     'Ext.ux': 'extjs/examples/ux/'
   // },

    // Define all the controllers that should initialize at boot up of your application
    controllers: [
        //'Articles',
        // 'Feeds'
        'Controlface'
    ],
    
    autoCreateViewport: true
});

