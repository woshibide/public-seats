.PHONY: build deploy

build:
	node build.js

deploy:
	node build.js
	git add .
	git commit -a -m 'yeah'
	git push