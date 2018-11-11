BASEDIR=$(CURDIR)
INPUTDIR=$(BASEDIR)/src
OUTPUTDIR=$(BASEDIR)/output
REFDIR=$(BASEDIR)/ref
PRJ_NAME=motion_planning
CSL=ieee-with-url
STORAGE_DIR=../../../../blog/notes/$(PRJ_NAME)

all: $(PRJ_NAME).html $(PRJ_NAME).pdf $(PRJ_NAME).docx copy
	git add --all

build:	
	make html pdf docx  
	  

$(PRJ_NAME).html:
	pandoc -s "$(INPUTDIR)/$(PRJ_NAME).md"  \
	--to=html5 \
	--filter /home/ajay/.local/bin/pandoc-crossref \
	--mathjax \
	--bibliography "$(REFDIR)/$(PRJ_NAME).bib" \
	--csl "$(REFDIR)/$(CSL).csl"  \
	--metadata link-citations  \
	-o "$(OUTPUTDIR)/$(PRJ_NAME).html"
	
$(PRJ_NAME).pdf:
	pandoc -s "$(INPUTDIR)/$(PRJ_NAME).md"  \
	--filter /home/ajay/.local/bin/pandoc-crossref \
	--mathjax \
	--bibliography "$(REFDIR)/$(PRJ_NAME).bib" \
	--csl "$(REFDIR)/$(CSL).csl"  \
	--metadata link-citations  \
	-o "$(OUTPUTDIR)/$(PRJ_NAME).pdf"

$(PRJ_NAME).docx:
	pandoc -s "$(INPUTDIR)/$(PRJ_NAME).md"  \
	--filter /home/ajay/.local/bin/pandoc-crossref  \
	--mathjax  \
	--bibliography  \
	"$(REFDIR)/$(PRJ_NAME).bib"  \
	--csl "$(REFDIR)/$(CSL).csl"  \
	--metadata link-citations  \
	-o "$(OUTPUTDIR)/$(PRJ_NAME).docx"
	
clean: gitrm
	mkdir output

gitrm: remove
	git rm $(OUTPUTDIR)/$(PRJ_NAME).html $(OUTPUTDIR)/$(PRJ_NAME).pdf $(OUTPUTDIR)/$(PRJ_NAME).docx

remove: 
	rm $(OUTPUTDIR)/$(PRJ_NAME).html $(OUTPUTDIR)/$(PRJ_NAME).pdf $(OUTPUTDIR)/$(PRJ_NAME).docx

copy: 
	cp $(OUTPUTDIR)/$(PRJ_NAME).pdf ../../../../blog/notes/$(PRJ_NAME)
	 
