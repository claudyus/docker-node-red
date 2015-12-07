Docker-node-red
===================

A docker file for node-red istance with mongodb storage support and capability to fetch additional module by ENV var.


Features:

  - default admin user `root`
  - admin password generate at build time (see log to retrieve it)
  - pre-installed mongodb storage
  - Installation of additional node-red module from http://flows.nodered.org/.

Configure module vars
^^^^^^^^^^^^^^^^^^^^^^

The NODERED_MODULES env var can be used to install additional module at runtime, ex::
  
  docker run  --env NODERED_MODULES="node-red-contrib-deduplicate" <id>
