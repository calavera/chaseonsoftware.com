watchHugo:
	hugo server --watch --buildDrafts=true
watchWP:
	webpack --watch
publish:
	hugo && webpack --optimize-minimze && gulp publish
