import knex from 'knex';
import config from '../config/config';

const { database } = config;

const db = knex({
  client: 'pg',
  connection: {
    host: database.host,
    database: database.name,
    user: database.user,
    password: database.password,
    ssl: true,
  },
});

export default db;
