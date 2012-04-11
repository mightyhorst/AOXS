Ext.define('FV.store.AppStore', {
    extend: 'Ext.data.Store',
    model: 'FV.model.AppModel',
    autoLoad: true,

    

    proxy: {
        type: 'ajax',
        api: {
            //read: 'data/users.json',
            //read: '/Client/GetUserJson?x=' + Ext.urlDecode(window.location.search.substring(1)),
            read: '/Client/GetUserJson',
            update: 'data/updateUsers.json'
        },
        reader: {
            type: 'json',
            root: 'users',
            successProperty: 'success'
        }
    }
});

