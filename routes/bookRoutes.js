const express = require('express')
const router = express.Router();
const BookController = require('../controllers/bookcontroller.js');
// const { authandicate } = require('../middleware/authentication.js');
// const { isAuthorization } = require('../middleware/authrorization.js');

const {authandicate} = require('../controllers/autenAthor.js');
const {isAuthorization}= require('../controllers/autenAthor.js')



router.post('/createBook',authandicate,isAuthorization('admin','staff','reader'),BookController.createBook)
router.get('/getAllBooks',authandicate,isAuthorization('admin','staff','reader'),BookController.getAllBooks)
router.put('/updateBookById/:id',authandicate,isAuthorization('admin', 'staff'),BookController.updateBookById)
router.delete('/deleteBookBy/:id',authandicate,isAuthorization('admin'),BookController.deleteBookById)
router.get('/getbookByName',BookController.getbookByName)


module.exports = router ;