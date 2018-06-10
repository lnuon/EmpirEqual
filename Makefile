
today := $(shell date "+%m%d%y")
sha1 := $(shell git rev-parse --short=5 HEAD)

WEBSITE_SSH_HOST := ubuntu@empirequal.co
WEBSITE_SSH_KEY_PATH := ~/Keys/EmpirEqual.pem

packagename := empirequal

tmp := $(shell mktemp -d)

.PHONY: build
build:
	@cd ./src && make build

.PHONY: run
run:
	@cd ./src && make dev

.PHONY: test
test: 
	@cd ./src && make test

.PHONY: archive
archive:
	@rm -rf ./packages && mkdir -p ./packages
	@git archive --format 'tgz' --output ./packages/$(packagename).tgz HEAD

.PHONY: docker
docker:
	@docker build -t "tsw/www:$(packagename)" .

.PHONY: package
package: test archive
	@echo package created...


.PHONY: copy-to-server
copy-to-server:
	scp -i $(WEBSITE_SSH_KEY_PATH) ./packages/$(packagename).tgz $(WEBSITE_SSH_HOST):~/
	ssh -i $(WEBSITE_SSH_KEY_PATH) $(WEBSITE_SSH_HOST) \
		'sudo -- sh -c "cp /home/ubuntu/$(packagename).tgz /root && whoami && ls -lrta /root \
			&& mkdir -p /root/$(packagename) && tar -xvzf /root/$(packagename).tgz -C /root/$(packagename) \
			&& mkdir -p /root/.config/systemd/user \
			&& cp /root/$(packagename)/empirequal.svc /etc/systemd/system/empirequal.service"'
	@echo artifact uploaded...

.PHONY: publish
publish: package copy-to-server
	ssh -i $(WEBSITE_SSH_KEY_PATH) $(WEBSITE_SSH_HOST) "sudo systemctl restart empirequal"
	@echo web service started...
 
