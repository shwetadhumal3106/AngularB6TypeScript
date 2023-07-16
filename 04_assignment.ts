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
class Toyota extends Car
{ Price(): number {
return 1000000;
}
getTotalSeats(): number

{ return 5;
}
Color(): string {
return 'white';
}
GPS(): string {
    return 'Toyota Car not  Supported GPS ';
}

}

class Hundyai extends Car {
    Price(): number {
    return 900000;
    }
    getTotalSeats(): number
    { return 7;
    }
    Color(): string {
    return 'gray';
    }
    GPS(): string {
        return ' Hundayi Car  Supported GPS ';
    }

    }

console.log("=========================Hundyai===========================");    
const hundyai = new Hundyai();
console.log(hundyai.GPS()); // Output: GPS is available

console.log("=========================Toyota==========================="); 
const toyota =new Toyota();
console.log(toyota.GPS());


    