const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/authcheck')

// @desc    Show Index Page
// @route   GET /
router.get("/",(req,res) => {
    res.render('index', {
        user : req.user
    })
})

// @desc    Show User Dashboard
// @route   GET /
router.get("/dashboard", ensureAuth, (req,res) =>{
    console.log(req.user);
    res.render('dashboard', {
        user : req.user,
        name: req.user.name,
        isAdmin: req.user.isAdmin
    })    
})

module.exports = router