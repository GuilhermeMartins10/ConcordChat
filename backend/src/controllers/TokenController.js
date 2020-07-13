const connection = require('../database/connection');
const jwt = require('jsonwebtoken');
const config = require('../../config');
const bcrypt = require('bcryptjs');

module.exports = {
    async create(request, response) {
        const { email, password } = request.body;

        const user = await connection('users')
            .where('email', email)
            .select('*')
            .first();

        if (!user) {
            return response.status(401).json({
                error: 'Incorrect email or password.'
            });
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return response.status(401).json({
                error: 'Incorrect email or password.'
            });
        }

        return response.json({
            auth: true, token: jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400
            })
        });
    }
};