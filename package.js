Package.describe({
  summary: "Add tags to selected collections and support for creating multiple groups of tags",
});

Package.on_use(function (api) {
    // this is required since Meteor 0.6.5
    api.use(['livedata', 'mongo-livedata'], ['client', 'server']);
    api.use('aldeed:collection2', ['client', 'server'], {weak: true});

    api.add_files("lib/tags.js", ['client', 'server']);

    if (api.export !== undefined) {
      api.export('Tags');
    }
});