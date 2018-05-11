'use strict'

const fs = require('fs')
const path = require('path')

const readFile = (filePath, charset) => new Promise((resolve,reject) => {
  fs.readFile(filePath, charset, (err, result) => {
    if (err) return reject(err)
    resolve(result)
  })
})

/* with promise
readFile(path.join(__dirname, '..', 'package.json'), 'utf8')
  .then((result) => JSON.parse(result).dependencies)
  .then((dependencies) => console.log(dependencies))
  .catch((error) => console.log('ERROR:', error))
  */

/* async/await
*/
const read = async () => {
  try {
    const result = await readFile(path.join(__dirname, '..', 'package.json'), 'utf8')
    console.log(JSON.parse(result).dependencies)  
  } catch (error) {
    console.log('ERROR:', error)
  }
} 

read()
