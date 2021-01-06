const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile scss into css
function style() {
    // 1. find scss file
    return gulp.src('bootstrap-sass/styles/scss/**/*.scss')
    // 2. compile scss file
    .pipe(sass().on('error', sass.logError))
    // 3. create css file
    .pipe(gulp.dest('bootstrap-sass/styles/css'))
    // 4. stream changes to all browsers (browser sync)
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: 'bootstrap-sass/'
        }
    });
    
    // updating page when changes are made to html, css and js 
    gulp.watch('bootstrap-sass/styles/scss/**/*.scss', style);
    gulp.watch('bootstrap-sass/*.html').on('change', browserSync.reload);
    gulp.watch('bootstrap-sass/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;