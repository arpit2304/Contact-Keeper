const express =  require('express');
const router = express.Router();

// @route GET api/auth
//@desc   Get looged a user
//@acces Private
router.get('/', (req, res) => {
  res.send('Get logged a user');
});


// @route POST api/auth
//@desc   Auth user and get tokan
//@acces Public
router.post('/', (req, res) => {
  res.send('Log in user');
});

module.exports = router;