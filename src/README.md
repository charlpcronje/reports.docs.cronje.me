---
title: reports-docs.DEVserv.ME
---

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

## Jasper ReportServer

=== Stand-alone and embeddable reporting server
JasperReports Server is a stand-alone and embeddable reporting server. It provides reporting and analytics that can be embedded > into a web or mobile application as well as operate as a central information hub for the enterprise by delivering mission critical information on a real-time or scheduled basis to the browser, mobile device, or email inbox in a variety of file formats. JasperReports Server is optimized to share, secure, and centrally manage your Jaspersoft reports and analytic views.
===

Before installing any package it is recommended that you update the packages and repository using the following command.

```sh
yum -y update
```
### Manual Install

1. [Install Java](https://setup.docs.devserv.me/java/)
2. [Other Java Web / Application Servers](otherJavaServers.md)
3. [Install Tomcat Server](https://setup.docs.devserv.me/tomcat/)
4. [Install PostgreSQL](https://setup-docs.devserv.me/postgresql/)
5. [Install ReportServer](reportServer.md)
6. [Create Docker Image](docker.md)
7. [Other Install options](otherInstallOptions.md)
8. [Supported Tech](supportedTech.md)
9. [Install Should Resemble](exampleInstallStructure.md)
10. [Edit Config Files](editConfigFiles.md)
11. [Restart Server with Dependencies](restartWithDependencies.md)
12. [Sign-In to ReportServer](signInReportServer.md)
13. [Troubleshooting](help.md)

### Installing WAR Distrobution

- [Dr. Jaspersoft - Installing the war file distribution](https://www.youtube.com/watch?v=Pr89e_rKS2g)

### Deploy in Containers

- [Jaspersoft Server for Containers](https://github.com/TIBCOSoftware/js-docker/tree/main/jaspersoft-containers)
  - [Why use containers](https://www.youtube.com/watch?v=bLQNMjpQlaw)
  - [Deploy Jasper Server Using Docker](https://www.youtube.com/watch?v=T3_4WhEFtn4)
  - [JasperReports packaged by Bitnami](https://hub.docker.com/r/bitnami/jasperreports/)
  - [Jasper Server Community Edition on Docker](https://stackoverflow.com/questions/59413137/jasper-server-community-edition-on-docker)
  - [Dr. Jaspersoft - Docker & Kubernetes Deployment with JasperReports Server](https://www.youtube.com/watch?v=bLQNMjpQlaw)
- [Example Docker Compose](docker-compose.yml)
- [Docker Hub](https://hub.docker.com/r/retriever/jasperserver)
### Deploy an already configured instance on AWS

- [Jaspersoft Server for AWS](https://www.jaspersoft.com/resources/community/jasperreports-server-aws-quickstart)
- More help can be found with the [Jasper Community](https://community.jaspersoft.com/documentation)
- [Youtube Install Guide](https://www.youtube.com/watch?v=Pr89e_rKS2g&t=694s)

### Install Other Jasper Tools for Creating Reports and Dashboards

- [JasperSoft Studio](https://sourceforge.net/projects/jasperstudio)
- [iReport Designer](https://sourceforge.net/projects/ireport)
- [JasperSoft Library](https://sourceforge.net/projects/jasperreports/)
- [JasterReport IO](https://community.jaspersoft.com/project/jasperreports-io)
  - [Youtube](https://www.youtube.com/watch?v=m9kdSHZ9pCg)
- [Building the JasperReports Server image](https://github.com/Robinyo/serendipity-api/tree/master/projects/spring-boot/server/services/jasperreports-server)

### Reporting Tips

- [JasperQL - A New Query Language For Domain-Based Reports](https://www.youtube.com/watch?v=BE_Tec8MRwE)
- [Visualize.js: An Introduction](https://www.youtube.com/watch?v=W4CvPmSnOQs)
- [Visualize.js: Embedding a Data Visualization or Report](https://www.youtube.com/watch?v=xGbcQb1N-gU)
- [Visualize.js: Embedding a Report with Parameters](https://www.youtube.com/watch?v=_VoM7OYkcNQ)
- [How to Build Jaspersoft Dashboards from Impala (Hadoop)](https://www.youtube.com/watch?v=EzgtIjahIaI)
- [Jaspersoft Studio - Create Connection With Mysql](https://www.youtube.com/watch?v=-eg-t35eAYU)

### JasperSoft Community

- [Jaspersoft Community](https://community.jaspersoft.com/documentation?version=64611)
- [JasterSoft Community Wiki](https://community.jaspersoft.com/wiki/jaspersoft-community-wiki-0)
- [JasperReports Tutorial](https://www.tutorialspoint.com/jasper_reports/index.htm)

### Customizing Jasper Report Server

The system is open source and there is a big community of developers out there adding new features. Before editing the system itself, first have a look at the xml files. The xml files have a lot of settings that can be adjusted.
Also the JavaScript files are minified but the un-minified versions are there as well.

- **XML**
  - Mostly config files
  - Can affect the UI
  - Require server restart to take affect
- **JavaScript / html**
  - Mostly for UI Changes
  - [Customizing the JavaScript](customizingJavaScript.md)

## Proof of concept

Sort Video intro to explain the concept as I understand it:

<video controls="controls" poster="assets/poster.png">
    <source src="assets/JasperSoftReportServer.mp4" type="video/mp4">
    Your browser does not support the HTML5 Video element.
</video>

- For a proof of concept I took the report I receieved from ISA and I recreated the report in JasperSoft Studio. 
- I Added some more data to the Orion API I created before so that I can have a data sources to connect to, to simulate JasperSoft collecting data and then creating the report as it should from the data collected
- When the data sources are added to the report server it can be cashed in collections of data and combined with data from other collections so that you can start centralizing all the data you want to report with

| Document                                                  | Description                              |
|-----------------------------------------------------------|------------------------------------------|
| [Sample Service Report](assets/SampleServiceReport.docx)  | Sample Document from ISA                 |


- Data Sources
- Gather Data
- Create Report Template
- Combine Data and Template
- Edit Report Manually
- Final Export

