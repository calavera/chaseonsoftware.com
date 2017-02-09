.PHONY: clean

PUBLIC=public/*
PORT=1337
DOCKER_IMAGE=chaseadamsio/chaseadamsio

deploy: install build

build: build-assets build-contents

build-assets:
	cd themes/bugablu && npm run build

build-contents:
	./script/build

install:
	git submodule init && git submodule update
	cd themes/bugablu && npm install -g gulp && npm install

clean:
	rm -rf $(PUBLIC)

server: clean 
	cd themes/bugablu && npm run build 
	hugo server --verbose --renderToDisk=true --buildDrafts=true

generate-hugo-linux-386:
	env GOOS=linux GOARCH=386 go build -o bin/hugo_linux_386 github.com/spf13/hugo
