Docker-node-red
===================

A docker image to deploy node-red istance.

The following env vars are used to configure the images:
  - PORT: the admin interface port, default 5000 (to support dokku seamless integration)
  - AUTH_METHOD: for now only default 'passwd' based auth is supported
    - if passwd method is choice the 'admin' password is generated and display in container log
  - NODES_URL_FILE: a file url to configure additional nodes from npm

TODO
----
  [ ] add http external auth method
  [ ] implement flows backup/restore
  [ ] allow template/css personalization
