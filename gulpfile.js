let gulp = require('gulp');
let ts = require('gulp-typescript')
var tsProject = ts.createProject("tsconfig.json");

let uglify = require('gulp-uglify');
let del = require('del');

const paths = {
  statics: {
    src: 'src/*.css',
    dest: 'dist/'
  }
};

const clean = () => del([ 'dist' ]);

function statics() {
  return gulp.src(paths.statics.src)
    .pipe(gulp.dest(paths.statics.dest));
}

function scripts() {
  return tsProject.src()
  .pipe(tsProject()).js.pipe(uglify()).pipe(gulp.dest("dist"))
}

const build = gulp.series(clean, gulp.parallel(statics,scripts));


exports.default = build;