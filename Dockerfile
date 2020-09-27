FROM cypress/included:5.2.0

WORKDIR /cypress

COPY ./cypress ./cypress
COPY ./package.json ./package.json
COPY ./cypress.json ./cypress.json

RUN npm i && npm run cypress:run


