var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });
});

gulp.task('watch', function () {
	gulp.watch([
		'app/*.html', 
		'app/js/**/*.js', 
		'app/css/**/*.css'
        ]).on('change', browserSync.reload); 
});

gulp.task('default', ['browser-sync', 'watch']);