var gulp = require('gulp');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var useref = require('gulp-useref');
var filter = require('gulp-filter');
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');

gulp.task('default', function(){
    var jsfilter = filter('**/*.js',{restore:true});
    var cssfilter = filter('**/*.css',{restore:true});
    var indexHtmlFilter = filter(['**/*','!**/index.html'],{restore:true});

console.log('okkkkkk~');

    return gulp.src('index.html')
        .pipe(useref())
        .pipe(jsfilter)
        .pipe(uglify())
        .pipe(jsfilter.restore)
        .pipe(cssfilter)
        .pipe(csso())
        .pipe(cssfilter.restore)
        .pipe(indexHtmlFilter)
        .pipe(rev())
        .pipe(indexHtmlFilter.restore)
        .pipe(revReplace())
        .pipe(gulp.dest('dist'));
        
});