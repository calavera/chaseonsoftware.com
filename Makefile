watch:
	make watch-hugo & make watch-webpack
watch-hugo:
	hugo server --watch --buildDrafts=true
watch-webpack:
	./node_modules/.bin/webpack --watch --config webpack.config.dev.js
install-hugo:
	bash ./scripts/ci-install-hugo.sh
publish:
	make install-hugo && make webpack && hugo && ./node_modules/.bin/surge --project public --domain chaseadams.io
webpack:
	./node_modules/.bin/webpack --optimize-minimize && make manifest
manifest:
	./node_modules/.bin/babel-node scripts/manifest.js
