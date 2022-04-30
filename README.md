# PracticalSeries Automation Library Website <img height="25px" src="https://practicalseries.com/2001-pal/01-admin/99-5000-git-pal-web/02-build/m1-badge.svg?bxno=d0011">

<br />

<p align="left">
    <img width="500px" src="https://practicalseries.com/2001-pal/00-comres/11-resources/02-images/pal-logo-web.svg?bxno=d0011">
</p>



<table>
    <tr>
        <td align="center"><br><strong>Published by:</strong><br>The PracticalSeries of Publications<br>Published in the United Kingdom<br><a href="https://practicalseries.com">https://practicalseries.com</a><br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td>
        <td align="center"><strong>Copyright &copy; 2021</strong><br>Michael Gledhill<br><a href="mailto:mg@practicalseries.com">mg@practicalseries.com</a><br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td>    
    </tr>
</table> 

###### A series of technical documents for engineers (and others)
<br />

<table>
    <tr>
        <td colspan="2"><h1>Contents</h1></td>
    </tr>
    <tr>
        <td colspan="2"></td>
    </tr>
    <tr>
        <td align="left"> 
            
[1.&emsp;&emsp;Introducing the PAL](#1--introducing-the-pal)
            
[2.&emsp;&emsp;Introducing the PAL Website](#2--introducing-the-pal-website)

[&emsp;&emsp;&ensp; 2.1. &emsp; &nbsp;The website structure](#21the-website-structure)

[&emsp;&emsp;&ensp; 2.2. &emsp; &nbsp;Understanding the website structure](#22understanding-the-website-structure)<br>
[&emsp;&emsp;&ensp; 2.2.1 &emsp;PAL documentation (11-web)](#221-the-pal-documentation-11-web-directory)<br>
[&emsp;&emsp;&ensp; 2.2.2 &emsp;Project documentation (21-project)](#222-the-project-documentation-21-project-directory)<br>
[&emsp;&emsp;&ensp; 2.2.3 &emsp;Common resources (00-comres)](#223-common-resources-00-comres-directory)<br>
[&emsp;&emsp;&ensp; 2.2.4 &emsp;Administration files (01-admin)](#224-administration-files-01-admin-directory)<br>
[&emsp;&emsp;&ensp; 2.2.5 &emsp;Git repository pages (31-git)](#225-git-repository-webpages-31-git-directory)<br>
[&emsp;&emsp;&ensp; 2.2.6 &emsp;Binary files (81-binary)](#226-binary-file-storage-81-binary-directory)<br>
[&emsp;&emsp;&ensp; 2.2.7 &emsp;User Documents (91-userdocs)](#227-user-document-storage-91-userdocs-directory)

[&emsp;&emsp;&ensp; 2.3. &emsp; &nbsp;The live website](#23the-live-website)<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  
        </td>
        <td align="left">


[3.&emsp;&emsp;Revision status](#3--revision-status)<br>
[&emsp;&emsp;&ensp; 3.1. &emsp; &nbsp;Branch revision status](#31branch-revision-status)

[4.&emsp;&emsp;An overview of the project documentation](#4--an-overview-of-the-project-documentation)<br>
[&emsp;&emsp;&ensp; 4.1. &emsp; &nbsp;The project registry](#41the-project-registry)

[5.&emsp;&emsp;Software Control](#5--software-control)<br>
[&emsp;&emsp;&ensp; 5.1. &emsp; &nbsp;Workflow diagram](#51workflow-diagram)<br>
[&emsp;&emsp;&ensp; 5.2. &emsp; &nbsp;Document versions](#52document-versions)

[6.&emsp;&emsp;Licence](#6--licence)

[7.&emsp;&emsp;Contact the author](#7--contact-the-author)<br>
[&emsp;&emsp;&ensp; 7.1. &emsp; &nbsp;Privacy and personal data](#71privacy-and-personal-data)<br>

[And finally, a note by the author about Validation](#and-finally-a-note-by-the-author-about-validation)<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  
        </td>    
    </tr>
</table> 

<br />







# 1. &emsp; &nbsp;Introducing the PAL

The Practical Series Automation Library (PAL) is a library of software modules and templates that have been developed for the Siemens Simatic S7-1500 range of controllers (and to a lesser extent the S7-1200 range).

The full library and all necessary documentation is available from the Practical Series website:

&emsp; &emsp; &emsp; [https://practicalseries.com/2001-pal/11-web/index.html](https://practicalseries.com/2001-pal/11-web/index.html)


The PAL is configured and deployed using the Siemens Simatic TIA Portal programming environment.

The PAL software structure is designed such that it is applicable to virtually all industrial applications that can generally controlled by a programmable logic controller.

In general terms, the PAL software being developed as part of this Project, is considered to be suitable for use in the following types of industries (this is not an exhaustive list):

* Water and waste water treatment

* Pharmaceutical and batch production

* Brewing and fermentation

* Chemical manufacturing

* Oil and gas systems

* Food and beverage production

The Practical Series Automation Library is freely available under the [MIT Open-Source Licence](#7--licence). Those who find it useful may, if they wish, make a donation to support the library.

Donations can be made here:

&emsp; &emsp; &emsp; [https://practicalseries.com/2001-pal/11-web/81-00-pay.html](https://practicalseries.com/2001-pal/11-web/81-00-pay.html)

<br />

# 2. &emsp; &nbsp;Introducing the PAL Website

This repository contains the website that supports the PAL software Project.

The website is split into three four main sections:

<table>
    <tr>
        <td><strong>1. The PAL software library</strong></td>
        <td>Siemens Controller software that makes up the PAL</td>
    </tr>
    <tr>
        <td><strong>2. The PAL user guide</strong></td>
        <td>Operating instructions for the PAL software</td>
    </tr>
    <tr>
        <td><strong>3. The Project validation docs</strong></td>
        <td>Full set of validation documentation for the engineering project that produced the PAL</td>
    </tr>
    <tr>
        <td><strong>4. The GitHub repositories</strong></td>
        <td>All the version controlled software associated with this Project</td>
    </tr>
</table>

All four sections are contained within this repository.

## 2.1.&emsp;&emsp;The website structure

The website is contained in a series of folders, the underlying structure of which is:

<p align="center">
    <img width="500px" src="https://practicalseries.com/2001-pal/31-git/01-pages/02-00-webreadme/02-images/fig-02-01.png?bxno=d0011">
</p>
<p align="center"><sup>Fig 02-01 &mdash; The website folder structure</sup></p>

## 2.2.&emsp;&emsp;Understanding the website structure

The website structure of Figure 2.1 (everything below the ```PS2001-pal-website```, excepting the ```.git``` folder) is the actual website, the offline version. Everything in these folders is copied to the live website server and can be seen at the following address:

&emsp; &emsp; &emsp; [https://practicalseries.com/2001-pal](https://practicalseries.com/2001-pal)

The relationship between the offline and online folders is as follows:

<p align="center">
    <img src="https://practicalseries.com/2001-pal/31-git/01-pages/02-00-webreadme/02-images/fig-02-02.png?">
</p>
<p align="center"><sup>Fig 02-02 &mdash; The website folder in relation to the live website</sup></p>

The contents of the folders (```00-comres```, ```01-admin```, ```11-web```, ```21-protect```, ```31-git```, ```81-binary``` and ```91-userdocs```) and the root folder are copied to the live website servers using a *file transfer protocol* (FTP) package, this is a one way sync from the reposito-ry to the website servers. The synchronisation is made manually whenever the website is updated.

The website has several folders within it:

<table>
    <tr>
        <td><code>00-comres</code></td>
        <td>Common resources</td>
    </tr>
    <tr>
        <td><code>01-admin</code></td>
        <td>Various administration pages</td>
    </tr>
    <tr>
        <td><code>11-web</code></td>
        <td>The main website containing the  PAL user guides and information</td>
    </tr>
    <tr>
        <td><code>21-project</code></td>
        <td>Holds all the documentation associated with the Project (validation documents)</td>
    </tr>
    <tr>
        <td><code>31-git</code></td>
        <td>Contains information used by the GitHub repositories</td>
    </tr>
    <tr>
        <td><code>81-binary</code></td>
        <td>Contains binary files (the TIA Project archive files &c.)</td>
    </tr>
    <tr>
        <td><code>91-userdocs</code></td>
        <td>The online version of the User Documentation files embedded in the TIA Pro-ject</td>
    </tr>
</table>

The broad contents of these folders is shown in the Figure 2.3 below:

<p align="center">
    <img src="https://practicalseries.com/2001-pal/31-git/01-pages/02-00-webreadme/02-images/fig-02-03.svg?bxno=d0011">
</p>
<p align="center"><sup>Fig 02-03 &mdash; The website folder in relation to the live website</sup></p>


The website has two primary components:
 1. A user guide explaining how to download and use the PAL software (contained in the ```11-web``` directory)
 2. A comprehensive guide to validated projects and all the doc-umentation associated with the PAL project in its entirety (contained in the ```21-project``` directory)

The remaining folders are secondary and are used to support the primary sections. A brief description of each is given below:

### 2.2.1&emsp;&emsp; The PAL documentation (11-web directory)

This contains a full, on-line description and operating guide for the PAL software. It explains exactly how to download the PAL software, how to configure it and gives very detailed, real-world examples of how to use it.

This directory also contains individual module documentation (in an online format) that explains exactly how each module is configured, the requirements and options for that module and examples of how to use the module.

This part of the website is directly accessed at the following url:

&emsp; &emsp; &emsp; [https://practicalseries.com/2001-pal/11-web](https://practicalseries.com/2001-pal/11-web)

### 2.2.2&emsp;&emsp; The Project documentation (21-project directory)

The PAL software is designed for use within pharmaceutical environments and as such is a *“validated”* project. 

Validation is the process of making sure a computerised system (such as a PLC and its software) does precisely what it was designed to do; specifically, it is the exercise of correctly and traceably documenting every requirement of the system and making sure that that requirement is formally and exhaustively tested.

The fact that the Project is validated, and the associated documents required by such projects have been deemed to be useful in their own right. This part of the website give a practical approach to validating a control system, it explains the “life cycle” process and the phases necessary to progressing from a requirement specification to a fully validated and deployed system.

This part of the website provides examples of all the documentation required to by a validated system and explains how they should be used. This documentation is all made available in pdf and Microsoft Office formats (Word, Excel, Visio and Projects); the documents are complete and can be downloaded and reused as a template by anyone to whom they may be useful; again under the [MIT licence](LICENCE.md).

The project documentation also includes copies of the completed test and qualification documents needed to demonstrate the PAL software has been validated.

This part of the website is directly accessed at the following url:

&emsp; &emsp; &emsp; [https://practicalseries.com/2001-pal/21-project](https://practicalseries.com/2001-pal/21-project)

A full list of all the Project documentation is available at at the following url:

&emsp; &emsp; &emsp; [https://practicalseries.com/2001-pal/21-project/01-00-docs.html](https://practicalseries.com/2001-pal/21-project/01-00-docs.html)

### 2.2.3&emsp;&emsp; Common resources (00-comres directory)

The common resources are those components needed by every page within the website. It contains things such as the common Cascading Style Sheets (CSS), the JavaScript (JS) files used within each page, common images and the common font-files needed to correctly render the web pages.

The ```00-comres directory``` is broadly split into two further directories:

<table>
    <tr>
        <td><code>11-resources</code></td>
        <td>Contains CSS, JS and jQuery files written and produced by the PSP</td>
    </tr>
    <tr>
        <td><code>21-global</code></td>
        <td>Contains third party components needed by the website</td>
    </tr>
</table>

The ```11-resources``` folder contains files associated with the website that have been written and developed by the PSP engineers (i.e. these are files that belong to the PSP). They fall into three categories: CSS files (to manage the appearance of the webpages), images (such as logos &c.) and JavaScript files that handle the dynamic navigation used on the web pages.

The ```21-global``` folder is primarily used to hold third party applications that are used within the website. These are categorised as follows:

<table>
    <tr>
        <td><code>woff files</code></td>
        <td>These contain the fonts used by the website and were purchased by the PSP</td>
    </tr>
    <tr>
        <td><code>normalise.css</code></td>
        <td>A third party file use to standardise how different browsers render a website</td>
    </tr>
    <tr>
        <td><code>lightbox.js</code></td>
        <td>Used to display images in a larger, overlay arrangement</td>
    </tr>
    <tr>
        <td><code>Waypoints.js</code></td>
        <td>Used to create dynamic navigation bars</td>
    </tr>
    <tr>
        <td><code>Hyphenator.js</code></td>
        <td>Used to correctly and dynamically hyphenate the website text </td>
    </tr>
    <tr>
        <td><code>MathJax.js</code></td>
        <td>Used to render equations on the website where required</td>
    </tr>
    <tr>
        <td><code>Google-prettify.js</code></td>
        <td>Allows sections of software (code fragments) to be displayed on the website</td>
    </tr>
</table>

### 2.2.4&emsp;&emsp; Administration files (01-admin directory)

The administration area is used internally by the PSP web development team, it contains various files that are necessary for the website management (such as revision data, workflow diagrams, change requests &c.).

The ```01-admin``` directory is not directly accessible by users of the website, but the contents of it can be accessed by other webpages within the website to display or reference particular information.

### 2.2.5&emsp;&emsp; Git repository webpages (31-git directory)

The Git repositories created as part of this Project are all public repositories available to anyone with a GitHub account. These repositories all contain documentation of some form or another, usually as ```README.md``` files, that explain the purpose of the repository and how to use the repository.

These files often reference specific websites or pages that offer further explanation of a particular point.

The ```31-git``` directory provides a storage location for such webpages for the PAL repositories; this document, for example, is available as an online webpage:

&emsp; &emsp; &emsp; [https://practicalseries.com/2001-pal/31-git/11-00-scm.html](https://practicalseries.com/2001-pal/31-git/11-00-scm.html)

### 2.2.6&emsp;&emsp; Binary file storage (81-binary directory)

Holds all the downloadable aspects of the website:

- Pdf documents
- Microsoft Office documents
- Software archive files
- Code examples &c.

All these files are stored in the binary area of the website, such files are all accessed via other webpages within the website.

>**Note:** *While the website holds all these files, the repository does not. Binary files, and in particular the office documents associated with the project are large and, if included in the repository, would make the repository itself very large. There are also some binary files that would exceed the 10 MB size limit imposed by GitHub.*
>
>*The binary files themselves, do not need to be tracked by GitHub as part of the version control system, the software binary files have their own repository ([PS2001-pal-software](https://github.com/practicalseries/PS2001-pal-software)) and the documentation is simply a copy of the latest, approved Project documentation.*
>
>*This folder within the repository is simply a placeholder for the binary files loaded on the webserver.*

### 2.2.7&emsp;&emsp; User Document storage (91-userdocs directory)

The ```91-userdocs directory``` is a special directory and is structured in the correct format for the TIA Portal User Documentation facilities, these are used from within TIA Portal itself to display information about a particular PAL software module.

This is the online version of the User Documentation embedded within the PAL software TIA Projects.

## 2.3.&emsp;&emsp;The live website

The live Practical Series of Publications website is hosted by [Heart Internet](https://www.heartinternet.uk/) in the United Kingdom.

The website has various publications (of which the PAL website is just one component), The landing page for the top level of the website is:

&emsp; &emsp; &emsp; [https://www.practicalseries.com](https://www.practicalseries.com)

And the landing page for the PAL website is:

&emsp; &emsp; &emsp; [https://www.practicalseries.com/2001-pal](https://www.practicalseries.com/2001-pal)

The live website is an exact copy of the offline website stored in this repository (```PS2001-pal-wesite```), with the exception of the binary files (see above).

The website is uploaded from a local copy of the repository to the Heart Internet servers using the WinSCP application.

Logon information is required to give the WinSCP application access to the webserver (in addition, the website will only permit machines with specific IP addresses to upload data to the webserver).

The [WinSCP](https://winscp.net/eng/index.php) application has two windows, the left-hand side is the **offline** website on the local machine, the right-hand side is the **online** website on the Heart Internet servers:

<p align="center">
    <img src="https://practicalseries.com/2001-pal/31-git/01-pages/02-00-webreadme/02-images/fig-02-04.png?bxno=d0011">
</p>
<p align="center"><sup>Fig 02-04 &mdash; WinSCP FTP with the live website</sup></p>

Those requiring FTP access to the website should apply to the following:

<table>
    <tr>
        <td><em>SITE OWNER:</em></td>
        <td>Michael Gledhill</td>
    </tr>
    <tr>
        <td><em>ACCOUNT DETAILS:</em></td>
        <td>PSP Website FTP</td>
    </tr>
    <tr>
        <td><em>CONTACT DETAILS:</em></td>
        <td>mg@practicalseries.com</td>
    </tr>
</table>

<br />

# 3. &emsp; &nbsp;Revision status

All development work takes place on development branches, these always start with a D. Development work is merged back to the master branch when development work is complete and has been tested.

The master branch always contains the most up to date version of the tested and deployable software.

The current revision status of the master branch and any development branches is shown below:

## 3.1.&emsp;&emsp;Branch revision status

| Branch             | Revision                               | Status
| ------------------ | -------------------------------------- | -----------------------------
| <img src="https://practicalseries.com/2001-pal/01-admin/99-5000-git-pal-web/02-build/m1-name.svg?bxno=d0011">           | <img src="https://practicalseries.com/2001-pal/01-admin/99-5000-git-pal-web/02-build/m1-badge.svg?bxno=d0011"> | <img src="https://practicalseries.com/2001-pal/01-admin/99-5000-git-pal-web/02-build/m1-text.svg?bxno=d0011">
| <img src="https://practicalseries.com/2001-pal/01-admin/99-5000-git-pal-web/02-build/d1-name.svg?bxno=d0011">           | <img src="https://practicalseries.com/2001-pal/01-admin/99-5000-git-pal-web/02-build/d1-badge.svg?bxno=d0011"> | <img src="https://practicalseries.com/2001-pal/01-admin/99-5000-git-pal-web/02-build/d1-text.svg?bxno=d0011">
| <img src="https://practicalseries.com/2001-pal/01-admin/99-5000-git-pal-web/02-build/d2-name.svg?bxno=d0011">           | <img src="https://practicalseries.com/2001-pal/01-admin/99-5000-git-pal-web/02-build/d2-badge.svg?bxno=d0011"> | <img src="https://practicalseries.com/2001-pal/01-admin/99-5000-git-pal-web/02-build/d2-text.svg?bxno=d0011">
| <img src="https://practicalseries.com/2001-pal/01-admin/99-5000-git-pal-web/02-build/d3-name.svg?bxno=d0011">           | <img src="https://practicalseries.com/2001-pal/01-admin/99-5000-git-pal-web/02-build/d3-badge.svg?bxno=d0011"> | <img src="https://practicalseries.com/2001-pal/01-admin/99-5000-git-pal-web/02-build/d3-text.svg?bxno=d0011">

The full workflow for the project is shown in the [Software Control](#5--software-control) section of this document.

<br />

# 4. &emsp; &nbsp;An overview of the project documentation

This website contains a lot of documentation (in fact all the project documentation is accessible from within this website). The overall document flow path is shown below:

<p align="center">
    <img src="https://practicalseries.com/2001-pal/31-git/01-pages/02-00-webreadme/02-images/fig-04-01.svg?bxno=d0011">
</p>
<p align="center"><sup>Fig 04-01 &mdash; Project documentation flow path</sup></p>

All these documents are stored in the ```01-binary\01-docs``` folder within the website, see Figure 2.3;  and are organised by the Project phase.

## 4.1.&emsp;&emsp;The project registry

The project registry is a register of all the documents produced for the Project.

The Project Registry is an Excel spread sheet that lists every document within the Project (usually by phase). It has the file name:

&emsp; &emsp; &emsp; [PS2001-0-01-001 Project Register.xlsx](https://www.practicalseries.com/2001-pal/81-binary/01-docs/PS2001-0-01-001-Project-Register.xlsx)

Any new document created must be entered in this Project Registry. 

The following is an example of a page from the Project Registry:

<p align="center">
    <img src="https://practicalseries.com/2001-pal/31-git/01-pages/02-00-webreadme/02-images/fig-04-02.png?bxno=d0011">
</p>
<p align="center"><sup>Fig 04-02 &mdash; Document registry (example page)</sup></p>

<br />

# 5. &emsp; &nbsp;Software Control

All software development takes place away from the ```master``` branch on individual development branches. Such development branches have very restricted scope and objectives and once complete (and tested) are merged back to the ```master``` branch. The Software Control Mechanism for this approach is explained below

The full, historic workflow for the project is shown below:

## 5.1.&emsp;&emsp;Workflow diagram

The workflow diagram shows the current state of the repository and identifies all development branches (both past and present) as well as the main ```master``` branch. The workflow diagram(s) lists all the commit points within the repository and the tag identifiers given to each.

<img src="https://practicalseries.com/2001-pal/01-admin/99-5000-git-pal-web/01-workflow/wf-001p.svg?bxno=d0011">
<p align="center"><sup>Workflow diagram</sup></p>



## 5.2.&emsp;&emsp;Document versions

The revision of the document is expressed in the form ```Sxx.yy```, where: 

```S``` is the status:<br>
&emsp; &emsp; &emsp; ```D``` – Draft/development<br>
&emsp; &emsp; &emsp; ```P``` – Published for review<br>
&emsp; &emsp; &emsp; ```R``` – Released<br>
The ```xx.yy``` numbers are the revision number, ```xx``` being the major revision and ```yy``` being a minor revision.

The first formal release of the document will be at ```01.00```, prior to this the document will have been is a draft state (e.g. ```D00.01```, ```D00.02```, ```D00.03``` &c.) at some point it will have been published for review (this takes the next logical number, e.g. ```P00.04```).

Revisions after a document has been released continue with minor revisions from the released revision, consider a document at release ```R01.00``` that is to be modified and re-released, its progression would continue as:

&emsp; &emsp; &emsp; ```R01.00``` → ```D01.01``` → ```D01.02``` … ```P01.09``` → ```R02.00```

The status letter changes to reflect the document state, the numbers always go upwards.

<br />

# 6. &emsp; &nbsp;Licence

The software and all associated documentation is made available under the MIT licence, see the [LICENCE document](LICENCE.md) for full details and an explanation of why I chose this licence.

<br />

# 7. &emsp; &nbsp;Contact the author

My name is Michael Gledhill and I am the author of the software contained within this repository.

You can reach me by email. I invite questions, corrections, constructive criticism and complaints (polite ones) with the following caveats:

1. I do have a day job (surprising isn’t it), I will respond to all polite emails but not necessarily instantly.

2. I can’t offer detailed engineering advice about specific problems (e.g. why does that valve blow all the fuses when I try to open it), but I will offer pearls of wisdom about less specific software issues.

3. I don’t know anything about car engines or kettles so please don’t ask.

4. If your email comes down to *“I think your work is rubbish, I won’t be making any donations, but I do want to shout at you for a while about your outrageous shortcomings”* then please, there is no need to trouble yourself; you’ve already said everything by not paying.

So if you’re happy with that, you can reach me here:

&emsp; &emsp; &emsp; [mg@practicalseries.com](mailto:mg@practicalseries.com)

I’ve included the full details of how I store and manage emails in the privacy and personal data section below:

## 7.1.&emsp;&emsp;Privacy and personal data

This is a big thing now in Europe and in England: [GDPR](https://ico.org.uk/for-organisations/guide-to-the-general-data-protection-regulation-gdpr) *(General Data Protection Regulation)*; it means I have to be very careful with any data I collect about people. I also have to explain why I want the data and what I’m going to do with it. So here goes:

The various websites associated with the work I’ve done here, do not ask for, nor do they collect, any personal data. There is no *contact-me* form that asks for names, addresses, email details or phone numbers &c. Neither are there any user logons or other such forms of identification.

People can email me if they want to, but that is their choice (I gave my email address in the previous section) and I will respond as an individual to any emails I receive.

Where people do email me, I will not pass on any of their details to anyone else *(even when they are rude to me)*. I respond directly to the sender and do not copy, forward or otherwise redistribute their emails with anyone else.

I delete all emails three months after the email conversation is complete (i.e. if you haven’t emailed me for three months, I delete all the emails I’ve received from you and any replies I’ve sent to you). 

I do not reply to abusive emails *(never argue with a stranger on the internet)* and these I delete straight away.

Where someone has asked a common or pertinent question, I may store the question itself and my response (these are copied to an offline Word FAQ sheet — what engineers call a *technical query sheet*), but I do not store any of the questioner’s details (just the question and answer in an anonymous *text based* format).

I also receive the email addresses and some contact details of those people who make a donation. This information is provided to me by [PayPal](https://www.paypal.com/en/webapps/mpp/ua/privacy-full) &mdash; they tell me who has made the donation.

If the donation is for £5 or more, I keep certain information about that individual in a secure offline database. I store precisely:

* Name
* Email address
* Donated amount
* Date of the donation

I do this purely for the purpose of sending those people a link to the downloadable pdf files for various aspects of this project (I make these freely available to all who donate £5 or more).

I keep this information so that I can send a link for each new revision of the pdfs when such revisions are issued (typically once a year). I.e. I make the pdfs available in perpetuity.

I do not share this information with anyone.

I do not send marketing or unsolicited emails of any kind (I do not have a mailing list or anything like that).

Anyone wishing to have their details deleted need only ask. You can contact me at the following email address:

&emsp; &emsp; &emsp; [mg@practicalseries.com](mailto:mg@practicalseries.com)

<br />

# And finally, a note by the author about Validation

This is a big website (for me anyway) and there is a lot of stuff in here, most of you will just want the software library, that’s easy you can get it here:

&emsp; &emsp; &emsp; [https://practicalseries.com/2001-pal/31-git/81-00-archive.html](https://practicalseries.com/2001-pal/31-git/81-00-archive.html)

 I explain all about what comes with it (documentation and stuff) in here:

&emsp; &emsp; &emsp; [https://practicalseries.com/2001-pal/11-web](https://practicalseries.com/2001-pal/11-web)


If you know what you are doing with Siemens Controllers and all you want is the software, that’s fine, you probably won’t be too interested in the rest of the site and you don’t need to worry about it; the software works and the documentation that comes with it explains everything about how to use it — make use of whatever bits of it you want in your own projects.

There’s a bit more to the website though, and to understand why, you need to follow what passes for my thought process, bear with me it won’t take long.

Throughout the course of, what’s laughingly called my career I’ve written a lot of software for various types of PLCs, my favourite by a long way is the Siemens range of PLCs — these are fast, powerful and give you access to a lot of low-level stuff that other PLCs just don’t. These are grown-up PLCs for serious engineers. *You won’t get fired for buying a Siemens PLC.*

There is also a lot of commonality in Siemens PLCs, I started with the S5 series (these were around from the late seventies and didn’t go out of production until 2006, *quite some life span)*, they were eventually replaced by the S7 300/400 series in the mid-nineties (and these are still around). The S7-300/400 series is now being replaced by the S7 1200/1500 series (introduced in 2012) — and the thing is, they still pretty much use the same programming language and it is actually possible to import old S5 code into the latest S7-1500.

Now as my career progressed *(if that’s the right term)*, I began building libraries of useful modules (I say libraries because there were various versions at various different times) — I also started my own small engineering practice, and at that point I started to give some structure and deliberate form to what became a unified library of modules.

This was primarily for the S7-300/400 range of PLCs and I did it to give me some competitive advantage; having a library of tested and usable modules saved time (and cost). I wasn’t the only engineer to do this, I would imagine we all have a library of modules that we can call on. The difference (at least in terms of this website) is that I *(personally)* wrote the modules or had them written for my company. And since I own the company, I can do what I like with them, they’re my property.

Now, while I do not in any way give up my intellectual property rights to this software *(I will continue to develop and modify it in any way that I see fit)*, this is the software that I am making available to the world at large.

Here’s where my though process comes in, the software I had written needed to be tidied up a bit, it needed to be adapted for the latest range of S7-1500 Controllers to take advantage of the changes available to this new range of PLCs (these have far more storage and capabilities than their predecessors), I had been adapting some blocks, but only as I needed them for particular projects. 

There were also some gaps in the library, modules I should have added as part of my day job, but didn’t get around to; there were also some blocks that I’ve lived with and put up with for years, knowing that they were clumsy and needed re-writing; there were also some blocks that I vaguely remembered that I had developed at some point in the past and have subsequently lost *(it’s been a long and tiring career, and I’ve misplaced certain things along the way, including at least one marriage and possibly my youth)*. All these things needed to be put right.

So I decided that rather than patch things up and shove it out the door *(the usual engineering approach)*, I would re-engineer the whole lot, I would take advantage of the new documenting facilities available with the latest version of the Siemens PLCs and its programming package (TIA Portal) and I would standardise everything, give it a common look and feel and make it right. 

*By God I would, I was going to engineer the hell out of it.*

And then I had another idea *(that’s two in as many years, I needed a cup of tea and a lie down)*; engineering is good, I like it, but I don’t like what we have to deal with, I don’t much like project managers…

There’s an old joke:

>There’s a man flying in a hot air balloon and suddenly he realises he’s lost.
>
>Reducing height, he spots another man on the ground and shouts “Excuse me Sir, can you tell me where I am?”
>
>The man below says: “Yes. You're in a hot air balloon, hovering 30 feet above this corn field”.
>
>“You must be an engineer” says the balloonist. "
>
>“I am” replies the man. “How did you know?”
>
>“Well” says the balloonist, “everything you’ve told me is technically correct, but It's of no practical use at all”.
>
>The man below thinks for a while and then replies, “You must be a project manager”.
>
>“I am” replies the balloonist, “How'd you know?”
>
>“Well” says the man, “you don’t know where you are or where you’re going, but you expect me to help. You’re in exactly the same position you were before we met, but somehow now it’s my fault”.

But there is another class of manager that is even worse: Validation Managers. These are politely and respectfully referred to as Felchers<sup>1</sup>  by engineers everywhere. They live in pharmaceutical companies *(when they’re not in cloud cuckoo land)* and they are, by-and-large, right pains to work with.

>&emsp;<sup>1</sup>&emsp; *Felcher* [noun, slang]&emsp;A well-established term in the Engineer’s Lexicon of Insults.<br>
>&emsp; &emsp; &emsp; &emsp; *Er… if you are of a squeamish nature, I shouldn’t look it up.*

Validation Managers are the Jeremy Corbyn supporters of the pharmaceutical world: entirely convinced of their own moral superiority and completely dismissive of any other argument. They have a stifling certitude; an implacable self-righteousness and they are always, always willing to be offended *(I imagine they would fit right in on social media)*.


The unfortunate thing for engineers, is that these validation managers have some power *(and by God are they pissed with it)* and they can make life difficult if you don’t jump through their hoops.

And this is the thing, I want my software to be usable in pharmaceutical systems, after all a valve is a valve whether it’s in a pharmaceutical plant or a water treatment works, it opens and it closes.

The problem is validation, in terms of *“it’s a validated system”*. If you haven’t come across the term before it probably means you haven’t been working in the pharmaceutical industry — but don’t worry, other industries are looking at it and starting to think it’s a good idea; it’s beginning to look pretty good for the validation people.

**If you are an engineer, validation will be coming soon, to a town near you &mdash; it’s time to get dressed and saddle up.**

Validation is the process of making sure a computerised system (such as a PLC and its software) does precisely what it was designed to do; specifically, it is the exercise of correctly and traceably documenting every requirement of the system and making sure that that requirement is formally and exhaustively tested. 

It usually involves a lot of signatures in black ink and a lot of stern looks *(particularly if you don’t write the date the correct way)*, validation people don’t smile much in my experience, they are not party people — *think Nurse Ratched.*


>Two validation managers were asked to validate the company flag pole to make sure it matched the correct height requirements.
>
>They go out to the flagpole with ladders, string and a tape measure, but they’re struggling to reach the top and can’t get the correct measurement.
>
>Two engineers passing by see what they’re trying to do. The engineers walk over, lift the flag pole from its footings, lay it flat on the ground and measures it from end to end. The engineers put the flag pole back, give the measurement to the managers and walk away.
>
>After they’ve is gone, one validation manager turns to the other sniggering “Isn’t that just typical of engineers? We’re looking for the height and they gives us the length.”

Validation itself is fairly straight forward; it is to some extent exactly what you would do yourself if you knew nothing about it. If you were writing some PLC software to do something, you would probably have a document that explained what the PLC was to do: *open a valve when the level reaches this value*; and you would probably write a document to test the function: *did the valve open when the level reached that value?* 

Easy — this is what engineers have always done. We don’t just build something; we build it and then test it to make sure it works properly. We didn’t just build the Apollo rocket and fire it into space, we blew lots of them up first, figuring out how to fire it into space.

Engineers have always tested things, we’re conservative, we assume we’re going to cock it up the first few times and we test and we test until we get it right. Pharma people — not so much — *think Thalidomide*; They thought Thalidomide was safe because they couldn’t find a dose high enough to kill a rat without squashing it, and it sold in nearly the same quantities as aspirin before they realised something was wrong.

I understand why pharma people are nervous *(once bitten and all that)* and why they want to get it right, the nuclear industry does it for the same reasons *(just watch [Chernobyl](https://www.youtube.com/watch?v=s9APLXM9Ei8) if you want to see engineers really screw something up)*.

What I don’t like is the secrecy that surrounds validation, it’s a bit of a club where those in the club don’t really want to explain it to those outside; they say they do (because it’s supposed to be open and transparent) but they don’t. There’s lots of information but it’s all designed to be a bit intimidating and to make you feel, well, stupid. I found the same thing when I looked at Git and version control systems. It reminds me very much of the [gramophone sketch](https://www.youtube.com/watch?v=dSINO6MKtco) by the not the nine o’clock news team. It’s the same attitude.

Lots of people make a living out of validating systems and they do so by overcomplicating it, everything is abbreviated (ICH Q9, GAMP, FEMECA) they use opaque terminology and jargon (component realisation, lifecycle support, white box, black box, pharmacovigilance), it’s how the medical and legal professions protect themselves from outsiders. *Er… engineers aren’t blameless in this department either.*

Validation itself is a good idea; it’s not a bad approach to take to every project — sometimes it’s required (pharma, nuclear, oil and gas), sometimes it’s completely over the top (PLCs playing the trombone<sup>2</sup>), but most projects benefit from the approach (even if they tone down the rigour and rules a bit, most projects don’t care how you write the date or make sure you draw a line through every blank area on a page).


>&emsp;<sup>2</sup>&emsp; For anyone who doesn’t know what a PLC is, it’s a Programmable Logic Controller, or where Siemens are concerned, just a Controller, and they pretty much control just about every automated process in the world, from rollercoasters to water treatment plants; brewing, baggage handling, power stations, car production lines, traffic lights, chemical plants, I’d be willing to bet there is a couple on the space-station; I’ve even seen one play *I’m forever blowing bubbles* on a trombone it had an air compressor connected to the mouthpiece and a three phase motor driving the slide *(engineering at its finest)*. If it’s got an electrical panel, it’s a fair bet it’s got a PLC inside it somewhere.

At this point, I was going to restructure the software, write new bits and change some old bits, and I decided to do it as a formal project and since I wanted the software to be suitable for pharma projects, I decided that it would be a *“validated”* project with all that that entails. 

It also occurred to me at this point that the project itself, with all its documents, specifications, matrices, test sheets and a practical approach to validation might be of use to some engineers too. So, I’ve made it all available I even explain how to structure all the folders on a hard drive and where to keep everything.

There is a complete copy of everything, including all the signed test sheets (with the date in the correct format to keep validation managers happy — *happy is probably the wrong word*).

<br />

Michael Gledhill <br> Chester &mdash; March 2021
