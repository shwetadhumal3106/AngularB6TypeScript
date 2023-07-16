var n1: number=10;
console.log(n1);

var n2=20;
console.log(n2);

var b1:boolean=true;
var b2:boolean=false;

console.log(b1);
console.log(b2);

var s1:string="You are creater of job";
console.log(s1);


var s2:string=`You are get creater`;
console.log(s2);


let center : {x:number,y:number}={
    x:0,
    y:0,
}

let test:{name:string,id:number}={
    name:"Shweta",
    id:12356778
}


// let exampleAny: any;
// exampleAny="12nnlkn";
// console.log(exampleAny);

let value: unknown;

value="Diamond";

if(typeof value===`string`)
{
    console.log(value .trim ());
}


alert("Are you there");
confirm("Sure");
var data=prompt("Enter your package");

console.log(data);
// function test(){
//     return b3=true;
//     console.log(b3);
// }
// console.log(test());

function show(a:number,b: number,c:number){
   var avrage=a+b+c/3
   console.log(`Avrage of Subject ${avrage}`);
   var sum=a+b+c;
   console.log(`Sum of all subject is ${sum}`);
    


if(avrage<70)
{
    return `Grede is c`;

}
else if(avrage>70 && avrage<90)
{
    return `Greade is B`;

}else (avrage>90)
{
     return `Greade is A`;
}
}

var math=Number(prompt(`Enter your math Marks `));
console.log(`Enter Your math marks ${math}`);

var physics=Number(prompt(`Enter your math Marks `));
console.log(`Enter Your math marks ${physics}`);

var chemisty=Number(prompt(`Enter your math Marks `));
console.log(`Enter Your math marks ${chemisty}`);



console.log(show(math,physics ,chemisty))
