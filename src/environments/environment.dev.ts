let backEndUrl = 'http://localhost:8082';
export const environment = {
    production: false,
    backEndUrl: backEndUrl,
    tokenName: 'access_token',
    urls: {
        auth: {
            url: backEndUrl + '/auth',
            login: backEndUrl + '/auth/login',
            refresh: backEndUrl + '/auth/refresh'
        },
        requestPassword: {
            url: backEndUrl + '/requestPassword/'
        },
        company: {
            url: 'http://localhost:8080/company'
        },
        user: {
            url: backEndUrl + '/user/',
            newCompany: backEndUrl + '/user/newCompany'
        }
    }
};
