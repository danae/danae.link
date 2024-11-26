const twemoji = require('twemoji');
const $ = require('jquery');

// Import styles
require('@fortawesome/fontawesome-free/js/all.js');

// Event handler for when the document is ready
$(function() {
  // Parse the document body with the Twemoji library
  twemoji.parse(document.body, { 
    base: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/',
  });
});
