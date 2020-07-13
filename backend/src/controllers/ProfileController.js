const connection = require('../database/connection');
const jwt = require('jsonwebtoken');
const config = require('../../config');

module.exports = {
    async index(request, response) {
        //Auth verify 
        const token = request.headers['x-access-token'];
        if (!token) return response.status(401).send({ auth: false, message: 'No token provided.' });
        //end auth verify
        
        await jwt.verify(token, config.secret, function (error, decoded) {
            if (error) return response.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        });

        const { email } = request.params;

        return response.json(await connection('users')
            .where('email', email)
            .select('*'));
    },
};