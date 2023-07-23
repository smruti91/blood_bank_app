const express = require('express');
const { registerController, loginController, currentUserController } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();
//routes

//Register
router.post('/register',registerController )

//login
router.post('/login',loginController)

//current User
router.get('/current-user', authMiddleware,currentUserController )

module.exports = router;