FROM nginx

RUN rm /etc/nginx/conf.d/default.conf

COPY ./conf/nginx.conf /etc/nginx/nginx.conf

COPY ./conf/cswilson.site /etc/nginx/sites-available/

EXPOSE 80

