abstract class Car {
    // simple method 
    Wheel() : string {
        return '4 wheeler';
    }

    CheckAC() : string {
        return 'Ac is available'
    }
  // non abstract method 
    CallFacility() : string {
        return 'Call facility supported';
    }

    abstract Price() : number;
    abstract getTotalSeats(): number;
    abstract Color() : string ;
}

class Hundyai extends Car {
    Price(): number {
       return 9000000;
    }
    getTotalSeats(): number {
    return 5;
    }
    Color(): string {
       return 'Gray';
    }

}


let hundyai = new Hundyai();

console.log(hundyai.CallFacility());

class Tata extends Car {
    Price(): number {
       return 9000000;
    }
    getTotalSeats(): number {
    return 5;
    }
    Color(): string {
       return 'Gray';
    }

}


let Tata = new Hundyai();

console.log(hundyai.CallFacility());

const hundyai = new Hundyai();
console.log(hundyai.GPS()); // Output: GPS is available
