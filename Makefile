.PHONY: unit_test integration_test

IMAGE_TAG := $(IMAGE_TAG)
ifndef IMAGE_TAG	
	IMAGE_TAG = DEFAULT
endif
DOCKER_NAME := $(DOCKER_NAME)
ifndef DOCKER_NAME	
	DOCKER_NAME = DEFAULT
endif

all:
	@echo "Please specify make target"

build_prod:
	docker build . -t $(DOCKER_NAME)/better-parking-calculator:$(IMAGE_TAG)

run_prod:
	docker run -p 8000:80 $(DOCKER_NAME)/better-parking-calculator:$(IMAKE_TAG)

run_dev:
	npm start

push_image: build_prod
	@echo "Pushing to dockerhub with image tag "$(IMAGE_TAG)" and user name " $(DOCKER_NAME) " .Set IMAGE_TAG and DOCKER_NAME env variable to change"
	docker push $(DOCKER_NAME)/better-parking-calculator:$(IMAGE_TAG)

integration_test:
	@echo "No integration tests yet."

unit_test:
	npm test

test: 
	unit_test
	integration_test