var ninjas = require('../controllers/ninjas.js')

module.exports = (app) => {
    //index
    app.get('/', (req, res) => {
        ninjas.index(req, res);
    });
    //New
    app.get('/ninjas/new', (req, res) => {
        ninjas.new(req, res);
    });
    //Create
    app.post('/ninjas', (req, res) => {
        ninjas.create(req, res);
    });
    //Show
    app.get('/ninjas/:id', (req, res) => {
        ninjas.show(req, res);
    })
}
