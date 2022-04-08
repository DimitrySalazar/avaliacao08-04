const areaFunctions = require('./shapeArea.js')

const rInput = process.argv[2]

const rValue = areaFunctions.circleArea(rInput);

console.log(`${rValue} é seu raio`)
