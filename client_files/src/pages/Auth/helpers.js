import cookie from 'js-cookie';

//TOKEN IN COOKIE
//Set Cookie
export const setCookie = (key, value) => {
    if(window !== undefined){
        cookie.set(key, value, {
        expires: 1
        })
    }
}

//Remove Cookie
export const removeCookie = (key) => {
    if(window !== undefined){
        cookie.remove(key, {
        expires: 1
        })
    }
}

//Get Cookie
export const getCookie = (key, value) => {
    if(window !== undefined)
    cookie.get(key);
}


//USER IN LOCALSTORAGE
//Set LoacalStorage
export const setLocalStorage = (key, value) => {
    if(window !== undefined)
    localStorage.setItem(key, JSON.stringify(value));
}

//Remove from LocalStorage
export const removeLocalStorage = (key) => {
    if(window !== undefined)
    localStorage.removeItem(key);
}

//Authenticate Users after login
export const authenticateUser = (res, next) => {
    console.log('AUTHENTICATE HELPER ON SIGNIN RESPONSE', res);
    setCookie('token', res.data.token);
    setLocalStorage('user', res.data.user);
    next();
};

//Get user info from LocalStorage
export const isAuthenticated = () => {
    if (window !== 'undefined') {
    const cookieChecked = getCookie('token');
    if (cookieChecked) {
        if (localStorage.getItem('user')) {
            return JSON.parse(localStorage.getItem('user'));
        } else {
            return false;
        }
    }
    }
};


export const logOut = next => {
    removeCookie('token');
    removeLocalStorage('user');
    next();
};


export const updateUser = (res, next) => {
    console.log('UPDATE USER IN LOCALSTORAGE HELPERS', res);
    if (typeof window !== 'undefined') {
        let auth = JSON.parse(localStorage.getItem('user'));
        auth = res.data;
        localStorage.setItem('user', JSON.stringify(auth));
    }
    next();
};