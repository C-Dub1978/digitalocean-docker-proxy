FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf

COPY cswilson.site /etc/nginx/sites-available/

