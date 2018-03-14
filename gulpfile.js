'use strict';

const gulp = require('gulp');

// Clean

gulp.task('clean', () => {
    let del = require('del');
    return del(['lib/*.js']);
});

// Build

gulp.task('compile', () => {
    let sourcemaps = require('gulp-sourcemaps');
    let changed    = require('gulp-changed');
    let babel      = require('gulp-babel');
    return gulp.src('lib/*.es6')
        .pipe(changed('lib', { extension: '.js' }))
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: [
                [
                    'env',
                    {
                        targets: {
                            browsers: 'last 2 version',
                            node: 4
                        },
                        loose: true
                    }
                ]
            ],
            plugins: ['add-module-exports']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('lib'));
});


