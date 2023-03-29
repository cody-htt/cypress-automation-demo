<p align="center">
  <a href="" rel="noopener">
 <img width=260px height=100px src="https://cdn.am-online.com/media/1/root/atg_w268.jpg" alt="Project logo"></a>
</p>

<h1 align="center">cypress-atg-test</h1>

---

<p align="center"> 
    <strong>Tung Huynh - Cypress automation test project for ATG</strong>
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Using DockerFile](#using_dockerfile)

## 🧐 About <a name = "about"></a>

This is a Github repository belonging to user "cody-htt" and is named "cypress-atg-test". The
repository contains code related to testing an application using the Cypress testing framework.
Specifically, the tests in this repository appear to be related to the Automotive Transformation
Group (ATG) interview test for QA Engineer position.

The README file of this repository provides more detailed information on how to set up and run the
tests. Additionally, the repository may contain other relevant files and resources related to the
testing process.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for
development and testing purposes. See [Prerequisites](#prerequisites) and
[Steps to run cypress test](#steps_to_test) for notes on how to deploy the project on a live system.

<details open>

<summary>Instruction to executing the test</summary>

### Prerequisites <a name = "prerequisites"></a>

- To use allure-commandline to generate allure-reports, you need to install java 8 at least or
  higher version. Can follow my below instruction:

  For Windows:

  1. Download the Java 8 installer for Windows from the Oracle website
     https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html **_(register an
     oracle account if you don't have one)_**
  2. Run the installer by double-clicking on the downloaded file.
  3. Follow the instructions provided by the installer to complete the installation process.
  4. Verify that Java 8 is installed by opening a Command Prompt and running the following command:

  ```
  java -version
  ```

  For MacOS:

  1. Install Homebrew by running the following command in a Terminal window:

  ```
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  ```

  2. Use Homebrew to install Java 8 by running the following command:

  ```
  brew install openjdk@8
  ```

  3. Verify that Java 8 is installed by opening a new Terminal window and running the following
     command:

  ```
  java -version
  ```

### Steps to run cypress test <a name = "steps_to_test"></a>

1. Clone the repository using the following command

```
git clone https://github.com/cody-htt/cypress-atg-test.git
```

2. Navigate to the cloned repository using the following command:

```
cd cypress-atg-test
```

3. Install the necessary dependencies using the following command:

```
npm install
```

4. Run the tests using the following command:

```
npm run runAllTestElectron:Headless
```

or

```
npm run runAllTestElectron:Headed
```

5. Open _index.html_ in the allure-reports folder to view the test results or executing the
   following command under the `cypress-atg-test` folder

```
allure open allure-reports
```

</details>

## 🐳 Using DockerFile <a name = "using_dockerfile"></a>
