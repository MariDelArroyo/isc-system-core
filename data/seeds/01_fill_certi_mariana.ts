import { Knex } from 'knex';

const tableName = 'certi_mariana';

exports.seed = function (knex: Knex) {
  return knex(tableName)
    .del()
    .then(function () {
      return knex(tableName).insert([
        { id: 1, name: 'React Native', schedule: 'A', status: 'OPEN'},
        { id: 2, name: 'Backend', schedule: 'B', status: 'CLOSED'  },
        { id: 3, name: 'FullStack', schedule: 'C', status: 'OPEN' },
      ]);
    });
};