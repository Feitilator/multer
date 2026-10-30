const path = require("node:path");
const db = require("../Database/db")
const fs = require('fs/promises')

const handleUpload = async (req,res) =>{
    try {
        const values = req.files.map((file) => [
            "image",
            file.filename
        ])
        await db.query("INSERT INTO uploads (name,photo) VALUES ?",[values])
        return res.status(201).json({message: "Успех"})
    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
}

const handleDelete = async(req,res) =>{
    try {
        const {Did} = req.body
        const [[file]] = await db.query("SELECT * FROM uploads WHERE id = ?",[Did])
        const filename = path.join(__dirname, "..", "Uploads", file.photo)
        await fs.unlink(filename)
        await db.query("DELETE FROM uploads WHERE id = ?",[Did])
        return res.status(200).json({message: "Успех"})
    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
}

module.exports = {handleUpload,handleDelete}