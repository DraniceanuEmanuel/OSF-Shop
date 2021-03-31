const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');


router.get('/signup', (req, res, next) => {
    res.status('200').render('register')
});

router.post('/signup', async (req, res) => {

    try {
        const user = {
            "secretKey": process.env.SECRET_KEY,
            "name": req.body.name,
            "email": req.body.email,
            "password": req.body.password
        }
        const response = await fetch(`${process.env.API_URL}auth/signup`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const userCreated = await response.json()
        res.cookie('token', userCreated.token)

        if (userCreated.error) {
            res.status('400').send('registerError')
        } else {
            res.status('200').redirect('/')
        }
    } catch (err) {
        console.log(err)
        res.status('400').send('404')
    }
})

router.get('/signin', (req, res) => {
    res.status('200').render('login')
});

router.post('/signin', async (req, res) => {
    try {
        const login = {
            secretKey: process.env.SECRET_KEY,
            email: req.body.email,
            password: req.body.password
        }
        const response = await fetch(`${process.env.API_URL}/auth/signin`, {
            method: 'post',
            body: JSON.stringify(login),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const loggedUser = await response.json()
        res.cookie('token', loggedUser.token)
        if (loggedUser.error) {
            res.status('400').send('loginError', {
                loggedUser
            })
        } else {
            res.status('200').redirect('/')
        }
    } catch (err) {
        res.status('400').send('404')
    }
})


module.exports = router;