function hypotenuseCalc(base, height) {
    var result = Math.sqrt((base * base) + (height * height));
    return result.toFixed(2);
}

var shapeBase = parseInt(prompt('Qual è la base del triangolo?'));
var shapeHeight = parseInt(prompt("Qual è l'altezza del triangolo?"));

var triangoloRet = {
    base: shapeBase,
    height: shapeHeight 
}

var hypotenuse = parseFloat(hypotenuseCalc(triangoloRet.base, triangoloRet.height));

console.log('Perimetro = ' + (triangoloRet.base + triangoloRet.height + hypotenuse));

console.log('Area = ' + (triangoloRet.base*triangoloRet.height/2));