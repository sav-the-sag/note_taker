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

// POST Route for saving note
router.post('/notes', async (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to save note`);
    // Destructuring assignment for the items in req.body
    if (req.body.title || req.body.text) {
        //saving newnote obj created in store class addnote method to variable, addnote method writes in db.json file
        const newNote = new Store();
        await newNote.addNote(req.body);

        //adding to json file w response obj
        const response = {
            status: 'you did it!',
            body: newNote,
        }
        res.json(response);
    } else {
        res.json('Error in posting note');
    }
});