watch:
	make watch-hugo & make watch-webpack
watch-hugo:
	hugo server --watch --buildDrafts=true
watch-webpack:
	./node_modules/.bin/webpack --watch --config webpack.config.dev.js
publish:
	make webpack && hugo && ./node_modules/.bin/surge --project public --domain chaseadams.io
webpack:
	./node_modules/.bin/webpack --optimize-minimize && make manifest
manifest:
	./node_modules/.bin/babel-node scripts/manifest.js
