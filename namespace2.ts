namespace UserUtils
{
     export class Users{
        getName(){
            return "Shweta Dhumal"
        }
    }
}

let u1=new UserUtils.Users();
console.warn(u1.getName())


// this is command for run this namespace in terminal
// tsc namespace1.ts --outfile out.js