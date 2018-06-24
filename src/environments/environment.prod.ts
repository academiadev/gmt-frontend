export const environment = {
  production: true,
  backEndUrl: 'https://bluerefundgmt.herokuapp.com',
  tokenName: 'access_token',
  urls: {
    auth: {
      url: 'https://bluerefundgmt.herokuapp.com/auth',
      login: 'https://bluerefundgmt.herokuapp.com/auth/login',
      refresh: 'https://bluerefundgmt.herokuapp.com/auth/refresh',
    },
    company: {
      url: 'https://bluerefundgmt.herokuapp.com/company'
    }
  }
};
