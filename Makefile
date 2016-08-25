PUBLIC=public/*
THEME=themes/minimalist

deploy: install all
all: build-assets build-contents
build-assets:
	cd $(THEME) && npm run build
build-contents:
	hugo 
install:
	cd $(THEME) && npm install
clean:
	rm -rf $(PUBLIC)
	cd $(THEME) && rm -rf static/* 
test:
	echo "Nothing to see here." && exit 0
server:
	cd $(THEME) && npm run build && cd ../../
	hugo server --verbose --renderToDisk=true --buildDrafts=true

.PHONY: clean
