const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("default", ["sass"]);

gulp.task("sass", () => {
  return gulp.src("./src/sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./static/css"))
});

gulp.task("watch", () => {
  gulp.watch("./src/sass/**/*.scss", ["sass"])
});
