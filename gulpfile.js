var gulp = require('gulp');

gulp.task('default', function() {
  gulp.src('node_modules/**/*.min.js')
  .pipe(gulp.dest('public/minified'))
});