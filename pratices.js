var n1 = 10;
console.log(n1);
var n2 = 20;
console.log(n2);
var b1 = true;
var b2 = false;
console.log(b1);
console.log(b2);
var s1 = "You are creater of job";
console.log(s1);
var s2 = "You are get creater";
console.log(s2);
var center = {
    x: 0,
    y: 0,
};
var test = {
    name: "Shweta",
    id: 12356778
};
// let exampleAny: any;
// exampleAny="12nnlkn";
// console.log(exampleAny);
var value;
value = "Diamond";
if (typeof value === "string") {
    console.log(value.trim());
}
alert("Are you there");
confirm("Sure");
var data = prompt("Enter your package");
console.log(data);
// function test(){
//     return b3=true;
//     console.log(b3);
// }
// console.log(test());
function show(a, b, c) {
    var avrage = a + b + c / 3;
    console.log("Avrage of Subject ".concat(avrage));
    var sum = a + b + c;
    console.log("Sum of all subject is ".concat(sum));
    if (avrage < 70) {
        return "Grede is c";
    }
    else if (avrage > 70 && avrage < 90) {
        return "Greade is B";
    }
    else
        (avrage > 90);
    {
        return "Greade is A";
    }
}
var math = Number(prompt("Enter your math Marks "));
console.log("Enter Your math marks ".concat(math));
var physics = Number(prompt("Enter your math Marks "));
console.log("Enter Your math marks ".concat(physics));
var chemisty = Number(prompt("Enter your math Marks "));
console.log("Enter Your math marks ".concat(chemisty));
console.log(show(math, physics, chemisty));
