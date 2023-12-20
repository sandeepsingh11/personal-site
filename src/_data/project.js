// set project url
let projectUrl = 'https://sandeepdev.com';
if (process.env.ELEVENTY_ENV === 'dev') projectUrl = 'http://localhost:8080';

module.exports = {
    env: process.env.ELEVENTY_ENV,
    url: projectUrl
};