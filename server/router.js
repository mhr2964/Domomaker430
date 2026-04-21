const controllers = require('./controllers');
const mid = require('./middleware');

const router = (app) => {
  app.get('/login', mid.requiresLogout, mid.requiresSecure, controllers.Account.loginPage);
  app.post('/login', mid.requiresLogout, mid.requiresSecure, controllers.Account.login);

  app.get('/signup', mid.requiresLogout, mid.requiresSecure, controllers.Account.signupPage);
  app.post('/signup', mid.requiresLogout, mid.requiresSecure, controllers.Account.signup);

  app.get('/logout', controllers.Account.logout);
  app.get('/maker', mid.requiresLogin, controllers.Domo.makerPage);
  app.post('/maker', mid.requiresLogin, controllers.Domo.makeDomo);

  app.get('/', controllers.Account.loginPage);
};

module.exports = router;
