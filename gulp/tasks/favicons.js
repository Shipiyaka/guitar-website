export const favicons = () => {
  return app.gulp
    .src(app.path.src.favicons)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "FAVICONS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.favicons));
  // .pipe(app.plugins.browsersync.stream());
};
