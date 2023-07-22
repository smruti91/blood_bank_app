const express = require('express');
const { testController } = require('../controllers/testController');

//route object

const router = express.Router()

router.get('/test', testController );

//export 

module.exports = router;
