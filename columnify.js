import columnify from 'columnify'

var columns = columnify([{
  name: 'mod1',
  version: '0.0.1'
}, {
  name: 'module2',
  version: '0.2.0'
}])

console.log(columns)