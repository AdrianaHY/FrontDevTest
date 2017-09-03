var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require("gulp-connect");
var browserSync = require('browser-sync').create();

var rutas= {
  html:'./src/*.html',
  scss:'./src/assets/scss/*.scss',
  js: './src/assets/js/*.js'
}

//las siguientes líneas crean cada tarea de gulp
//esta tarea procesa los archivos css
gulp.task('CSS', function(){
  gulp.src(rutas.scss)
  .pipe(sass({
    outputStyle:'compressed'
  }))
  .on('error', sass.logError)
  .pipe(gulp.dest('./public/assets/js'))
});

//esta tarea procesa los archivos js
gulp.task('JS', function(){
  gulp.src(rutas.js)
  .pipe(gulp.dest('./public/assets/js'))
});

//esta tarea procesa los archivos html
gulp.task('HTML', function(){
  gulp.src(rutas.html)
  .pipe(gulp.dest('./public'))
})

//LAS SIGUIENTES LÍNEAS CREAN TAREAS QUE OBSERVAN LOS CAMBIOS EFECTUADOS AL MOMENTO EN CADA UNO
//DE LOS ARCHIVOS

gulp.task('html-watch', ['HTML'], function(done){
  browserSync.reload();
  done();
});

gulp.task('js-watch', ['JS'], function(done){
  browserSync.reload();
  done();
});

gulp.task('css-watch', ['CSS'], function(done){
  browserSync.reload();
  done();
});

//Para levantar el servidor
gulp.task('serve', function(){
  browserSync.init({
    server:{
      baseDir: './public'
    }
  });
  //para revisar los cambios y actualizar
  gulp.watch(rutas.html, ['HTML', 'html-watch']);
  gulp.watch(rutas.scss, ['CSS', 'css-watch']);
  gulp.watch(rutas.js, ['Js', 'js-watch']);
})
