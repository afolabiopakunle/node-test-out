let rect = require("./rectangle");

let solveRect = function (x, y) {
    if (x <= 0 || y <= 0) {
        console.log("Error")
    } else {
        console.log("Perimeter is: " + rect.perimeter(x, y));
        console.log("Area is: " + rect.area(x, y));
    }
}


solveRect(45, 87)