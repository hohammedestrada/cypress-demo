# Init repo
git init

# Init project / create package json file
npm init --yes

# Add file ..gitignore
curl -o .gitignore https://www.toptal.com/developers/gitignore/api/node

# Install cypress
yarn add cypress
yarn add mocha
yarn add mochawesome

# Add package json
cypress open

# add to support index.js

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

# # Install cypress-xpath
yarn cypress-xpath

# create repo on github
gh repo create

# Docker
# Build image
docker build -t cypress-test-image-ecommerce:1.0.0 .
# Run container
docker run -t cypress-test-image-ecommerce:1.0.0 .

# 
docker run -it -v $PWD:/cypress -w /cypress cypress/included:5.2.0

