const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

//Utilidades CSS
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

const concat = require('gulp-concat');

//Utilidades JS
const terser = require('gulp-terser-js');
const rename = require('gulp-rename');
const babel = require('gulp-babel');

//Imagenes
const webp = require('gulp-webp');

const paths = {
    images: 'src/img/**/*.png',
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js',
    jquery: 'src/jquery/**/*.js'
}

function css() {
    return src(paths.scss)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./build/css'));
}

function javascript() {
    return src(paths.js)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(concat('bundle.js'))
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(rename({suffix: '.min'}))
        .pipe(dest('./build/js'));
}

function jquery() {
    return src(paths.js)
        .pipe(sourcemaps.init())
        .pipe(concat('bundle_jquery.js'))
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(rename({suffix: '.min'}))
        .pipe(dest('./build/jquery'));
}

function watchFiles() {
    watch(paths.scss, css);
    watch(paths.js, javascript)
}

function toWebp() {
    return src(paths.images)
        .pipe(webp())
        .pipe(dest('./build/img'));
}

exports.css = css;
exports.javascript = javascript;
exports.jquery = jquery;
exports.toWebp = toWebp;
exports.watchFiles = watchFiles;

exports.default = series(css, javascript, jquery, toWebp, watchFiles);