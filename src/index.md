---
title: Reporting and BI | CRONje.ME
label: REPORTS
order: 100
authors:
  - name: Charl Cronje
    email: charl@cronje.me
    link: https://blog.cronje.me
    avatar: https://assets.cronje.me/avatars/darker.jpg
date: 2022-03-07T16:58
description: Tools and Self Hosted for CRONje.ME
edit:
  repo: "https://github.com/charlpcronje/reports.docs.cronje.me/edit/"
  base: /src
  branch: main
  label: Edit on GitHub
editor:
  enabled: false
favicon: favicon.png
links:
- text: Dashboard
  link: https://nav.cronje.me
- text: Blog / Portfolio
  link: https://blog.cronje.me
- text: Wiki, Tips and Docs 
  link: https://docs.cronje.me
- text: My CV
  link: https://cv.cronje.me
- text: LinkedIn
  link: https://www.linkedin.com/in/charlpcronje
- text: GitHub
  link: https://github.com/charlpcronje
- text: Upwork Profile
  link: https://www.upwork.com/freelancers/~01ccb1439024ec9c50
footer:
  copyright: "webAlly &copy; Copyright {{ year }}. All rights reserved."
---
<script type="text/javascript">(function(w,s){var e=document.createElement("script");e.type="text/javascript";e.async=true;e.src="https://cdn.pagesense.io/js/webally/f2527eebee974243853bcd47b32631f4.js";var x=document.getElementsByTagName("script")[0];x.parentNode.insertBefore(e,x);})(window,"script");</script>


```sh
  ____  _____ ____   ___  ____ _____ ____      _                  ____ ____   ___  _   _  _        __  __ _____ 
 |  _ \| ____|  _ \ / _ \|  _ \_   _/ ___|  __| | ___   ___ ___  / ___|  _ \ / _ \| \ | |(_) ___  |  \/  | ____|
 | |_) |  _| | |_) | | | | |_) || | \___ \ / _` |/ _ \ / __/ __|| |   | |_) | | | |  \| || |/ _ \ | |\/| |  _|  
 |  _ <| |___|  __/| |_| |  _ < | |  ___) | (_| | (_) | (__\__ \| |___|  _ <| |_| | |\  || |  __/_| |  | | |___ 
 |_| \_\_____|_|    \___/|_| \_\|_| |____(_)__,_|\___/ \___|___(_)____|_| \_\\___/|_| \_|/ |\___(_)_|  |_|_____|
                                                                                       |__/                     
 01010010  01000100  01010000  01001110  01010010  01010100  01010010  00101110   01100100   01101110   01100010  
 01110010  00101110  01000010  01010010  01001110  01001110  01101010  01100100   00101110   01001100   01000101 

# Table of contents

- **Section 1:** Business Intelligence, Research and Testing
- **Section 2:** Reports for clients 
- **Section 3:** Jasper Reports & ReportServer
- **Section 4:** Other Tools
- **Section 5:** Jasper QL
- **Section 6:** Build Jaspersoft Dashboards
- **Section 7:** Data Sources
- **Section 8:** Video Series

=== Synopsis
My clients need to get more of their marketing and sales staff in the position where they can find the data they needed to be better at making decisions in their respective responsibilities. They wanted to include as many of the staff to use Analytics, to be able to access the newest and live data, to be able to aggregate multiple data sources to get a clear understanding of not just one client's needs but also what is trending, what they need to be careful of and of course to be able to make beautiful charts to blow their client's minds :)

They also need to be able to access the data from anywhere and from their mobile devices. By installing a self hosted report server for them that can collect and combine all of their data sources, we've come a lot closer already to empowering more and more people. They are still sceptic of Machine Learning will be of any benefit for them, but I hope to convince them with some proof soon. So far we've begun to automate some tasks but with machine learning we can also automate the time consuming tasks such as data preparation, virtualization, forecasting and scheduled reports
===

!!!
Please note, this is the technical documentation for the technicians, technical managers and developers to replicate my results for proof of concept.
!!!

## Section 1: Business Intelligence

- [1.1 Oxygen XML Developer](oxygen.md)
- [1.2 Altova Mission Kit](altova.md)

## Section 2: RStudio and RMarkdown

- [2.1 R and R-Studio ](https://dev.docs.cronje.me/rlang/rstudio.md)
- [2.2 R-Markdown](rstudio.md)

## Section 3: Jasper Reports & ReportServer

- [3.1 Installation](https://tools.docs.cronje.me/jasper/)
- [3.2 Installing PostgreSQL](https://setup.docs.cronje.me/postgresql/)
- [3.3 Manual Tomcat Server](https://setup.docs.devserv.me/tomcat/)
- [3.4 Installing WAR Distribution](https://www.youtube.com/watch?v=Pr89e_rKS2g)
- [3.5 Jaspersoft Server for Containers](https://github.com/TIBCOSoftware/js-docker/tree/main/jaspersoft-containers)
- [3.6 Deploy configured instance on AWS](https://www.jaspersoft.com/resources/community/jasperreports-server-aws-quickstart)
- [3.7 Youtube Install Guide](https://www.youtube.com/watch?v=Pr89e_rKS2g)
  
## Section 4: Other Tools

- [4.1 Jaspersoft Studio](https://community.jaspersoft.com/project/jaspersoft-studio)
- [4.2 iReport Designer](https://community.jaspersoft.com/project/ireport-designer)

## Section 5: Jasper QL

- [5.1 JasperQL - Query Language for Jasper](https://www.youtube.com/watch?v=BE_Tec8MRwE)

## Section 6: Build Jaspersoft Dashboards

- [6.1 Visualize.js: An Introduction](https://www.youtube.com/watch?v=W4CvPmSnOQs)
- [6.2 Visualize.js: Embedding a Data Visualization or Report](https://www.youtube.com/watch?v=xGbcQb1N-gU)
- [6.3 Visualize.js: Embedding a Report with Parameters](https://www.youtube.com/watch?v=_VoM7OYkcNQ)
  
## Section 7: Data Sources

- [7.1 Create Connection With Data Source](https://www.youtube.com/watch?v=-eg-t35eAYU)
  
## Section 8: Video Series

- [8.1 Introduction](https://youtu.be/OkE7yDN_gsQ)
- [8.2 How to Create Your First Report in Jaspersoft Studio](https://youtu.be/yRLvJgz9Dxk)
- [8.3 Visualize.js: An Introduction](https://youtu.be/W4CvPmSnOQs) 




