const areaFunctions = require('./shapeArea.js')

const sInput = process.argv[2]

const sValue = areaFunctions.squareArea(sInput);

console.log(`${sValue} é a área do seu quadrado`)