export const environment = {
  production: false,
  backEndUrl: 'http://localhost:8080',
  tokenName: 'access_token',
  urls: {
      auth: {
          url: 'http://localhost:8080/auth',
          login: 'http://localhost:8080/auth/login',
          refresh: 'http://localhost:8080/auth/refresh',
      },
      company: {
          url: 'http://localhost:8080/company'
      }
  }
};
