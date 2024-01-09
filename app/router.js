import EmberRouter from '@ember/routing/router';
import config from 'loopback-3/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', { path: '/' });
  this.route('login');
  this.route('not-found', { path: '/*path' });
  this.route('register');
  this.route('home');
});
