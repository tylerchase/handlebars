const Express = require('express')

let app = Express();

app.get('/', (req, res) => {
  res.json({message: 'Hello from express, maybe'});
})

app.get('/page2', (req, res) => {
  res.json({message: 'I am page 2 now!!!'})
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
});
