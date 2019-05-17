const path = require('path');
const withOffline = require('next-offline');
const withTypescript = require('@zeit/next-typescript');

module.exports = withOffline(withTypescript({
    webpack(config) {
        config.module.rules.push(
            {test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/, loader: 'url-loader?limit=8192&name=[name]-[hash].[ext]'}
        );
        return config;
    }
}));
