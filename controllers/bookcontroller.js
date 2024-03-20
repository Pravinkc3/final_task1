const BookSolution = require('../solutions/booksolution')
const {v4:uuidv4} = require('uuid')


async function createBook(req,res){
    try {
        const reqBody = {
            bookId :uuidv4(),
            bookName: req.body.bookName,
            bookPrice : req.body.bookPrice,
            stock : req.body.stock,
        }
        console.log(reqBody);
        const response = await BookSolution.createBook(reqBody)
        res.status(201)
        .json({
            response
        })
           
    } catch (err) {
        throw err ;
    }
}


async function getAllBooks(req,res){
    try {
    const limit = req.query.limit ;
    const offset = req.query.offset ;
    const response = await BookSolution.getAllBooks(limit,offset);
    res.status(200)
    .json({
        response
        })
    } catch (err) {
        throw err ;
    }
}


async function updateBookById (req,res){
    try {
       
    const reqBody = {
        bookId:req.params.id ,
        bookName:req.body.bookName,
        bookPrice:req.body.bookPrice,
        stock:req.body.stock
    }
    const response = await BookSolution.updateBookById(reqBody)
    res.status(200)
    .send({
        response:"Updated successFully"
    })
    } catch (err) {
        throw err
    }
}

async function deleteBookById(req,res){
    try {
    const response = await BookSolution.deleteBookById(req.params.id)
    res.status(200)
    .json({
         response
        })

    } catch (err) {
        throw err ;
    }
}

async function getbookByName(req,res){
    try {
        const search = req.query ;
        const result = await BookSolution.getbookByName(search);
        res.status(200)
        .send({
            response:result
        })
    } catch (err) {
        throw err ;
    }
}







module.exports = {createBook , getAllBooks , updateBookById ,deleteBookById ,getbookByName}
