module.exports = function (app) {
  
  //app.use('/', require('./routes/home'));
  app.use('/signup', require('./routes/signup'));
  console.log('en el server --> index.js')
};