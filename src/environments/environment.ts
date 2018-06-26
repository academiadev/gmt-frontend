// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

let backEndUrl = 'https://bluerefundgmt.herokuapp.com';
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

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
