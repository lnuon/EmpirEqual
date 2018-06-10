
today := $(shell date "+%m%d%y")
sha1 := $(shell git rev-parse --short=5 HEAD)

WEBSITE_SSH_HOST := ubuntu@35.172.128.65
WEBSITE_SSH_KEY_PATH := ~/Keys/EmpirEqual.pem

packagename := empirequal

tmp := $(shell mktemp -d)

run:
	@cd ./src && make dev

test: 
	@cd ./src && make test

archive:
	@rm -rf ./packages && mkdir -p ./packages
	@git archive --format 'tgz' --output ./packages/$(packagename).tgz HEAD

docker:
	@docker build -t "tsw/www:$(packagename)" .

package: test archive
	@echo package created...

install-service:
	@test -e /home/root/.config/systemd/user/empirequal.service \
		|| cp ./empirequal.service /home/root/.config/systemd/user/empirequal.service
	@echo service installed...

copy-to-server:
	scp -i $(WEBSITE_SSH_KEY_PATH) ./packages/$(packagename).tgz $(WEBSITE_SSH_HOST):~/
	ssh -i $(WEBSITE_SSH_KEY_PATH) $(WEBSITE_SSH_HOST) \
		"mkdir $(packagename) && tar -xvzf $(packagename).tgz -C $(packagename)
	@echo artifact uploaded...

publish: copy-to-server install-service
	ssh -i $(WEBSITE_SSH_KEY_PATH) $(WEBSITE_SSH_HOST) "systemctl restart empirequal"
	@echo web service started...
 
