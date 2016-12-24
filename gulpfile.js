
var gulp = require('gulp');
var sp = require('gulp-spsync')
var webpack = require("webpack");

var spSyncSttings = {
    "client_id": "98f52d0a-b073-4465-afe6-d103f4a2e42e",
    "client_secret": "bSQGkH25XU0N33it3K/IcBkXVA02nc5M5W9nHJ7FAis=",
    "realm": "",
    "site": "https://arceau.sharepoint.com/sites/DevTeamSite",
    "verbose": "true"
}

var settings = {
    siteCollection: "/sites/DevTeamSite/",
    librariesSrc: [
        "node_modules/react/dist/react.js",
        "node_modules/react-dom/dist/react-dom.js"
    ],
    cssSrc: [
        "node_modules/office-ui-fabric/dist/css/fabric.components.min.css",
        "node_modules/office-ui-fabric-react/dist/css/fabric.min.css"
    ],
    librariesDest: "SiteAssets/dev/libraries",
    scriptsDest: "SiteAssets/dev/scripts",
    cssDest: "SiteAssets/dev/css",
    viewsDest: "SiteAssets/dev/views"
}; 

gulp.task("webpack", function(callback) {
    webpack(require('./webpack.config.js'), function(){
        callback();
    });
});

gulp.task('copy-libraries', function () {
    return gulp.src(settings.librariesSrc).
        pipe(gulp.dest('./build/' + settings.librariesDest))
})

gulp.task('copy-css', function () {
    return gulp.src(settings.cssSrc).
        pipe(gulp.dest('./build/' + settings.cssDest))
})

gulp.task('copy-view', function (){
    return gulp.src('src/Views/index.html')
        .pipe(gulp.dest("./build/" + settings.viewsDest))
});


gulp.task('default', ['webpack', 'copy-libraries', 'copy-css', 'copy-view'] ,function () {
    return gulp.src('./build/**/*.*').
       pipe(sp(spSyncSttings)).
       pipe(gulp.dest('dist'))
})

