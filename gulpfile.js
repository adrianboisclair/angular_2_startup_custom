var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    jshint = require('gulp-jshint'),
    webserver = require('gulp-webserver'),
    typescript = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    cleancss = require('gulp-clean-css'),
    tscConfig = require('./tsconfig.json');

/**
 * Source Directories
 *
 **/
var appSrc = 'builds/development/',
    srvSrc = 'server.js',
    sassSrc = 'process/sass/',
    tsSrc = 'process/typescript/';

var fN = ['process/sass/_scaffold.scss'];

gulp.task('backend', function(){
    nodemon({   script: srvSrc })
        .on('restart', function(){
            console.log('Sever reloaded!');
        });
});

gulp.task('lint', function(){
    gulp.src(srvSrc)
        .pipe(jshint())
});

gulp.task('html', function() {
  gulp.src(appSrc + '**/*.html');
});

gulp.task('sass', function(){
  return gulp.src(sassSrc + '**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(autoprefixer())
      .pipe(concat('style.css'))
      .pipe(cleancss({compatibility: 'ie8'}))
      .pipe(sourcemaps.write('/maps'))
      .pipe(gulp.dest(appSrc + '/css'))
});

gulp.task('css', function() {
  gulp.src(appSrc + '**/*.css');
});


/**
 * Add all files
 */

gulp.task('copylibs', function() {
  return gulp
    .src([
      'node_modules/angular2/bundles/http.js',
      'node_modules/es6-shim/es6-shim.min.js',
      'node_modules/systemjs/dist/system-polyfills.js',
      'node_modules/angular2/bundles/angular2-polyfills.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/rxjs/bundles/Rx.js',
      'node_modules/angular2/bundles/angular2.dev.js'
    ])
    .pipe(gulp.dest(appSrc + 'js/lib/angular2'));
});

gulp.task('typescript', function () {
  return gulp
    .src(tsSrc + '**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(appSrc + 'js/'));
});

gulp.task('watch', function() {
  gulp.watch(tsSrc + '**/*.ts', ['typescript']);
  gulp.watch(sassSrc + '**/*.scss', ['sass']);
  gulp.watch(appSrc + 'css/*.css', ['css']);
  gulp.watch(appSrc + '**/*.html', ['html']);
  gulp.watch(srvSrc, ['backend']);
});

gulp.task('webserver', function() {
  gulp.src(appSrc)
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});


gulp.task('default', ['copylibs', 'typescript', 'watch', 'webserver']);
