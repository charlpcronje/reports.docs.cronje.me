```sh
.__ .___.__ .__..__ .___. __.   .__ .__. __  __.   .  ..___
[__)[__ [__)|  |[__)  |  (__    |  \|  |/  `(__    |\/|[__ 
|  \[___|   |__||  \  |  .__) * |__/|__|\__..__) * |  |[___
```

## Synopsis

- The purpose of this implementation is to prove the concept that I can create a report that looks simular to the supplied report, supply it with a dataset and get the result as supplied.
- I tried the following solutions

### Oxygen XML Developer

Oxygen XML comes with some extra tools, ie: Oxygen XML Author. 

> XML Author handles the following coversions

| Source        | Target         |
|---------------|----------------|
| txt           | xml            |              
| Excel         | xml            |         
| DB Data       | xml            |   
| html          | xhtml          | 
| html          | dita           |       
| html          | docbook 4      |            
| html          | docbook 5      |            
| word          | xhtml          |        
| word          | dita           |
| word          | docbook 4      |           
| word          | docbook 5      |           
| Excel         | dita           |      
| Confluence    | dita           |      
| docbook       | dita           |      
| json          | xml            |     
| xml           | json           |           
| json          | yaml           |
| Yaml          | json           |

- Oxygen XML Developer is a cross-platform application designed to accommodate all of your `XML editing`, `authoring`, `developing`, and `publishing` needs. It is the best `XML editor` available for document development using structured mark-up languages such as `XML`, `XSD`, `Relax NG`, `XSL`, `DTD`.
- It offers developers a powerful Integrated Development Environment and the intuitive Graphical User Interface of Oxygen XML Developer is easy to use and provides robust functionality for content editing, project management, and validation of structured mark-up sources. Coupled with `XSLT` and `FOP` transformation technologies, `Oxygen XML` Developer offers support for generating output to multiple target formats, including: `PDF`, `PS`, `TXT`, `HTML`, `DOC`, `JavaHelp`, `WebHelp`, and `XML`.
- Using DTD and XSLT transformations the XML constructed with a server side technology will be transformed to PDF and DOCX
- This solution has proven to work for me in the past but creating the API to construct the nessesary XML on the server will take some time and as new report structures are needed the API will need to be upgraded.


### Altova Mission Kit

MissionKit is a software development suite of enterprise-class `XML`, `JSON`, `SQL`, and `UML` tools for information architects and application developers. MissionKit includes `Altova XMLSpy`, `MapForce`, `StyleVision`, and other market-leading products for building today’s real-world software solutions

- **XMLSpy:** JSON and XML editor offers the world’s leading graphical schema designer, a code generator, file converters, debuggers, profilers, full database integration, support for XSLT, XPath, XQuery, WSDL, SOAP, XBRL, and Open XML (OOXML), plus Visual Studio and Eclipse integration, and more.
- **MapForce:** is an award-winning any-to-any graphical data mapping, conversion, and integration tool that maps data between any combination of XML, JSON, database, EDI, XBRL, CSV, Excel, Protobuf, and/or Web service, then transforms data instantly or autogenerates royalty-free data integration code for the execution of recurrent conversions. integration, and more.
- **StyleVision:** is an award-winning tool for designing compelling reports and forms based on XML, SQL database, and XBRL inputs. It makes the power of XSLT available in an intuitive and visual design tool, and adds rich content such as eye-catching charts, making it possible for designers and developers to focus on their target designs (in HTML, PDF, Word/Open XML, and other formats) rather than XSLT details.  
- **UModel:** is the starting point for successful software development. Visually design application models in UML and generate Java, C++, C#, or Visual Basic .NET code and project documentation. Or, reverse engineer existing programs into UML 2 software architecture diagrams, then fine tune your designs and complete the round trip by regenerating code. UModel is the UML tool that makes visual software design practical for any project.
- **SchemaAgent:** is a visionary tool for analyzing and managing relationships among XML-based files - across a project, an intranet, or even an enterprise. SchemaAgent gives you an accurate picture of your XML infrastructure in a matter of seconds, giving you the knowledge you need to efficiently manage, edit, and reuse components in a productive, error-free manner.

With the tools mentioned above it is completely possible to gather and standardize data and create a report with all the features as in the example report. However anyone using these tools will have to have an extensive knowledge of `xml`, `xslt`, `DTD`, `Dita` and `docbook`

## Proof of concept

### JasperReports Server

- JasperReports Server is a stand-alone and embeddable reporting server. It provides reporting and analytics that can be embedded into a web or mobile application as well as operate as a central information hub for the enterprise by delivering mission critical information on a real-time or scheduled basis to the browser, mobile device, or email inbox in a variety of file formats. JasperReports Server is optimized to share, secure, and centrally manage your Jaspersoft reports and analytic views.

**List of related links**

- [Jaspersoft Community](https://community.jaspersoft.com/documentation?version=64611)
- [JasterSoft Community Wiki](https://community.jaspersoft.com/wiki/jaspersoft-community-wiki-0)
- [JasperReports Tutorial](https://www.tutorialspoint.com/jasper_reports/index.htm)
- [JasperSoft Studio](https://sourceforge.net/projects/jasperstudio)
- [iReport Designer](https://sourceforge.net/projects/ireport)
- [JasperSoft Library](https://sourceforge.net/projects/jasperreports/)
- [JasterReport IO](https://community.jaspersoft.com/project/jasperreports-io)
  - [Youtube](https://www.youtube.com/watch?v=m9kdSHZ9pCg)
- [Building the JasperReports Server image](https://github.com/Robinyo/serendipity-api/tree/master/projects/spring-boot/server/services/jasperreports-server)
- [Example Docker Compose](docker-compose.yml)
- [Docker Hub](https://hub.docker.com/r/retriever/jasperserver)