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

test:
	echo "Nothing to see here." && exit 0

docker-build:
		docker build --rm --force-rm -t $(DOCKER_IMAGE) .

docker-serve: build
	docker run --rm -it \
		-v $(CURDIR)/:/usr/src/chaseadamsio \
		--workdir /usr/src/chaseadamsio \
		-p $(PORT):$(PORT)\
		--name chaseadamsio \
		$(DOCKER_IMAGE) hugo server -w --port=$(PORT) --bind=0.0.0.0

server:
	npm run build 
	hugo server --verbose --renderToDisk=true --buildDrafts=true

