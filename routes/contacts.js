const express =  require('express');
const router = express.Router();

// @route GET api/contacts
//@desc   Get all the user contacts
//@acces Private 
router.get('/', (req, res) => {
  res.send('Get all contects');
});


// @route POST api/contacts
//@desc   Add new contacts
//@acces Public 
router.post('/', (req, res) => {
  res.send('Add contects');
});


// @route PUT api/contacts/:id  //to descrie which contact will be updated or deleted
//@desc   Update contact
//@acces Private 
router.put('/:id', (req, res) => {
  res.send('Update Contact');
});


// @route DELETE api/contacts/:id  
//@desc   Delete contact
//@acces Private 
router.delete('/:id', (req, res) => {
  res.send('Delete Contact');
});

module.exports = router;