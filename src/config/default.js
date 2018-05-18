/* @flow */

module.exports = {
  host: process.env.NODE_HOST || '127.0.0.1', // Define your host from 'package.json'
  port: process.env.PORT || 3000,
  app: {
    htmlAttributes: { lang: 'en' },
    title: 'Test',
    titleTemplate: 'Test - %s',
    meta: [
      {
        name: 'description',
        content: 'The best react universal starter boilerplate in the world.'
      }
    ],
    links: [
      'http://fonts.googleapis.com/css?family=Tangerine',
      '/css/main.css'
    ]
  },
  fileUpload: {
    avatar: {
      maxSize: 1024 * 1024, // in bytes
      // MIME type
      validMIMETypes: ['image/jpeg', 'image/png', 'image/gif']
    }
  },
  jwt: {
    authentication: {
      secret: process.env.JWT_AUTH_SECRET,
      expiresIn: 60 * 60 * 24 * 3 // in seconds
    },
    verifyEmail: {
      secret: 'df5s6sdHdjJdRg56',
      expiresIn: 60 * 60 // in seconds
    },
    resetPassword: {
      secret: 'FsgWqLhX0Z6JvJfPYwPZ',
      expiresIn: 60 * 60 // in seconds
    }
  },
  passportStrategy: {
    facebook: require('./passportStrategy/facebook/credential').development,
    google: require('./passportStrategy/google/credential').development,
  },
  fcmServerKey: process.env.FCM_SERVER_KEY,
  recaptcha: process.env.RECAPTCHA_KEY
};
