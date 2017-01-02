.PHONY: clean

PUBLIC=public/*
THEME=themes/minimalist
PORT=1337
DOCKER_IMAGE=chaseadamsio/chaseadamsio

deploy: install build

build: build-assets build-contents

build-assets:
	cd $(THEME) && npm run build

build-contents:
	HUGO_BASEURL="https://chaseadams.io" hugo 

install:
	cd $(THEME) && npm install

clean:
	rm -rf $(PUBLIC)
	cd $(THEME) && rm -rf static/* 

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
	cd $(THEME) && npm run build && cd ../../
	hugo server --verbose --renderToDisk=true --buildDrafts=true

