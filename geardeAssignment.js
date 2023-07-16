function marks(a, b, c) {
    var avg = (a + b + c) / 3;
    var sum = a + b + c;
    console.log("sum of 3 subjects is ".concat(sum));
    if (avg <= 70) {
        return " Grade C   \n                 Avarage of all Subject ".concat(avg, " \n                ");
    }
    else if (avg > 70 && avg < 90) {
        return "Grade  B  Avarage of all Subject ".concat(avg, "  ");
    }
    else {
        return " Geade  A  Avarage of all Subject ".concat(avg, " ");
    }
}
var math = Number(prompt("Enter the math marks  "));
console.log("Enter marks of Math : ".concat(math, " "));
var physics = Number(prompt("Enter the physics marks "));
console.log("Enter physics marks : ".concat(physics));
var chemisty = Number(prompt("Enter the chemisty marks "));
console.log("Enter Chemisty marks : ".concat(chemisty));
console.log(marks(math, physics, chemisty));
