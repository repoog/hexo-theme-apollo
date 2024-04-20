import gulp from 'gulp';
import gulpSass from 'gulp-sass'
import * as dartSass from 'sass'
import autoprefixer from 'gulp-autoprefixer';

const sass = gulpSass(dartSass);

// Compilation of apollo.scss in one time.
gulp.task('sass-apollo', function() {
    return gulp.src('./source/scss/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./source/css'));
});

// Compilation in real time.
gulp.task('default', gulp.series('sass-apollo', function() {
        gulp.watch('./source/scss/_partial/*.scss', gulp.series('sass-apollo'));
        gulp.watch('./source/scss/*.scss', gulp.series('sass-apollo'));
    })
);