'use strict'

const { spawn } = require('child_process')
const pkg = require('../package.json')

const dependencies = Object.keys(pkg.dependencies)
// const devDependencies = Object.keys(pkg.devDependencies)

spawn('echo', dependencies, {stdio: 'inherit'})
