// Update with your config settings.

module.exports = {

    development: {
        client: 'mysql2',
        connection: {
            host: 'db4free.net',
            user: 'usr_dev_chat',
            password: 'developer_password',
            database: 'concordchat_dev'
        },
        migrations: {
            directory: './src/database/migrations'
        },
        useNullAsDefault: true
    },

    staging: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },

    production: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }
};
