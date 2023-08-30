const {src, dest, watch, series, parallel} = require('gulp');
const ejs = require('gulp-ejs');
const fs = require('fs');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const cleanCss = require('gulp-clean-css');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const mozjpeg = require('imagemin-mozjpeg');
const svgSprite = require('gulp-svg-sprite');
//const webserver = require('gulp-webserver');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const changed = require('gulp-changed');
const rename = require('gulp-rename');

const srcPath = './src/';
const publicPath = './public/';

const webpackConfig = require('./webpack.config');

const ejsTask = (done) => {
	const json = JSON.parse(fs.readFileSync(srcPath + 'ejs/data.json', 'utf8'));
	src([
			srcPath + 'ejs/**/*.ejs',
			'!' + srcPath + 'ejs/**/_*.ejs'
		])
		.pipe(plumber({
			errorHandler: notify.onError({
				title: 'ejsのコンパイル失敗',
				message: '<%= error.message %>'
			})
		}))
		.pipe(ejs({json}))
		.pipe(rename({extname: '.html'}))
		.pipe(dest(publicPath));
	done();
}

const sassTask = (done) => {
	src(srcPath + 'assets/sass/**/*.scss')
		.pipe(plumber({
			errorHandler: notify.onError({
				title: 'sassのコンパイル失敗',
				message: '<%= error.message %>'
			})
		}))
		.pipe(sass({outputStyle: 'expanded'}))
		.pipe(autoprefixer({grid: true}))
		.pipe(gcmq())
		.pipe(cleanCss())
		.pipe(dest(publicPath + 'assets/css'));
	done();
}

const webpackTask = (done) => {
	webpackStream(webpackConfig, webpack)
		.pipe(dest(publicPath + 'assets/js'));
	done();
}

const jsLibTask = (done) => {
	src(srcPath + 'assets/js/lib/**/*.js')
		.pipe(plumber({
			errorHandler: notify.onError({
				title: 'JSの複製の失敗',
				message: '<%= error.message %>'
			})
		}))
		.pipe(changed(publicPath + 'assets/js/lib'))
		.pipe(dest(publicPath + 'assets/js/lib'));
	done();
}

const imageTask = (done) => {
	src([
			srcPath + 'assets/img/**/*.{png,jpg,gif,svg,ico}',
			'!' + srcPath + 'assets/img/common/symbols/**/*.svg'
		])
		.pipe(plumber({
			errorHandler: notify.onError({
				title: '画像圧縮の失敗',
				message: '<%= error.message %>'
			})
		}))
		.pipe(changed(publicPath + 'assets/img'))
		.pipe(imagemin([
			pngquant({
				quality: [.65, .80],
				speed: 1,
				floyd:0
			}),
			mozjpeg({
				quality:85,
				progressive: true
			}),
			imagemin.svgo({
				plugins: [
					{removeViewBox: false},
					{removeMetadata: false},
					{removeUnknownsAndDefaults: true},
					{convertShapeToPath: false},
					{collapseGroups: false},
					{cleanupIDs: true}
				]
			}),
			imagemin.optipng(),
			imagemin.gifsicle()
		]))
		.pipe(dest(publicPath + 'assets/img'));
	done();
}

const svgSpriteTask = (done) => {
	src(srcPath + 'assets/img/common/symbols/**/*.svg')
		.pipe(plumber({
			errorHandler: notify.onError({
				title: 'svgスプライト生成の失敗',
				message: '<%= error.message %>'
			})
		}))	
		.pipe(svgSprite({
			mode: {
				symbol: {
					'dest': '.',
					'sprite': 'symbols.svg'
				}
			},
			shape: {
				transform: [
					{
						svgo: {
							plugins: [
								{'removeTitle': true},
								{'removeStyleElement': true},
								{'removeAttrs': {'attrs': 'fill'}}
							]
						}
					}
				]
			},
			svg: {
				xmlDeclaration: true,
				doctypeDeclaration: true
			}
		}))
		.pipe(dest(publicPath + 'assets/img/common'));
	done();
}

const pdfTask = (done) => {
	src(srcPath + 'assets/pdf/**/*.pdf')
		.pipe(plumber({
			errorHandler: notify.onError({
				title: 'ドキュメントの複製の失敗',
				message: '<%= error.message %>'
			})
		}))
		.pipe(changed(publicPath + 'assets/pdf'))
		.pipe(dest(publicPath + 'assets/pdf'));
	done();
}

const videoTask = (done) => {
	src(srcPath + 'assets/video/**/*.mp4')
		.pipe(plumber({
			errorHandler: notify.onError({
				title: '動画の複製の失敗',
				message: '<%= error.message %>'
			})
		}))
		.pipe(changed(publicPath + 'assets/video'))
		.pipe(dest(publicPath + 'assets/video'));
	done();
}

const fontTask = (done) => {
	src(srcPath + 'assets/font/**/*.{eot,svg,ttf,woff}')
		.pipe(plumber({
			errorHandler: notify.onError({
				title: 'フォントの複製の失敗',
				message: '<%= error.message %>'
			})
		}))
		.pipe(changed(publicPath + 'assets/font'))
		.pipe(dest(publicPath + 'assets/font'));
	done();
}

const watchTask = (done) => {
	watch([srcPath + 'ejs/**/*.ejs', srcPath + 'ejs/data.json'], ejsTask);
	watch([srcPath + 'assets/sass/**/*.scss'], sassTask);
	watch([srcPath + 'assets/js/**/*.js'], series(webpackTask, jsLibTask));
	watch([srcPath + 'assets/img/**/*.{png,jpg,gif,svg,ico}'], series(imageTask, svgSpriteTask));
	watch([srcPath + 'assets/pdf/**/*.pdf'], pdfTask);
	watch([srcPath + 'assets/video/**/*.mp4'], videoTask);
	watch([srcPath + 'assets/font/**/*.{eot,svg,ttf,woff}'], fontTask);
	done();
}

/*const webserverTask = (done) => {
	src(publicPath)
		.pipe(webserver({livereload: true}));
	done();
}*/

exports.default = series(ejsTask, sassTask, webpackTask, jsLibTask, imageTask, svgSpriteTask, pdfTask, videoTask, fontTask, watchTask,/* webserverTask*/);