var gulp = require("gulp");
var ts = require("gulp-typescript");
const sass = require('gulp-sass')(require('sass'));
var tsProject = ts.createProject("tsconfig.json");

var browserify = require("browserify");
var source = require("vinyl-source-stream");
var tsify = require("tsify");


/**
 * Transpile typescript to javascript
 * @param cb: gulp task callback
 */
 function buildTypescript(cb) {
  const result = browserify({
    basedir: ".",
    debug: true,
    entries: ["src/ts/main.ts"],
    cache: {},
    packageCache: {},
  })
    .plugin(tsify)
    .bundle()
    .pipe(source("index.js"))
    .pipe(gulp.dest("dist/js"));
  cb();
  return result;
}

/**
 * Transpile scss to css
 * @param  cb gulp callback
 */
 function buildScss(cb) {
  const result = gulp
    .src('./src/scss/**/*.scss')
    .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
  cb();
  return result;
}


gulp.task('default', gulp.series( buildTypescript, buildScss),
);

gulp.task('watch', function(){
  gulp.watch('src/ts/**/*.ts',buildTypescript);
  gulp.watch('src/scss/**/*.scss',buildScss);
});