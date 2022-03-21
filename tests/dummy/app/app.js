import Ember from 'ember';
import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'dummy/config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Application.extend({
    modulePrefix: config.modulePrefix,
    podModulePrefix: config.podModulePrefix,
    Resolver,

    init() {
        this._super(...arguments);

        window.App = this;
    },

    componentFor(id) {
        return this.__container__.lookup('-view-registry:main')[id];
    },

    serviceFor(name) {
        return this.__container__.lookup(`service:${name}`);
    }
});

loadInitializers(App, config.modulePrefix);
