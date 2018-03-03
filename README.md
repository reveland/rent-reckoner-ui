# Rent Reckoner

## Install
You need npm to start the app. The easiest way to get npm is to install node.js ([download link](https://nodejs.org/en/download/))

Download dependencies
```
npm install
```

## Run
Run this command in the root directory 
```
npm start
```

- You need a running [rent-reckoner-service](https://github.com/reveland/rent-reckoner-service) in localhost

- To see your habitation bills you need to change the `habitation_id` field in `index.js`

## What it can do

- visualise an habitant
  - habitant id is burned in
  - habitant data url
    - 'http://127.0.0.1:5000/habitations/' + habitation_id + '/residents'
  - billls data utl
    - 'http://127.0.0.1:5000/habitations/' + habitation_id + '/bills'
  - the data come from 2 http endpoint, so it can be easily replaced