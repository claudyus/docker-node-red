Docker-node-red
===================

A docker image to deploy instances of node-red with additional nodes.

The following env vars are used to configure the container:
  - AUTH_METHOD: for now only default 'passwd' based auth is supported
    - if `passwd` method is choice the 'admin' password is generated and display in container log
  - AUTH_URL: the http endpoint to authenticate the user, if option is set the AUTH_METHOD is forced to 'http'
  - NO_AUTH: if set disable any authentication methods
  - SECRET: the secret used to encrypt stored credentials, if not set encryption is disabled
  - TITLE: if set override the default "Docker node-red" header title

You can also add a 'extra_modules.txt' inside '/app/config' with a list of flow extra.

TODO
----
[ ] implement flows backup/restore

Dokku
-------------

If used inside dokku you can mount the volume using the following command

::

  dokku storage:mount $APP /var/lib/dokku/data/storage/$APP:/app/.nodered/
