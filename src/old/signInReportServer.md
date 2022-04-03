# Sign into JasperReports Server

3. Log into JasperReports Server by entering the startup URL in your browser’s address field. The URL depends upon your application server. If you installed the default, 

```sh
# bundled Tomcat use:
http://devserv:8081/jasperserver-pro
```

## Log in using the following credentials:

| User ID        | Password     | Description                                 |                     
|----------------|--------------|---------------------------------------------|                        
| superuser	     | superuser	| System-wide administrator                   |                                  
| jasperadmin	 | jasperadmin  | Administrator for the default organization  |                     

If you installed the sample data, these additional sample end-users are also created. These users are non-administrative users who have fewer system privileges than an administrative user.

| User ID        | Password     | Description                                 |                     
|----------------|--------------|---------------------------------------------|                        
| joeuser	     | joeuser   	| Sample end-user                             |                                  
| demo	         | demo         | Sample end-user for Dashboard demonstration |


When you complete the evaluation or testing of your JasperReports Server instance, change the administrator and superuser passwords (jasperadmin and superuser) and remove any sample end-users. Leaving the default passwords and end-users in place weakens the security of your installation.