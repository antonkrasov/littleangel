const { Router } = require('express')
const router = Router()

/**
 * path: /api/auth/register
 */
router.post('/register', async (req, res) => {
    res.json({
        'success': true
    })
})

/**
 * path: /api/auth/login
 */
router.post('/login', async (req, res) => {
    res.json({
        'success': true
    })
})

module.exports = router