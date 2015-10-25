watchHugo:
	hugo server --watch --buildDrafts=true
watchWP:
	webpack --watch
publish: webpack
	hugo && surge public
webpack:
	./node_modules/.bin/webpack --optimize-minimize && ./node_modules/.bin/babel-node scripts/manifest.js
