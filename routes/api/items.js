const express = require('express');
const router = express.Router();
const Item = require('../../models/items');
const bodyParser = require('body-parser');

router.get('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => {
        if (item) {
            res.json(item);
        } else {
            res.status(404).json({err: 'No item found :('});
        }
    })
    .catch(err => {
        console.error(err); 
        res.status(500).json({error: 'Error accessing the database'});
    });
});
router.get('/user/:id', (req, res) => {
    res.send(`user ${req.params.id}`)
});

router.get('/', (req, res) => {
Item.find()
.then((items) => res.json(items))
.catch((err) => res.status(404).json({noitemsfound: 'No Items Found DD:' }));
});
router.delete('/:id', (req, res) => {
    Item.findByIdAndDelete(req.params.id)
        .then(item => {
            if (!item) {
                return res.status(404).json({ noitemfound: 'No item found with that ID :(' });
            }
            res.json({ msg: 'Item deleted successfully' });
        })
        .catch(err => res.status(404).json({ error: 'No item found with that ID :(' }));
});
router.post('/', bodyParser.json(), (req, res) => {
    Item.create(req.body)
    .then((item) => res.json({msg: 'Item was added'}))
    .catch((err) => res.status(400).json({error: 'Error'}));
});
router.put('/:id', bodyParser.json(), (req, res) => {
    Item.findByIdAndUpdate(req.params.id, req.body)
    .then((item) =>res.json({msg: 'Successfully Updated', item}))
    .catch((err) => res.status(400).json({err: 'unable 2 update'})
);
});
module.exports = router;