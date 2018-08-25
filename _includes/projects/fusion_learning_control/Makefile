BASEDIR=$(CURDIR)
INPUTDIR=$(BASEDIR)/src
OUTPUTDIR=$(BASEDIR)/output
REFDIR=$(BASEDIR)/ref
PRJ_NAME=fusion_learning_control
CSL=ieee-with-url
html:
	pandoc -s "$(INPUTDIR)/$(PRJ_NAME).md"  \
	--to=html5 \
	--filter /home/ajay/.local/bin/pandoc-crossref \
	--mathjax \
	--bibliography "$(REFDIR)/$(PRJ_NAME).bib" \
	--csl "$(REFDIR)/$(CSL).csl"  \
	--metadata link-citations  \
	-o "$(OUTPUTDIR)/$(PRJ_NAME).html"
	
pdf:
	pandoc -s "$(INPUTDIR)/$(PRJ_NAME).md"  \
	--filter /home/ajay/.local/bin/pandoc-crossref \
	--mathjax \
	--bibliography "$(REFDIR)/$(PRJ_NAME).bib" \
	--csl "$(REFDIR)/$(CSL).csl"  \
	--metadata link-citations  \
	-o "$(OUTPUTDIR)/$(PRJ_NAME).pdf"

docx:
	pandoc -s "$(INPUTDIR)/$(PRJ_NAME).md"  \
	--filter /home/ajay/.local/bin/pandoc-crossref  \
	--mathjax  \
	--bibliography  \
	"$(REFDIR)/$(PRJ_NAME).bib"  \
	--csl "$(REFDIR)/$(CSL).csl"  \
	--metadata link-citations  \
	-o "$(OUTPUTDIR)/$(PRJ_NAME).docx"
