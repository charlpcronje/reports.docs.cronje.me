---
title: Reporting Docs - DEVserv.ME
label: Reportign Docs
order: 100
authors:
  - name: Charl Cronje
    email: charl@devserv.me
    link: https://charl-cv.devserv.me
    avatar: https://assets.devserv.me/avatars/darker.jpg
tags: [dev,reports,bi,data,central,js,php,mysqll,oracle,log]
---

```sh
.__ .___.__ .__..__ .___. __.   .__ .__. __  __.   .  ..___
[__)[__ [__)|  |[__)  |  (__    |  \|  |/  `(__    |\/|[__ 
|  \[___|   |__||  \  |  .__) * |__/|__|\__..__) * |  |[___
```

1. Synopsis
1. Jasper Reports
  - Installing Jasper ReportServer
1. Tested Solutions
1. Testing Jasper API


## 1. Synopsis

The purpose of this implementation is to prove the concept that I can create a report that looks simular to the [supplied report](assets/sampleservicereport.docx). Also to prove that I can source the data needed for the report from different data sources and combine them to create a simular report.


## 2. Jasper Reports

[!embed](https://www.veed.io/embed/1611cec6-1d0d-4bae-a208-558d6d1aaa62)


## 3. I tested the following solutions

=== Oxygen XML Developer

- Oxygen XML Developer is a cross-platform application designed to accommodate all of your `XML editing`, `authoring`, `developing`, and `publishing` needs. It is the best `XML editor` available for document development using structured mark-up languages such as `XML`, `XSD`, `Relax NG`, `XSL`, `DTD`.
- It offers developers a powerful Integrated Development Environment and the intuitive Graphical User Interface of Oxygen XML Developer is easy to use and provides robust functionality for content editing, project management, and validation of structured mark-up sources. Coupled with `XSLT` and `FOP` transformation technologies, `Oxygen XML` Developer offers support for generating output to multiple target formats, including: `PDF`, `PS`, `TXT`, `HTML`, `DOC`, `JavaHelp`, `WebHelp`, and `XML`.
- Using DTD and XSLT transformations the XML constructed with a server side technology will be transformed to PDF and DOCX
- This solution has proven to work for me in the past but creating the API to construct the nessesary XML on the server will take some time and as new report structures are needed the API will need to be upgraded.

Oxygen XML comes with some extra tools, ie: Oxygen XML Author. 

> XML Author handles the following coversions

||| xml

| Source        | Target         |
|---------------|----------------|
| txt           | xml            |              
| Excel         | xml            |         
| DB Data       | xml            |   
| json          | xml            |
| html          | xml            | 

||| dita

| Source        | Target         |
|---------------|----------------|
| Excel         | dita           |      
| Confluence    | dita           |      
| docbook       | dita           |
| word          | dita           |
| html          | dita           |

|||

||| json

| Source        | Target         |
|---------------|----------------|
| xml           | json           | 
| Yaml          | json           |         
| yaml          | json           | 

||| word

| Source        | Target         |
|---------------|----------------|
| xhtml         | word           |
| docbook 4     | word           |
| docbook 5     | word           | 

|||

=== 2. Altova Mission Kit

MissionKit is a software development suite of enterprise-class `XML`, `JSON`, `SQL`, and `UML` tools for information architects and application developers. MissionKit includes `Altova XMLSpy`, `MapForce`, `StyleVision`, and other market-leading products for building today’s real-world software solutions

- **XMLSpy:** JSON and XML editor offers the world’s leading graphical schema designer, a code generator, file converters, debuggers, profilers, full database integration, support for XSLT, XPath, XQuery, WSDL, SOAP, XBRL, and Open XML (OOXML), plus Visual Studio and Eclipse integration, and more.
- **MapForce:** is an award-winning any-to-any graphical data mapping, conversion, and integration tool that maps data between any combination of XML, JSON, database, EDI, XBRL, CSV, Excel, Protobuf, and/or Web service, then transforms data instantly or autogenerates royalty-free data integration code for the execution of recurrent conversions. integration, and more.
- **StyleVision:** is an award-winning tool for designing compelling reports and forms based on XML, SQL database, and XBRL inputs. It makes the power of XSLT available in an intuitive and visual design tool, and adds rich content such as eye-catching charts, making it possible for designers and developers to focus on their target designs (in HTML, PDF, Word/Open XML, and other formats) rather than XSLT details.  
- **UModel:** is the starting point for successful software development. Visually design application models in UML and generate Java, C++, C#, or Visual Basic .NET code and project documentation. Or, reverse engineer existing programs into UML 2 software architecture diagrams, then fine tune your designs and complete the round trip by regenerating code. UModel is the UML tool that makes visual software design practical for any project.
- **SchemaAgent:** is a visionary tool for analyzing and managing relationships among XML-based files - across a project, an intranet, or even an enterprise. SchemaAgent gives you an accurate picture of your XML infrastructure in a matter of seconds, giving you the knowledge you need to efficiently manage, edit, and reuse components in a productive, error-free manner.

With the tools mentioned above it is completely possible to gather and standardize data and create a report with all the features as in the example report. However anyone using these tools will have to have an extensive knowledge of `xml`, `xslt`, `DTD`, `Dita` and `docbook`

=== 3. R, RStudio, RMarkdown & Quarto 

**R-Markdown** documents are fully reproducible. Use a productive interface to weave together narrative text and code to produce elegantly formatted output. Use multiple languages including R, Python, SQL, and JavaScript

> R Markdown supports dozens of static and dynamic output formats including

- HTML
- PDF
- MS Word
- Beamer
- HTML5 slides
- Tufte-style handouts
- Books
- Dashboards
- Shiny applications
- Scientific articles
- Websites and more

[Click here for some examples](https://dev-docs.devserv.me/rlang/rmd/#some-more-interesting-links)

- [R Programming](https://dev-docs.devserv.me/rlang/)
- [Install R Programming Langauge](https://dev-docs.devserv.me/rlang/installr/)
- [R Markdown](https://dev-docs.devserv.me/rlang/rmd/)

> Below are some examples what I said from the the beginning that I think Markdown is a good base to compose documents to, before transforming them and exporting them to the desired format

- [R Markdown Templates](https://dev-docs.devserv.me/rlang/mdtemplates/)
- [Guide to using Quarto](https://dev-docs.devserv.me/rlang/quartoguide/)
- [R-Markdown & MS Word](https://dev-docs.devserv.me/rlang/wordrmd/)

===

After I tested and played around with the three solutions I just discussed I made notes of what a decent reporting tool should do and what a reporting solution should do specific to ISA's needs. The original idea was to simplt test if I could generate a report that looks simular to the one I was given. 

**In all three the previous solutions I could indeed do that**

- But it was very technical.
- For Oxygen and Altova you'd have to be a developer to use those tools                 
- RStudio with R-Markdown is a very good solution and is the most flexible.

**Last case study and proof of concept is with JasperSoft ReportServer with JasperSoft Studio**

> Short Video I made to explain ISA's needs on a very high level and what JasperSoft say they can do and what I proved in concept can be done

[!embed](https://www.veed.io/embed/1611cec6-1d0d-4bae-a208-558d6d1aaa62)

<!--
<video width="750" controls="controls" poster="assets/poster.png">
    <source src="assets/jaspersoftreportserver.mp4" type="video/mp4">
    Your browser does not support the HTML5 Video element.
</video>
-->

## Jasper ReportServer

=== Stand-alone and embeddable reporting server
JasperReports Server is a stand-alone and embeddable reporting server. It provides reporting and analytics that can be embedded > into a web or mobile application as well as operate as a central information hub for the enterprise by delivering mission critical information on a real-time or scheduled basis to the browser, mobile device, or email inbox in a variety of file formats. JasperReports Server is optimized to share, secure, and centrally manage your Jaspersoft reports and analytic views.
===

> Before installing any package it is recommended that you update the packages and repository using the following command.

```sh
yum -y update
```

=== Installing Jasper ReportServer

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
===

=== Installing and Using Other Jasper Report Tools
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

### Video Series

- [Introduction](https://youtu.be/OkE7yDN_gsQ)
- [How to Create Your First Report in Jaspersoft Studio](https://youtu.be/yRLvJgz9Dxk)
- [Visualize.js: An Introduction](https://youtu.be/W4CvPmSnOQs)
- [Visualize.js Dashboard](https://www.youtube.com/watch?v=IGzCqHhzKUY)

===

### ReportServer API

The JasperReports Server REST API is an Application Programming Interface that follows the guidelines of REpresentational State Transfer design to allow client application to interact with the server through the HTTP protocol. With a few exceptions, the REST API allows clients to interact with all features of the server, such as running, exporting, and scheduling reports, reading and writing resources in the repository, and managing organizations, roles, and users. The REST API requires credentials for every operation and enforces the same permissions and administrator restrictions as the server's user interface.

- [List of Services](api/listOfServices.md)
- [Sending REST Requests from a Browser](api/fromTheBrowser.md)
- [HTTP Response Codes](api/httpResponseCodes.md)
- [The serverInfo Service](api/serverInfoService.md)
- [Authentication](api/authentication.md)
- [Working With Resources](api/workingWithResources.md)
- [Resource Descriptors](api/resourceDescriptors.md)
- [The resources Service](api/theresourcesService.md)
- [Working with File Resources](api/workingWithFileResources.md)
- [Working With Domains](api/workingWithDomains.md)
- [The permissions Service](api/thepermissionsService.md)
- [The export Service](api/theexportService.md)
- [The import Service](api/theimportService.md)
- [The reports Service](api/thereportsService.md)
- [The reportExecutions Service](api/thereportExecutionsService.md)
- [The inputControls Service](api/theinputControlsService.md)
- [The options Service](api/theoptionsService.md)
- [The jobs Service](api/thejobsService.md)
- [The calendars Service](api/thecalendarsService.md)
- [The queryExecutor Service](api/thequeryExecutorService.md)
- [The caches Service](api/thecachesService.md)
- [The organizations Service](api/theorganizationsService.md)
- [The users Service](api/theusersService.md)
- [The roles Service](api/therolesService.md)
- [The attributes Service](api/theattributesService.md)
- [About This Guide](api/aboutThisGuide.md)

=== Become a part of the community & cusomize Jasper
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
===

<!--

=== Proving the concept of effective reporting with JasperSoft

### Here are the goals to proving this concept

1. Connect and Retreive data from external sources
2. Gather data and it usable for reporting
3. Create Report Template
4. Combine Template and Data
5. Edit Report Manually afterwards
6. Final Export of report

## Proof of concept

- For a proof of concept I took the report I receieved from ISA and I recreated the report in JasperSoft Studio. 
- I Added some more data to the Orion Project:
  - [Orion API](https://orion.devserv.me/api), 
  - [Orion Docs](https://orion-docs.devserv.me/)
  - [Orion SPA](https://orion-spa.devserv.me/)

- I created the Orion API a while ago so that I can have a data source to connect to, to simulate JasperSoft collecting data and then creating the report as it should from the data collected
- When the data sources are added to the report server it can be cashed in collections of data and combined with data from other collections so that you can start centralizing all the data you want to report with

| Document                                                  | Description                              |
|-----------------------------------------------------------|------------------------------------------|
| [Sample Service Report](assets/SampleServiceReport.docx)  | Sample Document from ISA                 |
| [Service Report for JasperSoft](assets/newServiceReport.) | a Re-Creation of the Sample Report       |
-->
===

## So what is next

- The data sources must be added to the repositories.
- The repositories must then be divided into domains (Which clients fit with which user)
- Live drill down reports can be made without any issues by client or domain.
- Reports can also be scheduled with Jaspersoft Studio
- Dashboards can also be created in JasperSoft Server and Embedded in any web application or mobile app.
- All the user rigths can be controlled via the domains.


- code.devserver.me
- reports-docs.devserv.me
- reports.devserv.me

- https://chrome.google.com/webstore/detail/read-aloud-a-text-to-spee/hdhinadidafjejdhmfkjgnolgimiaplp