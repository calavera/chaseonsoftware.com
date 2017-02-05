.PHONY: clean

PUBLIC=public/*
PORT=1337
DOCKER_IMAGE=chaseadamsio/chaseadamsio

deploy: install build

build: build-assets build-contents

build-assets:
	npm run build

build-contents:
	./script/build

install:
	npm install

clean:
	rm -rf $(PUBLIC)
	rm -rf static/* 

server:
	npm run build 
	hugo server --verbose --renderToDisk=true --buildDrafts=true


generate-hugo-linux-386:
	env GOOS=linux GOARCH=386 go build -o bin/hugo_linux_386 github.com/spf13/hugo
