# Setup

Clone this repository and the sparkol interview authentication service repository

```bash
git clone https://github.com/mbickell/sparkol-tech-test.git
git clone https://github.com/Sparkol/interview-authentication-service.git
```

Follow the instructions at https://github.com/Sparkol/interview-authentication-service/blob/master/README.md to finish setting up the API

In `sparkol-tech-test` run an `npm install`

## Start

In both repositories run an `npm start`

Use the logins provided by `interview-authentication-service` to access the application

### Notes

Due to building this website on Windows, the `npm start` command in the `interview-authentication-service` had to be modified to this:

```json
    "start": "nodemon index.js",
```

Instead of this:

```json
    "start": "./node_modules/.bin/nodemon index.js",
```
