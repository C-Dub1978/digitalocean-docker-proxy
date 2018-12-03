# digitalocean-docker-proxy
multi-container nginx reverse-proxy

Basic setup for a digitalocean droplet.

This is a multi-container setup for path based routing to different applications. For now, it is used to host several static websites and front-end Angular apps, and will eventually serve MEAN stack applications with their corresponding backend/db containers.

An nginx-reverse proxy sits up front on port 80, and routes to different back ends based on paths
