
function marks(a:number ,b:number ,c:number){
    var avg:number=(a+b+c)/3;
    var sum:number=a+b+c
    console.log(`sum of 3 subjects is ${sum}`)
    

    if(avg<=70)
    {
        return ` Grade C   
                 Avarage of all Subject ${avg} 
                `;
    }
    else if(avg>70 && avg <90)
    {
        return  `Grade  B  Avarage of all Subject ${avg}  `
    }
    else
    {
        return ` Geade  A  Avarage of all Subject ${avg} `
    }
}

var math=Number(prompt(`Enter the math marks  `));
console.log(`Enter marks of Math : ${math} `);
var physics=Number(prompt(`Enter the physics marks `));
console.log(`Enter physics marks : ${physics}`);
var chemisty=Number(prompt(`Enter the chemisty marks `));
console.log(`Enter Chemisty marks : ${chemisty}`);



console.log(marks(math,physics,chemisty));