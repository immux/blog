REMOTE="deploy@immux.com"
rsync -azP public/* ${REMOTE}:/var/www/blog