const connection = require('../database/connection');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../config');

module.exports = {
    async create(request, response) {
        const { name, email, cellphone, password } = request.body;

        if (!validator.isEmail(email)
            || !validator.isLength(name, { min: 12, max: 255 })
            || !validator.isLength(cellphone, { min: 11, max: 11 })
            || !validator.isLength(password, { min: 8, max: 18 })) {
            return response.status(400).json({
                error: 'Params are not valid.'
            });
        }

        const hashPassword = bcrypt.hashSync(password, 8);

        const [id] = await connection('users').insert({
            name,
            email,
            cellphone,
            password: hashPassword
        })

        return response.json({ id });
    },

    async index(request, response) {
        const token = request.headers['x-access-token'];
        if (!token) return response.status(401).send({ auth: false, message: 'No token provided.' });

        await jwt.verify(token, config.secret, function (error, decoded) {
            if (error) return response.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        });

        const { email } = request.params;

        return response.json(await connection('users')
            .where('email', email)
            .select('*'));
    },
};