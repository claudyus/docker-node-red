Docker-node-red
===================

A docker image to deploy instances of node-red with additional nodes.

The following env vars are used to configure the container:
  - PORT: the admin interface port, default 5000 (to support dokku seamless integration)
  - AUTH_URL: the http endpoint to authenticate the user, the AUTH_METHOD will be update 'http'
  - AUTH_METHOD: for now only default 'passwd' based auth is supported
    - if passwd method is choice the 'admin' password is generated and display in container log
  - NO_AUTH: if set disable any authentication methods
  - NODES_URL_FILE: a file url to configure additional nodes from npm

You can also add a 'extra_modules.txt' inside '/app/config' with a list of flow extra.

TODO
----
[ ] implement flows backup/restore
[ ] allow template/css personalization

Dokku
-------------

If used inside dokku you can mount the volume using the following command

::

  dokku storage:mount $APP /var/lib/dokku/data/storage/$APP:/app/.nodered/
