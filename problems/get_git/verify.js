#!/usr/bin/env node

var spawn = require('child_process').spawn
var concat = require('concat-stream')

// Change to just check that Git is installed

var git = spawn('git', ['--version'])

git.stdout.pipe(concat(onGit))

function onGit(output) {
  var gitOutput = output.toString().trim()
  if (gitOutput.match("git version")) {
    console.log(true)   
  }
  else console.log("There is no Git installed.")
}



