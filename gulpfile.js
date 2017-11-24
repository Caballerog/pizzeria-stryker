const gulp = require('gulp');
const minify = require('gulp-minify');
const concat = require('gulp-concat');
const purify = require('gulp-purify-css');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const useref = require('gulp-useref-plus');
const gulpif = require('gulp-if');

/* gulp.task('autoprefixer', () =>
    gulp.src('src/*.css')
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('dist/css'))
);




gulp.task('purify', function () {
    return gulp.src('src/*.css')
        .pipe(purify([]))
        .pipe(gulp.dest('dist'));
});

gulp.task('autoprefixer', () =>
    gulp.src('src/*.css')
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('dist'))
); */

gulp.task('minImages', () => gulp.src('src/assets/**/*')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/assets')));

gulp.task('useref', () => gulp.src('src/*.html')
  .pipe(useref())
  .pipe(gulp.dest('dist')));

gulp.task('watch', () => {
  gulp.watch('*.html', ['minify']);
  gulp.watch('src/*.css', ['autoprefixer']);
  gulp.watch('src/*.css', ['purify']);
  gulp.watch('assets/*', ['imagemin']);
});

/* gulp.task('minifyJS', () =>
    gulp.src('dist/scripts/*.js')
    .pipe(minify({
        ext: {
            min: '.min.js'
        }
    }))
    .on("error", function (e) {
        console.log(e);
    })
    .pipe(gulp.dest('dist/scripts'))
); */



/* gulp.task('minify',['useref'], function() {
    return gulp.src('*.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('dist'));
   }); */


gulp.task('default', [ /* 'minifyJS', 'autoprefixer', 'purify', */ 'minImages', 'useref']);