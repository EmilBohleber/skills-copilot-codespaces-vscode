// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

// Create an event handler for comments
app.post('/events', async (req, res) => {
  const { type, data } = req.body;

  if (type === 'CommentCreated') {
    // Check if the comment has a status of 'pending'
    const status = data.content.includes('orange') ? 'rejected' : 'approved';

    // Emit an event to the