var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var app = express();
var MemcachedStore = require('connect-memcached')(session);

app.use(cookieParser());
app.use(session({
    secret: 'some-private-key',
    key: 'test',
    proxy: 'true',
    store: new MemcachedStore({
        hosts: ['127.0.0.1:11211'], //this should be where your Memcached server is running
        secret: 'memcached-secret-key' // Optionally use transparent encryption for memcache session data 
    })
}));