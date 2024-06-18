import './bootstrap';
import '~resources/scss/app.scss'
import * as bootstrap from 'bootstrap'
import.meta.glob([
    '../img/**'
])
const mix = require('laravel-mix');

mix
 .sass('resources/sass/app.scss', 'public/css')
 .js('resources/js/app.js', 'public/js')
 .version()
 .options({
    https: true,
 });
 module.exports = {
    //...
    output: {
      publicPath: 'https://' + process.env.APP_URL + '/',
    },
  };
