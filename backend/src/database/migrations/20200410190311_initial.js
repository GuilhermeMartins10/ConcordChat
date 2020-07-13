exports.up = function (knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments();
        table.string('name', 255).notNullable();
        table.string('email', 160).notNullable();
        table.string('cellphone', 11).notNullable();
        table.string('password').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('users');
};
