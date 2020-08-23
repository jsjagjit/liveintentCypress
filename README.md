# Liveintent Basic Testing


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

You need to install Cypress in order to run the tests provided in this project.

```
Cypress
Firefox (or browser of your choice)
```

### Installing

To install Cypress, install the latest version of Node.js from https://nodejs.org/en/download/. 

Afterwards, run the following command in your terminal to install Cypress (globally): 

```
npm install cypress
```

This will install Cypress locally as a dev dependency for your project.

```
cd /your/project/path
npm install cypress --save-dev
```

## Cloning repo and running tests

```
git clone https://github.com/jsjagjit/liveintentCypress.git

cd liveintentCypress

npx cypress run -b firefox

```

### Break down into end to end tests

Currently, this project has one JS-test, ```liveintent.js```. If will perform the following steps:

1. Open https://www.liveintent.com/
2. Verify Get Started button is on the page
3. Click on the Get Started button
4. Verify it takes you to the https://www.liveintent.com/get-in-touch/ page
5. Verify the presence of CONTACT US button
