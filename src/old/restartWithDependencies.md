---
title: Restart Tomcat Server with Dependencies
---
<script type="text/javascript">(function(w,s){var e=document.createElement("script");e.type="text/javascript";e.async=true;e.src="https://cdn.pagesense.io/js/webally/f2527eebee974243853bcd47b32631f4.js";var x=document.getElementsByTagName("script")[0];x.parentNode.insertBefore(e,x);})(window,"script");</script>

Included with the installation they included a script `ctlscript.sh`

```sh
/opt/jasperreports-server-8.0.0/ctlscript.sh restart
```

That should restart Apache Tomcat, with PostgreSQL and any other dependant services.