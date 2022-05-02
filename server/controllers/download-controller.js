// recipe-manager/server/controllers/recipes-controller.js

// Import database
const knex = require('../db')

exports.callscript = async (req, res) => {
  console.log('in download-controller exports.callscript')
  console.log(`url is: ${req.body.url}`)
  const {spawn} = require('child_process');

  const childPython = spawn('python3', ['src/lib/download.py', req.body.url]);
  
  childPython.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
  });
  
  childPython.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
  });
  
  childPython.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
  });
}