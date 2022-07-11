---
title: API - List of Services
---
<script type="text/javascript">(function(w,s){var e=document.createElement("script");e.type="text/javascript";e.async=true;e.src="https://cdn.pagesense.io/js/webally/f2527eebee974243853bcd47b32631f4.js";var x=document.getElementsByTagName("script")[0];x.parentNode.insertBefore(e,x);})(window,"script");</script>

The REST API of JasperReports Server responds to HTTP requests from client applications, in particular the following methods (sometimes called verbs):

- **GET** to list, search and acquire information about server resources.
- **POST** to create new resources and execute reports.
- **PUT** to modify existing resources.
- **DELETE** to remove resources.

As with any RESTful service, not all methods (GET, PUT, POST, and DELETE) are supported on every service. The URLs usually include a path to the resource being acted upon, as well as any parameters that are accepted by the method. For example, to search for input control resources in the repository, your application would send the following HTTP request:

```R
GET http://<host>:<port>/jasperserver[-pro]/rest_v2/resources?type=inputControl
```

In all URLs in this API Reference:

- <host> is the name of the computer hosting JasperReports Server
- <port> is the port you specified during installation
- `jasperserver[-pro]` indicates that the service is available in both Community and Commercial editions.
- `jasperserver-pro` indicates that the service is available only in Commercial editions.
- The context name (by default jasperserver or jasperserver-pro) may be customized in your specific installation of JasperReports Server

The `REST` services are available at the following URLs:

## REST API Services and URLs

!!! :zap: commercial editions :zap:
* Available only in commercial editions of JasperReports Server
!!!

=== Web Service: Login (optional)                                                                                                   
                                                                                                   
The following services use the rest/ prefix but are still supported as part of the REST API:                                                                                                                                                                                                      

```R
http://<host>:<port>/jasperserver`[-pro]`/rest/GetEncryptionKey                                                                                                                                                                                                      
http://<host>:<port>/jasperserver`[-pro]`/rest/login                                                                                                                                                                                                      
http://<host>:<port>/jasperserver`[-pro]`/j_spring_security_check                                                                                                                                                                                                     
http://<host>:<port>/jasperserver`[-pro]`/logout.html                                                                                                                                                                                                     
http://<host>:<port>/jasperserver`[-pro]`/rest_v2/serverInfo                                                                                                   
```

=== Web Service: Repository                                                                                                                                                                                                      

```R
http://<host>:<port>/jasperserver`[-pro]`/rest_v2/resources                                                                                                                                                                                                      
http://<host>:<port>/jasperserver-pro/rest_v2/domains/.../metadata *                                                                                                                                                                                                      
http://<host>:<port>/jasperserver`[-pro]`/rest_v2/permissions                                                                                                                                                                                                      
http://<host>:<port>/jasperserver`[-pro]`/rest_v2/export                                                                                                                                                                                                      
http://<host>:<port>/jasperserver`[-pro]`/rest_v2/import                                                                                                   
``` 

=== Web Service: Reports       

```R
http://<host>:<port>/jasperserver`[-pro]`/rest_v2/reports                                                                                                                                                                                                      
http://<host>:<port>/jasperserver`[-pro]`/rest_v2/reportExecutions                                                                                                                                                                                                      
http://<host>:<port>/jasperserver`[-pro]`/rest_v2/reports/.../inputControls                                                                                                                                                                                                      
http://<host>:<port>/jasperserver`[-pro]`/rest_v2/reports/.../options                                                                                                                                                                                                      
http://<host>:<port>/jasperserver`[-pro]`/rest_v2/jobs                                                                                                                                                                                                      
http://<host>:<port>/jasperserver-pro/rest_v2/queryExecutor *                                                                                                                                                                                                      
http://<host>:<port>/jasperserver-pro/rest_v2/caches/vds *                                                                                                   
```

=== Web Service: Administration without organizations                                                                                                   

```R                                                                                                   
http://<host>:<port>/jasperserver`[-pro]`/rest_v2/users                                                                                                                                                                                                      
http://<host>:<port>/jasperserver`[-pro]`/rest_v2/users/.../attributes                                                                                                                                                                                                      
http://<host>:<port>/jasperserver`[-pro]`/rest_v2/roles                                                                                                                                                                                                      
http://<host>:<port>/jasperserver`[-pro]`/rest_v2/attributes                                                                                                   
```

=== Web Service: Administration with organizations *                                                                                                   

```R                                                                                            
http://<host></host>:<port>/jasperserver-pro/rest_v2/organizations                                                                                                                                                                                                      
http://<host>:<port>/jasperserver-pro/rest_v2/organizations/.../attributes                                                                                                                                                                                                      
http://<host>:<port>/jasperserver-pro/rest_v2/organizations/.../users                                                                                                                                                                                                      
http://<host>:<port>/jasperserver-pro/rest_v2/organizations/.../users/.../attributes                                                                                                                                                                                                    
http://<host>:<port>/jasperserver-pro/rest_v2/organizations/.../roles                                                                                                                                                                                                      
http://<host>:<port>/jasperserver-pro/rest_v2/attributes 
```
=== 

For progammers creating a client application, the reference chapters in this guide give the full description of the methods supported by each REST service, the path or resource expected for each method, and the parameters that are required or optional in the URL. The description of each method includes an example of the descriptors it uses and a sample of the return value.

For tools that can parse the Web Application Description Language (WADL), the following URL gives a machine-readable XML description of all supported REST v2 services:

```R
http://<host>:<port>/jasperserver[-pro]/rest_v2/application.wadl
```