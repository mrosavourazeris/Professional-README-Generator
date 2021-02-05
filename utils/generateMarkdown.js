const userLicense = require('./license')

const generateMarkdown = ({title, description, installation, usage, screenshot, contribute, tests, license, GitUsername, GitHubURL, email}) => {
  var licenseData;
  var licenseBadge;
  switch (license){
      case "MIT":
      licenseData = userLicense.MITLicense
      licenseBadge = userLicense.MITBadge;
      break;
      case "Mozzila":
       licenseData = userLicense.MozillaPublicLicense
       licenseBadge = userLicense.MozillaBadge;
       break;
       case "General Public License":
          licenseData = userLicense.GeneralPublicLicense
          licenseBadge = userLicense.GeneralPublicBadge;
          break;
      default: 
      break;
  }

return`# ${title}
${licenseBadge}

## Description 
${description}

---

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Screenshots](#screenshots)
* [Contributing](#contributing)
* [Tests](#tests)
* [Deployed-Site](#deployed-site)
* [Questions](#questions)
* [License](#license)


---

## Installation
${installation}

---

## Usage 
![Applicaton in use](Assets/Gifs/${usage}.gif)



---

## Screenshots 
![Finished product](Assets/Screenshots/${screenshot}.png)

---

## Contributing
${contribute}

---

## Tests
[Test of the application](${tests})

---

## Questions
My GitHub username is: ${GitUsername}
\nYou can find my GitHub profile by clicking this link: [My GitHub Profile](${GitHubURL})
\nIf you have any questions you can email me at: [My Email](${email})


---

## License
Licensed under 
\n${licenseData}
`
}

module.exports = generateMarkdown;
