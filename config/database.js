module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'be'),
      user: env('DATABASE_USERNAME', 'jinhlee19'),
      password: env('DATABASE_PASSWORD', 'Kali8697!@'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
