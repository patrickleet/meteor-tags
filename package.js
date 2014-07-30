
Package.describe({
    summary: "Add tags to selected collections",
});

Package.on_use(function (api) {
    api.use(['underscore', 'bootstrap', 'templating', 'jquery', 'handlebars'], 'client');
    
    // this is required since Meteor 0.6.5
    api.use(['livedata', 'mongo-livedata'], ['client', 'server']);

    api.add_files("lib/tags.js", ['client', 'server']);

    if (api.export !== undefined) {
      api.export('Tags');
    }
});
