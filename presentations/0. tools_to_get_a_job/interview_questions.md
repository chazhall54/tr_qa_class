
# General Testing Questions

- Tell us about your dev environment
    - We used **** Answer with the OS you are used to **** and github for our repo. Our Jenkins server would then grab the files from the branch on commit and run the test. I used Visual Studio Code for my code editor and bash for my terminal. 

- What are the different Automated tests?
    - Unit and Integration test, which are developed by the Developers
    - Selenium UI test, which are developed by the Automation Test Engineers
    - API and Performance test which can be developed by the Developers, Automation Test Engineers, or the Performance Testers if we have them on the team

- What the different types of manual tests that can be automated?
	- Smoke test which verifies that all pages load the initial web elements so that we can catch server errors like 404 or 500 early
	- Sanity tests to verify main and secondary features work as expected
	- Regression tests to verify previous bugs do not resurface

# Selenium Questions
- Have you setup a project from scratch?
	- Yes the setup process is pretty simple with Webdriverio and Nodejs. First install nodejs, then with NPM install webdriverio. From there I run the config script from webdriverio. Next I make the directories and classes based on the page object model to perform a simple login test. Finally I begin making test specs. 
- Whats under the hood of Selenium?
	- Selenium is used to automate actions in the browser. 
	- When using Selenium server, the selenium commands trigger HTTP request to the browser, and the browser responds with the web element's ID and the result of the action
	- A few of the different types of Selenium commands are click, selectByVisibleText, sendkeys, getText, isDisplayed(), etc.
- How to test dynamic websites?
	- I wait for an element, then interact with it. Once I get to the area of the website I want to test, I do a few assertions. 
- implicit wait vs explicit wait
	- Implicit wait is the default wait set in our config file. Explicit waits are functions used to overwrite the wait for that step in the test spec. 
- findElement vs findElements
	- The findElement command makes an api post command to the browser and the browser responds with an object including the element ID. 
    - > For example: { Element: 06560505-01 }
	- The findElements command makes an api post command to the browser and the browser responds with an array of objects, that contains the element IDs. 
    - > For example: [ { Element: 06560505-01 }, { Element: 06560505-02 }, { Element: 06560505-03 } ]
- What type of selectors can be used?
	- Typically xpaths and css selectors are used
- Tell me about Memory Management
	- Nodejs handles the majority of the memory management with garbage collection meaning cleaning up objects from the RAM that are no longer used. 


# Project based questions
- Tell me about your file structure
	- On the root level, we have our various directories including test, reporter, and logs. We also have various files including environment secrets, gitignore and config files
	- Within our test folder, we have various directories including data, pages, specs, and utils
- What framework did you use?
	- MochaJS. This is similar to TestNG in Java. Mocha frames our test case into a Describe hook and the test steps into an IT hook
- Have you used the Page Object Model?
	- Yes, for each page of the website, we save all of the web elements xpaths (buttons, inputs, etc.) to a class, along with any functions that make the interaction with the web elements simple. 
- How did you track bugs?
	- A bug ticket for the devs was created and I also created a ticket to automate the scenario with selenium 


# CICD Questions
- What is CICD? 
	- Continuous Integration and Continuous Deployment
	- Achieved when code is pushed to the repo, built, unit test ran, deployed, selenium tests ran, and eventually code is deployed to production 
- Have you used Jenkins? 
	- Yes, Ive worked with the devops engineers to configure running the selenium tests after the deployment step in the lower environments. 
	- This includes starting a container with the dependencies installed, pulling the selenium scripts repo from github, installing dependencies, and running the tests. 
	- > If you dont know Docker, state that the devops engineer helped with building the docker container******
- Have used Selenium Grid?
	- No since the application we used was mainly used in Chrome, but I am aware that the Selenium grid allows us to run tests in virtual machines with different operating systems and browsers. 


# Do you have any questions?

- Can you tell me more about your tech stack?
	- Desktop apps: C++, Java, etc.
	- Web apps: Consist of a frontend framework, server side scripting language, and a database
		- Frontend: JQuery, React, Angular, etc.
		- Backend Server side script: Django (Python), Express (node.js), PHP, Java (Spring)
		- Database: SQL Server, Oracle, MySQL, MongoDB, postgresql

- What will you expect in the first few months from the candidate you choose?