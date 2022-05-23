const index = require('lodash.get')

const get = (path, data) => {
    let obj = JSON.stringify(data)
    obj = JSON.parse(obj)
    return console.log(index(data, path))    
}




module.exports = { get }