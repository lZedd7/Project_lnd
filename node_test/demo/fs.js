const fs = require('fs')

const path = require('path')

// fs.mkdir(path.join(__dirname,'test'),(err) => {
//  if(err) {
//     throw err
//  }

//  console.log('File create')
// })

const filePath = path.join(__dirname, 'test', 'text.txt')

// fs.writeFile(filePath,'Hello NodeJs', (err) => {
//     if ( err) {
//         throw err
//     }

//     console.log('File Create')

// })

fs.appendFile(filePath,'\nHello NodeJs', (err) => {
    if ( err) {
        throw err
    }

    console.log('File Create')
    
})

fs.readFile(filePath, 'utf-8', (err, content) => {
    if(err) {
        throw err
    }
    console.log(content)
    // const data = Buffer.from(content)
    // console.log('Content:', data.toString() )
})