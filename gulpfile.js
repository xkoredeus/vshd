// The require statement tells Node to look into the node_modules folder for a package
// Once the package is found, we assign its contents to the variable
// gulp.src tells the Gulp task what files to use for the task
// gulp.dest tells Gulp where to output the files once the task is completed.
var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    del = require('del'),
    panini = require('panini'),
    sourcemaps = require('gulp-sourcemaps'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    runSequence = require('run-sequence'),
    minify = require('gulp-minify'),
    cssnano = require('gulp-cssnano'),
    autoprefixer = require('gulp-autoprefixer');
concat = require('gulp-concat');


// ------------ Development Tasks -------------
// Compile Sass into CSS
gulp.task('sass', function () {
    return gulp.src(['src/assets/scss/*.scss'])
    // .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded',
        }).on('error', sass.logError))
        .pipe(autoprefixer('last 2 versions'))
        // .pipe(cssnano()) // Use cssnano to minify CSS
        // .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest("dist/assets/css"))
        .pipe(browserSync.stream());
});

// Using panini, template, page and partial files are combined to form html markup
gulp.task('compile-html', function () {
    return gulp.src('src/pages/**/*.html')
        .pipe(panini({
            root: 'src/pages/',
            layouts: 'src/layouts/',
            partials: 'src/components/',
        }))
        .pipe(gulp.dest('dist'));
});

// Reset Panini's cache of layouts and components
gulp.task('resetPages', (done) => {
    panini.refresh();
    done();
    console.log('Clearing panini cache');
});

// Watches for changes while gulp is running
gulp.task('watch', ['sass'], function () {
    // Live reload with BrowserSync
    browserSync.init({
        server: "./dist"
    });

    gulp.watch(['src/assets/js/**/*.js'], ['scripts', browserSync.reload]);
    gulp.watch(['src/assets/scss/**/*'], ['sass', browserSync.reload]);
    gulp.watch(['src/assets/img/**/*'], ['images']);
    gulp.watch(['src/**/*.html'], ['resetPages', 'compile-html', browserSync.reload]);
    console.log('Watching for changes');
});


// ------------ Optimization Tasks -------------
// Copies image files to dist
gulp.task('images', function () {
    return gulp.src('src/assets/img/**/*.+(png|jpg|jpeg|gif|svg|ico)')
        .pipe(cache(imagemin ([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 5})
        ]))) // Caching images that ran through imagemin
        .pipe(gulp.dest('dist/assets/img/'));
});

// Places font files in the dist folder
gulp.task('font', function () {
    return gulp.src('src/assets/fonts/*.+(eot|woff|woff2|ttf|otf|svg)')
        .pipe(gulp.dest("dist/assets/fonts"))
        .pipe(browserSync.stream());
});

// Concatenating js files
gulp.task('scripts', function () {
    return gulp.src([
        'src/assets/js/vendor/jquery/jquery.min.js',
        'src/assets/js/vendor/jquery/jquery.masked-input.min.js',
        'src/assets/js/vendor/fancybox/jquery.fancybox.min.js',
        'src/assets/js/vendor/swiper/swiper.min.js',
        'src/assets/js/vendor/gsap/gsap.min.js',
        'src/assets/js/vendor/gsap/PixiPlugin.min.js',
        // 'src/assets/js/vendor/gsap/ScrambleTextPlugin.min.js',
        'src/assets/js/vendor/gsap/ScrollToPlugin.min.js',
        'src/assets/js/vendor/gsap/ScrollTrigger.min.js',
        'src/assets/js/app.js'
    ])
    // .pipe(sourcemaps.init())
    //If concatenating more than one JS file
        .pipe(concat('app.js'))
        // .pipe(sourcemaps.write('./'))
        // .pipe(minify())
        .pipe(gulp.dest('dist/assets/js/'))
        .pipe(browserSync.stream());
});

gulp.task('map', function () {
    return gulp.src([
        'src/assets/js/map.js'
    ])
    // .pipe(sourcemaps.init())
    //If concatenating more than one JS file
    //     .pipe(concat('app.js'))
        // .pipe(sourcemaps.write('./'))
        // .pipe(minify())
        .pipe(gulp.dest('dist/assets/js/'))
        .pipe(browserSync.stream());
});

// Cleaning/deleting files no longer being used in dist folder
gulp.task('clean:dist', function () {
    console.log('Removing old files from dist');
    return del.sync('dist');
});


// ------------ Build Sequence -------------
// Simply run 'gulp' in terminal to run local server and watch for changes
gulp.task('default', ['clean:dist', 'font', 'scripts', 'map', 'images', 'compile-html', 'resetPages', 'watch']);

// Creates production ready assets in dist folder
gulp.task('build', function () {
    console.log('Building production ready assets');
    runSequence('clean:dist', 'sass', ['scripts', 'map', 'images', 'font', 'compile-html'])
});
