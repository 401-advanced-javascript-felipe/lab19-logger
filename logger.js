'use strict';

// require('dotenv').config();

const Q = require('@nmq/q/client');

const files = new Q('files'); // Connect to files Queue
const database = new Q('database'); // Connect to database Queue


files.subscribe('save', payload => {
  console.log('File turned to uppercase');
  console.log(payload);
});

files.subscribe('file-error', payload =>{
  console.log('error');
  console.log(payload);
});



const dbEvents = ['create', 'read', 'update', 'delete'];

dbEvents.forEach(event => {
  database.subscribe(event, payload => {
    console.log(`${event} happened`, payload);
  });
});


console.log(files.subscriptions());
console.log(database.subscriptions());
