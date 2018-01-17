.PHONY: clean

PUBLIC=public/*
PORT=1337
DOCKER_IMAGE=chaseadamsio/chaseadamsio

deploy: install build

build: build-contents

build-contents:
	./script/build

install:	
	cd $(THEME) && npm install

clean:
	rm -rf $(PUBLIC)

server: clean 
	hugo server --verbose --renderToDisk=true --buildDrafts=true

preview: clean 
	hugo server --verbose --renderToDisk=true

generate-hugo-linux-386:
	env GOOS=linux GOARCH=386 go build -o bin/hugo_linux_386 github.com/spf13/hugo
