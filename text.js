const fs = require('fs')
const usersString = fs.readFileSync('./db/users.json').toString()
const usersArray = JSON.parse(usersString)
// 把json字符串转变成对应的js数据类型(array)
console.log(usersArray)
// 写数据库
const user3 = { id: 3, name: 'tom', password: 'yyy' }
usersArray.push(user3)
const string = JSON.stringify(usersArray)
// 把js对象转变成JSON字符串
console.log(string)
fs.writeFileSync('./db/users.json', string)
// string写入文件