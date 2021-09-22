.PHONY   : all clean html serve test

SOURCE   = resume.json
HTML     = html/index.html

all: html

theme/node_modules:
	npm install --prefix theme

html: $(SOURCE) theme/node_modules
	resume export --theme ./theme $(HTML)

serve: $(HTML)
	cd html; ../serve.py

test: $(SOURCE)
	resume validate --theme ./theme $@

clean:
	@ rm -rf theme/node_modules theme/package-lock.json
	@ rm -f $(HTML)
