var fs = require('fs');
var cors_proxy = require('cors-anywhere');

// Для HTTP
var httpPort = 8080;
cors_proxy.createServer({
originWhitelist: [], // Разрешить только один источник
}).listen(httpPort, function() {
console.log('Запущен CORS Anywhere (HTTP) на порту ' + httpPort);
});

// Для HTTPS
var httpsPort = 8443;
var httpsOptions = {
key: fs.readFileSync('/etc/letsencrypt/live/avt59.ru/privkey.pem'), // Путь к вашему приватному ключу
cert: fs.readFileSync('/etc/letsencrypt/live/avt59.ru/fullchain.pem') // Путь к вашему сертификату
};
cors_proxy.createServer({
originWhitelist: [], // Разрешить только один источник
httpsOptions: httpsOptions, // Использовать опции HTTPS
}).listen(httpsPort, function() {
console.log('Запущен CORS Anywhere (HTTPS) на порту ' + httpsPort);
});
