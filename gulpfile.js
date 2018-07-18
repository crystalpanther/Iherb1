/**
 * Created by elina on 7/17/2018.
 */
var gulp         = require('gulp'),
    browserSync  = require('browser-sync'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglifyjs'),
    cssnano      = require('gulp-cssnano'),
    rename       = require('gulp-rename'),
    del          = require('del'),
    imagemin     = require('gulp-imagemin'),
    pngquant     = require('imagemin-pngquant'),
    cache        = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('css', function(){
    return gulp.src([
        'app/libs/slick/slick.css',
        'app/less/**/*.css',
        'app/common.blocks/**/**/*.css',
        'app/library.blocks/**/**/*.css',
        'app/tablet.blocks/**/**/*.css',
        'app/mobile.blocks/**/**/*.css'
    ])
        .pipe(concat('style.css'))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('scripts', function() {
    gulp.src([
        'app/libs/jquery/jquery.min.js',
        'app/libs/slick/slick.min.js'
    ])
        .pipe(concat('libs.min.js'))
        .pipe(gulp.dest('app/js'));
    gulp.src([
        'app/common.blocks/**/*.js'
    ])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
});

gulp.task('css-libs', ['css'], function() {
    return gulp.src('app/css/**/style.css')
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/css'));
});

gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function() {
    gulp.watch([
            'app/common.blocks/**/**/*.css',
            'app/tablet.blocks/**/**/*.css',
            'app/mobile.blocks/**/**/*.css'],
        ['css']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch([
        'app/common.blocks/**/*.js',
        'app/tablet.blocks/**/*.js',
        'app/mobile.blocks/**/*.js',
        'app/js/*.js'
    ], browserSync.reload);
});

gulp.task('clean', function() {
    return del.sync('public');
});

gulp.task('img', function() {
    return gulp.src('app/img/**/*')
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('public/img'));
});

gulp.task('build', ['clean', 'img', 'css-libs', 'scripts'], function() {

    var buildCss = gulp.src([
        'app/css/style.css',
        'app/css/libs.min.css'
    ])
        .pipe(gulp.dest('public/css'))

    var buildJs = gulp.src('app/js/**/*')
        .pipe(gulp.dest('public/js'))

    var buildHtml = gulp.src('app/*.html')
        .pipe(gulp.dest('public'));

});

gulp.task('clear', function () {
    return cache.clearAll();
})

gulp.task('default', ['watch']);