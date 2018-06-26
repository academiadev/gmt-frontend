let backEndUrl = 'https://localhost:8082';
export const environment = {
  production: false,
  backEndUrl: backEndUrl,
  tokenName: 'access_token',
  urls: {
    auth: {
      url: backEndUrl + '/auth',
      login: backEndUrl + '/auth/login',
      refresh: backEndUrl + '/auth/refresh',
      changePassword: backEndUrl + '/auth/change-password',
    },
    company: {
      url: backEndUrl + '/company/',
    },
    refund: {
      url: backEndUrl + '/refund/',
      category: {
        url: backEndUrl + '/refund/category',
      },
      status: {
        url: backEndUrl + '/refund/statusAssign',
      }
    },
    user: {
      url: backEndUrl + '/user/',
      email: backEndUrl + '/user/email/',
      newCompany: backEndUrl + '/user/newCompany/',
      forgetPassword: backEndUrl + '/user/forgetPassword',
      redefinePassword: backEndUrl + '/user/redefinePassword',
    },
  }
};
