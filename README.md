[![Badge ServeRest](https://img.shields.io/badge/API-ServeRest-green)](https://github.com/ServeRest/ServeRest/)

<h2>Pre-requisites:</h2>
<li>Node.js installed</li>
<li>NPM or Yarn installed</li>
<hr>
<h2>What you need to know before you run it</h2> 
Within the e2e folder you will find two subfolders: api and ui. The test cases will be in the correspondig folder.

The test cases assume that there is a user registered in the system using a specific email. But don't worry, a logic has been implemented in the code to check before each test suite if there's a user with that email, if don't the automation will create this user automatically.
<h2>How to run</h2>
You can run the project using the Cypress UI or from CLI (if you want to integrate it to a CI/CD process.

Command to open Cypress UI (example using npm):
  
    
    npm run abi-open
    
    
 
    
    
If you want to run from CLI
  
    
    npx cypress run
    
    
 Running Cypress using Command Line will make the testes run all headlessly!

 In case you want to change the browser of execution:
  
    
    npx cypress run --browser {browser}
    
    
