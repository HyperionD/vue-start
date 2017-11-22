import gulp from "gulp";
import childProcess from "child_process";
import uglify from "gulp-uglifyes";
import rename from "gulp-rename";
import pump from "pump";
import config from "./config.js";

gulp.task("pack", function (cb) {
    childProcess.exec("webpack", function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task("uglify", function (cb) {
    pump([
            gulp.src(config.dist_js),
            uglify(),
            rename({extname: ".min.js"}),
            gulp.dest(config.dist_dir)
        ],
        cb
    );
});

gulp.task("watch", function () {
    gulp.watch("app/src/**/*.vue", ["pack"]);
});
