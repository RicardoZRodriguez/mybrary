const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log("Index route called"); // Add this line to debug
    res.render('index')
})

module.exports = router
