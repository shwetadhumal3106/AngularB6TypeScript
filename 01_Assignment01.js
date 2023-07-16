var mathScore = parseFloat(prompt("Enter Your Math Score:  "));
var physicsScore = parseFloat(prompt("Enter Your Physics Score"));
var chemScore = parseFloat(prompt("Enter Your Chemisty Score"));
var avarageScore = (mathScore + physicsScore + chemScore) / 3;
var grade;
if (avarageScore < 70) {
    grade = "C";
}
else if (avarageScore >= 70 && avarageScore < 90) {
    grade = "B";
}
else {
    grade = "A";
}
