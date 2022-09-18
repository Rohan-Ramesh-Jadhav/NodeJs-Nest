module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'student-record-managment',
  synchronize: false,
  entities: [`dist/apps/student-app/libs/**/entities/*.entity.js`],
  migrations: ['dist/db/migrations/*.js'],
  cli: {
    migrationsDir: './db/migrations',
  },
};
