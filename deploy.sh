REMOTE_COM="deploy@immux.com"
rsync -azP public/* ${REMOTE_COM}:/var/www/blog

REMOTE_CN="deploy@8.129.173.199"
rsync -azP public/* ${REMOTE_CN}:/var/www/blog