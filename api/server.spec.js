const request = require('supertest')

const { server } = require('./server.js')

const Users = require('../users/users-model.js')
const Requests = require('../requests/requests-model.js')
const db = require('../data/dbConfig.js')

const express = require('express')
const app = require('./server.js')

describe('server', () => {

    it('sets the environment to testing', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })

})

describe('GET /', () => {
    // token not being sent - should respond with a 401
    test('It should require authorization to get users', () => {
        return request(app)
            .get('/users')
            .then((response) => {
                expect(response.statusCode).toBe(401);
            });
    });

    test('It should require authorization to get requests', () => {
        return request(app)
            .get('/requests')
            .then((response) => {
                expect(response.statusCode).toBe(401);
            });
    });

    test('It should require authorization to add requests', () => {
        return request(app)
            .post('/requests')
            .then((response) => {
                expect(response.statusCode).toBe(401);
            });
    });

    test('It should require authorization to delete a requests', () => {
        return request(app)
            .delete('/requests/2')
            .then((response) => {
                expect(response.statusCode).toBe(401);
            });
    });

    test('It should require authorization to delete a user', () => {
        return request(app)
            .delete('/users/2')
            .then((response) => {
                expect(response.statusCode).toBe(401);
            });
    });

})

