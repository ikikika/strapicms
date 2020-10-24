module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'database-1.cu6gb25yho8e.ap-southeast-1.rds.amazonaws.com'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapicms'),
        username: env('DATABASE_USERNAME', 'testadmin'),
        password: env('DATABASE_PASSWORD', 'vnnxyGHqyG52'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
