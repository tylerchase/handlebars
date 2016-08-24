const Express = require('express')
var hbs = require('hbs')

let app = Express();

app.set('view engine', 'hbs');
hbs.localsAsTemplateData(app);

app.locals.cohortName ='g31'

app.get('/', (req, res) => {
  res.render('home', {
    cohortName: 'g31',
    foods:[
      'chalupa',
      'ceviche',
      'sprinkles'
    ]
  });
})

app.get('/page2', (req, res) => {
  res.render('page2')
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
});
