let backEndUrl = 'https://bluerefundgmt.herokuapp.com';
export const environment = {
  production: true,
  backEndUrl: backEndUrl,
  tokenName: 'access_token',
  urls: {
    auth: {
      url: backEndUrl + '/auth',
      login: backEndUrl + '/auth/login',
      refresh: backEndUrl + '/auth/refresh',
      changePassword: backEndUrl + '/auth/change-password',
      requestPassword: backEndUrl + '/user/forgotPassword',
      newPassword: backEndUrl + '/password/new-password',
    },
    user: {
        url: backEndUrl + '/user/',
        email: backEndUrl + '/user/email/',
        company: backEndUrl + '/user/company/',
        newCompany: backEndUrl + '/user/newCompany/',
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
  }
};
