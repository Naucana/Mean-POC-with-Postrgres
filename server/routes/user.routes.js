const express = require('express');
const router = express.Router();
const db = require('../database.js');

const urlUser = '/users/';

router.get(urlUser, function(request, response){
    db.query('SELECT * FROM users ORDER BY user_id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
});

router.get(urlUser + ':id', function(request, response){
    db.query('SELECT * FROM users WHERE user_id = $1', [request.params.id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
});

router.post(urlUser, function(request, response){
    const {
        users_id,
        name,
        valid,
        password
    } = request.body

    db.query('INSERT INTO users (user_id, name, valid, password) VALUES ($1, $2, $3, $4)', [user_id, name, valid, password], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(201).send(`User added with ID: ${results.id}`)
    })
});

router.put(urlUser + ':id' + ':name' + ':email', function(request, response){
    const id = parseInt(request.params.id)
    const {
        name,
        email
    } = request.body

    db.query(
        'UPDATE users SET name = $1, email = $2 WHERE user_id = $3',
    [request.params.name, request.params.email, request.params.id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`User modified with ID: ${id}`)
        }
    )
});

router.delete(urlUser + ':id', function(request, response){
    db.query('DELETE FROM users WHERE user_id = $1', [request.params.id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User deleted with ID: ${id}`)
    })
});

module.exports = router;