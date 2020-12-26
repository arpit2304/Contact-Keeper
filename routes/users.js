const express =  require('express');
const router = express.Router();

// @route POST api/user
//@desc   register a user
//@acces Public
router.post('/', (req, res) => {
  res.send('Register a user');
});

module.exports = router;