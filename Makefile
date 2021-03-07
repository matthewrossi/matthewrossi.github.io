.PHONY   : all clean html serve test

SOURCE   = resume.json
HTML     = index.html

all: html

theme/node_modules:
	npm install --prefix theme

html: $(SOURCE) theme/node_modules
	resume export --theme ./theme $(HTML)

serve: $(HTML)
	python serve.py

test: $(SOURCE)
	resume test --theme ./theme $@

clean:
	@ rm -rf theme/node_modules theme/package-lock.json
	@ rm -f $(HTML)
