var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var imageResize = require('gulp-image-resize');

gulp.task('images', function(){
  return gulp.src('src/img/*.jpg')
  .pipe(imageResize({
    width: 1200,
    height: 600,
    crop: true,
    upscale: false
  }))
  .pipe(imagemin({progressive: true, optimizationLevel: 5}))
  .pipe(gulp.dest('assets/img'));
});
