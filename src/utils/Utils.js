import request from 'superagent';

export const sendRequest = (url, options) => {
    let xhr;

    const method = options.method ? options.method : "get";
    const type = options.type;
    const data = options.data;
    const headers = options.headers;

    // Set method "GET; POST; PUT; DELETE"
    switch (method.toLowerCase()){
        case "get":
            xhr = request
                .get(url)
                .query(data);
            break;
        case "post":
            xhr = request
                .post(url)
                .send(data);
            break;
        case "put":
            xhr = request
                .put(url)
                .send(data);
            break;
        case "delete":
            xhr = request
                .delete(url)
                .send(data);
            break;
        default:
            console.error("Wrong request type is passed");
            return;
    }

    // Set Content-Type header
    if (type) {
        xhr = xhr.type(type);
    }

    // Set headers
    if (headers) {
        xhr = xhr.set(headers);
    }

    // Send request
    xhr.end(function(err, res){
        if (res.ok) {
            options.success && options.success(res.body);
        } else {
            options.error && options.error(err, res);
        }
    });
};

export const setCookie = (name, value, options) => {
    options = options || {};

    let expires = options.expires;

    if (typeof expires == "number" && expires) {
        let d = new Date();
        d.setTime(d.getTime() + expires * 1000);
        expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    let updatedCookie = name + "=" + value;

    for (let propName in options) {
        updatedCookie += "; " + propName;
        let propValue = options[propName];
        if (propValue !== true) {
            updatedCookie += "=" + propValue;
        }
    }

    document.cookie = updatedCookie;
};

export const getCookie = (name) => {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
};

export const deleteCookie = (name) => {
    setCookie(name, "", {
        expires: -1
    });
};