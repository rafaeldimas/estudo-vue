const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { secret } = require('../../config/auth');

const User = require('../models/user');

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const 
    } catch (error) {
        
    }
});

router.post('/login', async (req, res) => {});
router.post('/reset_password', async (req, res) => {});

module.exports = app => app.use('/auth', router);