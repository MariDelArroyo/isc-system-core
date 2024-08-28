import { Knex } from 'knex';
const tableName = 'certi_mariana';
exports.up = function (knex: Knex) {
  return knex.schema.hasTable(tableName).then(function (exists) {
    if (!exists) {
      return knex.schema.createTable(tableName, function (table) {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('schedule').notNullable();
        table.string('status').notNullable();

      });
    }
  });
};

exports.down = function (knex: Knex) {
  return knex.schema.dropTableIfExists(tableName);
};
