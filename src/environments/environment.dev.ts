let backEndUrl = 'http://localhost:8082';
export const environment = {
  production: false,
  backEndUrl: backEndUrl,
  tokenName: 'access_token',
  urls: {
      auth: {
          url: backEndUrl+'/auth',
          login: backEndUrl+'/auth/login',
          refresh: backEndUrl+'/auth/refresh',
      },
      company: {
          url: 'http://localhost:8080/company'
      }
  }
};
