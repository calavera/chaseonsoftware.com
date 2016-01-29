.PHONY: clean
build:
	make clean && ./script/build
clean:
	./script/clean
cibuild-pre:
	./script/cibuild-pre
deploy:
	make build && ./script/deploy
server:
	./script/server
