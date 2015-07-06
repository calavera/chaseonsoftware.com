var gulp = require('gulp');
var awspublish = require('gulp-awspublish');
var minifyHTML = require('gulp-minify-html');

gulp.task('publish', ['minify-html'], function() {
  var publisher = awspublish.create({
    params: {
      Bucket: 'chaseadams.io'
    }
  });

  var headers = {
    'Cache-Control': 'max-age=315360000, no-transform, public'
  };

  return gulp.src('./public/**/*')
    .pipe(publisher.publish(headers))
    .pipe(publisher.cache())
    .pipe(awspublish.reporter());
});

gulp.task('minify-html', function() {
  var opts = {
    conditionals: true,
    spare:true
  };

  return gulp.src('./public/**/*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./public/'));
});
