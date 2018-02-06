var gulp = require('gulp');                  // Gulp
var sass = require('gulp-sass');             // Sass
var browserSync = require('browser-sync').create(); // Browser Sync
var concat = require('gulp-concat');           // Concatenates files
var uglify = require('gulp-uglifyjs');         // For compressing js files
var cssnano = require('gulp-cssnano');          // For compressing css files
var rename = require('gulp-rename');           // For rename files
var del = require('del');                   // For delete folders or files
var imagemin = require('gulp-imagemin');         // For image files processing
var pngquant = require('imagemin-pngquant');     // For png files processing
var cache = require('gulp-cache');            // Library for caching
var autoprefixer = require('gulp-autoprefixer');     // Library for insert css suffix
var greplace = require('gulp-replace');          // Library for replace text

// Src and distribution path
var gulpSrcPath = "src/";
var libsPath = "libs/";
var distPath = "dist/";

// BrowserSync proxy config
gulp.task('browser-sync-proxy', function () {
  browserSync.init({
    proxy: "test.local"
  });
});

// BrowserSync self config
gulp.task('browser-sync-self', function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

// Build libs.min.js ( Compiling all .js libraries files )
gulp.task('js-libs', function () {
  return gulp.src([
    libsPath + 'jQuery/jquery.js',                            // jQuery
    libsPath + 'parallax.js/parallax.min.js',                            // parallax.js
    libsPath + 'slick-1.8.0/slick/slick.min.js',              // Slick Slider
    libsPath + 'font-awesome/svg-with-js/js/fontawesome-all.min.js',  // font-awesome
  ])
      .pipe(concat('libs.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest(distPath + 'js'));
});

// Build libs.min.css ( Compiling all .css libraries files )
gulp.task('css-libs', function () {
  return gulp.src([
    libsPath + 'normalize-css/normalize.css',                      // Normalize
    libsPath + 'slick-1.8.0/slick/slick.css',                      // Slick css
    libsPath + 'slick-1.8.0/slick/slick-theme.css',                // Slick-theme css
  ])
      .pipe(concat('libs.min.css'))
      .pipe(cssnano())
      .pipe(gulp.dest(distPath + 'css'))
      .pipe(browserSync.stream());
});

// Copy required library files
gulp.task('files-libs', function () {

  var sassFiles = gulp.src([
    libsPath + 'sass-mediaqueries/_media-queries.scss',
  ])
      .pipe(gulp.dest(gulpSrcPath + '/sass'))

});

// Compiling main.sass files
gulp.task('main-sass', function () {
  return gulp.src([gulpSrcPath + 'sass/main.sass'])
      .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
      .pipe(concat('common.css'))
      .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
      .pipe(gulp.dest(gulpSrcPath + 'css'));
});

// Compiling common.js
gulp.task('common-js', function () {
  return gulp.src([gulpSrcPath + 'js/main.js'])
      .pipe(concat('common.js'))
      .pipe(gulp.dest(gulpSrcPath + 'js'))
      .pipe(browserSync.stream());
});

// Optimize images
gulp.task('images', function () {
  return gulp.src(gulpSrcPath + 'img/**/*')
      .pipe(cache(imagemin({
        interlaced: true,
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
      })))
      .pipe(gulp.dest(distPath + 'img'));
});

// Clearing the cache
gulp.task('clear', function (done) {
  return cache.clearAll(done);
});

// ======================================================
// Distributions
// ======================================================

// Clear distribution dir
gulp.task('clear-dist', function () {
  return del(distPath + '**');
});

// Common css
gulp.task('common-css-dist', ['main-sass'], function () {
  gulp.src([gulpSrcPath + 'css/common.css'])
      .pipe(cssnano({zindex: false}))
      .pipe(rename('common.min.css'))
      .pipe(gulp.dest(distPath + 'css'))
      .pipe(browserSync.stream());
});

// Common js
gulp.task('common-js-dist', ['common-js'], function () {
  gulp.src([gulpSrcPath + 'js/common.js'])
      .pipe(uglify())
      .pipe(rename('common.min.js'))
      .pipe(gulp.dest(distPath + 'js'))
      .pipe(browserSync.stream());
});

// Compiling distribution files
gulp.task('dist', ['images', 'common-css-dist', 'common-js-dist'], function () {
  // Copy fonts
  gulp.src([gulpSrcPath + 'fonts/**'])
      .pipe(gulp.dest(distPath + 'fonts'));
});

// ======================================================
// Default
// ======================================================

gulp.task('default', ['js-libs', 'css-libs', 'files-libs', 'common-js-dist', 'common-css-dist', 'dist']);

// ======================================================
// Watching
// ======================================================

// ========= сменить browser-sync-self на browser-sync-proxy для php
gulp.task('watch', ['browser-sync-self', 'js-libs', 'css-libs', 'files-libs', 'common-js-dist', 'common-css-dist', 'dist'], function () {
  gulp.watch([gulpSrcPath + 'sass/**/*.sass', gulpSrcPath + 'sass/**/*.scss'], ['common-css-dist']);
  gulp.watch([gulpSrcPath + 'js/**/*.js'], ['common-js-dist']);
  gulp.watch('*.html').on('change', browserSync.reload);
  gulp.watch('*.php').on('change', browserSync.reload);
});