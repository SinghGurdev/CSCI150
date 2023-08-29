# Fresno-State-Class-Info
Fresno State HIPS symposium video submission, Fall 2022: https://youtu.be/pon91bESLsQ

This is a website created by L2G2 for CSCI 150.

This website will contain Fresno State class and professor information. 

This dynamic website only uses a home page to load in all the information based on what the users want to know.
Currently:
  There are very few syllabi that are available.
  All Computer Science courses and professors are being used.
  All code that is runnable is inside of the "template" folder.

Version: Final Prototype





Fresno State Class Info SRS Documentation:



**Project name: Fresno State Class Info**

![](readMeImages/Aspose.Words.119f0d5e-f2bd-481e-b946-62b268438400.001.png)

**Date: December 14, 2022**

![](readMeImages/Aspose.Words.119f0d5e-f2bd-481e-b946-62b268438400.002.png)

**By:** **Lab 2, Group 2**

![](readMeImages/Aspose.Words.119f0d5e-f2bd-481e-b946-62b268438400.003.png)

**Version: Prototype**

![](readMeImages/Aspose.Words.119f0d5e-f2bd-481e-b946-62b268438400.004.png)

**Team: L2G2**

**Eric Yang - Project Manager**

**Joseph Buskirk - Developer**

**Gurdev Singh – Developer**

**Jonathan Wong- UI/UX**

**Romeo Vanegas - UI/UX**

![](readMeImages/Aspose.Words.119f0d5e-f2bd-481e-b946-62b268438400.004.png)

1. # **Introduction**
The purpose of this document is to present a detailed description of a website called Fresno State Class Info (FSCI) and explain the benefits that current and future students will gain being able to use it. This document was created for students and instructors to understand the objectives, goals, and the impact this website can make on Fresno State.

|**1.1 	Product scope**|<p>FSCI will allow Fresno State students to learn what to expect from classes and professors. This will not only give students a head start but allow for easier planning with their counselors when it’s time to register.</p><p></p><p>FSCI will be a website for Fresno State students. This website will be designed for ease of use for students by providing tools, navigational links, and information for them to use. The end goal for this website is to become a repository containing all the information that a student may need to succeed.</p><p></p>|
| :- | :- |
|||
|**1.2 Product value**|Fresno State students will be able to find all the information that they will need in one place, saving them time, research and reducing anxiety. Current and Future students will get up to date information about all their classes, view information about a professor’s teaching techniques, areas of expertise and more. Students, benefit by thinking ahead of time of what classes they will need and what electives they want. |
|||
|**1.3 Intended audience**|<p>The primary intended audience will be Current and Future Fresno state students. They stand benefit the most from FSCI, as they can gather a lot of information about classes, professors and in general what they can expect.</p><p><br>A secondary audience such as counselors and professors, can also benefit from this website. Counselors can utilize this information about instructors and classes which would allow them to make much more informed decisions when consulting students. Professors and counselors alike can benefit from the feedback loop created by their peers and could be a potential benefit in unseen ways.</p>|
|||
|**1.4 Intended use**|Users will be able to use keywords into a search bar or go through a list of classes or professors to see which classes they may be interested in or would like to discover. This website will contain information for the users based on what they want to view.|
|||
|**1.5 General description**|<p>Fresno State Class Info will include information about professors, classes, and user submitted syllabuses (when available) to corresponding courses. Links to 3rd party websites that can provide additional information regarding any topics covered by FSCI may be included.</p><p></p><p>FSCI will include navigational bars and a search function will guide students to areas of interest. These navigational bars will be split into two different sections: the class navigation bar and the professor navigation bar. Both class and professor pages will be listed alphabetically. The search bar will allow both classes and professors to be searchable and filter results using a predictive like search. Additional features can be added, such as a roadmap maker and communications channel.</p><p></p><p>The front-end or client facing portions of FSCI will include, HTML, CSS, and JavaScript allowing the website to be accessible, detailed, and easy to use. On the back end, SQL will be used to handle the database information and PHP will be used to allow the website to become interactive.</p><p></p>|








# **2 Overall Description**

|**2.1 Product Perspective**|<p>This is a self-contained database that will contain:</p><p>- Class Information:</p><p>&emsp;&emsp;- The information will include a brief description and what each </p><p>&emsp;&emsp;- student should expect from the class. It will also include the most  </p><p>&emsp;&emsp;- recent and available syllabus for the class.</p><p>- Professor Information:</p><p>&emsp;&emsp;- The information will include the professor’s name, email, and </p><p>&emsp;&emsp;- title. A description of the professor’s teaching methodology with </p><p>&emsp;&emsp;- with a history/index of past and present courses being taught</p><p>- Helpful Links:</p><p>&emsp;&emsp;- These helpful links can range anywhere from YouTube    </p><p>&emsp;&emsp;- videos/channels to web documents that share relevant information </p><p>&emsp;&emsp;- about each class. These links can also include websites that a </p><p>&emsp;&emsp;- professor may use often in class.</p><p>![](readMeImages/Aspose.Words.119f0d5e-f2bd-481e-b946-62b268438400.007.png)</p><p>This diagram gives the basic overview of how Fresno State Class Info will function. The user essentially queries a professor, or a class and they will get the available information about them.</p>|
| :- | :- |
||<p></p><p></p><p></p>|
|**2.2 Product Functions**|<p>The main purpose of FSCI facilitate researching classes and knowing more about their instructors. This group will currently be working as the administrator to control the database and the information being served to the students. </p><p>![](readMeImages/Aspose.Words.119f0d5e-f2bd-481e-b946-62b268438400.008.png)</p><p>This diagram shows the relationship and the flow between the users, the developers (L2G2), and the website.</p><p></p>|
||<p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>|
|**2.3 User Classes and Characteristics** |<p>Current Student:</p><p>- Undergraduate or Graduate student</p><p>- Most common user</p><p>- Student wanting to be more informed about class/instructor</p><p>Future Student:</p><p>- Unsure about what to expect</p><p>- Wanting to prepare for counselor - student education plan.</p><p>- Set course trajectory</p><p>Parent, Faculty or any other 3rd parties:</p><p>- Least common user</p><p>- Parent may use FSCI for a qualifying child.</p><p>- Faculty may view how they’re perceived.</p><p>- General information gathering</p><p></p>|
|<p></p><p></p><p></p><p></p><p></p>||
|**2.4 Operating Environment** |<p>Fresno State Class Info will be operational for all Internet browsers, including all features such as search and navigation. A stable internet connection is needed to utilize this product.</p><p>The hardware to use this product:</p><p>- Basic input devices (keyboard/mouse/touch screen)</p><p>- Windows or Mac operating systems supported.</p><p>The software environment:</p><p>- Front-end: HTML / CSS / JavaScript</p><p>- Back-end: JavaScript / MySQL / Python / Ajax / PHP</p><p>- Database: SQL </p><p></p>|
|<p></p><p></p><p></p><p></p><p></p>||
|**2.5 Design and Implementation Constraints**|<p>- Not optimized for mobile viewing, yet. </p><p>- Syllabi for some classes may be unavailable</p>|





|**2.6 User Documentation**|Will be available in later versions.|
| :- | :- |
|<p></p><p></p><p></p><p></p>||
|**2.7 Assumptions and Dependencies**|<p>Assumptions:</p><p>- No errors in the code</p><p>- Fast accessible data</p><p>- Search friendly system</p><p>- Accessible from anywhere with a stable internet connection</p><p>- All information on this website is available to all users</p><p>Dependencies</p><p>- Hardware and software are up-to-date and can render the website.</p><p>- The website is fully operational and bug free.</p><p>- All data and information inside the database are accessible and accurate</p><p>- AWS servers are running and accessible</p><p></p>|



















# **3 External Interface** 

|**3.1 User Interfaces**|<p>- Site will follow W3c HTML5 accessibility standards</p><p>&emsp;&emsp;- <https://www.w3.org/standards/webdesign/accessibility#wai></p><p>- Screen reader friendly.</p><p>- Search bar:</p><p>![](readMeImages/Aspose.Words.119f0d5e-f2bd-481e-b946-62b268438400.009.png)</p><p>- Navigation</p><p>![](readMeImages/Aspose.Words.119f0d5e-f2bd-481e-b946-62b268438400.010.png)</p><p></p>|
| :- | :- |
||<p></p><p></p>|
|**3.2 Product Functions**|<p>FSCI will be hosted by Amazon Web Services.</p><p>- MySQL (the back end that interacts with the front end)</p><p>- Smartphone, Tablet, PC will be the typical users.</p><p></p>|
||<p></p><p></p><p></p>|
|**3.3 Software Interfaces**|<p>- OS – Windows, Linux or Mac OS</p><p>- Front End - These will be used for styling the webpages</p><p>&emsp;- Html - will hold the data on the webpage</p><p>&emsp;- CSS - used for styling the page</p><p>&emsp;- JavaScript - implemented to allow the page to be dynamic</p><p>- Back End - These will be used for distributing data to our users</p><p>&emsp;- PHP – will be utilized to fetch data for the website</p><p>&emsp;- Python - used to scrape data from the web that will be used on the website</p><p>- Database - This is where most of our data is catalogued and available to retrieve when necessary.</p><p>&emsp;- MySQL</p><p></p>|
||<p></p><p></p><p></p>|
|**3.4 Communication Interfaces**|<p>- Communication by use of emails will be implemented in the future.</p><p>&emsp;- This will be in the form of the “Contact us” button at the top of the screen</p><p>- Communication from the users and the server will be done over HTTP</p><p>&emsp;- This will allow users to make and receive responses through our website.</p><p></p>|


















# **4 System Features**

|**4.1 Buttons**|<p>User clickable navigation buttons will provide user access to: Faculty, Classes and About page.</p><p></p><p>- Class pages will have additional tabs for additional information such as: Class description, Syllabus, Additional Links.</p><p></p><p>- Faculty Pages will have tabs for: Professor information, Class List, Additional links.</p><p></p>|
| :- | :- |
||<p></p><p></p><p></p>|
|<p>**4.2 Search Bar**</p><p></p>|Site search has an autocomplete feature and will suggest potential search result based on completed input. |
||<p></p><p></p><p></p>|
|**4.3 Links**|These links will provide more information about the class or instructor. The links provided will send the user to 3rd party sites, professor pages, videos, or other useful websites that would help the student learn more about the classes or professors. |










# **5 Other Features and Requirements**

|**5.1 Performance Requirements**|The system must be interactive, and the delay should be minimal. There will be a database where we can draw our data from by using mySQL, by using mySQL. The SQL code should have little to no delays. Through the uses of the function is section 4, the operations should be performed and completed within a small amount of time.|
| :- | :- |
||<p></p><p></p><p></p>|
|**5.2 Safety Requirements**|<p>Fresno State Class Info is not responsible for any possible damage, loss, or harm caused by clicking on any additional links. Be aware and carefully examine each link to ensure your safety. </p><p></p>|
||<p></p><p></p><p></p>|
|**5.3 Security Requirements**|Fresno State Class Info is not responsible for any possible malware caused by clicking on any additional links. Be sure to carefully examine each link to ensure your safety.|
|||
|**5.4 Software Quality Attributes**|<p>- Accessible: Especially for those with screen readers.</p><p>- Dynamic: Periodically updated for calendar year events</p><p>- Availability: Will be hosted on the cloud to be always available.</p><p>- Correctness: Data will be as accurate as possible.</p><p>- Maintainability: Simplicity leads to an easier dynamic for maintenance. </p><p>- Reliability: The data should not corrupt on the user</p><p>- Reusability: The Data should be accessible to any users at any time</p><p>- Usability: Simple and clear UI/UX design.</p><p></p>|

