module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['4upykKt3xaa3V9mWZWaHMA==', '6g+cVwZCKBGeBJU6JAbnUw==', 'M1LeORooSCco+rXj8nBMWA==', 'bgis3pfN5XHWB5Mr+rsNhg==']),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  database: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'c7u1tn6bvvsodf.cluster-czz5s0kz4scl.eu-west-1.rds.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'db7193sqqmbshd'),
      user: env('DATABASE_USERNAME', 'u5f3pmb3l284k9'),
      password: env('DATABASE_PASSWORD', 'pede53814498bc66f31d32b7491a3e0614380b7baee9d55ebf986fbe628781da7'),
    },
  },
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3NIKgBsPfGBetsUHNObXzQ=='),
  },
  oAuth: {
    google: {
      clientId: env('GOOGLE_CLIENT_ID', '499093507023-uplra5sh3i56p6vt57ob5du86ie0kun0.apps.googleusercontent.com'),
      clientSecret: env('GOOGLE_CLIENT_SECRET', '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'),
    },
    facebook: {
      clientId: env('FACEBOOK_CLIENT_ID', '951635870163754'),
      clientSecret: env('FACEBOOK_CLIENT_SECRET', 'af9b819c7dfc9571d934a2ebf2d59643'),
    },
    instagram: {
      clientId: env('INSTAGRAM_CLIENT_ID', '951635870163754'),
      clientSecret: env('INSTAGRAM_CLIENT_SECRET', 'af9b819c7dfc9571d934a2ebf2d59643'),
    },
  },
});
