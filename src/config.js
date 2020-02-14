const config = {}

if (process.env.NODE_ENV == 'production') {
    config.baseUrl = '/feifeiMall'
} else {
    config.baseUrl = location.protocol + '//' + document.domain + ':8080/feifeiMall'
}

export {
    config
};
