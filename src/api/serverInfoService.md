# API - The serverInfo Service

The `rest_v2/serverInfo` service returns the same information as the `About JasperReports Server` link in the user interface.

Use the following methods to verify the server information, such as version number and supported features for compatibility with your `REST` client application. Your application should also use the date and date-time patterns to interpret all date or date-time strings it receives from the server and to format all date and date-time strings it sends to the server.

**Method:** GET

**URL:** http://`<host>`:`<port>`/jasperserver`[-pro]`/rest_v2/serverInfo

**Options**

_accept:_ application/xml

_accept:_ application/json

> Return Value on Success: 200 OK – Body described below.

> The server returns a structure containing the information in the requested format, 

=== XML
```xml
<serverInfo>
  <build>20141121_1750</build>
  <dateFormatPattern>yyyy-MM-dd</dateFormatPattern>
  <datetimeFormatPattern>yyyy-MM-dd'T'HH:mm:ss</datetimeFormatPattern>
  <edition>PRO</edition>
  <editionName>Enterprise</editionName>
  <features>Fusion AHD EXP DB AUD ANA MT </features>
  <licenseType>Commercial</licenseType>
  <version>6.0.0</version>
</serverInfo>
```
===

=== JSON
```json
{
  "dateFormatPattern": "yyyy-MM-dd",
  "datetimeFormatPattern": "yyyy-MM-dd'T'HH:mm:ss",
  "version": "6.0.0",
  "edition": "PRO",
  "editionName": "Enterprise",
  "licenseType": "Commercial",
  "build": "20150527_1942",
  "features": "Fusion AHD EXP DB AUD ANA MT "
}
```
===

> You can access each value separately with the following URLs. Note that some information does not apply to community editions of the server. The response is the raw value, XML or JSON are not accepted formats.

```R
http://`<host>:<port>/jasperserver[-pro]/rest_v2/serverInfo/version
http://`<host>:<port>/jasperserver[-pro]/rest_v2/serverInfo/edition
http://`<host>:<port>/jasperserver-pro/rest_v2/serverInfo/editionName
http://`<host>:<port>/jasperserver[-pro]/rest_v2/serverInfo/build
http://`<host>:<port>/jasperserver-pro/rest_v2/serverInfo/licenseType
http://`<host>:<port>/jasperserver-pro/rest_v2/serverInfo/features
http://`<host>:<port>/jasperserver[-pro]/rest_v2/serverInfo/dateFormatPattern
http://`<host>:<port>/jasperserver[-pro]/rest_v2/serverInfo/datetimeFormatPattern
```