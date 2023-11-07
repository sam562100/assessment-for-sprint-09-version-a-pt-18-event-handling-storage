# Event Handling and Storage Assessment Project

Clone the GitHub repository from the green button below.

Open the "index.html" file in a browser. The HTML page contains a list of tests
that you must make pass.

For example, the first test reads:

> **PROBLEM 1**
>
> * Button `id`: `bubble-trouble`
>
> When you click the solid orange rectangle below with the text "bubble trouble"
> in it, then the rectangle surrounding it should _not_ turn red because you
> have stopped the propagation of the event up the stack. Write code in the
> "your-code.js" file to make that happen.

Open the "your-code.js" and write the code to make that happen. If you do it
correctly, then you can click the button and see the button **NOT** turn red.

**Don't forget to refresh your page when you make changes in the JavaScript code!**

Make all of the tests pass by writing code in __your-code.js__ and interacting
with the test in the way specified. Do not change any code in the HTML or CSS files.

## Installing Cypress and Running the tests

This installation will take a long time! While you are waiting for the
installation, follow the directions above.

Run `npm install` to install the Cypress testing library.

> For Ubuntu/Linux/WSL users, you may have to update your environment to support
> Cypress. Based on the [docs for Cypress environment dependencies], run the
> following commands to make sure your environment is up to date. **If you
> already did this for the practice assessment, you do not need to do it
> again!**

```shell
sudo apt-get update
sudo apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
```

Run `npm test` to make sure you pass all the test specs.

## Submitting your project

1. Re-run all unit tests and fix any syntax errors that are crashing the tests. If
the unit tests crash, or do not run, you will receive a zero for the coding
portion of the assessment
2. Delete the `node_modules` directory
3. Zip up your folder
4. Upload it

[docs for Cypress environment dependencies]: https://docs.cypress.io/guides/continuous-integration/introduction#Dependencies
# assessment-for-sprint-09-version-a-pt-18-event-handling-storage
