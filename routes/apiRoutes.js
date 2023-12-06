const router = require('express').Router();
// import store class
const Store = require('../helpers/store');

// GET Route for retrieving all saved notes
router.get('/notes', async (req, res) => {
    console.info(`${req.method} request received for notes`);
    try {
        //get the saved notes from the db.json file
        const savedNotes = JSON.parse(await new Store().read());
        res.json(savedNotes);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });  