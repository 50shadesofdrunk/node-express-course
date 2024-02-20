const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
    res.send('all items'); // Corrected to use res.send
});

module.exports = router;
