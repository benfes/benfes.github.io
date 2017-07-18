var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('images', function(){
  return gulp.src('src/img/*.jpg')
  .pipe(imagemin({progressive: true}))
  .pipe(gulp.dest('assets/img'));
});
