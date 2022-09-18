module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'demo',
  synchronize: false,
  entities: [`dist/apps/demo/libs/name/src/entities/name.entity.js`],
  migrations: ['dist/db/migrations/*.js'],
  cli: {
    migrationsDir: './db/migrations/',
  },
};
