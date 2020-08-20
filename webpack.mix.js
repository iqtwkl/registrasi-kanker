const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js([
        'resources/js/app.js',
        'resources/js/global.js',
        'resources/js/plugins/table.js',
        'resources/js/page/users.js',
        'resources/js/page/pasien.js',
        'resources/js/page/agama.js',
        'resources/js/page/anamnesis.js',
        'resources/js/page/dirujuk.js',
        'resources/js/page/pekerjaan.js',
        'resources/js/page/pemeriksaanfisik.js',
        'resources/js/page/pendidikan.js',
        'resources/js/page/rumahsakit.js',
        'resources/js/page/statuspernikahan.js',
        'resources/js/page/pemeriksaanpenunjang.js',
        'resources/js/page/diagnosa.js',
        'resources/js/page/terapi.js'
    ], 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .copyDirectory('resources/img', 'public/img')
    .copyDirectory('resources/files', 'public/files')
    .styles([
        'resources/css/sidebar.css',
        'resources/css/plugins/table.css'
    ], 'public/css/all.css');
