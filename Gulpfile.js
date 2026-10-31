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
        src: 'assets/css/scss/theme.scss',
        watch: 'assets/css/scss/**/*.scss',
        dest: 'assets/css'
    },

    js: {
        src: 'assets/js/modules/**/*.js',
        watch: 'assets/js/modules/**/*.js',
        dest: 'assets/js'
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
    gulp.watch('./*.html').on('change', browserSync.reload);

}

// ======================
// Build
// ======================

export const build = gulp.series(
    styles,
    scripts
);

export default gulp.series(
    build,
    serve
);