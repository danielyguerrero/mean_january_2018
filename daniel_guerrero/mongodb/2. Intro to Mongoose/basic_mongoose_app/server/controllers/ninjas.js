var Ninja = require('../models/ninja');

module.exports = {
    index: (req, res) => {
        Ninja.find({}, (err, ninjas) => {
            if (err) {
                console.log(err);
            }
        
            return res.render('index', {ninjas: ninjas});
        });
    },
    new: (req, res) => {
        return res.render('new');
    },
    create: (req, res) => {
        let ninja = new Ninja(req.body);

        ninja.save((err) => {
            if (err) {
                console.log(err);

                return res.redirect('/ninjas/new');
            }
            return res.redirect('/');
        });
    },
    show: (req, res) => {
        Ninja.findOne({ _id: req.params.id }, (err, ninja) => {
            if (err) {
                console.log(err);
            }
            return res.render('show', {ninja: ninja});
        });
    }
}