const multer = require('multer')
const path = require('path')
const crypto = require('crypto')

const storage = multer.diskStorage({
    destination: "Uploads/",
    filename: (req,file,cb) =>{
        const extname = path.extname(file.originalname).toLowerCase()
        cb(null, crypto.randomUUID() + extname)
    }
})

const upload = multer({ storage })

module.exports = upload