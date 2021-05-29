var gulp = require('gulp');
var ts = require('gulp-typescript')
var tsProject = ts.createProject("tsconfig.json");

var uglify = require('gulp-uglify');
var del = require('del');

const paths = {
  html:{
    src: 'src/*.html',
    dest: 'dist/'
  },
  fonts:{
    src: 'src/fonts/**',
    dest: 'dist/fonts'
  },
  styles: {
    src: 'src/*.css',
    dest: 'dist/'
  },
  sounds:{
    src: 'src/sounds/**',
    dest: 'dist/sounds/'
  },
  images:{
    src: 'src/images/**',
    dest: 'dist/images/'
  }
};

const clean = () => del([ 'dist' ]);

function html() {
  return gulp.src(paths.html.src)
    .pipe(gulp.dest(paths.html.dest));
}



function styles() {
  return gulp.src(paths.styles.src)
    .pipe(gulp.dest(paths.styles.dest));
}

function fonts() {
  return gulp.src(paths.fonts.src)
    .pipe(gulp.dest(paths.fonts.dest));
}

function sounds() {
  return gulp.src(paths.sounds.src)
    .pipe(gulp.dest(paths.sounds.dest));
}


function images() {
  return gulp.src(paths.images.src)
    .pipe(gulp.dest(paths.images.dest));
}

function scripts() {
  return tsProject.src()
  .pipe(tsProject()).js.pipe(uglify()).pipe(gulp.dest("dist"))
}

const build = gulp.series(clean,gulp.parallel(styles,html,fonts,sounds,images),scripts);


exports.clean = clean;
exports.scripts = scripts;
exports.styles = styles;

exports.default = build;