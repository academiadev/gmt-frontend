let backEndUrl = 'https://localhost:8082';
export const environment = {
  production: false,
  backEndUrl: backEndUrl,
  tokenName: 'access_token',
  urls: {
    auth: {
      url: backEndUrl + '/auth',
      login: backEndUrl + '/auth/login',
      isauth: backEndUrl + '/auth/isauth',
      refresh: backEndUrl + '/auth/refresh',
      changePassword: backEndUrl + '/auth/change-password',
    },
    company: {
      url: backEndUrl + '/company/',
    },
    refund: {
      url: backEndUrl + '/refund/',
      category: backEndUrl + '/refund/category',
      statusAssign: backEndUrl + '/refund/statusAssign',
    },
    user: {
      url: backEndUrl + '/user/',
      email: backEndUrl + '/user/email',
      forgotPassword: backEndUrl + '/user/forgotPassword',
      newCompany: backEndUrl + '/user/newCompany',
      redefinePassword: backEndUrl + '/user/redefinePassword',
    },
  }
};
