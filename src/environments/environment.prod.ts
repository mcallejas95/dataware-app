export const environment = {
    production: true,
    hosting: {
      public: 'dist/dataware-app',
      ignore: [
        'firebase.json',
        '**/.*',
        '**/node_modules/**'
      ]
    }
  }
;
