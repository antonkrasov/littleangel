const { Router } = require('express')
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const User = require('../models/User')
const router = Router()

/**
 * path: /api/auth/register
 */
router.post(
    '/register',
    [
        check('name', 'name is required').isString(),
        check('email', 'email is required').isEmail(),
        check('password', 'minimum password length is 6 symbols').isLength({ min: 6 })
    ],
    async (req, res) => {
        try {
            // 1. check that all params are valid and exists
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                const errorsArray = errors.array()

                console.log('request with errors ', errorsArray)
                return res.status(400).json({
                    message: 'incorrect params',
                    errors: errorsArray
                })
            }

            // 2. get our params
            const { email, password, name } = req.body

            // 3. check if user with the same email already exists...
            const candidate = await User.findOne({ email })
            if (candidate) {
                console.log(`attempt to register with the same email: ${email}`)

                return res.status(401).json({
                    message: 'user already exists'
                })
            }

            // 4. hash our password
            const hashedPassword = await bcrypt.hash(password, 7)

            // 5. create and save our user
            const user = new User({ name, email, password: hashedPassword })
            await user.save()

            // 6. notify client that user was create
            return res.status(201).json({
                message: 'user succesfully created'
            })
        } catch (e) {
            console.log('/api/auth/register critical error', e)
            return res.status(500).json({
                message: 'critical server error'
            })
        }
    })

/**
 * path: /api/auth/login
 */
router.post(
    '/login',
    [
        check('email', 'email is required').isEmail(),
        check('password', 'password is required').exists()
    ],
    async (req, res) => {
        try {
            // 1. check that all params are valid and exists
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                const errorsArray = errors.array()

                console.log('request with errors ', errorsArray)
                return res.status(400).json({
                    message: 'incorrect params',
                    errors: errorsArray
                })
            }

            // 2. get our params
            const { email, password } = req.body

            // 3. let's find the user
            const user = await User.findOne({ email })
            if (!user) {
                console.log(`attempt to login with email: ${email}`)

                return res.status(401).json({
                    message: 'wrong credentials'
                })
            }

            // 4. check if password is correct
            const passwordCorrect = await bcrypt.compare(password, user.password)

            // 5. if not, return an error
            if (!passwordCorrect) {
                return res.status(401).json({
                    message: 'wrong credentials'
                })
            }

            // 6. generate our JWT
            const token = jwt.sign(
                {
                    userId: user.id
                },
                config.get('jwtSecret'),
                {
                    expiresIn: '1h'
                }
            )

            // 7. notify about successful login
            return res.status(200).json({
                message: 'login successful',
                token: token,
                userId: user.id
            })
        } catch (e) {
            console.log('/api/auth/register critical error', e)
            return res.status(500).json({
                message: 'critical server error'
            })
        }

    })

module.exports = router