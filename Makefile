.PHONY: clean
bootstrap:
	./script/bootstrap
build:
	make clean && ./script/build
clean:
	./script/clean
cibuild-pre:
	./script/cibuild-pre
deploy:
	make build && ./script/deploy
test:
	echo "Nothing to see here." && exit 0
server:
	./script/server
