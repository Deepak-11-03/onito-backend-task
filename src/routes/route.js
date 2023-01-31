const express = require('express');
const router = express.Router();
const {getLongestMovie,addNewMovie} = require('../controller/controller')

router.get('/api/v1/longest-duration-movies',getLongestMovie)
router.post('/api/v1/new-movie',addNewMovie)

module.exports = router