const express = require('express')
const { userLogin } = require('../controller/loginController')
const { userSignup } = require('../controller/signupController')
const { updateProfile } = require('../controller/updateProfileController')
const verifyToken = require('../middleware/verifyToken')
const { user } = require('../controller/userController')
const multer = require('multer')
const path = require('path');
const router = express.Router()
const app = express()

const storage = multer.diskStorage({
  destination: path.join(__dirname,'../../public/uploads'), // Set your destination folder
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    )
  },
})

const upload = multer({ storage })

// app.use('/media', express.static('media'))

router.post('/signup', userSignup)

router.post('/login', userLogin)

router.put('/updateProfile', verifyToken, upload.single('avatar'), updateProfile)

router.get('/user', verifyToken, user)

module.exports = router
