.PHONY: build deploy

build:
	node build.js

deploy:
	git add .
	git commit -a -m 'yeah'
	git push