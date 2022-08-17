const path = require('path')

console.log('name file', path.basename(__filename))

console.log('name dirname', path.dirname(__filename))

console.log('format file', path.extname(__filename))

console.log('Parse', path(__filename).name)

console.log(path.join(__dirname,'server','index.html'))