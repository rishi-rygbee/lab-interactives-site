#!/bin/sh
#
# script/populate-standalone.sh [environment]
#

if [ -z "$1" ]; then
  lab_env="default"
else
  lab_env=$1
fi

mkdir -p public/standalone/lab-interactive

lab_url=`script/lab-root-url.rb $lab_env`
echo "- download the $lab_env archive at $lab_url.tar.gz and uncompress to public/standalone/lab-interactive"

curl -O $lab_url.tar.gz
tar xzf lab.tar.gz -C public/standalone/lab-interactive
rm lab.tar.gz

echo "- copy necessary files from public to public/standalone/"

for file_to_copy in embeddable.js embeddable.css; do
	cp public/$file_to_copy public/standalone/lab-interactive
done

echo "- copy necessary vendor folders from public to public/standalone/lab-interactive"

mkdir -p public/standalone/lab-interactive/vendor
VENDOR_FOLDERS="modernizr shutterbug"
for vendor_folder_to_copy in $VENDOR_FOLDERS; do
	cp -r public/vendor/$vendor_folder_to_copy public/standalone/lab-interactive/vendor/
done

tar -zcf public/standalone/lab-interactive.tar.gz --directory=public/standalone/ lab-interactive

