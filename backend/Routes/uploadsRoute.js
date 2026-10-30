const { handleUpload, handleDelete } = require('../Controller/uploadController');
const upload = require('../Middleware/upload');

const router = require('express').Router()

router.post("/upload", upload.array("image",5) , handleUpload)
router.post("/delete", handleDelete)

module.exports = router