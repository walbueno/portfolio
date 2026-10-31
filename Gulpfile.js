import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import * as dartSass from 'sass';

import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';
import terser from 'gulp-terser';
import browserSyncPackage from 'browser-sync';

const browserSync = browserSyncPackage.create();
const sass = gulpSass(dartSass);

const paths = {

    scss: {
        src: 'src/scss/theme.scss',
        watch: 'src/scss/**/*.scss',
        dest: 'assets/css'
    },

    js: {
        src: 'src/js/modules/**/*.js',
        watch: 'src/js/modules/**/*.js',
        dest: 'assets/js'
    },

    img: {
        src: 'src/img/**/*',
        watch: 'src/img/**/*',
        dest: 'assets/img'
    }

};

// ======================
// CSS
// ======================

export function styles() {

    return gulp
        .src(paths.scss.src)

        .pipe(
            sass({
                outputStyle: 'expanded'
            }).on('error', sass.logError)
        )

        .pipe(
            postcss([
                autoprefixer()
            ])
        )

        .pipe(cleanCSS())

        .pipe(rename({
            suffix: '.min'
        }))

        .pipe(gulp.dest(paths.scss.dest))
        .pipe(browserSync.stream());

}

// ======================
// JavaScript
// ======================

export function scripts() {

    return gulp
        .src(paths.js.src)

        .pipe(terser())

        .pipe(rename({
            suffix: '.min'
        }))

        .pipe(gulp.dest(paths.js.dest))
        .pipe(browserSync.stream());

}

// ======================
// Imagens
// ======================

export function images() {

    return gulp
        .src(paths.img.src)
        .pipe(gulp.dest(paths.img.dest));

}

// ======================
// BrowserSync
// ======================

export function serve() {

    browserSync.init({

        server: {
            baseDir: './',
            serveStaticOptions: {
                extensions: ['html']
            }
        },

        notify: false,
        open: true

    });

    gulp.watch(paths.scss.watch, styles);
    gulp.watch(paths.js.watch, scripts);
    gulp.watch(paths.img.watch, images);
    gulp.watch('./*.html').on('change', browserSync.reload);

}

// ======================
// Build
// ======================

export const build = gulp.series(
    styles,
    scripts,
    images
);

export default gulp.series(
    build,
    serve
);