export const environment = {
  production: true,
  backEndUrl: 'https://powerful-retreat-98533.herokuapp.com',
  tokenName: 'access_token',
  urls: {
    auth: {
      url: 'https://powerful-retreat-98533.herokuapp.com/auth',
      login: 'https://powerful-retreat-98533.herokuapp.com/auth/login',
      refresh: 'https://powerful-retreat-98533.herokuapp.com/auth/refresh',
    },
    company: {
      url: 'https://powerful-retreat-98533.herokuapp.com/company'
    },
    user: {
      url: 'https://powerful-retreat-98533.herokuapp.com/user/'
    }
  }
};
